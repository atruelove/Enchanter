from bs4 import BeautifulSoup
import re

def funcReplace(match):
    # print(match.group(0))
    justFunc = match.group(0)
    justFunc = re.sub(r'<.*?>', "", justFunc)
    return "FUNC" + justFunc # + "("

def toCaps(match):
    return match.group(0).upper()

def cleanupText(strL):
    strL = strL.replace("<var>", "VAR")
    strL = strL.replace("</var>", "")
    funcSearch = re.search(r'<a href="#sec.*?</emu-xref>\(', strL, re.M | re.I)
    if funcSearch:
        strL = re.sub(r'<a href="#sec.*?</emu-xref>\(', funcReplace, strL)
    strL = strL.replace('\n', '')
    strL = re.sub(r'<ol>', " ", strL)
    strL = re.sub(r'</ol>', " ", strL)
    strL = re.sub(r'</li>', " ", strL)
    strL = re.sub(r'<.*?>', "", strL)
    strL = re.sub(r'\[\[.*?\]\]', toCaps, strL)
    strL = strL.replace("  ", " ")
    return strL

inFile = open("ECMAScript2018LanguageSpecification.html", 'r', encoding="utf8")
outFile = open("ECMA_Current_07-09-19_v2.txt", 'w', encoding="utf8")

# htmlFull = ""
# for line in inFile:
#     # print(line)
#     htmlFull = htmlFull + line
# inFile.close()
# # print(htmlFull)
# soup = BeautifulSoup(htmlFull, 'html.parser')
soup = BeautifulSoup(inFile, 'html.parser')
# print(soup.prettify())
# print(soup)
# print(soup.get_text())
# outFile.write(soup.get_text())
# outFile.close()

# tag = soup.span
# all = soup.find_all("span", "secnum")
# print(tag["class"])
# print(all)

# emu = soup.select('emu-clause[aoid]')
emu = soup.select('emu-clause')
relSecRaw = []
for e in emu:
    # print(e)
    eTxt = e.find('h1')
    eTxt = eTxt.get_text()
    eTxt = eTxt.strip()
    funcCheck = re.search(r'\(.*\)$', eTxt, re.M|re.I)
    if funcCheck:
        print(eTxt)
        relSecRaw.append(e)

def writeSubSections(cont, level):
    for l in cont:
        strL = str(l).lower()
        headingStr = '*' + str(level) + '*'
        # print(strL)
        if "<ol>" not in strL:
            cleaned = cleanupText(strL)
            # headingStr = '*' + str(level) + '*'
            print(headingStr, cleaned)
            outFile.write(headingStr)
            outFile.write(cleaned)
            outFile.write("\n")
        else:
            preStr = strL.split("<ol>")[0]
            cleaned = cleanupText(preStr)
            print(headingStr, cleaned)
            outFile.write(headingStr)
            outFile.write(cleaned)
            outFile.write("\n")
            cont2 = l.find("ol").contents
            # print(cont2)
            writeSubSections(cont2, level+1)
