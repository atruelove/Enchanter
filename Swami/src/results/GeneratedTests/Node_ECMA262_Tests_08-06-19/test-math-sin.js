/*
* This file is automatically generated by Swami
*
* 2019-08-06 12:35:18.578677
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
function test_math_sin(x){
	if (Object.is( x,NaN )){
		var output = Math.sin(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.sin(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === - 0 )){
		var output = Math.sin(x);
		assert.strictEqual(- 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === + Infinity || x === - Infinity )){
		var output = Math.sin(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}



/*TESTS GENERATED AUTOMATICALLY*/
test_math_sin(-519);
test_math_sin(true);
test_math_sin(null);
test_math_sin(false);
test_math_sin("E8CVZQ");
test_math_sin(-371);
test_math_sin(/[\u0400-\u04FF]+/g);
test_math_sin("HE15");
test_math_sin(/yes[^]*day/);
test_math_sin("DY2KB8JZ");
test_math_sin(/yes.*day/);
test_math_sin(7.182215963535469e+307);
test_math_sin(-501);
test_math_sin("55B0JYGLLZ");
test_math_sin("I5MJV2FZ");
test_math_sin(1.5328767021565205e+308);
test_math_sin(-583);
test_math_sin(1.6531157683427708e+308);
test_math_sin(-733);
test_math_sin(1.6625706462047916e+308);
test_math_sin(-547);
test_math_sin("V3O2RER92F");
test_math_sin(/[^.]+/);
test_math_sin(undefined);
test_math_sin(-0);
test_math_sin("4J8U2XD");
test_math_sin(-965);
test_math_sin("HUWM");
test_math_sin("VJOLG1P0O");
test_math_sin(-683);
test_math_sin(-549);
test_math_sin(-603);
test_math_sin(9.559206495810218e+307);
test_math_sin(7.091536446376173e+307);
test_math_sin("GZIKQ97");
test_math_sin(-485);
test_math_sin(1.5839897401716197e+308);
test_math_sin(1.4434612776027416e+308);
test_math_sin(Infinity);
test_math_sin(1.5166023851965638e+308);
test_math_sin(-163);
test_math_sin(4.717546820925276e+307);
test_math_sin(-481);
test_math_sin(-49);
test_math_sin(-873);
test_math_sin(-803);
test_math_sin(1.5154099490650361e+308);
test_math_sin(1.768790721267286e+308);
test_math_sin("EJ5Q");
test_math_sin(-719);
test_math_sin(3.582081756725317e+306);
test_math_sin(-939);
test_math_sin(-377);
test_math_sin(-253);
test_math_sin(+0);
test_math_sin("MIR0J");
test_math_sin("ADDFC8IT9U");
test_math_sin(5.438558721146973e+307);
test_math_sin(NaN);
test_math_sin(-265);
test_math_sin(-431);
test_math_sin(5.641568775014228e+307);
test_math_sin(-321);
test_math_sin(-883);
test_math_sin(/foo/g);
test_math_sin(3.0833477643191597e+307);
test_math_sin("76D1");
test_math_sin(-39);
test_math_sin("CX95DE");
test_math_sin("BSFLHW");
test_math_sin(1.1635574246008494e+308);
test_math_sin(/\r\n|\r|\n/);
test_math_sin(/ab+c/);
test_math_sin(1.3094573621381288e+308);
test_math_sin(-125);
test_math_sin(-453);
test_math_sin("0X7");
test_math_sin(-625);
test_math_sin("X9PTW13G");
test_math_sin("FOASHJY");
test_math_sin("J60EB17");
test_math_sin(1.4889614164031656e+308);
test_math_sin("FDLM1GJYF");
test_math_sin(8.461178512264158e+307);
test_math_sin("L1XZQEKOP");
test_math_sin(1.2822137643323031e+307);
test_math_sin(1.1739873593811726e+308);
test_math_sin(-761);
test_math_sin("2M57");
test_math_sin(-473);
test_math_sin(7.78051787289992e+307);
test_math_sin("9ROIL1O5T0");
test_math_sin(1.7939380015849578e+308);
test_math_sin("ATW");
test_math_sin(-775);
test_math_sin(6.523154558179697e+307);
test_math_sin(-619);
test_math_sin(-743);
test_math_sin(-687);
test_math_sin(8.550589334876435e+306);
test_math_sin("YN8S7W3");
test_math_sin("DUP63");
test_math_sin("G2UUVEVTD");
test_math_sin("ZRTF7");
test_math_sin(/(\w+)\s(\w+)/);
test_math_sin("W55Y4SMA6");
test_math_sin(-259);
test_math_sin("24VFY");
test_math_sin(5.223783924807857e+307);
test_math_sin(1.1411007332374334e+308);
test_math_sin(1.6213461950080767e+308);
test_math_sin("3K17PSQSYE");
test_math_sin(-251);
test_math_sin("KSJ8V1");
test_math_sin("M3A8");
test_math_sin(-83);
test_math_sin("DU7AA");
test_math_sin(-361);
test_math_sin(-295);
test_math_sin("14RADPIOKX");
test_math_sin(7.733021598577472e+307);
test_math_sin(-629);
test_math_sin("ZB76INT2O");
test_math_sin("777I28QDJ");
test_math_sin(-347);
test_math_sin(1.5897815197260797e+308);
test_math_sin(5.463833433811499e+307);
test_math_sin(-983);
test_math_sin(5.764372085916786e+307);
test_math_sin(-827);
test_math_sin("W45SVY");
test_math_sin(3.8369908637126746e+307);
test_math_sin(2.9149952615240046e+307);
test_math_sin(-795);
test_math_sin(-813);
test_math_sin(4.33151367196044e+307);
test_math_sin(9.941484187358685e+307);
test_math_sin("HGF");
test_math_sin(-459);
test_math_sin("UKEMGWXL");
test_math_sin("8XP");
test_math_sin(-543);
test_math_sin(-825);
test_math_sin(-893);
test_math_sin(1.7833390676099086e+308);
test_math_sin("NH0A");
test_math_sin(1.7109588054003403e+308);
test_math_sin(-217);
test_math_sin(-655);
test_math_sin(-635);
test_math_sin(912);
test_math_sin(-261);
test_math_sin("C75CJFQNO");
test_math_sin(-963);
test_math_sin(1.5055487275021852e+308);
test_math_sin(1.1193442676914524e+308);
test_math_sin(2.888595836228777e+307);
test_math_sin(1.7901893463898332e+308);
test_math_sin(-323);
test_math_sin("HK2AP852CY");
test_math_sin(-101);
test_math_sin("DPKHXY");
test_math_sin(-393);
test_math_sin(1.2285199780781211e+308);
test_math_sin(1.691655659202597e+308);
test_math_sin(5.006388332004984e+307);
test_math_sin("Y4E07RDQS");
test_math_sin("F0N");
test_math_sin(-81);
test_math_sin(1.4160582662264771e+308);
test_math_sin("Z0CXQY504");
test_math_sin("K0VZ8WA");
test_math_sin(1.375921463467047e+308);
test_math_sin(-545);
test_math_sin(1.0735376807778026e+308);
test_math_sin("OKY0D57N");
test_math_sin(3.8596585797969643e+307);
test_math_sin(6.800836742994559e+307);
test_math_sin(-763);
test_math_sin(-701);
test_math_sin(-505);
test_math_sin("WKG9T");
test_math_sin(-379);
test_math_sin(1.5361927448019962e+308);
test_math_sin(6.250370867478841e+307);
test_math_sin("EGQB6JJJB");
test_math_sin(-695);
test_math_sin("DLPSQI");
test_math_sin(-151);
test_math_sin(7.894933550973677e+307);
test_math_sin(-525);
test_math_sin("FREU9CB4R");
test_math_sin(-919);
test_math_sin(1.7145136110776478e+308);
test_math_sin("OFS");
test_math_sin(7.132106533669696e+307);
test_math_sin("I68Z");
test_math_sin(-969);
test_math_sin(1.5104246205684804e+308);
test_math_sin(-599);
test_math_sin("23SYD97");
test_math_sin(1.6245639419252129e+308);
test_math_sin(1.2406426910907527e+308);
test_math_sin("XX90E7V");
test_math_sin("93F4");
test_math_sin(6.777796895080572e+307);
test_math_sin(1.1170015262973802e+308);
test_math_sin("CPQGXPB");
test_math_sin(-829);
test_math_sin(-313);
test_math_sin(6.14151438531898e+307);
test_math_sin(6.000205466031776e+307);
test_math_sin(-349);
test_math_sin(-353);
test_math_sin(7.144922125099826e+307);
test_math_sin(9.579029903135198e+307);
test_math_sin(-817);
test_math_sin("C74YF4T46K");
test_math_sin(8.71219649757839e+306);
test_math_sin(6.435332395047218e+306);
test_math_sin(-659);
test_math_sin(-711);
test_math_sin("Q9N0M");
test_math_sin("3OICCFUD3");
test_math_sin("Y2LM4QXICC");
test_math_sin(7.66289321536081e+307);
test_math_sin(-573);
test_math_sin(1.1513055441845051e+308);
test_math_sin(-613);
test_math_sin(-263);
test_math_sin(-487);
test_math_sin("A2ZO9LT");
test_math_sin(1.5759589744180614e+308);
test_math_sin("IOE0");
test_math_sin(-769);
test_math_sin(1.6704927633081887e+308);
test_math_sin(6.670457465502963e+307);
test_math_sin(1.2754219628659067e+308);
test_math_sin("M46");
test_math_sin("6V5CZH1ZAD");
test_math_sin("TROCJQN4");
test_math_sin(3.288279596239798e+307);
test_math_sin("YJL4OI");
test_math_sin(4.267142459862669e+307);
test_math_sin("PK8DOXZU");
test_math_sin("IMP24YMX");
test_math_sin("4GSFAEI");
test_math_sin(2.155106976167199e+307);
test_math_sin("QDX7VZZVQ");
test_math_sin(396);
test_math_sin(9.051723761428478e+307);
test_math_sin(-445);
test_math_sin(5.108308495269039e+307);
test_math_sin("CM8");
test_math_sin(4.605245556113951e+307);
test_math_sin("HSYDD2W");
test_math_sin(1.200029934869469e+308);
test_math_sin("XJ9ZM");
test_math_sin(-373);
test_math_sin("EPVMQ");
test_math_sin("KWB2EGE");
test_math_sin(-643);
test_math_sin("D99W5");
test_math_sin(-307);
test_math_sin(8.063620523733843e+307);
test_math_sin("XN17Z");
test_math_sin(6.472807881949041e+307);
test_math_sin(4.26266513643419e+307);
test_math_sin(7.207734234002359e+306);
test_math_sin(-771);
test_math_sin(5.255361269328684e+307);
test_math_sin(-417);
test_math_sin(1.7837119387853557e+307);
test_math_sin("U6RJJQIXY");
test_math_sin(1.6746710607087564e+308);
test_math_sin("AX8");
test_math_sin("5F9P6");
test_math_sin(-267);
test_math_sin("PTVAZ4N5KP");
test_math_sin(1.5215448872059814e+308);
test_math_sin("663EL");
test_math_sin(-891);
test_math_sin("OSC7H00");
test_math_sin(-195);
test_math_sin(-375);
test_math_sin(8.017826538012124e+307);
test_math_sin(1.4240165678074703e+308);
test_math_sin(-235);
test_math_sin(1.5672700755464085e+308);
test_math_sin("F9UHFHA");
test_math_sin(9.29799273325596e+307);
test_math_sin(-469);
test_math_sin(1.511877835809869e+308);
test_math_sin("YI9PJ8");
test_math_sin("9TL2");
test_math_sin(-389);
test_math_sin("BDAC3XG");
test_math_sin(1.668845546492786e+308);
test_math_sin(-399);
test_math_sin(-959);
test_math_sin(8.793062023274502e+307);
test_math_sin("AYJ8PNNU1N");
test_math_sin("LGJVJMRQ");
test_math_sin("RNRIOG1A");
test_math_sin(1.1434987647756403e+308);
test_math_sin(-905);
test_math_sin(-107);
test_math_sin("Z5D9I");
test_math_sin("KQ7AHB");
test_math_sin(-95);
test_math_sin(1.7694818807574092e+308);
test_math_sin("5O4");
test_math_sin("HJLD8");
test_math_sin(1.7580434245323277e+308);
test_math_sin(7.3032954764041855e+307);
test_math_sin("11OEM7QXPX");
test_math_sin(-141);
test_math_sin(5.268233105569169e+307);
test_math_sin("KU94");
test_math_sin("6AR35S");
test_math_sin(-915);
test_math_sin("IOP67FEA2");
test_math_sin(2.4640341386671336e+307);
test_math_sin("WGX");
test_math_sin(5.575403597507185e+307);
test_math_sin(7.320989607712328e+307);
test_math_sin(1.3251525124095856e+308);
test_math_sin(1.2126625367445211e+308);
test_math_sin(7.038487584270359e+307);
test_math_sin(-823);
test_math_sin("J45EWK59");
test_math_sin("ILLJJ5B");
test_math_sin("KV0RC");
test_math_sin("51S2TB");
test_math_sin(-971);
test_math_sin(7.592956676799923e+307);
test_math_sin(1.576790024317932e+308);
test_math_sin(1.0991280249261625e+308);
test_math_sin("O7SQC235D");
test_math_sin(4.929750893248612e+306);
test_math_sin(5.917662248190826e+307);
test_math_sin(-653);
test_math_sin("YZJ1");
test_math_sin(-591);
test_math_sin("01E6");
test_math_sin("OOZLS");
test_math_sin("YF5PBA5T");
test_math_sin("UML27");
test_math_sin("QZEV");
test_math_sin("HP2T8D5");
test_math_sin(-387);
test_math_sin("1DSP6IAM5");
test_math_sin("0DU4");
test_math_sin(5.275388031083889e+307);
test_math_sin("RBW5VVU2M");
test_math_sin(192);
test_math_sin("10ODTNS");
test_math_sin(-115);
test_math_sin(-301);
test_math_sin(-507);
test_math_sin("DOZVZ");
test_math_sin(7.775679347392745e+306);
test_math_sin(-865);
test_math_sin(1.4857949305912976e+308);
test_math_sin(9.228532372244608e+307);
test_math_sin("8THPPZXFBN");
test_math_sin(-551);
test_math_sin(-987);
test_math_sin(4.028915177486804e+307);
test_math_sin(-885);
test_math_sin("9PXJL");
test_math_sin(1.1198229849813299e+308);
test_math_sin(1.1667154107042652e+308);
test_math_sin(3.051577780423925e+307);
test_math_sin(1.7488958327402632e+308);
test_math_sin(-331);
test_math_sin(-479);
test_math_sin("YFXKOI");
test_math_sin(1.3232799610632217e+308);
test_math_sin(7.594233351400373e+307);
test_math_sin(6.980626005285705e+307);
test_math_sin(-799);
test_math_sin(1.7794499276767154e+308);
test_math_sin(-53);
test_math_sin("J4C");
test_math_sin("WHFX");
test_math_sin(4.1837220452371533e+307);
test_math_sin(7.056817973206935e+307);
test_math_sin("NAE8RK9C");
test_math_sin(1.4921242816612817e+308);
test_math_sin(-853);
test_math_sin(5.477083175640842e+307);
test_math_sin(1.1746670751395329e+308);
test_math_sin(1.5347196203182256e+308);
test_math_sin("RLTQGYDK");
test_math_sin(1.414515897368192e+308);
test_math_sin(-35);
test_math_sin(-131);
test_math_sin("8MVS79L2J");
test_math_sin(-645);
test_math_sin("C3CHQTLFL");
test_math_sin(-117);
test_math_sin(1.6463766626181576e+308);
test_math_sin(-793);
test_math_sin(1.0528582125954545e+308);
test_math_sin(5.319287187116177e+307);
test_math_sin("MQK1S286");
test_math_sin(8.432071617657871e+307);
test_math_sin(-849);
test_math_sin("GKE6QX");
test_math_sin("J4SPE5Z");
test_math_sin(-149);
test_math_sin("6NIRDDZV8M");
test_math_sin(1.0554772049480864e+308);
test_math_sin("3U6FFKWF");
test_math_sin(8.994837080545648e+307);
test_math_sin(-689);
test_math_sin(9.640621696459e+307);
test_math_sin(1.8883581343471702e+307);
test_math_sin(1.5176575010231484e+308);
test_math_sin("0847JFW8");
test_math_sin("V8EFTAB");
test_math_sin(7.43398038910787e+307);
test_math_sin(-451);
test_math_sin(1.2807240722652999e+308);
test_math_sin("IXFB4CDIGG");
test_math_sin(-997);
test_math_sin("9QNX5K");
test_math_sin(8.916539216313879e+306);
test_math_sin(-765);
test_math_sin(8.55251941787723e+307);
test_math_sin(-945);
test_math_sin("P0WAVN");
test_math_sin(-899);
test_math_sin("SMNOS5OSCT");
test_math_sin(-385);
test_math_sin(1.4779260002493995e+308);
test_math_sin("GCPCTFJX");
test_math_sin("JL9BFCGNO");
test_math_sin(-593);
test_math_sin("2Y06L0");
test_math_sin(-425);
test_math_sin(9.991749095772442e+307);
test_math_sin(5.684919224620527e+307);
test_math_sin("V6AU0H");
test_math_sin(1.0075577401184518e+308);
test_math_sin(1.3388499410432479e+308);
test_math_sin(1.0053040134051549e+307);
test_math_sin(-567);
test_math_sin(1.2207159388548746e+307);
test_math_sin("2EDWO8D9ES");
test_math_sin("8PTF");
test_math_sin(-779);
test_math_sin("SYQHRM");
test_math_sin(-925);
test_math_sin(-611);
test_math_sin("D1B");
test_math_sin("HOIPNC");
test_math_sin("LRV");
test_math_sin("T4FTF56H");
test_math_sin(1.8028094549642822e+307);
test_math_sin("DRZTQ0");
test_math_sin(3.549836910084823e+307);
test_math_sin("NW0J9BG4");
test_math_sin(-781);
test_math_sin(-663);
test_math_sin("YUSIY2PCY");
test_math_sin(9.240538839994557e+307);
test_math_sin(-675);
test_math_sin("U54V");
test_math_sin(-569);
test_math_sin("BZ7H7ENEN");
test_math_sin(-365);
test_math_sin(-699);
test_math_sin(1.5665989933861054e+308);
test_math_sin(9.305338942489976e+307);
test_math_sin(-105);
test_math_sin(2.0049614678143893e+307);
test_math_sin(-867);
test_math_sin(4.2662816714639256e+307);
test_math_sin(9.933951883739788e+307);
test_math_sin("AZD67YT");
test_math_sin("I2KISQRBT1");
test_math_sin(-859);
test_math_sin(-475);
test_math_sin("ZYSIKAS9");
test_math_sin("765GO");
test_math_sin(-871);
test_math_sin(1.2366514757213466e+308);
test_math_sin("S74ET6S");
test_math_sin(1.5839023289378118e+308);
test_math_sin(7.973354640356817e+307);
test_math_sin(-565);
test_math_sin(3.2615624399641065e+307);
test_math_sin(-509);
test_math_sin(1.1897953222020544e+308);
test_math_sin("Z1ZDZQ5");
test_math_sin(7.276201654083028e+306);
test_math_sin(-647);
test_math_sin(-657);
test_math_sin("FWN2WPP1M");
test_math_sin(-709);
test_math_sin("YIVO4CB2");
test_math_sin("AXCCVM2K");
test_math_sin("CJ2AQ1");
test_math_sin(1.768944335726176e+308);
test_math_sin(-731);
test_math_sin("IOXYXD");
test_math_sin(1.2268599756818778e+308);
test_math_sin("8MP9R6X8");
test_math_sin("GGCH");
test_math_sin("72RXWS");
test_math_sin(1.3353231385071274e+308);
test_math_sin(1.9943895505058988e+307);
test_math_sin(4.695279948401373e+307);
test_math_sin("F9C9WL6KR");
test_math_sin(-833);
test_math_sin(7.715656064334545e+307);
test_math_sin(4.615923094411418e+307);
test_math_sin("KIX");
test_math_sin(1.1803722466151548e+308);
test_math_sin("OUUX8PZK");
test_math_sin(-143);
test_math_sin(-221);
test_math_sin(1.0052809370704225e+308);
test_math_sin("2IPVPBIP");
test_math_sin("EZ4VJAQY1W");
test_math_sin(5.661925235750842e+307);
test_math_sin(8.138394790387218e+306);
test_math_sin("WY8VGFBR");
test_math_sin("XZHC1");
test_math_sin(5.439141224357817e+307);
test_math_sin("OPPPHH1U1");
test_math_sin(3.610302931658508e+307);
test_math_sin(8.977627486327208e+307);
test_math_sin("7OGAZIA");
test_math_sin(-61);
test_math_sin("SD7");
test_math_sin(6.287895673572123e+306);
test_math_sin(3.7035479306419746e+307);
test_math_sin("GOT7H4BXS");
test_math_sin("DGSX5GMVT9");
test_math_sin(-5);
test_math_sin(1.5007696505254666e+308);
test_math_sin("900VDGDMK2");
test_math_sin("LNIEW72CU");
test_math_sin(-75);
test_math_sin(-121);
test_math_sin(-203);
test_math_sin("KHFN");
test_math_sin(9.81708366729431e+307);
test_math_sin(5.621168063788881e+307);
test_math_sin(-247);
test_math_sin("0UF80QXE");
test_math_sin(1.4009113146134226e+308);
test_math_sin(4.954076794577145e+307);
test_math_sin(4.150260161236893e+307);
test_math_sin("IFXR5NS");
test_math_sin(3.1522563891792556e+307);
test_math_sin(-191);
test_math_sin(-457);
test_math_sin(1.2435026439988793e+307);
test_math_sin(8.047427931043303e+307);
test_math_sin(-933);
test_math_sin("LYRRQJZ");
test_math_sin(1.760405157329196e+308);
test_math_sin(1.1042303481212107e+308);
test_math_sin(1.1054190214444332e+308);
test_math_sin("XYE6");
test_math_sin("206DO");
test_math_sin(7.377949458662877e+307);
test_math_sin("E2NVMWA");
test_math_sin(-531);
test_math_sin("L1L");
test_math_sin(-255);
test_math_sin(-37);
test_math_sin("U45175C");
test_math_sin(-767);
test_math_sin(-433);
test_math_sin("NP3XWWRR");
test_math_sin("FQ738D");
test_math_sin("G8N33ATFP");
test_math_sin(-145);
test_math_sin(-815);
test_math_sin(1.7164900129040901e+308);
test_math_sin(-71);
test_math_sin(-309);
test_math_sin(-495);
test_math_sin(1.2874494036027802e+308);
test_math_sin("APKOVDGCA1");
test_math_sin(2.0978198535982756e+306);
test_math_sin("2WSQZYQ347");
test_math_sin(-23);
test_math_sin(9.871886790523212e+307);
test_math_sin("8LL762");
test_math_sin("UAZOP");
test_math_sin(1.3205823942713026e+308);
test_math_sin(1.1853436456635586e+308);
test_math_sin("SPI3ZJR97");
test_math_sin(1.5238326569057922e+308);
test_math_sin("NQPW");
test_math_sin("V6IHHBNQ");
test_math_sin("5NZZY4");
test_math_sin("HV7");
test_math_sin("OP4E");
test_math_sin(-691);
test_math_sin(7.058672955461918e+307);
test_math_sin(-791);
test_math_sin(-729);
test_math_sin(-93);
test_math_sin("JHT");
test_math_sin(5.149503094421972e+307);
test_math_sin(-723);
test_math_sin(3.8019379255731255e+307);
test_math_sin("YGGU3NYSV8");
test_math_sin("VYBPMDUU");
test_math_sin(-539);
test_math_sin(1.557654631508477e+308);
test_math_sin("6TFUFRFGY");
test_math_sin("W7G");
test_math_sin(-863);
test_math_sin(1.1558679081580732e+307);
test_math_sin("IH5YL");
test_math_sin(1.4467140486847453e+308);
test_math_sin(3.840119277174352e+307);
test_math_sin(-413);
test_math_sin("D0PK7AEPHQ");
test_math_sin(1.2307596559698966e+308);
test_math_sin(-973);
test_math_sin("DB6A4A");
test_math_sin(9.1515921466065e+307);
test_math_sin(5.398583891024621e+307);
test_math_sin("8VMLZN");
test_math_sin("JHQV2134CU");
test_math_sin(7.182026393688779e+305);
test_math_sin("OGRCX");
test_math_sin("H2Y");
test_math_sin("I0O8");
test_math_sin("DDKKMF");
test_math_sin(1.6644238993684867e+308);
test_math_sin(1.2987367174092823e+308);
test_math_sin(9.220707644906792e+307);
test_math_sin("SS5KHCM0");
test_math_sin("TWXO3HX");
test_math_sin(4.879416512557674e+307);
test_math_sin(-937);
test_math_sin("XRAOO");
test_math_sin("57E6OWW");
test_math_sin(-837);
test_math_sin(6.578864300881473e+305);
test_math_sin("5BG");
test_math_sin(-535);
test_math_sin(1.0962156484781803e+308);
test_math_sin("WNFCLLP8");
test_math_sin(-917);
test_math_sin(1.7054121612373067e+308);
test_math_sin("DQ8R1U6HR");
test_math_sin(-133);
test_math_sin(3.524216172588543e+306);
test_math_sin(7.698091931569292e+307);
test_math_sin("P4OOS1OH");
test_math_sin("RST");
test_math_sin(-467);
test_math_sin(-245);
test_math_sin(-557);
test_math_sin("G7LNS6KG5");
test_math_sin(1.5873270030349508e+308);
test_math_sin("IXNHRHV6R");
test_math_sin("YHDU");
test_math_sin(3.6833402531983796e+307);
test_math_sin(-27);
test_math_sin("Q3QFEHR");
test_math_sin("27ALPPKXP7");
test_math_sin(-437);
test_math_sin(-111);
test_math_sin("EDOK");
test_math_sin("F35");
test_math_sin("7VM6I1EE");
test_math_sin("JJXHEIA8");
test_math_sin(-69);
test_math_sin(-351);
test_math_sin("Z8YX71T8");
test_math_sin(1.1330592639322461e+308);
test_math_sin("HBUE0CR");
test_math_sin(1.0607189387329826e+307);
test_math_sin(-159);
test_math_sin(-597);
test_math_sin(1.5478791557357668e+308);
test_math_sin("5WJT");
test_math_sin(-809);
test_math_sin("NL3");
test_math_sin(1.6930441219203518e+308);
test_math_sin(1.6860887112462968e+308);
test_math_sin(3.950618782336681e+307);
test_math_sin("RIVV69H13");
test_math_sin("RUU5BZZH");
test_math_sin(1.588368646183283e+308);
test_math_sin(7.058921032057977e+307);
test_math_sin(9.835584808604985e+307);
test_math_sin(-423);
test_math_sin("58Q");
test_math_sin("6XDBB");
test_math_sin(1.054085463439029e+308);
test_math_sin(-45);
test_math_sin(9.46626695242307e+307);
test_math_sin("3CW7HTR");
test_math_sin("DSLA0Q8ZY9");
test_math_sin(3.886719295488006e+307);
test_math_sin(1.5137224650076295e+308);
test_math_sin(1.768140121419104e+308);
test_math_sin(7.198792419362168e+307);
test_math_sin("EGO");
test_math_sin(1.6846836432699116e+308);
test_math_sin(-397);
test_math_sin("LI3DSG7YL");
test_math_sin("291EJ");
test_math_sin(1.7880627184130927e+308);
test_math_sin("6LM7EH3N");
test_math_sin("2PHRUK");
test_math_sin("WPTX1CVM44");
test_math_sin("7JM82ZQP");
test_math_sin("UD75BXD");
test_math_sin(-555);
test_math_sin("YOAW0AAO");
test_math_sin("TEY64MQOW");
test_math_sin(1.681658278444365e+307);
test_math_sin(1.3624554954889713e+308);
test_math_sin(-671);
test_math_sin(-359);
test_math_sin("S45G");
test_math_sin(1.2912010307469129e+308);
test_math_sin("8ROLE");
test_math_sin(-3);
test_math_sin("PXAQ");
test_math_sin(7.423925962128198e+307);
test_math_sin(-811);
test_math_sin(1.2878305845969508e+307);
test_math_sin(2.1478287145679675e+307);
test_math_sin(5.22042416653964e+306);
test_math_sin(3.883560703442344e+307);
test_math_sin(-317);
test_math_sin(6.963507994079457e+307);
test_math_sin(-319);
test_math_sin("J2K");
test_math_sin(1.846543432643255e+307);
test_math_sin(1.2942478274095295e+308);
test_math_sin(-875);
test_math_sin(1.2585879882470839e+308);
test_math_sin("Q8DCM29C03");
test_math_sin(-169);
test_math_sin(1.0748112139505397e+308);
test_math_sin("UU566OGP1Q");
test_math_sin("7NZ2");
test_math_sin(5.838455212185109e+307);
test_math_sin(1.2804203400807087e+308);
test_math_sin(1.4103239943758046e+308);
test_math_sin(-989);
test_math_sin(9.795478264734034e+307);
test_math_sin("QOP");
test_math_sin("90G8R");
test_math_sin("9FGWKBHTG");
test_math_sin("W58W7ER");
test_math_sin("KR1012SMOZ");
test_math_sin("LLFVO046DV");
test_math_sin("VWVM");
test_math_sin(-187);
test_math_sin(-679);
test_math_sin(-633);
test_math_sin(-257);
test_math_sin("0ZN0UPV");
test_math_sin("ZSXP");
test_math_sin("RC32X");
test_math_sin("A0MXP6");
test_math_sin("AQV");
test_math_sin(-951);
test_math_sin(-585);
test_math_sin("C5CVDEBNG");
test_math_sin(-421);
test_math_sin(-241);
test_math_sin(6.392814906039102e+307);
test_math_sin(7.423916967241679e+307);
test_math_sin(7.041493133336481e+307);
test_math_sin("BMHGGKIE0");
test_math_sin("WO2");
test_math_sin("ZMDAMD");
test_math_sin("61O8QUF");
test_math_sin("PSM3P");
test_math_sin(-943);
test_math_sin(-889);
test_math_sin(8.846600466376389e+307);
test_math_sin(-405);
test_math_sin(1.465847626008269e+308);
test_math_sin(-277);
test_math_sin(1.6792384663126414e+308);
test_math_sin("9FCXJRU57");
test_math_sin("CWSPYXK");
test_math_sin("EA25HA");
test_math_sin(7.37790960708605e+307);
test_math_sin(1.513127112512475e+306);
test_math_sin(1.3728464163952628e+308);
test_math_sin(1.4810642899100752e+308);
test_math_sin("TBTOW");
test_math_sin("TF9L0K4Y");
test_math_sin(-1);
test_math_sin(1.3780473810705687e+308);
test_math_sin(-921);
test_math_sin(6.031883983567927e+307);
test_math_sin(-755);
test_math_sin("1DJVW");
test_math_sin(1.783549671770405e+308);
test_math_sin(3.920880825322103e+307);
test_math_sin("IFXOYOS6");
test_math_sin(1.4018713948308457e+308);
test_math_sin("GTM4A");
test_math_sin("LR1BZRFQ");
test_math_sin("IBGBFWS7C");
test_math_sin(1.2026034152665925e+308);
test_math_sin(-403);
test_math_sin(-303);
test_math_sin("AC5MUGRB6");
test_math_sin(8.669664984689721e+307);
test_math_sin("1NVLI4717");
test_math_sin("P3BBH");
test_math_sin(1.4969111703307182e+308);
test_math_sin(1.4796175017667648e+308);
test_math_sin(8.205824524209621e+307);
test_math_sin("R5K5X");
test_math_sin("W85272C1WT");
test_math_sin(-119);
test_math_sin("RKC");
test_math_sin(1.2911005020165526e+308);
test_math_sin(3.009910525606184e+307);
test_math_sin(6.34105434742888e+307);
test_math_sin(-447);
test_math_sin(9.773208987554371e+306);
test_math_sin("3GDVS");
test_math_sin("6EDZU0");
test_math_sin("HZNIGR");
test_math_sin(1.2653661580421304e+308);
test_math_sin(1.714781456589887e+307);
test_math_sin(1.4964608268081563e+308);
test_math_sin(5.327764991071747e+307);
test_math_sin(7.626014072518829e+307);
test_math_sin(7.234108219892712e+307);
test_math_sin("CEU");
test_math_sin("IF6WG4ZX5");
test_math_sin("0YCNS1ZBX");
test_math_sin(6.507349449151682e+307);
test_math_sin(1.6153950299435498e+308);
test_math_sin("3X49K7");
test_math_sin("7QS6L9");
test_math_sin(3.04334910712122e+307);
test_math_sin("9FPZNLYF6H");
test_math_sin(8.317248820057922e+307);
test_math_sin(1.639369472560206e+308);
test_math_sin(1.0111151529625808e+308);
test_math_sin("X62U");
test_math_sin(1.1330988571528233e+308);
test_math_sin(1.7908745540474765e+307);
test_math_sin("M1T");
test_math_sin("KIBQD6");
test_math_sin("EKIN26E1D");
test_math_sin("ZPHS06CB1H");
test_math_sin("T2W42LJAH");
test_math_sin(-941);
test_math_sin(1.2284984904259809e+308);
test_math_sin(4.2583315605692497e+307);
test_math_sin("00CL");
test_math_sin("VQVFNP2W9L");
test_math_sin("9XF17CF");
test_math_sin(-537);
test_math_sin("KJOGU");
test_math_sin("RG1");
test_math_sin(1.277902992681632e+308);
test_math_sin(-999);
test_math_sin(-845);
test_math_sin("N0BKPM");
test_math_sin(-279);
test_math_sin(1.2490936602719712e+308);
test_math_sin("AVDECM5");
test_math_sin(-207);
test_math_sin(-15);
test_math_sin("AM91LW");
test_math_sin("2CGGU3HM8");
test_math_sin("KETLY");
test_math_sin(3.080226695445928e+307);
test_math_sin(1.5940807158155936e+308);
test_math_sin("81DBT7");
test_math_sin(-927);
test_math_sin("TM6RUN94R");
test_math_sin("C0959");
test_math_sin(1.2922628068990533e+308);
test_math_sin(8.470825383775345e+307);
test_math_sin(-77);
test_math_sin("W6HM");
test_math_sin(1.1732917651201051e+308);
test_math_sin(1.0520570069415724e+306);
test_math_sin("9BFH04THM");
test_math_sin("YJE6ISXO");
test_math_sin(7.154643120807761e+307);
test_math_sin("786T190TZ");
test_math_sin(-299);
test_math_sin(1.2560544142103611e+308);
test_math_sin(-341);
test_math_sin("6EDW");
test_math_sin(1.6124564452556763e+308);
test_math_sin(1.278509796174276e+308);
test_math_sin("4XSX7P");
test_math_sin(-747);
test_math_sin("53K3O7IA27");
test_math_sin(-805);
test_math_sin("T52Z");
test_math_sin("R8EGXB4E");
test_math_sin(-395);
test_math_sin("T018N9");
test_math_sin(4.686417753514839e+307);
test_math_sin(7.491861625233947e+306);
test_math_sin("C8I9NKR");
test_math_sin(-887);
test_math_sin(9.669513494247203e+307);
test_math_sin(1.4272304963783552e+308);
test_math_sin(-493);
test_math_sin(1.7314389286032248e+308);
test_math_sin("Q84VP0");
test_math_sin("RMPD96");
test_math_sin(-59);
test_math_sin("ESWJGECB");
test_math_sin(5.956042135153318e+307);
test_math_sin("Z3JXO");
test_math_sin(4.565743647440515e+307);
test_math_sin(4.1350594916732525e+307);
test_math_sin("DT0LI");
test_math_sin("854PJVEIQO");
test_math_sin(1.7400397991744447e+308);
test_math_sin(-409);
test_math_sin("0TN");
test_math_sin(6.802155945246558e+306);
test_math_sin("X4TGF");
test_math_sin("NFA2");
test_math_sin("0UM");
test_math_sin(1.36039881381722e+308);
test_math_sin(1.3568746663997593e+308);
test_math_sin("Y6G1AP2");
test_math_sin(1.213753363998014e+308);
test_math_sin("AZ6ESV");
test_math_sin("5KOW");
test_math_sin(2.677136507934464e+307);
test_math_sin("B2DH");
test_math_sin("T5TVKT3");
test_math_sin("QNKSOY");
test_math_sin("HJX10Q2");
test_math_sin("OELELB5G");
test_math_sin("4I6TGE5UV");
test_math_sin(1.1839074709378443e+308);
test_math_sin(1.3836446292380568e+307);
test_math_sin(1.4654177833697951e+308);
test_math_sin(4.262666428457924e+307);
test_math_sin("EUN05");
test_math_sin("A2P349");
test_math_sin("ZGEJDL28IR");
test_math_sin(1.160721823913019e+308);
test_math_sin("5NNXNTZ94T");
test_math_sin("EYXOJLE0");
test_math_sin("DM64UA4S2B");
test_math_sin(1.6823460328596545e+308);
test_math_sin(8.8144286216121185e+307);
test_math_sin(3.6594093596941646e+307);
test_math_sin(1.3935022604810768e+308);
test_math_sin(9.810645228759428e+307);
test_math_sin("TO2YGKYH4M");
test_math_sin("V34WNR7B");
test_math_sin(1.4573795979573217e+308);
test_math_sin("U9315R649P");
test_math_sin(1.4690027503949885e+308);
test_math_sin("5LARJXO");
test_math_sin("C3YIPNLA");
test_math_sin(-831);
test_math_sin(4.0218157009335045e+307);
test_math_sin(-559);
test_math_sin("LC6N5G3X");
test_math_sin("GKUKBFB");
test_math_sin("RMR6M");
test_math_sin(2.844713113153868e+307);
test_math_sin(1.0587840285292516e+308);
test_math_sin("WA00CU");
test_math_sin("CR2JB3D2QO");
test_math_sin(1.4726983276217127e+308);
test_math_sin(1.4129009323112882e+308);
test_math_sin(6.403244693164865e+307);
test_math_sin(1.8393303932145918e+307);
test_math_sin("276VQ");
test_math_sin(-483);
test_math_sin(7.500038329119121e+307);
test_math_sin(-931);
test_math_sin(1.7157723569520475e+308);
test_math_sin("TJURBV2F");
test_math_sin(1.247576157178913e+308);
test_math_sin("APP8JK2S1T");
test_math_sin("NGB6GBOW");
test_math_sin(-617);
