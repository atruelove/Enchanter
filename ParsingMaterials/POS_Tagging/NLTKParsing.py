import nltk
import re
sentence = "The quick brown fox jumped over the lazy dog."
# secFile = open("ECMA-262_v8_relevant_sections.txt", 'r', encoding="utf8")
# outFile = open("SpeechTagResults2.txt", "w", encoding="utf8")
nl = "\n"
secFile = open("ECMA_Current_07-09-19_v2.txt", 'r', encoding="utf8")
outFileName = "ECMA_Current_SpeechTagResults_07-10-19.txt"
outFile = open(outFileName, "w", encoding="utf8")

# count=0
for line in secFile:
    # if line[0].isnumeric() and (count < 10):
    emptyLine = ''.join(line.split())
    # print("EmptyLine: ", emptyLine)

    # if not (line[0].isnumeric()) and (emptyLine != ""):
    #     print(line)
    #     outFile.write(line)
    #     outFile.write(nl)
    #     lineHeader = ""
    if emptyLine != "":
        if (line[0] == '*'):
            outFile.write(line)
            # outFile.write(nl)
            lHead = re.search(r'\*.*?\*', line, re.M|re.I)
            # print("lHEAD: ")
            # print(lHead.group())
            lineHeader = lHead.group()
            # line = line.replace("***", "")
            line = re.sub(r'\*.*?\*', "", line)
            outFile.write(lineHeader)
        # else:
        #     outFile.write("++++")
        # # count = count + 1
            try:
                tokenized = nltk.word_tokenize(line)
                tagged = nltk.pos_tag(tokenized)

                chunkGram = r"""Chunk: {<RB.?>*<VB.?>*<NNP>}"""
                chunkParser = nltk.RegexpParser(chunkGram)

                chunked = chunkParser.parse(tagged)
                print(chunked)

                parse_string = ' '.join(str(chunked).split())
                print(parse_string)
                outFile.write(parse_string)
                outFile.write(nl)#+nl)
                #chunked.draw()

            except Exception as e:
                print(str(e))
        # else:
        #     print(line)
        #     outFile.write(line)
        #     outFile.write(nl)
        elif ("ID=" in line) or ("Summary=" in line):
            print(line)
            line = line.replace(nl, '')
            outFile.write(line)
            outFile.write(nl)



secFile.close()
outFile.close()

indLines = []
loopLines = []
plainIndLines = []
plainLoopLines = []
outFile = open(outFileName, "r", encoding="utf8")

plainLine = ""
for line in outFile:
    nLine = line
    emptyLine = ''.join(line.split())
    # if (line[0] == '+'):
    #     nLine = nLine.replace("++++", "")
    #     nLine = nLine.replace('\n', '')
    #     nLine = nLine.strip()
    #     indLines.append(nLine)
    #     # if plainLine != "":
    #     #     plainIndLines.append(plainLine)
    #     # plainLine = ""
    if (line[0] == '*'):
        POScheck = re.search(r'\*.*?\*\(S', nLine, re.M|re.I)
        # nLine = nLine.replace("++++", "")
        nLine = nLine.replace('\n', '')
        nLine = nLine.strip()
        if POScheck:
            indLines.append(nLine)
        else:
            plainLine = nLine.replace("FUNC", "")
            plainLine = plainLine.replace("VAR", "")
            plainIndLines.append(plainLine)
    # elif (line[0] == '*'):
    #     nLine = nLine.replace("***", "")
    #     nLine = nLine.replace('\n', '')
    #     nLine = nLine.strip()
    #     if nLine[0] == '(':
    #         loopLines.append(nLine)
    #     else:
    #         nLine = plainLine.replace("FUNC", "")
    #         nLine = plainLine.replace("VAR", "")
    #         plainLoopLines.append(nLine)
    #     plainLine = ""
    # elif line[0].isnumeric:
    #     plainLine = ""
    # elif not line[0].isnumeric() and (emptyLine != ""):
    #     plainLine = line.replace("\n", "")
    #     plainLine = plainLine.replace("FUNC", "")
    #     plainLine = plainLine.replace("VAR", "")
    #     plainLine = plainLine.strip()
    #     plainIndLines.append(plainLine)

