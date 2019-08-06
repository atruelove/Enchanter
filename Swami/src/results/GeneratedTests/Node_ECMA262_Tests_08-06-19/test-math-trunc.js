/*
* This file is automatically generated by Swami
*
* 2019-08-06 12:35:40.101689
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
function test_math_trunc(x){
	if (Object.is( x,NaN )){
		var output = Math.trunc(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (( x === - 0 )){
		var output = Math.trunc(x);
		assert.strictEqual(- 0, output);
		console.log("Good Test");
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.trunc(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === + Infinity )){
		var output = Math.trunc(x);
		assert.strictEqual(+ Infinity, output);
		console.log("Good Test");
		return;
		}
	if (( x === - Infinity )){
		var output = Math.trunc(x);
		assert.strictEqual(- Infinity, output);
		console.log("Good Test");
		return;
		}
	if (( x > 0 && x < 1 )){
		var output = Math.trunc(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
	if (( x < 0 && x > - 1 )){
		var output = Math.trunc(x);
		assert.strictEqual(- 0, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}



/*TESTS GENERATED AUTOMATICALLY*/
test_math_trunc("GOPXZ");
test_math_trunc(-59);
test_math_trunc(false);
test_math_trunc(2.4534901281692085e+307);
test_math_trunc(9.53244933911703e+307);
test_math_trunc("LAHCL1XL95");
test_math_trunc(3.8902558834282627e+306);
test_math_trunc(/yes.*day/);
test_math_trunc(/(\w+)\s(\w+)/);
test_math_trunc(-61);
test_math_trunc(true);
test_math_trunc("CFMM6");
test_math_trunc(-0);
test_math_trunc(-73);
test_math_trunc(5.947224333015605e+307);
test_math_trunc("HK6O7U");
test_math_trunc(-289);
test_math_trunc("X78HL");
test_math_trunc(6.873236021627348e+307);
test_math_trunc(/foo/g);
test_math_trunc("8ZTN");
test_math_trunc(-315);
test_math_trunc(1.1457947198587599e+308);
test_math_trunc(-585);
test_math_trunc(1.2814827124662916e+308);
test_math_trunc("QRR");
test_math_trunc("I9WVBZ549Y");
test_math_trunc(-597);
test_math_trunc(1.1749117918900926e+308);
test_math_trunc("Z9DIP");
test_math_trunc(Infinity);
test_math_trunc("COODU1T");
test_math_trunc(null);
test_math_trunc("RDRI83MZ");
test_math_trunc(2.8074670339910147e+307);
test_math_trunc(NaN);
test_math_trunc(1.779438373677504e+308);
test_math_trunc(-897);
test_math_trunc(/\r\n|\r|\n/);
test_math_trunc(1.7006865976757756e+308);
test_math_trunc("BT0QNF");
test_math_trunc("R1SQWYF");
test_math_trunc(5.330620767057975e+307);
test_math_trunc("P58");
test_math_trunc("D76HT5TZ9");
test_math_trunc(undefined);
test_math_trunc(-901);
test_math_trunc("0A8XFM1");
test_math_trunc(-467);
test_math_trunc(-89);
test_math_trunc("8RJL1G4E20");
test_math_trunc(4.553625017427931e+307);
test_math_trunc("4QUN");
test_math_trunc("IEW8U3EIJ");
test_math_trunc(-83);
test_math_trunc("T3FNE98TJ");
test_math_trunc(-201);
test_math_trunc(/ab+c/);
test_math_trunc(-997);
test_math_trunc(1.160527350409351e+307);
test_math_trunc("TK3BIT");
test_math_trunc(-555);
test_math_trunc(1.1149311131077361e+308);
test_math_trunc(-719);
test_math_trunc(-965);
test_math_trunc("G6M");
test_math_trunc(6.857501595840982e+307);
test_math_trunc(-235);
test_math_trunc(-287);
test_math_trunc(1.5041623508909181e+308);
test_math_trunc(1.1882977082674216e+308);
test_math_trunc(1.3459099552023772e+308);
test_math_trunc(-419);
test_math_trunc(1.4818297814705153e+308);
test_math_trunc(+0);
test_math_trunc(/[\u0400-\u04FF]+/g);
test_math_trunc(9.120781064207257e+307);
test_math_trunc(-175);
test_math_trunc("YVAJQ3HUU");
test_math_trunc(-795);
test_math_trunc(-759);
test_math_trunc("5AC1HB");
test_math_trunc(8.446225172834879e+307);
test_math_trunc(/yes[^]*day/);
test_math_trunc(-787);
test_math_trunc("Y6N");
test_math_trunc(8.720149010016213e+307);
test_math_trunc(-909);
test_math_trunc("YZK422NJ");
test_math_trunc(1.6561600777635677e+308);
test_math_trunc(/[^.]+/);
test_math_trunc("T1OQXEI7H");
test_math_trunc(1.7715243564562062e+308);
test_math_trunc(-935);
test_math_trunc(-535);
test_math_trunc(7.72657950303356e+307);
test_math_trunc(1.038173336853851e+308);
test_math_trunc(1.0004664830360884e+308);
test_math_trunc(7.025190538324839e+307);
test_math_trunc(1.4054090606493001e+308);
test_math_trunc(1.2968750782748995e+308);
test_math_trunc(7.148557849946594e+307);
test_math_trunc("5NDC");
test_math_trunc("JPE");
test_math_trunc(1.5373426086404758e+308);
test_math_trunc(1.7364044061200869e+308);
test_math_trunc(2.55379710174838e+307);
test_math_trunc(-253);
test_math_trunc(1.0076582830329135e+308);
test_math_trunc("DAPIYUD");
test_math_trunc(-615);
test_math_trunc("EELFB");
test_math_trunc("HMCHW9");
test_math_trunc("VVF77");
test_math_trunc("Y5X5W6");
test_math_trunc("KCUAQR");
test_math_trunc(2.373327711522796e+307);
test_math_trunc(-753);
test_math_trunc(6.531532498730412e+306);
test_math_trunc(2.0130085650589002e+307);
test_math_trunc("8GQ471F2H");
test_math_trunc(-339);
test_math_trunc(6.686528478358078e+307);
test_math_trunc(2.2851564966138487e+307);
test_math_trunc(-889);
test_math_trunc(-761);
test_math_trunc("NR0");
test_math_trunc(-295);
test_math_trunc(4.557868930778583e+307);
test_math_trunc(-309);
test_math_trunc(-485);
test_math_trunc("G174QRQB3");
test_math_trunc("89Z1");
test_math_trunc(-893);
test_math_trunc(6.167708816463545e+307);
test_math_trunc("AFBVQ83");
test_math_trunc(-883);
test_math_trunc("GQE");
test_math_trunc(-961);
test_math_trunc("NT1HG2T");
test_math_trunc(4.175853112068596e+307);
test_math_trunc(3.3308157925181876e+307);
test_math_trunc(1.7233698021751417e+308);
test_math_trunc(2.4721412359666517e+306);
test_math_trunc(-623);
test_math_trunc(1.3299517622134343e+308);
test_math_trunc(-825);
test_math_trunc(5.247946225881016e+307);
test_math_trunc(-715);
test_math_trunc(1.0918827328864715e+308);
test_math_trunc(1.6107959387403884e+308);
test_math_trunc("9YVVF");
test_math_trunc(-179);
test_math_trunc("8SFYDAK3J");
test_math_trunc(832);
test_math_trunc("046X5U18");
test_math_trunc("84G8P");
test_math_trunc(6.951742341525534e+307);
test_math_trunc(-549);
test_math_trunc(8.362231951768426e+306);
test_math_trunc(-633);
test_math_trunc(1.3396116785491987e+308);
test_math_trunc(1.7880155765987625e+308);
test_math_trunc(-649);
test_math_trunc("4PTM");
test_math_trunc("SPI3ZJR97");
test_math_trunc("96493");
test_math_trunc(1.2512953934583528e+308);
test_math_trunc(1.6923176439170406e+308);
test_math_trunc("GRVAZS26TU");
test_math_trunc(-797);
test_math_trunc(8.810549151155456e+306);
test_math_trunc("02Y");
test_math_trunc(1.2999712181560749e+308);
test_math_trunc("BRLJD1");
test_math_trunc("6XDW9");
test_math_trunc("GYLY7KTJ");
test_math_trunc("87M");
test_math_trunc("6SCBVR9T");
test_math_trunc(-831);
test_math_trunc("A5TM8");
test_math_trunc(2.6729662638683985e+306);
test_math_trunc("RKR59WC0O");
test_math_trunc(1.0952883331085498e+307);
test_math_trunc("YWAY");
test_math_trunc("OA6TYAJ");
test_math_trunc("MEZBZO");
test_math_trunc(-319);
test_math_trunc("742NJ56");
test_math_trunc("FZ77");
test_math_trunc(4.898706805833859e+307);
test_math_trunc("BZA");
test_math_trunc("6BBV");
test_math_trunc(1.0871539780353283e+308);
test_math_trunc("6RY8S");
test_math_trunc(7.314688433495428e+307);
test_math_trunc(-403);
test_math_trunc(-809);
test_math_trunc(-777);
test_math_trunc("NHQFGUAQ");
test_math_trunc(-929);
test_math_trunc("X53S8BVL");
test_math_trunc("SQAB");
test_math_trunc("8D3Z6");
test_math_trunc(8.597185759448382e+307);
test_math_trunc("ZECJ7J");
test_math_trunc(1.0585619503620918e+308);
test_math_trunc(5.100781877029791e+307);
test_math_trunc("NHMIK7I4");
test_math_trunc(-101);
test_math_trunc(1.633709857523996e+308);
test_math_trunc(-835);
test_math_trunc(-757);
test_math_trunc("YRT6W");
test_math_trunc("CJEE");
test_math_trunc(-955);
test_math_trunc("DQPL9H6");
test_math_trunc(5.124110705464413e+307);
test_math_trunc("64K1KVTC");
test_math_trunc("5H99DN7GSK");
test_math_trunc(-273);
test_math_trunc("P5PM");
test_math_trunc(-519);
test_math_trunc("GJ970YBK");
test_math_trunc(6.68877368144991e+307);
test_math_trunc("QIENXCRRM");
test_math_trunc(6.046194563033339e+307);
test_math_trunc(1.051829661939362e+308);
test_math_trunc(-459);
test_math_trunc("F1392MK");
test_math_trunc(1.1989983614975062e+308);
test_math_trunc(1.7674725705858299e+308);
test_math_trunc(8.021282415362317e+307);
test_math_trunc(-705);
test_math_trunc(1.1389344821094468e+308);
test_math_trunc(-781);
test_math_trunc(-29);
test_math_trunc("YJQ7");
test_math_trunc(5.433929732672082e+307);
test_math_trunc("6I3QFBU77");
test_math_trunc(7.686594267236673e+307);
test_math_trunc(5.955742239037462e+307);
test_math_trunc("6JZROBF242");
test_math_trunc("X5WDW7M9U");
test_math_trunc(7.962060789133488e+307);
test_math_trunc("NB7Y5BF7R");
test_math_trunc("ZBZDKBD92M");
test_math_trunc(7.76805320411142e+307);
test_math_trunc("X7RIH");
test_math_trunc(-69);
test_math_trunc(1.187482052181304e+308);
test_math_trunc(1.6767649783896516e+308);
test_math_trunc("Y2C");
test_math_trunc("DTTNF0");
test_math_trunc(9.91892694604364e+307);
test_math_trunc(-495);
test_math_trunc("474S7J8");
test_math_trunc("37DG44");
test_math_trunc("VW95VBJE");
test_math_trunc(9.763561809670446e+307);
test_math_trunc(2.7952033437215436e+307);
test_math_trunc(1.6081977096876933e+308);
test_math_trunc(1.4764246715774441e+308);
test_math_trunc(1.1986768280759182e+308);
test_math_trunc(1.1685926892236978e+308);
test_math_trunc("KBYHE56JV5");
test_math_trunc(3.5050046051072123e+307);
test_math_trunc(1.2766407357004587e+308);
test_math_trunc("96JX6UR9");
test_math_trunc(9.426215785994794e+307);
test_math_trunc("47YU");
test_math_trunc(1.73943671902106e+308);
test_math_trunc("YZQCK4C");
test_math_trunc("GUBU845715");
test_math_trunc(-425);
test_math_trunc("VBM0XL");
test_math_trunc(-505);
test_math_trunc(4.1703580152515447e+307);
test_math_trunc(668);
test_math_trunc(-91);
test_math_trunc(-789);
test_math_trunc(-701);
test_math_trunc(6.875612294876391e+307);
test_math_trunc(7.866454277204962e+307);
test_math_trunc(-85);
test_math_trunc(1.3908483860466033e+307);
test_math_trunc(4.877589296654196e+306);
test_math_trunc(1.5630633113864084e+308);
test_math_trunc(-177);
test_math_trunc(-509);
test_math_trunc("K71VNP5754");
test_math_trunc(-207);
test_math_trunc("U2N0");
test_math_trunc(-799);
test_math_trunc("AURVML");
test_math_trunc("EGB");
test_math_trunc(-679);
test_math_trunc(1.7380577788738832e+308);
test_math_trunc(-219);
test_math_trunc(-117);
test_math_trunc(-985);
test_math_trunc(-203);
test_math_trunc("HU5P834X");
test_math_trunc(3.237206026529045e+306);
test_math_trunc(-267);
test_math_trunc(6.267619067308519e+307);
test_math_trunc(-105);
test_math_trunc("R0VXQKCPDQ");
test_math_trunc(6.27707546180658e+307);
test_math_trunc(-683);
test_math_trunc("J23BGGJ");
test_math_trunc(-973);
test_math_trunc("1GN7QUR50H");
test_math_trunc(1.4161333949894484e+308);
test_math_trunc(2.1968053084520784e+307);
test_math_trunc("DGRLSEV1X");
test_math_trunc("SA360755");
test_math_trunc(1.0867088502056628e+306);
test_math_trunc(1.3613812676514563e+308);
test_math_trunc(5.803927945076503e+307);
test_math_trunc(1.6926960371694696e+308);
test_math_trunc(1.6656308997496786e+308);
test_math_trunc("UD6R");
test_math_trunc(-635);
test_math_trunc(-905);
test_math_trunc(1.312537873178891e+308);
test_math_trunc(9.346224986809746e+307);
test_math_trunc(1.1534074310785375e+308);
test_math_trunc("LQRJ");
test_math_trunc(-599);
test_math_trunc(5.307896230130534e+307);
test_math_trunc("8DCXJR0SW8");
test_math_trunc("6AA");
test_math_trunc(-931);
test_math_trunc(-951);
test_math_trunc(1.3862686009288964e+307);
test_math_trunc(-673);
test_math_trunc(1.4853296419794539e+308);
test_math_trunc("6J9R");
test_math_trunc(1.3896316600310493e+308);
test_math_trunc(-469);
test_math_trunc("UTB6");
test_math_trunc("352");
test_math_trunc(7.150735453043533e+306);
test_math_trunc(-557);
test_math_trunc(-471);
test_math_trunc("942");
test_math_trunc("HQVAX20");
test_math_trunc(-337);
test_math_trunc(-529);
test_math_trunc(1.3756914839149455e+308);
test_math_trunc("HH4WPS");
test_math_trunc(-573);
test_math_trunc(1.6490026782507986e+308);
test_math_trunc(-821);
test_math_trunc("2MMSLD3");
test_math_trunc("KG63DVIU");
test_math_trunc("EJJ");
test_math_trunc(1.5036732907931754e+308);
test_math_trunc(-43);
test_math_trunc("GWHK48W8");
test_math_trunc(-603);
test_math_trunc(3.519290968772626e+307);
test_math_trunc("LD22");
test_math_trunc("ZH38W");
test_math_trunc(7.762023332950245e+307);
test_math_trunc("AVYBDP2XF");
test_math_trunc(-93);
test_math_trunc("JT3");
test_math_trunc("M6J1Z5HT5");
test_math_trunc(4.731731929902832e+307);
test_math_trunc(9.977308918011151e+307);
test_math_trunc("AZS");
test_math_trunc(1.2319559296927795e+308);
test_math_trunc("6SMX09S9C");
test_math_trunc("D5WEM1");
test_math_trunc(1.2963911402775442e+308);
test_math_trunc(1.3011801821009219e+308);
test_math_trunc(-99);
test_math_trunc(8.152708275713745e+306);
test_math_trunc(3.4776152878144405e+307);
test_math_trunc("4CCI8OQL5W");
test_math_trunc("FHP175Y");
test_math_trunc(-413);
test_math_trunc(1.2600034344373876e+308);
test_math_trunc(6.02751735139748e+307);
test_math_trunc(8.931642294081743e+307);
test_math_trunc(1.6456347766571016e+307);
test_math_trunc(6.090191825747055e+307);
test_math_trunc("AY3E8YOAI");
test_math_trunc("EW57LNNMT");
test_math_trunc(-717);
test_math_trunc("1YL9NEX");
test_math_trunc(-255);
test_math_trunc(1.0796846810132882e+308);
test_math_trunc(8.503073618198885e+307);
test_math_trunc(-563);
test_math_trunc("6Q7");
test_math_trunc(-559);
test_math_trunc(-851);
test_math_trunc("166ZR");
test_math_trunc(-213);
test_math_trunc(3.327123432298389e+307);
test_math_trunc("RVPKR5FA");
test_math_trunc("C9ONSUW0SJ");
test_math_trunc(8.127132064704741e+306);
test_math_trunc(9.160898206240955e+307);
test_math_trunc(1.3840803050672728e+308);
test_math_trunc(1.6426960594205184e+308);
test_math_trunc("CF7");
test_math_trunc("IAT6S");
test_math_trunc("R6C");
test_math_trunc(-957);
test_math_trunc(7.698359053124289e+307);
test_math_trunc(-875);
test_math_trunc(-843);
test_math_trunc("U2ORQD");
test_math_trunc(-227);
test_math_trunc("R81KZ");
test_math_trunc(1.3195555812322783e+308);
test_math_trunc(-193);
test_math_trunc("BMY9A7E18");
test_math_trunc("PA633XCW52");
test_math_trunc("P3OU");
test_math_trunc(6.137707802115889e+307);
test_math_trunc(-527);
test_math_trunc("G3R");
test_math_trunc(1.3154149242948331e+308);
test_math_trunc(2.222646650580643e+307);
test_math_trunc("7ODZ1SH");
test_math_trunc(-245);
test_math_trunc(4.965732496692947e+307);
test_math_trunc("ODWLYTVZ");
test_math_trunc("18WSPL70");
test_math_trunc(-953);
test_math_trunc(6.684765487533289e+307);
test_math_trunc("0APP");
test_math_trunc("02BH");
test_math_trunc(1.1131369422039493e+307);
test_math_trunc(-751);
test_math_trunc("V4MBFN6MAO");
test_math_trunc(5.311238689706309e+307);
test_math_trunc(1.7208796807299397e+308);
test_math_trunc("N9Q84L0F");
test_math_trunc("RI7S5UXV3C");
test_math_trunc("R82W062");
test_math_trunc(2.0620976502553691e+307);
test_math_trunc(1.5424318321878067e+308);
test_math_trunc(-133);
test_math_trunc("9NEWLBKA");
test_math_trunc("KM5X5YCT");
test_math_trunc(-307);
test_math_trunc("0XGSH13OV2");
test_math_trunc(1.045145481485539e+308);
test_math_trunc(-141);
test_math_trunc("58K8P3");
test_math_trunc("KBH4LO0");
test_math_trunc(1.2154756581085404e+308);
test_math_trunc("V70K");
test_math_trunc(1.6539310382137507e+308);
test_math_trunc(2.487537508813287e+307);
test_math_trunc(-511);
test_math_trunc("ALAPL");
test_math_trunc("CASW81");
test_math_trunc("AJPMJ6IL");
test_math_trunc(9.614580674947659e+307);
test_math_trunc(8.149614637871637e+307);
test_math_trunc("25R9");
test_math_trunc(6.764058620506166e+306);
test_math_trunc(1.1781688960168032e+308);
test_math_trunc("MOIE6GXBX");
test_math_trunc(-855);
test_math_trunc("K6AXFM0WUI");
test_math_trunc(1.9924302613196617e+307);
test_math_trunc(1.6729791864690435e+308);
test_math_trunc(2.9136569836704754e+307);
test_math_trunc("Y3A2L92D");
test_math_trunc(1.2472835790227343e+307);
test_math_trunc(-173);
test_math_trunc(1.5405225847574105e+308);
test_math_trunc(-763);
test_math_trunc("IPD");
test_math_trunc(1.6213289980974807e+308);
test_math_trunc("T4H8WZ");
test_math_trunc("VQVFNP2W9L");
test_math_trunc(9.070902442663634e+307);
test_math_trunc(1.7761386361260763e+308);
test_math_trunc("GON96O0M");
test_math_trunc("5YSAU");
test_math_trunc("CF765");
test_math_trunc(3.252399383360416e+306);
test_math_trunc(1.8255662835762456e+307);
test_math_trunc(2.6525171092961165e+307);
test_math_trunc("WDDV9");
test_math_trunc("NRVUJE8P5H");
test_math_trunc(-215);
test_math_trunc(1.234113122302433e+308);
test_math_trunc(-57);
test_math_trunc(8.877718149979208e+307);
test_math_trunc("6A7V8STCWS");
test_math_trunc(-543);
test_math_trunc(8.719441870827834e+307);
test_math_trunc(4.8427409204649e+307);
test_math_trunc(-457);
test_math_trunc(1.1152568663824318e+308);
test_math_trunc("UPYAX99");
test_math_trunc(7.841517562519034e+307);
test_math_trunc("7NGMLPJT6K");
test_math_trunc("0EM4M");
test_math_trunc(1.0053157153938035e+308);
test_math_trunc(1.4648577801601457e+307);
test_math_trunc(-63);
test_math_trunc(7.202279945792162e+307);
test_math_trunc("O8G");
test_math_trunc(6.278634939150923e+307);
test_math_trunc("S6BPIM");
test_math_trunc("4EW9");
test_math_trunc(-373);
test_math_trunc(3.421830826134832e+307);
test_math_trunc(1.7080347844430608e+308);
test_math_trunc(1.5033624102997247e+308);
test_math_trunc("8N5");
test_math_trunc("YT8XNIICZ");
test_math_trunc(1.2248194766012326e+308);
test_math_trunc("PNG6QZSF");
test_math_trunc(3.5208146715896e+307);
test_math_trunc(1.5618814576175664e+308);
test_math_trunc(9.292882793471441e+307);
test_math_trunc("9VTS");
test_math_trunc(-773);
test_math_trunc(-665);
test_math_trunc("OWF");
test_math_trunc(-745);
test_math_trunc("IBBK1ECB");
test_math_trunc(-479);
test_math_trunc("A4E3G");
test_math_trunc(-941);
test_math_trunc(-903);
test_math_trunc(8.608850841367439e+307);
test_math_trunc(-907);
test_math_trunc(1.1687274168364297e+308);
test_math_trunc(-453);
test_math_trunc("4Z8BQDB");
test_math_trunc("CHFI4IH0F4");
test_math_trunc(-817);
test_math_trunc(3.2621758910006723e+307);
test_math_trunc(-739);
test_math_trunc(6.935625189048971e+306);
test_math_trunc(-223);
test_math_trunc(1.5145465765039621e+308);
test_math_trunc("HE4");
test_math_trunc("DTELB1BZD");
test_math_trunc(1.2018144106172188e+308);
test_math_trunc("OR59K");
test_math_trunc("4XAEPRYXQ");
test_math_trunc(-147);
test_math_trunc(1.3577971625314536e+308);
test_math_trunc("PQHPTV");
test_math_trunc(-491);
test_math_trunc("SI7X2Z");
test_math_trunc(-533);
test_math_trunc(-405);
test_math_trunc(1.4991176292882155e+308);
test_math_trunc(1.449481332888389e+308);
test_math_trunc(4.1024452458712025e+307);
test_math_trunc("ED9H3");
test_math_trunc(1.7200682756281249e+308);
test_math_trunc("5QLTFEZU");
test_math_trunc(1.0434191615357043e+308);
test_math_trunc(1.392723966683059e+308);
test_math_trunc("TP8");
test_math_trunc(1.2157634515643402e+308);
test_math_trunc("89W");
test_math_trunc("NFC");
test_math_trunc("EUDQ12T");
test_math_trunc("ZYY");
test_math_trunc(1.0804546698065886e+308);
test_math_trunc(-77);
test_math_trunc("R7D");
test_math_trunc("I148TG1ZX");
test_math_trunc(1.758892490133313e+308);
test_math_trunc("SG2KK34NQ");
test_math_trunc(-747);
test_math_trunc(1.6310904462188176e+308);
test_math_trunc(7.642540440440516e+307);
test_math_trunc("89EJ");
test_math_trunc("1FL6I");
test_math_trunc(1.1602372864343506e+308);
test_math_trunc(1.1984442572295005e+307);
test_math_trunc(-249);
test_math_trunc(1.206130655041749e+308);
test_math_trunc(1.3336991197313384e+308);
test_math_trunc(1.5051062104437386e+307);
test_math_trunc(-67);
test_math_trunc(-445);
test_math_trunc("XGRGEA8X");
test_math_trunc("2H65QW3");
test_math_trunc("777");
test_math_trunc(-355);
test_math_trunc(2.5334044146460207e+307);
test_math_trunc(7.192429613499906e+306);
test_math_trunc("CSQMA");
test_math_trunc(1.4979475691612896e+308);
test_math_trunc("XKYQ7FAN74");
test_math_trunc("2ZTLP");
test_math_trunc(1.5506782751148187e+308);
test_math_trunc(1.0326903907002951e+307);
test_math_trunc(6.027820126243595e+307);
test_math_trunc(1.1276469159083856e+308);
test_math_trunc(1.4879265293762656e+308);
test_math_trunc("CT97QN1");
test_math_trunc("HQLDLQW0");
test_math_trunc(9.249063311256676e+307);
test_math_trunc(7.588081482373106e+307);
test_math_trunc(1.3970155121917614e+308);
test_math_trunc("QZW60");
test_math_trunc(-627);
test_math_trunc("R91QTY6DEG");
test_math_trunc(7.01258821186951e+307);
test_math_trunc(-621);
test_math_trunc(6.749725213234628e+307);
test_math_trunc(-385);
test_math_trunc("YM7");
test_math_trunc(-189);
test_math_trunc("9JFLF47");
test_math_trunc(1.2471835518313538e+308);
test_math_trunc(1.645695263708761e+308);
test_math_trunc("EJ5R3O");
test_math_trunc("4QND");
test_math_trunc(1.2716957141407863e+308);
test_math_trunc(8.920696846944281e+307);
test_math_trunc(6.883657539660273e+307);
test_math_trunc(1.1570229419051956e+308);
test_math_trunc(9.629221819930124e+307);
test_math_trunc(1.3813027670256828e+308);
test_math_trunc(-727);
test_math_trunc("AXPA1");
test_math_trunc(396);
test_math_trunc(2.494432442924179e+307);
test_math_trunc(1.4603777880015507e+308);
test_math_trunc("3RQE34R08");
test_math_trunc(1.050158182252201e+308);
test_math_trunc(-395);
test_math_trunc(-949);
test_math_trunc(1.113213976403952e+308);
test_math_trunc(2.6494503174033094e+307);
test_math_trunc(-553);
test_math_trunc("G9SGLVGX");
test_math_trunc("OPCT");
test_math_trunc(1.1872696934307631e+308);
test_math_trunc(6.14571850394659e+307);
test_math_trunc(-251);
test_math_trunc(5.032800752955675e+307);
test_math_trunc("JPBOIKRUW");
test_math_trunc(-211);
test_math_trunc(5.885794106980925e+306);
test_math_trunc(-417);
test_math_trunc("6ELC");
test_math_trunc(1.895078638659173e+307);
test_math_trunc(-167);
test_math_trunc(-351);
test_math_trunc(7.720823042903781e+306);
test_math_trunc(1.989894754690282e+307);
test_math_trunc("6E7FL");
test_math_trunc(2.1203275363753763e+307);
test_math_trunc(3.282860997714784e+307);
test_math_trunc("B3N");
test_math_trunc("0XLE");
test_math_trunc("723PD289E");
test_math_trunc("WQMH746S");
test_math_trunc(-827);
test_math_trunc(6.226093489371687e+306);
test_math_trunc(1.342116763672158e+308);
test_math_trunc("RRXOQ4");
test_math_trunc(-983);
test_math_trunc(3.9639750610825346e+307);
test_math_trunc("30W0XTL");
test_math_trunc(1.6726687278240694e+308);
test_math_trunc(1.5084362264614833e+308);
test_math_trunc(-411);
test_math_trunc(8.249067070132741e+307);
test_math_trunc(1.0761198130754629e+308);
test_math_trunc(1.3020711508676758e+308);
test_math_trunc(1.441514189774442e+308);
test_math_trunc(1.5583759090297575e+308);
test_math_trunc(1.6426946272149032e+307);
test_math_trunc("XFN6JI");
test_math_trunc(1.263582444527676e+308);
test_math_trunc("31S2FPT");
test_math_trunc(1.091855014064348e+308);
test_math_trunc(2.5750237354606426e+307);
test_math_trunc("J7TZFAW");
test_math_trunc("4QORV6BEZI");
test_math_trunc("NGD3");
test_math_trunc("PCSL");
test_math_trunc(2.4126704707491096e+306);
test_math_trunc("JH2A");
test_math_trunc("FFB69AV");
test_math_trunc("BRAA");
test_math_trunc(-959);
test_math_trunc("OE96I6U1");
test_math_trunc("YBOWO4PZ8");
test_math_trunc(2.8538753023854223e+307);
test_math_trunc("ATUV7");
test_math_trunc(-297);
test_math_trunc("SL2");
test_math_trunc("JIYFKMT");
test_math_trunc(-239);
test_math_trunc(-129);
test_math_trunc(8.839491326244859e+307);
test_math_trunc(1.313125924596363e+308);
test_math_trunc(1.3838082844968328e+307);
test_math_trunc("9SVX");
test_math_trunc("LGERW");
test_math_trunc(1.4849147560149638e+308);
test_math_trunc("W7BTX4L1W");
test_math_trunc(-695);
test_math_trunc(-325);
test_math_trunc(1.6758564504808966e+308);
test_math_trunc(1.7704512809980583e+308);
test_math_trunc(-241);
test_math_trunc("NVZV");
test_math_trunc(-19);
test_math_trunc(6.288997289172648e+307);
test_math_trunc(386);
test_math_trunc(2.99056889441929e+307);
test_math_trunc(-911);
test_math_trunc(-157);
test_math_trunc("ZCE");
test_math_trunc(-975);
test_math_trunc(2.922614853555588e+307);
test_math_trunc(6.955592168722685e+306);
test_math_trunc("2I44G");
test_math_trunc(9.583008786900405e+307);
test_math_trunc("6HW3GK");
test_math_trunc(1.0362761809475847e+308);
test_math_trunc(-79);
test_math_trunc("XK720J");
test_math_trunc(6.467946514050422e+307);
test_math_trunc(-389);
test_math_trunc("YC9N");
test_math_trunc(1.474023007183561e+308);
test_math_trunc("9T6OFYSO2");
test_math_trunc("Q8M9KN97");
test_math_trunc(-525);
test_math_trunc("JMN");
test_math_trunc(1.4787552685609421e+307);
test_math_trunc(1.625582170030511e+308);
test_math_trunc(1.3887705967316038e+308);
test_math_trunc(2.182363581052934e+307);
test_math_trunc("0IXERI");
test_math_trunc(3.012814632229752e+307);
test_math_trunc(6.062897913319137e+307);
test_math_trunc(-569);
test_math_trunc("3AJV7C2");
test_math_trunc(1.8575030712287906e+307);
test_math_trunc("GATJJ");
test_math_trunc(1.409240382712252e+308);
test_math_trunc(8.734624597557483e+307);
test_math_trunc("D7AOUIH");
test_math_trunc(-27);
test_math_trunc(-609);
test_math_trunc(1.160152622593201e+308);
test_math_trunc("KTY4");
test_math_trunc(1.326611303386647e+308);
test_math_trunc("B6VGJUEX");
test_math_trunc(-163);
test_math_trunc(-341);
test_math_trunc(7.686285209778844e+307);
test_math_trunc(1.163694440092168e+308);
test_math_trunc("D0U04DS");
test_math_trunc(-379);
test_math_trunc("BNU13");
test_math_trunc("JH9KJ");
test_math_trunc("LFELWJY");
test_math_trunc(-891);
test_math_trunc(-691);
test_math_trunc(-399);
test_math_trunc(-125);
test_math_trunc("UIWYBQ9X7");
test_math_trunc("BG5BUSJ8");
test_math_trunc("8JLH");
test_math_trunc(1.1036908119165478e+308);
test_math_trunc("CYRF1AWQU6");
test_math_trunc("9L38UI");
test_math_trunc("MRUPVRUF");
test_math_trunc(-441);
test_math_trunc(2.259955082055999e+307);
test_math_trunc(-981);
test_math_trunc("ZISA3UZ4G");
test_math_trunc("LDX7H");
test_math_trunc(-431);
test_math_trunc("H1FA4");
test_math_trunc("X80Y7X");
test_math_trunc(-31);
test_math_trunc(1.0272498949049422e+308);
test_math_trunc("1W6T7QESHF");
test_math_trunc(1.0024567085544945e+308);
test_math_trunc("IQSZW7V8D");
test_math_trunc(-421);
test_math_trunc(6.614816887188546e+307);
test_math_trunc(3.4285972240272663e+307);
test_math_trunc(1.4518840776947175e+308);
test_math_trunc(2.6379378239817165e+307);
test_math_trunc(-361);
test_math_trunc("RN01B6SGB");
test_math_trunc("2NO2X0B5");
test_math_trunc("9AL");
test_math_trunc("C48DJR0");
test_math_trunc(-65);
test_math_trunc(7.555416797361809e+307);
test_math_trunc(1.270685191285986e+308);
test_math_trunc(9.660593692881361e+307);
test_math_trunc(-5);
test_math_trunc(3.408558461348572e+307);
test_math_trunc(1.2826931695722241e+308);
test_math_trunc(-605);
test_math_trunc(8.895572344321117e+307);
test_math_trunc("Z5WDK9I");
test_math_trunc(3.388943866952099e+307);
test_math_trunc(8.40858789156456e+307);
test_math_trunc("S5ZVNKYTE");
test_math_trunc(-791);
test_math_trunc("N2QQ");
test_math_trunc(7.086173184295165e+307);
test_math_trunc(-265);
test_math_trunc(3.3800941178653485e+307);
test_math_trunc("E3RG");
test_math_trunc(1.064405693748952e+308);
test_math_trunc(-853);
test_math_trunc(-863);
test_math_trunc(-349);
test_math_trunc(1.6297221018851532e+307);
test_math_trunc(-513);
test_math_trunc(7.226284059176628e+307);
test_math_trunc(-523);
test_math_trunc(7.894162111177577e+307);
test_math_trunc("A4VDFZ");
test_math_trunc("GSPN4CGT5");
test_math_trunc(-473);
test_math_trunc(1.7656540442312417e+308);
test_math_trunc("2BV9VL9YP0");
test_math_trunc(4.435201894508738e+307);
test_math_trunc("3FIA");
test_math_trunc(5.443610999212085e+307);
test_math_trunc(-919);
test_math_trunc(1.0800923944851353e+308);
test_math_trunc(-779);
test_math_trunc("RP6LE");
test_math_trunc(4.932305983332409e+307);
test_math_trunc(-221);
test_math_trunc(5.425939235203071e+306);
test_math_trunc("KNDR");
test_math_trunc("DO11TY5");
test_math_trunc(7.119921512053796e+307);
test_math_trunc("LEFAOJ5DTP");
test_math_trunc("AKABB");
test_math_trunc(1.165800717905267e+308);
test_math_trunc(-407);
test_math_trunc(1.4488119935333487e+308);
test_math_trunc(-489);
test_math_trunc(1.4551932332856005e+308);
test_math_trunc(-357);
test_math_trunc("1SK4OG9W");
test_math_trunc("ZIN25VN");
test_math_trunc(7.317370594071378e+306);
test_math_trunc(1.1829852627515553e+308);
test_math_trunc(1.6266073524175753e+308);
test_math_trunc(1.0194063867147129e+308);
test_math_trunc(5.262961778807584e+307);
test_math_trunc(-977);
test_math_trunc(8.927454678501468e+307);
test_math_trunc("IUMT");
test_math_trunc(1.5048349589044922e+308);
test_math_trunc(1.4738527809004065e+307);
test_math_trunc(1.3867854177870581e+308);
test_math_trunc("4PYR26BXD");
test_math_trunc("TALFGIC1");
test_math_trunc("RGDS1");
test_math_trunc("8SU6");
test_math_trunc("A0H5BWO");
test_math_trunc(9.122903000173232e+307);
test_math_trunc("FB2K");
test_math_trunc("31N8MR");
test_math_trunc(2.5466724604242872e+306);
test_math_trunc("15QC33");
test_math_trunc(-595);
test_math_trunc("DCL53EA");
test_math_trunc(3.8615291014253186e+307);
test_math_trunc("WQPX8X");
test_math_trunc("O5QBI2O");
test_math_trunc("IS2OB");
test_math_trunc("7V4GU");
test_math_trunc("EJYVV5ZLQ");
test_math_trunc(-231);
test_math_trunc(4.062575240418478e+307);
test_math_trunc(-839);
test_math_trunc(1.3988585526259408e+308);
test_math_trunc(-737);
test_math_trunc(3.971110140276442e+306);
test_math_trunc(-261);
test_math_trunc(5.933545959630855e+307);
test_math_trunc(-639);
test_math_trunc("34L6K");
test_math_trunc("99A");
test_math_trunc("9F4");
test_math_trunc(6.520443968929402e+307);
test_math_trunc(1.590972083566669e+308);
test_math_trunc("13BQW");
test_math_trunc("GEEWAS");
test_math_trunc("DMK3ELDSSX");
test_math_trunc("YPARLRXV");
test_math_trunc(-721);
test_math_trunc("I1647F");
test_math_trunc(-661);
test_math_trunc(1.2015529764428182e+308);
test_math_trunc(-861);
test_math_trunc(1.218189201745873e+308);
test_math_trunc("LMXMZFZN8");
test_math_trunc("TOQP46WCX");
test_math_trunc("JU8S25");
test_math_trunc("LH61294");
test_math_trunc(3.739821041904329e+307);
test_math_trunc("3U415X0JD");
test_math_trunc(9.74224592240997e+307);
test_math_trunc(-285);
test_math_trunc(-847);
test_math_trunc(7.254167289280661e+306);
test_math_trunc(-867);
test_math_trunc(8.948850484408876e+307);
test_math_trunc(1.7628882777030962e+308);
test_math_trunc("F9TL86QU");
test_math_trunc("KK6QQXA");
test_math_trunc("RJKJMY");
test_math_trunc("QA0B4OS");
test_math_trunc(-271);
test_math_trunc(-645);
test_math_trunc("U4D3SX3U");
test_math_trunc(1.0670711038042119e+307);
test_math_trunc(9.548745088355777e+307);
test_math_trunc(-257);
test_math_trunc(1.591535733462298e+307);
test_math_trunc(8.818518919407705e+307);
test_math_trunc(1.7967404430187022e+307);
test_math_trunc(7.696880395385328e+307);
test_math_trunc(8.790457562061598e+307);
test_math_trunc(-323);
test_math_trunc(1.527213122710596e+308);
test_math_trunc("UND");
test_math_trunc(2.56914469044009e+307);
test_math_trunc(1.3191724415122884e+308);
test_math_trunc("MYHRR");
test_math_trunc(1.7834710823923045e+308);
test_math_trunc(1.0074167109289906e+308);
test_math_trunc(3.223863092409997e+305);
test_math_trunc("3PYGBNTS5Y");
test_math_trunc(-917);
test_math_trunc("VHU9RUV");
test_math_trunc(-327);
test_math_trunc("QEL");
test_math_trunc(1.531323099016034e+308);
test_math_trunc(9.367710290089708e+307);
test_math_trunc(1.483075558435925e+306);
test_math_trunc("V2NRSA");
test_math_trunc(-537);
test_math_trunc(6.830621979440268e+307);
test_math_trunc("QYV4M");
test_math_trunc(-567);
test_math_trunc(8.364732762157602e+307);
test_math_trunc("S7OOJ63NCH");
test_math_trunc("ZLYZQ5");
test_math_trunc(1.0874591734680813e+308);
test_math_trunc("GCAAJVPAE");
test_math_trunc(-517);
test_math_trunc(-723);
test_math_trunc("Z8KOZU82");
test_math_trunc("STXQRV");
test_math_trunc(8.196841328541713e+307);
test_math_trunc(-803);
test_math_trunc("TU5AF7");
test_math_trunc(4.810238805748695e+307);
test_math_trunc("RZ9");
test_math_trunc(1.4344520083935293e+308);
test_math_trunc("XBKK4G");
test_math_trunc(4.650699354619096e+307);
test_math_trunc(-507);
test_math_trunc("UMIPPGM9YC");
test_math_trunc(-369);
test_math_trunc(7.126250144454307e+307);
test_math_trunc(2.1805811161364575e+307);
test_math_trunc(1.6351534185618736e+308);
test_math_trunc(-807);
test_math_trunc(1.3429114876108062e+307);
test_math_trunc("VRN");
test_math_trunc(-345);
test_math_trunc("4H84E8SC");
test_math_trunc(1.674630325902611e+307);
test_math_trunc("K48BC");
test_math_trunc(6.83133829612286e+307);
test_math_trunc("OWIERI");
