# MIT License
#
# Copyright (c) 2018 LASER-UMASS
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.
# ==============================================================================
# This is the main driver program that is used to: (a) extract relevant sections 
# from ECMA-262 document, (b) generate test templates for extracted secrions, and 
# (c) generate executable tests by instantiating generated test templates.
# ==============================================================================

import os
import sys
import subprocess
import argparse
from extractRelevantSections import RelevantSection 
from generateTestTemplates import TestTemplate 
from generateExecutableTests import ExecutableTest
from printprogress import printProgressBar
from time import sleep
import re
from bs4 import BeautifulSoup

class Swami(object):
	def __init__(self, inputfilepath, abstractfunfilepath, outputdir, compiler):
		self.input_spec = inputfilepath
		self.abstractfunc_file_path = abstractfunfilepath
		self.output_dir = outputdir
		self.templatefilepath = self.output_dir + "\ecma262_templates_improved.js"
		self.rel_sec_extractor = RelevantSection()
		self.relevant_spec = self.output_dir + "\\" + self.input_spec.split("\\")[-1].split(".")[0] + "_relevant_sections.txt"
		self.relevant_spec_exists = os.path.isfile(self.relevant_spec)
		self.test_template_generator = TestTemplate(self.relevant_spec, compiler)
		self.executable_test_generator = ExecutableTest(self.templatefilepath, self.output_dir, compiler)
		self.extracted_sections = {}
		self.compiler = compiler
		self.included_abstract_functions = []

	# returns a dictionary of relevant sections (sections that involve 
	# exceptions or boundary conditions) where key is the section title  
	# and value is the body of the section
	def extractRelevantSections(self, okapi=False):
		print("Extracting relevant sections from: ", self.input_spec)
		filepath = self.relevant_spec
		def funcReplace(match):
			# print(match.group(0))
			justFunc = match.group(0)
			justFunc = re.sub(r'<.*?>', "", justFunc)
			return "FUNC" + justFunc  # + "("

		def bracketVAR (match):
			justVAR = match.group(0)
			justVAR = justVAR.replace('[[', "[[VAR")
			return justVAR  # + "("

		# def toCaps(match):
		# 	return match.group(0).upper()

		def cleanupText(strL):
			strL = strL.replace("<var>", "VAR")
			strL = strL.replace("</var>", "")
			funcSearch = re.search(r'<a href="#sec.*?</emu-xref>\(', strL, re.M | re.I)
			if funcSearch:
				strL = re.sub(r'<a href="#sec.*?</emu-xref>\(', funcReplace, strL)
			strL = strL.replace('\n', '')
			strL = strL.replace("<sup>", "--EXP0--")
			strL = strL.replace("</sup>", "--EXP1--")
			strL = re.sub(r'<ol>', " ", strL)
			strL = re.sub(r'</ol>', " ", strL)
			strL = re.sub(r'<ul>', " ", strL)
			strL = re.sub(r'</ul>', " ", strL)
			strL = re.sub(r'</li>', " ", strL)
			strL = re.sub(r'<.*?>', "", strL)
			strL = re.sub(r'\[\[.*?\]\]', bracketVAR, strL)
			strL = strL.replace("  ", " ")
			return strL

		def writeSubSections(cont, level, listType):
			listTag = "<" + listType + ">"
			for l in cont:
				strL = str(l)
				headingStr = '*' + str(level) + '*'
				if listTag not in strL:
					cleaned = cleanupText(strL).strip()
					# if ", let" in cleaned and re.sub(r'<.*?>', "", cleaned.split()[0]).lower() == "if":
					if ", let" in cleaned and cleaned.split()[0].lower() == "if":
						# print(headingStr, cleaned)
						cleaned2 = cleaned.replace(", let", ", then--SPLIT--Let")
						cleanedSpl = cleaned2.split("--SPLIT--")
						# print(cleanedSpl[0])
						# print(cleanedSpl[1])
						outFile.write(headingStr)
						outFile.write(cleanedSpl[0])
						outFile.write("\n")
						outLine = [cleanedSpl[1]]
						writeSubSections(outLine, level + 1, listType)
					# elif "else" in cleaned.split()[0].lower() and len(cleaned.split()) > 1 and ',' not in cleaned.strip().split[-1]:
					# 	cleaned2 = cleaned.replace("Else ", "Else if ")
					elif "else" in cleaned.split()[0].lower() and len(cleaned.split()) > 1:
						spl0 = cleaned.split()[0]
						outFile.write(headingStr)
						outFile.write("Else,")
						outFile.write("\n")
						spl1 = cleaned.split(spl0)[1].strip()
						# print(headingStr, cleaned)
						# print(spl1)
						outLine = [spl1]
						writeSubSections(outLine, level + 1, listType)
					elif " else" in cleaned.lower():
						cleaned2 = cleaned.replace(", else", ".--SPLIT--Else, ")
						cleaned2 = cleaned2.replace("; else", ".--SPLIT--Else, ")
						cleanedSpl = cleaned2.split("--SPLIT--")
						outFile.write(headingStr)
						outFile.write(cleanedSpl[0])
						outFile.write("\n")
						# print(headingStr, cleaned)
						# print(cleanedSpl[1])
						outLine = [cleanedSpl[1]]
						outLevel = level - 1
						if "return" in cleanedSpl[0].lower():
							outLevel = level
						writeSubSections(outLine, outLevel, listType)
					else:
						outFile.write(headingStr)
						outFile.write(cleaned)
						outFile.write("\n")
				else:
					preStr = strL.split(listTag)[0]
					cleaned = cleanupText(preStr)
					# print(headingStr, cleaned)
					outFile.write(headingStr)
					outFile.write(cleaned)
					outFile.write("\n")
					cont2 = l.find(listType).contents
					writeSubSections(cont2, level + 1, listType)

		# inFile = open("ECMAScript2018LanguageSpecification.html", 'r', encoding="utf8")
		inFile = open(self.input_spec, 'r', encoding="utf8")
		outFile = open(filepath, 'w', encoding="utf8")
		soup = BeautifulSoup(inFile, 'html.parser')
		emu = soup.select('emu-clause')
		relSecRaw = []
		for e in emu:
			# print(e)
			eTxt0 = e.find('h1')
			eTxt = eTxt0.get_text()
			eTxt = eTxt.strip()
			# print(eTxt)
			getCheck = False
			if "get " in eTxt.lower():
				getSpl = eTxt.split("get ")
				if len(getSpl) > 1:
					if "." in getSpl[1]:
						getCheck = True
			funcCheck = re.search(r'\(.*\)$', eTxt, re.M | re.I)
			# dotCheck = re.search(r'')
			if funcCheck or getCheck:
				print(eTxt)
				relSecRaw.append(e)
		noFunctions = 0
		# print(len(relSecRaw))
		for s in relSecRaw:
			# print(s, '\n\n')
			label = s.find("h1")
			labelS = str(label)
			labelComp = labelS.split("</span>")
			lc2 = []
			for ls in labelComp:
				ls = re.sub(r'<.*?>', "", ls)
				# print(ls)
				lc2.append(ls)
			# print(lc2)

			summary = s.find('p')
			summStr = str(summary)
			summStr = re.sub(r'<.*?>', "", summStr)
			summStr = summStr.replace("\n", "")
			emuAlg = s.find_all("emu-alg")
			if not emuAlg:
				uList = s.find("ul")
				if uList and "Math." in lc2[1]:
					print(lc2[0])
					print(uList)
					noFunctions += 1
					begin = "############# BEGIN ## " + str(noFunctions) + " ###########################\n"
					end = "\n#############  END  ## " + str(noFunctions) + " ###########################\n"
					outFile.write(begin)
					outFile.write("ID= ")
					outFile.write(lc2[0])
					outFile.write("\n")
					outFile.write("Summary= ")
					outFile.write(lc2[1])
					outFile.write("\n")
					outFile.write("Description= ")
					outFile.write(summStr)
					outFile.write("\n")
					cont = uList.contents
					cont2 = []
					for l in cont:
						if "<li>" in str(l):
							cont2.append(str(l).strip())
					print(cont2)
					writeSubSections(cont2, 0, "ul")
					outFile.write(end)
				# print("ERROR")
			else:
				noFunctions += 1
				begin = "############# BEGIN ## " + str(noFunctions) + " ###########################\n"
				end = "\n#############  END  ## " + str(noFunctions) + " ###########################\n"
				outFile.write(begin)
				outFile.write("ID= ")
				outFile.write(lc2[0])
				outFile.write("\n")
				outFile.write("Summary= ")
				# print(lc2[1])
				outFile.write(lc2[1])
				outFile.write("\n")
				# print(summStr)
				outFile.write("Description= ")
				outFile.write(summStr)
				outFile.write("\n")
				emuAlg = emuAlg[0]
				ol = emuAlg.find("ol")
				# print("OL: ", ol)
				# print("UL: ", ul)
				# print(type(ol))
				# print(type(ul))
				cont = ol.contents
				# print(cont)
				writeSubSections(cont, 0, "ol")
				outFile.write(end)
		# print("begin extracting relevant sections .....................................")
		# rel_sec_file = open(filepath, "w")
		# extracted_sections = self.rel_sec_extractor.getRelevantSections(self.input_spec)
		# section_count = 0
		# numofsec = len(extracted_sections)
		# printProgressBar(0, numofsec, prefix = 'Writing Relevant Sections to the File Progress:', suffix = 'Complete', length = 50)
		# for header in sorted(extracted_sections):
		# 	section_count += 1
		# 	printProgressBar(section_count + 1, numofsec, prefix = 'Writing Relevant Sections to the File Progress:', suffix = 'Complete', length = 50)
		# 	sectionid = header.split()[0]
		# 	summary = " ".join(header.split()[1:])
		# 	body = extracted_sections[header]
		# 	rel_sec_file.write("############# BEGIN ## " + str(section_count) + " ###########################\n")
		# 	rel_sec_file.write("ID= " +  sectionid + "\n")
		# 	rel_sec_file.write("Summary= " +  summary + "\n")
		# 	rel_sec_file.write("Description= " + body + "\n")
		# 	rel_sec_file.write("#############  END  ## " + str(section_count) + " ###########################\n")
		# 	if header not in self.extracted_sections:
		# 		self.extracted_sections[header] = body
		# rel_sec_file.close()
		# self.rel_sec_extractor.nlp.close()
		# print()
		# print("Total number of relevant sections extracted = ", len(extracted_sections))
		# print("Output is available in: ", filepath)
	
	# method to parse the extracted sections stored in a file 
	# and load them in the dictonary
	def readRelevantSections(self):
		if self.relevant_spec_exists is True:	
			rel_sec_file = open(self.relevant_spec, 'r', encoding="utf8")
			startsec = False
			for line in rel_sec_file:
				if startsec is False and "############# BEGIN ##" in line:
					startsec = True
					body = ""
					header = ""
					tmpSummary = ""
					tmpDesc = ""
					isAbstract = False
				elif "ID= " in line:
					header += line.split("=")[1].strip()
				elif "Summary= " in line:
					tmpSummary = line.split("=")[1].strip()
					tmpName = re.sub(r'\(.*?\)', "", tmpSummary).strip()
					header += " " + tmpSummary # + "\n"
				elif "Description= " in line:
					tmpDesc = line.split("=")[1].strip()
					# print(tmpDesc)
					if "The abstract operation" in tmpDesc:
						isAbstract = True
					# body += line.split("=")[1].strip() + "\n"
				elif "#############  END  ## "in line:
					if isAbstract:
						tmpDesc2 = tmpDesc.replace("The abstract operation", "").strip()
						# print(tmpDesc2)
						# print(tmpDesc2.split()[0])#[1]#.split()[0].strip())
						# print("tmpName: ", tmpName)
						# print(header)
						if tmpDesc2.split()[0] == tmpName:
							body += "---ABSTRACT---"
							# print(body)
							# print("IS ABSTRACT")
						# if tmpDesc.split("The abstract operation")[1].split()[0].strip() in header:
						# 	body += "---ABSTRACT---"
					if header not in self.extracted_sections:
						self.extracted_sections[header] = body
					startsec = False
				elif startsec is True and len(line)>1:
					# line2 = re.sub(r'\*.*?\*', '', line)
					# line2 = line2.replace("VAR", "")
					# line2 = line2.replace("FUNC", "")
					# line2 = "1. " + line2
					# body += line2.strip() + "\n"
					body += line.strip() + "\n"
	
	# method to add the implemented Abstract Functions to the generated 
	# test files
	def addAbstractFunctions(self):
		template_file = open(self.templatefilepath, "w+")
		abstract_func_file = open(self.abstractfunc_file_path)
		abstract_functions = abstract_func_file.read()
		template_file.write(abstract_functions)
		absFuncLines = abstract_functions.split("\n")
		for line in absFuncLines:
			wLine = line.strip()
			if " " in wLine:
				if wLine.split()[0] == "function":
					fName = wLine.split("function")[1]
					fName = fName.split("(")[0].strip()
					# print(fName)
					self.included_abstract_functions.append(fName)
		abstract_func_file.close()
		template_file.close()

	# method to generate test templates from extracted sections 
	def generateTemplates(self, extracted_sections):
		self.addAbstractFunctions()
		templates = self.test_template_generator.generateTestTemplates(extracted_sections, self.included_abstract_functions)
		template_file = open(self.templatefilepath, "a", encoding="utf8")
		template_file.write("\n\n/*TEST TEMPLATES GENERATED AUTOMATICALLY*/\n\n")
		count = 0
		for header in sorted(templates, key=templates.get):
			template = templates[header]
			tmp_file_name = "tmp_template_file.js"
			tmp_template_file = open(tmp_file_name, "w", encoding="utf8")
			tmp_template_file.write(template)
			tmp_template_file.close()
			# cmd = "~\\node-10.7.0\\node "  +  tmp_file_name + " 2> \\dev\\null"
			cmd = "node " + tmp_file_name + " > nul"
			try:
				if subprocess.check_call(cmd, shell=True) == 0:
					template_file.write("\n\n")
					template_file.write(template)
					template_file.write("\n")
					count += 1
			except:
				# print(template)
				continue
		template_file.close()
		print("Total number of test templates generated = ", count)
		print("Generated templates are available in file: ", self.templatefilepath)
	
	# method to instantiate generated test template using random test inputs 
	# numtests specifies the number of test inputs to be generated
	def generateTests(self, numtests):
		self.executable_test_generator.generateExecutableTests(numtests)
		if self.compiler == "rhino":
			print("Test files generated for Rhino are available in: " + self.output_dir + "/Rhino_ECMA262_Tests" )
		if self.compiler == "node":
			print("Test files generated for Node.js are available in: " + self.output_dir + "/Node_ECMA262_Tests" )


