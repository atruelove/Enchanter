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

import nltk
import sys
import re
import os
from stanfordcorenlp import StanfordCoreNLP
from printprogress import printProgressBar
argpattern = re.compile("\(([^()]*)\)")
exceptionpattern = re.compile("throw a .* exception")
returnpattern = re.compile("return .*")
assignmentpattern = re.compile("Let .+\?*")
relevantstmtpattern1 = re.compile("If .* return .*")
relevantstmtpattern2 = re.compile("If .* the result is .*")
# letPOSPatterns = ["VB NNP VB . NNP ( NNP ) .", "VB NNP VB NNP . VB JJ NNP NNP NNP .", "VB NNP VB . NNP ( NNP , NNP ) .", "VB NNP VB DT DT NN .", "VB NNP VB CD .", "VB NNP VB NNP ( NNP ) .",
# 				"VB NNP VB . JJ ( DT NN ) .", "VB NNP VB NNP .", "VB NNP VB . NNP ( . NNP ( NNP , `` NN '' ) ) .", "VB NNP VB . NNP ( DT NN ) .", "VB NNP VB DT JJ JJ NN .",
# 				"VB NNP VB DT JJ NN NN .", "VB NNP VB DT NN IN NNP ."]
# throwExceptionPOSPatterns = ["IN NNP ( NNP ) VBZ RB JJ , VB DT NN NN .", "IN NNP ( NNP ) VBZ JJ , VB DT NN NN .", "IN NNP VBZ JJ , VB DT NN NN .",
# 							 "IN NNP VBZ RB VB DT JJ NN NNP NNP NNP JJ NN , VB DT NN NN ."]
# ifResultPOSPatterns = ["IN NNP VBZ JJ , NN JJ .", "IN NNP VBZ JJ , VB NNS .", "IN NNP ( NNP ) VBZ RB JJ , NN JJ .", "IN NNP VBZ JJ , JJ NNP .", "IN NNP VBZ DT NNP NN , VB . JJ ( NNP , NNP ) ."]
# multiStepIfPatterns = ["IN NNP VBZ JJ , RB", "IN NNP ( NNP ) VBZ JJ , RB", "IN NNP VBZ RB JJ , RB", "IN NNP VBZ VBN , RB"]
letPOSPatterns = ["VB", "NNP", "VB", "."]
ifResultPOSPatterns = ["IN", "NNP", "."]
multiStepIfPatterns = ["IN", "NNP", ",", "RB"]
elsePattern = ["RB ,"]
whilePattern = ["NN", ",", "IN", "NNP"]
incrementPattern1 = ["IN", "CD", "."]
incrementPattern2 = ["NN", "NNP", "."]

