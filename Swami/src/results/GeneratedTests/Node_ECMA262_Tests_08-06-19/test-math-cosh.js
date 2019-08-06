/*
* This file is automatically generated by Swami
*
* 2019-08-06 12:34:32.213741
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
function test_math_cosh(x){
	if (Object.is( x,NaN )){
		var output = Math.cosh(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.cosh(x);
		assert.strictEqual(1, output);
		console.log("Good Test");
		return;
		}
	if (( x === - 0 )){
		var output = Math.cosh(x);
		assert.strictEqual(1, output);
		console.log("Good Test");
		return;
		}
	if (( x === + Infinity )){
		var output = Math.cosh(x);
		assert.strictEqual(+ Infinity, output);
		console.log("Good Test");
		return;
		}
	if (( x === - Infinity )){
		var output = Math.cosh(x);
		assert.strictEqual(+ Infinity, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}



/*TESTS GENERATED AUTOMATICALLY*/
test_math_cosh(true);
test_math_cosh(-243);
test_math_cosh(7.205871299107836e+306);
test_math_cosh(-747);
test_math_cosh(-321);
test_math_cosh(1.2877409119244496e+308);
test_math_cosh(2.2221817330789158e+307);
test_math_cosh(NaN);
test_math_cosh(1.547106897901928e+308);
test_math_cosh(/foo/g);
test_math_cosh("G7P81JX");
test_math_cosh("FFEPLH7N8G");
test_math_cosh(/yes[^]*day/);
test_math_cosh(/[^.]+/);
test_math_cosh("SQCF");
test_math_cosh(null);
test_math_cosh(false);
test_math_cosh("OF9DFH");
test_math_cosh(1.4896615511855505e+308);
test_math_cosh(1.7412092692324947e+308);
test_math_cosh(/yes.*day/);
test_math_cosh(/\r\n|\r|\n/);
test_math_cosh(undefined);
test_math_cosh(-521);
test_math_cosh("M38CXO");
test_math_cosh(-827);
test_math_cosh(1.342727702121019e+308);
test_math_cosh(-653);
test_math_cosh("GJGTR4QYP4");
test_math_cosh(-899);
test_math_cosh(/[\u0400-\u04FF]+/g);
test_math_cosh(1.5187241724034588e+308);
test_math_cosh("YIPAN");
test_math_cosh("JONP");
test_math_cosh("RYCKL8F7");
test_math_cosh(1.0686634280050029e+308);
test_math_cosh(3.1900147435587975e+307);
test_math_cosh(7.83517056507951e+307);
test_math_cosh(-591);
test_math_cosh(-559);
test_math_cosh(1.4394119149163924e+308);
test_math_cosh(-759);
test_math_cosh(5.660967432369029e+307);
test_math_cosh(8.651857643427036e+307);
test_math_cosh("5HMY9");
test_math_cosh(-41);
test_math_cosh("TORL");
test_math_cosh(60);
test_math_cosh(-133);
test_math_cosh(7.058839470274374e+306);
test_math_cosh(-965);
test_math_cosh(-939);
test_math_cosh(/(\w+)\s(\w+)/);
test_math_cosh(-543);
test_math_cosh("XXPDU23GS0");
test_math_cosh(/ab+c/);
test_math_cosh(-109);
test_math_cosh(Infinity);
test_math_cosh(-391);
test_math_cosh(-983);
test_math_cosh("3MAMB3");
test_math_cosh("BM0");
test_math_cosh(-0);
test_math_cosh(1.0278653695836567e+308);
test_math_cosh("RYHQ");
test_math_cosh(6.309728401458952e+307);
test_math_cosh(1.3596792058233407e+308);
test_math_cosh(-731);
test_math_cosh(-457);
test_math_cosh(+0);
test_math_cosh("2DSM22QD1");
test_math_cosh(2.7881066288168515e+307);
test_math_cosh(4.0543889103307767e+307);
test_math_cosh(-587);
test_math_cosh("EXDYD");
test_math_cosh(-325);
test_math_cosh(1.5361742734810248e+308);
test_math_cosh(1.7392266669389805e+308);
test_math_cosh(-15);
test_math_cosh("5MQLS2");
test_math_cosh(-523);
test_math_cosh("OVS0V");
test_math_cosh("A5RTO");
test_math_cosh(-511);
test_math_cosh(5.605224680411516e+307);
test_math_cosh("I5MJV2FZ");
test_math_cosh("LLWE9QLN");
test_math_cosh(1.0617256162451032e+308);
test_math_cosh("LZXE");
test_math_cosh(1.062157951587784e+308);
test_math_cosh("JUJ");
test_math_cosh(7.649362510022724e+307);
test_math_cosh("1AK18S7");
test_math_cosh(-525);
test_math_cosh(9.254856725195643e+307);
test_math_cosh("ZP9JGPJFS");
test_math_cosh(-383);
test_math_cosh(-529);
test_math_cosh("4I3J8F8O2");
test_math_cosh("VGYLT4");
test_math_cosh(-275);
test_math_cosh("DC5P");
test_math_cosh("2AA3QUC");
test_math_cosh("7ZZ51E7");
test_math_cosh(7.617801963063778e+307);
test_math_cosh(-647);
test_math_cosh(-571);
test_math_cosh(-441);
test_math_cosh(1.0471418301136333e+308);
test_math_cosh(1.3314033181151366e+308);
test_math_cosh(1.0767094091888361e+307);
test_math_cosh("MX9HO");
test_math_cosh("VU9X8");
test_math_cosh("NAW5WVS1W");
test_math_cosh(-289);
test_math_cosh(-829);
test_math_cosh("FJAKJG71");
test_math_cosh(5.288452460975575e+307);
test_math_cosh(1.121062172248919e+308);
test_math_cosh(5.61890001385232e+306);
test_math_cosh(-659);
test_math_cosh(5.918988648888731e+307);
test_math_cosh("ZN2Z");
test_math_cosh("CFC8HA6");
test_math_cosh(-35);
test_math_cosh("15JNW5PC");
test_math_cosh(8.43077459726858e+307);
test_math_cosh(1.2413429041429847e+308);
test_math_cosh("ZEVUWNAS56");
test_math_cosh(-619);
test_math_cosh(-745);
test_math_cosh(-89);
test_math_cosh(-229);
test_math_cosh(1.2744279481638028e+308);
test_math_cosh("L7IED6Z");
test_math_cosh(1.0943364221675474e+308);
test_math_cosh(1.646225867453404e+308);
test_math_cosh("XRO9MKU");
test_math_cosh("HVN20C");
test_math_cosh(8.796771201686247e+307);
test_math_cosh(-57);
test_math_cosh(8.020289770688647e+307);
test_math_cosh(-291);
test_math_cosh("553174");
test_math_cosh(-911);
test_math_cosh(-257);
test_math_cosh(-271);
test_math_cosh(1.2244854414844325e+308);
test_math_cosh("4F8ACAH");
test_math_cosh(-411);
test_math_cosh(-323);
test_math_cosh("1G3WQTSA");
test_math_cosh(-279);
test_math_cosh(1.445102592651379e+308);
test_math_cosh(8.484419634451551e+307);
test_math_cosh(4.830165349668407e+307);
test_math_cosh(-327);
test_math_cosh("V5KTCF");
test_math_cosh("SR4");
test_math_cosh(1.4470348379609165e+308);
test_math_cosh("VPZWNBU6X1");
test_math_cosh(1.2695719456650544e+308);
test_math_cosh("LCV");
test_math_cosh(-489);
test_math_cosh(-249);
test_math_cosh("L4G59II");
test_math_cosh("K8D2R193");
test_math_cosh(-507);
test_math_cosh(2.3444059615019985e+306);
test_math_cosh(-689);
test_math_cosh(1.4224683578998248e+308);
test_math_cosh(-17);
test_math_cosh(1.1527754074532682e+308);
test_math_cosh(-21);
test_math_cosh(6.163483185398913e+307);
test_math_cosh(1.5596520646977031e+308);
test_math_cosh("XGS2");
test_math_cosh(-73);
test_math_cosh("325E");
test_math_cosh(-157);
test_math_cosh(-785);
test_math_cosh(-151);
test_math_cosh(-555);
test_math_cosh(-111);
test_math_cosh("OZSJS");
test_math_cosh(6.831105862278822e+307);
test_math_cosh(1.3378401552900699e+308);
test_math_cosh("ZOOE");
test_math_cosh(4.692230517992399e+306);
test_math_cosh(3.058790863952953e+307);
test_math_cosh(1.2680219440692573e+308);
test_math_cosh("MIXI64S");
test_math_cosh(1.276783036064608e+308);
test_math_cosh("UC8B");
test_math_cosh("AVU5YH");
test_math_cosh(-867);
test_math_cosh(-645);
test_math_cosh("5XV");
test_math_cosh(1.7268032446004475e+308);
test_math_cosh(-923);
test_math_cosh(1.7490225667321873e+308);
test_math_cosh("XCC7Z");
test_math_cosh(2.4362453855483434e+307);
test_math_cosh(1.4406808029243567e+308);
test_math_cosh(-609);
test_math_cosh(-585);
test_math_cosh("ONZ3V");
test_math_cosh(4.426325055394471e+307);
test_math_cosh("I38J");
test_math_cosh(4.0939171306955575e+307);
test_math_cosh("W93QZCB");
test_math_cosh(-735);
test_math_cosh("FT1FW8FMUH");
test_math_cosh("ZH7TMQNC");
test_math_cosh(1.7525110949692384e+308);
test_math_cosh(-409);
test_math_cosh(5.839330837321692e+306);
test_math_cosh(9.57665526477392e+307);
test_math_cosh(-495);
test_math_cosh(1.2895538486020495e+308);
test_math_cosh(-377);
test_math_cosh("9YEO5WE");
test_math_cosh(-919);
test_math_cosh(8.503901371384164e+307);
test_math_cosh("BPTDZR");
test_math_cosh(1.5859490436348026e+308);
test_math_cosh(5.702146306245498e+307);
test_math_cosh(1.5672438515423582e+308);
test_math_cosh("381CBDP");
test_math_cosh("1V2V");
test_math_cosh(-473);
test_math_cosh("WFCDKKPSAJ");
test_math_cosh(1.5298811750104607e+308);
test_math_cosh(8.228694210483263e+307);
test_math_cosh(4.0816265258508997e+306);
test_math_cosh(4.23930791924892e+307);
test_math_cosh(-825);
test_math_cosh(1.330269633171764e+308);
test_math_cosh(-903);
test_math_cosh("FPWVR");
test_math_cosh(-371);
test_math_cosh(1.7340277187400882e+308);
test_math_cosh(1.0194218054139061e+308);
test_math_cosh(-541);
test_math_cosh("OXCQO");
test_math_cosh("N2N");
test_math_cosh(4.755521252091057e+307);
test_math_cosh(-781);
test_math_cosh(1.7430974525352712e+308);
test_math_cosh(4.939770061296638e+307);
test_math_cosh("ZD9");
test_math_cosh(-51);
test_math_cosh(5.832680792205632e+306);
test_math_cosh(9.104891973081753e+306);
test_math_cosh(-77);
test_math_cosh("98T9KXYG");
test_math_cosh("6C9MZWW");
test_math_cosh(-403);
test_math_cosh("3UAEJ7");
test_math_cosh(9.91892694604364e+307);
test_math_cosh(-293);
test_math_cosh(-887);
test_math_cosh(2.5854988077531172e+306);
test_math_cosh(6.657878337017061e+307);
test_math_cosh("9O14R");
test_math_cosh("5BIQ6YRPS5");
test_math_cosh(-637);
test_math_cosh(-915);
test_math_cosh(1.1669850897886994e+308);
test_math_cosh(-563);
test_math_cosh("OKRMGJOZR");
test_math_cosh(-237);
test_math_cosh(1.7030080988477988e+308);
test_math_cosh("PN99S");
test_math_cosh(-367);
test_math_cosh(-757);
test_math_cosh("UZXABT7JV");
test_math_cosh("LIUZ8");
test_math_cosh(-535);
test_math_cosh("6UW0");
test_math_cosh(1.0267460914791412e+308);
test_math_cosh("W1RA");
test_math_cosh(-743);
test_math_cosh(-443);
test_math_cosh(2.689288747200931e+307);
test_math_cosh("J06TNIV3Y7");
test_math_cosh(-359);
test_math_cosh("UW1");
test_math_cosh(4.4384202567668367e+307);
test_math_cosh(6.426818014675126e+307);
test_math_cosh("KE54FNE440");
test_math_cosh(-815);
test_math_cosh(-307);
test_math_cosh("R2PRJ");
test_math_cosh(-287);
test_math_cosh(1.136309268220525e+308);
test_math_cosh(1.0770845567266714e+308);
test_math_cosh(3.713037898717472e+306);
test_math_cosh(1.5597234483030123e+308);
test_math_cosh("NAJ6UG");
test_math_cosh("VDZ");
test_math_cosh("IXW1YIS");
test_math_cosh(-283);
test_math_cosh("U5N");
test_math_cosh(9.422759488060544e+307);
test_math_cosh(-791);
test_math_cosh(-207);
test_math_cosh(-515);
test_math_cosh(1.4827383093921786e+306);
test_math_cosh(8.923618570952458e+307);
test_math_cosh("3V9");
test_math_cosh("MQZ3");
test_math_cosh("XSUI7");
test_math_cosh("ZPHS06CB1H");
test_math_cosh(-193);
test_math_cosh(1.3477189423033835e+308);
test_math_cosh(-583);
test_math_cosh("V199PW");
test_math_cosh(1.6798161426875895e+308);
test_math_cosh(-831);
test_math_cosh("847AN2D9BU");
test_math_cosh("KU4QOJ6");
test_math_cosh(1.3513578763799643e+308);
test_math_cosh("24Q8H7");
test_math_cosh("5I10");
test_math_cosh(-335);
test_math_cosh(3.4966163198514264e+307);
test_math_cosh("5NEMGW");
test_math_cosh(7.206151950192168e+307);
test_math_cosh("RASJB1");
test_math_cosh(4.3783181697772463e+307);
test_math_cosh(1.1609036691787623e+308);
test_math_cosh("H0CLENG");
test_math_cosh("Y6FOOS");
test_math_cosh(4.35400091262167e+307);
test_math_cosh("BQ6K");
test_math_cosh(-649);
test_math_cosh(1.500608910071824e+308);
test_math_cosh(-65);
test_math_cosh(-715);
test_math_cosh(5.667965824256218e+307);
test_math_cosh(-551);
test_math_cosh("FFI");
test_math_cosh("TA3VABI1");
test_math_cosh("SL9Y");
test_math_cosh("H5MVIJ");
test_math_cosh(9.365200205179082e+307);
test_math_cosh("8FGYYBW");
test_math_cosh(-751);
test_math_cosh("OJ0NRTWM");
test_math_cosh("KKDF3Z");
test_math_cosh(5.64458192297084e+307);
test_math_cosh("DR5FMUIS11");
test_math_cosh(7.142071720060621e+307);
test_math_cosh(-461);
test_math_cosh("55MQZG4A");
test_math_cosh("J7S");
test_math_cosh(-839);
test_math_cosh(-313);
test_math_cosh(-145);
test_math_cosh(1.703260125385692e+307);
test_math_cosh("3EUQPF0E");
test_math_cosh("PFKP1V");
test_math_cosh("6KXTDBQG");
test_math_cosh(-267);
test_math_cosh(-71);
test_math_cosh(8.874896706638214e+307);
test_math_cosh(5.947854509627172e+307);
test_math_cosh(6.267753758415339e+307);
test_math_cosh(1.6533107360943592e+307);
test_math_cosh("W25HN3");
test_math_cosh("S7K");
test_math_cosh("IZ9");
test_math_cosh("ENIPG357");
test_math_cosh(-907);
test_math_cosh(-47);
test_math_cosh(7.617075761408935e+307);
test_math_cosh(-897);
test_math_cosh(4.3456452871357406e+306);
test_math_cosh(2.298063109549694e+307);
test_math_cosh(-859);
test_math_cosh("5OCTY");
test_math_cosh(1.1288770691939438e+308);
test_math_cosh(-573);
test_math_cosh(-63);
test_math_cosh(1.5378346293021892e+308);
test_math_cosh(-155);
test_math_cosh(3.521517672128983e+307);
test_math_cosh(1.3045685250932222e+308);
test_math_cosh(1.1011729719624432e+308);
test_math_cosh(1.1491917193549832e+308);
test_math_cosh(1.7463575372572825e+308);
test_math_cosh("0T5EC");
test_math_cosh("45TEOUCOO");
test_math_cosh("7GPNHH");
test_math_cosh(-643);
test_math_cosh(-611);
test_math_cosh("CON9Z1BOW");
test_math_cosh("C2AK2SPP2");
test_math_cosh("QAUEM");
test_math_cosh(-947);
test_math_cosh("NDD05HB");
test_math_cosh("E9Q9BGE");
test_math_cosh(-487);
test_math_cosh(-961);
test_math_cosh(4.690758664063828e+307);
test_math_cosh(-695);
test_math_cosh(-873);
test_math_cosh("65A2YP");
test_math_cosh("L13OY0P");
test_math_cosh(9.74056056085531e+307);
test_math_cosh("270Z9L7XMO");
test_math_cosh("V69E");
test_math_cosh("Q55");
test_math_cosh(-685);
test_math_cosh(-255);
test_math_cosh(1.225249359543651e+307);
test_math_cosh(-413);
test_math_cosh("WKL");
test_math_cosh(1.6943359045416635e+308);
test_math_cosh("2DU4J7HP");
test_math_cosh(-449);
test_math_cosh(-771);
test_math_cosh(1.7641577268757368e+308);
test_math_cosh(6.503591079171386e+307);
test_math_cosh(3.8631995079452504e+307);
test_math_cosh(7.80794411977998e+307);
test_math_cosh("3UGS");
test_math_cosh(9.611725889934702e+307);
test_math_cosh(-167);
test_math_cosh("ST7BL7");
test_math_cosh("VXW2R7EHD");
test_math_cosh(1.3587553101178265e+307);
test_math_cosh(-125);
test_math_cosh(2.6185141474038257e+307);
test_math_cosh("R1O");
test_math_cosh(7.574067609095364e+307);
test_math_cosh("ZA8WH");
test_math_cosh(1.6127221122568e+308);
test_math_cosh(-841);
test_math_cosh(1.6083577055877267e+308);
test_math_cosh(-509);
test_math_cosh(7.2695107779504e+307);
test_math_cosh(1.0971971405324582e+308);
test_math_cosh(-729);
test_math_cosh(6.05272717644258e+307);
test_math_cosh(-349);
test_math_cosh("BSQ");
test_math_cosh(-183);
test_math_cosh(-303);
test_math_cosh("ZKI5");
test_math_cosh(-177);
test_math_cosh(1.4666425555097557e+308);
test_math_cosh(-963);
test_math_cosh(4.1365615773771274e+307);
test_math_cosh(6.378577626526466e+307);
test_math_cosh("6ZA94");
test_math_cosh(-421);
test_math_cosh("P8CRZLU1");
test_math_cosh(-651);
test_math_cosh(1.8104594626167308e+307);
test_math_cosh("JQTR0Q");
test_math_cosh("QZINVW8");
test_math_cosh("NYTYM");
test_math_cosh(5.750533921360798e+307);
test_math_cosh(-315);
test_math_cosh(1.3667871484241075e+308);
test_math_cosh(1.5933186521687273e+308);
test_math_cosh("8HZIJP");
test_math_cosh("2LB446QB7H");
test_math_cosh(8.575925941272139e+307);
test_math_cosh(1.177482093611993e+306);
test_math_cosh(3.5626608775977324e+307);
test_math_cosh(-717);
test_math_cosh(-53);
test_math_cosh("QOIHQO570");
test_math_cosh(-671);
test_math_cosh(8.377771042950319e+307);
test_math_cosh(-467);
test_math_cosh(1.116116829199536e+308);
test_math_cosh(1.2650257790494858e+308);
test_math_cosh(1.4343356263711207e+308);
test_math_cosh(8.560949933460791e+307);
test_math_cosh("IVAC");
test_math_cosh("I4USLYZQOC");
test_math_cosh(4.918772098627618e+307);
test_math_cosh("8Q8H2Q");
test_math_cosh(9.621579764833793e+307);
test_math_cosh(2.6025936125362255e+307);
test_math_cosh(-45);
test_math_cosh(-853);
test_math_cosh(-693);
test_math_cosh(782);
test_math_cosh("5F1OKN2");
test_math_cosh("A1JE35");
test_math_cosh("Z9QJ74YIK6");
test_math_cosh("9KG7KL");
test_math_cosh(2.147505379592574e+307);
test_math_cosh(-845);
test_math_cosh(1.3103221271513967e+307);
test_math_cosh("FXGCIY07");
test_math_cosh(-273);
test_math_cosh(1.1616918699477208e+308);
test_math_cosh("2OE3X");
test_math_cosh(4.747104659788094e+307);
test_math_cosh("XJGSHKIX");
test_math_cosh(1.028734152201308e+308);
test_math_cosh(-893);
test_math_cosh(1.5821593177866963e+308);
test_math_cosh(1.1930296341406168e+308);
test_math_cosh(-539);
test_math_cosh("67OXNF");
test_math_cosh(1.655405132996174e+308);
test_math_cosh("UKROQ");
test_math_cosh("1E2D");
test_math_cosh(5.700570303826647e+307);
test_math_cosh(8.327748184292006e+307);
test_math_cosh(5.663523810654888e+307);
test_math_cosh("9IMF4");
test_math_cosh("US1OJDB6");
test_math_cosh(-105);
test_math_cosh(1.7867944464217197e+308);
test_math_cosh("N2NGQZ5");
test_math_cosh("YIN9MC");
test_math_cosh(-481);
test_math_cosh(256);
test_math_cosh(-765);
test_math_cosh(5.348882106409453e+307);
test_math_cosh(1.4925505085357394e+308);
test_math_cosh("IXGSHLD");
test_math_cosh(-351);
test_math_cosh("EYA9PEUAD");
test_math_cosh("VFH");
test_math_cosh("DDHSVPG");
test_math_cosh("JJCMZ6");
test_math_cosh("31X14UO");
test_math_cosh("HB19");
test_math_cosh("QUOC0B1");
test_math_cosh(-269);
test_math_cosh("9FR7L");
test_math_cosh("LJJG3");
test_math_cosh("TG2G");
test_math_cosh(1.1429455212006158e+308);
test_math_cosh("LXD8ZMFKO");
test_math_cosh(1.6004406946700298e+308);
test_math_cosh(3.8907848979475556e+307);
test_math_cosh(3.5088764770138765e+307);
test_math_cosh(-989);
test_math_cosh(-783);
test_math_cosh("73KKM1");
test_math_cosh(5.070581680945537e+307);
test_math_cosh(-179);
test_math_cosh(-951);
test_math_cosh("8GBJWX5QOH");
test_math_cosh("U393ITHIUT");
test_math_cosh("F9I6AEYC");
test_math_cosh("4F5J81G");
test_math_cosh("AB9O5TLJ6");
test_math_cosh("2OAEI5BR7");
test_math_cosh(9.633582781877103e+307);
test_math_cosh(1.5430393844828956e+308);
test_math_cosh(1.6957946169667506e+308);
test_math_cosh("BXLF");
test_math_cosh("OQ15YBX1K5");
test_math_cosh(-603);
test_math_cosh(1.5128766795242694e+308);
test_math_cosh(3.9177477902605837e+307);
test_math_cosh(6.522024749557965e+307);
test_math_cosh(-973);
test_math_cosh(-823);
test_math_cosh(3.917801025639719e+307);
test_math_cosh(1.6683231791659869e+308);
test_math_cosh("ANKUD1PT");
test_math_cosh(1.3100525689758896e+308);
test_math_cosh(1.5308608172701756e+307);
test_math_cosh("FLHA6");
test_math_cosh("2Z63");
test_math_cosh("3L1V1D7");
test_math_cosh(2.540604264604436e+307);
test_math_cosh(1.621331143522113e+308);
test_math_cosh(1.0969719336721117e+307);
test_math_cosh("RJRHVN7V");
test_math_cosh("1IXPQHL6");
test_math_cosh("X4CNZ3MX3");
test_math_cosh("PDR5PER");
test_math_cosh(-625);
test_math_cosh("7M2ADIWK4");
test_math_cosh(1.7087137646220582e+308);
test_math_cosh("6Z1");
test_math_cosh(5.044975351032698e+307);
test_math_cosh("RAZHSC2Q");
test_math_cosh("VKUSPN2VV");
test_math_cosh("AE7ESU2");
test_math_cosh(9.553112867037986e+307);
test_math_cosh(6.294406443582125e+307);
test_math_cosh(8.792556332791627e+307);
test_math_cosh("NPFADLUK");
test_math_cosh(1.3076709864737073e+308);
test_math_cosh(1.4740979747453824e+308);
test_math_cosh("77M");
test_math_cosh(4.731750646361116e+307);
test_math_cosh(1.5664739896764433e+308);
test_math_cosh(-295);
test_math_cosh(-607);
test_math_cosh(-561);
test_math_cosh("342H39IMU7");
test_math_cosh("07QKBTYI");
test_math_cosh(1.0082426054860531e+308);
test_math_cosh(8.605702680526191e+307);
test_math_cosh(1.4668590253473297e+308);
test_math_cosh("MFWY4ZBQ4");
test_math_cosh(-23);
test_math_cosh(-159);
test_math_cosh("NT8");
test_math_cosh("NS4AMGILU");
test_math_cosh(1.3475082340021464e+308);
test_math_cosh(1.5601466072241593e+308);
test_math_cosh(-833);
test_math_cosh(5.706649469183374e+307);
test_math_cosh("XV8");
test_math_cosh("I3F");
test_math_cosh(1.176132717216468e+308);
test_math_cosh(-687);
test_math_cosh(1.4336689573360274e+308);
test_math_cosh(2.3121222605388007e+307);
test_math_cosh("4TYVCLZ8");
test_math_cosh(6.066720942365342e+306);
test_math_cosh(-27);
test_math_cosh(2.0728722428400596e+307);
test_math_cosh(-59);
test_math_cosh(-683);
test_math_cosh(1.5382354180435762e+308);
test_math_cosh(-333);
test_math_cosh(-545);
test_math_cosh(1.5527302674925714e+308);
test_math_cosh("VUSO");
test_math_cosh(3.774862286925741e+307);
test_math_cosh(-929);
test_math_cosh(1.448099441178711e+308);
test_math_cosh("FP2VTS4YK");
test_math_cosh(1.7561695773152526e+308);
test_math_cosh(-225);
test_math_cosh("NND5XIW");
test_math_cosh(1.7890824299222497e+308);
test_math_cosh(1.4998911448232454e+308);
test_math_cosh(-299);
test_math_cosh(-369);
test_math_cosh(1.7458981399114302e+308);
test_math_cosh(-425);
test_math_cosh("3W3");
test_math_cosh("RY9W");
test_math_cosh(-959);
test_math_cosh(-987);
test_math_cosh(-463);
test_math_cosh(1.046667708133391e+308);
test_math_cosh(4.893355830212777e+307);
test_math_cosh("RTJWSA");
test_math_cosh(-807);
test_math_cosh(2.4780713498597153e+307);
test_math_cosh(8.381225403877955e+307);
test_math_cosh(-809);
test_math_cosh(1.342271615391797e+308);
test_math_cosh(-221);
test_math_cosh("8Y0S0M1DW");
test_math_cosh(-889);
test_math_cosh(-137);
test_math_cosh("0I07Z");
test_math_cosh("IP1RG4KS7");
test_math_cosh(9.196469354783828e+307);
test_math_cosh("34O");
test_math_cosh("PLDEHIY9");
test_math_cosh(1.2014269491792547e+308);
test_math_cosh(-195);
test_math_cosh(-233);
test_math_cosh(-673);
test_math_cosh(1.7355620243539584e+308);
test_math_cosh("AUT7");
test_math_cosh(7.180276567887929e+307);
test_math_cosh(-577);
test_math_cosh(1.4854851935236492e+308);
test_math_cosh("U6VIKRE");
test_math_cosh(1.7658864374341177e+308);
test_math_cosh("83O");
test_math_cosh(1.4348656432657931e+308);
test_math_cosh("OXC4");
test_math_cosh(-837);
test_math_cosh(8.205802481782104e+306);
test_math_cosh("4950");
test_math_cosh(2.256823845229458e+307);
test_math_cosh("3EZAPRPD6C");
test_math_cosh(1.1577496316109268e+308);
test_math_cosh(1.7204212014160422e+308);
test_math_cosh(1.023942939571732e+308);
test_math_cosh("PT8G3FNJ5");
test_math_cosh(-455);
test_math_cosh(1.2070251369076185e+308);
test_math_cosh("CV03T7X");
test_math_cosh("IH0JV0H1YF");
test_math_cosh(1.0599485297748497e+308);
test_math_cosh("V4GKUL2UR");
test_math_cosh(4.3916515897553465e+307);
test_math_cosh(-115);
test_math_cosh("0ZQTM");
test_math_cosh("DXJ4HZAC");
test_math_cosh(2.1927832284762864e+307);
test_math_cosh(-711);
test_math_cosh("GCW02");
test_math_cosh("BLJ1FD");
test_math_cosh(9.730630259316612e+307);
test_math_cosh(6.516125328734062e+307);
test_math_cosh("0BPGW5YFIW");
test_math_cosh(-633);
test_math_cosh(1.0276563501684748e+308);
test_math_cosh(3.6798017894644125e+307);
test_math_cosh(1.7196362306945142e+308);
test_math_cosh("61B8");
test_math_cosh(1.1155117962217219e+307);
test_math_cosh(3.3237669068580304e+307);
test_math_cosh("QMNDN");
test_math_cosh("QAYPL");
test_math_cosh("BZTWA");
test_math_cosh(-319);
test_math_cosh(1.9680782557483965e+307);
test_math_cosh(-513);
test_math_cosh("Z4BTB5");
test_math_cosh(4.668452349956562e+307);
test_math_cosh(1.6190071730319586e+308);
test_math_cosh("DTKDCMEVVF");
test_math_cosh(5.073436789305603e+307);
test_math_cosh("A8YIEY8F");
test_math_cosh("TNI70X");
test_math_cosh(-373);
test_math_cosh("PB0UV");
test_math_cosh("AIXLAD");
test_math_cosh(1.6164935336370685e+308);
test_math_cosh("KXKN2");
test_math_cosh("RX30");
test_math_cosh(1.4301780766341407e+308);
test_math_cosh(4.388443544252928e+307);
test_math_cosh(1.2795365179858661e+308);
test_math_cosh(1.4434405907748878e+308);
test_math_cosh("576PVINK");
test_math_cosh(5.270736929955434e+307);
test_math_cosh(1.1195171235879473e+308);
test_math_cosh(5.279475475326721e+307);
test_math_cosh(1.2765539530111313e+308);
test_math_cosh("UUK7AKIH4");
test_math_cosh("KT4NA");
test_math_cosh(-491);
test_math_cosh(1.6531169264387027e+308);
test_math_cosh("KGL9");
test_math_cosh("BUTC");
test_math_cosh(228);
test_math_cosh(1.6295640193505898e+308);
test_math_cosh(-311);
test_math_cosh("6IB");
test_math_cosh("CXQP");
test_math_cosh("JRXGLXHOM");
test_math_cosh("YKE0");
test_math_cosh("9SV");
test_math_cosh("38D4XMP2EQ");
test_math_cosh(1.4346981810620287e+308);
test_math_cosh(-881);
test_math_cosh("BZF6O");
test_math_cosh("6CEID1ZQ");
test_math_cosh(9.892955089555996e+307);
test_math_cosh(-527);
test_math_cosh("764UWD");
test_math_cosh(8.004367471766955e+307);
test_math_cosh("M2WT");
test_math_cosh("1XD1F5G2");
test_math_cosh(-345);
test_math_cosh(7.659806674514642e+307);
test_math_cosh("EQYT5AX6");
test_math_cosh("HUCQDX6");
test_math_cosh(-259);
test_math_cosh(1.154057325589822e+308);
test_math_cosh(-875);
test_math_cosh("7AD8F");
test_math_cosh(-793);
test_math_cosh("C3CO5DZ");
test_math_cosh("83RK");
test_math_cosh(1.1058988273970008e+308);
test_math_cosh("DCTRTYPV");
test_math_cosh(5.957783202969565e+307);
test_math_cosh("KDZKTLM3TA");
test_math_cosh("UT90");
test_math_cosh(-615);
test_math_cosh("A31ORA");
test_math_cosh(1.3525217869917386e+308);
test_math_cosh(1.3463487032596487e+308);
test_math_cosh("QAWKWBC0D3");
test_math_cosh(-453);
test_math_cosh("VXWT8IIV6Q");
test_math_cosh(-843);
test_math_cosh(1.3933826925350798e+308);
test_math_cosh(-199);
test_math_cosh("2GLQCZ2KC");
test_math_cosh(3.7439800400114314e+306);
test_math_cosh("RHR7WE");
test_math_cosh(1.2925196582283718e+308);
test_math_cosh("BRRRZ210");
test_math_cosh("EZSP25VI");
test_math_cosh("90MW4S4K");
test_math_cosh("D7574D");
test_math_cosh(1.539595053943963e+308);
test_math_cosh(-753);
test_math_cosh(-917);
test_math_cosh(9.65430387533273e+307);
test_math_cosh(2.691047744400294e+307);
test_math_cosh(5.100025052165037e+307);
test_math_cosh(-713);
test_math_cosh(-879);
test_math_cosh(-679);
test_math_cosh(-347);
test_math_cosh("03YWQCRCB");
test_math_cosh(-723);
test_math_cosh(-819);
test_math_cosh(4.877542588798494e+307);
test_math_cosh(1.4177174871390425e+308);
test_math_cosh(-285);
test_math_cosh("AJKRZ");
test_math_cosh("4BL7LJPGE");
test_math_cosh(1.2013282978934426e+307);
test_math_cosh(1.2128002612956934e+308);
test_math_cosh("JS18T");
test_math_cosh("1J4BIOB78");
test_math_cosh(1.7692903118357824e+308);
test_math_cosh("IQUY");
test_math_cosh("2WZ5H");
test_math_cosh(1.7139986072208701e+308);
test_math_cosh(-189);
test_math_cosh(-185);
test_math_cosh(1.6735295262109296e+308);
test_math_cosh("5ZBRR8Q");
test_math_cosh("B7T");
test_math_cosh("UQKH");
test_math_cosh(-5);
test_math_cosh(-505);
test_math_cosh(-451);
test_math_cosh(-227);
test_math_cosh(7.331083104745145e+307);
test_math_cosh("L3AEXG7O1");
test_math_cosh("3ML9");
test_math_cosh(-141);
test_math_cosh(-121);
test_math_cosh(8.625246541845028e+307);
test_math_cosh(1.202395298473642e+308);
test_math_cosh(3.683841063633778e+307);
test_math_cosh(-895);
test_math_cosh(1.604219758708404e+308);
test_math_cosh(1.1414748814565324e+308);
test_math_cosh("53GPBGCU8");
test_math_cosh("VH64R");
test_math_cosh(-223);
test_math_cosh(-81);
test_math_cosh("RR8BMAM8QO");
test_math_cosh(1.580332186276869e+308);
test_math_cosh(3.251800193363169e+307);
test_math_cosh(1.0777969938048682e+307);
test_math_cosh(6.841314472674665e+307);
test_math_cosh("M1ORT");
test_math_cosh("9KHOXWHX");
test_math_cosh(-725);
test_math_cosh(1.5795698937118662e+308);
test_math_cosh(-763);
test_math_cosh(-181);
test_math_cosh(6.740500393014865e+307);
test_math_cosh(1.308331210500854e+308);
test_math_cosh(1.3392676013060253e+307);
test_math_cosh(-579);
test_math_cosh("QXVOTI9");
test_math_cosh("9XQW1");
test_math_cosh(8.421741250663015e+307);
test_math_cosh("UJPKR3");
test_math_cosh(1.743607114279193e+308);
test_math_cosh(5.04222221707014e+307);
test_math_cosh("MF7K2N");
test_math_cosh("498");
test_math_cosh("C5255XHMD");
test_math_cosh("4CC98GW");
test_math_cosh("QRYO");
test_math_cosh("SWXX");
test_math_cosh(8.526041855277027e+307);
test_math_cosh("3TNWP");
test_math_cosh(-945);
test_math_cosh(-975);
test_math_cosh(1.3085159324328684e+308);
test_math_cosh(-99);
test_math_cosh(-665);
test_math_cosh("2WZAE2");
test_math_cosh("I9P");
test_math_cosh(-209);
test_math_cosh(9.999015275926644e+307);
test_math_cosh(-143);
test_math_cosh("YFRRH7E4S8");
test_math_cosh(1.7413535782333113e+308);
test_math_cosh("A4H1RCBMLP");
test_math_cosh(-971);
test_math_cosh(-353);
test_math_cosh(1.174213776202906e+308);
test_math_cosh(1.3002930106617516e+308);
test_math_cosh("I0YX3");
test_math_cosh(1.2200781449522662e+308);
test_math_cosh(1.2960010143636418e+308);
test_math_cosh(7.827924974539798e+307);
test_math_cosh(1.115845267722089e+308);
test_math_cosh(-797);
test_math_cosh(-365);
test_math_cosh(1.2147871219864964e+308);
test_math_cosh(-251);
test_math_cosh("1TMXDKUS");
test_math_cosh("2EY");
test_math_cosh("U8SUZ74OZW");
test_math_cosh(1.524984719898876e+308);
test_math_cosh(8.25693513395548e+307);
test_math_cosh(-933);
test_math_cosh(1.343539319745525e+306);
test_math_cosh(1.0627796051958856e+308);
test_math_cosh("CQGD6T");
test_math_cosh(5.781818087583937e+307);
test_math_cosh(1.1260811608252244e+308);
test_math_cosh("M4C");
test_math_cosh("L7TVQ");
test_math_cosh(-941);
test_math_cosh(-429);
test_math_cosh("JY6");
test_math_cosh("55H");
test_math_cosh(2.6439600954794573e+307);
test_math_cosh(-769);
test_math_cosh("U3O");
test_math_cosh("3NRUG72G7B");
test_math_cosh("75QCL209");
test_math_cosh("FACOULDKS");
test_math_cosh("QPNCZHX");
test_math_cosh(1.3605557606812827e+308);
test_math_cosh("XEZ3JGE4XU");
test_math_cosh(1.3864865092750588e+308);
test_math_cosh("34XPLPWF");
test_math_cosh(-107);
test_math_cosh(-517);
test_math_cosh("AK0XK28");
test_math_cosh(1.3136668553247744e+308);
test_math_cosh(1.570525555833064e+308);
test_math_cosh(8.849773643120878e+307);
test_math_cosh("8292U67LL");
test_math_cosh("BYBPFY6");
test_math_cosh(1.1842807986704357e+308);
test_math_cosh(-547);
test_math_cosh(1.038173336853851e+308);
test_math_cosh("8E5D");
test_math_cosh("7AAUIMGXUP");
test_math_cosh("9J6UPLD6");
test_math_cosh(8.675402711216243e+307);
test_math_cosh(4.3372853135420886e+307);
test_math_cosh("0YFK");
test_math_cosh("CWWTPW");
test_math_cosh("BCXX7QV3Y");
test_math_cosh("EA3W4XH9");
test_math_cosh(1.2563910349136448e+307);
test_math_cosh("IV9I");
test_math_cosh(1.0983858993747112e+308);
test_math_cosh("970S4W1G1");
test_math_cosh("ZC0BCBE6G5");
test_math_cosh("2CEL");
test_math_cosh("YC6Y2");
test_math_cosh("AWLGQPLAWM");
test_math_cosh(1.4210261803448542e+308);
test_math_cosh("PVT3X5");
test_math_cosh("9PCAMZB");
test_math_cosh("2BSIPVR");
test_math_cosh(9.074899957637785e+307);
test_math_cosh(4.547209494727956e+307);
test_math_cosh(-937);
test_math_cosh("QIYAO45FOS");
test_math_cosh(1.4667994410131283e+306);
test_math_cosh("T738380EQ");
test_math_cosh(6.795136420257808e+307);
test_math_cosh("37F29");
test_math_cosh("5W4794KO");
test_math_cosh(4.668602243794616e+307);
test_math_cosh(1.2882338321095049e+308);
test_math_cosh(-817);
test_math_cosh("67PY8CSF3");
test_math_cosh(-393);
test_math_cosh(-13);
test_math_cosh("OLCHW");
test_math_cosh("0BYUA3K4");
test_math_cosh(-931);
test_math_cosh(1.1834319112790537e+308);
test_math_cosh("D2L060FML6");
test_math_cosh("SJFKFPZSV9");
test_math_cosh("N8R");
test_math_cosh(1.2062086097590882e+308);
test_math_cosh(528);
test_math_cosh("44LHSZX5S");
test_math_cosh(-835);
test_math_cosh(1.4676574234332957e+308);
test_math_cosh(7.106191691104124e+307);
test_math_cosh(4.4405263242854623e+307);
