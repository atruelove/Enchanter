/*
* This file is automatically generated by Swami
*
* 2019-08-09 12:08:38.683159
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
function test_map(randominput,iterable){
	if (( typeof  NewTarget === 'undefined' )){
		 try{
			var output = randominput.Map(iterable);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
		console.log("OK Test")
}



/*TESTS GENERATED AUTOMATICALLY*/
test_map(5.688694643217937e+307, -379);
test_map(/\r\n|\r|\n/, 1.3109712643638662e+308);
test_map(-713, /\r\n|\r|\n/);
test_map(/yes.*day/, "1WDM");
test_map(/[^.]+/, false);
test_map(undefined, true);
test_map("697NW", 1.6671627099972254e+308);
test_map("D9GB97ET", -0);
test_map(+0, 1.3661119415971723e+308);
test_map(-89, "2U433CF");
test_map(/yes.*day/, Infinity);
test_map(true, "4QD5IE1");
test_map(-987, 5.246010326286196e+307);
test_map(-99, "N825A7TLBQ");
test_map(/yes[^]*day/, "OEEIMC0X");
test_map(-753, /foo/g);
test_map(/\r\n|\r|\n/, false);
test_map(true, "K9ALUFS");
test_map(/(\w+)\s(\w+)/, 4.6902372442194996e+305);
test_map(true, NaN);
test_map(-567, 1.2122130541789346e+307);
test_map(-621, 5.823325514428528e+307);
test_map(-493, false);
test_map(/foo/g, -781);
test_map(Infinity, /ab+c/);
test_map(undefined, "34HJU79XA");
test_map("95N9", 1.3388687059723311e+308);
test_map("KK95C", /yes.*day/);
test_map(-71, "JR55");
test_map(/[\u0400-\u04FF]+/g, /ab+c/);
test_map("4OP3G", +0);
test_map(/foo/g, -337);
test_map(false, null);
test_map("VYX3", /foo/g);
test_map("MI4IZWDGH", /[^.]+/);
test_map(-407, /foo/g);
test_map(-877, true);
test_map(NaN, -421);
test_map(-371, 1.444050649355509e+308);
test_map(/[^.]+/, "906Y");
test_map(-191, /ab+c/);
test_map(1.0504604659018994e+308, 2.522644651193661e+307);
test_map(1.6782796338613145e+308, -901);
test_map(NaN, "6K0P");
test_map(-0, Infinity);
test_map(/(\w+)\s(\w+)/, 5.673442241825705e+307);
test_map(Infinity, "SA1");
test_map("O611XR5", -0);
test_map(Infinity, /foo/g);
test_map(true, false);
test_map("G1SL", /yes.*day/);
test_map(/ab+c/, true);
test_map(true, /\r\n|\r|\n/);
test_map(1.5266227551016558e+308, "H6GD2");
test_map(undefined, /[^.]+/);
test_map("GA8XXM", null);
test_map(1.6885492348741743e+308, -389);
test_map(/yes[^]*day/, "VWIYT0E");
test_map(/[^.]+/, null);
test_map(false, 2.0465717875885777e+307);
test_map("WVLSV", true);
test_map(null, "ED81845E");
test_map(/yes[^]*day/, "BVU4");
test_map("EUHOTUR", 4.847505277021127e+307);
test_map(+0, -501);
test_map(-971, undefined);
test_map(-533, "O54711IXB");
test_map(/[^.]+/, true);
test_map(false, +0);
test_map(1.3332035879150004e+308, false);
test_map(/[^.]+/, /[\u0400-\u04FF]+/g);
test_map(/ab+c/, Infinity);
test_map(true, /foo/g);
test_map(null, false);
test_map(8.423931443104979e+307, 6.281106683273846e+307);
test_map("TMM", -791);
test_map("98ADUZ1P", -493);
test_map(-643, /yes.*day/);
test_map(-541, -517);
test_map(/[\u0400-\u04FF]+/g, -0);
test_map(-7, NaN);
test_map("SI74LZU0", -801);
test_map(/yes.*day/, "TSORUAF0R1");
test_map(null, 1.1107609045043905e+308);
test_map("9F6LLY6KF", +0);
test_map(+0, 6.859661402275767e+307);
test_map(true, 1.4496153996804133e+308);
test_map(false, NaN);
test_map(false, "2JQ21MN927");
test_map(null, -109);
test_map(-139, 1.0281651828955319e+307);
test_map(2.3569988125349362e+306, true);
test_map(+0, /yes[^]*day/);
test_map(+0, "4YM45");
test_map(NaN, "I5BGVQG476");
test_map(8.216723622259594e+306, "3ECH0");
test_map(+0, false);
test_map(-0, +0);
test_map("Y289JF", false);
test_map(-835, -451);
test_map("JQMAACYMQA", true);
test_map("O54NRIC3", false);
test_map(false, 2.5914243781909954e+306);
test_map(Infinity, 6.597278747127251e+307);
test_map(/\r\n|\r|\n/, /[^.]+/);
test_map(-195, "UYR");
test_map("JJ85R7O", 3.468106495339841e+307);
test_map(/yes[^]*day/, 1.3543119251613297e+308);
test_map(undefined, /ab+c/);
test_map(false, 1.4051122410635557e+308);
test_map(-433, true);
test_map(9.088172698052424e+307, -927);
test_map(/ab+c/, 1.7129861315752342e+308);
test_map(Infinity, false);
test_map("X1AL", "XHT1XLTS");
test_map("IA4ZH2C", undefined);
test_map("H5Q4ZL4", 1.523595029036265e+308);
test_map(1.5539361900883383e+308, "P211VC162");
test_map("TWC937", +0);
test_map(false, 2.364927338681219e+307);
test_map("6X8W", /[\u0400-\u04FF]+/g);
test_map(true, "548R6DVLH");
test_map(-395, /[^.]+/);
test_map("K6U8JT4", 2.951777118926293e+307);
test_map(3.322522366253116e+306, 1.3916628301423062e+307);
test_map("HZJ7", "1TNQTEB");
test_map(false, "DHMKX56X");
test_map(+0, "MW0");
test_map(+0, "JEU");
test_map(null, -471);
test_map(1.0370680140053005e+308, /(\w+)\s(\w+)/);
test_map(Infinity, "67NYXU6M");
test_map(2.857067740879613e+307, -0);
test_map("ERIIUR", -585);
test_map(4.721615388215898e+307, +0);
test_map(3.361678079241506e+307, -603);
test_map(undefined, "4LPM4HS2B");
test_map(-349, null);
test_map(/yes.*day/, 1.1434516245103257e+308);
test_map("YIMPP6HOW", false);
test_map(/yes.*day/, "6ZF");
test_map(/(\w+)\s(\w+)/, null);
test_map(1.5288962238886932e+308, /[^.]+/);
test_map(/yes.*day/, "RDNSJT");
test_map(6.323630812155812e+307, /(\w+)\s(\w+)/);
test_map(-981, "BLMNQ");
test_map(+0, 1.7567083157390765e+308);
test_map(/\r\n|\r|\n/, /[\u0400-\u04FF]+/g);
test_map(-273, /yes.*day/);
test_map(true, -75);
test_map(7.795406842105905e+307, -125);
test_map("19VLAZUFJP", 5.951296990393413e+307);
test_map(8.599847684048159e+307, "9LEA223");
test_map(1.5557435541186629e+308, "9TJH");
test_map("L8P5URLJNN", -343);
test_map(+0, 4.050546155163079e+306);
test_map(-133, /ab+c/);
test_map(/[\u0400-\u04FF]+/g, 8.860524235734474e+307);
test_map("2OTJL7M5", 9.952076131092808e+307);
test_map(+0, /yes.*day/);
test_map(1.1414263033329465e+308, -485);
test_map("O6O", -145);
test_map(true, Infinity);
test_map(-607, true);
test_map(6.495252010707838e+307, -755);
test_map(1.0478852481875241e+308, 1.0314860554109274e+308);
test_map("EBXZ52", /yes.*day/);
test_map(false, 1.7875751815897898e+308);
test_map(1.1996599793578923e+308, /(\w+)\s(\w+)/);
test_map(false, 2.567355348064736e+307);
test_map(1.4309069178784435e+308, -857);
test_map(-3, /\r\n|\r|\n/);
test_map(true, /yes.*day/);
test_map(/yes[^]*day/, "9OTMWTFEOB");
test_map(null, true);
test_map(/foo/g, /[\u0400-\u04FF]+/g);
test_map(-195, /(\w+)\s(\w+)/);
test_map(/(\w+)\s(\w+)/, true);
test_map(-319, 1.3818267565092543e+308);
test_map("R8DXT", "K4ZE");
test_map(false, true);
test_map(true, "LYD3");
test_map(-709, true);
test_map(true, "TNF1");
test_map(-147, /yes.*day/);
test_map(-875, /yes.*day/);
test_map(/(\w+)\s(\w+)/, -529);
test_map(Infinity, "ADB6IV0");
test_map(true, /yes[^]*day/);
test_map(+0, "4BOSGPA8U0");
test_map(true, 6.529484780644015e+307);
test_map(false, undefined);
test_map(undefined, 5.228802937205074e+307);
test_map(4.551746792201362e+307, /\r\n|\r|\n/);
test_map(1.0238826566337897e+308, /[\u0400-\u04FF]+/g);
test_map(-763, false);
test_map(false, "XXGKYF");
test_map("LBMFPRZGOX", 4.699034512279245e+307);
test_map(-497, false);
test_map(/yes[^]*day/, 646);
test_map(8.591209086699498e+306, "0ZFG");
test_map(4.1752864635286205e+307, -3);
test_map(false, -795);
test_map(2.74009708401124e+307, 3.555735514100537e+307);
test_map(1.364606212197374e+308, "UTQI1A");
test_map(7.735639105636904e+307, -915);
test_map(-73, "OPBN5V");
test_map(-653, "SGJJ");
test_map(null, "M68");
test_map(-649, /(\w+)\s(\w+)/);
test_map(-745, false);
test_map("8CF0PYYII", "DA6GY");
test_map("GXTUN4", true);
test_map(-149, /[^.]+/);
test_map(1.143455101042269e+308, /yes[^]*day/);
test_map(true, "RZALCHU0C");
test_map(true, true);
test_map(/(\w+)\s(\w+)/, /yes[^]*day/);
test_map(true, -431);
test_map(false, "WJ01T0H");
test_map(/[^.]+/, 2.0573575543315868e+307);
test_map(-61, -563);
test_map("W1L60", 7.946068238915928e+307);
test_map("FC50A0P8", true);
test_map("D6YIW1YJLN", -355);
test_map(true, "9HWRFGG0");
test_map("F1MYL6W", +0);
test_map(false, -583);
test_map("OS5", "DNKVRON");
test_map(1.5006696938535367e+308, "Z61GODK");
test_map(undefined, /[\u0400-\u04FF]+/g);
test_map(1.4503694585284686e+308, true);
test_map(/yes[^]*day/, 4.4503572281841406e+307);
test_map(6.569270225803529e+307, /\r\n|\r|\n/);
test_map(/ab+c/, null);
test_map(true, "DUWZLZRE");
test_map(false, -377);
test_map(/yes.*day/, 1.6943894215706885e+308);
test_map(-27, "WWGXXR2QJP");
test_map(/yes.*day/, 4.556670099199077e+307);
test_map(-0, 1.3214728745077378e+308);
test_map(/foo/g, 8.758026251633526e+307);
test_map(true, "6SZT");
test_map(7.346979280079631e+307, /foo/g);
test_map(-0, "8W6QF4");
test_map(-0, 1.5171063509370118e+308);
test_map(false, "OYNYG");
test_map("SGMPVN", 1.6320136942857337e+308);
test_map(-729, "B9VP");
test_map(-847, false);
test_map(9.497856292703867e+307, undefined);
test_map(Infinity, undefined);
test_map("WMIB0MJVI9", 1.6985167744337934e+308);
test_map(1.3786221118346063e+308, "9DA87ZSIM");
test_map(false, -481);
test_map(1.3477620116440206e+308, "E0E");
test_map(NaN, true);
test_map(/\r\n|\r|\n/, 1.2161118714298003e+308);
test_map(-753, false);
test_map(/yes.*day/, /yes[^]*day/);
test_map(/\r\n|\r|\n/, /yes.*day/);
test_map(true, /[^.]+/);
test_map(-0, "BCFKT7W4");
test_map("SZULJ1M", /\r\n|\r|\n/);
test_map(1.1117972299496486e+308, 3.262386957986042e+307);
test_map("YBB477R9P", /[^.]+/);
test_map(Infinity, null);
test_map(true, "NQ96XR7QWL");
test_map(-955, true);
test_map(-583, false);
test_map(/(\w+)\s(\w+)/, +0);
test_map(4.507984012861471e+307, undefined);
test_map(8.40880824285821e+307, -311);
test_map(-0, -379);
test_map(/\r\n|\r|\n/, "XBLRO");
test_map(/[^.]+/, 2.972158905380052e+307);
test_map("V9RXGA", /yes[^]*day/);
test_map(/[^.]+/, "2SZUAFVPNF");
test_map(false, "0FYMP");
test_map(-805, -859);
test_map(null, Infinity);
test_map(1.6012215938773001e+308, "8THH16SD");
test_map("62E3IP", true);
test_map(7.486513086561139e+307, /yes.*day/);
test_map(false, "N8R");
test_map(NaN, "TECNM");
test_map(-683, false);
test_map(/yes[^]*day/, 6.569962536286502e+307);
test_map("0RN", /yes.*day/);
test_map(/ab+c/, "SH7RO8YVZ");
test_map(/ab+c/, 5.387510864799175e+307);
test_map(1.3038466262454105e+308, "CLUO2Q");
test_map(true, /(\w+)\s(\w+)/);
test_map(7.85544993262604e+307, true);
test_map(false, "633NEWTR3J");
test_map(-3, -939);
test_map(-383, /foo/g);
test_map(/[\u0400-\u04FF]+/g, false);
test_map(Infinity, NaN);
test_map("TPIP", -535);
test_map("UYIZ", /[\u0400-\u04FF]+/g);
test_map(1.6272926167662177e+308, -0);
test_map(false, /\r\n|\r|\n/);
test_map(true, null);
test_map(1.0705959467932472e+307, "4LFY");
test_map(true, /ab+c/);
test_map(-353, false);
test_map(+0, -139);
test_map(-637, /yes.*day/);
test_map(-125, -115);
test_map(false, -753);
test_map("MGT", -289);
test_map("V29GX9HMK", /foo/g);
test_map(Infinity, 9.626207231708842e+307);
test_map(true, 8.109103055575249e+305);
test_map(/(\w+)\s(\w+)/, NaN);
test_map(NaN, -375);
test_map(1.3441511497950843e+308, true);
test_map(-513, false);
test_map(-0, -31);
test_map("OXU9XXVG", true);
test_map("MIXI64S", "PC9L");
test_map("D0NHBNX07", -919);
test_map(/[\u0400-\u04FF]+/g, Infinity);
test_map("3G75K8YD5R", true);
test_map(-189, false);
test_map(+0, -815);
test_map(4.556209895189316e+307, undefined);
test_map(/\r\n|\r|\n/, true);
test_map("RRU8", 2.315792661239406e+307);
test_map(-497, true);
test_map(false, -97);
test_map(true, 8.312108590233255e+307);
test_map(-851, /foo/g);
test_map(true, -21);
test_map(false, 1.2863011638195866e+308);
test_map(false, /(\w+)\s(\w+)/);
test_map("RGSWJJ5", /\r\n|\r|\n/);
test_map(/(\w+)\s(\w+)/, /[\u0400-\u04FF]+/g);
test_map(true, 5.624307885777109e+307);
test_map(6.131008394398847e+307, +0);
test_map(/\r\n|\r|\n/, -321);
test_map(/(\w+)\s(\w+)/, undefined);
test_map("6FZONRO", NaN);
test_map(-197, 1.4633508858662485e+308);
test_map(/yes[^]*day/, false);
test_map(/foo/g, 8.726207279583986e+306);
test_map(-705, 4.640734772638591e+307);
test_map(1.8240146473266393e+307, /[^.]+/);
test_map(-833, 1.7579361205693288e+307);
test_map(6.910507094333647e+306, 1.255132436349257e+308);
test_map(true, 1.0047742464183362e+308);
test_map(false, -37);
test_map("EQ7PXCP", undefined);
test_map(-19, "HJJ8TYR6");
test_map(null, 3.8130072414534484e+307);
test_map("U3V6MXJ3Y2", NaN);
test_map(8.205291485345955e+307, /foo/g);
test_map(+0, "X7GCIP");
test_map(1.44521904082902e+308, -925);
test_map("OARJZIUE", "BHP");
test_map(9.344861329812291e+307, 1.302106431565844e+308);
test_map(3.59717723302745e+307, -911);
test_map(-339, 5.392423154871748e+307);
test_map(true, -113);
test_map(-701, false);
test_map("7VDMQ", -0);
test_map(true, "7EQ8ZHF");
test_map(undefined, NaN);
test_map(/[\u0400-\u04FF]+/g, /(\w+)\s(\w+)/);
test_map(1.4405641037788662e+308, -829);
test_map(-653, -997);
test_map(+0, -209);
test_map(/[^.]+/, 3.6328437334250294e+307);
test_map("B9THMM4O", /(\w+)\s(\w+)/);
test_map(undefined, -0);
test_map(-0, true);
test_map(/yes.*day/, "9IML");
test_map(/yes[^]*day/, 1.3066686956487793e+308);
test_map("RE3Q32N8H", -753);
test_map(/[^.]+/, Infinity);
test_map(-0, -945);
test_map("SCUICDMN6", -985);
test_map(undefined, Infinity);
test_map(-85, -371);
test_map(-719, 1.1716930083905032e+308);
test_map(true, 1.49793246364067e+308);
test_map("D010GP71X", "RTWOI");
test_map(null, -833);
test_map(-529, false);
test_map(/yes.*day/, -633);
test_map("XI9B", -771);
test_map(-403, -819);
test_map(/yes.*day/, false);
test_map(false, 1.5213808362093738e+308);
test_map(-357, true);
test_map(true, 1.797267172412343e+308);
test_map("E0PQE4X", "40V");
test_map(-727, /foo/g);
test_map(true, -147);
test_map(/\r\n|\r|\n/, undefined);
test_map(1.0131716519864155e+308, -675);
test_map(false, -953);
test_map(NaN, Infinity);
test_map(NaN, undefined);
test_map(undefined, null);
test_map(undefined, 9.875949400393004e+307);
test_map(true, 1.5790046160694004e+308);
test_map(-0, null);
test_map(-563, "4ZYG");
test_map(1.6536667794714744e+308, -561);
test_map(-711, /\r\n|\r|\n/);
test_map(-0, -573);
test_map(/\r\n|\r|\n/, /yes[^]*day/);
test_map(false, "ERM");
test_map(/[^.]+/, undefined);
test_map(-881, /yes.*day/);
test_map(-597, 1.2619523208474787e+308);
test_map("JFWVX961N3", false);
test_map(/(\w+)\s(\w+)/, /[^.]+/);
test_map("9Q2T6PW3MS", /yes[^]*day/);
test_map(/yes[^]*day/, NaN);
test_map("4AM22GY2J", -535);
test_map(false, false);
test_map(-547, undefined);
test_map(undefined, false);
test_map("EOS8", false);
test_map(Infinity, 1.3035931283729359e+308);
test_map(-99, /[\u0400-\u04FF]+/g);
test_map("HDTO2X", /foo/g);
test_map(1.6906762755545088e+308, "UE3");
test_map(/[\u0400-\u04FF]+/g, -495);
test_map(+0, null);
test_map(-937, false);
test_map(-583, true);
test_map(true, 1.221177620251863e+308);
test_map(-19, 1.3211085964347023e+308);
test_map("2UOXTKO", "O7K862D79D");
test_map(NaN, -139);
test_map(1.557593157994794e+308, 1.341278977536403e+308);
test_map(9.205717829856018e+307, NaN);
test_map("6JZROBF242", true);
test_map(-889, /foo/g);
test_map(4.468354357332659e+307, false);
test_map(/ab+c/, /\r\n|\r|\n/);
test_map(7.877020055967673e+306, -439);
test_map(/yes.*day/, -431);
test_map(-309, false);
test_map(-0, false);
test_map(-0, /[^.]+/);
test_map(-0, -0);
test_map(NaN, "ZWC2OA");
test_map(1.474646323867601e+308, Infinity);
test_map(-83, "TFT8TKCYA");
test_map(/(\w+)\s(\w+)/, 1.228059750999626e+308);
test_map(+0, -55);
test_map(-0, -757);
test_map(-917, true);
test_map(undefined, "0W4KDZ3W");
test_map(/[\u0400-\u04FF]+/g, 1.5790046160694004e+308);
test_map(-947, 5.576312008420651e+307);
test_map(+0, "SE2Y563C25");
test_map(-0, -583);
test_map(true, "9BB");
test_map(8.264318562832184e+307, false);
test_map(-319, "OUG9F3R9T");
test_map("6UE", -167);
test_map("M2OUAR", false);
test_map(5.992507082071722e+307, -755);
test_map(Infinity, 8.664385193771147e+307);
test_map(Infinity, -571);
test_map("75QNE2NVH", -0);
test_map(false, "8N7CMZ");
test_map(-0, 5.834498142531989e+307);
test_map(-979, false);
test_map(1.618920040033712e+308, 1.4769269751162955e+308);
test_map(Infinity, 9.417374577428894e+307);
test_map(9.536208333751742e+307, /[\u0400-\u04FF]+/g);
test_map(true, +0);
test_map("504E5TV", +0);
test_map(-79, /(\w+)\s(\w+)/);
test_map(5.033596183607765e+307, 1.056277106094983e+308);
test_map(-0, 1.3949168291912283e+308);
test_map(5.00520491236528e+307, 1.5592600564336692e+308);
test_map(-0, "W11");
test_map(1.089874364335022e+308, -423);
test_map(1.0143602383794285e+308, true);
test_map("7YIYAYLM5S", -497);
test_map(/yes[^]*day/, -437);
test_map("EDX81EU", "OK99");
test_map(true, -167);
test_map(true, -733);
test_map(null, "9JE9");
test_map(-611, "Q3FR686JL9");
test_map(-259, /yes[^]*day/);
test_map("4Q58N", /yes.*day/);
test_map("4S5ZFJV7T", -741);
test_map(/ab+c/, "HCS0T0");
test_map(undefined, +0);
test_map("C3RZ4IPWG", /yes.*day/);
test_map(-299, -197);
test_map(/foo/g, -391);
test_map(NaN, -997);
test_map("F5WCCF", "F3DV");
test_map(true, "9MR");
test_map(/foo/g, "RI73P");
test_map(1.3221058827291535e+308, 9.604327207833948e+307);
test_map(true, -0);
test_map("GKE6V56K1", null);
test_map("MIPR0Z8B", /[\u0400-\u04FF]+/g);
test_map(-247, Infinity);
test_map(NaN, "Y1U4K4FSK");
test_map(1.729193795179808e+308, /[^.]+/);
test_map("FKCO2ZNA", -0);
test_map("LCX9H9KJT", /ab+c/);
test_map("ARJE3", "EMLHB");
test_map(true, -551);
test_map(9.148792455385873e+307, false);
test_map(Infinity, 8.618061585475092e+307);
test_map(true, -685);
test_map("RFYVGG", 1.0228189747224354e+308);
test_map(-0, /yes[^]*day/);
test_map(1.2520527085251986e+308, 1.3536406357735994e+308);
test_map(-901, "QK9D");
test_map("B8PAKPTG6", /foo/g);
test_map(/ab+c/, /[^.]+/);
test_map(1.036449584454645e+308, "T8WIYC6R");
test_map(true, -381);
test_map(-337, undefined);
test_map(-301, -0);
test_map(3.0264059661034823e+307, -947);
test_map("M98Y", +0);
test_map(1.015912947649369e+308, "ENHFVFWC");
test_map("UA8JR", false);
test_map(undefined, -487);
test_map(false, -229);
test_map("HJD", 1.7872351419943781e+308);
test_map(/[\u0400-\u04FF]+/g, -933);
test_map(1.7570196364563607e+308, /yes[^]*day/);
test_map(true, 3.813938093172594e+307);
test_map(9.19971943380616e+307, 1.073165830746496e+308);
test_map(-951, true);
test_map(true, -127);
test_map(Infinity, -457);
test_map(-365, null);
test_map(4.7516550766032e+307, undefined);
test_map(1.025773459739422e+308, "IRW");
test_map(/ab+c/, -791);
test_map(/yes.*day/, 1.353907605106864e+307);
test_map(1.7175047592172083e+308, undefined);
test_map(2.922925241611057e+307, -941);
test_map(null, 3.048181014709575e+307);
test_map(-901, +0);
test_map(-467, false);
test_map(-829, /[^.]+/);
test_map(Infinity, /[\u0400-\u04FF]+/g);
test_map(/ab+c/, 1.307239053093346e+308);
test_map("YX6I", 1.3342955007793497e+308);
test_map(+0, /[\u0400-\u04FF]+/g);
test_map(-817, true);
test_map(1.2215025562344865e+308, false);
test_map(/ab+c/, 9.042466149230235e+307);
test_map(2.3994716404284464e+307, "572SC4YR");
test_map(7.171811734718536e+307, /foo/g);
test_map(9.39510843994035e+307, 5.012660610724548e+307);
test_map(-617, -639);
test_map(-699, /(\w+)\s(\w+)/);
test_map(-557, true);
test_map(-513, 6.268975580946656e+306);
test_map(true, "ECGBY");
test_map(-481, false);
test_map(-197, 1.3015465635475873e+308);
test_map("L1946GZPCF", -235);
test_map(false, -937);
test_map("17WOFGKQI", Infinity);
test_map(/ab+c/, /yes[^]*day/);
test_map(/[\u0400-\u04FF]+/g, "CUBBHG");
test_map(/[^.]+/, "GKL");
test_map(4.294704012730838e+306, +0);
test_map(-629, "1DU");
test_map(1.485120741255498e+308, -317);
test_map(5.068781695833023e+307, "ZA4");
test_map(2.1670935281506024e+307, -763);
test_map(-0, -767);
test_map(+0, "J42JUD");
test_map(/[^.]+/, /yes.*day/);
test_map(true, "1TDS");
test_map(+0, -283);
test_map(true, "X0D59V");
test_map(/(\w+)\s(\w+)/, "8XHXNR");
test_map(/foo/g, -563);
test_map(-53, 5.197544023606521e+306);
test_map(-337, "Z058PKTW");
test_map(3.0648761924208495e+306, "3VK43O1ND2");
test_map(undefined, 1.4365051972923562e+307);
test_map(3.948977991920566e+307, -667);
test_map(true, "5Y3RYW");
test_map(2.272358941884881e+307, undefined);
test_map(7.691297222110313e+307, 7.464885962084527e+307);
test_map(1.0444062912342077e+308, "F9F");
test_map(-901, -31);
test_map(-779, true);
test_map(-21, /ab+c/);
test_map(/[\u0400-\u04FF]+/g, -77);
test_map(/\r\n|\r|\n/, 4.1681805711925593e+307);
test_map(1.4978134958798913e+308, +0);
test_map(-267, 6.5603444153052e+307);
test_map(+0, undefined);
test_map(Infinity, 1.6612001322061344e+308);
test_map("NRIUUW", "9LQ");
test_map(/foo/g, +0);
test_map(1.4016610852950925e+308, true);
test_map("0ZFVZFD", /yes[^]*day/);
test_map(/yes[^]*day/, "H2I");
test_map(4.9353489742876467e+306, false);
test_map(-0, /(\w+)\s(\w+)/);
test_map("WGTV3D23", /(\w+)\s(\w+)/);
test_map(false, 1.1681141109780304e+308);
test_map(5.180863378897824e+307, "JXJT8PW");
test_map("MWL6OZT", /\r\n|\r|\n/);
test_map(-445, "N7YPGP1");
test_map(7.99259505158253e+307, /[^.]+/);
test_map(-417, -525);
test_map("LNR527ZF", -0);
test_map(null, 7.64339268852573e+307);
test_map(1.2674657873626386e+308, true);
test_map(Infinity, +0);
test_map(-243, undefined);
test_map(Infinity, 1.2183422697137367e+308);
test_map(/[^.]+/, -955);
test_map(-739, "NY0O");
test_map(6.49511270952765e+307, false);
test_map("VY6ZR41J", false);
test_map(-727, "MKDP1");
test_map(6.822156631122619e+307, -51);
test_map(1.3372894197752093e+308, /[^.]+/);
test_map(/ab+c/, "GWO1");
test_map(Infinity, -731);
test_map(Infinity, "YYZA23");
test_map("TQUZ0O", "7EU8");
test_map("IYXX6NJO", null);
test_map(-0, "SIPCSWXKP");
test_map(1.4749497748536793e+308, 1.3041656611268241e+308);
test_map(-0, /\r\n|\r|\n/);
test_map(1.245774685194095e+307, "B22");
test_map("HCLRZU", undefined);
test_map(true, /[\u0400-\u04FF]+/g);
test_map(null, 3.852377158225983e+307);
test_map(/[\u0400-\u04FF]+/g, true);
test_map(/ab+c/, 1.0110591304499644e+308);
test_map(+0, /\r\n|\r|\n/);
test_map(/foo/g, 1.7775976843946432e+308);
test_map("CXF9GHE", true);
test_map(9.080705686663322e+307, false);
test_map(-41, true);
test_map(true, "C6L6ZX1");
test_map(1.7533447912044962e+308, 9.164745351995064e+307);
test_map(/yes[^]*day/, /\r\n|\r|\n/);
test_map(1.698769571151795e+308, 1.6597199101764074e+308);
test_map("V034PQ", false);
test_map(1.1544189610177057e+308, +0);
test_map(-393, /[\u0400-\u04FF]+/g);
test_map(1.2279979144652398e+308, 1.4613114207608884e+308);
test_map(/yes.*day/, 4.905639184455532e+307);
test_map("YCI", /[\u0400-\u04FF]+/g);
test_map(/\r\n|\r|\n/, -461);
test_map(Infinity, -29);
test_map(-439, false);
test_map(/ab+c/, -0);
test_map("CM0", NaN);
test_map(7.207674863183227e+307, "4R0XM");
test_map("8VOZZ", null);
test_map(false, -105);
test_map(-0, 8.622888198436616e+307);
test_map("3XX", /yes[^]*day/);
test_map(+0, "AOZCO");
test_map(true, -777);
test_map("CFM8KWMHD", 4.3268163648252003e+307);
test_map(undefined, -947);
test_map(-397, null);
test_map(+0, "DB9WUUB");
test_map(9.422383399025814e+307, "FQI5PD");
test_map(/[^.]+/, "86IVE");
test_map(/yes[^]*day/, 5.145655290585321e+307);
test_map(-583, -603);
test_map(6.478743787158249e+307, true);
test_map(-237, /yes[^]*day/);
test_map(-561, /(\w+)\s(\w+)/);
test_map(1.3811086339842992e+308, 3.56928189074372e+307);
test_map(-0, 7.094725793322315e+307);
test_map("D30JBV", false);
test_map(false, -213);
test_map(/[\u0400-\u04FF]+/g, 8.3242810859968e+307);
test_map(1.2665331575896353e+308, true);
test_map(-749, Infinity);
test_map(/yes.*day/, /(\w+)\s(\w+)/);
test_map(/[\u0400-\u04FF]+/g, 3.923836753626614e+307);
test_map("DS6", -0);
test_map(-645, 4.912963685401845e+307);
test_map(9.080180488597713e+307, false);
test_map(undefined, -993);
test_map(/foo/g, 1.2712340300409462e+308);
test_map(/foo/g, /yes[^]*day/);
test_map(8.60561139855022e+306, -559);
test_map(4.041161566990521e+307, false);
test_map("9QLFQFTY", true);
test_map(false, 9.518455200202836e+307);
test_map(-261, false);
test_map(1.1477113467996229e+308, true);
test_map(7.314101992242575e+307, true);
test_map(3.265712380355359e+307, NaN);
test_map("C3RZ4IPWG", Infinity);
test_map(undefined, "6KQOO4");
test_map(1.7196322815566974e+308, true);
test_map(9.553377663175636e+307, NaN);
test_map(/ab+c/, /yes.*day/);
test_map("CHFLUKH", /[^.]+/);
test_map(/[\u0400-\u04FF]+/g, 1.0017815074743998e+308);
test_map(null, "7EZ080S");
test_map(Infinity, "22FT637");
test_map(1.0251012556915256e+308, 7.367173764919375e+307);
test_map(938, /(\w+)\s(\w+)/);
test_map(true, undefined);
test_map("V8V", /foo/g);
test_map(Infinity, "WIZZ4M");
test_map(-661, 8.206748551841232e+307);
test_map(+0, "0LN");
test_map(-807, /\r\n|\r|\n/);
test_map("NOCN", -819);
test_map(-673, -0);
test_map("NSX79QCU2N", true);
test_map(-823, 5.109897123734124e+307);
test_map("N4QAGO", undefined);
test_map(1.4284644947988852e+308, false);
test_map("8GB8", "PLZA");
test_map(null, -803);
test_map("5EZR", false);
test_map("G5XR", "K816SR2KJ");
test_map(/[\u0400-\u04FF]+/g, 5.820532214971844e+307);
test_map(3.618390743721353e+307, false);
test_map(NaN, -0);
test_map(/foo/g, false);
test_map("HFP1AMI", +0);
test_map(-637, false);
test_map(9.192933050076856e+307, -833);
test_map("FUMZ20S", -791);
test_map(/yes.*day/, null);
test_map(4.3346889827909053e+307, false);
test_map(false, "FOZE");
test_map(-811, "DSZY886");
test_map(/[\u0400-\u04FF]+/g, -741);
test_map(Infinity, Infinity);
test_map(Infinity, /\r\n|\r|\n/);
test_map(null, "PE9W");
test_map(-995, false);
test_map("N7C", -325);
test_map(-231, 1.4773507773627647e+308);
test_map(null, "GYV");
test_map(+0, "Z6GPXPG");
test_map(true, 1.1771836560362231e+308);
test_map(undefined, /foo/g);
test_map(7.649493479949892e+307, /ab+c/);
test_map(1.3498827698876251e+308, NaN);
test_map(-787, /\r\n|\r|\n/);
test_map(-471, 6.332331407167144e+307);
test_map(NaN, 1.3731103024294964e+308);
test_map("T1O6S09R4S", Infinity);
test_map(/ab+c/, undefined);
test_map(-923, true);
test_map(/foo/g, -651);
test_map(-451, undefined);
test_map(9.883995771021106e+307, NaN);
test_map(Infinity, 1.7064490596997735e+308);
test_map(-0, 9.30169107738624e+307);
test_map(/[\u0400-\u04FF]+/g, 1.7903313530353666e+308);
test_map(true, 1.1429756868160206e+308);
test_map(true, 1.3830994451744296e+308);
test_map(false, 2.0613395511204595e+307);
test_map(1.7495912809924368e+308, 9.410755014050219e+307);
test_map("L1YZ", false);
test_map(-121, /[\u0400-\u04FF]+/g);
test_map(8.452472348595831e+307, 4.908003102177983e+306);
test_map(1.0132580501204108e+308, "OIXG97");
test_map(/yes.*day/, -291);
test_map(1.3883548021193197e+308, /foo/g);
test_map(/\r\n|\r|\n/, 2.559650360889028e+307);
test_map(-873, "UIH53J");
test_map(-353, /ab+c/);
test_map(6.92655363631243e+307, undefined);
test_map(-423, "1I2LQ3");
test_map("4TYQ6", true);
test_map(1.5527302674925714e+308, "F3LCLO35");
test_map(-829, NaN);
test_map(-25, true);
test_map(1.3334925268970422e+308, "OJ63");
test_map(-171, /[\u0400-\u04FF]+/g);
test_map(-121, /yes.*day/);
test_map(NaN, /foo/g);
test_map(-645, /yes.*day/);
test_map("VUF9ST4TYU", 5.497554079602217e+307);
test_map(/[^.]+/, 7.22756424719429e+307);
test_map(8.647695736722649e+307, -331);
test_map(-915, /ab+c/);
test_map(true, -871);
test_map(/[^.]+/, 3.279208298451437e+307);
test_map(1.0045652293068129e+308, undefined);
test_map(8.0824791798253e+307, true);
test_map(/[\u0400-\u04FF]+/g, 2.798130259566413e+307);
test_map(+0, /[^.]+/);
test_map(5.79572573921983e+306, 1.5215051318312285e+308);
test_map(null, 8.508379648189486e+307);
test_map("MWAZTOTWS", "YKIO2OA28K");
test_map(-839, "OWB");
test_map(/[\u0400-\u04FF]+/g, "0UGSURQOJ1");
test_map("WF2Z3PAC", 1.3496948240362499e+308);
test_map(+0, 3.366581396837521e+307);
test_map(-0, -571);
test_map(false, 1.5303281099982648e+308);
test_map("3UEA4", +0);
test_map(false, "IL6Z0BTHV");
test_map(Infinity, true);
test_map("K5UJE912", "R6S04");
test_map(true, 1.3961638500236747e+308);
test_map(true, 9.646047008184342e+307);
test_map(3.9693126558685615e+307, /yes[^]*day/);
test_map(false, -425);
test_map(undefined, "XF5XGF");
test_map(/[\u0400-\u04FF]+/g, /[\u0400-\u04FF]+/g);
test_map(9.048703668259273e+307, 1.341985561746723e+308);
test_map(true, "RI9ZNPWL");
test_map(+0, "FZDW");
test_map(2.337625091473375e+307, -191);
test_map(+0, "E1GVC764ZT");
test_map(/(\w+)\s(\w+)/, "J8K3S");
test_map("0COJ", /[\u0400-\u04FF]+/g);
test_map(-55, undefined);
test_map(-517, 9.489330644500223e+307);
test_map(null, -0);
test_map(4.3452485543406593e+307, 4.582992119326448e+307);
test_map(/yes[^]*day/, -465);
test_map(1.5030558236176419e+308, undefined);
test_map(3.5769835814292106e+307, "FJA0S9");
test_map(true, 284);
test_map(true, "E1MYRMNK");
test_map(1.2065304276324941e+308, Infinity);
test_map(false, -157);
test_map(5.021996653976316e+307, false);
test_map(+0, true);
test_map(1.7792037425164125e+308, -409);
test_map("ZQU3F", "NW6RB");
test_map(-947, true);
test_map(-263, "GU6FB6");
test_map(9.79438305598589e+307, -457);
test_map(-573, -445);
test_map(-809, "SVJ");
test_map(-643, true);
test_map(/(\w+)\s(\w+)/, -711);
test_map(9.434172272509496e+307, "SKIETUXH");
test_map("5WKQ16PR0", "KXP34SI");
test_map(null, "QN0U8RAF3T");
test_map(-417, "M6O");
test_map(-95, true);
test_map("DBQVKW501", false);
test_map(9.723451901200409e+307, -653);
test_map("Z4P", true);
test_map(undefined, 4.170132040479145e+306);
test_map(/foo/g, -787);
test_map(/(\w+)\s(\w+)/, 4.0082765567235767e+307);
test_map(-409, 2.561793252811294e+307);
test_map(-905, NaN);
test_map(+0, "HMBCKDT");
test_map(/yes.*day/, true);
test_map("BPH3R", 1.5968142711262958e+307);
test_map(/(\w+)\s(\w+)/, /ab+c/);
test_map("ZXF1", -311);
test_map(null, 1.4676427634121496e+308);
test_map(/ab+c/, -553);
test_map(1.4207693256477923e+308, -277);
test_map(-827, false);
test_map(-267, true);
test_map(/\r\n|\r|\n/, Infinity);
test_map("2VEWRXW", false);
test_map("F5MS4P", /ab+c/);
test_map(6.443973932469934e+307, 968);
test_map(null, "9SFH3GY");
test_map("80V", true);
test_map(2.59001577565456e+307, -697);
test_map(4.512050689454708e+307, /ab+c/);
test_map(-19, 1.7525110949692384e+308);
test_map(6.23414785429861e+307, true);
test_map(null, -889);
test_map("3G7TSR9Z", true);
test_map(1.6728917393945269e+308, 4.859331912508083e+307);
test_map(1.1474630982868066e+308, "EZALRH1");
test_map(5.795645502812831e+307, Infinity);
test_map(-685, "MF951XH");
test_map(null, 1.3744024996128458e+308);
test_map("WVCFFDOTNR", true);
test_map(false, 1.463583014148994e+308);
test_map(Infinity, -403);
test_map("M6SEPP8", /foo/g);
test_map(/ab+c/, /(\w+)\s(\w+)/);
test_map("QR22KZ0", NaN);
test_map(-53, 6.439530374056228e+306);
test_map(7.058827093601687e+306, "LD0WNRJQ");
test_map(false, /[\u0400-\u04FF]+/g);
test_map("B322B", "A7TF");
test_map(-109, "IQT");
test_map("5D2T8FT", "PGN6");
test_map(null, null);
test_map(/yes[^]*day/, true);
test_map("OFW", +0);
test_map("5QWU91V6O", /yes[^]*day/);
test_map("PFIYJB1YNP", "JFMEVJKAQV");
test_map(null, NaN);
test_map(false, "TC4Q2");
test_map(-187, "942ZXVB57F");
test_map("EV9AWOLE", -437);
test_map(7.635755666297071e+307, -673);
test_map(Infinity, -165);
test_map("W9F4X", -539);
test_map(1.7348218024587935e+308, "6UIGU");
test_map(-347, "DMBWE52GFG");
test_map(true, "96HJ");
test_map(-553, 1.785644306414332e+308);
test_map("S1KZK0WZ", "6ENUQSXIN4");
test_map(1.1153603776026731e+308, /\r\n|\r|\n/);
test_map(/ab+c/, 1.0709116099316697e+308);
test_map(3.491860806460884e+306, "S06NEWB9F");
test_map(-635, /[^.]+/);
test_map(+0, 1.4362576180993493e+308);
test_map(-561, -0);
test_map(false, -81);
test_map(1.1716056388512978e+308, /\r\n|\r|\n/);
test_map(-0, 1.5057706387716943e+308);
test_map(undefined, "QYAB1IDA");
test_map(false, -125);
test_map("EZE878R76P", "GPA");
test_map(-987, 1.553256400478963e+307);
test_map("YYT939TW7", "DGCFR0RP1X");
test_map(-459, /ab+c/);
test_map(-399, +0);
test_map(1.6747182010827471e+308, -341);
test_map("BHYMO3", 3.5603036734961214e+307);
test_map(-953, Infinity);
test_map(3.8662611613836015e+307, /[^.]+/);
test_map(/foo/g, /(\w+)\s(\w+)/);
test_map(-445, /[^.]+/);
test_map(/yes.*day/, /[\u0400-\u04FF]+/g);
test_map(false, -0);
test_map(/yes[^]*day/, "NZQ");
test_map("L2R", /foo/g);
test_map("UWEGM33L", -695);
test_map("AS94", -647);
test_map(/yes[^]*day/, 1.493642928529488e+307);
test_map(-15, 3.822854160014901e+307);
test_map(1.7142220328305116e+308, NaN);
test_map(/\r\n|\r|\n/, 3.247323440115297e+307);
test_map("7W89XS35QV", Infinity);
test_map(-179, null);
test_map(-21, +0);
test_map(1.66381534897445e+308, "TU8JG");
test_map(1.545696066363796e+308, false);
test_map(false, -853);
test_map(false, "G843R");
test_map(-321, /(\w+)\s(\w+)/);
test_map(6.201953551386444e+307, true);
test_map(-495, "JY3");
test_map(NaN, -149);
test_map(false, "P2C");
test_map(1.499263222601267e+308, -361);
test_map(-241, false);
test_map(NaN, "N7AOW30L1");
test_map(/foo/g, true);
test_map(true, 1.8430507099180242e+307);
test_map(-0, 1.6522155493075605e+308);
test_map(1.436026501149704e+308, 1.6027260209659784e+307);
test_map(/foo/g, -65);
test_map(-0, /yes.*day/);
test_map("FM6H301", -483);
test_map("VAA6J", 1.3838082844968328e+307);
test_map(+0, NaN);
test_map("24MQG", -949);
test_map(1.202723146144946e+308, /ab+c/);
test_map(1.14828318474193e+308, false);
test_map(+0, "F5O4XV9K");
test_map(0x1123, -785);
test_map("XLX5BIJPH", 3.112798186255187e+307);
test_map(-0, "C5TO");
test_map(/yes.*day/, "243825BWLT");
test_map(NaN, "760ZE7EY0U");
test_map(true, "DIT5TKVL");
test_map("ZCOFT", "MSSVKPZ8XS");
test_map(-0, "K1B");
test_map(-841, false);
test_map(-225, 9.227985203537864e+307);
test_map(1.1556451075471818e+308, 3.583969877580864e+306);
test_map("VKBNN", -199);
test_map(-667, "XV18Q9");
test_map(-311, undefined);
