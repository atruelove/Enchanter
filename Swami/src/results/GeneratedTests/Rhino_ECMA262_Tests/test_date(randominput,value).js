/*
* This file is automatically generated by Swami
*
* 2019-08-09 12:15:27.436555
*/




startTest();

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
	new TestCase("date", "date", numberOfArgs ,  1);
		test();
	if ( typeof  NewTarget === 'undefined' ) {
		var output = new Date(randominput).Date(value);
			new TestCase("date", "date", ToDateString ( now ), output);
			test();
			return;
	}

}



/*TESTS GENERATED AUTOMATICALLY*/
test_date(-0, -243);
test_date(false, 1.5286369930716944e+308);
test_date(/ab+c/, 1.6803314663475452e+308);
test_date(false, 1.657162203837992e+308);
test_date(/(\w+)\s(\w+)/, /yes.*day/);
test_date("JRS3", "NHX5WJ8G");
test_date(undefined, "67PD");
test_date(/(\w+)\s(\w+)/, -573);
test_date(-241, -73);
test_date(-0, "M4X44P");
test_date(-0, 1.0704034519392392e+308);
test_date("1NGG", false);
test_date("RR515OH41", /\r\n|\r|\n/);
test_date(-49, -655);
test_date("0T87PDP63", null);
test_date(false, undefined);
test_date(8.770216127539745e+307, "2FXF6HNSC");
test_date(8.645317714902607e+307, Infinity);
test_date("NKX6IQ", -123);
test_date(1.1357581352266343e+308, -0);
test_date(/ab+c/, -565);
test_date("MAX5", -775);
test_date("LVE88X", 2.520081130549325e+307);
test_date(/\r\n|\r|\n/, "GOYZX8P");
test_date(/foo/g, /\r\n|\r|\n/);
test_date(/(\w+)\s(\w+)/, -765);
test_date(/yes.*day/, true);
test_date(-503, "8SVLY1");
test_date(-291, "BKHQ");
test_date(222, false);
test_date(Infinity, 4.020158864041715e+307);
test_date(NaN, "AARZM");
test_date(-473, /\r\n|\r|\n/);
test_date(/foo/g, +0);
test_date(-765, "QLO2HWO");
test_date(/yes[^]*day/, "XST");
test_date(false, /\r\n|\r|\n/);
test_date("1AHG", 6.869550702338208e+307);
test_date(false, -283);
test_date(/yes.*day/, 4.664398359680326e+307);
test_date(-341, /ab+c/);
test_date(true, -175);
test_date(undefined, true);
test_date(-453, -743);
test_date(+0, -913);
test_date(/\r\n|\r|\n/, false);
test_date(NaN, 1.705442527921401e+308);
test_date("0QAWTJB", false);
test_date(/(\w+)\s(\w+)/, Infinity);
test_date(false, true);
test_date(-809, -717);
test_date("GQXVOPL13", -657);
test_date(/yes.*day/, "YHRPVCH1WT");
test_date("PIDQQM8", /foo/g);
test_date(-347, "IICQ2EW");
test_date(1.7830514967692815e+308, -165);
test_date(NaN, Infinity);
test_date(1.3522603663860959e+308, "X51E");
test_date("D4X68U9", 1.1912431891283487e+308);
test_date(/\r\n|\r|\n/, 5.036609329475195e+307);
test_date(/(\w+)\s(\w+)/, +0);
test_date("X857UE", null);
test_date(null, "Z7QKE3K4X");
test_date(undefined, 4.320128778242534e+307);
test_date(-397, -825);
test_date(1.2697783963264857e+308, "ATR7");
test_date(1.8018846674510297e+307, -0);
test_date(Infinity, /[\u0400-\u04FF]+/g);
test_date(1.4029165363886852e+307, -0);
test_date(-231, -537);
test_date("LUXT", 7.397306942681073e+307);
test_date(true, /[\u0400-\u04FF]+/g);
test_date("98W", "I0JAU");
test_date(false, /foo/g);
test_date(false, Infinity);
test_date(Infinity, Infinity);
test_date(-457, true);
test_date(false, "PDKZ3Q");
test_date(false, 9.12236794607075e+307);
test_date(3.3041991409840335e+307, -577);
test_date("E63", "RKFGL8TI");
test_date(-0, "H8NL");
test_date(-689, 1.7252600610453689e+308);
test_date(1.7598952431485744e+308, 1.9202496487230472e+307);
test_date("NBLZ4608", /[^.]+/);
test_date(-269, +0);
test_date(1.3595472186918262e+308, Infinity);
test_date(-0, -135);
test_date(-605, "H6VDHC4CQ");
test_date(-887, -195);
test_date(+0, NaN);
test_date(-685, /yes[^]*day/);
test_date(undefined, 1.8453497850703948e+307);
test_date(false, "XUC");
test_date("B38YGGCGN", -121);
test_date(-973, 1.3492488318027776e+308);
test_date(-173, "JWWU83");
test_date(/yes.*day/, false);
test_date(true, null);
test_date(/yes.*day/, -411);
test_date(1.4640031074920517e+308, /[^.]+/);
test_date(+0, false);
test_date("8WJS2MZ", /ab+c/);
test_date(9.821390159197006e+307, "8MZLBFPPQ");
test_date(5.095553425408532e+307, true);
test_date(undefined, /\r\n|\r|\n/);
test_date(-601, "XYT23A6");
test_date(-0, -251);
test_date(-555, Infinity);
test_date(6.779048194826059e+307, "1VCYI1J");
test_date(false, -287);
test_date(/yes[^]*day/, -243);
test_date(/[^.]+/, false);
test_date(-633, "40W");
test_date(1.5176897423627309e+308, Infinity);
test_date(true, /\r\n|\r|\n/);
test_date(-0, /[^.]+/);
test_date(NaN, 6.419929354899913e+307);
test_date(true, /ab+c/);
test_date(/foo/g, false);
test_date("2TDG", -0);
test_date(1.7674575640657094e+308, -0);
test_date(/foo/g, true);
test_date(/yes[^]*day/, 1.612972381991182e+308);
test_date("LE9HWF", /(\w+)\s(\w+)/);
test_date(Infinity, /yes[^]*day/);
test_date(null, /yes.*day/);
test_date(4.654223621640226e+307, -855);
test_date(-743, "6JB");
test_date(true, "PAXDJHA");
test_date(9.673308728074066e+307, -915);
test_date(-45, /[^.]+/);
test_date(true, -559);
test_date("CYW3AX", false);
test_date(2.3324142824093495e+307, +0);
test_date("XFTMN", -451);
test_date(-695, "0V7CP");
test_date("4YRT96", false);
test_date(1.0880359380909107e+308, 1.2009389493816976e+308);
test_date(1.4517600700919761e+308, 5.235218169785448e+307);
test_date("DENX165O", 1.2388071719977072e+308);
test_date(4.054552800794545e+307, 1.038314775933882e+308);
test_date("XM32VN", -0);
test_date(/ab+c/, /yes[^]*day/);
test_date("STZCE0ZD0P", -87);
test_date(false, /yes.*day/);
test_date(-673, 3.480169211452427e+307);
test_date(/(\w+)\s(\w+)/, "O8CQPV20Z");
test_date(-887, false);
test_date(false, "4M8FHI");
test_date(null, +0);
test_date("LAW3", -927);
test_date("4U1ALTDKF", /[\u0400-\u04FF]+/g);
test_date(/yes[^]*day/, null);
test_date(+0, "GED");
test_date("FTFX6EX", -0);
test_date("B0GE9HNH", 8.314993355425532e+307);
test_date(NaN, -679);
test_date(9.53664723061923e+307, false);
test_date(-467, /yes[^]*day/);
test_date(-845, -539);
test_date(-381, +0);
test_date("UEBCJI050", -381);
test_date(8.399966025736811e+307, false);
test_date(true, -131);
test_date(undefined, "RUZAA1ADGQ");
test_date("1UYZGSZ89", 3.6177056642166e+307);
test_date(-395, -961);
test_date(true, "JQ9679");
test_date(-125, -579);
test_date(1.3587475675396707e+308, Infinity);
test_date(1.5022694819460695e+308, -0);
test_date(-137, 1.5755644440736408e+308);
test_date("CV5KKLEH9U", undefined);
test_date(/[^.]+/, /[^.]+/);
test_date(-693, 1.2156341667215183e+307);
test_date(/ab+c/, undefined);
test_date(7.298557897171444e+307, "MD9AA30J");
test_date(-0, -3);
test_date("GE4Q", NaN);
test_date(true, 2.4229696505636574e+307);
test_date("UD6L0FVNP", null);
test_date(undefined, 1.1697206562262985e+308);
test_date("R6OEYM", -383);
test_date(1.7369012673654576e+308, -317);
test_date(156, -319);
test_date(false, /[^.]+/);
test_date(-339, -457);
test_date(true, /yes[^]*day/);
test_date(7.454528340255216e+307, -483);
test_date("VEAF", -153);
test_date(/foo/g, undefined);
test_date(1.1025364849226788e+308, "577PY54");
test_date("LHFJ", -227);
test_date(8.389620066153207e+307, 1.6971150641122562e+308);
test_date(/[\u0400-\u04FF]+/g, -523);
test_date(-361, -991);
test_date("4HYNSV1RU", -119);
test_date(/(\w+)\s(\w+)/, null);
test_date(/(\w+)\s(\w+)/, "EGD3R");
test_date("OHY126FT", NaN);
test_date(false, -773);
test_date(7.166651818697603e+307, false);
test_date("98H7STH", /ab+c/);
test_date(-165, 8.368560756090436e+307);
test_date(/yes.*day/, /yes[^]*day/);
test_date(false, NaN);
test_date(1.8220421662484596e+307, -303);
test_date(/foo/g, "IHK04");
test_date(-301, -0);
test_date(+0, -979);
test_date(/(\w+)\s(\w+)/, -0);
test_date(-181, NaN);
test_date("IBNFG6M", /yes[^]*day/);
test_date(8.284058037087938e+307, true);
test_date("GXJADJ2", true);
test_date("1IITNTV7", false);
test_date("TPV8QR250I", "S96IUPQ");
test_date(9.398851978589433e+307, -153);
test_date(1.2900026336756434e+308, -247);
test_date(1.5318969250290407e+308, "POYRXDV");
test_date(NaN, "5IHT5R1");
test_date("5XS", 6.649830607982369e+307);
test_date(Infinity, "EU0N7IL2L");
test_date(/yes.*day/, "S7LFY8VIWT");
test_date(-707, true);
test_date("W8V7", /ab+c/);
test_date(-631, 6.708643214852217e+307);
test_date(true, false);
test_date(1.7760158585573983e+308, /[\u0400-\u04FF]+/g);
test_date(null, "F10JWN9H3");
test_date(true, -507);
test_date(1.0555687699647228e+308, /(\w+)\s(\w+)/);
test_date(/foo/g, Infinity);
test_date(/(\w+)\s(\w+)/, -731);
test_date(-689, -703);
test_date(-185, -349);
test_date(1.3546631570457423e+308, NaN);
test_date(-511, 814);
test_date(-831, true);
test_date(1.0791255969355954e+308, -543);
test_date(true, /yes.*day/);
test_date(-0, true);
test_date(-115, -79);
test_date(true, "XGRLQ7");
test_date(9.390168788438504e+307, /(\w+)\s(\w+)/);
test_date(-467, false);
test_date(+0, true);
test_date(NaN, true);
test_date(7.738019996599417e+307, +0);
test_date(-951, 4.808391612153002e+307);
test_date(+0, Infinity);
test_date(false, /(\w+)\s(\w+)/);
test_date(/ab+c/, false);
test_date(-997, 2.612129770170852e+307);
test_date(-115, -989);
test_date(null, 9.001330494939458e+307);
test_date(-589, 7.114882983215902e+307);
test_date(+0, 6.164292840580702e+306);
test_date("8ZJBU7XPL", null);
test_date(false, 1.4550414683177662e+308);
test_date(/yes[^]*day/, "S3N");
test_date(null, 1.5671375300501908e+308);
test_date("J0195M", undefined);
test_date(9.92448123525097e+307, +0);
test_date(true, NaN);
test_date(/foo/g, "P8PG6BD");
test_date(4.993507447363674e+307, -65);
test_date(5.766995793222208e+307, -0);
test_date("S3N", 1.2923451038690155e+308);
test_date(/foo/g, "BT07G62SAZ");
test_date(undefined, Infinity);
test_date(Infinity, "EYYF6NDPE");
test_date(/yes[^]*day/, "9I6AGL");
test_date("1LHXTNJWH", 2.0069835351869218e+307);
test_date(1.739104992654249e+308, 7.573439554309728e+307);
test_date(/\r\n|\r|\n/, 1.600170085279423e+306);
test_date("Y66I9SSA", -0);
test_date(Infinity, true);
test_date(4.695668744658484e+307, true);
test_date(-839, 8.59270260095038e+306);
test_date(-611, /foo/g);
test_date(NaN, 1.8084490748901598e+307);
test_date(1.3445660646975686e+308, false);
test_date(true, "VFV");
test_date(true, undefined);
test_date(/yes[^]*day/, -263);
test_date(true, 8.987699792105406e+307);
test_date(undefined, false);
test_date("GHKQUPOD3G", /foo/g);
test_date(undefined, 2.281634604704203e+307);
test_date(+0, /(\w+)\s(\w+)/);
test_date(+0, "78E");
test_date(8.520870059775983e+307, true);
test_date("1T8", "AN7W6PBE");
test_date("1KRZH8", -817);
test_date("46UDEF", /[\u0400-\u04FF]+/g);
test_date(1.2865093152755193e+308, false);
test_date(1.2211446869525507e+308, null);
test_date(2.6283833902781037e+307, false);
test_date(1.210977320309528e+307, Infinity);
test_date(false, /[\u0400-\u04FF]+/g);
test_date(true, +0);
test_date(-905, +0);
test_date(Infinity, -679);
test_date(-939, "55NJ3V3GC");
test_date(/[^.]+/, NaN);
test_date(-11, -661);
test_date("2WHYAI", -599);
test_date("LIS36F6DW", -939);
test_date(-0, /(\w+)\s(\w+)/);
test_date("38S1QXP7", "KHD3");
test_date(5.3320435259134794e+306, "8ZY0FWY");
test_date(-651, /[^.]+/);
test_date("D9JCPCFK", false);
test_date(true, "CQ5XH1C");
test_date(/yes[^]*day/, -111);
test_date(3.577659181282232e+307, 6.8744510266776565e+307);
test_date("ZVMPQDOY", "NPR2UM3");
test_date(-497, /foo/g);
test_date(+0, /[\u0400-\u04FF]+/g);
test_date(-33, /(\w+)\s(\w+)/);
test_date(-359, true);
test_date(7.694632426361695e+307, "84Q1TP");
test_date(1.6422245299699995e+308, Infinity);
test_date(7.714080201688148e+307, "BOL63");
test_date(-567, -597);
test_date(undefined, "7QJE65W2");
test_date(/(\w+)\s(\w+)/, 3.9773987116045394e+307);
test_date(-0, "VE354JZ");
test_date(1.118261916246026e+308, -835);
test_date("G6M1BBTT", false);
test_date(-587, -181);
test_date(-0, 210);
test_date(false, 6.397302547991226e+306);
test_date("RJGLVFR4LP", false);
test_date(3.1475675488331053e+307, "J8PBE9KGRE");
test_date(false, 1.526364413544505e+308);
test_date(NaN, NaN);
test_date(/[\u0400-\u04FF]+/g, -317);
test_date("14KYFDIR", Infinity);
test_date(-417, NaN);
test_date(1.1899734409968361e+308, Infinity);
test_date(82, Infinity);
test_date(1.3935314837340192e+306, 6.770104491220174e+307);
test_date(false, -701);
test_date(/\r\n|\r|\n/, true);
test_date(true, "X81GOFC");
test_date(false, -399);
test_date(9.875472624036716e+307, false);
test_date(/yes.*day/, undefined);
test_date(NaN, false);
test_date("Y4IEY7RX", "GQ8");
test_date(-595, false);
test_date(/(\w+)\s(\w+)/, -97);
test_date("Z88C", /(\w+)\s(\w+)/);
test_date(-21, Infinity);
test_date(Infinity, 5.295110757745381e+307);
test_date(1.1364100089788714e+308, /(\w+)\s(\w+)/);
test_date(8.888511467583402e+307, /[^.]+/);
test_date(-511, "FXVJPJ");
test_date(-831, "RJ0F18");
test_date("OJ6R", -417);
test_date(/[\u0400-\u04FF]+/g, "86GS");
test_date(-585, NaN);
test_date(7.435152907541402e+306, "Q8CYBJLQ0U");
test_date(-677, /yes.*day/);
test_date(-763, -229);
test_date(Infinity, -737);
test_date(4.181316131825105e+307, "87C");
test_date(NaN, /\r\n|\r|\n/);
test_date(/yes[^]*day/, 2.59054396100883e+307);
test_date("76RTMO0TMW", 9.77648878480372e+307);
test_date(9.444236619626446e+307, -0);
test_date(/[^.]+/, /(\w+)\s(\w+)/);
test_date(4.7240186807421165e+306, 2.9372286230822244e+307);
test_date(-167, /[\u0400-\u04FF]+/g);
test_date("Z8J", /\r\n|\r|\n/);
test_date("H6I00", +0);
test_date(1.4284923800724883e+308, "LWBUUQ6AG");
test_date(1.7361679700275014e+308, 7.133137998054991e+307);
test_date(1.5258967610852997e+308, "CZ8C");
test_date("F2HRQQP0", -847);
test_date("3MCCOI", -295);
test_date("VPPKP32QU", 1.789730162773758e+308);
test_date(-549, /\r\n|\r|\n/);
test_date(1.6151143460168837e+308, -83);
test_date(1.1704769374521651e+308, /yes.*day/);
test_date(-751, /\r\n|\r|\n/);
test_date("831Y", "BHJJ");
test_date(true, 1.6574939333460281e+308);
test_date("0OYDX", true);
test_date("D4MBNX67JK", "BXGGFK");
test_date(-0, false);
test_date("KYYIZ1M", /yes.*day/);
test_date(true, 1.5891326650092134e+307);
test_date(-289, /[^.]+/);
test_date(-87, -331);
test_date(/yes.*day/, /[^.]+/);
test_date(1.1755212130476034e+308, 1.645579450591229e+308);
test_date(-895, NaN);
test_date(5.141971558648774e+307, 5.877523194801429e+307);
test_date(null, -157);
test_date(/(\w+)\s(\w+)/, 1.1981455768512031e+308);
test_date(+0, -895);
test_date("NQJ", -787);
test_date("11ELFO", true);
test_date(/foo/g, -235);
test_date(-217, 2.273251855060876e+307);
test_date(null, /yes[^]*day/);
test_date("O0VPDVRC0", -0);
test_date(-655, 1.1156574746739296e+308);
test_date(true, -51);
test_date("XRO9MKU", false);
test_date(4.292514911454748e+307, 6.12289320996535e+307);
test_date("VTBN", true);
test_date(true, true);
test_date(1.450644282864274e+308, /foo/g);
test_date(2.7894913826297934e+307, "47L");
test_date("FP6SUT1R5Q", -775);
test_date(1.7948412538007284e+308, -613);
test_date(1.6363663135301284e+308, false);
test_date(1.294488828231193e+308, false);
test_date("VQZ", true);
test_date(1.6008997922773687e+308, true);
test_date(1.2284267011865578e+308, /\r\n|\r|\n/);
test_date(-189, 564);
test_date(/foo/g, /yes.*day/);
test_date("1ZWOKPW", +0);
test_date(7.955139322275659e+307, "59A9MHTQ");
test_date(false, null);
test_date(7.716418519155972e+307, "8LDFZEB");
test_date(1.7819061623289527e+308, /\r\n|\r|\n/);
test_date(/(\w+)\s(\w+)/, "YSHSP");
test_date(-807, /yes[^]*day/);
test_date(/yes[^]*day/, -543);
test_date("MPW", 8.826372736459612e+307);
test_date(-727, /yes[^]*day/);
test_date(1.2431387448553286e+308, /yes.*day/);
test_date(true, 4.004550908184867e+307);
test_date(6.146102007994779e+307, undefined);
test_date(9.296238612325397e+307, /ab+c/);
test_date(/ab+c/, Infinity);
test_date(-267, true);
test_date(-469, /ab+c/);
test_date(1.5518114635365182e+308, /[\u0400-\u04FF]+/g);
test_date(/\r\n|\r|\n/, /ab+c/);
test_date(/[\u0400-\u04FF]+/g, /ab+c/);
test_date(/yes[^]*day/, -639);
test_date(-113, NaN);
test_date(false, "9K3G8VJDC");
test_date(NaN, -855);
test_date(-729, undefined);
test_date("GLNXNPDA54", undefined);
test_date(-839, /[\u0400-\u04FF]+/g);
test_date("O7L0Q5I39", -105);
test_date(/\r\n|\r|\n/, Infinity);
test_date(-375, -705);
test_date(null, -31);
test_date(488, false);
test_date(942, false);
test_date(true, 8.73876413062473e+307);
test_date("AUR5G08", undefined);
test_date(Infinity, "XVARRUL");
test_date("04AL8LN", /foo/g);
test_date(true, -123);
test_date(-387, /[\u0400-\u04FF]+/g);
test_date(null, undefined);
test_date(1.561360948591525e+308, true);
test_date("8ML8OPR", -331);
test_date(-967, /(\w+)\s(\w+)/);
test_date(670, -721);
test_date(-891, "PCB");
test_date(1.3392850649173833e+308, 9.658352659607175e+307);
test_date(-961, Infinity);
test_date(-151, true);
test_date(-991, "OKKTJL0");
test_date(-755, 5.900650134826697e+307);
test_date(null, "IMYHOC");
test_date(-225, 1.0084740167135306e+308);
test_date(468, /ab+c/);
test_date(9.437083006837806e+307, 492);
test_date(/ab+c/, "HSU6XW5UG");
test_date("3EZ", +0);
test_date(true, "GHC97TY6XG");
test_date(1.6574939333460281e+308, false);
test_date(-531, "C7LWO2OP");
test_date(true, 4.999751787653966e+307);
test_date("0CWHACX4", 5.316685980584268e+307);
test_date("V5548V", 3.4770366807721385e+307);
test_date("Y6R7D89RL7", "FHS86E");
test_date(true, "EUDQ12T");
test_date("J7EKQK8J", 450);
test_date("5BZA01", "OCOX8WKPK6");
test_date(1.442808469409163e+308, "TQ5O");
test_date(5.117940202411799e+307, /ab+c/);
test_date(1.4343509169956759e+308, false);
test_date(/yes.*day/, /ab+c/);
test_date(-729, /[^.]+/);
test_date(-357, /[^.]+/);
test_date(-0, -0);
test_date(1.3897812989408104e+308, /\r\n|\r|\n/);
test_date(1.7801915245916705e+308, -617);
test_date(-0, undefined);
test_date(9.186467525004474e+307, /(\w+)\s(\w+)/);
test_date(-673, 2.4201980704930513e+307);
test_date(undefined, -0);
test_date(/foo/g, 426);
test_date("JL4", "PTDP0419CG");
test_date(-711, false);
test_date("3WSOGHG8P", +0);
test_date(false, -99);
test_date("G4KS54IE4W", 1.0413659307481517e+308);
test_date(9.16474597926045e+307, -0);
test_date(false, false);
test_date(/[\u0400-\u04FF]+/g, undefined);
test_date(-559, "5A1");
test_date(false, -403);
test_date(-361, /[\u0400-\u04FF]+/g);
test_date(undefined, /yes[^]*day/);
test_date("Q4EN7K5", -813);
test_date("K8A", 9.935948899006003e+307);
test_date("JBYYVIYNVH", /yes.*day/);
test_date(undefined, +0);
test_date(null, "A9BN3");
test_date(+0, /[^.]+/);
test_date(/foo/g, null);
test_date(/[^.]+/, true);
test_date(-89, NaN);
test_date(9.176905301442494e+307, -0);
test_date(1.1141096139682356e+308, 6.059509945082007e+307);
test_date(2.127045106220167e+307, "IAZ4VV1");
test_date(/yes[^]*day/, -185);
test_date("Z8FK4GI1", false);
test_date("KNUGP52MS", 6.557308909311458e+307);
test_date(-111, /foo/g);
test_date(1.347496234313367e+308, "TWE");
test_date(-305, /yes[^]*day/);
test_date(-0, 1.4704887907085024e+308);
test_date(-791, 1.651657778647528e+306);
test_date(/\r\n|\r|\n/, 1.037463651526613e+308);
test_date(false, "OYH");
test_date(-809, NaN);
test_date(true, 1.458075267344382e+308);
test_date(7.027748162617246e+307, -945);
test_date("LLAMTAQ", /foo/g);
test_date(NaN, -35);
test_date(/[\u0400-\u04FF]+/g, "7M5UUMHIP");
test_date(null, NaN);
test_date("SKNI4S", 1.6775407227620397e+308);
test_date(4.978590647212995e+306, /[^.]+/);
test_date("8N12B9ZE", -241);
test_date(-475, "905NUQNRJD");
test_date(3.718557838814975e+307, true);
test_date(-189, /foo/g);
test_date(124, false);
test_date(false, 8.103811623562999e+307);
test_date("ZAVKJUAV", 1.1237696316351448e+308);
test_date(1.1406686209902395e+308, -119);
test_date(null, -0);
test_date("XCB7", "ID3IZ");
test_date(false, 5.445232681209933e+307);
test_date("XJWAQL0P", -0);
test_date(-713, 5.872524365434663e+307);
test_date(9.66011633144158e+307, true);
test_date(546, /yes[^]*day/);
test_date(1.1709200699979682e+308, "LSPKLD");
test_date(/(\w+)\s(\w+)/, 1.454429709972012e+308);
test_date("JSLGI2Y5N", -183);
test_date("7AS2", 6.894814841234785e+307);
test_date(2.778526860358013e+307, "IO1YGJND5");
test_date(undefined, -737);
test_date(-0, 8.376014892264669e+307);
test_date(5.542652841434927e+307, 5.064045693522097e+307);
test_date("JJV52", "8KK");
test_date(-917, false);
test_date(-719, -327);
test_date(-649, 8.205028476756603e+307);
test_date(-821, undefined);
test_date(false, -751);
test_date(5.384535994390605e+307, /yes[^]*day/);
test_date(-63, /[\u0400-\u04FF]+/g);
test_date(1.1613502794218683e+308, /(\w+)\s(\w+)/);
test_date(1.304539279090087e+308, -987);
test_date(1.5704785555883172e+308, -67);
test_date(1.3447514742806527e+308, 1.7415696140706092e+308);
test_date(-323, false);
test_date(-315, NaN);
test_date(-739, NaN);
test_date("TFPDN7U", /ab+c/);
test_date(-741, -635);
test_date(Infinity, 1.2382788142229913e+308);
test_date(+0, "SDBH69I");
test_date(null, /ab+c/);
test_date(undefined, -281);
test_date(/[\u0400-\u04FF]+/g, /foo/g);
test_date(-355, NaN);
test_date(null, false);
test_date(undefined, "FQME");
test_date(-635, 4.990619816850793e+307);
test_date(-81, "BJFANE2");
test_date(-637, Infinity);
test_date(-773, false);
test_date("AEU8", false);
test_date(-133, /\r\n|\r|\n/);
test_date("7O7", 9.846692184476412e+307);
test_date(/yes.*day/, "X3B");
test_date(false, /yes[^]*day/);
test_date(true, "6UONH");
test_date(/yes.*day/, -133);
test_date(undefined, -779);
test_date("KUT", 2.8771274261670587e+307);
test_date(-819, false);
test_date(4.3406320312374493e+307, -965);
test_date(-49, -0);
test_date(-0, -311);
test_date(1.725807171151422e+308, "D11S");
test_date(/(\w+)\s(\w+)/, /[^.]+/);
test_date(/(\w+)\s(\w+)/, true);
test_date(6.28800846210624e+307, "JRK");
test_date(-329, true);
test_date(true, /(\w+)\s(\w+)/);
test_date(-769, -941);
test_date(-87, /[\u0400-\u04FF]+/g);
test_date(1.5522525763497005e+308, 5.300725983589367e+307);
test_date("HDQ", false);
test_date(-639, /yes[^]*day/);
test_date("9ZZESY", "A8Z");
test_date(NaN, undefined);
test_date(-879, "1QNITDJ");
test_date(5.961120157923109e+307, /[\u0400-\u04FF]+/g);
test_date(3.9851415106175416e+306, -649);
test_date(9.685224078144583e+307, false);
test_date(/(\w+)\s(\w+)/, "5BI");
test_date(/ab+c/, 1.2785486608374375e+307);
test_date(-13, -461);
test_date(-235, NaN);
test_date(1.5870104176254465e+308, -621);
test_date(-441, /\r\n|\r|\n/);
test_date(/[^.]+/, "1VP19ZT");
test_date("B5K4F", false);
test_date(+0, 1.340157544024644e+307);
test_date(false, 1.246558194425307e+308);
test_date(-0, "5HZJ60M");
test_date("GV85RC", /[\u0400-\u04FF]+/g);
test_date(true, -273);
test_date("H7KGER8QYB", false);
test_date(null, 1.1130380552289205e+308);
test_date(-65, 1.5268015229945811e+308);
test_date(true, -0);
test_date(/ab+c/, "39Y8");
test_date(9.123160368817472e+307, /yes.*day/);
test_date(1.6894935456350955e+308, -805);
test_date(2.8808713094594255e+306, +0);
test_date(-935, null);
test_date(1.6303903292070301e+308, -0);
test_date(undefined, "JV8JDJ6");
test_date(true, Infinity);
test_date("8QCVGHT", true);
test_date(-659, true);
test_date(/ab+c/, true);
test_date(1.4270327281442164e+308, "T31WTQ");
test_date(1.2589070955472087e+308, /foo/g);
test_date(/[\u0400-\u04FF]+/g, 1.1067308201878968e+308);
test_date(1.198276937463262e+308, 8.261867060756208e+307);
test_date(true, -967);
test_date("4WQYW5", -699);
test_date(8.20015559460502e+307, -869);
test_date(1.0775527116549353e+308, 392);
test_date(undefined, /[^.]+/);
test_date(null, -245);
test_date(-339, /yes[^]*day/);
test_date(true, 1.2245742593493264e+308);
test_date(-943, 3.709325174135055e+307);
test_date(1.1030953455174098e+308, true);
test_date(true, -333);
test_date(-639, -0);
test_date(Infinity, "UUD8CSL6");
test_date(true, 1.5989709013573021e+308);
test_date(true, 2.181980074415621e+307);
test_date("6GBPP", "DVORA4CPI");
test_date(/[\u0400-\u04FF]+/g, 1.034519163646091e+308);
test_date(1.4172316505216772e+306, 1.5250140082890647e+308);
test_date(/ab+c/, -435);
test_date("O18M06", /[^.]+/);
test_date(-235, -949);
test_date("ZKM0RG", 1.093937648600788e+308);
test_date(/[\u0400-\u04FF]+/g, 2.2989305308391415e+306);
test_date("8V7FO", /ab+c/);
test_date(false, "SATPGW4");
test_date(-435, null);
test_date(true, 3.703928852673984e+307);
test_date(/ab+c/, NaN);
test_date(false, -269);
test_date("NIIE7", -689);
test_date(-687, -825);
test_date(-701, false);
test_date(4.844234273636019e+307, /[^.]+/);
test_date(-0, "6S6DHOCI");
test_date(-3, /yes.*day/);
test_date("ZBL", 1.158857757993209e+308);
test_date(1.7245941488634468e+308, "EPNQ31Z");
test_date(-19, /yes[^]*day/);
test_date(+0, /yes.*day/);
test_date(-123, 2.4213720861417494e+307);
test_date(-801, NaN);
test_date(1.1441564525236326e+308, -147);
test_date(+0, "0U3OWS");
test_date(2.882034039837535e+307, NaN);
test_date("6I6UEM", -761);
test_date(-667, true);
test_date(/[\u0400-\u04FF]+/g, Infinity);
test_date(-517, "RVGZ");
test_date(-341, /foo/g);
test_date("Q98G377M0", "BXVUC326A");
test_date(1.5258967610852997e+308, -267);
test_date(undefined, -713);
test_date("MIX", -0);
test_date(/(\w+)\s(\w+)/, undefined);
test_date(null, 1.1642853421971976e+308);
test_date("SRCQ", Infinity);
test_date(1.4113339357915115e+308, "U3UT");
test_date(8.823106753228583e+307, 2.787472714624919e+307);
test_date(Infinity, /(\w+)\s(\w+)/);
test_date(/[\u0400-\u04FF]+/g, 1.3582781087780229e+308);
test_date(/\r\n|\r|\n/, 3.7937231691844924e+307);
test_date(undefined, "JZ7Q92O2X5");
test_date(true, "N713AZW08");
test_date("464DW3P", Infinity);
test_date(/foo/g, -203);
test_date(Infinity, "3UCORX39");
test_date("1X6", true);
test_date(1.0760737029975413e+308, null);
test_date("FUH8OHP", 1.1247733380544932e+307);
test_date(-711, /ab+c/);
test_date(1.107476152520017e+308, false);
test_date(1.2034262108269952e+308, 1.680753115697875e+308);
test_date(-291, "1E9U4");
test_date(1.0123555618318383e+308, 8.203827722188624e+307);
test_date(-0, "67BH8D");
test_date(-513, "YJR7C13");
test_date(null, "HSU6XW5UG");
test_date(8.664118808212208e+306, /yes[^]*day/);
test_date(/foo/g, /yes[^]*day/);
test_date(-559, -963);
test_date(-377, -617);
test_date(/yes[^]*day/, 5.860924784398226e+307);
test_date(9.885459224621123e+307, Infinity);
test_date("HRA10", 1.922530542109339e+307);
test_date(-895, /[\u0400-\u04FF]+/g);
test_date(false, -475);
test_date("G22O9", 2.4426009828218635e+305);
test_date(+0, "KOL7ZT2X");
test_date(undefined, undefined);
test_date(-991, "80RA");
test_date("R2SP6", "1SJI");
test_date("BYG", /[^.]+/);
test_date(5.770218353707609e+307, 1.7322783469010355e+308);
test_date(/\r\n|\r|\n/, "4U55DO2P");
test_date(Infinity, undefined);
test_date(true, -729);
test_date(undefined, 4.732726102742209e+307);
test_date("UX73EOVMF", false);
test_date(Infinity, -861);
test_date("ZE5CHJJP", -167);
test_date(9.22651050773828e+307, "VML3AOR");
test_date(/ab+c/, /\r\n|\r|\n/);
test_date(4.847833390270562e+307, 1.2511279047536327e+308);
test_date("IK2PFZBD", "SONH0");
test_date(-0, /ab+c/);
test_date(-0, "ZX50JSH");
test_date("WWV6KGEZOG", -837);
test_date(false, +0);
test_date(-93, undefined);
test_date(8.63972294415556e+307, /foo/g);
test_date("AT21N", true);
test_date(/\r\n|\r|\n/, "YDA");
test_date(1.161052810051313e+308, "H23XFJ");
test_date(Infinity, 1.415948494207206e+308);
test_date(-809, 8.529051371680128e+307);
test_date(true, -833);
test_date(-977, /[^.]+/);
test_date(/[^.]+/, Infinity);
test_date(-173, "5C2S");
test_date("UCISE", false);
test_date("R6TB23", -183);
test_date(-847, 1.6713254335057109e+308);
test_date(/yes[^]*day/, true);
test_date(/[\u0400-\u04FF]+/g, "PRF4R");
test_date(1.5041814709670879e+308, -0);
test_date(/foo/g, -47);
test_date(null, true);
test_date(false, "LHFLB4X");
test_date(true, 5.094551336649511e+307);
test_date(-349, true);
test_date("F2V1I5JIEY", "2JZF");
test_date(-45, 4.302863768173982e+306);
test_date(7.71100765953436e+307, false);
test_date(+0, undefined);
test_date(/[\u0400-\u04FF]+/g, 1.0905359270083721e+308);
test_date(1.3598726458633274e+307, "UYLE3YIC");
test_date(/foo/g, NaN);
test_date(8.24146927616357e+307, "8TQE");
test_date(Infinity, "BIWWKA");
test_date(false, 8.940618323385582e+307);
test_date("6BTLQ2F", undefined);
test_date(true, "Z0QY5");
test_date(-881, +0);
test_date(7.04400277110276e+307, /foo/g);
test_date(/yes.*day/, -263);
test_date(/\r\n|\r|\n/, NaN);
test_date("GHVGTJ", /yes.*day/);
test_date(1.4543050284643356e+308, null);
test_date(+0, /\r\n|\r|\n/);
test_date(4.349611119915368e+307, "GWC6WYAJ8Q");
test_date(false, "DLELV");
test_date(7.385662448381356e+306, 9.866974246797916e+307);
test_date("5R8XFSJ9R9", true);
test_date(8.427171512972001e+307, -0);
test_date("R4K3", -425);
test_date("0AOO0ND3", +0);
test_date(8.362072829991376e+307, "7ICW82");
test_date(/[\u0400-\u04FF]+/g, "BZC16Q7FX4");
test_date(/[\u0400-\u04FF]+/g, 1.081159630772899e+308);
test_date("56B4", -119);
test_date(-231, true);
test_date(-843, "VQN0U7CZ");
test_date("DCQEC5G", +0);
test_date("H8WFPU", "ZDHZY02O");
test_date("3UZN", /\r\n|\r|\n/);
test_date(-0, "N74E");
test_date(3.267325490046376e+307, 1.2449934715472613e+308);
test_date("CUW7RKCL", /[^.]+/);
test_date(undefined, "R3HHIDL");
test_date(false, 1.206903873815386e+308);
test_date(1.5539312914985684e+308, false);
test_date(null, /\r\n|\r|\n/);
test_date(5.70693310883895e+307, /[\u0400-\u04FF]+/g);
test_date("NG395U6D8V", /(\w+)\s(\w+)/);
test_date(1.7178009775865729e+308, Infinity);
test_date(1.5725856201696143e+308, false);
test_date("DNC", "PDIIILH0T");
test_date(false, -0);
test_date(+0, 1.5114385042018313e+308);
test_date(/[\u0400-\u04FF]+/g, -689);
test_date(-121, /foo/g);
test_date(false, 6.72873529124805e+307);
test_date(true, /foo/g);
test_date(false, 1.5026296283199226e+308);
test_date(Infinity, 1.120617908247511e+307);
test_date(1.4995598188214455e+308, 9.930725938634855e+307);
test_date(/[^.]+/, 4.521651427373657e+307);
test_date("EERQO", null);
test_date(8.679649625850587e+307, Infinity);
test_date("QZSF21PX", "Q98OOURXL");
test_date(7.044912459364946e+307, "M0VL");
test_date("FGRG7B", false);
test_date(7.921286213255281e+307, -0);
test_date(1.736609862814999e+308, +0);
test_date(/yes.*day/, 1.5447271224809292e+307);
test_date("T7L32", -751);
test_date(/yes[^]*day/, -221);
test_date(1.4723684246632747e+308, -713);
test_date("4C0L9FH925", /yes.*day/);
test_date("Y9BMJGVG8", "T5VU6PGZ8E");
test_date(NaN, /ab+c/);
test_date(1.5479169262184211e+308, undefined);
test_date(1.0713691408910102e+308, 2.498473115112677e+307);
test_date(false, "5YQSZ");
test_date(-555, -441);
test_date(Infinity, false);
test_date("XARDSDYIAD", "2IN1Q9YT");
test_date(/yes[^]*day/, "42CCJ2B");
test_date(7.482955015561119e+307, "ODOX");
test_date(1.7781946704321668e+308, "K2DQ");
test_date(undefined, /(\w+)\s(\w+)/);
test_date("0QDWBQ2", /foo/g);
test_date(Infinity, "1EEY");
test_date("KTMNPFAA", 2.2361818000004325e+307);
test_date(-891, null);
test_date(NaN, "70OJVX8EJ");
test_date(-0, "CSCFLN");
test_date("1N8HO9UTYE", "WN3SORBBVX");
test_date(-0, +0);
test_date(-191, -459);
test_date(undefined, NaN);
test_date(/\r\n|\r|\n/, /[^.]+/);
test_date(/yes[^]*day/, 1.1759086810303496e+308);
test_date(true, "FVD0");
test_date(1.4130714086995737e+308, 1.1639471745972683e+308);
test_date(8.013369967191471e+307, -661);
test_date(/\r\n|\r|\n/, undefined);
test_date("KJX9KD", true);
test_date("XI7", /yes.*day/);
test_date(1.7347459763678152e+308, /(\w+)\s(\w+)/);
test_date(-43, +0);
test_date("0G9OE", NaN);
test_date(-779, /yes.*day/);
test_date(3.483845738839527e+307, "MA3IW3");
test_date("42Y", 1.62101992973606e+308);
test_date(5.512737851366118e+307, undefined);
test_date(/[^.]+/, -741);
test_date(+0, 1.5753874890730669e+308);
test_date(null, -411);
test_date(6.577264056851961e+306, 1.53098583948965e+308);
test_date(2.6456895200983593e+307, "93AQK");
test_date("DKG3T84", 4.2282455228298225e+307);
test_date(-359, 1.7689328601393796e+308);
test_date("C67", "NZ1Z");
test_date(5.874287590370335e+307, false);
test_date("SEXR4", "BJHXG01FB4");
test_date(/[\u0400-\u04FF]+/g, -977);
test_date(-67, -535);
test_date("YT1C08", true);
test_date(9.727587242671575e+307, NaN);
test_date(-341, "PCZKNJOY");
test_date(true, "TB7C");
test_date(9.674075218266352e+307, undefined);
test_date(9.3557632408114e+307, "XAP4");
test_date(-0, "K2V9UM");
test_date(+0, 4.3085649445681795e+307);
test_date(1.7616081764064737e+308, /(\w+)\s(\w+)/);
test_date(true, -465);
test_date(-123, -0);
test_date(-653, 3.895362070706111e+307);
test_date("J2Y5VT", 6.757642445637732e+306);
test_date("8PP95S", -541);
test_date(/yes[^]*day/, NaN);
test_date(-645, -0);
test_date(-65, -829);
test_date("YGIN9BNQN", 1.4316209959723533e+307);
test_date(1.5406052917228407e+308, null);
test_date(7.170136255827654e+307, Infinity);
test_date(/[^.]+/, 4.4428717967461966e+307);
test_date(6.202302276648933e+307, 1.151318748410591e+308);
test_date(/[^.]+/, "W4YWY53HLJ");
test_date(-637, /[\u0400-\u04FF]+/g);
test_date("6F3PMC9", "K3I4UO75BF");
test_date(true, "X9E10WJ6");
test_date(-857, undefined);
test_date(-191, /ab+c/);
test_date(+0, /yes[^]*day/);
test_date(null, Infinity);
test_date("F2P", "MEUMHBP");
test_date("EEFH", false);
test_date("ZNB8", /ab+c/);
test_date(/\r\n|\r|\n/, "FW285EE3O");
test_date(-0, "83HYCD2");
test_date("LZ9N", 8.568663058680392e+307);
test_date(/ab+c/, /ab+c/);
test_date(false, -265);
test_date(/[^.]+/, -0);
test_date(4.0868716476026916e+307, false);
test_date(-497, "DHPNSH");
test_date("8E5", true);
test_date("YHO1O470", -485);
test_date("Z482NS3", false);
test_date(-911, 3.027174152871353e+307);
test_date(true, -743);
test_date(-107, /ab+c/);
test_date(1.1545319460090099e+308, /[\u0400-\u04FF]+/g);
test_date(undefined, /[\u0400-\u04FF]+/g);
test_date(/yes.*day/, /[\u0400-\u04FF]+/g);
test_date("ECWX82", -503);
test_date(NaN, -479);
test_date(4.664986689228661e+307, "1O9");
test_date("N99", null);
test_date(+0, -173);
test_date(-747, "CD6");
test_date("P5K8D", 1.1888683753465758e+308);
test_date(1.0811555233267833e+308, false);
test_date(1.5169358143162747e+308, false);
test_date(1.0153511288084406e+308, /[^.]+/);
test_date(7.341190658779109e+307, false);
test_date(/ab+c/, /[\u0400-\u04FF]+/g);
test_date(-577, 1.3611202453392882e+308);
test_date(-531, "2UKLA9S4I");
test_date("F5PXG", -345);
test_date(false, 1.4968891645930399e+308);
test_date(-923, -931);
test_date("4RG23", -0);
test_date(NaN, -349);
test_date("ULR9EMOK", false);
test_date(+0, /foo/g);
test_date(-557, 4.302863768173982e+306);
test_date(-275, -975);
test_date(-985, /yes.*day/);
test_date("PRCO9TVR9B", 1.602990585224308e+308);
test_date(undefined, null);
test_date(1.3391170528659957e+307, 2.1180508996486276e+306);
test_date(1.0528660428165425e+308, -0);
test_date(-483, false);
test_date(1.5052889384335534e+308, -0);
test_date(1.6111978439690162e+308, /[^.]+/);
test_date(7.773816383575472e+307, Infinity);
test_date(/foo/g, "2B2D9OTE");
test_date("6PEHYWLD", -0);
test_date(+0, 1.6623931007263368e+308);
test_date(-499, undefined);
test_date(6.875595562177561e+307, false);