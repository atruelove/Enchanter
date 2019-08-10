/*
* This file is automatically generated by Swami
*
* 2019-08-07 16:48:15.534182
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
function test_math_cbrt(x){
	if (Object.is( x,NaN )){
		var output = Math.cbrt(x);
		new TestCase("math_cbrt", "math_cbrt", NaN, output);
		test();
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.cbrt(x);
		new TestCase("math_cbrt", "math_cbrt", + 0, output);
		test();
		return;
		}
	if (( x === - 0 )){
		var output = Math.cbrt(x);
		new TestCase("math_cbrt", "math_cbrt", - 0, output);
		test();
		return;
		}
	if (( x === + Infinity )){
		var output = Math.cbrt(x);
		new TestCase("math_cbrt", "math_cbrt", + Infinity, output);
		test();
		return;
		}
	if (( x === - Infinity )){
		var output = Math.cbrt(x);
		new TestCase("math_cbrt", "math_cbrt", - Infinity, output);
		test();
		return;
		}
}



/*TESTS GENERATED AUTOMATICALLY*/
test_math_cbrt(-613);
test_math_cbrt(/(\w+)\s(\w+)/);
test_math_cbrt(true);
test_math_cbrt(-0);
test_math_cbrt(-659);
test_math_cbrt(1.2138021572798417e+308);
test_math_cbrt(1.7875751815897898e+308);
test_math_cbrt(-971);
test_math_cbrt(null);
test_math_cbrt(/yes[^]*day/);
test_math_cbrt(/\r\n|\r|\n/);
test_math_cbrt(NaN);
test_math_cbrt(1.5546830691160123e+308);
test_math_cbrt(1.7954910115808396e+308);
test_math_cbrt(Infinity);
test_math_cbrt(1.5846260246809199e+308);
test_math_cbrt(+0);
test_math_cbrt("BNK6XAD");
test_math_cbrt(-463);
test_math_cbrt("6GM");
test_math_cbrt(6.101609438814197e+306);
test_math_cbrt(3.1865655210412675e+307);
test_math_cbrt("7ICW82");
test_math_cbrt("WFMIT");
test_math_cbrt(false);
test_math_cbrt(-171);
test_math_cbrt(2.457021746929521e+307);
test_math_cbrt(/[^.]+/);
test_math_cbrt(-737);
test_math_cbrt(8.344872872600522e+307);
test_math_cbrt(1.4054420248169654e+307);
test_math_cbrt("A6V");
test_math_cbrt(-445);
test_math_cbrt(-121);
test_math_cbrt("9MRW");
test_math_cbrt(1.1345628195672005e+308);
test_math_cbrt(7.33296598032351e+307);
test_math_cbrt(1.4033544062120777e+308);
test_math_cbrt(1.4513955121385474e+308);
test_math_cbrt(-205);
test_math_cbrt(-263);
test_math_cbrt(-297);
test_math_cbrt(1.2284587743768447e+308);
test_math_cbrt(1.701621676206451e+308);
test_math_cbrt("11ABEK12");
test_math_cbrt(3.4597008147733356e+307);
test_math_cbrt(/[\u0400-\u04FF]+/g);
test_math_cbrt("TJRMH5");
test_math_cbrt(7.525654166089861e+307);
test_math_cbrt("6FVHXZ9");
test_math_cbrt("UJ4");
test_math_cbrt("13AP");
test_math_cbrt("OO5OH6");
test_math_cbrt(/yes.*day/);
test_math_cbrt(9.568052512439514e+307);
test_math_cbrt("OY0OYQ");
test_math_cbrt(1.0961867688301942e+308);
test_math_cbrt("LIRWWUJWP");
test_math_cbrt("I6NK2TM660");
test_math_cbrt(-769);
test_math_cbrt(-943);
test_math_cbrt(-39);
test_math_cbrt(-399);
test_math_cbrt(1.3628455708091685e+308);
test_math_cbrt(1.0335949040278395e+308);
test_math_cbrt("CKLDAML");
test_math_cbrt(undefined);
test_math_cbrt(-271);
test_math_cbrt("J6AF");
test_math_cbrt(7.588557426468022e+307);
test_math_cbrt("1QK9");
test_math_cbrt("AXHFKT");
test_math_cbrt(-235);
test_math_cbrt("57E8FLI");
test_math_cbrt(1.5204052690106808e+308);
test_math_cbrt(8.402412038300032e+307);
test_math_cbrt(1.317978335960531e+308);
test_math_cbrt(-105);
test_math_cbrt(/foo/g);
test_math_cbrt(-109);
test_math_cbrt(-969);
test_math_cbrt("PEU");
test_math_cbrt(-485);
test_math_cbrt(-455);
test_math_cbrt(1.9731696783349213e+307);
test_math_cbrt(-363);
test_math_cbrt(-441);
test_math_cbrt(-159);
test_math_cbrt(4.2359251826285647e+307);
test_math_cbrt("ZZD2");
test_math_cbrt(-549);
test_math_cbrt(-793);
test_math_cbrt(1.0655577574377158e+308);
test_math_cbrt(-301);
test_math_cbrt("FP2VTS4YK");
test_math_cbrt("L8U");
test_math_cbrt("2SSYV");
test_math_cbrt(8.379147207308818e+307);
test_math_cbrt(-377);
test_math_cbrt("8ZPTMH");
test_math_cbrt(1.6563136133571596e+308);
test_math_cbrt(3.491669222785705e+307);
test_math_cbrt("YVZZA");
test_math_cbrt(1.330064185165475e+308);
test_math_cbrt(-11);
test_math_cbrt(-809);
test_math_cbrt(1.628481417170111e+308);
test_math_cbrt(1.1681147380847902e+308);
test_math_cbrt("O5F8");
test_math_cbrt("OL6CD");
test_math_cbrt(-421);
test_math_cbrt(1.1008430771641921e+308);
test_math_cbrt("FXQ9");
test_math_cbrt("EQML02TVAA");
test_math_cbrt(1.5659192857992167e+308);
test_math_cbrt(-597);
test_math_cbrt(1.5984049349245597e+308);
test_math_cbrt("P7L");
test_math_cbrt("D471GE");
test_math_cbrt("E4W");
test_math_cbrt("T9S70QM");
test_math_cbrt(5.191363265425664e+307);
test_math_cbrt(/ab+c/);
test_math_cbrt(-507);
test_math_cbrt(1.3804602436117624e+308);
test_math_cbrt(1.196247185532696e+308);
test_math_cbrt("NQS4");
test_math_cbrt("NBF17JN");
test_math_cbrt(-963);
test_math_cbrt("S1450M");
test_math_cbrt("5SJN2LE");
test_math_cbrt("1TW");
test_math_cbrt(8.700114086928879e+307);
test_math_cbrt("WWVO");
test_math_cbrt("BKNNCHEIVC");
test_math_cbrt(-209);
test_math_cbrt(-403);
test_math_cbrt(-47);
test_math_cbrt("ZBNG5SVSK");
test_math_cbrt(1.2730453137156234e+308);
test_math_cbrt(1.705556216795599e+308);
test_math_cbrt(8.717494206854848e+307);
test_math_cbrt(-221);
test_math_cbrt("UFYD9A4Q");
test_math_cbrt(7.297918489949714e+306);
test_math_cbrt(7.374704636581277e+307);
test_math_cbrt("FDR");
test_math_cbrt("0ZFG");
test_math_cbrt(-959);
test_math_cbrt(5.518463769638835e+305);
test_math_cbrt(-579);
test_math_cbrt(3.96531245530506e+307);
test_math_cbrt("2AG1A3U2SV");
test_math_cbrt(-17);
test_math_cbrt("60MQ");
test_math_cbrt(9.11815224714893e+307);
test_math_cbrt(1.7410055677444633e+307);
test_math_cbrt(-43);
test_math_cbrt(3.988912029347149e+307);
test_math_cbrt(6.446428163704091e+307);
test_math_cbrt("0QO");
test_math_cbrt("9QF6NBQC");
test_math_cbrt("K3AB");
test_math_cbrt(-861);
test_math_cbrt(1.3726372848944812e+308);
test_math_cbrt("R1IIRNUW");
test_math_cbrt(1.1228192035482812e+307);
test_math_cbrt("WF1N");
test_math_cbrt(7.183728364924891e+307);
test_math_cbrt(-331);
test_math_cbrt(7.45597822215571e+307);
test_math_cbrt("LSAR4YBK6");
test_math_cbrt(-195);
test_math_cbrt("4ZRG6");
test_math_cbrt(6.449742735837439e+307);
test_math_cbrt("XI1KVT");
test_math_cbrt(-565);
test_math_cbrt(1.7365407026806397e+308);
test_math_cbrt(1.5234143909462031e+308);
test_math_cbrt(644);
test_math_cbrt(-147);
test_math_cbrt(3.304681409475413e+307);
test_math_cbrt(1.020466257898374e+308);
test_math_cbrt(1.7085865908995169e+308);
test_math_cbrt("2K1");
test_math_cbrt("ICOMP");
test_math_cbrt("CMPM");
test_math_cbrt("ZG3HTV74QI");
test_math_cbrt("Z40RTW");
test_math_cbrt("R8I");
test_math_cbrt("ITQB9BS");
test_math_cbrt(5.285267049101479e+307);
test_math_cbrt(1.796745184863853e+308);
test_math_cbrt("F503WG");
test_math_cbrt(1.0408525990265526e+308);
test_math_cbrt("KE5O");
test_math_cbrt(638);
test_math_cbrt("QETCPC8");
test_math_cbrt(-211);
test_math_cbrt("6PKITLKOC");
test_math_cbrt(7.688169805798091e+307);
test_math_cbrt(-639);
test_math_cbrt("P2Y1");
test_math_cbrt(1.080123166250046e+308);
test_math_cbrt(8.785179092919466e+307);
test_math_cbrt(-673);
test_math_cbrt("4YZDRPP");
test_math_cbrt(-393);
test_math_cbrt("OY2K5");
test_math_cbrt(1.4310033107371534e+308);
test_math_cbrt(1.5168174602245364e+308);
test_math_cbrt(7.041032549124013e+307);
test_math_cbrt(-133);
test_math_cbrt("EI1LMF1");
test_math_cbrt(8.17345397249068e+307);
test_math_cbrt("LAPMD");
test_math_cbrt(1.6381523182255122e+308);
test_math_cbrt("HK6");
test_math_cbrt(-127);
test_math_cbrt(-157);
test_math_cbrt(1.6872165646268922e+308);
test_math_cbrt(-193);
test_math_cbrt(1.5874385634326928e+308);
test_math_cbrt(1.7794701842838936e+308);
test_math_cbrt(-145);
test_math_cbrt("DZX");
test_math_cbrt(3.1409465035300805e+306);
test_math_cbrt(1.3404118706262204e+307);
test_math_cbrt("GGVB1FX");
test_math_cbrt(-369);
test_math_cbrt(1.0642560145112295e+308);
test_math_cbrt("GQYV73952A");
test_math_cbrt(1.4515448807990378e+307);
test_math_cbrt(8.08556029556638e+307);
test_math_cbrt(-107);
test_math_cbrt("JKPGIF6R");
test_math_cbrt("BYCJ2");
test_math_cbrt(4.58670092664434e+307);
test_math_cbrt("C9GD017");
test_math_cbrt(1.2963069145835357e+308);
test_math_cbrt("J8YOI8");
test_math_cbrt("3TOICLNR");
test_math_cbrt("V75EVU");
test_math_cbrt("KPO");
test_math_cbrt(-713);
test_math_cbrt(1.4122840610322108e+308);
test_math_cbrt(9.31469792529676e+307);
test_math_cbrt("FFQ84");
test_math_cbrt("40M3RUZT");
test_math_cbrt(-5);
test_math_cbrt("Z0E");
test_math_cbrt(8.85312116955744e+307);
test_math_cbrt("IEV177S4");
test_math_cbrt(9.537124203896455e+306);
test_math_cbrt("SYP");
test_math_cbrt("Q4JTLJO");
test_math_cbrt(9.230739043049728e+307);
test_math_cbrt("7FC2");
test_math_cbrt("6GF2ZO5");
test_math_cbrt(5.0556873558852487e+306);
test_math_cbrt(1.6349540955643153e+308);
test_math_cbrt(1.7505765941457653e+308);
test_math_cbrt(1.3391471591670525e+308);
test_math_cbrt(-239);
test_math_cbrt("QKREYQIPS9");
test_math_cbrt(1.1115629009970758e+308);
test_math_cbrt("JW4Y8C63");
test_math_cbrt("6NVKU5");
test_math_cbrt(-721);
test_math_cbrt(5.536678295286461e+307);
test_math_cbrt(-361);
test_math_cbrt(8.759428998024672e+307);
test_math_cbrt("9VQAGUQCQ");
test_math_cbrt(9.64972678251719e+307);
test_math_cbrt(-879);
test_math_cbrt(4.573625727392208e+307);
test_math_cbrt("I6142");
test_math_cbrt(-341);
test_math_cbrt("51H99WSUW");
test_math_cbrt("GVJ04");
test_math_cbrt(8.7874281142412e+307);
test_math_cbrt("DIQJ");
test_math_cbrt(-191);
test_math_cbrt(-165);
test_math_cbrt(5.100041362787091e+307);
test_math_cbrt("79IPNZR");
test_math_cbrt("10V");
test_math_cbrt(-75);
test_math_cbrt("UNW");
test_math_cbrt("AS8EZN");
test_math_cbrt(-575);
test_math_cbrt(-877);
test_math_cbrt(1.301280800207114e+307);
test_math_cbrt(8.016391265482447e+307);
test_math_cbrt(8.958497741508524e+307);
test_math_cbrt("DMJ47XP");
test_math_cbrt(4.067834055708102e+307);
test_math_cbrt("D0EH7I");
test_math_cbrt(-503);
test_math_cbrt(4.816167741661194e+307);
test_math_cbrt(-325);
test_math_cbrt(-755);
test_math_cbrt(3.458435105331991e+307);
test_math_cbrt(-989);
test_math_cbrt(1.6958375393446583e+308);
test_math_cbrt(-435);
test_math_cbrt(5.055842390780615e+307);
test_math_cbrt(-689);
test_math_cbrt(1.7952936114948016e+308);
test_math_cbrt(8.405367644264478e+307);
test_math_cbrt("9UTX");
test_math_cbrt(-401);
test_math_cbrt(8.629477354990017e+307);
test_math_cbrt("UBG");
test_math_cbrt(1.0161720041803986e+308);
test_math_cbrt(-355);
test_math_cbrt(1.2048078180268274e+307);
test_math_cbrt(1.026720672346785e+308);
test_math_cbrt(-279);
test_math_cbrt("9EQ0NEVT0");
test_math_cbrt("PJM0TIMO8");
test_math_cbrt("QYLNO");
test_math_cbrt(-901);
test_math_cbrt(-199);
test_math_cbrt("OJU6HLEC");
test_math_cbrt(-383);
test_math_cbrt("E73EZ");
test_math_cbrt(-253);
test_math_cbrt(8.081756385234475e+307);
test_math_cbrt(1.7972037753326578e+308);
test_math_cbrt(9.019891568699298e+307);
test_math_cbrt("3IL");
test_math_cbrt(-643);
test_math_cbrt(-663);
test_math_cbrt(-941);
test_math_cbrt(6.812656670824081e+307);
test_math_cbrt(-229);
test_math_cbrt(-831);
test_math_cbrt(1.5251650177554254e+308);
test_math_cbrt(-155);
test_math_cbrt(6.771737871223815e+307);
test_math_cbrt("M5XA4CN");
test_math_cbrt(1.1973777209429784e+308);
test_math_cbrt(-55);
test_math_cbrt(-9);
test_math_cbrt(-1);
test_math_cbrt(-483);
test_math_cbrt(3.4124785959572077e+307);
test_math_cbrt(3.551766533965385e+307);
test_math_cbrt("W699QTU");
test_math_cbrt("2ACI");
test_math_cbrt("U37");
test_math_cbrt("XIWW");
test_math_cbrt(1.5241818136171763e+308);
test_math_cbrt("1EZ");
test_math_cbrt("5J35D3");
test_math_cbrt("LSD8");
test_math_cbrt(8.667272668495908e+307);
test_math_cbrt(8.775478815243175e+307);
test_math_cbrt(-303);
test_math_cbrt(1.5788918712397178e+307);
test_math_cbrt(-655);
test_math_cbrt(-275);
test_math_cbrt(-741);
test_math_cbrt(6.94373508931335e+307);
test_math_cbrt(-3);
test_math_cbrt("H2I");
test_math_cbrt(2.906843370219057e+307);
test_math_cbrt(-945);
test_math_cbrt(1.15024250571315e+308);
test_math_cbrt("AZ0LA");
test_math_cbrt(-69);
test_math_cbrt(4.9363773602772e+307);
test_math_cbrt("M1O");
test_math_cbrt(-937);
test_math_cbrt(1.5460804914461652e+308);
test_math_cbrt("LCQ4NO4D");
test_math_cbrt(-387);
test_math_cbrt("H5P2XAG");
test_math_cbrt("0CO3WFNGC");
test_math_cbrt("ZM36");
test_math_cbrt("XC1L17QF");
test_math_cbrt(-513);
test_math_cbrt(6.244101123010907e+307);
test_math_cbrt(-327);
test_math_cbrt(1.5812139324764401e+308);
test_math_cbrt("K6TH3PODRA");
test_math_cbrt("EQOTXU");
test_math_cbrt(-509);
test_math_cbrt(1.9913251619171754e+307);
test_math_cbrt(1.7070930044368789e+308);
test_math_cbrt("SYD8O4Z6O");
test_math_cbrt("EG9");
test_math_cbrt("2RY3E");
test_math_cbrt(3.161755445223912e+307);
test_math_cbrt(-987);
test_math_cbrt("L4M8");
test_math_cbrt(-591);
test_math_cbrt(1.251254409397605e+308);
test_math_cbrt("5AGTFUW");
test_math_cbrt(8.291776122514201e+307);
test_math_cbrt(1.231585449317922e+308);
test_math_cbrt(4.461014294981122e+307);
test_math_cbrt(-381);
test_math_cbrt(-843);
test_math_cbrt(1.3568097098283723e+308);
test_math_cbrt(-447);
test_math_cbrt(1.6342014022529073e+308);
test_math_cbrt(-529);
test_math_cbrt("VCCHEM55XO");
test_math_cbrt("HTOLFMQHN1");
test_math_cbrt(-379);
test_math_cbrt(1.1209928931850358e+308);
test_math_cbrt(5.483136551484209e+307);
test_math_cbrt(6.597869099907579e+307);
test_math_cbrt(1.366020390452745e+308);
test_math_cbrt("9IY2MCZA");
test_math_cbrt(-481);
test_math_cbrt(-563);
test_math_cbrt(-799);
test_math_cbrt(1.3479658828716908e+308);
test_math_cbrt(7.756183367608495e+307);
test_math_cbrt(-953);
test_math_cbrt(1.0104901826172797e+308);
test_math_cbrt(1.4638401287607732e+308);
test_math_cbrt(1.3012576874437537e+308);
test_math_cbrt(1.4174565063860838e+308);
test_math_cbrt("0HK");
test_math_cbrt(-491);
test_math_cbrt("M7I");
test_math_cbrt(-437);
test_math_cbrt(9.025191460954669e+307);
test_math_cbrt("LC3");
test_math_cbrt("U3YST");
test_math_cbrt(1.3389896721569385e+308);
test_math_cbrt(-871);
test_math_cbrt("7XWSSVO");
test_math_cbrt(1.4883282597527585e+308);
test_math_cbrt(2.3247940864181187e+307);
test_math_cbrt(1.0901326114736196e+308);
test_math_cbrt(8.976870530151274e+306);
test_math_cbrt(1.5480249030765067e+307);
test_math_cbrt("QZHS");
test_math_cbrt(1.5948372904646805e+308);
test_math_cbrt("0NGPQBBS1");
test_math_cbrt("S98BMB");
test_math_cbrt(8.418536984716867e+307);
test_math_cbrt(4.606707873809695e+307);
test_math_cbrt(6.671555835634118e+307);
test_math_cbrt("8W1LR8I");
test_math_cbrt(-593);
test_math_cbrt(5.512335011642579e+307);
test_math_cbrt(-957);
test_math_cbrt("9UMUPWTQTF");
test_math_cbrt("JIB0K9O84");
test_math_cbrt("15D3J088B4");
test_math_cbrt(328);
test_math_cbrt(2.407633560929905e+307);
test_math_cbrt(1.2584205848635535e+308);
test_math_cbrt("A0DK");
test_math_cbrt(1.276691727342428e+308);
test_math_cbrt(1.294919007192891e+307);
test_math_cbrt(-855);
test_math_cbrt(3.9352414721318366e+306);
test_math_cbrt(-429);
test_math_cbrt(1.2728547376120847e+308);
test_math_cbrt(-315);
test_math_cbrt("8U46KBG");
test_math_cbrt(-245);
test_math_cbrt(-531);
test_math_cbrt(1.0858644113585906e+308);
test_math_cbrt("2VA3");
test_math_cbrt("ISWGFU");
test_math_cbrt(8.708225816601418e+307);
test_math_cbrt("CYZZ");
test_math_cbrt(4.2739780388523714e+307);
test_math_cbrt(-201);
test_math_cbrt(-687);
test_math_cbrt(1.5040372179922113e+308);
test_math_cbrt(5.786405158054345e+307);
test_math_cbrt(4.3499989464741053e+307);
test_math_cbrt(1.5852446049268052e+308);
test_math_cbrt(2.203975870117235e+307);
test_math_cbrt("N861FPVYM8");
test_math_cbrt(-951);
test_math_cbrt(-665);
test_math_cbrt("L4D61NYU");
test_math_cbrt(-857);
test_math_cbrt(-413);
test_math_cbrt(4.401521464496578e+305);
test_math_cbrt(1.5347871805395111e+308);
test_math_cbrt("HP03DRY6K");
test_math_cbrt(-141);
test_math_cbrt(-131);
test_math_cbrt("8LDPD4");
test_math_cbrt("S2FL");
test_math_cbrt(5.384420065157842e+305);
test_math_cbrt(-961);
test_math_cbrt(-103);
test_math_cbrt("XYOKNU3QE1");
test_math_cbrt(2.1775780585097854e+307);
test_math_cbrt("CI71IDOZ");
test_math_cbrt(1.3016985464714287e+308);
test_math_cbrt(1.5239197496572435e+308);
test_math_cbrt(1.4928278686329464e+308);
test_math_cbrt("A433DJ");
test_math_cbrt(1.254046493202523e+308);
test_math_cbrt(4.673234041087463e+307);
test_math_cbrt(-185);
test_math_cbrt("E0C");
test_math_cbrt(-117);
test_math_cbrt("I12S9BZIS2");
test_math_cbrt(7.7540360021494675e+307);
test_math_cbrt(-391);
test_math_cbrt("GM9XFX");
test_math_cbrt("VWLWV5");
test_math_cbrt(-283);
test_math_cbrt(5.474736002664789e+307);
test_math_cbrt(-903);
test_math_cbrt("M5ZBX0");
test_math_cbrt("OCWKQHWI4");
test_math_cbrt(1.4109332057991126e+308);
test_math_cbrt("Q5MFE");
test_math_cbrt(1.5044404072470074e+308);
test_math_cbrt(-601);
test_math_cbrt(4.807347360798303e+306);
test_math_cbrt(1.4689885942871959e+308);
test_math_cbrt("9ASD4L");
test_math_cbrt("2HNZVA7");
test_math_cbrt(-237);
test_math_cbrt("L1UFR8W");
test_math_cbrt("YUIG1");
test_math_cbrt("GEZU6P");
test_math_cbrt(-829);
test_math_cbrt(1.501438900025823e+308);
test_math_cbrt("UE3VHZ");
test_math_cbrt(1.5925272468423674e+308);
test_math_cbrt(1.6369468556683272e+308);
test_math_cbrt(6.758203445373582e+307);
test_math_cbrt(1.997877806336113e+307);
test_math_cbrt("ZIUF");
test_math_cbrt(1.510999547600986e+308);
test_math_cbrt("N59");
test_math_cbrt(5.960164110739277e+307);
test_math_cbrt(5.290480270221803e+307);
test_math_cbrt("72L9K");
test_math_cbrt("JH1DJ");
test_math_cbrt(4.939280824408328e+307);
test_math_cbrt(-837);
test_math_cbrt("4RB");
test_math_cbrt(-427);
test_math_cbrt(3.2023014783272866e+307);
test_math_cbrt("IZKT8UCND");
test_math_cbrt(1.4725778272956302e+307);
test_math_cbrt("WCZXB9");
test_math_cbrt(4.520178197827993e+307);
test_math_cbrt(4.910107847013276e+307);
test_math_cbrt("6C96RN");
test_math_cbrt(8.739436857339183e+307);
test_math_cbrt("FXG");
test_math_cbrt(1.3628861765264215e+308);
test_math_cbrt(6.996467456776204e+307);
test_math_cbrt(-863);
test_math_cbrt(-225);
test_math_cbrt(-163);
test_math_cbrt("JAYP3INKZ");
test_math_cbrt(-569);
test_math_cbrt(-839);
test_math_cbrt(-111);
test_math_cbrt(-841);
test_math_cbrt("Z73GY6Q");
test_math_cbrt("ST5KNFN2B");
test_math_cbrt(-373);
test_math_cbrt("SRUVUHC99");
test_math_cbrt("EU2");
test_math_cbrt(1.0809014075738993e+308);
test_math_cbrt(9.696082313231277e+307);
test_math_cbrt(9.440523220482381e+307);
test_math_cbrt(1.7915669737540684e+308);
test_math_cbrt("8QI53TB");
test_math_cbrt(-699);
test_math_cbrt("TAP5O84");
test_math_cbrt(-311);
test_math_cbrt("47OPF");
test_math_cbrt(5.630611431872691e+307);
test_math_cbrt(1.0934558470071144e+308);
test_math_cbrt("IM5JUDM");
test_math_cbrt(9.271710750853289e+306);
test_math_cbrt("2REDXY");
test_math_cbrt("34RWO23I");
test_math_cbrt(1.0890833778686974e+307);
test_math_cbrt(-823);
test_math_cbrt("DFD9YFI5");
test_math_cbrt("7IUR0C");
test_math_cbrt("2XY0SC6");
test_math_cbrt(-651);
test_math_cbrt(5.889310505217613e+305);
test_math_cbrt(1.1656038307297221e+307);
test_math_cbrt(-571);
test_math_cbrt("DB4O");
test_math_cbrt("QNBL32BP");
test_math_cbrt(3.6868703495463193e+307);
test_math_cbrt(6.491032834010091e+305);
test_math_cbrt("1S712");
test_math_cbrt(1.7373333872007634e+308);
test_math_cbrt(-511);
test_math_cbrt(-773);
test_math_cbrt(952);
test_math_cbrt("VKAVJ4E20");
test_math_cbrt(1.7448238413933856e+308);
test_math_cbrt(1.5480949201611578e+308);
test_math_cbrt(1.139089141954275e+307);
test_math_cbrt(1.455825964834751e+307);
test_math_cbrt(1.3295857883318164e+308);
test_math_cbrt("SFCU1");
test_math_cbrt("9NC8BEWX9Y");
test_math_cbrt("ROB");
test_math_cbrt(9.083578124515285e+307);
test_math_cbrt(9.432386450418156e+307);
test_math_cbrt("79E");
test_math_cbrt(5.01825956735777e+306);
test_math_cbrt(-985);
test_math_cbrt(-981);
test_math_cbrt("741F");
test_math_cbrt(-153);
test_math_cbrt("FPID6");
test_math_cbrt(9.614869519660374e+307);
test_math_cbrt("D8U8AQ");
test_math_cbrt(9.002524043097794e+307);
test_math_cbrt(2.478038513021375e+307);
test_math_cbrt("N5SPK6Q");
test_math_cbrt(1.4897970360960932e+308);
test_math_cbrt(1.7010596043533378e+308);
test_math_cbrt("AWTZIQNOJ");
test_math_cbrt("2LFMV0KPGQ");
test_math_cbrt(-817);
test_math_cbrt(276);
test_math_cbrt(1.199499101995141e+308);
test_math_cbrt(-267);
test_math_cbrt("4ZVOL5C9YU");
test_math_cbrt(9.953488348566464e+307);
test_math_cbrt(1.345043557501675e+308);
test_math_cbrt("64A1XL1U8");
test_math_cbrt(5.708234593486235e+307);
test_math_cbrt(1.4433415503455462e+308);
test_math_cbrt("3HH79P");
test_math_cbrt(1.0074343760601229e+308);
test_math_cbrt("GI00J");
test_math_cbrt(8.540569077384855e+307);
test_math_cbrt("0OIKJ");
test_math_cbrt(1.751875224245292e+308);
test_math_cbrt(-149);
test_math_cbrt("NEJ5C");
test_math_cbrt(8.585836516260859e+307);
test_math_cbrt(-321);
test_math_cbrt(-751);
test_math_cbrt(1.6579730321849702e+307);
test_math_cbrt(4.931455873985098e+307);
test_math_cbrt(1.7847099139042698e+307);
test_math_cbrt("14EG49S9L");
test_math_cbrt(8.637388767390163e+307);
test_math_cbrt("E4E7");
test_math_cbrt(8.365624734523872e+307);
test_math_cbrt("WC7JPPVBI");
test_math_cbrt("QDFSHEK");
test_math_cbrt("3IQE1");
test_math_cbrt(-685);
test_math_cbrt("HPH3TYP");
test_math_cbrt(1.3544718598382227e+308);
test_math_cbrt("0WU9BIGD6");
test_math_cbrt("1AVNEH0");
test_math_cbrt(1.1644970698288567e+308);
test_math_cbrt("N4NTESIS");
test_math_cbrt(1.8597596463670569e+307);
test_math_cbrt(1.4506335427617114e+308);
test_math_cbrt("GU81");
test_math_cbrt("5LKY8AWO");
test_math_cbrt("6SVV1Z");
test_math_cbrt(1.0730455443967371e+308);
test_math_cbrt("H1CT40VM");
test_math_cbrt(-553);
test_math_cbrt("FWOB3WF");
test_math_cbrt(-581);
test_math_cbrt(-389);
test_math_cbrt("AJF5T");
test_math_cbrt("H95M7");
test_math_cbrt(5.851644488631921e+307);
test_math_cbrt(-657);
test_math_cbrt(-771);
test_math_cbrt("DXF8QGK");
test_math_cbrt(8.663088787781323e+307);
test_math_cbrt(3.787839242361463e+307);
test_math_cbrt("Z309");
test_math_cbrt(3.873579594537115e+307);
test_math_cbrt("AOS8DNL");
test_math_cbrt(8.272494529042965e+307);
test_math_cbrt(1.780814545613234e+308);
test_math_cbrt(7.372321634194401e+307);
test_math_cbrt(1.5777558711695646e+308);
test_math_cbrt("01UTMDCSNF");
test_math_cbrt(5.645169891401232e+306);
test_math_cbrt("PTW81ERLV");
test_math_cbrt("WYM7LH4R");
test_math_cbrt(1.5019514934030653e+308);
test_math_cbrt(5.467929951877833e+307);
test_math_cbrt(1.4526973692182044e+308);
test_math_cbrt("FBGD7WL89");
test_math_cbrt(1.6198990138659414e+308);
test_math_cbrt(4.383532971684009e+306);
test_math_cbrt("PGJQ");
test_math_cbrt("2C7HPT");
test_math_cbrt(1.7391502206657082e+307);
test_math_cbrt("T1AX");
test_math_cbrt(-63);
test_math_cbrt("2Y3");
test_math_cbrt(12);
test_math_cbrt(-557);
test_math_cbrt("Y4R");
test_math_cbrt("L4ZEABH8");
test_math_cbrt(1.582383005279863e+308);
test_math_cbrt(1.2692227703558765e+308);
test_math_cbrt("IQPVD");
test_math_cbrt("1P9I");
test_math_cbrt("IV9I");
test_math_cbrt(7.585529305271046e+307);
test_math_cbrt("GUK");
test_math_cbrt(-89);
test_math_cbrt(-305);
test_math_cbrt(1.7581840445802646e+307);
test_math_cbrt(-347);
test_math_cbrt(9.764811359399801e+307);
test_math_cbrt(1.6905857579954824e+308);
test_math_cbrt(-415);
test_math_cbrt(5.084407855333817e+307);
test_math_cbrt(1.1652629395702345e+308);
test_math_cbrt(-869);
test_math_cbrt(1.5863304103947873e+308);
test_math_cbrt(1.1842839225049405e+308);
test_math_cbrt(-765);
test_math_cbrt(1.627894487401115e+308);
test_math_cbrt("K5ON5SCMP");
test_math_cbrt(-33);
test_math_cbrt("7GZ1VPQ4K7");
test_math_cbrt(1.2619023083192276e+308);
test_math_cbrt("GLITXAT");
test_math_cbrt(-397);
test_math_cbrt(-967);
test_math_cbrt("9GH");
test_math_cbrt("L74Z14GO");
test_math_cbrt(9.149153472901404e+307);
test_math_cbrt("33ES");
test_math_cbrt(-223);
test_math_cbrt("75NL");
test_math_cbrt("EQTS3XYD");
test_math_cbrt(1.7663801354885562e+308);
test_math_cbrt(4.793884161355911e+307);
test_math_cbrt("FJ9773S8K");
test_math_cbrt("NWU4VQZ");
test_math_cbrt("L8VSRL0C");
test_math_cbrt(1.0430793501651759e+308);
test_math_cbrt(1.1882766307360369e+308);
test_math_cbrt(-919);
test_math_cbrt(1.4663604151790492e+307);
test_math_cbrt("WB9KC0K");
test_math_cbrt(4.8259282398150906e+306);
test_math_cbrt(-791);
test_math_cbrt(-747);
test_math_cbrt(-247);
test_math_cbrt("JZP5PD");
test_math_cbrt(9.67274343367355e+307);
test_math_cbrt(2.3212906880541266e+307);
test_math_cbrt(1.4974319938496226e+308);
test_math_cbrt(798);
test_math_cbrt("8UC3RH5");
test_math_cbrt("MW3AA7Y3");
test_math_cbrt(3.580221174822264e+307);
test_math_cbrt(-711);
test_math_cbrt(1.5810973406329841e+308);
test_math_cbrt("A9X2XNBUO");
test_math_cbrt(1.537752946466742e+308);
test_math_cbrt(6.203748324387876e+307);
test_math_cbrt("2CNAWHDK1");
test_math_cbrt(1.1421881698610667e+308);
test_math_cbrt("DL8GTM94Q");
test_math_cbrt(4.606823471907299e+307);
test_math_cbrt(9.956018473622686e+307);
test_math_cbrt(8.062793130177798e+307);
test_math_cbrt("LJ8HNVT");
test_math_cbrt(1.3963096772251123e+307);
test_math_cbrt(-807);
test_math_cbrt("6F1P1LT");
test_math_cbrt(1.6582410911979336e+308);
test_math_cbrt(6.529174444742908e+307);
test_math_cbrt(3.626557784199269e+307);
test_math_cbrt(-375);
test_math_cbrt("R3Z5WQ");
test_math_cbrt(-405);
test_math_cbrt("8RUMG8KAD");
test_math_cbrt("F8XT");
test_math_cbrt(-949);
test_math_cbrt(1.4118938466375215e+308);
test_math_cbrt("LHL03VCC");
test_math_cbrt("MJX7AEOV");
test_math_cbrt("G30KM");
test_math_cbrt(1.5350027979013154e+308);
test_math_cbrt("FUJRA0QWT0");
test_math_cbrt(1.06874671183874e+308);
test_math_cbrt(-217);
test_math_cbrt(-123);
test_math_cbrt("TB7BKBR");
test_math_cbrt("8XE4F");
test_math_cbrt("XHZ1");
test_math_cbrt("8MV9O0D");
test_math_cbrt(1.1686522033978792e+308);
test_math_cbrt(-647);
test_math_cbrt(1.0675832762484727e+307);
test_math_cbrt("G0XIAVMZ2");
test_math_cbrt("8HCFTNHCV");
test_math_cbrt(-523);
test_math_cbrt(5.315441766796179e+307);
test_math_cbrt(-815);
test_math_cbrt(-451);
test_math_cbrt(1.2794390639123196e+308);
test_math_cbrt("D40Y04");
test_math_cbrt(1.6133793338845724e+308);
test_math_cbrt(6.206637772204305e+307);
test_math_cbrt(2.5896022294432705e+307);
test_math_cbrt(-735);
test_math_cbrt("8CA1GS");
test_math_cbrt(-177);
test_math_cbrt(1.0600056603235443e+308);
test_math_cbrt(4.815878024477729e+307);
test_math_cbrt("UC10LG");
test_math_cbrt(-675);
test_math_cbrt("Y5SD");
test_math_cbrt(1.1627222117564883e+308);
test_math_cbrt(1.5687978954190794e+308);
test_math_cbrt("Q64QCN");
test_math_cbrt("2SWD7IM11E");
test_math_cbrt(4.4327348818776887e+307);
test_math_cbrt(-703);
test_math_cbrt("L1GXAUWXQ");
test_math_cbrt(-335);
test_math_cbrt(9.12281565619694e+307);
test_math_cbrt("BG5BUSJ8");
test_math_cbrt("IW1H");
test_math_cbrt("M8VUT5QT");
test_math_cbrt(8.042155891834729e+307);
test_math_cbrt("3U5ML6F");
test_math_cbrt("KDN");
test_math_cbrt("4TUG32MX5");
test_math_cbrt(-543);
test_math_cbrt(4.4548030179682285e+307);
test_math_cbrt(8.850978014035478e+307);
test_math_cbrt(-257);
test_math_cbrt(1.768618367200974e+307);
test_math_cbrt("HOJM41URX");
test_math_cbrt("VKCHG");
test_math_cbrt("20RRR4L24");
test_math_cbrt("O1UNYZP");
test_math_cbrt(1.9561351726000123e+307);
test_math_cbrt(-489);
test_math_cbrt(-423);
test_math_cbrt("5VLFDVQ0Z8");
test_math_cbrt(2.974195380600085e+307);
test_math_cbrt("9DBB03D");
test_math_cbrt("J9HHKZ1W");
test_math_cbrt("5KVV48QF");
test_math_cbrt(-519);
test_math_cbrt("Y16L0F7");
test_math_cbrt(166);
test_math_cbrt(508);
test_math_cbrt("DSFRNCTO");
test_math_cbrt(9.737988102321175e+306);
test_math_cbrt(-411);
test_math_cbrt(-833);
test_math_cbrt("D75LX");
test_math_cbrt(1.4797550699622174e+308);
test_math_cbrt(-889);
test_math_cbrt(9.377705130593893e+307);
test_math_cbrt("4PPT2RK215");
test_math_cbrt("N6CN60X");
test_math_cbrt(8.225594252170453e+307);
test_math_cbrt("JP9D3I2K");
test_math_cbrt(1.7264683911134727e+308);
test_math_cbrt(1.1848733790508915e+308);
test_math_cbrt("C2D");
test_math_cbrt(6.016213604312514e+307);
test_math_cbrt("ODOPGKO");
test_math_cbrt("U8N2DF74K");
test_math_cbrt("9HRK2");
test_math_cbrt(1.4303241463937982e+308);
test_math_cbrt("4P9NXJVKF");
test_math_cbrt("LH0");
test_math_cbrt("6KHCL6");
test_math_cbrt(7.285525357014615e+307);
test_math_cbrt(-125);
test_math_cbrt(6.178588789007308e+307);
test_math_cbrt("DL8T");
test_math_cbrt(-997);
test_math_cbrt(-287);
test_math_cbrt("4S0AE");
test_math_cbrt(1.6994506508938602e+308);
test_math_cbrt("UZL6BS7K4P");
test_math_cbrt(1.6891824556736504e+308);
test_math_cbrt("9PAI7ZYO1");
test_math_cbrt("1PRW4L3AU");
test_math_cbrt(-495);
test_math_cbrt("KKV8");
test_math_cbrt(-187);
test_math_cbrt(-745);
test_math_cbrt("PSUZM");
test_math_cbrt(1.5853618332546985e+308);
test_math_cbrt("UF74");
test_math_cbrt(1.139586766437761e+308);
test_math_cbrt("RD1");
test_math_cbrt(3.854250043936666e+307);
test_math_cbrt("VZC1H6");
test_math_cbrt(1.7707841794554198e+308);
test_math_cbrt(7.30910551911795e+307);
test_math_cbrt(-29);
test_math_cbrt(-457);
test_math_cbrt(-849);
test_math_cbrt("F07O2J");
test_math_cbrt("U5G");
test_math_cbrt(5.897383886769141e+307);
test_math_cbrt(1.3631476825493537e+308);
test_math_cbrt("E74Z6S6M");
test_math_cbrt("KKKU88MH7W");
test_math_cbrt(1.6420685502963845e+308);
test_math_cbrt("85TKU1");
test_math_cbrt("3F9Y");
test_math_cbrt(2.1040017999035973e+307);
test_math_cbrt(6.069453522211947e+307);
test_math_cbrt(9.355101359869546e+307);
test_math_cbrt(6.218623608769365e+307);
test_math_cbrt("DZSR");
test_math_cbrt("5Y1L0FP");
test_math_cbrt("QQY");
test_math_cbrt("I0YX3");
test_math_cbrt(7.7692393371296e+307);
test_math_cbrt(4.275507157792558e+307);
test_math_cbrt("XR92");
test_math_cbrt("KP690");
test_math_cbrt(6.522913051288758e+307);
test_math_cbrt(2.673030797491254e+307);
test_math_cbrt(7.529440841376255e+307);
test_math_cbrt(8.324220149255418e+307);
test_math_cbrt("DHDPFB");
test_math_cbrt(1.0663110836476573e+308);
test_math_cbrt(-407);
test_math_cbrt(-801);
test_math_cbrt("VLQ2");
test_math_cbrt("HWVPBL");
test_math_cbrt(3.6459463262204323e+307);
test_math_cbrt(3.443311935653543e+307);
test_math_cbrt("9F1SBNHAJ");
test_math_cbrt("6LDQ");
test_math_cbrt(1.0611568286138556e+308);
test_math_cbrt("GU1E");
test_math_cbrt(1.4607574112749241e+308);
test_math_cbrt("8QZH");
test_math_cbrt("KJ3DQ0X");
test_math_cbrt(1.2956943928988676e+308);
test_math_cbrt("CR1FIM");
test_math_cbrt("GZDEI0BWE6");
test_math_cbrt("3MGOG1W7O");
test_math_cbrt("1TX7H");
test_math_cbrt(1.6132694038262273e+308);
test_math_cbrt(4.196991921446877e+307);
test_math_cbrt(2.40067534251696e+307);
test_math_cbrt(5.4393207591603896e+306);
test_math_cbrt(-739);
test_math_cbrt(2.7838547577409218e+306);
test_math_cbrt("D41");
test_math_cbrt(9.106405244490415e+307);
test_math_cbrt(1.40367713382595e+308);
test_math_cbrt(1.4157935240403446e+308);
test_math_cbrt(8.422021006513346e+307);
test_math_cbrt("BZC16Q7FX4");
test_math_cbrt(1.1783753867370056e+308);
test_math_cbrt("11HRSNMF8");
test_math_cbrt("BI7");
test_math_cbrt(-865);
test_math_cbrt("Q45S");
test_math_cbrt(1.3970494448294207e+308);
test_math_cbrt(-231);
test_math_cbrt("WBH7P51P3");
test_math_cbrt(8.067550181867859e+306);
test_math_cbrt(1.6331391215040989e+308);
test_math_cbrt("7NUREPJ");
test_math_cbrt(-709);
test_math_cbrt("XCJ6VA");
test_math_cbrt(-973);
test_math_cbrt(5.645012428938069e+307);
test_math_cbrt(1.3568518490830188e+308);
test_math_cbrt(4.531120801450923e+307);
test_math_cbrt(7.217791550622678e+307);
test_math_cbrt("L2SY");
test_math_cbrt(8.302559048972146e+307);