outFile.close()

def reduceToPattern(l):
    # print(l)
    splitLine = l.split()
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

### TURN THIS BLOCK INTO A FUNCTION
def processLines(lineList, plainList, patternFileName, tupleFileName):
    allIndPatterns = []
    for l in lineList:
        nPattern = reduceToPattern(l)
        allIndPatterns.append(nPattern)

    uniqueIndPatterns = []
    patternFreq = []
    # allIndFile = open("allIndPatterns_07-06-19.txt", "w", encoding="utf8")
    allIndFile = open(patternFileName, "w", encoding="utf8")

    for p in allIndPatterns:
        allIndFile.write(p)
        allIndFile.write(nl)
        match = False
        if not uniqueIndPatterns:
            uniqueIndPatterns.append(p)
            patternFreq.append(1)
        else:
            j = 0
            for u in uniqueIndPatterns:
                if p == u:
                    match = True
                    patternFreq[j] += 1
                    print("p: ", p)
                    print("u: ", u)
                    print("Freq: ", patternFreq[j])
                j += 1
            if not match:
                uniqueIndPatterns.append(p)
                patternFreq.append(1)
        # print(patternFreq)
        # if p not in uniqueIndPatterns:
        #     uniqueIndPatterns.append(p)

    allIndFile.close()

    # # fIndex = 0
    # # patternFile = open("pattern_info.txt", 'w', encoding="utf8")
    # # for u in uniqueIndPatterns:
    # #     pString = "Pattern: " + u
    # #     fString = "Frequency: " + str(patternFreq[fIndex])
    # #     if patternFreq[fIndex] > 1:
    # #         print(pString)
    # #         print(fString)
    # #     patternFile.write(pString)
    # #     patternFile.write(nl)
    # #     patternFile.write(fString)
    # #     patternFile.write(nl)
    # #     fIndex += 1
    #
    # patternFile.close()
    print("All Ind Patterns: ", len(allIndPatterns))
    print("Unique Ind Patterns: ", len(uniqueIndPatterns))
    # print(indLines[20])
    # print(allIndPatterns[20])

    # print(plainIndLines)
    # index = 0
    # for i in lineList:
    #     print("IndLine: ", i)
    #     print("Plain Line: ", plainList[index])
    #     index += 1

    patternExamples = []
    for u in uniqueIndPatterns:
        examples = []
        ind = 0
        for l in lineList:
            # print(u)
            # print(l)
            pattern = reduceToPattern(l)
            # print(pattern)
            if u == pattern:
                print(u)
                print(pattern)
                # newEntry = ""
                # splitLine = l.split('/')
                examples.append(plainList[ind])
            ind += 1
        if not examples:
            print("ERROR")
            break
        else:
            # if len(examples) > 1:
            #      print(examples)
            patternExamples.append(examples)

    print("Unique Ind Patterns: ", len(uniqueIndPatterns))
    print("Frequencies: ", len(patternFreq))
    print("Examples: ", len(patternExamples))

    # tupleFile = open("UniquePatternsAndExamples_07-06-19.txt", "w", encoding="utf8")
    tupleFile = open(tupleFileName, "w", encoding="utf8")
    tuip = zip(uniqueIndPatterns, patternFreq, patternExamples)
    stuip = sorted(tuip,key=lambda x: x[1], reverse=True)
    for u in stuip:
        pattern = u[0]
        freq = u[1]
        examples = u[2]
        tupleFile.write(u[0])
        tupleFile.write(nl)
        tupleFile.write(str(freq))
        tupleFile.write(nl)
        for e in examples:
            tupleFile.write(e)
            tupleFile.write(nl)
        tupleFile.write(nl)

    tupleFile.close()
### END OF FUNCTION BLOCK?

for l in plainIndLines:
    print(l)
# print(len(loopLines))

processLines(indLines, plainIndLines, "LinePatterns_07-10-19.txt", "PatternsAndExamples_07-10-19.txt")

