/*
* This file is automatically generated by Swami
*
* 2019-08-09 12:09:04.221886
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
test_math_asinh(false);
test_math_asinh("3RN7TN5VM");
test_math_asinh("O8L");
test_math_asinh(1.7407610891706929e+308);
test_math_asinh(-869);
test_math_asinh(null);
test_math_asinh(1.1442742216139538e+308);
test_math_asinh(-13);
test_math_asinh(7.621568636710241e+307);
test_math_asinh(/\r\n|\r|\n/);
test_math_asinh(-291);
test_math_asinh(/yes.*day/);
test_math_asinh(+0);
test_math_asinh(1.7831439024288753e+308);
test_math_asinh(-57);
test_math_asinh("J13YWK3OU");
test_math_asinh("D1IOQ1A5FZ");
test_math_asinh(Infinity);
test_math_asinh("E376PBQY6M");
test_math_asinh("IU1AJ55");
test_math_asinh(true);
test_math_asinh(/yes[^]*day/);
test_math_asinh("7S8N0");
test_math_asinh("NC0FQ2Q6");
test_math_asinh(NaN);
test_math_asinh(1.3587553101178265e+307);
test_math_asinh(-193);
test_math_asinh(1.4207286317949083e+308);
test_math_asinh(/[\u0400-\u04FF]+/g);
test_math_asinh(-963);
test_math_asinh(/foo/g);
test_math_asinh("B8N");
test_math_asinh(1.1807521881887367e+308);
test_math_asinh(1.7385321512458738e+308);
test_math_asinh(/(\w+)\s(\w+)/);
test_math_asinh(9.954411826291788e+307);
test_math_asinh(/ab+c/);
test_math_asinh(1.631955235693227e+307);
test_math_asinh("INYRNUABV2");
test_math_asinh("5XR8NSY4");
test_math_asinh(2.0157738450365779e+307);
test_math_asinh(-937);
test_math_asinh(-699);
test_math_asinh(-361);
test_math_asinh(1.5361639829392127e+308);
test_math_asinh("WJAC46");
test_math_asinh(-739);
test_math_asinh(3.42006108675533e+307);
test_math_asinh(1.1504963650184936e+308);
test_math_asinh("NLUR");
test_math_asinh(1.0762299663865796e+308);
test_math_asinh(2.792210014349314e+307);
test_math_asinh(-443);
test_math_asinh("N9FPIM");
test_math_asinh(1.4828000043919557e+307);
test_math_asinh(-305);
test_math_asinh("1S7PN");
test_math_asinh(-391);
test_math_asinh(-0);
test_math_asinh(undefined);
test_math_asinh(8.264318562832184e+307);
test_math_asinh(8.241209699117379e+307);
test_math_asinh("JC14X2VD");
test_math_asinh(1.0523516752162575e+308);
test_math_asinh("U2N1XP");
test_math_asinh("FAJA");
test_math_asinh(-539);
test_math_asinh("4TJZS");
test_math_asinh(-457);
test_math_asinh("BZIK1WO7");
test_math_asinh("JSPKH8");
test_math_asinh(4.63334639603961e+307);
test_math_asinh(-823);
test_math_asinh(2.310867843970907e+307);
test_math_asinh(8.936472610593719e+306);
test_math_asinh(1.2247605691768914e+308);
test_math_asinh(-513);
test_math_asinh(1.7326239842480285e+308);
test_math_asinh(/[^.]+/);
test_math_asinh(-603);
test_math_asinh(4.1862660519914727e+307);
test_math_asinh(-927);
test_math_asinh(-659);
test_math_asinh(1.980257918871422e+307);
test_math_asinh("L7ULSJEID");
test_math_asinh("Y7PR83KBSB");
test_math_asinh(1.7615012626045465e+308);
test_math_asinh(-465);
test_math_asinh(-807);
test_math_asinh(1.5973531754948312e+308);
test_math_asinh("ZDTHAQCR");
test_math_asinh(1.7564520971820043e+308);
test_math_asinh(-753);
test_math_asinh(-335);
test_math_asinh(1.4106673868908348e+307);
test_math_asinh(1.4600935763660554e+308);
test_math_asinh("6IVW3X10");
test_math_asinh(-557);
test_math_asinh(-809);
test_math_asinh("E2E5GCJ65");
test_math_asinh("7VRULKSOUZ");
test_math_asinh(-821);
test_math_asinh(1.2989153658658022e+308);
test_math_asinh(6.987751952631556e+307);
test_math_asinh(1.8116758176326063e+307);
test_math_asinh("98YPX");
test_math_asinh("XVG8ZCC");
test_math_asinh("TUMC39");
test_math_asinh(1.7937002529925e+308);
test_math_asinh(-339);
test_math_asinh("X27HSI2GI");
test_math_asinh(1.304446943747559e+308);
test_math_asinh(3.230997668201492e+307);
test_math_asinh("1BEK101R1S");
test_math_asinh(1.1633590578766086e+308);
test_math_asinh(1.2013128361369308e+308);
test_math_asinh(1.2480504191559583e+308);
test_math_asinh(1.5868751051640475e+308);
test_math_asinh("3FH22NB8");
test_math_asinh(1.1559554975036418e+308);
test_math_asinh(1.2325405098973154e+308);
test_math_asinh("EK7Y3");
test_math_asinh("GR5B0J7F");
test_math_asinh(-77);
test_math_asinh(-55);
test_math_asinh(1.0962156484781803e+308);
test_math_asinh("2Z1");
test_math_asinh(-579);
test_math_asinh(-257);
test_math_asinh(1.1297101890962157e+308);
test_math_asinh(1.5008289702934148e+308);
test_math_asinh(1.1833127027281057e+308);
test_math_asinh(-205);
test_math_asinh(-829);
test_math_asinh("633UV3HJ2");
test_math_asinh(1.10300442658789e+308);
test_math_asinh(1.0379022105697924e+308);
test_math_asinh(-851);
test_math_asinh(4.351371376011434e+307);
test_math_asinh(1.2283596749237443e+308);
test_math_asinh("1WWJT");
test_math_asinh("YXPWNT");
test_math_asinh("IH0KB4W1A");
test_math_asinh(-365);
test_math_asinh(-585);
test_math_asinh("EDUE");
test_math_asinh(1.1637429015056162e+308);
test_math_asinh("F744");
test_math_asinh(4.1106966064340077e+307);
test_math_asinh("6IMD8");
test_math_asinh(-613);
test_math_asinh("4HL");
test_math_asinh(-259);
test_math_asinh(1.657519373758791e+308);
test_math_asinh("L3R0IOGMHW");
test_math_asinh(4.532964472015862e+307);
test_math_asinh(-885);
test_math_asinh(-325);
test_math_asinh(2.2439674132325215e+307);
test_math_asinh("N6400O9XD9");
test_math_asinh("UGPMBDG");
test_math_asinh("0GOOU");
test_math_asinh(1.7781532519208164e+308);
test_math_asinh(1.540958306967926e+308);
test_math_asinh(1.4600280566449295e+308);
test_math_asinh("X1Y0TSH39");
test_math_asinh(1.7442232204244687e+308);
test_math_asinh("JL527");
test_math_asinh(-861);
test_math_asinh(-915);
test_math_asinh(6.298975663628081e+307);
test_math_asinh(486);
test_math_asinh(1.1540148807694556e+308);
test_math_asinh(1.2116734626838912e+308);
test_math_asinh("VXPJBTKZ");
test_math_asinh(1.0037953942340786e+308);
test_math_asinh("WT9ETJ9H");
test_math_asinh("2RTE");
test_math_asinh(7.209514166861579e+307);
test_math_asinh(-745);
test_math_asinh(6.931038248795299e+307);
test_math_asinh(-269);
test_math_asinh(-785);
test_math_asinh(5.887744002364315e+307);
test_math_asinh(-5);
test_math_asinh("RTJWSA");
test_math_asinh("1NKNA2");
test_math_asinh(5.396683458036172e+307);
test_math_asinh("K4LNE");
test_math_asinh("I1DXSGW");
test_math_asinh(6.080331383515818e+307);
test_math_asinh(-971);
test_math_asinh(-105);
test_math_asinh("V2SC2");
test_math_asinh(2.795591590080723e+307);
test_math_asinh(1.5875756724914878e+308);
test_math_asinh(1.2000808645314752e+308);
test_math_asinh("J7S");
test_math_asinh("LAKGX8T");
test_math_asinh(-251);
test_math_asinh("CPTZLC1N7V");
test_math_asinh(-343);
test_math_asinh(7.082519801342438e+307);
test_math_asinh(-63);
test_math_asinh(-293);
test_math_asinh("Z6D");
test_math_asinh(8.720858082828538e+307);
test_math_asinh(5.250985748688561e+307);
test_math_asinh(9.402443308751621e+307);
test_math_asinh(-99);
test_math_asinh(1.5265859353991587e+308);
test_math_asinh(-59);
test_math_asinh("75QDPLDU6");
test_math_asinh(-411);
test_math_asinh(9.308447182834457e+307);
test_math_asinh(-485);
test_math_asinh(-337);
test_math_asinh(-911);
test_math_asinh(1.5345207325724257e+308);
test_math_asinh(-359);
test_math_asinh("HV8V7");
test_math_asinh(-519);
test_math_asinh(7.0155993147602874e+305);
test_math_asinh("CYRF1AWQU6");
test_math_asinh("B733K2R6C");
test_math_asinh(1.4854378490902335e+308);
test_math_asinh(9.846836035459453e+307);
test_math_asinh("Y9ONG");
test_math_asinh("XHBFK4M32");
test_math_asinh("XNKP");
test_math_asinh(1.6434940248017867e+308);
test_math_asinh(7.430163494763412e+307);
test_math_asinh(-845);
test_math_asinh(-819);
test_math_asinh("EM5G");
test_math_asinh(1.704017025086011e+307);
test_math_asinh(-345);
test_math_asinh(3.587457966222094e+307);
test_math_asinh(-123);
test_math_asinh(1.48990608522671e+308);
test_math_asinh(1.00422653678045e+308);
test_math_asinh(4.906958105709321e+307);
test_math_asinh(-233);
test_math_asinh("DYTZ");
test_math_asinh("EVJ5J");
test_math_asinh(4.58858197509196e+307);
test_math_asinh("QJ40IN");
test_math_asinh(1.2288338228729105e+308);
test_math_asinh("WDGM");
test_math_asinh(3.529248044392907e+307);
test_math_asinh(7.506062448642688e+307);
test_math_asinh(4.1835512494113603e+307);
test_math_asinh("7RI3JU2");
test_math_asinh(1.6665993978187307e+308);
test_math_asinh(-913);
test_math_asinh(1.4319795827067436e+307);
test_math_asinh("YW9G");
test_math_asinh(1.6429414810845789e+308);
test_math_asinh(-563);
test_math_asinh(-29);
test_math_asinh(-301);
test_math_asinh(8.074272862777874e+307);
test_math_asinh(8.925287085559926e+307);
test_math_asinh(1.4572396042758863e+308);
test_math_asinh(-111);
test_math_asinh(-673);
test_math_asinh("91KIKP");
test_math_asinh(8.782397418032513e+307);
test_math_asinh(-407);
test_math_asinh(-987);
test_math_asinh("6GWB1");
test_math_asinh("1F97XN3U");
test_math_asinh("OPLLWP2L1U");
test_math_asinh(1.3706147501144378e+308);
test_math_asinh(1.1291403345699227e+308);
test_math_asinh(-667);
test_math_asinh(-567);
test_math_asinh("B3QK45");
test_math_asinh("CAU8");
test_math_asinh("3FZU4PR0");
test_math_asinh(-165);
test_math_asinh("WMCNMDP");
test_math_asinh("UYLC92");
test_math_asinh("X2U5K");
test_math_asinh("DC7B6FGKT");
test_math_asinh("YTT");
test_math_asinh(-623);
test_math_asinh("R6DGKK");
test_math_asinh("WVJM1FYPT");
test_math_asinh(-139);
test_math_asinh("MJK87EYT0Z");
test_math_asinh(8.523693053964612e+307);
test_math_asinh("Y7S5ESGW");
test_math_asinh("ITJEG");
test_math_asinh(1.941323192321288e+307);
test_math_asinh(-803);
test_math_asinh("WDSDBQ");
test_math_asinh("K6FN");
test_math_asinh(1.1007402112273777e+307);
test_math_asinh("LJUN");
test_math_asinh(-173);
test_math_asinh(-197);
test_math_asinh("HR468U7G");
test_math_asinh(-727);
test_math_asinh("UIFGC4OE8F");
test_math_asinh("T6C");
test_math_asinh(9.007632214338209e+307);
test_math_asinh(-203);
test_math_asinh("SYZXRT37Q");
test_math_asinh(-905);
test_math_asinh(8.989398965948268e+307);
test_math_asinh("URXZSGQ");
test_math_asinh(1.448724607055042e+308);
test_math_asinh(-109);
test_math_asinh(7.721580771182262e+307);
test_math_asinh(-271);
test_math_asinh(-481);
test_math_asinh(1.6197303137954243e+308);
test_math_asinh(1.2478701950298063e+308);
test_math_asinh("571JZOG36");
test_math_asinh(1.4533925423040147e+308);
test_math_asinh("L3WO");
test_math_asinh("RQ1");
test_math_asinh("D14");
test_math_asinh(2.9584031729031876e+307);
test_math_asinh(1.5677671832560554e+308);
test_math_asinh("EC3PDON");
test_math_asinh(952);
test_math_asinh("V6RJFO7FN");
test_math_asinh("CF9WM");
test_math_asinh(-593);
test_math_asinh("DJT4PZCC02");
test_math_asinh(-801);
test_math_asinh(1.606856221447632e+307);
test_math_asinh(5.611235843845657e+307);
test_math_asinh(-209);
test_math_asinh("SX2");
test_math_asinh(4.703494436939098e+307);
test_math_asinh("AX75F5Y2X");
test_math_asinh("QG7W07");
test_math_asinh("W603DI");
test_math_asinh("ZLILF");
test_math_asinh("MJTUWFT53");
test_math_asinh("64DLQED");
test_math_asinh(-169);
test_math_asinh(1.6922725876685864e+307);
test_math_asinh(1.5071001568643855e+308);
test_math_asinh(1.5347504340894697e+307);
test_math_asinh("LSJ");
test_math_asinh(1.7332366147955347e+308);
test_math_asinh("URMBZ");
test_math_asinh(3.28678792436527e+306);
test_math_asinh("DEU");
test_math_asinh(1.2863942664446805e+308);
test_math_asinh(2.667356578602557e+307);
test_math_asinh(8.465776228549626e+307);
test_math_asinh(1.558557154904514e+308);
test_math_asinh(8.884113861868888e+307);
test_math_asinh(1.3033241892054631e+308);
test_math_asinh("3C2");
test_math_asinh("NTO0HFPR");
test_math_asinh("TZM");
test_math_asinh(1.3718041760974478e+308);
test_math_asinh(1.7057020089947635e+308);
test_math_asinh(-791);
test_math_asinh("BS8DFNR5O");
test_math_asinh(9.201970627129084e+307);
test_math_asinh(3.4734339434626404e+307);
test_math_asinh(1.0781757599938234e+308);
test_math_asinh(3.6153800098667654e+307);
test_math_asinh("W57APAJAX5");
test_math_asinh(1.6170176174451782e+306);
test_math_asinh(9.193243996917253e+307);
test_math_asinh(1.6034878681698064e+308);
test_math_asinh(1.268202594326788e+307);
test_math_asinh("EGLYLD");
test_math_asinh(1.7416385714787028e+308);
test_math_asinh("GSWN");
test_math_asinh("JVD6");
test_math_asinh(1.8454314030204573e+307);
test_math_asinh(1.6852509547471065e+308);
test_math_asinh(-701);
test_math_asinh(-857);
test_math_asinh(-827);
test_math_asinh("DEXOB1ZTS");
test_math_asinh(-649);
test_math_asinh("BO4BC4");
test_math_asinh(-975);
test_math_asinh(1.3429114876108062e+307);
test_math_asinh(-545);
test_math_asinh(1.4369805850192411e+308);
test_math_asinh(-403);
test_math_asinh(1.4466600998525103e+308);
test_math_asinh(1.305990343742647e+307);
test_math_asinh("G37GNAW");
test_math_asinh(-147);
test_math_asinh(-521);
test_math_asinh(7.817626458558554e+307);
test_math_asinh(-679);
test_math_asinh(-7);
test_math_asinh("4WD1MNU");
test_math_asinh(-221);
test_math_asinh(1.6965020414780984e+308);
test_math_asinh(-525);
test_math_asinh(-729);
test_math_asinh(-151);
test_math_asinh(-265);
test_math_asinh("7GSKC");
test_math_asinh(7.08395315314213e+307);
test_math_asinh(1.0834636395130846e+308);
test_math_asinh("VI2");
test_math_asinh(2.478597337863535e+307);
test_math_asinh(1.6627104958958736e+308);
test_math_asinh("AAA4Q1CAXH");
test_math_asinh(1.1294480033837625e+308);
test_math_asinh("KUW74");
test_math_asinh(-97);
test_math_asinh(3.730664097838577e+307);
test_math_asinh(-373);
test_math_asinh("M1EF9SIBU2");
test_math_asinh(-437);
test_math_asinh("1P44H6");
test_math_asinh("WNM");
test_math_asinh(3.365055769579231e+307);
test_math_asinh(1.400801153023836e+308);
test_math_asinh("LEEDPGLQ");
test_math_asinh(-855);
test_math_asinh(1.478370936495022e+308);
test_math_asinh(-427);
test_math_asinh(5.419000582937082e+306);
test_math_asinh("8TV74WKS6");
test_math_asinh(-967);
test_math_asinh(1.2221158736984191e+308);
test_math_asinh("ZHV");
test_math_asinh(7.107752081004381e+307);
test_math_asinh(-409);
test_math_asinh(-775);
test_math_asinh("PIEZ");
test_math_asinh(4.930973846454878e+307);
test_math_asinh(1.582936001927966e+308);
test_math_asinh(1.5701395678981665e+308);
test_math_asinh(9.544474410084318e+307);
test_math_asinh(-793);
test_math_asinh(-235);
test_math_asinh(1.3370817706539143e+308);
test_math_asinh(4.244328646390362e+307);
test_math_asinh(9.980061208084115e+307);
test_math_asinh(-21);
test_math_asinh(-157);
test_math_asinh(3.3135581216493045e+307);
test_math_asinh("ELE7Z6Y");
test_math_asinh(1.0077608588849837e+308);
test_math_asinh(-51);
test_math_asinh("DD5F");
test_math_asinh(-715);
test_math_asinh(-577);
test_math_asinh(-219);
test_math_asinh(6.523256396965302e+307);
test_math_asinh(9.710016237911313e+307);
test_math_asinh(4.969882138051406e+307);
test_math_asinh("Y7CBIP");
test_math_asinh(-85);
test_math_asinh(9.492688192217422e+307);
test_math_asinh("KCAD8MM0");
test_math_asinh(-461);
test_math_asinh("2LFMV0KPGQ");
test_math_asinh("Q0UO7A7AT");
test_math_asinh("NH5IGI5WUE");
test_math_asinh("38Y4H06");
test_math_asinh("9WSHZH");
test_math_asinh(1.1551253535001014e+308);
test_math_asinh("PDC5J1UG1");
test_math_asinh("7A812JH");
test_math_asinh("7AOJFO6");
test_math_asinh("CAJ0YX1M3");
test_math_asinh(-497);
test_math_asinh(1.3915513347478055e+308);
test_math_asinh(8.177709892349761e+307);
test_math_asinh(1.0567314036233973e+308);
test_math_asinh(7.481900200614633e+307);
test_math_asinh(-583);
test_math_asinh(5.793031591469985e+307);
test_math_asinh(-429);
test_math_asinh("4E9F8ZYH");
test_math_asinh(5.246233806001185e+307);
test_math_asinh(-383);
test_math_asinh("V5WFUOCS");
test_math_asinh(1.005373701841283e+308);
test_math_asinh(8.80930491811889e+307);
test_math_asinh(-9);
test_math_asinh(-381);
test_math_asinh("KJC7HV8LB");
test_math_asinh(1.5672999234453581e+308);
test_math_asinh("FCJTRH6K");
test_math_asinh(1.3555825509869092e+308);
test_math_asinh(-39);
test_math_asinh("YJ4HV2");
test_math_asinh("WJ01T0H");
test_math_asinh(-653);
test_math_asinh(1.1183093108250293e+308);
test_math_asinh(-121);
test_math_asinh("CV8QR");
test_math_asinh("W0UWGBJ6I");
test_math_asinh(5.527393767530362e+307);
test_math_asinh(-471);
test_math_asinh(-385);
test_math_asinh(2.8176635104645683e+307);
test_math_asinh("NP5XM1BU1Z");
test_math_asinh(-413);
test_math_asinh("BK2OGD");
test_math_asinh(-119);
test_math_asinh(-415);
test_math_asinh(1.4886993628436253e+308);
test_math_asinh(6.635923290918753e+307);
test_math_asinh(-487);
test_math_asinh(-117);
test_math_asinh(1.3797728134820422e+308);
test_math_asinh(1.6359936638142401e+308);
test_math_asinh("BFVJNMM");
test_math_asinh(7.682771970315878e+307);
test_math_asinh(-267);
test_math_asinh(-769);
test_math_asinh("60SXTRIV");
test_math_asinh(1.6169406993171334e+308);
test_math_asinh(1.1482584752176244e+308);
test_math_asinh(1.422167759015005e+308);
test_math_asinh(-991);
test_math_asinh(-697);
test_math_asinh("ARSW1X");
test_math_asinh(1.6714527531406056e+308);
test_math_asinh("OEBFJU3YS");
test_math_asinh("8OZ3EJCPDM");
test_math_asinh(-771);
test_math_asinh(-787);
test_math_asinh(1.971554583942593e+306);
test_math_asinh(1.718140998463726e+308);
test_math_asinh(-469);
test_math_asinh(-859);
test_math_asinh("9FM39C");
test_math_asinh(1.724153575401758e+308);
test_math_asinh("ONPUWZ9");
test_math_asinh("4GO0CM");
test_math_asinh(3.3897781553488247e+307);
test_math_asinh(1.2041276421665477e+308);
test_math_asinh(1.1503919212272148e+308);
test_math_asinh(-421);
test_math_asinh(-881);
test_math_asinh("MRG");
test_math_asinh("FYCKGJG0");
test_math_asinh("PRA9");
test_math_asinh(-709);
test_math_asinh(-559);
test_math_asinh(1.7896546942062885e+308);
test_math_asinh(4.964291369842124e+307);
test_math_asinh(9.785009316377685e+307);
test_math_asinh(6.083352579699429e+307);
test_math_asinh(1.0153390559117117e+308);
test_math_asinh(7.15993892628399e+307);
test_math_asinh(1.2913733597309262e+308);
test_math_asinh(-303);
test_math_asinh(-565);
test_math_asinh(-923);
test_math_asinh(5.468667340984452e+306);
test_math_asinh(6.72134474258369e+307);
test_math_asinh(2.902558044930117e+307);
test_math_asinh("DZMK");
test_math_asinh("3LTLJ");
test_math_asinh(-441);
test_math_asinh("LNUH6KKE");
test_math_asinh("HT0UGV0WG");
test_math_asinh(-717);
test_math_asinh(1.505831436280679e+308);
test_math_asinh("M60DQLJU");
test_math_asinh(-167);
test_math_asinh(1.0874591734680813e+308);
test_math_asinh(-501);
test_math_asinh("FEM5G2G5");
test_math_asinh(6.206798976563978e+306);
test_math_asinh(1.4898320518531234e+308);
test_math_asinh(1.4002142572875677e+308);
test_math_asinh("S4PJ5");
test_math_asinh(-313);
test_math_asinh("SNG13INWCR");
test_math_asinh("IUMT");
test_math_asinh("5Y8");
test_math_asinh(-287);
test_math_asinh("KB5DN");
test_math_asinh(-599);
test_math_asinh(1.302892955454229e+308);
test_math_asinh("JNBZ3BF");
test_math_asinh(1.379523357962529e+308);
test_math_asinh(-671);
test_math_asinh(9.53808908553276e+307);
test_math_asinh(-393);
test_math_asinh("AOSHT");
test_math_asinh("LUID");
test_math_asinh(-473);
test_math_asinh("E0VDP2HP");
test_math_asinh(-887);
test_math_asinh(1.5942534635943188e+308);
test_math_asinh(-107);
test_math_asinh(1.4156844802803618e+308);
test_math_asinh(1.3990175062914994e+308);
test_math_asinh(9.854172490718427e+307);
test_math_asinh(1.4519928832236386e+308);
test_math_asinh(9.359511784491199e+307);
test_math_asinh(1.1160422964781154e+308);
test_math_asinh(-495);
test_math_asinh("9X3JMH");
test_math_asinh(-777);
test_math_asinh(-723);
test_math_asinh(-341);
test_math_asinh(6.92000849692478e+307);
test_math_asinh("6O2IQILGB");
test_math_asinh(2.051835890841213e+307);
test_math_asinh(-33);
test_math_asinh(9.158865295339074e+307);
test_math_asinh(8.66039485085712e+307);
test_math_asinh("FAXEHT5");
test_math_asinh(7.497226746389972e+306);
test_math_asinh(-79);
test_math_asinh(1.4444777470489476e+308);
test_math_asinh(1.7184878821453828e+308);
test_math_asinh(-179);
test_math_asinh(-877);
test_math_asinh(1.2343780240369492e+308);
test_math_asinh(-195);
test_math_asinh("6IQD3");
test_math_asinh(1.4859271597515697e+308);
test_math_asinh(1.5964908364039843e+308);
test_math_asinh(2.0443536863223087e+306);
test_math_asinh("486V28NU7K");
test_math_asinh(-379);
test_math_asinh("27053SV");
test_math_asinh("EEE34J4S");
test_math_asinh(6.434881937708125e+307);
test_math_asinh(1.6848970296443172e+308);
test_math_asinh("WATIA1MO");
test_math_asinh(1.7294677504481387e+308);
test_math_asinh("FC9XV6Y");
test_math_asinh(-909);
test_math_asinh(4.971039575340115e+307);
test_math_asinh(1.1338721907713761e+308);
test_math_asinh(-837);
test_math_asinh(1.3753727404646296e+308);
test_math_asinh("U0PKW");
test_math_asinh("1I56COPU");
test_math_asinh(7.173977347976636e+307);
test_math_asinh(1.3295290508421692e+308);
test_math_asinh("P5MZ");
test_math_asinh(6.460995859853136e+307);
test_math_asinh("H0BFOS58X");
test_math_asinh(-353);
test_math_asinh(9.619812148358318e+307);
test_math_asinh(8.932078337932362e+307);
test_math_asinh(4.57995550121751e+307);
test_math_asinh(1.1773875054480395e+308);
test_math_asinh("YYDU");
test_math_asinh(4.803037439484195e+307);
test_math_asinh(1.7323870311427425e+307);
test_math_asinh("7P9TL21");
test_math_asinh("A67OR");
test_math_asinh(5.667568054748081e+307);
test_math_asinh(-315);
test_math_asinh(-467);
test_math_asinh(1.0328641957840033e+308);
test_math_asinh(1.3825939538091384e+308);
test_math_asinh(1.331581601038785e+308);
test_math_asinh(1.3994429717530283e+308);
test_math_asinh(8.60742160911014e+307);
test_math_asinh("8YQ");
test_math_asinh(-183);
test_math_asinh(-597);
test_math_asinh(8.318184097726812e+307);
test_math_asinh(1.7569576369748897e+308);
test_math_asinh("PGJSW");
test_math_asinh("GV7A9QC55R");
test_math_asinh(-537);
test_math_asinh("WNBZWVM4");
test_math_asinh("3ZQPQL");
test_math_asinh(-883);
test_math_asinh(-201);
test_math_asinh(1.442548189481352e+308);
test_math_asinh(1.6354333380009917e+307);
test_math_asinh("JQWHM9ET7L");
test_math_asinh(1.7821365756708635e+308);
test_math_asinh(-515);
test_math_asinh(2.8162174715837275e+307);
test_math_asinh("TP8");
test_math_asinh("DP83TX8B6D");
test_math_asinh(9.758529317767954e+307);
test_math_asinh(1.3509358465054878e+308);
test_math_asinh(1.6148161792069384e+308);
test_math_asinh(2.284179008110628e+305);
test_math_asinh("7H8C0BWI0");
test_math_asinh(1.6641248503612997e+308);
test_math_asinh(-115);
test_math_asinh("EQPR");
test_math_asinh(3.619836656457456e+307);
test_math_asinh(7.879250695574483e+307);
test_math_asinh(-355);
test_math_asinh("LJ86P");
test_math_asinh(1.6017275091426008e+308);
test_math_asinh(5.09240982949942e+307);
test_math_asinh("9NJJZER4EZ");
test_math_asinh(9.127772019320552e+307);
test_math_asinh("7WW0");
test_math_asinh(1.0332787590177748e+308);
test_math_asinh(9.798265654461425e+306);
test_math_asinh(-447);
test_math_asinh(3.0359793424797056e+307);
test_math_asinh("QLGU3JOR7");
test_math_asinh("88VE");
test_math_asinh("9QUPF02OQ");
test_math_asinh(1.047626582077705e+308);
test_math_asinh(1.1205788439540868e+308);
test_math_asinh(1.0118739957564636e+308);
test_math_asinh(-433);
test_math_asinh(1.7378716941181698e+307);
test_math_asinh("URHM59A3");
test_math_asinh(1.0058635352499699e+307);
test_math_asinh("34Z7RMQ16E");
test_math_asinh(-47);
test_math_asinh(-509);
test_math_asinh("N0A24H3K");
test_math_asinh("RS5N");
test_math_asinh(6.017710095332681e+307);
test_math_asinh("9ZMNC");
test_math_asinh(-635);
test_math_asinh(1.5710594475410978e+308);
test_math_asinh("G9AWGQL8");
test_math_asinh("C00YMPWK");
test_math_asinh(2.3717237266002553e+307);
test_math_asinh("121A");
test_math_asinh(1.7938908123325344e+307);
test_math_asinh("63SQ6");
test_math_asinh(8.669351734157934e+307);
test_math_asinh(9.943523197467879e+307);
test_math_asinh(6.047491837756363e+307);
test_math_asinh("4BT6VLGO6");
test_math_asinh(-103);
test_math_asinh(2.0616166534160838e+307);
test_math_asinh("AS8JAU");
test_math_asinh("DQLIWUZTE");
test_math_asinh(4.3276214289458937e+307);
test_math_asinh(8.945719060185065e+307);
test_math_asinh("UIH53J");
test_math_asinh(9.841548419476127e+307);
test_math_asinh("4QBOXCTI");
test_math_asinh("VRXTYI");
test_math_asinh(9.93043220185984e+307);
test_math_asinh("ERCP3QVO");
test_math_asinh("A9WXP");
test_math_asinh(-573);
test_math_asinh(1.637057156336568e+308);
test_math_asinh(1.7260049881673524e+308);
test_math_asinh(-273);
test_math_asinh("ZFUFD");
test_math_asinh("8UBUQ07C");
test_math_asinh(1.2469468738909525e+308);
test_math_asinh(-3);
test_math_asinh("IKDV");
test_math_asinh(-651);
test_math_asinh("JSZR");
test_math_asinh("HL3R");
test_math_asinh("NVC");
test_math_asinh(1.5817068580037217e+308);
test_math_asinh(1.7050324665577205e+308);
test_math_asinh(-993);
test_math_asinh(1.4997948735394774e+308);
test_math_asinh(-445);
test_math_asinh(-903);
test_math_asinh(1.7423686211731382e+308);
test_math_asinh("LWTHG1P");
test_math_asinh("SZZD5C");
test_math_asinh("5PPYEOWEG");
test_math_asinh(1.2685710423330825e+308);
test_math_asinh(1.3525567160135584e+308);
test_math_asinh(-733);
test_math_asinh(2.39795894855982e+307);
test_math_asinh(1.7599703013780548e+308);
test_math_asinh(1.1160953457699925e+308);
test_math_asinh("LTV332VRGP");
test_math_asinh(3.55762746666723e+307);
test_math_asinh(-589);
test_math_asinh(-921);
test_math_asinh(6.64976704134076e+307);
test_math_asinh(-161);
test_math_asinh("OZUQ8PE");
test_math_asinh(1.735885975905925e+308);
test_math_asinh(-175);
test_math_asinh(-241);
test_math_asinh(2.7029867276955683e+307);
test_math_asinh(1.0366486015410478e+308);
test_math_asinh("XDYUSX9B0I");
test_math_asinh(1.2144549187852083e+308);
test_math_asinh(-435);
test_math_asinh("IJAGEUVQ");
test_math_asinh(6.614816887188546e+307);
test_math_asinh(-45);
test_math_asinh(1.7040121596000204e+308);
test_math_asinh(-951);
test_math_asinh("96H3AAEOU");
test_math_asinh("0CAE25");
test_math_asinh("5JVMI4KZ");
test_math_asinh(1.3135072521887845e+308);
test_math_asinh(-633);
test_math_asinh("8G7DQ");
test_math_asinh("XUP1");
test_math_asinh(-985);
test_math_asinh("B06");
test_math_asinh("H48AL");
test_math_asinh(7.931648530792943e+307);
test_math_asinh(-831);
test_math_asinh(2.168344806900406e+306);
test_math_asinh("M4Z53W");
test_math_asinh("U8LFCI96Z");
test_math_asinh("M5H");
test_math_asinh(-87);
test_math_asinh("FJ4YXAT18X");
test_math_asinh("0VPHQ");
test_math_asinh("C0OLV5LDT");
test_math_asinh(-609);
test_math_asinh("XQFS66");
test_math_asinh(-907);
test_math_asinh(2.1400840207754926e+307);
test_math_asinh("6E45Y");
test_math_asinh(-127);
test_math_asinh(-849);
test_math_asinh(-507);
test_math_asinh(8.092819911692969e+307);
test_math_asinh(-231);
test_math_asinh(5.370039335672601e+307);
test_math_asinh("D51O3");
test_math_asinh(1.1525856207149114e+308);
test_math_asinh("SWGYQK");
test_math_asinh(1.7579361205693288e+307);
test_math_asinh(-67);
test_math_asinh("1IB3ADLB");
test_math_asinh(9.72063224691301e+307);
test_math_asinh("G3RTES");
test_math_asinh("6F1");
test_math_asinh("6KU");
test_math_asinh(1.7371429254387785e+308);
test_math_asinh(1.082079804345644e+308);
test_math_asinh(3.6745347029362385e+307);
test_math_asinh("6VF2BOO3");
test_math_asinh(4.9485315256157605e+306);
test_math_asinh(6.269229705049359e+307);
test_math_asinh(-759);
test_math_asinh(-761);
test_math_asinh("W1DU5QOQ24");
test_math_asinh(3.4309560908594834e+307);
test_math_asinh("NSF");
test_math_asinh(-71);
test_math_asinh(3.8688805275698377e+307);
test_math_asinh("J03I");
test_math_asinh("FPTNNN6DPT");
test_math_asinh(1.1433986312862459e+307);
test_math_asinh(1.4518840776947175e+308);
test_math_asinh("PO8RPN");
test_math_asinh(-719);
test_math_asinh(1.7029199197131184e+308);
test_math_asinh("Q4ECM5YM");
test_math_asinh(8.495230371441567e+307);
test_math_asinh(-957);
test_math_asinh(1.7699077338712952e+308);
test_math_asinh(-935);
test_math_asinh(-789);
test_math_asinh(-129);
test_math_asinh("SGJL673");
test_math_asinh(4.869262273306424e+307);
test_math_asinh("RFDMRPW");
test_math_asinh(-641);
test_math_asinh(2.675549369078933e+307);
test_math_asinh(-137);
test_math_asinh(1.0139853942208604e+308);
test_math_asinh(8.235786886001308e+307);
test_math_asinh("HD8");
test_math_asinh("3X49K7");
test_math_asinh("75T5ROZ");
test_math_asinh("FPWOBAVFU");
test_math_asinh("5PWMCGA4F");
test_math_asinh(-395);
test_math_asinh(4.578636420670066e+306);
test_math_asinh("WTJFLEK");
test_math_asinh(7.232456034655543e+307);
test_math_asinh("5C72R8VF");
test_math_asinh("MVCM");
test_math_asinh("Q5BI6SZP");
test_math_asinh(2.8448406986271516e+306);
test_math_asinh(1.2433234627082557e+308);
test_math_asinh("DCEQGPOKL");
test_math_asinh(1.6600360054442866e+308);
test_math_asinh(7.67717407579861e+307);
test_math_asinh("LCROW");
test_math_asinh(6.792778187933992e+307);
test_math_asinh(1.2746861147435584e+308);
test_math_asinh("PWE9NDCNLF");
test_math_asinh("BZL");
test_math_asinh(4.3346889827909053e+307);
test_math_asinh(-553);
test_math_asinh("P3TDJX2F1");
test_math_asinh("J5L4EQE05");
test_math_asinh(1.387474322192436e+307);
test_math_asinh("KX56QPT6N4");
test_math_asinh(3.106009134944197e+305);
test_math_asinh(1.156386929059987e+308);
test_math_asinh(-247);
test_math_asinh("NUAP7CI0RL");
test_math_asinh(-835);
test_math_asinh("EJNS");
test_math_asinh(7.716585341422186e+307);
test_math_asinh(6.490088251813152e+307);
test_math_asinh(7.936455915995258e+307);
test_math_asinh(1.522790058690885e+308);
test_math_asinh(2.037680415117149e+307);
test_math_asinh("MVVD");
test_math_asinh(8.382980175320019e+307);
test_math_asinh("KTWU9V8698");
test_math_asinh(-83);
test_math_asinh(2.8212196634929716e+307);
test_math_asinh(1.4213018873617914e+308);
test_math_asinh(1.5364728313466495e+308);
test_math_asinh(-367);
test_math_asinh("0Q2BI3NY");
test_math_asinh("2R6SAMX");
test_math_asinh("6CTXYCMVL");
test_math_asinh("H47HD");
test_math_asinh(-113);
test_math_asinh(1.0199602406141998e+308);
test_math_asinh("QY6L2YSP0");
test_math_asinh(8.642630243521544e+307);
test_math_asinh("TF3XKBHAL2");
test_math_asinh(1.6673886172292422e+308);
test_math_asinh(-331);
test_math_asinh(1.210809796689325e+308);
test_math_asinh(8.440326060183371e+307);
test_math_asinh("CKLY1F2");
test_math_asinh("FJ79");
test_math_asinh("3EC");
test_math_asinh("E4LZEU3QIG");
test_math_asinh(1.9203157697265418e+307);
test_math_asinh(1.1567317751128749e+308);
test_math_asinh("A9UPTEZVWY");
test_math_asinh(1.538703476206663e+308);
test_math_asinh("17RTSDA");
test_math_asinh(1.506487161549898e+308);
test_math_asinh("JPY");
test_math_asinh(1.4967413280596654e+307);
test_math_asinh("2P7I4O");
test_math_asinh(8.769950046261069e+307);
test_math_asinh(9.732897483780373e+307);
test_math_asinh(3.6375525103391993e+307);
test_math_asinh(-459);
test_math_asinh("43QP");
test_math_asinh(-795);
test_math_asinh(-475);
test_math_asinh(-329);
test_math_asinh(7.595853166274495e+306);
test_math_asinh(-637);
test_math_asinh(4.660637678376886e+307);
test_math_asinh("OUA");
test_math_asinh(1.4643659698623793e+308);
test_math_asinh("0JFX1");
test_math_asinh("57LOEG");
test_math_asinh(6.995649973841964e+307);
test_math_asinh(-731);
test_math_asinh(2.2768173909035974e+307);
test_math_asinh(1.3102154976519554e+308);
test_math_asinh(-327);
test_math_asinh(-317);
test_math_asinh("X4QWR7OSS");
test_math_asinh(-929);
test_math_asinh(1.0492398027170766e+308);
test_math_asinh(5.187112310604644e+307);
test_math_asinh("E0P25F09");
test_math_asinh(4.925841873142192e+307);
test_math_asinh(1.3112493874124198e+308);
test_math_asinh("C8F");
test_math_asinh(-721);
test_math_asinh(-995);
test_math_asinh("VF0P");
test_math_asinh(3.1956330659516455e+307);
test_math_asinh("QFTDML");
test_math_asinh(-479);
test_math_asinh("38BSLLIFQ");
test_math_asinh("964");
test_math_asinh("N2R3KV");
test_math_asinh("PLZ1YS");
test_math_asinh(2.63661050082456e+307);
test_math_asinh(1.777783577879e+307);
test_math_asinh(1.5083825834127604e+308);
test_math_asinh(-377);
test_math_asinh(-693);
test_math_asinh("6FGM");
test_math_asinh("PWBI");
test_math_asinh(1.1299459192610876e+308);
test_math_asinh(9.351471168537461e+307);
test_math_asinh("VA3XI");