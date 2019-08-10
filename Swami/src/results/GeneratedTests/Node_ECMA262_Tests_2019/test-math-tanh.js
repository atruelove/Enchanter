/*
* This file is automatically generated by Swami
*
* 2019-08-08 15:38:53.496480
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
test_math_tanh(-397);
test_math_tanh(/\r\n|\r|\n/);
test_math_tanh(/[\u0400-\u04FF]+/g);
test_math_tanh("HVHGFB7V");
test_math_tanh(NaN);
test_math_tanh(1.7106027479959352e+307);
test_math_tanh(-393);
test_math_tanh(-191);
test_math_tanh(true);
test_math_tanh(-19);
test_math_tanh(/ab+c/);
test_math_tanh("TPFO");
test_math_tanh(-837);
test_math_tanh("60V4Y");
test_math_tanh(1.418670299463927e+308);
test_math_tanh(/(\w+)\s(\w+)/);
test_math_tanh("SQAB");
test_math_tanh(undefined);
test_math_tanh(1.5364728313466495e+308);
test_math_tanh(/yes[^]*day/);
test_math_tanh(/yes.*day/);
test_math_tanh(null);
test_math_tanh("B7U60BSWN8");
test_math_tanh(1.089355534559844e+308);
test_math_tanh(Infinity);
test_math_tanh("293880");
test_math_tanh(/[^.]+/);
test_math_tanh(+0);
test_math_tanh(-671);
test_math_tanh(1.7718388618989082e+308);
test_math_tanh(-833);
test_math_tanh(false);
test_math_tanh(1.7894586806023057e+308);
test_math_tanh("5CLJV65X");
test_math_tanh(3.1618743007983063e+307);
test_math_tanh("4WKB");
test_math_tanh(2.8379336434823005e+307);
test_math_tanh(-293);
test_math_tanh(7.569031854242614e+307);
test_math_tanh(/foo/g);
test_math_tanh(5.703774903728323e+307);
test_math_tanh("3195U1QBM");
test_math_tanh(-211);
test_math_tanh(-903);
test_math_tanh(8.414294710813197e+307);
test_math_tanh("AVY");
test_math_tanh(-207);
test_math_tanh("9PQ2");
test_math_tanh(6.637500319483881e+307);
test_math_tanh(-0);
test_math_tanh("S9GVHIJ");
test_math_tanh(-327);
test_math_tanh(-271);
test_math_tanh(2.2347221644666937e+307);
test_math_tanh(1.7772542307128265e+308);
test_math_tanh("QGD");
test_math_tanh(1.7228759687011148e+308);
test_math_tanh("D9Z1H");
test_math_tanh(944);
test_math_tanh(6.625656493047859e+307);
test_math_tanh(1.6007297388079934e+307);
test_math_tanh(3.604027293910973e+307);
test_math_tanh(-883);
test_math_tanh(5.844773177983008e+307);
test_math_tanh(1.0428228866544554e+308);
test_math_tanh(-463);
test_math_tanh(-709);
test_math_tanh(1.6253608648613523e+308);
test_math_tanh(-159);
test_math_tanh("6WQLP8P");
test_math_tanh(4.56860228241636e+307);
test_math_tanh("7QJZ");
test_math_tanh(1.569258971454531e+308);
test_math_tanh(1.6259328903542745e+308);
test_math_tanh(8.546207420609869e+307);
test_math_tanh(1.1443971240481194e+308);
test_math_tanh(-359);
test_math_tanh(1.5218704316953942e+308);
test_math_tanh("QBXYVYJNJP");
test_math_tanh("S6P");
test_math_tanh(-931);
test_math_tanh("5KKMLU9");
test_math_tanh(-575);
test_math_tanh("ZLC5ZH");
test_math_tanh("X7TF51H");
test_math_tanh(1.4585290703602967e+307);
test_math_tanh("PJD7EKII3");
test_math_tanh("OCF4");
test_math_tanh("4TYIXW4IS");
test_math_tanh(1.4941309708924557e+308);
test_math_tanh("I2Q");
test_math_tanh(1.1650016677885299e+308);
test_math_tanh(8.352264452273855e+307);
test_math_tanh(1.3761562200510868e+308);
test_math_tanh(3.282149602459608e+307);
test_math_tanh(1.7372552111849645e+308);
test_math_tanh(-907);
test_math_tanh("TLQYM");
test_math_tanh(1.5819552842653492e+308);
test_math_tanh(-231);
test_math_tanh("MB3J6W7O7M");
test_math_tanh(-59);
test_math_tanh(1.5834788704825035e+308);
test_math_tanh("WT0MVHGA");
test_math_tanh(7.651490019729887e+307);
test_math_tanh(-333);
test_math_tanh(8.420377667777557e+307);
test_math_tanh(1.2098994885361714e+308);
test_math_tanh(-127);
test_math_tanh(-713);
test_math_tanh(1.1068385622378408e+308);
test_math_tanh("MKY4UE5B");
test_math_tanh(4.717751955565904e+307);
test_math_tanh("3WS");
test_math_tanh(-955);
test_math_tanh(1.4411782006411626e+308);
test_math_tanh(2.957649085379442e+307);
test_math_tanh(-1);
test_math_tanh(-239);
test_math_tanh("R59NC7535");
test_math_tanh(1.6383896377808123e+308);
test_math_tanh(1.3605648878877241e+308);
test_math_tanh("1G3Q2NVF1");
test_math_tanh("22KJ1165");
test_math_tanh(-75);
test_math_tanh("N06Y");
test_math_tanh(-213);
test_math_tanh("W85272C1WT");
test_math_tanh(1.2864533587161824e+308);
test_math_tanh(7.521607033525816e+307);
test_math_tanh(-901);
test_math_tanh(-409);
test_math_tanh("Z7DSSQ");
test_math_tanh(1.135999047124162e+307);
test_math_tanh(-767);
test_math_tanh("DHJDKH");
test_math_tanh(-927);
test_math_tanh(-843);
test_math_tanh(9.48874904490217e+307);
test_math_tanh(1.643959787149124e+308);
test_math_tanh(1.4732478498584778e+308);
test_math_tanh(1.7393674363566427e+308);
test_math_tanh("5WSF6B3X2");
test_math_tanh(-571);
test_math_tanh(1.4029509721798554e+308);
test_math_tanh(1.206456213707444e+308);
test_math_tanh(-603);
test_math_tanh(-479);
test_math_tanh("HU6P89I");
test_math_tanh(-121);
test_math_tanh("Y6Y65");
test_math_tanh(5.305807983792546e+307);
test_math_tanh(1.680553823789055e+308);
test_math_tanh("PNRZICEW");
test_math_tanh("F6F0C");
test_math_tanh(2.3064001743881877e+307);
test_math_tanh("BGK5I2VT");
test_math_tanh(1.4406426806321672e+308);
test_math_tanh("S0E6");
test_math_tanh(2.279425770051591e+307);
test_math_tanh(-219);
test_math_tanh(1.138598617418352e+308);
test_math_tanh("O29RBH");
test_math_tanh("BFJ9KNT7");
test_math_tanh(-917);
test_math_tanh(-35);
test_math_tanh(-519);
test_math_tanh(1.7878346741115912e+308);
test_math_tanh(1.1511128777951404e+308);
test_math_tanh(1.2056093827066482e+308);
test_math_tanh(1.1900241063097167e+308);
test_math_tanh(8.103384956860898e+307);
test_math_tanh(6.62520760173766e+307);
test_math_tanh("YR3G0KH3X");
test_math_tanh("E7BQR");
test_math_tanh("FV1");
test_math_tanh("SVONC8A046");
test_math_tanh("H1E0FR");
test_math_tanh("CH6");
test_math_tanh(-995);
test_math_tanh(1.4848022250269206e+308);
test_math_tanh(8.809748448937155e+307);
test_math_tanh("ILHDM8M");
test_math_tanh("UPDI");
test_math_tanh("80OL7SK2U");
test_math_tanh(-177);
test_math_tanh(1.3389036449700177e+308);
test_math_tanh(6.389403848174405e+306);
test_math_tanh(2.7281689723097515e+306);
test_math_tanh("ZN1TK");
test_math_tanh(-737);
test_math_tanh(3.5286368777111367e+307);
test_math_tanh(1.4371030100508484e+308);
test_math_tanh(-265);
test_math_tanh(-387);
test_math_tanh(-79);
test_math_tanh("LLPC0NIL1K");
test_math_tanh(-391);
test_math_tanh(1.4577203353629302e+308);
test_math_tanh("UYLJ7");
test_math_tanh(3.384264689947855e+307);
test_math_tanh(-215);
test_math_tanh(1.1727169914589349e+308);
test_math_tanh(1.5301808117522881e+308);
test_math_tanh(1.5576020040436607e+308);
test_math_tanh(8.266014498512495e+307);
test_math_tanh(9.55635193136146e+306);
test_math_tanh("VW64");
test_math_tanh(6.043770215333399e+307);
test_math_tanh(-431);
test_math_tanh("C700FOHY");
test_math_tanh("J2DL");
test_math_tanh(-635);
test_math_tanh(2.352541718694107e+307);
test_math_tanh("TFICPHVQ");
test_math_tanh(1.1512027723472332e+308);
test_math_tanh(-755);
test_math_tanh(-273);
test_math_tanh(1.0983493704097358e+308);
test_math_tanh(1.2923912822206282e+308);
test_math_tanh("YBIQ4O00");
test_math_tanh(1.2347403831426871e+308);
test_math_tanh("YDF0UW");
test_math_tanh("IVXSK");
test_math_tanh("4MV");
test_math_tanh("9NC");
test_math_tanh("930ZMFI0M");
test_math_tanh(-935);
test_math_tanh(-373);
test_math_tanh("V6B84EL");
test_math_tanh("NGG5P6HN");
test_math_tanh(5.3707640699293e+307);
test_math_tanh("HM438MXF");
test_math_tanh(2.823324209001488e+307);
test_math_tanh("0NIR");
test_math_tanh(-989);
test_math_tanh(-941);
test_math_tanh("YA0PWA");
test_math_tanh("H0J2N8");
test_math_tanh("5UQ");
test_math_tanh(1.3948387656340738e+308);
test_math_tanh("TBC7WH");
test_math_tanh(-433);
test_math_tanh(-381);
test_math_tanh("F7CYN");
test_math_tanh(-283);
test_math_tanh("RTHNF7FHBF");
test_math_tanh(1.3904098705732196e+308);
test_math_tanh(-683);
test_math_tanh(-583);
test_math_tanh("EFX");
test_math_tanh(-379);
test_math_tanh("0UHHJGXM");
test_math_tanh(1.3814292635583336e+308);
test_math_tanh(2.366867763845539e+307);
test_math_tanh("DW7V3");
test_math_tanh(1.455275725435134e+308);
test_math_tanh(1.421855598710007e+308);
test_math_tanh("WEJYQYU");
test_math_tanh(-651);
test_math_tanh(-279);
test_math_tanh(1.7287078997453026e+308);
test_math_tanh(1.5191164678646842e+308);
test_math_tanh("09OTP4");
test_math_tanh("6IM5039");
test_math_tanh("RBL");
test_math_tanh("YXUGM");
test_math_tanh(1.0021657005723081e+308);
test_math_tanh("8634DJGOS");
test_math_tanh("Z7N");
test_math_tanh(4.197786846886924e+307);
test_math_tanh(2.0939893362763668e+307);
test_math_tanh(7.645863144663861e+307);
test_math_tanh(-701);
test_math_tanh(4.630689505717346e+307);
test_math_tanh("B997QAV6N4");
test_math_tanh(1.0967941365202602e+308);
test_math_tanh("N0DR26L");
test_math_tanh(-153);
test_math_tanh(1.5456728383193998e+308);
test_math_tanh(8.79275156071528e+306);
test_math_tanh(158);
test_math_tanh(-171);
test_math_tanh(-665);
test_math_tanh("WFQNWH3");
test_math_tanh(6.517235478665479e+307);
test_math_tanh(4.875324437386341e+307);
test_math_tanh("3R2E3J");
test_math_tanh("0RDC4X");
test_math_tanh(1.3477620116440206e+308);
test_math_tanh(-101);
test_math_tanh(6.793056974098189e+307);
test_math_tanh(4.2458169615798217e+307);
test_math_tanh("L9QMY51");
test_math_tanh(1.679281330121406e+308);
test_math_tanh(7.339434126960812e+307);
test_math_tanh(1.9746128582265542e+307);
test_math_tanh(5.302583217934868e+307);
test_math_tanh(-943);
test_math_tanh(8.642183879327318e+307);
test_math_tanh(-457);
test_math_tanh(1.230878779953095e+306);
test_math_tanh("7MQAR");
test_math_tanh(-95);
test_math_tanh(1.1837354439817352e+307);
test_math_tanh(3.6958373229875923e+307);
test_math_tanh(3.569205839105859e+307);
test_math_tanh(-511);
test_math_tanh(1.0365259219772724e+308);
test_math_tanh(-735);
test_math_tanh(-415);
test_math_tanh(1.7244902188645769e+308);
test_math_tanh(1.1225798720537417e+308);
test_math_tanh("EA7CV0FW");
test_math_tanh("8G1FG0");
test_math_tanh(1.0986606143655079e+308);
test_math_tanh(-99);
test_math_tanh(1.0043456153690362e+307);
test_math_tanh(-971);
test_math_tanh(6.794695555154493e+307);
test_math_tanh(2.8282539675797405e+307);
test_math_tanh("V6J");
test_math_tanh(-841);
test_math_tanh(1.0730286779268935e+308);
test_math_tanh(8.624468593750392e+307);
test_math_tanh("ZXSEV22J");
test_math_tanh("AFBHJ");
test_math_tanh(1.6004250669732005e+308);
test_math_tanh("9L4");
test_math_tanh(1.928324317066968e+307);
test_math_tanh(-741);
test_math_tanh(1.3046136123450206e+308);
test_math_tanh(-311);
test_math_tanh("5XR76");
test_math_tanh(1.4116240256742042e+308);
test_math_tanh("RKE");
test_math_tanh(-699);
test_math_tanh(9.351711238267297e+307);
test_math_tanh(8.552373525324619e+307);
test_math_tanh(-29);
test_math_tanh("2D5M");
test_math_tanh("7MOSA9NGT");
test_math_tanh("ROCBH");
test_math_tanh(7.9925198496818e+307);
test_math_tanh(5.873516601944154e+307);
test_math_tanh("U5WWYXOWR1");
test_math_tanh(1.661088406388221e+308);
test_math_tanh(5.797594098194572e+307);
test_math_tanh(6.256459835434249e+307);
test_math_tanh("VU68T2KT4O");
test_math_tanh("E8PJS");
test_math_tanh(1.8774638427770157e+307);
test_math_tanh(4.770503779547835e+307);
test_math_tanh(1.4539392403403294e+308);
test_math_tanh(1.559211335106047e+308);
test_math_tanh(-783);
test_math_tanh(1.6536251206130373e+308);
test_math_tanh("DPM63B5");
test_math_tanh(7.114429478422949e+307);
test_math_tanh(-45);
test_math_tanh(4.690321341120594e+307);
test_math_tanh(5.072143884410054e+307);
test_math_tanh(-167);
test_math_tanh(-973);
test_math_tanh("1LNBB120SZ");
test_math_tanh("BDM");
test_math_tanh(-281);
test_math_tanh(6.615714437203108e+306);
test_math_tanh(6.877070614229056e+307);
test_math_tanh(9.22347664111615e+307);
test_math_tanh(-77);
test_math_tanh(-925);
test_math_tanh(1.732278689061641e+308);
test_math_tanh(6.811030126108529e+306);
test_math_tanh("UOML4OS");
test_math_tanh(7.604971158621029e+307);
test_math_tanh("XF7Z");
test_math_tanh(5.988979487569561e+307);
test_math_tanh(2.7916786623220368e+306);
test_math_tanh("FZQM9JAV06");
test_math_tanh(-791);
test_math_tanh(-795);
test_math_tanh(-845);
test_math_tanh("IJDSBVT9F");
test_math_tanh("PJQQJM");
test_math_tanh(-573);
test_math_tanh(9.410601883277487e+307);
test_math_tanh("MT3B");
test_math_tanh(-685);
test_math_tanh("2XF2J");
test_math_tanh(4.99937065377726e+307);
test_math_tanh(9.373647747500211e+307);
test_math_tanh(-667);
test_math_tanh("7CKB8F2");
test_math_tanh("Z1YIVRYTL");
test_math_tanh(-879);
test_math_tanh(-65);
test_math_tanh(1.1825840611573541e+308);
test_math_tanh("315N");
test_math_tanh(-389);
test_math_tanh(-541);
test_math_tanh(-251);
test_math_tanh(-875);
test_math_tanh(-963);
test_math_tanh("1AFURS");
test_math_tanh("DJ65ZET2T");
test_math_tanh("AL0XGUIST");
test_math_tanh("3GP3NF");
test_math_tanh(-497);
test_math_tanh(8.38136668863665e+307);
test_math_tanh("UI7X5");
test_math_tanh("FY4NJ4MA9P");
test_math_tanh(-659);
test_math_tanh("JEFV6SUQ2");
test_math_tanh("LGWUPZOZ");
test_math_tanh("5I0J6GT");
test_math_tanh("URFH");
test_math_tanh("WIBEVNMAL");
test_math_tanh(-937);
test_math_tanh("UYT45EVGI0");
test_math_tanh(3.840523308150105e+307);
test_math_tanh("8OE");
test_math_tanh(1.790133839186091e+308);
test_math_tanh(5.817522260100252e+307);
test_math_tanh(1.501877464438028e+308);
test_math_tanh(1.324642371283745e+308);
test_math_tanh(3.042864319088474e+307);
test_math_tanh(-969);
test_math_tanh("FXRXVEYH4");
test_math_tanh("6MP859TV1");
test_math_tanh(-195);
test_math_tanh(-425);
test_math_tanh("CH43");
test_math_tanh(5.003426122321631e+307);
test_math_tanh("AEAX9XHU1");
test_math_tanh("M3ZUL4R");
test_math_tanh(-317);
test_math_tanh("59O2PWK6R");
test_math_tanh(1.1260902186635501e+308);
test_math_tanh(-133);
test_math_tanh("IAS");
test_math_tanh("D3K6FWMWN1");
test_math_tanh(-203);
test_math_tanh("IHE8");
test_math_tanh(7.182777443656638e+307);
test_math_tanh(1.697112553264341e+308);
test_math_tanh("7DK5J7R");
test_math_tanh("7B2BV9");
test_math_tanh(5.704630449942223e+307);
test_math_tanh("2EF9");
test_math_tanh(-461);
test_math_tanh(-551);
test_math_tanh(6.524712103411914e+307);
test_math_tanh(8.525843390354408e+307);
test_math_tanh(1.5888494247258804e+308);
test_math_tanh(1.4651346618442782e+308);
test_math_tanh(-595);
test_math_tanh(-71);
test_math_tanh(4.617807153012476e+307);
test_math_tanh(1.045725439597496e+307);
test_math_tanh(-225);
test_math_tanh(4.2447635862432035e+307);
test_math_tanh(1.3915400674483956e+308);
test_math_tanh("BGG02");
test_math_tanh(-789);
test_math_tanh(-897);
test_math_tanh(1.6056674998507408e+308);
test_math_tanh(6.481905459415716e+307);
test_math_tanh(-49);
test_math_tanh(1.1590556766496733e+308);
test_math_tanh("9LLE2");
test_math_tanh(1.6377002654547667e+308);
test_math_tanh(1.3205886651514755e+308);
test_math_tanh(3.6723393667127805e+307);
test_math_tanh(3.9949803217471714e+307);
test_math_tanh(9.565452694011465e+307);
test_math_tanh("MTSR");
test_math_tanh("D4D6N");
test_math_tanh(-579);
test_math_tanh("X8W");
test_math_tanh(1.001443165093604e+308);
test_math_tanh("GNLK031");
test_math_tanh(3.6019242885610746e+307);
test_math_tanh(-67);
test_math_tanh(1.5190504032732619e+308);
test_math_tanh(1.3656188169680345e+308);
test_math_tanh(-267);
test_math_tanh(4.650331941059985e+307);
test_math_tanh("9ZV");
test_math_tanh(-17);
test_math_tanh("XQT8");
test_math_tanh(9.916270601318099e+307);
test_math_tanh(1.574875156002315e+308);
test_math_tanh(1.2428627721005501e+308);
test_math_tanh("JM3N");
test_math_tanh("SHR6");
test_math_tanh("4TBYUC6OB9");
test_math_tanh("7P6FAXMP");
test_math_tanh("8C085Y1U");
test_math_tanh(1.3561324193385504e+308);
test_math_tanh(-979);
test_math_tanh("VJZ78S58G0");
test_math_tanh("G98");
test_math_tanh(1.3432339198181793e+308);
test_math_tanh(8.430273087995511e+307);
test_math_tanh(-55);
test_math_tanh(-165);
test_math_tanh(-947);
test_math_tanh(-715);
test_math_tanh(7.034458000540513e+307);
test_math_tanh(-241);
test_math_tanh(-315);
test_math_tanh(1.1378563973901461e+308);
test_math_tanh(-355);
test_math_tanh(1.2440690672593365e+308);
test_math_tanh(-673);
test_math_tanh(1.2170372471296943e+308);
test_math_tanh(6.608560890735006e+307);
test_math_tanh(3.351843491091876e+307);
test_math_tanh("00TP");
test_math_tanh("QCZLLAZE4");
test_math_tanh(1.028792198026329e+308);
test_math_tanh(1.4158915045549718e+308);
test_math_tanh("AJYV");
test_math_tanh("9T4RK1R0");
test_math_tanh(1.5319873816515206e+308);
test_math_tanh(1.1587778998850616e+308);
test_math_tanh("DG0NAY");
test_math_tanh("SGZ1");
test_math_tanh(1.3856655346479049e+308);
test_math_tanh("ZTEGF4U5");
test_math_tanh("NV2CGIQ");
test_math_tanh(-399);
test_math_tanh(-87);
test_math_tanh(8.668907215782054e+307);
test_math_tanh("KMMR");
test_math_tanh(4.270692885956393e+307);
test_math_tanh("A8TQ");
test_math_tanh("D58F");
test_math_tanh(1.366689172216981e+308);
test_math_tanh(1.5392494699197482e+308);
test_math_tanh(-785);
test_math_tanh(1.0155203091084108e+308);
test_math_tanh("9IP4K7XKI0");
test_math_tanh("C7J1QE6");
test_math_tanh("P6BT");
test_math_tanh(-867);
test_math_tanh(1.1092607134112544e+308);
test_math_tanh("8YE");
test_math_tanh(6.500285107092153e+307);
test_math_tanh("1RG9Z");
test_math_tanh(-287);
test_math_tanh("B161N");
test_math_tanh(-253);
test_math_tanh("T4PQCYND");
test_math_tanh(1.7080769260813544e+307);
test_math_tanh(-855);
test_math_tanh(-691);
test_math_tanh(1.0773948952518935e+308);
test_math_tanh("7P0XZR");
test_math_tanh(1.262451588112938e+308);
test_math_tanh(7.880701464938771e+307);
test_math_tanh("ANE4TO");
test_math_tanh(4.018490337609432e+306);
test_math_tanh(1.7638847659048387e+307);
test_math_tanh(1.1388172700363123e+308);
test_math_tanh("0FY1QU");
test_math_tanh("295H0O");
test_math_tanh("PSY0BSV50");
test_math_tanh("NF78L0ZQ0");
test_math_tanh(1.0068607619526665e+308);
test_math_tanh(-669);
test_math_tanh(-111);
test_math_tanh(1.7423923841955756e+308);
test_math_tanh("7I4U8UIVK");
test_math_tanh("5ZR");
test_math_tanh(1.714162009754673e+308);
test_math_tanh("TBS");
test_math_tanh(1.0470074080472398e+308);
test_math_tanh(-923);
test_math_tanh(5.621792539767283e+307);
test_math_tanh("HZOMR1P8R");
test_math_tanh(1.2187865710022342e+308);
test_math_tanh("1M601H3C");
test_math_tanh(-139);
test_math_tanh(6.255897216134541e+307);
test_math_tanh(7.091536446376173e+307);
test_math_tanh(2.203673980930178e+306);
test_math_tanh("431");
test_math_tanh(138);
test_math_tanh(-81);
test_math_tanh(-143);
test_math_tanh(-305);
test_math_tanh(-759);
test_math_tanh("HSBLM");
test_math_tanh("RRG32CVE4");
test_math_tanh(3.1289639298032863e+307);
test_math_tanh("H68");
test_math_tanh(-893);
test_math_tanh(-103);
test_math_tanh(-849);
test_math_tanh("YVQYZG");
test_math_tanh(9.451570521818605e+307);
test_math_tanh(-687);
test_math_tanh(1.0403843802890153e+308);
test_math_tanh(-489);
test_math_tanh("M77VP416");
test_math_tanh(1.009633571192085e+308);
test_math_tanh(3.6859628150882223e+307);
test_math_tanh(1.055802240517878e+308);
test_math_tanh(4.962822208467995e+307);
test_math_tanh(-27);
test_math_tanh(1.169657209689604e+308);
test_math_tanh("WN1KL");
test_math_tanh(3.908563012778591e+306);
test_math_tanh(4.384911136271876e+307);
test_math_tanh(1.3830894909364702e+308);
test_math_tanh("5BL");
test_math_tanh("EXAVELME");
test_math_tanh(-335);
test_math_tanh("SP8Z1N2");
test_math_tanh(1.6385280878898848e+308);
test_math_tanh(-475);
test_math_tanh(1.431052374006359e+307);
test_math_tanh("ZJEBF5B");
test_math_tanh("66097H7M");
test_math_tanh(-505);
test_math_tanh(8.637804232209279e+307);
test_math_tanh(9.274863012193564e+307);
test_math_tanh(-371);
test_math_tanh("TSY1GS2OJ");
test_math_tanh(1.6119948688779507e+308);
test_math_tanh(1.0915281875224854e+308);
test_math_tanh(8.21226712048574e+307);
test_math_tanh(1.0648191898563486e+308);
test_math_tanh(-309);
test_math_tanh(2.9426461045980984e+307);
test_math_tanh("CMI");
test_math_tanh("URWBLEN");
test_math_tanh(-473);
test_math_tanh(9.67202297406174e+307);
test_math_tanh("OZFAUNTEE");
test_math_tanh(-301);
test_math_tanh(2.2740719298124047e+307);
test_math_tanh(-777);
test_math_tanh("IZX4D");
test_math_tanh("ARG0INPPF");
test_math_tanh(1.3139493557402264e+308);
test_math_tanh(6.492345981345719e+307);
test_math_tanh(1.2572180243643402e+308);
test_math_tanh(-999);
test_math_tanh("0B47KP86D1");
test_math_tanh(-147);
test_math_tanh(1.5258961129923916e+308);
test_math_tanh(-601);
test_math_tanh(5.591766184360733e+307);
test_math_tanh(1.6003676929628466e+307);
test_math_tanh("TEYN6EB");
test_math_tanh("KM5X5YCT");
test_math_tanh("3LU1G31SQX");
test_math_tanh(-325);
test_math_tanh(1.705340825134236e+308);
test_math_tanh(5.284538019109804e+307);
test_math_tanh(-257);
test_math_tanh("9WQ");
test_math_tanh("RYR");
test_math_tanh("FE5");
test_math_tanh(1.244586139681744e+308);
test_math_tanh(-189);
test_math_tanh(-621);
test_math_tanh("K8BSG");
test_math_tanh("7LGKIM5JA");
test_math_tanh(-753);
test_math_tanh("XKVY");
test_math_tanh("7KNT0A8OB");
test_math_tanh(4.657069889714195e+307);
test_math_tanh(4.741249134434414e+307);
test_math_tanh(-775);
test_math_tanh(-853);
test_math_tanh("XNXGX8");
test_math_tanh("BWB8");
test_math_tanh(7.717409418509618e+307);
test_math_tanh(1.694005696726062e+308);
test_math_tanh(1.2289222103425325e+308);
test_math_tanh("7BB7T4ZQF");
test_math_tanh("JZC");
test_math_tanh(5.321838569717903e+307);
test_math_tanh(5.820190960481186e+307);
test_math_tanh(-469);
test_math_tanh("JSLNR");
test_math_tanh(-471);
test_math_tanh(1.7249734023366194e+308);
test_math_tanh(3.2832517593582583e+307);
test_math_tanh(1.4301664407069798e+308);
test_math_tanh("6DD1N");
test_math_tanh(-9);
test_math_tanh("5LB9");
test_math_tanh("4SSTWE0");
test_math_tanh(6.18115869129913e+307);
test_math_tanh("FAT4P");
test_math_tanh("8P9215AE");
test_math_tanh(6.240788776095166e+307);
test_math_tanh(-613);
test_math_tanh(1.6350369136119943e+308);
test_math_tanh(1.4899175359163739e+308);
test_math_tanh("PHB12");
test_math_tanh("5B6HZS8");
test_math_tanh(-459);
test_math_tanh(1.1729270160745074e+307);
test_math_tanh("CO4INRB");
test_math_tanh(1.1983819115751489e+308);
test_math_tanh("2J7J");
test_math_tanh("K4IP2GQTE");
test_math_tanh(-679);
test_math_tanh(-591);
test_math_tanh(-105);
test_math_tanh(1.2477347161642532e+308);
test_math_tanh("RHDAY8YE");
test_math_tanh(7.810573209864285e+307);
test_math_tanh(-367);
test_math_tanh(1.7877049649150544e+308);
test_math_tanh("80AEJE");
test_math_tanh(6.043317444501076e+307);
test_math_tanh("U11");
test_math_tanh(-993);
test_math_tanh("7DA4UN8X");
test_math_tanh(-581);
test_math_tanh("HEC3J4W7K");
test_math_tanh(-263);
test_math_tanh(-3);
test_math_tanh(1.5423638372560556e+308);
test_math_tanh(-535);
test_math_tanh("61VJ");
test_math_tanh(1.4206509719911579e+308);
test_math_tanh(2.4213720861417494e+307);
test_math_tanh(-641);
test_math_tanh("TFEM77");
test_math_tanh("MWX");
test_math_tanh(1.6627104958958736e+308);
test_math_tanh("RAQ1E");
test_math_tanh(9.478170619683178e+307);
test_math_tanh(7.995555222167191e+305);
test_math_tanh("FGX47");
test_math_tanh(-807);
test_math_tanh("TNW4");
test_math_tanh("NB9WL");
test_math_tanh(3.348195130996879e+307);
test_math_tanh(5.261965367727713e+307);
test_math_tanh(-889);
test_math_tanh(-487);
test_math_tanh("IGY");
test_math_tanh(8.016486765973711e+307);
test_math_tanh(-721);
test_math_tanh(8.105654143841616e+307);
test_math_tanh("GLE");
test_math_tanh("J5NS2OYB4");
test_math_tanh("E6DB");
test_math_tanh(-15);
test_math_tanh(1.3197085135935325e+308);
test_math_tanh("RGZCF");
test_math_tanh(-441);
test_math_tanh(7.198579147759688e+307);
test_math_tanh(5.03080960790292e+307);
test_math_tanh(5.671033984930793e+307);
test_math_tanh("QR1");
test_math_tanh(4.957056423946285e+307);
test_math_tanh("0I2LJV");
test_math_tanh(-987);
test_math_tanh("TZRPP");
test_math_tanh("K3D79");
test_math_tanh("W5VJ");
test_math_tanh(-953);
test_math_tanh(9.082376287140642e+307);
test_math_tanh("0OM8");
test_math_tanh(1.7758850868431304e+308);
test_math_tanh("ASG3D0");
test_math_tanh(-255);
test_math_tanh(1.0504107895003314e+308);
test_math_tanh(1.3707099368415804e+308);
test_math_tanh(-871);
test_math_tanh(7.525663156048351e+307);
test_math_tanh("BLSSLZ");
test_math_tanh(-145);
test_math_tanh("A7N04IOG");
test_math_tanh(6.175082942254619e+307);
test_math_tanh(1.3103012084303282e+308);
test_math_tanh("93U");
test_math_tanh(-627);
test_math_tanh(8.7595233913328e+307);
test_math_tanh("HP8");
test_math_tanh(3.831889773205002e+307);
test_math_tanh(-749);
test_math_tanh(6.190072735152017e+307);
test_math_tanh("Q7IHTZDK");
test_math_tanh("29VYURKQ1");
test_math_tanh(4.806697284385124e+307);
test_math_tanh("TANL31");
test_math_tanh(-291);
test_math_tanh(-615);
test_math_tanh("1UZL");
test_math_tanh("P87JSV");
test_math_tanh("IIZNMVI");
test_math_tanh("2VGY");
test_math_tanh(9.803280090293754e+307);
test_math_tanh(1.1840801392779025e+308);
test_math_tanh(9.866016577270476e+307);
test_math_tanh("Z68R");
test_math_tanh(-307);
test_math_tanh("YX7T0R");
test_math_tanh("OU3LD6");
test_math_tanh(1.0985699443373959e+308);
test_math_tanh("W190ABE07G");
test_math_tanh(1.5619807884663436e+308);
test_math_tanh(1.8345494224107592e+307);
test_math_tanh(8.672486459238443e+307);
test_math_tanh(1.223892384221378e+308);
test_math_tanh("P2V87T");
test_math_tanh(1.4003422498094227e+308);
test_math_tanh("C7M");
test_math_tanh(5.849224465409376e+307);
test_math_tanh("RPBSOQXU5");
test_math_tanh(-873);
test_math_tanh(1.2226289872032282e+308);
test_math_tanh(2.290859373607395e+307);
test_math_tanh(-151);
test_math_tanh(5.238190689914299e+307);
test_math_tanh("BAPGYH13");
test_math_tanh("8WCE88");
test_math_tanh(1.6449800955370681e+308);
test_math_tanh(-549);
test_math_tanh(3.1223734427893187e+307);
test_math_tanh(1.288388975892085e+308);
test_math_tanh("186RB4");
test_math_tanh("MGYM9S");
test_math_tanh(3.037914222656442e+307);
test_math_tanh(6.374659160968846e+307);
test_math_tanh(-63);
test_math_tanh(5.863328649754371e+307);
test_math_tanh(1.3076083815165468e+308);
test_math_tanh(-891);
test_math_tanh("6ZM3FC");
test_math_tanh(-503);
test_math_tanh(5.092398718729728e+307);
test_math_tanh(-913);
test_math_tanh("MXAQQ");
test_math_tanh(1.4132672654274392e+308);
test_math_tanh(1.7436015154643043e+308);
test_math_tanh(-523);
test_math_tanh("ILBO5BQGHW");
test_math_tanh(-537);
test_math_tanh("H6IR0");
test_math_tanh("O29QT9S4F");
test_math_tanh(-859);
test_math_tanh(8.940655166852222e+307);
test_math_tanh("80A65HGKCC");
test_math_tanh(-483);
test_math_tanh(-801);
test_math_tanh(1.5089783407046727e+308);
test_math_tanh("6T0VIEBH");
test_math_tanh("URLO6");
test_math_tanh(1.7173682526406418e+308);
test_math_tanh(1.7290217128014621e+307);
test_math_tanh(2.886877002837374e+306);
test_math_tanh("CBT6");
test_math_tanh(1.3767158395722915e+308);
test_math_tanh("TW0SJ7R0IP");
test_math_tanh(-567);
test_math_tanh("F1SO7VDSP");
test_math_tanh("YOF6YYUX0");
test_math_tanh(1.352315956708555e+308);
test_math_tanh(1.3768831207803099e+308);
test_math_tanh("751WL2T21V");
test_math_tanh(-899);
test_math_tanh("4B75JHKM");
test_math_tanh(1.202256845488773e+308);
test_math_tanh(1.2866309723682774e+308);
test_math_tanh(-915);
test_math_tanh(-31);
test_math_tanh("DX9543");
test_math_tanh("G82F6T");
test_math_tanh(5.515940055074042e+307);
test_math_tanh(7.148043264243467e+307);
test_math_tanh("Q5HD");
test_math_tanh("DWUOPW9");
test_math_tanh(1.2280710257456746e+308);
test_math_tanh(2.0640030412017e+307);
test_math_tanh(8.743018972568363e+307);
test_math_tanh("Y1RE");
test_math_tanh(-939);
test_math_tanh(-423);
test_math_tanh("N8CQZG6RV");
test_math_tanh("TP3P3U");
test_math_tanh(3.8449489964360654e+307);
test_math_tanh(1.2452359330812639e+308);
test_math_tanh("XSU5");
test_math_tanh(-157);
test_math_tanh("WS95BP");
test_math_tanh(-197);
test_math_tanh("2C1G");
test_math_tanh(1.197660898904293e+308);
test_math_tanh(-369);
test_math_tanh(1.4545206584917743e+308);
test_math_tanh(1.3256504138909194e+308);
test_math_tanh("PF3N");
test_math_tanh(1.3442427305227645e+308);
test_math_tanh("CSHBW");
test_math_tanh("H25F0UX");
test_math_tanh(5.716703069890986e+307);
test_math_tanh(1.345431973884862e+308);
test_math_tanh(1.3266676401843692e+308);
test_math_tanh(-727);
test_math_tanh(-731);
test_math_tanh("QMGWU");
test_math_tanh("D8B8");
test_math_tanh(-707);
test_math_tanh(1.101095795402368e+308);
test_math_tanh(9.863827608996407e+307);
test_math_tanh(9.855515445720243e+307);
test_math_tanh(-829);
test_math_tanh(1.548586992334759e+308);
test_math_tanh(8.60664786679284e+307);
test_math_tanh(1.447072459609159e+308);
test_math_tanh("T1OH");
test_math_tanh("RZWGGJWLN");
test_math_tanh(-617);
test_math_tanh(-57);
test_math_tanh("5QZKT4U3C");
test_math_tanh(-539);
test_math_tanh(1.563829893524291e+308);
test_math_tanh("0TH5FVCJ");
test_math_tanh("0LU");
test_math_tanh("OUCK3Q");
test_math_tanh("6PLB");
test_math_tanh(-557);
test_math_tanh(1.3587767929429751e+308);
test_math_tanh("P8L9NY");
test_math_tanh(-529);
test_math_tanh(-933);
test_math_tanh(2.8166962558119406e+307);
test_math_tanh(9.622159056104573e+307);
test_math_tanh(9.40180872405504e+307);
test_math_tanh(9.592321311534808e+307);
test_math_tanh(-599);
test_math_tanh("HYE3CJC");
test_math_tanh(1.6497482522135228e+308);
test_math_tanh(2.154607554848585e+307);
test_math_tanh("QHG1VXYR");
test_math_tanh(7.573284784278754e+307);
test_math_tanh(1.2013895511107918e+307);
test_math_tanh(-717);
test_math_tanh(-115);
test_math_tanh(5.443243761905133e+307);
test_math_tanh(1.0757183356059974e+308);
test_math_tanh(1.1737228141275652e+308);
test_math_tanh(5.861419574101152e+307);
test_math_tanh("0KWKW9E4W");
test_math_tanh("CEQBTLNZ");
test_math_tanh(-509);
test_math_tanh(8.768693520603075e+307);
test_math_tanh("D6LTKTC6");
test_math_tanh(1.26934937214154e+308);
test_math_tanh(1.0668681541149848e+308);
test_math_tanh(4.039363699803367e+307);
test_math_tanh(1.519075843222137e+308);
test_math_tanh(1.6843402466666589e+308);
test_math_tanh("RW9V");
test_math_tanh("PZ17PF7BPO");
test_math_tanh(1.488046777164412e+308);
test_math_tanh(9.88486761430144e+307);
test_math_tanh(5.685266126071597e+306);
test_math_tanh(-163);
test_math_tanh(1.6909928667646674e+308);
test_math_tanh("34OR");
test_math_tanh(1.5432731597101208e+308);
test_math_tanh("O3BTONY1");
test_math_tanh(1.7407119646851013e+308);
test_math_tanh(4.817428354125848e+307);
test_math_tanh(8.622258252498789e+307);
test_math_tanh(1.5598479142204226e+308);
test_math_tanh(-733);
test_math_tanh(1.5490064237755658e+308);
test_math_tanh("7AYCNCZK");
test_math_tanh("77I");
test_math_tanh(1.2271164827131476e+308);
test_math_tanh(1.3120619669632048e+308);
test_math_tanh(-725);
test_math_tanh(1.3268788200894786e+308);
test_math_tanh(1.980620798375298e+307);
test_math_tanh(8.044453598226181e+307);
test_math_tanh(1.7666576022685582e+308);
test_math_tanh(1.2815592116073244e+307);
test_math_tanh("WITVOO9P");
test_math_tanh(-533);
test_math_tanh("IMXE11");
test_math_tanh("33IBZW");
test_math_tanh("P0KQPNL");
test_math_tanh(-321);
test_math_tanh("NMS");
test_math_tanh(1.0743150744633618e+308);
test_math_tanh(4.008055741006836e+307);