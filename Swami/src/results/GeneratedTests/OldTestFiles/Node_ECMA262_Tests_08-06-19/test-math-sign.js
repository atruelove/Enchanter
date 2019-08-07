/*
* This file is automatically generated by Swami
*
* 2019-08-06 15:05:58.934866
*/


const assert = require('assert');
/*
*
*	ABSTRACT FUNCTIONS IMPELEMTED USING DESCRIPTION FROM ECMA-262 
*
*/

function RequireObjectCoercible(argument){
        if (typeof argument == "undefined" || typeof argument == "null")
                throw new TypeError("TypeError in RequireObjectCoercible")
        else
                return argument
}

function ToString(argument){
        if (typeof argument == "undefined")
                return "undefined"
        else if(argument == null)
                return "null"
        else if(typeof argument == "boolean"){
                if (argument == true)
                        return "true"
                else
                        return "false"

        }
        else if(typeof argument == "string")
                return argument
        else if(typeof argument == "number")
                return Number(argument).toString()
        else if(typeof argument == "symbol")
                throw new TypeError("TypeError in ToString")
        else if(typeof argument == "object")
                return argument.toString()

}

function ToInteger(argument){
        var number = Number(argument)
        if (Object.is(number, NaN)){
                return 0
        }
        if (number == 0 || number == Infinity || number == -Infinity || number == +0 || number== -0){
                return number
        }
        return number-(number%1)
}

function ToUint32(argument){
        var number = Number(argument)
        if (Object.is(number, NaN) || number == 0 || number == Infinity || number == -Infinity || number == +0 || number== -0){
                return 0
        }
        var i = Math.floor(Math.abs(number))
        var int32bit = i%(Math.pow(2,32))
    return int32bit
}

function IsRegExp(argument){
        return (argument instanceof RegExp)
}

function IsCallable(argument){
        if (typeof argument != 'object')
                return false
        if (typeof argument == 'function')
                return true
        return false
}

function ToLength(argument){
        var len = ToInteger(argument);
        if (len <= 0)
                return 0
        return Math.min(len, 2e53-1)
}

function ToObject(argument){
        if (typeof argument == 'undefined' || typeof argument == 'null')
                throw new TypeError("TypeError in ToObject")
        if (typeof argument == "number")
                return new Number(argument)
        if (typeof argument == "string")
                return new String(argument)
        if (typeof argument == "boolean")
                return new Boolean(argument)
        if (typeof argument == "symbol")
                return new Symbol(argument)
        if (typeof argument == "object")
                return argument
}

function thisNumberValue(argument){
	return Number(argument)
}

