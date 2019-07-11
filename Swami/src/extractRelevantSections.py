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
# This script is used to extract the relevant sections (sections which are implemented
# and for which tests should be created) from the specification document using 
# regular expressions which are composed of keywords, POS tags and wild card characters.
# This is invoked by the main driver program swami.py
# ==============================================================================

from stanfordcorenlp import StanfordCoreNLP
import sys
import re
from time import sleep
from printprogress import printProgressBar
from bs4 import BeautifulSoup


conditionalpattern1 = re.compile("If .* return .*")
conditionalpattern2 = re.compile("If .* the result is .*")
exceptionpattern = re.compile("throw a .* exception")
DEBUG = False


class RelevantSection(object):
	def __init__(self):
		self.relevant_sections = {}	# dictionary that stores the relevant sections extrated from specification document
		self.nlp = StanfordCoreNLP(r'lib\stanford-corenlp-full-2018-02-27')
	
	# method to tokenize a sentence and annotate it with POS tags 
	def tokenize(self, sentence):
		postags = self.nlp.pos_tag(sentence)
		return postags
	
	# method to check if the title of the section is relevant (contains method signature) 
	def checkIfRelevantHeader(self, line, pos_tokens):
		relsec = False
		s = 0
		if "If" in line or "Let" in line or "Return" in line or "Else" in line or line.strip().endswith(".") or line.strip().endswith(",") or " a " in line or " an" in line or " the" in line or "”" in line or " in" in line or " In" in line or " at" in line:
			return False
		for i in range(len(pos_tokens)):
			if "IN" in pos_tokens[i][1] or "DT" in pos_tokens[i][1] or "CC" in pos_tokens[i][1]:
				return False
		if len(pos_tokens) > 1 and "CD" in pos_tokens[0][1].strip() and pos_tokens[len(pos_tokens)-1][0] != ".":
			for i in range(1, len(pos_tokens)):
				if "NN" in pos_tokens[i][1] or "NNP" in pos_tokens[i][1] or "NNS" in pos_tokens[i][1]:
					return True	
		return relsec

	# def funcReplace(match):
	# 	# print(match.group(0))
	# 	justFunc = match.group(0)
	# 	justFunc = re.sub(r'<.*?>', "", justFunc)
	# 	return "FUNC" + justFunc  # + "("
    #
	# def toCaps(match):
	# 	return match.group(0).upper()
    #
	# def cleanupText(strL):
	# 	strL = strL.replace("<var>", "VAR")
	# 	strL = strL.replace("</var>", "")
	# 	funcSearch = re.search(r'<a href="#sec.*?</emu-xref>\(', strL, re.M | re.I)
	# 	if funcSearch:
	# 		strL = re.sub(r'<a href="#sec.*?</emu-xref>\(', funcReplace, strL)
	# 	strL = strL.replace('\n', '')
	# 	strL = re.sub(r'<ol>', " ", strL)
	# 	strL = re.sub(r'</ol>', " ", strL)
	# 	strL = re.sub(r'</li>', " ", strL)
	# 	strL = re.sub(r'<.*?>', "", strL)
	# 	strL = re.sub(r'\[\[.*?\]\]', toCaps, strL)
	# 	strL = strL.replace("  ", " ")
	# 	return strL

	# def writeSubSections(cont, level):
	# 	for l in cont:
	# 		strL = str(l).lower()
	# 		headingStr = '*' + str(level) + '*'
	# 		if "<ol>" not in strL:
	# 			cleaned = cleanupText(strL)
	# 			print(headingStr, cleaned)
	# 			outFile.write(headingStr)
	# 			outFile.write(cleaned)
	# 			outFile.write("\n")
	# 		else:
	# 			preStr = strL.split("<ol>")[0]
	# 			cleaned = cleanupText(preStr)
	# 			print(headingStr, cleaned)
	# 			outFile.write(headingStr)
	# 			outFile.write(cleaned)
	# 			outFile.write("\n")
	# 			cont2 = l.find("ol").contents
	# 			writeSubSections(cont2, level + 1)

	# main method for this file. It takes the path to the specification document 
	# and returns a dictonary of extracted sections where key is the section title
	# and value is the section body
	def extractSections(self, path_to_spec_doc):
		headers = []
		extracted_sections = {}
		spec_doc = open(path_to_spec_doc)
		relsec = False
		checkheader = True
		header = ""
		body = ""
		document = ""
		linecount = 0
		doclen = len(spec_doc.read().split("\n"))
		spec_doc = open(path_to_spec_doc)
		printProgressBar(0, doclen, prefix = 'Extracting Header Progress:', suffix = 'Complete', length = 50)
		# loop through the document to extract the header sentences and store all the content
		for line in spec_doc:
			linecount += 1
			printProgressBar(linecount + 1, doclen, prefix = 'Extracting Header Progress:', suffix = 'Complete', length = 50)
			document += line
			if len(line) > 1:
				pos_tokens = self.tokenize(line.strip().replace("[", "").replace("]", ""))
				isheader = self.checkIfRelevantHeader(line, pos_tokens)
				if isheader is True:
					header = line.strip()
					headers.append(header)
					continue

		# loop through the document (stored in memory) to extract the body correspoding to headers extracted
		startsection = False
		body = ""
		header = ""
		doclines = document.split("\n")
		for idx in range(len(doclines)):
			line = doclines[idx]
			if line.strip() in headers or idx == len(doclines) - 1:
				if header != "":
					if len(body) > 1:
						extracted_sections[header] = body
				header = line
				body = ""
				continue
			elif len(line) > 1:
				body += line.strip() + "\n"

		return extracted_sections

		# def funcReplace(match):
		# 	# print(match.group(0))
		# 	justFunc = match.group(0)
		# 	justFunc = re.sub(r'<.*?>', "", justFunc)
		# 	return "FUNC" + justFunc  # + "("
		#
		# def toCaps(match):
		# 	return match.group(0).upper()
		#
		# def cleanupText(strL):
		# 	strL = strL.replace("<var>", "VAR")
		# 	strL = strL.replace("</var>", "")
		# 	funcSearch = re.search(r'<a href="#sec.*?</emu-xref>\(', strL, re.M | re.I)
		# 	if funcSearch:
		# 		strL = re.sub(r'<a href="#sec.*?</emu-xref>\(', funcReplace, strL)
		# 	strL = strL.replace('\n', '')
		# 	strL = re.sub(r'<ol>', " ", strL)
		# 	strL = re.sub(r'</ol>', " ", strL)
		# 	strL = re.sub(r'</li>', " ", strL)
		# 	strL = re.sub(r'<.*?>', "", strL)
		# 	strL = re.sub(r'\[\[.*?\]\]', toCaps, strL)
		# 	strL = strL.replace("  ", " ")
		# 	return strL
		#
		# def writeSubSections(cont, level):
		# 	for l in cont:
		# 		strL = str(l).lower()
		# 		headingStr = '*' + str(level) + '*'
		# 		if "<ol>" not in strL:
		# 			cleaned = cleanupText(strL)
		# 			print(headingStr, cleaned)
		# 			outFile.write(headingStr)
		# 			outFile.write(cleaned)
		# 			outFile.write("\n")
		# 		else:
		# 			preStr = strL.split("<ol>")[0]
		# 			cleaned = cleanupText(preStr)
		# 			print(headingStr, cleaned)
		# 			outFile.write(headingStr)
		# 			outFile.write(cleaned)
		# 			outFile.write("\n")
		# 			cont2 = l.find("ol").contents
		# 			writeSubSections(cont2, level + 1)
		#
		# # inFile = open("ECMAScript2018LanguageSpecification.html", 'r', encoding="utf8")
		# inFile = open(path_to_spec_doc, 'r', encoding="utf8")
		# outFile = open("ECMA_Current_07-11-19_v2.txt", 'w', encoding="utf8")
		# soup = BeautifulSoup(inFile, 'html.parser')
		# emu = soup.select('emu-clause')
		# relSecRaw = []
		# for e in emu:
		# 	# print(e)
		# 	eTxt = e.find('h1')
		# 	eTxt = eTxt.get_text()
		# 	eTxt = eTxt.strip()
		# 	funcCheck = re.search(r'\(.*\)$', eTxt, re.M | re.I)
		# 	if funcCheck:
		# 		print(eTxt)
		# 		relSecRaw.append(e)
		# noFunctions = 0
		# print(len(relSecRaw))
		# for s in relSecRaw:
		# 	print(s, '\n\n')
		# 	label = s.find("h1")
		# 	labelS = str(label)
		# 	labelComp = labelS.split("</span>")
		# 	lc2 = []
		# 	for ls in labelComp:
		# 		ls = re.sub(r'<.*?>', "", ls)
		# 		print(ls)
		# 		lc2.append(ls)
		# 	print(lc2)
		#
		# 	summary = s.find('p')
		# 	summStr = str(summary)
		# 	summStr = re.sub(r'<.*?>', "", summStr)
		# 	summStr = summStr.replace("\n", "")
		# 	emuAlg = s.find_all("emu-alg")
		# 	if not emuAlg:
		# 		print("ERROR")
		# 	else:
		# 		noFunctions += 1
		# 		begin = "############# BEGIN ## " + str(noFunctions) + " ###########################\n"
		# 		end = "\n############# END ## " + str(noFunctions) + " ###########################\n"
		# 		outFile.write(begin)
		# 		outFile.write("ID= ")
		# 		outFile.write(lc2[0])
		# 		outFile.write("\n")
		# 		outFile.write("Summary= ")
		# 		outFile.write(lc2[1])
		# 		outFile.write("\n")
		# 		print(summStr)
		# 		outFile.write("Description= ")
		# 		outFile.write(summStr)
		# 		outFile.write("\n")
		# 		emuAlg = emuAlg[0]
		# 		ol = emuAlg.find("ol")
		# 		cont = ol.contents
		# 		print(cont)
		# 		writeSubSections(cont, 0)
		# 		outFile.write(end)


	# method that uses patterns to determine if a section contains a boundary condition or exception
	def isSectionRelevant(self, header, body):
		isrelhead = False
		isrelbody = False
		if len(header.split())>=3:
			if "[[" in header.split()[1]:
				return False

			if "(" not in header and ")" not in header and "." not in header.split()[1] and "." not in header.split()[2]: 
				return False
			else:
				isrelhead = True	
		
		if isrelhead is False and "." not in header.split()[1]:
			return False
			
		for line in body.split("\n"):
			line = line.replace("\xa0", " ")
			if (re.search(conditionalpattern1, line) or re.search(conditionalpattern2, line) or re.search(exceptionpattern, line))  and isrelhead is True:	
				isrelbody = True
				break
		if isrelbody is False:
			return False
			
		header_tokens = self.tokenize(header.strip().replace("[", "").replace("]", ""))
		for i in range(len(header_tokens)):	
			if "-LRB-" in header_tokens[i][1]:
				for j in range(i, len(header_tokens)):
					if "-RRB-" in header_tokens[j][1] and j == len(header_tokens) - 1:
						return True
		return isrelhead
	
	# This is an driver method that invokes the main method (extractSections). 
	# The for loop is mostly used for debigging purposes.
	def getRelevantSections(self, path_to_spec_doc):
		extracted_sections = self.extractSections(path_to_spec_doc)
		printProgressBar(0, len(extracted_sections), prefix = 'Extracting Relevant Specifications Progress:', suffix = 'Complete', length = 50)
		count = 0
		for header in sorted(extracted_sections):
			count += 1
			printProgressBar(count + 1, len(extracted_sections), prefix = 'Extracting Relevant Specifications Progress:', suffix = 'Complete', length = 50)
			body = extracted_sections[header]
			if self.isSectionRelevant(header, body):
				self.relevant_sections[header] = body
				if DEBUG:
					print("\n######################################################")
					print("===== HEADER ==================================== ")
					print(header)
					print("=====  BODY  ==================================== ")
					print(body)
					print("#########################################################\n")
		sleep(0.2)
		return self.relevant_sections
