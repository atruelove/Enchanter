/*
* This file is automatically generated by Swami
*
* 2019-08-07 16:49:05.614050
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
function test_math_tanh(x){
	if (Object.is( x,NaN )){
		var output = Math.tanh(x);
		new TestCase("math_tanh", "math_tanh", NaN, output);
		test();
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.tanh(x);
		new TestCase("math_tanh", "math_tanh", + 0, output);
		test();
		return;
		}
	if (( x === - 0 )){
		var output = Math.tanh(x);
		new TestCase("math_tanh", "math_tanh", - 0, output);
		test();
		return;
		}
	if (( x === + Infinity )){
		var output = Math.tanh(x);
		new TestCase("math_tanh", "math_tanh", + 1, output);
		test();
		return;
		}
	if (( x === - Infinity )){
		var output = Math.tanh(x);
		new TestCase("math_tanh", "math_tanh", - 1, output);
		test();
		return;
		}
}



/*TESTS GENERATED AUTOMATICALLY*/
test_math_tanh("NWEWRON");
test_math_tanh(5.252703576701879e+307);
test_math_tanh(-893);
test_math_tanh(6.996900114286111e+307);
test_math_tanh("R32LGFOH0T");
test_math_tanh(1.5253047323549597e+308);
test_math_tanh(1.301172289768725e+308);
test_math_tanh("CIE11");
test_math_tanh(1.5241981696798116e+308);
test_math_tanh(-0);
test_math_tanh(-9);
test_math_tanh("ALF8Z868");
test_math_tanh("CQ0HNEYQ2");
test_math_tanh(-393);
test_math_tanh(6.307824080301724e+307);
test_math_tanh(424);
test_math_tanh("40HGGC1L");
test_math_tanh(NaN);
test_math_tanh("0X8AQ");
test_math_tanh(/foo/g);
test_math_tanh(false);
test_math_tanh(/yes.*day/);
test_math_tanh(5.166255912971249e+307);
test_math_tanh(+0);
test_math_tanh(Infinity);
test_math_tanh(undefined);
test_math_tanh(-675);
test_math_tanh(-867);
test_math_tanh(5.977699156093795e+307);
test_math_tanh(1.5335012268025216e+308);
test_math_tanh(8.072176136509929e+307);
test_math_tanh(true);
test_math_tanh(-305);
test_math_tanh("FNA1");
test_math_tanh(/yes[^]*day/);
test_math_tanh("KS5Q97YS");
test_math_tanh(1.6791922518548047e+308);
test_math_tanh(1.4732393745465457e+308);
test_math_tanh(null);
test_math_tanh(-889);
test_math_tanh(/ab+c/);
test_math_tanh(8.710343026496338e+306);
test_math_tanh("BA2");
test_math_tanh("Y3ADD0");
test_math_tanh(3.037878555081742e+307);
test_math_tanh(-391);
test_math_tanh(1.05479364311669e+308);
test_math_tanh(-913);
test_math_tanh(-297);
test_math_tanh(1.6386648682340072e+308);
test_math_tanh("GZ8IET2");
test_math_tanh(/\r\n|\r|\n/);
test_math_tanh("9A5JOOG5O");
test_math_tanh(8.95017813496871e+307);
test_math_tanh("9H38");
test_math_tanh(-225);
test_math_tanh(2.786786608139796e+307);
test_math_tanh("2HQ");
test_math_tanh(1.428157817977522e+308);
test_math_tanh("TZE");
test_math_tanh("A030VDU0");
test_math_tanh(-31);
test_math_tanh(/[^.]+/);
test_math_tanh(6.074986159097638e+307);
test_math_tanh(-505);
test_math_tanh(-509);
test_math_tanh("7AEB");
test_math_tanh(/[\u0400-\u04FF]+/g);
test_math_tanh(1.5822749944799599e+308);
test_math_tanh(1.3907674408769516e+308);
test_math_tanh(-609);
test_math_tanh(/(\w+)\s(\w+)/);
test_math_tanh("1QV6FYM");
test_math_tanh(8.512541151192211e+307);
test_math_tanh("5H67IQYUO5");
test_math_tanh(-33);
test_math_tanh("BSK4");
test_math_tanh(1.1074121568245294e+308);
test_math_tanh(-217);
test_math_tanh("CUW7RKCL");
test_math_tanh(-877);
test_math_tanh(-181);
test_math_tanh(5.756145682279725e+307);
test_math_tanh(-379);
test_math_tanh("OKG");
test_math_tanh(1.6598236941745724e+308);
test_math_tanh(-691);
test_math_tanh(1.578960268202986e+308);
test_math_tanh("8TVIDP");
test_math_tanh(1.4978476843705301e+308);
test_math_tanh("QM6HSI81E");
test_math_tanh(8.594036965466856e+307);
test_math_tanh("5I7X6RS");
test_math_tanh("F8D4V");
test_math_tanh(1.411326711439984e+308);
test_math_tanh(-629);
test_math_tanh(-591);
test_math_tanh("4ELNBAR2");
test_math_tanh(1.619987058765445e+308);
test_math_tanh(6.407913405418963e+307);
test_math_tanh(-209);
test_math_tanh(-649);
test_math_tanh(6.609882608692256e+307);
test_math_tanh("6372OK0VJS");
test_math_tanh(1.0948807645501532e+308);
test_math_tanh("XW8DRJ5");
test_math_tanh("B5X");
test_math_tanh(-745);
test_math_tanh("7SJV");
test_math_tanh("LJGX5I");
test_math_tanh(-631);
test_math_tanh(1.575851830765139e+308);
test_math_tanh(-65);
test_math_tanh(-137);
test_math_tanh(-597);
test_math_tanh(1.6463864635720365e+308);
test_math_tanh(8.351552360524315e+307);
test_math_tanh(1.4911733787917349e+308);
test_math_tanh(-29);
test_math_tanh(1.147497334699846e+308);
test_math_tanh(1.7953396211942715e+308);
test_math_tanh("19GONY5MF");
test_math_tanh("Q8LLM10");
test_math_tanh(1.2782739444083039e+308);
test_math_tanh(-581);
test_math_tanh("QWIYZJH5");
test_math_tanh(1.0375457368243959e+308);
test_math_tanh(-109);
test_math_tanh(-775);
test_math_tanh(5.767561780056445e+307);
test_math_tanh(-495);
test_math_tanh(2.2759493114727436e+306);
test_math_tanh("2W6Z4O");
test_math_tanh(5.4105078592200166e+306);
test_math_tanh(-415);
test_math_tanh(-763);
test_math_tanh(1.159295875447928e+308);
test_math_tanh(-719);
test_math_tanh(-959);
test_math_tanh(2.778954402610663e+307);
test_math_tanh(-821);
test_math_tanh(1.7647523461202535e+307);
test_math_tanh("3745UO");
test_math_tanh(-443);
test_math_tanh(7.116741266745331e+307);
test_math_tanh("0HQMI3HMF");
test_math_tanh("D31L1S");
test_math_tanh(4.4619356167092085e+307);
test_math_tanh(-983);
test_math_tanh("99VMIQ7I5J");
test_math_tanh("ODHKWSDGA");
test_math_tanh(5.33415145565622e+307);
test_math_tanh(1.3183654778051601e+308);
test_math_tanh("OWD2");
test_math_tanh(-811);
test_math_tanh(-197);
test_math_tanh("Q08A87A");
test_math_tanh("YYCRJF");
test_math_tanh("Y4VBUOVPUX");
test_math_tanh(9.298167148880527e+307);
test_math_tanh("V74QBBSJNH");
test_math_tanh("FD83");
test_math_tanh(896);
test_math_tanh(1.5699087790296385e+307);
test_math_tanh("N1H");
test_math_tanh(1.3451017946472628e+308);
test_math_tanh(-587);
test_math_tanh("DSTPTK");
test_math_tanh("S465MQX4FQ");
test_math_tanh(-639);
test_math_tanh("BKS6YBX3O");
test_math_tanh(1.1962863949325016e+308);
test_math_tanh(1.5840856630273806e+308);
test_math_tanh(-499);
test_math_tanh(-265);
test_math_tanh("C5WBHVCFGD");
test_math_tanh(5.107965159877769e+306);
test_math_tanh(-463);
test_math_tanh("SGJDMW");
test_math_tanh(1.1403532946679573e+308);
test_math_tanh(15);
test_math_tanh("WXPQNAM8Q");
test_math_tanh(6.190415088580854e+307);
test_math_tanh(1.1160409190889632e+308);
test_math_tanh(-39);
test_math_tanh(-541);
test_math_tanh(-799);
test_math_tanh("SECMYCTKY");
test_math_tanh("8UP8DF");
test_math_tanh(2.954884135641785e+307);
test_math_tanh(-207);
test_math_tanh(9.151387685485607e+306);
test_math_tanh("N2LG06ED8");
test_math_tanh("39P");
test_math_tanh(3.3910026564862307e+307);
test_math_tanh(-261);
test_math_tanh("9JZASD");
test_math_tanh(-875);
test_math_tanh(6.400295669340233e+307);
test_math_tanh("LRYYQ");
test_math_tanh("HQKJU2G");
test_math_tanh("WVGEO");
test_math_tanh("FSLIZFY");
test_math_tanh("B5XJ");
test_math_tanh(1.2655572790092657e+308);
test_math_tanh(-529);
test_math_tanh(2.13386680954353e+307);
test_math_tanh("CJYJIHO8D");
test_math_tanh("4PNHJ31P");
test_math_tanh(-281);
test_math_tanh(7.294752051142178e+307);
test_math_tanh("3HWXV8O");
test_math_tanh(-143);
test_math_tanh(-477);
test_math_tanh("2G04");
test_math_tanh("XO2YB9");
test_math_tanh("XTL");
test_math_tanh(1.4662353375532508e+308);
test_math_tanh("R6637R0");
test_math_tanh(-879);
test_math_tanh("IXL78DU");
test_math_tanh(-269);
test_math_tanh("2TQCTVCV");
test_math_tanh(6.526582549715917e+307);
test_math_tanh(-201);
test_math_tanh("GY7QC5");
test_math_tanh(1.3528562646023656e+308);
test_math_tanh(-985);
test_math_tanh("RMUU3IEET");
test_math_tanh(-93);
test_math_tanh("IT94P");
test_math_tanh(-567);
test_math_tanh(-169);
test_math_tanh("1P9I");
test_math_tanh(-15);
test_math_tanh(-279);
test_math_tanh(-657);
test_math_tanh("11QZS4");
test_math_tanh(8.850869130002127e+307);
test_math_tanh(-895);
test_math_tanh(7.076856863372079e+307);
test_math_tanh("KGSCO");
test_math_tanh(-883);
test_math_tanh(1.4457398877170481e+308);
test_math_tanh(-167);
test_math_tanh(2.857056169365779e+307);
test_math_tanh("BNECYTBVH");
test_math_tanh(-425);
test_math_tanh("FOC96ON1");
test_math_tanh("KMCS47");
test_math_tanh("TDTOJ6MIP");
test_math_tanh(9.214274672632348e+307);
test_math_tanh("K073E7QUG3");
test_math_tanh(1.2907032154536694e+308);
test_math_tanh("ACJ2W");
test_math_tanh(1.018670805229301e+308);
test_math_tanh("CCLRC");
test_math_tanh(7.743181114317123e+307);
test_math_tanh("LBS0W2EL");
test_math_tanh("B7T33");
test_math_tanh("J6HKN");
test_math_tanh(-523);
test_math_tanh("Z5TI8");
test_math_tanh(5.683715577385991e+307);
test_math_tanh(-855);
test_math_tanh(-483);
test_math_tanh("ZE2XA9ZQZ");
test_math_tanh("53MO");
test_math_tanh("QYNR");
test_math_tanh(-367);
test_math_tanh(1.035986322503534e+308);
test_math_tanh(-999);
test_math_tanh(-491);
test_math_tanh(1.785099011036167e+308);
test_math_tanh("132I");
test_math_tanh("4B5QAC");
test_math_tanh(-51);
test_math_tanh(-553);
test_math_tanh(1.0454152860959037e+308);
test_math_tanh("9A4C");
test_math_tanh("YZ52Z");
test_math_tanh(7.977508061055606e+307);
test_math_tanh(4.913157786901854e+307);
test_math_tanh(1.0849657473483252e+308);
test_math_tanh(1.701295357389303e+308);
test_math_tanh(-917);
test_math_tanh("1NNUA38RD8");
test_math_tanh(-351);
test_math_tanh(-789);
test_math_tanh(9.335011536541744e+307);
test_math_tanh(9.386874194440478e+307);
test_math_tanh("84X87OQCM7");
test_math_tanh("IZYS");
test_math_tanh("H96ED7EK");
test_math_tanh("FGA1P");
test_math_tanh(-671);
test_math_tanh("YQH4R");
test_math_tanh(7.437668444808795e+307);
test_math_tanh(-709);
test_math_tanh(1.2090242909673312e+308);
test_math_tanh(1.2735508781030865e+308);
test_math_tanh(2.7357160458630992e+306);
test_math_tanh(-723);
test_math_tanh(-699);
test_math_tanh(-233);
test_math_tanh(1.1793275142382957e+307);
test_math_tanh(1.3071768755005943e+308);
test_math_tanh("L513");
test_math_tanh(-267);
test_math_tanh(-525);
test_math_tanh("E0DJ7J");
test_math_tanh(1.0533216104667616e+308);
test_math_tanh(3.494863045754316e+307);
test_math_tanh("RB2");
test_math_tanh(1.6182954827681763e+308);
test_math_tanh(5.977841088097489e+306);
test_math_tanh(-851);
test_math_tanh("36UL");
test_math_tanh(7.264927625478763e+307);
test_math_tanh("PGOGA72CB");
test_math_tanh(1.271718845671758e+308);
test_math_tanh(-67);
test_math_tanh("Z3U");
test_math_tanh("9H2COFAQB");
test_math_tanh(5.603059144249571e+307);
test_math_tanh(8.699256154873668e+307);
test_math_tanh(-785);
test_math_tanh(1.3405009626924305e+308);
test_math_tanh("27RO");
test_math_tanh(5.336628439174748e+307);
test_math_tanh("98M2QXJ1U4");
test_math_tanh(1.4949307834798665e+308);
test_math_tanh(1.1834525300578763e+308);
test_math_tanh(5.738142536430619e+307);
test_math_tanh("KCB37M");
test_math_tanh(-465);
test_math_tanh(1.1426834829671292e+308);
test_math_tanh("YR6V");
test_math_tanh(1.4071460880529556e+308);
test_math_tanh(-211);
test_math_tanh(-617);
test_math_tanh("M66B2Q76V");
test_math_tanh(4.984275715793443e+307);
test_math_tanh(-941);
test_math_tanh(-967);
test_math_tanh(-17);
test_math_tanh(1.0508145836828481e+308);
test_math_tanh(-5);
test_math_tanh("WE3R");
test_math_tanh("MSYZE7EB");
test_math_tanh("O7Q326OMA");
test_math_tanh(1.189760123563945e+308);
test_math_tanh(-737);
test_math_tanh("UFCEIS38FO");
test_math_tanh("UUKLNTYD8N");
test_math_tanh("4VKV");
test_math_tanh("Q7GEG");
test_math_tanh("IO7A8");
test_math_tanh(8.000023489507678e+307);
test_math_tanh(-383);
test_math_tanh("NQH");
test_math_tanh(-793);
test_math_tanh(4.450687749560114e+307);
test_math_tanh("VBGK");
test_math_tanh(8.464633583239493e+307);
test_math_tanh(-511);
test_math_tanh(-819);
test_math_tanh(1.6318280178476974e+308);
test_math_tanh("28WN7");
test_math_tanh(2.161250969193847e+307);
test_math_tanh(8.5831982363956e+307);
test_math_tanh(-797);
test_math_tanh("MF1");
test_math_tanh(8.610337143270947e+306);
test_math_tanh("JG9H3");
test_math_tanh(1.1913168375676732e+307);
test_math_tanh(7.19450770029449e+307);
test_math_tanh("14I5MN71");
test_math_tanh("RAWR");
test_math_tanh(9.849345490387943e+307);
test_math_tanh(8.029145898751627e+307);
test_math_tanh(-441);
test_math_tanh("W7NSQW51X");
test_math_tanh(5.4238395065256154e+306);
test_math_tanh(1.0427117282401911e+308);
test_math_tanh("VXMJ3XRP");
test_math_tanh("VDZ");
test_math_tanh("GZ3GRJYSHM");
test_math_tanh(-927);
test_math_tanh(1.1555977733862206e+308);
test_math_tanh(-401);
test_math_tanh(3.1778711858668723e+307);
test_math_tanh(1.4405733620667242e+308);
test_math_tanh(1.0079887758726414e+307);
test_math_tanh("9WSVJ");
test_math_tanh(-325);
test_math_tanh(-101);
test_math_tanh("16FRO");
test_math_tanh("4FC7G0V");
test_math_tanh("K9Y");
test_math_tanh(2.1445965887462172e+307);
test_math_tanh("A7W7I");
test_math_tanh("8URYGI");
test_math_tanh(4.3427035099847345e+307);
test_math_tanh(-779);
test_math_tanh("YNZT");
test_math_tanh("PKUE3K");
test_math_tanh("GZEGX2C44");
test_math_tanh(9.989196618933079e+307);
test_math_tanh(6.592054836206649e+307);
test_math_tanh(-255);
test_math_tanh(1.1756588642343628e+308);
test_math_tanh(4.527535578051952e+307);
test_math_tanh("MSCA");
test_math_tanh("WILNLP3G");
test_math_tanh(-403);
test_math_tanh("BJK7");
test_math_tanh("U1CF6");
test_math_tanh(-635);
test_math_tanh(-13);
test_math_tanh(-429);
test_math_tanh(2.690572299045436e+307);
test_math_tanh("PKBOZ4");
test_math_tanh("96M");
test_math_tanh(-539);
test_math_tanh("JWT");
test_math_tanh(-203);
test_math_tanh("FM2VYSFDA");
test_math_tanh("62PO9SIUU");
test_math_tanh("RWT");
test_math_tanh("OKAX");
test_math_tanh(824);
test_math_tanh(1.5872151170952003e+308);
test_math_tanh(-997);
test_math_tanh("230L");
test_math_tanh(1.6020810903846913e+308);
test_math_tanh("N159");
test_math_tanh(1.3812400086314082e+308);
test_math_tanh("7NE3TPYNC");
test_math_tanh("Y23DGED1");
test_math_tanh("BC75BKM88");
test_math_tanh(1.5655206156056377e+308);
test_math_tanh(1.4042561991537112e+308);
test_math_tanh(-549);
test_math_tanh("FOF9X2");
test_math_tanh(4.3677456778528607e+307);
test_math_tanh(-933);
test_math_tanh("18YC");
test_math_tanh(-437);
test_math_tanh("669KAIHUL");
test_math_tanh("HWZ0Q61Y");
test_math_tanh("T13");
test_math_tanh(9.27250744977262e+307);
test_math_tanh(8.640620778707681e+307);
test_math_tanh(1.6836237295520113e+308);
test_math_tanh(-459);
test_math_tanh(1.7088947790499068e+308);
test_math_tanh("T1XX");
test_math_tanh(2.215790878716248e+307);
test_math_tanh("AZF5R");
test_math_tanh(1.516328819922958e+307);
test_math_tanh(3.923750278641028e+307);
test_math_tanh("OU698KVG6");
test_math_tanh(1.0507566220692917e+308);
test_math_tanh(1.7619454088240932e+308);
test_math_tanh("4PNZH0");
test_math_tanh("H4QN1U");
test_math_tanh("9CW813E");
test_math_tanh("PXW");
test_math_tanh(2.0923661114156284e+307);
test_math_tanh(4.554241186502189e+307);
test_math_tanh(-339);
test_math_tanh("XVTGZZ0FQX");
test_math_tanh(1.3501523742716442e+308);
test_math_tanh(-837);
test_math_tanh(-257);
test_math_tanh("PA1AKI");
test_math_tanh("ADMZ2WZS");
test_math_tanh("RICD13");
test_math_tanh(-963);
test_math_tanh("HOVK");
test_math_tanh(-439);
test_math_tanh(1.291045312493691e+308);
test_math_tanh("HQ3YRM");
test_math_tanh("VFYE");
test_math_tanh("XGHGOJTK2C");
test_math_tanh(8.973096312172736e+307);
test_math_tanh(-479);
test_math_tanh("ITAIJN22");
test_math_tanh(1.7596137585139054e+308);
test_math_tanh(-503);
test_math_tanh("JQOSTL");
test_math_tanh(-891);
test_math_tanh("43E4");
test_math_tanh("KE68");
test_math_tanh(1.4486494108880076e+308);
test_math_tanh("AFNZRI9X3K");
test_math_tanh(-375);
test_math_tanh("SB0368A");
test_math_tanh(-603);
test_math_tanh(-943);
test_math_tanh("0D9SG");
test_math_tanh(-903);
test_math_tanh("FXFRP");
test_math_tanh("WAVH7ZA");
test_math_tanh(4.6153288850121087e+306);
test_math_tanh(-861);
test_math_tanh("LHAYD0BV");
test_math_tanh(-417);
test_math_tanh(1.745007427291418e+308);
test_math_tanh(-245);
test_math_tanh("G0BHVJ2ZPT");
test_math_tanh("IW8XWH");
test_math_tanh(1.4916154716648873e+307);
test_math_tanh(2.549943683440676e+307);
test_math_tanh("FXT20RR0");
test_math_tanh("UY2FWDHF");
test_math_tanh("PTW81ERLV");
test_math_tanh(-395);
test_math_tanh(9.110551252747118e+307);
test_math_tanh(1.521563012005349e+308);
test_math_tanh(-995);
test_math_tanh(8.753841891210201e+307);
test_math_tanh(1.5593816255752636e+308);
test_math_tanh(1.2583547856349355e+308);
test_math_tanh("G2WJQ9O0A");
test_math_tanh(-531);
test_math_tanh(1.7044796938040642e+307);
test_math_tanh("SV3SC");
test_math_tanh("OGRPG");
test_math_tanh(-813);
test_math_tanh("EDDZ2");
test_math_tanh(-461);
test_math_tanh(1.1908520322849393e+308);
test_math_tanh("BP72TC5J");
test_math_tanh("C2J");
test_math_tanh(-173);
test_math_tanh("9ROS9D59");
test_math_tanh(7.647693210283294e+307);
test_math_tanh(1.3125828894846136e+308);
test_math_tanh(1.195344079671648e+308);
test_math_tanh(2.39901977170912e+307);
test_math_tanh(8.011236689498141e+307);
test_math_tanh("OLY");
test_math_tanh("TK71L3425");
test_math_tanh(8.683148385354403e+307);
test_math_tanh(-669);
test_math_tanh("X2MOWSOAM");
test_math_tanh(-727);
test_math_tanh("4N81XRO0V");
test_math_tanh("GD8AV7A");
test_math_tanh(1.0713333323482975e+308);
test_math_tanh("8VVUT37O");
test_math_tanh(1.035302868852847e+308);
test_math_tanh("LEDH59DQTB");
test_math_tanh(-293);
test_math_tanh(-677);
test_math_tanh(1.107270169790125e+308);
test_math_tanh(8.663519332804638e+307);
test_math_tanh(-761);
test_math_tanh("23N54OZIP");
test_math_tanh("T08GAR9H");
test_math_tanh(-869);
test_math_tanh(3.896178312216646e+307);
test_math_tanh(-559);
test_math_tanh("BM3LKQ");
test_math_tanh(4.789902946853e+307);
test_math_tanh("B6P58WPR");
test_math_tanh("JOCG0NOD33");
test_math_tanh(-83);
test_math_tanh(-977);
test_math_tanh("WIEF");
test_math_tanh(9.540908889219261e+305);
test_math_tanh(2.7123430527949367e+307);
test_math_tanh(2.517006368646801e+307);
test_math_tanh("TCF619NFI9");
test_math_tanh("9R5O0");
test_math_tanh("W12FL");
test_math_tanh("8TD2Y");
test_math_tanh(8.837224075549739e+307);
test_math_tanh(-285);
test_math_tanh("DZS3T8");
test_math_tanh(-687);
test_math_tanh("NFH3CDOU8");
test_math_tanh("PYMG");
test_math_tanh("K6R");
test_math_tanh("97NG10U");
test_math_tanh(2.693253709769625e+307);
test_math_tanh(6.955893660846908e+307);
test_math_tanh(1.32183293937155e+307);
test_math_tanh("BVB0R5OZ");
test_math_tanh(5.070040147857928e+307);
test_math_tanh(2.3206633583134743e+307);
test_math_tanh(1.1327693164966811e+308);
test_math_tanh(-35);
test_math_tanh("LOO38HRHJH");
test_math_tanh(-447);
test_math_tanh("Y8V3");
test_math_tanh(8.184418163201587e+307);
test_math_tanh(-133);
test_math_tanh("2FVK");
test_math_tanh(-129);
test_math_tanh("RTQQEO");
test_math_tanh(-651);
test_math_tanh(9.348046393485167e+307);
test_math_tanh("5W4G");
test_math_tanh(1.2807945669339924e+308);
test_math_tanh("9QZMRWV43P");
test_math_tanh(-787);
test_math_tanh(8.365162468055987e+307);
test_math_tanh(6.028487596888526e+307);
test_math_tanh(-187);
test_math_tanh("FLTZA");
test_math_tanh(9.393033613360236e+307);
test_math_tanh("2VW");
test_math_tanh(1.3428008513249197e+308);
test_math_tanh("2AMEGY24A6");
test_math_tanh(7.662633558514022e+307);
test_math_tanh("VQH52V");
test_math_tanh("IWR99SLQOU");
test_math_tanh("1S3");
test_math_tanh("K6DO");
test_math_tanh(2.806159916691344e+307);
test_math_tanh(664);
test_math_tanh("Q7GRTICF");
test_math_tanh("JJ1EAY3GW");
test_math_tanh("L771EHHXPQ");
test_math_tanh(1.1660361568118612e+308);
test_math_tanh("C9UUNQJXS");
test_math_tanh("J9YVV");
test_math_tanh(-77);
test_math_tanh(-413);
test_math_tanh("HNUOUZZ");
test_math_tanh(9.624280172482629e+307);
test_math_tanh(-717);
test_math_tanh(-37);
test_math_tanh(-613);
test_math_tanh("ATSXXK527R");
test_math_tanh(3.018413657953183e+307);
test_math_tanh(1.5927503548799752e+308);
test_math_tanh(1.261875271123385e+308);
test_math_tanh(-991);
test_math_tanh("YZBF2GAYF");
test_math_tanh("9YZITZY");
test_math_tanh("JE59AS1");
test_math_tanh(5.079662838967259e+307);
test_math_tanh("8AAVW04T4");
test_math_tanh(1.6660294325197561e+308);
test_math_tanh("JM6V");
test_math_tanh(-945);
test_math_tanh("UO338X");
test_math_tanh("M7SXGA");
test_math_tanh("YU433V08");
test_math_tanh("0EZVFV7DB");
test_math_tanh(-801);
test_math_tanh(1.2003650086725587e+308);
test_math_tanh(-829);
test_math_tanh(-185);
test_math_tanh(-823);
test_math_tanh("SFMOR");
test_math_tanh("CUNW");
test_math_tanh(-411);
test_math_tanh(1.6039482511344624e+308);
test_math_tanh("IRG3ZQQ9L");
test_math_tanh(8.957514510764493e+307);
test_math_tanh("K7NRAE");
test_math_tanh(1.57412066311607e+308);
test_math_tanh("7OLC5Q9");
test_math_tanh("OPVO179CSC");
test_math_tanh(4.3525491771822566e+307);
test_math_tanh("2QE");
test_math_tanh("6TDLJD6PP");
test_math_tanh("RDGB5Z70N");
test_math_tanh("KTD5HK26K");
test_math_tanh(1.7027136502830568e+308);
test_math_tanh(4.314524438691471e+306);
test_math_tanh("G1V");
test_math_tanh("7S2");
test_math_tanh("BC6IJQQF");
test_math_tanh(-577);
test_math_tanh(1.0124764328864975e+308);
test_math_tanh("DNJ17MAS5Y");
test_math_tanh(1.5382635956001985e+307);
test_math_tanh(8.74007032755333e+307);
test_math_tanh("O5SXH6651I");
test_math_tanh("O6GB3V8Z1B");
test_math_tanh("1HZ4IP");
test_math_tanh(-153);
test_math_tanh("B62Z5B");
test_math_tanh("FVW9X99");
test_math_tanh("E4A0F");
test_math_tanh(4.545486785593426e+307);
test_math_tanh(1.604971297696783e+308);
test_math_tanh("3O6R31");
test_math_tanh(-803);
test_math_tanh(1.0516888622105177e+307);
test_math_tanh("B0HMT29W");
test_math_tanh("H8PVB4JUM");
test_math_tanh(7.542652666350513e+307);
test_math_tanh(-615);
test_math_tanh(1.3188192084448824e+307);
test_math_tanh(-473);
test_math_tanh(-953);
test_math_tanh("J7I");
test_math_tanh("C4Q");
test_math_tanh(-205);
test_math_tanh("8ST");
test_math_tanh(1.2675755508378314e+308);
test_math_tanh("I4USLYZQOC");
test_math_tanh("1IM");
test_math_tanh(8.169662273439689e+307);
test_math_tanh(7.799699033201493e+307);
test_math_tanh(1.2216595663900404e+308);
test_math_tanh(-363);
test_math_tanh("KH14XN9H");
test_math_tanh(-289);
test_math_tanh(3.398207282735608e+307);
test_math_tanh("AREFZX6");
test_math_tanh(7.14744321762608e+306);
test_math_tanh("L354I55J");
test_math_tanh("D6T");
test_math_tanh("FUUKSWDW5L");
test_math_tanh(-427);
test_math_tanh(6.213220255631642e+307);
test_math_tanh(1.7888436519815247e+308);
test_math_tanh(1.225422221427043e+308);
test_math_tanh(-303);
test_math_tanh(1.5865573766770457e+308);
test_math_tanh(-809);
test_math_tanh(7.029904350174188e+307);
test_math_tanh(-715);
test_math_tanh(1.280372538339751e+308);
test_math_tanh(-881);
test_math_tanh(-547);
test_math_tanh(1.5336186346647041e+308);
test_math_tanh(3.160413862067405e+307);
test_math_tanh(-271);
test_math_tanh("KCJ");
test_math_tanh("LB7GZVUB");
test_math_tanh("AFV");
test_math_tanh("3QEX");
test_math_tanh(9.43590349850332e+307);
test_math_tanh("GID7X");
test_math_tanh("V74C65");
test_math_tanh(-165);
test_math_tanh("U7B2");
test_math_tanh(-161);
test_math_tanh("JJIG35XXW");
test_math_tanh(-231);
test_math_tanh(-397);
test_math_tanh(-467);
test_math_tanh(7.074731234817872e+307);
test_math_tanh(-817);
test_math_tanh(-23);
test_math_tanh(1.1615765403244116e+308);
test_math_tanh(1.5098610752417243e+308);
test_math_tanh(1.4472669651567272e+308);
test_math_tanh(1.2668281819319009e+308);
test_math_tanh(5.908826839453887e+307);
test_math_tanh("63PBVX");
test_math_tanh(1.6674419454714046e+308);
test_math_tanh(-365);
test_math_tanh("XD9G");
test_math_tanh(2.7005819464697044e+307);
test_math_tanh(-757);
test_math_tanh(1.2910259564719818e+308);
test_math_tanh("XHED");
test_math_tanh("7ATMD8J");
test_math_tanh("P298CAWLT8");
test_math_tanh(6.400019640779578e+307);
test_math_tanh(2.572345796228681e+307);
test_math_tanh("WEULHQ");
test_math_tanh(364);
test_math_tanh("I0N");
test_math_tanh(8.357710990296399e+307);
test_math_tanh("LO41");
test_math_tanh(-405);
test_math_tanh(1.1437526737875472e+308);
test_math_tanh(1.5714675120131289e+308);
test_math_tanh("YPW66VE");
test_math_tanh(-145);
test_math_tanh(9.054391474820743e+307);
test_math_tanh("ETCEF");
test_math_tanh(1.7705670613180483e+308);
test_math_tanh(1.643850698961088e+308);
test_math_tanh("W3T3");
test_math_tanh(1.5075835113511346e+308);
test_math_tanh(1.6353150446170633e+308);
test_math_tanh(-739);
test_math_tanh(1.265672698662489e+307);
test_math_tanh("ZQDT");
test_math_tanh(-747);
test_math_tanh(1.0440235360722894e+308);
test_math_tanh(4.688263146354856e+307);
test_math_tanh(-513);
test_math_tanh("BITD");
test_math_tanh("L624O");
test_math_tanh(4.0406907734840813e+307);
test_math_tanh("O60FKW");
test_math_tanh(1.4730471868168478e+308);
test_math_tanh(9.783297543292967e+306);
test_math_tanh("JQ4X");
test_math_tanh(4.1644883028223677e+307);
test_math_tanh("MRYL6");
test_math_tanh("Z1XYVMLEB7");
test_math_tanh(1.2129135050566866e+308);
test_math_tanh("XCVIY");
test_math_tanh(-105);
test_math_tanh(8.343935800064097e+307);
test_math_tanh("0HF62GNZ");
test_math_tanh("0NFGE877");
test_math_tanh(1.1183638446490523e+308);
test_math_tanh(-155);
test_math_tanh("2BW9BVR");
test_math_tanh(-453);
test_math_tanh("EZPZ");
test_math_tanh(4.4139937414341564e+307);
test_math_tanh(9.715784258888647e+307);
test_math_tanh(5.049772420211829e+307);
test_math_tanh(-361);
test_math_tanh("3A9CCX");
test_math_tanh(1.754129093058233e+308);
test_math_tanh("W1KSSJQ7E8");
test_math_tanh("MX2S5");
test_math_tanh(3.5662586432670855e+307);
test_math_tanh(-19);
test_math_tanh(-407);
test_math_tanh(5.848713830030089e+307);
test_math_tanh(-313);
test_math_tanh(1.6869379514943269e+308);
test_math_tanh("HYGARHCRP2");
test_math_tanh(-839);
test_math_tanh(1.4984752081855808e+308);
test_math_tanh(-857);
test_math_tanh("TY9");
test_math_tanh(7.095436556032947e+307);
test_math_tanh(-299);
test_math_tanh(1.3651393383438392e+308);
test_math_tanh(-831);
test_math_tanh(5.70693310883895e+307);
test_math_tanh("MAM69COT");
test_math_tanh(1.1125740417221002e+308);
test_math_tanh(1.2931569171852558e+308);
test_math_tanh(9.895235098864577e+307);
test_math_tanh("XZIN0OHRE");
test_math_tanh(-435);
test_math_tanh(1.2132919841486997e+308);
test_math_tanh("RDQKZOLY");
test_math_tanh(2.594101497892813e+307);
test_math_tanh(1.4756955852379207e+308);
test_math_tanh(-485);
test_math_tanh(6.134472781684634e+307);
test_math_tanh(-781);
test_math_tanh("FTYWV");
test_math_tanh(-191);
test_math_tanh(-241);
test_math_tanh(-725);
test_math_tanh("A70");
test_math_tanh(-899);
test_math_tanh(2.4692791371402304e+307);
test_math_tanh(1.873051258819093e+307);
test_math_tanh(1.7927577849801986e+308);
test_math_tanh(1.3714841187975812e+308);
test_math_tanh("E9PNUEDOH");
test_math_tanh("D8FF");
test_math_tanh("WBLBCOZQ");
test_math_tanh(9.315301824838977e+307);
test_math_tanh(-805);
test_math_tanh("CZTJ0T");
test_math_tanh(3.5010444755333913e+307);
test_math_tanh(1.5057313590280081e+308);
test_math_tanh(1.7526662697925207e+308);
test_math_tanh(2.734227368826065e+307);
test_math_tanh(-935);
test_math_tanh(-71);
test_math_tanh("8OKO");
test_math_tanh(1.5204641294967696e+308);
test_math_tanh(1.5207777716075522e+308);
test_math_tanh(958);
test_math_tanh(3.5060570711451786e+307);
test_math_tanh("RDQA7YC2");
test_math_tanh("5ZQ");
test_math_tanh(1.3325297753220668e+307);
test_math_tanh(5.668705843390807e+307);
test_math_tanh("DW1U");
test_math_tanh(7.191477875735331e+307);
test_math_tanh("0RDUD51");
test_math_tanh(6.256747768554714e+307);
test_math_tanh(1.5040246194725972e+308);
test_math_tanh("L13");
test_math_tanh("505NPWMQC");
test_math_tanh("NKJETYSE");
test_math_tanh(-501);
test_math_tanh(-457);
test_math_tanh("MZP");
test_math_tanh(9.636449508138477e+307);
test_math_tanh("87SU");
test_math_tanh(8.21586186747269e+306);
test_math_tanh("SFZO");
test_math_tanh(1.6851641322764378e+308);
test_math_tanh("WMMY");
test_math_tanh(5.518890240157314e+307);
test_math_tanh("GFM");
test_math_tanh(-319);
test_math_tanh(8.692674830890754e+306);
test_math_tanh(1.5278181712570441e+308);
test_math_tanh(8.112948574047162e+307);
test_math_tanh(-171);
test_math_tanh(8.756918334681168e+307);
test_math_tanh("MRVWPJ");
test_math_tanh("1B1BT");
test_math_tanh(1.1023204763310675e+308);
test_math_tanh("YN76");
test_math_tanh("IJOXZOL260");
test_math_tanh("8AL67Q9");
test_math_tanh("F9XFPHBT");
test_math_tanh("GCK1BJIZ");
test_math_tanh(-347);
test_math_tanh(1.6887052316054875e+308);
test_math_tanh(3.324604827171971e+307);
test_math_tanh(-301);
test_math_tanh("L3FJ7ME3T");
test_math_tanh(-1);
test_math_tanh(-593);
test_math_tanh(1.3179577308214195e+307);
test_math_tanh(1.5944016999707117e+307);
test_math_tanh(-355);
test_math_tanh("A612NEEYFG");
test_math_tanh(-95);
test_math_tanh(-421);
test_math_tanh("5FFJHI38C");
test_math_tanh(1.1717315512055063e+308);
test_math_tanh(7.221534123260086e+307);
test_math_tanh(-729);
test_math_tanh(1.1150336786841664e+308);
test_math_tanh("CGGAKWJ77A");
test_math_tanh("L1FU");
test_math_tanh(1.1826402887397805e+308);
test_math_tanh(9.103445422747316e+306);
test_math_tanh("ZC43FYE");
test_math_tanh(1.018920379530567e+308);
test_math_tanh(2.621165364882575e+307);
test_math_tanh("DFIA4");
test_math_tanh(-607);
test_math_tanh(9.44108730144351e+307);
test_math_tanh("HXRILL");
test_math_tanh(1.458011043138119e+308);
test_math_tanh(-571);
test_math_tanh(1.2622682573446013e+308);
test_math_tanh(1.5265289281444547e+308);
test_math_tanh(-345);
test_math_tanh(-833);
test_math_tanh(1.2398334839631274e+308);
test_math_tanh(1.7773857588245468e+308);
test_math_tanh(9.778419256160214e+307);
test_math_tanh(1.5695279572562274e+308);
test_math_tanh("KDAC7WHU53");
test_math_tanh(-449);
test_math_tanh(-783);
test_math_tanh(7.025354472685558e+306);
test_math_tanh("VL35OPK");
test_math_tanh("ABEB0XUF8");
test_math_tanh(1.6073461476858906e+307);
test_math_tanh(-847);
test_math_tanh(5.645053833044542e+307);
test_math_tanh(4.738425672540337e+307);
test_math_tanh("0ZN0UPV");
test_math_tanh("HML9HY");
test_math_tanh(1.322119457495637e+307);
test_math_tanh(7.324918954636933e+307);
test_math_tanh("1FNHJ3FM");
test_math_tanh(3.9217848570249904e+306);
test_math_tanh("6ILUQQ");
test_math_tanh(7.384088551688242e+307);
test_math_tanh("WGV5IPA");
test_math_tanh(-295);
test_math_tanh("SL38CV0LV7");
test_math_tanh(5.400414017592221e+307);
test_math_tanh("P5Q90N5F");
test_math_tanh("AI4WSPY");
test_math_tanh(7.302284172475817e+307);
test_math_tanh("HLM57");
test_math_tanh(9.45127390092524e+307);
test_math_tanh(1.0746152859273387e+307);
test_math_tanh(2.196096998157695e+307);
test_math_tanh("CBY8WC");
test_math_tanh(-773);
test_math_tanh(1.7528679172746682e+308);
test_math_tanh(4.7536861917784916e+306);
test_math_tanh("A5WVCFUHBG");
test_math_tanh(780);
test_math_tanh(3.1563383332309297e+307);
test_math_tanh(-697);
test_math_tanh(-323);
test_math_tanh(-909);
test_math_tanh(-493);
test_math_tanh(1.6366188102633682e+308);
test_math_tanh(1.0716153857645753e+308);
test_math_tanh(1.1788525735130524e+308);
test_math_tanh(3.5865975278269303e+307);