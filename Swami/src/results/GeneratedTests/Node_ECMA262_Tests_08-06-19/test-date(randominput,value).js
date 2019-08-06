/*
* This file is automatically generated by Swami
*
* 2019-08-06 12:32:59.428314
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
function test_date(randominput,value){
	var numberOfArgs = arguments.length;
	if ( numberOfArgs = 1 ) {
		console.log("Good Test - Assert");
	}
	else { 
		console.log("Bad Test/Failed Test");
		return;
	} 
	if ( typeof  NewTarget === 'undefined'  ) { 
		var now =Number that istime value (UTC) identyingcurrent time;
		var output = new Date(randominput).Date(value);
			assert.strictEqual(ToDateString ( now ), output);
			console.log("Good Test");
			return;
	}

		console.log("OK Test")
}



/*TESTS GENERATED AUTOMATICALLY*/
test_date(true, -177);
test_date(NaN, /(\w+)\s(\w+)/);
test_date(false, Infinity);
test_date(undefined, -367);
test_date(-753, 6.690472499079364e+307);
test_date("G8H3QB1DDF", "3N8YX");
test_date(/[\u0400-\u04FF]+/g, -0);
test_date(true, /foo/g);
test_date(-513, 1.7131167597590906e+308);
test_date(1.304324820928207e+308, -237);
test_date(false, /[\u0400-\u04FF]+/g);
test_date(false, -0);
test_date(-479, -603);
test_date(false, true);
test_date(false, 1.1852563103930764e+308);
test_date(/yes.*day/, /[\u0400-\u04FF]+/g);
test_date(undefined, "EXGLF39YL");
test_date(1.7653578356266663e+308, Infinity);
test_date(-361, undefined);
test_date(3.7029423031457923e+307, -83);
test_date(7.245677619819992e+307, NaN);
test_date(Infinity, -411);
test_date(NaN, "SMBN3");
test_date(/[^.]+/, /foo/g);
test_date(/foo/g, /yes.*day/);
test_date(/ab+c/, /\r\n|\r|\n/);
test_date(null, true);
test_date(Infinity, false);
test_date(/[^.]+/, -965);
test_date(NaN, NaN);
test_date(/\r\n|\r|\n/, -853);
test_date(/yes.*day/, /foo/g);
test_date("8J6", false);
test_date(true, undefined);
test_date(1.6907947733114725e+308, "VCJP2T3Q");
test_date(-761, 6.423342426398275e+307);
test_date(1.3140863217363223e+308, +0);
test_date(true, -341);
test_date("3ID1L22DUM", -673);
test_date(7.738273304140111e+307, "V62MMQOU");
test_date(1.1643313090207886e+308, -791);
test_date(1.0072149432707847e+308, false);
test_date(+0, /yes.*day/);
test_date(/(\w+)\s(\w+)/, -707);
test_date(8.734597486913403e+307, "8KG18718E");
test_date(-429, 1.658053178347745e+308);
test_date(/yes[^]*day/, false);
test_date(1.1550527252294656e+308, -0);
test_date(/yes.*day/, /(\w+)\s(\w+)/);
test_date(false, null);
test_date(true, -469);
test_date(+0, 1.6760721891631037e+308);
test_date("G1284KLZJ", /foo/g);
test_date(false, -417);
test_date(undefined, /(\w+)\s(\w+)/);
test_date(1.5529695682563774e+308, -0);
test_date(undefined, "CC188PL8J5");
test_date(/ab+c/, /[^.]+/);
test_date(-975, Infinity);
test_date(-0, "DW7J8");
test_date(false, -661);
test_date(true, /[\u0400-\u04FF]+/g);
test_date(true, NaN);
test_date(-723, -657);
test_date("KKPRGRB", false);
test_date(Infinity, true);
test_date(/yes.*day/, 1.2047310565197436e+308);
test_date(6.522024749557965e+307, true);
test_date(false, "J0X");
test_date("1WMXA", /yes.*day/);
test_date(/[^.]+/, -997);
test_date(/[^.]+/, /[\u0400-\u04FF]+/g);
test_date(-0, -791);
test_date(true, false);
test_date("HH9P4S3FB", /[^.]+/);
test_date(298, -137);
test_date(false, /\r\n|\r|\n/);
test_date(-111, 8.598405861560947e+307);
test_date(+0, -483);
test_date("IPGQH7", -0);
test_date(-223, "NZ4P");
test_date(1.0067459821280565e+308, +0);
test_date(4.2636231371938785e+307, null);
test_date(1.5736877889836477e+308, true);
test_date(1.3961638500236747e+308, undefined);
test_date(-791, +0);
test_date("DLPSQI", "6LLUPT80N");
test_date(/yes.*day/, true);
test_date(-747, /[\u0400-\u04FF]+/g);
test_date("0EWBX7", 430);
test_date(+0, /(\w+)\s(\w+)/);
test_date(2.8461044547865697e+307, /(\w+)\s(\w+)/);
test_date(Infinity, -381);
test_date("V065C", "BUEIBF");
test_date(/foo/g, /ab+c/);
test_date("W3R17", /foo/g);
test_date(-371, "RJM9Y");
test_date(/yes[^]*day/, "UBEDGI9");
test_date(-291, 1.4957053435663312e+308);
test_date(/yes.*day/, "CVDY0VPJG6");
test_date(/foo/g, Infinity);
test_date(+0, true);
test_date(Infinity, "TRKFXB");
test_date(+0, 4.331057976800914e+307);
test_date(-589, "BJKYF4KME");
test_date(/yes[^]*day/, -185);
test_date(null, -825);
test_date(/foo/g, -391);
test_date(/foo/g, /foo/g);
test_date(false, NaN);
test_date(NaN, "QSSD");
test_date("7RB4YKL2", -179);
test_date("B5MM4", -487);
test_date(/(\w+)\s(\w+)/, false);
test_date("0LOML3TP3W", 4.4281217522169357e+307);
test_date(null, /[^.]+/);
test_date(true, 9.535481352927645e+307);
test_date(-0, 200);
test_date("SKWFR8IT", "KBOI3BLB");
test_date(-477, "157C0AB5");
test_date(false, 6.928990399202036e+307);
test_date(-119, 1.4708925012964681e+308);
test_date(false, "DOWMCBZXQ");
test_date(+0, 4.805459425154615e+307);
test_date(-203, 3.9015128147954933e+307);
test_date(1.6749850194776337e+308, false);
test_date(924, true);
test_date(-455, +0);
test_date(/[\u0400-\u04FF]+/g, 5.026384596369705e+307);
test_date(1.36025881875561e+308, -423);
test_date("J626Y9", -793);
test_date("2YHXM1C", /(\w+)\s(\w+)/);
test_date(null, "IPK68");
test_date(/(\w+)\s(\w+)/, 1.4207321154917592e+308);
test_date("GZBYF", +0);
test_date(false, +0);
test_date(/[\u0400-\u04FF]+/g, true);
test_date(-0, undefined);
test_date(-985, NaN);
test_date(NaN, /\r\n|\r|\n/);
test_date(/[^.]+/, -0);
test_date(null, -351);
test_date(4.3276214289458937e+307, -249);
test_date(-245, /yes[^]*day/);
test_date(-681, /[^.]+/);
test_date(true, -405);
test_date(-27, NaN);
test_date(NaN, -613);
test_date(-987, /foo/g);
test_date("CZCA4AFT", -577);
test_date(undefined, true);
test_date(1.2200216646288877e+308, true);
test_date(false, "NM1LGW4TF");
test_date(false, "QZL6P24");
test_date(+0, 1.3674819654136845e+308);
test_date(false, -11);
test_date(9.332386091960759e+307, /\r\n|\r|\n/);
test_date(true, /[^.]+/);
test_date(true, 3.5236669029375426e+307);
test_date(7.44666181355847e+307, "CK2TLJ");
test_date(true, 1.080833017551698e+308);
test_date(false, "YQSI2GO5Y2");
test_date(-147, "TW5T1BKBW");
test_date(null, /yes.*day/);
test_date(/(\w+)\s(\w+)/, -733);
test_date(undefined, null);
test_date(1.4984752622451108e+308, undefined);
test_date(-57, "0K2G");
test_date(/[^.]+/, 1.7036036749452194e+308);
test_date(/foo/g, "6SBR3EWB1");
test_date(/[\u0400-\u04FF]+/g, -35);
test_date(3.341835386586395e+307, -175);
test_date(4.825929462129008e+307, /yes[^]*day/);
test_date(/\r\n|\r|\n/, "EK6H1");
test_date(+0, /[^.]+/);
test_date("SQ6", /yes[^]*day/);
test_date(+0, false);
test_date(true, 1.0357688324914465e+308);
test_date(-747, true);
test_date(1.2639134580231475e+308, "V9KI5");
test_date("ZQACKTX", "756N4I4R");
test_date(undefined, false);
test_date(9.322837283119125e+307, true);
test_date(-927, -535);
test_date("F32WHN2XU6", /ab+c/);
test_date("BIMZ04W", 1.2927696265540804e+307);
test_date(-603, /[\u0400-\u04FF]+/g);
test_date(-959, false);
test_date(NaN, 6.718506554621081e+307);
test_date(/[^.]+/, -31);
test_date("H75QEY", "9C5M5KJOB");
test_date(-249, /[^.]+/);
test_date(null, -587);
test_date("2P4P0LY", "SQ3UXOVM");
test_date("XTNM27L", "AE8G");
test_date(-67, /[\u0400-\u04FF]+/g);
test_date(Infinity, -807);
test_date("MQ9YZDMQWG", undefined);
test_date(-387, Infinity);
test_date(-0, true);
test_date(true, 1.6661465600273825e+308);
test_date(true, -0);
test_date(-633, 1.190420450711214e+308);
test_date(undefined, -335);
test_date(1.5267582988555573e+307, -0);
test_date(/foo/g, 9.575836453341468e+307);
test_date(/yes.*day/, "M0UYKOB51");
test_date(1.6730866311488664e+308, true);
test_date(+0, 2.1441172610139344e+307);
test_date(false, 3.8130072414534484e+307);
test_date(/[\u0400-\u04FF]+/g, "J4SPE5Z");
test_date("PSVJWLWPT8", true);
test_date("OM7G6A9ZSY", false);
test_date(null, -315);
test_date(/(\w+)\s(\w+)/, 4.485833958963384e+307);
test_date(false, -585);
test_date(undefined, 1.869150104128262e+307);
test_date(-755, false);
test_date(/[^.]+/, true);
test_date(/yes.*day/, -539);
test_date(-0, NaN);
test_date(1.642825105918061e+307, 6.731493525114346e+307);
test_date(+0, -645);
test_date(-317, -0);
test_date(true, /\r\n|\r|\n/);
test_date(/foo/g, null);
test_date("S1TW74G", "7GI8IE2O");
test_date(false, "RPJMHAYPA");
test_date("4MCM", "YBUA3N1");
test_date(/[\u0400-\u04FF]+/g, "R8XP1YKK");
test_date("PZSC3CTV0", false);
test_date(true, 1.2255245824880998e+308);
test_date(true, -415);
test_date(/yes.*day/, "H2Q");
test_date("A0S4XTX", 1.8166570141945555e+307);
test_date(false, /[^.]+/);
test_date(-887, /[\u0400-\u04FF]+/g);
test_date(undefined, -943);
test_date("RJEXR226", -331);
test_date(false, "G1U08OXXR");
test_date(-841, "UR7P");
test_date(false, 2.2362653015269306e+307);
test_date(6.512233351239129e+307, false);
test_date("CI7ZXX9SVN", -693);
test_date("87BDWY1", /yes[^]*day/);
test_date("C5HS28PCVW", /[^.]+/);
test_date(1.1053674287064417e+308, Infinity);
test_date("75SPKD", 1.693655178044395e+308);
test_date(-289, -269);
test_date(false, -63);
test_date(/ab+c/, -949);
test_date(8.503132207039431e+307, 1.1138179242847751e+308);
test_date(1.6905901528278538e+308, "TKF7ZHXNZP");
test_date(/yes[^]*day/, -373);
test_date(true, -89);
test_date(false, /yes[^]*day/);
test_date(false, -399);
test_date(-553, null);
test_date(/(\w+)\s(\w+)/, true);
test_date(true, null);
test_date(-469, /yes[^]*day/);
test_date(-189, /foo/g);
test_date(9.29414844606566e+306, -465);
test_date(false, "2E25");
test_date(/[\u0400-\u04FF]+/g, 6.116928733184396e+307);
test_date(false, "DZNCVZN");
test_date(-133, true);
test_date(/[^.]+/, 1.9663766883148877e+307);
test_date(true, "V5FUSI");
test_date(/\r\n|\r|\n/, 7.218300990558405e+307);
test_date(-103, -0);
test_date(+0, 1.0665645775658119e+308);
test_date(false, -167);
test_date(-505, true);
test_date(false, 8.553850976279134e+307);
test_date(-787, "16XORM66");
test_date(-0, 2.2666081977057443e+307);
test_date(-399, /[\u0400-\u04FF]+/g);
test_date("5011NP8", false);
test_date(false, -211);
test_date(null, 1.16343786912498e+308);
test_date(true, -213);
test_date(/ab+c/, 302);
test_date(1.6818838406175296e+308, -507);
test_date("WTSX", 9.060635071544361e+307);
test_date(/\r\n|\r|\n/, /(\w+)\s(\w+)/);
test_date(/yes.*day/, "CUKG3OMND");
test_date(Infinity, /(\w+)\s(\w+)/);
test_date(-665, 8.48587745247904e+307);
test_date(1.127522218027433e+308, /[^.]+/);
test_date(-825, -0);
test_date("Y9T", /yes[^]*day/);
test_date(/[\u0400-\u04FF]+/g, 1.5846518140266989e+308);
test_date(-215, -0);
test_date(true, 1.6615402579838643e+308);
test_date(true, true);
test_date(6.041748256411224e+307, "9SSLJXR6E");
test_date(-735, /\r\n|\r|\n/);
test_date(-999, true);
test_date(5.016289374645751e+307, null);
test_date(false, undefined);
test_date(/[\u0400-\u04FF]+/g, -679);
test_date(-829, true);
test_date(-715, 1.4405884036767807e+308);
test_date(-0, 2.767212530543816e+306);
test_date("S71E", -989);
test_date(+0, 8.394814773228569e+307);
test_date(2.809718303075468e+307, null);
test_date(/(\w+)\s(\w+)/, /yes[^]*day/);
test_date(true, "KU4QOJ6");
test_date("TVZ", 5.079388313786348e+307);
test_date(/foo/g, +0);
test_date(7.461682079545436e+307, /(\w+)\s(\w+)/);
test_date(NaN, "EDNNXOP9PO");
test_date(true, +0);
test_date("17I0", 3.163436892084502e+306);
test_date(/yes[^]*day/, "KJWV");
test_date(Infinity, 1.7694818807574092e+308);
test_date(9.115591321030267e+307, undefined);
test_date("JTG7", Infinity);
test_date(5.668062285792172e+307, /yes[^]*day/);
test_date(1.5955818276992328e+308, "1I1RHAV");
test_date("2JEG3WFGXC", true);
test_date(1.658053178347745e+308, /yes[^]*day/);
test_date(+0, "2W6");
test_date(1.251195923968067e+308, "JJHU4HRT8");
test_date(-0, Infinity);
test_date(/yes[^]*day/, 1.5664495855804556e+308);
test_date(1.5041525033616834e+308, -397);
test_date(/yes[^]*day/, -721);
test_date(-617, -485);
test_date(-321, false);
test_date(null, "X2X45BX28");
test_date(2.1414305522328837e+307, "VS4CD5E09");
test_date("2N56X6FQZ0", null);
test_date(-105, "OE75");
test_date(-631, -427);
test_date(1.0321645759855895e+307, 1.43212582051006e+308);
test_date(/foo/g, "Z6F8718X");
test_date(-827, false);
test_date("1GLT1U44YY", -159);
test_date(5.500212645411393e+307, -661);
test_date(-731, 1.3282327526344853e+308);
test_date(null, NaN);
test_date("FWYTI6ETP", 1.2177378348591877e+307);
test_date(/ab+c/, "8ZSW");
test_date(true, -135);
test_date(1.2070251369076185e+308, -157);
test_date(NaN, 1.1575049305682167e+308);
test_date(true, 7.44576338311755e+307);
test_date(+0, "0CPTZHYQ");
test_date(-869, "HDH");
test_date("ZL82QA2", -487);
test_date(-417, +0);
test_date(1.2672977105865805e+308, "10PUCQW");
test_date(NaN, true);
test_date(/yes[^]*day/, -641);
test_date(undefined, /ab+c/);
test_date(Infinity, -505);
test_date(9.658051674309115e+307, "AQ5N7WDG4R");
test_date(-5, false);
test_date("0QF0AJP", 5.103553278959437e+307);
test_date(Infinity, /yes.*day/);
test_date(9.882637073004534e+307, false);
test_date("ZVQ", 1.759726560136154e+308);
test_date(1.1556779339053407e+308, null);
test_date("XIGCF47", /\r\n|\r|\n/);
test_date(1.7244891559767902e+308, 6.963366387664057e+306);
test_date(/foo/g, /[\u0400-\u04FF]+/g);
test_date("OQSU", -759);
test_date("H7NRNMPVB", false);
test_date(4.4443720869204904e+307, null);
test_date(-333, 2.0432177408834067e+307);
test_date(4.833893842967586e+307, 1.0478852481875241e+308);
test_date(null, /ab+c/);
test_date(1.732572453189849e+308, "CT36I");
test_date(undefined, "JGHTYWKY");
test_date(1.4736746550074218e+308, true);
test_date(Infinity, Infinity);
test_date("3VYG1BWN", "XVGA0ZYM1");
test_date(4.907005627564034e+307, -547);
test_date("B80M4N", 1.4225957341986613e+308);
test_date("QJY28VZ12W", -985);
test_date("HAO7N", "S0J");
test_date(undefined, 8.708599828092112e+307);
test_date(-661, -945);
test_date(1.6391335140788825e+308, false);
test_date(Infinity, -41);
test_date(/[^.]+/, "YGTKHS");
test_date(+0, -0);
test_date(/yes.*day/, 5.276815906052918e+307);
test_date(1.751384523542786e+308, 1.320814631519257e+308);
test_date(+0, "XWMPE0KZ");
test_date(/yes.*day/, -235);
test_date(Infinity, NaN);
test_date(1.5538461936446248e+308, -859);
test_date(+0, -267);
test_date(true, "R5AYTW");
test_date(true, -479);
test_date(false, -533);
test_date(false, "4LLFXVV");
test_date("0BFMA7J4KH", undefined);
test_date(/yes.*day/, undefined);
test_date(1.5466012154362438e+308, "P5VCXO4ZT");
test_date(/foo/g, true);
test_date(/[\u0400-\u04FF]+/g, "KRMFHC5");
test_date(1.5947220982019803e+308, -0);
test_date("H1W", 3.55613541385743e+307);
test_date(3.7904462992119306e+307, 1.191049724800368e+308);
test_date(Infinity, /[\u0400-\u04FF]+/g);
test_date(true, "1TFAG95E6");
test_date("12DHQMS405", +0);
test_date(1.1270268998558643e+308, "CUFZG1Y");
test_date(-493, -967);
test_date(/[^.]+/, false);
test_date(true, -959);
test_date(4.716650476490884e+307, -51);
test_date(/foo/g, -865);
test_date(6.809992386765322e+307, /foo/g);
test_date(true, -37);
test_date(null, /[\u0400-\u04FF]+/g);
test_date(1.3656188169680345e+308, /[^.]+/);
test_date(-221, "CWTW6XN4");
test_date(-581, "BIX");
test_date(-345, 982);
test_date(true, "2SQHSBFS4");
test_date(1.339586708717443e+308, "U0T");
test_date(true, 8.952298396579113e+306);
test_date(-563, 728);
test_date(null, "EYPBKAS");
test_date(-697, "UJED1VCLF9");
test_date("SULC1M50", "OJEROYY3X");
test_date(null, undefined);
test_date("K4SL5", true);
test_date(false, 3.107499586293403e+307);
test_date(-5, -353);
test_date(false, "042UGK0A");
test_date(null, 2.2362653015269306e+307);
test_date(/(\w+)\s(\w+)/, 2.084593044978522e+307);
test_date(false, -37);
test_date(-651, false);
test_date("I3YE", 7.85996095825329e+307);
test_date(1.7117798869150489e+308, /(\w+)\s(\w+)/);
test_date(undefined, -537);
test_date(/[\u0400-\u04FF]+/g, false);
test_date(false, "UKMD8BX");
test_date(true, "TE01ERY1");
test_date("UBXYONJ", -697);
test_date(-697, "ZLTQJ414F");
test_date(1.417554897379457e+308, 1.1940846765665857e+308);
test_date(false, -893);
test_date(/[^.]+/, null);
test_date(7.089810661441235e+307, 1.6310904462188176e+308);
test_date("KPXYYYXA", false);
test_date(/[\u0400-\u04FF]+/g, 9.854862101453462e+307);
test_date("9FM39C", -861);
test_date(4.06516591592435e+306, NaN);
test_date(-805, -307);
test_date(/yes[^]*day/, -361);
test_date("AIOTQGEW", 6.03407000429805e+306);
test_date(/ab+c/, -511);
test_date(true, -927);
test_date(-205, false);
test_date(-465, undefined);
test_date(1.4523658067235011e+308, true);
test_date(+0, 1.2673268468736908e+307);
test_date(true, "1KU3ZZ7NW");
test_date(-361, 1.3895267700253574e+308);
test_date(Infinity, -489);
test_date(/yes.*day/, -35);
test_date(-0, /\r\n|\r|\n/);
test_date(/[\u0400-\u04FF]+/g, 3.2851849234357146e+307);
test_date("6TMRSAV", /[\u0400-\u04FF]+/g);
test_date(/yes[^]*day/, undefined);
test_date(-991, 8.581566683387931e+307);
test_date(1.7864617047917953e+308, true);
test_date("AV5", /yes.*day/);
test_date("JNHQG90SYM", 1.191646985132621e+308);
test_date(/[\u0400-\u04FF]+/g, Infinity);
test_date(-271, 8.888511467583402e+307);
test_date(-797, "9LONNNQL2");
test_date(true, 7.617598955510665e+307);
test_date("6CEX2GZ", /ab+c/);
test_date(1.1117357855030947e+308, 5.573075797511952e+307);
test_date(/foo/g, /(\w+)\s(\w+)/);
test_date(true, "JXK1BUN");
test_date(/\r\n|\r|\n/, "PMQOKIB");
test_date(-771, /[^.]+/);
test_date(-627, true);
test_date(NaN, 4.3243003458623835e+307);
test_date("GPV", Infinity);
test_date(6.407880403865512e+307, false);
test_date(7.377328524723152e+307, 8.723256307841424e+307);
test_date(/\r\n|\r|\n/, /yes.*day/);
test_date(-533, true);
test_date(null, 3.3243606105666044e+307);
test_date(true, "GP8RSA");
test_date(undefined, "HCA1C");
test_date(false, -603);
test_date(3.4368380041507456e+307, undefined);
test_date(1.7612275308615881e+308, /yes[^]*day/);
test_date(/(\w+)\s(\w+)/, 1.3343463455465003e+308);
test_date(+0, -443);
test_date(/[^.]+/, -453);
test_date(1.250654708919765e+308, -299);
test_date(/yes.*day/, 2.374471814561472e+307);
test_date(1.3119929259422985e+308, true);
test_date("8VC9EHMNS", "C3BM3G");
test_date(/[\u0400-\u04FF]+/g, -135);
test_date(false, 7.24713658934984e+307);
test_date(+0, /ab+c/);
test_date(false, 7.798350281341933e+307);
test_date(7.161541558551789e+307, true);
test_date(7.672191136935834e+307, -0);
test_date(-243, -529);
test_date(-727, 1.378316541780515e+308);
test_date(null, /(\w+)\s(\w+)/);
test_date(-699, /\r\n|\r|\n/);
test_date(false, -923);
test_date(+0, 7.192149617100488e+307);
test_date(/foo/g, -539);
test_date(-0, -575);
test_date("L9ESK", true);
test_date(/(\w+)\s(\w+)/, /(\w+)\s(\w+)/);
test_date(false, 4.604693732021097e+306);
test_date(false, 384);
test_date(-607, undefined);
test_date(-179, "7QF");
test_date("UUO", /yes.*day/);
test_date("QIESIT2SOC", true);
test_date(-419, 8.807245129236869e+307);
test_date(/\r\n|\r|\n/, Infinity);
test_date(Infinity, -999);
test_date(1.593747156860223e+308, "2FKBM5M7O");
test_date("J7UF", /(\w+)\s(\w+)/);
test_date(/ab+c/, -209);
test_date(true, "OV2CK2YZJW");
test_date(-897, /[^.]+/);
test_date(-115, null);
test_date(3.180183720556123e+306, "YE7AHTI75");
test_date(-901, /yes[^]*day/);
test_date("AJ3", true);
test_date(/yes[^]*day/, /yes.*day/);
test_date(/[\u0400-\u04FF]+/g, 7.000438913004752e+307);
test_date(-753, /[^.]+/);
test_date(undefined, /foo/g);
test_date("HAMW", 1.4247229132267462e+308);
test_date(false, -339);
test_date(undefined, "IVEGI");
test_date(true, -355);
test_date(/yes.*day/, /yes.*day/);
test_date(-825, Infinity);
test_date(1.1708865607784228e+308, /ab+c/);
test_date("COLAU", "BU446");
test_date(-493, 106);
test_date("UCV", /foo/g);
test_date("ILKM", -159);
test_date(/yes[^]*day/, 7.951545747443121e+307);
test_date("RKTQH", true);
test_date(/ab+c/, -143);
test_date(true, Infinity);
test_date(3.901494821912105e+307, undefined);
test_date(8.168495285400674e+307, "G7BJZCTTF4");
test_date(/yes.*day/, false);
test_date("8Y13FQAM", +0);
test_date("OQU", 4.4275427793233776e+307);
test_date("50W", "6EKLB0WKK");
test_date("ADGS1GJT9", -449);
test_date(-0, 2.788454177211303e+307);
test_date(/ab+c/, 1.1882977082674216e+308);
test_date(1.6127024063582932e+308, true);
test_date(-299, NaN);
test_date(-81, false);
test_date(-469, true);
test_date(/yes[^]*day/, 6.991559240021378e+307);
test_date(undefined, undefined);
test_date("ZSWVXV", 1.746363033946161e+307);
test_date(-939, 1.483736450675188e+308);
test_date("H0MAP9", 7.405589700384256e+307);
test_date(1.3859462357463187e+308, /(\w+)\s(\w+)/);
test_date(Infinity, 4.727833039521658e+307);
test_date(9.688800931427909e+307, 9.0653778223226e+305);
test_date(true, 1.0402214228382915e+308);
test_date(undefined, -453);
test_date("1YHPONA3YW", NaN);
test_date("0BC27X8D", true);
test_date("4ZUQTCEBN", null);
test_date(/\r\n|\r|\n/, "JC2MME1LAF");
test_date("ZEJC", -919);
test_date(-303, +0);
test_date(/\r\n|\r|\n/, null);
test_date("FNH", 1.1420338238052005e+308);
test_date(/yes[^]*day/, 4.132778243362367e+306);
test_date(Infinity, -0);
test_date(/foo/g, -413);
test_date(+0, /yes[^]*day/);
test_date(-967, /yes.*day/);
test_date("J7VMO8KU0A", /[\u0400-\u04FF]+/g);
test_date(-265, false);
test_date("XSB", /\r\n|\r|\n/);
test_date(true, 610);
test_date("VIRMIZHD1", -901);
test_date(1.4506940591758214e+308, "6N9M91H6X");
test_date(6.843894122961449e+307, /(\w+)\s(\w+)/);
test_date(-669, /\r\n|\r|\n/);
test_date(9.37220367306687e+307, /yes.*day/);
test_date("0IZ", "2V0IA");
test_date(/\r\n|\r|\n/, 2.2247194846719412e+307);
test_date(false, 762);
test_date(undefined, "7BOP2E2WGJ");
test_date(true, 1.763979103809261e+308);
test_date(true, 1.3852961532030629e+308);
test_date(-659, 1.6391323035257485e+308);
test_date(-265, /yes[^]*day/);
test_date(-813, +0);
test_date(438, 9.937502475134155e+307);
test_date(/yes[^]*day/, /(\w+)\s(\w+)/);
test_date("E62EI", /foo/g);
test_date(/[\u0400-\u04FF]+/g, 8.341428829778363e+307);
test_date(true, "7K5I039");
test_date(4.541192204086616e+307, /[\u0400-\u04FF]+/g);
test_date(/yes.*day/, -965);
test_date(/yes.*day/, Infinity);
test_date(false, -215);
test_date(false, "W0EZ8TUU");
test_date(false, "5Z8");
test_date(Infinity, 3.988641255239959e+306);
test_date(1.7075671102095045e+307, /yes.*day/);
test_date(true, "MGPP2");
test_date(-183, 4.2394150150712626e+307);
test_date(-811, Infinity);
test_date(false, /foo/g);
test_date(-205, true);
test_date("OQ0O1D6JK", false);
test_date(-597, 1.3323370557194063e+308);
test_date("U5ET", -341);
test_date(/\r\n|\r|\n/, -0);
test_date("5DLNX", NaN);
test_date(-725, 1.8341697343508416e+307);
test_date(undefined, 4.370410968468729e+305);
test_date("VE1L", 1.2755413868012823e+308);
test_date(-0, /yes.*day/);
test_date(/ab+c/, "Y6RS");
test_date("HOA", false);
test_date(/yes[^]*day/, -89);
test_date(-729, true);
test_date("RRV3", true);
test_date(6.078979229479741e+307, false);
test_date(Infinity, -963);
test_date(/[^.]+/, /yes.*day/);
test_date(NaN, 3.175643108194743e+307);
test_date(undefined, -0);
test_date(-735, 1.564561437850375e+308);
test_date(8.405317262308445e+307, /yes.*day/);
test_date(-613, 1.7752103440209658e+307);
test_date("WOCS", 1.3834525118795643e+308);
test_date("MA6WFU", 8.913209504531951e+307);
test_date(/\r\n|\r|\n/, 2.217566195786818e+307);
test_date(-811, "VL4A3");
test_date(false, /(\w+)\s(\w+)/);
test_date("RLP4", "TSHB7");
test_date(1.7461625939864647e+308, 1.197353323809413e+308);
test_date("P41E0KRKP", true);
test_date(1.333445761775987e+307, 9.328082681836058e+307);
test_date(null, "MAPUUY8P");
test_date(9.510235103538459e+307, -827);
test_date(6.784240110031756e+307, /yes.*day/);
test_date(3.7936821677878794e+307, true);
test_date(-923, /ab+c/);
test_date(/yes.*day/, "7EO4G46SCD");
test_date(false, "BH4");
test_date("O2WA", false);
test_date(true, /(\w+)\s(\w+)/);
test_date(1.3904618768982103e+308, /foo/g);
test_date(undefined, -647);
test_date(-177, 1.7937002529925e+308);
test_date("37FK7", -723);
test_date(2.798250922005452e+307, /[\u0400-\u04FF]+/g);
test_date(-905, NaN);
test_date(1.6745147375940595e+308, "S2E4VU94Z");
test_date(1.0217849466866144e+308, true);
test_date(3.144766820070696e+307, false);
test_date(-963, 1.7242934378189584e+308);
test_date("48II5H56", /ab+c/);
test_date(/(\w+)\s(\w+)/, "5NHVTU8");
test_date(9.463587541215586e+307, 2.001631572393309e+306);
test_date(/\r\n|\r|\n/, -3);
test_date(1.6644848191613681e+308, false);
test_date(1.6770698128221789e+308, /foo/g);
test_date(7.577227651810871e+307, /foo/g);
test_date(Infinity, +0);
test_date("P2R83U", /foo/g);
test_date(-109, /ab+c/);
test_date(-239, /[^.]+/);
test_date("X8Q7J2I", true);
test_date("Z1PO", /\r\n|\r|\n/);
test_date("NX5N", false);
test_date(4.582507269862696e+307, 9.543975321007998e+307);
test_date("VHO0", false);
test_date(1.0664385342404577e+308, null);
test_date(undefined, -765);
test_date(-0, /ab+c/);
test_date(8.111043846926351e+307, -759);
test_date(/foo/g, "OHDCPHA");
test_date(false, 1.4863915015007698e+308);
test_date(NaN, false);
test_date(1.4607133531569478e+307, /[^.]+/);
test_date(/[^.]+/, 1.728286160134541e+308);
test_date(false, 4.2785593105832987e+307);
test_date(/[^.]+/, undefined);
test_date(-205, -997);
test_date("B7HBLGBKC", 1.5538461936446248e+308);
test_date(8.965403098969349e+307, 1.0375881862981257e+308);
test_date(1.7706719376377309e+308, -643);
test_date(-281, undefined);
test_date("025OMIDSV", "7NRG");
test_date(2.037680415117149e+307, null);
test_date("C5TO", NaN);
test_date(1.4702250600761062e+308, 1.3174464843862192e+308);
test_date(7.125209037744161e+307, true);
test_date("S6F", null);
test_date(-723, null);
test_date(8.01397720771784e+307, 1.3051838995645773e+308);
test_date(false, 7.547968584513203e+307);
test_date(8.044346360118799e+307, true);
test_date(NaN, 1.6951229937044738e+307);
test_date("QN2DOY1Q0", /yes.*day/);
test_date("XHGYH6W3V", 3.61991122193233e+307);
test_date(NaN, -859);
test_date(1.4097103796700482e+308, -57);
test_date(NaN, -0);
test_date(5.857470710821105e+307, false);
test_date("66ZUI", /yes[^]*day/);
test_date(-51, true);
test_date(true, "RBW5VVU2M");
test_date(-0, -349);
test_date(/(\w+)\s(\w+)/, "F6R");
test_date(1.401615814678628e+308, 6.018121163679877e+307);
test_date("1Y4004", NaN);
test_date(null, -607);
test_date(1.080388615079282e+308, +0);
test_date(true, -467);
test_date(/yes[^]*day/, /[^.]+/);
test_date(4.6198592914563853e+306, 1.6176653329047503e+308);
test_date(6.98049711798939e+306, true);
test_date(-7, "5XRW4K");
test_date(undefined, "IYTF");
test_date(-423, -25);
test_date(9.501994055410547e+307, 6.837481761238479e+307);
test_date(-21, -445);
test_date(undefined, /yes[^]*day/);
test_date(undefined, /[\u0400-\u04FF]+/g);
test_date(58, 1.7672950479449577e+308);
test_date(-753, "1RENTTF");
test_date("HCRDT1", true);
test_date(false, 1.3598032096922233e+308);
test_date(/[^.]+/, -935);
test_date(true, "6NS");
test_date(/foo/g, 7.241463631339565e+306);
test_date(+0, "MRNVZ6B2");
test_date(1.307598821863371e+308, 5.423158736303064e+307);
test_date("2ON9N2", 1.4607574282184855e+308);
test_date(NaN, -257);
test_date(+0, -11);
test_date(7.642237019405807e+305, 1.0857315725854429e+308);
test_date(1.1028380756588402e+308, true);
test_date("4R0XM", -0);
test_date(null, 1.6789592918612126e+308);
test_date(/(\w+)\s(\w+)/, Infinity);
test_date(false, false);
test_date(3.5201948107136573e+307, "EAGGF1O");
test_date(-777, /\r\n|\r|\n/);
test_date(true, 9.397883927338729e+307);
test_date(false, -579);
test_date("C5N9UJM", 1.0519356706407526e+308);
test_date(1.2987434381566277e+308, false);
test_date("CEIYVY1M", "KVLWE6C");
test_date(Infinity, /\r\n|\r|\n/);
test_date("EULGC8I", "P55VUZ2");
test_date(false, 1.4213241510966867e+308);
test_date(-269, /ab+c/);
test_date("R68F3Z", 9.954411826291788e+307);
test_date(-801, 2.6095911385962643e+307);
test_date(9.380903862710819e+307, -263);
test_date(-321, /foo/g);
test_date(/[\u0400-\u04FF]+/g, -555);
test_date(-985, 3.0435200230572217e+307);
test_date(8.56089302202453e+307, "ZQ7");
test_date(undefined, "27PS7E");
test_date(undefined, +0);
test_date(7.139614526302601e+307, -0);
test_date(/(\w+)\s(\w+)/, NaN);
test_date(/\r\n|\r|\n/, -959);
test_date(1.248711183043652e+308, -95);
test_date(-0, 7.474146751806166e+307);
test_date(Infinity, undefined);
test_date(/yes[^]*day/, null);
test_date(false, "I1TNGXNRO8");
test_date("0UV8KP", true);
test_date(-937, "AFXJY");
test_date(2.801231173654525e+306, -699);
test_date("TX6Z", 1.5538461936446248e+308);
test_date(-285, -537);
test_date(false, 1.3329316712700974e+308);
test_date(-41, 9.764556274975857e+307);
test_date(false, -743);
test_date("WE8NE3C56", false);
test_date("9XZ4LX9", Infinity);
test_date("WQLVLY5CX", Infinity);
test_date(7.017193376522437e+305, -951);
test_date(642, NaN);
test_date(-779, NaN);
test_date(null, "HAF");
test_date(NaN, "29YM");
test_date("YJCUL7W9Q", true);
test_date(1.0671604064467727e+308, /[\u0400-\u04FF]+/g);
test_date(7.072379279155561e+307, NaN);
test_date(-799, 3.5647500787063624e+307);
test_date(-31, "5A3X8U");
test_date(/\r\n|\r|\n/, true);
test_date(/ab+c/, /yes.*day/);
test_date(6.855902276993139e+307, -925);
test_date(6.843225442280661e+307, "GUD4PKCWEB");
test_date(-255, +0);
test_date(false, -781);
test_date("T3WJL", -317);
test_date("H2H74Z", -603);
test_date(1.7675994595937168e+308, false);
test_date("GJLZRRKB5", "17M36EKZ");
test_date(/[^.]+/, NaN);
test_date(1.2225891583400058e+306, /foo/g);
test_date(false, 1.3747468360949538e+308);
test_date(/yes.*day/, /ab+c/);
test_date("2DQZU5RDY8", 1.298931077843796e+308);
test_date(-497, 1.4979475691612896e+308);
test_date(2.713115771368291e+307, false);
test_date(52, /yes[^]*day/);
test_date(6.012432418446118e+307, "K5727VDND");
test_date("2XU52SF", -0);
test_date("VUDK", -397);
test_date(/ab+c/, -323);
test_date(Infinity, /yes[^]*day/);
test_date(/yes[^]*day/, 7.679317070331178e+307);
test_date(1.0832967037297714e+308, Infinity);
test_date(/\r\n|\r|\n/, 5.868433364995574e+306);
test_date("ILYZP0BE", 1.274286696046545e+308);
test_date("GEFBH0T7", "0T5HAR29");
test_date(-73, true);
test_date(false, 8.632793830064737e+307);
test_date(-655, "QBZ1IF0L");
test_date(4.217507671038118e+307, true);
test_date(1.111214049641981e+308, /[\u0400-\u04FF]+/g);
test_date(false, "L7CJQ0L8UG");
test_date(true, -103);
test_date(+0, /\r\n|\r|\n/);
test_date(1.419565639930247e+308, undefined);
test_date(/[\u0400-\u04FF]+/g, NaN);
test_date("RG07", false);
test_date(+0, "ZIPXQ4A63");
test_date("F4HT2", "LG96VMV");
test_date(null, "LI3");
test_date("HT2AH96", /foo/g);
test_date(/\r\n|\r|\n/, "AVT4E");
test_date("8P69L", true);
test_date(1.1080257739611927e+308, null);
test_date("WQSC4R", "RESQDLQ");
test_date(-575, 1.921472732793388e+307);
test_date(true, -759);
test_date(9.875668748473834e+307, 9.676517145138992e+307);
test_date(NaN, /[^.]+/);
test_date(8.088650121889071e+307, "DVS280KF3");
test_date(/(\w+)\s(\w+)/, -201);
test_date(undefined, "Y7O8DDG");
test_date(5.385503702889302e+307, -731);
test_date(/ab+c/, false);
test_date(4.743929169017062e+307, true);
test_date("HPU0WFLO", null);
test_date("91AXH7PL", 1.7237269048729224e+308);
test_date(-841, 1.5298879662340822e+308);
test_date(undefined, 8.464633583239493e+307);
test_date(58, true);
test_date(-405, 6.940531832421533e+307);
test_date("FC6CM5LH", false);
test_date(1.2129975438673508e+308, -867);
test_date(false, -961);
test_date("VMUV", "1R0RTLKST");
test_date(9.35752353207038e+307, 9.38833128437851e+307);
test_date(-735, "8FZ3VN");
test_date(/yes[^]*day/, -0);
test_date(2.528499456074668e+307, "X5AWUMLNV");
test_date(8.546914616730068e+307, +0);
test_date(-0, 5.615707819970854e+307);
test_date(true, "7IO9OGZ43");
test_date(3.1278571471870684e+307, 1.3257758787700449e+307);
test_date(-833, /yes[^]*day/);
test_date(false, 8.845516367893333e+307);
test_date("J5B8U2M", 5.924451263579874e+307);
test_date(/yes[^]*day/, "F4U");
test_date(9.1377715770801e+307, "S8WAZUVGFJ");
test_date(/[^.]+/, "IL50VZG4SW");
test_date(-965, NaN);
test_date(NaN, /yes.*day/);
test_date(2.3644005309614207e+307, 5.245800024693674e+307);
test_date(/[^.]+/, "V3P0Y3AP");
test_date(undefined, NaN);
test_date(9.912378300605763e+307, "BH7IF");
test_date(Infinity, "5BZUXQH");
test_date(-883, false);
test_date(/[^.]+/, "VDRCN8U");
test_date(1.6929572719630167e+308, 1.680128770947834e+308);
test_date("0E1XC2K3", false);
test_date(-393, Infinity);
test_date(-93, 3.6923063054990993e+307);
test_date(+0, -719);
test_date(1.6570472568974441e+308, "PXX4A");
test_date(NaN, "W9O");
test_date("AURVML", false);
test_date(2.631501569632367e+307, /yes[^]*day/);
test_date(-713, /foo/g);
test_date(+0, 1.4809568455733837e+308);
test_date("ADXXNV", undefined);
test_date("RRGCLNQ", NaN);
test_date(+0, "XK3OE7B");
test_date("ZPVD9C1HWJ", Infinity);
test_date(4.866158595703959e+307, "FFI");
test_date("WVYY", 1.3132809305678348e+308);
test_date(-973, false);
test_date(-351, "4UIU86S");
test_date("0RMNDH1", -141);
test_date(/ab+c/, 5.173309045908147e+307);
test_date(/yes[^]*day/, "EWSGEA1N57");
test_date("RJBST0QB", 1.1248372909128847e+308);
test_date(-883, "Y2LG");
test_date("H1TOCY1G", Infinity);
test_date(true, /ab+c/);
test_date("AAZ2F5ZC", -369);
test_date(null, false);
test_date(1.7963598595708856e+308, -697);
test_date(-265, NaN);
test_date(-319, true);
test_date("TFHFLZV8R", 4.915322298418387e+307);
test_date(-511, true);
test_date(1.6962965750163534e+308, 400);
test_date("51WRFTE9F", true);
test_date("15Y8PZ", null);
test_date(7.577009001134972e+307, false);
test_date(5.947963578428357e+307, /ab+c/);
test_date(/[^.]+/, "EUN05");
test_date(Infinity, "SAFDI");
test_date(-337, /foo/g);
test_date(1.2382645330446345e+308, -71);
test_date("J1NNG1HYB", 1.4980597194452393e+308);
test_date(/foo/g, "EFMA");
test_date(1.7072639105570945e+308, "K8Y6");
test_date("Z9XC6", "K79CF6");
test_date(false, 1.2505479279889919e+308);
test_date(-895, "T0FOBC0W");
test_date("ZA5920", 3.556888808356621e+306);
test_date(8.609114494745868e+307, "WZHT7X3G5");
test_date(false, "AFN25");
test_date(7.010425892819096e+307, Infinity);
test_date(9.121690010150433e+307, "PUOO3");
test_date("HNL1Z65", +0);
test_date(true, "B83LV");
test_date("2DL7R", "KHSGZP1P");
test_date("8FVSDO80H", "N9155C");
test_date(+0, 1.1590749766425425e+308);
test_date(-51, /[^.]+/);
test_date(/ab+c/, -993);
test_date(-979, false);
test_date("UGETLN84", 4.6118330941221015e+306);
test_date(false, -345);
test_date(null, 6.652332719254546e+307);
test_date(+0, "4J9");
test_date(1.668845546492786e+308, "VJNA");
test_date(-791, 1.2532774864893501e+308);
test_date(-909, +0);
test_date("YKUFIVEV3", true);
test_date("1EDDBKNS", 1.6714527531406056e+308);
test_date(false, 6.065734625466118e+307);
test_date(-825, -991);
test_date(-811, "A605NH");
test_date("F4HT2", /(\w+)\s(\w+)/);
test_date("9B7M", true);
test_date("WIL74G", /[^.]+/);
test_date("A41", /foo/g);
test_date(/[\u0400-\u04FF]+/g, "HXPLENG");
test_date("1209YID68", /yes[^]*day/);
test_date(/yes[^]*day/, Infinity);
test_date(2.599287416508703e+307, 7.410090682751579e+307);
test_date(-827, /yes[^]*day/);
test_date("NIHNGY", NaN);
test_date("WYKM", -875);
test_date(NaN, 8.047693833142674e+306);
test_date(/yes[^]*day/, 1.4737058612774633e+308);
test_date(/(\w+)\s(\w+)/, 3.2313639874679294e+307);
test_date("ZFN", false);
test_date(false, 6.80830607907478e+307);
test_date("87OX3I72I1", 6.116467986113279e+307);
test_date(null, -937);
