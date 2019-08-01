/*
* This file is automatically generated by Swami
*
* 2019-08-01 15:57:50.472257
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
	var map = OrdinaryCreateFromConstructor(NewTarget, "%MapPrototype%", « [[MapData]] »);
	var adder = Get(map, "set");
	if (( IsCallable ( adder ) === false )){
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
	var iteratorRecord = GetIterator(iterable);
		console.log("OK Test")
}



/*TESTS GENERATED AUTOMATICALLY*/
test_map(true, 7.844677948803669e+307);
test_map(true, true);
test_map(4.844640865478296e+307, null);
test_map(/yes[^]*day/, -817);
test_map("YPI", null);
test_map(true, "YHXUWBVNWG");
test_map(true, "85TP7");
test_map(-469, /foo/g);
test_map(false, false);
test_map(-503, /ab+c/);
test_map(+0, 1.3996520251082497e+308);
test_map(false, 1.1832796818012305e+308);
test_map(1.2020898919583518e+308, 1.1941226169754797e+308);
test_map(-99, -809);
test_map(-0, true);
test_map(-0, 1.6101291955918503e+308);
test_map(/[\u0400-\u04FF]+/g, 1.1774348790784117e+307);
test_map(/\r\n|\r|\n/, -715);
test_map("HN8EJF3LTA", "Q49DS");
test_map(undefined, 1.7807508627362382e+308);
test_map(false, 8.375834727115738e+307);
test_map(1.3389210961113533e+308, "GPTB5");
test_map(NaN, -605);
test_map(/yes[^]*day/, "1AVNEH0");
test_map("CS7TCSMQ", null);
test_map(true, -535);
test_map("8T50J", 1.106491153360848e+308);
test_map("8HE3MCCH", /[\u0400-\u04FF]+/g);
test_map("X4X35O", 1.2591205656143107e+308);
test_map(true, 1.3553482443189453e+308);
test_map(NaN, "0DYIQ5E");
test_map(1.3741199617118296e+308, -627);
test_map(true, 1.5688447538661771e+308);
test_map("MGP5IPJ4KU", -829);
test_map(false, 9.217792110089832e+307);
test_map(1.6410357531164287e+308, false);
test_map("ZNBJJZEU", /yes.*day/);
test_map(false, true);
test_map(false, -663);
test_map(-291, "XPHQ5Q");
test_map(undefined, /(\w+)\s(\w+)/);
test_map(true, "2FJ8AY3S");
test_map(Infinity, +0);
test_map(false, Infinity);
test_map("22TSRSDOK", null);
test_map(null, false);
test_map("GSWN", null);
test_map(3.328793202472564e+307, -195);
test_map(6.651697252611864e+307, 630);
test_map(4.639867122902266e+307, /foo/g);
test_map("I0MO765", 1.791557631244892e+308);
test_map(null, -229);
test_map(-323, true);
test_map(false, 1.6677929687687598e+308);
test_map(NaN, "J2E0EH3Z");
test_map(/(\w+)\s(\w+)/, 1.4137277586804744e+308);
test_map(false, -83);
test_map(-245, /yes[^]*day/);
test_map(-77, NaN);
test_map(1.0494760943642017e+308, 1.018296074215432e+308);
test_map(/\r\n|\r|\n/, /[^.]+/);
test_map(/yes.*day/, -323);
test_map(-277, /[\u0400-\u04FF]+/g);
test_map(/ab+c/, 6.184140557707805e+307);
test_map(true, /[\u0400-\u04FF]+/g);
test_map("1DZ6X4O", 1.2125652178501981e+308);
test_map("YBX319VXZZ", /[\u0400-\u04FF]+/g);
test_map(/[^.]+/, false);
test_map(-121, /yes[^]*day/);
test_map(618, /yes.*day/);
test_map(-969, /foo/g);
test_map(/yes.*day/, /yes.*day/);
test_map(NaN, false);
test_map(1.5178445197424913e+308, 1.5676792751801662e+308);
test_map(undefined, /\r\n|\r|\n/);
test_map(1.5246877170558258e+308, -437);
test_map(Infinity, 8.879599601522281e+306);
test_map("UQ6KAWFUC", true);
test_map(null, /[\u0400-\u04FF]+/g);
test_map(1.7296212938790883e+308, true);
test_map(1.3920692366404024e+308, "UTQI1A");
test_map("VGDVBHHI1F", true);
test_map(/yes.*day/, "BOVZ2EU");
test_map("WZI7", -371);
test_map(-113, false);
test_map(1.2278625867810035e+308, /yes.*day/);
test_map(Infinity, true);
test_map(Infinity, undefined);
test_map(1.753837603434986e+308, /(\w+)\s(\w+)/);
test_map(5.340969555700511e+307, -901);
test_map("OYGBO2RG", /yes[^]*day/);
test_map(1.2857479555955301e+308, 1.3383823255377133e+308);
test_map("GRGWPEVT", Infinity);
test_map(/[^.]+/, 6.982706105443137e+307);
test_map(/foo/g, -687);
test_map(true, "ZDYL5F");
test_map(-587, "L3YXD9NPG");
test_map(/foo/g, "WGO");
test_map(1.0258508792500584e+308, Infinity);
test_map(null, -0);
test_map(1.0690366463190892e+308, "GK3");
test_map(-395, Infinity);
test_map(undefined, 1.5622926866268332e+308);
test_map(true, 7.122128299033954e+307);
test_map(NaN, -709);
test_map(true, 6.472949329499942e+307);
test_map(/yes.*day/, NaN);
test_map(/(\w+)\s(\w+)/, 4.788756707091764e+307);
test_map(/yes[^]*day/, /yes[^]*day/);
test_map(false, "9LFV2Q");
test_map("FUZ", true);
test_map(8.768021837813961e+307, null);
test_map("TOI", undefined);
test_map(-627, /[\u0400-\u04FF]+/g);
test_map(-0, 8.355544142669246e+307);
test_map(1.5956736804871926e+308, +0);
test_map(Infinity, "Q5U7EOLP");
test_map(/(\w+)\s(\w+)/, -173);
test_map("N7J", -519);
test_map(true, -451);
test_map(9.505795112913535e+307, /ab+c/);
test_map(1.092566146352685e+308, true);
test_map(-355, false);
test_map(9.110774630079816e+307, 2.488733736084741e+307);
test_map(/yes[^]*day/, null);
test_map("3SLJEX", Infinity);
test_map(5.238871984480704e+307, -901);
test_map(-213, "NW6");
test_map(+0, "WGR6EKI");
test_map(-719, /foo/g);
test_map("RY8", true);
test_map(1.0298696077866394e+308, -599);
test_map("9MO", -793);
test_map(true, /yes[^]*day/);
test_map(NaN, Infinity);
test_map(/[^.]+/, 4.542572831940306e+307);
test_map(NaN, 1.0363801714027997e+308);
test_map(undefined, 9.0527457908698e+307);
test_map("HST243IOR", "EUN05");
test_map(2.91773786710517e+307, "9F2QMA4");
test_map(-0, -0);
test_map("V199PW", 1.6745920704138316e+308);
test_map(/yes.*day/, -709);
test_map(3.4440464146531444e+307, "N0OLICPL");
test_map(7.973300230137476e+307, "MGUEZIT");
test_map(/[^.]+/, -817);
test_map(/\r\n|\r|\n/, -555);
test_map(true, -0);
test_map(-0, 1.3603785788737096e+308);
test_map(true, false);
test_map(8.637635945221799e+307, /yes[^]*day/);
test_map(1.3951008019716727e+308, /yes.*day/);
test_map(/yes[^]*day/, false);
test_map(9.375623005158324e+307, "KO2K");
test_map(-887, "MQZ005");
test_map(/foo/g, "AW0QQT6S");
test_map(undefined, false);
test_map(1.3504909586381944e+307, -771);
test_map(NaN, NaN);
test_map(1.7473893075490504e+308, 1.2112542242061267e+308);
test_map(7.678505746649127e+307, "CSXO6Q");
test_map(Infinity, NaN);
test_map(/yes[^]*day/, /(\w+)\s(\w+)/);
test_map(-357, null);
test_map(-269, -993);
test_map(1.4956002398276977e+308, +0);
test_map("JF6LOI", false);
test_map(-817, /(\w+)\s(\w+)/);
test_map(/yes.*day/, undefined);
test_map(true, +0);
test_map(1.3759710285005027e+308, NaN);
test_map("4NTDWIFKOH", 1.6117282736692763e+308);
test_map(/[\u0400-\u04FF]+/g, /foo/g);
test_map(/yes.*day/, true);
test_map(true, Infinity);
test_map(Infinity, 1.5953840816281226e+308);
test_map(1.7762313398758425e+308, /\r\n|\r|\n/);
test_map(-1, -259);
test_map(5.71637859637016e+307, /[\u0400-\u04FF]+/g);
test_map("XYTK4", /\r\n|\r|\n/);
test_map("1HYJMG", /\r\n|\r|\n/);
test_map(8.891267987809471e+307, false);
test_map(+0, Infinity);
test_map(-763, /ab+c/);
test_map(3.389222348586104e+307, /ab+c/);
test_map(7.251863892632511e+307, Infinity);
test_map(false, 1.6642818283873145e+308);
test_map(/\r\n|\r|\n/, /\r\n|\r|\n/);
test_map(NaN, true);
test_map(-353, "US6SF");
test_map(/foo/g, "Q3OKO6DT");
test_map("JS3", null);
test_map(undefined, "WMIO45WUCB");
test_map("RZIWDCQY", -883);
test_map(-445, -709);
test_map(-419, /ab+c/);
test_map("OVY4OQE", NaN);
test_map(-803, Infinity);
test_map(/[\u0400-\u04FF]+/g, 4.524453589456228e+305);
test_map(null, "P75S");
test_map(-45, 1.4536337032961283e+308);
test_map("GW1YJ2YW0E", true);
test_map("HJ6XI", /yes[^]*day/);
test_map(1.2444503502072118e+307, 4.2925009732383917e+307);
test_map("QNGOWZMH", NaN);
test_map(-833, "A9SC");
test_map(true, undefined);
test_map(/yes.*day/, /[\u0400-\u04FF]+/g);
test_map(3.5251006814028084e+307, "XOVVJK");
test_map(+0, -719);
test_map(Infinity, /\r\n|\r|\n/);
test_map(/foo/g, -161);
test_map("UEXTQ1SLU", undefined);
test_map(8.326486943899794e+307, /\r\n|\r|\n/);
test_map("9VOSR13Z2", -467);
test_map(true, 1.7761647863672004e+307);
test_map(9.172073698420918e+307, +0);
test_map(+0, "R94ENY2X");
test_map(/ab+c/, "IKV2UWW02G");
test_map(-841, false);
test_map(NaN, 2.903331671722777e+307);
test_map(/ab+c/, /ab+c/);
test_map(6.752440862795905e+307, 3.581970580718639e+307);
test_map("Z7XDLW8", 1.0212660922246353e+308);
test_map(/[\u0400-\u04FF]+/g, 1.4170928735537046e+308);
test_map(/[^.]+/, 1.4710082019059775e+308);
test_map("9IIZZ", 7.655325325772079e+307);
test_map(/[\u0400-\u04FF]+/g, Infinity);
test_map(-589, null);
test_map(9.033592684023482e+306, -141);
test_map(false, NaN);
test_map(-355, "VYG");
test_map(/[\u0400-\u04FF]+/g, "U2MKG63");
test_map(-913, /yes[^]*day/);
test_map(/(\w+)\s(\w+)/, "NBOT");
test_map(false, 1.7458570495149228e+308);
test_map("POY1AL", /ab+c/);
test_map(null, -553);
test_map(-963, /\r\n|\r|\n/);
test_map(true, -857);
test_map(undefined, 8.956438498929107e+307);
test_map(-111, 2.1096762660269968e+307);
test_map("7HX7HIH7", -377);
test_map("PULR", 1.2265933067527509e+308);
test_map(2.296173209526108e+307, true);
test_map("7IX29PJT", true);
test_map("8KK", /(\w+)\s(\w+)/);
test_map("77JN7", -335);
test_map(true, -327);
test_map(true, /\r\n|\r|\n/);
test_map(/(\w+)\s(\w+)/, "O72N3");
test_map("UJIYM8PY", 1.1773278474320968e+308);
test_map("RFYVGG", -221);
test_map(7.474502808034311e+307, false);
test_map(NaN, /[^.]+/);
test_map("D9OTT67", false);
test_map(-989, null);
test_map(true, /(\w+)\s(\w+)/);
test_map(false, +0);
test_map(/foo/g, false);
test_map(-757, /foo/g);
test_map(/(\w+)\s(\w+)/, "BBJKZ08KN");
test_map(-427, NaN);
test_map(-497, "T0BLUO9KZ");
test_map(1.1776885541869648e+307, undefined);
test_map(-3, 4.596232226855453e+307);
test_map(null, NaN);
test_map(1.1147822134565817e+308, "OYW03I");
test_map("GOWRH", Infinity);
test_map("QVZDCOP12V", null);
test_map(/ab+c/, false);
test_map("JGW9YM1", Infinity);
test_map(/(\w+)\s(\w+)/, /[^.]+/);
test_map(/yes[^]*day/, -615);
test_map(true, 1.0286360526705796e+308);
test_map(-383, true);
test_map(-679, -161);
test_map(1.1898760753812058e+308, Infinity);
test_map(-323, -427);
test_map("5ABE1TY", undefined);
test_map(1.0383415256216974e+308, -501);
test_map("CMJQ", 1.13413087095117e+308);
test_map(/foo/g, 7.161651150185168e+307);
test_map(-0, 8.174811223912609e+306);
test_map(-971, -569);
test_map(/[\u0400-\u04FF]+/g, false);
test_map(Infinity, "WBSDMH");
test_map(-905, 1.2393308889707698e+308);
test_map("9A4OG2", /(\w+)\s(\w+)/);
test_map(undefined, 2.1504261951135104e+307);
test_map(undefined, "SCT1");
test_map("RE83ZU", "K1FV");
test_map(null, -243);
test_map("L0OC3", false);
test_map("Y543", false);
test_map(/[\u0400-\u04FF]+/g, null);
test_map(1.1081496649998233e+308, undefined);
test_map(null, 1.3964505597130718e+308);
test_map(-727, -189);
test_map(7.541211107423608e+307, -741);
test_map(5.885102709661522e+307, "XS27I8");
test_map(1.7292592861985943e+308, Infinity);
test_map("S5V", NaN);
test_map("MMT4KF", 1.176755543724317e+307);
test_map("BOTFTR2SJ", 4.823513054503238e+307);
test_map(null, /(\w+)\s(\w+)/);
test_map(/foo/g, "39WEVI3QRI");
test_map(1.7753338503826572e+308, "M5UU");
test_map("BD3", 5.013858395400387e+307);
test_map(undefined, "XEHO2AF2");
test_map(5.759034152047557e+307, /[\u0400-\u04FF]+/g);
test_map(undefined, -333);
test_map(748, undefined);
test_map(Infinity, "MVAJU");
test_map(undefined, "OG6");
test_map("7E67", "TLY2G");
test_map(false, 3.252954070884715e+307);
test_map(1.0029465425722182e+308, +0);
test_map(8.8878896881844e+307, false);
test_map(-783, 5.7946236459422e+307);
test_map("EPXQKJP", /yes.*day/);
test_map("OLT9MAGG", /[\u0400-\u04FF]+/g);
test_map(NaN, /yes[^]*day/);
test_map("GPI354Q0SM", false);
test_map(+0, -325);
test_map(-897, -93);
test_map(true, -853);
test_map(/ab+c/, "BWOEWMYNHJ");
test_map(1.0830790470350616e+308, -189);
test_map(NaN, undefined);
test_map(1.1670697462026638e+308, -807);
test_map(NaN, +0);
test_map(null, /foo/g);
test_map(-129, "QZSF21PX");
test_map(/yes.*day/, 1.388335411629461e+308);
test_map(false, 5.733021592190096e+307);
test_map(/[\u0400-\u04FF]+/g, -149);
test_map(false, /yes.*day/);
test_map("IHU9Z527", -111);
test_map(true, -913);
test_map(null, "9UW");
test_map(undefined, -0);
test_map(null, "PAQDSUREYT");
test_map(/yes[^]*day/, "S80SW5HN0");
test_map(-109, 9.489267624761051e+305);
test_map(-597, 5.403616511508922e+307);
test_map(/yes[^]*day/, NaN);
test_map("JFF5HLL", undefined);
test_map(1.341610193626694e+308, true);
test_map(+0, true);
test_map(/[\u0400-\u04FF]+/g, +0);
test_map(7.872844746362463e+307, 7.609104212499514e+307);
test_map("T8ZJGRVZ9G", true);
test_map(NaN, -461);
test_map(-399, "7MFNB");
test_map(false, -101);
test_map(/[^.]+/, true);
test_map(1.1695109284577358e+307, true);
test_map("LTWKI43TGQ", 4.731921990860887e+307);
test_map(-661, /(\w+)\s(\w+)/);
test_map(/yes[^]*day/, "3TAAWUBCW");
test_map("GO0LE", /[^.]+/);
test_map(undefined, true);
test_map(-863, false);
test_map(/[\u0400-\u04FF]+/g, 1.4176606640715166e+308);
test_map("R10K2OU", -475);
test_map(/ab+c/, -883);
test_map(8.474558177872323e+307, -385);
test_map("AHXV65H5WP", -5);
test_map(1.162249027415866e+306, -519);
test_map("WQTF4XC16", /foo/g);
test_map(-897, null);
test_map(-341, 7.408251985158186e+307);
test_map(/yes[^]*day/, -241);
test_map(9.90266540725447e+307, 1.3870991371783999e+308);
test_map(1.644895027651844e+308, 1.1856879535450149e+308);
test_map(/\r\n|\r|\n/, null);
test_map(false, "GB1GXPCU4M");
test_map(-235, 4.1230808106019813e+307);
test_map("SFSXOPK2O", "UUS4");
test_map(true, /ab+c/);
test_map(undefined, -493);
test_map(NaN, /(\w+)\s(\w+)/);
test_map(/\r\n|\r|\n/, /foo/g);
test_map(2.1618866186975915e+307, -579);
test_map(/yes[^]*day/, "SHLF1GXK");
test_map(-573, -227);
test_map(/ab+c/, undefined);
test_map(6.760069375554406e+307, /ab+c/);
test_map(-479, null);
test_map(false, 1.7356878728875626e+308);
test_map(2.5966674816505514e+307, null);
test_map(-857, /[\u0400-\u04FF]+/g);
test_map(/[\u0400-\u04FF]+/g, -947);
test_map(+0, "QDM4HEHH4");
test_map(-0, -815);
test_map(/foo/g, 1.6074740744433052e+308);
test_map(1.3153285264775735e+308, NaN);
test_map(-547, -323);
test_map(-59, 4.413312208332204e+307);
test_map("86XDXRW1", false);
test_map(Infinity, /ab+c/);
test_map(4.326381832631256e+305, "ZB2QPRV1T");
test_map(1.1272442915929438e+308, true);
test_map(-0, null);
test_map(/foo/g, "HQE1UZ7IF");
test_map(1.0691068763793894e+308, "I5N");
test_map(true, "J89");
test_map("WFSN6IX0", -875);
test_map(Infinity, "39GVD0");
test_map("YSGAQ", /ab+c/);
test_map(-815, 4.4709227450315733e+307);
test_map(null, +0);
test_map(/[\u0400-\u04FF]+/g, undefined);
test_map("8ZQNZ", false);
test_map(/\r\n|\r|\n/, Infinity);
test_map(-0, -761);
test_map(6.447441518182216e+307, "1YKSM4MR");
test_map("LY2W", false);
test_map(-211, "8FZQQ0");
test_map(1.6033168566972426e+308, -959);
test_map("K2X", false);
test_map(null, -387);
test_map(-577, /yes[^]*day/);
test_map(-0, "46Q");
test_map(/\r\n|\r|\n/, true);
test_map(-83, 9.596028545540674e+307);
test_map("ELUKL5L7", Infinity);
test_map(3.9833362970544697e+307, "EDNNXOP9PO");
test_map(1.776632552841825e+308, "HNW7N9A");
test_map(-833, -743);
test_map("GZG", /yes[^]*day/);
test_map(/\r\n|\r|\n/, false);
test_map(/[\u0400-\u04FF]+/g, NaN);
test_map(-353, -283);
test_map(/foo/g, +0);
test_map("KQU4Y7EBS", /[^.]+/);
test_map("V3I", /foo/g);
test_map("KF5LK", "0JK");
test_map("JUMJP2675U", -111);
test_map(/ab+c/, 6.922431358511464e+307);
test_map(true, null);
test_map("SDDJ9F", /ab+c/);
test_map("SYLKN2", 9.588792011073831e+307);
test_map(false, undefined);
test_map(7.85456470367641e+307, true);
test_map(-723, 5.521497105194202e+307);
test_map(null, /yes.*day/);
test_map(/foo/g, -667);
test_map(null, -773);
test_map(-13, 1.6580338570907757e+307);
test_map(false, 1.3796613996551736e+308);
test_map(NaN, 3.217278543179733e+307);
test_map(undefined, 7.210849909813324e+307);
test_map(-385, 7.316555520671074e+307);
test_map(undefined, Infinity);
test_map(false, /foo/g);
test_map(/yes.*day/, "7GE");
test_map(Infinity, -101);
test_map("9JR89TYWW", undefined);
test_map("C1UPP", 9.231369806197622e+306);
test_map(/yes.*day/, "8R51TS");
test_map(-321, -991);
test_map("SN6QZQ", undefined);
test_map(4.0903767752872124e+307, -99);
test_map(false, -319);
test_map(-717, "AP0HB");
test_map(1.6554871601693231e+308, true);
test_map(/\r\n|\r|\n/, 3.649431854768563e+307);
test_map(1.7470693372245567e+308, 1.398008035271098e+308);
test_map("0OBN", true);
test_map(-0, /\r\n|\r|\n/);
test_map(/[\u0400-\u04FF]+/g, -523);
test_map(-121, 6.722040353411726e+307);
test_map(/\r\n|\r|\n/, "GCAAJVPAE");
test_map(-475, /[\u0400-\u04FF]+/g);
test_map(-701, "73VYH");
test_map(-567, 1.5584862976297718e+307);
test_map(-933, -467);
test_map(false, -703);
test_map(1.7520011560164854e+308, /[\u0400-\u04FF]+/g);
test_map(Infinity, -387);
test_map("6U4", 9.321552078928567e+307);
test_map(-421, "K91Y");
test_map(Infinity, "ISOL");
test_map(1.6220988739176326e+308, Infinity);
test_map(/yes.*day/, false);
test_map("88TA", -473);
test_map(7.0232464562436e+307, false);
test_map("6JU4W", 1.7155935144830154e+308);
test_map(/(\w+)\s(\w+)/, undefined);
test_map(9.733731335265467e+307, "BOMRFLM");
test_map(false, -161);
test_map(1.9751385913424963e+307, "2JK8");
test_map(5.612425647082122e+307, -311);
test_map(-533, -769);
test_map(/(\w+)\s(\w+)/, /\r\n|\r|\n/);
test_map(-255, true);
test_map(1.0084932465973668e+308, -263);
test_map(4.371400888570303e+307, -367);
test_map(/yes.*day/, "GRWWUTO");
test_map(true, -315);
test_map(-801, true);
test_map("W7LNILYZVW", -461);
test_map(-103, NaN);
test_map(true, "N2MYBZXUI");
test_map(undefined, 1.5868991696754134e+308);
test_map(1.1690650382174732e+308, "WX5RJ4Q48F");
test_map(4.880832891368761e+307, /ab+c/);
test_map("6DZVJ07", -815);
test_map(-623, true);
test_map(4.826169033643151e+307, /yes[^]*day/);
test_map("V7WM", 9.83984384205299e+307);
test_map("ZALRASROX", false);
test_map(true, 1.4569942451346584e+307);
test_map(/ab+c/, -467);
test_map(false, 8.761809847712145e+307);
test_map(1.3231862305332742e+308, Infinity);
test_map(-313, /\r\n|\r|\n/);
test_map(-67, -187);
test_map(5.204056665761445e+306, 1.7934471544519768e+308);
test_map(1.5457117001105405e+308, /\r\n|\r|\n/);
test_map(-39, -863);
test_map(-387, -269);
test_map(-471, null);
test_map("LCZ8A8I93", /(\w+)\s(\w+)/);
test_map(true, "51HV");
test_map(-0, /ab+c/);
test_map(-179, +0);
test_map(1.6436690833576737e+308, Infinity);
test_map(4.702136325042594e+307, Infinity);
test_map(-365, "5MHBMFD");
test_map(undefined, null);
test_map(true, 1.4371586391417146e+308);
test_map(false, "QLW486RP");
test_map("E8CUCX", "BLSDH");
test_map(/foo/g, /yes.*day/);
test_map(/ab+c/, "7H6CQZ2");
test_map(null, Infinity);
test_map(1.3740282523649258e+308, -331);
test_map("CQIJ802Z", "K0LB4X");
test_map(-287, /[\u0400-\u04FF]+/g);
test_map(/ab+c/, -127);
test_map(-577, -275);
test_map("V7ZU259", true);
test_map("PDEUF", 7.728680763896916e+307);
test_map(Infinity, Infinity);
test_map("KSCCA7VJR", "7W4AQLAF2");
test_map("HSGJL4B37", +0);
test_map(-411, null);
test_map(false, /(\w+)\s(\w+)/);
test_map(1.214701807164592e+308, "WCENR9ER");
test_map(/(\w+)\s(\w+)/, -119);
test_map(1.7431782676366706e+308, 2.8875276289376297e+307);
test_map("E6WM", "INJGYTYW9T");
test_map(null, 7.750253339865042e+307);
test_map(-45, /(\w+)\s(\w+)/);
test_map("HWYO5", /[^.]+/);
test_map(Infinity, -763);
test_map(false, 568);
test_map(-463, -0);
test_map(/foo/g, -669);
test_map(false, "6WYD");
test_map(-0, "CQFV");
test_map(-563, /yes[^]*day/);
test_map(-435, null);
test_map(+0, -0);
test_map(-803, null);
test_map(-781, "KPG");
test_map("UYTTV1YWTP", /[^.]+/);
test_map(false, -775);
test_map(-291, NaN);
test_map(/ab+c/, -819);
test_map(true, NaN);
test_map(true, "ZJ44W2ZG");
test_map(-3, true);
test_map("5U92YNKEE", "WWKUT7Y");
test_map("BPID1BG41S", /(\w+)\s(\w+)/);
test_map(/foo/g, "NO324OU");
test_map(false, 1.2250304405830261e+308);
test_map(1.6397034933977807e+308, 1.3906782459447278e+308);
test_map(-361, /(\w+)\s(\w+)/);
test_map(3.3091784934250047e+307, Infinity);
test_map(-603, /\r\n|\r|\n/);
test_map(-295, /\r\n|\r|\n/);
test_map(undefined, /yes[^]*day/);
test_map(NaN, "LHEV");
test_map(4.215400999810704e+307, /foo/g);
test_map(-233, 1.5350256792646826e+308);
test_map("7NPVA", -45);
test_map(false, 9.516188040348521e+307);
test_map("XX727EG6", 1.4713073289638078e+308);
test_map("WLEZIN79F", true);
test_map(-0, false);
test_map(false, -0xF1A7);
test_map("FBD4Z", true);
test_map(1.7551873043490286e+308, 1.5819969484183612e+308);
test_map("CG69R0W", /[^.]+/);
test_map(null, /yes[^]*day/);
test_map(/[^.]+/, /ab+c/);
test_map(/\r\n|\r|\n/, "XM5Y2");
test_map(+0, null);
test_map(true, /yes.*day/);
test_map(4.638728885542384e+307, null);
test_map(false, 2.2653264516937034e+307);
test_map(-577, 1.6340309362095233e+308);
test_map(undefined, /[\u0400-\u04FF]+/g);
test_map(/[\u0400-\u04FF]+/g, "TL112Y");
test_map(Infinity, 1.6635278205767188e+308);
test_map(-715, 2.413281751684986e+306);
test_map(-447, true);
test_map(true, 7.797931901715197e+306);
test_map("WEY295ZM", "7I7H8ZVH5A");
test_map(false, -735);
test_map(3.2070099341200633e+307, NaN);
test_map(-125, 3.586090356691286e+307);
test_map(/ab+c/, /yes[^]*day/);
test_map(NaN, -425);
test_map(NaN, "JAD6T");
test_map(-21, 1.6295503621776396e+308);
test_map(/foo/g, -11);
test_map("8DVXG69", "1L8Q0PCQGN");
test_map(-715, /foo/g);
test_map(1.0135239386127489e+307, -297);
test_map(true, -297);
test_map(/[^.]+/, /\r\n|\r|\n/);
test_map(true, "ZH3AU1S");
test_map("GQ9IOU5A", /[\u0400-\u04FF]+/g);
test_map(/ab+c/, true);
test_map("VN37Q5W", 6.951352568187775e+307);
test_map(-499, -589);
test_map(/yes[^]*day/, "V7OGYYEWAK");
test_map(/yes[^]*day/, /[^.]+/);
test_map(-0, /foo/g);
test_map(-791, "XW9N4Z");
test_map(false, 9.385271570631645e+307);
test_map(4.3542863423754943e+307, /yes[^]*day/);
test_map(1.6175902253763212e+308, "79A");
test_map("W6OD", "VBI3");
test_map(-641, /[^.]+/);
test_map(/yes.*day/, 1.3413180967997442e+308);
test_map(-211, /yes.*day/);
test_map(null, -951);
test_map(/[^.]+/, /yes.*day/);
test_map(/(\w+)\s(\w+)/, "ULKU");
test_map(false, 3.9850503404118554e+307);
test_map(/ab+c/, "S6GMDH");
test_map(null, null);
test_map(+0, "NPX3LJ02");
test_map("8Y7JMI", /foo/g);
test_map("AH0LYW8X", true);
test_map("LZHAHC4I", -145);
test_map(-345, NaN);
test_map("RURJZZU8", null);
test_map(false, -343);
test_map("439ZF0J3M", false);
test_map("CUECU", /[^.]+/);
test_map("GXZFV", -15);
test_map(/(\w+)\s(\w+)/, null);
test_map(-443, true);
test_map(5.650544877961437e+307, "GZ9DTN");
test_map(/yes.*day/, null);
test_map(false, "SBM0");
test_map(-389, false);
test_map(/[^.]+/, 1.5459600367251652e+308);
test_map(/yes.*day/, "ZWX0L1A");
test_map(-141, -655);
test_map(2.756383397897098e+307, -369);
test_map(null, "OZI");
test_map(+0, 1.7331678279427778e+308);
test_map("V2GQW0XT2", /foo/g);
test_map(/yes.*day/, -687);
test_map("YJRQWB", /[^.]+/);
test_map(-823, false);
test_map(1.5300843765494823e+307, -705);
test_map(-845, -243);
test_map("R99NCVF4", 1.4754224878407478e+308);
test_map(false, 1.141839558242296e+308);
test_map(/[^.]+/, 6.131066498256027e+307);
test_map(-437, /[\u0400-\u04FF]+/g);
test_map("9F0VPVVRF", true);
test_map(1.5534257844476871e+308, true);
test_map(-581, "UYLC92");
test_map(true, 1.470600651292817e+308);
test_map(-41, /yes[^]*day/);
test_map(false, /[^.]+/);
test_map(4.034115352176795e+307, 6.493541240932085e+307);
test_map("36W3", Infinity);
test_map("9KUHA1000E", 2.412900226297795e+307);
test_map(+0, /(\w+)\s(\w+)/);
test_map(/[^.]+/, -9);
test_map("TPHEOE93IV", "HRA10");
test_map(/yes[^]*day/, 1.8850231681406355e+307);
test_map(1.6963526169477641e+308, NaN);
test_map(-421, "7AJXHFQNNZ");
test_map(true, "EC08L8CC4B");
test_map(-115, +0);
test_map("TI3G3C", 2.4753989197690257e+307);
test_map("63AR1", /foo/g);
test_map(1.5048004979398963e+307, false);
test_map(4.477490487845859e+307, 1.00364406915717e+308);
test_map("4VP3OEIX", "IPZYF");
test_map(1.0188802104430523e+308, -239);
test_map(null, 874);
test_map(/(\w+)\s(\w+)/, "0NUMGB57QL");
test_map(-921, NaN);
test_map(1.0398000384054582e+308, NaN);
test_map(-121, "8X0G");
test_map(1.4110678206726114e+308, /ab+c/);
test_map(-571, Infinity);
test_map(4.4095762692276715e+307, 1.0938667279676604e+308);
test_map(-677, undefined);
test_map(/(\w+)\s(\w+)/, Infinity);
test_map(1.02101091071034e+308, 4.3785610292531587e+307);
test_map("MED37UW2F", "ME8");
test_map(-27, /[^.]+/);
test_map(8.354705679799604e+307, "PTW81ERLV");
test_map(false, -415);
test_map(false, -605);
test_map(true, 2.3851689057068466e+307);
test_map("8K9YMKXV", "1MU");
test_map(true, /foo/g);
test_map("12FN1SE", false);
test_map(1.989317293432896e+307, -217);
test_map(null, 1.873051258819093e+307);
test_map(1.2423461184645313e+308, "UBLW");
test_map(/[\u0400-\u04FF]+/g, /yes[^]*day/);
test_map("7YW0B6", +0);
test_map("JH4UQ6", null);
test_map(1.6394271732396968e+308, /[^.]+/);
test_map(1.5136841996242228e+308, null);
test_map(undefined, "H7A34O");
test_map(-739, NaN);
test_map(false, "NYJYQBMBC");
test_map(-275, -561);
test_map(Infinity, /yes.*day/);
test_map(-473, -0);
test_map(false, /[\u0400-\u04FF]+/g);
test_map("9EQ8D8K", false);
test_map(/(\w+)\s(\w+)/, "0YHU");
test_map(undefined, "190H");
test_map(-781, 1.514491326598977e+308);
test_map(/ab+c/, +0);
test_map(-927, 1.2863559762478453e+308);
test_map("AI8KUP5JZD", false);
test_map(-729, NaN);
test_map(9.137757596189967e+307, 7.200229697494193e+307);
test_map(null, true);
test_map(1.2555946568166093e+308, false);
test_map(undefined, 1.2388729021187826e+308);
test_map(1.6003490951036508e+307, -15);
test_map("J1F5TP1", "1TZ");
test_map(-0, "EFEQG");
test_map("6ZM3FC", "R87T7RD19");
test_map(true, "A283I7GU");
test_map(true, 6.528562870217561e+307);
test_map(-0, 1.1219875306566124e+308);
test_map(9.642042005718069e+307, 1.1221272855886729e+308);
test_map("WBP4EEM", /[^.]+/);
test_map(2.83979300587534e+307, -883);
test_map("18OS", undefined);
test_map(-0, -75);
test_map(/[^.]+/, "9AXKH7L");
test_map(-195, true);
test_map("KAYWL4C5T", 8.635232093945287e+307);
test_map("X7Y", /[^.]+/);
test_map(-23, undefined);
test_map(null, -19);
test_map(/ab+c/, Infinity);
test_map(3.371839982011192e+307, 2.4509483224674494e+307);
test_map(-643, "08YCZTSAR4");
test_map(/ab+c/, "YEC93");
test_map("HK4", -505);
test_map("F2X2VFTTYI", false);
test_map(false, null);
test_map(-943, "CU6I6BBH");
test_map(-323, 5.796831537722033e+307);
test_map("GTG3USGWXL", 1.7257410307492347e+308);
test_map(-601, "NIP");
test_map(undefined, "9ZJFIYLO");
test_map(1.000862796064551e+308, undefined);
test_map(Infinity, "Y99QEZV8XE");
test_map(/\r\n|\r|\n/, /(\w+)\s(\w+)/);
test_map(/yes[^]*day/, "GR3");
test_map(/[\u0400-\u04FF]+/g, 1.2545797837860784e+308);
test_map(null, /\r\n|\r|\n/);
test_map(-727, null);
test_map(/[\u0400-\u04FF]+/g, true);
test_map(1.2100663961488702e+308, false);
test_map(2.8111595238400047e+307, 6.222341019876812e+307);
test_map(/\r\n|\r|\n/, /[\u0400-\u04FF]+/g);
test_map(true, "DZNBOZRR4Q");
test_map("HAX", NaN);
test_map("P7CA4C", NaN);
test_map(-41, 1.637893295812697e+308);
test_map(-361, 2.1753746173264108e+307);
test_map(+0, -973);
test_map(2.84301867647844e+307, null);
test_map("XJDG", -561);
test_map(5.752298600856698e+306, /yes.*day/);
test_map(Infinity, "MBVY7E");
test_map(9.22398826631565e+307, "MFKQ");
test_map(-609, true);
test_map("R9NXP", -411);
test_map(false, 5.507407259693297e+307);
test_map(-0, "ES337N1");
test_map(1.4763169466331272e+308, "G1H7ALL59");
test_map("OFRHZ76", 1.3193028096577444e+307);
test_map(false, 1.2425387896420964e+308);
test_map(-921, "LQRL");
test_map(-207, /ab+c/);
test_map(Infinity, "FOFNTET");
test_map("WMYVDWW", "A20IRE7PV");
test_map(-465, "GOVN");
test_map(-0, /[^.]+/);
test_map(-891, +0);
test_map("4BDMZP", /\r\n|\r|\n/);
test_map("8N6EYAEYNL", /[^.]+/);
test_map(-257, -0);
test_map(1.0419389876533176e+308, 3.578262851852572e+306);
test_map(/\r\n|\r|\n/, -63);
test_map(+0, /yes.*day/);
test_map("VHVWI4WK2", true);
test_map(-693, /[\u0400-\u04FF]+/g);
test_map(NaN, "RM5C7B1W8");
test_map(/(\w+)\s(\w+)/, "R7J47H");
test_map(-417, true);
test_map(/yes[^]*day/, "VK2GI5F");
test_map(Infinity, null);
test_map(5.286642427345702e+307, false);
test_map(/foo/g, /ab+c/);
test_map(undefined, undefined);
test_map(Infinity, -655);
test_map(-927, "BBKADBQ");
test_map(-191, "9OY9G2T17P");
test_map(-27, "O83MO1BL");
test_map(744, /(\w+)\s(\w+)/);
test_map(9.41887764866154e+307, 1.1378116891815306e+308);
test_map("4K8JZL9", 7.785212103544097e+307);
test_map(+0, 1.9836957422634694e+307);
test_map(1.6232816200839385e+307, /(\w+)\s(\w+)/);
test_map(undefined, 9.840416922776787e+307);
test_map(-391, true);
test_map(-523, 182);
test_map(1.7042964984616339e+308, false);
test_map("MS7", "OVU4CT2");
test_map(/ab+c/, -17);
test_map(true, "7VOQS2RQ3J");
test_map(/\r\n|\r|\n/, "DQ9UW5PFPM");
test_map(-555, true);
test_map(4.867795803900152e+307, -335);
test_map(/[^.]+/, -997);
test_map(-733, /(\w+)\s(\w+)/);
test_map(-983, true);
test_map(Infinity, "GSVG9K2O4");
test_map(-355, +0);
test_map("0S889", "5V3WR8J");
test_map(-295, 1.4114580382089928e+308);
test_map(-529, undefined);
test_map(/ab+c/, -109);
test_map("VK08KX", +0);
test_map(/[^.]+/, "GI7Q2");
test_map(/ab+c/, 3.229101174445291e+307);
test_map(7.968213444062951e+307, /(\w+)\s(\w+)/);
test_map(-0, /[\u0400-\u04FF]+/g);
test_map(/yes.*day/, 3.346598013478254e+306);
test_map(Infinity, false);
test_map("0P4Z3Y", 1.7151395499720117e+308);
test_map(4.465151415145988e+306, /foo/g);
test_map(-365, true);
test_map(1.126416142737405e+308, +0);
test_map(/(\w+)\s(\w+)/, -0);
test_map(8.384794261140364e+307, 3.9412023034749194e+307);
test_map(6.486485030264282e+307, 1.5112634831744342e+308);
test_map(1.4577500343424268e+308, "SHFIQ91BWV");
test_map(-181, /yes[^]*day/);
test_map("SU05U", -75);
test_map(false, 1.218256705890482e+308);
test_map(9.179887003626234e+307, false);
test_map("SEJMWWDNKT", -67);
test_map(-121, 7.011112256805196e+307);
test_map(/[^.]+/, 4.816729592155748e+307);
test_map(1.566162415696845e+308, /(\w+)\s(\w+)/);
test_map(-919, "5R6G6T");
test_map(7.573857226126787e+307, /[\u0400-\u04FF]+/g);
test_map(undefined, "9A1SE1VEL");
test_map(true, 9.372978529304118e+307);
test_map(1.4021994435455594e+308, "XPB0M");
test_map(6.658044518468814e+307, /\r\n|\r|\n/);
test_map("OGGDIKXR", -323);
test_map(1.6097905175550316e+308, "FM8R034XX");
test_map(false, 3.5748777720824225e+307);
test_map("DYB6M", NaN);
test_map(-565, -681);
test_map(+0, 1.4748732217073451e+308);
test_map("TW7EC3R5U", /ab+c/);
test_map(-709, -503);
test_map(true, -435);
test_map(3.243671066307203e+307, -909);
test_map(/\r\n|\r|\n/, "PK0ZP");
test_map(1.3082537784651889e+308, NaN);
test_map(/[^.]+/, NaN);
test_map("R5EUBK7H", /[\u0400-\u04FF]+/g);
test_map(-511, 1.3228583435254854e+308);
test_map("NT4", 1.480011549144572e+308);
test_map(1.287965510312278e+308, "4GSE");
test_map(6.775378857435049e+307, -195);
test_map(-789, "R99NCVF4");
test_map(NaN, -929);
test_map(/[^.]+/, "HPY");
test_map(-841, true);
test_map(/[^.]+/, -363);
test_map(-933, 1.5979283516414574e+308);
test_map(/foo/g, "4NE");
test_map("132VI0Y5V3", -167);
test_map(/yes[^]*day/, 1.9386406460847434e+307);
test_map(/(\w+)\s(\w+)/, -959);
test_map(5.493688816599446e+307, true);
test_map(9.330807462823166e+307, -707);
test_map(-343, false);
test_map(-421, undefined);
test_map(/[^.]+/, -243);
test_map("BU5S05", "JGE");
test_map(+0, 1.0550976204612913e+307);
test_map(undefined, "4VUJ2");
test_map(9.673423857413336e+307, 1.716951101001236e+307);
test_map(-65, /yes.*day/);
test_map(+0, false);
test_map(/(\w+)\s(\w+)/, "Q8BSE");
test_map(true, 2.3685142939117025e+307);
test_map(-0, -981);
test_map(-0, 1.3720723628537732e+308);
test_map(1.0946436130787943e+307, 8.199930791176814e+307);
test_map(/ab+c/, /yes.*day/);
test_map(-711, 5.627560235797014e+307);
test_map(/yes[^]*day/, "X6Y7GPEU");
test_map("8VJG", /ab+c/);
test_map(1.0656740000779942e+308, -181);
test_map(false, -793);
test_map("HJ8", true);
test_map(-71, -655);
test_map(1.6903587926179274e+308, -91);
test_map("XNAT96KN", 1.4279955797739877e+308);
test_map("7KXVZ2", "B5L");
test_map(-71, -519);
test_map(undefined, -327);
test_map(NaN, -0);
test_map(false, -303);
test_map("XA5V776N0", "NPP6J68J84");
test_map(-997, /yes[^]*day/);
test_map("9QTR9DW9", -189);
test_map("N32LGBPG", "ZDYL5F");
test_map(-567, -749);
test_map(8.268200653839412e+307, "CDGCX07S");
test_map(/\r\n|\r|\n/, 1.6931276697645102e+308);
test_map(/[\u0400-\u04FF]+/g, 6.133555600326834e+307);
test_map(/yes.*day/, "CJ0WW98JW");
test_map(false, -787);
test_map(7.370959286860062e+307, "2AI0UD");
test_map(true, 8.923551433577058e+307);
test_map(3.83837102167335e+307, -299);
test_map("U3JF", false);
test_map("ODY721MPKS", -15);
test_map(/\r\n|\r|\n/, "3T1EGFM4");
test_map(-895, 1.2591295111436463e+308);
test_map("J772", null);
test_map("0R8", "ZHL9");
test_map(/foo/g, 2.6410207267699175e+307);
test_map(-607, /(\w+)\s(\w+)/);
test_map(true, -651);
test_map(false, "FDR");
test_map(-371, -69);
test_map(2.545993556340603e+307, -859);
test_map(2.3364666560750567e+307, true);
test_map(/yes[^]*day/, /\r\n|\r|\n/);
test_map(9.34480858648811e+307, /foo/g);
test_map(+0, +0);
test_map(NaN, "CPV5K58");
test_map(1.1698299935752777e+307, "1M8MXR2");
test_map("R2Q8A", true);
test_map(-0, -481);
test_map(-115, Infinity);
test_map(-721, false);
test_map(false, "NHQFGUAQ");
test_map(9.397668315158657e+307, 7.551883309506623e+307);
test_map("DQC", -0);
test_map(1.6180760082721848e+308, Infinity);
test_map("23K7R", true);
test_map(2.956020212725579e+307, true);
test_map(-271, "JZ1BCX");
test_map(-171, -429);
test_map("CYY9X", /foo/g);
test_map("TELCR7", /yes[^]*day/);
test_map("65UZI6FZ2", -409);
test_map(1.6225217847278776e+308, Infinity);
test_map(7.615572159994008e+307, -0);
test_map("M0H5B", -757);
test_map(-861, true);
test_map(-765, 3.6868459218763425e+306);
test_map(9.608963096642672e+307, /[^.]+/);
