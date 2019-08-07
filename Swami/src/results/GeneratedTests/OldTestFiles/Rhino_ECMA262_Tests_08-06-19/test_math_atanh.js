/*
* This file is automatically generated by Swami
*
* 2019-08-06 12:45:10.523502
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
function test_math_atanh(x){
	if (Object.is( x,NaN )){
		var output = Math.atanh(x);
		new TestCase("math_atanh", "math_atanh", NaN, output);
		test();
		return;
		}
	if (( x < - 1 )){
		var output = Math.atanh(x);
		new TestCase("math_atanh", "math_atanh", NaN, output);
		test();
		return;
		}
	if (( x > 1 )){
		var output = Math.atanh(x);
		new TestCase("math_atanh", "math_atanh", NaN, output);
		test();
		return;
		}
	if (( x === - 1 )){
		var output = Math.atanh(x);
		new TestCase("math_atanh", "math_atanh", - Infinity, output);
		test();
		return;
		}
	if (( x === + 1 )){
		var output = Math.atanh(x);
		new TestCase("math_atanh", "math_atanh", + Infinity, output);
		test();
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.atanh(x);
		new TestCase("math_atanh", "math_atanh", + 0, output);
		test();
		return;
		}
	if (( x === - 0 )){
		var output = Math.atanh(x);
		new TestCase("math_atanh", "math_atanh", - 0, output);
		test();
		return;
		}
}



/*TESTS GENERATED AUTOMATICALLY*/
test_math_atanh(-473);
test_math_atanh(/yes.*day/);
test_math_atanh(true);
test_math_atanh("4R75DAGVP4");
test_math_atanh("GCO");
test_math_atanh(5.402943827116013e+307);
test_math_atanh(-431);
test_math_atanh("3AD2L");
test_math_atanh(/ab+c/);
test_math_atanh(Infinity);
test_math_atanh(-833);
test_math_atanh(1.4458294067812311e+308);
test_math_atanh(/foo/g);
test_math_atanh(1.6746179307049999e+308);
test_math_atanh(1.7820994702906115e+308);
test_math_atanh(false);
test_math_atanh(+0);
test_math_atanh(-273);
test_math_atanh("LV3L3SWY");
test_math_atanh("Z24DKP");
test_math_atanh(-241);
test_math_atanh(/[\u0400-\u04FF]+/g);
test_math_atanh("DUP63");
test_math_atanh(9.369044639282978e+307);
test_math_atanh(/\r\n|\r|\n/);
test_math_atanh(undefined);
test_math_atanh(-85);
test_math_atanh(-93);
test_math_atanh(-845);
test_math_atanh(1.0745077707178285e+308);
test_math_atanh(-221);
test_math_atanh(NaN);
test_math_atanh(1.6872938677059306e+308);
test_math_atanh(-293);
test_math_atanh(6.413963437728079e+306);
test_math_atanh("O7VYCC");
test_math_atanh(null);
test_math_atanh(-505);
test_math_atanh(-695);
test_math_atanh(8.524434959641108e+307);
test_math_atanh("PWXE44RCYE");
test_math_atanh("3GS721PQF");
test_math_atanh(-847);
test_math_atanh("KLVZAF");
test_math_atanh(/[^.]+/);
test_math_atanh(1.209351468894274e+307);
test_math_atanh(-913);
test_math_atanh(4.3539959543086546e+306);
test_math_atanh(-129);
test_math_atanh("L2T4C");
test_math_atanh(9.57993600452711e+307);
test_math_atanh(7.134936954293996e+307);
test_math_atanh(-321);
test_math_atanh(1.1233346552583859e+308);
test_math_atanh(-0);
test_math_atanh("BED7");
test_math_atanh(-183);
test_math_atanh(-269);
test_math_atanh("UMKA74CCT");
test_math_atanh("W2T");
test_math_atanh(-149);
test_math_atanh(2.3407583316784843e+307);
test_math_atanh("N42");
test_math_atanh("LRCED59P");
test_math_atanh("2RZCF19");
test_math_atanh("FZMCLU3UD");
test_math_atanh(1.7473443422741059e+308);
test_math_atanh(1.4850287780319344e+308);
test_math_atanh(/(\w+)\s(\w+)/);
test_math_atanh(-71);
test_math_atanh("6OLDT");
test_math_atanh("8RYNIT");
test_math_atanh("NAR6MZ");
test_math_atanh("PFCCU");
test_math_atanh(/yes[^]*day/);
test_math_atanh(-387);
test_math_atanh(1.126024011026184e+308);
test_math_atanh(-213);
test_math_atanh(1.6414937436562224e+308);
test_math_atanh(1.1159277696287467e+308);
test_math_atanh(1.0807463291688648e+308);
test_math_atanh(2.9882072948452846e+307);
test_math_atanh(-861);
test_math_atanh("QB1F");
test_math_atanh(-179);
test_math_atanh(7.33291025597551e+307);
test_math_atanh(-467);
test_math_atanh("KSK");
test_math_atanh("73DOMD4I88");
test_math_atanh(6.035096592809492e+307);
test_math_atanh(1.540104447902866e+308);
test_math_atanh("SYRVEZ");
test_math_atanh(-651);
test_math_atanh(1.298931077843796e+308);
test_math_atanh(-725);
test_math_atanh(-49);
test_math_atanh(9.441520431192018e+307);
test_math_atanh(8.709023627746357e+307);
test_math_atanh(5.230265391522132e+306);
test_math_atanh("TJO1L8K7F");
test_math_atanh("ZSSE0OC776");
test_math_atanh(-175);
test_math_atanh("6LDQ");
test_math_atanh("Y7YEOS");
test_math_atanh(-417);
test_math_atanh("V1JEP7");
test_math_atanh("Z7KRTW1");
test_math_atanh(-991);
test_math_atanh(8.554350157626525e+307);
test_math_atanh(-337);
test_math_atanh("UPR7Q54R7");
test_math_atanh(3.610496467284213e+307);
test_math_atanh(4.505308247237703e+307);
test_math_atanh(1.6004240050961797e+308);
test_math_atanh("O32");
test_math_atanh(1.670347431667259e+308);
test_math_atanh("HHITQ");
test_math_atanh(1.3765021117114465e+308);
test_math_atanh(-3);
test_math_atanh(5.731408065567391e+307);
test_math_atanh(8.86875745376981e+307);
test_math_atanh("H3BOWQD");
test_math_atanh(1.2645354624986136e+308);
test_math_atanh("GEEWAS");
test_math_atanh("EM9XZK4");
test_math_atanh(1.3958930811501615e+308);
test_math_atanh(-965);
test_math_atanh(1.0040554103138962e+308);
test_math_atanh(-139);
test_math_atanh("2P4P0LY");
test_math_atanh(-125);
test_math_atanh(-547);
test_math_atanh(-137);
test_math_atanh(-839);
test_math_atanh("PVML5");
test_math_atanh("H6N5L");
test_math_atanh(-613);
test_math_atanh("OUD");
test_math_atanh("LYW8R42");
test_math_atanh("QO0EI3A");
test_math_atanh(5.30843367164693e+307);
test_math_atanh("X1ZPRRN3S");
test_math_atanh(-889);
test_math_atanh(1.6716812908130173e+307);
test_math_atanh(1.3361431520920016e+308);
test_math_atanh("6SXX4");
test_math_atanh(5.613883669524747e+307);
test_math_atanh(1.145913612087915e+308);
test_math_atanh(-711);
test_math_atanh("62AH");
test_math_atanh(-733);
test_math_atanh(9.22075854004208e+307);
test_math_atanh("5R18ER");
test_math_atanh(-81);
test_math_atanh("7BPC0K");
test_math_atanh("JRLAX7");
test_math_atanh(1.2315615473093194e+308);
test_math_atanh("XOWBV");
test_math_atanh("XHBVNS5");
test_math_atanh("Q3N95MYF");
test_math_atanh(-763);
test_math_atanh(3.7147340900537416e+307);
test_math_atanh("ODWM");
test_math_atanh("XSOMB1");
test_math_atanh(-571);
test_math_atanh(7.487296896161897e+307);
test_math_atanh(1.5507056205540324e+307);
test_math_atanh(-209);
test_math_atanh(-669);
test_math_atanh(-705);
test_math_atanh("EPQSN");
test_math_atanh(-501);
test_math_atanh("LK2QTHV0");
test_math_atanh(1.7514712543334364e+308);
test_math_atanh("IXAJ09C");
test_math_atanh(-109);
test_math_atanh("DI0F0S1XA");
test_math_atanh(-809);
test_math_atanh(7.313830300317085e+307);
test_math_atanh("DATA36C");
test_math_atanh("9SFH3GY");
test_math_atanh(-897);
test_math_atanh("AHBP3LE");
test_math_atanh(-245);
test_math_atanh(1.5654181270017123e+308);
test_math_atanh(1.29614621266973e+308);
test_math_atanh(-401);
test_math_atanh(24);
test_math_atanh(1.0784279148306374e+308);
test_math_atanh(-741);
test_math_atanh("W9AW");
test_math_atanh("1CVQ9U");
test_math_atanh(-601);
test_math_atanh(8.480209329285896e+307);
test_math_atanh(3.925086655403074e+307);
test_math_atanh(1.1026767838700666e+308);
test_math_atanh("AVD8F8");
test_math_atanh(8.235529754702936e+307);
test_math_atanh(-523);
test_math_atanh(1.083888784613108e+308);
test_math_atanh("FPP4T9X");
test_math_atanh("ZVS");
test_math_atanh(-721);
test_math_atanh("69Q8Y6KF0R");
test_math_atanh(7.947246531382567e+305);
test_math_atanh(-513);
test_math_atanh(1.783549671770405e+308);
test_math_atanh(-829);
test_math_atanh("7EVTO9");
test_math_atanh(9.15839636191499e+307);
test_math_atanh(7.697634602793556e+307);
test_math_atanh(6.607477155534573e+307);
test_math_atanh(4.095382127349305e+307);
test_math_atanh(-199);
test_math_atanh(-691);
test_math_atanh(1.4418022959166865e+308);
test_math_atanh(2.766688525442103e+307);
test_math_atanh("1NPMLAH0WE");
test_math_atanh("3EVWRBI");
test_math_atanh("P9KDH7P3");
test_math_atanh(1.1979116152680301e+307);
test_math_atanh(-751);
test_math_atanh("ZST");
test_math_atanh("GY6EV6");
test_math_atanh("G7OG");
test_math_atanh(1.2816335656022678e+308);
test_math_atanh("LRVDA1FA");
test_math_atanh(-657);
test_math_atanh(-103);
test_math_atanh("0DASCC1");
test_math_atanh(-371);
test_math_atanh(1.837192023753888e+307);
test_math_atanh(1.6319260280845667e+308);
test_math_atanh(1.6940996766997292e+308);
test_math_atanh("J9IZJ2GMP");
test_math_atanh("TYH8KQ1DB");
test_math_atanh("ADX3V5V");
test_math_atanh(-283);
test_math_atanh(6.9354508007889e+307);
test_math_atanh("H7N");
test_math_atanh("RVK0");
test_math_atanh("JHU9WRA78");
test_math_atanh(-445);
test_math_atanh(1.0612170378776368e+308);
test_math_atanh(4.786808601749547e+307);
test_math_atanh(1.127096450049042e+308);
test_math_atanh(1.2932331500130624e+308);
test_math_atanh(-687);
test_math_atanh(1.7613736167522768e+308);
test_math_atanh(-357);
test_math_atanh("Q0D");
test_math_atanh(9.239420375914315e+307);
test_math_atanh(-683);
test_math_atanh("KL10RZ2UP");
test_math_atanh(-863);
test_math_atanh("4SOAU");
test_math_atanh(1.6966106243580173e+308);
test_math_atanh("1XRA0");
test_math_atanh(1.079725174485664e+308);
test_math_atanh("282YW");
test_math_atanh("8PT94");
test_math_atanh(8.748061462466468e+306);
test_math_atanh("WH7M4");
test_math_atanh(-493);
test_math_atanh(-225);
test_math_atanh(-869);
test_math_atanh(1.0293800218506952e+308);
test_math_atanh("NFRP2FLN");
test_math_atanh(2.8576639296362556e+307);
test_math_atanh(-903);
test_math_atanh(1.3881880499364555e+308);
test_math_atanh("5EYMFN");
test_math_atanh("9LEJ4LBF6F");
test_math_atanh("OXYSIZDA5V");
test_math_atanh(1.1967705172999967e+308);
test_math_atanh("KN7KWDCDI");
test_math_atanh(-857);
test_math_atanh("KNNUP4K");
test_math_atanh(-189);
test_math_atanh("7GG3VG");
test_math_atanh("BVEHGW5W");
test_math_atanh(1.490617058807409e+307);
test_math_atanh(4.2062637750893826e+306);
test_math_atanh(7.702106019840657e+307);
test_math_atanh(-673);
test_math_atanh(1.5848336921924292e+308);
test_math_atanh("SOMQJ3");
test_math_atanh(1.0712733003338323e+308);
test_math_atanh(-391);
test_math_atanh(2.992469942430224e+307);
test_math_atanh("YX7T0R");
test_math_atanh(4.800895647356074e+307);
test_math_atanh("QMAKYHFOVS");
test_math_atanh(2.2174846236008628e+307);
test_math_atanh("F4202D5RHE");
test_math_atanh("8JW4D3LV");
test_math_atanh(3.9750486183847947e+307);
test_math_atanh(5.529035081363424e+307);
test_math_atanh(6.72757167830046e+307);
test_math_atanh("4F32FLQ66M");
test_math_atanh(5.000403979628866e+307);
test_math_atanh("ZPVEY");
test_math_atanh("DRJ");
test_math_atanh(-697);
test_math_atanh("Q2Y3");
test_math_atanh("YW62W4VF");
test_math_atanh(-271);
test_math_atanh(1.2282875187803175e+308);
test_math_atanh(6.559935690701722e+307);
test_math_atanh(-927);
test_math_atanh("2G5YIW");
test_math_atanh("A9RN");
test_math_atanh(-9);
test_math_atanh(6.564487140714215e+305);
test_math_atanh("H6VDHC4CQ");
test_math_atanh(1.4631926917513582e+308);
test_math_atanh("W3GB7");
test_math_atanh("4GA73R");
test_math_atanh("5L48NWFM");
test_math_atanh(9.11359682325381e+307);
test_math_atanh(9.993275588499471e+307);
test_math_atanh(1.3372250138883167e+307);
test_math_atanh(-541);
test_math_atanh(1.1348867839799056e+308);
test_math_atanh(-67);
test_math_atanh(-875);
test_math_atanh("549GJ33D81");
test_math_atanh("KOXMGVD4G");
test_math_atanh(-39);
test_math_atanh(1.6208328251634172e+308);
test_math_atanh("BJ19J");
test_math_atanh(4.0562994123410803e+307);
test_math_atanh(-775);
test_math_atanh("EM9CFF0");
test_math_atanh(-443);
test_math_atanh("XH6RHD");
test_math_atanh(4.1247744028675377e+307);
test_math_atanh(8.785922525692065e+307);
test_math_atanh(7.265232902708429e+307);
test_math_atanh("2SY0IEI");
test_math_atanh("4ZAOVBLA");
test_math_atanh("T4FTF56H");
test_math_atanh("XJZTIZLL");
test_math_atanh("ICXT2");
test_math_atanh(-611);
test_math_atanh(-91);
test_math_atanh("F2Y1KF");
test_math_atanh(-169);
test_math_atanh(1.1113245513831245e+308);
test_math_atanh(5.660678053451784e+307);
test_math_atanh(1.379820450069688e+308);
test_math_atanh("0P27A");
test_math_atanh(1.4210271555924117e+308);
test_math_atanh("IC301QB");
test_math_atanh(7.956484198022654e+307);
test_math_atanh("GUH8KTG7US");
test_math_atanh(2.178149077193259e+307);
test_math_atanh(6.407212791976594e+307);
test_math_atanh(-335);
test_math_atanh(1.7911093968527634e+308);
test_math_atanh(3.8454344593695985e+307);
test_math_atanh(-25);
test_math_atanh(-37);
test_math_atanh("MVSLHX");
test_math_atanh(-567);
test_math_atanh(-899);
test_math_atanh("P6ESZJ95F");
test_math_atanh("DRTXMZ6AA");
test_math_atanh("WS7UT6P");
test_math_atanh("9FSEI8IS");
test_math_atanh(1.5249774055797839e+308);
test_math_atanh(-795);
test_math_atanh(3.5175106012796235e+306);
test_math_atanh(3.1687088824462726e+307);
test_math_atanh(1.3939499899902288e+308);
test_math_atanh(-163);
test_math_atanh("MX94VT");
test_math_atanh("CDMGN51XS");
test_math_atanh(1.6314455243052139e+308);
test_math_atanh(-679);
test_math_atanh("F5YCR");
test_math_atanh(-563);
test_math_atanh("0ZAUZWWXQ0");
test_math_atanh("9UB7I2UXN");
test_math_atanh(-291);
test_math_atanh(-261);
test_math_atanh(4.806136721668069e+307);
test_math_atanh("CJKSI");
test_math_atanh(1.2587513395509349e+308);
test_math_atanh("KFANI1");
test_math_atanh("KDRWQB");
test_math_atanh(1.0822216976670374e+308);
test_math_atanh(1.2273275397122804e+308);
test_math_atanh(6.592495331273223e+307);
test_math_atanh(1.1305371822214475e+308);
test_math_atanh(9.095376000249123e+307);
test_math_atanh(2.4125020152442444e+305);
test_math_atanh("EGO96QWP");
test_math_atanh(1.3933594725356756e+308);
test_math_atanh("EXDYD");
test_math_atanh("K4D4KR");
test_math_atanh(9.840568716691978e+307);
test_math_atanh(-623);
test_math_atanh(-519);
test_math_atanh("K8ZZ");
test_math_atanh(4.907583973245439e+307);
test_math_atanh(7.980386227049165e+307);
test_math_atanh(8.871523367789524e+307);
test_math_atanh("H5HB4");
test_math_atanh(-229);
test_math_atanh(1.377014444601737e+308);
test_math_atanh(1.227528585946783e+308);
test_math_atanh(7.080423853273969e+307);
test_math_atanh(-599);
test_math_atanh(-753);
test_math_atanh(3.307813730514232e+307);
test_math_atanh(1.631553164904351e+308);
test_math_atanh(1.1416452562991985e+308);
test_math_atanh("DBGI47OG9");
test_math_atanh(-7);
test_math_atanh(4.4897799076585847e+307);
test_math_atanh(1.16429365552968e+308);
test_math_atanh("2M6E");
test_math_atanh(4.618237659969884e+307);
test_math_atanh(3.7014747846116074e+307);
test_math_atanh("S7HOGM15W5");
test_math_atanh(-877);
test_math_atanh(7.437062067476231e+307);
test_math_atanh(-953);
test_math_atanh(3.296316038727504e+307);
test_math_atanh(1.3341803439292575e+308);
test_math_atanh("EC9");
test_math_atanh(1.1596594484784739e+308);
test_math_atanh(-197);
test_math_atanh(2.9489676087078126e+307);
test_math_atanh(-359);
test_math_atanh(-605);
test_math_atanh(-383);
test_math_atanh(1.016753958882307e+308);
test_math_atanh("1PGPWA2");
test_math_atanh("BX0LMD");
test_math_atanh(1.0987487186169896e+308);
test_math_atanh("B4N9LQGZZ4");
test_math_atanh(1.1322805651041735e+308);
test_math_atanh(1.6380506110208325e+308);
test_math_atanh("ZETZV3Y");
test_math_atanh(-143);
test_math_atanh("7G536");
test_math_atanh("HWIIYEV");
test_math_atanh(-817);
test_math_atanh("ULD4");
test_math_atanh(-805);
test_math_atanh(-819);
test_math_atanh(2.2398071169653962e+307);
test_math_atanh("X9PTS7UMFH");
test_math_atanh(1.3246398765661441e+308);
test_math_atanh(2.738132194977876e+307);
test_math_atanh(-843);
test_math_atanh("WC7");
test_math_atanh(9.372895100039116e+307);
test_math_atanh("6GSAMQ");
test_math_atanh("9XH");
test_math_atanh(2.333580097906785e+307);
test_math_atanh("K40");
test_math_atanh(-365);
test_math_atanh(-381);
test_math_atanh(1.957334781693225e+307);
test_math_atanh(1.3471260605936338e+308);
test_math_atanh(-783);
test_math_atanh(-437);
test_math_atanh(4.4176552594016804e+307);
test_math_atanh(-707);
test_math_atanh(1.1980240751252584e+307);
test_math_atanh(1.5509946560477524e+308);
test_math_atanh(-923);
test_math_atanh("2IL");
test_math_atanh(4.518066378043337e+307);
test_math_atanh(-837);
test_math_atanh(1.1176654755091107e+308);
test_math_atanh("8PJF11C");
test_math_atanh("ESUI1JYWN");
test_math_atanh("5YQSZ");
test_math_atanh("X1RRVF3");
test_math_atanh("89464BZAA");
test_math_atanh(8.423434646174786e+307);
test_math_atanh("JJVSAZYC8");
test_math_atanh("9H6J9AE44");
test_math_atanh("RR9UGE81");
test_math_atanh(4.956473891675895e+307);
test_math_atanh("JC5TOC9SS7");
test_math_atanh("A8DR2M6BV");
test_math_atanh("BHL2");
test_math_atanh(5.347163430903226e+307);
test_math_atanh("0YRW2D5P");
test_math_atanh(-597);
test_math_atanh("G724LTFE4");
test_math_atanh(-113);
test_math_atanh("7WW8");
test_math_atanh(7.92575492086797e+307);
test_math_atanh(4.833893842967586e+307);
test_math_atanh(6.304034872999792e+307);
test_math_atanh(1.171085060583804e+308);
test_math_atanh(8.251524400598249e+307);
test_math_atanh(9.351435812540874e+307);
test_math_atanh("XPFH");
test_math_atanh(-995);
test_math_atanh("TNTY");
test_math_atanh(-575);
test_math_atanh(-693);
test_math_atanh(1.6131014050431512e+308);
test_math_atanh(-439);
test_math_atanh(3.52484540893674e+307);
test_math_atanh(1.0442969146045731e+308);
test_math_atanh("6L4YU");
test_math_atanh(4.8535918683476914e+306);
test_math_atanh(-609);
test_math_atanh(7.072118280209001e+307);
test_math_atanh("RRD8R3HF1V");
test_math_atanh(-43);
test_math_atanh("Y98D9CWSHV");
test_math_atanh(1.3218069956720992e+308);
test_math_atanh("EN8");
test_math_atanh("NQ1L");
test_math_atanh("NQJ");
test_math_atanh("R31Z20");
test_math_atanh("FTTWI");
test_math_atanh("AO7A");
test_math_atanh(-731);
test_math_atanh(1.270566705792981e+308);
test_math_atanh("4DGLJ8P18");
test_math_atanh(-747);
test_math_atanh("JGRFZI7");
test_math_atanh("G1P9XJW");
test_math_atanh("PQOIH6");
test_math_atanh("CSAKYZAO");
test_math_atanh("ISWQ5J1HKW");
test_math_atanh(1.2615528526265827e+307);
test_math_atanh(-675);
test_math_atanh("9ND38HD");
test_math_atanh(-449);
test_math_atanh(-237);
test_math_atanh(5.734194578008881e+307);
test_math_atanh(-561);
test_math_atanh(1.6456690773830116e+308);
test_math_atanh("FQH2");
test_math_atanh(-453);
test_math_atanh("6BL36WS");
test_math_atanh("RI1FXP");
test_math_atanh("J49RFFL");
test_math_atanh("8A3B");
test_math_atanh(1.5175751027298383e+308);
test_math_atanh(-885);
test_math_atanh("YJE6G");
test_math_atanh(1.7224851175374926e+308);
test_math_atanh(1.272689745762821e+308);
test_math_atanh(1.7451681868975883e+308);
test_math_atanh("XEQRWYIFC");
test_math_atanh("ZFBAXVRZGG");
test_math_atanh(-15);
test_math_atanh("OTWSX");
test_math_atanh("7YPG8C9C");
test_math_atanh(-167);
test_math_atanh("DKHO9VH1");
test_math_atanh(1.5383844960936934e+307);
test_math_atanh(4.700903381151942e+307);
test_math_atanh(9.105572456844678e+307);
test_math_atanh("K7SG2GPPN");
test_math_atanh(-939);
test_math_atanh(1.2862183646468057e+308);
test_math_atanh(2.5226987018919825e+307);
test_math_atanh("RRIAL847");
test_math_atanh(6.090819518274556e+307);
test_math_atanh(4.409865632169544e+307);
test_math_atanh("001871");
test_math_atanh(2.025060169760034e+307);
test_math_atanh("WMC14MC4");
test_math_atanh(-665);
test_math_atanh("A18AO2P7DN");
test_math_atanh("SMNOS5OSCT");
test_math_atanh(1.1186670152623591e+308);
test_math_atanh("076S0");
test_math_atanh(-119);
test_math_atanh(8.626398069235077e+307);
test_math_atanh(1.7487067153566354e+308);
test_math_atanh(1.1167442554349672e+308);
test_math_atanh(-789);
test_math_atanh(2.5824526676184207e+307);
test_math_atanh("25G");
test_math_atanh("VKC2QCEZHI");
test_math_atanh(-919);
test_math_atanh(1.6567239102961628e+308);
test_math_atanh("1HY");
test_math_atanh(-677);
test_math_atanh(-111);
test_math_atanh(-631);
test_math_atanh(-915);
test_math_atanh(-349);
test_math_atanh("F3YKBZC4J");
test_math_atanh(1.6870947603137862e+308);
test_math_atanh(844);
test_math_atanh(492);
test_math_atanh(-249);
test_math_atanh("HUZEO");
test_math_atanh(-545);
test_math_atanh("ZF208");
test_math_atanh(-393);
test_math_atanh(-5);
test_math_atanh(6.229636500710691e+307);
test_math_atanh("ZJ3LM89");
test_math_atanh(1.3725085725765069e+308);
test_math_atanh(2.542436631672456e+307);
test_math_atanh(1.7825795692558187e+308);
test_math_atanh(3.7593556744571654e+307);
test_math_atanh(1.4042771498407484e+308);
test_math_atanh("73Z");
test_math_atanh(3.944167653610285e+307);
test_math_atanh(-585);
test_math_atanh(9.916519718462272e+307);
test_math_atanh(1.4620451611426696e+308);
test_math_atanh(6.644983661335353e+307);
test_math_atanh("82H");
test_math_atanh("B31VG");
test_math_atanh(3.9003163036905574e+307);
test_math_atanh(4.333555147487527e+306);
test_math_atanh("PM14QP4EFJ");
test_math_atanh("1DEBB1ND");
test_math_atanh(1.759330079088728e+308);
test_math_atanh(1.7704512809980583e+308);
test_math_atanh("TX8F3");
test_math_atanh(6.129994494342375e+307);
test_math_atanh(-297);
test_math_atanh("1MOCT7G2TG");
test_math_atanh(5.475157875806411e+307);
test_math_atanh("QUOI9GK");
test_math_atanh(6.940994688287997e+307);
test_math_atanh(8.679084646500761e+307);
test_math_atanh("JJCW045CR1");
test_math_atanh(5.625087545903168e+307);
test_math_atanh("XP6OV375");
test_math_atanh("4UPZHXD");
test_math_atanh("LO3DMW");
test_math_atanh(1.3736601113657547e+307);
test_math_atanh(-187);
test_math_atanh(-553);
test_math_atanh("X6GMTFRN");
test_math_atanh(7.401880100496912e+307);
test_math_atanh(-201);
test_math_atanh("TPSHSV8");
test_math_atanh(1.6386949120722434e+308);
test_math_atanh("NZE");
test_math_atanh("24IS63");
test_math_atanh(1.4202243837869081e+308);
test_math_atanh(-773);
test_math_atanh("UUK2RQ");
test_math_atanh(-429);
test_math_atanh("8MQRDKO0");
test_math_atanh(2.8906106058568464e+307);
test_math_atanh("RFL5TX");
test_math_atanh("PYIZNADPHS");
test_math_atanh("WZU");
test_math_atanh(-955);
test_math_atanh("0HFDWEQ");
test_math_atanh("K6XH");
test_math_atanh(1.3884937649493054e+308);
test_math_atanh("23I");
test_math_atanh(-83);
test_math_atanh("AF9P0S8");
test_math_atanh(1.3074596126148797e+308);
test_math_atanh(-583);
test_math_atanh(-181);
test_math_atanh(-993);
test_math_atanh("WZ7UTU");
test_math_atanh("NYYRCG5D5");
test_math_atanh(-35);
test_math_atanh("U2YS");
test_math_atanh(1.6797708839023487e+308);
test_math_atanh("M5Y61BZ1K");
test_math_atanh("LPE3122Y");
test_math_atanh("1K3");
test_math_atanh("X14A");
test_math_atanh("9G3WDD78A");
test_math_atanh(-151);
test_math_atanh(-735);
test_math_atanh(1.14488115471657e+308);
test_math_atanh("GW42GKF");
test_math_atanh("HTQ08NBY4");
test_math_atanh("5FKF660");
test_math_atanh(-379);
test_math_atanh(-689);
test_math_atanh("ESIYEQ");
test_math_atanh(-975);
test_math_atanh(268);
test_math_atanh(1.5271765068036564e+308);
test_math_atanh(-627);
test_math_atanh(1.7668204094870884e+308);
test_math_atanh(-491);
test_math_atanh(7.085486264695005e+307);
test_math_atanh(-419);
test_math_atanh("GLIDE");
test_math_atanh(9.319938947614244e+307);
test_math_atanh(1.2473044322955017e+308);
test_math_atanh("08NS");
test_math_atanh(9.847282555709461e+306);
test_math_atanh(9.24539994640099e+307);
test_math_atanh(-461);
test_math_atanh(6.580937672733417e+307);
test_math_atanh("VMGYFM");
test_math_atanh(-973);
test_math_atanh("Q5ZYP");
test_math_atanh("S20I9L");
test_math_atanh(-961);
test_math_atanh("3196LOXKN");
test_math_atanh(6.451958447300331e+307);
test_math_atanh("FS300Q4GN");
test_math_atanh("8NC5QN0QTU");
test_math_atanh(-65);
test_math_atanh(1.3204413742715657e+308);
test_math_atanh(-219);
test_math_atanh(-977);
test_math_atanh("79MGXLAL4");
test_math_atanh("62I9944AJ");
test_math_atanh(-653);
test_math_atanh("OV27YI");
test_math_atanh(8.232337574167691e+307);
test_math_atanh(1.4144035148896944e+308);
test_math_atanh(-287);
test_math_atanh("7NND");
test_math_atanh("QO0MAWBWUM");
test_math_atanh(8.125127234529085e+305);
test_math_atanh(-871);
test_math_atanh(6.325351460968158e+307);
test_math_atanh(-979);
test_math_atanh(-719);
test_math_atanh(-987);
test_math_atanh(-373);
test_math_atanh(-949);
test_math_atanh(3.8495900051680755e+307);
test_math_atanh(1.5665312660730444e+308);
test_math_atanh("HQD09X");
test_math_atanh("1DJHSR1CCO");
test_math_atanh(5.688883669379808e+306);
test_math_atanh(-729);
test_math_atanh("D3M3I8QU");
test_math_atanh(1.795371364550009e+308);
test_math_atanh("5EZ8VP2IR0");
test_math_atanh(8.206167200460737e+307);
test_math_atanh(1.252288705756365e+308);
test_math_atanh(1.571244756406792e+308);
test_math_atanh(-145);
test_math_atanh(2.7160252758538373e+307);
test_math_atanh("0O9");
test_math_atanh(6.937576354484714e+307);
test_math_atanh(1.367435822869385e+307);
test_math_atanh(-131);
test_math_atanh(4.635704358790799e+307);
test_math_atanh(1.7600464237027953e+308);
test_math_atanh(7.76805320411142e+307);
test_math_atanh(1.4565694899501454e+308);
test_math_atanh(-811);
test_math_atanh(1.4414037041571413e+308);
test_math_atanh("LA4TYKG3C");
test_math_atanh(1.6219211783064367e+308);
test_math_atanh(1.2283911778809181e+308);
test_math_atanh(1.191754426840047e+308);
test_math_atanh(1.0521256172587951e+308);
test_math_atanh(3.265841133522894e+307);
test_math_atanh(9.953506889635436e+307);
test_math_atanh(-985);
test_math_atanh("KSGPJ2B4VR");
test_math_atanh(1.3752976540431093e+308);
test_math_atanh("F1D");
test_math_atanh("ZFWARE3L0");
test_math_atanh(4.1128618033487063e+307);
test_math_atanh(1.1073164608740435e+308);
test_math_atanh("V8JQ");
test_math_atanh(-593);
test_math_atanh(1.3733249795810984e+308);
test_math_atanh("WA6");
test_math_atanh(9.176013792541019e+307);
test_math_atanh(-713);
test_math_atanh("J6N6UCQ");
test_math_atanh(1.0694572068419324e+308);
test_math_atanh("T5DE");
test_math_atanh("3W0");
test_math_atanh("OJPLW07H");
test_math_atanh(9.242125650031827e+307);
test_math_atanh(5.580250317792737e+307);
test_math_atanh("DLH4VQ0");
test_math_atanh(1.2273047731478478e+308);
test_math_atanh("XATBEOY9C");
test_math_atanh(-159);
test_math_atanh(3.7212562106414977e+307);
test_math_atanh(1.767745140109338e+308);
test_math_atanh(1.5749652821316937e+308);
test_math_atanh(8.614660879731104e+307);
test_math_atanh(-363);
test_math_atanh(1.473262649626506e+308);
test_math_atanh("WW6JYB");
test_math_atanh(-323);
test_math_atanh("HYAJQW");
test_math_atanh(6.670843408070918e+306);
test_math_atanh(9.590339589600648e+307);
test_math_atanh("ZM8XNJF5X");
test_math_atanh(-849);
test_math_atanh(1.2879091460637416e+308);
test_math_atanh("ELUKL5L7");
test_math_atanh("SU2UTR03");
test_math_atanh("F6OG80U");
test_math_atanh("V8WJUB");
test_math_atanh(9.56115067335767e+307);
test_math_atanh("KUK3FYLT7");
test_math_atanh(-313);
test_math_atanh("ZT6K1VMVC");
test_math_atanh(-307);
test_math_atanh("KLTIKLWY");
test_math_atanh(1.1746555064645324e+308);
test_math_atanh(1.4972026704205816e+308);
test_math_atanh(-259);
test_math_atanh(2.345661556365618e+307);
test_math_atanh(1.6344714459027008e+308);
test_math_atanh(-105);
test_math_atanh(7.186912237428666e+307);
test_math_atanh(7.732223014297768e+307);
test_math_atanh("QNDA8NV24");
test_math_atanh(-655);
test_math_atanh(-629);
test_math_atanh(-617);
test_math_atanh("5QXN1IXLRU");
test_math_atanh("S9YTDH1ZL9");
test_math_atanh("NNHO");
test_math_atanh(-495);
test_math_atanh("X6IU5J");
test_math_atanh(4.751306962654106e+307);
test_math_atanh(5.016289374645751e+307);
test_math_atanh(1.1498693083750156e+308);
test_math_atanh(-69);
test_math_atanh(-483);
test_math_atanh("2YNJBWV8");
test_math_atanh(5.108456489913391e+307);
test_math_atanh("7VVP6");
test_math_atanh(7.793605530282853e+307);
test_math_atanh("ZLH3FHSLI");
test_math_atanh(1.5053859360982185e+308);
test_math_atanh(9.583674809821382e+307);
test_math_atanh("INEC");
test_math_atanh(2.5087374392292016e+307);
test_math_atanh(-941);
test_math_atanh(-487);
test_math_atanh(-279);
test_math_atanh(-549);
test_math_atanh("0NC");
test_math_atanh(-191);
test_math_atanh(-891);
test_math_atanh(-263);
test_math_atanh("K294685");
test_math_atanh("FUPD0R");
test_math_atanh(1.034746491146576e+308);
test_math_atanh("71XD");
test_math_atanh("BGZI2AGXN");
test_math_atanh(-759);
test_math_atanh(808);
test_math_atanh(7.138466727152393e+307);
test_math_atanh("EEFH");
test_math_atanh(-1);
test_math_atanh(-815);
test_math_atanh(1.7593115332745166e+308);
test_math_atanh(1.6499422763349444e+308);
test_math_atanh("7KEE5C2AF");
test_math_atanh(1.1255854569553658e+308);
test_math_atanh("G1R");
test_math_atanh(-23);
test_math_atanh(9.322114773247355e+307);
test_math_atanh(1.1269186275223599e+308);
test_math_atanh(6.716958627737632e+307);
test_math_atanh(534);
test_math_atanh("K3IJMZ");
test_math_atanh("M3E");
test_math_atanh("3E8BO2");
test_math_atanh("B69S");
test_math_atanh(7.008853597663969e+307);
test_math_atanh(6.480352882529086e+307);
test_math_atanh(-339);
test_math_atanh("FTH4SJI8");
test_math_atanh("NL7");
test_math_atanh("ODFGOCCH4");
test_math_atanh("NEWY");
test_math_atanh(-441);
test_math_atanh("CEXR");
test_math_atanh(9.402957218635019e+306);
test_math_atanh(9.001370635291894e+307);
test_math_atanh(1.6484372828205729e+308);
test_math_atanh(-937);
test_math_atanh(1.1877778840017159e+308);
test_math_atanh(-285);
test_math_atanh(2.4533123395679263e+307);
test_math_atanh(-499);
test_math_atanh("XVN");
test_math_atanh(1.5634948655235074e+308);
test_math_atanh("QZYYW");
test_math_atanh(1.4153425014691854e+308);
test_math_atanh(-565);
test_math_atanh(1.64871069782008e+308);
test_math_atanh("L8R");
test_math_atanh(-709);
test_math_atanh(3.372446199724607e+306);
test_math_atanh(1.381450459022139e+308);
test_math_atanh(1.3789371281043905e+308);
test_math_atanh(1.1579789360429588e+308);
test_math_atanh(4.37957507814547e+307);
test_math_atanh("M8R");
test_math_atanh(-781);
test_math_atanh(-933);
test_math_atanh("Q8PMN");
test_math_atanh("IYSA4J");
test_math_atanh("IF8RVDH");
test_math_atanh(3.73322929901008e+307);
test_math_atanh(-957);
test_math_atanh(-645);
test_math_atanh(1.430781762375461e+307);
test_math_atanh(1.1896464495608229e+307);
test_math_atanh("M0ZO4");
test_math_atanh("TUC98JYVDO");
test_math_atanh(-895);
test_math_atanh("KXAQDN");
test_math_atanh(-569);
test_math_atanh(-457);
test_math_atanh("NZVPF84FF8");
test_math_atanh("84HVBPGC4E");
test_math_atanh("ZSGLHE");
test_math_atanh(1.4379447957979195e+308);
test_math_atanh(1.4159874420644608e+308);
test_math_atanh("TPJ6X");
test_math_atanh(1.5845331874580826e+308);
test_math_atanh(-799);
test_math_atanh(-317);
test_math_atanh(4.927090183618488e+307);
test_math_atanh("0R2MOQJ473");
test_math_atanh(1.6671627099972254e+308);
test_math_atanh(1.245638623944779e+308);
test_math_atanh(1.7076683961312515e+308);
test_math_atanh(5.31625622968479e+307);
test_math_atanh(4.601366809534719e+307);
test_math_atanh(-807);
test_math_atanh("QXV4Q");
test_math_atanh(1.3993067623580132e+308);
test_math_atanh("H6K5IUVZ");
test_math_atanh("JJ14");
test_math_atanh(1.2648305407569455e+308);
test_math_atanh("IXBN0AT");
test_math_atanh(1.5942136515488397e+308);
test_math_atanh("CGWVWRU");
test_math_atanh(1.25819819242007e+308);
test_math_atanh(4.156166474975992e+307);
test_math_atanh(-421);
test_math_atanh("7SIP641R");
test_math_atanh(8.359785062071074e+307);
test_math_atanh(-911);
test_math_atanh(9.294077804347143e+307);
test_math_atanh(5.470571592554452e+307);
test_math_atanh(-555);
test_math_atanh(8.969622968406764e+306);
test_math_atanh(3.7008078076835404e+307);
test_math_atanh(-717);
test_math_atanh("ZOXV7");
test_math_atanh("V742AVFRJ");
test_math_atanh(-301);
test_math_atanh(1.1228801276793079e+308);
test_math_atanh(3.699338782560911e+307);
test_math_atanh(1.749411904387214e+308);
test_math_atanh(1.7424299439143262e+308);
test_math_atanh(-947);
test_math_atanh(1.7611259325120683e+308);
test_math_atanh("FXZXED");
test_math_atanh(1.6353028212262706e+308);
test_math_atanh(7.338062617020017e+306);
test_math_atanh("M6MHKRJHG");
test_math_atanh(7.178568908874096e+307);
test_math_atanh(-637);
test_math_atanh(1.3843471648190082e+308);
test_math_atanh("UAG616J");
test_math_atanh(2.10675507914861e+307);
test_math_atanh("HEXPAYR");
test_math_atanh("ZS5HW");
test_math_atanh("RBEE51");
test_math_atanh(1.0664344377558889e+308);
test_math_atanh(7.485528773140197e+307);
test_math_atanh("0KNT2");
test_math_atanh("2M06H");
test_math_atanh(-699);
test_math_atanh("EKBE023");
test_math_atanh(2.794149762994043e+307);
test_math_atanh(4.252618965521779e+306);
test_math_atanh("7LT8");
test_math_atanh(1.3373508264643806e+308);
test_math_atanh(-785);
test_math_atanh(1.6450607223133025e+308);
test_math_atanh(2.1680360866141516e+307);
test_math_atanh(-243);
test_math_atanh("CCFWFAUI8");
test_math_atanh("C3RZ4IPWG");
