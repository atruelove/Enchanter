/*
* This file is automatically generated by Swami
*
* 2019-08-06 12:45:40.966043
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
function test_math_log10(x){
	if (Object.is( x,NaN )){
		var output = Math.log10(x);
		new TestCase("math_log10", "math_log10", NaN, output);
		test();
		return;
		}
	if (( x < 0 )){
		var output = Math.log10(x);
		new TestCase("math_log10", "math_log10", NaN, output);
		test();
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.log10(x);
		new TestCase("math_log10", "math_log10", - Infinity, output);
		test();
		return;
		}
	if (( x === - 0 )){
		var output = Math.log10(x);
		new TestCase("math_log10", "math_log10", - Infinity, output);
		test();
		return;
		}
	if (( x === 1 )){
		var output = Math.log10(x);
		new TestCase("math_log10", "math_log10", + 0, output);
		test();
		return;
		}
	if (( x === + Infinity )){
		var output = Math.log10(x);
		new TestCase("math_log10", "math_log10", + Infinity, output);
		test();
		return;
		}
}



/*TESTS GENERATED AUTOMATICALLY*/
test_math_log10(/[^.]+/);
test_math_log10(true);
test_math_log10(1.3428623582436641e+308);
test_math_log10(-477);
test_math_log10(2.135786594432188e+307);
test_math_log10(false);
test_math_log10("K4P1Z");
test_math_log10(8.704775007306564e+307);
test_math_log10(8.466328627862445e+307);
test_math_log10(undefined);
test_math_log10(-0);
test_math_log10(5.197106176523243e+307);
test_math_log10(/[\u0400-\u04FF]+/g);
test_math_log10(Infinity);
test_math_log10(/yes.*day/);
test_math_log10("VZZK");
test_math_log10(8.018474988828143e+307);
test_math_log10(/\r\n|\r|\n/);
test_math_log10(3.695848216060835e+307);
test_math_log10(-155);
test_math_log10("QGQMVEJA1L");
test_math_log10("Y5I");
test_math_log10(5.125513763127471e+307);
test_math_log10(1.7263974572106696e+308);
test_math_log10("D4V85T");
test_math_log10(/yes[^]*day/);
test_math_log10(1.3597918460904634e+308);
test_math_log10(-903);
test_math_log10(1.1246198850806024e+308);
test_math_log10(9.88807371989102e+307);
test_math_log10("QN2KZXRM");
test_math_log10(+0);
test_math_log10(-399);
test_math_log10("99X4F72");
test_math_log10("0KRXDN2MTI");
test_math_log10(-525);
test_math_log10("R8XR89AK");
test_math_log10(2.551465427551139e+307);
test_math_log10(3.177427453814543e+307);
test_math_log10(-285);
test_math_log10(6.032079379245848e+307);
test_math_log10(-831);
test_math_log10(/foo/g);
test_math_log10(7.67075007342514e+307);
test_math_log10(1.2643240280360787e+308);
test_math_log10("EG2VKNNN");
test_math_log10(-247);
test_math_log10(2.312787994768928e+307);
test_math_log10(null);
test_math_log10(-927);
test_math_log10(4.039282818613362e+307);
test_math_log10(1.3378586606549005e+308);
test_math_log10(2.014350420504803e+307);
test_math_log10(NaN);
test_math_log10("120");
test_math_log10(1.0745692298247673e+308);
test_math_log10("IGY3");
test_math_log10(5.645872263984197e+307);
test_math_log10(1.2365768816526129e+308);
test_math_log10(-415);
test_math_log10(-703);
test_math_log10(9.536452531408688e+307);
test_math_log10(-787);
test_math_log10("RZ37IUX");
test_math_log10(-39);
test_math_log10("D0KA0XXP58");
test_math_log10(-813);
test_math_log10("1ICIXNC3H");
test_math_log10("6XKGQBIV9J");
test_math_log10(1.6814960704347157e+308);
test_math_log10("DA9Q1");
test_math_log10(1.6021469743433684e+308);
test_math_log10(-863);
test_math_log10(-953);
test_math_log10("6NL9K");
test_math_log10(1.2569364364917515e+308);
test_math_log10(-193);
test_math_log10(3.6877465869116753e+307);
test_math_log10(-131);
test_math_log10(/ab+c/);
test_math_log10("UOU");
test_math_log10("6D4C4");
test_math_log10(-733);
test_math_log10(7.573560660028732e+307);
test_math_log10(-447);
test_math_log10("KR0135L");
test_math_log10("Q46BQGDJQ");
test_math_log10("5KW3");
test_math_log10("2LJ69K");
test_math_log10(8.810229672184858e+306);
test_math_log10("IIN2");
test_math_log10("61F");
test_math_log10(1.3617294698736734e+308);
test_math_log10(-539);
test_math_log10(-561);
test_math_log10(1.3491536649216857e+308);
test_math_log10(4.559062286998064e+307);
test_math_log10(-947);
test_math_log10(7.34713832021543e+307);
test_math_log10(6.120630546822882e+307);
test_math_log10(-567);
test_math_log10(4.8904171429101685e+306);
test_math_log10(4.3972678839380237e+307);
test_math_log10(-867);
test_math_log10(1.0734208558432754e+308);
test_math_log10(-833);
test_math_log10("KCFFX");
test_math_log10(-837);
test_math_log10("5FFVEZ1594");
test_math_log10("FHX");
test_math_log10(-879);
test_math_log10("T6RT");
test_math_log10("JS4K4");
test_math_log10(1.4886229527052063e+308);
test_math_log10(7.10925596774874e+307);
test_math_log10(-515);
test_math_log10("W39");
test_math_log10(/(\w+)\s(\w+)/);
test_math_log10("09U8IMB");
test_math_log10(5.900251276981385e+307);
test_math_log10(1.8044243529875368e+307);
test_math_log10(4.2538062415549094e+307);
test_math_log10("WD268H4K");
test_math_log10(6.314836779001972e+307);
test_math_log10(7.595136347052091e+307);
test_math_log10(-923);
test_math_log10(-781);
test_math_log10(2.5708054348254174e+307);
test_math_log10(-907);
test_math_log10(-325);
test_math_log10("MDRTHR");
test_math_log10("9M1NO5");
test_math_log10(-619);
test_math_log10(1.048496964062037e+306);
test_math_log10("ROYC4TP");
test_math_log10(-303);
test_math_log10("8PF7I03A44");
test_math_log10(-473);
test_math_log10(-739);
test_math_log10("HTBCG8UC94");
test_math_log10(1.7937801958732447e+308);
test_math_log10(7.396723981353315e+307);
test_math_log10("63GIXMI");
test_math_log10(7.445032535277212e+307);
test_math_log10("4VGG");
test_math_log10(-533);
test_math_log10("4L764NP33F");
test_math_log10(-429);
test_math_log10("O3FCGGSD");
test_math_log10(5.955165579801084e+307);
test_math_log10(-311);
test_math_log10("MRR8BN3V");
test_math_log10("KI8EV4Q");
test_math_log10("UFF");
test_math_log10(4.0014868220061924e+307);
test_math_log10(5.54757029540748e+307);
test_math_log10(-165);
test_math_log10("MXY8DC4D");
test_math_log10(5.920044084733579e+307);
test_math_log10(4.830492742454181e+307);
test_math_log10(-663);
test_math_log10(-333);
test_math_log10(-341);
test_math_log10("FD1M9W67ID");
test_math_log10("5TZSRKE");
test_math_log10("V7QP40A");
test_math_log10(-59);
test_math_log10(-607);
test_math_log10("PLY6CQKCY2");
test_math_log10("AW7WGB");
test_math_log10("YTU6");
test_math_log10("Z39N");
test_math_log10(560);
test_math_log10("IH5YL");
test_math_log10(114);
test_math_log10(9.990212443735292e+307);
test_math_log10(1.1323323023938563e+308);
test_math_log10(3.202511993687618e+307);
test_math_log10(5.3084947241086904e+305);
test_math_log10(1.3432634103954199e+308);
test_math_log10(1.4473621752135666e+308);
test_math_log10(1.038178746023227e+308);
test_math_log10("PTF2");
test_math_log10(4.23313892249705e+307);
test_math_log10(-25);
test_math_log10(7.507531939757988e+307);
test_math_log10("ZXJCZUG");
test_math_log10(-825);
test_math_log10("2S2FFYEDHE");
test_math_log10(1.1802337948663485e+308);
test_math_log10("25Y");
test_math_log10(-785);
test_math_log10("FZW");
test_math_log10("GXEL");
test_math_log10(8.343688065087935e+307);
test_math_log10("M9X3N1X9");
test_math_log10(2.3349998486202464e+307);
test_math_log10("7SUQRUH4");
test_math_log10("B726K");
test_math_log10(1.5332263998272258e+308);
test_math_log10("X8OHEOJMI8");
test_math_log10(-37);
test_math_log10("V6W");
test_math_log10(1.3744653059521505e+308);
test_math_log10("VO30UEVH67");
test_math_log10(1.6974964725922824e+308);
test_math_log10(1.278195729929103e+308);
test_math_log10(3.7663587792492644e+307);
test_math_log10("LO3JCP56T");
test_math_log10("R1SQWYF");
test_math_log10(1.1850468174936719e+308);
test_math_log10(-635);
test_math_log10(1.1942708431175056e+308);
test_math_log10(4.99643099647309e+307);
test_math_log10(1.1579265372914027e+308);
test_math_log10(-789);
test_math_log10("MLZ");
test_math_log10(1.389957824864143e+308);
test_math_log10("6LZR");
test_math_log10(1.0314968994541114e+308);
test_math_log10(-705);
test_math_log10(1.0873113931744552e+308);
test_math_log10("GZ9C7OLWGR");
test_math_log10(-593);
test_math_log10("6481X");
test_math_log10(4.9952010250862846e+306);
test_math_log10(7.972602645521278e+307);
test_math_log10("MXU05S0TS");
test_math_log10(-331);
test_math_log10(1.7313519339667634e+308);
test_math_log10("HFBR9U7");
test_math_log10(-535);
test_math_log10("D1M");
test_math_log10(-419);
test_math_log10("PT6U772ET");
test_math_log10(-597);
test_math_log10("U5TD1LW8JJ");
test_math_log10(-679);
test_math_log10(3.847417984354321e+307);
test_math_log10(8.237370139255517e+307);
test_math_log10(-569);
test_math_log10(7.4771659597516e+307);
test_math_log10(1.2533468451929488e+308);
test_math_log10(1.3194049830956972e+308);
test_math_log10(3.9040146547572007e+307);
test_math_log10(-551);
test_math_log10(1.0567337788348207e+308);
test_math_log10(-445);
test_math_log10("W6SHU6OYT6");
test_math_log10("UB5ZE8VLKT");
test_math_log10("FI0");
test_math_log10(748);
test_math_log10(1.1573178371873706e+308);
test_math_log10(4.596013081521454e+307);
test_math_log10(3.5427754800753977e+307);
test_math_log10(1.4296750928592763e+308);
test_math_log10(-835);
test_math_log10(1.0495398304256766e+308);
test_math_log10("KQ6O");
test_math_log10("65G");
test_math_log10(1.6021020211470379e+307);
test_math_log10(4.240057807882808e+307);
test_math_log10(-153);
test_math_log10("HI4RR");
test_math_log10(-425);
test_math_log10(-759);
test_math_log10(-557);
test_math_log10("JGDF5FC43F");
test_math_log10(-829);
test_math_log10("AB8RENS");
test_math_log10("3XVM5O");
test_math_log10("N7WT4");
test_math_log10(-355);
test_math_log10("BM08");
test_math_log10("GBZMT99");
test_math_log10(7.51681173552771e+307);
test_math_log10("3FE5U");
test_math_log10(7.662324999536144e+307);
test_math_log10(-381);
test_math_log10(7.451205706671948e+307);
test_math_log10(1.5941880691833693e+308);
test_math_log10("UM76F");
test_math_log10("R1L3O9AOP");
test_math_log10(1.5559688579174687e+308);
test_math_log10(9.738777691142362e+306);
test_math_log10(1.0242159680796278e+308);
test_math_log10(1.7191557552562818e+308);
test_math_log10(-257);
test_math_log10(-639);
test_math_log10("6RA7VHM");
test_math_log10(1.104184428908897e+308);
test_math_log10(-245);
test_math_log10(-149);
test_math_log10(7.196348815821261e+307);
test_math_log10(-951);
test_math_log10(1.452208342928372e+308);
test_math_log10(-439);
test_math_log10("TQZJIYTX20");
test_math_log10("GWC6WYAJ8Q");
test_math_log10(-741);
test_math_log10("WJX");
test_math_log10(6.973629594553606e+307);
test_math_log10("JUDXL1969V");
test_math_log10(4.561276197872521e+307);
test_math_log10("XXPO");
test_math_log10("P4X");
test_math_log10("KXIM5XIO7");
test_math_log10(4.0642298335836195e+307);
test_math_log10(-111);
test_math_log10(4.4253057881168425e+307);
test_math_log10(6.399315844389008e+307);
test_math_log10(1.710867892327476e+308);
test_math_log10(6.888388160240575e+307);
test_math_log10(6.15299042260964e+306);
test_math_log10(9.993867124099957e+307);
test_math_log10(-75);
test_math_log10("O75O");
test_math_log10(-383);
test_math_log10(1.168777978556758e+308);
test_math_log10(3.3684462286610246e+307);
test_math_log10(1.675174157396025e+308);
test_math_log10("65X42ZT3");
test_math_log10(1.7970944688848168e+308);
test_math_log10(9.82123073885051e+307);
test_math_log10(-843);
test_math_log10(1.534547726977468e+308);
test_math_log10("CDT");
test_math_log10("I7NHEST34G");
test_math_log10("6JA");
test_math_log10(-157);
test_math_log10("0H6XEYZZYG");
test_math_log10(-145);
test_math_log10(-239);
test_math_log10(856);
test_math_log10(5.576176497494949e+307);
test_math_log10("4I1");
test_math_log10("6NXWK2C");
test_math_log10(1.5694752151807952e+308);
test_math_log10(524);
test_math_log10(-517);
test_math_log10(1.6166224817475223e+308);
test_math_log10(5.967462234241032e+307);
test_math_log10("QXJ6");
test_math_log10("IX6GAE");
test_math_log10("KRV3");
test_math_log10(-505);
test_math_log10(-433);
test_math_log10(6.161748459380729e+307);
test_math_log10("0C4G9");
test_math_log10(1.3952610480181762e+308);
test_math_log10("1X0QXO");
test_math_log10("I9G3LN49");
test_math_log10("WBWNFMLHI");
test_math_log10("CWWY");
test_math_log10(-545);
test_math_log10("CJQ92V8");
test_math_log10(7.73476292253739e+307);
test_math_log10("K56O");
test_math_log10(1.19062615674489e+308);
test_math_log10("2OIQ14KYG");
test_math_log10("U2AK0G");
test_math_log10(9.731212807372608e+307);
test_math_log10(-771);
test_math_log10("8J9II");
test_math_log10(-461);
test_math_log10(1.416199579801273e+308);
test_math_log10("IAQZRU");
test_math_log10("0QO");
test_math_log10("RL7XXWW");
test_math_log10("I11O7J");
test_math_log10(1.1402799275812653e+308);
test_math_log10(6.824070309764495e+307);
test_math_log10(7.433972512438629e+307);
test_math_log10(-413);
test_math_log10(7.754664753603318e+307);
test_math_log10(-735);
test_math_log10(-935);
test_math_log10(-87);
test_math_log10(5.547687370836827e+307);
test_math_log10("E9EMPIP");
test_math_log10(8.242341936465801e+307);
test_math_log10("BFJR7");
test_math_log10(-585);
test_math_log10("JLDYU7R");
test_math_log10(7.802311912988193e+307);
test_math_log10("8GWCMWLU7");
test_math_log10(5.008656219222164e+307);
test_math_log10("DSTXO3");
test_math_log10("WWRN76LX98");
test_math_log10(4.692133293390933e+307);
test_math_log10(6.106193036313075e+307);
test_math_log10("AMNGQGNGRX");
test_math_log10("C26O0QHVT");
test_math_log10("UFX2");
test_math_log10(-255);
test_math_log10(-251);
test_math_log10("GFN3GRH9");
test_math_log10(1.6416229821680604e+308);
test_math_log10(-875);
test_math_log10(1.7613736167522768e+308);
test_math_log10(1.154134992624481e+308);
test_math_log10("JO0R");
test_math_log10("FTXBSKJR1");
test_math_log10("Y7UC");
test_math_log10(9.939975238922526e+307);
test_math_log10(-675);
test_math_log10(-763);
test_math_log10(1.2260530068860874e+306);
test_math_log10(-983);
test_math_log10(-395);
test_math_log10(-101);
test_math_log10(1.244914130606665e+308);
test_math_log10(-179);
test_math_log10(4.794323579298002e+307);
test_math_log10(9.430878415001434e+307);
test_math_log10(2.8923790887013337e+305);
test_math_log10(-19);
test_math_log10("M3ZO0ANXA2");
test_math_log10(2.768137481195161e+307);
test_math_log10(-95);
test_math_log10("36AA");
test_math_log10(4.9094491775383e+307);
test_math_log10("TUQAQ");
test_math_log10(-599);
test_math_log10(-207);
test_math_log10(2.578819143488456e+307);
test_math_log10(1.0796285714990331e+308);
test_math_log10("RLQ20");
test_math_log10(-9);
test_math_log10(-127);
test_math_log10(-971);
test_math_log10("MVSLHX");
test_math_log10(1.7609263920863433e+308);
test_math_log10(6.583931966332253e+307);
test_math_log10("6GOOS3GLY");
test_math_log10(-929);
test_math_log10(-531);
test_math_log10(6.541036733108044e+306);
test_math_log10("XFKJP4YIV");
test_math_log10(-471);
test_math_log10(-519);
test_math_log10(-895);
test_math_log10(-793);
test_math_log10("7OTN5H");
test_math_log10("4O6GGR7334");
test_math_log10(-709);
test_math_log10(1.379051810200877e+308);
test_math_log10(1.0395301189299896e+308);
test_math_log10("OH9NZ35T5P");
test_math_log10(-177);
test_math_log10("09OTP4");
test_math_log10(9.95118163547088e+307);
test_math_log10(5.550886739983982e+307);
test_math_log10(-407);
test_math_log10("8HJ7DPBT");
test_math_log10("IFFQEHU");
test_math_log10(1.3027808821607217e+308);
test_math_log10("GJ015BMVX9");
test_math_log10(1.286866290711232e+308);
test_math_log10(4.635014717166421e+307);
test_math_log10("RSH7LJI4");
test_math_log10(6.469484038170089e+307);
test_math_log10(7.548239277500047e+307);
test_math_log10("SDPFS551");
test_math_log10(-541);
test_math_log10(-241);
test_math_log10(1.0838240810661982e+308);
test_math_log10(1.2971756841429968e+308);
test_math_log10(7.414213917934882e+307);
test_math_log10("1311BRJV");
test_math_log10(6.426069780024943e+307);
test_math_log10(8.563745398621272e+307);
test_math_log10("R5PJDEJE");
test_math_log10("CFOF7");
test_math_log10(7.153749738515757e+307);
test_math_log10(-993);
test_math_log10(5.667782379801419e+307);
test_math_log10("T6N2Y");
test_math_log10(2.9565949444532645e+307);
test_math_log10("T5GX2PC");
test_math_log10("A4VRT6OE");
test_math_log10(1.2859398756360045e+308);
test_math_log10("U1YHW");
test_math_log10("XJ9ZM");
test_math_log10(-961);
test_math_log10("ZHH6");
test_math_log10("XIHPU");
test_math_log10(-79);
test_math_log10("7UID");
test_math_log10("X300R");
test_math_log10("IW5");
test_math_log10(6.99021852377328e+306);
test_math_log10(7.278576863528639e+307);
test_math_log10(8.316907896735626e+307);
test_math_log10(2.4532135474282624e+307);
test_math_log10(-287);
test_math_log10("T7YVIFKSK");
test_math_log10(-967);
test_math_log10(2.1072436796340202e+307);
test_math_log10(3.6524032012460225e+307);
test_math_log10("UKMD8BX");
test_math_log10(9.220094240124592e+307);
test_math_log10("UUK");
test_math_log10("9H7G01Q");
test_math_log10("YNER");
test_math_log10("XS34");
test_math_log10("8TGY8VQ");
test_math_log10(1.7359361148198946e+308);
test_math_log10("KCV");
test_math_log10(-69);
test_math_log10("5NTPE0CPB2");
test_math_log10(-847);
test_math_log10("FH60QT164");
test_math_log10(1.6550393208462665e+308);
test_math_log10(-105);
test_math_log10("BH4JTJ5DOX");
test_math_log10("0KNT2");
test_math_log10(-901);
test_math_log10(1.2934485435788457e+308);
test_math_log10(9.550700792172913e+307);
test_math_log10(-343);
test_math_log10(1.6759860481711445e+308);
test_math_log10("12S6634QY3");
test_math_log10(-757);
test_math_log10("QUXXXF7U");
test_math_log10(1.1083329056016515e+308);
test_math_log10(3.6464895829983444e+307);
test_math_log10("B2IINH1F");
test_math_log10("EAZPO7");
test_math_log10(1.3624243352673918e+308);
test_math_log10(-497);
test_math_log10(1.4504749060979268e+308);
test_math_log10(-53);
test_math_log10(-605);
test_math_log10(8.818106551631903e+307);
test_math_log10("AMVY9UHDA");
test_math_log10("WFJ5YVD1M");
test_math_log10(1.203517771864464e+308);
test_math_log10(1.701301404158744e+308);
test_math_log10("7YS4VG");
test_math_log10("3PI");
test_math_log10(3.0841725108225386e+307);
test_math_log10("XK1N8");
test_math_log10(1.1950802083787673e+308);
test_math_log10(1.7632780846317303e+308);
test_math_log10(1.1945803744344523e+308);
test_math_log10(1.1339106108506934e+308);
test_math_log10(1.1731788921924903e+308);
test_math_log10(-293);
test_math_log10(-743);
test_math_log10(-327);
test_math_log10(-309);
test_math_log10(1.7364044061200869e+308);
test_math_log10("DRU");
test_math_log10("VJ1CREWA");
test_math_log10(1.3607098608823633e+308);
test_math_log10(-175);
test_math_log10(4.2430389072274563e+307);
test_math_log10(-853);
test_math_log10("TVIBCCSOWS");
test_math_log10(-97);
test_math_log10(3.0561789769879416e+307);
test_math_log10(-773);
test_math_log10(1.6433220133785677e+308);
test_math_log10("E7O2KY9");
test_math_log10(6.596202151473508e+306);
test_math_log10(2.673583235569316e+307);
test_math_log10(6.886936609570646e+306);
test_math_log10(4.203245530021346e+307);
test_math_log10(-443);
test_math_log10("B8FBTUG");
test_math_log10(8.200734554645179e+307);
test_math_log10("APDV56F3W2");
test_math_log10("KQKWNLSI");
test_math_log10("R002RP");
test_math_log10("F1ZPMWCG5");
test_math_log10(-267);
test_math_log10(-353);
test_math_log10(-363);
test_math_log10("APF839");
test_math_log10(6.347280034404438e+307);
test_math_log10(1.333168622071243e+308);
test_math_log10("JQRMDWA");
test_math_log10(-731);
test_math_log10("GIPC9");
test_math_log10(-869);
test_math_log10(6.031595004134504e+307);
test_math_log10(-805);
test_math_log10("4LQ3");
test_math_log10("O5JSJ");
test_math_log10(-491);
test_math_log10(-13);
test_math_log10(2.4848195667127083e+307);
test_math_log10("NTW");
test_math_log10(1.7095559887332199e+308);
test_math_log10(-321);
test_math_log10(8.40404267003093e+306);
test_math_log10("R2S2O5");
test_math_log10("FJGRNN4");
test_math_log10(1.1986768280759182e+308);
test_math_log10(6.48855872865705e+307);
test_math_log10(1.3791027396223988e+308);
test_math_log10(-909);
test_math_log10("C9IO7EKVV");
test_math_log10(7.933094707852444e+307);
test_math_log10("MICK6U0");
test_math_log10(9.674204652236897e+307);
test_math_log10("PO7R952");
test_math_log10("3ER0CA5JGV");
test_math_log10("35SD");
test_math_log10("7G9ZX");
test_math_log10(8.236374225265114e+307);
test_math_log10("M1CX208");
test_math_log10("WQSC4R");
test_math_log10(-219);
test_math_log10("0M1");
test_math_log10("Z8NO8KZ");
test_math_log10("7CE07DQ6");
test_math_log10(-409);
test_math_log10(7.587761645564373e+307);
test_math_log10(-67);
test_math_log10(2.787256484215858e+307);
test_math_log10(3.5855891073168216e+307);
test_math_log10(-747);
test_math_log10(9.898321122407222e+307);
test_math_log10(8.8219338110527e+305);
test_math_log10("E5FO");
test_math_log10(1.1115221094497182e+307);
test_math_log10(8.456124568467102e+307);
test_math_log10(-499);
test_math_log10("CZ0");
test_math_log10(-495);
test_math_log10(4.2276323438801306e+307);
test_math_log10("N626");
test_math_log10("DN1JBM");
test_math_log10(7.04739935548658e+307);
test_math_log10("J9MJ6I00Z0");
test_math_log10("3VVUZN6N");
test_math_log10(-351);
test_math_log10("TJTJUMDTR");
test_math_log10("ZGQK65");
test_math_log10(-845);
test_math_log10(-427);
test_math_log10(1.2937517342460436e+308);
test_math_log10("YFORU");
test_math_log10(-51);
test_math_log10(3.5339929006267424e+307);
test_math_log10("MNE86OL8Y");
test_math_log10(-949);
test_math_log10(6.802082073131535e+307);
test_math_log10(1.5359464338379755e+308);
test_math_log10(1.5772989992343512e+308);
test_math_log10(-451);
test_math_log10("5G2F5CCH");
test_math_log10(-673);
test_math_log10(1.6358786887165376e+308);
test_math_log10(4.95768349124689e+307);
test_math_log10("9CASLGM");
test_math_log10("0RI77X");
test_math_log10(1.7446699336762859e+308);
test_math_log10("D857");
test_math_log10("GLY6DSPIW6");
test_math_log10(7.732925239207235e+306);
test_math_log10(1.2369467223191712e+308);
test_math_log10("V80DCP");
test_math_log10(-723);
test_math_log10(-479);
test_math_log10(-121);
test_math_log10(-403);
test_math_log10(-181);
test_math_log10("I9LO");
test_math_log10("DY2RAYA3");
test_math_log10("I642AL");
test_math_log10(1.4869173367441772e+308);
test_math_log10("QFN5B");
test_math_log10("J5L4EQE05");
test_math_log10(1.4335443477635623e+308);
test_math_log10("W6M79JJ");
test_math_log10(1.4972066164951379e+307);
test_math_log10(1.7589200295241611e+308);
test_math_log10("B6B602HWL");
test_math_log10(2.918256525009325e+307);
test_math_log10(1.0040968456043304e+308);
test_math_log10(8.424549475598315e+307);
test_math_log10(-151);
test_math_log10(5.75302622267992e+307);
test_math_log10(5.91351466297942e+306);
test_math_log10(-391);
test_math_log10(6.678389225448558e+307);
test_math_log10("S4022RE");
test_math_log10(-89);
test_math_log10(7.488115818751094e+307);
test_math_log10("V9W7TS");
test_math_log10(3.580209547019586e+307);
test_math_log10(7.237992765289046e+307);
test_math_log10(-283);
test_math_log10(8.490316115526358e+307);
test_math_log10(-119);
test_math_log10(-753);
test_math_log10(-729);
test_math_log10(1.9699171210708545e+307);
test_math_log10(-143);
test_math_log10("CPVGHB");
test_math_log10("DBPRINOVYT");
test_math_log10(2.0341514137302095e+307);
test_math_log10(6.925162137464948e+307);
test_math_log10("R7VPKBRNV");
test_math_log10("CYOH");
test_math_log10(1.3885468566190356e+308);
test_math_log10(-133);
test_math_log10(2.549766186504332e+306);
test_math_log10(1.191581298979574e+308);
test_math_log10("VUDK");
test_math_log10(5.198315716987424e+307);
test_math_log10("IBY12");
test_math_log10(5.93773975970876e+307);
test_math_log10("PD0");
test_math_log10(1.8259112494129944e+307);
test_math_log10(2.269715907892212e+307);
test_math_log10("4PQX4DMLOQ");
test_math_log10(-575);
test_math_log10("LT2V6");
test_math_log10(4.0700644632230753e+307);
test_math_log10("V6UMAV");
test_math_log10("PW8YRD2VV");
test_math_log10(1.4546454990401219e+308);
test_math_log10("T57IPK");
test_math_log10(-361);
test_math_log10("TRTAO");
test_math_log10("SRLOH4");
test_math_log10(9.768470446675701e+306);
test_math_log10("W5NOCW15MB");
test_math_log10(-603);
test_math_log10(-203);
test_math_log10("O5OS7FRIG");
test_math_log10("BXWG");
test_math_log10("CC4XPIH");
test_math_log10("EH2LWQ");
test_math_log10(6.111338343850475e+307);
test_math_log10("0Y1L4DKWKW");
test_math_log10("88UJ1BKK");
test_math_log10("2IU36");
test_math_log10("B13F");
test_math_log10("OB1XJ");
test_math_log10(-347);
test_math_log10(1.5336131732017254e+308);
test_math_log10("S7UJ9ZTBE9");
test_math_log10(-99);
test_math_log10("IZE609HC");
test_math_log10(-791);
test_math_log10(-849);
test_math_log10(1.4904784573807517e+308);
test_math_log10("HK39GXMC");
test_math_log10(-225);
test_math_log10(7.837579361400297e+307);
test_math_log10("RF6M36YUFO");
test_math_log10("XRYOB3");
test_math_log10("S1P6");
test_math_log10("KM1");
test_math_log10(7.525794133659824e+306);
test_math_log10(1.0816646672067521e+307);
test_math_log10("C2NHRLV0B");
test_math_log10(6.880541207992794e+307);
test_math_log10("Z4ECA6CL");
test_math_log10(1.0575516250068824e+308);
test_math_log10(1.4669794416136756e+308);
test_math_log10(7.216494830331812e+307);
test_math_log10("7UZ14GUN");
test_math_log10(1.0956001055273673e+308);
test_math_log10(1.206537233022012e+308);
test_math_log10("LX27IW5");
test_math_log10(7.657139215619979e+307);
test_math_log10(9.933800190165169e+307);
test_math_log10(-139);
test_math_log10(1.177464849270252e+308);
test_math_log10(-161);
test_math_log10("9HEJ1RR0U3");
test_math_log10("RDJ");
test_math_log10(6.416351195546858e+307);
test_math_log10("XOTP0OX");
test_math_log10(1.2838859299872086e+308);
test_math_log10(1.6092356956085896e+308);
test_math_log10(8.087291005999993e+307);
test_math_log10("BONM0FWGV4");
test_math_log10("PGNE8");
test_math_log10("KIH");
test_math_log10("WWLQJR9QLG");
test_math_log10(1.2369261978875454e+308);
test_math_log10(-17);
test_math_log10(-821);
test_math_log10(-691);
test_math_log10("ZR2X");
test_math_log10("WIRJ6TEE6");
test_math_log10(-777);
test_math_log10("LTRA4X");
test_math_log10("SSFV");
test_math_log10("TUZWGH");
test_math_log10("N1WSZE3PJ");
test_math_log10(1.9098606663534848e+307);
test_math_log10("EN2RXLQT");
test_math_log10(-125);
test_math_log10("MA2TGJJ");
test_math_log10("IEJ");
test_math_log10("PGJQ");
test_math_log10(-887);
test_math_log10("OW2");
test_math_log10(3.0236189669710126e+306);
test_math_log10(1.1290970165392201e+308);
test_math_log10(2.1785435205873023e+307);
test_math_log10("RCX4XYN");
test_math_log10(-999);
test_math_log10(1.696819516294097e+308);
test_math_log10("P9O7WDEF");
test_math_log10("RT7G47");
test_math_log10(9.373156745568468e+306);
test_math_log10(2.5508120628294617e+307);
test_math_log10(1.7486102229622296e+308);
test_math_log10(-485);
test_math_log10(-819);
test_math_log10("357P5");
test_math_log10(1.1370814163978962e+308);
test_math_log10("FI4L2J");
test_math_log10("391KBN4UX");
test_math_log10(3.7913091466186166e+307);
test_math_log10(-897);
test_math_log10(-291);
test_math_log10(-797);
test_math_log10(464);
test_math_log10("IST7");
test_math_log10("XIGA");
test_math_log10(2.8553187084839693e+307);
test_math_log10(-349);
test_math_log10("UG4QHXLX5");
test_math_log10(-979);
test_math_log10(1.5618570697220556e+308);
test_math_log10(1.5484399188159678e+308);
test_math_log10("9LPHZ");
test_math_log10("R7R2Y83");
test_math_log10("BLL7GN9LW");
test_math_log10(-373);
test_math_log10("JPQJEI");
test_math_log10("4VL19OJ7P");
test_math_log10(-725);
test_math_log10(9.771375481746885e+307);
test_math_log10(1.4893396953206716e+308);
test_math_log10(7.179814684511933e+307);
test_math_log10(1.233902434491388e+308);
test_math_log10("N4D2N9OD");
test_math_log10("JV1");
test_math_log10(1.2116448523506779e+308);
test_math_log10(1.4288289311031937e+308);
test_math_log10("5H5");
test_math_log10(4.3652225117101813e+307);
test_math_log10(-49);
test_math_log10(-595);
test_math_log10(1.1276714740841892e+308);
test_math_log10(-965);
test_math_log10(1.5427222748448704e+308);
test_math_log10(1.7154920850493572e+307);
test_math_log10("7XZP");
test_math_log10(1.0772849727977594e+308);
test_math_log10(5.098258032256815e+307);
test_math_log10("ETFUHIGYM");
test_math_log10(8.711775046941664e+307);
test_math_log10(9.269863734830112e+307);
test_math_log10(2.667068807531984e+307);
test_math_log10("LPR");
test_math_log10(6.045927810544708e+307);
test_math_log10(1.7938304154674722e+308);
test_math_log10(5.456859621870208e+305);
test_math_log10(2.901525993701078e+307);
test_math_log10(9.652484969078357e+307);
test_math_log10(1.0985054571469054e+308);
test_math_log10("7ZJ2XJ5");
test_math_log10(-925);
test_math_log10(4.615923094411418e+307);
test_math_log10("LO3DMW");
test_math_log10(-77);
test_math_log10(1.5942136515488397e+308);
test_math_log10(7.839363320697024e+307);
test_math_log10(-689);
test_math_log10(-755);
test_math_log10(1.5467539184456502e+308);
test_math_log10("4Z0");
test_math_log10(1.6386790021082587e+308);
test_math_log10(-889);
test_math_log10(1.0239048170975628e+308);
test_math_log10("GY6EV6");
test_math_log10("LBPX");
test_math_log10(4.003846757581818e+307);
test_math_log10(-697);
test_math_log10(8.800034836111031e+307);
test_math_log10(-113);
test_math_log10("O26GTLMU");
test_math_log10("5RUMJ0Y");
test_math_log10(-643);
test_math_log10(9.907508701600314e+307);
test_math_log10(1.5446672631181329e+308);
test_math_log10(-911);
test_math_log10(4.686713829615584e+307);
test_math_log10("BX5K");
test_math_log10("MNLOU5V");
test_math_log10("YCA");
test_math_log10("C05B");
test_math_log10(1.3344450648774762e+308);
test_math_log10(1.6164094400913781e+308);
test_math_log10("NYO");
test_math_log10(-217);
test_math_log10(6.430998469533992e+307);
test_math_log10("1APL3QU");
test_math_log10(-423);
test_math_log10(5.752518630993567e+306);
test_math_log10(6.331049572644611e+307);
test_math_log10("88KNML3S");
test_math_log10("EPS");
test_math_log10(1.2041293059386097e+308);
test_math_log10(9.121661076926418e+307);
test_math_log10("7Y1WEJ4Z2H");
test_math_log10(7.338062617020017e+306);
test_math_log10(-529);
test_math_log10("O2R");
test_math_log10(1.5071644797026516e+308);
test_math_log10(4.982507846366194e+307);
test_math_log10(-995);
test_math_log10("5021");
test_math_log10("U1U");
test_math_log10(-503);
test_math_log10(6.236840612908267e+306);
test_math_log10(3.618390743721353e+307);
test_math_log10(1.128906562753771e+307);
test_math_log10(5.862990832698801e+305);
test_math_log10("63WPB4RWBZ");
test_math_log10(-801);
test_math_log10(1.0048605848353297e+308);
test_math_log10("VF395");
test_math_log10("TEYEG");
test_math_log10("DUF");
test_math_log10("KIZR");
test_math_log10(-537);
test_math_log10(3.9728990061909864e+307);
test_math_log10("RYAJ40CWN");
test_math_log10(1.6477896704985082e+308);
test_math_log10(1.5590554940137317e+307);
test_math_log10(5.316183158168539e+307);
test_math_log10(1.0002560625644704e+308);
test_math_log10(-715);
test_math_log10("3H01JRE5");
test_math_log10("YJL7FIG8");
test_math_log10("OYR");
test_math_log10(-365);
test_math_log10(-277);
test_math_log10("VV20QFVNNF");
test_math_log10(1.343678229159502e+308);
test_math_log10(9.463876087298266e+307);
test_math_log10(548);
test_math_log10(-611);
test_math_log10(1.1157293700066e+308);
test_math_log10(2.458369869222069e+307);
test_math_log10(1.6954276095561481e+308);
test_math_log10("1D8UPWR1F");
test_math_log10(-667);
test_math_log10(-129);
test_math_log10("PJ30L544");
test_math_log10("Y0F");
test_math_log10(5.961030308504353e+307);
test_math_log10(1.2617311015986133e+307);
test_math_log10(4.643207818656768e+307);
test_math_log10("RGSH");
test_math_log10(1.7447312015447152e+308);
test_math_log10(-687);
test_math_log10("QY2DM");
test_math_log10(1.7695965715600804e+308);
test_math_log10(4.666339233738936e+307);
test_math_log10(1.4050968227837681e+308);
test_math_log10(7.755287379687908e+307);
test_math_log10(1.4238093081732016e+307);
test_math_log10(-489);
test_math_log10("6MU2C");
test_math_log10(-749);
test_math_log10(1.6278855976684415e+308);
test_math_log10("5XS");
test_math_log10(-169);
test_math_log10(1.0638744497903817e+308);
test_math_log10(1.5423430541468369e+308);
test_math_log10("JJHU4HRT8");
test_math_log10(3.8290765755233306e+307);
test_math_log10(5.250863549594035e+307);
test_math_log10(-467);
test_math_log10("7LO");
test_math_log10(3.590116191058756e+307);
test_math_log10("NJ2");
test_math_log10("2GB");
test_math_log10("WY4SRC");
test_math_log10(9.954461883253076e+307);
test_math_log10(-765);
test_math_log10("Z7NT");
test_math_log10("BQ26V2WEZV");
test_math_log10(1.19760156650404e+308);
test_math_log10(3.6714445394358126e+307);
test_math_log10("PZHF8C");