noFunctions = 0
print(len(relSecRaw))
for s in relSecRaw:
    print(s, '\n\n')
    label = s.find("h1")
    labelS = str(label)
    # labelS = labelS.replace("</span>", " ")
    # labelS = re.sub(r'<.*?>', "", labelS)
    labelComp = labelS.split("</span>")
    lc2 = []
    for ls in labelComp:
        ls = re.sub(r'<.*?>', "", ls)
        print(ls)
        lc2.append(ls)
    print(lc2)

    # outFile.write(labelS)#.get_text())
    # outFile.write("\n")
    # emuAlg = s.select("emu-alg")

    summary = s.find('p')
    summStr = str(summary)
    summStr = re.sub(r'<.*?>', "", summStr)
    summStr = summStr.replace("\n", "")
    emuAlg = s.find_all("emu-alg")
    if not emuAlg:
        print("ERROR")
    else:
        noFunctions += 1
        begin = "############# BEGIN ## " + str(noFunctions) + " ###########################\n"
        end = "\n############# END ## " + str(noFunctions) + " ###########################\n"
        outFile.write(begin)
        # outFile.write(labelS)  # .get_text())
        outFile.write("ID= ")
        outFile.write(lc2[0])
        outFile.write("\n")
        outFile.write("Summary= ")
        outFile.write(lc2[1])
        outFile.write("\n")
        print(summStr)
        outFile.write("Description= ")
        outFile.write(summStr)
        outFile.write("\n")
        # if len(emuAlg) > 1:
        emuAlg = emuAlg[0]
            # print("ERROR")
            # for x in emuAlg:
            #     print(emuAlg)
            # break
        #print(emuAlg)#.prettify())
        ol = emuAlg.find("ol")
        cont = ol.contents
        print(cont)
        # lists = emuAlg.find_all("li")
        # for l in lists:
        writeSubSections(cont, 0)
        outFile.write(end)
        # for l in cont:
            # strL = str(l).lower()
            # print("ITEM: ", strL)
            # extra = False
            # writeSubSections(l, 0)
            # if "<ol>" in strL:
            #     print("SUBLIST")
            #     # outFile.write("***")
            #     preStr = strL.split("<ol>")[0]
            #     extra = True
            # strL = cleanupText(strL)
            # # print(strL)
            # # outFile.write(strL)
            # # outFile.write("\n")
            # if extra:
            #     preStr = cleanupText(preStr)
            #     # print(preStr)
            #     # outFile.write(preStr)
            #     # outFile.write('\n')



# test = soup.find_all("emu-clause", id="sec-makeday")
# print(test)
# print(test[0].get_text())
# test2 = test[0].get_text()
# test2 = test2.split('\n')
# print(test2)
#
#
# testA = soup.find_all("emu-clause", id="sec-array-constructor-array")
# print(testA)
# print(testA[0].get_text())
# test2A = testA[0].get_text()
# test2A = test2A.split('\n')
# print(test2A)

# #UNCOMMENT THIS BLOCK LATER!!!
# varTag = soup.var
# varAll = soup.find_all("var")
# nVar = 0
# unVar = 0
# uniqueVar = []
# for v in varAll:
#     nV = v.get_text()
#     # print(type(nV), " ", nV)
#     # print(nV)
#     nVar += 1
#     match = False
#     if not uniqueVar:
#         uniqueVar.append(nV)
#         unVar += 1
#         print(nV)
#     else:
#         for u in uniqueVar:
#             if nV == u:
#                 match = True
#         if not match:
#             uniqueVar.append(nV)
#             unVar += 1
#             print(nV)
#
# print("Number of Var: ", nVar)
# print("Number of Unique Vars: ", unVar)
#
# funcTag = soup.aoid
# print()
# funcAll = soup.find_all("emu-xref")
# nFunc = 0
# unFunc = 0
# uniqueFunc = []
# numList = []
# for f in funcAll:
#     nF = f.get_text()
#     # print(nF)
#     match = False
#     # fAtt = f.attrs
#     # # fAtt = f['aoid']
#     # print(fAtt)
#     firstC = nF[0]
#     if firstC.isnumeric():
#         numList.append(nF)
#     else:
#         nFunc += 1
#         if not uniqueFunc:
#             uniqueFunc.append(nF)
#             unFunc += 1
#             print(nF)
#         else:
#             for u in uniqueFunc:
#                 if nF == u:
#                     match = True
#             if not match:
#                 uniqueFunc.append(nF)
#                 unFunc += 1
#                 print(nF)
#
# print("Length of FuncAll: ", len(funcAll))
# print("Number of Section Links: ", len(numList))
# print("Number of Func: ", nFunc)
# print("Number of Unique Funcs: ", unFunc, " ", len(uniqueFunc))

outFile.close()
inFile.close()