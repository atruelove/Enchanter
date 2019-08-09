/*
* This file is automatically generated by Swami
*
* 2019-08-08 15:38:37.356697
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
test_math_sign(-871);
test_math_sign(true);
test_math_sign(7.908044267260713e+307);
test_math_sign(-961);
test_math_sign(1.5289054049960996e+308);
test_math_sign(-413);
test_math_sign("L4OG3QJI6");
test_math_sign(-553);
test_math_sign(7.680076227179718e+307);
test_math_sign(/[^.]+/);
test_math_sign(-135);
test_math_sign(8.686840048707483e+307);
test_math_sign("XEPIP9");
test_math_sign(false);
test_math_sign(1.124569328862815e+308);
test_math_sign(undefined);
test_math_sign(4.1553593863709683e+307);
test_math_sign(1.1490468428610881e+308);
test_math_sign("SN6T9");
test_math_sign("XLUHN");
test_math_sign(null);
test_math_sign(+0);
test_math_sign("L3QNC");
test_math_sign("8LEG0OQR");
test_math_sign("CD4BM");
test_math_sign(1.1764256233810715e+307);
test_math_sign(1.4621595978720911e+308);
test_math_sign(/(\w+)\s(\w+)/);
test_math_sign(-437);
test_math_sign(-609);
test_math_sign(7.877952017418702e+307);
test_math_sign(-379);
test_math_sign(/yes.*day/);
test_math_sign("HEZ0");
test_math_sign(-235);
test_math_sign(/[\u0400-\u04FF]+/g);
test_math_sign(4.901176999381559e+307);
test_math_sign("PQBCS");
test_math_sign("30MTTJRU");
test_math_sign(NaN);
test_math_sign(-5);
test_math_sign(4.0337886769943084e+307);
test_math_sign(/\r\n|\r|\n/);
test_math_sign(-13);
test_math_sign(-729);
test_math_sign("HXN");
test_math_sign(1.0374148915032553e+308);
test_math_sign(-951);
test_math_sign("R1WIBM1FF");
test_math_sign(-317);
test_math_sign(7.754955146597939e+307);
test_math_sign(1.6549787523203084e+308);
test_math_sign(-0);
test_math_sign(-191);
test_math_sign(1.4357856563639836e+308);
test_math_sign(5.196398340980469e+307);
test_math_sign(8.734860019900505e+307);
test_math_sign(-239);
test_math_sign(-969);
test_math_sign(9.423676591180491e+307);
test_math_sign(4.579690541747879e+307);
test_math_sign(/foo/g);
test_math_sign(6.039260502173261e+307);
test_math_sign(Infinity);
test_math_sign("2DRUQ");
test_math_sign(4.983632949706393e+307);
test_math_sign(-311);
test_math_sign("SIPCSWXKP");
test_math_sign(5.305335337848249e+307);
test_math_sign("IGT6");
test_math_sign(1.2320272370641509e+308);
test_math_sign(-395);
test_math_sign("NPXL6NV");
test_math_sign(1.7109506599463073e+308);
test_math_sign(1.657469965298482e+308);
test_math_sign("6TV7SW");
test_math_sign(9.988481711157635e+307);
test_math_sign(6.032521541718444e+307);
test_math_sign("EFEDQWXR3");
test_math_sign(/ab+c/);
test_math_sign(8.171026162170021e+307);
test_math_sign(1.2894238760628628e+308);
test_math_sign(1.554905843907842e+308);
test_math_sign(-767);
test_math_sign(-125);
test_math_sign(1.5421648949566281e+308);
test_math_sign(6.219745249773332e+307);
test_math_sign(-769);
test_math_sign("XR8Z");
test_math_sign("CCFO");
test_math_sign(7.928849883134039e+307);
test_math_sign(-461);
test_math_sign("GX6I4P7X");
test_math_sign(2.540942838552831e+307);
test_math_sign(1.6527486573516063e+308);
test_math_sign("1SZ");
test_math_sign("AUJ4");
test_math_sign(-585);
test_math_sign("NRS9V64H0");
test_math_sign(/yes[^]*day/);
test_math_sign("IG8L");
test_math_sign("5QEDOFG");
test_math_sign("PF5HB");
test_math_sign(1.0755143600148076e+308);
test_math_sign(-583);
test_math_sign("HHKJB");
test_math_sign(-759);
test_math_sign("5IGGBBPG");
test_math_sign(-465);
test_math_sign(1.0875535458921587e+308);
test_math_sign(-955);
test_math_sign(-463);
test_math_sign(-887);
test_math_sign(-15);
test_math_sign(-341);
test_math_sign("8RSEN0");
test_math_sign(2.814835398554462e+307);
test_math_sign("PKD88R7R");
test_math_sign(1.7500279095257922e+308);
test_math_sign("5LDM90");
test_math_sign(-649);
test_math_sign("QIDN");
test_math_sign("SWXX");
test_math_sign(-509);
test_math_sign(1.6032253814901063e+308);
test_math_sign("AQEIDOB");
test_math_sign(1.4224017985856184e+308);
test_math_sign(1.3888396644548933e+307);
test_math_sign(-569);
test_math_sign(-313);
test_math_sign("3W2UNAZ7G");
test_math_sign(6.134355931973166e+307);
test_math_sign(1.2424348571059906e+308);
test_math_sign(1.6943297464239623e+308);
test_math_sign("9KFCMGR");
test_math_sign("UZHI");
test_math_sign(7.689081252670751e+307);
test_math_sign(-449);
test_math_sign("NG5WIPL70T");
test_math_sign("S3NWS8ZA5");
test_math_sign("K3O0Q");
test_math_sign(6.583510663909288e+307);
test_math_sign(5.1351365447113e+307);
test_math_sign(-949);
test_math_sign(3.1777658725222693e+307);
test_math_sign("OD5AKLOBZ");
test_math_sign("9SGTTT");
test_math_sign("UKXQ55");
test_math_sign("V56APWI");
test_math_sign("RQD");
test_math_sign("DKFCD1JGI");
test_math_sign(1.5443586871816989e+308);
test_math_sign(8.718824097563263e+306);
test_math_sign(1.7011043795994021e+308);
test_math_sign("HHL5TJ4S3M");
test_math_sign(-615);
test_math_sign(-715);
test_math_sign("B69LVR");
test_math_sign(5.294417527532625e+307);
test_math_sign(-517);
test_math_sign(1.2187571126146406e+308);
test_math_sign(-831);
test_math_sign(-231);
test_math_sign(6.488596541617181e+306);
test_math_sign(-605);
test_math_sign(1.777687774014331e+308);
test_math_sign(-75);
test_math_sign(6.737482079669806e+306);
test_math_sign("RW09O");
test_math_sign(1.6865542566871027e+308);
test_math_sign(-479);
test_math_sign("3X9O8FXT");
test_math_sign(1.2663749775503523e+308);
test_math_sign(1.4048543316504777e+306);
test_math_sign(-47);
test_math_sign(1.4534449244470732e+308);
test_math_sign(8.587361002639941e+307);
test_math_sign(9.812158445948925e+307);
test_math_sign(4.225067277713639e+306);
test_math_sign(1.6496139103063167e+307);
test_math_sign(5.449492241370044e+307);
test_math_sign(6.150408393724653e+306);
test_math_sign(-109);
test_math_sign(-129);
test_math_sign(2.0576015613656414e+306);
test_math_sign("V2SC2");
test_math_sign(1.2087117727042435e+308);
test_math_sign(1.711485218895357e+308);
test_math_sign(8.779097834081678e+307);
test_math_sign(-979);
test_math_sign(-945);
test_math_sign(-405);
test_math_sign(1.5592845379666668e+307);
test_math_sign("NYM");
test_math_sign(-477);
test_math_sign("I97AQUET");
test_math_sign("L5R");
test_math_sign("IAITLQKU3");
test_math_sign(-495);
test_math_sign("WY59CL47");
test_math_sign(6.271069613052185e+307);
test_math_sign("JKB82GV2YI");
test_math_sign(1.741730032868565e+308);
test_math_sign(1.7820804790290194e+308);
test_math_sign(-41);
test_math_sign(8.265700731247227e+307);
test_math_sign("T30");
test_math_sign(-85);
test_math_sign("S5XB");
test_math_sign(1.3321020622761793e+308);
test_math_sign(1.6427970350809094e+308);
test_math_sign("WUQY6J");
test_math_sign("PO4");
test_math_sign(1.7962522094234212e+308);
test_math_sign("2NACG79M8B");
test_math_sign("ZAM812I39");
test_math_sign(-95);
test_math_sign("58RD1");
test_math_sign(1.4981344436804646e+307);
test_math_sign("N2QMLI");
test_math_sign("HE32P");
test_math_sign(1.00678924807404e+308);
test_math_sign(-485);
test_math_sign(1.259203542729574e+308);
test_math_sign(8.636919715215395e+307);
test_math_sign("ZKTJW");
test_math_sign("UGHOCQ");
test_math_sign("3XGG");
test_math_sign(-789);
test_math_sign(1.2126820079315165e+308);
test_math_sign(-31);
test_math_sign(794);
test_math_sign(-825);
test_math_sign(-189);
test_math_sign(-309);
test_math_sign("L5TIAVKCHY");
test_math_sign(5.894596886301384e+307);
test_math_sign(3.043826381584573e+305);
test_math_sign(-889);
test_math_sign("LRJ578");
test_math_sign(-875);
test_math_sign(-809);
test_math_sign(-283);
test_math_sign(6.219858347105658e+307);
test_math_sign("EXL");
test_math_sign(-21);
test_math_sign("8Q0");
test_math_sign("IPC0");
test_math_sign("MX4DGW");
test_math_sign(-259);
test_math_sign("YNP");
test_math_sign(-571);
test_math_sign(-177);
test_math_sign("1B2223EMK8");
test_math_sign(7.491424077111322e+307);
test_math_sign("8O0ENK");
test_math_sign(-757);
test_math_sign(-333);
test_math_sign(1.7778521033792625e+308);
test_math_sign("4ZLILKKF");
test_math_sign(1.1543685051360638e+308);
test_math_sign(-713);
test_math_sign("9YH");
test_math_sign(6.863754423014112e+307);
test_math_sign("XR85NSKSK9");
test_math_sign("58KU");
test_math_sign("FGM0QNJ");
test_math_sign(-659);
test_math_sign(4.643584234029746e+307);
test_math_sign(1.5211695616057228e+308);
test_math_sign(2.2979159263531135e+307);
test_math_sign(1.5721297327171658e+308);
test_math_sign(1.2170039219753754e+308);
test_math_sign("NAQGCULA");
test_math_sign(1.349820769438093e+308);
test_math_sign("FEQ");
test_math_sign("47K06V1EG");
test_math_sign("3JDF6CS");
test_math_sign("JR55");
test_math_sign(-801);
test_math_sign("POF0F");
test_math_sign(-119);
test_math_sign("IN35X");
test_math_sign("268G");
test_math_sign("6W0JDFN1V");
test_math_sign(-141);
test_math_sign(-869);
test_math_sign("USVTR");
test_math_sign(1.078405263665051e+308);
test_math_sign("3L7FCWWQUI");
test_math_sign("Q6YG");
test_math_sign(3.0701400961956825e+307);
test_math_sign("VOWM");
test_math_sign(9.202838733083493e+307);
test_math_sign(-381);
test_math_sign(1.309826351715994e+308);
test_math_sign(-229);
test_math_sign(-321);
test_math_sign(-219);
test_math_sign("H35CBLWKP");
test_math_sign("IDBO9NOI");
test_math_sign(4.2281213337321407e+307);
test_math_sign(-537);
test_math_sign(3.9485677012782705e+307);
test_math_sign("6Q61O3Q");
test_math_sign("17MD9D2");
test_math_sign(-641);
test_math_sign(7.930030303789877e+307);
test_math_sign("3842Z8L");
test_math_sign(1.0285198083485747e+308);
test_math_sign("ODQJ8JH");
test_math_sign("4UO8PL");
test_math_sign("S2RELD2LX");
test_math_sign("K59FJ");
test_math_sign(1.387305545323376e+308);
test_math_sign(4.419077719531267e+307);
test_math_sign(-791);
test_math_sign(-877);
test_math_sign("RSCE78O");
test_math_sign("7QBZG0");
test_math_sign(-619);
test_math_sign(3.4364670831102254e+306);
test_math_sign(-735);
test_math_sign(9.80140692557052e+307);
test_math_sign(-349);
test_math_sign(-987);
test_math_sign(-201);
test_math_sign(1.07530223904079e+308);
test_math_sign("CJ0BHL9Y3");
test_math_sign(-771);
test_math_sign(1.5554782672284485e+308);
test_math_sign(1.5203221762215416e+308);
test_math_sign("O0VZ7M");
test_math_sign(-455);
test_math_sign(1.7517412540598094e+308);
test_math_sign("23ACJ");
test_math_sign(1.341210590412222e+308);
test_math_sign("4SW24NP");
test_math_sign(-35);
test_math_sign(1.0013212794447868e+308);
test_math_sign(-407);
test_math_sign(1.6109837033642075e+308);
test_math_sign("D5GILV74");
test_math_sign(1.3860654121957081e+308);
test_math_sign("3BP");
test_math_sign(-267);
test_math_sign("4TO06K");
test_math_sign(1.9758809184633283e+307);
test_math_sign("OZIK");
test_math_sign(1.707426253722585e+308);
test_math_sign(1.2374235962959729e+308);
test_math_sign(-855);
test_math_sign(1.2400329921820058e+308);
test_math_sign(-601);
test_math_sign("190GV73XO");
test_math_sign("FLHWRFH");
test_math_sign("03YJVE3KQ2");
test_math_sign(6.368621771516442e+307);
test_math_sign("WUY8D");
test_math_sign(-879);
test_math_sign(4.3232276813572886e+307);
test_math_sign("6BIV");
test_math_sign("KEX");
test_math_sign(1.7574889316805101e+308);
test_math_sign(1.8871443588642037e+307);
test_math_sign(8.800081225788616e+307);
test_math_sign("5DZ1W399E");
test_math_sign(-367);
test_math_sign(3.179438244102787e+307);
test_math_sign("KHVAOONKJW");
test_math_sign("TMPSADAL");
test_math_sign(6.788959151796053e+307);
test_math_sign(7.133167102823091e+307);
test_math_sign(1.1176654755091107e+308);
test_math_sign("GDBI");
test_math_sign("QS2OED4");
test_math_sign(1.495033482658824e+308);
test_math_sign(-393);
test_math_sign("E5OYCHVRF6");
test_math_sign(-205);
test_math_sign(-921);
test_math_sign("YR4LOAXL2Z");
test_math_sign(-813);
test_math_sign(1.705868020960877e+308);
test_math_sign(1.07514287756688e+308);
test_math_sign("RRNZ24L");
test_math_sign("7VQB");
test_math_sign(7.912295510807425e+307);
test_math_sign(9.304923858531496e+307);
test_math_sign(1.0235208082314311e+308);
test_math_sign(-999);
test_math_sign(-555);
test_math_sign(-161);
test_math_sign(1.1203672677832559e+308);
test_math_sign(8.960390041044515e+306);
test_math_sign("H6QV73E");
test_math_sign(3.513019007253174e+307);
test_math_sign(1.3890791383954129e+308);
test_math_sign(1.3696005008656587e+308);
test_math_sign(7.795710833272347e+307);
test_math_sign("O25Q6FN");
test_math_sign("E5GQG");
test_math_sign("O4BT1NZ");
test_math_sign(1.5606923935926508e+308);
test_math_sign(1.3738930624684e+308);
test_math_sign(-227);
test_math_sign("05HUDGCV");
test_math_sign(-173);
test_math_sign(6.53532185766511e+306);
test_math_sign("K4AKFHL");
test_math_sign(6.172199033488927e+307);
test_math_sign(1.1597195108069434e+308);
test_math_sign(-679);
test_math_sign("0J6AK");
test_math_sign(-731);
test_math_sign(1.2436706663163149e+308);
test_math_sign(1.268754854872982e+308);
test_math_sign("MCL3PNJ4");
test_math_sign("O8T0ZGCA");
test_math_sign("LF7C7JQX");
test_math_sign(1.4029509721798554e+308);
test_math_sign("0KMP1L6WB");
test_math_sign("DYFH9JR");
test_math_sign(1.4618427209298905e+308);
test_math_sign("U2UEIL5O0");
test_math_sign("PBQZ0ID");
test_math_sign("TZAYSDGQO");
test_math_sign(1.4153826291006433e+308);
test_math_sign("1QXWZFMPLA");
test_math_sign(1.2330193250334107e+308);
test_math_sign("NYH2X7IQNC");
test_math_sign(-459);
test_math_sign(-651);
test_math_sign(-631);
test_math_sign("JO1BFL");
test_math_sign(1.2192000573879436e+308);
test_math_sign(-953);
test_math_sign("8TG");
test_math_sign(1.6352632093356722e+308);
test_math_sign("13M2A8Z8P9");
test_math_sign(-563);
test_math_sign(5.811626582582381e+307);
test_math_sign("S8JJOC7N6");
test_math_sign(7.983923816209978e+307);
test_math_sign(1.1955980216151464e+308);
test_math_sign("YM2HNO");
test_math_sign(1.5559026059523975e+307);
test_math_sign(2.2169475279730508e+307);
test_math_sign(3.1378135641915753e+307);
test_math_sign("U8EHV39BZ");
test_math_sign(1.8056435442359213e+307);
test_math_sign(1.7771273207256857e+308);
test_math_sign(1.074913626408738e+308);
test_math_sign(7.320787395674283e+307);
test_math_sign(-515);
test_math_sign(6.927170032908673e+307);
test_math_sign("SQQJ6");
test_math_sign(7.278088300885457e+307);
test_math_sign(6.428488958335582e+307);
test_math_sign("B15");
test_math_sign("G7ILU8MZKD");
test_math_sign("7ZS");
test_math_sign(2.3951901603341745e+307);
test_math_sign(2.52057895155071e+307);
test_math_sign("TWFL2XW0G");
test_math_sign("JNIS");
test_math_sign(1.3725447204862983e+308);
test_math_sign("4570");
test_math_sign(1.1239878265931097e+308);
test_math_sign(-143);
test_math_sign(1.2275817324082294e+308);
test_math_sign("7GJ");
test_math_sign("M369B6AA7");
test_math_sign("ADXOYT");
test_math_sign(1.1812882821161552e+308);
test_math_sign("V5HNPTM4");
test_math_sign(1.7786666268371805e+308);
test_math_sign(7.758217775726884e+307);
test_math_sign(-383);
test_math_sign(4.784567286063536e+307);
test_math_sign(-541);
test_math_sign(6.587869848672204e+307);
test_math_sign("TEYN6EB");
test_math_sign(6.342113589155871e+307);
test_math_sign(1.4486744713113562e+308);
test_math_sign(6.711379803676078e+307);
test_math_sign("YR57EL");
test_math_sign("MXWF0");
test_math_sign("2IE1");
test_math_sign(1.21413919396629e+308);
test_math_sign("PH3");
test_math_sign(-139);
test_math_sign("S6KBIK");
test_math_sign(-673);
test_math_sign("E9FZEF");
test_math_sign("JJ0S9WJ8");
test_math_sign(1.1834165752172602e+308);
test_math_sign(1.5826390134631269e+308);
test_math_sign(1.1807335391424103e+308);
test_math_sign(9.169293824498697e+307);
test_math_sign(1.1280910393726932e+308);
test_math_sign("6JW29RF");
test_math_sign(1.2815872190648852e+308);
test_math_sign("W2F3KA6UHZ");
test_math_sign("VFLYVH55");
test_math_sign(-315);
test_math_sign(1.4770599915843141e+308);
test_math_sign("Y5Z3Q4");
test_math_sign(-909);
test_math_sign(2.991595255127732e+307);
test_math_sign(-891);
test_math_sign("LJ96Y5");
test_math_sign(6.634404752378768e+307);
test_math_sign(-3);
test_math_sign(1.5789176272394443e+308);
test_math_sign(9.58374434437385e+307);
test_math_sign(-481);
test_math_sign(-59);
test_math_sign("Y5I");
test_math_sign(-899);
test_math_sign(1.5052343513407268e+308);
test_math_sign(-197);
test_math_sign(1.1735670567921257e+308);
test_math_sign(7.588537556188683e+307);
test_math_sign(9.967986474713158e+307);
test_math_sign(1.1362986574078257e+308);
test_math_sign("VOVCD");
test_math_sign("6UI8S7XR");
test_math_sign(1.4503406350437719e+308);
test_math_sign(-519);
test_math_sign(-353);
test_math_sign("8HG0DRF");
test_math_sign(1.088666192275555e+308);
test_math_sign(-363);
test_math_sign(8.426305466296733e+307);
test_math_sign("FS7C9DF");
test_math_sign("ZKZL0JO2");
test_math_sign("J56");
test_math_sign(2.6868852114087133e+307);
test_math_sign("NSI2P");
test_math_sign("MXS");
test_math_sign(4.51878133987363e+307);
test_math_sign(-253);
test_math_sign(-223);
test_math_sign(-155);
test_math_sign(-285);
test_math_sign("2IVRIJY0");
test_math_sign(1.4615368676045431e+308);
test_math_sign("SCC1GYV");
test_math_sign(7.155557542301413e+307);
test_math_sign(-839);
test_math_sign(-843);
test_math_sign(1.096924236572584e+308);
test_math_sign(-275);
test_math_sign(-417);
test_math_sign(-241);
test_math_sign(1.7382468158439623e+308);
test_math_sign(-783);
test_math_sign("JA97IU");
test_math_sign(1.5468194122727002e+308);
test_math_sign("Y6LVSSFOCH");
test_math_sign(1.3646012425880245e+307);
test_math_sign(-603);
test_math_sign(1.0161680686376908e+308);
test_math_sign(-303);
test_math_sign("GLXRFJ");
test_math_sign(-567);
test_math_sign(-347);
test_math_sign(-441);
test_math_sign(7.643441646096945e+307);
test_math_sign(-123);
test_math_sign(9.302253622597218e+307);
test_math_sign("HH8NXWR0RY");
test_math_sign(1.141510149848428e+308);
test_math_sign(-365);
test_math_sign(4.31165177332662e+307);
test_math_sign(7.769535261185997e+307);
test_math_sign("C4CG4QDM");
test_math_sign(-717);
test_math_sign("OSJD");
test_math_sign(9.226925440140371e+306);
test_math_sign("8N8");
test_math_sign("6JR8HUF");
test_math_sign(1.1868437334700156e+308);
test_math_sign(1.7876896453935077e+308);
test_math_sign(-233);
test_math_sign(-781);
test_math_sign("KLG");
test_math_sign(7.523578348344798e+307);
test_math_sign(1.5091986674955565e+308);
test_math_sign("AI1SYG80WF");
test_math_sign(8.204650643800116e+307);
test_math_sign(-355);
test_math_sign(-369);
test_math_sign(-725);
test_math_sign("ZKQDTN0GJ");
test_math_sign("031O9IGND");
test_math_sign("XG5CN");
test_math_sign(-199);
test_math_sign("F545T7Q0LA");
test_math_sign("88N6W0DW");
test_math_sign(-643);
test_math_sign(-905);
test_math_sign(3.293702225652179e+307);
test_math_sign(1.0410604290948883e+307);
test_math_sign(-851);
test_math_sign(-621);
test_math_sign(-53);
test_math_sign(5.825982329903585e+307);
test_math_sign(1.4443560901397907e+308);
test_math_sign(1.0456716394982471e+307);
test_math_sign(1.9647245392829984e+307);
test_math_sign("UUFF8D");
test_math_sign(-691);
test_math_sign(1.0520973121709253e+308);
test_math_sign(-559);
test_math_sign("AFYY63HV");
test_math_sign("P5AGHD5YJ");
test_math_sign(1.5659479040217722e+307);
test_math_sign(3.705528617551335e+307);
test_math_sign(-543);
test_math_sign("OPJZ0");
test_math_sign(-533);
test_math_sign(5.297655867707539e+307);
test_math_sign(1.4092449587091843e+308);
test_math_sign("MBU");
test_math_sign("8LAO");
test_math_sign(2.8118105083423916e+307);
test_math_sign(1.0935441879289037e+308);
test_math_sign("Q4KN02A");
test_math_sign(1.0248805498064536e+308);
test_math_sign("FIWW");
test_math_sign("UAVI9C79");
test_math_sign(5.249717690383034e+307);
test_math_sign(-245);
test_math_sign(1.4948806557389053e+308);
test_math_sign("5GA12L");
test_math_sign("96N35");
test_math_sign(1.6172403964177377e+308);
test_math_sign(-573);
test_math_sign("57TA");
test_math_sign(1.1398310119182063e+307);
test_math_sign(6.670986258770648e+307);
test_math_sign("BS1ESJS5");
test_math_sign("NF38272025");
test_math_sign("MZIV1Q7");
test_math_sign("X6ODODEBGE");
test_math_sign("PAHPR");
test_math_sign("YXDTMAN");
test_math_sign(-803);
test_math_sign("ZH3WAFXNG5");
test_math_sign("CQFV");
test_math_sign("ZY9XBW3KX");
test_math_sign(-319);
test_math_sign("35INCSQ");
test_math_sign(-923);
test_math_sign("NOXFL3JHZG");
test_math_sign("FBZJ4F2WWQ");
test_math_sign(-797);
test_math_sign("7OLC5Q9");
test_math_sign(-327);
test_math_sign(-149);
test_math_sign("M9PRLWU");
test_math_sign(1.3364182525393526e+308);
test_math_sign("5XRWYFO");
test_math_sign(1.6564792116409663e+308);
test_math_sign(3.9000647515588524e+307);
test_math_sign("ST2K");
test_math_sign("7ISY1F");
test_math_sign(-305);
test_math_sign(5.565912914252084e+307);
test_math_sign(1.1619254656130511e+308);
test_math_sign("HRTUWI");
test_math_sign(-661);
test_math_sign("LQS85Q01");
test_math_sign(-743);
test_math_sign("JER");
test_math_sign(7.158747660687241e+307);
test_math_sign(4.9887730532789505e+307);
test_math_sign(-853);
test_math_sign(-645);
test_math_sign(-795);
test_math_sign(9.999397555551788e+306);
test_math_sign(-581);
test_math_sign(-453);
test_math_sign(8.864694120498027e+307);
test_math_sign("2A71Q");
test_math_sign("2OYWNH");
test_math_sign(1.112186821462814e+308);
test_math_sign(-709);
test_math_sign("KKIT");
test_math_sign(1.45249037583746e+308);
test_math_sign(-251);
test_math_sign("07FFJK");
test_math_sign(1.3233601186329535e+308);
test_math_sign(7.510587279470617e+307);
test_math_sign(1.598877739888608e+308);
test_math_sign(2.837107073494102e+307);
test_math_sign(-445);
test_math_sign("URE1VNV1");
test_math_sign(5.328955343621993e+307);
test_math_sign("C5AI2WW8V");
test_math_sign("RNQK5JB");
test_math_sign(4.3346889827909053e+307);
test_math_sign("IC3EM0G1");
test_math_sign(-703);
test_math_sign(9.257687143579998e+307);
test_math_sign(1.0212181628835432e+308);
test_math_sign(-25);
test_math_sign(-607);
test_math_sign(1.4031383601843094e+308);
test_math_sign(-185);
test_math_sign("08PWSMC44");
test_math_sign("2UG");
test_math_sign("00SDSRLTYZ");
test_math_sign("T9W");
test_math_sign(-263);
test_math_sign("O2Q6EJB");
test_math_sign(1.6501468562025382e+308);
test_math_sign("RYGXY");
test_math_sign(8.302199498927809e+307);
test_math_sign(3.2202986220938484e+307);
test_math_sign(-593);
test_math_sign("JEWTN0EC");
test_math_sign(1.0103890619868135e+308);
test_math_sign(1.43797690682846e+308);
test_math_sign("IHADXLSIP");
test_math_sign("NLOCMTX");
test_math_sign(-401);
test_math_sign("E2ALSG8");
test_math_sign("Q3HIOQU");
test_math_sign(1.7142025368485412e+308);
test_math_sign(1.0216492722557804e+308);
test_math_sign(8.034824731530263e+307);
test_math_sign("WIU0DC");
test_math_sign("K9MG");
test_math_sign(-935);
test_math_sign("6YCN1E0");
test_math_sign("4VSXHL");
test_math_sign("KKNN2");
test_math_sign(-997);
test_math_sign("OB08MUHG");
test_math_sign(1.2367508561904255e+308);
test_math_sign(5.829039178597846e+307);
test_math_sign("1KADO0G");
test_math_sign(1.3957698781916937e+308);
test_math_sign("FFLLNG");
test_math_sign(-113);
test_math_sign(1.3450086517468173e+308);
test_math_sign(1.7766912376752038e+308);
test_math_sign("W5BLN");
test_math_sign(4.948649752166645e+307);
test_math_sign("U9ZG");
test_math_sign(-637);
test_math_sign(3.150436667652236e+307);
test_math_sign(1.2706454848398449e+308);
test_math_sign("3QSVJD");
test_math_sign(-547);
test_math_sign("V1K1NRGOT");
test_math_sign(-883);
test_math_sign(-63);
test_math_sign(4.831188153769483e+307);
test_math_sign(7.959035954537122e+307);
test_math_sign("H0S2NJ43I");
test_math_sign(-391);
test_math_sign(7.79054491762575e+307);
test_math_sign(1.6154586018299335e+308);
test_math_sign(5.356224187834117e+307);
test_math_sign("213");
test_math_sign(4.532434336435646e+307);
test_math_sign("SHLF1GXK");
test_math_sign("X07Y0G");
test_math_sign(7.089810661441235e+307);
test_math_sign(2.473546681085298e+306);
test_math_sign(1.2455897154072936e+308);
test_math_sign("2OA08KN9KY");
test_math_sign("J7EVE59");
test_math_sign("XY641L");
test_math_sign(1.5768052163352742e+308);
test_math_sign("G6QF");
test_math_sign("6S5PM");
test_math_sign("N35IWIFO");
test_math_sign(4.743063376649447e+307);
test_math_sign(-983);
test_math_sign(1.306484180183809e+308);
test_math_sign(-501);
test_math_sign(-91);
test_math_sign("26677");
test_math_sign("4BASQ");
test_math_sign(5.460114598224926e+307);
test_math_sign("0H0A");
test_math_sign("1HXAD");
test_math_sign(-409);
test_math_sign("5KKMLU9");
test_math_sign(1.55385317077368e+308);
test_math_sign(9.26445303261885e+307);
test_math_sign(-183);
test_math_sign(1.3477455397669506e+308);
test_math_sign(-179);
test_math_sign(-639);
test_math_sign(1.4373461475167654e+308);
test_math_sign("KX6JQ8");
test_math_sign(-469);
test_math_sign(1.5080975857760456e+308);
test_math_sign("F1WI4");
test_math_sign(3.722612033947771e+307);
test_math_sign("W5Z89MCO8");
test_math_sign(1.4836298049898685e+308);
test_math_sign(1.3616666307125873e+308);
test_math_sign(-237);
test_math_sign(1.745593024277692e+308);
test_math_sign("WV946CE");
test_math_sign("7BOP2E2WGJ");
test_math_sign("HDAC72");
test_math_sign(-693);
test_math_sign(-37);
test_math_sign("7977U0");
test_math_sign(2.829502944874285e+307);
test_math_sign(4.938413826599511e+307);
test_math_sign("W0K");
test_math_sign("ZVN2MVIO");
test_math_sign(1.5586242319223736e+308);
test_math_sign("56ETVN1JZP");
test_math_sign(4.940727154658826e+307);
test_math_sign("TKD5");
test_math_sign(-429);
test_math_sign(1.0391076726656617e+306);
test_math_sign("GLBM");
test_math_sign(1.6152795548491673e+308);
test_math_sign("CP0B2PHLR");
test_math_sign("B74K13IG");
test_math_sign(1.2058647410141927e+308);
test_math_sign(-375);
test_math_sign("58RW2MFVG5");
test_math_sign("LEOB");
test_math_sign("7A0HWKQOSF");
test_math_sign(1.2481383026771018e+308);
test_math_sign(1.320419739248144e+308);
test_math_sign(1.3098526402794995e+307);
test_math_sign(892);
test_math_sign(-775);
test_math_sign("OH076TF");
test_math_sign(1.2177866976364398e+308);
test_math_sign(1.0200610849018828e+308);
test_math_sign("P3L");
test_math_sign("5D86L92");
test_math_sign("P8SF5");
test_math_sign(-747);
test_math_sign("ASX");
test_math_sign(1.7176941170965812e+307);
test_math_sign(-511);
test_math_sign("2XWZBJ");
test_math_sign(2.8988511159989774e+307);
test_math_sign("WIYU");
test_math_sign(1.4156389276846331e+308);
test_math_sign(3.4190624208829724e+307);
test_math_sign("HNQDBO");
test_math_sign(1.1882958757365484e+308);
test_math_sign(3.370882700545164e+307);
test_math_sign("RRAL5QMTE2");
test_math_sign(-711);
test_math_sign("7QF");
test_math_sign(-557);
test_math_sign("1JDW7S");
test_math_sign(1.1772446562017117e+307);
test_math_sign(1.1052621808305402e+308);
test_math_sign(1.6756709591596795e+308);
test_math_sign(2.634725573262006e+307);
test_math_sign("RPM7");
test_math_sign(-807);
test_math_sign(1.1778792766728348e+308);
test_math_sign("OYSMZWLK");
test_math_sign("J0ACZDR");
test_math_sign(-23);
test_math_sign("HHE33E0KF");
test_math_sign(1.1007910205565599e+308);
test_math_sign(-525);
test_math_sign(4.517609623873281e+307);
test_math_sign("EQTAV9B");
test_math_sign(1.16120736988787e+308);
test_math_sign("Z2P");
test_math_sign(-677);
test_math_sign("UHBOA");
test_math_sign("VUEBV3K2VC");
test_math_sign("6TIT");
test_math_sign(4.966559978577793e+307);
test_math_sign(-385);
test_math_sign("R4ZLSDG7TN");
test_math_sign("RP4C");
test_math_sign("CXGD3");
test_math_sign("MJ0N");
test_math_sign(1.224385555776341e+308);
test_math_sign(3.194523057258151e+306);
test_math_sign(1.7726890766693902e+308);
test_math_sign("XB9CQS");
test_math_sign(-289);
test_math_sign("S292MB8");
test_math_sign(1.3641798502579438e+308);
test_math_sign(-447);
test_math_sign(7.950227687629378e+307);
test_math_sign(5.469762481587149e+307);
test_math_sign(4.835531575151785e+307);
test_math_sign(1.097159018441337e+308);
test_math_sign("XJTAYM6");
test_math_sign(7.642666018607302e+307);
test_math_sign("031ZI");
test_math_sign("UBKSH");
test_math_sign("9RCQBHV");
test_math_sign(3.509611403176693e+307);
test_math_sign(1.792020780046209e+308);
test_math_sign(-19);
test_math_sign(8.158236326182321e+307);
test_math_sign(-287);
test_math_sign(-635);
test_math_sign("MI9Q6");
test_math_sign(-827);
test_math_sign(-577);
test_math_sign("JC485WN");
test_math_sign("P3EUQE");
test_math_sign(-137);
test_math_sign(1.6680975134511353e+308);
test_math_sign("29ZPDZODRU");
test_math_sign(1.7002648185867169e+308);
test_math_sign("1B5DU");
test_math_sign(-943);
test_math_sign(2.53337249252177e+307);
test_math_sign(-493);
test_math_sign(-133);
test_math_sign(-549);
test_math_sign(-739);
test_math_sign("7Y5YAUJKC");
test_math_sign(1.0256564620316398e+308);
test_math_sign(-337);
test_math_sign(5.400734221630268e+307);
test_math_sign(-529);
test_math_sign(8.267511097635422e+307);
test_math_sign(1.515229064293028e+308);
test_math_sign("O9SB");
test_math_sign("B60SKGR");
test_math_sign(2.0422360752031466e+307);
test_math_sign("WSJU");
test_math_sign("SOOA4ZXS");
test_math_sign(-27);
test_math_sign(1.1791818348409463e+308);
test_math_sign(1.1146748941222863e+308);
test_math_sign(1.3149579031513845e+308);
test_math_sign("BG5EDNRHNU");
test_math_sign("BQ3V");
test_math_sign(1.6606946068488634e+308);
test_math_sign("POUC1DBC");
test_math_sign(-163);
test_math_sign(1.0452196567079855e+308);
test_math_sign("YJZ7SYL");
test_math_sign("7OPVOS8WU");
test_math_sign(2.672773399220519e+307);
test_math_sign(-65);
test_math_sign(1.2996525593774703e+308);
test_math_sign(3.9514296287941e+307);
test_math_sign(-93);
test_math_sign(1.1893941399194053e+308);
test_math_sign("63YPA3SZQZ");
test_math_sign(3.196148924227963e+305);
test_math_sign(1.0531902902753796e+308);
test_math_sign(1.6620130490287867e+308);
test_math_sign(8.110891699234646e+307);
test_math_sign(1.719791876941069e+307);
test_math_sign(-963);
test_math_sign(6.842151712787441e+307);
test_math_sign("LI8LSG");
test_math_sign("ZAF7I6AESS");
test_math_sign(1.3473659464422975e+308);
test_math_sign(-687);
test_math_sign(-195);
test_math_sign(2.72618758932748e+307);
test_math_sign(8.118522550434777e+307);
test_math_sign(-925);
test_math_sign("XD14");
test_math_sign(2.5749999887498125e+307);
test_math_sign("B8PE6");
test_math_sign(-131);
test_math_sign(6.29932771963625e+307);
test_math_sign(-913);
test_math_sign("FXCH4314");
test_math_sign(1.1671405678582214e+308);
test_math_sign(8.9996488334314e+307);
test_math_sign("SUQRIXNSQO");
test_math_sign(-127);
test_math_sign(6.518362076485046e+307);
test_math_sign("1ZO1TFMBB8");
test_math_sign(-695);
test_math_sign(7.99027543119849e+307);
test_math_sign("SLMWECM3");
test_math_sign(1.2954768661974715e+308);
test_math_sign(7.919199144878996e+307);
test_math_sign(-597);
test_math_sign("4VMFWC7");
test_math_sign("NV6");
test_math_sign(2.11018360260277e+307);
test_math_sign(4.64067093531493e+307);
test_math_sign("P0C102");
