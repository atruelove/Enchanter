/*
* This file is automatically generated by Swami
*
* 2019-08-06 12:46:37.265766
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
function test_set(randominput,iterable){
	if (( typeof  NewTarget === 'undefined' )){
		 try{
			var output = randominput.Set(iterable);
			 return;
		}catch(e){
			new TestCase("set", "set", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
}



/*TESTS GENERATED AUTOMATICALLY*/
test_set(-0, -101);
test_set(/yes[^]*day/, true);
test_set(/[\u0400-\u04FF]+/g, Infinity);
test_set(1.0912163158577123e+308, /yes[^]*day/);
test_set(/yes.*day/, false);
test_set(false, 6.819201606860708e+307);
test_set("QU71OPL4I", /\r\n|\r|\n/);
test_set(/yes[^]*day/, false);
test_set("IPIJMIQ", undefined);
test_set("K0IKCVC4Y", true);
test_set(true, /[^.]+/);
test_set(true, "TPI8X");
test_set(/ab+c/, +0);
test_set(2.010422526441731e+307, NaN);
test_set(/yes[^]*day/, -95);
test_set(/(\w+)\s(\w+)/, "JQVIC82");
test_set(-567, /foo/g);
test_set(false, "MI2AF7");
test_set(-843, 9.9646760029657e+307);
test_set(1.2403226822262717e+308, Infinity);
test_set(-17, 3.1637296971660103e+307);
test_set(-0, 1.4721232880849173e+308);
test_set(-305, 6.899553904425587e+307);
test_set(-177, true);
test_set(-237, -865);
test_set(/yes.*day/, /\r\n|\r|\n/);
test_set("RGDS1", NaN);
test_set(8.826850690760052e+307, false);
test_set("Z3M6K", /foo/g);
test_set(false, "XK3IXD9B8D");
test_set(false, /foo/g);
test_set(/\r\n|\r|\n/, /\r\n|\r|\n/);
test_set(undefined, -401);
test_set(2.289574121133781e+307, /[\u0400-\u04FF]+/g);
test_set(-945, 1.6978266402518214e+308);
test_set(+0, 1.2309032085757682e+308);
test_set(-663, -645);
test_set(/[^.]+/, -363);
test_set(/[^.]+/, true);
test_set(-0, true);
test_set(/\r\n|\r|\n/, false);
test_set(true, 7.758081328481435e+307);
test_set(true, /ab+c/);
test_set("M3JS0", "TBR028");
test_set(/foo/g, "52T");
test_set(-213, Infinity);
test_set(1.123791333369411e+308, null);
test_set("KKY608KSC", /foo/g);
test_set("SC2V9V5286", "CFY6MQ56G");
test_set(Infinity, NaN);
test_set(Infinity, /(\w+)\s(\w+)/);
test_set(/\r\n|\r|\n/, Infinity);
test_set(1.0682773568185732e+308, /[\u0400-\u04FF]+/g);
test_set(NaN, "IEOY");
test_set(false, -661);
test_set(NaN, 1.062200080717086e+308);
test_set(-917, false);
test_set(1.3536803547781098e+308, "90I81PF");
test_set(/[\u0400-\u04FF]+/g, /(\w+)\s(\w+)/);
test_set(-741, /yes.*day/);
test_set(/(\w+)\s(\w+)/, NaN);
test_set(undefined, -767);
test_set("7C6", 422);
test_set(958, NaN);
test_set(6.242943276171019e+307, "AF4");
test_set(+0, 1.6138302812973272e+307);
test_set("NFR", 1.3069888944313516e+308);
test_set(-0, undefined);
test_set(undefined, -579);
test_set("XX1X90", 5.392291973804529e+307);
test_set(undefined, NaN);
test_set(+0, /yes.*day/);
test_set(false, /ab+c/);
test_set(1.0603493246610019e+308, 9.506186070118486e+307);
test_set(false, -305);
test_set(true, 1.6041048463894887e+308);
test_set(/[\u0400-\u04FF]+/g, /yes[^]*day/);
test_set(true, -719);
test_set(-351, -919);
test_set(false, 1.1152330782108675e+308);
test_set(null, "GWOM");
test_set(false, true);
test_set(8.533479119872143e+307, /ab+c/);
test_set(undefined, Infinity);
test_set(1.7976179051294058e+308, -103);
test_set(/ab+c/, 1.2583525429035675e+307);
test_set(1.016245766961526e+308, /[^.]+/);
test_set(true, -255);
test_set(1.1032284529062132e+308, false);
test_set(1.1868621345646918e+308, /ab+c/);
test_set(-585, 1.6173956018957245e+308);
test_set(/(\w+)\s(\w+)/, 1.5197930981994842e+308);
test_set(-503, -449);
test_set(1.5904967682416982e+307, true);
test_set(-313, true);
test_set(NaN, 1.5301138091587951e+308);
test_set(null, /\r\n|\r|\n/);
test_set(1.784528616474654e+308, /foo/g);
test_set(1.5995082378252535e+308, "JLZWZ");
test_set(170, "0LYP0QS2");
test_set(-903, /\r\n|\r|\n/);
test_set(/(\w+)\s(\w+)/, /[\u0400-\u04FF]+/g);
test_set(4.0968443869061173e+306, 2.532979474398933e+307);
test_set(4.1327067989641215e+307, false);
test_set(-791, /(\w+)\s(\w+)/);
test_set(-511, "BFJR7");
test_set("P1H29HAKEN", 6.374502939716209e+307);
test_set(/[^.]+/, -217);
test_set(-37, /[^.]+/);
test_set(/yes[^]*day/, "ZRDH0L1GKN");
test_set(/foo/g, 6.290571301670204e+307);
test_set("1WWJT", true);
test_set(true, "NS40");
test_set(1.281913079555683e+308, undefined);
test_set(null, true);
test_set(4.9168258295636406e+306, "COQ50J6XQ");
test_set(/foo/g, false);
test_set("FXZXED", -359);
test_set(3.8718106613241006e+307, "WB8NAWT5JL");
test_set(NaN, /(\w+)\s(\w+)/);
test_set(5.360321534882022e+307, /foo/g);
test_set("W1RA", Infinity);
test_set(null, /[\u0400-\u04FF]+/g);
test_set(true, false);
test_set(/foo/g, +0);
test_set(-371, true);
test_set(-455, 1.1487076620597964e+307);
test_set("DZ0NAV5", "M7JKS");
test_set(+0, false);
test_set(1.4284632691179952e+308, "05QM");
test_set(+0, true);
test_set(-59, 5.713140494266154e+307);
test_set(undefined, 1.1692287106364946e+308);
test_set("RFN9MK", true);
test_set(/ab+c/, "R9N6A");
test_set(1.5523537792156576e+308, "KRX");
test_set(9.466118788554626e+307, null);
test_set(NaN, Infinity);
test_set("91DY69", 1.4113346724693766e+308);
test_set(-463, 1.3555589450892635e+308);
test_set(-0, 6.812656670824081e+307);
test_set("C4834DPMT2", false);
test_set(6.366072967744283e+307, false);
test_set(/ab+c/, false);
test_set(undefined, +0);
test_set(true, -989);
test_set(1.2788940535456945e+308, "GAI1OF0J7C");
test_set(null, 3.4568517135123545e+307);
test_set(-681, /[\u0400-\u04FF]+/g);
test_set(/ab+c/, -847);
test_set(true, 1.6301698832295872e+308);
test_set(5.888475236238675e+307, NaN);
test_set(5.10404192256148e+307, 8.687643681923158e+307);
test_set(true, "V6X");
test_set(/ab+c/, "KA2I0");
test_set(true, -707);
test_set(true, true);
test_set("502U3GX6", -137);
test_set("IU35X4", /(\w+)\s(\w+)/);
test_set(/[^.]+/, 9.00117435887793e+306);
test_set(-0, "V661XD");
test_set(1.6143567674035329e+308, 1.9175489665945918e+307);
test_set(false, 1.06278927743481e+308);
test_set(-0, false);
test_set("NE30JR", -247);
test_set(+0, "1RS5GTHK");
test_set(1.4497587137777547e+308, "DZOJ8R1UEW");
test_set(-555, Infinity);
test_set(/ab+c/, 1.4911954438145315e+308);
test_set(undefined, -735);
test_set(1.5942220127002962e+308, "IV0A0OEHQ");
test_set(/foo/g, "U0TQ");
test_set(true, -905);
test_set(Infinity, -0);
test_set(/ab+c/, "UXJF9");
test_set(1.5290240125839428e+307, 6.09571978161372e+307);
test_set(-535, undefined);
test_set(3.6817520597563687e+307, 1.3657250114003836e+308);
test_set(5.746717381073334e+307, "XRAOO");
test_set("4H2036Y06", "13PZBRUY");
test_set(-893, "AVACOWY");
test_set("MURX366", -0);
test_set(NaN, "W6FNAK");
test_set(-715, -0);
test_set("08ZZ0XI", 1.5388034671960527e+308);
test_set(NaN, /\r\n|\r|\n/);
test_set(-69, false);
test_set(1.0178584019650737e+308, -941);
test_set(1.588008353265694e+308, 8.000433176680424e+307);
test_set("97OZ8LEGJ", "50EUB667Q");
test_set("NMW", 4.1450514226777387e+307);
test_set(-483, -0);
test_set("CFJG6FF8", "HWC16Q");
test_set(1.5624825253241093e+308, 6.29543887596804e+305);
test_set("UK6SUH3R", 5.886274412962874e+307);
test_set(true, -281);
test_set(3.9922165389153303e+307, "0RAM");
test_set(1.4323290346478732e+308, -513);
test_set(/[\u0400-\u04FF]+/g, "65RFI");
test_set(null, 7.660469059259965e+307);
test_set(1.6369042581848627e+308, /yes[^]*day/);
test_set("OMEZU5", false);
test_set("6C0J", -921);
test_set(/foo/g, 1.1032284529062132e+308);
test_set("M7CG", -817);
test_set(-53, "HWN1");
test_set("OTLC", 722);
test_set(/foo/g, 1.1805499893439328e+308);
test_set(null, "E1RAA");
test_set(undefined, null);
test_set("B0T5FMYUX", false);
test_set(+0, undefined);
test_set(-523, /(\w+)\s(\w+)/);
test_set(true, NaN);
test_set(true, 1.4460906641023003e+308);
test_set(+0, 1.1691093070374277e+308);
test_set("GP0S6KU", +0);
test_set(-911, "4MR");
test_set(3.818807457871656e+307, "SC0WJT7I0");
test_set(-105, "9NLP6W3FEQ");
test_set(/yes[^]*day/, /yes.*day/);
test_set("QQ55YQFK", -0);
test_set(+0, "7Y9X6BVMT");
test_set(/yes[^]*day/, 1.7473630735516535e+307);
test_set(7.004101417637394e+307, -0);
test_set(undefined, "9JZV");
test_set(1.3336223781156516e+308, -919);
test_set(false, 9.3751243069277e+307);
test_set(-137, false);
test_set(false, 1.1798645534854156e+308);
test_set(+0, null);
test_set(1.4768464104890748e+308, /yes[^]*day/);
test_set(1.7060612566234782e+308, /yes[^]*day/);
test_set(/[^.]+/, /\r\n|\r|\n/);
test_set(-0, /foo/g);
test_set(/foo/g, 5.172026300830676e+307);
test_set(/[\u0400-\u04FF]+/g, /\r\n|\r|\n/);
test_set(-5, "H2QX74B741");
test_set(false, "JMYZDOGK");
test_set("UPSCAYDH4", +0);
test_set("AV7JYG4E", -695);
test_set(+0, /foo/g);
test_set(Infinity, -311);
test_set(/yes.*day/, 4.525408321630521e+306);
test_set(undefined, /yes[^]*day/);
test_set(true, 8.491776986087669e+307);
test_set(6.270514322098757e+307, 8.328598508212821e+307);
test_set("I14", true);
test_set(false, "B59AOW");
test_set(-267, /[\u0400-\u04FF]+/g);
test_set(NaN, "II4");
test_set("KP4FA", 1.6833889942728122e+308);
test_set("0AQUIL", "KRYIZX");
test_set(Infinity, 1.1691875484280801e+308);
test_set(8.409691596215845e+307, undefined);
test_set(+0, 2.2040150467330935e+307);
test_set(-215, null);
test_set(-583, "UAS44Z2IYJ");
test_set("ZF6RG", true);
test_set(-187, 1.751620163904519e+308);
test_set(-785, /yes.*day/);
test_set(7.201293639874478e+307, /[^.]+/);
test_set(8.19125561707888e+307, "YRC63Y2ZG");
test_set(null, 8.659282810066739e+307);
test_set(false, 1.0373943055038726e+308);
test_set(-65, 1.2362528717043463e+308);
test_set(NaN, false);
test_set(false, -429);
test_set(+0, +0);
test_set(-605, +0);
test_set(/ab+c/, /\r\n|\r|\n/);
test_set(-75, true);
test_set(undefined, 1.0380241420865892e+308);
test_set(/yes.*day/, -563);
test_set(/(\w+)\s(\w+)/, 1.7106377181741901e+308);
test_set(8.173733913906936e+307, "M2SHPGXTAR");
test_set(-493, /foo/g);
test_set(/ab+c/, Infinity);
test_set(-681, "8OCRSEAISL");
test_set(NaN, /[^.]+/);
test_set("C6AN6J4M9O", false);
test_set(-915, -939);
test_set(true, "IRO5");
test_set(1.3535186825727126e+308, false);
test_set("6J512", false);
test_set(true, /yes[^]*day/);
test_set(-527, null);
test_set(true, undefined);
test_set(-507, "YD2M7502B");
test_set(null, +0);
test_set(-441, true);
test_set("BTR", -411);
test_set(-765, 8.092282607963045e+307);
test_set(-0, "1HCWU");
test_set(-663, 1.6810293047042178e+308);
test_set(false, 2.7290831579763027e+307);
test_set(true, -443);
test_set(false, null);
test_set(-977, "2SJLQM");
test_set("92AEGA", undefined);
test_set(-379, 3.9366103202631583e+307);
test_set(-0, -193);
test_set(false, 3.819426276676728e+307);
test_set(7.573560660028732e+307, "RL1MS");
test_set(NaN, "JDTS9MS");
test_set(/yes[^]*day/, /\r\n|\r|\n/);
test_set("L47B2X1", 1.3108342922685564e+308);
test_set(true, "0LARKUWAR1");
test_set(-433, NaN);
test_set("8ZSV", "NNV8WEBJ");
test_set("2088F", /ab+c/);
test_set(-381, "FDJGO9R");
test_set(1.369499542478308e+308, /[\u0400-\u04FF]+/g);
test_set(-397, -173);
test_set("RKT87O3TK", -983);
test_set(1.4304104594426215e+308, /[^.]+/);
test_set(true, "G7W");
test_set(/[^.]+/, "SCMW");
test_set(-721, /yes.*day/);
test_set(-627, /yes[^]*day/);
test_set(/\r\n|\r|\n/, /[\u0400-\u04FF]+/g);
test_set("LUHP2NCGXP", -0);
test_set(3.6265852858763475e+307, 4.251673224089374e+307);
test_set(/foo/g, NaN);
test_set(-387, 1.2825404908057669e+308);
test_set(/\r\n|\r|\n/, -269);
test_set(-301, undefined);
test_set(NaN, 1.5477177338839018e+308);
test_set(4.3995106979694336e+307, -0);
test_set(true, "A12QIZ");
test_set("P5M4G8YFY", "6GOOS3GLY");
test_set(9.633192527654902e+307, -13);
test_set("AWAIFQVN", -927);
test_set(+0, -0);
test_set(2.611296376405801e+307, "6WU1CEKUV");
test_set(/ab+c/, 7.485158995558147e+307);
test_set(-25, "2TET");
test_set(undefined, /[^.]+/);
test_set(1.1937973675160571e+308, Infinity);
test_set(-0, -89);
test_set(-357, /[\u0400-\u04FF]+/g);
test_set("WUM4HMJ", +0);
test_set(/yes[^]*day/, 7.436445522187902e+306);
test_set(/foo/g, true);
test_set(5.438019229617572e+307, NaN);
test_set(9.68821980551829e+307, Infinity);
test_set(-589, false);
test_set(undefined, -481);
test_set(Infinity, 1.7568451122442794e+308);
test_set(7.586817268215231e+307, /(\w+)\s(\w+)/);
test_set(-563, -93);
test_set("BZC16Q7FX4", "ZOQK");
test_set(false, 5.510464400240847e+307);
test_set("MB9LQ", -837);
test_set(false, "VFL");
test_set(false, 9.356837107501982e+307);
test_set(-645, /[\u0400-\u04FF]+/g);
test_set(false, /(\w+)\s(\w+)/);
test_set(4.6437837003923e+307, true);
test_set(1.3268092664135143e+308, "1F368H7THG");
test_set(-229, /yes.*day/);
test_set("6MA", -621);
test_set(/[^.]+/, "4HMK9WU9");
test_set(/yes.*day/, 1.7878020849388296e+308);
test_set(5.438524991765302e+307, /ab+c/);
test_set("E80N", false);
test_set(/[\u0400-\u04FF]+/g, true);
test_set(/foo/g, -923);
test_set("0MZ", true);
test_set("5KI6E5W", -633);
test_set(1.3035119925461982e+308, null);
test_set(9.12549650736901e+306, "AZ3TIB1GHP");
test_set(-989, /[\u0400-\u04FF]+/g);
test_set(-421, /[^.]+/);
test_set("CVDY0VPJG6", 7.953644549392248e+307);
test_set(-0, /\r\n|\r|\n/);
test_set(/yes.*day/, true);
test_set(-453, Infinity);
test_set(NaN, /[\u0400-\u04FF]+/g);
test_set(1.5227498171243519e+307, "NAT5RW2T");
test_set(NaN, /yes.*day/);
test_set(undefined, "CBD");
test_set(1.3969185560553133e+308, 5.457441601811038e+307);
test_set("O84HM", "OXZXGI2ETV");
test_set(false, /[\u0400-\u04FF]+/g);
test_set(-0, /ab+c/);
test_set("CZVE2", -0);
test_set(9.215667870377043e+307, true);
test_set(/[\u0400-\u04FF]+/g, /ab+c/);
test_set("0BYL3C1L", -143);
test_set(false, -0);
test_set("2N0", -0);
test_set(/[\u0400-\u04FF]+/g, false);
test_set(-159, -213);
test_set("HHP", true);
test_set(1.3016687878275693e+308, "W05HWQ");
test_set(/[\u0400-\u04FF]+/g, 1.6589462994639992e+308);
test_set(/yes.*day/, /[^.]+/);
test_set(1.2434861416072305e+308, -949);
test_set(/foo/g, Infinity);
test_set(-477, true);
test_set(/yes[^]*day/, -539);
test_set("LQICFFH", 1.4927325062277427e+308);
test_set("GPHRXBS0K", false);
test_set(-795, "QR9D49");
test_set("58YDKU4ER", undefined);
test_set(/foo/g, "V0K");
test_set(false, 6.219585065546764e+307);
test_set(-159, -967);
test_set(1.1680644566642126e+308, "LJ0BTALK8");
test_set(-759, -103);
test_set(1.3710017133889432e+308, /ab+c/);
test_set(/[^.]+/, /yes[^]*day/);
test_set(/(\w+)\s(\w+)/, -525);
test_set(1.030904336922039e+308, false);
test_set(-927, undefined);
test_set(-769, 1.2250841878790644e+308);
test_set(/[\u0400-\u04FF]+/g, -789);
test_set(1.5992708388927196e+308, "1Y2P5O");
test_set(3.9195188329987716e+307, /[\u0400-\u04FF]+/g);
test_set(/yes.*day/, "NCMC");
test_set(1.7024688359678684e+308, /foo/g);
test_set(2.2251286586549016e+307, 9.061891295840678e+306);
test_set(/yes.*day/, "UOF5T9SV2");
test_set("BMGYH3F0", Infinity);
test_set(-755, 1.28727117369488e+308);
test_set(-517, "SIGO4HO");
test_set(null, "AN3");
test_set(-619, true);
test_set("1UITVM4F", null);
test_set(-0, -851);
test_set("458MOQ", true);
test_set(-0, 8.01397720771784e+307);
test_set(false, "ZXY");
test_set(-7, false);
test_set(-655, -0);
test_set(true, -843);
test_set(-735, "N829");
test_set("OUT", true);
test_set(/(\w+)\s(\w+)/, false);
test_set(-315, true);
test_set(/yes.*day/, "70YP2");
test_set(5.125043248444583e+307, "FKA");
test_set(false, 1.7430482803413997e+308);
test_set(-499, "OVJOQS");
test_set(/yes.*day/, "ILO");
test_set(-367, "RRN31B");
test_set("GJF2P1", true);
test_set(/[\u0400-\u04FF]+/g, "A8Z");
test_set(/yes[^]*day/, -373);
test_set("KUC9WNS76", undefined);
test_set(true, /\r\n|\r|\n/);
test_set(true, "5ARHX1");
test_set(/(\w+)\s(\w+)/, -69);
test_set(/(\w+)\s(\w+)/, 8.566031265600567e+307);
test_set(false, "41Z9FD");
test_set(/ab+c/, 4.0898964650432747e+307);
test_set("6JZJAV8", "02AUP");
test_set(false, /\r\n|\r|\n/);
test_set(true, "UFF");
test_set(6.75348401018438e+307, 1.7916160498542142e+308);
test_set(NaN, /ab+c/);
test_set(5.715779717807528e+307, "6NTC");
test_set(1.4873285180099603e+308, /[\u0400-\u04FF]+/g);
test_set(-819, -749);
test_set(/ab+c/, undefined);
test_set(/yes.*day/, 1.2424804295023056e+308);
test_set(-931, "TWJMQ");
test_set("AC8TQ2T", true);
test_set(null, "CG7Z");
test_set(1.4548020359374445e+308, /yes[^]*day/);
test_set(NaN, "ZLW0BGBN60");
test_set(-573, /(\w+)\s(\w+)/);
test_set(9.865301804283503e+307, true);
test_set(/[\u0400-\u04FF]+/g, 1.2435679097942744e+308);
test_set(1.6825898628831405e+308, /(\w+)\s(\w+)/);
test_set("LL3", "HXL");
test_set(false, "7BZ");
test_set(1.7351684552053854e+308, NaN);
test_set(1.766419787723136e+307, true);
test_set(1.0426382961664182e+308, Infinity);
test_set(-911, true);
test_set(/yes.*day/, NaN);
test_set(null, /yes[^]*day/);
test_set(undefined, 2.8543763802646197e+307);
test_set("D6WVCSO", Infinity);
test_set(-513, -743);
test_set(1.7782220491172319e+308, true);
test_set(/ab+c/, 1.0628107690649406e+308);
test_set(undefined, /ab+c/);
test_set(-725, null);
test_set(-347, 2.0986098397118878e+307);
test_set("1NUH", /yes[^]*day/);
test_set(-165, undefined);
test_set(false, -503);
test_set("44F", "JJE4K");
test_set(/yes[^]*day/, 1.8356231982688684e+307);
test_set(2.9906035954350986e+307, 1.5698924144879651e+308);
test_set(1.1504138284624328e+308, true);
test_set("ODCYOKL", /\r\n|\r|\n/);
test_set(1.0941075436257876e+308, 1.5674636631451108e+308);
test_set(true, 1.2722972137760722e+308);
test_set(/[\u0400-\u04FF]+/g, -591);
test_set("KR0135L", "768FCSF7W");
test_set("VPMCWDVL", /\r\n|\r|\n/);
test_set("93G2X5VR", "LXNG6RL");
test_set("ZE4P8W", /ab+c/);
test_set(-479, 8.236374225265114e+307);
test_set(Infinity, 1.4794903026879698e+308);
test_set(-0, "YMW2DW");
test_set(/ab+c/, /[^.]+/);
test_set(false, false);
test_set(3.496257718471941e+307, /yes.*day/);
test_set(false, "WF1");
test_set(undefined, 7.145847151316022e+307);
test_set(/ab+c/, null);
test_set("C6Y2DPVDW", +0);
test_set(+0, /yes[^]*day/);
test_set(undefined, true);
test_set(+0, 1.579076136849603e+308);
test_set(false, "0SY2P4JN8");
test_set(true, -137);
test_set(Infinity, -233);
test_set(/[^.]+/, -543);
test_set("DQ0", 1.7814098269078679e+308);
test_set(undefined, -749);
test_set(-407, -973);
test_set(1.7224851175374926e+308, -901);
test_set("8K6QCA47OL", /ab+c/);
test_set("C5A6P071", -0);
test_set(-449, true);
test_set("77AFPFT", 1.411492807563368e+308);
test_set(true, -105);
test_set("TJ0DGGNJAH", /yes[^]*day/);
test_set(-0, /yes.*day/);
test_set(+0, /[\u0400-\u04FF]+/g);
test_set(1.5966328860677047e+308, -0);
test_set(-149, /yes[^]*day/);
test_set(5.92038893543621e+307, 4.3887718900797873e+307);
test_set(/[^.]+/, 6.815653265720157e+307);
test_set(undefined, false);
test_set(5.856430796760237e+307, -875);
test_set(Infinity, true);
test_set(-581, 8.363325882695741e+307);
test_set(false, NaN);
test_set("IBGBFWS7C", 9.383271091008728e+307);
test_set(-415, /(\w+)\s(\w+)/);
test_set(/yes[^]*day/, 7.236114700672459e+307);
test_set(3.0781922508584813e+307, -0);
test_set(1.3749856733479641e+308, "5D99UL8NNY");
test_set(-195, /foo/g);
test_set(NaN, /yes[^]*day/);
test_set(false, 7.487296896161897e+307);
test_set(1.0497939359503267e+308, 4.529240529272781e+307);
test_set(undefined, undefined);
test_set(-607, -0);
test_set("96O1U", +0);
test_set("0DYIYJSG9F", /[\u0400-\u04FF]+/g);
test_set(8.663851355580803e+307, false);
test_set(4.3618573288530715e+307, false);
test_set("FI4L2J", true);
test_set(false, -697);
test_set(NaN, 5.541109784258172e+307);
test_set(-271, NaN);
test_set(Infinity, +0);
test_set(true, 8.198975501858284e+307);
test_set(/[\u0400-\u04FF]+/g, "BEVG");
test_set(true, -557);
test_set(Infinity, "SS8EAH0KQ");
test_set(8.472826834789497e+307, -385);
test_set(/(\w+)\s(\w+)/, -755);
test_set(3.7781598168131596e+307, "7CLK");
test_set(-603, -159);
test_set("E1A3OD8H1", /\r\n|\r|\n/);
test_set(-843, "C13B5K");
test_set(Infinity, "8AK1");
test_set(/ab+c/, /yes[^]*day/);
test_set(-355, 1.001162155750184e+308);
test_set(-65, 5.476453687511043e+307);
test_set(1.3463665030933476e+308, "6LKQG8");
test_set(-565, /ab+c/);
test_set(null, "AS5KOCCOYS");
test_set(-139, NaN);
test_set("6OKIRI6", -511);
test_set(4.840104540579681e+307, 1.676669305999506e+308);
test_set(1.229350560655222e+307, -41);
test_set(-0, /[\u0400-\u04FF]+/g);
test_set(NaN, 8.212527697197028e+307);
test_set(/[^.]+/, /(\w+)\s(\w+)/);
test_set(9.024127674977218e+307, "4OP3G");
test_set(-329, 7.563571353998703e+307);
test_set(-733, /\r\n|\r|\n/);
test_set(-897, -595);
test_set(true, -507);
test_set(-183, 4.48019963762512e+307);
test_set("Q0B5", false);
test_set(/\r\n|\r|\n/, -709);
test_set(null, -493);
test_set(-399, -121);
test_set("AVT1RPWFPF", "KWPZT7CXDT");
test_set(NaN, -0);
test_set(/yes.*day/, -15);
test_set(/yes[^]*day/, "HML2");
test_set(undefined, 6.861982176335558e+307);
test_set(null, false);
test_set(-17, 9.338381751270008e+307);
test_set(-141, -81);
test_set(-537, /[\u0400-\u04FF]+/g);
test_set(/ab+c/, -549);
test_set(4.0940774973037733e+307, null);
test_set(/\r\n|\r|\n/, "JW1NCVS");
test_set(-689, -655);
test_set("LIQYYH4", /[^.]+/);
test_set(+0, "4TSY");
test_set("JWJ3", /\r\n|\r|\n/);
test_set(NaN, true);
test_set(/(\w+)\s(\w+)/, 9.999483030008952e+307);
test_set("RHY6SMY7Z", "WG5M1N");
test_set(false, -371);
test_set("15C86", "68UGHLDMK9");
test_set(false, /yes[^]*day/);
test_set(-513, 1.1471095030821125e+308);
test_set(/yes[^]*day/, NaN);
test_set(-563, true);
test_set(true, -605);
test_set(false, -245);
test_set("6ILH6W0", "68MI");
test_set("FNSG0BESFL", true);
test_set(-531, /yes.*day/);
test_set(1.2138230880829298e+308, -941);
test_set(/yes[^]*day/, "FLRH");
test_set("DALQJSMW", 1.6458111236419458e+308);
test_set("49BG59", /yes.*day/);
test_set("42IYP0B3", false);
test_set("Y235ANY8BO", false);
test_set(6.421788153360936e+306, "EOELWD");
test_set(1.4694762363176409e+308, -389);
test_set(/ab+c/, /foo/g);
test_set(true, null);
test_set(1.1073802065998236e+308, "6WRHPU");
test_set(-255, /\r\n|\r|\n/);
test_set(/foo/g, "SES67");
test_set("5Q33SZ0", /yes.*day/);
test_set(-349, true);
test_set(3.4570226520403844e+307, false);
test_set(/(\w+)\s(\w+)/, 5.168938923302381e+307);
test_set(/foo/g, 4.671142093138549e+307);
test_set(-877, false);
test_set(-211, /[^.]+/);
test_set(-641, true);
test_set(/yes.*day/, 6.721283020705814e+307);
test_set(-621, /[\u0400-\u04FF]+/g);
test_set(1.8491115391311575e+307, 1.665686012831741e+308);
test_set(-17, /\r\n|\r|\n/);
test_set(5.315585550546803e+307, "57E8FLI");
test_set(-931, -305);
test_set("NM9AI857S", -407);
test_set("HIM160", false);
test_set(8.614891436097807e+307, /(\w+)\s(\w+)/);
test_set(false, 3.1311021069042505e+307);
test_set(-101, 4.278120827119253e+307);
test_set(false, 2.6191910825026704e+307);
test_set(true, /[\u0400-\u04FF]+/g);
test_set(true, 1.3208714885382394e+308);
test_set(/\r\n|\r|\n/, /foo/g);
test_set(false, -405);
test_set("9A41SUU", 1.6648442500119138e+308);
test_set(-455, false);
test_set(-775, "PA4O2ICSK");
test_set(-905, "83JFK4");
test_set(-975, 6.671317632032469e+307);
test_set(/yes.*day/, null);
test_set(false, -499);
test_set("FURQ8", "NYNY0TIV");
test_set("O4CMDUSFI", true);
test_set("62N096T2", "LIV5L0QSF");
test_set(Infinity, undefined);
test_set(false, undefined);
test_set(/yes.*day/, "KQP094LM");
test_set(/\r\n|\r|\n/, -0);
test_set(1.2142313042709348e+307, 1.3377920541457608e+308);
test_set(1.1242079309390116e+307, "YLOOSW");
test_set(true, -999);
test_set(/ab+c/, 5.578783366432387e+307);
test_set(true, /(\w+)\s(\w+)/);
test_set(false, "EIT7AH1");
test_set(+0, "98ADUZ1P");
test_set(1.275051215353614e+308, 4.069309430225595e+306);
test_set("Y162E7", 4.876274715503636e+307);
test_set(/\r\n|\r|\n/, 1.3730445309929e+308);
test_set(-501, 9.044335277681264e+307);
test_set(-663, "JE2W4C");
test_set(8.350881351733857e+307, NaN);
test_set("USY8C29O", "BVLQBVN3P");
test_set(/yes[^]*day/, 1.0232381448921095e+308);
test_set(NaN, /foo/g);
test_set("MUPRQD28M", 1.4070419454424911e+308);
test_set("YJQA9JZ", /ab+c/);
test_set(3.0624328350931717e+307, 9.153512698006115e+307);
test_set(undefined, -151);
test_set("5B04U4P", "6VC7O5");
test_set(true, +0);
test_set("MIDIG3II9Y", false);
test_set(-793, -297);
test_set(-921, -161);
test_set(/foo/g, /ab+c/);
test_set(5.754644118360788e+307, "ZT40I6DI");
test_set(true, -351);
test_set("4DC", NaN);
test_set(-629, "4KQLUU1W");
test_set(false, "2SOBL");
test_set(/(\w+)\s(\w+)/, -771);
test_set("5CIJ3GM", /yes[^]*day/);
test_set(Infinity, "54K3VPYJ");
test_set("3AAW93WC", "6A1KNKLESB");
test_set(-697, -215);
test_set(-547, "CD9H");
test_set(Infinity, 1.6621923563810962e+307);
test_set(/foo/g, 1.5132464161152473e+308);
test_set(false, -205);
test_set(1.3521191774034828e+307, /foo/g);
test_set(-819, -179);
test_set(-809, true);
test_set(true, "XNH3DNKSGO");
test_set(-345, -369);
test_set(/ab+c/, 6.183257425489464e+307);
test_set("R6E", /[\u0400-\u04FF]+/g);
test_set(1.0452474827825291e+308, /foo/g);
test_set(-929, /[^.]+/);
test_set(-641, "8EENWME");
test_set(8.184651229619333e+307, 7.147852197612375e+307);
test_set(7.190323052341779e+307, -787);
test_set(8.562833128128336e+307, null);
test_set(false, 3.9967808078758916e+307);
test_set("SQH0", /\r\n|\r|\n/);
test_set("YXI", /(\w+)\s(\w+)/);
test_set(Infinity, "Q8TPY");
test_set(false, "HQGCL");
test_set(-0, -0);
test_set(true, "MOXTQNPVPG");
test_set(true, -0);
test_set(9.86843122208353e+307, "H9E");
test_set("QVLQ79", undefined);
test_set(-691, -303);
test_set("763EK67", "UUW9TVC");
test_set("NV4T", -109);
test_set(5.139888409474587e+307, /foo/g);
test_set(-907, /[\u0400-\u04FF]+/g);
test_set(-197, /(\w+)\s(\w+)/);
test_set(-991, undefined);
test_set(-95, -855);
test_set(/\r\n|\r|\n/, 7.852021437164227e+307);
test_set(undefined, 2.1287633116065072e+307);
test_set("YYH", "JD86CKT");
test_set("8JU92VDL", /yes.*day/);
test_set("SCFPP5AFF", false);
test_set(-37, -897);
test_set(2.4062489778222765e+307, /(\w+)\s(\w+)/);
test_set(undefined, /(\w+)\s(\w+)/);
test_set(/[\u0400-\u04FF]+/g, NaN);
test_set(/\r\n|\r|\n/, 1.445177544595334e+308);
test_set("X10", /\r\n|\r|\n/);
test_set(/\r\n|\r|\n/, "8KZAYO9SS");
test_set(-285, "THMHJW4B2");
test_set(Infinity, false);
test_set("XNWR", 6.163412274396456e+306);
test_set(-171, -509);
test_set(1.5735769623649022e+308, true);
test_set(8.249048082837626e+307, -991);
test_set(/ab+c/, /ab+c/);
test_set(-701, "N7T8");
test_set(6.012455721342785e+307, false);
test_set("NHC", "563N");
test_set(/[\u0400-\u04FF]+/g, -739);
test_set(2.5134007409940724e+307, /(\w+)\s(\w+)/);
test_set("FURW3", -371);
test_set(/[^.]+/, "X2GK");
test_set(/yes[^]*day/, /ab+c/);
test_set(false, -883);
test_set(1.4730808947621684e+308, false);
test_set(NaN, "KD2VA");
test_set(-461, true);
test_set(true, -691);
test_set(4.415417890042775e+307, "YS250F");
test_set(1.0792413523415864e+308, false);
test_set(undefined, "QKC09");
test_set(1.970807653221339e+307, 1.2729527521780745e+308);
test_set("R05TJE9I4", true);
test_set(1.1053618104332759e+308, -953);
test_set("ZUV4J1", "2E46M0ZTK");
test_set(null, "SHSS4LH");
test_set(1.2810405803283454e+308, false);
test_set(5.816039116304433e+307, -431);
test_set(3.413775833420719e+307, -287);
test_set(/ab+c/, -791);
test_set("PJ2", -299);
test_set(/yes[^]*day/, -261);
test_set(1.2013406895818831e+308, -429);
test_set(true, "S465MQX4FQ");
test_set(/[^.]+/, -381);
test_set(1.3556711253555083e+308, 9.489330644500223e+307);
test_set(true, -487);
test_set(Infinity, -325);
test_set(NaN, -769);
test_set(/foo/g, 4.433604381839133e+307);
test_set(5.971451518215786e+307, /foo/g);
test_set(-999, 1.5899768021124672e+308);
test_set(1.0833070476242685e+308, "HOQH2N4O");
test_set(3.210356756640416e+307, 1.0211614861524912e+307);
test_set(/\r\n|\r|\n/, /ab+c/);
test_set("3ML9", /yes[^]*day/);
test_set(/foo/g, "1UF5UK7");
test_set(1.123254246786623e+308, /yes[^]*day/);
test_set(true, 1.3824393354800075e+308);
test_set(1.1511566603036284e+308, "2WXQT2RR");
test_set(1.3915989424214975e+308, "WRJHFR1G");
test_set(+0, "ZH11AKA");
test_set("BF792AKJ", /ab+c/);
test_set(NaN, -223);
test_set(6.95633806716027e+307, true);
test_set(/yes.*day/, 1.6624486694992307e+308);
test_set(-15, -489);
test_set(+0, NaN);
test_set(NaN, -171);
test_set(false, -13);
test_set(-923, undefined);
test_set("60HSE", -541);
test_set(/foo/g, "JJ94IOGQV4");
test_set("SOY", /(\w+)\s(\w+)/);
test_set(-881, "YTX0QO");
test_set(/yes.*day/, undefined);
test_set(-247, "VAQHCG");
test_set(296, "E56MD9IZ");
test_set(-707, false);
test_set("H4A4GK9", -0);
test_set(2.357774756736786e+307, "AOZO");
test_set(/yes.*day/, 8.036012215177124e+307);
test_set(-289, true);
test_set(/(\w+)\s(\w+)/, -445);
test_set(/yes.*day/, -451);
test_set(/ab+c/, -405);
test_set(false, "PC3WSECWX7");
test_set(-683, -93);
test_set(/yes[^]*day/, /yes[^]*day/);
test_set("LN4V40LZBG", -667);
test_set(/yes[^]*day/, Infinity);
test_set("C0XAY0M3", "A2K2");
test_set(NaN, 1.2208736882102834e+308);
test_set(3.555542691977159e+307, "J8W1K30GX");
test_set("9VOWXOY9", -821);
test_set(-131, false);
test_set(true, "99OUD0E");
test_set("WH0N56", +0);
test_set(false, 9.31166757181825e+307);
test_set(-107, /foo/g);
test_set(/foo/g, 3.9259588435633383e+307);
test_set(/[^.]+/, -49);
test_set(/yes[^]*day/, "UOII1CDI");
test_set(-947, false);
test_set("RLTQGYDK", -491);
test_set(-249, true);
test_set(false, 1.4789548576439161e+308);
test_set(/\r\n|\r|\n/, -107);
test_set(8.126986221571761e+307, 936);
test_set("ZGM", -611);
test_set(-0, null);
test_set(-775, 6.900825171323929e+306);
test_set(Infinity, -785);
test_set("PNRK7P16I", -655);
test_set(9.3751243069277e+307, /[\u0400-\u04FF]+/g);
test_set(false, "UNCL");
test_set(-309, true);
test_set(-0, NaN);
test_set("3I6Q", false);
test_set(Infinity, -949);
test_set(9.230863035190052e+307, -383);
test_set("U3ZOMWT", false);
test_set(null, "PLY1S5IX");
test_set(-567, /yes[^]*day/);
test_set(-81, /ab+c/);
test_set(8.250816062882313e+307, -0);
test_set(-559, true);
test_set(/[^.]+/, false);
test_set(/yes[^]*day/, /(\w+)\s(\w+)/);
test_set(/foo/g, /foo/g);
test_set("KN15V6W", 200);
test_set(/\r\n|\r|\n/, "UTBOT");
test_set(true, 2.683938708488373e+307);
test_set(true, "S308");
test_set(-757, /yes.*day/);
test_set("P86W", false);
test_set(7.819068533060585e+306, Infinity);
test_set(-0, -973);
test_set(/yes[^]*day/, "9VVYXN3QGD");
test_set(-663, Infinity);
test_set(1.194103583269685e+308, "BDLL1Z1");
test_set(1.685995864034549e+308, /ab+c/);
test_set(1.3578670780459543e+308, -965);
test_set(1.1052722919695855e+308, null);
test_set(Infinity, /[\u0400-\u04FF]+/g);
test_set("H6QV73E", -973);
test_set(-487, true);
test_set(-437, /foo/g);
test_set(-0, 1.337360692579713e+308);
test_set(6.225477716488789e+307, Infinity);
test_set("UUHF", "0KK1WA");
test_set(-593, false);
test_set(3.093571020216727e+307, /foo/g);
test_set(false, -913);
test_set(-933, -637);
test_set(7.426682711691094e+307, 1.2187165547300962e+308);
test_set("50FX2KH", -253);
test_set("LE3XSLDRX1", "98MW1U");
test_set("39YROBBJ", -425);
test_set(null, "P4B5W");
test_set(false, -521);
test_set(-23, 3.128510555528107e+307);
test_set(false, 1.548377862481463e+308);
test_set(false, Infinity);
test_set(-569, undefined);
test_set(-329, /(\w+)\s(\w+)/);
test_set(7.232147054899389e+307, -819);
test_set(9.788639843472396e+307, true);
test_set(6.346527057190537e+307, -335);
test_set(-413, 1.3054733765947788e+308);
test_set(-713, "FGSUDVNL");
test_set(Infinity, 1.6956914255678155e+308);
test_set("S1E", 4.652635238427132e+307);
test_set("D9QY", -723);
test_set(-373, Infinity);
test_set(6.956548964894457e+307, -213);
test_set(4.622145725433568e+307, /(\w+)\s(\w+)/);
test_set(-253, -983);
test_set(/yes.*day/, 1.4523076177199734e+308);
test_set(6.384191926045637e+307, true);
test_set("9E8CKM9", true);
test_set(true, /foo/g);
test_set("V8MMO", "TFYY8IFXL");
test_set(/[\u0400-\u04FF]+/g, 720);
test_set(-721, 1.4734489536687943e+308);
test_set(undefined, /\r\n|\r|\n/);
test_set("2I5VRA4VY7", +0);
test_set(/ab+c/, "1SS846N");
test_set(2.858967029550784e+306, Infinity);
test_set(1.2603305148731454e+308, 5.693493723588822e+307);
test_set(undefined, 2.834957563026131e+307);
test_set(5.52166181227741e+307, /[\u0400-\u04FF]+/g);
test_set(-359, "28VAI2H");
test_set(1.0097544025023102e+308, -0);
test_set(-521, NaN);
test_set(null, 3.707005957913231e+307);
test_set("ALRNFRPWP", /(\w+)\s(\w+)/);
test_set("Z27GYRNJ0", 1.5109473808461328e+308);
test_set(-861, false);
test_set(/(\w+)\s(\w+)/, true);
test_set(-407, false);
test_set(-165, Infinity);
test_set(Infinity, -21);
test_set("4D401YVEBB", /yes.*day/);
test_set(+0, -407);
test_set(Infinity, -551);
test_set(-0, -221);
test_set(-0, +0);
test_set("U20XH", false);
test_set(1.3672864716996548e+308, true);
test_set(-0, 4.261715169824904e+307);
test_set(1.5678458131493736e+308, +0);
test_set(1.4716763894043118e+308, -945);
test_set(6.86473172385948e+307, -335);
test_set(true, Infinity);
test_set(-0, 3.4924370418680844e+307);
test_set("RUDQ8OKT", false);
test_set("H9H", null);
test_set(1.4460130249490826e+308, 1.5600890222452338e+308);
test_set(/yes[^]*day/, 7.383526445745628e+307);
test_set(-633, "C95DDPVO");
test_set(-0, "569F4EWSK");
test_set(-197, -0);
test_set("Z9ZWZY", "85SLYTDNTZ");
test_set(-465, /yes.*day/);
test_set(-779, undefined);
test_set(-923, -21);
test_set(/[\u0400-\u04FF]+/g, +0);
test_set(-229, -579);
test_set(-977, -0);
test_set("RGB5MZ", -845);
test_set(-539, "MVFBPZ4NIY");
test_set(-895, undefined);
test_set(Infinity, "RND");
test_set(3.2713095095603776e+307, 1.6322788226944423e+308);
test_set("PUQDIM", false);
test_set(1.5529661041912048e+308, null);
test_set(false, +0);
test_set(false, 1.0226512926879921e+308);
test_set(-207, Infinity);
test_set(-279, true);
test_set(-321, "NM1GI1NBZ");
test_set("4D5SCRGTCA", -0);
test_set(1.4760898086724744e+307, false);
test_set(false, 5.730059708015272e+307);