/*
* This file is automatically generated by Swami
*
* 2019-08-08 15:50:46.509124
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
test_math_cbrt(4.834128209125869e+307);
test_math_cbrt(1.1343510066329334e+308);
test_math_cbrt(6.55682793719374e+307);
test_math_cbrt(2.548403727400762e+307);
test_math_cbrt(6.63289654528823e+307);
test_math_cbrt(9.212494681404879e+307);
test_math_cbrt(/[\u0400-\u04FF]+/g);
test_math_cbrt(false);
test_math_cbrt(/yes[^]*day/);
test_math_cbrt(-929);
test_math_cbrt(9.575466904556317e+307);
test_math_cbrt(-761);
test_math_cbrt(/(\w+)\s(\w+)/);
test_math_cbrt(/[^.]+/);
test_math_cbrt("RD8U01");
test_math_cbrt(1.4668429520004864e+308);
test_math_cbrt(+0);
test_math_cbrt(Infinity);
test_math_cbrt(-813);
test_math_cbrt(6.145723187659383e+307);
test_math_cbrt(true);
test_math_cbrt("OO7W0G");
test_math_cbrt(NaN);
test_math_cbrt(1.6628917664886784e+308);
test_math_cbrt(null);
test_math_cbrt("TJTVR2NXBI");
test_math_cbrt(1.4839799819225412e+308);
test_math_cbrt(/\r\n|\r|\n/);
test_math_cbrt(/foo/g);
test_math_cbrt("TM7NE");
test_math_cbrt(-0);
test_math_cbrt(undefined);
test_math_cbrt("667");
test_math_cbrt(1.3436728190803453e+308);
test_math_cbrt(1.0622142899278024e+308);
test_math_cbrt(9.817111496269733e+307);
test_math_cbrt("D0AB");
test_math_cbrt(/yes.*day/);
test_math_cbrt(1.2162442066144e+308);
test_math_cbrt("SDQL9O");
test_math_cbrt("UCISE");
test_math_cbrt(-919);
test_math_cbrt("ZS5LRI");
test_math_cbrt("YHULYV");
test_math_cbrt(-207);
test_math_cbrt(1.7017155423800575e+307);
test_math_cbrt(1.0320608659254872e+308);
test_math_cbrt(-255);
test_math_cbrt(-987);
test_math_cbrt("Q50QXZJ9M");
test_math_cbrt("ZFIZ5N");
test_math_cbrt(-647);
test_math_cbrt(6.554809617044677e+307);
test_math_cbrt("MXQ");
test_math_cbrt(/ab+c/);
test_math_cbrt(1.4631926917513582e+308);
test_math_cbrt("J4SX");
test_math_cbrt("VX0C813");
test_math_cbrt("KYS9IT1");
test_math_cbrt(1.3729529639260137e+308);
test_math_cbrt(6.295728183058247e+306);
test_math_cbrt(9.435660498472432e+307);
test_math_cbrt(-797);
test_math_cbrt(3.778394472554218e+307);
test_math_cbrt(-871);
test_math_cbrt(-651);
test_math_cbrt("549GJ33D81");
test_math_cbrt("8W20T53");
test_math_cbrt(-459);
test_math_cbrt(5.18387215959556e+307);
test_math_cbrt("2FU5FOM3");
test_math_cbrt(6.507800182653588e+307);
test_math_cbrt(-849);
test_math_cbrt("7PC91NQW");
test_math_cbrt(-25);
test_math_cbrt("WP47UPQ60");
test_math_cbrt(4.1247744028675377e+307);
test_math_cbrt(1.625664596567901e+308);
test_math_cbrt(2.452328508070058e+307);
test_math_cbrt("EY973");
test_math_cbrt("8QI1DMJQ");
test_math_cbrt("45DB4O");
test_math_cbrt("R3R");
test_math_cbrt("QJO2B4QY");
test_math_cbrt(-829);
test_math_cbrt(-807);
test_math_cbrt("FXT8W");
test_math_cbrt(-305);
test_math_cbrt(1.7480964077376178e+308);
test_math_cbrt(1.1471364374512092e+308);
test_math_cbrt(8.558166874672289e+307);
test_math_cbrt("DOH0T");
test_math_cbrt(1.321592217990537e+308);
test_math_cbrt("IC301QB");
test_math_cbrt(1.268786265583509e+308);
test_math_cbrt("6DT3HJV20W");
test_math_cbrt(2.8498724215059416e+307);
test_math_cbrt(3.2704879395547636e+307);
test_math_cbrt(-415);
test_math_cbrt(7.709458475162062e+307);
test_math_cbrt(1.7483439370486843e+308);
test_math_cbrt(-159);
test_math_cbrt(-419);
test_math_cbrt("R4LP3");
test_math_cbrt(-887);
test_math_cbrt(-169);
test_math_cbrt(-559);
test_math_cbrt("5LVOT");
test_math_cbrt("DP8CY");
test_math_cbrt("2SEZEZ");
test_math_cbrt("W6M79JJ");
test_math_cbrt(4.923783211081038e+305);
test_math_cbrt(-239);
test_math_cbrt(1.1463200246354016e+308);
test_math_cbrt("X4SJRW");
test_math_cbrt(1.793801507042105e+307);
test_math_cbrt(8.384999477836014e+307);
test_math_cbrt("81X7");
test_math_cbrt("WY3CPVDE");
test_math_cbrt(5.262193746650664e+307);
test_math_cbrt(-115);
test_math_cbrt("U4PHPMB00");
test_math_cbrt(-583);
test_math_cbrt("0ZAUZWWXQ0");
test_math_cbrt("6360VLK");
test_math_cbrt(-957);
test_math_cbrt(-387);
test_math_cbrt(6.838847452314904e+307);
test_math_cbrt("5SN0");
test_math_cbrt(2.26063907129779e+307);
test_math_cbrt("29Y0NVBLJ");
test_math_cbrt("NY6M2");
test_math_cbrt(1.0822216976670374e+308);
test_math_cbrt(2.67925596037935e+307);
test_math_cbrt(1.3632099148886924e+308);
test_math_cbrt(2.799215311607589e+307);
test_math_cbrt(2.2649820789405396e+307);
test_math_cbrt(5.811654243021399e+307);
test_math_cbrt("J0WINP0F");
test_math_cbrt(1.3933594725356756e+308);
test_math_cbrt("Y1RHSEG");
test_math_cbrt("RRT2O222R");
test_math_cbrt(9.108331788636706e+307);
test_math_cbrt(-695);
test_math_cbrt(-703);
test_math_cbrt("OQ64DK");
test_math_cbrt(1.0237330072009962e+308);
test_math_cbrt(9.878693385163398e+307);
test_math_cbrt(1.6408231438353835e+307);
test_math_cbrt("9TZ3");
test_math_cbrt(-873);
test_math_cbrt(1.3696991198656622e+308);
test_math_cbrt(2.328187357158929e+307);
test_math_cbrt(1.7745305736250014e+308);
test_math_cbrt(-107);
test_math_cbrt(-377);
test_math_cbrt(4.47033893556009e+307);
test_math_cbrt(9.458178917709535e+307);
test_math_cbrt(3.7613157638234253e+307);
test_math_cbrt("M0BRVKMPI");
test_math_cbrt(-313);
test_math_cbrt(4.0572790353297055e+307);
test_math_cbrt(1.6838887903596143e+308);
test_math_cbrt("1HHL");
test_math_cbrt(3.998047543177405e+307);
test_math_cbrt(6.656850081202615e+307);
test_math_cbrt("X6CC1");
test_math_cbrt(-607);
test_math_cbrt(7.437062067476231e+307);
test_math_cbrt(-175);
test_math_cbrt(8.723781610268687e+307);
test_math_cbrt(6.63424268521492e+307);
test_math_cbrt("QSSD");
test_math_cbrt(8.291977018738398e+307);
test_math_cbrt(-771);
test_math_cbrt(5.608040755067227e+307);
test_math_cbrt(-927);
test_math_cbrt(-605);
test_math_cbrt(-789);
test_math_cbrt(9.520445082240486e+307);
test_math_cbrt("0T9AMYH7ER");
test_math_cbrt("BNV6I7Q");
test_math_cbrt(1.188770244602107e+308);
test_math_cbrt("05QM");
test_math_cbrt(1.111399739799597e+308);
test_math_cbrt(9.313190375708837e+307);
test_math_cbrt("XM32VN");
test_math_cbrt(-279);
test_math_cbrt("OYT9NTGC8");
test_math_cbrt("PV1SY");
test_math_cbrt(-5);
test_math_cbrt("EO94");
test_math_cbrt(-735);
test_math_cbrt(-819);
test_math_cbrt(-131);
test_math_cbrt(1.101753370685458e+308);
test_math_cbrt("OCRNO2");
test_math_cbrt(2.1295898737484485e+307);
test_math_cbrt(1.9689413818532933e+307);
test_math_cbrt("MJZ");
test_math_cbrt(1.2233547637534337e+308);
test_math_cbrt("PUDRR7");
test_math_cbrt("O2E7O8V8KM");
test_math_cbrt(1.039897978620956e+308);
test_math_cbrt("PN386MAV7");
test_math_cbrt(-347);
test_math_cbrt(1.0873200805669654e+308);
test_math_cbrt(-141);
test_math_cbrt(1.3091434696279487e+308);
test_math_cbrt(-483);
test_math_cbrt(1.0002261787564695e+308);
test_math_cbrt(-349);
test_math_cbrt(7.657105284183417e+306);
test_math_cbrt(7.399165265730914e+307);
test_math_cbrt(-985);
test_math_cbrt("MQJ2LPGCZ");
test_math_cbrt(9.324486177822399e+307);
test_math_cbrt(-673);
test_math_cbrt(1.6895863776223613e+308);
test_math_cbrt("2N9");
test_math_cbrt("YV3SNBY3");
test_math_cbrt("5YQSZ");
test_math_cbrt("GNQKERA");
test_math_cbrt(-299);
test_math_cbrt("IS8OAN9");
test_math_cbrt(1.6402427372957863e+308);
test_math_cbrt("TS3");
test_math_cbrt("4NHCJ7R");
test_math_cbrt("OES");
test_math_cbrt(6.476430729962045e+307);
test_math_cbrt("AU5OSTDJ");
test_math_cbrt("S83KZ4");
test_math_cbrt("516A5F");
test_math_cbrt(1.2140737819078032e+308);
test_math_cbrt("I4XBIJXV");
test_math_cbrt(-649);
test_math_cbrt("D8CIJCQ9B7");
test_math_cbrt(-817);
test_math_cbrt("ZP63VUX");
test_math_cbrt(8.063310722654953e+307);
test_math_cbrt(1.3098723647246398e+308);
test_math_cbrt(3.212234039871758e+307);
test_math_cbrt(1.2978172355893934e+308);
test_math_cbrt(1.5980799396618797e+308);
test_math_cbrt(3.1359025329727096e+307);
test_math_cbrt(-627);
test_math_cbrt("BWMX");
test_math_cbrt("B2Y");
test_math_cbrt(-477);
test_math_cbrt(-399);
test_math_cbrt(5.669584818502165e+307);
test_math_cbrt(-263);
test_math_cbrt(9.642849072319522e+307);
test_math_cbrt(1.3700836502630458e+308);
test_math_cbrt("HNIKGY");
test_math_cbrt(-697);
test_math_cbrt(-61);
test_math_cbrt(4.976876733878083e+307);
test_math_cbrt(-861);
test_math_cbrt(-151);
test_math_cbrt(5.099389902886118e+307);
test_math_cbrt("7CK");
test_math_cbrt(-723);
test_math_cbrt("LLUW");
test_math_cbrt(1.746265032910909e+308);
test_math_cbrt("9YROX8698");
test_math_cbrt("THR6C");
test_math_cbrt("NQJ");
test_math_cbrt("1G6L87UZUX");
test_math_cbrt("V7OWRU1F4");
test_math_cbrt("6F6Y");
test_math_cbrt(-37);
test_math_cbrt(1.2555390158386003e+308);
test_math_cbrt("GLITXAT");
test_math_cbrt(-153);
test_math_cbrt("6XTL");
test_math_cbrt("SPSE");
test_math_cbrt("SA4KVPAF8T");
test_math_cbrt("DSVCZFHM");
test_math_cbrt("MYN57PSI");
test_math_cbrt(1.3381391370367575e+308);
test_math_cbrt(-257);
test_math_cbrt(-757);
test_math_cbrt("SLB");
test_math_cbrt(-707);
test_math_cbrt(-319);
test_math_cbrt(5.604744509751111e+307);
test_math_cbrt(-983);
test_math_cbrt(8.152897664722365e+307);
test_math_cbrt("I78GW");
test_math_cbrt(-27);
test_math_cbrt("07NU");
test_math_cbrt("G1ZNA3");
test_math_cbrt("PFU8F21UJ");
test_math_cbrt("1W0T1");
test_math_cbrt(6.484820233592169e+307);
test_math_cbrt(-633);
test_math_cbrt("B2JLPU3QSY");
test_math_cbrt(1.1048689793510784e+308);
test_math_cbrt(1.4922866479857738e+307);
test_math_cbrt(1.1244973160581767e+307);
test_math_cbrt("XEQRWYIFC");
test_math_cbrt("9V9291");
test_math_cbrt(-821);
test_math_cbrt("OTWSX");
test_math_cbrt("I0CTY");
test_math_cbrt(-655);
test_math_cbrt("VJ4Q");
test_math_cbrt(4.131631402491247e+307);
test_math_cbrt(8.61566719263496e+306);
test_math_cbrt(1.5226674348160582e+308);
test_math_cbrt("K7SG2GPPN");
test_math_cbrt(-323);
test_math_cbrt(1.4106937393136174e+308);
test_math_cbrt(2.9925179681004403e+307);
test_math_cbrt("SCU");
test_math_cbrt(8.921205231304766e+307);
test_math_cbrt(1.5946578078547667e+307);
test_math_cbrt("DULFP7BB");
test_math_cbrt(1.174983986871984e+308);
test_math_cbrt("VW8B");
test_math_cbrt(-75);
test_math_cbrt("XZGB1");
test_math_cbrt(-893);
test_math_cbrt("NKTQ3T9");
test_math_cbrt(2.1709637730188256e+307);
test_math_cbrt("PPFJVM");
test_math_cbrt(-999);
test_math_cbrt(2.3321086198255487e+307);
test_math_cbrt(3.04986334943936e+307);
test_math_cbrt(1.1369067631162128e+308);
test_math_cbrt(-507);
test_math_cbrt(3.903506026432283e+307);
test_math_cbrt("XBFHRUD7");
test_math_cbrt("408YJNOS");
test_math_cbrt(-205);
test_math_cbrt(1.2814223992673113e+308);
test_math_cbrt("30Q0");
test_math_cbrt(-995);
test_math_cbrt(-47);
test_math_cbrt(-139);
test_math_cbrt(-101);
test_math_cbrt(-295);
test_math_cbrt(-191);
test_math_cbrt("CO946AO");
test_math_cbrt(1.8153888298569919e+307);
test_math_cbrt(844);
test_math_cbrt(492);
test_math_cbrt(-883);
test_math_cbrt("K3YE");
test_math_cbrt("8B7");
test_math_cbrt(-173);
test_math_cbrt(-337);
test_math_cbrt(1.0663668620543165e+308);
test_math_cbrt("AEOT");
test_math_cbrt(6.954849957285015e+307);
test_math_cbrt(3.6621943791885124e+307);
test_math_cbrt(514);
test_math_cbrt(8.176305742477931e+307);
test_math_cbrt(1.744063168662829e+308);
test_math_cbrt(8.243527370523871e+307);
test_math_cbrt("3074T0VU");
test_math_cbrt(1.4483684443476528e+308);
test_math_cbrt(-203);
test_math_cbrt(9.11542816669065e+307);
test_math_cbrt(8.370073380079545e+307);
test_math_cbrt(1.0056967876026839e+308);
test_math_cbrt("HLDY");
test_math_cbrt("M1NHLUCS");
test_math_cbrt(1.594369150805049e+308);
test_math_cbrt(5.105880261020099e+307);
test_math_cbrt("BRJO");
test_math_cbrt("PE6JM6");
test_math_cbrt(2.1951014816349737e+307);
test_math_cbrt(1.7704512809980583e+308);
test_math_cbrt("9111");
test_math_cbrt(1.7041738567380335e+308);
test_math_cbrt(-329);
test_math_cbrt("ONEDDY2A");
test_math_cbrt(1.6680686258349457e+308);
test_math_cbrt("63YJK7");
test_math_cbrt(7.59154386915852e+307);
test_math_cbrt(1.1293566258572397e+308);
test_math_cbrt(-213);
test_math_cbrt("09JR4");
test_math_cbrt(1.255423338812297e+308);
test_math_cbrt("8GAJSK7");
test_math_cbrt("1M9KFNTQE");
test_math_cbrt("PH7RL9GT");
test_math_cbrt(1.0540552932557723e+308);
test_math_cbrt(-885);
test_math_cbrt(-49);
test_math_cbrt(-269);
test_math_cbrt("X6GMTFRN");
test_math_cbrt(2.2455069496220862e+307);
test_math_cbrt("EBL3QK");
test_math_cbrt(4.455538354635406e+307);
test_math_cbrt("YY1EI");
test_math_cbrt(-681);
test_math_cbrt("R0CCK3");
test_math_cbrt(-525);
test_math_cbrt(1.085853559882301e+308);
test_math_cbrt("W6CRD0G");
test_math_cbrt("W549Q");
test_math_cbrt(2.842529220459198e+307);
test_math_cbrt("D2HLRLV");
test_math_cbrt("2UPN3OF5I");
test_math_cbrt("54CU5");
test_math_cbrt(-501);
test_math_cbrt("HBLTMZ4K");
test_math_cbrt("OTCI4FXN9I");
test_math_cbrt(1.6975288353386864e+308);
test_math_cbrt("JQL3J1YNFK");
test_math_cbrt(-91);
test_math_cbrt("E5Q2Z");
test_math_cbrt(6.103190090117584e+307);
test_math_cbrt(-11);
test_math_cbrt(-505);
test_math_cbrt(-555);
test_math_cbrt("ZDVFVHEBRD");
test_math_cbrt("TZ4");
test_math_cbrt(-799);
test_math_cbrt("J9C");
test_math_cbrt(9.22001099578452e+307);
test_math_cbrt("Z47BK5");
test_math_cbrt("8O8");
test_math_cbrt("OYQOCWOPXB");
test_math_cbrt("C6Z");
test_math_cbrt("V742AVFRJ");
test_math_cbrt(-489);
test_math_cbrt(-353);
test_math_cbrt(1.494336297836304e+308);
test_math_cbrt("7S827");
test_math_cbrt("8W9S");
test_math_cbrt(-767);
test_math_cbrt("TTM");
test_math_cbrt(-933);
test_math_cbrt(-19);
test_math_cbrt("97K5EQ");
test_math_cbrt(-45);
test_math_cbrt(268);
test_math_cbrt(4.980078807255161e+307);
test_math_cbrt(-317);
test_math_cbrt(-801);
test_math_cbrt(7.88558834465412e+307);
test_math_cbrt(-611);
test_math_cbrt(6.018035000889472e+307);
test_math_cbrt(-721);
test_math_cbrt("9HE");
test_math_cbrt(1.7629212198753552e+308);
test_math_cbrt(3.166873517599553e+307);
test_math_cbrt("CUKG3OMND");
test_math_cbrt(6.775941295525026e+307);
test_math_cbrt(1.4790203620077664e+308);
test_math_cbrt(-331);
test_math_cbrt(1.3960159253479207e+308);
test_math_cbrt("Q8VGU2");
test_math_cbrt(-669);
test_math_cbrt("5023Q");
test_math_cbrt("290SV3");
test_math_cbrt(-795);
test_math_cbrt("71Q");
test_math_cbrt(6.487646613540941e+307);
test_math_cbrt("8HBP82N");
test_math_cbrt(-397);
test_math_cbrt("YI6J2TFZ5");
test_math_cbrt(-97);
test_math_cbrt(-715);
test_math_cbrt(1.2733109970885404e+308);
test_math_cbrt(-843);
test_math_cbrt(-357);
test_math_cbrt(-235);
test_math_cbrt("1VN0V1MWK");
test_math_cbrt("1VB329D");
test_math_cbrt(-181);
test_math_cbrt("4P5LKZVWXL");
test_math_cbrt(1.0976131316541739e+308);
test_math_cbrt(1.0542170768219614e+308);
test_math_cbrt(-777);
test_math_cbrt("9G3");
test_math_cbrt("02Y");
test_math_cbrt(3.956398632756661e+307);
test_math_cbrt(-971);
test_math_cbrt(-233);
test_math_cbrt(1.3239256836136123e+307);
test_math_cbrt(-451);
test_math_cbrt(-249);
test_math_cbrt(-271);
test_math_cbrt(-613);
test_math_cbrt(1.5584211245003105e+308);
test_math_cbrt(-755);
test_math_cbrt(1.0106341370314699e+308);
test_math_cbrt("HQD09X");
test_math_cbrt("PMTM");
test_math_cbrt(5.682305037299188e+307);
test_math_cbrt("TRWMBOM");
test_math_cbrt(8.897054880383026e+306);
test_math_cbrt("PI1WI");
test_math_cbrt(1.6364659087954006e+308);
test_math_cbrt(3.1047393179743307e+307);
test_math_cbrt(1.3437698643852078e+308);
test_math_cbrt(-837);
test_math_cbrt(1.6928154482575551e+308);
test_math_cbrt("F7XSX4LH");
test_math_cbrt(9.502303936158283e+307);
test_math_cbrt(-737);
test_math_cbrt(1.7211488204251653e+308);
test_math_cbrt(-403);
test_math_cbrt(1.5626035301648478e+308);
test_math_cbrt(1.5856921518628604e+308);
test_math_cbrt(1.1413143879567609e+308);
test_math_cbrt(6.074386615268984e+307);
test_math_cbrt(-29);
test_math_cbrt(4.022406472594198e+307);
test_math_cbrt("7WG");
test_math_cbrt(1.5454013103001444e+308);
test_math_cbrt(-543);
test_math_cbrt(4.707613977772038e+307);
test_math_cbrt(8.089709674185246e+307);
test_math_cbrt(8.673234690414651e+307);
test_math_cbrt(8.292915580749815e+307);
test_math_cbrt(8.418352387050895e+307);
test_math_cbrt("KSGPJ2B4VR");
test_math_cbrt(2.6570849153226895e+307);
test_math_cbrt("3QEB1");
test_math_cbrt("1JARD5PL");
test_math_cbrt(1.3157233057896562e+307);
test_math_cbrt(-855);
test_math_cbrt(1.6566354874800637e+308);
test_math_cbrt("9LPM");
test_math_cbrt(3.795155229733998e+307);
test_math_cbrt("WA6");
test_math_cbrt(6.62391509736457e+307);
test_math_cbrt(-941);
test_math_cbrt("R7K7G");
test_math_cbrt(2.9264026763484027e+307);
test_math_cbrt(-417);
test_math_cbrt("UPV30VTLD");
test_math_cbrt("YP5HB1QS98");
test_math_cbrt("3GZ8QNAXJ");
test_math_cbrt(1.7416365505113773e+307);
test_math_cbrt(1.2450008429343064e+308);
test_math_cbrt("NNSV");
test_math_cbrt(1.7524940727960781e+308);
test_math_cbrt("JCPVP42F");
test_math_cbrt(-293);
test_math_cbrt(-35);
test_math_cbrt(1.5121123835415696e+308);
test_math_cbrt(-963);
test_math_cbrt(-639);
test_math_cbrt(1.1040261140682827e+308);
test_math_cbrt(9.93625729570594e+307);
test_math_cbrt(2.465516819244727e+307);
test_math_cbrt(1.019566017978448e+308);
test_math_cbrt(-137);
test_math_cbrt("0C6V46D0BI");
test_math_cbrt(-935);
test_math_cbrt("6H9SHWXUW");
test_math_cbrt(1.367998859208292e+308);
test_math_cbrt(1.073409082011662e+308);
test_math_cbrt("EPEBI8BN");
test_math_cbrt(-625);
test_math_cbrt(3.718103456791369e+307);
test_math_cbrt("MS8DC6FO");
test_math_cbrt("1F5F6RTUI");
test_math_cbrt("Z4GXLHAI4A");
test_math_cbrt("M8PBL6");
test_math_cbrt(1.395059750939682e+308);
test_math_cbrt("8801JRIE");
test_math_cbrt(-199);
test_math_cbrt("YKNJUHYG");
test_math_cbrt(-781);
test_math_cbrt("CPJ");
test_math_cbrt(1.0374600770188294e+308);
test_math_cbrt(1.7017392260544574e+308);
test_math_cbrt(1.6718378189893475e+308);
test_math_cbrt(5.382015431308888e+306);
test_math_cbrt(8.097636886176157e+307);
test_math_cbrt(1.3839742823363113e+308);
test_math_cbrt("S5K");
test_math_cbrt(-43);
test_math_cbrt(-127);
test_math_cbrt(-671);
test_math_cbrt("SKKQTEGFYJ");
test_math_cbrt("S9YTDH1ZL9");
test_math_cbrt("TYZYFK7S");
test_math_cbrt(-753);
test_math_cbrt("1LU9DB4");
test_math_cbrt(1.0049585952372913e+308);
test_math_cbrt(1.1155677312805227e+308);
test_math_cbrt(3.767469328942955e+307);
test_math_cbrt(-69);
test_math_cbrt(-129);
test_math_cbrt("ZH3SM90");
test_math_cbrt(1.1454306189003498e+308);
test_math_cbrt("YYXHALX8");
test_math_cbrt(7.723849775767077e+307);
test_math_cbrt("MFDF");
test_math_cbrt(1.7748442673514217e+308);
test_math_cbrt(6.853109488100576e+307);
test_math_cbrt("3LSPG");
test_math_cbrt(1.1570200713134032e+308);
test_math_cbrt(-549);
test_math_cbrt(-915);
test_math_cbrt(-965);
test_math_cbrt(-259);
test_math_cbrt("GIHV");
test_math_cbrt(-937);
test_math_cbrt(-179);
test_math_cbrt("7SJKRM");
test_math_cbrt("QR8WY1HJP");
test_math_cbrt(-285);
test_math_cbrt(9.959582962140024e+307);
test_math_cbrt("G7X2Z0");
test_math_cbrt("3L8D9VV3");
test_math_cbrt(-547);
test_math_cbrt(808);
test_math_cbrt(9.95889049984733e+307);
test_math_cbrt("EEFH");
test_math_cbrt(-521);
test_math_cbrt(-815);
test_math_cbrt(1.6514224752005229e+308);
test_math_cbrt(6.08024492943535e+307);
test_math_cbrt("650QW");
test_math_cbrt(7.121104691365868e+307);
test_math_cbrt(-867);
test_math_cbrt("G1R");
test_math_cbrt(1.4804738367347486e+308);
test_math_cbrt(5.201455126374149e+307);
test_math_cbrt(7.579640584631682e+307);
test_math_cbrt(534);
test_math_cbrt("PLK2G5O5");
test_math_cbrt("KYP22");
test_math_cbrt("ZS6U");
test_math_cbrt("JPTLF");
test_math_cbrt(1.3739096762626528e+307);
test_math_cbrt(1.292134807946098e+308);
test_math_cbrt(-105);
test_math_cbrt(-531);
test_math_cbrt(-183);
test_math_cbrt("9GFZR");
test_math_cbrt(-533);
test_math_cbrt("6K5B2L");
test_math_cbrt(-227);
test_math_cbrt("5LV0IHUUV");
test_math_cbrt("6M0UIWRU2");
test_math_cbrt(-425);
test_math_cbrt("DBVD6P");
test_math_cbrt(1.027762568044374e+308);
test_math_cbrt(5.767142140711751e+307);
test_math_cbrt(9.114758968630328e+307);
test_math_cbrt(1.6787060278649271e+308);
test_math_cbrt(-189);
test_math_cbrt(5.838431558014862e+306);
test_math_cbrt("5KW3");
test_math_cbrt(1.4406023999618458e+308);
test_math_cbrt(-389);
test_math_cbrt(-367);
test_math_cbrt("3ZH94YB");
test_math_cbrt(6.165254180224263e+307);
test_math_cbrt(-185);
test_math_cbrt(1.64871069782008e+308);
test_math_cbrt("O6Z5UGRVZ");
test_math_cbrt(-709);
test_math_cbrt(8.165674397869505e+307);
test_math_cbrt(5.767553815746744e+307);
test_math_cbrt(4.959098100083287e+307);
test_math_cbrt(5.459449473624489e+307);
test_math_cbrt(6.801779936257694e+307);
test_math_cbrt("DT0O9FD");
test_math_cbrt(-53);
test_math_cbrt(-89);
test_math_cbrt("XFULY");
test_math_cbrt("JGP");
test_math_cbrt("BK59");
test_math_cbrt(1.7297447123473432e+308);
test_math_cbrt(-943);
test_math_cbrt(-267);
test_math_cbrt(-869);
test_math_cbrt(5.94705239614266e+307);
test_math_cbrt(3.4557507941526385e+306);
test_math_cbrt("9ZV");
test_math_cbrt("L6EMVB7B");
test_math_cbrt(-123);
test_math_cbrt("LXCFOZ");
test_math_cbrt(-465);
test_math_cbrt(-863);
test_math_cbrt("88WBB");
test_math_cbrt("VGQUT8CK");
test_math_cbrt("4HTC");
test_math_cbrt(4.1314876683193183e+307);
test_math_cbrt(1.2581092361875191e+308);
test_math_cbrt("WZ6J7Z");
test_math_cbrt(4.635840491106259e+307);
test_math_cbrt(-149);
test_math_cbrt(5.244550640869852e+307);
test_math_cbrt("143RHTB6");
test_math_cbrt(1.4893310905807872e+308);
test_math_cbrt(1.6007911786858805e+308);
test_math_cbrt(1.0245034983591511e+308);
test_math_cbrt(1.5035763814578825e+308);
test_math_cbrt(4.93915900281667e+307);
test_math_cbrt(-325);
test_math_cbrt("9TFPLQ5L");
test_math_cbrt(-577);
test_math_cbrt(1.324009599985909e+307);
test_math_cbrt("UA6Y4PGO5");
test_math_cbrt(-473);
test_math_cbrt("ZHRQK");
test_math_cbrt(3.55641723236106e+307);
test_math_cbrt("P96YJSF7TS");
test_math_cbrt(9.136513549631778e+307);
test_math_cbrt("NARE");
test_math_cbrt(1.5755644440736408e+308);
test_math_cbrt(8.983538593021013e+306);
test_math_cbrt("P9N");
test_math_cbrt(6.468781138718976e+307);
test_math_cbrt(-273);
test_math_cbrt(-515);
test_math_cbrt(1.5638820479114687e+308);
test_math_cbrt(1.16217772127125e+308);
test_math_cbrt(-901);
test_math_cbrt(8.969622968406764e+306);
test_math_cbrt(9.600275532428113e+307);
test_math_cbrt(-125);
test_math_cbrt("X2SWX");
test_math_cbrt("E8V");
test_math_cbrt(1.2230359788676803e+308);
test_math_cbrt(1.1284113341931685e+307);
test_math_cbrt(-3);
test_math_cbrt(1.5995906112277284e+308);
test_math_cbrt(1.7424299439143262e+308);
test_math_cbrt(5.924856214442467e+307);
test_math_cbrt("FXZXED");
test_math_cbrt(1.3102748623602073e+308);
test_math_cbrt(1.3201059121184291e+308);
test_math_cbrt("JKK1PA4XQ");
test_math_cbrt(5.855311156536052e+307);
test_math_cbrt(-529);
test_math_cbrt(9.75822281218961e+306);
test_math_cbrt("81UWO");
test_math_cbrt(4.3275447949552905e+307);
test_math_cbrt("QPNT4VY");
test_math_cbrt("IZC2P");
test_math_cbrt("4R5D7");
test_math_cbrt(1.7155341750245933e+308);
test_math_cbrt(1.6198085502374117e+308);
test_math_cbrt("QPZA");
test_math_cbrt("GEWK");
test_math_cbrt("0PX9");
test_math_cbrt(-411);
test_math_cbrt("QGBKEPIR5E");
test_math_cbrt(1.413855818108142e+307);
test_math_cbrt(2.457132743597361e+307);
test_math_cbrt(-311);
test_math_cbrt("VAZEA");
test_math_cbrt(1.7655159000163607e+308);
test_math_cbrt(-445);
test_math_cbrt(7.13843393917654e+307);
test_math_cbrt(-443);
test_math_cbrt(1.6288878952618863e+308);
test_math_cbrt(-281);
test_math_cbrt("T07");
test_math_cbrt("ZYN");
test_math_cbrt(8.368070015833173e+307);
test_math_cbrt(-589);
test_math_cbrt("9ESBZ");
test_math_cbrt(4.728633785839769e+307);
test_math_cbrt(1.5175128525471236e+308);
test_math_cbrt(1.3407072444549264e+308);
test_math_cbrt(2.4691511398576574e+307);
test_math_cbrt(8.721370742033237e+307);
test_math_cbrt("45Z");
test_math_cbrt("8JW5L6S");
test_math_cbrt(7.986982703350671e+307);
test_math_cbrt(5.349626606748747e+307);
test_math_cbrt(1.519762486924198e+308);
test_math_cbrt("5GKN7A3N0");
test_math_cbrt("OHZ50B");
test_math_cbrt("H7PMZ");
test_math_cbrt(9.28009588492083e+306);
test_math_cbrt(-981);
test_math_cbrt(3.6526807729873174e+307);
test_math_cbrt("0LXOGZK1TG");
test_math_cbrt(1.3726912112598057e+308);
test_math_cbrt(-619);
test_math_cbrt("RI4VSL2L");
test_math_cbrt(-371);
test_math_cbrt(1.5080961311461675e+308);
test_math_cbrt(-997);
test_math_cbrt("P2N54YE");
test_math_cbrt(-993);
test_math_cbrt("C5CZ5A");
test_math_cbrt(-977);
test_math_cbrt(7.521303974306755e+307);
test_math_cbrt("CEIYVY1M");
test_math_cbrt("OMFA91");
test_math_cbrt(3.578170954977286e+307);
test_math_cbrt("7RKPH");
test_math_cbrt(5.922528179094647e+307);
test_math_cbrt("N4P");
test_math_cbrt("Q9E");
test_math_cbrt("DYCKQEJ");
test_math_cbrt("ZGU");
test_math_cbrt(-571);
test_math_cbrt("AI92MJ6L");
test_math_cbrt("MMR7CL");
test_math_cbrt(1.6271753076822163e+308);
test_math_cbrt("W9A5");
test_math_cbrt(1.227567425106724e+308);
test_math_cbrt("Y6HS5T93");
test_math_cbrt("8N63XI5IGE");
test_math_cbrt("R1C");
test_math_cbrt(1.064100468894321e+308);
test_math_cbrt(7.803939600416837e+307);
test_math_cbrt("TNV93UUN");
test_math_cbrt(-831);
test_math_cbrt(1.6257475717520413e+308);
test_math_cbrt(1.5381557310706332e+308);
test_math_cbrt(1.1481633062634695e+308);
test_math_cbrt(7.698332968671927e+307);
test_math_cbrt(-765);
test_math_cbrt(7.585877075194116e+307);
test_math_cbrt(1.4151757223663213e+308);
test_math_cbrt(-903);
test_math_cbrt(1.2406302411000793e+308);
test_math_cbrt(4.3457237391417045e+307);
test_math_cbrt(-211);
test_math_cbrt(4.041418846192303e+307);
test_math_cbrt(7.067990466200076e+307);
test_math_cbrt(-667);
test_math_cbrt(1.7147098487348675e+308);
test_math_cbrt("AYDLD");
test_math_cbrt(-221);
test_math_cbrt(-73);
test_math_cbrt("57CHS");
test_math_cbrt("M7W");
test_math_cbrt("IZ2T8");
test_math_cbrt("AGI8YPMTJ");
test_math_cbrt(5.739803415581483e+307);
test_math_cbrt(1.006463930218527e+308);
test_math_cbrt(4.971076654197559e+307);
test_math_cbrt(1.410056747762961e+308);
test_math_cbrt(1.3704018896219262e+308);
test_math_cbrt(1.5147024173342551e+308);
test_math_cbrt("KFLY");
test_math_cbrt("KYFBF6I6");
test_math_cbrt(1.2926194397267617e+308);
test_math_cbrt(8.733436882270241e+307);
test_math_cbrt("TMQHK");
test_math_cbrt(6.779348574903881e+306);
test_math_cbrt(-435);
test_math_cbrt("XZEANJKE");
test_math_cbrt(1.4608994374313777e+308);
test_math_cbrt(1.4826158409432918e+308);
test_math_cbrt("S1IWRO1RXZ");
test_math_cbrt(1.1699811946473808e+308);
test_math_cbrt("MLJ8PQXQ1");
test_math_cbrt("26HN1LL8XU");
test_math_cbrt("H105Y0GO");
test_math_cbrt("VF57");
test_math_cbrt(1.3248876574472454e+307);
test_math_cbrt("BLMII");
test_math_cbrt(-161);
test_math_cbrt(4.700797214631263e+307);
test_math_cbrt(1.733626141139892e+308);
test_math_cbrt(5.407405186862203e+307);
test_math_cbrt("QJS12");
test_math_cbrt(-945);
test_math_cbrt(8.93200241422058e+307);
test_math_cbrt(3.388544930998808e+307);
test_math_cbrt(1.7120344338699816e+308);
test_math_cbrt(1.331754948848508e+308);
test_math_cbrt(8.855510613628034e+307);
test_math_cbrt(1.6861634625703567e+308);
test_math_cbrt(-989);
test_math_cbrt(-839);
test_math_cbrt(-471);
test_math_cbrt(1.7415372290514348e+308);
test_math_cbrt("F13O");
test_math_cbrt("7ICS");
test_math_cbrt(8.009946688024478e+307);
test_math_cbrt("QPVY4SF");
test_math_cbrt(504);
test_math_cbrt(-355);
test_math_cbrt("UZZ");
test_math_cbrt("4BPXCIAPVT");
test_math_cbrt("VYN4L");
test_math_cbrt(1.5023112166822906e+308);
test_math_cbrt(-785);
test_math_cbrt("057");
test_math_cbrt(-693);
test_math_cbrt(9.216381365404162e+306);
test_math_cbrt("HAECT79");
test_math_cbrt(-811);
test_math_cbrt(9.505614533973174e+307);
test_math_cbrt(5.971718841928217e+306);
test_math_cbrt(3.747297360219583e+307);
test_math_cbrt("80S5");
test_math_cbrt("885");
test_math_cbrt(9.650149662052262e+307);
test_math_cbrt(3.7325460912725195e+307);
test_math_cbrt(-833);
test_math_cbrt(-229);
test_math_cbrt("IP1");
test_math_cbrt("DH2UAEZ");
test_math_cbrt(1.5810351767167827e+308);
test_math_cbrt("6KZQKC");
test_math_cbrt(1.5833744736663752e+308);
test_math_cbrt(8.432836651451943e+304);
test_math_cbrt("IHFU3");
test_math_cbrt("GS4JM");
test_math_cbrt(2.4575052413681515e+307);
test_math_cbrt(1.208144642077752e+307);
test_math_cbrt("0XGNEA9B");
test_math_cbrt(-579);
test_math_cbrt("5VL8X");
test_math_cbrt(1.4271605088140521e+308);
test_math_cbrt("J4088");
test_math_cbrt(-335);
test_math_cbrt(1.73730122025894e+308);
test_math_cbrt("FUVK");
test_math_cbrt(-13);
test_math_cbrt("005IJYET2");
test_math_cbrt(1.3310161602997235e+308);
test_math_cbrt("UIYS");
test_math_cbrt(-587);
test_math_cbrt(6.522643951601299e+307);
test_math_cbrt(4.4959483686491975e+306);
test_math_cbrt("71PJYO");
test_math_cbrt(3.0917646471077756e+307);
test_math_cbrt(2.968885744083602e+307);
test_math_cbrt("CCXN0XAK");
test_math_cbrt("ZCW");
test_math_cbrt(5.819487239924798e+307);
test_math_cbrt("ETXFAS");
test_math_cbrt("XPLV");
test_math_cbrt("YDFXYH");
test_math_cbrt("IBA");
test_math_cbrt("5V29QEY0");
test_math_cbrt(-593);
test_math_cbrt(1.4345406364804585e+308);
test_math_cbrt("0XHXQN31");
test_math_cbrt("XW49F");
test_math_cbrt(9.240774248432225e+307);
test_math_cbrt(-513);
test_math_cbrt(6.0232595248135065e+307);
test_math_cbrt("QEMTV86HG");
test_math_cbrt("OB4TKA");
test_math_cbrt(1.4578066181399476e+308);
test_math_cbrt("0S889");
test_math_cbrt(-215);
test_math_cbrt("J2IJDS");
test_math_cbrt(7.687158410492311e+306);
test_math_cbrt(1.0879794026336044e+308);
test_math_cbrt("T7XGVEA8");
test_math_cbrt(6.732432339397848e+306);
test_math_cbrt(1.7318168126862148e+308);
test_math_cbrt("H2IJ0LBO");
test_math_cbrt("U2JYVI");
test_math_cbrt(-303);
test_math_cbrt(6.805107024090859e+306);
test_math_cbrt("TKECWZ7JEA");
test_math_cbrt("NYYZCUMP");
test_math_cbrt(1.5133413349061636e+308);
test_math_cbrt(1.2039308593250159e+308);
test_math_cbrt(-499);
test_math_cbrt("HSZ3JPN7D5");
test_math_cbrt(-225);
test_math_cbrt(1.0089344373603494e+308);
test_math_cbrt("R0C");
test_math_cbrt(1.4930252838386752e+308);
test_math_cbrt(-659);
test_math_cbrt("BTV7IJ4");
test_math_cbrt(7.116969567197522e+307);
test_math_cbrt(1.7487586461617468e+308);
test_math_cbrt(8.120185022212188e+307);
test_math_cbrt(6.860660979211466e+306);
test_math_cbrt(1.03915927878046e+308);
test_math_cbrt("HJBOH7");
test_math_cbrt("594CRT");
test_math_cbrt(1.0914773239368583e+308);
test_math_cbrt("1O2PGKX");
test_math_cbrt("XR2V9P2");
test_math_cbrt(1.203162523914582e+308);
test_math_cbrt("BOQHL6");
test_math_cbrt("UPKJ8B9CZW");
test_math_cbrt(8.833547769357626e+307);
test_math_cbrt(9.330485320384114e+307);
test_math_cbrt("87IQNERPN");
test_math_cbrt("WEYPSV");
test_math_cbrt(6.061121033356745e+307);
test_math_cbrt(-315);
test_math_cbrt("X2P6Z");
test_math_cbrt("ZQ9GB54W");
test_math_cbrt(1.729193713685932e+306);
test_math_cbrt("97RBH");
test_math_cbrt(-413);
test_math_cbrt("X0LU7WPR");
test_math_cbrt("KK8");