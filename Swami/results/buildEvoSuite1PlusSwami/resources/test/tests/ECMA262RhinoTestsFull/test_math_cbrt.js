/*
* This file is automatically generated by GenTest
*
* 2018-08-06 15:08:53.503068
*/




startTest();

/*
*
*	ABSTRACT FUNCTIONS IMPLEMENTED USING DESCRIPTION FROM ECMA-262 
*
*/

function RequireObjectCoercible(argument){
        if (argument == undefined || argument == null)
                throw new TypeError("TypeError in RequireObjectCoercible")
        else
                return argument
}

function ToString(argument){
        if (argument == undefined)
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
        if (argument == undefined || argument == null)
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
/*TEST TEMPLATE GENERATED AUTOMATICALLY*/
function test_math_cbrt(x){
	if (Object.is( x,NaN)){
		var output = Math.cbrt(x);
		new TestCase("math_cbrt", "math_cbrt", NaN, output);
		test();
		//console.log("Good Test")
		return
		}
	if (( x===0)){
		var output = Math.cbrt(x);
		new TestCase("math_cbrt", "math_cbrt", 0, output);
		test();
		//console.log("Good Test")
		return
		}
	if (( x===-0)){
		var output = Math.cbrt(x);
		new TestCase("math_cbrt", "math_cbrt", -0, output);
		test();
		//console.log("Good Test")
		return
		}
	if (( x===Infinity)){
		var output = Math.cbrt(x);
		new TestCase("math_cbrt", "math_cbrt", Infinity, output);
		test();
		//console.log("Good Test")
		return
		}
	if (( x===-Infinity)){
		var output = Math.cbrt(x);
		new TestCase("math_cbrt", "math_cbrt", -Infinity, output);
		test();
		//console.log("Good Test")
		return
		}
	//console.log("OK Test")
}

/*TESTS GENERATED AUTOMATICALLY*/
test_math_cbrt(7.249633527456775e+307);
test_math_cbrt("KIDMC");
test_math_cbrt(-451);
test_math_cbrt(62);
test_math_cbrt(1.1498664783426706e+308);
test_math_cbrt(8.157024239411606e+306);
test_math_cbrt(Infinity);
test_math_cbrt("MQ31EW");
test_math_cbrt(-815);
test_math_cbrt(270);
test_math_cbrt(240);
test_math_cbrt(-889);
test_math_cbrt(1.1571378771054568e+308);
test_math_cbrt(-389);
test_math_cbrt(/yes[^]*day/);
test_math_cbrt(+0);
test_math_cbrt("XE0");
test_math_cbrt("LQHPVFIRS");
test_math_cbrt(/yes.*day/);
test_math_cbrt(/ab+c/);
test_math_cbrt("4BOGLLB");
test_math_cbrt("1GF0HJ");
test_math_cbrt(964);
test_math_cbrt(1.374088297647724e+308);
test_math_cbrt(true);
test_math_cbrt(-625);
test_math_cbrt(false);
test_math_cbrt(3.7360999534201985e+306);
test_math_cbrt(550);
test_math_cbrt(210);
test_math_cbrt(/[^.]+/);
test_math_cbrt(NaN);
test_math_cbrt(7.728789470542793e+307);
test_math_cbrt(9.682376775540096e+307);
test_math_cbrt(932);
test_math_cbrt(null);
test_math_cbrt(6.995955720001765e+307);
test_math_cbrt(undefined);
test_math_cbrt(/foo/g);
test_math_cbrt(-235);
test_math_cbrt("QQ97C");
test_math_cbrt("UM7Y");
test_math_cbrt(/(\w+)\s(\w+)/);
test_math_cbrt(9.346842959462374e+307);
test_math_cbrt(848);
test_math_cbrt("QKK86CDVGT");
test_math_cbrt(922);
test_math_cbrt(2.5352520835685794e+307);
test_math_cbrt(-0);
test_math_cbrt(1.1344530996593107e+308);
test_math_cbrt(4.468892198736727e+307);
test_math_cbrt(1.6068195133851655e+308);
test_math_cbrt(-587);
test_math_cbrt("44UDL");
test_math_cbrt(-759);
test_math_cbrt(366);
test_math_cbrt("MGZ23NQZEJ");
test_math_cbrt("HOOJB");
test_math_cbrt("VWTP6WDWS");
test_math_cbrt(-997);
test_math_cbrt(-59);
test_math_cbrt("C3A34S53CA");
test_math_cbrt(.1e-23);
test_math_cbrt(-323);
test_math_cbrt(-109);
test_math_cbrt(-713);
test_math_cbrt(6.19520587643039e+307);
test_math_cbrt(716);
test_math_cbrt(950);
test_math_cbrt(1.3791673964815714e+308);
test_math_cbrt(/\r\n|\r|\n/);
test_math_cbrt("OS6");
test_math_cbrt(-399);
test_math_cbrt("PPM4C3X9B");
test_math_cbrt(7.212418828951004e+307);
test_math_cbrt(4.937276194323976e+307);
test_math_cbrt(3.282394667841825e+307);
test_math_cbrt(8.549723632002878e+307);
test_math_cbrt(5.742892138744677e+307);
test_math_cbrt(1.1882383225951356e+308);
test_math_cbrt(-897);
test_math_cbrt(1.152842255517459e+308);
test_math_cbrt(-569);
test_math_cbrt("0P4M");
test_math_cbrt(-351);
test_math_cbrt(1.4703087844164701e+308);
test_math_cbrt("AA175");
test_math_cbrt("NRXYU5");
test_math_cbrt("M3JJUS53");
test_math_cbrt(9.410471888809927e+307);
test_math_cbrt("OH70R6I");
test_math_cbrt("L99");
test_math_cbrt("6JJK");
test_math_cbrt(-19);
test_math_cbrt(9.55572711835882e+307);
test_math_cbrt("3CFXLW");
test_math_cbrt("8BHFX");
test_math_cbrt(/[\u0400-\u04FF]+/g);
test_math_cbrt(200);
test_math_cbrt(638);
test_math_cbrt(440);
test_math_cbrt(6.51208763291915e+307);
test_math_cbrt("R704E");
test_math_cbrt(72);
test_math_cbrt(4.1331072550185283e+307);
test_math_cbrt(248);
test_math_cbrt(-959);
test_math_cbrt(8.874301128277901e+307);
test_math_cbrt(-119);
test_math_cbrt("ZAHKO7O");
test_math_cbrt("51IUG");
test_math_cbrt("MUKZBSC");
test_math_cbrt(-819);
test_math_cbrt(8.680054230043271e+307);
test_math_cbrt("1ZL97WS6G");
test_math_cbrt(-543);
test_math_cbrt("WLZ2");
test_math_cbrt(-989);
test_math_cbrt(5.73265385019515e+307);
test_math_cbrt(1.0995324632968213e+308);
test_math_cbrt("HMAI0");
test_math_cbrt(702);
test_math_cbrt("UXRF1");
test_math_cbrt(-863);
test_math_cbrt(-415);
test_math_cbrt(1.0131402472367546e+308);
test_math_cbrt("ZF9Y");
test_math_cbrt(912);
test_math_cbrt(-865);
test_math_cbrt(-537);
test_math_cbrt("TLY");
test_math_cbrt(-447);
test_math_cbrt("7B5");
test_math_cbrt("L5FDJAX");
test_math_cbrt("YMJOFP4XGF");
test_math_cbrt(590);
test_math_cbrt("N9ZQ");
test_math_cbrt("3GZ7O6KB3F");
test_math_cbrt(1.3014021493375822e+308);
test_math_cbrt("CH4N59");
test_math_cbrt(-441);
test_math_cbrt("A1YT2H");
test_math_cbrt(7.432062386227492e+307);
test_math_cbrt(3.064509177540692e+307);
test_math_cbrt(8.662442275591276e+307);
test_math_cbrt(1.5189916959133184e+308);
test_math_cbrt(274);
test_math_cbrt(1.6250572402142985e+308);
test_math_cbrt(1.458414067729962e+308);
test_math_cbrt(-761);
test_math_cbrt("PLCNAD97GQ");
test_math_cbrt(3.3222791786917667e+307);
test_math_cbrt(-139);
test_math_cbrt(-985);
test_math_cbrt(9.906091803712207e+307);
test_math_cbrt(2.577820717844647e+307);
test_math_cbrt(1.1556683501047204e+308);
test_math_cbrt("30LM");
test_math_cbrt(1.557245608200189e+308);
test_math_cbrt("J6DN8DP");
test_math_cbrt(794);
test_math_cbrt(1.4552141548056755e+308);
test_math_cbrt(-33);
test_math_cbrt("2MD0CB5O");
test_math_cbrt(1.3164520062909386e+308);
test_math_cbrt("W06B");
test_math_cbrt(1.8437373427838648e+307);
test_math_cbrt(-345);
test_math_cbrt("4YP");
test_math_cbrt("VONV6EB");
test_math_cbrt(1.6585492497010067e+308);
test_math_cbrt(4.729867604876501e+307);
test_math_cbrt(7.148681817739435e+307);
test_math_cbrt(1.7326598576762952e+308);
test_math_cbrt(142);
test_math_cbrt(9.2409825437399e+307);
test_math_cbrt(5.924179975118139e+307);
test_math_cbrt(-185);
test_math_cbrt(878);
test_math_cbrt("BQFSD1");
test_math_cbrt(-489);
test_math_cbrt(-439);
test_math_cbrt(130);
test_math_cbrt(3.097430381517911e+306);
test_math_cbrt("NVT");
test_math_cbrt(1.5522923360642528e+308);
test_math_cbrt(4.731226348279288e+307);
test_math_cbrt(7.744784372479752e+307);
test_math_cbrt("S7AW6");
test_math_cbrt("7OH287798");
test_math_cbrt(136);
test_math_cbrt("VQEGYJRO7");
test_math_cbrt("AP6");
test_math_cbrt(4.61356797086095e+307);
test_math_cbrt(8.610301444547736e+307);
test_math_cbrt(310);
test_math_cbrt("ODSX3O6");
test_math_cbrt(752);
test_math_cbrt("5HXN6H1RTO");
test_math_cbrt(1.735895786505921e+308);
test_math_cbrt(8.033634548275556e+307);
test_math_cbrt("72N7D01F2");
test_math_cbrt(3.4626135144351973e+307);
test_math_cbrt(1.0379930409956463e+308);
test_math_cbrt("DIF");
test_math_cbrt("63L");
test_math_cbrt("SAX8Q8");
test_math_cbrt("03GBKUFJM0");
test_math_cbrt(-159);
test_math_cbrt("9DOXUX");
test_math_cbrt("1P0");
test_math_cbrt("CPLB309OY");
test_math_cbrt(1.4638640241736685e+308);
test_math_cbrt(1.815183913775643e+305);
test_math_cbrt(-837);
test_math_cbrt(-697);
test_math_cbrt(1.2910007895467036e+308);
test_math_cbrt(1.770113697783195e+308);
test_math_cbrt(2.3654337468656967e+307);
test_math_cbrt(462);
test_math_cbrt(-197);
test_math_cbrt(1.1107141221300028e+308);
test_math_cbrt("ZXFO925");
test_math_cbrt(4.280553667960757e+307);
test_math_cbrt(1.495523205715622e+308);
test_math_cbrt("YI0H");
test_math_cbrt(-605);
test_math_cbrt(4.1977735376562443e+307);
test_math_cbrt(-955);
test_math_cbrt(3.155426250474942e+307);
test_math_cbrt("9RRMO2");
test_math_cbrt(948);
test_math_cbrt("A3Z1IBCGJB");
test_math_cbrt("SVUGOW7");
test_math_cbrt(1.594610842437033e+308);
test_math_cbrt(7.192022977125637e+307);
test_math_cbrt("1Y0");
test_math_cbrt(264);
test_math_cbrt("42RO");
test_math_cbrt(9.497571069141539e+307);
test_math_cbrt("7NKMSPZ57");
test_math_cbrt(1.7740337921957806e+308);
test_math_cbrt(-275);
test_math_cbrt("0K1S9");
test_math_cbrt(-367);
test_math_cbrt(412);
test_math_cbrt(506);
test_math_cbrt(676);
test_math_cbrt("4F2NF9FTN6");
test_math_cbrt("Y3I9");
test_math_cbrt(-499);
test_math_cbrt("V14PBP");
test_math_cbrt(1.1488573265580337e+308);
test_math_cbrt("5HYGXSC");
test_math_cbrt(1.6224442719151228e+308);
test_math_cbrt(-887);
test_math_cbrt(1.1649489485011365e+308);
test_math_cbrt("JBOKOSLRSD");
test_math_cbrt(1.695234195947708e+308);
test_math_cbrt("XOMOHHG7C");
test_math_cbrt(1.173081418347693e+307);
test_math_cbrt("FU3836N7");
test_math_cbrt("KOI");
test_math_cbrt(42);
test_math_cbrt(44);
test_math_cbrt("Q0T0L");
test_math_cbrt(1.0937604480932378e+308);
test_math_cbrt(1.2632209673275755e+308);
test_math_cbrt("RFUEOP4");
test_math_cbrt(-957);
test_math_cbrt("EF3CWS");
test_math_cbrt(1.4072499073689094e+308);
test_math_cbrt(1.181320267169207e+308);
test_math_cbrt("5MDPNR");
test_math_cbrt(1.7533437015995957e+307);
test_math_cbrt(876);
test_math_cbrt(-193);
test_math_cbrt("6SK6XBK43");
test_math_cbrt(-349);
test_math_cbrt("2XIFS93RR");
test_math_cbrt(-41);
test_math_cbrt(-575);
test_math_cbrt("9TX");
test_math_cbrt(-47);
test_math_cbrt(1.7869379664754758e+308);
test_math_cbrt(1.0980017745187997e+308);
test_math_cbrt("36L73");
test_math_cbrt(1.2542568869581237e+308);
test_math_cbrt(1.5674906440779776e+308);
test_math_cbrt(-987);
test_math_cbrt(5.644511507989865e+307);
test_math_cbrt(2.5084314346290984e+307);
test_math_cbrt(1.5729769877698343e+308);
test_math_cbrt(2.584772395964346e+307);
test_math_cbrt(-315);
test_math_cbrt(3.9696951464961176e+307);
test_math_cbrt("NNH");
test_math_cbrt(202);
test_math_cbrt(1.6337079848954967e+308);
test_math_cbrt("FYWA");
test_math_cbrt("94I6TK4");
test_math_cbrt("SVU8UC0");
test_math_cbrt(7.431595978985482e+307);
test_math_cbrt("X5M");
test_math_cbrt(4.381721377041094e+307);
test_math_cbrt(1.629276023012905e+308);
test_math_cbrt(-823);
test_math_cbrt("WWNBXI457C");
test_math_cbrt("IS50WWE");
test_math_cbrt("DYJ");
test_math_cbrt(640);
test_math_cbrt("NSRGS58");
test_math_cbrt(7.73718251955268e+307);
test_math_cbrt(8.04120470577634e+307);
test_math_cbrt(-151);
test_math_cbrt(7.14330216111065e+307);
test_math_cbrt(552);
test_math_cbrt(654);
test_math_cbrt("JVHYH");
test_math_cbrt(-501);
test_math_cbrt(1.1480330756836563e+308);
test_math_cbrt("YIJ4Q");
test_math_cbrt("3WF");
test_math_cbrt("Y63Y");
test_math_cbrt("2VXK");
test_math_cbrt("BQAZU12PXH");
test_math_cbrt("4T5T9VN");
test_math_cbrt("GCHLE07L");
test_math_cbrt(1.2998076827237681e+308);
test_math_cbrt(-321);
test_math_cbrt(9.118779488764824e+307);
test_math_cbrt("O68KT4O65R");
test_math_cbrt(9.648684163964489e+307);
test_math_cbrt("8EY4KEHIP");
test_math_cbrt(-295);
test_math_cbrt(218);
test_math_cbrt("S4CABPOG");
test_math_cbrt(-903);
test_math_cbrt(9.10723668423676e+307);
test_math_cbrt("TZ36V1NWP");
test_math_cbrt("1HRN32R");
test_math_cbrt(-639);
test_math_cbrt(-331);
test_math_cbrt("I710M0TAP5");
test_math_cbrt(-991);
test_math_cbrt(1.7848472070304418e+308);
test_math_cbrt(818);
test_math_cbrt(6.196768867355343e+307);
test_math_cbrt("WTQOXK961K");
test_math_cbrt(360);
test_math_cbrt(-707);
test_math_cbrt(2.647342278819682e+307);
test_math_cbrt(-113);
test_math_cbrt(-17);
test_math_cbrt(1.3353042417437734e+308);
test_math_cbrt(1.4444378216121894e+308);
test_math_cbrt(1.689875128939091e+308);
test_math_cbrt("HHC");
test_math_cbrt(1.4456935145683334e+308);
test_math_cbrt(-99);
test_math_cbrt(-739);
test_math_cbrt(-655);
test_math_cbrt("T8JGKOL14");
test_math_cbrt("QX3PY5L");
test_math_cbrt(3.209116444623339e+307);
test_math_cbrt(-21);
test_math_cbrt("36Y3");
test_math_cbrt("M194TK4");
test_math_cbrt(364);
test_math_cbrt(-943);
test_math_cbrt("AO5PZ6QF");
test_math_cbrt("Z45VO");
test_math_cbrt(1.5827791514817734e+308);
test_math_cbrt("DX74AD");
test_math_cbrt(-171);
test_math_cbrt(2.437120086692513e+307);
test_math_cbrt(-205);
test_math_cbrt(1.5860463749604786e+308);
test_math_cbrt(7.82810267964317e+307);
test_math_cbrt(1.7737063029904552e+308);
test_math_cbrt(4.289702724590543e+307);
test_math_cbrt(-557);
test_math_cbrt(3.6836222598422533e+307);
test_math_cbrt(5.934812484454151e+307);
test_math_cbrt("GDJ");
test_math_cbrt(1.4609186394967506e+308);
test_math_cbrt(-455);
test_math_cbrt("A4ODCJLRG1");
test_math_cbrt(-329);
test_math_cbrt("SQKZG2");
test_math_cbrt(-229);
test_math_cbrt(1.3411511489440784e+308);
test_math_cbrt("ECRWPRN");
test_math_cbrt(5.718985828029686e+307);
test_math_cbrt(514);
test_math_cbrt(1.2814478960798077e+308);
test_math_cbrt("K2LE4WJEA");
test_math_cbrt("3PV");
test_math_cbrt(6.907312354179013e+307);
test_math_cbrt(404);
test_math_cbrt(-405);
test_math_cbrt(-3.1E+12);
test_math_cbrt(-883);
test_math_cbrt("YIN");
test_math_cbrt(888);
test_math_cbrt(1.117355463090248e+308);
test_math_cbrt(2.2762088423615125e+307);
test_math_cbrt(3.473802515858417e+307);
test_math_cbrt(224);
test_math_cbrt(748);
test_math_cbrt("DHQ");
test_math_cbrt(-945);
test_math_cbrt(1.6389932582748384e+308);
test_math_cbrt(8.574234496159759e+307);
test_math_cbrt(-241);
test_math_cbrt(3.054902683459721e+307);
test_math_cbrt(1.1063130989817746e+308);
test_math_cbrt("bar");
test_math_cbrt(-595);
test_math_cbrt("3SWX");
test_math_cbrt(4.808434055806739e+307);
test_math_cbrt(-459);
test_math_cbrt(826);
test_math_cbrt(220);
test_math_cbrt("7CF");
test_math_cbrt(648);
test_math_cbrt(-611);
test_math_cbrt(6.624638367401687e+306);
test_math_cbrt(7.715947634110845e+307);
test_math_cbrt(5.088422225474371e+307);
test_math_cbrt("IU1YB6AO");
test_math_cbrt(3.336129639165203e+307);
test_math_cbrt(1.0116812981164221e+308);
test_math_cbrt("H2125ZFHS");
test_math_cbrt(-363);
test_math_cbrt(1.3216654325289898e+308);
test_math_cbrt(1.4716084053714779e+308);
test_math_cbrt(8.315379088046428e+306);
test_math_cbrt(5.604369883396726e+307);
test_math_cbrt(696);
test_math_cbrt("KAOU");
test_math_cbrt("505Q");
test_math_cbrt("4TIN2Z");
test_math_cbrt("A9VG6");
test_math_cbrt(-3);
test_math_cbrt("NTY5TT8");
test_math_cbrt(4.9362433062206545e+306);
test_math_cbrt(152);
test_math_cbrt(736);
test_math_cbrt(2.7758677748079846e+307);
test_math_cbrt("8SOI588");
test_math_cbrt("ZLFV26");
test_math_cbrt("PH170M");
test_math_cbrt("Y6XFA64T");
test_math_cbrt(-31);
test_math_cbrt("UT2V04");
test_math_cbrt(1.6146916141304213e+308);
test_math_cbrt(2.83139522981917e+307);
test_math_cbrt(1.468106479880434e+308);
test_math_cbrt("RB3V");
test_math_cbrt("NMZ5W93F");
test_math_cbrt("CKPGIY");
test_math_cbrt(-601);
test_math_cbrt("Y67W6IR5");
test_math_cbrt("TTUAR9IQAZ");
test_math_cbrt(1.0718487600188803e+308);
test_math_cbrt(-683);
test_math_cbrt(772);
test_math_cbrt("3NMUTDF");
test_math_cbrt(866);
test_math_cbrt(1.5662938490424808e+308);
test_math_cbrt("92S4YCQO");
test_math_cbrt(1.2541626337538227e+308);
test_math_cbrt(4.0791238305234585e+306);
test_math_cbrt(-653);
test_math_cbrt("6JZGH7");
test_math_cbrt(-353);
test_math_cbrt(9.884045904924102e+307);
test_math_cbrt(1.5791156589654846e+308);
test_math_cbrt(-77);
test_math_cbrt("S8R");
test_math_cbrt(-729);
test_math_cbrt("14F");
test_math_cbrt(-573);
test_math_cbrt("8KYCFA");
test_math_cbrt("ITZ");
test_math_cbrt(1.4230927515791057e+308);
test_math_cbrt(-775);
test_math_cbrt(-279);
test_math_cbrt(8.014009985094467e+307);
test_math_cbrt(3.837660429992181e+306);
test_math_cbrt(4.4384209180590866e+307);
test_math_cbrt(1.6819637081693133e+308);
test_math_cbrt(9.727021687340334e+307);
test_math_cbrt("WM821W6");
test_math_cbrt(2.312499301803448e+307);
test_math_cbrt(2.9187479852418116e+307);
test_math_cbrt("RNO6KKZR");
test_math_cbrt(-831);
test_math_cbrt(584);
test_math_cbrt("Z8E3MRZQ");
test_math_cbrt(-297);
test_math_cbrt("48P1U");
test_math_cbrt(-899);
test_math_cbrt(1.2820110095922514e+308);
test_math_cbrt(1.066515055125729e+308);
test_math_cbrt(8.143761126883002e+307);
test_math_cbrt(3.578656012638659e+307);
test_math_cbrt("48FPW4");
test_math_cbrt(1.0715259613098066e+308);
test_math_cbrt(-549);
test_math_cbrt(-61);
test_math_cbrt(5.470282460930649e+307);
test_math_cbrt(-97);
test_math_cbrt(9.234750626762454e+307);
test_math_cbrt(534);
test_math_cbrt("60PS");
test_math_cbrt(686);
test_math_cbrt("DWBBU2");
test_math_cbrt(1.644542479564559e+308);
test_math_cbrt(-157);
test_math_cbrt(1.645596858384317e+308);
test_math_cbrt(-835);
test_math_cbrt("MYFGTN3BP");
test_math_cbrt(9.188189549210038e+307);
test_math_cbrt(470);
test_math_cbrt("B5HARNB");
test_math_cbrt(124);
test_math_cbrt("P0MWY");
test_math_cbrt(2.7380866568856953e+307);
test_math_cbrt(4.788239787022299e+307);
test_math_cbrt(256);
test_math_cbrt(1.5665852616119856e+308);
test_math_cbrt(8.087276721461177e+307);
test_math_cbrt(-953);
test_math_cbrt(26);
test_math_cbrt("EQXAI5BTC7");
test_math_cbrt(1.7757305660908711e+308);
test_math_cbrt("MGOZ");
test_math_cbrt(868);
test_math_cbrt("NU8BWQB");
test_math_cbrt(-65);
test_math_cbrt("BUV0B6MM");
test_math_cbrt("0K5CTLDY");
test_math_cbrt(1.2620944645136579e+308);
test_math_cbrt(620);
test_math_cbrt(1.4255331305017212e+308);
test_math_cbrt(-153);
test_math_cbrt(474);
test_math_cbrt(1.7719733648693399e+308);
test_math_cbrt(1.5455964903868252e+307);
test_math_cbrt(898);
test_math_cbrt(432);
test_math_cbrt("OI3RSZWI0");
test_math_cbrt(1.373644312450547e+308);
test_math_cbrt("6KHRD");
test_math_cbrt("VDLL9GID5");
test_math_cbrt("7ABPZ");
test_math_cbrt("I8P");
test_math_cbrt("SN9");
test_math_cbrt(1.6373247718181675e+308);
test_math_cbrt("LNK");
test_math_cbrt(1.6458220250720982e+308);
test_math_cbrt("CYSU2");
test_math_cbrt("FQFZUOM4");
test_math_cbrt(-687);
test_math_cbrt(2.6632010282739673e+307);
test_math_cbrt(1.3167347179045026e+308);
test_math_cbrt(1.7842243586039878e+307);
test_math_cbrt(-57);
test_math_cbrt("DYP9ZSZWG");
test_math_cbrt(886);
test_math_cbrt(1.4473218226338994e+308);
test_math_cbrt(1.516671315541109e+307);
test_math_cbrt("A7SYX0O7DA");
test_math_cbrt("5L0");
test_math_cbrt(3.3280257423904035e+307);
test_math_cbrt(1.1547226250656535e+308);
test_math_cbrt(-565);
test_math_cbrt("YURCUA03N7");
test_math_cbrt(-111);
test_math_cbrt(1.175445410557103e+308);
test_math_cbrt(1.7266647501765024e+308);
test_math_cbrt(-285);
test_math_cbrt(424);
test_math_cbrt(1.2478294134476776e+308);
test_math_cbrt("KIZ");
test_math_cbrt(7.281269942609319e+307);
test_math_cbrt(58);
test_math_cbrt("A1KDL");
test_math_cbrt("DTA");
test_math_cbrt(64);
test_math_cbrt(1.4085717805655708e+308);
test_math_cbrt(234);
test_math_cbrt("9USSFX6VRX");
test_math_cbrt(328);
test_math_cbrt(1.4785798145031591e+308);
test_math_cbrt("PL5");
test_math_cbrt(-599);
test_math_cbrt(1.6272693110675273e+308);
test_math_cbrt(372);
test_math_cbrt("VWZB66U");
test_math_cbrt(1.3152152674851786e+308);
test_math_cbrt("1ZZ3205GS");
test_math_cbrt("BJ7QSP");
test_math_cbrt(3.9389830577590534e+307);
test_math_cbrt("PYMFG6");
test_math_cbrt(-179);
test_math_cbrt(566);
test_math_cbrt(28);
test_math_cbrt(668);
test_math_cbrt("OR1PRHM8");
test_math_cbrt("76UZLQ6");
test_math_cbrt(2.549761167876142e+307);
test_math_cbrt(-75);
test_math_cbrt(1.4890482603291402e+308);
test_math_cbrt("8797O9");
test_math_cbrt(838);
test_math_cbrt(1.7088029435367167e+308);
test_math_cbrt(7.555540103310301e+307);
test_math_cbrt("WKEUHS");
test_math_cbrt(1.019999159595146e+308);
test_math_cbrt(-993);
test_math_cbrt(1.7759221353675292e+308);
test_math_cbrt(1.1164672112225988e+308);
test_math_cbrt(-325);
test_math_cbrt("JV1DCNVL");
test_math_cbrt("H5CZ4W2V3");
test_math_cbrt("2MFOT");
test_math_cbrt("AMFCSMBCV");
test_math_cbrt("4JCT");
test_math_cbrt(-507);
test_math_cbrt(-719);
test_math_cbrt("9H125G");
test_math_cbrt("Y3393Q6PUP");
test_math_cbrt("XDQI0");
test_math_cbrt(-421);
test_math_cbrt("D7QLCB73");
test_math_cbrt(188);
test_math_cbrt("IHPE");
test_math_cbrt(106);
test_math_cbrt(-723);
test_math_cbrt(6.767659037373374e+307);
test_math_cbrt(1.1779715580727265e+308);
test_math_cbrt(1.1825863363010669e+308);
test_math_cbrt("V2V8HTN");
test_math_cbrt(1.1460258179758208e+308);
test_math_cbrt("ANR");
test_math_cbrt(4.2466608799353635e+306);
test_math_cbrt(2.9829124487013626e+307);
test_math_cbrt(1.7871335380608528e+308);
test_math_cbrt(-963);
test_math_cbrt(1.0824169177494826e+307);
test_math_cbrt("R1O7ZRVY9D");
test_math_cbrt("1EDOTMO107");
test_math_cbrt(1.4088230612952895e+308);
test_math_cbrt(5.519894996480422e+307);
test_math_cbrt("B45IA");
test_math_cbrt("TFN");
test_math_cbrt(1.4155462203754083e+308);
test_math_cbrt(-217);
test_math_cbrt(6.448010257430954e+307);
test_math_cbrt(1.2822555999257542e+308);
test_math_cbrt("KPLJ");
test_math_cbrt("0Q7PO");
test_math_cbrt(-227);
test_math_cbrt(1.155754623533326e+308);
test_math_cbrt(-821);
test_math_cbrt("D22RICH");
test_math_cbrt(-667);
test_math_cbrt(1.6243571439329942e+308);
test_math_cbrt(650);
test_math_cbrt(354);
test_math_cbrt(6.40753425080583e+307);
test_math_cbrt(-95);
test_math_cbrt(3.4476444532167986e+307);
test_math_cbrt(-733);
test_math_cbrt(408);
test_math_cbrt(3.87018099673281e+307);
test_math_cbrt("1DN0MFRWOO");
test_math_cbrt(22);
test_math_cbrt(0x1123);
test_math_cbrt(324);
test_math_cbrt(1.4409782903013368e+308);
test_math_cbrt(502);
test_math_cbrt("LYVODBT1CF");
test_math_cbrt(1.4352879263752895e+308);
test_math_cbrt("ND393V6Y");
test_math_cbrt("XD24NRW9XB");
test_math_cbrt(596);
test_math_cbrt(1.52938041958579e+308);
test_math_cbrt("G6IEIRC");
test_math_cbrt(6.181862622308067e+307);
test_math_cbrt(6.057825126827234e+307);
test_math_cbrt(1.6308772637117457e+308);
test_math_cbrt(6.104008550329259e+307);
test_math_cbrt("AKQQFZF9E2");
test_math_cbrt("XZF313D");
test_math_cbrt(-571);
test_math_cbrt(7.430253453598896e+307);
test_math_cbrt("3A1BZ9");
test_math_cbrt(938);
test_math_cbrt("G8LKJ3Z");
test_math_cbrt(5.108859733863032e+307);
test_math_cbrt(-567);
test_math_cbrt(452);
test_math_cbrt(1.4036712862106877e+307);
test_math_cbrt(1.2268467262050137e+308);
test_math_cbrt(738);
test_math_cbrt(-913);
test_math_cbrt(3.001370385000412e+307);
test_math_cbrt("QKL");
test_math_cbrt(-149);
test_math_cbrt("3N1");
test_math_cbrt(1.7679201415197606e+308);
test_math_cbrt(1.1086748851142842e+308);
test_math_cbrt(1.3201308434736377e+308);
test_math_cbrt(-237);
test_math_cbrt(1.0551283480370402e+308);
test_math_cbrt("1PFQ2UNGJ");
test_math_cbrt(192);
test_math_cbrt(5.704805332345956e+307);
test_math_cbrt(158);
test_math_cbrt("RIA");
test_math_cbrt(6.491027875333978e+307);
test_math_cbrt(1.5074728703679005e+308);
test_math_cbrt(8.622731626003035e+307);
test_math_cbrt(1.7010619608092056e+308);
test_math_cbrt(1.430958919918709e+308);
test_math_cbrt(3.380946764773394e+307);
test_math_cbrt("3FT8RN8");
test_math_cbrt("BV223Y2SMR");
test_math_cbrt(936);
test_math_cbrt(0);
test_math_cbrt(1.2247555795457754e+308);
test_math_cbrt(942);
test_math_cbrt(1.1771121229752085e+308);
test_math_cbrt(1.4483533991591756e+308);
test_math_cbrt(1.102761712951147e+308);
test_math_cbrt("DFXYTUTR80");
test_math_cbrt("AR3O");
test_math_cbrt("TLS");
test_math_cbrt(-621);
test_math_cbrt(-647);
test_math_cbrt(774);
test_math_cbrt("VP61");
test_math_cbrt(6.650677677442248e+307);
test_math_cbrt(2.7154628899834713e+306);
test_math_cbrt("E0RS6GU078");
test_math_cbrt("74NLST");
test_math_cbrt(1.3844393183284064e+308);
test_math_cbrt(-741);
test_math_cbrt(1.640361785278994e+308);
test_math_cbrt("EGCVVSIYU7");
test_math_cbrt(5.593850319635856e+307);
test_math_cbrt("8UZK7LB1K");
test_math_cbrt("USQDXUR");
test_math_cbrt("W5E74X0R");
test_math_cbrt(614);
test_math_cbrt("N5KWPI");
test_math_cbrt(244);
test_math_cbrt(836);
test_math_cbrt(7.479379083188314e+307);
test_math_cbrt("4M0BSSP");
test_math_cbrt(704);
test_math_cbrt("RGJDF");
test_math_cbrt("8L7S4EV");
test_math_cbrt(4.320380429192173e+307);
test_math_cbrt("TUZFQFHDU");
test_math_cbrt(990);
test_math_cbrt(1.6858686880818738e+307);
test_math_cbrt(634);
test_math_cbrt(9.790152480359993e+307);
test_math_cbrt(-931);
test_math_cbrt("99C77B");
test_math_cbrt(162);
test_math_cbrt(2.3774613282142417e+307);
test_math_cbrt("C03R3A1");
test_math_cbrt(1.1922380480020067e+308);
test_math_cbrt(1.7533084916993728e+308);
test_math_cbrt(760);
test_math_cbrt(2.2431036917542758e+306);
test_math_cbrt("IU21W77VL");
test_math_cbrt(1.027651239562504e+308);
test_math_cbrt(376);
test_math_cbrt("7SEO6FK");
test_math_cbrt(3.1415926);
test_math_cbrt(1.5205922254663785e+308);
test_math_cbrt(5.031022960225126e+306);
test_math_cbrt(4.135581260956645e+307);
test_math_cbrt(104);
test_math_cbrt("1P0K6KX");
test_math_cbrt("6MG42ND");
test_math_cbrt("SXGEK");
test_math_cbrt("31QN");
test_math_cbrt("4PTC3");
test_math_cbrt(740);
test_math_cbrt(3.645547607089099e+307);
test_math_cbrt("MGJXZ3TV");
test_math_cbrt("KP7AC139N");
test_math_cbrt(-183);
test_math_cbrt(1.346657067133919e+308);
test_math_cbrt(1.3805652889486906e+308);
test_math_cbrt(1.610119303006191e+308);
test_math_cbrt("3MGHG");
test_math_cbrt(9.40103735744577e+307);
test_math_cbrt(1.6946409355872336e+308);
test_math_cbrt(-939);
test_math_cbrt(3.302295037498638e+307);
test_math_cbrt(-1);
test_math_cbrt("D9TY50P");
test_math_cbrt(276);
test_math_cbrt(-137);
test_math_cbrt(-927);
test_math_cbrt(1.1449259678654194e+307);
test_math_cbrt(1.307319657971075e+308);
test_math_cbrt(1.6344010037664692e+307);
test_math_cbrt("PSN7W");
test_math_cbrt(174);
test_math_cbrt("CS20YI84HD");
test_math_cbrt("9D8V9");
test_math_cbrt(9.37829863727499e+307);
test_math_cbrt("X8DK4");
test_math_cbrt(1.6644128151561803e+307);
test_math_cbrt("SGW20NCAJU");
test_math_cbrt(7.732690699990623e+307);
test_math_cbrt("NPJUFY4P");
test_math_cbrt("2KLHVOELNG");
test_math_cbrt(390);
test_math_cbrt(442);
test_math_cbrt("L1ECK0NCQC");
test_math_cbrt("3YRJWN6HB");
test_math_cbrt(5.585917705678821e+307);
test_math_cbrt("TQSCU57I");
test_math_cbrt(7.055293042878639e+305);
test_math_cbrt(1.720742106219189e+308);
test_math_cbrt(944);
test_math_cbrt(-529);
test_math_cbrt(1.1497107724589417e+308);
test_math_cbrt(1.5325935132369556e+308);
test_math_cbrt(6.183367346266746e+307);
test_math_cbrt("NJ6K590F0");
test_math_cbrt(496);
test_math_cbrt(1.5815718780535987e+308);
test_math_cbrt(798);
test_math_cbrt(-859);
test_math_cbrt("W3V2H");
test_math_cbrt(-715);
test_math_cbrt("Z66U3");
test_math_cbrt(3.223083269826313e+307);
test_math_cbrt("DJS");
test_math_cbrt("Q8DAO4RML");
test_math_cbrt(1.1067625962848213e+308);
test_math_cbrt(-347);
test_math_cbrt(1.7565392640101456e+308);
test_math_cbrt("3HEQUUR9");
test_math_cbrt(-995);
test_math_cbrt(-251);
test_math_cbrt(1.247139235784047e+308);
test_math_cbrt(1.3723569675598901e+308);
test_math_cbrt(2.643019472786855e+307);
test_math_cbrt(5.64388182629727e+307);
test_math_cbrt(3.266436929925874e+307);
test_math_cbrt("22E2IB41");
test_math_cbrt("XF51F");
test_math_cbrt(262);
test_math_cbrt(-657);
test_math_cbrt("42PK1NNV1Z");
test_math_cbrt(-795);
test_math_cbrt(6.482060021392358e+307);
test_math_cbrt("6WHRI86P");
test_math_cbrt("Z9M65U9D");
test_math_cbrt(1.731404266819098e+308);
test_math_cbrt("ALHQX6RO");
test_math_cbrt(6.96514008378847e+307);
test_math_cbrt(-747);
test_math_cbrt(4.36499731179567e+307);
test_math_cbrt(344);
test_math_cbrt(2.2109342562360646e+307);
test_math_cbrt(8.715124328990999e+307);
test_math_cbrt("K8FKR");
test_math_cbrt(1.2808996004164772e+308);
test_math_cbrt("MMXG3J6GC");
test_math_cbrt("UQUONX8H");
test_math_cbrt("WQHRC");
test_math_cbrt("WIH8Y9K6");
test_math_cbrt(8.982297692339535e+307);
test_math_cbrt("7UPZ1");
test_math_cbrt(117);
test_math_cbrt("ETDF");
test_math_cbrt(6.557760630996911e+307);
test_math_cbrt(-231);
test_math_cbrt(1.0870001102835621e+308);
test_math_cbrt(1.3521716192049978e+308);
test_math_cbrt(1.796194669108272e+308);
test_math_cbrt(-465);
test_math_cbrt("JB98DZM");
test_math_cbrt(-645);
test_math_cbrt("M9NKA1S19B");
test_math_cbrt("7CNU7KSQRG");
test_math_cbrt("UA4QM");
test_math_cbrt(1.7550262773826992e+308);
test_math_cbrt(1.1211534009318745e+308);
test_math_cbrt(-701);
test_math_cbrt(7.513953304203665e+307);
test_math_cbrt("6164TCXP");
test_math_cbrt(4.545571209972473e+307);
test_math_cbrt("K8RP6C");
test_math_cbrt("ENZY");
test_math_cbrt(166);
test_math_cbrt(1.7825815608493742e+308);
test_math_cbrt(3.82664834200003e+307);
test_math_cbrt("J3A");
test_math_cbrt(512);
test_math_cbrt(726);
test_math_cbrt(140);
test_math_cbrt("QEOH5MRHW");
test_math_cbrt("5DXZNG8");
test_math_cbrt(3.654407944125034e+307);
test_math_cbrt("U46");
test_math_cbrt(9.216886855687165e+307);
test_math_cbrt(8.376288013163273e+307);
test_math_cbrt(-535);
test_math_cbrt("UX9BGARK2");
test_math_cbrt(1.2145552831119144e+308);
test_math_cbrt(-417);
test_math_cbrt(622);
test_math_cbrt("P4D6");
test_math_cbrt(-879);
test_math_cbrt(4.820870362161341e+307);
test_math_cbrt(-335);
test_math_cbrt("NT4E4J10OJ");
test_math_cbrt(1.4515936383372153e+308);
test_math_cbrt(1.6881600459327132e+308);
test_math_cbrt("CRMBRX0");
test_math_cbrt("9YPYZ0RQC");
test_math_cbrt(8.66123858037864e+307);
test_math_cbrt("Y41U");
test_math_cbrt("CAAD");
test_math_cbrt("CE2TWNMS7");
test_math_cbrt("V7KO08H");
test_math_cbrt(458);
test_math_cbrt(1.49768722284039e+308);
test_math_cbrt(1.0845143837272857e+308);
test_math_cbrt("XLIKQRJYA");
test_math_cbrt("29OEA");
test_math_cbrt(-433);
test_math_cbrt(350);
test_math_cbrt("7GNT5");
test_math_cbrt(8.177816022714717e+307);
test_math_cbrt(284);
test_math_cbrt(-825);
test_math_cbrt("FIQ");
test_math_cbrt(1.1470605638739403e+308);
test_math_cbrt("LX67BW");
test_math_cbrt(-891);
test_math_cbrt("LGTDC8A");
test_math_cbrt("9K34S23");
test_math_cbrt(-869);
test_math_cbrt(-173);
test_math_cbrt("XQ1YZ2L");
test_math_cbrt(1.162246688829049e+308);
test_math_cbrt(2.1616130794583205e+307);
test_math_cbrt("QJ5Q");
test_math_cbrt(1.0081666058761628e+308);
test_math_cbrt(1.7707036092293872e+308);
test_math_cbrt("RC02");
test_math_cbrt(3.7261675113612734e+306);
test_math_cbrt(-277);
test_math_cbrt("AOGD07D42P");
test_math_cbrt(9.352728838288697e+307);
test_math_cbrt(410);
test_math_cbrt("QNEZCUOZ");
test_math_cbrt(1.0103153861443069e+308);
test_math_cbrt(190);
test_math_cbrt(7.046806119928516e+307);
test_math_cbrt(3.1793610403463406e+307);
test_math_cbrt("24U");
test_math_cbrt(-623);
test_math_cbrt(1.7145059187195474e+308);
test_math_cbrt(1.6275275491462221e+308);
test_math_cbrt(394);
test_math_cbrt("P2QJ");
test_math_cbrt(94);
test_math_cbrt(382);
test_math_cbrt(466);
test_math_cbrt(1.753194160466046e+307);
test_math_cbrt(1.4530627984862936e+307);
test_math_cbrt(7.294747092293342e+307);
test_math_cbrt("RMYF");
test_math_cbrt(-129);
test_math_cbrt(530);
test_math_cbrt(9.761478169480907e+307);
test_math_cbrt("E22C");
test_math_cbrt(-379);
test_math_cbrt(1.1082844247081635e+308);
test_math_cbrt("PYCBG");
test_math_cbrt("INO");
test_math_cbrt(894);
test_math_cbrt("OHD455SXF");
