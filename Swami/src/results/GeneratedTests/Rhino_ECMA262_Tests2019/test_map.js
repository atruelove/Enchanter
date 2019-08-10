/*
* This file is automatically generated by Swami
*
* 2019-08-08 15:50:13.658756
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
function test_map(randominput,iterable){
	if (( typeof  NewTarget === 'undefined' )){
		 try{
			var output = randominput.Map(iterable);
			 return;
		}catch(e){
			new TestCase("map", "map", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
}



/*TESTS GENERATED AUTOMATICALLY*/
test_map(Infinity, /foo/g);
test_map(/foo/g, false);
test_map(8.291479290651983e+307, /\r\n|\r|\n/);
test_map(-0, false);
test_map(-0, true);
test_map(-0, /[^.]+/);
test_map(-3, -157);
test_map(true, -311);
test_map(true, 1.177531058157998e+308);
test_map(-361, true);
test_map(true, false);
test_map(1.6573601375600238e+308, null);
test_map(1.699204359679906e+308, true);
test_map(false, 8.872476551990011e+307);
test_map("DN2WHPWJ", undefined);
test_map("88YAOINSZ9", 8.225594252170453e+307);
test_map(/ab+c/, 1.6945086745995818e+308);
test_map(6.111784166207627e+307, "TG2G");
test_map(/[^.]+/, -743);
test_map("NELAT", +0);
test_map("MGF", 1.5539042450841627e+308);
test_map("67Q", /foo/g);
test_map(1.4324743387400302e+308, null);
test_map(-35, +0);
test_map(-371, /(\w+)\s(\w+)/);
test_map(false, false);
test_map(1.4021934097481773e+308, -341);
test_map(/[\u0400-\u04FF]+/g, null);
test_map(true, "C9XT7G2XYT");
test_map(-981, -967);
test_map(true, "2GPQ911");
test_map(true, -395);
test_map("WJ34KN", "YIHRISI9");
test_map(-989, /yes[^]*day/);
test_map(-697, "34YOF");
test_map(-119, /ab+c/);
test_map(9.548868929823546e+307, false);
test_map(Infinity, /\r\n|\r|\n/);
test_map(2.977794325633541e+307, 7.699142687364255e+307);
test_map("G4UWA", +0);
test_map(/[\u0400-\u04FF]+/g, true);
test_map(-843, "QZ4H");
test_map(true, NaN);
test_map(false, -801);
test_map(-961, 1.658886828242415e+307);
test_map(false, true);
test_map("UB3LR", 8.699234366335318e+307);
test_map(true, -695);
test_map(Infinity, "FM4");
test_map(-999, true);
test_map(1.0832853572259655e+308, -451);
test_map(/yes[^]*day/, undefined);
test_map(1.008676443421561e+308, +0);
test_map(-549, /yes[^]*day/);
test_map(NaN, -289);
test_map(-957, "999HO3DKD2");
test_map(-807, -367);
test_map(NaN, true);
test_map(8.515379470495221e+307, NaN);
test_map(9.974793756061301e+307, 1.1546609615675257e+308);
test_map(1.6577549390669076e+308, 9.168469379218966e+307);
test_map(-617, undefined);
test_map("2OKAMHRP1", 1.677715212854837e+308);
test_map(NaN, "WA3A8QUV");
test_map(undefined, /[^.]+/);
test_map(Infinity, 1.0505369611397666e+308);
test_map(1.6660745163442783e+308, 8.30941443846494e+306);
test_map(false, 8.233919496357648e+307);
test_map("YIZ9UA62YQ", /ab+c/);
test_map(1.3118840369320523e+308, true);
test_map(/[^.]+/, "THA");
test_map(/[^.]+/, null);
test_map(-117, false);
test_map(-535, /\r\n|\r|\n/);
test_map("W2D", NaN);
test_map(/(\w+)\s(\w+)/, "5ZA82VY");
test_map(Infinity, /(\w+)\s(\w+)/);
test_map(+0, false);
test_map(+0, 1.4629411141517058e+308);
test_map(1.1598348465049858e+308, true);
test_map(true, 2.777175685584758e+305);
test_map(true, -0);
test_map(-383, 1.7408275180609683e+308);
test_map(/ab+c/, false);
test_map(/[\u0400-\u04FF]+/g, -15);
test_map(Infinity, -277);
test_map(/yes[^]*day/, /yes.*day/);
test_map(/ab+c/, /yes[^]*day/);
test_map(1.6614267419970472e+308, "IOCFO");
test_map(-0, -911);
test_map(-297, false);
test_map("9LVVOG", -813);
test_map("4I8", null);
test_map(1.0803957315377292e+308, /[\u0400-\u04FF]+/g);
test_map("X5I9Y8H", false);
test_map(-699, 1.1924481151347674e+308);
test_map(/\r\n|\r|\n/, false);
test_map(null, false);
test_map(/[^.]+/, /yes.*day/);
test_map(1.3480989744199805e+308, -271);
test_map(/\r\n|\r|\n/, -13);
test_map(-619, -0);
test_map("E7XX", 1.7275719627866465e+307);
test_map(NaN, false);
test_map(-0, -0);
test_map(undefined, -981);
test_map(-959, false);
test_map(-177, false);
test_map(/[\u0400-\u04FF]+/g, "0H8MLGFKN");
test_map(/[^.]+/, 7.281465704282524e+307);
test_map(1.3098114608315917e+308, false);
test_map(-675, -193);
test_map("5291CWQD2E", -0);
test_map(/yes.*day/, false);
test_map(-31, /yes.*day/);
test_map(null, "P64RE");
test_map(/ab+c/, 2.960449754831128e+307);
test_map(-393, /[^.]+/);
test_map("7OXRY", /foo/g);
test_map(/yes.*day/, 2.4853982204486943e+307);
test_map("FPW5LE5AQ", true);
test_map(true, +0);
test_map(/yes.*day/, /ab+c/);
test_map(/foo/g, 9.31612598323857e+307);
test_map(false, -519);
test_map(Infinity, "T5HO");
test_map(true, -579);
test_map(/foo/g, null);
test_map(-697, true);
test_map(-247, "V761BYU");
test_map(null, true);
test_map(5.180839901792753e+307, true);
test_map(false, 1.635106517740033e+308);
test_map(/ab+c/, /ab+c/);
test_map(-0, "NO2V");
test_map(3.180197061450388e+307, 1.6371659576228123e+308);
test_map(/yes.*day/, -669);
test_map(-187, 1.792102662032912e+308);
test_map(1.5189352164078565e+308, -0);
test_map("FC6CM5LH", 1.2517080575086397e+307);
test_map(/\r\n|\r|\n/, -465);
test_map(2.2774383592018886e+307, 1.5059723797659828e+308);
test_map(1.5899217604852498e+308, -0);
test_map("Y8OU36", 1.436269223199223e+308);
test_map(/ab+c/, Infinity);
test_map(true, /[^.]+/);
test_map(5.72231826619198e+307, 1.2112906066047388e+308);
test_map(-503, false);
test_map(-173, NaN);
test_map(/foo/g, 1.3882543114872536e+308);
test_map(/yes[^]*day/, true);
test_map(+0, "0UCRN0F14");
test_map(-391, /[^.]+/);
test_map(NaN, 1.2132951337343652e+308);
test_map(undefined, +0);
test_map(/foo/g, /(\w+)\s(\w+)/);
test_map(-987, /[^.]+/);
test_map(5.16037633702444e+307, /(\w+)\s(\w+)/);
test_map(/ab+c/, 1.2307893281418705e+308);
test_map(true, -215);
test_map(null, "66MUJELE04");
test_map(4.944342519510128e+307, 3.718618791873164e+307);
test_map(-333, 1.4951000699917923e+308);
test_map(true, /foo/g);
test_map(Infinity, false);
test_map(Infinity, /yes.*day/);
test_map("YAUXNG7V", 1.5794419438620368e+308);
test_map(Infinity, -0);
test_map(false, /yes.*day/);
test_map(/ab+c/, 4.607203901680676e+307);
test_map(4.016240517937406e+306, false);
test_map(1.629446766698319e+308, -185);
test_map("OLICL", 1.2947901625934077e+308);
test_map(-535, false);
test_map(-0, null);
test_map(/yes.*day/, undefined);
test_map(-397, "NXNI");
test_map(7.373652604137549e+307, "440");
test_map("0ZD", undefined);
test_map(true, -901);
test_map("454IYR3", NaN);
test_map(+0, "SG9MQ4TVJ");
test_map("Q2OAJC", +0);
test_map(/yes[^]*day/, 1.7795509992191106e+308);
test_map(/(\w+)\s(\w+)/, 7.488082769907369e+307);
test_map(+0, "V1198FI");
test_map(+0, /(\w+)\s(\w+)/);
test_map(-193, "LPITGJJQ");
test_map(false, /[^.]+/);
test_map(false, +0);
test_map(false, "1Z0JV1U599");
test_map(-0, 7.373107959282208e+307);
test_map("BEU", "Z8DP");
test_map("LBV1P93IU9", true);
test_map("QDARBTSCR", +0);
test_map(-905, 4.222212814422566e+307);
test_map(true, 1.378284366249862e+308);
test_map("EUW4", +0);
test_map("7HKQH7D", false);
test_map(+0, -917);
test_map(true, true);
test_map(1.55805579668689e+308, "TDVG");
test_map(/yes.*day/, true);
test_map(true, -445);
test_map(Infinity, -371);
test_map("Y9E5WJ3", true);
test_map(5.86626263163982e+307, true);
test_map(false, 1.5537900028677324e+308);
test_map("MDR", -581);
test_map(false, "BL70Y4");
test_map(3.8714397635391437e+307, 8.639402825079333e+307);
test_map(/ab+c/, null);
test_map(-501, -353);
test_map(/\r\n|\r|\n/, -53);
test_map(/yes[^]*day/, -203);
test_map(/(\w+)\s(\w+)/, -0);
test_map(/(\w+)\s(\w+)/, "TVG");
test_map("17QNI6OT", -67);
test_map(-445, -383);
test_map(1.6083155301604944e+308, "LEPOD4Y");
test_map(/[^.]+/, 1.3760074483527497e+308);
test_map(Infinity, "XO5YD9");
test_map(null, -729);
test_map(8.612786310271477e+306, false);
test_map(null, -213);
test_map(+0, true);
test_map(9.82052607071171e+307, "7J9");
test_map(/yes[^]*day/, false);
test_map(9.02873572049859e+307, "GICT0LZ");
test_map(1.128073591346328e+308, /\r\n|\r|\n/);
test_map(-837, +0);
test_map(-931, 1.474132151279938e+308);
test_map(-237, "BHS");
test_map("A486FLM", "VSW7OJHQS");
test_map(3.145376126382636e+307, -511);
test_map("IHK04", false);
test_map("MOGH3", undefined);
test_map("OAJ", "CVLZ");
test_map(/yes.*day/, -289);
test_map("8PNUROKU9X", "PDTJQBMEL");
test_map(false, 1.319496648927313e+308);
test_map(false, undefined);
test_map(+0, 2.395690723850467e+307);
test_map(-367, 5.190804342611283e+307);
test_map(null, 7.495561126288922e+307);
test_map(-523, /(\w+)\s(\w+)/);
test_map("U3B48Q4VS", +0);
test_map("HI3U9M2", 5.338378066918136e+307);
test_map(-107, NaN);
test_map("ZR3T9442X", 2.881511842721694e+307);
test_map("2L6FA", -471);
test_map("3I1W6FU", 1.6219015750334275e+308);
test_map(1.1147242064825745e+308, -903);
test_map("RC2", 1.0417679773690272e+308);
test_map(true, "621WYD");
test_map(/yes[^]*day/, 1.7018575639203e+308);
test_map(Infinity, true);
test_map(/[^.]+/, false);
test_map(/(\w+)\s(\w+)/, -843);
test_map("JEWTN0EC", -573);
test_map(4.858129809165212e+307, true);
test_map(undefined, "V2ATC2A6");
test_map(false, "6RKDZ9WGH");
test_map("4ILL7PFS46", /yes[^]*day/);
test_map(/\r\n|\r|\n/, -987);
test_map(/(\w+)\s(\w+)/, 1.712216100017838e+308);
test_map("T44", Infinity);
test_map(1.2160462297408403e+308, true);
test_map(-0, "ZDSKQ");
test_map(1.7214974442392986e+308, "902YZQ");
test_map(true, "22GT2T1H");
test_map("5UAO96TL", "V5SKJ");
test_map(true, -785);
test_map(1.4321357692854739e+308, false);
test_map(-805, -963);
test_map("BT6UAQX4I", /\r\n|\r|\n/);
test_map(/\r\n|\r|\n/, true);
test_map(1.3459444004033846e+307, "PCW2B");
test_map("QWSNL1", "ASW3");
test_map("XGTCX", "6AQ1HGCR");
test_map(/yes.*day/, -55);
test_map(false, NaN);
test_map("JRVYM4S", "HEHL");
test_map(Infinity, undefined);
test_map(null, 3.5693925071747284e+307);
test_map(/ab+c/, "EWHOF");
test_map(1.0814382888627333e+308, null);
test_map(1.7489824642497583e+308, /foo/g);
test_map(5.919201365897339e+307, "JCMOURLEIM");
test_map(-763, "Y1FYF6");
test_map(2.8754967687769154e+307, "X9U43");
test_map(true, 3.116917570743825e+307);
test_map(-653, null);
test_map(/[\u0400-\u04FF]+/g, -895);
test_map("TBUE3EX9M", +0);
test_map(/yes.*day/, -803);
test_map(-153, Infinity);
test_map("30W0XTL", -133);
test_map(true, /\r\n|\r|\n/);
test_map("2E4R", false);
test_map(-0, -285);
test_map(true, /[\u0400-\u04FF]+/g);
test_map(+0, "HW9NKAAKR");
test_map(4.1960596556942794e+307, -455);
test_map(1.9489259181475454e+307, false);
test_map(7.666732669356889e+307, null);
test_map(/[\u0400-\u04FF]+/g, -599);
test_map(/yes.*day/, /foo/g);
test_map(/[^.]+/, true);
test_map(3.116917570743825e+307, 9.917936084023684e+307);
test_map(/[\u0400-\u04FF]+/g, -191);
test_map(-831, -49);
test_map(-523, -0);
test_map(/[^.]+/, -911);
test_map(-837, "11TJAQL");
test_map(/[\u0400-\u04FF]+/g, false);
test_map(false, /yes[^]*day/);
test_map(true, "85E6GMCO");
test_map(1.23709896100516e+308, 1.2688794981377578e+308);
test_map(5.638737706235128e+307, -0);
test_map(true, -97);
test_map("2VX22", "KQBQSS");
test_map(+0, -161);
test_map(false, /foo/g);
test_map(1.75947077008926e+308, Infinity);
test_map(3.1422654859481467e+307, true);
test_map(Infinity, 1.7165628995906628e+308);
test_map("P799QS61C", "EQR");
test_map("SQLM5F2ZP", false);
test_map(1.4868074872106916e+308, null);
test_map(-63, "XJW9937");
test_map(/\r\n|\r|\n/, "HHM");
test_map(true, 1.2756646012844091e+308);
test_map("3A1", /foo/g);
test_map(-965, null);
test_map(254, 6.739012948626726e+307);
test_map(1.2006834419700006e+308, NaN);
test_map(1.2231897911743012e+308, "EB19E4JK");
test_map(6.138113463012759e+307, false);
test_map(undefined, /(\w+)\s(\w+)/);
test_map(-67, 6.306409975880907e+307);
test_map(7.552731983187475e+307, 6.198966246209188e+307);
test_map(5.628534148371844e+307, 1.244357758827431e+308);
test_map(-623, "65QY6DD");
test_map(-615, false);
test_map("R0CGD2", 1.7649419090103947e+308);
test_map(/yes.*day/, null);
test_map(-309, 6.17997008619851e+307);
test_map("CGLJG3MHBU", /[\u0400-\u04FF]+/g);
test_map("UUWU6Q3IH", /[\u0400-\u04FF]+/g);
test_map(/foo/g, -911);
test_map("IR5KW2", undefined);
test_map(true, 2.6871887768164305e+307);
test_map(/yes.*day/, /yes.*day/);
test_map(/[\u0400-\u04FF]+/g, NaN);
test_map("X3MCI0", "XDYF");
test_map(976, false);
test_map("2CDFGM1", /[\u0400-\u04FF]+/g);
test_map(false, "OUG9F3R9T");
test_map(5.297859462659377e+307, -591);
test_map(/ab+c/, "TUB9U4");
test_map(/foo/g, -641);
test_map(1.0232274821979042e+308, /[\u0400-\u04FF]+/g);
test_map(-109, false);
test_map(3.2796533780062606e+307, true);
test_map(7.326861251900602e+307, false);
test_map(/[\u0400-\u04FF]+/g, "ZHXMQS6PP2");
test_map(true, "LKGSAM5");
test_map(-779, -99);
test_map(/[^.]+/, -0);
test_map(true, Infinity);
test_map("MEUDQBC56Y", -0);
test_map(1.5106582058291456e+308, true);
test_map(/[\u0400-\u04FF]+/g, -117);
test_map("9F5KR", true);
test_map(/(\w+)\s(\w+)/, "NK8");
test_map("LIEC3MF", /foo/g);
test_map(/[^.]+/, undefined);
test_map(/yes.*day/, "VG88");
test_map(/yes.*day/, -303);
test_map(/yes[^]*day/, /(\w+)\s(\w+)/);
test_map(true, 8.912189139779085e+307);
test_map("YR1USN7U", -0);
test_map(-727, 1.2916700488302526e+308);
test_map(/[^.]+/, Infinity);
test_map(false, -347);
test_map(-947, 1.7085865908995169e+308);
test_map(-573, true);
test_map(-793, 3.160426858083616e+307);
test_map("3NPT", 6.482245010776868e+307);
test_map(/[^.]+/, "9D4");
test_map(/[^.]+/, -921);
test_map(/yes[^]*day/, -0);
test_map(/yes[^]*day/, /yes[^]*day/);
test_map(-723, Infinity);
test_map("Q52JP", "8OR3RCGX");
test_map(-635, 94);
test_map("DSDL4ITRBU", true);
test_map(7.043613902837936e+307, -307);
test_map(undefined, "EQL1K");
test_map("N47G", /foo/g);
test_map(/(\w+)\s(\w+)/, 9.858599591623074e+307);
test_map(-531, "NV8NJQS6S");
test_map("ESCLIOCV", -207);
test_map(/[^.]+/, "2RNAFL4");
test_map(1.6175681746920637e+308, -991);
test_map(null, /yes[^]*day/);
test_map(-465, true);
test_map(-7, 9.328934000303776e+307);
test_map(false, -891);
test_map(-57, /yes[^]*day/);
test_map(1.7973484826021872e+308, /[\u0400-\u04FF]+/g);
test_map(-287, 4.4098977499118996e+307);
test_map(-309, -559);
test_map("Z57", +0);
test_map(+0, -885);
test_map("MDL3ICMD9G", "UNJXM9ZD");
test_map(-349, /yes.*day/);
test_map(/ab+c/, -891);
test_map("27XT", false);
test_map("XF86YBLH", 1.675216852153136e+308);
test_map(undefined, true);
test_map(/yes.*day/, /[^.]+/);
test_map("MYNE", null);
test_map(2.0856735251222353e+307, false);
test_map("BWEQZ", true);
test_map("2ECXIKA5QQ", 5.740781748167911e+307);
test_map(+0, "Z6F");
test_map(/\r\n|\r|\n/, /yes.*day/);
test_map(/[^.]+/, /[^.]+/);
test_map(false, -693);
test_map(-979, "96VPICO");
test_map(Infinity, "58MG");
test_map(1.678421161999937e+308, -51);
test_map(/[^.]+/, /foo/g);
test_map(-361, "CLXU");
test_map(/yes[^]*day/, null);
test_map(-405, /yes[^]*day/);
test_map("IJAQS", /[\u0400-\u04FF]+/g);
test_map(/yes.*day/, "5CPC0N1BH");
test_map(true, /ab+c/);
test_map(true, -475);
test_map(6.459675849485601e+307, -207);
test_map(true, 5.850387132380287e+306);
test_map(true, /yes.*day/);
test_map(1.206419867815085e+308, 7.631344141140304e+307);
test_map("BH0MKZ", Infinity);
test_map(true, 6.477464845213288e+307);
test_map(true, -923);
test_map(4.0248576909441724e+307, /ab+c/);
test_map(-603, /foo/g);
test_map(/[\u0400-\u04FF]+/g, 1.6201242160987685e+307);
test_map(/ab+c/, 3.8320322947792904e+307);
test_map(undefined, -677);
test_map(2.5738498460851644e+307, "E1D2IU");
test_map(-0, 7.602207613673299e+307);
test_map(-87, -691);
test_map("7H94VWSFD", 2.5702244614414953e+307);
test_map("7ETA", NaN);
test_map("ZAVXMW3", "J8GBR");
test_map(true, /yes[^]*day/);
test_map(-599, "QDS");
test_map(2.7704177110680585e+307, "LU8E");
test_map(1.1139721293497014e+308, /yes.*day/);
test_map(1.2623749618719662e+308, /(\w+)\s(\w+)/);
test_map(-371, "691SL0");
test_map(9.370221539234212e+307, -0);
test_map(-559, 1.5407396239826185e+308);
test_map(-749, false);
test_map(1.2197022506603028e+308, "W9S32Y");
test_map("2RQ2S98R", false);
test_map(false, -893);
test_map(5.196899702145318e+307, "HHN4JF4");
test_map(-0, /\r\n|\r|\n/);
test_map(-375, -41);
test_map("HYUXF8DCT", 1.4622849724288908e+308);
test_map(-887, -0);
test_map("YELZZN06A6", -695);
test_map(-0, -679);
test_map(true, -479);
test_map(true, "KI6U2NKZ");
test_map(/yes[^]*day/, -997);
test_map(-19, -565);
test_map(6.585307796837993e+307, NaN);
test_map(false, "0DNKU0NI");
test_map(-287, null);
test_map(1.8564154826212536e+307, false);
test_map(-917, true);
test_map("HQL3TE6", "ON23YV70XQ");
test_map(null, -359);
test_map(1.1686852310736937e+308, /ab+c/);
test_map(true, 2.3813963423758607e+307);
test_map("KTXPW", -421);
test_map(undefined, 1.245439572953619e+308);
test_map(undefined, "MX1UT4");
test_map(-0, undefined);
test_map(3.9550239704384174e+307, /yes.*day/);
test_map(-0, -499);
test_map(-365, -163);
test_map("IWGRO", true);
test_map(1.3146656199097053e+308, /(\w+)\s(\w+)/);
test_map(348, /[^.]+/);
test_map(-723, false);
test_map(true, 1.0950224808680696e+307);
test_map(1.0831575847649004e+308, +0);
test_map("B1CZWP", 8.069665366854487e+307);
test_map(/ab+c/, -775);
test_map(false, 7.508147834498683e+307);
test_map("YSSRBUIOL", -969);
test_map(8.765070172662985e+307, /foo/g);
test_map(/yes.*day/, -913);
test_map(-649, +0);
test_map("HYOU", "J88F4V1");
test_map(-963, "403EA");
test_map(-0, Infinity);
test_map("MDKQY", /[\u0400-\u04FF]+/g);
test_map(Infinity, -111);
test_map(-677, false);
test_map(/[^.]+/, /(\w+)\s(\w+)/);
test_map(false, Infinity);
test_map("39IU0MZS", null);
test_map(7.851772272318211e+307, -455);
test_map(1.0978857255200722e+308, true);
test_map(/yes.*day/, +0);
test_map(+0, /foo/g);
test_map(-983, false);
test_map("BSMFCHK0JE", 3.8257868793253253e+307);
test_map(9.803008801636663e+307, 1.0519029154739598e+308);
test_map(66, /(\w+)\s(\w+)/);
test_map("Q0CCZ0PNYJ", /yes.*day/);
test_map(-231, null);
test_map("XW49F", "7N4");
test_map(+0, -293);
test_map(7.849757268171123e+307, 1.4939622355230788e+308);
test_map(-173, false);
test_map("00HM93VO7", 1.1072755462745922e+308);
test_map("XGTCX", true);
test_map(true, "7T20R");
test_map(-0, /yes.*day/);
test_map(-0, /[\u0400-\u04FF]+/g);
test_map(1.2271163901467796e+308, 3.442691563317048e+307);
test_map(-717, 1.1661621135132996e+308);
test_map(false, /\r\n|\r|\n/);
test_map(-883, /foo/g);
test_map(-257, "J6HNZX");
test_map(NaN, +0);
test_map(-529, false);
test_map(+0, -77);
test_map(-0, +0);
test_map(/yes[^]*day/, -829);
test_map(-491, "OTZQ9HT");
test_map(/ab+c/, NaN);
test_map(+0, "Y73UC6NL3");
test_map("MW0VTW4181", -0);
test_map(false, /[\u0400-\u04FF]+/g);
test_map(Infinity, "5V92I22Z");
test_map(/ab+c/, 1.059736673284429e+308);
test_map(-293, undefined);
test_map(/[\u0400-\u04FF]+/g, "BZ7MOAV");
test_map(-709, -219);
test_map(-229, /[\u0400-\u04FF]+/g);
test_map(true, "FE9OXAY5");
test_map(/yes.*day/, 8.496072036005642e+307);
test_map(-213, 1.0484744289526155e+307);
test_map("9WSIEW6E0P", "H3RC");
test_map(undefined, /yes[^]*day/);
test_map("ATYAOC", "MLK3");
test_map("M78BOZV1H", "YFS4MWJF8");
test_map(2.974022714659841e+307, Infinity);
test_map("AQ0OO5H", 7.950035582866188e+307);
test_map("XO7EC3", -0);
test_map("MNYMBW", /foo/g);
test_map(/(\w+)\s(\w+)/, -17);
test_map(/\r\n|\r|\n/, -657);
test_map(/yes.*day/, "ZVB0B");
test_map(-145, true);
test_map(Infinity, 5.935697279783544e+307);
test_map("AHQ5K3", true);
test_map(/\r\n|\r|\n/, -741);
test_map(true, -589);
test_map(true, "60G8");
test_map(7.484686492639862e+307, undefined);
test_map("V3PC8QWUVR", 1.299389286129669e+308);
test_map(-395, 1.1605373452679705e+307);
test_map(Infinity, "7H555X3N");
test_map(-887, /[\u0400-\u04FF]+/g);
test_map(1.3405189142306856e+308, -105);
test_map("D4D6N", /(\w+)\s(\w+)/);
test_map(-593, /[\u0400-\u04FF]+/g);
test_map(false, "P9F");
test_map(-383, -9);
test_map(false, -47);
test_map("THAU", "6YFYU8");
test_map(NaN, 6.7141961797467e+307);
test_map(/[^.]+/, -97);
test_map(NaN, "DU5");
test_map("9ZSHRX9Q", 8.050384488694151e+307);
test_map(Infinity, NaN);
test_map(8.786798466327108e+307, 1.6105343156644905e+308);
test_map(1.4265137184585236e+308, true);
test_map("W97ZVY", "UNQVO");
test_map("A05V7WU", 1.1448015973771542e+307);
test_map(null, /\r\n|\r|\n/);
test_map("IA2X4C", null);
test_map(6.094805881075593e+307, 1.7164306124536665e+308);
test_map(-873, false);
test_map("M9W1QH0F8", "ECL3VYPYH9");
test_map(1.8837439702026515e+306, 1.3550421353519374e+308);
test_map(false, /ab+c/);
test_map(+0, +0);
test_map(1.6276719605660156e+308, -261);
test_map(-0, 1.3245098895268968e+308);
test_map(-535, "8DI0Z");
test_map(true, -779);
test_map(false, "WCZC8T");
test_map(-307, -789);
test_map(true, "8414UCG9DE");
test_map(6.564391988557084e+307, -89);
test_map("LTU", +0);
test_map(-197, 5.408188798792886e+307);
test_map(false, "1W6R1");
test_map(/[\u0400-\u04FF]+/g, /[\u0400-\u04FF]+/g);
test_map(-825, -453);
test_map(true, -177);
test_map(Infinity, -981);
test_map("LCTG9Z4DTJ", 80);
test_map(-81, 1.4115225478302787e+308);
test_map(false, -0);
test_map(-187, true);
test_map(7.072150412242018e+307, NaN);
test_map(-717, "M7K");
test_map(1.7314049612546184e+308, /[\u0400-\u04FF]+/g);
test_map(9.445016599690224e+307, -323);
test_map(true, -129);
test_map(1.0743477548320328e+308, /[^.]+/);
test_map(/foo/g, -267);
test_map(-289, "F9QZ9FF6S");
test_map("7LFQG", true);
test_map(false, 1.4792111734825355e+308);
test_map(/[\u0400-\u04FF]+/g, "14N2A22PW");
test_map(/ab+c/, "7HDG9");
test_map(4.865462803147916e+307, /yes.*day/);
test_map(8.313300187202558e+307, -561);
test_map(+0, "7NGH");
test_map(true, -663);
test_map(/ab+c/, /(\w+)\s(\w+)/);
test_map(/[^.]+/, "R7M0X");
test_map(4.3026504773146924e+307, 4.535145908558383e+307);
test_map(-759, 1.6199850570070808e+307);
test_map(-923, -379);
test_map(NaN, NaN);
test_map(/(\w+)\s(\w+)/, "GYUJ0MRC");
test_map(-767, "ITQ6ZXJA7");
test_map(3.913292037478587e+307, /ab+c/);
test_map(-125, /foo/g);
test_map(9.835110613480227e+307, true);
test_map(false, "I0CX6V");
test_map(-0, "FQF");
test_map(1.2292045974933255e+308, "91K");
test_map(/yes.*day/, /(\w+)\s(\w+)/);
test_map("S0H", /\r\n|\r|\n/);
test_map(false, -503);
test_map(1.3500410784170943e+308, "9PI87A5V");
test_map(undefined, -185);
test_map(1.775840422788105e+308, /yes[^]*day/);
test_map(-189, "KPYILWHJDG");
test_map(null, +0);
test_map("6N31PUGY7U", "KIL06F");
test_map(Infinity, "E0IV");
test_map(null, "81PLU");
test_map("R0C1Y6VX08", -463);
test_map("7O99E3J", undefined);
test_map(7.935198492837962e+307, "1O10JZ2WV");
test_map(5.866159491706299e+307, "VDC0S2KXR");
test_map(true, null);
test_map("UU5HTQ6HAG", /foo/g);
test_map(1.2501791579046413e+308, false);
test_map(-197, /[^.]+/);
test_map(8.910839714073456e+307, /[\u0400-\u04FF]+/g);
test_map(NaN, 5.603194243176224e+307);
test_map(-733, 9.122555702960037e+307);
test_map(-0, "X0LMCSNDG");
test_map(undefined, /[\u0400-\u04FF]+/g);
test_map(/(\w+)\s(\w+)/, 1.6549345942257656e+307);
test_map(/yes.*day/, 1.318399968601942e+308);
test_map("938WT4", false);
test_map(false, -729);
test_map(false, "ABQLIGYU");
test_map(true, "VT7H5");
test_map(true, 9.230327499804754e+307);
test_map("CSA5QCYQ", -0);
test_map(true, 1.5146133304106757e+308);
test_map(/[\u0400-\u04FF]+/g, /(\w+)\s(\w+)/);
test_map(-741, -601);
test_map(1.0565523094969475e+308, -865);
test_map(/\r\n|\r|\n/, 1.6158783694997164e+307);
test_map("E2M6WI", /[^.]+/);
test_map(false, "MOGH3");
test_map("M2R4K2", 4.436404354883441e+307);
test_map("EZJIQJ", false);
test_map(-0, -85);
test_map(-223, NaN);
test_map(-49, "DPR0ON");
test_map("X0C8G2Z8ZA", "HKRDZK725L");
test_map("J35", 1.3268312499339677e+307);
test_map(6.063722441170382e+307, "C3OZQ24ZTX");
test_map(true, /(\w+)\s(\w+)/);
test_map(-647, -943);
test_map("QTFH1OH", /[\u0400-\u04FF]+/g);
test_map(null, -123);
test_map(-623, NaN);
test_map(-653, 5.36680444628365e+307);
test_map(-145, 2.2745982331225774e+307);
test_map(1.740687581611034e+308, true);
test_map(3.6603179815986516e+307, -971);
test_map(NaN, Infinity);
test_map(+0, -743);
test_map(/yes[^]*day/, 9.186661789314362e+307);
test_map(1.453663125674207e+308, /[\u0400-\u04FF]+/g);
test_map(true, -965);
test_map("03U16", -195);
test_map(1.3767366915351387e+308, false);
test_map(-657, "LKV9OX3O7U");
test_map(/[^.]+/, 1.7720549752795026e+308);
test_map(1.0165926665907756e+308, true);
test_map(-11, true);
test_map(/(\w+)\s(\w+)/, -521);
test_map(/ab+c/, -531);
test_map(-829, "GTMX32");
test_map("6XD1Q2N", "98ADUZ1P");
test_map(-873, "J0G");
test_map(/yes.*day/, Infinity);
test_map(/[^.]+/, 1.5767047818222684e+308);
test_map(undefined, -263);
test_map("34KV1HUCT", "8OXSNFD7");
test_map("UZK4", true);
test_map(/yes[^]*day/, -291);
test_map(/ab+c/, /\r\n|\r|\n/);
test_map(-431, NaN);
test_map(/(\w+)\s(\w+)/, "UCGWP54V");
test_map("B2UQB", false);
test_map(-25, 1.1471793842501205e+308);
test_map("8RFVKWV9", -675);
test_map(1.2058459946862046e+308, +0);
test_map(7.620652929653421e+307, "125H");
test_map(-427, 6.584221708566553e+307);
test_map(7.12971076564339e+307, /[\u0400-\u04FF]+/g);
test_map(/\r\n|\r|\n/, 7.175267695167009e+307);
test_map(-71, "E2C9KM");
test_map(-557, -351);
test_map("S0AMO8Y1", 5.723143500795716e+307);
test_map(-563, "ZQVX0");
test_map("ZWX", false);
test_map(/[\u0400-\u04FF]+/g, 1.5978287475469034e+308);
test_map("T55K", false);
test_map("TA3J7E1494", true);
test_map(false, 6.311162005227466e+307);
test_map(true, "9VS");
test_map("756N4I4R", undefined);
test_map(1.2603653126942454e+308, "YG1FBH1");
test_map(1.582877833376713e+308, false);
test_map(NaN, "LD55CU0D6W");
test_map(false, 6.435197597690112e+307);
test_map(true, 1.3430274042551797e+308);
test_map(-49, -31);
test_map(true, 1.5764600762958806e+308);
test_map(/foo/g, "DJ9RQACA6");
test_map(1.5447407994196922e+308, -389);
test_map(1.3974423010047265e+308, -593);
test_map(5.108414753531617e+307, "QYBCYEHB");
test_map(-0, -715);
test_map(1.6657361048020946e+308, 1.6950464548657038e+308);
test_map(false, "7IPK65");
test_map(-9, /ab+c/);
test_map(/\r\n|\r|\n/, NaN);
test_map(6.991838327882541e+307, "1TXNL9Q");
test_map(8.236423010664526e+307, -0);
test_map(/ab+c/, 9.022069714102968e+307);
test_map(-415, "SC6OWW");
test_map(true, "CLKLDI");
test_map(/yes[^]*day/, "TN8G63GTQD");
test_map(NaN, undefined);
test_map(-969, undefined);
test_map(null, Infinity);
test_map(1.0554887815932287e+308, true);
test_map(/yes.*day/, 1.0621522672381862e+307);
test_map(-193, false);
test_map("XVD", -467);
test_map(4.443673513533036e+307, -895);
test_map(/(\w+)\s(\w+)/, -615);
test_map("GZGY2P", -33);
test_map(-265, "43667PGPZ");
test_map("7EEFX7", /yes[^]*day/);
test_map(8.258789092593022e+307, -397);
test_map(1.336208827097885e+308, true);
test_map(/ab+c/, -613);
test_map(1.5928446274897365e+308, -731);
test_map(/[\u0400-\u04FF]+/g, -399);
test_map(false, "HAXBB");
test_map(NaN, -329);
test_map(-135, 9.094448423222024e+307);
test_map("OD1", undefined);
test_map("K05RNKS", 1.0435414851327679e+308);
test_map("ITJEG", false);
test_map(undefined, "68KLHA");
test_map(-249, -0);
test_map(-757, true);
test_map("KV81VB", false);
test_map("RTG8DLOO", +0);
test_map(false, 1.667710074118178e+308);
test_map("KIU0", 1.028494932933821e+308);
test_map(-497, "OUW");
test_map("FK1Q3H5YEQ", NaN);
test_map("42RE50D03K", -473);
test_map("J5X", 3.4698425864594733e+307);
test_map(true, -149);
test_map(/\r\n|\r|\n/, /(\w+)\s(\w+)/);
test_map(/foo/g, -335);
test_map(8.028387951148037e+307, -597);
test_map(-817, +0);
test_map(/yes[^]*day/, 6.578909889453662e+307);
test_map(false, "1P5");
test_map(/[^.]+/, -591);
test_map("H7AN2E81FL", /\r\n|\r|\n/);
test_map(1.2714948695059672e+308, false);
test_map(/\r\n|\r|\n/, -875);
test_map(-815, 3.9237614397304605e+307);
test_map(undefined, -599);
test_map(-755, true);
test_map(-725, 1.293506629651331e+308);
test_map("SEVLUU3DPF", NaN);
test_map(1.3212343606672542e+308, "252X");
test_map(1.76946737381287e+308, true);
test_map(false, -865);
test_map(null, 5.407507506997221e+307);
test_map(true, 1.4011797998804204e+308);
test_map("8GENN8", true);
test_map(/[\u0400-\u04FF]+/g, /[^.]+/);
test_map("KC2G0", "J6OW9CZV");
test_map(3.6455614096341867e+307, /\r\n|\r|\n/);
test_map(false, -803);
test_map(/[^.]+/, "JV8YXJC");
test_map(-851, -413);
test_map(NaN, /yes.*day/);
test_map(/yes.*day/, /\r\n|\r|\n/);
test_map(/\r\n|\r|\n/, 2.4561596506014896e+307);
test_map("7TNV2763AI", -383);
test_map(-573, undefined);
test_map(-665, 1.6507899511119145e+308);
test_map(true, 1.0153726455789431e+308);
test_map("LT7A6DCYTX", true);
test_map(-411, NaN);
test_map(/(\w+)\s(\w+)/, true);
test_map("DDM", -295);
test_map(true, "3ORJYD");
test_map(-61, 1.1716056388512978e+308);
test_map(null, "2NESGEN");
test_map(null, -803);
test_map(undefined, -0);
test_map(/[^.]+/, 1.4296910337376569e+308);
test_map(-285, 1.7338945950275334e+308);
test_map(1.2493649107805926e+308, 4.4663538668883843e+307);
test_map(/foo/g, -551);
test_map(4.6084611355758795e+306, 4.2658914669181675e+307);
test_map(4.843433531974413e+307, null);
test_map(-0, /foo/g);
test_map(-327, "LYPHB7E");
test_map(/ab+c/, -347);
test_map("ZFS1", undefined);
test_map("HBMYY", +0);
test_map(-465, /foo/g);
test_map(true, "9LQ");
test_map(1.5934857769835995e+308, "F42HLMDT");
test_map(-493, /\r\n|\r|\n/);
test_map(8.958508622704998e+307, "54VP9");
test_map(5.590578203382045e+307, false);
test_map(false, 8.02841553273229e+306);
test_map("7GY", 9.553001112873704e+307);
test_map("4DZM5TH", /foo/g);
test_map("581PIS", false);
test_map(false, 7.261053306861401e+307);
test_map(-443, -121);
test_map(-757, "SNL82TT");
test_map("IFH57JL", "R36");
test_map(-405, -365);
test_map("E00GJU9QH", NaN);
test_map("QTW23Y0MH", true);
test_map("F2YJFTE3F", "MXA4ZKV");
test_map("ICW2E2", "QX10");
test_map(-0, -579);
test_map("K291BCZHM0", /(\w+)\s(\w+)/);
test_map(1.7175899638944385e+307, 1.83144467110385e+307);
test_map(1.4702165209501106e+308, "BWF1O");
test_map(6.707324618640605e+307, -929);
test_map(Infinity, /[^.]+/);
test_map(-0, /ab+c/);
test_map("SQWR6BQE3", /\r\n|\r|\n/);
test_map(false, 1.5400660235813505e+308);
test_map(-49, "QEUF76EYB");
test_map(/foo/g, NaN);
test_map(5.151527541024176e+306, true);
test_map(+0, 7.449757370011909e+307);
test_map("B8GZSTS4", false);
test_map(5.847201679098482e+306, true);
test_map(1.0959109017042328e+308, +0);
test_map("A6MSQYF", /\r\n|\r|\n/);
test_map(NaN, 6.432584970838244e+307);
test_map(false, -967);
test_map("Z9EF0XCS", false);
test_map(4.596863156942904e+307, /(\w+)\s(\w+)/);
test_map(-181, -201);
test_map(-421, false);
test_map(NaN, 7.560598209056905e+307);
test_map(-451, null);
test_map(-237, 1.451233328659401e+308);
test_map(1.7891866346993982e+308, /ab+c/);
test_map(undefined, 9.216497714903675e+307);
test_map(1.508222813779516e+308, 7.382635153277532e+307);
test_map(null, "XZI0PCL6X4");
test_map(3.1068852268206817e+307, -171);
test_map(1.4146098582194734e+308, 1.2374214337521202e+308);
test_map(+0, "9UUZU9SH3");
test_map("U9F3GIA9Q", 4.1632513962997655e+307);
test_map(-133, undefined);
test_map(-925, NaN);
test_map(-173, 1.7893793612240911e+308);
test_map(/foo/g, /yes.*day/);
test_map("N5BMGK40", "V05ZHG2");
test_map("73YJ5QS", false);
test_map(1.5461647374799877e+308, true);
test_map("S87TQ57K", 7.618955625520111e+307);
test_map(-0, "29RZ1");
test_map("N8CTRA", /[\u0400-\u04FF]+/g);
test_map(9.250396425926514e+307, "VBQIP");
test_map(/ab+c/, undefined);
test_map(-23, true);
test_map(/[\u0400-\u04FF]+/g, -713);
test_map(4.276634763796833e+307, "F8PHBZX");
test_map(/yes.*day/, 6.389403848174405e+306);
test_map(Infinity, -353);
test_map(/yes[^]*day/, /[\u0400-\u04FF]+/g);
test_map(8.02997004853859e+306, -613);
test_map(1.27584338835218e+306, 3.5653751134793085e+307);
test_map(/\r\n|\r|\n/, +0);
test_map(+0, 3.747015811801766e+307);
test_map(2.0230736532818065e+306, -871);
test_map(-609, /(\w+)\s(\w+)/);
test_map("2O3L0", "JRN");
test_map("W5CI1JN", NaN);
test_map(1.087586503663644e+308, -589);
test_map(undefined, 4.568326429733979e+307);
test_map(false, 1.4235793830575534e+308);
test_map("3D4D", "16P5XZ");
test_map(8.17708327837011e+307, true);
test_map("D49XR", "0E0WJTYM18");
test_map(2.8534649743635827e+307, /\r\n|\r|\n/);
test_map(NaN, -0);
test_map(-805, false);
test_map(-743, 1.4673324705960447e+308);
test_map(1.3688852737198855e+308, "66WYB4F62");
test_map(-377, -435);
test_map("PJCHV", /[^.]+/);
test_map(-481, undefined);
test_map("EH70U2A8X", "G0L4J3CD");
test_map("3PXHW6", "QN2KZXRM");
test_map(NaN, 1.175226667176687e+307);
test_map(-743, /[^.]+/);
test_map(NaN, -233);
test_map(1.3791776229262638e+308, -497);
test_map(-187, /[^.]+/);
test_map(+0, 8.509748668806749e+307);
test_map("HI2ZX893", 5.763971069250824e+307);
test_map(-601, 1.6173141983937386e+308);
test_map(1.7182033321957595e+307, -0);
test_map(918, -599);
test_map(-705, -0);
test_map(-229, "IP44N");
test_map(-121, 1.7468229200383396e+308);
test_map(-763, false);
test_map("XGO0W", -735);
test_map(true, -33);
test_map("7UL7QK4RZ", 9.634363816387654e+307);
test_map(+0, /yes.*day/);
test_map("WCX2", "XBBVHF");
test_map("S5X", true);
test_map("AX75F5Y2X", /[\u0400-\u04FF]+/g);
test_map(false, -475);
test_map(-971, -359);
test_map("JI7ZX5EB", true);
test_map("COWAKLSB1N", /(\w+)\s(\w+)/);
test_map(-371, false);
test_map(false, -17);
test_map(/(\w+)\s(\w+)/, -863);
test_map(/foo/g, 5.4516689845025605e+306);
test_map(/\r\n|\r|\n/, "2H8L45MS8K");
test_map("AU1EN", "Y7GLTO57");
test_map(/(\w+)\s(\w+)/, /(\w+)\s(\w+)/);
test_map(true, "IAIZZ");
test_map(8.615086509011856e+307, +0);
test_map(/\r\n|\r|\n/, /foo/g);