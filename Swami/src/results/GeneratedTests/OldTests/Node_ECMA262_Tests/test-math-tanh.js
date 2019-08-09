/*
* This file is automatically generated by Swami
*
* 2019-08-07 16:35:33.170648
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
function test_math_tanh(x){
	if (Object.is( x,NaN )){
		var output = Math.tanh(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.tanh(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === - 0 )){
		var output = Math.tanh(x);
		assert.strictEqual(- 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === + Infinity )){
		var output = Math.tanh(x);
		assert.strictEqual(+ 1, output);
		console.log("Good Test");
		return;
		}
	if (( x === - Infinity )){
		var output = Math.tanh(x);
		assert.strictEqual(- 1, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}



/*TESTS GENERATED AUTOMATICALLY*/
test_math_tanh(true);
test_math_tanh(1.1683613701615352e+308);
test_math_tanh(-777);
test_math_tanh(-299);
test_math_tanh(/yes.*day/);
test_math_tanh("52WM");
test_math_tanh(null);
test_math_tanh(-697);
test_math_tanh(1.6045679424539566e+308);
test_math_tanh("5EITF");
test_math_tanh("IRWVPA60");
test_math_tanh(NaN);
test_math_tanh(/[\u0400-\u04FF]+/g);
test_math_tanh(/yes[^]*day/);
test_math_tanh("BMO");
test_math_tanh(+0);
test_math_tanh(false);
test_math_tanh(/\r\n|\r|\n/);
test_math_tanh("LNVBJ3LJ");
test_math_tanh(1.0153876943584294e+308);
test_math_tanh(-313);
test_math_tanh(1.2359711128780232e+308);
test_math_tanh(/(\w+)\s(\w+)/);
test_math_tanh("7VVP6");
test_math_tanh(-107);
test_math_tanh(/foo/g);
test_math_tanh(-813);
test_math_tanh(6.470366723436121e+307);
test_math_tanh(-943);
test_math_tanh(-265);
test_math_tanh(5.54443764516736e+306);
test_math_tanh("2KXZZ");
test_math_tanh("1NF6C1DV");
test_math_tanh(-307);
test_math_tanh(1.305573912865882e+308);
test_math_tanh(-385);
test_math_tanh(1.0072028780269569e+308);
test_math_tanh(9.31609228713841e+307);
test_math_tanh(1.7272262976777418e+308);
test_math_tanh(1.6928345345662422e+308);
test_math_tanh(1.7275347504108525e+308);
test_math_tanh(1.3811013662134615e+308);
test_math_tanh("M45W");
test_math_tanh(Infinity);
test_math_tanh("ESNWC79");
test_math_tanh(undefined);
test_math_tanh(7.20945913844981e+307);
test_math_tanh("9D3W");
test_math_tanh(-129);
test_math_tanh("K3MWHB");
test_math_tanh(/ab+c/);
test_math_tanh(-327);
test_math_tanh(-71);
test_math_tanh("G86EO");
test_math_tanh(2.2230694915964806e+307);
test_math_tanh(8.400961108352034e+307);
test_math_tanh(1.7235627818600266e+308);
test_math_tanh(-449);
test_math_tanh(1.4479301153841934e+308);
test_math_tanh("0DU1AP");
test_math_tanh("EJE4UGMMB");
test_math_tanh(-835);
test_math_tanh("XKKUGY");
test_math_tanh(-25);
test_math_tanh(3.0426578272108307e+307);
test_math_tanh(-691);
test_math_tanh("QTY22");
test_math_tanh(1.756419029894603e+308);
test_math_tanh("H8V9DX23");
test_math_tanh(4.82242968493964e+307);
test_math_tanh(-0);
test_math_tanh("SBO3DHE");
test_math_tanh("37IW");
test_math_tanh("P1C");
test_math_tanh(1.860699217219266e+307);
test_math_tanh("99QCF5ZVBX");
test_math_tanh(1.7313673310056457e+308);
test_math_tanh(1.329384264208239e+308);
test_math_tanh("LA656N5");
test_math_tanh(-221);
test_math_tanh(1.619609681977768e+308);
test_math_tanh(9.259642402240935e+307);
test_math_tanh(-335);
test_math_tanh(1.6583950793415793e+308);
test_math_tanh(-877);
test_math_tanh(-317);
test_math_tanh(7.839918566748941e+307);
test_math_tanh(1.0482660424442806e+308);
test_math_tanh(-611);
test_math_tanh("7WXGP");
test_math_tanh(-81);
test_math_tanh(/[^.]+/);
test_math_tanh(8.764135863029746e+307);
test_math_tanh(6.640223890547417e+307);
test_math_tanh(8.761421867981752e+307);
test_math_tanh(1.1640112486102439e+308);
test_math_tanh("1ZUTB5X");
test_math_tanh(-561);
test_math_tanh("959");
test_math_tanh(-563);
test_math_tanh("GTY7BI");
test_math_tanh(7.706510685743049e+307);
test_math_tanh(1.1071452563048473e+306);
test_math_tanh(9.59426692212999e+306);
test_math_tanh(5.42405082754609e+307);
test_math_tanh(-245);
test_math_tanh(-845);
test_math_tanh(2.531430607682489e+307);
test_math_tanh(1.4201197700493132e+307);
test_math_tanh(-857);
test_math_tanh("Z6K");
test_math_tanh(1.0464434688190973e+308);
test_math_tanh("3C5SF");
test_math_tanh("ZJL6XW3");
test_math_tanh(-391);
test_math_tanh(-441);
test_math_tanh(-261);
test_math_tanh("BZC16Q7FX4");
test_math_tanh(4.547728294924838e+307);
test_math_tanh(1.4023287838174294e+308);
test_math_tanh("LKA1CHFQP");
test_math_tanh(-531);
test_math_tanh(-605);
test_math_tanh("P7O4H6D128");
test_math_tanh(1.3719419208498463e+308);
test_math_tanh("DLT6WBEV1D");
test_math_tanh(1.4602677436942917e+308);
test_math_tanh("XLZ1AFLB");
test_math_tanh("G7IKTWXOL");
test_math_tanh("4HYH");
test_math_tanh(1.649592432834403e+308);
test_math_tanh(1.7401782975185088e+308);
test_math_tanh(1.655918030864431e+308);
test_math_tanh(1.7517368206439908e+308);
test_math_tanh(-811);
test_math_tanh(-879);
test_math_tanh(1.8171729311512544e+307);
test_math_tanh("ETXRZ8G");
test_math_tanh(-975);
test_math_tanh(8.210855267342879e+307);
test_math_tanh(-187);
test_math_tanh("ZUYF2L6A0");
test_math_tanh("3NFE");
test_math_tanh(1.0010968997800062e+308);
test_math_tanh("66B7UBLG3X");
test_math_tanh("XTHXHNVWQ");
test_math_tanh(3.044949802989412e+307);
test_math_tanh("WYEDBJ36");
test_math_tanh(-413);
test_math_tanh(-173);
test_math_tanh(1.1897082458665172e+308);
test_math_tanh("22LCBP5U");
test_math_tanh(-651);
test_math_tanh("4ZS");
test_math_tanh("99SKR0VM");
test_math_tanh(1.6759567529581022e+308);
test_math_tanh("F9M2I");
test_math_tanh(1.6698499972502522e+308);
test_math_tanh(6.403257434941878e+307);
test_math_tanh("H12");
test_math_tanh("Q6LCGTU6F");
test_math_tanh(1.317211888997297e+308);
test_math_tanh(-197);
test_math_tanh("2H9XXBFZMU");
test_math_tanh(-199);
test_math_tanh(1.5498811085325062e+308);
test_math_tanh("FQ026K");
test_math_tanh(-285);
test_math_tanh(1.4086639598302246e+308);
test_math_tanh("V906");
test_math_tanh(7.986092014486356e+307);
test_math_tanh(8.193904376641768e+306);
test_math_tanh("8US3ICH3R");
test_math_tanh(2.949257363829001e+307);
test_math_tanh(-501);
test_math_tanh(-53);
test_math_tanh("KH7FV");
test_math_tanh(-677);
test_math_tanh(8.365022009220315e+307);
test_math_tanh(-69);
test_math_tanh(6.658048233697748e+307);
test_math_tanh(-509);
test_math_tanh(-871);
test_math_tanh(-929);
test_math_tanh(-319);
test_math_tanh("G95J");
test_math_tanh(4.513591538029393e+307);
test_math_tanh("6ZPU");
test_math_tanh(1.7583695881857467e+308);
test_math_tanh("ZOFSY6WE");
test_math_tanh(1.1990606936692088e+307);
test_math_tanh(4.003860908674162e+307);
test_math_tanh("OYAVGV9R");
test_math_tanh("XB331S");
test_math_tanh("Z9BLZ");
test_math_tanh("VN4N");
test_math_tanh("31FMJKLZ2");
test_math_tanh(-9);
test_math_tanh("Q8PV");
test_math_tanh("EYLUTQB3");
test_math_tanh(-693);
test_math_tanh(1.347498360462945e+308);
test_math_tanh(1.0019878330568914e+308);
test_math_tanh(6.484854456150504e+307);
test_math_tanh(9.958285310231916e+307);
test_math_tanh("5U899ATE");
test_math_tanh(1.1754749133692906e+308);
test_math_tanh(-165);
test_math_tanh(1.5508600939872824e+308);
test_math_tanh("3OB9WO2K0I");
test_math_tanh("HMV6OIVG7E");
test_math_tanh(-253);
test_math_tanh(-819);
test_math_tanh("X4RYBDB65");
test_math_tanh(-781);
test_math_tanh("6XPSS2TM");
test_math_tanh("EIYRKCXNJ7");
test_math_tanh(1.1089870421322301e+308);
test_math_tanh("E4HQ");
test_math_tanh(-407);
test_math_tanh(1.382739646637593e+307);
test_math_tanh(-709);
test_math_tanh(-799);
test_math_tanh(-643);
test_math_tanh(1.2399474389736947e+307);
test_math_tanh(-587);
test_math_tanh(-121);
test_math_tanh(7.404529052054085e+307);
test_math_tanh(6.515827533169417e+307);
test_math_tanh(-759);
test_math_tanh(1.3602540404444479e+308);
test_math_tanh(-807);
test_math_tanh(4.61772696886826e+307);
test_math_tanh(4.974133015256675e+307);
test_math_tanh(3.179438244102787e+307);
test_math_tanh(1.1714214198056977e+308);
test_math_tanh(-287);
test_math_tanh(-249);
test_math_tanh("NPXQP");
test_math_tanh(-15);
test_math_tanh(1.3387046753025891e+308);
test_math_tanh(8.579308083197993e+307);
test_math_tanh(-795);
test_math_tanh("D8F");
test_math_tanh(4.527142790644355e+307);
test_math_tanh("6GVQ");
test_math_tanh(-333);
test_math_tanh("DQ547FI5");
test_math_tanh(-689);
test_math_tanh(-513);
test_math_tanh("5UE");
test_math_tanh("RGQQ");
test_math_tanh(1.171751016283862e+308);
test_math_tanh("VJSO9J");
test_math_tanh(1.2520381131199132e+308);
test_math_tanh(2.566524156892415e+307);
test_math_tanh(9.332313582253922e+307);
test_math_tanh("UC6KE4V9");
test_math_tanh("XEKY");
test_math_tanh(-297);
test_math_tanh(-749);
test_math_tanh("4P81VRN");
test_math_tanh(1.606010779186404e+308);
test_math_tanh(-667);
test_math_tanh("4HQOFMZ");
test_math_tanh(-873);
test_math_tanh("IVCZ6RR3S");
test_math_tanh("7QP6HYJZ");
test_math_tanh(9.568950405244513e+307);
test_math_tanh("TFD");
test_math_tanh("1RWVE");
test_math_tanh(-137);
test_math_tanh(1.0686279036768932e+308);
test_math_tanh("F1D");
test_math_tanh(-997);
test_math_tanh("APVPXJT8");
test_math_tanh("YHUU");
test_math_tanh("74LH");
test_math_tanh(-35);
test_math_tanh(9.879059145404056e+307);
test_math_tanh("3DO313");
test_math_tanh(-175);
test_math_tanh(2.1493079070038898e+307);
test_math_tanh(8.022711310748516e+307);
test_math_tanh(-395);
test_math_tanh("24B");
test_math_tanh("QLGNCYKL1");
test_math_tanh(-861);
test_math_tanh(1.3352312655928533e+308);
test_math_tanh(-577);
test_math_tanh(-423);
test_math_tanh(4.4284163699124897e+307);
test_math_tanh(-351);
test_math_tanh(-805);
test_math_tanh("1ON8T4GZ");
test_math_tanh("6INARDLF");
test_math_tanh(1.1044623631480778e+308);
test_math_tanh(-909);
test_math_tanh(-719);
test_math_tanh(1.291424836472827e+308);
test_math_tanh(2.0520615029777393e+307);
test_math_tanh("3NLVZ1A");
test_math_tanh("KGZ1");
test_math_tanh(-851);
test_math_tanh("OTTX");
test_math_tanh("7M78VALKO4");
test_math_tanh(-895);
test_math_tanh(-729);
test_math_tanh(1.2174241869556286e+308);
test_math_tanh("NYNY0TIV");
test_math_tanh(6.497735513451752e+307);
test_math_tanh("E8MJ3");
test_math_tanh("S44Z");
test_math_tanh(-355);
test_math_tanh(-831);
test_math_tanh(-263);
test_math_tanh(-103);
test_math_tanh(8.88838363952645e+307);
test_math_tanh(-875);
test_math_tanh(-539);
test_math_tanh(7.786376331598076e+305);
test_math_tanh(5.75993740056871e+307);
test_math_tanh("PQUYHUAS");
test_math_tanh("R9EGG");
test_math_tanh(-827);
test_math_tanh(-379);
test_math_tanh("6XU");
test_math_tanh("3LG9VL6IZ");
test_math_tanh(-755);
test_math_tanh("3JG");
test_math_tanh("7LEP");
test_math_tanh(1.522985031960715e+308);
test_math_tanh("EN5IMC");
test_math_tanh("NXKJ");
test_math_tanh(9.510002497698334e+307);
test_math_tanh("BTSYU");
test_math_tanh(2.39795894855982e+307);
test_math_tanh(-417);
test_math_tanh("YMM6L");
test_math_tanh("GLW5U0");
test_math_tanh("LP1ZK9");
test_math_tanh(3.4347307393782007e+307);
test_math_tanh(-601);
test_math_tanh(-783);
test_math_tanh(-267);
test_math_tanh("CB3OABINI");
test_math_tanh("SGAM9GK");
test_math_tanh(1.0040033901924272e+308);
test_math_tanh(1.661425502929171e+307);
test_math_tanh("032QHD");
test_math_tanh(-699);
test_math_tanh(1.1881980450379397e+308);
test_math_tanh(8.707060073237994e+306);
test_math_tanh(1.1954146807039972e+308);
test_math_tanh("2VZ17CPI6");
test_math_tanh(-995);
test_math_tanh(1.4534084242674743e+308);
test_math_tanh("X1D");
test_math_tanh(1.0744067749334488e+308);
test_math_tanh("6L25DGO");
test_math_tanh(-149);
test_math_tanh(1.369568438021937e+308);
test_math_tanh(1.2599891916366912e+308);
test_math_tanh("SIJTL1C");
test_math_tanh(-289);
test_math_tanh("9EMS6K5VV");
test_math_tanh(-741);
test_math_tanh("UJX");
test_math_tanh("594WATV");
test_math_tanh("BQQ8YZJP");
test_math_tanh(1.3687699444884462e+308);
test_math_tanh("6B6Z");
test_math_tanh(1.21922283631928e+307);
test_math_tanh("LSS");
test_math_tanh("ZY9QFT4E");
test_math_tanh("21CJCVP1ND");
test_math_tanh(-427);
test_math_tanh("HXPHL0");
test_math_tanh("VPBMQBN");
test_math_tanh(1.383684230854838e+308);
test_math_tanh(1.0599149787379368e+308);
test_math_tanh(-553);
test_math_tanh(1.4278203759944038e+308);
test_math_tanh(-603);
test_math_tanh(-411);
test_math_tanh(-283);
test_math_tanh(-345);
test_math_tanh("CVVPWN");
test_math_tanh(6.388263172490801e+307);
test_math_tanh(1.1085351644284149e+308);
test_math_tanh(-973);
test_math_tanh(9.309219222982124e+307);
test_math_tanh(1.3758694413457401e+308);
test_math_tanh("XF5W");
test_math_tanh(1.9599250669138403e+307);
test_math_tanh("RD9GJ4EX");
test_math_tanh("L2Y5I4V");
test_math_tanh(-999);
test_math_tanh("7J5CO6");
test_math_tanh(-517);
test_math_tanh("UHW");
test_math_tanh("N3UX0S5U");
test_math_tanh("SH5JJZRQ");
test_math_tanh("WXOL8U6B5");
test_math_tanh(-571);
test_math_tanh(1.105214150063875e+308);
test_math_tanh(-663);
test_math_tanh("40571ZJ");
test_math_tanh(-375);
test_math_tanh(-233);
test_math_tanh(1.242972675022897e+308);
test_math_tanh(-853);
test_math_tanh(-207);
test_math_tanh(-833);
test_math_tanh(1.539599363273628e+308);
test_math_tanh("GXQ520R");
test_math_tanh("5NKFW9G");
test_math_tanh(1.035993464604293e+304);
test_math_tanh(1.492752365193487e+308);
test_math_tanh("G3IYDURR");
test_math_tanh("8UL6NBO");
test_math_tanh("48ONGEMF");
test_math_tanh(-31);
test_math_tanh("OBB0");
test_math_tanh(1.5244623087463052e+308);
test_math_tanh("IONKJ6B");
test_math_tanh(-533);
test_math_tanh("BQTYA");
test_math_tanh(-349);
test_math_tanh(1.757857886616984e+308);
test_math_tanh(-67);
test_math_tanh(-437);
test_math_tanh(1.3387199485151375e+306);
test_math_tanh(1.6793110909541262e+308);
test_math_tanh(1.2199117731388171e+308);
test_math_tanh(-695);
test_math_tanh(3.477858144558307e+307);
test_math_tanh("IO05EYA");
test_math_tanh(-793);
test_math_tanh("RTB");
test_math_tanh(1.4144507375526116e+307);
test_math_tanh(1.7708019346770519e+308);
test_math_tanh(5.781026747784629e+307);
test_math_tanh(7.339544841672234e+306);
test_math_tanh(4.1195654226328346e+307);
test_math_tanh(-959);
test_math_tanh(1.2331022773319507e+308);
test_math_tanh(1.4070720726804204e+308);
test_math_tanh(1.6750263544480854e+308);
test_math_tanh("PRZ6AC2");
test_math_tanh("FLRF");
test_math_tanh(-983);
test_math_tanh(-885);
test_math_tanh("MD6");
test_math_tanh(1.272910499024084e+308);
test_math_tanh(-725);
test_math_tanh(1.275016791502376e+307);
test_math_tanh("CRU");
test_math_tanh("Q7XCCR7Q");
test_math_tanh("HJC");
test_math_tanh(1.4573244237224283e+308);
test_math_tanh(-713);
test_math_tanh(5.243445808026261e+307);
test_math_tanh(6.042024416548678e+307);
test_math_tanh(4.607617651012536e+307);
test_math_tanh(-145);
test_math_tanh(1.189833549703914e+308);
test_math_tanh(-771);
test_math_tanh("R4YXI0");
test_math_tanh(5.779043599928048e+307);
test_math_tanh(3.433109586179787e+307);
test_math_tanh(5.517196338261182e+307);
test_math_tanh(-899);
test_math_tanh(1.743560013282977e+308);
test_math_tanh(-591);
test_math_tanh(4.1107657661614287e+307);
test_math_tanh(-809);
test_math_tanh(1.000625811789115e+308);
test_math_tanh("NV2CGIQ");
test_math_tanh(8.178469318968755e+307);
test_math_tanh(-665);
test_math_tanh("1055B2D");
test_math_tanh("V2V9J");
test_math_tanh(1.0711117356488671e+308);
test_math_tanh("A6ELFYJ");
test_math_tanh(-193);
test_math_tanh("7EKS2J");
test_math_tanh("JDR04L9L");
test_math_tanh("2R0G");
test_math_tanh("7AODMC9542");
test_math_tanh(-167);
test_math_tanh("6J0GH0");
test_math_tanh(1.6450816812473404e+308);
test_math_tanh("17Q36AN2");
test_math_tanh(-623);
test_math_tanh("Y1A");
test_math_tanh(1.2869591736851251e+308);
test_math_tanh("MEIBG7YWSF");
test_math_tanh("92UDCDXL");
test_math_tanh(-923);
test_math_tanh(1.6276604267208598e+308);
test_math_tanh(1.7096725575596301e+308);
test_math_tanh(-85);
test_math_tanh(6.630511092940048e+307);
test_math_tanh("R5OUZER3K3");
test_math_tanh(-947);
test_math_tanh("15FHHXGFTN");
test_math_tanh(1.6156571953555947e+308);
test_math_tanh("FFP1C8C9W");
test_math_tanh("FTYWI726");
test_math_tanh(-339);
test_math_tanh(4.077727442082262e+307);
test_math_tanh("OHMP2R");
test_math_tanh(9.764556274975857e+307);
test_math_tanh("PIR");
test_math_tanh(-445);
test_math_tanh("BL1");
test_math_tanh(-919);
test_math_tanh("8S3JIY7");
test_math_tanh("MDSC");
test_math_tanh(5.381381328300391e+307);
test_math_tanh("B04GB8R2HV");
test_math_tanh("HWWROQZ92P");
test_math_tanh("7AX0");
test_math_tanh("O1I");
test_math_tanh("1KIQWHX");
test_math_tanh(-931);
test_math_tanh(4.556213989896116e+307);
test_math_tanh(1.732572453189849e+308);
test_math_tanh(2.839014606236277e+307);
test_math_tanh("915");
test_math_tanh(-51);
test_math_tanh(1.1226319421039085e+308);
test_math_tanh(5.816995308199698e+307);
test_math_tanh(-123);
test_math_tanh(-723);
test_math_tanh(-687);
test_math_tanh(1.6586404345944793e+307);
test_math_tanh(1.4450116065071345e+308);
test_math_tanh("GAOCZ2");
test_math_tanh("JBBB578MX");
test_math_tanh("WYDEI");
test_math_tanh("32CVT2Q2E7");
test_math_tanh(8.214523478995472e+306);
test_math_tanh("6NBN5");
test_math_tanh(4.718839263039647e+306);
test_math_tanh(2.8380145622910293e+307);
test_math_tanh(1.0984968543455845e+308);
test_math_tanh(-969);
test_math_tanh("O82IIPN");
test_math_tanh(-387);
test_math_tanh("771MHRATFI");
test_math_tanh(1.1073073088490693e+308);
test_math_tanh(1.5797394958247716e+308);
test_math_tanh(6.730120919997567e+307);
test_math_tanh(-21);
test_math_tanh(-575);
test_math_tanh("ACCUNE0A");
test_math_tanh(6.016127972645167e+307);
test_math_tanh(1.7485692216498267e+308);
test_math_tanh(9.134017278498672e+307);
test_math_tanh(-761);
test_math_tanh(3.4056639158828477e+307);
test_math_tanh("HZUK");
test_math_tanh("7CU65");
test_math_tanh("RKFOE3VMIH");
test_math_tanh("J83I4DIMEF");
test_math_tanh("RRMIXI8");
test_math_tanh(-685);
test_math_tanh("KO2IL");
test_math_tanh(1.1152110917764756e+308);
test_math_tanh(1.9847850831502012e+307);
test_math_tanh(-473);
test_math_tanh("ZZ0DQL");
test_math_tanh(-3);
test_math_tanh(-593);
test_math_tanh(8.01825267906989e+307);
test_math_tanh("POLXJ4K3J");
test_math_tanh("D3DC5NH0F");
test_math_tanh(1.6740208494441202e+308);
test_math_tanh(7.195143934366786e+307);
test_math_tanh(-971);
test_math_tanh(4.456259982726464e+307);
test_math_tanh(1.6609558733670105e+308);
test_math_tanh(-481);
test_math_tanh(122);
test_math_tanh(6.237739853950979e+307);
test_math_tanh(-95);
test_math_tanh("WKPD5X3");
test_math_tanh("SX627F1");
test_math_tanh(-491);
test_math_tanh(1.1153603776026731e+308);
test_math_tanh(-911);
test_math_tanh("F6E33K0");
test_math_tanh(8.06602727889131e+307);
test_math_tanh(8.10012732764774e+307);
test_math_tanh(4.38558174722138e+307);
test_math_tanh("OSOVJ");
test_math_tanh(6.599388900983388e+307);
test_math_tanh(1.156272812349371e+308);
test_math_tanh(-397);
test_math_tanh("96H4BUS");
test_math_tanh(-933);
test_math_tanh(-247);
test_math_tanh("0HMTMVZUSA");
test_math_tanh("XYDN7WC9");
test_math_tanh("XJ3L");
test_math_tanh("1C2B8");
test_math_tanh("YI7K");
test_math_tanh(3.7545583163231467e+307);
test_math_tanh("KUZLR93");
test_math_tanh(5.39078882058143e+307);
test_math_tanh(1.3135072521887845e+308);
test_math_tanh(-323);
test_math_tanh(3.8990800002927526e+307);
test_math_tanh("2PVREH7SE");
test_math_tanh(1.6926078099310502e+308);
test_math_tanh(4.439960686134167e+307);
test_math_tanh(-1);
test_math_tanh(1.0745088064160715e+308);
test_math_tanh(-231);
test_math_tanh(1.6512940821960988e+308);
test_math_tanh("G3L6I");
test_math_tanh(1.3059437402880666e+308);
test_math_tanh(-477);
test_math_tanh("Q0TJN");
test_math_tanh(1.0211228713548391e+308);
test_math_tanh(1.7241503401280579e+308);
test_math_tanh("PW0L");
test_math_tanh(-331);
test_math_tanh(-785);
test_math_tanh(6.641136504981953e+307);
test_math_tanh(1.286150321958248e+308);
test_math_tanh(9.3574218778472e+307);
test_math_tanh(1.0943348544338483e+308);
test_math_tanh("U55ZXWXF6");
test_math_tanh("0UM");
test_math_tanh(1.6398902443749598e+308);
test_math_tanh(2.526703395159163e+307);
test_math_tanh(-867);
test_math_tanh("IH55VDCZV");
test_math_tanh(1.1369941773105633e+308);
test_math_tanh("HA59OZ");
test_math_tanh("P94EQ5VW4D");
test_math_tanh("4WNOHQ");
test_math_tanh(1.6331696625383037e+308);
test_math_tanh(4.896494822288354e+307);
test_math_tanh(4.826869606048508e+307);
test_math_tanh("9AL");
test_math_tanh(-447);
test_math_tanh("XN8VL5SKW");
test_math_tanh(7.488788067549714e+307);
test_math_tanh(1.56778364142428e+308);
test_math_tanh("IWPNA");
test_math_tanh(1.0368647325543405e+308);
test_math_tanh(-717);
test_math_tanh(2.516428502805297e+307);
test_math_tanh(1.430539103844956e+308);
test_math_tanh("5BH8L");
test_math_tanh(1.4205945833399945e+308);
test_math_tanh("T8E8T");
test_math_tanh(-105);
test_math_tanh(-117);
test_math_tanh("HJRI");
test_math_tanh(-967);
test_math_tanh(-23);
test_math_tanh(6.053892656691969e+307);
test_math_tanh("QV25U32");
test_math_tanh("D5XG118QYM");
test_math_tanh(1.4894264014306618e+307);
test_math_tanh("ZY1X");
test_math_tanh(1.4056433750118182e+308);
test_math_tanh(-303);
test_math_tanh(-733);
test_math_tanh("CPVGHB");
test_math_tanh("F0NZU0");
test_math_tanh("NYO");
test_math_tanh(1.2498873703907533e+307);
test_math_tanh("NPZ9JBHA");
test_math_tanh(1.6675712527017992e+308);
test_math_tanh("KS2HDC8W");
test_math_tanh(-235);
test_math_tanh("7UZN");
test_math_tanh(-893);
test_math_tanh("Y4R3G3SEE");
test_math_tanh(1.3344949966410264e+308);
test_math_tanh("3U6OZHB5");
test_math_tanh("7QUEM");
test_math_tanh("X9NOLQXG");
test_math_tanh(-981);
test_math_tanh("OZ56UDEAR");
test_math_tanh("5692SH");
test_math_tanh(-979);
test_math_tanh(1.753534933640488e+307);
test_math_tanh(-83);
test_math_tanh("RCYZW5");
test_math_tanh(4.43416019082516e+307);
test_math_tanh("G02NC9");
test_math_tanh(-865);
test_math_tanh(102);
test_math_tanh(1.5806150208861243e+308);
test_math_tanh(5.84458262679208e+307);
test_math_tanh("IZV3");
test_math_tanh("TXK19N");
test_math_tanh("0SAWNG");
test_math_tanh(1.294820720685928e+308);
test_math_tanh("C1E4A");
test_math_tanh(-859);
test_math_tanh(9.039106425584257e+307);
test_math_tanh(7.477001373926614e+307);
test_math_tanh("F0D8Q4V");
test_math_tanh("WH6");
test_math_tanh(-945);
test_math_tanh("USPRBF");
test_math_tanh(1.0120886089520271e+308);
test_math_tanh(5.5585226910354993e+306);
test_math_tanh(2.631650384907293e+307);
test_math_tanh("3I24R4");
test_math_tanh(6.224660805117391e+307);
test_math_tanh(6.657878337017061e+307);
test_math_tanh("BAHWCWQHJ1");
test_math_tanh("DUE87DQQZA");
test_math_tanh(3.6710067606965055e+307);
test_math_tanh("L9R");
test_math_tanh(1.1139977608375352e+308);
test_math_tanh(5.481523129432327e+306);
test_math_tanh("KIZK3HEQ");
test_math_tanh(-489);
test_math_tanh(1.4530657181612253e+308);
test_math_tanh(-737);
test_math_tanh(9.97238852565535e+307);
test_math_tanh(-475);
test_math_tanh("TR78AOT");
test_math_tanh("9LLE2");
test_math_tanh("G52F");
test_math_tanh(-683);
test_math_tanh("QZK6Y6");
test_math_tanh(-443);
test_math_tanh("AK7M");
test_math_tanh(1.170024600090625e+308);
test_math_tanh(-487);
test_math_tanh(1.7005520644456872e+308);
test_math_tanh(4.519040219045622e+307);
test_math_tanh("8DER25604F");
test_math_tanh(1.7412842055592173e+308);
test_math_tanh(-229);
test_math_tanh(6.18405277489969e+307);
test_math_tanh(1.5305410185225495e+308);
test_math_tanh(-711);
test_math_tanh("48QCAV8HJM");
test_math_tanh(-735);
test_math_tanh(9.697487643043118e+307);
test_math_tanh(-115);
test_math_tanh(2.271922938049339e+307);
test_math_tanh("GK6IYPQC");
test_math_tanh(1.4903246556210424e+308);
test_math_tanh(1.203517771864464e+308);
test_math_tanh(2.1706812653556323e+307);
test_math_tanh("K4YT");
test_math_tanh("IN7E8Q4PX");
test_math_tanh(-823);
test_math_tanh(-183);
test_math_tanh("PC5H04");
test_math_tanh(-73);
test_math_tanh("DO5IWS1OQ");
test_math_tanh(520);
test_math_tanh("ME3");
test_math_tanh("XVEQBGM");
test_math_tanh(-645);
test_math_tanh("Y2GT");
test_math_tanh(8.230443858167742e+307);
test_math_tanh(7.262524366103792e+307);
test_math_tanh("W62AFH7ZOC");
test_math_tanh("TJM1KXLDQ");
test_math_tanh(6.4856137531363e+307);
test_math_tanh(5.112886535261853e+307);
test_math_tanh(1.6546677584340031e+308);
test_math_tanh(-557);
test_math_tanh(9.621414773974157e+307);
test_math_tanh(-507);
test_math_tanh("NPPP6");
test_math_tanh(-535);
test_math_tanh(-957);
test_math_tanh("3USUBM06ZP");
test_math_tanh(8.537606474089873e+307);
test_math_tanh(1.6055325454618387e+308);
test_math_tanh(-641);
test_math_tanh("882");
test_math_tanh(-661);
test_math_tanh("LK91TUL92A");
test_math_tanh(-739);
test_math_tanh(7.885723116310987e+306);
test_math_tanh(4.556670099199077e+307);
test_math_tanh(1.6030961114579648e+308);
test_math_tanh(-541);
test_math_tanh(5.25805442378467e+307);
test_math_tanh("ZY3IC");
test_math_tanh(-377);
test_math_tanh("GX9YDYKNL");
test_math_tanh("7YNFUP4TG");
test_math_tanh(-157);
test_math_tanh(1.052602399636341e+308);
test_math_tanh(1.146717184157774e+308);
test_math_tanh(1.2072580830240765e+308);
test_math_tanh(-881);
test_math_tanh(-415);
test_math_tanh(7.123590124665059e+307);
test_math_tanh("LEGRNPQGYG");
test_math_tanh("3CHKXHFU");
test_math_tanh(-913);
test_math_tanh(1.6491886731145867e+308);
test_math_tanh("DH53UAA");
test_math_tanh(2.78055180644613e+307);
test_math_tanh(1.4323501413150346e+308);
test_math_tanh("VWVM");
test_math_tanh("029FG");
test_math_tanh(7.085361854499251e+307);
test_math_tanh(4.2151041171412335e+307);
test_math_tanh("NVL");
test_math_tanh(-505);
test_math_tanh("8FDK");
test_math_tanh(1.1039205689560116e+308);
test_math_tanh(5.709425569136765e+307);
test_math_tanh("3Q05CBK66");
test_math_tanh(9.437347612913285e+307);
test_math_tanh(-763);
test_math_tanh(-495);
test_math_tanh(6.624465633285757e+306);
test_math_tanh("JQTGGQ8");
test_math_tanh("GYPK");
test_math_tanh(1.5351111056674198e+308);
test_math_tanh(3.545431842468653e+307);
test_math_tanh("KE10B");
test_math_tanh("0HQ3XNNBP5");
test_math_tanh(324);
test_math_tanh(-839);
test_math_tanh("B1CRV2");
test_math_tanh(1.3555411158244892e+308);
test_math_tanh(-953);
test_math_tanh(9.081563632616027e+307);
test_math_tanh(-681);
test_math_tanh(-597);
test_math_tanh("OKRMGJOZR");
test_math_tanh("U75N");
test_math_tanh(-789);
test_math_tanh(6.822156631122619e+307);
test_math_tanh("6GCGW");
test_math_tanh(1.7893235115876313e+308);
test_math_tanh(-91);
test_math_tanh("B4DR");
test_math_tanh(-703);
test_math_tanh("70QF8SQ");
test_math_tanh("32B1V9WNQ");
test_math_tanh(7.913444584634592e+307);
test_math_tanh(1.5672959031322643e+308);
test_math_tanh(1.1825466610986365e+308);
test_math_tanh(5.545004121834074e+307);
test_math_tanh(3.689693927856169e+307);
test_math_tanh(1.0223861255674153e+308);
test_math_tanh("IKY05N00");
test_math_tanh(-751);
test_math_tanh(6.87810476828553e+307);
test_math_tanh(1.5226373120664288e+308);
test_math_tanh("M62F");
test_math_tanh("HC83");
test_math_tanh(-33);
test_math_tanh(-869);
test_math_tanh(-891);
test_math_tanh(6.388081395098721e+307);
test_math_tanh(9.863460163967784e+307);
test_math_tanh("FY4NJ4MA9P");
test_math_tanh("V5SR5");
test_math_tanh(5.481918990923153e+307);
test_math_tanh(6.88017208151761e+307);
test_math_tanh(1.3906077746968906e+308);
test_math_tanh(4.954659016292813e+307);
test_math_tanh("ZLS");
test_math_tanh(1.5606923935926508e+308);
test_math_tanh(5.823325514428528e+307);
test_math_tanh(1.5174718550320162e+308);
test_math_tanh(3.7006342940895754e+307);
test_math_tanh(-907);
test_math_tanh(-625);
test_math_tanh(7.442215610272083e+307);
test_math_tanh(-77);
test_math_tanh(-565);
test_math_tanh(9.626967094412206e+307);
test_math_tanh("WNN19X");
test_math_tanh("6QI298");
test_math_tanh("WLQ42Q");
test_math_tanh(1.4140430779785703e+308);
test_math_tanh(-637);
test_math_tanh(430);
test_math_tanh(1.1395953688590704e+308);
test_math_tanh(-767);
test_math_tanh(1.3506173460374509e+308);
test_math_tanh("XPHZ63");
test_math_tanh(8.648633936383472e+307);
test_math_tanh("1TO6ZJB");
test_math_tanh("H5CVWSWKE7");
test_math_tanh("E649Q9VYZ");
test_math_tanh(1.2922072688249774e+308);
test_math_tanh(-613);
test_math_tanh("TI0XMDYZL");
test_math_tanh(9.15916206484868e+307);
test_math_tanh(-291);
test_math_tanh("XC3B5QVUJ");
test_math_tanh(-583);
test_math_tanh("5TKB21");
test_math_tanh("FLK3ICQYB");
test_math_tanh("O6I");
test_math_tanh(-223);
test_math_tanh("XWVCMT9");
test_math_tanh("D1UBAJ3");
test_math_tanh(3.266985458213104e+306);
test_math_tanh("40TIO19MHG");
test_math_tanh("2C005UQGX");
test_math_tanh(-939);
test_math_tanh(1.44894149314514e+307);
test_math_tanh(1.4140517405863997e+308);
test_math_tanh(1.5160611161098998e+308);
test_math_tanh("Z3Y5X4CR");
test_math_tanh("ZUS4S");
test_math_tanh(1.6681687267256676e+308);
test_math_tanh("QYXRRVNU49");
test_math_tanh(-849);
test_math_tanh(1.2381673956712225e+308);
test_math_tanh(1.0918612976932687e+308);
test_math_tanh(1.3935577068829117e+308);
test_math_tanh(1.7663337496688365e+307);
test_math_tanh(1.0470495433128806e+307);
test_math_tanh(1.3475082340021464e+308);
test_math_tanh(9.38310519100244e+307);
test_math_tanh(1.5488653651399396e+308);
test_math_tanh("WMD");
test_math_tanh(1.6190865750715988e+308);
test_math_tanh(1.7866284100569718e+308);
test_math_tanh(-985);
test_math_tanh("NC5X");
test_math_tanh(-421);
test_math_tanh(8.416415934269873e+307);
test_math_tanh("IH5YL");
test_math_tanh(-989);
test_math_tanh(5.152025123255906e+307);
test_math_tanh("05KK6QV21I");
test_math_tanh("KQCOAUJE5");
test_math_tanh(-659);
test_math_tanh(4.0178715908851927e+307);
test_math_tanh(-627);
test_math_tanh(3.015973441077743e+306);
test_math_tanh(1.0128264030947634e+308);
test_math_tanh(4.738851213828316e+307);
test_math_tanh("UOSX");
test_math_tanh("M96VC");
test_math_tanh(6.056618360378998e+307);
test_math_tanh(2.0446494459371833e+307);
test_math_tanh(9.979334332416128e+307);
test_math_tanh("MLJ8PQXQ1");
test_math_tanh(8.200859149582562e+307);
test_math_tanh(9.021282045781907e+307);
test_math_tanh("YFLVT81D2R");
test_math_tanh(1.7066948637035632e+307);
test_math_tanh(1.1120939511067812e+308);
test_math_tanh(2.099961463010126e+307);
test_math_tanh(-647);
test_math_tanh("2WI");
test_math_tanh(3.868620894437806e+307);
test_math_tanh(-621);
test_math_tanh("5JSQUOYO");
test_math_tanh(1.3483215616522276e+308);
test_math_tanh(1.5080905921122653e+307);
test_math_tanh(3.446277931585704e+307);
test_math_tanh("XX4B87");
test_math_tanh("QIB");
test_math_tanh(1.1936438728590193e+307);
test_math_tanh(8.053412951160109e+307);
test_math_tanh("0DTS");
test_math_tanh("M92LA");
test_math_tanh(6.557221311205987e+307);
test_math_tanh("U8YV18A");
test_math_tanh(2.348951994844953e+307);
test_math_tanh(2.4834110016329985e+307);
test_math_tanh("84TU4XC");
test_math_tanh(1.1615428976154405e+308);
test_math_tanh(-89);
test_math_tanh(-353);
test_math_tanh(-41);
test_math_tanh(1.228179955497039e+308);
test_math_tanh(1.1800701290198593e+308);
test_math_tanh("DB8J5BVU");
test_math_tanh(-65);
test_math_tanh("ZXFJ1DUFFH");
test_math_tanh("XAC8D0ENHD");
test_math_tanh(7.65450553478218e+307);
test_math_tanh("S14");
test_math_tanh(-961);
test_math_tanh("CN5QUMCEZ7");
test_math_tanh("WRNG");
test_math_tanh(1.6369287369270223e+308);
test_math_tanh(3.1693379719098055e+306);
