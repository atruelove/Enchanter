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
multiStepIfPatterns = ["IN", "NNP", "DT", ",", "RB"]
# altMultiStepIfPattern = ["IN", "DT", "VBZ", "JJ", ",", "RB"]
elsePattern = ["RB ,"]
whilePattern = ["NN", ",", "IN", "NNP"]
incrementPattern1 = ["IN", "CD", "."]
incrementPattern2 = ["NN", "NNP", "."]
assertPattern = ["NN", ":", "NN", "."]
forEachPattern = ["IN", "DT", ",", "VBP"]
performReturnPatterns = ["NN", ".", "NNP", "."]
elseIfPattern = ["RB", "NNP"]
plainRepeatPattern = "NN ,"
punct = ".,"
returnPunct = "!?"
splitElements = ["=", "==", "===", "<", ">", "!=", "<=", ">="]
excludedAbstractFunctions = []
bannedPhrases = ["zero-origined ", "performing", "implementation", "@@", "«", "either ", "finite ", "atomics_wait", "concatenation", "filler", "searchLength",
				 "-searchStr", " not ", "unit value of", "[[", "String value of", "Number value", " of ", "Number that", "this Date object", "code unit", ", when", "Shared Data Block",
				 "one of", "Size value"]
bannedFunctions = ["TypedArray"]