class TestTemplate(object):
	def __init__(self, relspecpath, compiler):
		self.template_content = {}
		self.test_templates = {}
		self.variable_dataset = {}
		self.relevant_spec_path = relspecpath
		self.compiler = compiler
		self.nlp = StanfordCoreNLP(r'lib/stanford-corenlp-full-2018-02-27')

	# method to check if a statement is an assignment
	# and if it is then store the variable and its value
	def getAssignment(self, specline):
		variable = ""
		value = ""
		funcval = False
		args = ""
		# print(specline)
		# isassignment = re.search(assignmentpattern, specline)
		isassignment = False
		if "let" in specline or "Let" in specline:
			isassignment = True
		if isassignment:
			splitter = "Let "
			if "let" in specline.split()[0]:
				splitter = "let "
			variable = specline.split(" be ")[0].split(splitter)[1].strip()
			value = specline.split(" be ")[1]
		if "(" in value and ")" in value:
			funcval = True
		if funcval is True:
			value = value.replace("?", "").strip()
			value = value.replace("!", "").strip()
			if value.endswith("."):
				return variable, value[:-1]
			else:			
				return variable, value
		else:
			return variable, value


	# method to simplify the conditional statements extracted from the body of
	# relevant sections by translating English phrases in to syntaxtically valid code
	# and substituting the assignment variables with their values stored in dictionary  
	# the order of substitution matters!
	def substituteVars(self, text, sectionid):

		def expFunc(match):
			newText = match.group()
			newText = newText.replace("--EXP0--", ", ")
			newText = newText.replace("--EXP1--", " )")
			newText = "Math.pow( " + newText
			# print(newText)
			return newText

		if text[0].isdigit() or ". " in text:
			text = "".join(text.split(". ")[1:])		
	
		expSearch = re.search(r'[0-9]*?--EXP0--[0-9]*?--EXP1--', text, re.M|re.I)
		if expSearch:
			print(expSearch.group())
			text = re.sub(r'[0-9]*?--EXP0--[0-9]*?--EXP1--', expFunc, text)
		text = text.replace("--EXP0--", "")
		text = text.replace("--EXP1--", "")

		if "If" in text:
			text = text.replace("If", "if (");
		if ", the result is" in text:
			text = text.replace(", the result is", ") return")
		if text.endswith("."):
			text = text[:-1]
		if "otherwise return" in text:
			text = text.replace("otherwise return", "else return");	
		if "but greater than or equal to" in text:
			var = text.split("is")[0].split()[-1].strip()
			text = text.replace("but greater than or equal to", " && " + var + " >= ");		
		if "but greater than" in text:
			var = text.split("is")[0].split()[-1].strip()
			text = text.replace("but greater than", " && " + var + " >");	
		if "but less than or equal to" in text:
			var = text.split("is")[0].split()[-1].strip()
			text = text.replace("but less than or equal to", " && " + var + " <= ");		
		if "but less than" in text:
			var = text.split("is")[0].split()[-1].strip()
			text = text.replace("but less than", " && " + var + " < ");	
		if "is not greater than" in text:
			text = text.replace("is not greater than", "< ");		
		if "is not less than" in text:
			text = text.replace("is not less than", "> ");		
		if "is greater than" in text:
			text = text.replace("is greater than", "> ");
		if "&gt;" in text:
			text = text.replace("&gt;", "> ");
		if "is less than" in text:
			text = text.replace("is less than", "< ");
		if "&lt;" in text:
			text = text.replace("&lt;", "<");
		if "≤" in text:
			text = text.replace("≤", "<=");
		if "≥" in text:
			text = text.replace("≥", ">=");
		if "is negative" in text:
			text = text.replace("is negative", "< 0");		
		if "is positive" in text:
			text = text.replace("is positive", "> 0");		
		if "is not equal to" in text:
			text = text.replace("is not equal to", " != ");		
		if " is equal to" in text:
			text = text.replace(" is equal to", " === ");
		if "is not" in text:
			text = text.replace("is not", " != ");		
		if " or " in text:
			if "," in text.split(" or ")[0]:
				variable = ""
				values = []
				result = ""
				if "is " in text:
					variable = text.split("is ")[0].split()[-1]
					if "return" in text:
						values = text.split("is ")[1].split("return")[0].split(",")
						result = "return" + text.split("return")[1]
					elif "throw" in text:
						values = text.split("is ")[1].split("throw")[0].split(",")
						result = "throw" + text.split("throw")[1]
					
				if "=== " in text:
					variable = text.split("=== ")[0].split()[-1]
					if "return" in text:
						values = text.split("=== ")[1].split("return")[0].split(",")
						result = "return" + text.split("return")[1]
					elif "throw" in text:
						values = text.split("=== ")[1].split("throw")[0].split(",")
						result = "return" + text.split("return")[1]
				if len(values) > 0:
					string = ""
					for v in values:
						if v.strip() != "":
							string = string + variable + " === " + v.strip() + " || "	
							text = text.replace(v.strip(), "")
					text = text.split(variable)[0] + string[:-4] + " ) " + result
					text = text.replace(",", "")
					text = text.replace(" or ", "")
			else:
				if "is " in text:
					var = text.split("is ")[0].split()[-1]
					values = text.split("is ")[1].split(")")[0].split("or")
					if len(values) == 2:
						text = text.split("is ")[0] + " === " + values[0] + " || " + var + " === " + values[1] + ")" + ''.join(text.split(")")[1:])
				else:
					text = text.replace(" or ", " || ")
		if " and " in text:
			text = text.replace(" and ", " && ")
		if ", return" in text:
			text = text.replace(", return", ") return")	
		if ", throw" in text:
			text = text.replace(", throw", ") throw")
		if "is one of" in text:
			variable = text.split("is one of ")[0].split()[-1]
			values = text.split("is one of")[1].split(")")[0].split(",")
			string = ""
			for v in values:
				string = string + variable + " === " + v + " || "	
				text = text.replace(v, "")
			text = text.replace(",", "")
			text = text.replace(" or ", "")
			text = text.replace(values[0], "")
			text = text.replace("one of", values[0] + " || " + string[:-4])
		if " the " in text:
			text = text.replace(" the ", " ")	
		if " a " in text:
			text = text.replace(" a ", " ")
		if "does not have [[MapData]] internal slot" in text:
			text = text.replace("does not have [[MapData]] internal slot", " instanceof Map === false")	
		if "has [[MapData]] internal slot" in text:
			text = text.replace("has [[MapData]] internal slot", " instanceof Map === true")
		if "has [[ViewedArrayBuffer]] internal slot" in text:
			text = text.replace("has [[ViewedArrayBuffer]] internal slot", " instanceof ArrayBuffer === true")
		if "does not have an [[ArrayBufferData]] internal slot" in text:
			text = text.replace("does not have an [[ArrayBufferData]] internal slot", " instanceof ArrayBuffer === false")
		if " is exactly" in text:
			text = text.replace(" is exactly", " === ");
		if " is " in text:
			text = text.replace(" is ", " === ");
		text = re.sub(r', then$', " ,,then,,", text)
		text = text.replace(" exception", "")


		text = text.replace("≥", ">= ")
		text = text.replace("-", "- ")
		text = text.strip().replace("(", " ( ").replace(")", " ) ").replace(",", " , ").replace("+", " + ").replace(">", " > ").replace(".length", " .length").replace(">=", " >= ").replace("<", " < ").replace("<=", " <= ").replace("≤", " ≤ ") + " "
		# for (variable,sid) in self.variable_dataset:
		# 	if variable in text and sid==sectionid and variable not in self.variable_dataset[(variable,sid)]:
		# 		text = text.replace(variable, self.variable_dataset[(variable,sid)])

		return text

	# method used to extract the method signature and create a callable 
	# function by creating an object of given class which then can be used 
	# to invoke the method under test
	def getMethodSignature(self, header):
		sectionid = header.split()[0]
		summary = " ".join(header.split()[1:]).replace("...", "")
		args = re.search(argpattern, summary)		
		callablefunction = "unknown(unknown)"
		if "Number" in summary:	
			if "prototype" in summary:
				callablefunction = "var output = Number(randominput)." + summary.strip().split(".")[-1].replace(" ", "") + ";"
			else:	
				callablefunction = "var output = Number." + summary.strip().split(".")[-1].replace(" ", "") + ";"
		elif "RegExp" in summary:
			if args:
				callablefunction = "var output = new RegExp(randominput)." + summary.strip().split(".")[-1].replace(" ", "") + ";"		
			else:
				callablefunction = "var output = randominput." + summary.strip().split(".")[-1].replace(" ", "") + ";"

		elif "Math" in summary:	
			callablefunction = "var output = Math." + summary.strip().split(".")[-1].replace(" ", "") + ";"
		elif "Date" in summary:
			callablefunction = "var output = new Date(randominput)." + summary.strip().split(".")[-1].replace(" ", "") + ";"		
		elif "Boolean" in summary:	
			callablefunction = "var output = new Boolean(randominput)." + summary.strip().split(".")[-1].replace(" ", "") + ";"
		elif "String" in summary:
			callablefunction = "var output = new String(randominput)." + summary.strip().split(".")[-1].replace(" ", "") + ";"		
		elif "WeakMap" in summary:
			callablefunction = "var output = randominput." + summary.strip().split(".")[-1].replace(" ", "") + ";"
		elif "Map" in summary:
			callablefunction = "var output = randominput." + summary.strip().split(".")[-1].replace(" ", "") + ";"
		elif "SharedArrayBuffer" in summary:
			if args is None:
				callablefunction = "var output = randominput." + summary.strip().split(".")[-1].replace(" ", "") + ";"	
			else:	
				callablefunction = "var output = new SharedArrayBuffer(randominput)." + summary.strip().split(".")[-1].replace(" ", "") + ";"	
		elif "ArrayBuffer" in summary:
			args = re.search(argpattern, summary)	
			if args is None or "prototype" in summary:
				callablefunction = "var output = randominput." + summary.strip().split(".")[-1].replace(" ", "") + ";"	
			elif args and "prototype" not in summary:
				callablefunction = "var output = ArrayBuffer." + summary.strip().split(".")[-1].replace(" ", "") + ";"	
			else:
				callablefunction = "var output = new ArrayBuffer(randominput)." + summary.strip().split(".")[-1].replace(" ", "") + ";"
		elif "Array" in summary:
			if  "prototype" not in summary and "." in summary:
				callablefunction = "var output = Array." + summary.strip().split(".")[-1].replace(" ", "") + ";"	
			else:
				summary = summary.strip().replace(".prototype", "")
								
				if "Array." in summary and "(" in summary:
					funcall = summary.strip().split("Array")[1].split("(")[0].replace(" ", "").strip()
					funarg = summary.strip().split("(")[1]	
					callablefunction = "var output = new Array(randominput)" + funcall + "(" + funarg + ";"	
				elif "Array" in summary and "(" in summary:
					callablefunction = "var output = new " + summary.strip().replace("\d.*", "").replace(".","") + ";"
					callablefunction = re.sub(" \d+", " ", callablefunction)									
				elif "Runtime Semantics: " in summary:
					callablefunction = callablefunction.split(".")[0] + "." + summary.split("Runtime Semantics: ")[-1].replace(" ", "") + ";"
		elif "Set" in summary:
			callablefunction = "var output = randominput." + summary.strip().split(".")[-1].replace(" ", "") + ";"
		return callablefunction
	
	def getPOSTags(self, nline):
		line = re.sub(r'\*.*?\*', "", nline)
		try:
			tokenized = nltk.word_tokenize(line)
			tagged = nltk.pos_tag(tokenized)

			chunkGram = r"""Chunk: {<RB.?>*<VB.?>*<NNP>}"""
			chunkParser = nltk.RegexpParser(chunkGram)

			chunked = chunkParser.parse(tagged)

			parse_string = ' '.join(str(chunked).split())
			# print(parse_string)
		# chunked.draw()

		except Exception as e:
			print(str(e))

		splitLine = parse_string.split()
		# print(splitLine)
		nPattern = ""
		for s in splitLine:
			if '/' in s:
				pos = s.split('/')[1]
				if len(pos) > 1 and ')' in pos:
					pos = pos.replace(')', '')
				nPattern += (pos + " ")
		nPattern = nPattern.strip()
		return nPattern

	# method to: (1) extract the assignment statement inside the body of the relevant section 
	# and store the variable and corresponding value (or function call) inside the dictonary
	# (2) extract the conditional statements and simplify them by substituting the variables (if exists) 
	# with their values   
	def extractAssignmentAndConditionals(self, header, body, methodsignature, bodyPOS, headingList):
		sectionid = header.split()[0]
		self.variable_dataset.clear()
		numvars = 0
		index = 0
		POS = bodyPOS.split("\n")
		print(sectionid)
		for statement in body.split("\n"):
			statementAdded = False
			if len(statement) > 100 or statement == "":
				index += 1
				continue
			statement = statement.replace("\xa0", " ")
			POSElements = POS[index].split()
			# isassignment = re.search(assignmentpattern, statement.strip())

			isassignment = False
			# if POS[index].strip() in letPOSPatterns:
			# 	isassignment = True
			isassignment = False
			if len(POSElements) >= len(letPOSPatterns):
				mCheck = True
				for i in range(0,3):
					if (POSElements[i] != letPOSPatterns[i]):
						mCheck = False
				if (POSElements[-1] != letPOSPatterns[-1]):
					mCheck = False
				isassignment = mCheck
			if isassignment:
				postags = self.nlp.pos_tag(statement)
				match = False
				for i in range(len(postags)):
					if "NN" in postags[i][1]:
						match = True
						break 
				if not match:
					index += 1
					continue
				var, value = self.getAssignment(statement)
				# var = " " + var + " "
				if "." in value and ".length" not in value:
					value = value.split(".")[0]
				if "the number of elements in" in value:
					value = value.replace("the number of elements in", "").strip() + ".length"
				self.variable_dataset[var,sectionid] = value
				updatedstatement = "--ASSIGNMENT-- " + str(var) + " = " + str(value)
				# print(updatedstatement)
				statementAdded = True
				numvars += 1

			isMultiStepIf = False
			if len(POSElements) >= len(multiStepIfPatterns):
				if POSElements[0] == multiStepIfPatterns[0] and POSElements[1] == multiStepIfPatterns[1]:
					if POSElements[-1] == multiStepIfPatterns[-1] and POSElements[-2] == multiStepIfPatterns[-2]:
						isMultiStepIf = True
			# for m in multiStepIfPatterns:
			# 	if POS[index].strip() == m:
			# 		isMultiStepIf = True
			if isMultiStepIf:
				statementAdded = True
				postags = self.nlp.pos_tag(statement)
				match = False
				for i in range(len(postags)):
					if "NN" in postags[i][1]:
						match = True
						break
				if not match:
					index += 1
					continue
				updatedstatement = self.substituteVars(statement, sectionid)
				# tmpvars = numvars
				# while (updatedstatement != self.substituteVars(updatedstatement, sectionid) and tmpvars > 0):
				# 	updatedstatement = self.substituteVars(updatedstatement, sectionid)
				# 	tmpvars -= 1
				# if header not in self.template_content:
				# 	self.template_content[header] = [methodsignature]
				# self.template_content[header].append(updatedstatement)

			isElse = False
			if POS[index] == "RB ,":
				isElse = True
			if isElse:
				statementAdded = True
				updatedstatement = self.substituteVars("else", sectionid)
				# tmpvars = numvars
				# while (updatedstatement != self.substituteVars(updatedstatement, sectionid) and tmpvars > 0):
				# 	updatedstatement = self.substituteVars(updatedstatement, sectionid)
				# 	tmpvars -= 1
				# if header not in self.template_content:
				# 	self.template_content[header] = [methodsignature]
				# self.template_content[header].append(updatedstatement)

			isWhile = False
			if len(POSElements) >= len(whilePattern):
				if POSElements[0] == whilePattern[0] and POSElements[1] == whilePattern[1] and POSElements[2] == whilePattern[2] and POSElements[3] == whilePattern[3]:
					isWhile = True
			if isWhile:
				statementAdded = True
				statement = statement.replace("repeat, ", "")
				statement = statement.replace("Repeat, ", "")
				statement = statement.replace("while", "while ( ")
				statement = statement + " ) "
				updatedstatement = self.substituteVars(statement, sectionid)

			isIncrement = False
			incremProv = False
			if len(POSElements) >= len(incrementPattern1):
				if POSElements[-1] == incrementPattern1[-1] and POSElements[-2] == incrementPattern1[-2] and POSElements[-3] == incrementPattern1[-3]:
					incremProv = True
			if POSElements == incrementPattern2:
				incremProv = True
			if incremProv:
				if "increment" in statement.lower() or "decrement" in statement.lower() or "increase" in statement.lower() or "decrease" in statement.lower():
					isIncrement = True
			if isIncrement:
				iOperator = ""
				iVar = ""
				iAmt = ""
				if "increment" in statement.lower() or "increase" in statement.lower():
					iOperator = "+"
				elif "decrement" in statement.lower() or "decrease" in statement.lower():
					iOperator = "-"
				if "CD" not in POSElements:
					iAmt = "1"
				else:
					lastWord = statement.split()[-1]
					tmpAmt = re.sub(r'[^0-9]*?', "", lastWord)
					iAmt = tmpAmt
				iVar = statement.split()[-3]
				updatedstatement = iVar + " = " + iVar + " " + iOperator + " " + iAmt
				updatedstatement = "--INCDEC-- " + updatedstatement
				statementAdded = True


			# This entire block seems to be unncessary. The pattern caught here is caught elsewhere, and gives the
			# same output by adding a single line into substituteVars()
			# isexception = re.search(exceptionpattern, statement)
			# isexception = False
			# if POS[index].strip() in throwExceptionPOSPatterns:
			# 	isexception = True
			# if isexception:
			# 	postags = self.nlp.pos_tag(statement)
			# 	match = False
			# 	for i in range(len(postags)):
			# 		if "NN" in postags[i][1]:
			# 			match = True
			# 			break
			# 	if match and "exception." in statement:
			# 		errstmt = self.substituteVars(statement.split("exception.")[0], sectionid)
			# 		tmpvars = numvars
			# 		while(errstmt != self.substituteVars(errstmt, sectionid) and tmpvars>0):
			# 			errstmt = self.substituteVars(errstmt, sectionid)
			# 			tmpvars -= 1;
			# 		if header not in self.template_content:
			# 			self.template_content[header] = [methodsignature]
			# 			self.template_content[header].append(errstmt)
			# 		else:
			# 			self.template_content[header].append(errstmt)
			# 	continue

			# isinputoutput1 = re.search(relevantstmtpattern1, statement)
			# isinputoutput2 = re.search(relevantstmtpattern2, statement)
			# if isinputoutput1 or isinputoutput2:
			isinputoutput = False
			# if POS[index].strip() in ifResultPOSPatterns:
			# 	isinputoutput = True
			if len(POSElements) >= len(ifResultPOSPatterns) and POSElements[0] == ifResultPOSPatterns[0] and POSElements[1] == ifResultPOSPatterns[1] and POSElements[-1] == ifResultPOSPatterns[-1]:
				isinputoutput = True
			if isinputoutput:
				statementAdded = True
				postags = self.nlp.pos_tag(statement)
				match = False
				for i in range(len(postags)):
					if "NN" in postags[i][1]:
						match = True
						break 
				if not match:
					index += 1
					continue
				updatedstatement = self.substituteVars(statement, sectionid)
				tmpvars = numvars
				# while(updatedstatement != self.substituteVars(updatedstatement, sectionid) and tmpvars > 0):
				# 	updatedstatement = self.substituteVars(updatedstatement, sectionid)
				# 	tmpvars -= 1
				# if header not in self.template_content:
				# 	self.template_content[header] = [methodsignature]
				# self.template_content[header].append(updatedstatement)
			if statementAdded:
				# tmpvars = numvars
				# while (updatedstatement != self.substituteVars(updatedstatement, sectionid) and tmpvars > 0):
				# 	updatedstatement = self.substituteVars(updatedstatement, sectionid)
				# 	tmpvars -= 1
				if header not in self.template_content:
					self.template_content[header] = [methodsignature]
				statementAddition = "***" + str(headingList[index]) + "***"
				updatedstatement = updatedstatement + statementAddition
				self.template_content[header].append(updatedstatement)
				# print(updatedstatement)
			else:
				if header not in self.template_content:
					self.template_content[header] = [methodsignature]
				extraStatement = "***" + str(headingList[index]) + "***"
				self.template_content[header].append(extraStatement)
			index += 1
	


	# method to process specific symbols and phrases in the
	# extracted natural language conditional statements in to
	# valid JavaScript symbols and variables 
	def convertTextToCode(self, text):
		text = ' '.join(text.split())
		text = text.replace("this value.", "randominput")
		text = text.replace("this value", "randominput")
		text = text.replace("result of ", "")
		text = text.replace("if", "")
		text = text.replace(" the ", "")
		text = text.replace("Type (", "typeof (")
		text = text.replace(" Object ", " \"object\" ")
		text = text.replace(" Number ", " \"number\" ")
		text = text.replace("empty String", "\"\"")
		text = text.replace("empty string", "\"\"")
		text = text.replace("String \"NaN\"", "\"NaN\"")
		text = text.replace("+∞", "+Infinity")
		text = text.replace("-∞", "-Infinity")
		text = text.replace("∞", "Infinity")
		text = text.replace("‑", "-")
		text = text.replace("+0", "0")
		text = text.replace("‑0", "-0")
		text = text.replace("≥", ">= ")
		text = text.replace("> =", ">= ")
		text = text.replace("< =", "<= ")
		text = text.replace("≤", "<= ")
		text = text.replace("! ", "")
		text = text.replace("× ", "*")
		text = text.replace(" ≠ ", "!= ")
		text = text.replace("! =", "!= ")
		text = text.replace("! ", "")
		text = text.replace("min (", "Math.min (")
		text = text.replace("max (", "Math.max (")
		text = text.replace("abs (", "Math.abs (")
		if "already an integer" in text:
			var = text.split("===")[0].split("(")[1]
			text = text.replace("already an integer", "parseInt(" + var +", 10)")
		if "number of elements in" in text:
			text =  text.split("number of elements in")[0] + text.split("number of elements in")[1].replace(") ) )", ") ).length )")		

		if text[-1]==".":
			text = text[:-1]
	
		if "===" in text and ("NaN" in text or "-0" in text or "+ 0" in text):
			if "&&" in text:
				newtext = "("
				clauses = text.split("&&")
				for idx, clause in enumerate(clauses):
					if " === " in clause:
						lhs = clause.split("===")[0].strip()
						rhs = clause.split("===")[1].strip()
						if "NaN" in rhs or "-0" in rhs or "+ 0" in rhs:
							if idx == 0:
								clause = "Object.is" + lhs + "," + rhs + ")"
							else:
								clause = "Object.is(" + lhs + "," + rhs + ")"
					if idx < len(clauses)-1:
						newtext += clause + " && "
					else:
						newtext += clause
				text = newtext
			elif "||" in text:
				newtext = "("
				clauses = text.split("||")
				for idx, clause in enumerate(clauses):
					if " === " in clause:
						lhs = clause.split("===")[0].strip()
						rhs = clause.split("===")[1].strip()
						if "NaN" in rhs or "-0" in rhs or "+ 0" in rhs:
							if idx == 0:
								clause = "Object.is" + lhs + "," + rhs + ")"
							else:
								clause = "Object.is(" + lhs + "," + rhs + ")"
					if idx < len(clauses)-1:
						newtext += clause + " && "
					else:
						newtext += clause
				text = newtext
			

			else:
				lhs = text.split("===")[0].strip()
				rhs = text.split("===")[1].strip()
				text = "Object.is" + lhs + "," + rhs
		text = re.sub(r',\s*?,\s*?then\s*?,\s*?,', " ) { ", text)
		return text



	# method to generate a compilable test template function using 
	# the method call and natural language conditional statements identified 
	# identified using above defined methods for a given relevant section
	def generateCompilableTemplate(self, header, headingList):
		# testtemplate = self.template_content[header]
		testtemplate = self.template_content.get(header)
		if testtemplate == None:
			return

		methodname = " ".join(header.split()[1:]).split("(")[0].strip()
		templatecount = 0
		templates = []
		testname = methodname.replace(".","_").replace("-","_").replace(" ", "_").lower()
		vardecl = testtemplate[0]


		if "..." in vardecl:
			vardecl = vardecl.replace("...", "")

		if "[" in vardecl:
			vardecl = vardecl.replace("[", "")
			vardecl = vardecl.replace("]", "")
		if "randominput" in vardecl and "output" not in vardecl:
			args = "randominput "
		else:
			args = ""
		if "." in vardecl:
			arg1 = re.search(argpattern,vardecl.split(".")[0])
			arg2 = re.search(argpattern,vardecl.split(".")[1])
			if arg1 and len(arg1.group()) >2:
				if len(args) > 0:
					args = args + "," + arg1.group().replace("(", "").replace(")", "")
				else:
					args = args + arg1.group().replace("(", "").replace(")", "")
			if arg1 and arg2 and len(arg2.group()) >2:
					args = args + "," + arg2.group().replace("(", "").replace(")", "").replace("[", "").replace("]", "")
			elif arg2 and len(arg2.group()) >2:
				if len(args) > 0:
					args = args + ","  + arg2.group().replace("(", "").replace(")", "").replace("[", "").replace("]", "")
				else:
					args = args + arg2.group().replace("(", "").replace(")", "").replace("[", "").replace("]", "")
		else:
			if len(args) > 0:
				args = args + "," +  vardecl.split("(")[1].split(")")[0]
			else:
				args = args + vardecl.split("(")[1].split(")")[0]

		if "arguments" in args:
			args = args.replace("arguments", "args")
		if "randominput" not in args and "randominput" in vardecl:
			if args=="":
				args = "randominput"
			else:
				args = "randominput," + args

		testfunction = "function test_" + testname + "("+ args + "){"
		emptyTemplate = True
		for i in range(1, len(testtemplate)):
			testLine = testtemplate[i]
			testLine = re.sub(r'\*\*\*[0-9]*?\*\*\*', "", testLine)
			if testLine != "":
				emptyTemplate = False
		if emptyTemplate:
			return
		hIndex = 0
		hLast = headingList[hIndex]
		bracketOpen = False
		hlst = []
		# print(header)
		for i in range(1, len(testtemplate)):
			templatecount += 1
			test = ""
			testcondition = testtemplate[i]
			isOther = False
			# print(testcondition)
			headingSearch = re.search(r'\*\*\*[0-9]*?\*\*\*', testcondition, re.M|re.I)
			# if headingSearch:
			headingStr = headingSearch.group()
			headingStr = headingStr.replace("*", "")
			headingNo = int(headingStr)
			testcondition = re.sub(r'\*\*\*[0-9]*?\*\*\*', "", testcondition)

			lineTab = "\n\t"
			addTab = 0

			while addTab < headingNo:
				lineTab += "\t"
				addTab += 1


			if bracketOpen and headingNo <= hlst[-1]:
				# print(testcondition)
				testfunction += test + lineTab + "}" + lineTab
				del hlst[-1]
				if not hlst:
					bracketOpen = False

			if testcondition.strip() == "else":
				bracketOpen = True
				hlst.append(headingNo)
				test = "else {"
				# testfunction += lineTab + str(headingNo) + " " + test
			testfunction += lineTab + test

			if "while" in testcondition.strip():
				bracketOpen = True
				isOther = True
				hlst.append(headingNo)
				test = self.convertTextToCode(testcondition)
				testfunction += lineTab + test + " { "

			if "--ASSIGNMENT--" in testcondition.strip().split():
				if "=" in testcondition.strip():
					# test = testcondition.strip()
					test = testcondition.replace("--ASSIGNMENT--", "").strip()
					test = self.convertTextToCode(test)
					# testfunction += lineTab + str(headingNo) + " " + test
					# vPrefix = ""
					# currVar = test.strip().split()[0]
					# if currVar + " = " not in testfunction:
					# 	vPrefix = "var "
					vPrefix = "var "
					testfunction += lineTab + vPrefix + test
					isOther = True

			if "--INCDEC--" in testcondition.strip().split():
				if "=" in testcondition.strip():
					test = testcondition.replace("--INCDEC--", "").strip()
					test = self.convertTextToCode(test)
					testfunction += lineTab + test
					isOther = True

			if "if " not in testtemplate[i] and not isOther:
				# hLast = headingList[hIndex]
				hIndex += 1
				continue
			
			# comment out following two lines to generate templates for more sections
			# this was made possible by modifying existing patterns and adding more patterns
			if "weak" in testfunction or "set_prototype" in testfunction or "regexp_prototype" in testfunction or "get_sharedarraybuffer" in testfunction or "get_map" in testfunction or "number_prototype_tofixed" in testfunction or "sharedarraybuffer" in testfunction or "array_prototype_concat" in testfunction or "array_prototype_push" in testfunction or "array_prototype_sort" in testfunction or "array_prototype_splice" in testfunction or "atomics_wait" in testfunction or "test_number_prototype_tostring" in testfunction or "test_string_raw" in testfunction:
				# hLast = headingList[hIndex]
				hIndex += 1
				continue

			# testcondition = testtemplate[i]
			# test = ""

			## Still need to do some work with the multiline statements
			## If you want to remove multiline material from the templates, comment out all the following lines until you get to the STOP line

			# test = "" + ("\t" * headingList[hIndex])
			# if headingList[hIndex] != -1 and headingList[hIndex] < hLast:
			# 	test = test + "}\n"
			thenCheck = re.search(r',\s*?,\s*?then\s*?,\s*?,', testcondition)
			if thenCheck:
				# print(header)
				# print(testcondition)
				bracketOpen = True
				hlst.append(headingNo)
				test = self.convertTextToCode(testcondition)
				# print(test)
				# testfunction += lineTab + str(headingNo) + " " + "if " + test
				testfunction += lineTab + "if " + test


			if "return" in testcondition and not isOther:
				# print(testcondition)
				expectedinput = testcondition.split("return")[0].strip().split("if")[1].strip()
				expectedinput = self.convertTextToCode(expectedinput)
				expectedoutput = self.convertTextToCode(testcondition.split("return")[1].strip())
				if self.compiler == "rhino":
					test = "if (" + expectedinput + "){" + lineTab + "\t" + vardecl + lineTab + "\t" + "new TestCase(\"" + testname + "\", \"" + testname + "\", " + expectedoutput + ", output);" + lineTab + "\ttest();" + lineTab + "\treturn;" + lineTab + "\t}"
				elif self.compiler == "node":
					if "NaN" == expectedoutput.strip():
						test = "if (" + expectedinput + "){" + lineTab + "\t" + vardecl + lineTab + "\t" + "assert.strictEqual(isNaN(output), true);" + lineTab + "\tconsole.log(\"Good Test\");" + lineTab + "\treturn;" + lineTab + "\t}"
					else:
						test = "if (" + expectedinput + "){" + lineTab + "\t" + vardecl + "" + lineTab + "\t" + "assert.strictEqual(" + expectedoutput + ", output);" + lineTab + "\tconsole.log(\"Good Test\");" + lineTab + "\treturn;" + lineTab + "\t}"
				
				if test.count("(")!=test.count(")") or "performing" in test or "implementation" in test or "@@" in test or "«" in test or "[" in test or "either " in test or "finite " in test or "atomics_wait" in test or "concatenation" in test or "filler" in test or "searchLength" in test or "-searchStr" in test or " not " in test or "unit value of" in test:
					# hLast = headingList[hIndex]
					hIndex += 1
					continue
				testfunction = testfunction + lineTab + test
			if "throw" in testcondition and not isOther:
				expectedinput = testcondition.split("throw")[0].split("if")[1].strip()
				expectedinput = self.convertTextToCode(expectedinput)
				expectedoutput = self.convertTextToCode(testcondition.split("throw")[1].strip())
				if self.compiler == "rhino":
					test = "if (" + expectedinput + "){" + lineTab + "\t try{" + lineTab + "\t\t" + vardecl + lineTab + "\t\t return;"  + lineTab + "\t}catch(e){" + lineTab + "\t\t" + "new TestCase(\"" + testname + "\", \"" + testname + "\", true, eval(e instanceof "  + expectedoutput + "));" + lineTab + "\t\ttest();" + lineTab + "\t\treturn;" + lineTab + "\t}" + lineTab + "}"
				elif self.compiler == "node":
					test = "if (" + expectedinput + "){" + lineTab + "\t try{" + lineTab + "\t\t" + vardecl + lineTab + "\t\tconsole.log(\"Bad Test/Failed Test\");" + lineTab + "\t\t return;"  + lineTab + "\t}catch(e){" + lineTab + "\t\t" + "assert.strictEqual(true, eval(e instanceof "  + expectedoutput + "));" + lineTab + "\t\tconsole.log(\"Good Test\");" + lineTab + "\t\treturn;" + lineTab + "\t}" + lineTab + "}"
				if test.count("(")!=test.count(")") or "performing" in test or "implementation" in test or "@@" in test or "«" in test or "[" in test or "either " in test or "finite " in test or  "atomics_wait" in test or "concatenation" in test or "filler" in test or "searchLength" in test or "-searchStr" in test or " not " in test or "unit value of" in test:
					# hLast = headingList[hIndex]
					hIndex += 1
					continue
				testfunction = testfunction + lineTab + test
			# hLast = headingList[hIndex]
			hIndex += 1
		if self.compiler == "node":
			testfunction = testfunction + "\n\t\tconsole.log(\"OK Test\")\n}"  
		elif self.compiler == "rhino":	
			testfunction = testfunction + "\n}"  
		templates.append(testfunction)
		# tIndex = 1
		# for t in range(1, len(templates)):
		# 	print(tIndex, ": ", templates[t])
		template = ''.join(templates)
		# if len(testtemplate) > 1 and "if" in template and "unknown" not in template.split("){")[0] and  "NewTarget" not in template:
		if len(testtemplate) > 1 and "if" in template and "unknown" not in template.split("){")[0]:
			self.test_templates[header] = template

	# method to filter out sections that do not encode 
	# testable behavior or that cannot be invoked directly
	# in JavaScript such as abstract operations	
	def isTestable(self, header, body):
		if ": " in header or "@@" in header or "%" in header:
			return False
		if (int(header.split(".")[0]) < 20):
			return False
		if (")" in header and header.split(")")[1].strip() != ""):
			return False
		if "The abstract operation " in body:
			if body.split("The abstract operation")[1].split()[0].strip() in header:
				return False
		return True
		

	# This is the main method for this class. For each relevant section
	# identified, it first checks is the relevant sections is testable 
	# for example, it skips the sections describing abstract operations.
	# Next, if the section is testable, it extracts the method signature,
	# extracts the assignments and conditional statements, and finally
	# uses these to produce combilable test templates
	def generateTestTemplates(self, extracted_sections):
		numofsec = len(extracted_sections.keys())
		# printProgressBar(0, numofsec, prefix = 'Generating Test Templates Progress:', suffix = 'Complete', length = 50)
		# for idx, header in enumerate(sorted(extracted_sections)):
		for idx, header in enumerate(extracted_sections):
			header = header.replace("\xa0", " ")
			body0 = extracted_sections[header]
			bodyPOS = ""
			body = ""
			headingList = []
			for l in body0.split('\n'):
				line2 = l.replace("VAR", "")
				line2 = line2.replace("FUNC", "")
				if l != "":
					l2 = ""
					lT = l.split(' ')
					for x in lT:
						x2 = x
						x2 = re.sub(r'\*.*?\*', '', x2)
						if "FUNC" not in x2 and "VAR" not in x2:
							x2 = x2.lower()
						add = x2 + " "
						l2 += (add)
					l2 = l2.strip()
					partOfSpeechLine = self.getPOSTags(l2)
					bodyPOS += partOfSpeechLine + '\n'
					toAppend = -1
					headingSearch = re.search(r'\*.*?\*', line2, re.M | re.I)
					if headingSearch:
						heading = headingSearch.group()
						heading = heading.replace('*', '')
						headingNum = int(heading)
						toAppend = headingNum
					headingList.append(toAppend)
					line2 = re.sub(r'\*.*?\*', '', line2).strip()
					body += line2 + '\n'
			if(body.split('\n')[-1].strip()==''):
				headingList.append(-1)
			# printProgressBar(idx+1, numofsec, prefix = 'Generating Test Templates Progress:', suffix = 'Complete', length = 50)
			# if self.isTestable(header, body) is False:
			# continue
			if self.isTestable(header, body)==True:
				method_signature = self.getMethodSignature(header)
				self.extractAssignmentAndConditionals(header, body, method_signature, bodyPOS, headingList)
				self.generateCompilableTemplate(header, headingList)
		return self.test_templates	
