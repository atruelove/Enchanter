/*
* This file is automatically generated by Swami
*
* 2019-08-08 15:38:24.934713
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
function test_math_log10(x){
	if (Object.is( x,NaN )){
		var output = Math.log10(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (( x < 0 )){
		var output = Math.log10(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.log10(x);
		assert.strictEqual(- Infinity, output);
		console.log("Good Test");
		return;
		}
	if (( x === - 0 )){
		var output = Math.log10(x);
		assert.strictEqual(- Infinity, output);
		console.log("Good Test");
		return;
		}
	if (( x === 1 )){
		var output = Math.log10(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === + Infinity )){
		var output = Math.log10(x);
		assert.strictEqual(+ Infinity, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}



/*TESTS GENERATED AUTOMATICALLY*/
test_math_log10(false);
test_math_log10(-399);
test_math_log10(+0);
test_math_log10(true);
test_math_log10(Infinity);
test_math_log10(null);
test_math_log10(NaN);
test_math_log10("L9YWIQS");
test_math_log10("K1XFD75");
test_math_log10("KGXSKUKR");
test_math_log10("GWKU4J1");
test_math_log10(/[\u0400-\u04FF]+/g);
test_math_log10(-63);
test_math_log10(8.203798422716925e+307);
test_math_log10(9.852369182342923e+307);
test_math_log10(1.6140472503128275e+307);
test_math_log10("Z0F1N");
test_math_log10(2.2443169632969207e+307);
test_math_log10(-643);
test_math_log10(1.5829245583878761e+308);
test_math_log10("PAF3H8LDD");
test_math_log10(5.385212967691352e+307);
test_math_log10(-57);
test_math_log10(/(\w+)\s(\w+)/);
test_math_log10(/yes[^]*day/);
test_math_log10(1.4226409665722769e+308);
test_math_log10(/[^.]+/);
test_math_log10(-185);
test_math_log10(4.6039862714239675e+305);
test_math_log10(-0);
test_math_log10("HXVCZD4PKG");
test_math_log10("XKHMJPO6Y5");
test_math_log10("5I8J19");
test_math_log10(1.545313130954035e+306);
test_math_log10(-233);
test_math_log10("466WT6M5");
test_math_log10(-135);
test_math_log10(/\r\n|\r|\n/);
test_math_log10(undefined);
test_math_log10(/yes.*day/);
test_math_log10(-321);
test_math_log10(-141);
test_math_log10("UYS97LSJX");
test_math_log10("TW9");
test_math_log10(2.2233471472750413e+307);
test_math_log10(-293);
test_math_log10(8.64278668789254e+307);
test_math_log10("620I75SR62");
test_math_log10(1.7691912390711336e+308);
test_math_log10(1.1225133168914288e+308);
test_math_log10(-203);
test_math_log10(-585);
test_math_log10(-361);
test_math_log10(/foo/g);
test_math_log10(1.23723273261299e+308);
test_math_log10(-155);
test_math_log10(-467);
test_math_log10(-779);
test_math_log10(5.03816358904196e+307);
test_math_log10(-699);
test_math_log10(1.5045481867652666e+308);
test_math_log10("PMXLIWC");
test_math_log10("BBRN");
test_math_log10(-879);
test_math_log10("OS713N1GB");
test_math_log10(1.5520823197924853e+308);
test_math_log10(1.102226726547732e+308);
test_math_log10(-701);
test_math_log10(4.719245797593534e+307);
test_math_log10("1R86");
test_math_log10(1.5016801488603964e+308);
test_math_log10(-833);
test_math_log10("AULQ7T5G");
test_math_log10(/ab+c/);
test_math_log10("943I");
test_math_log10("KE8GH");
test_math_log10(-325);
test_math_log10("VKCEEZ1X");
test_math_log10(-891);
test_math_log10(1.5561871771375586e+308);
test_math_log10("MO1");
test_math_log10(-137);
test_math_log10(-373);
test_math_log10(1.6828873923712314e+307);
test_math_log10(-747);
test_math_log10(-965);
test_math_log10(1.783770101917625e+308);
test_math_log10("FO7HYO1WI3");
test_math_log10(-43);
test_math_log10(1.546749588479513e+308);
test_math_log10(-469);
test_math_log10(1.6740521460851147e+308);
test_math_log10(-211);
test_math_log10("9U46N");
test_math_log10(-753);
test_math_log10("ILQ6CTIEK");
test_math_log10(-249);
test_math_log10(-685);
test_math_log10(-921);
test_math_log10(3.0018177532141523e+307);
test_math_log10(1.787382086505917e+308);
test_math_log10(1.2010720811169907e+308);
test_math_log10(1.3939048575531293e+308);
test_math_log10("OEM05OBQ");
test_math_log10(-887);
test_math_log10("WZ6J7Z");
test_math_log10(-671);
test_math_log10(-221);
test_math_log10("NQ5YXS");
test_math_log10(-499);
test_math_log10(1.787723731988074e+308);
test_math_log10(-133);
test_math_log10(3.5194874933399185e+307);
test_math_log10(-179);
test_math_log10(-5);
test_math_log10(1.5274428337951056e+308);
test_math_log10(8.468013155758773e+307);
test_math_log10("RRGF");
test_math_log10(-897);
test_math_log10(-199);
test_math_log10(-651);
test_math_log10(9.50687732982787e+307);
test_math_log10(4.798579799829005e+307);
test_math_log10("SWO");
test_math_log10("1I8Q1L");
test_math_log10(-407);
test_math_log10(7.631049731132426e+307);
test_math_log10(-387);
test_math_log10(-107);
test_math_log10(-311);
test_math_log10(1.2673906060873726e+308);
test_math_log10(1.565961682885897e+307);
test_math_log10(-587);
test_math_log10(-495);
test_math_log10(-767);
test_math_log10("8WN3");
test_math_log10(-91);
test_math_log10(3.483546283198227e+307);
test_math_log10("RAECPS09T");
test_math_log10(5.549018744692864e+307);
test_math_log10(7.688665918280804e+307);
test_math_log10(1.4707817664268179e+308);
test_math_log10("KMPVW");
test_math_log10("6BL2WO2X8H");
test_math_log10(-989);
test_math_log10(1.7549192133928175e+307);
test_math_log10(1.4056323219691328e+308);
test_math_log10(-423);
test_math_log10("V1R9UWI");
test_math_log10(8.742432704773061e+307);
test_math_log10(786);
test_math_log10("NSDCRO4");
test_math_log10("HUVLOYI");
test_math_log10(-425);
test_math_log10(1.583480702673815e+307);
test_math_log10("HGQHUTZNK");
test_math_log10("20TM5KP");
test_math_log10(-697);
test_math_log10(-541);
test_math_log10("ZKFUEZ1");
test_math_log10(6.960749359757778e+307);
test_math_log10("X3JEGEGJ");
test_math_log10("8FKMNYEP");
test_math_log10(-97);
test_math_log10("TXU4RAXZRR");
test_math_log10(1.6681965693186519e+308);
test_math_log10(-253);
test_math_log10(6.097993004109558e+307);
test_math_log10(1.444332767726113e+308);
test_math_log10(-51);
test_math_log10(-101);
test_math_log10("I3PUFN4");
test_math_log10(-493);
test_math_log10(-69);
test_math_log10(-595);
test_math_log10(1.1174362678770667e+308);
test_math_log10("PXGOG");
test_math_log10(-535);
test_math_log10(-757);
test_math_log10(-507);
test_math_log10("O2YZQIU");
test_math_log10(-719);
test_math_log10("FG2MN4CK9");
test_math_log10(-139);
test_math_log10(1.1432904227673427e+308);
test_math_log10(-251);
test_math_log10(8.173666817202571e+306);
test_math_log10("1G3Q2NVF1");
test_math_log10("DT0O9FD");
test_math_log10(6.756384545536144e+307);
test_math_log10(-257);
test_math_log10(3.584094292382047e+307);
test_math_log10(1.448379154116007e+308);
test_math_log10(-783);
test_math_log10(-553);
test_math_log10(1.4302647385923585e+308);
test_math_log10(9.836567329755328e+307);
test_math_log10(-707);
test_math_log10("MZMF65");
test_math_log10(5.481745123504159e+307);
test_math_log10(-725);
test_math_log10("EMC819");
test_math_log10(-759);
test_math_log10("CL09THJM2");
test_math_log10("XJQMD");
test_math_log10(5.850435167710309e+307);
test_math_log10("3LU1G31SQX");
test_math_log10(-947);
test_math_log10(-121);
test_math_log10(-571);
test_math_log10(1.6400294482658297e+308);
test_math_log10(-563);
test_math_log10(1.3614491167801763e+308);
test_math_log10(1.2574223976315654e+308);
test_math_log10(-3);
test_math_log10(-301);
test_math_log10(-391);
test_math_log10("SQWR6BQE3");
test_math_log10(9.006532393521106e+307);
test_math_log10("MUJ");
test_math_log10("EJECJHZH3");
test_math_log10(8.834311170482754e+307);
test_math_log10(-927);
test_math_log10(-583);
test_math_log10(-503);
test_math_log10(-347);
test_math_log10(1.4324921626620776e+308);
test_math_log10(-809);
test_math_log10(1.426944831904488e+308);
test_math_log10(-723);
test_math_log10(-713);
test_math_log10("D2UWL6OOA");
test_math_log10(2.1094385235279693e+305);
test_math_log10(9.320170836092649e+307);
test_math_log10(1.5836108672728382e+308);
test_math_log10(2.9525677184386577e+307);
test_math_log10("PBS4EEG");
test_math_log10(1.7871127712088026e+308);
test_math_log10("SD82S7LN");
test_math_log10(-923);
test_math_log10(1.6283981618503168e+308);
test_math_log10("PELF");
test_math_log10("T1I7");
test_math_log10("HV5F7YO");
test_math_log10(1.336894137293213e+308);
test_math_log10(1.2814827124662916e+308);
test_math_log10("9EJ");
test_math_log10("2C1D53YDW");
test_math_log10(6.656799422230542e+307);
test_math_log10(6.435952648888305e+306);
test_math_log10(4.1528814326110548e+307);
test_math_log10("OR1");
test_math_log10(-963);
test_math_log10("D7FCHQJN");
test_math_log10(4.395064704223972e+306);
test_math_log10(-481);
test_math_log10(-335);
test_math_log10(6.459245592845402e+307);
test_math_log10("OO4E");
test_math_log10("6UF8CTF");
test_math_log10("50XDJ1");
test_math_log10(1.5172659359046001e+308);
test_math_log10("QRP3T");
test_math_log10(1.3208844658852056e+308);
test_math_log10(1.750253494572084e+308);
test_math_log10("6NC");
test_math_log10(-75);
test_math_log10("7FGD");
test_math_log10(1.705035936908024e+308);
test_math_log10(-519);
test_math_log10("ZIOE1235");
test_math_log10(1.6446755419534863e+308);
test_math_log10(-269);
test_math_log10(-173);
test_math_log10(-529);
test_math_log10("3KWDU");
test_math_log10(5.594880705854043e+307);
test_math_log10(-765);
test_math_log10(-327);
test_math_log10("SQAPCSSL1J");
test_math_log10(-773);
test_math_log10("QV4U93EM5");
test_math_log10("2UIO");
test_math_log10("DJWNJI5JYX");
test_math_log10(1.5283319470959804e+308);
test_math_log10("YT68");
test_math_log10("EFMMS2");
test_math_log10(-331);
test_math_log10("CSNZFS");
test_math_log10(5.074765555978423e+307);
test_math_log10(-681);
test_math_log10(5.41978195858614e+307);
test_math_log10(-845);
test_math_log10(-821);
test_math_log10("XYXHW");
test_math_log10(4.231675721215763e+307);
test_math_log10("TVIHHW");
test_math_log10("Z8TMJF39");
test_math_log10("R4M5PU");
test_math_log10(6.308391471863515e+307);
test_math_log10(1.7418269539727717e+308);
test_math_log10(1.1357334581946743e+308);
test_math_log10(5.340414706978962e+307);
test_math_log10(4.1079766906956195e+307);
test_math_log10("OQM");
test_math_log10(9.93258436510159e+307);
test_math_log10(-641);
test_math_log10(1.3030857468155792e+308);
test_math_log10(1.0475870064849103e+307);
test_math_log10(-883);
test_math_log10(5.025116748913845e+307);
test_math_log10(-689);
test_math_log10(8.654347898493582e+307);
test_math_log10(1.2709800820194422e+308);
test_math_log10("XBJYOT4AS2");
test_math_log10("G4U4MHO4");
test_math_log10(-603);
test_math_log10("56I0XHCZBP");
test_math_log10(-579);
test_math_log10("OS3EFCH55");
test_math_log10(-687);
test_math_log10("CBDW0TMQ");
test_math_log10(1.3460336919974226e+308);
test_math_log10(-861);
test_math_log10("98J9HXZTJ");
test_math_log10("VW5FKNVG5");
test_math_log10(-127);
test_math_log10(-613);
test_math_log10("X7D5V");
test_math_log10(8.673194789327525e+307);
test_math_log10(1.0608751697879155e+308);
test_math_log10("UC0USLXN");
test_math_log10(1.0242557418758978e+307);
test_math_log10(-431);
test_math_log10(1.0646842752829518e+308);
test_math_log10(1.3603041503725762e+308);
test_math_log10(1.1194060806655059e+308);
test_math_log10(-401);
test_math_log10("YT56TI");
test_math_log10("E5SZ");
test_math_log10(1.0189413905443817e+307);
test_math_log10("6C1H84G");
test_math_log10("3C55");
test_math_log10("7VGM");
test_math_log10(9.44801811401334e+307);
test_math_log10(-929);
test_math_log10(1.9079449166049243e+307);
test_math_log10(1.1701362209891214e+308);
test_math_log10(-187);
test_math_log10(-345);
test_math_log10("75UBN3MHS");
test_math_log10("T48S");
test_math_log10(-513);
test_math_log10(7.57750440255035e+307);
test_math_log10("FO3MXC");
test_math_log10(1.1708266388796854e+308);
test_math_log10(1.055228891941603e+308);
test_math_log10(-875);
test_math_log10("3DN");
test_math_log10(-395);
test_math_log10(-895);
test_math_log10(540);
test_math_log10(1.924483458875824e+307);
test_math_log10(3.752720026511848e+307);
test_math_log10(3.8729577551229597e+307);
test_math_log10(-485);
test_math_log10("W35A2");
test_math_log10(-115);
test_math_log10(-803);
test_math_log10(1.4353189240563131e+308);
test_math_log10("VZME7R73CE");
test_math_log10(-847);
test_math_log10("7TZYLUQWUS");
test_math_log10("OEW0MS8BNE");
test_math_log10("V3LMBX");
test_math_log10("5KS8VPWH1");
test_math_log10("WUY8D");
test_math_log10(-479);
test_math_log10(-557);
test_math_log10("Z2F8X");
test_math_log10(-279);
test_math_log10(1.6738733650549316e+308);
test_math_log10(4.516037303663154e+307);
test_math_log10(1.5450992275697647e+308);
test_math_log10(3.7237204150609577e+307);
test_math_log10(1.2431687514230635e+308);
test_math_log10(1.4047761838585579e+308);
test_math_log10(1.3865838976621897e+308);
test_math_log10(-365);
test_math_log10(7.091280867295613e+307);
test_math_log10(1.254085944824109e+308);
test_math_log10("ZYO");
test_math_log10(-935);
test_math_log10(2.5575418550262827e+307);
test_math_log10(5.820909841267236e+307);
test_math_log10(8.552946444818332e+307);
test_math_log10(-573);
test_math_log10(1.0319751714417346e+306);
test_math_log10(6.782964647309816e+307);
test_math_log10(9.971550624621891e+307);
test_math_log10(3.160165431453126e+307);
test_math_log10("4K38M");
test_math_log10("UHQ");
test_math_log10(1.0225444000894506e+308);
test_math_log10("QRZZ");
test_math_log10("WSNZ59V");
test_math_log10(-439);
test_math_log10("2ZYY");
test_math_log10(1.786217426336324e+308);
test_math_log10(-543);
test_math_log10(-793);
test_math_log10(2.2581214043946934e+307);
test_math_log10(-285);
test_math_log10(6.669177637768091e+307);
test_math_log10("MTK");
test_math_log10("TA3VABI1");
test_math_log10(5.942061029380275e+307);
test_math_log10(9.376749730375458e+307);
test_math_log10(-771);
test_math_log10("BP76CALW");
test_math_log10(1.0568989713879908e+306);
test_math_log10("QJWIQTP");
test_math_log10(3.173980746225296e+307);
test_math_log10(9.596279259870602e+307);
test_math_log10(1.3387860672851835e+308);
test_math_log10(1.5722639078130087e+308);
test_math_log10(4.307958018159712e+307);
test_math_log10(-547);
test_math_log10(-457);
test_math_log10("F5N");
test_math_log10("OSW9");
test_math_log10("VRU5P");
test_math_log10(1.7852966098927029e+308);
test_math_log10("DY6XR7XUH");
test_math_log10("ZVD");
test_math_log10("8Y4Q4");
test_math_log10("CUXRO0");
test_math_log10(8.136381589358655e+307);
test_math_log10("K41L771VBI");
test_math_log10(2.917200512938324e+307);
test_math_log10(-53);
test_math_log10(1.2541231488615349e+308);
test_math_log10(-29);
test_math_log10("5B8");
test_math_log10("2U2T33");
test_math_log10("2UCDSW");
test_math_log10("HJAQ");
test_math_log10("7EWF");
test_math_log10(-811);
test_math_log10(1.1801940738097891e+308);
test_math_log10(8.803265790194596e+307);
test_math_log10("4LG1");
test_math_log10(-871);
test_math_log10(-383);
test_math_log10(6.152488438313919e+307);
test_math_log10(1.2256225419087698e+308);
test_math_log10("LEVI2NM");
test_math_log10(1.40258532339252e+308);
test_math_log10(6.253717998788501e+307);
test_math_log10(-171);
test_math_log10(1.5662335237842676e+308);
test_math_log10(-231);
test_math_log10(1.3125114460266136e+308);
test_math_log10(7.021722297682561e+307);
test_math_log10(-109);
test_math_log10(7.571834909702044e+307);
test_math_log10(1.322186581658894e+307);
test_math_log10("SGPUFRYE");
test_math_log10("O1A");
test_math_log10(1.7614377628798119e+308);
test_math_log10(3.437292878594176e+307);
test_math_log10(-657);
test_math_log10(1.455892499664727e+308);
test_math_log10(1.02977273209817e+308);
test_math_log10(1.53683978011066e+308);
test_math_log10("BQML1TTQY");
test_math_log10(3.3308157925181876e+307);
test_math_log10(-189);
test_math_log10("S2P2");
test_math_log10("Q5P1R");
test_math_log10(-99);
test_math_log10("HQOL");
test_math_log10("TKOSB2JZ1C");
test_math_log10(3.000025487590057e+307);
test_math_log10(-593);
test_math_log10(1.9762621550436944e+306);
test_math_log10("A11DE9");
test_math_log10(1.5399756795290768e+308);
test_math_log10(-167);
test_math_log10(-531);
test_math_log10(1.7392078361466337e+308);
test_math_log10(1.2833073176869811e+308);
test_math_log10(8.805698888510557e+307);
test_math_log10("LYR");
test_math_log10(-225);
test_math_log10(1.0675440129917963e+308);
test_math_log10(4.151510632354885e+307);
test_math_log10(2.5998874538666995e+307);
test_math_log10(1.4480948212451506e+308);
test_math_log10("X42");
test_math_log10(1.5348598732657488e+308);
test_math_log10("LMQKP6RAPK");
test_math_log10("N5XAWYYNG");
test_math_log10(6.78658161166379e+307);
test_math_log10(1.3469455456089398e+308);
test_math_log10(-727);
test_math_log10(9.850913397401862e+307);
test_math_log10("ASA");
test_math_log10(1.2038871526114689e+307);
test_math_log10(1.4491563526278486e+308);
test_math_log10(1.2085722948054716e+308);
test_math_log10("07VU1");
test_math_log10("DQK");
test_math_log10(8.834550935029811e+307);
test_math_log10(1.0048582676552208e+308);
test_math_log10(-839);
test_math_log10(-205);
test_math_log10("ZV0A0SLL0R");
test_math_log10(4.109000364924738e+307);
test_math_log10(-645);
test_math_log10("7UOBG30SC");
test_math_log10("31KHTHH54");
test_math_log10("PWXE44RCYE");
test_math_log10(-899);
test_math_log10("ORYSCAH");
test_math_log10(3.8367429384975845e+307);
test_math_log10(6.894666996249436e+307);
test_math_log10(-819);
test_math_log10("8P4MTIYMD");
test_math_log10(3.0397304704413017e+307);
test_math_log10(1.4030045399458121e+308);
test_math_log10(1.717192021633403e+308);
test_math_log10("1DQ8PT");
test_math_log10(-295);
test_math_log10("SR6");
test_math_log10(1.3553897110376884e+307);
test_math_log10(8.254064718019522e+307);
test_math_log10(9.238252383995836e+306);
test_math_log10(-405);
test_math_log10(2.1259546103256334e+307);
test_math_log10(-653);
test_math_log10(-15);
test_math_log10(-755);
test_math_log10(-11);
test_math_log10(-429);
test_math_log10(7.012445587841796e+307);
test_math_log10("39LV");
test_math_log10(-957);
test_math_log10(-219);
test_math_log10(-601);
test_math_log10("O9RQYF9");
test_math_log10("0EIKHB3");
test_math_log10(4.625663081193217e+307);
test_math_log10(1.0900418956323646e+308);
test_math_log10(1.6149230645891666e+308);
test_math_log10("PNIFGOJ542");
test_math_log10(9.78019238256668e+307);
test_math_log10("MK0I5");
test_math_log10(1.7077062946225533e+308);
test_math_log10(-885);
test_math_log10(2.5859202412588115e+306);
test_math_log10("XBNBPX");
test_math_log10(7.926686692793484e+307);
test_math_log10(9.614580674947659e+307);
test_math_log10(1.4258147448414805e+308);
test_math_log10(3.145511555607152e+307);
test_math_log10(1.2113101393307179e+308);
test_math_log10(-561);
test_math_log10("BS5RZOX");
test_math_log10("ICV72");
test_math_log10(-911);
test_math_log10(1.5859450227538545e+308);
test_math_log10(7.519864116392359e+306);
test_math_log10(1.2130342690859974e+308);
test_math_log10("AYKT");
test_math_log10(-491);
test_math_log10("YG3C");
test_math_log10("17I0");
test_math_log10("QDVR60M8");
test_math_log10("G80EQI10");
test_math_log10("QN9RL7");
test_math_log10("9IOWYG");
test_math_log10(1.379325437147739e+308);
test_math_log10(5.729401128992401e+307);
test_math_log10("DOE92");
test_math_log10("E3X4M1DF");
test_math_log10(-85);
test_math_log10("VPXGY");
test_math_log10(1.3084838466997651e+308);
test_math_log10("44WY81FO8T");
test_math_log10(1.4557810947975658e+308);
test_math_log10("KH2");
test_math_log10("1H78ZS0");
test_math_log10("9AP8CIHH4A");
test_math_log10(1.1257933714013897e+307);
test_math_log10("H34BOHIFES");
test_math_log10(-859);
test_math_log10("YGTKHS");
test_math_log10("JU3EJQ6UDR");
test_math_log10(1.7378582439473054e+308);
test_math_log10(3.2189518211984167e+307);
test_math_log10(-379);
test_math_log10(1.5073891628227905e+308);
test_math_log10(-625);
test_math_log10(1.5311292401611074e+308);
test_math_log10(8.679236502603023e+307);
test_math_log10(1.0299031313241371e+308);
test_math_log10(-7);
test_math_log10(-835);
test_math_log10(1.2940272203780653e+308);
test_math_log10("16R5YTB7S");
test_math_log10("LOR");
test_math_log10("P0QAE2IPE8");
test_math_log10("752H");
test_math_log10("AJDX");
test_math_log10("NG5PO");
test_math_log10("QZF3NHEUA");
test_math_log10("9CILYX2FN");
test_math_log10(1.0214912406086834e+308);
test_math_log10(-243);
test_math_log10(2.1472351136903333e+307);
test_math_log10(5.936496465111454e+307);
test_math_log10(3.797006531660744e+307);
test_math_log10(1.6720704280480784e+308);
test_math_log10(-633);
test_math_log10("QCXP");
test_math_log10(1.533733652947165e+308);
test_math_log10(1.4044533594550924e+308);
test_math_log10("JJZCCYSP");
test_math_log10("D878B");
test_math_log10(1.2804757856037133e+308);
test_math_log10(1.4846629795893904e+308);
test_math_log10(3.2540588587521704e+307);
test_math_log10(-21);
test_math_log10(8.931587026516948e+307);
test_math_log10(5.802936764598486e+307);
test_math_log10("0HRHW");
test_math_log10(-683);
test_math_log10(1.544963940884394e+307);
test_math_log10(5.97812068771831e+307);
test_math_log10("EDO0E08");
test_math_log10(1.094999978738944e+308);
test_math_log10(-905);
test_math_log10("YOI8JDZ");
test_math_log10("KQEWJ9KE");
test_math_log10("IPYA7");
test_math_log10("7O4IH2R50");
test_math_log10(3.4022881919195426e+307);
test_math_log10(-435);
test_math_log10(9.040050991905854e+307);
test_math_log10("G217");
test_math_log10(1.8048511318643435e+307);
test_math_log10("UY146M0T");
test_math_log10("8DGCHI8");
test_math_log10(1.4845759324920615e+308);
test_math_log10(3.9037961897236753e+307);
test_math_log10("SZL");
test_math_log10(5.568543893132278e+307);
test_math_log10(-453);
test_math_log10("VXO6YAD");
test_math_log10(6.054068716420976e+307);
test_math_log10(9.999315814236865e+307);
test_math_log10("04HZ21V");
test_math_log10(1.393987930065466e+307);
test_math_log10("RVSM9HNM");
test_math_log10(1.5885703501949266e+308);
test_math_log10("Z68R");
test_math_log10("13EMNYUYLN");
test_math_log10(1.205448107030681e+308);
test_math_log10("DLFZ");
test_math_log10(4.2202726167453733e+307);
test_math_log10(1.0727021311022516e+308);
test_math_log10(-337);
test_math_log10(-217);
test_math_log10("QTNZV6D5N");
test_math_log10(7.239253092345351e+307);
test_math_log10("VAEE");
test_math_log10(4.015909368909984e+307);
test_math_log10(2.9282990869217514e+307);
test_math_log10(-769);
test_math_log10(1.4242926247148485e+308);
test_math_log10(-577);
test_math_log10(-749);
test_math_log10(1.2600126178063624e+308);
test_math_log10("2UHR5SS48");
test_math_log10("XMZTBE");
test_math_log10(6.026735434224425e+307);
test_math_log10(8.244498282590222e+307);
test_math_log10(5.454899789558337e+307);
test_math_log10("EIXM3VXGA");
test_math_log10(-117);
test_math_log10("E01M7YJ");
test_math_log10(-661);
test_math_log10(1.7660977181983577e+308);
test_math_log10(1.7082277721037393e+308);
test_math_log10("RH7HEJY");
test_math_log10("Y8FVHD");
test_math_log10(4.008636767515916e+307);
test_math_log10(-655);
test_math_log10(-487);
test_math_log10(7.584071401515895e+307);
test_math_log10(9.581420422804196e+307);
test_math_log10("A0OVO44");
test_math_log10("R5WLCLCYM");
test_math_log10(-1);
test_math_log10(1.4216042591359336e+308);
test_math_log10("RYP3U");
test_math_log10(-183);
test_math_log10(1.7710532649170268e+308);
test_math_log10(1.8083309786240662e+307);
test_math_log10(-47);
test_math_log10(4.0434684369250265e+307);
test_math_log10(1.2795365179858661e+308);
test_math_log10(6.851545121508537e+307);
test_math_log10(3.956396814175747e+307);
test_math_log10(2.55379710174838e+307);
test_math_log10(1.4205226947718917e+308);
test_math_log10("KAM");
test_math_log10("IUZC");
test_math_log10(1.2309776018286232e+308);
test_math_log10(-297);
test_math_log10("S9F83V2MYV");
test_math_log10(1.42183503227495e+308);
test_math_log10("7KD6ZKFXO");
test_math_log10("871XOXAAC");
test_math_log10(9.430083145343146e+307);
test_math_log10("NMEM2MF2H");
test_math_log10("TFSLX2");
test_math_log10(-417);
test_math_log10(9.313824128034859e+307);
test_math_log10("AVDT3");
test_math_log10("1YZU431B85");
test_math_log10(-259);
test_math_log10("5EA09M5DI");
test_math_log10(1.4186905015069676e+308);
test_math_log10(7.930030303789877e+307);
test_math_log10("BYWLV");
test_math_log10("3DG04U0");
test_math_log10(-599);
test_math_log10(-351);
test_math_log10(7.866390350162284e+307);
test_math_log10(2.6244086977050245e+307);
test_math_log10(1.2562250466167969e+308);
test_math_log10("G8NMX");
test_math_log10(1.0430918080231416e+308);
test_math_log10(1.4909546876588184e+308);
test_math_log10("J03I");
test_math_log10(7.764565365408166e+307);
test_math_log10(-475);
test_math_log10("K0Q2G18M2");
test_math_log10(9.761154404034094e+307);
test_math_log10(2.340163984656551e+307);
test_math_log10(-985);
test_math_log10(2.653795847763422e+307);
test_math_log10(7.626353176683091e+307);
test_math_log10(1.044345624957145e+308);
test_math_log10("VC8P1E8");
test_math_log10(-931);
test_math_log10("01EZ");
test_math_log10("8UOUQN9");
test_math_log10(1.2561211212530162e+308);
test_math_log10(1.7584363326647657e+308);
test_math_log10(8.04454023771464e+307);
test_math_log10(2.0790851721199692e+307);
test_math_log10(-559);
test_math_log10(9.346260650924597e+307);
test_math_log10(-737);
test_math_log10(1.0682478977968e+308);
test_math_log10(-471);
test_math_log10(-667);
test_math_log10("Z2ZLZ8");
test_math_log10("3YSYL2J");
test_math_log10(4.720318914036689e+307);
test_math_log10("WVHZ");
test_math_log10("EIFQ");
test_math_log10(1.1375498821230132e+306);
test_math_log10(-153);
test_math_log10(117);
test_math_log10(-437);
test_math_log10(1.5513754753450377e+308);
test_math_log10("L7EROXNB");
test_math_log10("9C5M5KJOB");
test_math_log10("7O4CP58U");
test_math_log10(-639);
test_math_log10(-381);
test_math_log10("W5RITLI33");
test_math_log10("WNO");
test_math_log10(5.086262271201967e+306);
test_math_log10(1.036054545079008e+308);
test_math_log10(1.024182474049718e+307);
test_math_log10("AKOC6F");
test_math_log10("S1X515");
test_math_log10(1.3909940850043716e+308);
test_math_log10("M99X");
test_math_log10(-721);
test_math_log10("JAN58LV");
test_math_log10("AXI2M8E4A");
test_math_log10("9TO1");
test_math_log10(1.2980519545743674e+307);
test_math_log10(1.2876303672250908e+308);
test_math_log10(6.444015042448969e+307);
test_math_log10(-303);
test_math_log10("KXI2BL32X");
test_math_log10(-801);
test_math_log10("1TU");
test_math_log10("W4MXHG");
test_math_log10("6QL61A");
test_math_log10(-197);
test_math_log10(3.843081670466948e+307);
test_math_log10("ZP4G");
test_math_log10("5DQNVI1EHM");
test_math_log10("6QXRCE43L8");
test_math_log10(-181);
test_math_log10(-441);
test_math_log10("VOXS");
test_math_log10("MSUSLM");
test_math_log10("33P67GI5VW");
test_math_log10(3.613624212807532e+307);
test_math_log10("KE75");
test_math_log10(7.693051323211334e+307);
test_math_log10("HJLD8");
test_math_log10(-113);
test_math_log10("APUX");
test_math_log10(1.632729187540217e+307);
test_math_log10(160);
test_math_log10(-289);
test_math_log10(1.882350694872675e+307);
test_math_log10(-907);
test_math_log10("VUB4J0");
test_math_log10("0JFBL");
test_math_log10("I6FN5XX");
test_math_log10(2.6323303843922173e+307);
test_math_log10(1.5452824835531379e+308);
test_math_log10(1.2551461197183719e+308);
test_math_log10(3.698877263146053e+307);
test_math_log10(1.6623790070550952e+308);
test_math_log10(1.6633395535283445e+308);
test_math_log10("XIY");
test_math_log10("AN9U9F");
test_math_log10(7.188657785167967e+307);
test_math_log10(-877);
test_math_log10("RYAKENVBUC");
test_math_log10("ZJ8CCY");
test_math_log10("NWN6RT8B74");
test_math_log10(-913);
test_math_log10(-567);
test_math_log10("N3APDFIX");
test_math_log10(5.411817737400261e+307);
test_math_log10(9.01362119899155e+307);
test_math_log10("I648CMD");
test_math_log10("25PN1BY");
test_math_log10(1.379516517337602e+307);
test_math_log10("JQG502AY0");
test_math_log10(8.503330147416839e+307);
test_math_log10(-477);
test_math_log10("PMA4QO7DV");
test_math_log10("RHMHUO");
test_math_log10(-735);
test_math_log10(5.520683106942053e+307);
test_math_log10(-341);
test_math_log10("RNY4");
test_math_log10(4.3045850710508587e+307);
test_math_log10(196);
test_math_log10("U96");
test_math_log10("3RMFE0Z");
test_math_log10(-977);
test_math_log10(-375);
test_math_log10(-659);
test_math_log10(9.896404113033902e+307);
test_math_log10("NWJ4I8UL");
test_math_log10("FY0LA29");
test_math_log10("SJDW0BA");
test_math_log10(7.652096236166391e+307);
test_math_log10(-981);
test_math_log10(-761);
test_math_log10("BD64AL8QS");
test_math_log10("HMV2PH");
test_math_log10(-277);
test_math_log10("OQTHUGPH");
test_math_log10("PFD");
test_math_log10("Y8D2H98");
test_math_log10("L12HZI");
test_math_log10(1.7596157896496555e+308);
test_math_log10("ICCWY73W3T");
test_math_log10("MTM9Y2YOFL");
test_math_log10("ZYIFXVQL");
test_math_log10(7.307763977019024e+307);
test_math_log10(-733);
test_math_log10(7.28126860873446e+307);
test_math_log10("YG4GCXFB");
test_math_log10(-901);
test_math_log10(-597);
test_math_log10("5O443Y");
test_math_log10(1.433610656144016e+308);
test_math_log10(1.0416802650264464e+308);
test_math_log10(-177);
test_math_log10("SI3D70BW");
test_math_log10(-369);
test_math_log10(-983);
test_math_log10("MF49D8NQUO");
test_math_log10(1.7141008176748685e+308);
test_math_log10("P1OLC");
test_math_log10(6.427892351510803e+307);
test_math_log10(1.7159982144793145e+308);
test_math_log10(-131);
test_math_log10("W826");
test_math_log10("LSAPE7M");
test_math_log10(-415);
test_math_log10(4.921601246594964e+307);
test_math_log10(-329);
test_math_log10(6.299595006837618e+307);
test_math_log10(-411);
test_math_log10("W7KWO3");
test_math_log10(1.3017607192858652e+308);
test_math_log10("X0QRDS");
test_math_log10(1.6267872272049911e+308);
test_math_log10(-635);
test_math_log10(-785);
test_math_log10(2.11018360260277e+307);
test_math_log10(1.5025058796126658e+307);
test_math_log10(6.275995003970746e+306);
test_math_log10(-27);
test_math_log10("6TXH39");
test_math_log10(6.807299215080033e+306);
test_math_log10("91VML8Q2");
test_math_log10(-939);
test_math_log10("MHFWV");
test_math_log10(1.806244133984175e+307);
test_math_log10(-649);
test_math_log10("93Q");
test_math_log10("081OQBR");
test_math_log10("CUECU");
test_math_log10(-865);
test_math_log10(-525);
test_math_log10(2.886877002837374e+306);
test_math_log10("J3GOL");
test_math_log10(2.053175436428353e+306);
test_math_log10("7I4U8UIVK");
test_math_log10("4KM3PQ59JR");
test_math_log10("JTBDSKB");
test_math_log10(1.4948622165712209e+308);
test_math_log10(-837);
test_math_log10("MYIZZPYA8");
test_math_log10(-705);
test_math_log10("PNY7IZ7TS");
test_math_log10(1.3440691320088715e+308);
test_math_log10("WEWQUGHQD");
test_math_log10("XAD");
test_math_log10("K9WV4OTF0G");
test_math_log10(6.205286633424441e+307);
test_math_log10(-795);
test_math_log10(1.6965996378347989e+308);
test_math_log10("ER8");
test_math_log10("CSZI");
test_math_log10(1.7517707466933573e+307);
test_math_log10("54ZCEZ82N");
test_math_log10("FGEKUQS");
test_math_log10(7.925211812031536e+307);
test_math_log10(-999);
test_math_log10(1.662047832570062e+308);
test_math_log10(3.8927363367851683e+307);
test_math_log10(-307);
test_math_log10(1.2255245824880998e+308);
test_math_log10(1.3164169417024025e+308);
test_math_log10(3.5658911715244936e+307);
test_math_log10(3.95198439891816e+307);
test_math_log10(-449);
test_math_log10("M6R7UDB");
test_math_log10("WZG3ZDNL");
test_math_log10(1.7931296171802626e+308);
test_math_log10(2.732031681764427e+307);
test_math_log10(1.3316675878968498e+308);
test_math_log10("X9J");
test_math_log10(-213);
test_math_log10(1.3803095862646176e+308);
test_math_log10("MI85");
test_math_log10(-763);
test_math_log10("YW9G");
test_math_log10(4.291001266878218e+307);
test_math_log10(2.0232733660748407e+307);
test_math_log10(1.0801712719500597e+308);
test_math_log10(-857);
test_math_log10("ELSYG");
test_math_log10(-419);
test_math_log10("1PZ74");
test_math_log10("C162");
test_math_log10(6.098417740146245e+307);
test_math_log10(8.997898294036042e+307);
test_math_log10(1.4383679590446107e+308);
test_math_log10("FW17U4");
test_math_log10("M5IT1G");
test_math_log10(4.1775976232354663e+307);
test_math_log10("6EA7Y");
test_math_log10(-853);
test_math_log10(9.91546432062493e+307);
test_math_log10(-451);
test_math_log10("BGKFI1");
test_math_log10(1.3730445309929e+308);
test_math_log10(4.93027887642705e+307);
test_math_log10("SXL0");