function thisTimeValue(argument){
	return Date(argument)
}
function Get(argument, property){
	return argument
}
function SameValueZero(x,y){
	return x===y
}
/*TEST TEMPLATE GENERATED AUTOMATICALLY*/
function test_math_sign(x){
	if (Object.is( x,NaN )){
		var output = Math.sign(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (( x === - 0 )){
		var output = Math.sign(x);
		assert.strictEqual(- 0, output);
		console.log("Good Test");
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.sign(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}



/*TESTS GENERATED AUTOMATICALLY*/
test_math_sign("GDO22LYTWG");
test_math_sign("SHLF1GXK");
test_math_sign(-321);
test_math_sign(/[\u0400-\u04FF]+/g);
test_math_sign(Infinity);
test_math_sign(8.916183356860324e+307);
test_math_sign(1.4635470987214818e+308);
test_math_sign(7.237430905868907e+307);
test_math_sign(NaN);
test_math_sign(+0);
test_math_sign(-813);
test_math_sign(false);
test_math_sign("ZS2");
test_math_sign(true);
test_math_sign(-835);
test_math_sign(/[^.]+/);
test_math_sign("82CW5J4");
test_math_sign(1.307239053093346e+308);
test_math_sign("8RCQ4");
test_math_sign("3ZT71ATZV");
test_math_sign("J5W4N8ONA");
test_math_sign("AOCN6YHCM9");
test_math_sign(-237);
test_math_sign(1.0533737408423661e+308);
test_math_sign(-809);
test_math_sign("7HAEP");
test_math_sign(/yes[^]*day/);
test_math_sign(/foo/g);
test_math_sign(-763);
test_math_sign("S2P9VXV7");
test_math_sign("VIV");
test_math_sign(-77);
test_math_sign(/\r\n|\r|\n/);
test_math_sign(2.742392595517654e+307);
test_math_sign(undefined);
test_math_sign("VT7");
test_math_sign(8.551146209952253e+307);
test_math_sign(-735);
test_math_sign(1.2053158922783598e+308);
test_math_sign(-771);
test_math_sign(8.236477520536834e+306);
test_math_sign(1.675172962819468e+308);
test_math_sign(4.5259654625760823e+306);
test_math_sign(null);
test_math_sign(1.7213887473050633e+308);
test_math_sign(1.038238174207723e+308);
test_math_sign(1.4996661077522826e+308);
test_math_sign(7.747629143062746e+307);
test_math_sign(-747);
test_math_sign(/(\w+)\s(\w+)/);
test_math_sign(/yes.*day/);
test_math_sign(8.931365283114933e+307);
test_math_sign(-555);
test_math_sign(1.240734108054126e+308);
test_math_sign(1.55194033616896e+308);
test_math_sign(-215);
test_math_sign("AGATM");
test_math_sign("YX434VE");
test_math_sign(1.2649952997748557e+307);
test_math_sign(1.5570630851468317e+308);
test_math_sign(-647);
test_math_sign(1.342271615391797e+308);
test_math_sign(1.0463732528115807e+308);
test_math_sign("H0OZT1I");
test_math_sign("7H9Q");
test_math_sign(-403);
test_math_sign(1.2025436521634846e+307);
test_math_sign(-667);
test_math_sign("WLA4UXVWKS");
test_math_sign(-541);
test_math_sign(-381);
test_math_sign("HHXYEQM");
test_math_sign(-193);
test_math_sign(-337);
test_math_sign(1.4253270950526366e+308);
test_math_sign("O8EZ6BFV");
test_math_sign(-425);
test_math_sign(7.155012946566121e+307);
test_math_sign("FNI0");
test_math_sign(-0);
test_math_sign(-445);
test_math_sign(1.1207891775082422e+308);
test_math_sign(3.1919088641709913e+306);
test_math_sign(-323);
test_math_sign(1.7279717497804468e+308);
test_math_sign(6.09735302319093e+307);
test_math_sign(1.6376840549322827e+308);
test_math_sign(-5);
test_math_sign(3.8396107732148865e+307);
test_math_sign("RFEVXPJNTN");
test_math_sign("9KZP5XE");
test_math_sign(1.4269351074326424e+308);
test_math_sign(/ab+c/);
test_math_sign(7.756101437983246e+307);
test_math_sign(-881);
test_math_sign(-407);
test_math_sign(3.9886932968519737e+307);
test_math_sign(-781);
test_math_sign(-727);
test_math_sign(4.568602231494774e+307);
test_math_sign("PVRHAGNK");
test_math_sign(1.7477223497248864e+308);
test_math_sign("2KQQEJB7O5");
test_math_sign("89X9W9C");
test_math_sign(-871);
test_math_sign("GWCEKYD6");
test_math_sign(7.937793072716922e+307);
test_math_sign("CVY5FD");
test_math_sign(-253);
test_math_sign(-109);
test_math_sign(1.1511945691820105e+308);
test_math_sign("2FL");
test_math_sign("NGMDLS24E3");
test_math_sign("R5ZKB");
test_math_sign(3.6851031099181195e+307);
test_math_sign("5ZG0SZVFYR");
test_math_sign("7MOG5NG");
test_math_sign(-589);
test_math_sign(2.4625845398271746e+306);
test_math_sign("ZNEQQQBYT");
test_math_sign(1.6055819622949592e+308);
test_math_sign(-467);
test_math_sign(5.492127115348969e+307);
test_math_sign(7.008634841573916e+307);
test_math_sign(-941);
test_math_sign(1.338165365066338e+308);
test_math_sign(-769);
test_math_sign("O98K8B");
test_math_sign(1.666426497255731e+308);
test_math_sign(-195);
test_math_sign(-805);
test_math_sign("DCR");
test_math_sign(-627);
test_math_sign(1.2188856647532667e+308);
test_math_sign(-955);
test_math_sign("J9WO0JG");
test_math_sign("1YXE");
test_math_sign(1.5682823881675285e+308);
test_math_sign(-501);
test_math_sign("B90NFGKY");
test_math_sign("GYF1OW0AJK");
test_math_sign("TVGQDV");
test_math_sign("8KSZ1");
test_math_sign(-285);
test_math_sign(6.466081032441679e+307);
test_math_sign("BJCM21NXLS");
test_math_sign(8.504529360156068e+307);
test_math_sign("MFC3RQQ8");
test_math_sign(1.2848747019456602e+307);
test_math_sign(-613);
test_math_sign(8.432071617657871e+307);
test_math_sign("308N");
test_math_sign(5.024577049748688e+307);
test_math_sign(1.2147454520399084e+308);
test_math_sign(1.4306072495913812e+308);
test_math_sign("5C5");
test_math_sign(7.6782981242058e+307);
test_math_sign(-173);
test_math_sign(4.572512977661876e+307);
test_math_sign("CO4INRB");
test_math_sign(1.7025365871272686e+307);
test_math_sign("LBYY3HEYP");
test_math_sign(8.658295746801312e+307);
test_math_sign(1.1413424911265777e+308);
test_math_sign(1.1009436169242755e+308);
test_math_sign(-461);
test_math_sign("4NOK");
test_math_sign(1.0430472335663158e+308);
test_math_sign("QXW");
test_math_sign(1.4843109339710762e+308);
test_math_sign("KDCBTJE2A7");
test_math_sign(6.058516366870911e+307);
test_math_sign("SOHLI6");
test_math_sign("NZHGG4");
test_math_sign("VW5G83M");
test_math_sign(9.417939314756506e+307);
test_math_sign("JY5O0ERUQF");
test_math_sign(-587);
test_math_sign("0TAUHU6GZ9");
test_math_sign(1.6588614110573384e+308);
test_math_sign("9HDJ4Z");
test_math_sign(-999);
test_math_sign(-659);
test_math_sign(-993);
test_math_sign(-153);
test_math_sign(-99);
test_math_sign("5N5");
test_math_sign(8.424262662680445e+307);
test_math_sign(-257);
test_math_sign("UYQI6L1J00");
test_math_sign(-397);
test_math_sign("B9AMMBFKVG");
test_math_sign(3.5759688719922216e+307);
test_math_sign(-883);
test_math_sign("37US7S");
test_math_sign("SI0J80N9CI");
test_math_sign(-455);
test_math_sign(-757);
test_math_sign(-985);
test_math_sign("Y04O2");
test_math_sign(-265);
test_math_sign("BYA");
test_math_sign(-935);
test_math_sign(4.1953001795110504e+307);
test_math_sign(1.559489874321624e+308);
test_math_sign(1.4016552473421393e+308);
test_math_sign("8F07UHJC");
test_math_sign(-717);
test_math_sign(836);
test_math_sign(1.0105267480662449e+308);
test_math_sign(-139);
test_math_sign("KT03");
test_math_sign(-383);
test_math_sign(1.746050496841541e+307);
test_math_sign("MIR5VP");
test_math_sign(-151);
test_math_sign(-411);
test_math_sign("ZPQ");
test_math_sign("OZWKTYPC2");
test_math_sign(-313);
test_math_sign("A5EST8H");
test_math_sign("HVCLA");
test_math_sign("QJEDA");
test_math_sign("TX8F3");
test_math_sign("ZOM7SO");
test_math_sign("9F19BMJB");
test_math_sign(-441);
test_math_sign("YN3MX");
test_math_sign(1.2256319886223293e+308);
test_math_sign("ULR9EMOK");
test_math_sign(8.088719682952254e+306);
test_math_sign("LZDDYRM");
test_math_sign(-279);
test_math_sign(-157);
test_math_sign(-897);
test_math_sign(1.0976686120177844e+308);
test_math_sign("FOFH");
test_math_sign(4.0144206231475137e+307);
test_math_sign(3.3964796778675376e+307);
test_math_sign(3.050575551098625e+305);
test_math_sign(810);
test_math_sign(4.789143767564975e+307);
test_math_sign(-635);
test_math_sign(9.918099639288952e+307);
test_math_sign(1.367047469757938e+308);
test_math_sign(-527);
test_math_sign(-943);
test_math_sign("UBJUINXDG");
test_math_sign("DWP");
test_math_sign(1.7076109617844403e+308);
test_math_sign(-187);
test_math_sign("1U2HS4C");
test_math_sign(-791);
test_math_sign(-525);
test_math_sign("JYSC6");
test_math_sign(1.7011043795994021e+308);
test_math_sign(1.1335443499161175e+308);
test_math_sign("GO5L9J");
test_math_sign("0JFJ");
test_math_sign(-103);
test_math_sign("W7Z");
test_math_sign(-721);
test_math_sign("5GO");
test_math_sign(-823);
test_math_sign(-431);
test_math_sign("YZJ");
test_math_sign(3.3256979854953654e+307);
test_math_sign(3.401987138280749e+307);
test_math_sign("4X0D05");
test_math_sign(1.7443845806127417e+308);
test_math_sign("9K4E");
test_math_sign(1.7147988819962755e+308);
test_math_sign(1.979249644338375e+307);
test_math_sign("LOUP9J");
test_math_sign("SYG0F4");
test_math_sign("F1HBVY8K");
test_math_sign(1.530690626718571e+308);
test_math_sign(-59);
test_math_sign("R77K4RZST9");
test_math_sign(2.662732443015789e+307);
test_math_sign(9.01395819909048e+307);
test_math_sign(1.5745776479817574e+308);
test_math_sign("AKUVR2JT");
test_math_sign(1.3131019650177317e+308);
test_math_sign(7.34859797608551e+307);
test_math_sign("C72SNU");
test_math_sign("UUSRYWV");
test_math_sign(1.4359618943595546e+308);
test_math_sign(1.193119505975091e+308);
test_math_sign(6.219000493225206e+307);
test_math_sign(-957);
test_math_sign(1.314773845553414e+308);
test_math_sign(-889);
test_math_sign("XIRHW");
test_math_sign("GNBD");
test_math_sign("WUZ5E4");
test_math_sign(-375);
test_math_sign(-537);
test_math_sign("ADOVV8");
test_math_sign("MZDYP");
test_math_sign(6.35087606649722e+307);
test_math_sign("L0SOOHU");
test_math_sign("H8YCXT3W");
test_math_sign(-311);
test_math_sign("QJO2B4QY");
test_math_sign("UO3C");
test_math_sign(1.6237964987584333e+308);
test_math_sign(7.00917215635857e+307);
test_math_sign(1.3090353266934316e+308);
test_math_sign(620);
test_math_sign("R3AECDH");
test_math_sign("EOT3");
test_math_sign(1.9725612694581368e+307);
test_math_sign(4.948411983171235e+307);
test_math_sign("MF5YZRT2P0");
test_math_sign(8.097481621630754e+307);
test_math_sign(1.5902609094857772e+308);
test_math_sign("CNI");
test_math_sign(-477);
test_math_sign(7.843013978780685e+307);
test_math_sign(-373);
test_math_sign(2.653239825781812e+307);
test_math_sign(-263);
test_math_sign(-147);
test_math_sign("0KG520KR");
test_math_sign("6IO5");
test_math_sign(-241);
test_math_sign("UY9XZK");
test_math_sign(-965);
test_math_sign(-161);
test_math_sign(-503);
test_math_sign(1.060297641260693e+308);
test_math_sign(-573);
test_math_sign(1.1139977608375352e+308);
test_math_sign("QJSJ");
test_math_sign("HQES35066P");
test_math_sign(-759);
test_math_sign(-911);
test_math_sign(6.728366178105954e+307);
test_math_sign(3.529333612059763e+306);
test_math_sign(1.3337421791308831e+308);
test_math_sign(-471);
test_math_sign(2.7516457547227625e+307);
test_math_sign(-123);
test_math_sign(-221);
test_math_sign(-349);
test_math_sign(-75);
test_math_sign("ZSG");
test_math_sign("ZV4H9701");
test_math_sign("ZPHS06CB1H");
test_math_sign("G1M70JBRC");
test_math_sign("DDH");
test_math_sign("MMJFV0");
test_math_sign(8.944560935244905e+307);
test_math_sign("UB0XTOM5A");
test_math_sign("BB9NGX4I7");
test_math_sign("6OKJQGGOZ0");
test_math_sign(4.94160308223793e+307);
test_math_sign(3.434770115756752e+307);
test_math_sign(-145);
test_math_sign(1.2351921025903706e+308);
test_math_sign("UP1HSYP");
test_math_sign("TF5W");
test_math_sign(1.7648609983785717e+308);
test_math_sign(1.5001780444693365e+308);
test_math_sign("RQRDQ");
test_math_sign("2ZPK635");
test_math_sign(4.128358211457896e+307);
test_math_sign(7.180276567887929e+307);
test_math_sign("KHX");
test_math_sign(-723);
test_math_sign("CW26");
test_math_sign(-617);
test_math_sign("IJ3LRGR");
test_math_sign(-595);
test_math_sign(-707);
test_math_sign(-643);
test_math_sign(7.385666312293558e+307);
test_math_sign(-907);
test_math_sign(6.61144223882822e+307);
test_math_sign(6.409819111364578e+306);
test_math_sign("3L6AYK");
test_math_sign("9YKB");
test_math_sign(-593);
test_math_sign(-387);
test_math_sign(-33);
test_math_sign("YWH");
test_math_sign("DDU3VQIQ");
test_math_sign("IFA");
test_math_sign("SPFR");
test_math_sign("4DHW9ACE");
test_math_sign(-547);
test_math_sign("XJ9CN4P");
test_math_sign(782);
test_math_sign(-637);
test_math_sign("EVS9VW");
test_math_sign("0ERUTRXLR");
test_math_sign(4.0741664555276775e+307);
test_math_sign("XEA6");
test_math_sign(1.21373882138514e+307);
test_math_sign("7W8DTO");
test_math_sign(-927);
test_math_sign("H9XEGZ");
test_math_sign(7.357268269187041e+307);
test_math_sign("V2SC2");
test_math_sign(1.08541695615934e+308);
test_math_sign("Z3AKJBMGY6");
test_math_sign(-869);
test_math_sign(-379);
test_math_sign(1.1261168268325699e+308);
test_math_sign(-197);
test_math_sign("GHDKB");
test_math_sign("YEY08GWNI");
test_math_sign(1.3890728785925081e+308);
test_math_sign("V7V074");
test_math_sign("NTC7N0JEF");
test_math_sign(1.1073472260223799e+308);
test_math_sign(-61);
test_math_sign(1.4009079523750513e+308);
test_math_sign("S1450M");
test_math_sign(1.7106296397421283e+308);
test_math_sign(-959);
test_math_sign(1.0745159621166965e+308);
test_math_sign(-979);
test_math_sign(-155);
test_math_sign(-207);
test_math_sign(6.008705810758703e+307);
test_math_sign(1.5312889607002476e+308);
test_math_sign(2.551504633509876e+307);
test_math_sign(-851);
test_math_sign("Q7G");
test_math_sign(2.9949524955846334e+307);
test_math_sign(1.1947399763976605e+308);
test_math_sign(1.056277106094983e+308);
test_math_sign("NO8M");
test_math_sign(-971);
test_math_sign("4JYDTS9ZD");
test_math_sign(-657);
test_math_sign(8.742239683127916e+306);
test_math_sign("DLB5NIICY");
test_math_sign("QV4S71L");
test_math_sign(1.4577482498425657e+308);
test_math_sign("IBV5YPE4");
test_math_sign(1.1350181647722538e+308);
test_math_sign("NVAKBJBE");
test_math_sign("LU28C");
test_math_sign(1.3384411470361602e+308);
test_math_sign("92UHK9QL");
test_math_sign(1.3812869520032012e+308);
test_math_sign(1.7954470334632632e+307);
test_math_sign(-43);
test_math_sign(1.6311015484840188e+308);
test_math_sign(-79);
test_math_sign(9.522336444023125e+307);
test_math_sign("ZAO1Q3");
test_math_sign("B58B");
test_math_sign(8.101607580810838e+307);
test_math_sign(-239);
test_math_sign(1.9314268151783861e+307);
test_math_sign(3.60640778062822e+307);
test_math_sign("AMWME2Q3JX");
test_math_sign(6.802626865903258e+307);
test_math_sign("2HHB00ID");
test_math_sign("7OZBLF7R3I");
test_math_sign(4.51312079405682e+307);
test_math_sign(-305);
test_math_sign(1.4506824142779075e+308);
test_math_sign("6L9UXCR44");
test_math_sign(9.230833764744653e+307);
test_math_sign(1.2638328808952527e+308);
test_math_sign(-841);
test_math_sign(-55);
test_math_sign(7.334309031014177e+307);
test_math_sign(-31);
test_math_sign("ZQ4SY3");
test_math_sign("0FGBG");
test_math_sign("2WXQT2RR");
test_math_sign(-357);
test_math_sign(8.435501379290894e+307);
test_math_sign("1K0U7892");
test_math_sign("4JLND5TFRU");
test_math_sign("V4LGENOF2U");
test_math_sign(-277);
test_math_sign(3.263706108210092e+307);
test_math_sign(-365);
test_math_sign(-345);
test_math_sign("K0TY2HI");
test_math_sign("P1X");
test_math_sign(-709);
test_math_sign(2.868917681762708e+307);
test_math_sign(-69);
test_math_sign("DADW");
test_math_sign("ZBQX");
test_math_sign("WN1");
test_math_sign(8.428328911101355e+307);
test_math_sign(1.4203788299887387e+308);
test_math_sign(-551);
test_math_sign("MANE4MU8KO");
test_math_sign("W4969");
test_math_sign(1.5572225643259632e+308);
test_math_sign(-557);
test_math_sign(-67);
test_math_sign(7.177309702126954e+307);
test_math_sign("LXWEC");
test_math_sign("8ZVFKCI");
test_math_sign(-725);
test_math_sign("5JYTK");
test_math_sign("AXXELSNPW");
test_math_sign(1.708403448896341e+308);
test_math_sign(-175);
test_math_sign(-629);
test_math_sign(1.5238827407480821e+308);
test_math_sign("6BK8");
test_math_sign(-327);
test_math_sign(-863);
test_math_sign("GRTXAINHA");
test_math_sign(-795);
test_math_sign(9.965333897249905e+307);
test_math_sign(-939);
test_math_sign(7.743759438067504e+307);
test_math_sign(3.3555781955357913e+307);
test_math_sign(5.947260926542879e+307);
test_math_sign(-559);
test_math_sign(-579);
test_math_sign(9.798351373505364e+307);
test_math_sign("T2R2OK");
test_math_sign(-269);
test_math_sign("DA30IW71");
test_math_sign("S188DSWA");
test_math_sign(-853);
test_math_sign(-583);
test_math_sign(-799);
test_math_sign(1.0391719391423983e+308);
test_math_sign("XGRGEA8X");
test_math_sign("55EAZU65");
test_math_sign("35FEZF");
test_math_sign(-855);
test_math_sign("LMYJCL3TXV");
test_math_sign("7SYO2MX");
test_math_sign(-203);
test_math_sign(1.6674223811289853e+308);
test_math_sign("ASVRJD");
test_math_sign(-343);
test_math_sign("7PGG8OML");
test_math_sign(-427);
test_math_sign(-879);
test_math_sign(1.0609289224749061e+308);
test_math_sign(-125);
test_math_sign(6.790984085540458e+307);
test_math_sign(4.4239024936899275e+307);
test_math_sign(1.4078760338916113e+307);
test_math_sign("IY7");
test_math_sign("W05");
test_math_sign("UP3C");
test_math_sign("LVPTR2");
test_math_sign("Y5Z3Q4");
test_math_sign(-839);
test_math_sign(-969);
test_math_sign(6.595607554395453e+307);
test_math_sign("3AWHI1VT");
test_math_sign(1.1099266085209692e+308);
test_math_sign(-961);
test_math_sign(9.037741032412399e+306);
test_math_sign("XFW3VWSD");
test_math_sign(1.140923130982657e+308);
test_math_sign("6GGPW");
test_math_sign("V3XST2GB");
test_math_sign(-599);
test_math_sign(1.7732776047733315e+308);
test_math_sign(4.189076772092003e+307);
test_math_sign(7.389013720708261e+307);
test_math_sign(-453);
test_math_sign("YOTKT5");
test_math_sign(8.389343061185446e+307);
test_math_sign(9.54206674968776e+307);
test_math_sign(-741);
test_math_sign(-975);
test_math_sign(1.2603380722714709e+308);
test_math_sign(9.490323579836986e+307);
test_math_sign(1.6086637242835895e+308);
test_math_sign(-767);
test_math_sign("PY6LHZ");
test_math_sign(1.7335505184786196e+307);
test_math_sign("FK3H");
test_math_sign(1.3507324374659425e+308);
test_math_sign("PJ19F8Y");
test_math_sign("QYNRRU");
test_math_sign(1.766516028679876e+308);
test_math_sign(-801);
test_math_sign(4.554825286210352e+307);
test_math_sign(1.1889254050199213e+307);
test_math_sign(7.282174435397306e+307);
test_math_sign("I6T2FBA");
test_math_sign("JJWPSD");
test_math_sign("3H6WAY");
test_math_sign(-165);
test_math_sign("TZL8");
test_math_sign(1.6970144941579402e+308);
test_math_sign("K85");
test_math_sign("PR8PWV");
test_math_sign(-267);
test_math_sign("YDKR");
test_math_sign(-459);
test_math_sign(2.9971708349463465e+307);
test_math_sign("MZIV1Q7");
test_math_sign(1.6013186144151653e+308);
test_math_sign("V1K9YA6WNC");
test_math_sign("G174QRQB3");
test_math_sign(-655);
test_math_sign("UU5HTQ6HAG");
test_math_sign("429UTS5");
test_math_sign(-217);
test_math_sign("F84UZJ");
test_math_sign(5.441636268176955e+307);
test_math_sign("MHB690TIH7");
test_math_sign(-875);
test_math_sign("MG9NF312");
test_math_sign(1.1726479139196276e+308);
test_math_sign(-729);
test_math_sign(4.1327067989641215e+307);
test_math_sign(-615);
test_math_sign(-37);
test_math_sign("WBQ");
test_math_sign(6.638769040287055e+307);
test_math_sign(-3);
test_math_sign(7.320838524345179e+307);
test_math_sign(-519);
test_math_sign("EJ5AJ");
test_math_sign("N6431VS");
test_math_sign(9.46301172127469e+307);
test_math_sign(-485);
test_math_sign(1.2116382867659002e+308);
test_math_sign(7.791444150535832e+307);
test_math_sign(7.054914172300898e+307);
test_math_sign("E8A4VP");
test_math_sign(1.6069984622494274e+308);
test_math_sign(1.3905295897625257e+308);
test_math_sign(-921);
test_math_sign("MXYOL");
test_math_sign("962CYGDM4G");
test_math_sign(-631);
test_math_sign("033G6SA");
test_math_sign(1.6915802390777502e+308);
test_math_sign("GMW96HN8");
test_math_sign(8.677984735859409e+307);
test_math_sign(-929);
test_math_sign("EIXMYQA");
test_math_sign(6.163427070343724e+307);
test_math_sign("T66MG");
test_math_sign("12VR9");
test_math_sign("HRYKLXHO52");
test_math_sign("4HCYKCX9H");
test_math_sign(-601);
test_math_sign("PST1RK");
test_math_sign(4.1310254193662833e+307);
test_math_sign(1.1691093070374277e+308);
test_math_sign("MJK87EYT0Z");
test_math_sign("V3GUV");
test_math_sign(-247);
test_math_sign("ZLNH");
test_math_sign(2.264649674151618e+307);
test_math_sign("9OZZ");
test_math_sign("79WRHBB");
test_math_sign(1.46559360192628e+308);
test_math_sign(-233);
test_math_sign("4ED4R");
test_math_sign("S7FON");
test_math_sign("TPH8AE0CH");
test_math_sign(-517);
test_math_sign(-951);
test_math_sign("R7L");
test_math_sign(1.6105753179515714e+308);
test_math_sign(5.062799392528687e+307);
test_math_sign("1TNQTEB");
test_math_sign("1W8P");
test_math_sign(8.202238536697865e+306);
test_math_sign(-591);
test_math_sign(3.4852995912170344e+307);
test_math_sign(2.618929096446135e+307);
test_math_sign(1.2648555545562152e+308);
test_math_sign(1.88102731850743e+307);
test_math_sign("NPSC9X2");
test_math_sign(5.355219113541131e+307);
test_math_sign(1.371920786978681e+308);
test_math_sign(1.6175042352251912e+308);
test_math_sign(-101);
test_math_sign(6.868459222247816e+307);
test_math_sign(2.4936257047604046e+307);
test_math_sign(5.092665666782407e+307);
test_math_sign(3.8207605756474153e+307);
test_math_sign(-209);
test_math_sign(9.028667187187112e+307);
test_math_sign(-465);
test_math_sign(-167);
test_math_sign(8.791481002298989e+307);
test_math_sign("DI2E0I3T6");
test_math_sign("LAKGX8T");
test_math_sign(-333);
test_math_sign("MHTK5");
test_math_sign("DP63AV32S");
test_math_sign("DBNY8");
test_math_sign(1.2386917198416849e+307);
test_math_sign("D3QVNLUI8");
test_math_sign("SQ23QFGJP");
test_math_sign(7.440203566626661e+307);
test_math_sign(1.3435780914866176e+308);
test_math_sign(3.0479153167249875e+307);
test_math_sign(-401);
test_math_sign(2.66296673904008e+305);
test_math_sign(-761);
test_math_sign("48U");
test_math_sign(2.3494897029528465e+307);
test_math_sign("XHW");
test_math_sign(7.056049771788002e+307);
test_math_sign(2.110954508663481e+307);
test_math_sign("AD9Z");
test_math_sign(-787);
test_math_sign("C2O5NGILB");
test_math_sign("88SWC9NAJR");
test_math_sign("17J");
test_math_sign(-225);
test_math_sign(-491);
test_math_sign(7.108950540634823e+307);
test_math_sign("6G7EVWSG9");
test_math_sign("TVGNURY");
test_math_sign(6.180866102282109e+307);
test_math_sign(-905);
test_math_sign("4NZ1");
test_math_sign("W23RIH6MIL");
test_math_sign("6S74");
test_math_sign("HSNC");
test_math_sign(8.55251941787723e+307);
test_math_sign("BXXIM");
test_math_sign(9.64185611587092e+307);
test_math_sign(1.4934709251313858e+308);
test_math_sign("CMD06G74YL");
test_math_sign("I8K1");
test_math_sign(1.2327970673094648e+308);
test_math_sign("D3ECL9UN");
test_math_sign(1.3422163370834679e+308);
test_math_sign(5.162696195713259e+307);
test_math_sign("RL1MS");
test_math_sign(5.193724088391061e+307);
test_math_sign(5.117357404340075e+307);
test_math_sign("E38TD0");
test_math_sign(-183);
test_math_sign(-697);
test_math_sign("4RP4UG");
test_math_sign(1.2545701997930618e+308);
test_math_sign("BADMPH");
test_math_sign("1SL");
test_math_sign("U5JFLB");
test_math_sign(1.6266864747379138e+308);
test_math_sign(-409);
test_math_sign(1.7410114620581414e+308);
test_math_sign("HP2T8D5");
test_math_sign(1.0035192754226942e+308);
test_math_sign("9W97");
test_math_sign(-489);
test_math_sign("9QAXPW");
test_math_sign(5.802257927654347e+307);
test_math_sign(-399);
test_math_sign("GGD18OJZD");
test_math_sign(1.4563772341873687e+308);
test_math_sign(-435);
test_math_sign(7.382884401762435e+307);
test_math_sign(-163);
test_math_sign(1.7422485592619279e+308);
test_math_sign(4.81382981821545e+307);
test_math_sign("09U8IMB");
test_math_sign(9.492380031137346e+307);
test_math_sign(1.4782925829642843e+308);
test_math_sign("IUE9J4SFK");
test_math_sign(1.03569754272422e+308);
test_math_sign("TZXO");
test_math_sign(-7);
test_math_sign("MMMK0F");
test_math_sign(1.918430851792971e+307);
test_math_sign("Y88V7R5QOE");
test_math_sign("F503WG");
test_math_sign(-685);
test_math_sign("IP0TP");
test_math_sign(9.149430916444872e+307);
test_math_sign("GJXWAAP");
test_math_sign(-567);
test_math_sign("F7MM5E9");
test_math_sign("4LA");
test_math_sign(-211);
test_math_sign("8TO13MV2P");
test_math_sign("1LJE");
test_math_sign(8.184455129766975e+307);
test_math_sign(9.088041737936868e+307);
test_math_sign(3.137381594970297e+307);
test_math_sign("IUIUT7Y");
test_math_sign(-11);
test_math_sign(1.5373804204515372e+308);
test_math_sign("S443H");
test_math_sign("C7LC");
test_math_sign("E0EHAO1WBK");
test_math_sign("8GD");
test_math_sign(-65);
test_math_sign("RO4LP");
test_math_sign(1.6237609209734118e+308);
test_math_sign(-149);
test_math_sign(-701);
test_math_sign(1.1470904674231673e+308);
test_math_sign("1XEXY4X8V");
test_math_sign(1.0757535610755148e+308);
test_math_sign(4.393650575303302e+307);
test_math_sign(1.3671705648572104e+308);
test_math_sign("857IY");
test_math_sign("BZ1NU");
test_math_sign(6.359318763996696e+307);
test_math_sign(-47);
test_math_sign(8.937878426546656e+307);
test_math_sign(3.183734947230497e+306);
test_math_sign("RZ3VWQQL4");
test_math_sign(6.283292850682806e+307);
test_math_sign(1.5129075709127691e+308);
test_math_sign("0FE7RSJSUD");
test_math_sign("TSIT4N");
test_math_sign(1.6106970447309377e+308);
test_math_sign("BQ00Z");
test_math_sign(5.579743863085992e+307);
test_math_sign("UW2LLE13");
test_math_sign(-479);
test_math_sign(1.5530871942925414e+307);
test_math_sign(1.3958453441370326e+308);
test_math_sign(1.2119800005484912e+307);
test_math_sign(-17);
test_math_sign("MWTGI4D2J");
test_math_sign("9AJ0NG");
test_math_sign(2.501412566856588e+307);
test_math_sign("01X08");
test_math_sign(8.122710314124861e+307);
test_math_sign(2.835269751087528e+307);
test_math_sign("8C8I");
test_math_sign(3.338950822616936e+307);
test_math_sign(1.7015346731524969e+308);
test_math_sign("S3NYA2");
test_math_sign("NII8");
test_math_sign("73W0");
test_math_sign("SCQHNHUDTT");
test_math_sign("JFYGZ55");
test_math_sign(-711);
test_math_sign(-415);
test_math_sign("C6L6ZX1");
test_math_sign(8.435769992419152e+306);
test_math_sign("C4MWMT6N");
test_math_sign(1.417146209217425e+307);
test_math_sign("JHOWZ550");
test_math_sign("NWTW");
test_math_sign(-991);
test_math_sign(2.689184942007771e+307);
test_math_sign("O8F8MYS3P4");
test_math_sign(1.5041623508909181e+308);
test_math_sign("K3T9B3WF");
test_math_sign(-95);
test_math_sign("076EQ");
test_math_sign(-861);
test_math_sign("CUCAKJ7");
test_math_sign("RO8G");
test_math_sign("5DJ1");
test_math_sign(4.602676552141246e+307);
test_math_sign("E261S");
test_math_sign(8.431301862227344e+307);
test_math_sign("R1VG66");
test_math_sign("D4JOXRTEN");
test_math_sign(1.5374240461782038e+308);
test_math_sign(-229);
test_math_sign(1.3306077058061874e+308);
test_math_sign("DPUFW");
test_math_sign(1.710280144905278e+306);
test_math_sign(-505);
test_math_sign("31IHA6T3");
test_math_sign(7.110821249230458e+307);
test_math_sign(1.3321415327756769e+308);
test_math_sign(6.748787303616871e+307);
test_math_sign("OX8J");
test_math_sign(2.1059314551267596e+307);
test_math_sign(-513);
test_math_sign(1.7719765190782114e+308);
test_math_sign("U3WA7W78T");
test_math_sign(8.447304320300377e+306);
test_math_sign("KBE86N");
test_math_sign("W8H");
test_math_sign("HUAD607QPR");
test_math_sign(1.2693881719073645e+308);
test_math_sign("5IIRXF");
test_math_sign("WH2OBNP4O");
test_math_sign(-947);
test_math_sign(1.4564482905562367e+308);
test_math_sign(-223);
test_math_sign("KVQEI");
test_math_sign(3.0857778854571075e+307);
test_math_sign(8.30579718995458e+307);
test_math_sign("V47L1J2");
test_math_sign("D91W10SO6T");
test_math_sign("KVP");
test_math_sign(1.0489115223372934e+308);
test_math_sign("CYGL");
test_math_sign(1.6998511402681845e+308);
test_math_sign("9HOV8");
test_math_sign("19VLAZUFJP");
test_math_sign("6NG0HB3");
test_math_sign("L1XJHQAPJH");
test_math_sign(6.163550870040991e+307);
test_math_sign("O76OA");
test_math_sign("UKXE");
test_math_sign("82LX15NH");
test_math_sign(7.116132454955586e+307);
test_math_sign(1.3767025495500236e+308);
test_math_sign(1.5698849792653554e+308);
test_math_sign(5.10202644146842e+307);
test_math_sign("UVLG0ZQRNK");
test_math_sign(1.6280282062324303e+307);
test_math_sign("UIK4TI");
test_math_sign(-933);
test_math_sign("46PQFZQ25");
test_math_sign("NO6IVQO9");
test_math_sign("6KDW8YKU");
test_math_sign("DM7JLKI");
test_math_sign("915W4EUKK6");
test_math_sign("13HKK6J");
test_math_sign("NEXQLULO");
test_math_sign("2SDEJ89I");
test_math_sign(1.5618999040056979e+307);
test_math_sign("R36");
test_math_sign("NMVMA098BB");
test_math_sign(1.4658071538251323e+307);
test_math_sign("UX22SC");
test_math_sign(5.386269255594781e+307);
test_math_sign("LZJEZ");
test_math_sign(-353);
test_math_sign(1.769860552410477e+308);
test_math_sign(1.2698475610860688e+308);
test_math_sign("3VXWIA0LK");
test_math_sign("MNLOU5V");
test_math_sign("Z368T56");
test_math_sign(1.8284561751152868e+307);
test_math_sign("DJHHHF");
test_math_sign("9QED");
test_math_sign(1.0273998154377239e+308);
test_math_sign("P7GS");
test_math_sign(-307);
test_math_sign(1.0039777325923902e+308);
test_math_sign("10MXWYNZT");
test_math_sign(1.151419349499175e+308);
test_math_sign(2.961354190759275e+307);
test_math_sign(9.28999075022101e+307);
test_math_sign("M6QURE9T");
test_math_sign(1.7139986072208701e+308);
test_math_sign(1.1297999120816342e+308);
test_math_sign(6.487020518098665e+306);
test_math_sign(5.215312288863496e+307);
test_math_sign(2.9509343182430287e+307);
test_math_sign(1.4145403973341297e+307);
test_math_sign(-201);
test_math_sign(1.772892419625674e+308);
test_math_sign("AREFZX6");
test_math_sign(5.597966832068434e+307);
test_math_sign(2.7888669718197303e+307);
test_math_sign("56C");
test_math_sign(-423);
test_math_sign("WO8P9NM");
test_math_sign("6UFPM1GI");
test_math_sign(5.960298859768391e+307);
test_math_sign("5HJ");
test_math_sign("O60FKW");
test_math_sign("YZQ");
test_math_sign("5XY");
test_math_sign(5.092569770084333e+307);
test_math_sign(-995);
test_math_sign(-213);
test_math_sign(1.2835901284074487e+308);
test_math_sign("3T0SRC");
test_math_sign("O223WUTL28");
test_math_sign(1.700090208279149e+308);
test_math_sign("5GVEZZW0UT");
test_math_sign(1.5781158648952691e+308);
test_math_sign(6.277029121013743e+307);
test_math_sign("7N7M");
test_math_sign(7.904590775542723e+307);
test_math_sign(5.332292197601312e+307);
test_math_sign("AHMBZY");
test_math_sign("UH0MBW649");
test_math_sign(5.072765815918749e+307);
test_math_sign("FY7C");
test_math_sign(4.4631247714812324e+307);
test_math_sign(-521);
test_math_sign("7K6");
test_math_sign("S0KI");
test_math_sign("NM1GR");
test_math_sign(1.7580434245323277e+308);
test_math_sign(-133);
test_math_sign("1TP2");
test_math_sign(4.1574414515324387e+307);
test_math_sign(-873);
test_math_sign("L287QQH");
test_math_sign(1.7626089317199005e+308);