class TestTemplate(object):
	def __init__(self, relspecpath, compiler):
		self.template_content = {}
		self.test_templates = {}
		self.variable_dataset = {}
		self.relevant_spec_path = relspecpath
		self.compiler = compiler
		self.nlp = StanfordCoreNLP(r'lib/stanford-corenlp-full-2018-02-27')
		self.bannedVariables = []
		self.testableConditions = 0

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

	def checkOperators(self, text):
		spl = ""
		textSpl = text.split()
		for i in splitElements:
			if i in textSpl:
				spl = i
		return spl

	def expFunc(self, match):
		newText = match.group()
		newText = newText.replace("--EXP0--", ", ")
		newText = newText.replace("--EXP1--", " )")
		newText = "Math.pow( " + newText
		# print(newText)
		return newText

	# method to simplify the conditional statements extracted from the body of
	# relevant sections by translating English phrases in to syntaxtically valid code
	# and substituting the assignment variables with their values stored in dictionary  
	# the order of substitution matters!
	def substituteVars(self, text, sectionid):

		if text[0].isdigit() or ". " in text:
			text = "".join(text.split(". ")[1:])		
	
		expSearch = re.search(r'[0-9]*?--EXP0--[0-9]*?--EXP1--', text, re.M|re.I)
		if expSearch:
			# print(expSearch.group())
			text = re.sub(r'[0-9]*?--EXP0--[0-9]*?--EXP1--', self.expFunc, text)
		text = text.replace("--EXP0--", "")
		text = text.replace("--EXP1--", "")
		text = text.replace("ToNumber", "ToInteger")
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
		# text = re.sub(r', then$', " ,,then,,", text)
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
		# print(sectionid)
		for statement in body.split("\n"):
			hasAbstractCall = False
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
				# postags = self.nlp.pos_tag(statement)
				# match = False
				# for i in range(len(postags)):
				# 	if "NN" in postags[i][1]:
				# 		match = True
				# 		break
				# if not match:
				# 	index += 1
				# 	continue
				var, value = self.getAssignment(statement)
				# var = " " + var + " "
				if "." in value and ".length" not in value:
					value = value.split(".")[0]
				expSearch = re.search(r'[0-9]*?--EXP0--[0-9]*?--EXP1--', value, re.M | re.I)
				if expSearch:
					# print(expSearch.group())
					value = re.sub(r'[0-9]*?--EXP0--[0-9]*?--EXP1--', self.expFunc, value)
				if "the number of elements in" in value:
					value = value.replace("the number of elements in", "").strip() + ".length"
				if "the number of arguments passed to this function call" in value:
					value = "arguments.length"
				if "number of actual arguments" in value:
					value = "arguments.length"
				if "the length of" in value:
					value = re.sub(r'the length of', "", value).strip() + ".length"
				if "length of" in value:
					value = re.sub(r'length of', "", value).strip() + ".length"
				if "number of code units in" in value:
					value = value.replace("number of code units in", " ").strip()
					value += ".length"
				if "the active function object" in statement:
					funcObj = ' '.join(header.split()[1:])
					# print(funcObj)
					# print(value)
					value = " new " + funcObj
				if "the numeric value of the code unit at" in statement:
					tmpValue = value.replace("the numeric value of the code unit at index", "").strip()
					valSpl = tmpValue.split()
					valPos = valSpl[0]
					valArr = valSpl[-1]
					if valArr[-1] in punct:
						valArr = valArr[:-1]
					value = valArr + "[" + valPos + "].charCodeAt()"
				# if "undefined" in value.lower():
				# 	value = value.replace("undefined", "'undefined'")
				# 	value = value.replace("Undefined", "'undefined'")
				# 	var  = "typeof " + var
				self.variable_dataset[var,sectionid] = value
				abstractCheck = value.replace("  ", "").strip()
				abstractCheck = abstractCheck.replace(" (", "(")
				abstractCheck = abstractCheck.replace("(", "( ")
				abstractCheck = abstractCheck.replace(")", " )")
				abstractCheck = abstractCheck.replace(",", " ")
				abstractCheck = abstractCheck.replace("  ", " ").strip()
				if "(" in abstractCheck:
					abstractSplit = abstractCheck.split()
					for i in abstractSplit:
						if "(" in i:
							# funcName = re.sub(r'\(.*?\)', "", i)
							funcName = i.split("(")[0].strip()
							if funcName in excludedAbstractFunctions:
								hasAbstractCall = True
								if var not in self.bannedVariables:
									self.bannedVariables.append(var)
									# print(var)
				for j in abstractCheck.split():
					if j in self.bannedVariables:
						# print(j)
						# print(abstractCheck)
						hasAbstractCall = True
						if var not in self.bannedVariables:
							self.bannedVariables.append(var)
				# if hasAbstractCall:
				# 	updatedstatement = ""
				# else:
				updatedstatement = "--ASSIGNMENT-- " + str(var) + " = " + str(value)
				# if hasAbstractCall:
				# 	print(updatedstatement)
				statementAdded = True
				numvars += 1

			isMultiStepIf = False
			if len(POSElements) >= len(multiStepIfPatterns) + 1:
				if POSElements[0] == multiStepIfPatterns[0]:
					if POSElements[1] == multiStepIfPatterns[1] or (POSElements[1] == multiStepIfPatterns[2] and "newtarget" in statement.strip().lower().split()[1]):
					# if POSElements[1] == multiStepIfPatterns[1] or ("newtarget" in statement.lower().split[1]):
						if POSElements[-1] == multiStepIfPatterns[-1] and POSElements[-2] == multiStepIfPatterns[-2]:
							isMultiStepIf = True

			if isMultiStepIf:
				statementAdded = True
				# postags = self.nlp.pos_tag(statement)
				# match = False
				# for i in range(len(postags)):
				# 	if "NN" in postags[i][1]:
				# 		match = True
				# 		break
				# if not match:
				# 	index += 1
				# 	continue
				updatedstatement = re.sub(r', then', "", statement).strip()
				updatedstatement = self.substituteVars(updatedstatement, sectionid)
				if "," not in updatedstatement:
					updatedstatement = updatedstatement.replace(" or ", " || ")
				updatedstatement += "--MULTISTEP--"
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

			isElseIf = False
			if POSElements[0] == elseIfPattern[0] and POSElements[1] == elseIfPattern[1] and "else" in statement.split()[0].lower():
				isElseIf = True
			if isElseIf:
				statementAdded = True
				updatedstatement = statement.strip()
				updatedstatement = updatedstatement.replace("Else ", "( ")
				if updatedstatement.strip()[-1] in punct:
					updatedstatement = updatedstatement.strip()[:-1]
				if updatedstatement.strip()[-1] != ')':
					updatedstatement = updatedstatement + " ) { "
				updatedstatement = self.substituteVars(updatedstatement, sectionid)
				updatedstatement = "--ELSEIF--" + updatedstatement

			isWhile = False
			if len(POSElements) >= len(whilePattern):
				if POSElements[0] == whilePattern[0] and POSElements[1] == whilePattern[1] and POSElements[2] == whilePattern[2] and POSElements[3] == whilePattern[3]:
					isWhile = True
			if isWhile:
				statementAdded = True
				updatedstatement = statement.replace("repeat, ", "")
				updatedstatement = updatedstatement.replace("Repeat, ", "")
				updatedstatement = updatedstatement.replace("while", "while ( ")
				if updatedstatement.strip()[-1] in punct:
					updatedstatement = updatedstatement.strip()[:-1]
				if updatedstatement.strip()[-1] != ')':
					updatedstatement = updatedstatement + " ) "
				updatedstatement = self.substituteVars(updatedstatement, sectionid)
				# if POS[index] == "NN , IN NNP CC NN : NNP":
				# 	print(updatedstatement)

			isPlainWhile = False
			if POS[index] == plainRepeatPattern:
				isPlainWhile = True
			if isPlainWhile:
				statementAdded = True
				updatedstatement = "while ( true ) {"


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

			isForEach = False
			if len(POSElements) >= len(forEachPattern) and "for each" in statement.lower():
				if POSElements[0] == forEachPattern[0] and POSElements[1] == forEachPattern[1] and POSElements[-1] == forEachPattern[-1] and POSElements[-2] == forEachPattern[-2]:
					isForEach = True
			if isForEach:
				statementAdded = True
				fVar = ""
				fArray = ""
				tmpStatement = statement.strip()
				tmpStatement = tmpStatement.replace(",", " ,")
				tmpStatement = tmpStatement.replace("[", " [ ")
				tmpStatement = tmpStatement.replace("]", " ] ")
				tmpStatement = tmpStatement.replace("(", " ( ")
				tmpStatement = tmpStatement.replace(")", " ) ")
				tmpStatement = tmpStatement.replace("  ", " ")
				splitStatement = tmpStatement.split()
				openBracket = False
				pIndex = 0
				# print(POSElements)
				# print(splitStatement)
				while pIndex < len(POSElements) and fVar == "":
					if POSElements[pIndex] == "(":
						openBracket = True
					if POSElements[pIndex] == ")":
						openBracket = False
					if POSElements[pIndex] == "NNP" and not openBracket:
						fVar = splitStatement[pIndex]
					pIndex += 1

				pIndex = len(POSElements) - 1
				while pIndex >= 0 and fArray == "":
					if POSElements[pIndex] == "NNP" or POSElements[pIndex] == "NNS":
						fArray = splitStatement[pIndex]
					pIndex -= 1
				updatedstatement = fArray + ".forEach(function( " + fVar + " ) ) "
				if "reverse" in statement.lower():
					updatedstatement = updatedstatement + "--REVERSE--"
				# print(updatedstatement)

			isAssert = False
			if len(POSElements) >= len(assertPattern):
				if POSElements[0] == assertPattern[0] and POSElements[1] == assertPattern[1]:
					if assertPattern[2] in POSElements[2] and POSElements[-1] == assertPattern[-1] and "assert" in statement.lower():
						isAssert = True
			if isAssert:
				# statementAdded = True
				updatedstatement = statement.replace("Assert:", "").strip()
				updatedstatement = self.substituteVars(updatedstatement, sectionid)
				updatedstatement = updatedstatement.replace("< =", "<= ")
				updatedstatement = updatedstatement.replace("> =", ">= ")
				equalCheck = re.search(r'===', updatedstatement, re.M|re.I)
				if not equalCheck:
					if " = " in updatedstatement:
						updatedstatement = updatedstatement.replace(" = ", " === ")
						equalCheck = True
					if " == " in updatedstatement:
						updatedstatement = updatedstatement.replace(" == ", " === ")
						equalCheck = True
				if equalCheck:
					splAssert = updatedstatement.split("===")
					if "nonnegative integer" in updatedstatement.lower():
						updatedstatement = splAssert[0] + " > 0"
					else:
						if "such that" in splAssert[1]:
							tmpStatement = re.sub(r'^.*?such that', "", splAssert[1])
							# print(tmpStatement)
							spl = self.checkOperators(tmpStatement)
							if spl != "":
								splAssert2 = tmpStatement.split(spl)
								# print(splAssert2)
							updatedstatement = splAssert2[0] + " " + spl + " " + splAssert2[1] + " && " + splAssert2[1] + " " + spl + " " + splAssert2[-1]
						else:
							spl = self.checkOperators(splAssert[1])
							if spl != "":
								splAssert2 = splAssert[1].split(spl)
								# spl2 = self.checkOperators(splAssert2[1])
								# if spl2 != "":
								# 	print(splAssert[0])
								# 	print(splAssert[1])
								# 	print(splAssert2[0])
								# 	print(splAssert2[1])
								# 	print(spl)
								# 	print(spl2)
								updatedstatement = splAssert[0] + " " + spl + " " + splAssert2[1]
				updatedstatement = "--ASSERT--" + updatedstatement
				# self.testableConditions += 1
				# print(updatedstatement)

			isPerform = False
			isReturn = False
			if len(POSElements) >= len(performReturnPatterns)-1:
				if POSElements[-1] == performReturnPatterns[-1] and POSElements[0] == performReturnPatterns[0]:
					if POSElements[1] == performReturnPatterns[1] or POSElements[1] == performReturnPatterns[2]:
						# print(statement)
						if "perform" in statement.lower():
							isPerform = True
						elif "return" in statement.lower():
							isReturn = True
				if not isPerform and not isReturn and POSElements[-1] == performReturnPatterns[-1] and POSElements[0] == performReturnPatterns[0]:
					if "return" in statement.lower():
						isReturn = True
			if isPerform:
				statementAdded = True
				updatedstatement = statement.replace("Perform", "")
				updatedstatement = self.substituteVars(updatedstatement.strip(), sectionid)
				updatedstatement = updatedstatement.strip()
				if updatedstatement[0] in returnPunct:
					updatedstatement = updatedstatement[1:]
				absFuncCheck = updatedstatement.split()
				if absFuncCheck[0].strip() in excludedAbstractFunctions:
					statementAdded = False
				updatedstatement = "--PERFORM--" + updatedstatement

			if isReturn:
				statementAdded = True
				updatedstatement = statement.replace("Return", "").strip()# + "."
				if updatedstatement[0] in returnPunct:
					updatedstatement = updatedstatement[1:]
				updatedstatement = self.substituteVars(updatedstatement.strip(), sectionid)
				updatedstatement = "--RETURN--" + updatedstatement
				if headingList[index] > 0:
					self.testableConditions += 1
				# print(updatedstatement)

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
			if len(POSElements) >= len(ifResultPOSPatterns) and POSElements[0] == ifResultPOSPatterns[0] and POSElements[-1] == ifResultPOSPatterns[-1]:
				if POSElements[1] == ifResultPOSPatterns[1] or (POSElements[1] == "DT" and "newtarget" in statement.lower().split()[1]):
				# if POSElements[1] == ifResultPOSPatterns[1] or ("newtarget" in statement.lower()):
					isinputoutput = True
			if isinputoutput:
				statementAdded = True
				# postags = self.nlp.pos_tag(statement)
				# match = False
				# for i in range(len(postags)):
				# 	if "NN" in postags[i][1]:
				# 		match = True
				# 		break
				# if not match:
				# 	index += 1
				# 	continue
				updatedstatement = self.substituteVars(statement, sectionid)
				self.testableConditions += 1
				tmpvars = numvars
				# while(updatedstatement != self.substituteVars(updatedstatement, sectionid) and tmpvars > 0):
				# 	updatedstatement = self.substituteVars(updatedstatement, sectionid)
				# 	tmpvars -= 1
				# if header not in self.template_content:
				# 	self.template_content[header] = [methodsignature]
				# self.template_content[header].append(updatedstatement)

			if not statementAdded:
				stripLine = statement.strip()
				if stripLine[-1] == ',':
					statementAdded = True
					updatedstatement = "{"

			usesBannedVar = False
			if statementAdded:
				bannedVarLine = updatedstatement.replace("  ", " ").strip()
				bannedVarLine = re.sub(r'--.*?--', "", bannedVarLine)
				bannedVarLine = bannedVarLine.replace(" (", "(")
				bannedVarLine = bannedVarLine.replace(")", " )")
				bannedVarLine = bannedVarLine.replace("  ", " ")
				bannedVarLine = bannedVarLine.strip()
				# print(bannedVarLine)
				bannedVarSpl = bannedVarLine.split()
				for i in bannedVarSpl:
					if "(" in i and i != "if(":
						# print(bannedVarLine)
						testFunc = i.split("(")[0]
						testFunc = re.sub(r'\.\[\[.*?\]\]', "", testFunc)
						# print(testFunc)
						if testFunc in excludedAbstractFunctions:
							usesBannedVar = True
					if i in self.bannedVariables:
						usesBannedVar = True
			if usesBannedVar or hasAbstractCall:
				# print(updatedstatement)
				updatedstatement += "--HASABSTRACT--"
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
		text = text.replace("×", "*")
		text = text.replace("«", "[")
		text = text.replace("»", "]")
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
		text = text.replace("min(", "Math.min (")
		text = text.replace("max(", "Math.max (")
		text = text.replace("abs(", "Math.abs (")
		text = text.replace("modulo", "%")
		text = text.replace("either", "")
		if "undefined" in text.lower():
			spl = self.checkOperators(text)
			if spl != "" and spl != "=" and spl != "==":
				text = text.replace("undefined", "'undefined'")
				text = text.replace("Undefined", "'undefined'")
				if text.strip()[0] != '(':
					text = "typeof " + text
				else:
					text = "( typeof " + text.strip()[1:]
		if "typeof" in text.lower() and ("===" in text or "!=" in text):
			splitter = "==="
			if "!=" in text:
				splitter = "!="
			checkText = text.split(splitter)[1].split()
			if "Boolean" in checkText:
				text = text.replace("Boolean", " \"boolean\" ")
			if "String" in checkText:
				text = text.replace("String", " \"string\" ")
			if "Object" in checkText:
				text = text.replace("Object", " \"object\" ")
			if "Number" in checkText:
				text = text.replace("Number", " \"number\" ")

		if "already an integer" in text:
			var = text.split("===")[0].split("(")[1]
			text = text.replace("already an integer", "parseInt(" + var +", 10)")
		if "number of elements in" in text:
			text =  text.split("number of elements in")[0] + text.split("number of elements in")[1].replace(") ) )", ") ).length )")		

		if (len(text) > 1):
			if text[-1] == ".":
				text = text[:-1]

		if re.search(r'===\s*?not', text, re.I|re.M):
			text = re.sub(r'===\s*?not', "!=", text)
	
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
		# text = re.sub(r',\s*?,\s*?then\s*?,\s*?,', " ) { ", text)
		newSearch = re.search(r'a newly created .*? object', text, re.I | re.M)
		if newSearch:
			text = text.replace("a newly created", "")
			text = text.replace("object)", ")")
		return text



	# method to generate a compilable test template function using 
	# the method call and natural language conditional statements identified 
	# identified using above defined methods for a given relevant section
	def generateCompilableTemplate(self, header, headingList):

		def writeCompleteBlocks(tmpLines, emptyBlock, lineTab, levels, lastLevel):
			if not tmpLines:
				diff = 0
				diffTab = "\n"
				nLine = ""
				while diff < lastLevel:
					i = diff
					while i < lastLevel:
						diffTab += "\t"
						i += 1
					nLine = diffTab + "}\n" + nLine
					diff += 1
				outLine = nLine# + "\n\t}"
				# outLine = "\n\t}"
				# return lineTab + "}"
				return outLine
			if emptyBlock[0] != 0:
				# outLine = "\n" + str(levels[0]) + " " + tmpLines[0]
				outLine = tmpLines[0]
				# print("")
				# print(levels[0])
				# print(lastLevel)
				# print(outLine)
				if levels[0] < lastLevel:
					# print("TRUE")
					diff = abs(lastLevel - levels[0])
					i = diff
					diffTab = "\n\t"
					while i < lastLevel:
						diffTab += "\t"
						i += 1
					# outLine = diffTab + "}" + lineTab + outLine
					outLine = diffTab + "}" + lineTab + outLine
					# print(outLine)
				# print(outLine)
				newEmptyBlock = emptyBlock[1:]
				newTmpLines = tmpLines[1:]
				newLevels = levels[1:]
				# newLastLevel = lastLevel
				# if emptyBlock[0] == 1:
				newLastLevel = levels[0]
				newTab = lineTab + "\t"
				outLine += writeCompleteBlocks(newTmpLines, newEmptyBlock, newTab, newLevels, newLastLevel)
				# if emptyBlock[0] == 1:
				# 	print(tmpLines[0])
				# 	outLine += newTab + "}"
				return outLine
			outLine = ""
			newEmptyBlock = emptyBlock[1:]
			newTmpLines = tmpLines[1:]
			newLevels = levels[1:]
			outLine += writeCompleteBlocks(newTmpLines, newEmptyBlock, lineTab, newLevels, lastLevel)
			return outLine

		def notEmptyBlock(emptyBlock, levels, newLevel):
			i = 0
			while i < len(emptyBlock):
				if emptyBlock[i] == 0 and levels[i] < levels[-1]:
					emptyBlock[i] = 1
				i += 1
			if levels[-1] < newLevel:
				emptyBlock[-1] = 1
			return emptyBlock

		# testtemplate = self.template_content[header]
		testtemplate = self.template_content.get(header)
		if testtemplate == None:
			return

		def checkForBannedPhrase(text):
			hasBanned = False
			for i in bannedPhrases:
				if i in text:
					hasBanned = True
			return hasBanned

		methodname = " ".join(header.split()[1:]).split("(")[0].strip()
		templatecount = 0
		templates = []
		testname = methodname.replace(".","_").replace("-","_").replace(" ", "_").lower()
		vardecl = testtemplate[0]
		# if "22.1.2.1" in header:
		# 	print(header)
		# 	print(testtemplate)
		# 	print(vardecl)


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
		emptyBlock = []
		tmpLines = []
		hlst = []
		levels = []
		# print(header)
		foundTestable = 0
		badBlock = False
		badLevel = 0
		assertAdded = False
		returnThrowAdded = False
		openIfs = []
		# elseWatch = False
		for i in range(1, len(testtemplate)):
			elseWatch = False
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
			hasAbstract = False
			if "--HASABSTRACT--" in testcondition.strip():
				hasAbstract = True
				# testcondition = testcondition.replace("--HASABSTRACT--", "")

			lineTab = "\n\t"
			addTab = 0

			while addTab < headingNo:
				lineTab += "\t"
				addTab += 1

			if badBlock:
				if headingNo <= badLevel:
					# print(badLevel)
					# print("H: ", headingNo)
					# print(testcondition)
					badBlock = False
					badLevel = 0

			if bracketOpen and headingNo <= hlst[-1]:
				# print(testcondition)
				# if emptyBlock[-1]:
				# 	del emptyBlock[-1]
				# 	del tmpLines[-1]
				del hlst[-1]
				if openIfs:
					if openIfs[-1][0] > headingNo:
						del openIfs[-1]
					elif openIfs[-1][0] == headingNo:
						# print(header)
						# print(openIfs)
						# print(testcondition)
						elseWatch = True
						del openIfs[-1]
				# 	# tmpLines[-1] += tmpLines + lineTab  + "}" + lineTab
				# 	transfer = tmpLines[-1] + lineTab + "}" + lineTab
				# 	if len(tmpLines) > 1:
				# if emptyBlock[-1]:
				# 	del emptyBlock[-1]
				# 	del tmpLines[-1]
				# 	del hlst[-1]
				if not hlst:
					# print("tmpLines :", len(tmpLines))
					# print("emptyBlock :",	len(emptyBlock))
					test = writeCompleteBlocks(tmpLines, emptyBlock, lineTab, levels, -1)
					# print(test)
					testfunction += test
					bracketOpen = False
					del tmpLines[:]
					del emptyBlock[:]
					del levels[:]
					tmpLines = []
					emptyBlock = []
					levels = []

			# if "--INCDEC--" in testcondition.strip().split():
			# 	if "=" in testcondition.strip():
			# 		isOther = True
			# 		if hasAbstract or badBlock:
			# 			hIndex += 1
			# 			continue
			# 		test = testcondition.replace("--INCDEC--", "").strip()
			# 		test = self.convertTextToCode(test)
			# 		if not bracketOpen:
			# 			testfunction += lineTab + test
			# 		elif test.strip() != "":
			# 			emptyBlock = notEmptyBlock(emptyBlock, levels, headingNo)
			# 			emptyBlock.append(2)
			# 			tmpLines.append(lineTab + test)
			# 			levels.append(headingNo)
					# isOther = True
					# toAdd = ""
					# # if not hasAbstract or :
					# toAdd = test
					# if not bracketOpen:
					# 	testfunction += lineTab + test
					# elif test.strip() != "":
					# 	emptyBlock = notEmptyBlock(emptyBlock, levels)
					# 	emptyBlock.append(2)
					# 	tmpLines.append(lineTab + toAdd)
					# 	print(toAdd)
					# 	levels.append(headingNo)

			if foundTestable >= self.testableConditions and not bracketOpen:
				hIndex += 1
				continue

			if "--INCDEC--" in testcondition.strip().split():
				if "=" in testcondition.strip():
					isOther = True
					if hasAbstract or badBlock:
						hIndex += 1
						continue
					test = testcondition.replace("--INCDEC--", "").strip()
					test = self.convertTextToCode(test)
					if not bracketOpen:
						testfunction += lineTab + test
					elif test.strip() != "":
						emptyBlock = notEmptyBlock(emptyBlock, levels, headingNo)
						emptyBlock.append(2)
						tmpLines.append(lineTab + test)
						levels.append(headingNo)

			if testcondition.strip() == "else":
				if badBlock:
					hIndex += 1
					continue
				elif hasAbstract:
					badBlock = True
					badLevel = headingNo
					hIndex +=1
					continue
				bracketOpen = True
				hlst.append(headingNo)
				test = "else {"
				test = lineTab + test
				# testfunction += lineTab + test
				# if not hasAbstract and not badBlock:
				if test.count("(")!=test.count(")") or checkForBannedPhrase(test):
					hIndex += 1
					badBlock = True
					badLevel = headingNo
					continue
				tmpLines.append(test)
				emptyBlock.append(0)
				levels.append(headingNo)

			if "while" in testcondition.strip():
				isOther = True
				if badBlock:
					hIndex += 1
					continue
				elif hasAbstract:
					badBlock = True
					badLevel = headingNo
					hIndex +=1
					continue
				bracketOpen = True
				hlst.append(headingNo)
				if "while ( true )" in testcondition:
					test = testcondition.strip()
					test = lineTab + test
				else:
					test = self.convertTextToCode(testcondition)
					# print(test)
					# testfunction += lineTab + test + " { "
					test = lineTab + test + " { "
				if test.count("(") != test.count(")") or checkForBannedPhrase(test):
					hIndex += 1
					badBlock = True
					badLevel = headingNo
					continue
				tmpLines.append(test)
				emptyBlock.append(0)
				levels.append(headingNo)

			if testcondition.strip() == "{":
				isOther = True
				if badBlock:
					hIndex += 1
					continue
				elif hasAbstract:
					badBlock = True
					badLevel = headingNo
					hIndex +=1
					continue
				bracketOpen = True
				hlst.append(headingNo)
				test = "{" #self.convertTextToCode(testcondition)
				# print(test)
				# testfunction += lineTab + test + " { "
				if test.count("(") != test.count(")") or checkForBannedPhrase(test):
					hIndex += 1
					badBlock = True
					badLevel = headingNo
					continue
				test = lineTab + test
				tmpLines.append(test)
				emptyBlock.append(0)
				levels.append(headingNo)

			if ".forEach" in testcondition:
				isOther = True
				if badBlock:
					hIndex += 1
					continue
				elif hasAbstract:
					badBlock = True
					badLevel = headingNo
					hIndex +=1
					continue
				# print(testcondition)
				bracketOpen = True
				hlst.append(headingNo)
				test = self.convertTextToCode(testcondition)
				if "--REVERSE--" in testcondition:
					test = test.replace("--REVERSE--", "")
				# testfunction += lineTab + test + " { "
				test = lineTab + test + " { "
				if test.count("(") != test.count(")") or checkForBannedPhrase(test):
					hIndex += 1
					badBlock = True
					badLevel = headingNo
					continue
				tmpLines.append(test)
				emptyBlock.append(0)
				levels.append(headingNo)

			if "--ASSIGNMENT--" in testcondition.strip().split():
				if "=" in testcondition.strip():
					isOther = True
					if hasAbstract or badBlock:
						hIndex += 1
						continue
					# test = testcondition.strip()
					test = testcondition.replace("--ASSIGNMENT--", "").strip()
					test = self.convertTextToCode(test)
					if "randominput" in test and "randominput" not in args:
						test = test.replace("randominput", "null")
					# testfunction += lineTab + str(headingNo) + " " + test
					# vPrefix = ""
					# currVar = test.strip().split()[0]
					# if currVar + " = " not in testfunction:
					# 	vPrefix = "var "
					vPrefix = "var "
					if test.count("(") != test.count(")") or checkForBannedPhrase(test):
						hIndex += 1
						continue
					if not bracketOpen:
						testfunction += lineTab + vPrefix + test + ";"
					elif test.strip() != "":
						emptyBlock = notEmptyBlock(emptyBlock, levels, headingNo)
						emptyBlock.append(2)
						tmpLines.append(lineTab + vPrefix + test + ";")
						levels.append(headingNo)

			if "--ASSERT--" in testcondition.strip():
				isOther = True
				foundTestable += 1
				if hasAbstract or badBlock:
					hIndex += 1
					continue
				test = testcondition.replace("--ASSERT--", "").strip()
				test = self.convertTextToCode(test)
				if self.compiler == "node":
					test = "if ( " + test + " ) {"
					# test += lineTab + "\t" + "console.log(\"Assert Passed\");"
					test += lineTab + "\t" + "//console.log(\"\");"
					test += lineTab + "}"
					test += lineTab + "else { "
					# test += lineTab + "\t" + "console.log(\"Bad Test/Failed Test - Assert\");"
					test += lineTab + "\t" + "console.log(\"Bad Test/Failed Test\");"
					test += lineTab + "\t" + "return;"
					test += lineTab + "} "
				elif self.compiler == "rhino":
					# splitElements = ["=", "==", "===", "<", ">", "!=", "<=", ">="]
					splitter = ""
					# testSpl = test.split()
					for s in splitElements:
						if s in test:
							splitter = s
					if splitter == "":
						continue
					# test = "if ( " + test + " ) {"
					testRefinedSplit = test.split(splitter)
					newTest  = "new TestCase(\"" + testname + "\", \"" + testname + "\", " + testRefinedSplit[0] + ", " + testRefinedSplit[1] + ");"
					newTest += lineTab + "\ttest();"# + lineTab + "\treturn;"
					test = newTest
				if test.count("(") != test.count(")") or checkForBannedPhrase(test):
					hIndex += 1
					continue
				assertAdded = True
				if not bracketOpen:
					testfunction = testfunction + lineTab + test
				elif test.strip() != "":
					emptyBlock = notEmptyBlock(emptyBlock, levels, headingNo)
					emptyBlock.append(2)
					tmpLines.append(lineTab + test)
					levels.append(headingNo)

			if "--PERFORM--" in testcondition.strip():
				isOther = True
				if hasAbstract or badBlock:
					hIndex += 1
					continue
				# print(testcondition)
				test = testcondition.replace("--PERFORM--", "").strip()
				# test = test.replace("! ", "")
				# test = test.replace("? ", "")
				# test = test.strip()
				test = self.convertTextToCode(test)
				# print(test)
				if test.count("(") != test.count(")") or checkForBannedPhrase(test):
					hIndex += 1
					continue
				if not bracketOpen:
					testfunction += lineTab + test
				elif test.strip() != "":
					emptyBlock = notEmptyBlock(emptyBlock, levels, headingNo)
					emptyBlock.append(2)
					tmpLines.append(lineTab + test)
					levels.append(headingNo)

			if "--RETURN--" in testcondition.strip():
				isOther = True
				foundTestable += 1
				if hasAbstract or badBlock:
					hIndex += 1
					continue
				expectedoutput = testcondition.replace("--RETURN--", "").strip()
				# print("Var: ", expectedoutput)
				expectedoutput = self.convertTextToCode(expectedoutput)
				if self.compiler == "node":
					test = vardecl + "" + lineTab + "\t" + "assert.strictEqual(" + expectedoutput + ", output);" + lineTab + "\tconsole.log(\"Good Test\");" + lineTab + "\treturn;"
				if self.compiler == "rhino":
					test = vardecl + lineTab + "\t" + "new TestCase(\"" + testname + "\", \"" + testname + "\", " + expectedoutput + ", output);" + lineTab + "\ttest();" + lineTab + "\treturn;"
				# print(test)
				if test.count("(") != test.count(")") or checkForBannedPhrase(test):
					hIndex += 1
					continue
				if headingNo != 0:
					returnThrowAdded = True
					if not bracketOpen:
						testfunction += lineTab + test
					elif test.strip() != "":
						emptyBlock = notEmptyBlock(emptyBlock, levels, headingNo)
						emptyBlock.append(2)
						tmpLines.append(lineTab + test)
						levels.append(headingNo)

			if "--ELSEIF--" in testcondition.strip():
				isOther = True
				if badBlock:
					hIndex += 1
					continue
				elif hasAbstract:
					badBlock = True
					badLevel = headingNo
					hIndex +=1
					continue
				bracketOpen = True
				hlst.append(headingNo)
				test = testcondition.replace("--ELSEIF--", "")
				# print(elseWatch)
				# print(self.convertTextToCode(test))
				# if elseWatch:
				# 	test = "else if " + self.convertTextToCode(test)
				# else:
				# 	test = "if " + self.convertTextToCode(test)
				# 	openIfs.append([headingNo, test])
				test = "if " + self.convertTextToCode(test)
				openIfs.append([headingNo, test])
				if test.count("(") != test.count(")") or checkForBannedPhrase(test):
					hIndex += 1
					badBlock = True
					badLevel = headingNo
					continue
				test = lineTab + test
				tmpLines.append(test)
				emptyBlock.append(0)
				levels.append(headingNo)


			if "if " not in testtemplate[i].lower() and not isOther:
				# hLast = headingList[hIndex]
				hIndex += 1
				continue
			
			# comment out following two lines to generate templates for more sections
			# this was made possible by modifying existing patterns and adding more patterns
			if "weak" in testfunction or "set_prototype" in testfunction or "regexp_prototype" in testfunction or "get_sharedarraybuffer" in testfunction or "get_map" in testfunction or "number_prototype_tofixed" in testfunction or "sharedarraybuffer" in testfunction or "array_prototype_concat" in testfunction or "array_prototype_push" in testfunction or "array_prototype_sort" in testfunction or "array_prototype_splice" in testfunction or "atomics_wait" in testfunction or "test_number_prototype_tostring" in testfunction or "test_string_raw" in testfunction:
				# hLast = headingList[hIndex]
				hIndex += 1
				continue

			# test = "" + ("\t" * headingList[hIndex])
			# if headingList[hIndex] != -1 and headingList[hIndex] < hLast:
			# 	test = test + "}\n"
			# thenCheck = re.search(r',\s*?,\s*?then\s*?,\s*?,', testcondition)
			if "--MULTISTEP--" in testcondition:
				if badBlock:
					hIndex += 1
					continue
				elif hasAbstract:
					badBlock = True
					badLevel = headingNo
					hIndex +=1
					continue
				bracketOpen = True
				hlst.append(headingNo)
				test = testcondition.replace("--MULTISTEP--", "")
				test = self.convertTextToCode(test) + " ) {"
				if test.count("(") != test.count(")") or checkForBannedPhrase(test):
					hIndex += 1
					badBlock = True
					badLevel = headingNo
					continue
				# print(test)
				# testfunction += lineTab + str(headingNo) + " " + "if " + test
				# testfunction += lineTab + "if " + test
				test = lineTab + "if " + test
				openIfs.append([headingNo, test])
				tmpLines.append(test)
				emptyBlock.append(0)
				levels.append(headingNo)


			if "return" in testcondition and not isOther:
				foundTestable += 1
				if hasAbstract or badBlock:
					hIndex += 1
					continue
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

				if test.count("(") != test.count(")") or checkForBannedPhrase(test):
					# hLast = headingList[hIndex]
					hIndex += 1
					continue
				if headingNo == 0:
					hIndex += 1
					continue
				returnThrowAdded = True
				if not bracketOpen:
					testfunction = testfunction + lineTab + test
				elif test.strip() != "":# and not hasAbstract and not badBlock:
					emptyBlock = notEmptyBlock(emptyBlock, levels, headingNo)
					emptyBlock.append(2)
					tmpLines.append(lineTab + test)
					levels.append(headingNo)
			if "throw" in testcondition and not isOther:
				foundTestable += 1
				if hasAbstract or badBlock:
					hIndex += 1
					continue
				expectedinput = testcondition.split("throw")[0].split("if")[1].strip()
				expectedinput = self.convertTextToCode(expectedinput)
				expectedoutput = self.convertTextToCode(testcondition.split("throw")[1].strip())
				if self.compiler == "rhino":
					test = "if (" + expectedinput + "){" + lineTab + "\t try{" + lineTab + "\t\t" + vardecl + lineTab + "\t\t return;"  + lineTab + "\t}catch(e){" + lineTab + "\t\t" + "new TestCase(\"" + testname + "\", \"" + testname + "\", true, eval(e instanceof "  + expectedoutput + "));" + lineTab + "\t\ttest();" + lineTab + "\t\treturn;" + lineTab + "\t}" + lineTab + "}"
				elif self.compiler == "node":
					usesNode = True
					test = "if (" + expectedinput + "){" + lineTab + "\t try{" + lineTab + "\t\t" + vardecl + lineTab + "\t\tconsole.log(\"Bad Test/Failed Test\");" + lineTab + "\t\t return;"  + lineTab + "\t}catch(e){" + lineTab + "\t\t" + "assert.strictEqual(true, eval(e instanceof "  + expectedoutput + "));" + lineTab + "\t\tconsole.log(\"Good Test\");" + lineTab + "\t\treturn;" + lineTab + "\t}" + lineTab + "}"
				if test.count("(") != test.count(")") or checkForBannedPhrase(test):
					hIndex += 1
					continue
				if headingNo == 0:
					hIndex += 1
					continue
				returnThrowAdded = True
				if not bracketOpen:
					testfunction = testfunction + lineTab + test
				elif test.strip() != "":# and not hasAbstract and not badBlock:
					emptyBlock = notEmptyBlock(emptyBlock, levels, headingNo)
					emptyBlock.append(2)
					tmpLines.append(lineTab + test)
					levels.append(headingNo)
			# hLast = headingList[hIndex]
			hIndex += 1
			# if i == len(testtemplate) and bracketOpen:
			# 	testfunction += lineTab + "}"
			# 	bracketOpen = False
		# if bracketOpen:
		# 	print("Still Open!")
		# 	print(header)
		if self.compiler == "node":
			addtoTestFunction = "\n\t\tconsole.log(\"OK Test\")\n}"
			if assertAdded and not returnThrowAdded:
				addtoTestFunction = "\n\t\tconsole.log(\"Good Test\")\n}"
			testfunction = testfunction + addtoTestFunction
			# testfunction = testfunction + "\n\t\tconsole.log(\"OK Test\")\n}"
		elif self.compiler == "rhino":	
			testfunction = testfunction + "\n}"

		# def writeToTemplate(newTemplate, tmpTemplates, index, openB, tmpLines):
		# 	if index == len(tmpTemplates):
		# 		newTemplate = newTemplate + tmpTemplates[index]
		# 		return newTemplate
		# 	if (index == 0):
		# 		newTemplate = newTemplate + tmpTemplates[0]  + "\n"
		# 		out = writeToTemplate(newTemplate, tmpTemplates, index + 1, False, "")
		# 		return out
		# 	else:
		# 		currentLine = tmpTemplates[index].strip()
		# 		if openB:
		# 			if currentLine[-1] == ';':
		# 				tmpLines = tmpLines + tmpTemplates[index] + "\n"
		# 				return
		# 		if not openB:
		# 			if currentLine[-1] == ';':
		# 				newTemplate = newTemplate + tmpTemplates[index]  + "\n"
		# 				return writeToTemplate(newTemplate, tmpTemplates, index + 1, False, "")
		# 			elif currentLine[-1] == '{':
		# 				tmpLines = tmpTemplates[index]  + "\n"
		# 				out = writeToTemplate(newTemplate, tmpTemplates, index + 1, True, tmpLines)
		# 				if out != "":
		# 					newTemplate

		tmpTemplates = testfunction.split("\n")
		newTemplate = ""
		index = 1
		openB = False
		tmpLines = ""
		# hasContent = False
		# writeToTemplate(newTemplate, tmpTemplates, index, openB, hasContent)
		# newTemplate += tmpTemplates[0] + "\n"
		# while index < len(tmpTemplates):
		# 	currentLine = tmpTemplates[index].strip()
		# 	if not openB:
		# 		if currentLine[-1] == ";":
		#


		templates.append(testfunction)
		# print(templates)
		# print(len(templates))
		finalTemplates = []
		# tIndex = 1
		# for t in range(1, len(templates)):
		# 	print(tIndex, ": ", templates[t])
		template = ''.join(templates)
		addTemplate = False
		# if len(testtemplate) > 1 and "if" in template and "unknown" not in template.split("){")[0] and  "NewTarget" not in template:
		if len(testtemplate) > 1 and "if" in template and "unknown" not in template.split("){")[0]:
			if self.compiler == "node":
				if "console.log(\"Good Test" in template or "console.log(\"Bad Test/Failed Test" in template:
					addTemplate = True
			elif self.compiler == "rhino":
				if "new TestCase(" in template and "test();" in template:
					addTemplate = True
			# if usesNode:
			# if "console.log(\"Good Test\");" in template or "console.log(\"Bad Test/Failed Test\");" in template:
			# 	self.test_templates[header] = template
			# else:
			# 	self.test_templates[header] = template
		if addTemplate:
			self.test_templates[header] = template
			# print(header)
			# print(foundTestable)
			# print(self.testableConditions)

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
		# if "The abstract operation " in body:
		# 	if body.split("The abstract operation")[1].split()[0].strip() in header:
		# 		return False
		if "---ABSTRACT---" in body:
			return False
		if header.split()[1].strip() in bannedFunctions:
			return False
		return True
		

	# This is the main method for this class. For each relevant section
	# identified, it first checks is the relevant sections is testable 
	# for example, it skips the sections describing abstract operations.
	# Next, if the section is testable, it extracts the method signature,
	# extracts the assignments and conditional statements, and finally
	# uses these to produce combilable test templates
	def generateTestTemplates(self, extracted_sections, included_abstract_functions):
		numofsec = len(extracted_sections.keys())
		# printProgressBar(0, numofsec, prefix = 'Generating Test Templates Progress:', suffix = 'Complete', length = 50)
		# for idx, header in enumerate(sorted(extracted_sections)):
		# for i in included_abstract_functions:
		# 	print(i)
		# print("Len: ", len(included_abstract_functions))
		for idx, header0 in enumerate(extracted_sections):
			header0 = header0.replace("\xa0", " ")
			headerNo = header0.split()[0].strip()
			functionNameFull = header0.split()[1].strip()
			sectionNo = headerNo.split('.')[0].strip()
			sectionNo = int(sectionNo)
			functionName = functionNameFull.split('(')[0].strip()
			# print(sectionNo)
			# print(functionName)
			tmpBody = extracted_sections[header0]
			# saysAbstract = False
			# if "---ABSTRACT---" in tmpBody:
			# 	print(header0)
			# 	if tmpBody.split("The abstract operation")[1].split()[0].strip() in header0:
			# 		# print("Yes")
			# 		saysAbstract = True
			# absSearch = re.search(r'---ABSTRACT---', tmpBody, re.M|re.I)
			# if absSearch:
			# 	print(functionName)
			# if "---ABSTRACT---" in tmpBody:
			# 	print(functionName)
			if sectionNo == 7 or "---ABSTRACT---" in tmpBody:
				# print(functionName)
				if functionName not in included_abstract_functions:
					excludedAbstractFunctions.append(functionName)
		# 		else:
		# 			print(functionName)
		print(excludedAbstractFunctions)
		for idx, header in enumerate(extracted_sections):
			self.testableConditions = 0
			header = header.replace("\xa0", " ")
			# print(header)
			body0 = extracted_sections[header]
			bodyPOS = ""
			body = ""
			headingList = []
			self.bannedVariables = ["newTarget"]
			# self.bannedVariables = []
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
				# if "unknown(unknown)" not in method_signature:
				# 	print(header)
				# 	print(method_signature)
				self.extractAssignmentAndConditionals(header, body, method_signature, bodyPOS, headingList)
				self.generateCompilableTemplate(header, headingList)
		return self.test_templates	
