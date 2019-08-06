/*
* This file is automatically generated by Swami
*
* 2019-08-06 12:34:11.409446
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
function test_math_asinh(x){
	if (Object.is( x,NaN )){
		var output = Math.asinh(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.asinh(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === - 0 )){
		var output = Math.asinh(x);
		assert.strictEqual(- 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === + Infinity )){
		var output = Math.asinh(x);
		assert.strictEqual(+ Infinity, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}



/*TESTS GENERATED AUTOMATICALLY*/
test_math_asinh(-0);
test_math_asinh(5.387339904616314e+307);
test_math_asinh(-529);
test_math_asinh(/ab+c/);
test_math_asinh(/[^.]+/);
test_math_asinh(false);
test_math_asinh(true);
test_math_asinh(5.584102856235098e+307);
test_math_asinh(-755);
test_math_asinh(2.9288111859393486e+307);
test_math_asinh(1.33213834333184e+308);
test_math_asinh(/(\w+)\s(\w+)/);
test_math_asinh(-19);
test_math_asinh(1.4234370375735812e+308);
test_math_asinh(7.111296803562243e+307);
test_math_asinh(undefined);
test_math_asinh(1.0323128788391986e+308);
test_math_asinh("DHHD5");
test_math_asinh(NaN);
test_math_asinh(1.2889643112776428e+308);
test_math_asinh(-559);
test_math_asinh(null);
test_math_asinh(-965);
test_math_asinh(-349);
test_math_asinh(-997);
test_math_asinh(/\r\n|\r|\n/);
test_math_asinh(-77);
test_math_asinh(-369);
test_math_asinh("18R613E7");
test_math_asinh("U3X7");
test_math_asinh(/[\u0400-\u04FF]+/g);
test_math_asinh(9.994455098030149e+307);
test_math_asinh(1.2273472484003787e+308);
test_math_asinh(6.654928986010864e+307);
test_math_asinh(-969);
test_math_asinh("BFWBA6AD");
test_math_asinh(1.4980597194452393e+308);
test_math_asinh(1.432295406990998e+308);
test_math_asinh("6JB2MPBRNY");
test_math_asinh("VANMPT6");
test_math_asinh(Infinity);
test_math_asinh("OFEMH3STN");
test_math_asinh(-623);
test_math_asinh(7.83517056507951e+307);
test_math_asinh(-377);
test_math_asinh(/yes[^]*day/);
test_math_asinh("E0EUN1");
test_math_asinh(-37);
test_math_asinh("EK6V3O6TO");
test_math_asinh(6.73396324765502e+307);
test_math_asinh(-987);
test_math_asinh(1.3622939501110753e+308);
test_math_asinh(-885);
test_math_asinh(-87);
test_math_asinh(1.1396470618775888e+307);
test_math_asinh(/yes.*day/);
test_math_asinh("K5S51H5Y6G");
test_math_asinh(-933);
test_math_asinh(-49);
test_math_asinh(1.4565864443905587e+308);
test_math_asinh(-323);
test_math_asinh("1VETA");
test_math_asinh(/foo/g);
test_math_asinh(+0);
test_math_asinh(5.175495198025309e+307);
test_math_asinh(-479);
test_math_asinh(1.4223090547851712e+308);
test_math_asinh(-753);
test_math_asinh("9M9J");
test_math_asinh(1.0374831642716865e+308);
test_math_asinh(-141);
test_math_asinh(5.044896540094318e+307);
test_math_asinh("GDWQLLDVA");
test_math_asinh("46Y7IU");
test_math_asinh("YP5");
test_math_asinh(1.2484919113615652e+308);
test_math_asinh(1.2117953556017108e+308);
test_math_asinh("RW4JOI");
test_math_asinh(1.547986506826553e+307);
test_math_asinh(-395);
test_math_asinh(8.253176502285513e+307);
test_math_asinh("MB7O8FX2M");
test_math_asinh("96T7TNKQ2T");
test_math_asinh("89RLWJA2D5");
test_math_asinh(1.6991844211796793e+308);
test_math_asinh(-259);
test_math_asinh(1.0283319214780753e+308);
test_math_asinh(1.724256594818013e+308);
test_math_asinh(1.777100042363442e+308);
test_math_asinh("NFAMO");
test_math_asinh(1.6688007668173012e+308);
test_math_asinh(-65);
test_math_asinh(1.467272046486545e+308);
test_math_asinh(1.0671815429409477e+308);
test_math_asinh(1.5246082056861534e+308);
test_math_asinh("XN2PF");
test_math_asinh(-307);
test_math_asinh(1.205669509618572e+308);
test_math_asinh("GG0TAO7K");
test_math_asinh(2.588699027636091e+307);
test_math_asinh("I0J38L0RM");
test_math_asinh(4.3594624750657926e+307);
test_math_asinh(6.632434897494503e+306);
test_math_asinh(-851);
test_math_asinh(-435);
test_math_asinh(1.509472076206519e+308);
test_math_asinh("CM1MM");
test_math_asinh("ZREFWJ33B5");
test_math_asinh("P7L");
test_math_asinh(-919);
test_math_asinh(-797);
test_math_asinh("K2IH61FH4E");
test_math_asinh("AL99S1D8W");
test_math_asinh(-55);
test_math_asinh(-299);
test_math_asinh(-287);
test_math_asinh("1C8");
test_math_asinh(4.0132875837190787e+307);
test_math_asinh("J1YV9Q5AVC");
test_math_asinh(-599);
test_math_asinh(-833);
test_math_asinh("O58V816");
test_math_asinh(-749);
test_math_asinh(4.415780991030287e+307);
test_math_asinh("GE1YSA");
test_math_asinh(5.757473690520208e+307);
test_math_asinh("ODXBL7");
test_math_asinh("7ZROBJ");
test_math_asinh(4.719136332411244e+307);
test_math_asinh(-7);
test_math_asinh(-821);
test_math_asinh(3.690437514650149e+307);
test_math_asinh(-335);
test_math_asinh(-43);
test_math_asinh("31K");
test_math_asinh(-371);
test_math_asinh("MR1QU2F");
test_math_asinh(-725);
test_math_asinh(-33);
test_math_asinh(1.168600983175113e+307);
test_math_asinh("AAM0Z");
test_math_asinh("R69D3HL85");
test_math_asinh(-385);
test_math_asinh(-221);
test_math_asinh(1.3087385262673562e+308);
test_math_asinh(-413);
test_math_asinh("65P");
test_math_asinh("V5HTXAM");
test_math_asinh(9.093634591297863e+307);
test_math_asinh(-51);
test_math_asinh("R882DFZIB2");
test_math_asinh(1.1818194025315613e+308);
test_math_asinh(7.070243092218751e+307);
test_math_asinh(4.0995571154174825e+307);
test_math_asinh(1.5482851262684368e+308);
test_math_asinh("9E10KUMN");
test_math_asinh("I2EPLE");
test_math_asinh(1.265852833455728e+308);
test_math_asinh(-213);
test_math_asinh(1.328824090148544e+308);
test_math_asinh(-555);
test_math_asinh(-107);
test_math_asinh("M20N9KR5");
test_math_asinh(-501);
test_math_asinh("9LH37");
test_math_asinh("F3BC1X9");
test_math_asinh("IW00NJVF");
test_math_asinh(1.0121040141875607e+308);
test_math_asinh("KSP93");
test_math_asinh(5.862576378320306e+307);
test_math_asinh(7.491675192129455e+305);
test_math_asinh(-961);
test_math_asinh("4KC5YK");
test_math_asinh(5.3873104470526516e+306);
test_math_asinh(-837);
test_math_asinh(-423);
test_math_asinh("19K");
test_math_asinh(1.796851559939846e+308);
test_math_asinh(-79);
test_math_asinh("WV9SSL0");
test_math_asinh("Y34FS");
test_math_asinh(1.7677824707272709e+308);
test_math_asinh("XERT");
test_math_asinh(6.611894753738447e+307);
test_math_asinh(-67);
test_math_asinh(9.228884087581147e+307);
test_math_asinh("UPO");
test_math_asinh(7.134826582162089e+307);
test_math_asinh(8.990830207035227e+307);
test_math_asinh(-653);
test_math_asinh("BPZ48GOSFR");
test_math_asinh(28);
test_math_asinh("UT705");
test_math_asinh(-629);
test_math_asinh(1.621331143522113e+308);
test_math_asinh(-825);
test_math_asinh(-729);
test_math_asinh(-731);
test_math_asinh("LNDW5U");
test_math_asinh("EXL2");
test_math_asinh(1.346451843769574e+308);
test_math_asinh(1.4790650254629338e+308);
test_math_asinh(-247);
test_math_asinh(2.754454035810588e+307);
test_math_asinh("B2HL4DMM1");
test_math_asinh("O3NXM25J");
test_math_asinh(-707);
test_math_asinh(-139);
test_math_asinh(1.476844985074199e+308);
test_math_asinh(-687);
test_math_asinh(-9);
test_math_asinh(8.433371186625728e+307);
test_math_asinh("BD3L4");
test_math_asinh(-187);
test_math_asinh(1.7389689665564028e+308);
test_math_asinh(1.7161175603869212e+308);
test_math_asinh("3QHR");
test_math_asinh(7.534861104674829e+307);
test_math_asinh("4OXSI");
test_math_asinh(9.840568716691978e+307);
test_math_asinh("H7R83S4");
test_math_asinh(-949);
test_math_asinh(-89);
test_math_asinh(1.4272926435991823e+308);
test_math_asinh(3.001860578269237e+307);
test_math_asinh("74EJOO1BY");
test_math_asinh(-641);
test_math_asinh(1.0564610993195126e+308);
test_math_asinh("KR3H");
test_math_asinh("TRMJEV");
test_math_asinh(1.645676674172156e+308);
test_math_asinh(3.0890510788805196e+307);
test_math_asinh(-115);
test_math_asinh("AXLGIRID");
test_math_asinh("8UYLENG9");
test_math_asinh("F3M8");
test_math_asinh(1.4079286326607592e+308);
test_math_asinh(-193);
test_math_asinh("W4YSF3VY");
test_math_asinh("GZKQ4");
test_math_asinh(5.232623241854e+307);
test_math_asinh(9.775275501339477e+307);
test_math_asinh(1.6200353469042448e+308);
test_math_asinh(8.179462577208754e+307);
test_math_asinh("5PKNAU");
test_math_asinh(4.89201980745988e+306);
test_math_asinh(7.465558539071543e+307);
test_math_asinh(1.007694856596824e+308);
test_math_asinh(-131);
test_math_asinh(1.5510471259874311e+308);
test_math_asinh("BUOJDW6F48");
test_math_asinh("8UPJWIE1FI");
test_math_asinh(1.0556777903309353e+308);
test_math_asinh("T7HERIK9");
test_math_asinh(-525);
test_math_asinh(-331);
test_math_asinh(1.6405696835194803e+308);
test_math_asinh("C3WK");
test_math_asinh(1.0326504544344978e+308);
test_math_asinh("QCHRK4ENQZ");
test_math_asinh("FTW9X2EM");
test_math_asinh("1UJ");
test_math_asinh("TYM0Z8EMA");
test_math_asinh("5USM");
test_math_asinh("DXC");
test_math_asinh("V034PQ");
test_math_asinh(1.2009962197782279e+308);
test_math_asinh(-343);
test_math_asinh("6HHCYG4V");
test_math_asinh("LQLSY9XG8");
test_math_asinh(1.7721299935329892e+308);
test_math_asinh("NN42");
test_math_asinh(1.6819882100465763e+308);
test_math_asinh(1.4731892090312845e+308);
test_math_asinh(1.5107505270834775e+308);
test_math_asinh("4Q286ARZMU");
test_math_asinh("FEFV");
test_math_asinh(-237);
test_math_asinh("ZLT0N");
test_math_asinh(1.3469631752603623e+308);
test_math_asinh("C05YAZJ17E");
test_math_asinh("TG9W8943C");
test_math_asinh("NNO3GGWQ");
test_math_asinh(1.0467173568952939e+307);
test_math_asinh(7.418241574224439e+307);
test_math_asinh(3.1938754873855673e+307);
test_math_asinh(1.25940054072657e+307);
test_math_asinh(-521);
test_math_asinh("LZ0F");
test_math_asinh(4.427159133624079e+307);
test_math_asinh(1.170251625356447e+308);
test_math_asinh("PYXY1WJ7Q3");
test_math_asinh("JXOK");
test_math_asinh(-111);
test_math_asinh("XSH0S");
test_math_asinh("LWMYIBF");
test_math_asinh(2.057212331674459e+307);
test_math_asinh(-945);
test_math_asinh(8.924559632127085e+307);
test_math_asinh(-309);
test_math_asinh(-575);
test_math_asinh("2Z8BWKW0");
test_math_asinh(-457);
test_math_asinh(-841);
test_math_asinh(-41);
test_math_asinh(1.2773366901840887e+308);
test_math_asinh(8.944448131684059e+307);
test_math_asinh(1.049371371300475e+307);
test_math_asinh("7906");
test_math_asinh("ECSPSJT");
test_math_asinh("M11A9W");
test_math_asinh(-661);
test_math_asinh(1.2814230602480265e+308);
test_math_asinh(1.0602013762015965e+308);
test_math_asinh(-249);
test_math_asinh(7.981799964432926e+307);
test_math_asinh(1.7156741131953178e+308);
test_math_asinh("1YJ");
test_math_asinh(-431);
test_math_asinh("ALKEDVZNN");
test_math_asinh(6.86705008198678e+307);
test_math_asinh(-691);
test_math_asinh(-875);
test_math_asinh(-447);
test_math_asinh(-955);
test_math_asinh(7.345980717875901e+307);
test_math_asinh("TBDA");
test_math_asinh(-311);
test_math_asinh(6.45055650969184e+307);
test_math_asinh(-365);
test_math_asinh("FX0YLJ");
test_math_asinh("WZ3H");
test_math_asinh("VEAJURE");
test_math_asinh(-185);
test_math_asinh(9.005974548442635e+307);
test_math_asinh(9.54427644202154e+307);
test_math_asinh(-407);
test_math_asinh(-207);
test_math_asinh("EPU2V694");
test_math_asinh(1.337207964187261e+308);
test_math_asinh(-733);
test_math_asinh("PUB2Z4L8");
test_math_asinh("PCN0XFFXT");
test_math_asinh("JG6I7XV4");
test_math_asinh(2.3316970984146787e+307);
test_math_asinh(7.775115800839264e+307);
test_math_asinh("F725K");
test_math_asinh("HZ79I4C");
test_math_asinh(1.7939149389748422e+308);
test_math_asinh(1.6689379771648812e+308);
test_math_asinh("37IW");
test_math_asinh(-905);
test_math_asinh(2.551504633509876e+307);
test_math_asinh(-515);
test_math_asinh("HEQU6RK");
test_math_asinh("SDS40OBB");
test_math_asinh(1.4026392260749393e+308);
test_math_asinh(1.4318480988663128e+308);
test_math_asinh("S0OR");
test_math_asinh(1.3472550764844441e+308);
test_math_asinh(-787);
test_math_asinh(1.762130598673793e+308);
test_math_asinh("G6ZQXHL1");
test_math_asinh("59RCC");
test_math_asinh(2.127045106220167e+307);
test_math_asinh(1.6915999200877647e+308);
test_math_asinh("DIP");
test_math_asinh(1.57680206198585e+307);
test_math_asinh(8.734597486913403e+307);
test_math_asinh("5TJL1");
test_math_asinh("4XE4BOVO5U");
test_math_asinh(-643);
test_math_asinh(-675);
test_math_asinh(-735);
test_math_asinh(1.3553057831445593e+308);
test_math_asinh(7.537658008658279e+307);
test_math_asinh(1.2941219767830853e+308);
test_math_asinh(-217);
test_math_asinh(-819);
test_math_asinh(1.2729365888764396e+308);
test_math_asinh(6.622364601210883e+307);
test_math_asinh(8.550831991850574e+307);
test_math_asinh("E2NVMWA");
test_math_asinh(-795);
test_math_asinh("C48DJR0");
test_math_asinh(2.4393793140409217e+307);
test_math_asinh("E5YXIT4");
test_math_asinh(4.589443845765158e+307);
test_math_asinh("1KIJ742");
test_math_asinh(-363);
test_math_asinh(-923);
test_math_asinh("3WIX");
test_math_asinh(-241);
test_math_asinh(-615);
test_math_asinh("8Z8");
test_math_asinh(3.631946090225471e+307);
test_math_asinh("5T6O0");
test_math_asinh(2.477697479474752e+306);
test_math_asinh(-441);
test_math_asinh("X84YKW");
test_math_asinh("1P45W");
test_math_asinh(-709);
test_math_asinh("FOEZ3");
test_math_asinh("9EPQIV");
test_math_asinh("VU5");
test_math_asinh("BJZU");
test_math_asinh(1.3901220313667694e+308);
test_math_asinh(1.0222361238587839e+308);
test_math_asinh(-539);
test_math_asinh(3.6360474520416965e+307);
test_math_asinh("LH56QJ3L2");
test_math_asinh("43F804QA");
test_math_asinh(8.193904376641768e+306);
test_math_asinh(1.0559880104050792e+308);
test_math_asinh(-345);
test_math_asinh(1.3222544062405614e+308);
test_math_asinh(-463);
test_math_asinh(-711);
test_math_asinh(1.4239002603005225e+308);
test_math_asinh(-171);
test_math_asinh(-375);
test_math_asinh("ZSIRM");
test_math_asinh(9.358839453453308e+307);
test_math_asinh(6.02751735139748e+307);
test_math_asinh("YQL1S2K0");
test_math_asinh(2.484250251543987e+307);
test_math_asinh(-577);
test_math_asinh("WL0PCF0H7");
test_math_asinh(5.707758487126636e+307);
test_math_asinh(-995);
test_math_asinh(2.3338264037042926e+307);
test_math_asinh(6.421511560719146e+307);
test_math_asinh(-547);
test_math_asinh(-59);
test_math_asinh("ZKRU4UAQ");
test_math_asinh(9.819123978823048e+307);
test_math_asinh(1.7580089445480964e+307);
test_math_asinh(-631);
test_math_asinh("9MDKF");
test_math_asinh(1.3892592825362602e+308);
test_math_asinh("2V0GW5CEZ");
test_math_asinh(-737);
test_math_asinh("55JRNM");
test_math_asinh("Q0CI86WJI6");
test_math_asinh("4MPP");
test_math_asinh(-619);
test_math_asinh(-69);
test_math_asinh(1.0869890269192467e+307);
test_math_asinh(1.784902263368342e+308);
test_math_asinh(9.383990958045599e+306);
test_math_asinh(5.954388498737345e+307);
test_math_asinh(1.3937588415837127e+308);
test_math_asinh("XU0M81ZR");
test_math_asinh("0GCUJ3N");
test_math_asinh(574);
test_math_asinh(-999);
test_math_asinh("5R3PGF");
test_math_asinh("YXKCFC");
test_math_asinh("5A9COV4W");
test_math_asinh(-367);
test_math_asinh("ZY1X");
test_math_asinh(-807);
test_math_asinh("HQL");
test_math_asinh("LVT");
test_math_asinh("434WJJQZ");
test_math_asinh(-595);
test_math_asinh("KUZVH9CT");
test_math_asinh("F1QTOTTJEW");
test_math_asinh(-127);
test_math_asinh(1.4447428457660983e+308);
test_math_asinh(1.2598742930448655e+308);
test_math_asinh(1.4225977458876713e+308);
test_math_asinh(1.454882177658623e+308);
test_math_asinh(-353);
test_math_asinh("P58");
test_math_asinh(-557);
test_math_asinh("GPNDNV");
test_math_asinh(6.269171325689519e+307);
test_math_asinh(-747);
test_math_asinh(1.0044379101928248e+308);
test_math_asinh(-719);
test_math_asinh(8.670705183606889e+307);
test_math_asinh(1.178126080159852e+308);
test_math_asinh(-125);
test_math_asinh(2.2474057386390003e+306);
test_math_asinh("I9F03Y");
test_math_asinh(3.3960251477460403e+307);
test_math_asinh(-891);
test_math_asinh("HQ8SMNJJ");
test_math_asinh(1.0443703784480637e+308);
test_math_asinh(1.7566378443753428e+308);
test_math_asinh(1.1767953947105476e+308);
test_math_asinh(1.46197892242643e+308);
test_math_asinh(-767);
test_math_asinh(-551);
test_math_asinh(-855);
test_math_asinh(-895);
test_math_asinh("C8SP1");
test_math_asinh("4LYS0F3");
test_math_asinh(-761);
test_math_asinh("5GVVQ");
test_math_asinh("97D1");
test_math_asinh(-593);
test_math_asinh(9.53808554005942e+307);
test_math_asinh(-793);
test_math_asinh(2.684653850658873e+307);
test_math_asinh("69M3");
test_math_asinh(-465);
test_math_asinh(4.873169265077834e+307);
test_math_asinh("9NYY65QA1");
test_math_asinh("ACI");
test_math_asinh("WV9D");
test_math_asinh("URS8K4B");
test_math_asinh("IBEU0VG");
test_math_asinh(9.213692351883202e+307);
test_math_asinh(-333);
test_math_asinh(-843);
test_math_asinh(9.039230986302728e+307);
test_math_asinh("NNFFW");
test_math_asinh("9K31");
test_math_asinh(7.905827224064647e+307);
test_math_asinh("473FEH1E6Q");
test_math_asinh(-939);
test_math_asinh("VBM0V7");
test_math_asinh("6KUB0ZS");
test_math_asinh(3.1336507895139096e+307);
test_math_asinh(2.2818642626179393e+306);
test_math_asinh(-541);
test_math_asinh("J6KQ");
test_math_asinh("RQDZ6D");
test_math_asinh("SH6DYTLLRS");
test_math_asinh(9.372978529304118e+307);
test_math_asinh("QA2");
test_math_asinh(-993);
test_math_asinh(1.0570926667876636e+308);
test_math_asinh(1.8021550462287436e+307);
test_math_asinh(8.317742330490702e+307);
test_math_asinh("Y66KS82NV1");
test_math_asinh(-181);
test_math_asinh("C290TSCTQG");
test_math_asinh("AD5");
test_math_asinh(2.45958366606464e+307);
test_math_asinh("CIHYZY56");
test_math_asinh("9UV");
test_math_asinh("W9K7");
test_math_asinh(-151);
test_math_asinh(-427);
test_math_asinh(1.0720956131257587e+308);
test_math_asinh(1.4149355499125872e+308);
test_math_asinh("N3NWI");
test_math_asinh(1.0662581716171932e+308);
test_math_asinh("UEUAPC");
test_math_asinh(-3);
test_math_asinh("6IU");
test_math_asinh(7.836777126684176e+307);
test_math_asinh(2.1817224340849685e+307);
test_math_asinh("XBN7L");
test_math_asinh(6.495006705316677e+307);
test_math_asinh(4.334576973374108e+307);
test_math_asinh(6.89291171284206e+307);
test_math_asinh("VTBDI4GX1");
test_math_asinh("D9B2HEX673");
test_math_asinh("P07KYW1HVQ");
test_math_asinh(1.6120101394626798e+308);
test_math_asinh(-449);
test_math_asinh(-99);
test_math_asinh(-5);
test_math_asinh("Y5YBOKN");
test_math_asinh("KUW74");
test_math_asinh("GO01M");
test_math_asinh(-159);
test_math_asinh(9.053089556426058e+307);
test_math_asinh(1.375819872242812e+308);
test_math_asinh(-453);
test_math_asinh("6JULLKZJ2");
test_math_asinh(-29);
test_math_asinh(1.2857894455039173e+308);
test_math_asinh(5.487307233385126e+307);
test_math_asinh("EVH0");
test_math_asinh(1.0624132213335598e+308);
test_math_asinh("DOKT");
test_math_asinh("8KR8");
test_math_asinh(-459);
test_math_asinh(-533);
test_math_asinh(-951);
test_math_asinh(5.824854685822585e+307);
test_math_asinh(1.179198469293178e+307);
test_math_asinh("PJKF");
test_math_asinh(1.2114536500393803e+308);
test_math_asinh(-239);
test_math_asinh(-329);
test_math_asinh("A8YIEY8F");
test_math_asinh(-511);
test_math_asinh(1.4568003695060844e+308);
test_math_asinh("EI5SNODWST");
test_math_asinh(-477);
test_math_asinh("XNXG");
test_math_asinh(1.2634766871252397e+308);
test_math_asinh(2.1520426658204073e+307);
test_math_asinh("4M3");
test_math_asinh("RMJ1DHN");
test_math_asinh(5.901290240755799e+307);
test_math_asinh(3.617596947249972e+307);
test_math_asinh(-383);
test_math_asinh(1.69304377187318e+308);
test_math_asinh(1.482416386760212e+308);
test_math_asinh("UM8H6");
test_math_asinh(1.6931330266180426e+308);
test_math_asinh(1.9681211527792246e+307);
test_math_asinh("83H184");
test_math_asinh(-649);
test_math_asinh(6.278634939150923e+307);
test_math_asinh(2.4587625362766215e+307);
test_math_asinh(1.1978569800271538e+308);
test_math_asinh(1.3335044983364262e+308);
test_math_asinh(4.006874139604574e+307);
test_math_asinh("GDN75LARMG");
test_math_asinh(-741);
test_math_asinh("IA5DBAKQH");
test_math_asinh("EQYT5AX6");
test_math_asinh(1.0851078347930372e+308);
test_math_asinh(-523);
test_math_asinh(-981);
test_math_asinh(-227);
test_math_asinh(9.550306713875647e+306);
test_math_asinh("FAB22");
test_math_asinh(3.7995838337179907e+307);
test_math_asinh(4.0672711565807696e+307);
test_math_asinh(5.335664576135703e+307);
test_math_asinh("CK0");
test_math_asinh(1.2442337339429215e+308);
test_math_asinh("3GPMRSMU");
test_math_asinh(2.5603466747152807e+307);
test_math_asinh("6PP");
test_math_asinh(1.6309641999076966e+308);
test_math_asinh("9WU3I1F");
test_math_asinh("U7VHPW");
test_math_asinh("EJW8LHT");
test_math_asinh("2G26DMR3");
test_math_asinh(-527);
test_math_asinh(-117);
test_math_asinh(1.4931656172908616e+308);
test_math_asinh(-531);
test_math_asinh("5NMJ");
test_math_asinh(1.2953217304146261e+308);
test_math_asinh(8.407266155795096e+307);
test_math_asinh(-925);
test_math_asinh(2.4579315616440252e+306);
test_math_asinh(1.539338261881174e+308);
test_math_asinh("3GLGTBOKO");
test_math_asinh(5.793643258381349e+307);
test_math_asinh(-579);
test_math_asinh(1.622638646485786e+308);
test_math_asinh(1.4910293060274935e+308);
test_math_asinh(1.35321871314652e+308);
test_math_asinh(1.1247207367313016e+308);
test_math_asinh(3.005358016435891e+307);
test_math_asinh("B6P");
test_math_asinh(1.4959571045975446e+308);
test_math_asinh("EPF27IBTI");
test_math_asinh("YHBFIX");
test_math_asinh("7ZG5");
test_math_asinh("5RU");
test_math_asinh(3.4773365021596875e+306);
test_math_asinh(1.4267917657143188e+308);
test_math_asinh("UAU");
test_math_asinh(-673);
test_math_asinh(3.479023058583744e+307);
test_math_asinh(-613);
test_math_asinh(1.7219494906986066e+308);
test_math_asinh("A47X5");
test_math_asinh("GMYP6TJP");
test_math_asinh(1.6291274061599355e+308);
test_math_asinh(14);
test_math_asinh(-603);
test_math_asinh(6.854671266815844e+307);
test_math_asinh("M9MMZ");
test_math_asinh(4.303860346058257e+307);
test_math_asinh(8.196302536816916e+307);
test_math_asinh(1.7011587780140883e+308);
test_math_asinh(1.2534022431490665e+308);
test_math_asinh(5.299208003731122e+307);
test_math_asinh("GVOLT41T");
test_math_asinh(-835);
test_math_asinh(9.089629651564728e+307);
test_math_asinh(-569);
test_math_asinh(-161);
test_math_asinh(1.332980340224177e+307);
test_math_asinh(1.6616596945442916e+308);
test_math_asinh("LKMET8ZAAS");
test_math_asinh(8.409759913465733e+307);
test_math_asinh("Q2RX2G");
test_math_asinh("8LLU0OIX");
test_math_asinh(7.557076762597091e+307);
test_math_asinh(2.2247661968056063e+307);
test_math_asinh(-83);
test_math_asinh("Q30UBWUWV");
test_math_asinh(-743);
test_math_asinh("AYC");
test_math_asinh(-803);
test_math_asinh("X0V");
test_math_asinh(5.616335205809747e+307);
test_math_asinh(4.521869069213e+306);
test_math_asinh(-219);
test_math_asinh("MGTZ3TA5");
test_math_asinh(5.802904779145517e+307);
test_math_asinh("U9ZBW");
test_math_asinh(-91);
test_math_asinh(-255);
test_math_asinh("JPQJEI");
test_math_asinh(8.214495151892408e+307);
test_math_asinh(1.6970304176700918e+308);
test_math_asinh(-915);
test_math_asinh(6.825773083292202e+307);
test_math_asinh("U1P");
test_math_asinh("04C");
test_math_asinh("VYMXN2");
test_math_asinh("LOYE");
test_math_asinh("OMVZIC1");
test_math_asinh("610JY4");
test_math_asinh("X5SK");
test_math_asinh("7J7TY");
test_math_asinh("QFJU4T");
test_math_asinh(-391);
test_math_asinh("K882WQSGY");
test_math_asinh("IIWZL4EVY1");
test_math_asinh(8.435356220161628e+307);
test_math_asinh("5OKCLBB7IC");
test_math_asinh("IUENOYD52T");
test_math_asinh(1.7654302700598247e+308);
test_math_asinh(7.440203566626661e+307);
test_math_asinh("GCWPIMJ8R");
test_math_asinh("4JBVHUUK");
test_math_asinh(-291);
test_math_asinh("87FX");
test_math_asinh("W211NA3");
test_math_asinh(1.0996488627251155e+308);
test_math_asinh(9.81105992117282e+307);
test_math_asinh(2.1773403616389068e+307);
test_math_asinh("QGVC");
test_math_asinh("B5C");
test_math_asinh(1.3109937668777668e+307);
test_math_asinh(-573);
test_math_asinh(1.3855155334071192e+308);
test_math_asinh(-553);
test_math_asinh("K33ARNG5G");
test_math_asinh("G7ILU8MZKD");
test_math_asinh("2SFEK1");
test_math_asinh("HUTXGEL5G");
test_math_asinh(-433);
test_math_asinh(1.2906901816168093e+308);
test_math_asinh(3.9262527125801595e+307);
test_math_asinh(1.3767708635256883e+308);
test_math_asinh("B8ZUCDM");
test_math_asinh(1.3825907070765957e+308);
test_math_asinh(9.814625469415024e+307);
test_math_asinh("770J1YO");
test_math_asinh(9.828675524985287e+307);
test_math_asinh(1.515052244508751e+308);
test_math_asinh(1.2402886281174218e+308);
test_math_asinh("MG1IOI0AXJ");
test_math_asinh(1.7759722270462518e+308);
test_math_asinh(-97);
test_math_asinh(-881);
test_math_asinh(1.4904131958402784e+308);
test_math_asinh("JF4VPBRT");
test_math_asinh(1.218923932241913e+308);
test_math_asinh(-503);
test_math_asinh("JYTBXN");
test_math_asinh("3JF6C3KG");
test_math_asinh(-745);
test_math_asinh(-769);
test_math_asinh(-225);
test_math_asinh(1.6122426585288388e+308);
test_math_asinh(3.903304180242057e+307);
test_math_asinh("5U899ATE");
test_math_asinh(-103);
test_math_asinh(-663);
test_math_asinh("7UFG4WDFA");
test_math_asinh(-827);
test_math_asinh(1.0295700474364787e+307);
test_math_asinh(-305);
test_math_asinh("OYGYJ9P");
test_math_asinh(-167);
test_math_asinh(-491);
test_math_asinh(6.629861269648659e+307);
test_math_asinh(-831);
test_math_asinh(7.644676676286319e+305);
test_math_asinh(1.742626162022055e+308);
test_math_asinh("VKXT");
test_math_asinh(2.27903258619824e+307);
test_math_asinh("WK1TLZ");
test_math_asinh(-587);
test_math_asinh(4.4822196767471816e+307);
test_math_asinh(-93);
test_math_asinh("D8MNVPG5E");
test_math_asinh("VHFBL7S9U");
test_math_asinh(2.5625646594465954e+307);
test_math_asinh("ECRSG");
test_math_asinh("CC2CTV456G");
test_math_asinh("SINXSBG");
test_math_asinh("L6IHDP8");
test_math_asinh(2.3394942879061494e+307);
test_math_asinh("QQRACK5YUP");
test_math_asinh(1.7166389513269365e+308);
test_math_asinh(-489);
test_math_asinh(-355);
test_math_asinh(8.469174295818977e+307);
test_math_asinh(-639);
test_math_asinh(-379);
test_math_asinh(8.107941983448616e+307);
test_math_asinh(8.930165576995826e+307);
test_math_asinh(-975);
test_math_asinh(-973);
test_math_asinh(-513);
test_math_asinh(1.0988426441884024e+308);
test_math_asinh(9.757789720498552e+307);
test_math_asinh(1.678693066583518e+308);
test_math_asinh(-71);
test_math_asinh(4.3798651888374485e+307);
test_math_asinh(-271);
test_math_asinh("8NIBNO9DQ");
test_math_asinh(6.379576072410266e+307);
test_math_asinh("17PMNC0G2M");
test_math_asinh(-301);
test_math_asinh(5.812014953508108e+307);
test_math_asinh(-883);
test_math_asinh(1.0117831026874728e+308);
test_math_asinh("4N7B4A");
test_math_asinh(1.2868741970006182e+308);
test_math_asinh(-471);
test_math_asinh(2.1911436984026925e+307);
test_math_asinh(-935);
test_math_asinh(8.420113703733332e+307);
test_math_asinh("ZQU");
test_math_asinh(1.074723866298707e+308);
test_math_asinh(-519);
test_math_asinh(-105);
test_math_asinh(3.8724351788653307e+307);
test_math_asinh(1.0832967037297714e+308);
test_math_asinh("2IHA29");
test_math_asinh("AEYHWP");
test_math_asinh(4.90369401516022e+307);
test_math_asinh(7.25273552080468e+307);
test_math_asinh("96O1U");
test_math_asinh(1.116085294219104e+308);
test_math_asinh("MKSGZ");
test_math_asinh(8.134274037782853e+307);
test_math_asinh(2.974195749471273e+307);
test_math_asinh(-389);
test_math_asinh("237AI1R");
test_math_asinh("AJYV");
test_math_asinh("KU0SJ9CGNF");
test_math_asinh(1.5861433353537454e+308);
test_math_asinh("NYRY82Z");
test_math_asinh(6.026644300576741e+307);
test_math_asinh("WF9MQ07I");
test_math_asinh(1.5436202440435373e+308);
test_math_asinh(5.101692600960521e+307);
test_math_asinh("L4M8");
test_math_asinh(-73);
test_math_asinh(5.71345392126801e+307);
test_math_asinh(-549);
test_math_asinh("Z1JV5");
test_math_asinh(3.8596585797969643e+307);
test_math_asinh(5.051809098125182e+307);
test_math_asinh(-789);
test_math_asinh(-991);
test_math_asinh(-723);
test_math_asinh("XSURRZ");
test_math_asinh(5.311754123778749e+307);
test_math_asinh(1.0684524464923659e+307);
test_math_asinh(1.2146489378095421e+308);
test_math_asinh(1.2152444248148954e+308);
test_math_asinh(5.59645831312915e+307);
test_math_asinh(-157);
test_math_asinh("YJDXO");
test_math_asinh("X4JQLUA");
test_math_asinh(9.128296339883373e+307);
test_math_asinh(-245);
test_math_asinh("J3W19G");
test_math_asinh("D0204K");
test_math_asinh("NDOLPJ");
test_math_asinh(1.7729838047847564e+308);
test_math_asinh("LZDA4G");
test_math_asinh(1.7803557159925181e+308);
test_math_asinh("G9S");
test_math_asinh(-757);
test_math_asinh(1.3279590389671894e+307);
test_math_asinh("JGM2");
test_math_asinh("EE7XMK");
test_math_asinh(3.758956159389531e+307);
test_math_asinh(7.282174435397306e+307);
test_math_asinh(7.950273086229244e+307);
test_math_asinh(-121);
test_math_asinh(8.844375027286538e+307);
test_math_asinh("SBETGC8A");
test_math_asinh("65BNIJOVQ");
test_math_asinh("2SOBL");
test_math_asinh("YUYAA0KJQ");
test_math_asinh(-931);
test_math_asinh(1.3979652157048325e+308);
test_math_asinh(3.2799525559759085e+307);
test_math_asinh(-967);
test_math_asinh("8ISRE5P");
test_math_asinh("GPLLHJ");
test_math_asinh(-257);
test_math_asinh(4.69033248223757e+307);
test_math_asinh(5.324298709852617e+307);
test_math_asinh("TNULPG");
test_math_asinh(1.0667168709977057e+308);
test_math_asinh(1.2877253240445302e+308);
test_math_asinh("LNWX6");
test_math_asinh(1.155358186520498e+308);
test_math_asinh(3.0384341112085253e+307);
test_math_asinh("TK3BF9");
test_math_asinh(1.5072989622075376e+308);
test_math_asinh("RZN59");
test_math_asinh(-783);
test_math_asinh(1.7281252262828095e+308);
test_math_asinh(8.417687909412874e+306);
test_math_asinh("8F07UHJC");
test_math_asinh(606);
test_math_asinh(6.006621458351905e+307);
test_math_asinh(7.137444550221603e+307);
test_math_asinh(7.335490417367111e+307);
test_math_asinh(-229);
test_math_asinh("9G0");
test_math_asinh("230N0A");
test_math_asinh(2.2398071169653962e+307);
test_math_asinh(1.8355981601021948e+307);
test_math_asinh(1.1889395849478252e+308);
test_math_asinh("CTVJLS4FJ");
test_math_asinh("1IG0NP94C");
test_math_asinh("IZB7");
test_math_asinh("Z0281");
test_math_asinh(-429);
test_math_asinh("G9AVSF80Z");
test_math_asinh("POYHZ1YUFR");
test_math_asinh(-189);
test_math_asinh(1.0227392125940853e+308);
test_math_asinh("Z4VZ9HZH");
test_math_asinh(3.1462554872446107e+307);
test_math_asinh("6OT");
test_math_asinh("3T5ZBAKSP");
test_math_asinh("6I9W4D");
test_math_asinh(-505);
test_math_asinh("VC2W");
test_math_asinh(-647);
test_math_asinh(-319);
test_math_asinh(1.5923814912176997e+308);
test_math_asinh("LF2F9850LL");
test_math_asinh("EQKS26X");
test_math_asinh(1.32850281827859e+308);
test_math_asinh(-867);
test_math_asinh(7.480341893150976e+307);
test_math_asinh("SUWM82V");
test_math_asinh(6.233404775862568e+307);
test_math_asinh(1.732528195666397e+307);
test_math_asinh("5XO8YG2");
test_math_asinh(1.6618170250866144e+308);
test_math_asinh(1.239126039392261e+308);
test_math_asinh("SP7KOPJ2SL");
test_math_asinh(-507);
test_math_asinh(1.7766292704127321e+308);
test_math_asinh(6.171561703424148e+306);
test_math_asinh("AKN2N");
test_math_asinh(-823);
test_math_asinh(1.2104216465202516e+308);
test_math_asinh("3LOS");
test_math_asinh(1.4020641739579224e+308);
test_math_asinh(-781);
test_math_asinh(-393);
test_math_asinh("QMT");
test_math_asinh(1.0162145801533742e+308);
test_math_asinh(1.648979167279122e+307);
test_math_asinh("FG4Q2E");
test_math_asinh(8.594331982076759e+307);
test_math_asinh(3.2669750779856005e+307);
test_math_asinh("HWCV5RUIW");
test_math_asinh("8ZMOU8Q6T");
test_math_asinh("RC9");
test_math_asinh("S800EYW");
test_math_asinh(9.362275853343506e+307);
test_math_asinh(1.7331795717013482e+308);
test_math_asinh(8.529005141296896e+307);
test_math_asinh("QBUOX");
test_math_asinh(9.925361503591895e+307);
test_math_asinh("PMJN6ACXLM");
test_math_asinh("M25H2LFBA");
test_math_asinh(1.6855604796228138e+308);
test_math_asinh(8.915929436581245e+307);
test_math_asinh(-173);
test_math_asinh(1.1942292960202016e+308);
test_math_asinh(8.666921145495126e+307);
test_math_asinh("NWYS5");
test_math_asinh("YNT2PY");
test_math_asinh("CGYLMX");
test_math_asinh(1.7824192880096744e+308);
test_math_asinh("98W8LXP2");