/*
* This file is automatically generated by Swami
*
* 2019-01-26 15:11:33.090091
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
function test_math_trunc(x){
	if (Object.is( x,NaN )){
		var output = Math.trunc(x);
		new TestCase("math_trunc", "math_trunc", NaN, output);
		test();
		return;
		}
	if (Object.is( x,-0 )){
		var output = Math.trunc(x);
		new TestCase("math_trunc", "math_trunc", -0, output);
		test();
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.trunc(x);
		new TestCase("math_trunc", "math_trunc", + 0, output);
		test();
		return;
		}
	if (( x === + Infinity )){
		var output = Math.trunc(x);
		new TestCase("math_trunc", "math_trunc", + Infinity, output);
		test();
		return;
		}
	if (( x === -Infinity )){
		var output = Math.trunc(x);
		new TestCase("math_trunc", "math_trunc", -Infinity, output);
		test();
		return;
		}
	if (( x > 0 && x < 1 )){
		var output = Math.trunc(x);
		new TestCase("math_trunc", "math_trunc", + 0, output);
		test();
		return;
		}
	if (( x < 0 && x > -1 )){
		var output = Math.trunc(x);
		new TestCase("math_trunc", "math_trunc", -0, output);
		test();
		return;
		}
}



/*TESTS GENERATED AUTOMATICALLY*/
test_math_trunc(/[\u0400-\u04FF]+/g);
test_math_trunc(/yes.*day/);
test_math_trunc(undefined);
test_math_trunc(+0);
test_math_trunc(/(\w+)\s(\w+)/);
test_math_trunc(-663);
test_math_trunc(/\r\n|\r|\n/);
test_math_trunc("C1APLV");
test_math_trunc(-439);
test_math_trunc(-437);
test_math_trunc(-589);
test_math_trunc(9.607551396939242e+307);
test_math_trunc("UJBU30ZTKJ");
test_math_trunc(true);
test_math_trunc("R94ENY2X");
test_math_trunc(-81);
test_math_trunc(-185);
test_math_trunc(-349);
test_math_trunc(null);
test_math_trunc("SR5ASCODT");
test_math_trunc("5UTS940CN4");
test_math_trunc("3CLIL");
test_math_trunc("RMHC2I");
test_math_trunc(NaN);
test_math_trunc(/yes[^]*day/);
test_math_trunc("KSQE2UPII4");
test_math_trunc("W3MX47UD");
test_math_trunc(false);
test_math_trunc(-483);
test_math_trunc(1.353961081855992e+308);
test_math_trunc(1.7182572204483374e+308);
test_math_trunc(-149);
test_math_trunc(-645);
test_math_trunc(-233);
test_math_trunc(-97);
test_math_trunc(2.529145984761373e+306);
test_math_trunc("USCNLMAPRU");
test_math_trunc(-33);
test_math_trunc("G1SL");
test_math_trunc(7.467854414026939e+307);
test_math_trunc(1.9325970008918306e+306);
test_math_trunc(1.5596002920357776e+307);
test_math_trunc(-823);
test_math_trunc(Infinity);
test_math_trunc(-815);
test_math_trunc(-405);
test_math_trunc("H0UDVFWUSL");
test_math_trunc("DX2Q3R3XX");
test_math_trunc(1.441499321564788e+308);
test_math_trunc("QWBTKKO");
test_math_trunc("3769XVS6");
test_math_trunc("X24QYALM");
test_math_trunc(-17);
test_math_trunc(9.689993243799802e+307);
test_math_trunc(1.4828765502109518e+308);
test_math_trunc(1.3478240825004034e+308);
test_math_trunc("5DW7Z1");
test_math_trunc(-659);
test_math_trunc("UBKF");
test_math_trunc(/ab+c/);
test_math_trunc(1.18266942566319e+308);
test_math_trunc(1.466054204074284e+308);
test_math_trunc(-627);
test_math_trunc(4.679078818472184e+306);
test_math_trunc("4I53BX");
test_math_trunc(9.529196170910777e+307);
test_math_trunc(1.1659014094151091e+308);
test_math_trunc("TZN7EXHUEN");
test_math_trunc("LRTGATA");
test_math_trunc(-465);
test_math_trunc(-571);
test_math_trunc(/foo/g);
test_math_trunc(-0);
test_math_trunc(4.494802822383886e+307);
test_math_trunc(-957);
test_math_trunc(1.0138982613830611e+308);
test_math_trunc(-219);
test_math_trunc(-223);
test_math_trunc(1.337067392979442e+308);
test_math_trunc("C64VCTKL5");
test_math_trunc("OXLKDZZR");
test_math_trunc(-251);
test_math_trunc(1.3177837744991696e+308);
test_math_trunc(1.7303713322854542e+308);
test_math_trunc("N56W");
test_math_trunc(-911);
test_math_trunc("4RF");
test_math_trunc(698);
test_math_trunc("KTBTSA5X");
test_math_trunc(-811);
test_math_trunc(5.181342955925383e+307);
test_math_trunc(-791);
test_math_trunc(4.697747089846407e+307);
test_math_trunc(1.6424522616096734e+307);
test_math_trunc(7.761625117261623e+307);
test_math_trunc(1.4927799901863153e+308);
test_math_trunc(-543);
test_math_trunc(/[^.]+/);
test_math_trunc("KGJHT1KL");
test_math_trunc(8.174281798854721e+307);
test_math_trunc(1.2547025588400275e+307);
test_math_trunc(-681);
test_math_trunc(-763);
test_math_trunc(-547);
test_math_trunc(1.6618397903557894e+308);
test_math_trunc("3L8M4T");
test_math_trunc(1.5352058997648156e+308);
test_math_trunc(1.4219435645916594e+308);
test_math_trunc("HIC4");
test_math_trunc("Q09XD6");
test_math_trunc(1.494010899591349e+308);
test_math_trunc(1.1423444891748007e+308);
test_math_trunc("GUD7ORJI");
test_math_trunc("418KLJIH");
test_math_trunc(-751);
test_math_trunc(68);
test_math_trunc(1.442693763147935e+308);
test_math_trunc(-705);
test_math_trunc("B0ZQ0A");
test_math_trunc(-889);
test_math_trunc("L99GV1");
test_math_trunc(-603);
test_math_trunc("BY8YRJ2MKO");
test_math_trunc("UIK4TI");
test_math_trunc("VCXBAW1");
test_math_trunc("6YDE");
test_math_trunc(1.1951745472626639e+308);
test_math_trunc(-779);
test_math_trunc(1.8176280774972869e+304);
test_math_trunc(1.419278974297135e+308);
test_math_trunc(8.481823422557095e+307);
test_math_trunc("WAB3H");
test_math_trunc(1.0142091471967917e+308);
test_math_trunc("ZIKX889");
test_math_trunc("6HRV9HK");
test_math_trunc(1.494761454661352e+308);
test_math_trunc(1.2473297774213029e+308);
test_math_trunc(-253);
test_math_trunc("NKVDX9H6A");
test_math_trunc("QBH");
test_math_trunc(3.4522324564518377e+307);
test_math_trunc(3.870113504343498e+307);
test_math_trunc(-707);
test_math_trunc(-443);
test_math_trunc("QW6N");
test_math_trunc(-933);
test_math_trunc("5GW");
test_math_trunc(-529);
test_math_trunc(-551);
test_math_trunc(-317);
test_math_trunc(2.799173881387517e+307);
test_math_trunc("PDI8UH4MH");
test_math_trunc(2.4556578225487847e+307);
test_math_trunc(-901);
test_math_trunc("E30EP");
test_math_trunc("3E7QWX");
test_math_trunc("IB8NW8JFZ");
test_math_trunc(1.635931060660796e+308);
test_math_trunc("9RKTVSX9CL");
test_math_trunc(-505);
test_math_trunc(9.038607474197612e+307);
test_math_trunc("LPPV8A9I");
test_math_trunc(6.116115396161238e+307);
test_math_trunc("JMTG77RTFC");
test_math_trunc("ABF580WZD");
test_math_trunc("RO5L5L0Q7M");
test_math_trunc("FQN0MFP");
test_math_trunc("T0HHD709K");
test_math_trunc(-379);
test_math_trunc(-517);
test_math_trunc(-781);
test_math_trunc(4.612942218369822e+306);
test_math_trunc("9FFRDT");
test_math_trunc(-385);
test_math_trunc(1.2615521832215988e+308);
test_math_trunc(-179);
test_math_trunc(9.67974738798702e+307);
test_math_trunc(-609);
test_math_trunc(2.3207757155423905e+307);
test_math_trunc("RXWVRG");
test_math_trunc("F3L3SO2");
test_math_trunc(2.682173327194917e+307);
test_math_trunc("FNTBUWV5");
test_math_trunc(-479);
test_math_trunc("Q1NAA6V");
test_math_trunc(2.42197232964312e+307);
test_math_trunc("3PXCC");
test_math_trunc("FS4NBB6D");
test_math_trunc("KR6XP");
test_math_trunc(1.4194928600227476e+308);
test_math_trunc(1.1335267786026082e+308);
test_math_trunc(8.320203334937463e+307);
test_math_trunc(9.917172873925661e+307);
test_math_trunc(-367);
test_math_trunc(-321);
test_math_trunc(-703);
test_math_trunc(-391);
test_math_trunc("MTCRJB8");
test_math_trunc(5.530660114777412e+307);
test_math_trunc("6JASQC");
test_math_trunc("8E2J7J5DY");
test_math_trunc("JK0T7RLE");
test_math_trunc(-635);
test_math_trunc(-357);
test_math_trunc(2.0927370876813532e+307);
test_math_trunc(1.2281718605561353e+308);
test_math_trunc("MQFB8K51J6");
test_math_trunc("Y5JTK3K");
test_math_trunc(-471);
test_math_trunc(1.4731691201215555e+306);
test_math_trunc(-293);
test_math_trunc("PQD");
test_math_trunc("VJCQI");
test_math_trunc("JLXR6YESF");
test_math_trunc(-683);
test_math_trunc(-969);
test_math_trunc(-927);
test_math_trunc("03C");
test_math_trunc(-389);
test_math_trunc("N21FKOC8");
test_math_trunc(-857);
test_math_trunc(7.868673224699323e+306);
test_math_trunc("AG29WWRCGB");
test_math_trunc(-579);
test_math_trunc("QIX55F3");
test_math_trunc(-415);
test_math_trunc(1.2496910276499116e+308);
test_math_trunc(2.0148702564507408e+307);
test_math_trunc(-363);
test_math_trunc("GCSZ1FAK");
test_math_trunc(-61);
test_math_trunc(806);
test_math_trunc(1.1425828758398786e+308);
test_math_trunc("2LI1X7XH2R");
test_math_trunc(-591);
test_math_trunc(-423);
test_math_trunc(-59);
test_math_trunc("0VUW3PZA");
test_math_trunc(6.120708627770794e+307);
test_math_trunc(1.2815916435978988e+308);
test_math_trunc(-935);
test_math_trunc(-699);
test_math_trunc(3.8162833618338234e+307);
test_math_trunc(1.144569526538827e+307);
test_math_trunc("VQ68KTO9L");
test_math_trunc(2.731931489253221e+307);
test_math_trunc(-227);
test_math_trunc(1.3278165496183274e+308);
test_math_trunc("J2NYM2B");
test_math_trunc(-279);
test_math_trunc(1.695757528776712e+307);
test_math_trunc(-837);
test_math_trunc("62FUO");
test_math_trunc(1.0601982580082986e+308);
test_math_trunc("TQO0EMP8B");
test_math_trunc(1.5244914143137176e+308);
test_math_trunc(1.6533797180319004e+308);
test_math_trunc("AIOIUT");
test_math_trunc(4.651337590820271e+307);
test_math_trunc("U61YTCU23");
test_math_trunc("9KV71WITY");
test_math_trunc(-907);
test_math_trunc("90U");
test_math_trunc("FL61SGSQ");
test_math_trunc(-733);
test_math_trunc("XUXTM7ZE");
test_math_trunc(1.0849699929456116e+308);
test_math_trunc(-15);
test_math_trunc("ZB7");
test_math_trunc(1.1177732160901724e+308);
test_math_trunc(1.792029812409448e+308);
test_math_trunc(1.922530542109339e+307);
test_math_trunc("6VI8WOYG");
test_math_trunc(4.202696711656656e+307);
test_math_trunc(-511);
test_math_trunc(-587);
test_math_trunc("TWGNLR");
test_math_trunc(-467);
test_math_trunc(1.7498757915231704e+308);
test_math_trunc(6.171994417662904e+307);
test_math_trunc("PAFTISO");
test_math_trunc("M12R8YJXKI");
test_math_trunc(1.0180734125428306e+308);
test_math_trunc(8.428077322787877e+307);
test_math_trunc(1.406340332770014e+308);
test_math_trunc(1.3697916895079992e+308);
test_math_trunc(1.0837632035126388e+308);
test_math_trunc("16P");
test_math_trunc(-147);
test_math_trunc(1.6481842324476068e+308);
test_math_trunc(-903);
test_math_trunc("X7B4Y");
test_math_trunc(1.0899661404790498e+308);
test_math_trunc(-361);
test_math_trunc(-805);
test_math_trunc(1.3132504485740608e+308);
test_math_trunc(-401);
test_math_trunc(8.992369106292404e+307);
test_math_trunc("LU28C");
test_math_trunc("PZS3");
test_math_trunc(-525);
test_math_trunc(-637);
test_math_trunc(-593);
test_math_trunc("U35RI5");
test_math_trunc(-435);
test_math_trunc(1.5726292732925487e+308);
test_math_trunc(-371);
test_math_trunc(6.513756661867245e+307);
test_math_trunc("03U16");
test_math_trunc(7.228213273020321e+307);
test_math_trunc("3EBY");
test_math_trunc("3BUGLCRDB");
test_math_trunc(1.1104739474307138e+308);
test_math_trunc(-519);
test_math_trunc(2.665784572495099e+307);
test_math_trunc("UV2BRUO6");
test_math_trunc("FBGIZ853NI");
test_math_trunc("S90C8UX0N");
test_math_trunc(-237);
test_math_trunc(6.634862025216902e+307);
test_math_trunc("3D4D");
test_math_trunc("A9OOR");
test_math_trunc(-979);
test_math_trunc(-343);
test_math_trunc(4.2836310138635134e+307);
test_math_trunc(-767);
test_math_trunc("NKWFS");
test_math_trunc(3.672658751339789e+307);
test_math_trunc(1.5845186561458404e+308);
test_math_trunc(3.6826083060193583e+306);
test_math_trunc(1.009677363840858e+308);
test_math_trunc(1.4781950058587687e+308);
test_math_trunc(6.027779697256612e+307);
test_math_trunc(-5);
test_math_trunc(7.297505602268376e+307);
test_math_trunc(-459);
test_math_trunc(1.0307866124056754e+308);
test_math_trunc(8.330129439140417e+307);
test_math_trunc("WB5B1K");
test_math_trunc(-13);
test_math_trunc(5.312260207616249e+307);
test_math_trunc("C8I00QEQ4");
test_math_trunc("C7SSW1F");
test_math_trunc(-325);
test_math_trunc(-951);
test_math_trunc(4.434831105551215e+306);
test_math_trunc(-731);
test_math_trunc("P2Y");
test_math_trunc(-299);
test_math_trunc(-225);
test_math_trunc(1.0977627843923166e+308);
test_math_trunc(1.2468842024722665e+308);
test_math_trunc("MWPL");
test_math_trunc(-45);
test_math_trunc(-573);
test_math_trunc(1.3049415327036428e+308);
test_math_trunc("XEA8");
test_math_trunc("PNW8EE5TEO");
test_math_trunc(-27);
test_math_trunc(-687);
test_math_trunc("UZL6H570TR");
test_math_trunc(6.090821910912318e+307);
test_math_trunc(1.2274559566916142e+308);
test_math_trunc(-985);
test_math_trunc(-499);
test_math_trunc(-269);
test_math_trunc(5.771295372468948e+307);
test_math_trunc(1.12457996685865e+308);
test_math_trunc(3.553118048154542e+307);
test_math_trunc("KHB704DW4V");
test_math_trunc("9V3");
test_math_trunc(1.66037870182382e+308);
test_math_trunc(-205);
test_math_trunc(1.7976356333955138e+308);
test_math_trunc(9.536841521783683e+307);
test_math_trunc(1.0954148905387778e+308);
test_math_trunc(2.0176302840082296e+307);
test_math_trunc(-799);
test_math_trunc("UEPB978IB");
test_math_trunc(-69);
test_math_trunc(-73);
test_math_trunc(-613);
test_math_trunc("YRS");
test_math_trunc(1.5138653660757776e+308);
test_math_trunc(1.3512581724620893e+308);
test_math_trunc(1.1980390476275864e+307);
test_math_trunc("CDY2");
test_math_trunc(-549);
test_math_trunc("00ZBX0");
test_math_trunc(-955);
test_math_trunc(8.708496274485077e+307);
test_math_trunc("MIZ4NUU4");
test_math_trunc(1.2924131486356156e+308);
test_math_trunc(1.680577409988662e+308);
test_math_trunc(9.464606297920303e+307);
test_math_trunc("ZRQ8ITCFYC");
test_math_trunc(1.504229702307295e+308);
test_math_trunc("KHF4OZND");
test_math_trunc(9.628004377922363e+307);
test_math_trunc("8VG");
test_math_trunc(2.7999985107966295e+307);
test_math_trunc(1.1080261487562943e+308);
test_math_trunc(-355);
test_math_trunc("D0TAF4HJAR");
test_math_trunc(-451);
test_math_trunc("8QGJ");
test_math_trunc(-309);
test_math_trunc("SUXT1R9HHD");
test_math_trunc(7.66498074962584e+307);
test_math_trunc("IMY7ZC85I3");
test_math_trunc("WBH7P51P3");
test_math_trunc(1.107476152520017e+308);
test_math_trunc("E0K2NTUKS");
test_math_trunc("4XS5D");
test_math_trunc("DOOK");
test_math_trunc(9.042978037717019e+306);
test_math_trunc("TGL");
test_math_trunc("6U6B55CO");
test_math_trunc(5.612811996963199e+307);
test_math_trunc("QRI3MYQ0A");
test_math_trunc(-207);
test_math_trunc(-93);
test_math_trunc("J31KGRB");
test_math_trunc(8.617348809543452e+307);
test_math_trunc("L420XLJ904");
test_math_trunc(-831);
test_math_trunc(7.624977152181004e+307);
test_math_trunc("AEV6M41");
test_math_trunc("BWG");
test_math_trunc(9.786885561456268e+307);
test_math_trunc(-827);
test_math_trunc("5PZ");
test_math_trunc(2.039489594405867e+307);
test_math_trunc("P7TO");
test_math_trunc(-633);
test_math_trunc(3.4294169757307413e+307);
test_math_trunc("CCFVFNQO");
test_math_trunc(1.373110122525406e+308);
test_math_trunc("P0TMAEC2C");
test_math_trunc("1VI1TT7");
test_math_trunc("AO3GF");
test_math_trunc(1.6545472349055622e+308);
test_math_trunc(-11);
test_math_trunc(-19);
test_math_trunc(-643);
test_math_trunc(1.270686680587558e+308);
test_math_trunc(3.2394534562760247e+307);
test_math_trunc("LHEBQ9N279");
test_math_trunc(1.2087556796600025e+308);
test_math_trunc("CO9LXDPX");
test_math_trunc(1.352770614027253e+308);
test_math_trunc("QXMODI");
test_math_trunc("9LCK2HNN");
test_math_trunc(5.94815222704928e+307);
test_math_trunc(3.739306989518044e+307);
test_math_trunc("60SHZT941");
test_math_trunc("PA8HW3Q");
test_math_trunc("JOOG6V9");
test_math_trunc("LGHVL4BP3P");
test_math_trunc(1.7814283975524737e+308);
test_math_trunc("TALFGIC1");
test_math_trunc(1.7339413639676204e+308);
test_math_trunc(-393);
test_math_trunc("Y6WQVKC");
test_math_trunc("U7SMMN");
test_math_trunc("AHCY");
test_math_trunc(-453);
test_math_trunc("O4P10B");
test_math_trunc(-769);
test_math_trunc("7AAE36");
test_math_trunc("BCLS4");
test_math_trunc(1.4751167327254675e+308);
test_math_trunc(1.9314340052239829e+307);
test_math_trunc(-41);
test_math_trunc(1.7281101085952807e+307);
test_math_trunc(-429);
test_math_trunc("2BMC7R");
test_math_trunc("4YXJH");
test_math_trunc("QHAZ8");
test_math_trunc("2V6JQVG");
test_math_trunc("FCNDA");
test_math_trunc(1.1465428377657966e+308);
test_math_trunc("5ME");
test_math_trunc("K67O");
test_math_trunc(-395);
test_math_trunc(-425);
test_math_trunc(-49);
test_math_trunc("OXZBJ4");
test_math_trunc("2AXR3T9");
test_math_trunc("BND");
test_math_trunc(1.7786903148360345e+308);
test_math_trunc("OUPKU");
test_math_trunc(-625);
test_math_trunc(1.276713654508501e+308);
test_math_trunc("0KF7SX");
test_math_trunc("JH4UQ6");
test_math_trunc("YTVEK");
test_math_trunc("VZHKIYE0EG");
test_math_trunc("84F");
test_math_trunc(1.146173794715892e+308);
test_math_trunc(6.580870498573236e+307);
test_math_trunc(-473);
test_math_trunc(-305);
test_math_trunc("QY6L2YSP0");
test_math_trunc(-545);
test_math_trunc(-1);
test_math_trunc(-539);
test_math_trunc(1.3948014619389395e+308);
test_math_trunc(-157);
test_math_trunc("IV4JD6JS");
test_math_trunc(-719);
test_math_trunc(-669);
test_math_trunc(-739);
test_math_trunc("DIHFIDI6");
test_math_trunc(2.345097369332974e+307);
test_math_trunc("I6YY4CO6");
test_math_trunc("64S7X8");
test_math_trunc("7CQ");
test_math_trunc(1.6575969319296466e+308);
test_math_trunc(-243);
test_math_trunc(7.094660756825064e+307);
test_math_trunc("7KEE5C2AF");
test_math_trunc(7.570931225746526e+307);
test_math_trunc(9.114909695503215e+307);
test_math_trunc("P8GX");
test_math_trunc(778);
test_math_trunc("MQ1IK");
test_math_trunc(3.8854162801161954e+307);
test_math_trunc(-995);
test_math_trunc("00XL");
test_math_trunc("S22");
test_math_trunc("5MHUS8MNV");
test_math_trunc("V31OGX");
test_math_trunc("9C2C6H6LD");
test_math_trunc("Q55");
test_math_trunc(8.979453889983123e+307);
test_math_trunc(7.419325111909336e+307);
test_math_trunc("CNZP3ZTS");
test_math_trunc(1.518369568512145e+308);
test_math_trunc(-997);
test_math_trunc(-411);
test_math_trunc("FBC");
test_math_trunc(1.0022873839072312e+308);
test_math_trunc(1.4359175340659076e+308);
test_math_trunc("MSJRGH95XZ");
test_math_trunc(-475);
test_math_trunc(1.7400244724096266e+306);
test_math_trunc(-201);
test_math_trunc("2WFL2DPQG");
test_math_trunc("8MRX6DM3S");
test_math_trunc(9.320117117587831e+306);
test_math_trunc(-213);
test_math_trunc(4.752776997276377e+307);
test_math_trunc(8.280213622487257e+307);
test_math_trunc(1.6169008653317642e+308);
test_math_trunc(7.480769987331972e+307);
test_math_trunc(7.708782675697455e+307);
test_math_trunc("NQXUP");
test_math_trunc(1.7225346357951118e+308);
test_math_trunc(-737);
test_math_trunc(1.2777071847924374e+308);
test_math_trunc(-119);
test_math_trunc("OP97Q");
test_math_trunc("YAA");
test_math_trunc(1.4747323430609867e+308);
test_math_trunc(-983);
test_math_trunc(-679);
test_math_trunc("4HWYDK");
test_math_trunc(3.528571491142338e+307);
test_math_trunc(-137);
test_math_trunc(1.5533289299244163e+308);
test_math_trunc("H6DAF99");
test_math_trunc("KGXIECKHXG");
test_math_trunc("0YT");
test_math_trunc("QFG");
test_math_trunc(-79);
test_math_trunc("F8KGTL13E");
test_math_trunc(2.4824145909902065e+307);
test_math_trunc("5F2CDQ8CJI");
test_math_trunc("AYKCBXO");
test_math_trunc("1U9H1Z");
test_math_trunc("FXMFVNNBW8");
test_math_trunc(9.93131433166033e+307);
test_math_trunc(-449);
test_math_trunc(1.4196256780240101e+308);
test_math_trunc(-339);
test_math_trunc(1.0368666947594024e+307);
test_math_trunc(1.643805463180336e+308);
test_math_trunc("7HFA3FM4G");
test_math_trunc("L4VHZ06QU");
test_math_trunc(9.26336969686679e+307);
test_math_trunc(-623);
test_math_trunc("GQ27K");
test_math_trunc(9.059990852043222e+307);
test_math_trunc(1.345956474609111e+308);
test_math_trunc(-255);
test_math_trunc(-701);
test_math_trunc("I4T");
test_math_trunc("BEW");
test_math_trunc(5.70247242965825e+306);
test_math_trunc(1.333004755412233e+308);
test_math_trunc("0RQGK68KSH");
test_math_trunc(1.232407490113282e+308);
test_math_trunc("4ZVOL5C9YU");
test_math_trunc(1.0920761674424836e+308);
test_math_trunc("EJTCF08");
test_math_trunc(-381);
test_math_trunc(-125);
test_math_trunc("JTR50RFC");
test_math_trunc("OOEDIN");
test_math_trunc(-615);
test_math_trunc(2.3403057928635816e+307);
test_math_trunc(-403);
test_math_trunc("YJS");
test_math_trunc(-841);
test_math_trunc(6.356283555746582e+307);
test_math_trunc(1.3456286176812311e+308);
test_math_trunc(1.2677905375414327e+308);
test_math_trunc(1.7058249106399953e+308);
test_math_trunc(1.138410232644979e+308);
test_math_trunc("9MV44O");
test_math_trunc(-85);
test_math_trunc(2.411365685167908e+306);
test_math_trunc("RG1MV");
test_math_trunc(-921);
test_math_trunc("3UGNB9W");
test_math_trunc("8FEQ2");
test_math_trunc(7.875257612443401e+307);
test_math_trunc("B4JK0T");
test_math_trunc("MXZFF1");
test_math_trunc(-487);
test_math_trunc("1LSFNXZK91");
test_math_trunc("ZEJ");
test_math_trunc("4V2");
test_math_trunc(-847);
test_math_trunc(7.765018386995254e+307);
test_math_trunc(1.4159570493851196e+308);
test_math_trunc("5DJIDLDL3A");
test_math_trunc(-577);
test_math_trunc(7.757288748310299e+307);
test_math_trunc("M0BRVKMPI");
test_math_trunc(1.4255671786595115e+307);
test_math_trunc("PMWD855IL2");
test_math_trunc("2BW9BVR");
test_math_trunc(-485);
test_math_trunc("WVQG5OB1");
test_math_trunc(1.051506808974682e+308);
test_math_trunc("L92HLUHV5");
test_math_trunc(8.682282564327225e+307);
test_math_trunc(-413);
test_math_trunc("VCKUVQWT9N");
test_math_trunc(-803);
test_math_trunc("6PC11ELQU");
test_math_trunc("71REZ");
test_math_trunc("6MWI6Y");
test_math_trunc(-559);
test_math_trunc(5.388353058124503e+306);
test_math_trunc("E36O23H");
test_math_trunc(8.198441473899071e+307);
test_math_trunc("49LXM6O7S");
test_math_trunc(5.382682662502536e+307);
test_math_trunc("JO2O15");
test_math_trunc("RV3B7X1K2");
test_math_trunc("M64URQRG");
test_math_trunc(1.1262412151741681e+308);
test_math_trunc("X2Y6T2");
test_math_trunc("0KBAR4BZW1");
test_math_trunc(6.777111469221135e+307);
test_math_trunc(-43);
test_math_trunc(8.663851355580803e+307);
test_math_trunc("Y7FKM");
test_math_trunc(-801);
test_math_trunc(-899);
test_math_trunc("57NN");
test_math_trunc("7MZ6N");
test_math_trunc("IEPM6");
test_math_trunc(-917);
test_math_trunc(1.4246113818143289e+308);
test_math_trunc(3.402281900574658e+307);
test_math_trunc(1.3998105088445938e+308);
test_math_trunc(2.5104375941190556e+307);
test_math_trunc(1.4666926185229863e+306);
test_math_trunc(2.8766282933567516e+307);
test_math_trunc(4.747472431254728e+306);
test_math_trunc(1.3918962489645261e+308);
test_math_trunc(1.3712053557783675e+308);
test_math_trunc("1B4H90U");
test_math_trunc("SC3P73XR4W");
test_math_trunc(-191);
test_math_trunc("H8OVXKXLP");
test_math_trunc(-215);
test_math_trunc(1.659556302546244e+308);
test_math_trunc("20DXN5V60");
test_math_trunc(-55);
test_math_trunc("YNZ");
test_math_trunc(1.6944812869787739e+308);
test_math_trunc(2.966717934296701e+307);
test_math_trunc("XYSFHLH");
test_math_trunc(1.057932247367657e+308);
test_math_trunc(1.5847131379890877e+308);
test_math_trunc(6.557927345733954e+307);
test_math_trunc("18U9D87FT");
test_math_trunc("VYNDN6MW");
test_math_trunc("N0A24H3K");
test_math_trunc(-865);
test_math_trunc(-611);
test_math_trunc(2.0201344556187531e+307);
test_math_trunc(5.099607323934588e+307);
test_math_trunc(1.0776097180398942e+308);
test_math_trunc(-71);
test_math_trunc("882");
test_math_trunc("RSPI7");
test_math_trunc(-433);
test_math_trunc(-745);
test_math_trunc(1.3347834660843571e+308);
test_math_trunc(-581);
test_math_trunc("IWIO25");
test_math_trunc(3.4816637377365397e+307);
test_math_trunc(3.961084485059637e+306);
test_math_trunc("OLJCE9CCYU");
test_math_trunc("27QY2");
test_math_trunc(9.801523984008633e+307);
test_math_trunc(1.781489075956052e+308);
test_math_trunc("G7BJZCTTF4");
test_math_trunc("XCZ9");
test_math_trunc(-923);
test_math_trunc("K9Z2N");
test_math_trunc("ZJ8T");
test_math_trunc(-457);
test_math_trunc(1.4793092983865296e+308);
test_math_trunc("FFG");
test_math_trunc("H4MOXI2LGY");
test_math_trunc("USD7E");
test_math_trunc("5A24PVHSYB");
test_math_trunc(-741);
test_math_trunc(1.260883848040666e+308);
test_math_trunc("V119YZKXW4");
test_math_trunc(1.2354970011094454e+308);
test_math_trunc(-673);
test_math_trunc("OKGTB3");
test_math_trunc("M15U");
test_math_trunc(1.5488318314662163e+308);
test_math_trunc(1.4911001926016253e+308);
test_math_trunc(-199);
test_math_trunc("Z4VJI");
test_math_trunc(9.22019750872797e+307);
test_math_trunc(1.6898966375298058e+308);
test_math_trunc(1.2850745529006673e+308);
test_math_trunc("86SAUHPDO");
test_math_trunc(2.4670739777771876e+307);
test_math_trunc("738WTKBU");
test_math_trunc(-417);
test_math_trunc(-789);
test_math_trunc("P69WSYK8MP");
test_math_trunc(9.197476491216517e+307);
test_math_trunc(1.3108816022594791e+308);
test_math_trunc("CFFZ");
test_math_trunc("FTD590D");
test_math_trunc(1.0823004490218438e+308);
test_math_trunc("L1MPKTP");
test_math_trunc(1.0307425409696214e+308);
test_math_trunc(1.701066257924679e+308);
test_math_trunc("BUJLDKT");
test_math_trunc(-759);
test_math_trunc("7DIMRL6CM7");
test_math_trunc(1.304675452709175e+307);
test_math_trunc(1.7449777289357538e+307);
test_math_trunc(-727);
test_math_trunc(-507);
test_math_trunc("BKV");
test_math_trunc(1.1834846260164838e+308);
test_math_trunc("Z15NO");
test_math_trunc(1.1533159177378152e+308);
test_math_trunc(1.3416454077419682e+308);
test_math_trunc("P6K0");
test_math_trunc(3.560291060738399e+307);
test_math_trunc("1PF");
test_math_trunc(1.2713376333871325e+308);
test_math_trunc(-855);
test_math_trunc(1.4139319731550556e+308);
test_math_trunc(1.0757257846481777e+307);
test_math_trunc(1.2344513432889496e+308);
test_math_trunc(4.056571214550103e+307);
test_math_trunc("OPEH0SHA");
test_math_trunc(1.597205790917449e+308);
test_math_trunc(3.8476157515839733e+307);
test_math_trunc(2.0674294143753017e+307);
test_math_trunc(1.7650376484290637e+308);
test_math_trunc("3P4NHYBMH");
test_math_trunc("Y4L");
test_math_trunc(1.2422956811087675e+308);
test_math_trunc(1.53504432573914e+308);
test_math_trunc("F73N60BI49");
test_math_trunc("24N24YYEEO");
test_math_trunc("6N7");
test_math_trunc(1.002172369391172e+308);
test_math_trunc(-143);
test_math_trunc(1.1663581206110543e+308);
test_math_trunc(-333);
test_math_trunc("TWE03");
test_math_trunc("3RCND");
test_math_trunc("XK2F");
test_math_trunc("SM99");
test_math_trunc("05FUZZ");
test_math_trunc("SWYETZG3WL");
test_math_trunc(2.0691149600207788e+307);
test_math_trunc(9.6816418976981e+307);
test_math_trunc("TW2BGN84Q");
test_math_trunc("77E1OO");
test_math_trunc(-569);
test_math_trunc("HEF");
test_math_trunc("68XQUZVRR");
test_math_trunc(3.3986146938141823e+307);
test_math_trunc(4.4205330837479036e+307);
test_math_trunc(-431);
test_math_trunc("VORP");
test_math_trunc(1.3739095046483858e+307);
test_math_trunc("DXULX");
test_math_trunc(1.5206250306788053e+308);
test_math_trunc("6MKO");
test_math_trunc(-35);
test_math_trunc(-261);
test_math_trunc(-909);
test_math_trunc("OE6YIKIG");
test_math_trunc(7.377088936194199e+307);
test_math_trunc(-897);
test_math_trunc(1.562151762257822e+308);
test_math_trunc("OSTXTK");
test_math_trunc("1P1WH03JP");
test_math_trunc(1.3977760719110201e+308);
test_math_trunc(9.051882180349669e+307);
test_math_trunc(-793);
test_math_trunc(1.7532316966824904e+308);
test_math_trunc(-197);
test_math_trunc(-607);
test_math_trunc(5.996452661127408e+307);
test_math_trunc(7.241124964283554e+307);
test_math_trunc(-875);
test_math_trunc(1.4129094422314702e+308);
test_math_trunc(-971);
test_math_trunc("P7DZ6");
test_math_trunc("QMT5KBP59I");
test_math_trunc(1.3722139553148957e+308);
test_math_trunc(-167);
test_math_trunc(3.800387663238042e+307);
test_math_trunc(1.6499903144853875e+308);
test_math_trunc("WH2QW");
test_math_trunc("8W20T53");
test_math_trunc("FV76");
test_math_trunc("FQJ2DXYVH");
test_math_trunc("ZK6");
test_math_trunc("L6TGP5DEU");
test_math_trunc("EAAIDRTLWD");
test_math_trunc("NAU7AEIK70");
test_math_trunc("880DSANT9T");
test_math_trunc(1.1690767076986514e+307);
test_math_trunc("TMOTZ");
test_math_trunc("SIEW");
test_math_trunc("Q0IB");
test_math_trunc("3EBDE");
test_math_trunc(6.403922722687538e+307);
test_math_trunc(-965);
test_math_trunc(1.5580462469533744e+306);
test_math_trunc("YMZBGR");
test_math_trunc("JXS");
test_math_trunc(1.6384691166035057e+308);
test_math_trunc(1.1253141055326631e+308);
test_math_trunc(1.6494600207884855e+308);
test_math_trunc("GVPGF");
test_math_trunc("ACO");
test_math_trunc(1.3836807801536452e+308);
test_math_trunc(1.780790822000485e+308);
test_math_trunc(1.1274746356360049e+308);
test_math_trunc("5XO8YG2");
test_math_trunc(-31);
test_math_trunc(6.289977010561743e+307);
test_math_trunc("KXKF62YN1");
test_math_trunc("CT28T8G");
test_math_trunc("PWNBL");
test_math_trunc(-675);
test_math_trunc("9YQJ0");
test_math_trunc(1.0272498949049422e+308);
test_math_trunc(-863);
test_math_trunc(1.6981924020291675e+308);
test_math_trunc(-867);
test_math_trunc(2.44894826797133e+307);
test_math_trunc("2YG65SANWS");
test_math_trunc("DET");
test_math_trunc(1.5918735234899242e+308);
test_math_trunc(1.2539315929460445e+308);
test_math_trunc(-601);
test_math_trunc(4.382715769660903e+307);
test_math_trunc("R473P");
test_math_trunc(8.549784992348155e+307);
test_math_trunc(1.7679643034903034e+308);
test_math_trunc("5FAFN1JB4Q");
test_math_trunc(1.6313765626157908e+308);
test_math_trunc("DMO7");
test_math_trunc(1.0886661031177714e+308);
test_math_trunc("HIVXR7KNZ9");
test_math_trunc(1.7935266813746511e+308);
test_math_trunc(1.0147033401347057e+308);
test_math_trunc(3.8038771790960295e+307);
test_math_trunc(6.418990030669299e+307);
test_math_trunc("1CP1S7MW");
test_math_trunc("V3NZX");
test_math_trunc("LKF5IDZNTJ");
test_math_trunc(-335);
test_math_trunc("28HAZNLDQ");
test_math_trunc(8.728008071730295e+307);
test_math_trunc("TZF");
test_math_trunc(5.199940587059311e+307);
test_math_trunc(1.5643824533540597e+308);
test_math_trunc(1.398886697847854e+308);
test_math_trunc(-713);
test_math_trunc("8B9G0PKNQ");
test_math_trunc(1.6706821668001473e+308);
test_math_trunc("E7K7");
test_math_trunc("3KZ1BM5I");
test_math_trunc("ZHRQK");
test_math_trunc("8O9EN3T4DY");
test_math_trunc(8.714333887462627e+307);
test_math_trunc("VTTB6");
test_math_trunc(-621);
test_math_trunc(2.6120366170820907e+307);
test_math_trunc("OUT0LKVV");
test_math_trunc(-689);
test_math_trunc(-291);
test_math_trunc("3NCA");
test_math_trunc(1.2834965851291523e+308);
test_math_trunc("XLX5BIJPH");
test_math_trunc(-989);
test_math_trunc(1.5797584433351913e+308);
test_math_trunc(8.325473740559668e+306);
test_math_trunc(1.702335608539995e+308);
test_math_trunc("Z1LJK");
test_math_trunc(-249);
test_math_trunc(1.2887092986835804e+308);
test_math_trunc(-89);
test_math_trunc(8.766923634798603e+307);
test_math_trunc(-671);
test_math_trunc("FIZYRIE");
test_math_trunc(-715);
test_math_trunc(1.4700419464388585e+308);
test_math_trunc("S8WVD0");
test_math_trunc(-121);
test_math_trunc(-351);
test_math_trunc("I7UE3WT");
test_math_trunc("MJXOGO");
test_math_trunc("PUOO3");
test_math_trunc(1.5398184177262227e+308);
test_math_trunc("NV38V");
test_math_trunc("4HS18QVSI2");
test_math_trunc(1.8992173216036792e+307);
test_math_trunc("W2AEONWVD");
test_math_trunc(-735);
test_math_trunc(904);
test_math_trunc(8.45374081405465e+307);
test_math_trunc(1.5870104176254465e+308);
test_math_trunc("YV6FF18");
test_math_trunc(1.2734028596648431e+308);
test_math_trunc("ORZTC6");
test_math_trunc("H1JUG");
test_math_trunc(1.5871574756988216e+308);
test_math_trunc(5.541856394058184e+307);
test_math_trunc(3.494081538172256e+307);
test_math_trunc(-209);
test_math_trunc("G7UEJC4NE");
test_math_trunc("IFXR5NS");
test_math_trunc(1.3713455998793947e+307);
test_math_trunc(-39);
test_math_trunc(-853);
test_math_trunc(3.3288033875574717e+307);
test_math_trunc(-235);
test_math_trunc("D4MP4ON");
test_math_trunc("AXLU");
test_math_trunc(-277);
test_math_trunc(2.370681777913935e+307);
test_math_trunc("KT0YU");
test_math_trunc(-455);
test_math_trunc(1.0619984055532323e+308);
test_math_trunc(-757);
test_math_trunc("4DZAOWKUKI");
test_math_trunc("B2A");
test_math_trunc("UN8T");
test_math_trunc("A9Y0LHMEWC");
test_math_trunc(8.14890599890123e+306);
test_math_trunc(-375);
test_math_trunc("25GQF");
test_math_trunc(1.5004174783660312e+308);
test_math_trunc(1.456157004195456e+308);
test_math_trunc(3.414792664292155e+307);
test_math_trunc("1JHCU");
test_math_trunc(8.612010587906324e+307);
test_math_trunc(1.5274550433602082e+308);
test_math_trunc(-265);
test_math_trunc("BNV6I7Q");
test_math_trunc("RJKG2BCO");
test_math_trunc("T71VU4F2E");
test_math_trunc(-597);
