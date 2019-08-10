/*
* This file is automatically generated by Swami
*
* 2019-08-09 12:09:18.113386
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
function test_math_cbrt(x){
	if (Object.is( x,NaN )){
		var output = Math.cbrt(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.cbrt(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === - 0 )){
		var output = Math.cbrt(x);
		assert.strictEqual(- 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === + Infinity )){
		var output = Math.cbrt(x);
		assert.strictEqual(+ Infinity, output);
		console.log("Good Test");
		return;
		}
	if (( x === - Infinity )){
		var output = Math.cbrt(x);
		assert.strictEqual(- Infinity, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}



/*TESTS GENERATED AUTOMATICALLY*/
test_math_cbrt(true);
test_math_cbrt(/yes[^]*day/);
test_math_cbrt(NaN);
test_math_cbrt(3.526106629514249e+307);
test_math_cbrt(1.6100953117397815e+308);
test_math_cbrt(+0);
test_math_cbrt(-95);
test_math_cbrt(/foo/g);
test_math_cbrt(/(\w+)\s(\w+)/);
test_math_cbrt(-769);
test_math_cbrt(3.4931141559545587e+307);
test_math_cbrt(2.0617615462376164e+307);
test_math_cbrt(false);
test_math_cbrt(5.850235936455974e+307);
test_math_cbrt(/yes.*day/);
test_math_cbrt(-493);
test_math_cbrt("X3BCGXG");
test_math_cbrt(-299);
test_math_cbrt("QZGY");
test_math_cbrt(/ab+c/);
test_math_cbrt(-611);
test_math_cbrt(-0);
test_math_cbrt(1.1993926779401395e+307);
test_math_cbrt(null);
test_math_cbrt(/[\u0400-\u04FF]+/g);
test_math_cbrt(-467);
test_math_cbrt("8NIJ5C2ZI6");
test_math_cbrt(-169);
test_math_cbrt(/\r\n|\r|\n/);
test_math_cbrt("UFB");
test_math_cbrt("ZA6V1");
test_math_cbrt(-923);
test_math_cbrt("RU5");
test_math_cbrt(1.167982973086215e+307);
test_math_cbrt(-887);
test_math_cbrt(-571);
test_math_cbrt("P5WX0YVKQ");
test_math_cbrt("YNA71E8A");
test_math_cbrt(undefined);
test_math_cbrt("DE97HXEY");
test_math_cbrt(1.0623920444352548e+308);
test_math_cbrt(1.6102315769828236e+308);
test_math_cbrt("WAQ");
test_math_cbrt(5.069679378345974e+306);
test_math_cbrt(-879);
test_math_cbrt(1.6108092570565563e+308);
test_math_cbrt("8V4XBM4OUU");
test_math_cbrt(-947);
test_math_cbrt(-593);
test_math_cbrt("7VNA2BY");
test_math_cbrt("9Q4P4M660");
test_math_cbrt(-817);
test_math_cbrt("LPD8I1Z");
test_math_cbrt(1.2227155516193756e+308);
test_math_cbrt(-629);
test_math_cbrt(/[^.]+/);
test_math_cbrt("ATWYCZJV8U");
test_math_cbrt(-325);
test_math_cbrt(7.280685730979009e+307);
test_math_cbrt(-853);
test_math_cbrt("2SL");
test_math_cbrt(-935);
test_math_cbrt("GJRXRB8");
test_math_cbrt(-485);
test_math_cbrt("673TI89WKJ");
test_math_cbrt("BBZ5");
test_math_cbrt("NLNGZ2");
test_math_cbrt(-741);
test_math_cbrt(Infinity);
test_math_cbrt(-449);
test_math_cbrt(-405);
test_math_cbrt(8.65001703966161e+306);
test_math_cbrt("LMNZ");
test_math_cbrt(2.899124357290615e+305);
test_math_cbrt("W76JTN");
test_math_cbrt("X4BMVQ");
test_math_cbrt("X3U");
test_math_cbrt("89UGT2ITLA");
test_math_cbrt(-825);
test_math_cbrt(5.446265343656551e+307);
test_math_cbrt("897");
test_math_cbrt(-445);
test_math_cbrt(-749);
test_math_cbrt("9IP0KBFPT");
test_math_cbrt("PJHHG5");
test_math_cbrt(1.7280424618557496e+308);
test_math_cbrt("K6AXFM0WUI");
test_math_cbrt("6911E9P");
test_math_cbrt(7.315015583771656e+306);
test_math_cbrt(-697);
test_math_cbrt(4.059448109514222e+307);
test_math_cbrt("QTEESV");
test_math_cbrt(-539);
test_math_cbrt(-597);
test_math_cbrt(-333);
test_math_cbrt("QHRUA6X9");
test_math_cbrt("QQJM7PH2");
test_math_cbrt(1.6440099488917072e+308);
test_math_cbrt(5.471455806094306e+307);
test_math_cbrt(1.6038387319996354e+308);
test_math_cbrt(1.5345004433257631e+308);
test_math_cbrt(1.2472833918080998e+308);
test_math_cbrt(1.4666926185229863e+306);
test_math_cbrt(1.6676666433732234e+308);
test_math_cbrt(-409);
test_math_cbrt(2.4848195667127083e+307);
test_math_cbrt(1.1318689005446257e+308);
test_math_cbrt(6.341383802605008e+307);
test_math_cbrt("DPM4CI5");
test_math_cbrt(1.3015700468795478e+308);
test_math_cbrt("88C4PP29");
test_math_cbrt(-53);
test_math_cbrt("AAKVRA");
test_math_cbrt(-75);
test_math_cbrt(1.0066367868828531e+308);
test_math_cbrt("PJVRM6MS");
test_math_cbrt(-863);
test_math_cbrt("1FFC4RF");
test_math_cbrt(1.3212611880628632e+307);
test_math_cbrt(1.7145463462789376e+308);
test_math_cbrt("DZ269L6PY");
test_math_cbrt(2.1395120731450037e+307);
test_math_cbrt(8.125227905911881e+307);
test_math_cbrt(1.2735590823131906e+308);
test_math_cbrt("HO7");
test_math_cbrt("3T12DB");
test_math_cbrt("F01MVH");
test_math_cbrt(-791);
test_math_cbrt(-257);
test_math_cbrt(4.3042817127150623e+307);
test_math_cbrt(3.283475947857856e+307);
test_math_cbrt(1.3259002674457e+308);
test_math_cbrt(-713);
test_math_cbrt("7TNV2763AI");
test_math_cbrt(-323);
test_math_cbrt("I7M6P");
test_math_cbrt(-173);
test_math_cbrt(-895);
test_math_cbrt(1.4262494875149362e+307);
test_math_cbrt(-983);
test_math_cbrt("DN0Y0S0UO9");
test_math_cbrt(3.037395264969688e+306);
test_math_cbrt(1.0661959490673397e+308);
test_math_cbrt("CI73V");
test_math_cbrt("HRO238IL");
test_math_cbrt(-237);
test_math_cbrt("7S2F5K53CE");
test_math_cbrt(5.127590056474292e+305);
test_math_cbrt(4.297809830671569e+307);
test_math_cbrt("W68");
test_math_cbrt(1.2945543283916644e+308);
test_math_cbrt("TGZ");
test_math_cbrt("XCPAH8MTE5");
test_math_cbrt(-351);
test_math_cbrt("830");
test_math_cbrt(-711);
test_math_cbrt(5.995262868445932e+307);
test_math_cbrt("6C3FOYOVU");
test_math_cbrt("DMT1FIAGDI");
test_math_cbrt(-67);
test_math_cbrt("FO1RWNT8");
test_math_cbrt(-865);
test_math_cbrt(-273);
test_math_cbrt(1.7273304249739164e+308);
test_math_cbrt("GC2OMBWTR");
test_math_cbrt(1.4613153979846306e+308);
test_math_cbrt(-15);
test_math_cbrt("G1GM");
test_math_cbrt("IVI64E");
test_math_cbrt(1.6544580189962864e+308);
test_math_cbrt(-439);
test_math_cbrt("AG3S");
test_math_cbrt(1.5809021890966203e+308);
test_math_cbrt(7.615148381703214e+307);
test_math_cbrt("FT4I9YQ6HY");
test_math_cbrt(-643);
test_math_cbrt(1.6154636575682468e+308);
test_math_cbrt(1.7054741423461079e+308);
test_math_cbrt(3.997837529547212e+306);
test_math_cbrt(-393);
test_math_cbrt("APBRV2X");
test_math_cbrt(1.0209927088399932e+307);
test_math_cbrt("UGG0SD3B");
test_math_cbrt(-581);
test_math_cbrt(-417);
test_math_cbrt(-617);
test_math_cbrt("ITFKJ9DPS");
test_math_cbrt("OV7");
test_math_cbrt(-261);
test_math_cbrt(1.7014256597761503e+308);
test_math_cbrt(9.1515921466065e+307);
test_math_cbrt("CWINXF");
test_math_cbrt("2N32");
test_math_cbrt(1.574451556843649e+308);
test_math_cbrt("PK8VYKTV3");
test_math_cbrt(2.9917290367505027e+306);
test_math_cbrt("ZGRF");
test_math_cbrt(1.5221117075239142e+308);
test_math_cbrt("T3J8NMEX");
test_math_cbrt(-355);
test_math_cbrt(-623);
test_math_cbrt("THA");
test_math_cbrt(-731);
test_math_cbrt("DWY26OS");
test_math_cbrt(-399);
test_math_cbrt(-551);
test_math_cbrt(-267);
test_math_cbrt("XZHC1");
test_math_cbrt(6.726452039986684e+307);
test_math_cbrt("Y9CFRSZU");
test_math_cbrt(1.5525647088765323e+308);
test_math_cbrt(2.7992035572047003e+307);
test_math_cbrt("IG2");
test_math_cbrt(-587);
test_math_cbrt(8.538158810115475e+307);
test_math_cbrt("SLC");
test_math_cbrt(1.0192464893280028e+308);
test_math_cbrt(-327);
test_math_cbrt(9.781749171750768e+307);
test_math_cbrt(4.777126242812506e+307);
test_math_cbrt(1.7222839463978872e+308);
test_math_cbrt(5.105409540180577e+307);
test_math_cbrt("TQZU3A2SL");
test_math_cbrt(6.621245035972055e+307);
test_math_cbrt(1.3360765131855532e+308);
test_math_cbrt(7.127516736881215e+307);
test_math_cbrt(1.2989153658658022e+308);
test_math_cbrt(-771);
test_math_cbrt("HE2AJ6306");
test_math_cbrt("ULN4PM1D");
test_math_cbrt(-121);
test_math_cbrt(1.3210503958096499e+308);
test_math_cbrt(2.476280993789941e+307);
test_math_cbrt("ZDQ7WTWO");
test_math_cbrt("YL94UJ");
test_math_cbrt("1UWW");
test_math_cbrt(1.8005265373678904e+306);
test_math_cbrt(6.83490398840522e+306);
test_math_cbrt(-931);
test_math_cbrt(6.195828262442185e+304);
test_math_cbrt(-413);
test_math_cbrt("ZKQD1ZP");
test_math_cbrt("7GHG32839Q");
test_math_cbrt("OFKPI");
test_math_cbrt(-743);
test_math_cbrt("M3SD1Z");
test_math_cbrt("7UVNU03BA");
test_math_cbrt(1.072015479976499e+308);
test_math_cbrt(7.455458191990622e+307);
test_math_cbrt("57AZHQWPP6");
test_math_cbrt("31BJNT1");
test_math_cbrt(-849);
test_math_cbrt("3L4Q3I");
test_math_cbrt("A14ADVH");
test_math_cbrt(1.3559216084273647e+308);
test_math_cbrt(1.012309406404349e+308);
test_math_cbrt(-523);
test_math_cbrt("8STI");
test_math_cbrt(3.515236208043722e+307);
test_math_cbrt("QUOWZ2H36U");
test_math_cbrt(7.89228534142137e+307);
test_math_cbrt(-289);
test_math_cbrt(8.584091789352397e+307);
test_math_cbrt("E0Z");
test_math_cbrt(3.0679915424764566e+306);
test_math_cbrt(-275);
test_math_cbrt(-229);
test_math_cbrt(-991);
test_math_cbrt("4CSVCJLAM");
test_math_cbrt(1.122736133409731e+308);
test_math_cbrt(-797);
test_math_cbrt(4.2631805481612844e+307);
test_math_cbrt("I8HWXQC1N");
test_math_cbrt("C48U");
test_math_cbrt(1.0680398882794186e+308);
test_math_cbrt(7.182019445855722e+307);
test_math_cbrt(-843);
test_math_cbrt(1.5986255808114463e+308);
test_math_cbrt(-989);
test_math_cbrt(1.7532316966824904e+308);
test_math_cbrt(-117);
test_math_cbrt(-569);
test_math_cbrt(-157);
test_math_cbrt(1.5664683253295506e+307);
test_math_cbrt(-213);
test_math_cbrt(1.2498258090274671e+308);
test_math_cbrt(1.4129094422314702e+308);
test_math_cbrt(-143);
test_math_cbrt("PRDZ5A");
test_math_cbrt(-115);
test_math_cbrt("4L0TZNBT6");
test_math_cbrt(1.2894703238176275e+308);
test_math_cbrt(-109);
test_math_cbrt(2.0647791737290976e+307);
test_math_cbrt(5.250119274392885e+307);
test_math_cbrt("CNIK91CZ");
test_math_cbrt("YD1G");
test_math_cbrt("FY0VMQ");
test_math_cbrt("WUYP1XH8MJ");
test_math_cbrt("XOOYGO");
test_math_cbrt("6ENQY3");
test_math_cbrt(-331);
test_math_cbrt("EQPCV");
test_math_cbrt(1.4973389243915504e+308);
test_math_cbrt(3.821854593779917e+307);
test_math_cbrt(5.807880447317482e+307);
test_math_cbrt("Y4ZGN7AM");
test_math_cbrt(6.654928986010864e+307);
test_math_cbrt(-759);
test_math_cbrt("BX9T");
test_math_cbrt(2.5026131177259936e+307);
test_math_cbrt("07TSZFJTS0");
test_math_cbrt("BWRY");
test_math_cbrt("PRAXV8");
test_math_cbrt(3.4060652418266523e+307);
test_math_cbrt(1.4068524257406677e+308);
test_math_cbrt("NPJAJ7");
test_math_cbrt("3G5");
test_math_cbrt(1.1731393622645437e+308);
test_math_cbrt(8.590324975339309e+307);
test_math_cbrt(4.3562763534847357e+307);
test_math_cbrt("ZRDMP");
test_math_cbrt(-757);
test_math_cbrt("RY2DD1");
test_math_cbrt(1.4780945497637181e+308);
test_math_cbrt(3.3974734911748363e+307);
test_math_cbrt(1.164367924138257e+308);
test_math_cbrt("OBW8");
test_math_cbrt("X27D83TE8M");
test_math_cbrt("PJX9WYK8");
test_math_cbrt("2AX");
test_math_cbrt("SP8Z1N2");
test_math_cbrt(-883);
test_math_cbrt("M1ZB6VN");
test_math_cbrt(-253);
test_math_cbrt("3FYYG5A2F");
test_math_cbrt(1.7951908503950535e+307);
test_math_cbrt(-807);
test_math_cbrt(1.056187102199554e+308);
test_math_cbrt(-867);
test_math_cbrt(7.330866580230982e+307);
test_math_cbrt("7WDES9WSC");
test_math_cbrt(-725);
test_math_cbrt("P2A");
test_math_cbrt(-225);
test_math_cbrt(1.5019150912089477e+307);
test_math_cbrt(1.2046473801198804e+308);
test_math_cbrt(-793);
test_math_cbrt(1.3145749284963993e+308);
test_math_cbrt(-845);
test_math_cbrt("66KJ");
test_math_cbrt(5.320419553246394e+307);
test_math_cbrt(1.6740208494441202e+308);
test_math_cbrt("4E024V");
test_math_cbrt(-101);
test_math_cbrt(1.1664059413974968e+308);
test_math_cbrt("5XTR2FZ");
test_math_cbrt(2.780662113400258e+306);
test_math_cbrt("EE41YP");
test_math_cbrt(5.989723893640032e+307);
test_math_cbrt(1.0629142944507486e+308);
test_math_cbrt(1.7135603132599035e+308);
test_math_cbrt(-529);
test_math_cbrt(3.1652229907145716e+307);
test_math_cbrt("O7NGQ98FI");
test_math_cbrt("6YKNQ");
test_math_cbrt("GTR5JZIG2I");
test_math_cbrt("ACVMHBU");
test_math_cbrt(-431);
test_math_cbrt("BMRXJ8");
test_math_cbrt(1.5926518224290118e+308);
test_math_cbrt("R53SX");
test_math_cbrt(2.1502331038248872e+307);
test_math_cbrt(1.3719646420315355e+308);
test_math_cbrt(7.900555981773028e+307);
test_math_cbrt(-775);
test_math_cbrt(5.2878552709043825e+306);
test_math_cbrt("SNZU6PUJ9U");
test_math_cbrt("J5ELSN4");
test_math_cbrt("M1NBPA");
test_math_cbrt("FOFYAX");
test_math_cbrt(1.5585838936082917e+308);
test_math_cbrt("O52JZP");
test_math_cbrt("2BE1A");
test_math_cbrt("1VGNPM3YU");
test_math_cbrt(-903);
test_math_cbrt(-761);
test_math_cbrt("027QULCRBW");
test_math_cbrt("OZHBRH");
test_math_cbrt(-819);
test_math_cbrt("K4K554");
test_math_cbrt(-35);
test_math_cbrt(-277);
test_math_cbrt(8.691121642001724e+307);
test_math_cbrt(1.1810638113144745e+308);
test_math_cbrt(1.563794578429414e+308);
test_math_cbrt("D75M03K2");
test_math_cbrt(1.4991448875740771e+308);
test_math_cbrt(-677);
test_math_cbrt(1.261603424035046e+308);
test_math_cbrt(-265);
test_math_cbrt("O2DR3B7R");
test_math_cbrt(-981);
test_math_cbrt(7.090027984813442e+306);
test_math_cbrt("82JP2OETNJ");
test_math_cbrt(-595);
test_math_cbrt(-605);
test_math_cbrt("K9QRQO");
test_math_cbrt("LBWB1");
test_math_cbrt(-659);
test_math_cbrt(7.148302300223363e+307);
test_math_cbrt("SVXBO85Q6M");
test_math_cbrt(6.414208403131995e+307);
test_math_cbrt(-63);
test_math_cbrt(-699);
test_math_cbrt("NRN07");
test_math_cbrt("GN24");
test_math_cbrt(9.553377663175636e+307);
test_math_cbrt("TQTAR");
test_math_cbrt(-73);
test_math_cbrt(904);
test_math_cbrt(2.4514785271917747e+307);
test_math_cbrt(1.2923410415142167e+307);
test_math_cbrt("IZ2");
test_math_cbrt(8.787690857643291e+306);
test_math_cbrt("RVFYA0M");
test_math_cbrt("2GQC6");
test_math_cbrt(1.7634809157579517e+307);
test_math_cbrt(6.743250642968903e+306);
test_math_cbrt(5.977083231206396e+307);
test_math_cbrt(-9);
test_math_cbrt(-335);
test_math_cbrt("H1WKLD");
test_math_cbrt("IOMXOC");
test_math_cbrt(-777);
test_math_cbrt(6.180528770468374e+307);
test_math_cbrt(-459);
test_math_cbrt(4.0259787528476653e+307);
test_math_cbrt(-49);
test_math_cbrt("9442RDQLS");
test_math_cbrt("45ROWV");
test_math_cbrt("7CV3D");
test_math_cbrt(-969);
test_math_cbrt(9.093119776723791e+306);
test_math_cbrt("H1MZB");
test_math_cbrt(6.072491540178378e+307);
test_math_cbrt(-635);
test_math_cbrt("P5JL");
test_math_cbrt("1U2HS4C");
test_math_cbrt("RD3APD9X96");
test_math_cbrt("M2MSKC5E0F");
test_math_cbrt(9.907508701600314e+307);
test_math_cbrt(-45);
test_math_cbrt("PQJ");
test_math_cbrt(-751);
test_math_cbrt(-123);
test_math_cbrt(-353);
test_math_cbrt("95ZF2MYH4R");
test_math_cbrt(1.4199479841817706e+308);
test_math_cbrt(9.922362360958227e+307);
test_math_cbrt(1.528836384818874e+308);
test_math_cbrt(-507);
test_math_cbrt(3.4291172017285984e+307);
test_math_cbrt(1.5562915675201106e+308);
test_math_cbrt(-127);
test_math_cbrt(-715);
test_math_cbrt("V4D");
test_math_cbrt("6F74G");
test_math_cbrt("1YYZPT6FSV");
test_math_cbrt(-269);
test_math_cbrt(5.575800228789599e+307);
test_math_cbrt("8S8XQ1MQOZ");
test_math_cbrt(-733);
test_math_cbrt("JME0IUDQ4");
test_math_cbrt(-309);
test_math_cbrt(-959);
test_math_cbrt(8.100069933395968e+307);
test_math_cbrt("WUMPCW");
test_math_cbrt("PPRLCBSJO");
test_math_cbrt(8.284049611004245e+307);
test_math_cbrt(-429);
test_math_cbrt(-395);
test_math_cbrt(-159);
test_math_cbrt(-669);
test_math_cbrt(4.043798693529098e+306);
test_math_cbrt(1.4935732547801577e+308);
test_math_cbrt("042UGK0A");
test_math_cbrt(1.155654529662458e+308);
test_math_cbrt(8.450578291014061e+307);
test_math_cbrt("649V");
test_math_cbrt("DP83TX8B6D");
test_math_cbrt(-87);
test_math_cbrt(1.5866670516216484e+308);
test_math_cbrt(6.557100261112755e+307);
test_math_cbrt(-875);
test_math_cbrt(-305);
test_math_cbrt(2.7941809041250404e+307);
test_math_cbrt(1.2066198412820412e+307);
test_math_cbrt("TG66T6VS");
test_math_cbrt(-301);
test_math_cbrt("LK29");
test_math_cbrt("7NTP02U");
test_math_cbrt("9L4");
test_math_cbrt(1.2132951337343652e+308);
test_math_cbrt(-177);
test_math_cbrt(4.0030258333439556e+307);
test_math_cbrt("PVFQ");
test_math_cbrt(1.698599211021898e+308);
test_math_cbrt(1.5538772958988474e+308);
test_math_cbrt("LCI40Z215");
test_math_cbrt(-99);
test_math_cbrt(4.400644069012021e+307);
test_math_cbrt("2HE");
test_math_cbrt("Z9YJP06YB0");
test_math_cbrt(-85);
test_math_cbrt(7.871998476398801e+306);
test_math_cbrt(-151);
test_math_cbrt(1.600632218812273e+308);
test_math_cbrt("PBK2");
test_math_cbrt(-979);
test_math_cbrt(-667);
test_math_cbrt("687OQMW");
test_math_cbrt(1.2136147362064627e+308);
test_math_cbrt(-189);
test_math_cbrt(1.0841655263912497e+308);
test_math_cbrt(-197);
test_math_cbrt(2.792205099108858e+307);
test_math_cbrt(3.4236372541565597e+307);
test_math_cbrt("6LJMW9BA");
test_math_cbrt(1.3494407920263544e+308);
test_math_cbrt(-249);
test_math_cbrt("H2E30U");
test_math_cbrt(3.9543510682313304e+307);
test_math_cbrt("HPLO04UR");
test_math_cbrt(3.1624838467439665e+307);
test_math_cbrt(2.1432454073952353e+307);
test_math_cbrt("ESTQ");
test_math_cbrt("4NHCJ7R");
test_math_cbrt(9.80212200610913e+307);
test_math_cbrt(1.302892955454229e+308);
test_math_cbrt(-671);
test_math_cbrt(1.4553854811272017e+308);
test_math_cbrt(1.7280603184077159e+308);
test_math_cbrt(6.380865654265644e+306);
test_math_cbrt(-965);
test_math_cbrt("9GO4TECWCU");
test_math_cbrt(-61);
test_math_cbrt(6.93518059333025e+307);
test_math_cbrt("BNUV5Z0X");
test_math_cbrt("YJXT");
test_math_cbrt(1.11312814315483e+308);
test_math_cbrt("MO2BLEV");
test_math_cbrt("325E");
test_math_cbrt("4KNJ");
test_math_cbrt("QZU246");
test_math_cbrt("2GY1MRMTDG");
test_math_cbrt(1.7737954978570174e+308);
test_math_cbrt("A72D");
test_math_cbrt(-985);
test_math_cbrt(4.4006144697508753e+307);
test_math_cbrt(-247);
test_math_cbrt(-107);
test_math_cbrt(1.6471109235171704e+308);
test_math_cbrt(5.211206359434102e+307);
test_math_cbrt(-195);
test_math_cbrt(8.515232153891295e+307);
test_math_cbrt("FYGSS325D");
test_math_cbrt(-359);
test_math_cbrt("Z8DQPAD");
test_math_cbrt(-525);
test_math_cbrt(1.5064958958710402e+308);
test_math_cbrt(1.0989642300608486e+308);
test_math_cbrt(4.2296595495298444e+306);
test_math_cbrt("SXVT");
test_math_cbrt(1.6904618083516624e+308);
test_math_cbrt("O4Z1BPJ");
test_math_cbrt(1.5821535073094053e+308);
test_math_cbrt("8IPV96E4U");
test_math_cbrt("LF6OI4UUWW");
test_math_cbrt("X39");
test_math_cbrt(-135);
test_math_cbrt("0AOLQ9MQ7O");
test_math_cbrt("0IFGR");
test_math_cbrt(9.864435954470704e+307);
test_math_cbrt(-503);
test_math_cbrt("RZS");
test_math_cbrt("3M0S6HM2JW");
test_math_cbrt(4.0940309654534793e+307);
test_math_cbrt(-163);
test_math_cbrt("6CH20");
test_math_cbrt("MZOEW9OGAX");
test_math_cbrt(1.5658766260127606e+308);
test_math_cbrt("Q5Q3GG7");
test_math_cbrt("KE54FNE440");
test_math_cbrt("IWGRO");
test_math_cbrt(-263);
test_math_cbrt(-83);
test_math_cbrt(1.9807985102945873e+306);
test_math_cbrt("FYKI0MWEZ1");
test_math_cbrt(1.3356053818094665e+308);
test_math_cbrt(1.1296578152156805e+308);
test_math_cbrt("2SDEJ89I");
test_math_cbrt("45MY");
test_math_cbrt("7OZBLF7R3I");
test_math_cbrt(1.2331022773319507e+308);
test_math_cbrt(4.754123958719931e+307);
test_math_cbrt(-663);
test_math_cbrt("8EXQK694U");
test_math_cbrt(1.0410733871526803e+308);
test_math_cbrt(-453);
test_math_cbrt(3.213461981321025e+307);
test_math_cbrt(-575);
test_math_cbrt("07YI7");
test_math_cbrt("CJC");
test_math_cbrt(1.742322212826891e+308);
test_math_cbrt(1.748909643566263e+308);
test_math_cbrt("GECUY5K");
test_math_cbrt(-767);
test_math_cbrt(6.658559096185658e+307);
test_math_cbrt("W9LF");
test_math_cbrt(-957);
test_math_cbrt(6.959576922761834e+306);
test_math_cbrt(6.375060007766705e+307);
test_math_cbrt(1.033852483396452e+308);
test_math_cbrt("83XP93X7X");
test_math_cbrt("8CQBGFCZK");
test_math_cbrt("B8LZB9C9E");
test_math_cbrt("4UENYAGT");
test_math_cbrt(-607);
test_math_cbrt("5ZG0SZVFYR");
test_math_cbrt(1.3164199462061202e+308);
test_math_cbrt(-57);
test_math_cbrt("KVJY");
test_math_cbrt(-805);
test_math_cbrt(-369);
test_math_cbrt(-259);
test_math_cbrt(1.1096746902275989e+307);
test_math_cbrt("JLJKWW");
test_math_cbrt(6.340170200864988e+307);
test_math_cbrt(2.500120724872037e+307);
test_math_cbrt("3K2");
test_math_cbrt("MD3OU");
test_math_cbrt(-665);
test_math_cbrt("CZNBO");
test_math_cbrt("QVRMQC72O");
test_math_cbrt(-251);
test_math_cbrt("SUA");
test_math_cbrt("WL0PCF0H7");
test_math_cbrt(9.675567633687181e+307);
test_math_cbrt(-945);
test_math_cbrt(-165);
test_math_cbrt("I0C");
test_math_cbrt("V58");
test_math_cbrt(-105);
test_math_cbrt("P5K7");
test_math_cbrt("TOYVXKQR");
test_math_cbrt(-191);
test_math_cbrt("1IXI6FMX");
test_math_cbrt(-693);
test_math_cbrt("IW66K7IT");
test_math_cbrt(-357);
test_math_cbrt("RGN816");
test_math_cbrt("YXYR7DOTO7");
test_math_cbrt("PVRSLG");
test_math_cbrt(-425);
test_math_cbrt("G36WKQ8WC");
test_math_cbrt(4.236310860118947e+307);
test_math_cbrt("XT14SBV");
test_math_cbrt("FQRCZCRA");
test_math_cbrt("3MU5I1SS");
test_math_cbrt(8.838753693071864e+307);
test_math_cbrt("E8MJ3");
test_math_cbrt("V8QBO84M7");
test_math_cbrt(1.5419031085369882e+308);
test_math_cbrt("JDM");
test_math_cbrt(-975);
test_math_cbrt(3.63466618245882e+307);
test_math_cbrt(1.6374078235402752e+308);
test_math_cbrt("RKU3Q2I2T4");
test_math_cbrt(1.3956825074409603e+308);
test_math_cbrt(3.834815644164223e+307);
test_math_cbrt(1.4064764620761894e+308);
test_math_cbrt(-437);
test_math_cbrt("VYK8BV1");
test_math_cbrt(1.7863470917779675e+308);
test_math_cbrt("DII6D");
test_math_cbrt(1.4224683578998248e+308);
test_math_cbrt("CJFB");
test_math_cbrt(1.527213122710596e+308);
test_math_cbrt(1.5806844125380714e+308);
test_math_cbrt(1.7421963866083181e+308);
test_math_cbrt(6.218533670625215e+307);
test_math_cbrt(-421);
test_math_cbrt(-909);
test_math_cbrt(4.686211610193338e+307);
test_math_cbrt("64K1KVTC");
test_math_cbrt("94COPWQEE");
test_math_cbrt(9.259884763813242e+307);
test_math_cbrt(1.4652169289738404e+308);
test_math_cbrt("52D");
test_math_cbrt(1.4142845583313366e+308);
test_math_cbrt(1.319303814508984e+308);
test_math_cbrt(-615);
test_math_cbrt("30LNFIIIY");
test_math_cbrt(1.7452591356566073e+308);
test_math_cbrt(1.6288614936111099e+308);
test_math_cbrt(-477);
test_math_cbrt(6.53362144663946e+307);
test_math_cbrt(-929);
test_math_cbrt("8FHECXFT8");
test_math_cbrt(-717);
test_math_cbrt(-55);
test_math_cbrt(7.844336529775145e+307);
test_math_cbrt("LB7GZVUB");
test_math_cbrt(-435);
test_math_cbrt(-881);
test_math_cbrt("URKV");
test_math_cbrt(-401);
test_math_cbrt(4.572512977661876e+307);
test_math_cbrt("X01T8JXI");
test_math_cbrt("0ZKLITF");
test_math_cbrt("1QY67C70");
test_math_cbrt(-527);
test_math_cbrt("6YGWIO");
test_math_cbrt(-585);
test_math_cbrt(-183);
test_math_cbrt(1.56508841049725e+308);
test_math_cbrt(-469);
test_math_cbrt("6PJPKV");
test_math_cbrt(7.789651982290911e+307);
test_math_cbrt("7U6");
test_math_cbrt("5TOA0");
test_math_cbrt(1.6998513200747293e+308);
test_math_cbrt(-919);
test_math_cbrt(9.744329966904644e+307);
test_math_cbrt(6.264984158255451e+307);
test_math_cbrt("89G");
test_math_cbrt(8.60812874005589e+306);
test_math_cbrt("LW3W0");
test_math_cbrt(6.102270461147972e+307);
test_math_cbrt("GPUZ324ZT3");
test_math_cbrt("EJ6LN8PKC");
test_math_cbrt(6.660669768045366e+307);
test_math_cbrt(1.0349611064901206e+308);
test_math_cbrt("QPIMGCDAK");
test_math_cbrt(1.7972301177202414e+308);
test_math_cbrt(4.549903630355532e+307);
test_math_cbrt("WXOL8U6B5");
test_math_cbrt(6.407880403865512e+307);
test_math_cbrt(1.6074347933092689e+307);
test_math_cbrt(-219);
test_math_cbrt("MO6Q36SN");
test_math_cbrt(-773);
test_math_cbrt(1.561188724477862e+308);
test_math_cbrt(3.1343121460570426e+307);
test_math_cbrt(-917);
test_math_cbrt(-589);
test_math_cbrt(1.5194924396679973e+308);
test_math_cbrt(6.813851374209324e+307);
test_math_cbrt(1.2506364196695916e+308);
test_math_cbrt(-11);
test_math_cbrt("J5C1F8ZH");
test_math_cbrt(-415);
test_math_cbrt(6.101027829610727e+307);
test_math_cbrt(8.86622137401361e+306);
test_math_cbrt("7N6D4R");
test_math_cbrt(1.485120741255498e+308);
test_math_cbrt(-901);
test_math_cbrt(-609);
test_math_cbrt("9M0FWR8B7");
test_math_cbrt("LBBY");
test_math_cbrt(9.981649213718018e+307);
test_math_cbrt(1.7325687756495332e+308);
test_math_cbrt("I9CGEM9");
test_math_cbrt("27CLSW2OKQ");
test_math_cbrt(7.340577265630806e+307);
test_math_cbrt(1.4193613176836772e+308);
test_math_cbrt("4N7Z8A");
test_math_cbrt("6JDXFJZYB7");
test_math_cbrt("4N73K4DKEC");
test_math_cbrt(-377);
test_math_cbrt("0I1QBLZ");
test_math_cbrt(3.8161625639196267e+307);
test_math_cbrt("CY06AH");
test_math_cbrt("DQEVXE4");
test_math_cbrt(1.7435004158200935e+308);
test_math_cbrt("ZSMPHBNFZ");
test_math_cbrt(-833);
test_math_cbrt("DRNKKK5");
test_math_cbrt("QJJPP118");
test_math_cbrt("N1MP");
test_math_cbrt(1.3533227534007866e+308);
test_math_cbrt("F1392MK");
test_math_cbrt(-411);
test_math_cbrt(-139);
test_math_cbrt(1.7778566131870135e+307);
test_math_cbrt(7.946474104287656e+307);
test_math_cbrt("0A8KED1U");
test_math_cbrt("JTB");
test_math_cbrt(-827);
test_math_cbrt("661LAY7J");
test_math_cbrt(1.2737747275845588e+308);
test_math_cbrt(-341);
test_math_cbrt("2JMME9Q");
test_math_cbrt(5.09369480433598e+307);
test_math_cbrt(-379);
test_math_cbrt("BBJGQBB7");
test_math_cbrt(6.659937558110996e+306);
test_math_cbrt(-873);
test_math_cbrt(1.0678584522890313e+307);
test_math_cbrt(4.717344093024593e+307);
test_math_cbrt(1.4685353016367244e+308);
test_math_cbrt(8.727683793572256e+306);
test_math_cbrt("QVL5PWMD");
test_math_cbrt(-375);
test_math_cbrt(1.5483995059063047e+308);
test_math_cbrt(8.13747181017261e+307);
test_math_cbrt(7.802766214689052e+307);
test_math_cbrt("SC62PCS");
test_math_cbrt(-215);
test_math_cbrt(-179);
test_math_cbrt(8.594342907166417e+307);
test_math_cbrt(1.7829844958767426e+308);
test_math_cbrt(5.958136718374612e+307);
test_math_cbrt(-649);
test_math_cbrt("IY7");
test_math_cbrt(1.5423700625104407e+308);
test_math_cbrt(6.713495662581265e+307);
test_math_cbrt(1.321211248489048e+308);
test_math_cbrt("LA3X4Q4K5K");
test_math_cbrt(1.170251625356447e+308);
test_math_cbrt("8BG");
test_math_cbrt(9.824891768112124e+307);
test_math_cbrt(4.499030361539669e+307);
test_math_cbrt("AQR4BF0W");
test_math_cbrt("K9FIE1ZVNO");
test_math_cbrt(1.6167942196216815e+308);
test_math_cbrt(-829);
test_math_cbrt(-911);
test_math_cbrt(-287);
test_math_cbrt("5TQC3Q6");
test_math_cbrt("8ESFENWDR");
test_math_cbrt("BLMT1W3G");
test_math_cbrt(6.491550832438518e+307);
test_math_cbrt(4.678407709375084e+307);
test_math_cbrt(-591);
test_math_cbrt(1.0703492238130252e+308);
test_math_cbrt(1.2185073828879471e+308);
test_math_cbrt("7S9");
test_math_cbrt("Z2E");
test_math_cbrt(-103);
test_math_cbrt("78UMVL6KO");
test_math_cbrt(750);
test_math_cbrt(-681);
test_math_cbrt(-343);
test_math_cbrt(1.1637397496839435e+308);
test_math_cbrt("94WJ1C03KD");
test_math_cbrt(3.675541043942384e+307);
test_math_cbrt(-25);
test_math_cbrt("40SZ1O");
test_math_cbrt(-859);
test_math_cbrt(-925);
test_math_cbrt("W1QK24AIXK");
test_math_cbrt("RBY9IS");
test_math_cbrt("ZT03O7Q");
test_math_cbrt("3KPE1TY1");
test_math_cbrt(-915);
test_math_cbrt(-161);
test_math_cbrt("PY0TJEF");
test_math_cbrt("VLP7X6S");
test_math_cbrt(7.485158995558147e+307);
test_math_cbrt(1.1155581905148809e+308);
test_math_cbrt(8.661479491728665e+307);
test_math_cbrt(2.46509299025237e+307);
test_math_cbrt("0VAH");
test_math_cbrt(7.718562623996164e+307);
test_math_cbrt(2.819422604394689e+307);
test_math_cbrt(1.3485703674837904e+308);
test_math_cbrt(-891);
test_math_cbrt("BADXD65UL");
test_math_cbrt(-481);
test_math_cbrt(9.249109023670729e+307);
test_math_cbrt(2.4167536786474236e+307);
test_math_cbrt(-487);
test_math_cbrt(1.3422163370834679e+308);
test_math_cbrt("PIZ");
test_math_cbrt("PDJS1EP");
test_math_cbrt(-565);
test_math_cbrt("NLUR");
test_math_cbrt(2.1429425014691357e+307);
test_math_cbrt(-703);
test_math_cbrt(9.785631520898039e+307);
test_math_cbrt("UCAM");
test_math_cbrt(9.422444436492115e+307);
test_math_cbrt(-621);
test_math_cbrt("UB0XTOM5A");
test_math_cbrt(6.95676032929719e+307);
test_math_cbrt("JRPB");
test_math_cbrt("UH1T");
test_math_cbrt(2.831242584181127e+307);
test_math_cbrt(6.169473709525254e+307);
test_math_cbrt(3.2024971320203776e+307);
test_math_cbrt(1.0232301587061035e+308);
test_math_cbrt("PANQ");
test_math_cbrt(280);
test_math_cbrt(-311);
test_math_cbrt(7.902093112631026e+307);
test_math_cbrt(-271);
test_math_cbrt(-851);
test_math_cbrt(-963);
test_math_cbrt(2.9917405698450457e+307);
test_math_cbrt(-465);
test_math_cbrt(1.6931539899825632e+308);
test_math_cbrt(1.0960123606485617e+308);
test_math_cbrt(-765);
test_math_cbrt("56ZTPP");
test_math_cbrt(5.07697321482407e+306);
test_math_cbrt(1.4053306417183458e+308);
test_math_cbrt("REZR0");
test_math_cbrt(1.754697836000933e+307);
test_math_cbrt("SEYEI0ZC");
test_math_cbrt("06G5");
test_math_cbrt(1.1646900430618499e+307);
test_math_cbrt(1.020595775326278e+308);
test_math_cbrt("046Z2XS");
test_math_cbrt(-637);
test_math_cbrt(9.550226432994795e+307);
test_math_cbrt(-893);
test_math_cbrt(-295);
test_math_cbrt(5.948051527989141e+307);
test_math_cbrt(-59);
test_math_cbrt(1.3336991197313384e+308);
test_math_cbrt("DGPCOR6NJQ");
test_math_cbrt(8.4783191478126e+307);
test_math_cbrt("NOFHRU");
test_math_cbrt(1.0409161991047427e+308);
test_math_cbrt(3.267182415638039e+307);
test_math_cbrt(1.0415419902347995e+308);
test_math_cbrt(1.738978137548026e+308);
test_math_cbrt(506);
test_math_cbrt("X6LRV5");
test_math_cbrt(4.521415963242505e+307);
test_math_cbrt(1.7927821431938254e+308);
test_math_cbrt("L5P");
test_math_cbrt("4C745AJY");
test_math_cbrt(9.033657781200076e+307);
test_math_cbrt(1.1337565986634487e+308);
test_math_cbrt("Y2I1");
test_math_cbrt(-337);
test_math_cbrt(-763);
test_math_cbrt(7.262742930662956e+307);
test_math_cbrt(-619);
test_math_cbrt(4.706913885397526e+307);
test_math_cbrt(-129);
test_math_cbrt("ZGM");
test_math_cbrt(-233);
test_math_cbrt(8.302548982165645e+307);
test_math_cbrt(2.0179809685782547e+305);
test_math_cbrt("XPU9");
test_math_cbrt("VA4CHUO24R");
test_math_cbrt("BGO7X9");
test_math_cbrt(-577);
test_math_cbrt(3.7443361866255657e+307);
test_math_cbrt("NN9EH");
test_math_cbrt(-653);
test_math_cbrt(4.2154277104471477e+307);
test_math_cbrt("928DCY");
test_math_cbrt(4.1867766911891973e+307);
test_math_cbrt(1.755822184397513e+308);
test_math_cbrt("FKK7K");
test_math_cbrt(-755);
test_math_cbrt(1.1608491443494268e+308);
test_math_cbrt(5.0025627061075e+307);
test_math_cbrt(-783);
test_math_cbrt("1BL");
test_math_cbrt(1.0086386795088715e+308);
test_math_cbrt("QPJYQ");
test_math_cbrt(2.4473600084868116e+307);
test_math_cbrt("V7XRH4E");
test_math_cbrt("FSH8UQ5");
test_math_cbrt(1.1882987342571322e+308);
test_math_cbrt("UKN");
test_math_cbrt(-501);
test_math_cbrt(-735);
test_math_cbrt("AIR2");
test_math_cbrt("LGZPL");
test_math_cbrt(1.6823620787827031e+308);
test_math_cbrt(1.6699616600588868e+308);
test_math_cbrt(2.851061282522878e+307);
test_math_cbrt(1.4361745384419279e+308);
test_math_cbrt("VV9");
test_math_cbrt(2.3173461379255733e+307);
test_math_cbrt(1.2923588603421886e+308);
test_math_cbrt(-787);
test_math_cbrt("WH7");
test_math_cbrt("5I2");
test_math_cbrt(1.4849514149207193e+308);
test_math_cbrt(5.100441782783545e+307);
test_math_cbrt(1.6739957989205246e+308);
test_math_cbrt("2IAAH");