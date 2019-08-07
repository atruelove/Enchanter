/*
* This file is automatically generated by Swami
*
* 2019-08-06 19:23:03.529442
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
function test_math_ceil(x){
	if (Object.is( x,NaN )){
		var output = Math.ceil(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.ceil(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === - 0 )){
		var output = Math.ceil(x);
		assert.strictEqual(- 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === + Infinity )){
		var output = Math.ceil(x);
		assert.strictEqual(+ Infinity, output);
		console.log("Good Test");
		return;
		}
	if (( x === - Infinity )){
		var output = Math.ceil(x);
		assert.strictEqual(- Infinity, output);
		console.log("Good Test");
		return;
		}
	if (( x < 0 && x > - 1 )){
		var output = Math.ceil(x);
		assert.strictEqual(- 0, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}



/*TESTS GENERATED AUTOMATICALLY*/
test_math_ceil(/yes[^]*day/);
test_math_ceil(+0);
test_math_ceil(null);
test_math_ceil(/(\w+)\s(\w+)/);
test_math_ceil(/[^.]+/);
test_math_ceil(-0);
test_math_ceil("F9IO1TD8O");
test_math_ceil(true);
test_math_ceil(1.2442286747492069e+307);
test_math_ceil("UWI");
test_math_ceil(2.858967029550784e+306);
test_math_ceil(/ab+c/);
test_math_ceil("6342E");
test_math_ceil(false);
test_math_ceil(-439);
test_math_ceil(-151);
test_math_ceil(1.2658989211910405e+307);
test_math_ceil(/\r\n|\r|\n/);
test_math_ceil(-535);
test_math_ceil("5XI");
test_math_ceil("M6C");
test_math_ceil(5.601619626499442e+307);
test_math_ceil(5.304503201492832e+307);
test_math_ceil(-807);
test_math_ceil(NaN);
test_math_ceil(4.155914260240506e+306);
test_math_ceil(8.288864723321639e+307);
test_math_ceil(-905);
test_math_ceil("B5XS9R2GL");
test_math_ceil(-701);
test_math_ceil(1.5019129022479046e+308);
test_math_ceil(-57);
test_math_ceil("F5CPTC4O");
test_math_ceil("TPDQMT3OM");
test_math_ceil(1.2296261970299845e+308);
test_math_ceil(-863);
test_math_ceil("8VOG");
test_math_ceil(Infinity);
test_math_ceil(9.175714775504286e+307);
test_math_ceil("WB3H56");
test_math_ceil(-101);
test_math_ceil("TGE16G3T6");
test_math_ceil(1.7501662582637968e+308);
test_math_ceil(-999);
test_math_ceil(1.1189130158531908e+308);
test_math_ceil("R2N7IP8WI5");
test_math_ceil("KSFIZY0H5");
test_math_ceil(3.9544947761564404e+307);
test_math_ceil("H851TWW2NI");
test_math_ceil("8BZNJW5NP");
test_math_ceil("F7EV6VX2S");
test_math_ceil(1.7051062357229903e+308);
test_math_ceil(1.231469086228462e+308);
test_math_ceil(-15);
test_math_ceil(-315);
test_math_ceil("ARIF0L");
test_math_ceil(1.5669885148874042e+308);
test_math_ceil(1.5263797810776393e+308);
test_math_ceil(8.56624765434194e+305);
test_math_ceil(-285);
test_math_ceil("7Q8TJN0");
test_math_ceil(/foo/g);
test_math_ceil(-273);
test_math_ceil(614);
test_math_ceil(-993);
test_math_ceil("EQD6EXYF4K");
test_math_ceil(-111);
test_math_ceil(-205);
test_math_ceil("SIYA");
test_math_ceil(7.745909965595419e+307);
test_math_ceil(-129);
test_math_ceil(/yes.*day/);
test_math_ceil("21WEHLJI");
test_math_ceil(1.6149178718594273e+308);
test_math_ceil(-443);
test_math_ceil(undefined);
test_math_ceil("SHLF1GXK");
test_math_ceil(-705);
test_math_ceil(8.336726423822714e+306);
test_math_ceil(1.791407184525393e+308);
test_math_ceil(-643);
test_math_ceil(-843);
test_math_ceil(5.400340591766669e+307);
test_math_ceil(604);
test_math_ceil(-291);
test_math_ceil(8.154751082159955e+307);
test_math_ceil(1.000894804230261e+308);
test_math_ceil(-335);
test_math_ceil(-799);
test_math_ceil(1.2608768787162103e+308);
test_math_ceil(2.6240944847227833e+307);
test_math_ceil("AYZ");
test_math_ceil(/[\u0400-\u04FF]+/g);
test_math_ceil(-967);
test_math_ceil(-939);
test_math_ceil("U5DMMFGOV0");
test_math_ceil(-385);
test_math_ceil(-459);
test_math_ceil("QK3KNWJ");
test_math_ceil("9PIVTVSUH");
test_math_ceil("TJG5");
test_math_ceil(1.6270313810035653e+308);
test_math_ceil(5.004546348614593e+307);
test_math_ceil("J2EZ1V7I");
test_math_ceil("WQ8V8D9ZMK");
test_math_ceil(1.0318500434545147e+308);
test_math_ceil(-729);
test_math_ceil("D3O");
test_math_ceil("VFH");
test_math_ceil("LGY75V5P");
test_math_ceil(7.546928775954879e+307);
test_math_ceil(5.615416086300365e+307);
test_math_ceil("L5YLX");
test_math_ceil(-561);
test_math_ceil("Q8A60");
test_math_ceil(-169);
test_math_ceil("0QDFZBW");
test_math_ceil(6.600338487284319e+307);
test_math_ceil(-93);
test_math_ceil(2.1325454630154747e+307);
test_math_ceil(5.408432905307984e+307);
test_math_ceil(7.02556971106908e+307);
test_math_ceil("J1D50GL1K");
test_math_ceil(-695);
test_math_ceil(-953);
test_math_ceil(1.0758558279966097e+308);
test_math_ceil(9.88736030270389e+307);
test_math_ceil(8.861721706755873e+307);
test_math_ceil(-995);
test_math_ceil(-795);
test_math_ceil("93M1SS7IZA");
test_math_ceil(-357);
test_math_ceil("I6DSM4SSL");
test_math_ceil(1.0394419293900344e+307);
test_math_ceil("T3N91UA2W");
test_math_ceil(3.4599615935639606e+307);
test_math_ceil(9.41215159664635e+307);
test_math_ceil("QIM");
test_math_ceil(-609);
test_math_ceil(-965);
test_math_ceil("JIACE2");
test_math_ceil(-685);
test_math_ceil("G1YCET3");
test_math_ceil("YI8G");
test_math_ceil(9.64661460473186e+307);
test_math_ceil(1.3776041751693858e+308);
test_math_ceil(8.792566244012414e+307);
test_math_ceil(1.6822955788332106e+308);
test_math_ceil(1.231537536136359e+308);
test_math_ceil("I799Z22T");
test_math_ceil("OUO7");
test_math_ceil("O77XQPY9D8");
test_math_ceil(-31);
test_math_ceil(-427);
test_math_ceil("QTLQVJK");
test_math_ceil("DVHOF");
test_math_ceil(-479);
test_math_ceil(1.1535078065054204e+308);
test_math_ceil(-787);
test_math_ceil(-517);
test_math_ceil(-659);
test_math_ceil(1.4921348568711426e+308);
test_math_ceil(-331);
test_math_ceil(-677);
test_math_ceil("4Y9437U");
test_math_ceil(-819);
test_math_ceil(-415);
test_math_ceil(-161);
test_math_ceil(1.400558021246864e+308);
test_math_ceil("BLVVLFAXVZ");
test_math_ceil(-543);
test_math_ceil(-513);
test_math_ceil(1.4882581376019543e+308);
test_math_ceil(-519);
test_math_ceil(1.4092143711503725e+308);
test_math_ceil("70MZQ");
test_math_ceil("L1UFR8W");
test_math_ceil(-307);
test_math_ceil(-607);
test_math_ceil("DMG");
test_math_ceil(-421);
test_math_ceil(1.2988962064701415e+307);
test_math_ceil(1.0775841923891236e+308);
test_math_ceil("C2V3PP");
test_math_ceil("OTAE");
test_math_ceil(-887);
test_math_ceil(1.8230882989167842e+306);
test_math_ceil("NECW6N");
test_math_ceil("24QR");
test_math_ceil(-497);
test_math_ceil(1.654901071238164e+307);
test_math_ceil(1.2120482335733156e+308);
test_math_ceil(-697);
test_math_ceil(4.226343778324041e+307);
test_math_ceil("WXQ17X1Y3M");
test_math_ceil("W4FUE");
test_math_ceil(-99);
test_math_ceil(1.580397293069979e+307);
test_math_ceil(5.240629487436153e+307);
test_math_ceil(5.455486596691102e+307);
test_math_ceil(-933);
test_math_ceil(1.097027828104774e+308);
test_math_ceil("6ZJI6DS5");
test_math_ceil(2.5944145987211413e+307);
test_math_ceil("FSJ7IQ");
test_math_ceil(6.850906221724352e+307);
test_math_ceil(4.3288152261768375e+307);
test_math_ceil("N5SF5");
test_math_ceil(-539);
test_math_ceil(5.613883669524747e+307);
test_math_ceil(-217);
test_math_ceil(3.5200504810912903e+307);
test_math_ceil(5.669872156102456e+306);
test_math_ceil(-511);
test_math_ceil("E0O643");
test_math_ceil(-11);
test_math_ceil(7.47268713984933e+307);
test_math_ceil(-319);
test_math_ceil("PV5YKTI38");
test_math_ceil(-855);
test_math_ceil("CZL9KO");
test_math_ceil(-577);
test_math_ceil("5FAM0X");
test_math_ceil("5VB3");
test_math_ceil(-419);
test_math_ceil("R7L");
test_math_ceil("NASVCV");
test_math_ceil("FP5FQMPNCY");
test_math_ceil(4.606990789797301e+307);
test_math_ceil(6.54381412516023e+307);
test_math_ceil("CPO7");
test_math_ceil(-603);
test_math_ceil(1.2283122573479944e+308);
test_math_ceil(8.834818950996752e+307);
test_math_ceil(-913);
test_math_ceil("0LHQBFD3F4");
test_math_ceil(1.7488154532270093e+308);
test_math_ceil(-449);
test_math_ceil(-499);
test_math_ceil(-81);
test_math_ceil(1.2822626155720665e+308);
test_math_ceil("YQ3BD0V");
test_math_ceil(1.6151939793306678e+308);
test_math_ceil("BKZXSBG");
test_math_ceil("T1ZPZQBWP");
test_math_ceil(-589);
test_math_ceil("3ZP");
test_math_ceil(8.044652308922681e+307);
test_math_ceil(-709);
test_math_ceil("SFZ");
test_math_ceil("KZ5");
test_math_ceil("7BB45");
test_math_ceil("Y4L7CW");
test_math_ceil(1.4393495539556458e+308);
test_math_ceil(1.3008300845039242e+308);
test_math_ceil("HUHL1W");
test_math_ceil("8YWXGX5");
test_math_ceil("5ZC4BF");
test_math_ceil("ZJFV7");
test_math_ceil(-777);
test_math_ceil("60ILO9");
test_math_ceil("RLX");
test_math_ceil(-305);
test_math_ceil(-521);
test_math_ceil("SHKD7Q7O");
test_math_ceil(1.378767203668257e+308);
test_math_ceil(1.2823433487129508e+308);
test_math_ceil(-113);
test_math_ceil(1.3793707459900006e+308);
test_math_ceil(8.192143226134393e+307);
test_math_ceil(1.5193490628631904e+308);
test_math_ceil(1.5410133489107873e+308);
test_math_ceil(1.0481127883033814e+308);
test_math_ceil(-551);
test_math_ceil("0K0K3W");
test_math_ceil("L6SST1P");
test_math_ceil(1.4523658067235011e+308);
test_math_ceil(5.701136950138402e+307);
test_math_ceil(5.082760403132639e+307);
test_math_ceil("YZZGBV");
test_math_ceil("B8VZ");
test_math_ceil(1.3715504618796268e+308);
test_math_ceil(-247);
test_math_ceil(1.728274494357555e+308);
test_math_ceil(-405);
test_math_ceil(8.598902300265442e+307);
test_math_ceil("RO47PCE6");
test_math_ceil("QW7IZNMC");
test_math_ceil("PVG0DI");
test_math_ceil("SQAEB");
test_math_ceil(2.989505666579935e+306);
test_math_ceil(-639);
test_math_ceil(-485);
test_math_ceil("QAW98L2KI");
test_math_ceil(7.270543871854499e+307);
test_math_ceil(1.631576277301951e+308);
test_math_ceil(-533);
test_math_ceil(-689);
test_math_ceil(-143);
test_math_ceil("NRW4KBGJGE");
test_math_ceil("P6TU2Z");
test_math_ceil("JBU9TB");
test_math_ceil(-943);
test_math_ceil("9KZ8MCJETE");
test_math_ceil(2.9635808266033156e+307);
test_math_ceil("65JGI1JR");
test_math_ceil(4.0659169367782876e+307);
test_math_ceil(4.877493630427432e+307);
test_math_ceil(1.5767713197054684e+308);
test_math_ceil(1.7630135421672285e+308);
test_math_ceil(-775);
test_math_ceil(-277);
test_math_ceil("HRO1TL9V");
test_math_ceil("UD1EUCWAT");
test_math_ceil("3UKPZY1712");
test_math_ceil(9.34798581661341e+307);
test_math_ceil(-803);
test_math_ceil(-381);
test_math_ceil("4WF3Z9Z");
test_math_ceil(-869);
test_math_ceil(1.206293981346693e+308);
test_math_ceil(-201);
test_math_ceil(-51);
test_math_ceil("2RNAFL4");
test_math_ceil("W08X");
test_math_ceil(4.0943237240153425e+307);
test_math_ceil("NRWZWU");
test_math_ceil(1.1541585314961935e+308);
test_math_ceil(9.383973154869033e+307);
test_math_ceil(1.4179661744957192e+308);
test_math_ceil(-321);
test_math_ceil(7.938021691005285e+307);
test_math_ceil("VPK3C");
test_math_ceil("VZBB6EVHD4");
test_math_ceil(-559);
test_math_ceil(6.95492555967913e+307);
test_math_ceil("OQL45");
test_math_ceil(3.901494821912105e+307);
test_math_ceil(8.700221357570805e+307);
test_math_ceil("0I0Q1");
test_math_ceil(-969);
test_math_ceil(204);
test_math_ceil("3SW");
test_math_ceil(-687);
test_math_ceil("SLY7KEZK");
test_math_ceil("KUG");
test_math_ceil(6.417152814003096e+307);
test_math_ceil(1.038725269221358e+308);
test_math_ceil(6.618946364951912e+307);
test_math_ceil("5EZ8VP2IR0");
test_math_ceil("9IY87NJM");
test_math_ceil(-173);
test_math_ceil(-477);
test_math_ceil(420);
test_math_ceil(-263);
test_math_ceil("PDM");
test_math_ceil(1.5583211237006505e+308);
test_math_ceil(1.5608205973139224e+308);
test_math_ceil(-241);
test_math_ceil(6.819435203005027e+307);
test_math_ceil(-361);
test_math_ceil(1.1000382453732157e+308);
test_math_ceil("FM8YDD");
test_math_ceil(-975);
test_math_ceil("7VGM");
test_math_ceil(-947);
test_math_ceil("TQIJMX1N");
test_math_ceil(1.105207924051457e+308);
test_math_ceil(-155);
test_math_ceil(-899);
test_math_ceil("TPKQB9");
test_math_ceil(-987);
test_math_ceil(-207);
test_math_ceil(1.3062163323808838e+308);
test_math_ceil("JMYU");
test_math_ceil("YXHPR3MEI");
test_math_ceil("QUC8NC");
test_math_ceil("918XW");
test_math_ceil(1.1371177889244203e+308);
test_math_ceil(3.0953764424800464e+307);
test_math_ceil(1.6655051938400567e+308);
test_math_ceil("FG2Q3H94P");
test_math_ceil(6.98623233233789e+307);
test_math_ceil("Z68VVZTE");
test_math_ceil("4Q3PTXGD4D");
test_math_ceil(-625);
test_math_ceil("X4VA6ZD");
test_math_ceil("0ABYD");
test_math_ceil(1.342524361181815e+308);
test_math_ceil("8HH3YIOL");
test_math_ceil(1.1298671722943902e+307);
test_math_ceil(1.788907805684019e+308);
test_math_ceil(-377);
test_math_ceil(7.462962893623018e+307);
test_math_ceil(8.948744370434172e+307);
test_math_ceil(4.4846840789916066e+306);
test_math_ceil("OLTYH");
test_math_ceil("QUT0NEZ70");
test_math_ceil(1.6486309450047194e+307);
test_math_ceil(8.394237976684285e+307);
test_math_ceil("NMPAJ34VGA");
test_math_ceil(-365);
test_math_ceil(-841);
test_math_ceil("K0HPWB");
test_math_ceil(-35);
test_math_ceil("8NIJ5C2ZI6");
test_math_ceil("QSO");
test_math_ceil(8.091075409005826e+307);
test_math_ceil(796);
test_math_ceil(-901);
test_math_ceil(-949);
test_math_ceil(5.604992477013006e+307);
test_math_ceil(3.938751905971565e+307);
test_math_ceil("FA96CL3");
test_math_ceil("SQ3UXOVM");
test_math_ceil(3.013597579597502e+307);
test_math_ceil(4.272339198586518e+307);
test_math_ceil(1.6116828230981205e+307);
test_math_ceil(1.257018011126687e+308);
test_math_ceil(9.138340879499866e+307);
test_math_ceil("R6S04");
test_math_ceil("XSTX05N");
test_math_ceil(2.643419279461909e+307);
test_math_ceil(1.7901072907351772e+308);
test_math_ceil(-279);
test_math_ceil("44ENW08V");
test_math_ceil(-227);
test_math_ceil(1.5470888739846494e+308);
test_math_ceil(-455);
test_math_ceil(9.751034752380455e+307);
test_math_ceil("46XLJQLC8");
test_math_ceil("8RU");
test_math_ceil(1.6350725324009514e+308);
test_math_ceil(5.661925235750842e+307);
test_math_ceil("5A5QXA");
test_math_ceil("PA92");
test_math_ceil("E62EI");
test_math_ceil(1.3477497294410283e+308);
test_math_ceil(-349);
test_math_ceil(4.3554181102160274e+307);
test_math_ceil(4.086910639115716e+307);
test_math_ceil("5FSYL");
test_math_ceil("CM02QYOP");
test_math_ceil("38OD6N5");
test_math_ceil(1.0726373487353032e+308);
test_math_ceil("8UWI9");
test_math_ceil(1.274246783282188e+307);
test_math_ceil("QJ1TDAD");
test_math_ceil(-157);
test_math_ceil(5.24409749921136e+307);
test_math_ceil("KNGZQ5ZO");
test_math_ceil(-809);
test_math_ceil("0B2BU");
test_math_ceil(-409);
test_math_ceil("NIWLZZ7K1J");
test_math_ceil("ESCLIOCV");
test_math_ceil("X8Y");
test_math_ceil("JTL4G5");
test_math_ceil(3.538415191726103e+307);
test_math_ceil(8.73849024703667e+307);
test_math_ceil(1.2123226569403248e+308);
test_math_ceil(-531);
test_math_ceil("FGM14GFPRI");
test_math_ceil(-583);
test_math_ceil(6.773512471458724e+307);
test_math_ceil(-367);
test_math_ceil(-197);
test_math_ceil("6AQ1HGCR");
test_math_ceil(1.3681519949325034e+306);
test_math_ceil(1.1399113944325595e+308);
test_math_ceil(5.204239542525558e+307);
test_math_ceil(-293);
test_math_ceil("TDBZ");
test_math_ceil(-769);
test_math_ceil("27D");
test_math_ceil(1.199616496522582e+308);
test_math_ceil(1.471701444881413e+308);
test_math_ceil(7.430938043637812e+307);
test_math_ceil("L50IN2");
test_math_ceil(1.5797210220899884e+308);
test_math_ceil("KEVIBMC");
test_math_ceil(1.720064448314921e+308);
test_math_ceil("1PSH");
test_math_ceil("6K9YVMA9F");
test_math_ceil(1.1476083182511752e+308);
test_math_ceil(-631);
test_math_ceil(2.048324017916e+307);
test_math_ceil("ULHA");
test_math_ceil(-5);
test_math_ceil("9FS");
test_math_ceil("8TK09UZFK5");
test_math_ceil("31A5DI415");
test_math_ceil(1.5925893484649038e+308);
test_math_ceil(-461);
test_math_ceil(-743);
test_math_ceil(-219);
test_math_ceil("DYOFS72Y");
test_math_ceil(4.406274617056714e+306);
test_math_ceil("XNYHH9I5V5");
test_math_ceil(6.92517797836386e+307);
test_math_ceil("9NU2V5P");
test_math_ceil("ZCXIHYCV5O");
test_math_ceil("RVS4");
test_math_ceil("QDLWYFWYZ2");
test_math_ceil(-773);
test_math_ceil("X8QY");
test_math_ceil(-133);
test_math_ceil(-465);
test_math_ceil(-257);
test_math_ceil(2.2856043648490124e+307);
test_math_ceil(1.4227036700231907e+308);
test_math_ceil("J95JTT1");
test_math_ceil("0C11WLDL");
test_math_ceil(5.830019400652232e+306);
test_math_ceil(-429);
test_math_ceil(7.569761707314555e+307);
test_math_ceil("CU9J6JE");
test_math_ceil("AKHRL");
test_math_ceil(5.767917410925118e+307);
test_math_ceil(5.202339487541274e+307);
test_math_ceil(-425);
test_math_ceil(-91);
test_math_ceil("2VN33NL7");
test_math_ceil(1.2085614872089035e+308);
test_math_ceil(-553);
test_math_ceil(-637);
test_math_ceil(4.35232485035712e+307);
test_math_ceil(6.428532015881337e+307);
test_math_ceil("E9PNUEDOH");
test_math_ceil(1.52792699074096e+308);
test_math_ceil(3.05978205981359e+306);
test_math_ceil(5.8292310121041855e+307);
test_math_ceil(-55);
test_math_ceil(-733);
test_math_ceil(1.3884937649493054e+308);
test_math_ceil(150);
test_math_ceil(8.484766570609458e+307);
test_math_ceil("8BL");
test_math_ceil("63UGO");
test_math_ceil("7MUNDQO");
test_math_ceil(-435);
test_math_ceil(-397);
test_math_ceil(-407);
test_math_ceil(3.988617093790421e+307);
test_math_ceil(1.562363296332544e+307);
test_math_ceil(-989);
test_math_ceil("N5E3H08Y3");
test_math_ceil("FAP");
test_math_ceil("CVEC9NE");
test_math_ceil(8.511011850747692e+307);
test_math_ceil("T57IPK");
test_math_ceil(-861);
test_math_ceil(1.1306356291033361e+308);
test_math_ceil(-467);
test_math_ceil(-243);
test_math_ceil(7.609798276104218e+307);
test_math_ceil(868);
test_math_ceil("TVXH");
test_math_ceil("ESFC6B");
test_math_ceil(-825);
test_math_ceil(8.66422137789802e+306);
test_math_ceil(-7);
test_math_ceil(1.6370209917122845e+307);
test_math_ceil(-891);
test_math_ceil(1.523394851409529e+308);
test_math_ceil(1.1017236040596885e+308);
test_math_ceil(-839);
test_math_ceil(-137);
test_math_ceil(-951);
test_math_ceil("2AU6KEJW");
test_math_ceil(5.28391751491306e+307);
test_math_ceil(1.5826321898484252e+308);
test_math_ceil(1.9524979195441665e+307);
test_math_ceil(-621);
test_math_ceil(-813);
test_math_ceil(7.503324230054577e+307);
test_math_ceil(5.519419980214637e+307);
test_math_ceil(6.748820937279237e+307);
test_math_ceil(1.231450094558831e+308);
test_math_ceil("7QLD5");
test_math_ceil("GK3K9DF");
test_math_ceil(-23);
test_math_ceil(3.2311899630587793e+307);
test_math_ceil(-351);
test_math_ceil(-153);
test_math_ceil(1.010264923761326e+308);
test_math_ceil("ADGS1GJT9");
test_math_ceil(-755);
test_math_ceil(1.2269872650526965e+308);
test_math_ceil(2.4831775888117733e+307);
test_math_ceil("L3G23AFN");
test_math_ceil("ITP");
test_math_ceil(1.6059036131812205e+308);
test_math_ceil("9TMW");
test_math_ceil(1.5131472452963676e+308);
test_math_ceil(1.7300856161870013e+307);
test_math_ceil(-693);
test_math_ceil("BSGMCG");
test_math_ceil(-545);
test_math_ceil(2.9812383907114795e+307);
test_math_ceil(1.1435745586843964e+307);
test_math_ceil(-191);
test_math_ceil(1.5663501451285348e+308);
test_math_ceil("TDNLF6N");
test_math_ceil(-529);
test_math_ceil(326);
test_math_ceil(4.978065411181056e+307);
test_math_ceil("34N");
test_math_ceil("O8TI9WO93");
test_math_ceil(3.4860542842040433e+307);
test_math_ceil(3.988361633155572e+307);
test_math_ceil(1.412884085669783e+308);
test_math_ceil(9.67592376033121e+307);
test_math_ceil(-187);
test_math_ceil(1.46154134699661e+308);
test_math_ceil("6H1J");
test_math_ceil("SYA9RX6");
test_math_ceil(6.419514672040894e+307);
test_math_ceil(4.569740460788831e+306);
test_math_ceil(8.022250355232861e+307);
test_math_ceil("AR85VKD8W4");
test_math_ceil("JTZS505K6");
test_math_ceil(5.13498012320101e+307);
test_math_ceil(-991);
test_math_ceil("Y2B7GUJNU");
test_math_ceil(3.87319303928597e+307);
test_math_ceil("QFJU4T");
test_math_ceil("KTBNUT8R");
test_math_ceil(2.604143243198828e+307);
test_math_ceil("GV73LR7S4H");
test_math_ceil(2.90749992163509e+307);
test_math_ceil("GJP05JP9B9");
test_math_ceil(-537);
test_math_ceil(-299);
test_math_ceil(3.179537877623849e+307);
test_math_ceil(9.052762048600292e+307);
test_math_ceil(1.3900924354225122e+308);
test_math_ceil(-509);
test_math_ceil(1.6309408431896268e+308);
test_math_ceil(6.742810255092352e+307);
test_math_ceil(-661);
test_math_ceil(1.001351127312045e+308);
test_math_ceil(-249);
test_math_ceil("B0RU5");
test_math_ceil(1.5510198357034385e+308);
test_math_ceil(1.2756005096198103e+308);
test_math_ceil(-593);
test_math_ceil("KXN");
test_math_ceil(-765);
test_math_ceil(-515);
test_math_ceil(-71);
test_math_ceil("6TYH");
test_math_ceil("GHCLM2L6P");
test_math_ceil(1.295058832331711e+308);
test_math_ceil(1.6742060353457837e+308);
test_math_ceil(6.146343441683616e+306);
test_math_ceil("VAOHLCV");
test_math_ceil("J9CH");
test_math_ceil(1.5584060162543358e+308);
test_math_ceil(5.726977738042402e+307);
test_math_ceil("1JQESC");
test_math_ceil(9.504084801676942e+307);
test_math_ceil(1.7371109759082773e+308);
test_math_ceil("EM5HNSM");
test_math_ceil("EM97B");
test_math_ceil(7.72926485451103e+307);
test_math_ceil(4.516238696047643e+307);
test_math_ceil(6.861904602332648e+307);
test_math_ceil(1.0484086663623334e+308);
test_math_ceil("QTOO2");
test_math_ceil("CYJ8V04I3");
test_math_ceil("DO1PAUXH5");
test_math_ceil("2SEZEZ");
test_math_ceil(-501);
test_math_ceil(-789);
test_math_ceil(9.74423307309421e+307);
test_math_ceil(1.2551678300865169e+307);
test_math_ceil(6.899102973818446e+307);
test_math_ceil("3MU5I1SS");
test_math_ceil("XNSTAMDRX");
test_math_ceil(-979);
test_math_ceil("Y6M");
test_math_ceil(1.6873016183166627e+308);
test_math_ceil(2.0395594766579505e+307);
test_math_ceil("UYDATH8JAR");
test_math_ceil(-853);
test_math_ceil(-437);
test_math_ceil(1.3373362413927037e+308);
test_math_ceil("B7B63K5Q");
test_math_ceil(-337);
test_math_ceil(2.6538145354269475e+306);
test_math_ceil("7RNBHS1");
test_math_ceil(-175);
test_math_ceil(1.7822373172560583e+308);
test_math_ceil("T5YEA");
test_math_ceil(1.0864487535111287e+308);
test_math_ceil(1.286900273441006e+308);
test_math_ceil("UE6Y1Z");
test_math_ceil("YDR9J2SB");
test_math_ceil("IFIQK84");
test_math_ceil(1.4779313509505525e+308);
test_math_ceil("DFAZ");
test_math_ceil(8.518080285945358e+307);
test_math_ceil(9.714244183726186e+307);
test_math_ceil("IDTRBMZZ4U");
test_math_ceil(4.896080520040847e+307);
test_math_ceil("B1WSA7ZBE");
test_math_ceil("LFCRFGYW");
test_math_ceil(1.3481732629610752e+308);
test_math_ceil("CRY8G3G1X8");
test_math_ceil("SIJZ8");
test_math_ceil(4.758924174380804e+307);
test_math_ceil(7.05490837903549e+307);
test_math_ceil("R7JJ");
test_math_ceil(3.9058615600258814e+306);
test_math_ceil(-359);
test_math_ceil(1.7375825657011659e+308);
test_math_ceil("BU8LA");
test_math_ceil(-759);
test_math_ceil("LX0UYCKZJ");
test_math_ceil("VLS12W7GFI");
test_math_ceil(9.457310633667033e+307);
test_math_ceil(1.4286605351248058e+307);
test_math_ceil(616);
test_math_ceil("KAGIPK6");
test_math_ceil("VNLLXOV");
test_math_ceil(1.5530271623562257e+308);
test_math_ceil("QMZRV8XG");
test_math_ceil(-21);
test_math_ceil(8.358754920564798e+307);
test_math_ceil("SU0KW40");
test_math_ceil("7ZCE");
test_math_ceil(4.747835445615725e+307);
test_math_ceil("PXV");
test_math_ceil("ABR115B");
test_math_ceil("8MEP");
test_math_ceil(-167);
test_math_ceil(1.3394139228991066e+308);
test_math_ceil("62FEWB12R");
test_math_ceil("A4HHRZM8");
test_math_ceil(6.996229279506611e+307);
test_math_ceil(1.4483837505930347e+307);
test_math_ceil(-491);
test_math_ceil(1.681695232188476e+308);
test_math_ceil("83J1T");
test_math_ceil(-261);
test_math_ceil(-963);
test_math_ceil("11BP8RL");
test_math_ceil("J5YV31YGJZ");
test_math_ceil(5.437801950740828e+307);
test_math_ceil("NNIKKA6F0");
test_math_ceil(5.348418518254576e+307);
test_math_ceil(2.2678943283541558e+305);
test_math_ceil("7DI12");
test_math_ceil(1.3437265315462263e+308);
test_math_ceil(5.001560510590663e+307);
test_math_ceil("B3QK45");
test_math_ceil(-85);
test_math_ceil(9.948298551762903e+307);
test_math_ceil(-563);
test_math_ceil("IFN");
test_math_ceil(3.9889547944295353e+307);
test_math_ceil(3.1532354480556263e+307);
test_math_ceil("TTMI");
test_math_ceil("ANHQU775VR");
test_math_ceil("EZMITEA0");
test_math_ceil(-235);
test_math_ceil("SJ7T0M");
test_math_ceil("MM941B5C");
test_math_ceil(1.4480948212451506e+308);
test_math_ceil("L55QP38");
test_math_ceil("W17B1Z3J4");
test_math_ceil("GHEQS");
test_math_ceil("Y55U8AI4XE");
test_math_ceil("IF0");
test_math_ceil(2.876242319599768e+307);
test_math_ceil(5.152751437427604e+307);
test_math_ceil("07EKQ");
test_math_ceil(-343);
test_math_ceil(-741);
test_math_ceil(3.344737164751993e+307);
test_math_ceil(2.2076942080595415e+305);
test_math_ceil("5621E7LFP");
test_math_ceil("W6GXU");
test_math_ceil("1JHCU");
test_math_ceil(-213);
test_math_ceil(-961);
test_math_ceil(-125);
test_math_ceil("HAQYDQGF");
test_math_ceil(-827);
test_math_ceil(3.4568567100525913e+307);
test_math_ceil(8.786883186302434e+307);
test_math_ceil(5.979930561890759e+307);
test_math_ceil("342H39IMU7");
test_math_ceil("V3A8O6");
test_math_ceil("A73J");
test_math_ceil(2.9110261767845287e+307);
test_math_ceil(2.4301483926681897e+307);
test_math_ceil(1.4290765475141675e+308);
test_math_ceil("A5P");
test_math_ceil(-431);
test_math_ceil("I6HVO");
test_math_ceil(1.358286909239077e+308);
test_math_ceil(-105);
test_math_ceil(2.520955339019951e+306);
test_math_ceil(7.604971158621029e+307);
test_math_ceil("6CAIAYBEW9");
test_math_ceil(5.064050975243882e+307);
test_math_ceil("4ZNA8P6");
test_math_ceil("01Q");
test_math_ceil(-579);
test_math_ceil("YH785BP");
test_math_ceil("HHN5S");
test_math_ceil("AAV9G0444");
test_math_ceil("HE7IP80AY");
test_math_ceil(9.496229465727195e+307);
test_math_ceil("UBP99NZL");
test_math_ceil("ABHGL");
test_math_ceil(8.78332720889346e+307);
test_math_ceil(3.154347897137448e+307);
test_math_ceil("D3J5E1V7ST");
test_math_ceil("SJI");
test_math_ceil("UNL3");
test_math_ceil(-925);
test_math_ceil(2.973727002366961e+307);
test_math_ceil("Y2CX1MFOW");
test_math_ceil(1.7504029139185746e+308);
test_math_ceil("XOCI7Z");
test_math_ceil(2.8428253410208726e+307);
test_math_ceil(-87);
test_math_ceil(1.2065062395070717e+308);
test_math_ceil("9111");
test_math_ceil(1.7901956938988404e+308);
test_math_ceil(1.5309305080683667e+308);
test_math_ceil(-629);
test_math_ceil(-753);
test_math_ceil(1.3612540538240357e+308);
test_math_ceil(2.2261984212060968e+307);
test_math_ceil(-47);
test_math_ceil(-959);
test_math_ceil(-829);
test_math_ceil(1.7383694123157208e+308);
test_math_ceil("LNMJK");
test_math_ceil("5DQPFFD0Q");
test_math_ceil("2Q6");
test_math_ceil(-447);
test_math_ceil("ZJ8T");
test_math_ceil(1.5590068622838507e+307);
test_math_ceil(1.206689671248762e+308);
test_math_ceil(4.964986504375201e+307);
test_math_ceil("L3YXD9NPG");
test_math_ceil("ZNEGM9");
test_math_ceil("0B81");
test_math_ceil(5.756983019024253e+307);
test_math_ceil(-29);
test_math_ceil(1.1100877319654422e+308);
test_math_ceil("OLHONFR3D");
test_math_ceil(5.700839710537714e+307);
test_math_ceil("RO7");
test_math_ceil(-61);
test_math_ceil(2.321113913830938e+307);
test_math_ceil("95BT3T");
test_math_ceil("1M6");
test_math_ceil("ZZMVVD");
test_math_ceil("HIVXR7KNZ9");
test_math_ceil(-783);
test_math_ceil(-281);
test_math_ceil(8.89817619143291e+307);
test_math_ceil("HY7L5B");
test_math_ceil(1.6604148312926656e+308);
test_math_ceil("8QRL");
test_math_ceil(-189);
test_math_ceil("H8L");
test_math_ceil(1.5351188397715136e+307);
test_math_ceil(1.1760905768280441e+308);
test_math_ceil(7.926535781702832e+307);
test_math_ceil("Y7KQ4");
test_math_ceil("DTG");
test_math_ceil(-317);
test_math_ceil(2.9277379200525973e+307);
test_math_ceil(7.484016859370614e+307);
test_math_ceil("3MCCOI");
test_math_ceil(-115);
test_math_ceil(1.6716274888613723e+308);
test_math_ceil("M9FAYUAM");
test_math_ceil("R8IHXCR1S");
test_math_ceil("G4N");
test_math_ceil(1.1138431454162092e+306);
test_math_ceil(1.1750922657547214e+308);
test_math_ceil(1.6331696625383037e+308);
test_math_ceil(-417);
test_math_ceil(1.2225087046396936e+308);
test_math_ceil("1LPECG");
test_math_ceil(-837);
test_math_ceil(1.1072974406629531e+308);
test_math_ceil(8.318423251839914e+307);
test_math_ceil(1.261514184876176e+308);
test_math_ceil(1.2528280228942761e+308);
test_math_ceil(-541);
test_math_ceil(4.627647214973237e+307);
test_math_ceil("8SNBAZJN");
test_math_ceil(8.380016666470465e+307);
test_math_ceil(1.1853640102564575e+308);
test_math_ceil("BUTV7P");
test_math_ceil("73ZLS");
test_math_ceil(1.539517282887173e+308);
test_math_ceil(1.1990019536702312e+308);
test_math_ceil("3YV8F8V");
test_math_ceil(1.6334927710491754e+308);
test_math_ceil(-523);
test_math_ceil("VW5FKNVG5");
test_math_ceil("RHGBINWJ");
test_math_ceil(-395);
test_math_ceil("MQL33FS");
test_math_ceil("N93OR9");
test_math_ceil("Q9GZLD");
test_math_ceil("VXG1");
test_math_ceil(1.521251431373363e+308);
test_math_ceil(9.957354968052937e+307);
test_math_ceil("TFHQH");
test_math_ceil("S6E81YNKI");
test_math_ceil(8.50950416316803e+306);
test_math_ceil(9.926932297120627e+307);
test_math_ceil("T9HF6S");
test_math_ceil(6.949135754815072e+306);
test_math_ceil("Z69PHBK");
test_math_ceil("HGAORIPFA9");
test_math_ceil(1.3421030122700263e+308);
test_math_ceil("7QLK2SV");
test_math_ceil("B9WXZBVBI");
test_math_ceil(-423);
test_math_ceil("L5VXSU");
test_math_ceil(9.606667767988015e+307);
test_math_ceil(-355);
test_math_ceil(-259);
test_math_ceil(9.10604152876943e+307);
test_math_ceil(-585);
test_math_ceil("40RUE3");
test_math_ceil(-265);
test_math_ceil("6QSB8I5U85");
test_math_ceil("UGOWI1FM");
test_math_ceil("UCE8");
test_math_ceil(8.959825500880606e+307);
test_math_ceil("YRQJ2LC8");
test_math_ceil("7B7GW");
test_math_ceil(-889);
test_math_ceil("EH2N3B2QO");
test_math_ceil(8.91698638745411e+307);
test_math_ceil(-209);
test_math_ceil("J41YTK");
test_math_ceil(1.4701238858818768e+308);
test_math_ceil(6.252946567569074e+307);
test_math_ceil("Z23C3VQUK");
test_math_ceil(2.969327983483683e+307);
test_math_ceil(-159);
test_math_ceil(1.4927603564582807e+308);
test_math_ceil(4.324422411642186e+307);
test_math_ceil("WSSIA");
test_math_ceil(7.200496799234041e+307);
test_math_ceil(9.85342573282667e+306);
test_math_ceil("0KBHXICG");
test_math_ceil("03FQ5");
test_math_ceil("X6YN3");
test_math_ceil(8.105092283606004e+307);
test_math_ceil(-835);
test_math_ceil(8.570537345330831e+307);
test_math_ceil(1.5170274316179066e+308);
test_math_ceil(8.934274471068585e+307);
test_math_ceil(1.5503594171237531e+308);
test_math_ceil("10CIX");
test_math_ceil(-817);
test_math_ceil("O1K");
test_math_ceil(-581);
test_math_ceil("HZYY");
test_math_ceil("S37");
test_math_ceil(-907);
test_math_ceil("OJ9WJC6");
test_math_ceil(8.047013575876257e+307);
test_math_ceil(8.428491967336412e+307);
test_math_ceil("HF43");
test_math_ceil(-739);
test_math_ceil(9.443844767450093e+307);
test_math_ceil("MCMPVTHA8");
test_math_ceil(1.2741582484821852e+308);
test_math_ceil(-147);
test_math_ceil("9VZ");
test_math_ceil("XRNLC1PYCI");
test_math_ceil("X9EFXE10O");
test_math_ceil("3UB8OY4");
test_math_ceil(1.034000465873863e+308);
test_math_ceil("FVPNY6D");
test_math_ceil(-199);
test_math_ceil("TXHVYZJ");
test_math_ceil("Q4V");
test_math_ceil("OLH");
test_math_ceil(-41);
test_math_ceil(1.203876272774727e+308);
test_math_ceil(9.35941339979753e+307);
test_math_ceil(1.0801849527106931e+306);
test_math_ceil("YGU");
