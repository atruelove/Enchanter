/*
* This file is automatically generated by Swami
*
* 2019-08-06 19:40:24.262007
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
function test_math_asin(x){
	if (Object.is( x,NaN )){
		var output = Math.asin(x);
		new TestCase("math_asin", "math_asin", NaN, output);
		test();
		return;
		}
	if (( x > 1 )){
		var output = Math.asin(x);
		new TestCase("math_asin", "math_asin", NaN, output);
		test();
		return;
		}
	if (( x < - 1 )){
		var output = Math.asin(x);
		new TestCase("math_asin", "math_asin", NaN, output);
		test();
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.asin(x);
		new TestCase("math_asin", "math_asin", + 0, output);
		test();
		return;
		}
	if (( x === - 0 )){
		var output = Math.asin(x);
		new TestCase("math_asin", "math_asin", - 0, output);
		test();
		return;
		}
}



/*TESTS GENERATED AUTOMATICALLY*/
test_math_asin(5.268233105569169e+307);
test_math_asin(/[^.]+/);
test_math_asin(-883);
test_math_asin(1.0092095165500418e+308);
test_math_asin("CFLBV");
test_math_asin(/ab+c/);
test_math_asin(-0);
test_math_asin(/[\u0400-\u04FF]+/g);
test_math_asin(3.337315451928227e+307);
test_math_asin(true);
test_math_asin(8.927935842273138e+307);
test_math_asin(/yes.*day/);
test_math_asin("FEFJFBLQ");
test_math_asin(7.298208998306576e+307);
test_math_asin(/foo/g);
test_math_asin(Infinity);
test_math_asin("PLL2R3RRA");
test_math_asin(-885);
test_math_asin(-671);
test_math_asin(2.134693140915246e+307);
test_math_asin(-387);
test_math_asin("TK6TXV");
test_math_asin(-849);
test_math_asin("U8HKXBMGU");
test_math_asin(1.8041348154440296e+307);
test_math_asin("I1HQG");
test_math_asin(false);
test_math_asin(/(\w+)\s(\w+)/);
test_math_asin(undefined);
test_math_asin(-877);
test_math_asin("ZYZA6A");
test_math_asin(/yes[^]*day/);
test_math_asin(null);
test_math_asin(-939);
test_math_asin(-101);
test_math_asin("6ZEFD7");
test_math_asin(4.819554476203309e+307);
test_math_asin(/\r\n|\r|\n/);
test_math_asin("W9U");
test_math_asin(1.7164774047393967e+308);
test_math_asin(3.87652622205743e+307);
test_math_asin(-203);
test_math_asin(1.1726479630803263e+308);
test_math_asin("X8Y");
test_math_asin(-401);
test_math_asin(1.1852287424356614e+308);
test_math_asin(1.2485239853927492e+308);
test_math_asin(1.297377948509076e+308);
test_math_asin(-817);
test_math_asin("TD1");
test_math_asin(-221);
test_math_asin(3.5864336298447855e+307);
test_math_asin(1.2374611645584983e+308);
test_math_asin(NaN);
test_math_asin(-231);
test_math_asin(2.4051421051337395e+307);
test_math_asin(-993);
test_math_asin("PLE6T");
test_math_asin(7.31172075175748e+307);
test_math_asin(+0);
test_math_asin("RDI2IC");
test_math_asin(-279);
test_math_asin(5.481947803630215e+306);
test_math_asin(1.210305464158672e+308);
test_math_asin(4.201486901270151e+307);
test_math_asin(256);
test_math_asin(-451);
test_math_asin(1.4611076567546268e+308);
test_math_asin(-893);
test_math_asin(570);
test_math_asin(-303);
test_math_asin("8XXKMVX");
test_math_asin("EJ2SAP3");
test_math_asin(-313);
test_math_asin(7.603001341848176e+307);
test_math_asin(1.2952450328688325e+308);
test_math_asin("Z0ZNRFDF");
test_math_asin("RTVD");
test_math_asin(-79);
test_math_asin("U4DEG09");
test_math_asin(-379);
test_math_asin("FT4I9YQ6HY");
test_math_asin(1.0437507814865689e+308);
test_math_asin("12IEYW9ZXS");
test_math_asin(-355);
test_math_asin("3M1N0CFD80");
test_math_asin(1.5270486797800647e+306);
test_math_asin(-979);
test_math_asin(1.2581079741794603e+308);
test_math_asin("O7B31UX");
test_math_asin("5264AA353Z");
test_math_asin("XQGIT8");
test_math_asin("T0G294U");
test_math_asin(4.804009551368369e+307);
test_math_asin("UB3TCM1UJ3");
test_math_asin(6.477222571631894e+307);
test_math_asin("QOY");
test_math_asin(-769);
test_math_asin(1.053367939567306e+308);
test_math_asin(1.5762558629087927e+308);
test_math_asin(7.635914133084894e+307);
test_math_asin("G0994SW8BS");
test_math_asin(-289);
test_math_asin(-949);
test_math_asin(6.403579383697733e+307);
test_math_asin(4.2745092994822814e+307);
test_math_asin(-227);
test_math_asin("3OE");
test_math_asin(9.619780692210469e+307);
test_math_asin("016IRN");
test_math_asin(-507);
test_math_asin(-773);
test_math_asin(-617);
test_math_asin(-453);
test_math_asin("1MKTFDMF7O");
test_math_asin(2.6990667303294584e+307);
test_math_asin(272);
test_math_asin("1A7F8MU8Z");
test_math_asin(-977);
test_math_asin(-47);
test_math_asin(1.0598599178906719e+308);
test_math_asin("27XT");
test_math_asin("CSXO6Q");
test_math_asin("5YUY2SW");
test_math_asin(-13);
test_math_asin(-431);
test_math_asin("XI7");
test_math_asin(-761);
test_math_asin(6.542230343829068e+307);
test_math_asin(1.049076770426744e+308);
test_math_asin(-159);
test_math_asin(8.277806683462032e+307);
test_math_asin("YMJEHVD4");
test_math_asin(4.128748905632637e+307);
test_math_asin("8KM");
test_math_asin(-867);
test_math_asin(6.992902315352565e+307);
test_math_asin(1.0732029094389894e+308);
test_math_asin(-225);
test_math_asin(-397);
test_math_asin("5LDF4JEF7Z");
test_math_asin(-683);
test_math_asin(5.209315032740952e+307);
test_math_asin(1.1988125180266914e+308);
test_math_asin("T5HZPQS7");
test_math_asin("SRY83U");
test_math_asin(1.0243854629927282e+308);
test_math_asin("292");
test_math_asin("R161C4OBHU");
test_math_asin(1.0909473742753564e+308);
test_math_asin("ZYNTDYY0");
test_math_asin(1.2016079580686055e+308);
test_math_asin(-859);
test_math_asin(8.893361777784234e+307);
test_math_asin(-511);
test_math_asin("0Z7J");
test_math_asin(1.4486897795955272e+308);
test_math_asin(1.3234182568980726e+307);
test_math_asin(-595);
test_math_asin(6.732057680446172e+307);
test_math_asin(1.52326260250662e+308);
test_math_asin(4.216366427227718e+307);
test_math_asin(5.830179809978721e+307);
test_math_asin(4.892645229516906e+307);
test_math_asin(-175);
test_math_asin("1UR1P");
test_math_asin(3.2371492881767083e+307);
test_math_asin("IB2V7WLOKN");
test_math_asin("XVFOJLN");
test_math_asin(-565);
test_math_asin(-19);
test_math_asin("JDQV435");
test_math_asin(7.77038745747373e+307);
test_math_asin(1.264341734547573e+308);
test_math_asin("UF9TEYFCX1");
test_math_asin(1.47956007887258e+308);
test_math_asin(6.793170347944916e+307);
test_math_asin("9DVY9B");
test_math_asin(6.940908940293518e+307);
test_math_asin("I1JDIE");
test_math_asin("38Y4H06");
test_math_asin(-275);
test_math_asin("O2ED");
test_math_asin("CRE");
test_math_asin(9.658416721153146e+307);
test_math_asin(1.6218914306477789e+308);
test_math_asin(1.5317786412210717e+308);
test_math_asin("B0W2FVA4");
test_math_asin(1.7633560856827806e+308);
test_math_asin(1.320232860977084e+308);
test_math_asin("JPVR5S");
test_math_asin("SBUSQ");
test_math_asin(-811);
test_math_asin(-535);
test_math_asin(-851);
test_math_asin("EET");
test_math_asin("YIM2H");
test_math_asin("YMUBVCZ9A");
test_math_asin("GU32VUQHX");
test_math_asin(-829);
test_math_asin("5FDROU4N4");
test_math_asin(1.7611474694720537e+308);
test_math_asin("5LG");
test_math_asin(9.14975467212483e+307);
test_math_asin(9.859789950467584e+307);
test_math_asin(-489);
test_math_asin(1.7817304386203623e+308);
test_math_asin("TAZX07");
test_math_asin(1.36050705953366e+308);
test_math_asin(-389);
test_math_asin(4.607300979177409e+307);
test_math_asin("K7UYYI0O");
test_math_asin(-143);
test_math_asin("SXT0XUEKC");
test_math_asin("6MSOL");
test_math_asin("DB0SMC4");
test_math_asin(-407);
test_math_asin(-123);
test_math_asin(5.543654079332577e+307);
test_math_asin("CT8U4VE");
test_math_asin("2SDXJE1N");
test_math_asin("MIMP0K");
test_math_asin(1.190701075869811e+308);
test_math_asin(5.310470935790005e+307);
test_math_asin("YDW2");
test_math_asin(2.801404614638516e+307);
test_math_asin(5.138766667612159e+307);
test_math_asin("Z0R");
test_math_asin(-963);
test_math_asin(-513);
test_math_asin(-835);
test_math_asin(4.231940966740911e+306);
test_math_asin(1.1051471962284616e+308);
test_math_asin(8.381506791338752e+307);
test_math_asin("QRR6VCQAV");
test_math_asin(9.841049964267265e+307);
test_math_asin("X8B8U17T5I");
test_math_asin(4.785049799899291e+307);
test_math_asin(1.3840684459124371e+308);
test_math_asin("WYW76R5");
test_math_asin("DXSU73P");
test_math_asin(-357);
test_math_asin("V5FUSI");
test_math_asin(8.087745997542702e+307);
test_math_asin(2.9108038714603403e+307);
test_math_asin("VQ5PA3");
test_math_asin("PJRFX2TS");
test_math_asin("ZD3");
test_math_asin(-1);
test_math_asin(206);
test_math_asin("XSTX05N");
test_math_asin(3.8992239251007316e+307);
test_math_asin(3.85736589190087e+307);
test_math_asin(-49);
test_math_asin(8.959259831097176e+307);
test_math_asin(-723);
test_math_asin(3.239819859742614e+307);
test_math_asin(-935);
test_math_asin("9JJM");
test_math_asin("I6WV4");
test_math_asin(1.150479435807926e+307);
test_math_asin(3.245702012392789e+306);
test_math_asin(1.4217955480999026e+308);
test_math_asin(-563);
test_math_asin("FCC6B1X");
test_math_asin("37NGOGIE");
test_math_asin(-291);
test_math_asin(36);
test_math_asin("1PE8");
test_math_asin(1.2462140791223562e+308);
test_math_asin("0X1S");
test_math_asin("89RK6AB6");
test_math_asin(3.1753488050389655e+307);
test_math_asin("PZHY1NT");
test_math_asin(-687);
test_math_asin(-249);
test_math_asin("U8FB66L9");
test_math_asin("BTJH");
test_math_asin(-349);
test_math_asin(-803);
test_math_asin(-215);
test_math_asin(1.4969965359313223e+307);
test_math_asin("MIX");
test_math_asin(1.6949991944119692e+308);
test_math_asin(-945);
test_math_asin(9.05157622075805e+306);
test_math_asin(-481);
test_math_asin(7.040749476534739e+307);
test_math_asin(-841);
test_math_asin(6.788959151796053e+307);
test_math_asin(1.7222295840007092e+308);
test_math_asin(2.418196282243169e+307);
test_math_asin("V4DGDKOC");
test_math_asin(-825);
test_math_asin(-75);
test_math_asin(-155);
test_math_asin(1.5866611757149722e+308);
test_math_asin("G8V6O2105G");
test_math_asin(6.366054601749091e+307);
test_math_asin(-635);
test_math_asin("DX2WSBGPEW");
test_math_asin(-637);
test_math_asin(1.6078415928096105e+308);
test_math_asin("V8Q");
test_math_asin("S4LHZWA1U");
test_math_asin(6.610517132919531e+307);
test_math_asin(1.5401739541393757e+307);
test_math_asin("K3JTT");
test_math_asin(-653);
test_math_asin(6.315187254099707e+307);
test_math_asin("51PNTM");
test_math_asin("9NJ1YC");
test_math_asin("G52X7");
test_math_asin("992S98BID");
test_math_asin("EV7J9E19");
test_math_asin(5.860616113864985e+307);
test_math_asin("E07VB6VN");
test_math_asin(1.5595230868211527e+308);
test_math_asin("M1M80HFE8");
test_math_asin(1.00147931192165e+308);
test_math_asin(-721);
test_math_asin(1.6811214521674235e+308);
test_math_asin(6.971911104890264e+307);
test_math_asin(9.39919805759243e+307);
test_math_asin(486);
test_math_asin("9S04HRL40N");
test_math_asin(1.6327686737788761e+308);
test_math_asin("N2B72");
test_math_asin(-93);
test_math_asin("F5N0");
test_math_asin(-991);
test_math_asin(5.867538263512058e+307);
test_math_asin(-613);
test_math_asin("6AW3E");
test_math_asin("IFK");
test_math_asin(-125);
test_math_asin(-399);
test_math_asin(-353);
test_math_asin(-651);
test_math_asin(-311);
test_math_asin(-171);
test_math_asin(1.5017828179589839e+308);
test_math_asin("S6NME8FET");
test_math_asin("6PB59XR");
test_math_asin(-201);
test_math_asin("631QRMFUW0");
test_math_asin(2.4331414880148467e+307);
test_math_asin(-17);
test_math_asin("ENMZN0NXBN");
test_math_asin(1.0825371186884239e+308);
test_math_asin(1.4292151940581056e+308);
test_math_asin(1.5166191467235631e+308);
test_math_asin(-487);
test_math_asin(-335);
test_math_asin(1.4496405532515216e+308);
test_math_asin(-233);
test_math_asin(-727);
test_math_asin("T70FBMU6I");
test_math_asin(-137);
test_math_asin("FM0KMP4Z25");
test_math_asin(-415);
test_math_asin(1.0875176731044006e+308);
test_math_asin("8FOAQ");
test_math_asin(8.670984028909016e+307);
test_math_asin("15M");
test_math_asin(-591);
test_math_asin(1.6866235974723363e+308);
test_math_asin(1.1783064940962176e+308);
test_math_asin(-839);
test_math_asin("NFJURZ");
test_math_asin(-549);
test_math_asin("30A25G3");
test_math_asin("VZFPU");
test_math_asin(3.393161695717775e+306);
test_math_asin(5.909231267098235e+307);
test_math_asin(5.605920172867761e+307);
test_math_asin(1.1115145868544368e+308);
test_math_asin(9.25808557260879e+307);
test_math_asin(-833);
test_math_asin(5.161903487806901e+307);
test_math_asin("LC2L3");
test_math_asin("I33O213");
test_math_asin("JIBWTMK3UG");
test_math_asin("6NHZZL26T");
test_math_asin(4.2159821053604746e+306);
test_math_asin("G2UUP6AS8H");
test_math_asin("U9F4I3L8");
test_math_asin(1.3396985015047586e+308);
test_math_asin("9PPKHX");
test_math_asin(1.6919787733929332e+308);
test_math_asin("Q4OW");
test_math_asin("XYYOW4");
test_math_asin(1.2268545221873458e+308);
test_math_asin(1.3660538829243642e+308);
test_math_asin("TXOYIDCY");
test_math_asin("0R8E");
test_math_asin(3.631084668936964e+306);
test_math_asin(-679);
test_math_asin(-739);
test_math_asin(-895);
test_math_asin("8MVS79L2J");
test_math_asin("JBQGCW");
test_math_asin(-843);
test_math_asin(1.3149964295807217e+308);
test_math_asin(2.6746934733526237e+307);
test_math_asin(6.635203496400617e+307);
test_math_asin(2.2985316282225986e+306);
test_math_asin(6.476289372364543e+307);
test_math_asin("862");
test_math_asin("4VI963CHCG");
test_math_asin("XNO4TE56O5");
test_math_asin(-63);
test_math_asin(4.73955073394498e+307);
test_math_asin("UQFKFO4U");
test_math_asin("AY4NFPYP");
test_math_asin("CUK0U0TCD");
test_math_asin(-601);
test_math_asin("RH7Y4S1G");
test_math_asin(-411);
test_math_asin("3ORJYD");
test_math_asin(9.126930710387317e+306);
test_math_asin(-597);
test_math_asin("6BS1GTPPEW");
test_math_asin(-583);
test_math_asin("ZET1L25Q");
test_math_asin(-205);
test_math_asin("BTGID4LZ21");
test_math_asin(1.2510298578011207e+308);
test_math_asin(-267);
test_math_asin(1.3551295396886642e+308);
test_math_asin(3.4997031067234216e+307);
test_math_asin(-649);
test_math_asin(1.5500028450073025e+307);
test_math_asin("MYP8SMB3");
test_math_asin("DQZFGAW46");
test_math_asin(-703);
test_math_asin(-901);
test_math_asin(-857);
test_math_asin(-593);
test_math_asin("NB44BOGI");
test_math_asin(4.125346744738323e+307);
test_math_asin(1.8108139710512222e+307);
test_math_asin(1.9338495461850717e+307);
test_math_asin(1.4284923800724883e+308);
test_math_asin(1.0221675418026262e+308);
test_math_asin(1.5862216190398397e+308);
test_math_asin("UUBQS39T31");
test_math_asin(8.645725979861449e+307);
test_math_asin(1.7424947098637756e+308);
test_math_asin("XB1EOF");
test_math_asin(8.264294494782466e+306);
test_math_asin(1.2884276783841074e+308);
test_math_asin(-281);
test_math_asin(2.606646369456238e+307);
test_math_asin(-211);
test_math_asin("4RXJYVNG");
test_math_asin("OYKWSUO");
test_math_asin("ZDSKQ");
test_math_asin("DIQ87IFG");
test_math_asin(-823);
test_math_asin(1.2798411122036162e+308);
test_math_asin(-105);
test_math_asin("MW2GN6");
test_math_asin("WBM241");
test_math_asin("ANCYG4");
test_math_asin("TOMLVW");
test_math_asin("YYT5");
test_math_asin(-985);
test_math_asin("7GBKHBK");
test_math_asin(1.4993679725015492e+308);
test_math_asin(3.5300163197440503e+307);
test_math_asin(1.5892359271795079e+308);
test_math_asin(1.0421071929999604e+308);
test_math_asin(-129);
test_math_asin(-869);
test_math_asin(-265);
test_math_asin(1.577129058201813e+308);
test_math_asin("1ABY");
test_math_asin("MIEVFMXC9C");
test_math_asin(1.9906559048419115e+307);
test_math_asin("YSGUFLB");
test_math_asin("9M43U27G8");
test_math_asin("PXIZ");
test_math_asin("LV2G");
test_math_asin(7.508912208171608e+307);
test_math_asin(-475);
test_math_asin(5.818996755416978e+307);
test_math_asin(-861);
test_math_asin(1.1400869611999564e+308);
test_math_asin("WNY7M");
test_math_asin(1.288714876307042e+308);
test_math_asin(-151);
test_math_asin("95ZKU7O");
test_math_asin("KYH55U1N");
test_math_asin(1.7238748739577787e+308);
test_math_asin("X8D7");
test_math_asin(1.5577360977058015e+308);
test_math_asin(4.076558664905879e+307);
test_math_asin("AV20YDD");
test_math_asin(1.5261806994280328e+308);
test_math_asin("M5B50");
test_math_asin(4.9997779333789587e+306);
test_math_asin(1.106086901156297e+308);
test_math_asin(-449);
test_math_asin(6.271087171458618e+307);
test_math_asin(7.546045435022437e+307);
test_math_asin(1.7369012673654576e+308);
test_math_asin("7LT25");
test_math_asin(-813);
test_math_asin(5.345643336206094e+307);
test_math_asin("QWTVP19E");
test_math_asin("LN4V40LZBG");
test_math_asin(4.509939244441565e+307);
test_math_asin("V1ZQ0C9");
test_math_asin("QZYYW");
test_math_asin(-37);
test_math_asin(1.4063732561344645e+308);
test_math_asin(1.0388496417930487e+308);
test_math_asin(-707);
test_math_asin(1.1690633098446802e+308);
test_math_asin(-921);
test_math_asin("LAQ6");
test_math_asin(-871);
test_math_asin(-655);
test_math_asin(1.7220690026237308e+308);
test_math_asin("TPL3W1V");
test_math_asin("VK0U6");
test_math_asin(-343);
test_math_asin(2.290206684105951e+307);
test_math_asin("8UVI5FJZ");
test_math_asin("7XLJAWS");
test_math_asin(2.8368549202126794e+307);
test_math_asin(-999);
test_math_asin("FRBEKWD");
test_math_asin(-961);
test_math_asin(-781);
test_math_asin(1.0215243451268504e+306);
test_math_asin(-111);
test_math_asin(-25);
test_math_asin("H13U");
test_math_asin("7SVKNY");
test_math_asin(-521);
test_math_asin(-245);
test_math_asin(1.3509282736026349e+308);
test_math_asin(1.6898122044256616e+308);
test_math_asin("L8BCN3OO4");
test_math_asin("HJNC1BD");
test_math_asin("92W9");
test_math_asin(2.4229696505636574e+307);
test_math_asin(-447);
test_math_asin("G6WLPQ02U3");
test_math_asin("KMRF9");
test_math_asin("QHCVKF4");
test_math_asin("TSPDEUT");
test_math_asin("SFAJ6R");
test_math_asin(-505);
test_math_asin("HRA86T96D");
test_math_asin(-483);
test_math_asin("N80S5UUZ");
test_math_asin("9EN0J");
test_math_asin(-371);
test_math_asin(1.6306662503053915e+308);
test_math_asin("1IRPJEAXRG");
test_math_asin(-321);
test_math_asin(-107);
test_math_asin("POYHZ1YUFR");
test_math_asin(-887);
test_math_asin("43WIS5PZ");
test_math_asin(6.046966424910406e+307);
test_math_asin(1.191624376225211e+308);
test_math_asin("CAJEWGEC");
test_math_asin(-729);
test_math_asin("RHZBHUTFB");
test_math_asin(1.7796480047745979e+308);
test_math_asin("TVT");
test_math_asin(1.4171726602811568e+308);
test_math_asin("2UC8");
test_math_asin(2.5791476323427204e+307);
test_math_asin("IK48K3L");
test_math_asin(-701);
test_math_asin(1.4461285520960937e+308);
test_math_asin(1.6501904505702688e+307);
test_math_asin("XON6HM9");
test_math_asin(-69);
test_math_asin("R89LTLS3W");
test_math_asin(-621);
test_math_asin("WOQ1IIVE");
test_math_asin(-749);
test_math_asin(9.349942450853231e+307);
test_math_asin(3.896188897070922e+306);
test_math_asin(4.367701932833124e+307);
test_math_asin("ED4BG0");
test_math_asin("GDYOK");
test_math_asin(6.825000883032756e+307);
test_math_asin(1.5806885630783685e+308);
test_math_asin(8.264846109870362e+307);
test_math_asin(4.869916582514673e+307);
test_math_asin(-165);
test_math_asin(-199);
test_math_asin("TUU7MXKLOM");
test_math_asin("YJK23H");
test_math_asin(3.219043894175557e+307);
test_math_asin(1.2046824204448853e+308);
test_math_asin("AAG83SXFJ7");
test_math_asin("2OUVW3");
test_math_asin(-223);
test_math_asin(1.5952284386476477e+308);
test_math_asin("NGU");
test_math_asin(7.081920504485033e+307);
test_math_asin("NGW");
test_math_asin(-383);
test_math_asin(-943);
test_math_asin(1.527176306024797e+308);
test_math_asin(8.20015559460502e+307);
test_math_asin(7.624122809892265e+307);
test_math_asin(-551);
test_math_asin(-181);
test_math_asin("NH88MKTIG1");
test_math_asin("7LKZDF");
test_math_asin("ANJ9LKYCZX");
test_math_asin("YWUSNLZMP9");
test_math_asin(-33);
test_math_asin(1.186762934547688e+308);
test_math_asin(-779);
test_math_asin(8.277134029153454e+307);
test_math_asin(3.2641636168140597e+307);
test_math_asin(-509);
test_math_asin(1.5276001109052623e+308);
test_math_asin(2.351280533739825e+307);
test_math_asin("PSK827H");
test_math_asin(1.4932188485955474e+308);
test_math_asin(-547);
test_math_asin("RB9FG32");
test_math_asin(-645);
test_math_asin("Z6LXTG");
test_math_asin("HCV6WZ");
test_math_asin(5.306965409809755e+307);
test_math_asin("71NWZ");
test_math_asin(-403);
test_math_asin("YQ6");
test_math_asin("OOMJ88IW");
test_math_asin(1.0228115927974816e+308);
test_math_asin(2.5158979360135914e+307);
test_math_asin("M7SAJ3PLL7");
test_math_asin("GPI354Q0SM");
test_math_asin(1.1581725900033388e+308);
test_math_asin(5.786043784541509e+307);
test_math_asin(1.5673411689599486e+308);
test_math_asin("0N1");
test_math_asin(4.662970249909443e+306);
test_math_asin("JJHIJ");
test_math_asin("DQBITWCPI");
test_math_asin("XEZ2VL");
test_math_asin(7.113289700238043e+305);
test_math_asin("4904A");
test_math_asin("I4XXLIBP");
test_math_asin(1.3866620405558129e+308);
test_math_asin(1.1887403900239012e+308);
test_math_asin(1.7665225416786625e+308);
test_math_asin("3EAR");
test_math_asin("YYQTXLV");
test_math_asin("IEC6");
test_math_asin("FJD5E");
test_math_asin(1.3859368902370962e+308);
test_math_asin(-553);
test_math_asin(9.75026367768816e+307);
test_math_asin(2.8346528764269047e+307);
test_math_asin(6.646683849642551e+306);
test_math_asin(1.4230176849252533e+308);
test_math_asin("TN7QRQHTLS");
test_math_asin(-393);
test_math_asin(-287);
test_math_asin("TXPGCTG");
test_math_asin(1.297495923820481e+308);
test_math_asin("NHBM5N3");
test_math_asin("14J7");
test_math_asin(1.4667657016188166e+308);
test_math_asin(1.3684147160282334e+308);
test_math_asin(5.904270289678945e+307);
test_math_asin(7.074205729630105e+307);
test_math_asin(-89);
test_math_asin(1.1885958604288964e+308);
test_math_asin(4.2729836664220717e+307);
test_math_asin(-369);
test_math_asin("EKAD0AUX");
test_math_asin("IAXP7ZYT");
test_math_asin(1.1427369864519183e+308);
test_math_asin("L1U2XG58");
test_math_asin(1.3893173016793573e+308);
test_math_asin(1.522806861346816e+308);
test_math_asin("L4D9IJ");
test_math_asin(1.6454399779008609e+308);
test_math_asin(1.2616648109284484e+308);
test_math_asin(-325);
test_math_asin("POCQZ");
test_math_asin(1.743654640423323e+308);
test_math_asin("HZZE0UOZLS");
test_math_asin(-657);
test_math_asin(4.566511580687479e+307);
test_math_asin("Z8FL");
test_math_asin(-875);
test_math_asin("V2H5U");
test_math_asin("7B57PPM3D");
test_math_asin("40T");
test_math_asin("H7I");
test_math_asin(1.5018344637236412e+308);
test_math_asin(-743);
test_math_asin("KVXSTG15UQ");
test_math_asin(1.4635341355094615e+308);
test_math_asin(-903);
test_math_asin(-455);
test_math_asin(1.4299040599866825e+308);
test_math_asin("YH6FU16");
test_math_asin("XXV7C");
test_math_asin("QJ4BX");
test_math_asin("W1EANO454");
test_math_asin(1.5111519448633706e+308);
test_math_asin(3.9773987116045394e+307);
test_math_asin(-677);
test_math_asin("47270SC7");
test_math_asin(100);
test_math_asin(4.870426756062841e+307);
test_math_asin("YIIVV");
test_math_asin(8.467114418605743e+307);
test_math_asin(6.984524591113704e+307);
test_math_asin(-493);
test_math_asin(-767);
test_math_asin(-465);
test_math_asin("DVMZBS");
test_math_asin(-787);
test_math_asin(-437);
test_math_asin(8.423583602653519e+307);
test_math_asin(-585);
test_math_asin(-805);
test_math_asin("0FCF");
test_math_asin("4X9Q81ZVUX");
test_math_asin("069BGMI72");
test_math_asin(-27);
test_math_asin(1.2072082970230453e+308);
test_math_asin("JZS0");
test_math_asin(4.618802223468193e+307);
test_math_asin(-799);
test_math_asin(1.1777721686130603e+308);
test_math_asin(1.5979605666149745e+308);
test_math_asin("7MSMOI89P");
test_math_asin(6.35320283554323e+307);
test_math_asin("ZD237");
test_math_asin(-899);
test_math_asin("QIEQDNWAYA");
test_math_asin(340);
test_math_asin("BWIV");
test_math_asin(1.4586730780738223e+308);
test_math_asin("6UL");
test_math_asin(-209);
test_math_asin("JZLM271Z6");
test_math_asin("D37UXBQ");
test_math_asin(1.1455490911106854e+308);
test_math_asin(-525);
test_math_asin(3.777634410706118e+307);
test_math_asin("HXWZ3FLW54");
test_math_asin(4.501269394596926e+307);
test_math_asin("QK9D");
test_math_asin(-911);
test_math_asin("739FRS6N1E");
test_math_asin("GZY6D");
test_math_asin(-647);
test_math_asin(1.7236877499941636e+308);
test_math_asin("COMS98");
test_math_asin("GHVZNAB22");
test_math_asin(9.2293167913819e+307);
test_math_asin("VTOOO");
test_math_asin(1.6489065001002786e+308);
test_math_asin(1.7886221965131582e+308);
test_math_asin("IH6");
test_math_asin(1.5173938397145585e+308);
test_math_asin(-731);
test_math_asin(-377);
test_math_asin("UJI77Z2SY");
test_math_asin(1.2080524179159471e+308);
test_math_asin(1.579346006456217e+308);
test_math_asin(-733);
test_math_asin(1.4748416765813128e+308);
test_math_asin("5WN");
test_math_asin("ONJ");
test_math_asin(3.2003316894989057e+307);
test_math_asin(-589);
test_math_asin(5.806892841264638e+307);
test_math_asin("LRD0Y0");
test_math_asin("AEEY9");
test_math_asin("1Q063DF");
test_math_asin("9B37GW");
test_math_asin("9U5O8O9");
test_math_asin("DDMARQMQP");
test_math_asin("GRGSJL67");
test_math_asin(-719);
test_math_asin(1.7062019036587117e+307);
test_math_asin("YKAMO");
test_math_asin(7.750921014265515e+307);
test_math_asin("A3KVBW");
test_math_asin(-119);
test_math_asin(1.442693763147935e+308);
test_math_asin("GD5");
test_math_asin(1.2881561690582746e+308);
test_math_asin("JQTSX8");
test_math_asin(-95);
test_math_asin("YP9YS8V");
test_math_asin(8.256885425171418e+307);
test_math_asin("WJ6NT");
test_math_asin(-375);
test_math_asin(-433);
test_math_asin(1.5881885001618347e+308);
test_math_asin(1.0948318399904756e+308);
test_math_asin(1.2916582285893116e+308);
test_math_asin(2.34686644931069e+307);
test_math_asin("TPA2S");
test_math_asin(8.225400825138978e+306);
test_math_asin(1.5962179650922065e+308);
test_math_asin("PCO8K");
test_math_asin("9SWUBHL8Q");
test_math_asin(-41);
test_math_asin(-959);
test_math_asin("O8U8");
test_math_asin("HLI");
test_math_asin("N4140YVB");
test_math_asin("CJM");
test_math_asin(-183);
test_math_asin(-463);
test_math_asin("GRVX");
test_math_asin(3.56136776834615e+306);
test_math_asin(1.6707426721672888e+308);
test_math_asin(2.4631083008763446e+307);
test_math_asin(1.6552186237907812e+308);
test_math_asin(1.4743798528388688e+308);
test_math_asin("G8B0KAC3");
test_math_asin(1.2318607552329019e+308);
test_math_asin("YLID5ALRB");
test_math_asin(-797);
test_math_asin(1.7163655836163049e+308);
test_math_asin(2.3032436260725005e+307);
test_math_asin("WJR");
test_math_asin("RBD");
test_math_asin(6.28267622499031e+307);
test_math_asin("5IWLBZXFI7");
test_math_asin(1.5872912696622621e+308);
test_math_asin(-603);
test_math_asin(4.621021280704367e+307);
test_math_asin("Z8ISYG4H");
test_math_asin("4EGG");
test_math_asin(1.4827779975186618e+308);
test_math_asin("Z4YMK1RHU");
test_math_asin(8.195355991799682e+307);
test_math_asin("TMQHK");
test_math_asin(1.6025425788654408e+308);
test_math_asin(1.1351653177082927e+308);
test_math_asin(3.3606912293494546e+307);
test_math_asin(3.0727736525752296e+307);
test_math_asin(-529);
test_math_asin("CALYRM");
test_math_asin("F2YJFTE3F");
test_math_asin(-193);
test_math_asin(7.038006421539424e+307);
test_math_asin(5.20276863864598e+307);
test_math_asin(-207);
test_math_asin(-771);
test_math_asin(-127);
test_math_asin(6.650778673566397e+307);
test_math_asin("6TIRJONLF");
test_math_asin(1.499239903377571e+308);
test_math_asin(9.090415189273695e+306);
test_math_asin("Q5YF");
test_math_asin(-457);
test_math_asin("12PWP7V0");
test_math_asin(-997);
test_math_asin("HKZN62Q");
test_math_asin("TY2YZ");
test_math_asin(1.0713535849898945e+308);
test_math_asin(2.5053820724346425e+307);
test_math_asin(8.130905125205071e+307);
test_math_asin(4.263158576953181e+307);
test_math_asin(-673);
test_math_asin("DRGTOJ6EPB");
test_math_asin("1Q945");
test_math_asin(3.232185908771164e+307);
test_math_asin(-523);
test_math_asin("1DIOLBZBY");
test_math_asin("UNV");
test_math_asin("T8PCU3A1");
test_math_asin("YD3");
test_math_asin("25WOE4QHF9");
test_math_asin(8.035016358045456e+307);
test_math_asin(-239);
test_math_asin(1.6550954759371224e+308);
test_math_asin(2.520115478479853e+307);
test_math_asin(1.5951169885679084e+308);
test_math_asin(-161);
test_math_asin(-865);
test_math_asin("0LF9MAA");
test_math_asin(-459);
test_math_asin(-819);
test_math_asin(8.613305533324131e+307);
test_math_asin("E2ERIKJ0");
test_math_asin(-629);
test_math_asin(3.913292037478587e+307);
test_math_asin(1.5647350546995978e+308);
test_math_asin("E5TEZMIPY1");
test_math_asin("TKXG95K34");
test_math_asin(1.117232761126723e+308);
test_math_asin(7.440821192254508e+307);
test_math_asin("YXJ");
test_math_asin(2.3482161594985987e+307);
test_math_asin("HJCDB6QY3A");
test_math_asin("B2JP");
test_math_asin(5.244256046481178e+307);
test_math_asin("PYUBOK06");
test_math_asin(1.2593324842970723e+308);
test_math_asin(5.472903328965891e+307);
test_math_asin("2RYWG");
test_math_asin(-639);
test_math_asin(-855);
test_math_asin("FK3OVK");
test_math_asin(6.470214612474805e+307);
test_math_asin("CRPOYZ");
test_math_asin(1.4460555174731782e+308);
test_math_asin(8.692783494244088e+307);
test_math_asin("GZZW6C3Y");
test_math_asin("QZGMLDZKSU");
test_math_asin("DIR");
test_math_asin("IAO");
test_math_asin(2.0513664422673797e+307);
test_math_asin(426);
test_math_asin("FJ7GXPRV");
test_math_asin("5H3K8DQY");
test_math_asin(1.3757122484441015e+307);
test_math_asin("UKNR");
test_math_asin(1.6260311086380338e+308);
test_math_asin("65JGI1JR");
test_math_asin(8.507251785564556e+307);
test_math_asin(9.937424223010118e+307);
test_math_asin(3.730906602895233e+307);
test_math_asin(8.168495285400674e+307);
test_math_asin(2.0138894895330177e+307);
test_math_asin(7.597619816042542e+307);
test_math_asin("S3C7PPP");
test_math_asin("7P21WYWDK9");
test_math_asin(-305);
test_math_asin("YKY1N8HEY");
test_math_asin(1.2667718721023902e+307);
test_math_asin(4.596702863924861e+307);
test_math_asin(4.801803684978083e+307);
test_math_asin("TIFN");
test_math_asin("PECA");
test_math_asin(1.4574843490491313e+308);
test_math_asin(1.6360164948694015e+308);
test_math_asin(1.7343210912996874e+308);
test_math_asin(6.502374525595693e+307);
test_math_asin(-149);
test_math_asin(5.183995467124167e+307);
test_math_asin(-85);
test_math_asin(-611);
test_math_asin(8.052983670618792e+307);
test_math_asin(1.3784035496693227e+308);
test_math_asin("FXSUDU");
test_math_asin(-491);
test_math_asin(1.381277555520161e+308);
test_math_asin("BV0");
test_math_asin("UI69G");
test_math_asin(4.6835741005504e+307);
test_math_asin(7.108757328673242e+307);
test_math_asin(3.2187401140950623e+307);
test_math_asin(3.581792346252392e+307);
test_math_asin(8.465397591244187e+307);
test_math_asin("QHGY67U1");
test_math_asin(-163);
test_math_asin("TYBL1VPH");
test_math_asin(-61);
test_math_asin("GVRCAPNRVY");
test_math_asin("QEHA");
test_math_asin(-641);
test_math_asin(5.212538900650873e+307);
test_math_asin(4.594972620080922e+307);
test_math_asin(4.699415237216623e+307);
test_math_asin(-333);
test_math_asin("GZUB");
test_math_asin("VIMO");
test_math_asin(-879);
test_math_asin("6831FJ4");
test_math_asin(2.3893079092471256e+306);
test_math_asin(3.039925062345528e+307);
test_math_asin("XIWH0I");
test_math_asin(-251);
test_math_asin(9.83229754569983e+307);
test_math_asin(-409);
test_math_asin("GX6I2AYMVJ");
test_math_asin(7.748109861251876e+307);
test_math_asin("UMWP");
test_math_asin(1.0455615471716538e+308);
test_math_asin("H3RC");
test_math_asin("T0WSND");
test_math_asin(1.6130157585785256e+308);
test_math_asin(1.243159655297652e+308);
