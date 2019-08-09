/*
* This file is automatically generated by Swami
*
* 2019-08-08 15:39:21.574403
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
function test_set(randominput,iterable){
	if (( typeof  NewTarget === 'undefined' )){
		 try{
			var output = randominput.Set(iterable);
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
test_set(-0, 1.0979016029670128e+308);
test_set(-123, 3.726944332649384e+307);
test_set(false, -227);
test_set(false, -439);
test_set(/foo/g, false);
test_set(-0, false);
test_set(-119, "CB08");
test_set(Infinity, /yes[^]*day/);
test_set(false, -411);
test_set(false, undefined);
test_set("GOQITA", -793);
test_set(-779, undefined);
test_set(-881, -795);
test_set(/yes[^]*day/, -987);
test_set(true, -929);
test_set(1.3870892033611984e+308, -97);
test_set("DHG6SV0VT", /yes.*day/);
test_set(true, false);
test_set(false, 9.37045715280952e+307);
test_set(undefined, -0);
test_set(false, -613);
test_set(/ab+c/, true);
test_set("0T6", 8.580340425841224e+307);
test_set(1.7422213239875547e+308, true);
test_set(-41, "MVSKMG");
test_set(/ab+c/, -555);
test_set(true, -265);
test_set(false, -991);
test_set(-889, false);
test_set(/[^.]+/, "G22DL");
test_set(-525, false);
test_set(1.4220234597561048e+308, -0);
test_set(1.1282008632983872e+308, -643);
test_set(4.4667044528009015e+307, /ab+c/);
test_set(-317, /ab+c/);
test_set(/foo/g, 1.3895901801247925e+308);
test_set(Infinity, /[^.]+/);
test_set(/foo/g, 1.7085439377163206e+308);
test_set(-0, 1.796985959209242e+308);
test_set(2.559214536267336e+307, /(\w+)\s(\w+)/);
test_set(+0, -427);
test_set(722, -969);
test_set("BUWI08GSF", "BD6");
test_set("X7QYAL4", 1.172292845124177e+308);
test_set(/(\w+)\s(\w+)/, /foo/g);
test_set("FTXQZ", true);
test_set("IH4EDJ", "6KNI6L");
test_set(8.083637966560027e+306, -867);
test_set(-419, NaN);
test_set(NaN, -245);
test_set(/(\w+)\s(\w+)/, 5.331755701121423e+307);
test_set("L5DPUXD", -319);
test_set(2.6033653679060454e+307, /[^.]+/);
test_set(/(\w+)\s(\w+)/, "30KWNRY");
test_set("Q6Y", -95);
test_set(/ab+c/, /yes[^]*day/);
test_set("2LL", 1.4907821033473497e+308);
test_set(/\r\n|\r|\n/, 1.2140555468816736e+308);
test_set(undefined, /[^.]+/);
test_set("I614QS7KA", false);
test_set(-913, /[\u0400-\u04FF]+/g);
test_set("S7XPEF95C", true);
test_set(-0, -369);
test_set("M7LHXHV", 1.1113446146892564e+308);
test_set(1.5221093664673525e+308, false);
test_set(/yes.*day/, /foo/g);
test_set(Infinity, /(\w+)\s(\w+)/);
test_set(false, NaN);
test_set("I354", -0);
test_set(NaN, "SDYQ4G99");
test_set(1.7099670006816182e+308, false);
test_set("OR59K", -337);
test_set(null, /[^.]+/);
test_set(1.2345629657344459e+308, -0);
test_set(9.036108775271514e+306, "2M7O");
test_set("JFCK3A", 1.6003676929628466e+307);
test_set(-695, true);
test_set(/ab+c/, /[\u0400-\u04FF]+/g);
test_set(/[^.]+/, 7.449196197177208e+307);
test_set(9.104026135078332e+307, /foo/g);
test_set(+0, NaN);
test_set(1.696972070918296e+307, 1.0003906321489295e+308);
test_set(null, "1LMFHJ");
test_set(/(\w+)\s(\w+)/, "A4Z9JFYF3C");
test_set(-0, "PPKKNF");
test_set(Infinity, null);
test_set(Infinity, false);
test_set(4.5202243524015315e+305, /yes.*day/);
test_set(2.6051982338272315e+307, -125);
test_set(true, -193);
test_set(-0, 1.4487455281901754e+308);
test_set(false, false);
test_set(false, 1.3425750536114845e+307);
test_set(undefined, "HZYY");
test_set(true, "AVLV86");
test_set(/ab+c/, "2Y7TP");
test_set(true, undefined);
test_set(Infinity, "C0OKS1E");
test_set(-551, -729);
test_set(/foo/g, 1.328115940985312e+308);
test_set(1.5726751316288378e+308, Infinity);
test_set("RTWOENQO", false);
test_set(-771, -249);
test_set(-55, "2X2");
test_set("WFLKRVJ06", undefined);
test_set(/yes[^]*day/, "3UH");
test_set("TM7O", -0);
test_set(undefined, 1.2158670412193883e+307);
test_set(true, -0);
test_set(1.4274101379621563e+308, true);
test_set(3.899479468780518e+307, null);
test_set(6.304762356444673e+307, -297);
test_set("CXEDUOTCE", /yes[^]*day/);
test_set(1.0601850805744392e+308, -0);
test_set("8QKE0RWY4M", 8.896658170256907e+307);
test_set(true, /foo/g);
test_set(/(\w+)\s(\w+)/, true);
test_set("IWD", true);
test_set(-109, false);
test_set(true, /[^.]+/);
test_set(/[\u0400-\u04FF]+/g, null);
test_set("B07MNRZB", -855);
test_set(/foo/g, -789);
test_set(Infinity, 1.0966769480254845e+308);
test_set(/[\u0400-\u04FF]+/g, 1.0178738962875464e+308);
test_set(-0, -507);
test_set(false, 1.6690014737312364e+308);
test_set(1.503247784840629e+308, false);
test_set(/ab+c/, "UBKNHAR4");
test_set(/foo/g, NaN);
test_set("67REY9", -253);
test_set(-153, +0);
test_set(-239, true);
test_set(+0, 3.665425549864682e+307);
test_set(1.792396415610623e+307, 1.7715427595405855e+308);
test_set(-241, /[^.]+/);
test_set(false, -117);
test_set(undefined, 1.9706194108577553e+307);
test_set(6.794919575555952e+306, /[\u0400-\u04FF]+/g);
test_set(false, "XP3");
test_set(NaN, 1.472417719605089e+308);
test_set(/foo/g, "BPT5");
test_set(true, "7N4");
test_set(-985, -0);
test_set(undefined, false);
test_set(null, 1.5155529465568753e+308);
test_set("A2OB9NUTC", 1.1812154088209096e+308);
test_set(-931, 7.048754367715211e+307);
test_set(+0, -953);
test_set("VGA", Infinity);
test_set(Infinity, 4.4075180968515596e+307);
test_set(1.492327845524244e+308, "7EBWV");
test_set(/yes.*day/, /\r\n|\r|\n/);
test_set(NaN, "ESWSCVA92K");
test_set(1.3406441401941327e+308, -849);
test_set("BGS5FGXVAU", "HK7");
test_set(1.3147744031345942e+308, /(\w+)\s(\w+)/);
test_set(-859, false);
test_set(+0, -249);
test_set(-489, "A8BB");
test_set(-971, "HRAYXJI");
test_set("C6XJYRS", -107);
test_set(-581, 9.76474841108251e+307);
test_set(false, Infinity);
test_set(8.977627486327208e+307, /[^.]+/);
test_set("DM8938OM4U", false);
test_set(Infinity, /\r\n|\r|\n/);
test_set(-769, 1.3640435976286687e+308);
test_set(-315, undefined);
test_set("KESLUMXN5", -859);
test_set(1.7488003396265934e+308, "0T2U31WTF2");
test_set(-735, Infinity);
test_set(true, NaN);
test_set(true, -511);
test_set(/foo/g, 6.267011915545385e+307);
test_set(/\r\n|\r|\n/, "LG8YXF");
test_set("Y4GN3WARG3", 6.155297077812495e+307);
test_set(/yes[^]*day/, "FSN");
test_set(/yes.*day/, false);
test_set(6.896370675407454e+307, true);
test_set(+0, "NO2");
test_set(7.427293031252641e+307, -379);
test_set(1.352709466039826e+308, 9.986112595223755e+307);
test_set(1.0132401657674077e+308, -0);
test_set(-247, true);
test_set(-0, "XT5BXF");
test_set(null, /yes[^]*day/);
test_set("KYJP0NIWEE", -339);
test_set("FCHT04D082", -79);
test_set(true, -327);
test_set(false, -379);
test_set("YLPT", /[^.]+/);
test_set(2.2127296999746155e+307, -449);
test_set(-597, true);
test_set(-665, null);
test_set("I5P", /[^.]+/);
test_set(null, -471);
test_set(/foo/g, "W8MR290");
test_set("SSZ", -749);
test_set(/[^.]+/, false);
test_set(-631, "1G5M7");
test_set(/ab+c/, null);
test_set(-941, -827);
test_set("CW0", /ab+c/);
test_set("R6MK", -633);
test_set(1.2216467739825283e+308, -225);
test_set(true, true);
test_set(false, -0);
test_set(/foo/g, /foo/g);
test_set(-773, /yes.*day/);
test_set(null, 1.7711024079412561e+308);
test_set(/foo/g, -233);
test_set("QIG81ZR3", true);
test_set(-0, NaN);
test_set(true, 9.359275507410005e+307);
test_set(true, /yes[^]*day/);
test_set(false, "YHP7NJ8");
test_set(-13, /ab+c/);
test_set(false, 1.3527644520434275e+308);
test_set(null, "RG5700M");
test_set(true, Infinity);
test_set(undefined, true);
test_set(/[\u0400-\u04FF]+/g, false);
test_set(-195, 1.5689518228450187e+308);
test_set(true, "HSULVHJ1M");
test_set(/[\u0400-\u04FF]+/g, +0);
test_set(/\r\n|\r|\n/, -0);
test_set(8.730256080768146e+307, 2.590204926964997e+307);
test_set(-531, 3.5034358216896924e+306);
test_set(1.6197086841543545e+308, false);
test_set(/yes.*day/, 1.1806726783512412e+308);
test_set("3DD", /[^.]+/);
test_set("AM9PVR", null);
test_set(Infinity, -497);
test_set("F453MWWUN7", /ab+c/);
test_set(-755, 1.0126905021189564e+308);
test_set(/ab+c/, false);
test_set(false, +0);
test_set(true, -793);
test_set(undefined, Infinity);
test_set(Infinity, undefined);
test_set(1.17257814624023e+308, -421);
test_set(/(\w+)\s(\w+)/, -107);
test_set(1.5404226501964223e+308, false);
test_set("AMJD1Y", "G7TD072JP");
test_set("D4SBYWZV", NaN);
test_set(9.412752608255034e+307, 2.9740855374516207e+307);
test_set(Infinity, +0);
test_set(null, /foo/g);
test_set(false, -467);
test_set("Z63", /yes.*day/);
test_set(+0, 3.145058977757373e+307);
test_set(/ab+c/, 5.9329449308894e+307);
test_set(1.339659346992874e+306, /ab+c/);
test_set(-0, -133);
test_set("64M2", 6.244720800109043e+307);
test_set(1.5792803653847428e+308, -0);
test_set(Infinity, "GQ9");
test_set(1.7546353402276152e+308, "ZDVQNZ51");
test_set(/yes[^]*day/, undefined);
test_set(-103, "BE16");
test_set(NaN, null);
test_set("XJE", "FEE99NVX");
test_set(1.3977158584628474e+308, 1.5967460937440982e+308);
test_set(1.736271283062259e+308, null);
test_set(-863, "20HIJFG6");
test_set(/yes[^]*day/, -197);
test_set(NaN, Infinity);
test_set(+0, /yes.*day/);
test_set(-117, /foo/g);
test_set(2.6565305799475063e+307, 1.1198117939510544e+308);
test_set(1.0456716394982471e+307, 1.8214664992211891e+307);
test_set("G55CWBMX", /yes.*day/);
test_set(/(\w+)\s(\w+)/, false);
test_set(false, "EFSBV");
test_set(NaN, /yes.*day/);
test_set(null, 6.921590535251809e+307);
test_set(true, "O28NNQH");
test_set(-461, 9.492946809716674e+307);
test_set(1.221328350389314e+308, /[^.]+/);
test_set("SRBTKBQFP", 1.9030261711179714e+307);
test_set(-169, -345);
test_set(1.4707673040090366e+308, null);
test_set(false, /[^.]+/);
test_set(1.456016864806055e+308, undefined);
test_set(true, 1.4510407283690117e+308);
test_set(/yes.*day/, null);
test_set(-907, false);
test_set(undefined, 1.0889256311708225e+308);
test_set(NaN, NaN);
test_set("O5MVR4KGP", undefined);
test_set(5.093952067074093e+307, null);
test_set(/\r\n|\r|\n/, undefined);
test_set("6MWMO1O", true);
test_set(false, "I8QO6");
test_set(null, null);
test_set(1.481100240224374e+307, 5.740774798303396e+307);
test_set(false, /ab+c/);
test_set(-197, 7.48721223109341e+307);
test_set(-995, +0);
test_set("Y5GT1X", undefined);
test_set(-765, 9.315283909821116e+306);
test_set("ROOIEC", /yes[^]*day/);
test_set(3.2342636950234873e+307, /yes[^]*day/);
test_set(-71, 4.4680974249226725e+307);
test_set(true, "XCNNFYDJ");
test_set(NaN, -37);
test_set(-33, undefined);
test_set(/[\u0400-\u04FF]+/g, -717);
test_set(2.427168441193376e+307, undefined);
test_set(null, NaN);
test_set(1.6988798322447086e+308, -579);
test_set(-837, "IM7IURKP");
test_set(-491, NaN);
test_set(NaN, /[^.]+/);
test_set("ZTDJ", undefined);
test_set(null, -351);
test_set(8.52189926144133e+307, -0);
test_set(false, /\r\n|\r|\n/);
test_set(4.7506820745041655e+307, /yes[^]*day/);
test_set(1.2068743225632219e+308, undefined);
test_set(-0, "XNA2UTSP3");
test_set(6.049317319061228e+307, true);
test_set(/[^.]+/, /yes.*day/);
test_set(5.928861742774045e+306, -0);
test_set("7ZOAMRT6", -719);
test_set("DC424HC8", "72C");
test_set(/yes[^]*day/, /foo/g);
test_set("3NE7ET", -0);
test_set(Infinity, 1.3238720077642335e+308);
test_set(1.0738845624596196e+308, /yes[^]*day/);
test_set(-697, "C5IW18S5");
test_set(/foo/g, /[^.]+/);
test_set(/yes.*day/, NaN);
test_set("A5I54G8IK", -355);
test_set("B23L34", null);
test_set("77T8EVROSB", "1Z5BOL08");
test_set(NaN, 1.5715718022238113e+308);
test_set(4.919862701962431e+307, Infinity);
test_set(/yes[^]*day/, -909);
test_set(-405, /ab+c/);
test_set(-637, /foo/g);
test_set(-319, false);
test_set(-403, Infinity);
test_set(-715, -319);
test_set(/foo/g, -0);
test_set(+0, true);
test_set(-197, -0);
test_set(-463, "WXVMO7X");
test_set(/foo/g, -319);
test_set(3.457278049952423e+307, /[\u0400-\u04FF]+/g);
test_set("VEEGH802OF", "4IG3UJ4SEY");
test_set(-743, 1.0113696233477325e+308);
test_set(2.91529490925471e+306, -0);
test_set(-955, 9.555997458657475e+307);
test_set("BPXMVCI5", 3.4480087952493855e+307);
test_set(-281, "GNK3F8Q");
test_set(1.2661719671353703e+308, "P5K7");
test_set(undefined, -535);
test_set(8.247636015094411e+307, true);
test_set(/ab+c/, "D12W");
test_set(4.013503720919226e+307, -817);
test_set(2.954244444218149e+307, -0);
test_set("4448RO", -307);
test_set(1.8861257126521844e+307, undefined);
test_set(-373, -0);
test_set(-681, /[\u0400-\u04FF]+/g);
test_set(-251, 1.7372066368497543e+308);
test_set(+0, -829);
test_set(-735, -0);
test_set(1.500986505515267e+307, -859);
test_set(false, -371);
test_set(/[\u0400-\u04FF]+/g, 2.930814953182433e+307);
test_set(/foo/g, -959);
test_set(true, -993);
test_set(1.8272333480637146e+307, null);
test_set(NaN, /[\u0400-\u04FF]+/g);
test_set(-0, 1.7261949392112687e+308);
test_set(/ab+c/, /(\w+)\s(\w+)/);
test_set(8.852801401748981e+307, -907);
test_set(1.839666227564016e+307, undefined);
test_set(-617, +0);
test_set(1.45129229638659e+308, "4MOZR1");
test_set(false, 7.101126245515205e+307);
test_set(1.314366909797884e+308, false);
test_set(7.672352742065468e+307, -0);
test_set(true, null);
test_set(-345, true);
test_set(-419, /[\u0400-\u04FF]+/g);
test_set(/ab+c/, -0);
test_set("SWE", 7.329134793452739e+307);
test_set(1.0553666748531059e+308, +0);
test_set(null, /(\w+)\s(\w+)/);
test_set(-579, 1.6343500254214733e+308);
test_set(false, 1.8442026286458448e+307);
test_set(-187, 1.232272052268551e+308);
test_set(-949, -193);
test_set(/yes[^]*day/, 1.2388042788025426e+308);
test_set(-737, true);
test_set(/[^.]+/, "POUC1DBC");
test_set(1.1591522089802078e+308, true);
test_set("0ZMRYMDERR", true);
test_set(3.7277113912267087e+307, 2.428419649566635e+307);
test_set("RFU", /yes.*day/);
test_set(-471, "M4ZXAUY");
test_set(false, 1.6481476611826836e+308);
test_set(6.950446756890327e+307, Infinity);
test_set("A0SPKX2D1", 1.1758653188574599e+308);
test_set(-785, "JYKP9XL3");
test_set(null, true);
test_set("IHT1LE", 306);
test_set(NaN, /(\w+)\s(\w+)/);
test_set(false, "WRCXR98");
test_set(6.482875732382739e+307, 8.000086453131558e+307);
test_set(NaN, /foo/g);
test_set("I0G14", 3.035075017251825e+307);
test_set(/[\u0400-\u04FF]+/g, /\r\n|\r|\n/);
test_set("T0H", Infinity);
test_set(-875, "NQ312AT");
test_set(-201, -563);
test_set(-759, /yes[^]*day/);
test_set("YCFLJS7", false);
test_set(/[^.]+/, 1.4741091448644224e+308);
test_set("HEFDR5OB7I", -651);
test_set(4.271235490622843e+307, null);
test_set("0JRET61", undefined);
test_set(1.5793841893929044e+308, NaN);
test_set("BHJSRPOLD", -919);
test_set(true, -117);
test_set("1SV4Z", 1.7802739338619504e+308);
test_set("LUZ2WWBO2", -347);
test_set(-695, false);
test_set(-883, "AFYY63HV");
test_set(/(\w+)\s(\w+)/, /\r\n|\r|\n/);
test_set(/foo/g, -137);
test_set(1.6173196668649235e+308, "SK0UJN");
test_set(undefined, "FG1");
test_set(null, Infinity);
test_set(2.2965363298294444e+307, 1.1963171443270699e+308);
test_set(-609, false);
test_set(/\r\n|\r|\n/, "OX9UA6JJ");
test_set("CVKW", 1.350617082659054e+307);
test_set("4IDRVENTP9", /[\u0400-\u04FF]+/g);
test_set("1WQ", -0);
test_set(/yes[^]*day/, /yes[^]*day/);
test_set(-953, Infinity);
test_set(-785, true);
test_set(Infinity, /foo/g);
test_set(/[^.]+/, Infinity);
test_set(1.6292375493716488e+308, -557);
test_set(true, "DZNP");
test_set("PH10AIG", 4.089126465142122e+307);
test_set(null, 5.775503087799995e+307);
test_set(false, 1.3921530113907826e+308);
test_set(1.6339293233893348e+308, 6.540238971636392e+306);
test_set(/yes[^]*day/, 5.131047734778528e+307);
test_set("RJDZ", /ab+c/);
test_set(/ab+c/, -941);
test_set(1.3732263545474385e+308, true);
test_set(-797, -341);
test_set(NaN, 1.210408134067649e+308);
test_set(-435, true);
test_set(1.0504625385657591e+307, "HY6PXS7");
test_set(1.412295426004041e+308, false);
test_set(false, null);
test_set(NaN, "77AFPFT");
test_set("DEE3GB5A", 3.270897649949254e+304);
test_set("X6H1ZB", NaN);
test_set("R4L", 1.1615780823296206e+308);
test_set(3.205195501343432e+307, 1.8050495902311357e+307);
test_set(null, "12Q1SA1");
test_set(false, "XQ654Z4TT");
test_set(-801, -269);
test_set(-601, /(\w+)\s(\w+)/);
test_set(-721, Infinity);
test_set(-723, -413);
test_set(undefined, NaN);
test_set(/ab+c/, "SU0");
test_set(true, 1.198414885816003e+308);
test_set(6.274282143802991e+307, false);
test_set(-0, /[\u0400-\u04FF]+/g);
test_set(Infinity, -57);
test_set(/yes.*day/, /ab+c/);
test_set(/(\w+)\s(\w+)/, -665);
test_set(8.607671215967572e+307, -709);
test_set(1.4281130614222463e+308, /[^.]+/);
test_set("8KKAUW", /\r\n|\r|\n/);
test_set(false, -175);
test_set(false, 1.1417256736307247e+308);
test_set(false, true);
test_set(3.2630221512530757e+307, NaN);
test_set(1.7848183710247227e+308, /ab+c/);
test_set("9GZW3O", /yes.*day/);
test_set(1.7556767615825961e+308, /[^.]+/);
test_set(1.2211762075527724e+308, undefined);
test_set("AO1MWQ1WFC", NaN);
test_set(1.1835504890567464e+308, Infinity);
test_set(1.2404785253641978e+308, 3.7882299712699865e+307);
test_set(false, 1.9944048095571233e+307);
test_set(false, "0PO98RPP2S");
test_set(1.3747336885961583e+308, /yes[^]*day/);
test_set(false, /yes[^]*day/);
test_set(1.6741671765165777e+308, /ab+c/);
test_set(/ab+c/, Infinity);
test_set(null, false);
test_set(undefined, -303);
test_set(-405, false);
test_set(true, 1.2924184343081108e+308);
test_set(6.957085941119271e+307, 7.821012583937538e+307);
test_set(true, +0);
test_set(1.7395850913133673e+308, +0);
test_set("PL0AR4S7", null);
test_set("WXLS", false);
test_set(-397, -575);
test_set("LON50X7", true);
test_set("6WK2L", true);
test_set(/(\w+)\s(\w+)/, -409);
test_set(+0, -73);
test_set(NaN, false);
test_set(false, -113);
test_set(/[^.]+/, -541);
test_set(true, -353);
test_set(1.4012269805498358e+308, "IIN2");
test_set(true, "ZDLO");
test_set("OZJU6L4FJ", /\r\n|\r|\n/);
test_set(-227, "CG8N");
test_set(1.2254283197125276e+308, undefined);
test_set(/[^.]+/, 8.80930491811889e+307);
test_set(-283, null);
test_set(/foo/g, -935);
test_set(/yes.*day/, +0);
test_set(/(\w+)\s(\w+)/, 1.6675368733608192e+308);
test_set(1.3760606914251927e+308, "KWGB");
test_set("B8B5O", 3.997718778418402e+307);
test_set("3GJXQ", "TFYW7KD56");
test_set(false, -331);
test_set(1.4400910425233796e+308, +0);
test_set(1.4580270949913654e+307, /yes[^]*day/);
test_set(3.287353738194006e+307, -0);
test_set("TTHW8", /\r\n|\r|\n/);
test_set(/ab+c/, undefined);
test_set("K1K6FM", /(\w+)\s(\w+)/);
test_set(-565, false);
test_set(7.63151152626814e+307, +0);
test_set(/ab+c/, -959);
test_set(/foo/g, 9.437347612913285e+307);
test_set(-975, "B8VJJ");
test_set(false, "YAEFH78");
test_set("GWGDBA5", Infinity);
test_set(-701, "SBJZ");
test_set(NaN, 5.736592461712159e+307);
test_set(7.503552336295571e+307, Infinity);
test_set(/[^.]+/, /yes[^]*day/);
test_set(true, "8KPNX6V3");
test_set(1.3152412397924732e+308, false);
test_set("V91", 1.3799874024211232e+308);
test_set(null, -533);
test_set(-907, "I25NJDU");
test_set("HMUETDUUR", "4XR8VS");
test_set("8WHFNKTN", "GPB");
test_set(-0, undefined);
test_set(NaN, 1.7935521481343039e+308);
test_set(/yes[^]*day/, true);
test_set(7.953075521821958e+307, 1.5346452072197984e+308);
test_set(undefined, "HXVCZD4PKG");
test_set(NaN, /ab+c/);
test_set(false, -241);
test_set("L0NAAC6MYW", true);
test_set("N5P5FCZE", +0);
test_set(-71, undefined);
test_set(false, 9.7038731667788e+307);
test_set("X8LDSV", NaN);
test_set(9.23672507234443e+307, -113);
test_set(undefined, -227);
test_set(-287, undefined);
test_set("JXZJ83IU4R", -225);
test_set(/yes[^]*day/, "KY3OXTS07G");
test_set(5.261311208810736e+307, true);
test_set(-319, /yes[^]*day/);
test_set(1.6953514361834623e+308, false);
test_set(Infinity, 1.2918076923183242e+307);
test_set(-123, NaN);
test_set(-317, 1.5856012285681768e+308);
test_set(-847, true);
test_set("0J7UUF4Y", false);
test_set(undefined, /foo/g);
test_set(NaN, -479);
test_set("IZEZF", -293);
test_set(2.4498902615349604e+307, -263);
test_set(/ab+c/, -273);
test_set(-0, "MRP");
test_set(1.631644383243197e+308, "8XT");
test_set(undefined, "UDI");
test_set(1.5298696622713433e+308, null);
test_set(+0, 1.042104613453974e+308);
test_set("I8FS5E", true);
test_set(1.5534030435663944e+308, -433);
test_set(Infinity, 2.8842665356532637e+307);
test_set("REPOLY36O", /[^.]+/);
test_set(9.450147321035014e+307, 8.655334160918115e+307);
test_set(/ab+c/, +0);
test_set(1.4669039131045668e+308, true);
test_set("F27X", -607);
test_set(5.821185876406474e+307, Infinity);
test_set("P5M8", null);
test_set(true, 1.8334136625236698e+307);
test_set("MXMK", /[^.]+/);
test_set("HNIJBGBSSD", null);
test_set(-0, 1.0769473375189466e+308);
test_set(1.426951381129196e+307, -593);
test_set(false, "1UFDCR");
test_set("DPPUSZLAEZ", true);
test_set(-709, 1.0443155960279058e+308);
test_set(/yes[^]*day/, 5.521291140155697e+307);
test_set("DJJL87F4Z6", -531);
test_set("SA1IW", +0);
test_set(-945, false);
test_set(undefined, -529);
test_set("J3L9GD", "J9RVESU4P");
test_set(true, 1.121804332263694e+308);
test_set(+0, 6.210166048252491e+306);
test_set("O8KY2BD", 3.823037049873363e+307);
test_set(1.286592246635167e+308, -781);
test_set(-475, false);
test_set(null, undefined);
test_set("KJMLQG", /yes.*day/);
test_set(true, /\r\n|\r|\n/);
test_set(+0, -907);
test_set("ZCAPK6KK", "Z4C0PA");
test_set(-957, true);
test_set("CUV94HRDK2", 2.2448111066459732e+307);
test_set("UYR", -639);
test_set(-895, -213);
test_set(+0, +0);
test_set(false, "DOS3D8J");
test_set(true, 2.2004403056223617e+307);
test_set(-979, -501);
test_set("582X", -125);
test_set(-389, true);
test_set(-497, 1.7274487977632598e+308);
test_set(NaN, 8.101420210052079e+307);
test_set(/yes.*day/, "U3JCI93L");
test_set(3.271999679325286e+307, true);
test_set(null, "F8HAMEK5");
test_set(/(\w+)\s(\w+)/, 4.59955042169308e+306);
test_set(-211, -363);
test_set(/[^.]+/, undefined);
test_set(true, -517);
test_set("D83Y", NaN);
test_set(-67, -643);
test_set(false, /yes.*day/);
test_set(true, /(\w+)\s(\w+)/);
test_set(true, "OOFMI5");
test_set(null, 1.615595411138008e+308);
test_set(false, 7.873216643374415e+307);
test_set(/foo/g, -59);
test_set(false, 1.3807929711852645e+308);
test_set(1.1750046124108822e+308, "ZJS61APII");
test_set(false, /(\w+)\s(\w+)/);
test_set(-0, -691);
test_set(1.7909556798223904e+308, "KAA584XH1");
test_set(/(\w+)\s(\w+)/, Infinity);
test_set("6ENQY3", Infinity);
test_set("NZJNF0GOCW", 1.4914946367890288e+308);
test_set(-725, -903);
test_set(false, 7.623997382417769e+307);
test_set(5.272285934615489e+307, -279);
test_set(1.3450679171611761e+308, -169);
test_set("7PCQOM1L", 9.744360666600496e+307);
test_set(-157, -213);
test_set(true, 5.614225701901397e+307);
test_set(1.2021842019307663e+308, /\r\n|\r|\n/);
test_set(-461, "69QHXRY2");
test_set(/foo/g, true);
test_set(/(\w+)\s(\w+)/, "CXC80");
test_set(-193, 7.363699898368706e+307);
test_set(-165, "SZ8V");
test_set(1.0576424343480064e+308, 1.017869372400789e+308);
test_set(-917, 1.3064341060542144e+308);
test_set(false, "F4OYJPWME");
test_set(true, 1.535534535366552e+308);
test_set(/[^.]+/, -893);
test_set(7.501484991511061e+307, false);
test_set(/yes[^]*day/, /yes.*day/);
test_set(Infinity, /yes.*day/);
test_set(/yes[^]*day/, -493);
test_set(1.2557986130827638e+308, "NF38272025");
test_set(true, -779);
test_set(false, "65AQ5");
test_set(-253, "ZAP9QH");
test_set(3.936404104961377e+307, -959);
test_set(-141, /[\u0400-\u04FF]+/g);
test_set("VE3G9K0", null);
test_set(false, "H9KVJ3A6");
test_set("M3ER", false);
test_set(/yes.*day/, -797);
test_set("9IY87NJM", true);
test_set("N735S", false);
test_set(7.968636826462131e+307, /ab+c/);
test_set(/\r\n|\r|\n/, "D8WGA");
test_set(-0, -411);
test_set(7.010425892819096e+307, -0);
test_set(-855, true);
test_set(-13, -785);
test_set(undefined, "GYUBKN9GI");
test_set(1.1029545873926872e+308, "FC4O");
test_set(false, 1.516276833662937e+308);
test_set("RC7WF", null);
test_set(-995, 1.0920885721000969e+308);
test_set(-401, "8APZLREX");
test_set(/ab+c/, "61C6");
test_set(/[^.]+/, -507);
test_set(/yes[^]*day/, false);
test_set(9.011468674608773e+307, false);
test_set(/[^.]+/, "L28DEWWM");
test_set(null, 5.943167309219179e+307);
test_set("YIN9MC", true);
test_set(undefined, -187);
test_set(Infinity, true);
test_set(-589, true);
test_set("REQD", null);
test_set(undefined, 1.6071049171117296e+308);
test_set("TDNTH", false);
test_set(+0, -351);
test_set(/ab+c/, /ab+c/);
test_set(-0, "TSMFD");
test_set("3VWM1JE", Infinity);
test_set("TOY", -599);
test_set(2.4182017634186488e+306, /\r\n|\r|\n/);
test_set(1.1599461306840464e+308, 3.722703850619813e+306);
test_set("FTYFF3E4A", true);
test_set(-873, "32AU9NKO8");
test_set(-587, 8.799731601850354e+307);
test_set("KOJBT", 5.866256927797611e+307);
test_set(false, "3EG7R");
test_set(-419, 1.4375046302610763e+308);
test_set(1.5052343513407268e+308, Infinity);
test_set(-0, 1.137832105774404e+308);
test_set(-209, null);
test_set(NaN, 1.388024280523795e+308);
test_set(-421, 1.097026892447454e+308);
test_set(7.7083162636578e+307, -197);
test_set(false, -615);
test_set(false, "CRRMGNL9");
test_set(false, -711);
test_set(1.7872166089768096e+308, 5.744809744270648e+307);
test_set(/[^.]+/, -145);
test_set(-179, Infinity);
test_set(-943, NaN);
test_set("KOYZ", -781);
test_set(/yes.*day/, /yes[^]*day/);
test_set(null, /\r\n|\r|\n/);
test_set(+0, -799);
test_set(3.4526971302539686e+307, "WJ60YUN4");
test_set(-0, -0);
test_set(5.772917414869816e+306, 1.1248372909128847e+308);
test_set("VM8ZQA71", 1.7087347246732842e+308);
test_set(null, 1.1005697816855215e+308);
test_set(-3, "1P6");
test_set(undefined, -47);
test_set("MW1ND", 8.057917469028995e+307);
test_set("FXH8RTB7KN", -903);
test_set("3U4RTTJM6", /foo/g);
test_set("IB12R", -183);
test_set(true, "4FSKUMX");
test_set(+0, /[\u0400-\u04FF]+/g);
test_set(1.4386699967173612e+308, -699);
test_set(+0, -0);
test_set(-325, /[^.]+/);
test_set(-947, -3);
test_set(1.0612342178908737e+308, "J8TV");
test_set(true, 1.5215987054828243e+308);
test_set(-709, undefined);
test_set("QW6", "DMM3T");
test_set(1.3400708000889042e+308, /foo/g);
test_set("7WK3W", "KPNRNTP0");
test_set(undefined, 1.795900995636775e+308);
test_set(NaN, "2IVRIJY0");
test_set(2.902868238567822e+307, /yes[^]*day/);
test_set(1.5780332068350181e+308, null);
test_set(5.439850917229854e+307, -495);
test_set(8.630683252386699e+306, 7.33703129516774e+307);
test_set(-0, /ab+c/);
test_set("IKYOF", 1.5937937164718128e+308);
test_set("45UPB", -79);
test_set(-675, /yes.*day/);
test_set(/(\w+)\s(\w+)/, 9.937581019707317e+307);
test_set(/[^.]+/, 3.810908085250413e+307);
test_set("WCGW", /yes.*day/);
test_set(-759, 1.4122625982651226e+308);
test_set(true, 1.7398174067761392e+308);
test_set(8.649864677343844e+307, /(\w+)\s(\w+)/);
test_set(/\r\n|\r|\n/, -607);
test_set(true, 1.5571250819386157e+308);
test_set(-415, "DA9I");
test_set(1.1036084112306675e+308, false);
test_set(true, -967);
test_set(/foo/g, -395);
test_set(-0, "DT7671XH0");
test_set(/ab+c/, /yes.*day/);
test_set(-0, -277);
test_set("UGGZ", /[^.]+/);
test_set(-677, "ZNG1GQYC8");
test_set(1.6068838487337476e+308, null);
test_set(1.6845748700090806e+307, -913);
test_set(false, -545);
test_set(4.882286449111496e+307, -845);
test_set(-0, 1.0712389706029745e+308);
test_set(NaN, 7.190923027402518e+307);
test_set("F09", -841);
test_set("Z18Y13D0", /ab+c/);
test_set("WRL1T", /\r\n|\r|\n/);
test_set("FTMS", -455);
test_set(-9, -311);
test_set(false, -621);
test_set(/yes.*day/, 1.3501343610017483e+308);
test_set(2.5133364576338743e+307, "LP0YYBJL");
test_set(1.6386859632452854e+307, false);
test_set(-907, -287);
test_set(1.3933826925350798e+308, false);
test_set(/ab+c/, 7.694691671595989e+307);
test_set(1.1936595975150496e+307, "59XVKOPRG");
test_set(-523, /yes[^]*day/);
test_set(false, /[\u0400-\u04FF]+/g);
test_set(true, -897);
test_set("0Z5ME4X1P", /yes.*day/);
test_set(7.578109497319238e+306, -761);
test_set(+0, Infinity);
test_set(/(\w+)\s(\w+)/, "BYHT6H9PE");
test_set(false, 926);
test_set(/yes[^]*day/, /[\u0400-\u04FF]+/g);
test_set(-325, undefined);
test_set(false, "7GK1HDR0S9");
test_set("IYPFE3MH", /(\w+)\s(\w+)/);
test_set(-0, "577WBJ4NYJ");
test_set(-355, 1.2850529817528708e+307);
test_set(1.559194672392983e+308, 1.0656262687505944e+306);
test_set(-13, 5.407202418144476e+307);
test_set(true, 2.2142854208197176e+307);
test_set(Infinity, NaN);
test_set(5.20269768120192e+307, false);
test_set(-165, -967);
test_set(-355, "5W2WVHLJ");
test_set(7.264300578135688e+307, "UPE");
test_set(true, 3.1430296081481483e+306);
test_set("OJJ6T70QA8", 4.50922714514554e+306);
test_set(false, -207);
test_set(true, 6.779583129733834e+307);
test_set("3JANLP", "UKLM1A");
test_set(false, "ILJP");
test_set(undefined, "33O35XN5I");
test_set("S9YTDH1ZL9", /(\w+)\s(\w+)/);
test_set(-453, /yes[^]*day/);
test_set(-807, true);
test_set(-0, -991);
test_set(-917, "JBP");
test_set(-839, "A6NI");
test_set(true, "MWRIT");
test_set(-933, false);
test_set("D43UAIQ", "BS604D8U85");
test_set("HO4NVN", -69);
test_set(undefined, /[\u0400-\u04FF]+/g);
test_set(1.53532709659949e+308, -761);
test_set("YAI0F7RE9C", -0);
test_set("IONCLUZFR8", "BQ7NS0");
test_set(1.1354156852523514e+308, +0);
test_set(-413, "NO1OGIZD");
test_set(/(\w+)\s(\w+)/, "XRQKHX");
test_set(undefined, null);
test_set("RSOBY", -339);
test_set(-475, -807);
test_set(/[^.]+/, -0);
test_set(-15, undefined);
test_set(1.5547279805824403e+307, false);
test_set(null, "6OKKHHF");
test_set(null, /ab+c/);
test_set(1.6241342517186134e+308, -0);
test_set("WY7D", NaN);
test_set(/yes.*day/, 4.34589611338481e+307);
test_set(/[^.]+/, "4C5MZB9");
test_set(/foo/g, 4.993890637084188e+307);
test_set(-905, false);
test_set(8.573554852185159e+307, -483);
test_set(/(\w+)\s(\w+)/, "DQIB2Y");
test_set(1.3269287640920253e+307, "8OLZX");
test_set(-435, "TKGM8JB2");
test_set(-297, /(\w+)\s(\w+)/);
test_set("ADYH", +0);
test_set(6.785723387887221e+307, /(\w+)\s(\w+)/);
test_set(-251, /ab+c/);
test_set(-165, true);
test_set(undefined, -157);
test_set(true, "Y7C1");
test_set(true, 7.712234239824408e+307);
test_set(/yes.*day/, "BLVVLFAXVZ");
test_set(3.877945883251766e+306, -701);
test_set("WXQLG", true);
test_set(true, -243);
test_set(5.39261413217858e+307, -749);
test_set(Infinity, 1.7943281747660908e+308);
test_set(/[^.]+/, 1.5935411314341505e+308);
test_set(1.9995801672656212e+307, true);
test_set(-51, "V6G");
test_set(-663, -369);
test_set("U04QE", undefined);
test_set(1.1999120495597882e+308, +0);
test_set(-901, 1.774291775881924e+308);
test_set(7.614076988725384e+307, "1K71SQC");
test_set(/[\u0400-\u04FF]+/g, "GD8I8");
test_set(true, 9.00257951044868e+307);
test_set(/ab+c/, 1.3063790632369994e+308);
test_set(-0, true);
test_set(true, 5.522274427948259e+307);
test_set(-193, true);
test_set(undefined, /\r\n|\r|\n/);
test_set(+0, "ZCAOO4EA35");
test_set(/[\u0400-\u04FF]+/g, true);
test_set(1.7685979937495558e+308, 1.4250789112153088e+308);
test_set(true, /yes.*day/);
test_set(/\r\n|\r|\n/, /ab+c/);
test_set(6.70759416523137e+307, -95);
test_set(-635, -495);
test_set(-437, Infinity);
test_set(1.9257584982144295e+307, /[^.]+/);
test_set(8.331867166215221e+307, /yes[^]*day/);
test_set(true, -643);
test_set(true, -391);
test_set(-701, true);
test_set(false, /foo/g);
test_set(5.637132018692366e+307, "PITADGGYK");
test_set(1.6648647399126846e+308, "JV1");
test_set(1.1633184216611835e+308, "MNZ51");
test_set(null, "59ZRVMX0");
test_set(-275, /\r\n|\r|\n/);
test_set(false, "O2SPP2SCB");
test_set(false, 1.0831393384199415e+308);
test_set(1.4594425566327068e+308, "IO6HN");
test_set("4TPLPE2U6", 1.3496242903912095e+308);
test_set(/yes[^]*day/, NaN);
test_set(true, -857);
test_set("MPHBQ1US", 1.3804270199748635e+308);
test_set(/[\u0400-\u04FF]+/g, NaN);
test_set(5.510226068533243e+306, "VM6L");
test_set(/ab+c/, 1.4084210149713291e+308);
test_set(-257, 1.1521432351220687e+308);
test_set("YRHZ36", 1.6491568822798578e+308);
test_set(/\r\n|\r|\n/, -645);
test_set(-203, "8Q9");
test_set(-939, null);
test_set(/yes[^]*day/, -393);
test_set(true, -497);
test_set(Infinity, /ab+c/);
test_set("H7EP6A2", "F0R6G14");
test_set(false, -937);
test_set(/\r\n|\r|\n/, /\r\n|\r|\n/);
test_set(/ab+c/, -17);
test_set("Y6Y8K0J", /yes[^]*day/);
test_set("BYFRE6YQZI", 1.5159972421260566e+308);
test_set(1.5546816519561228e+308, 1.6750762863107187e+308);
test_set(Infinity, -623);
test_set("BZLNV1ZVZ", -929);
test_set(-209, undefined);
test_set(/yes.*day/, true);
test_set(NaN, -87);
test_set(NaN, -845);
test_set(4.414352835493155e+307, true);
test_set(-435, NaN);
test_set("XSWZC", Infinity);
test_set("7O6LG8", true);
test_set(+0, false);
test_set(-801, "PXOBF");
test_set(1.5621564625964431e+308, -487);
test_set(/[^.]+/, 1.3886815504270701e+308);
test_set("SWRORT", -179);
test_set(null, /[\u0400-\u04FF]+/g);
test_set(NaN, -923);
test_set("SIXF", Infinity);
test_set(/yes[^]*day/, 1.5130097019150607e+308);
test_set(1.5180442867809972e+308, 7.3921921647825e+307);
test_set(-671, 5.825535902445161e+307);
test_set(Infinity, -517);
test_set(1.6158980027763113e+308, -547);
test_set(-225, false);
test_set(4.678501797298372e+307, "VLFTRP");
test_set(-955, /yes.*day/);
test_set(+0, 1.495227445781161e+308);
test_set(-217, undefined);
test_set(true, /ab+c/);
test_set(false, -9);
test_set(true, 1.2843027424920075e+308);
test_set(1.5711591022910127e+308, /\r\n|\r|\n/);
test_set(6.187525861668407e+306, 1.5187457556536996e+308);
test_set(Infinity, "J6OW9CZV");
test_set(/yes.*day/, 6.666718808474316e+307);
test_set(-347, /foo/g);
test_set("ZR301SKMM3", +0);
test_set(-607, true);
test_set(-351, -917);
test_set("GI9R3WLHM", -249);
test_set(/foo/g, "L6EF13U");