if __name__ == '__main__':
	if len(sys.argv) != 7:
		print("Error! Invalid Command \nUSAGE: python swami.py <path-to-specification-file> <path-to-abstract-functions-code> <path-to-output-directory> <[getRelSections | genTemplates | genTests]> \
		     < rhino | node > <#tests>\nEXAMPLE USAGE: python swami.py ../data/ECMA-262_v8.txt ../data/abstractFunctions.js ../RhinoTestSuite/ genTests rhino 1000")	
		sys.exit(1)

	specification_path = sys.argv[1]
	abstract_func_path = sys.argv[2]
	output_dir_path = sys.argv[3]
	task = sys.argv[4]
	compiler = sys.argv[5]
	test_generator = Swami(specification_path, abstract_func_path, output_dir_path, compiler)
	

	# extract relevant sections only and write to file
	if task == "getRelSections":
		test_generator.extractRelevantSections()
	

	# extract (or use existing) relevant sections and generate test templates
	elif task == "genTemplates":
		if not test_generator.relevant_spec_exists:
			test_generator.extractRelevantSections()
		else:
			print("Reading relevant sections from existing file...............")
			test_generator.readRelevantSections()
		# print(type(test_generator.extracted_sections))
		# for e in test_generator.extracted_sections:
		# 	print(e)
		# 	print(test_generator.extracted_sections[e])
		print("attempting to generate templates for ", len(test_generator.extracted_sections), " relevant sections")
		test_generator.generateTemplates(test_generator.extracted_sections)
	

	# generate full test suites from scratch
	elif task == "genTests":
		numtests = int(sys.argv[6])

		if not test_generator.relevant_spec_exists:
			test_generator.extractRelevantSections()
		else:
			print("Reading relevant sections from existing file...............")
			test_generator.readRelevantSections()
		if not os.path.isfile(test_generator.templatefilepath):
			test_generator.generateTemplates(test_generator.extracted_sections)
		test_generator.generateTests(numtests)
	else:
		print("Error! Invalid Command \nUSAGE: python swami.py <path-to-specification-file> <path-to-abstract-functions-code> <path-to-output-directory> <[getRelSections | genTemplates | genTests]> \
		     < rhino | node > <#tests>\nEXAMPLE USAGE: python swami.py ../data/ECMA-262_v8.txt ../data/abstractFunctions.js ../RhinoTestSuite/ genTests rhino 1000")	
		sys.exit(1)
