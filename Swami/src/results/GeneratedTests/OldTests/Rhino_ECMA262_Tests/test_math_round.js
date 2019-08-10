/*
* This file is automatically generated by Swami
*
* 2019-08-07 16:48:47.516886
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
function test_math_round(x){
	if (Object.is( x,NaN )){
		var output = Math.round(x);
		new TestCase("math_round", "math_round", NaN, output);
		test();
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.round(x);
		new TestCase("math_round", "math_round", + 0, output);
		test();
		return;
		}
	if (( x === - 0 )){
		var output = Math.round(x);
		new TestCase("math_round", "math_round", - 0, output);
		test();
		return;
		}
	if (( x === + Infinity )){
		var output = Math.round(x);
		new TestCase("math_round", "math_round", + Infinity, output);
		test();
		return;
		}
	if (( x === - Infinity )){
		var output = Math.round(x);
		new TestCase("math_round", "math_round", - Infinity, output);
		test();
		return;
		}
	if (( x > 0 && x < 0.5 )){
		var output = Math.round(x);
		new TestCase("math_round", "math_round", + 0, output);
		test();
		return;
		}
	if (( x < 0 && x >=  - 0.5 )){
		var output = Math.round(x);
		new TestCase("math_round", "math_round", - 0, output);
		test();
		return;
		}
}



/*TESTS GENERATED AUTOMATICALLY*/
test_math_round(-943);
test_math_round(4.950887088273164e+307);
test_math_round(NaN);
test_math_round(-95);
test_math_round(4.178887928366814e+307);
test_math_round("P2R83U");
test_math_round(/[^.]+/);
test_math_round(/yes[^]*day/);
test_math_round(null);
test_math_round(false);
test_math_round(true);
test_math_round(-399);
test_math_round(-155);
test_math_round(-333);
test_math_round("ZMR");
test_math_round(+0);
test_math_round("38KC80FR");
test_math_round("SA15B2");
test_math_round(-949);
test_math_round(1.281547181129568e+308);
test_math_round(1.4270389382086662e+308);
test_math_round(Infinity);
test_math_round(-917);
test_math_round("238XGK1");
test_math_round(undefined);
test_math_round(-243);
test_math_round(/[\u0400-\u04FF]+/g);
test_math_round(-979);
test_math_round(-55);
test_math_round(/\r\n|\r|\n/);
test_math_round(-413);
test_math_round("YCOIFLI");
test_math_round("MEDBWZDC");
test_math_round("IPM0OHW");
test_math_round(7.562129259050393e+307);
test_math_round("CVC2UZXX");
test_math_round(-977);
test_math_round(/ab+c/);
test_math_round(4.826972263463003e+307);
test_math_round(-223);
test_math_round(/(\w+)\s(\w+)/);
test_math_round("7RZV8N");
test_math_round(2.8250219987011644e+307);
test_math_round(7.301601716630229e+307);
test_math_round(-955);
test_math_round(-339);
test_math_round(-291);
test_math_round(-975);
test_math_round("VCWE");
test_math_round(-135);
test_math_round(-563);
test_math_round(-903);
test_math_round("8LSUU");
test_math_round("9P8H5");
test_math_round("AWRMT32D");
test_math_round(1.107439639343764e+307);
test_math_round("BSJBCY777");
test_math_round("8TQML9UMR");
test_math_round(-877);
test_math_round(7.277045263649951e+307);
test_math_round("0LFFZEUR1");
test_math_round(-957);
test_math_round("XACU");
test_math_round(5.269227903549807e+307);
test_math_round("Z3U");
test_math_round("AGBDW2CU");
test_math_round("38EUHI1");
test_math_round("3JI0RGUTI6");
test_math_round(-3);
test_math_round(-983);
test_math_round(-737);
test_math_round("1AV");
test_math_round(6.577175448822826e+307);
test_math_round("8GI");
test_math_round("PK6680");
test_math_round(-0);
test_math_round("4IFCK3C3A");
test_math_round(-281);
test_math_round("PSEP1M94");
test_math_round(-723);
test_math_round(1.3314857412894857e+308);
test_math_round(1.345167666278424e+308);
test_math_round(1.980964790094114e+307);
test_math_round(-153);
test_math_round(7.122418328594277e+307);
test_math_round("GV3CTCP");
test_math_round(-183);
test_math_round("MJY9FSG");
test_math_round(1.1892555348411317e+308);
test_math_round(4.4232449839901186e+307);
test_math_round(-821);
test_math_round(-109);
test_math_round(5.412871646279618e+307);
test_math_round(-77);
test_math_round(1.396514680231859e+308);
test_math_round(-189);
test_math_round("HDXFV");
test_math_round(-643);
test_math_round("V9UGQD32MY");
test_math_round(1.4110550263813711e+308);
test_math_round(-691);
test_math_round(2.5518657001973934e+307);
test_math_round(5.277720417403172e+307);
test_math_round(-93);
test_math_round(-251);
test_math_round(-237);
test_math_round("UKJIFPW58");
test_math_round(-43);
test_math_round(1.5602635580926503e+307);
test_math_round("U86SCL");
test_math_round(9.668330453754442e+307);
test_math_round("FYXPG5U");
test_math_round("46YD95V4FS");
test_math_round(1.4394733864147157e+308);
test_math_round(-253);
test_math_round(/yes.*day/);
test_math_round(1.2088952175645222e+308);
test_math_round(1.156906300667907e+308);
test_math_round(-939);
test_math_round(1.4918163060754398e+308);
test_math_round(1.7110650334634904e+308);
test_math_round(7.101068375889619e+307);
test_math_round(-355);
test_math_round(5.416584583419257e+307);
test_math_round("SMU");
test_math_round(1.2502674836768536e+308);
test_math_round(2.567987253651932e+307);
test_math_round("GEFBH0T7");
test_math_round(-663);
test_math_round(-739);
test_math_round(-269);
test_math_round(8.023632327327423e+307);
test_math_round(-437);
test_math_round(-789);
test_math_round("F32PU3");
test_math_round("Q8BSE");
test_math_round(3.9267172890024855e+307);
test_math_round("U3WA7W78T");
test_math_round("7ZU4CR");
test_math_round(/foo/g);
test_math_round(9.304081254346061e+307);
test_math_round("PEMHYBPDKR");
test_math_round(-735);
test_math_round(1.5228825459397524e+308);
test_math_round("DJAPRDV");
test_math_round(-573);
test_math_round(-635);
test_math_round("OCKFH305");
test_math_round(-709);
test_math_round(-653);
test_math_round(-971);
test_math_round(9.04979308057444e+307);
test_math_round(1.0286967581236521e+308);
test_math_round(3.9767991240573123e+307);
test_math_round(9.686911934311112e+307);
test_math_round("NRVHRL");
test_math_round(6.795727263408925e+307);
test_math_round(-783);
test_math_round(-453);
test_math_round("WGJH3XK58");
test_math_round("SO9");
test_math_round("MY0");
test_math_round(1.4391821721950334e+308);
test_math_round("5N2");
test_math_round("1WCQ");
test_math_round(-893);
test_math_round("DS15E8XCP");
test_math_round("B3FLH");
test_math_round("3LU");
test_math_round("79FDOSHBH");
test_math_round("YPLDB64");
test_math_round("G2AMABQ666");
test_math_round("SBK");
test_math_round(1.0294667218509517e+308);
test_math_round(-245);
test_math_round(-865);
test_math_round("86T");
test_math_round(-395);
test_math_round(-535);
test_math_round(-509);
test_math_round(1.7235793178105324e+308);
test_math_round(9.59653040661766e+306);
test_math_round("QUU6KGIPW");
test_math_round(1.7089027918526541e+308);
test_math_round(1.1728910965968998e+308);
test_math_round(-545);
test_math_round(4.616042013609437e+307);
test_math_round("VR9Y1JB6CV");
test_math_round(-211);
test_math_round(1.4151558679044999e+308);
test_math_round("0TZK5X");
test_math_round(-513);
test_math_round(1.4310727144635536e+308);
test_math_round("VABR");
test_math_round("NLWW82K");
test_math_round(-703);
test_math_round("437T");
test_math_round(-683);
test_math_round(1.596225456416593e+308);
test_math_round(-501);
test_math_round("1V0EG1443");
test_math_round(7.738239453093795e+307);
test_math_round(2.649523423904659e+307);
test_math_round(1.132732953183752e+308);
test_math_round("7L63D3IL");
test_math_round(-107);
test_math_round("6PJB");
test_math_round(3.4998522539497987e+307);
test_math_round("KL7MVN2A");
test_math_round(7.908917145146126e+306);
test_math_round(-929);
test_math_round(-307);
test_math_round(1.0797492561653685e+308);
test_math_round(4.3496860039746133e+307);
test_math_round(-363);
test_math_round(1.2421508031699104e+308);
test_math_round("WONB36F8HM");
test_math_round(7.488332690176475e+307);
test_math_round(-995);
test_math_round(1.2515910708089261e+308);
test_math_round("5MDR5");
test_math_round(-255);
test_math_round("YPFJC52");
test_math_round("9YW");
test_math_round(-589);
test_math_round(-37);
test_math_round(3.138000286623712e+307);
test_math_round("7EWXC1L");
test_math_round(-5);
test_math_round("XXI");
test_math_round("2ZS");
test_math_round(1.2125295941063236e+308);
test_math_round(8.31096043240742e+307);
test_math_round(5.477983315002515e+307);
test_math_round(-91);
test_math_round(1.6419983567238324e+307);
test_math_round("6972UAY");
test_math_round(-311);
test_math_round(-555);
test_math_round(3.430568166970971e+305);
test_math_round(1.1548417535286019e+308);
test_math_round("9P9SQ");
test_math_round(7.496165795617127e+307);
test_math_round(7.465976960562065e+307);
test_math_round("S4NLY");
test_math_round(-595);
test_math_round("942ZXVB57F");
test_math_round("XIU0");
test_math_round(2.402917628602077e+307);
test_math_round("64F4K72O");
test_math_round(1.0095851436805702e+308);
test_math_round(-443);
test_math_round(-771);
test_math_round("ODIIVX");
test_math_round(1.5313010893488523e+308);
test_math_round(-809);
test_math_round(-297);
test_math_round("X6I");
test_math_round(4.586211741870558e+307);
test_math_round(-505);
test_math_round(1.3960416355986931e+308);
test_math_round("EBZJ");
test_math_round(3.782992220555193e+307);
test_math_round(-265);
test_math_round(-261);
test_math_round(3.097253966030183e+306);
test_math_round(9.611700256615994e+307);
test_math_round(1.3220248717109925e+308);
test_math_round(1.5229103858261579e+308);
test_math_round("X4IW");
test_math_round(242);
test_math_round(7.659903459845788e+307);
test_math_round("PKE0MEHN");
test_math_round(-673);
test_math_round(1.6166010068382773e+308);
test_math_round(-337);
test_math_round(-149);
test_math_round("2N0Q4VU");
test_math_round(-279);
test_math_round(1.6467210582728602e+308);
test_math_round("IJJ7Z");
test_math_round(7.83121404404867e+307);
test_math_round(-733);
test_math_round("8IFKU");
test_math_round(-295);
test_math_round(-499);
test_math_round(-13);
test_math_round("DTFD7Q");
test_math_round("8MG16IO2E");
test_math_round("JXP5");
test_math_round(1.5565459180572661e+308);
test_math_round("MGID8");
test_math_round(-583);
test_math_round("958S");
test_math_round("3TE724V");
test_math_round(-693);
test_math_round(-493);
test_math_round("PUBD0I");
test_math_round(1.626505127640439e+307);
test_math_round("1FUNZDFIB");
test_math_round(8.082016288056648e+307);
test_math_round("BFF");
test_math_round("MTT7NFR7");
test_math_round("PL28Q0");
test_math_round("X0LY8M");
test_math_round(-449);
test_math_round("FY3RXM1");
test_math_round("6YKEF0");
test_math_round(1.4695648617058549e+308);
test_math_round(1.1829731325224662e+308);
test_math_round(1.0954328405924311e+308);
test_math_round("RWYTI17P6Z");
test_math_round(-421);
test_math_round("634C7V");
test_math_round("AQE55C4ZW");
test_math_round("WECWXMYL9");
test_math_round(-603);
test_math_round(1.5876252396422972e+308);
test_math_round("YFTE1");
test_math_round(6.644759296332947e+307);
test_math_round("U7G4RR8W");
test_math_round(1.2663581505123857e+308);
test_math_round(-417);
test_math_round(1.72297728686252e+308);
test_math_round("WBJR5");
test_math_round(1.0978106460857524e+308);
test_math_round(5.641301400725859e+307);
test_math_round(1.2645777288703773e+308);
test_math_round(1.793186620165974e+308);
test_math_round(3.628602485931659e+307);
test_math_round("JE9LE");
test_math_round(8.811150226701021e+307);
test_math_round(1.4679379213343734e+308);
test_math_round("CRBB3NTB");
test_math_round(-799);
test_math_round(1.0249913718172917e+308);
test_math_round(1.1145167628061065e+307);
test_math_round(1.2942357246086715e+308);
test_math_round(1.6802493330069687e+308);
test_math_round(1.0549241539566397e+307);
test_math_round("E6PYK0RUKR");
test_math_round(-171);
test_math_round("XAAH21S2");
test_math_round(1.727742883708818e+308);
test_math_round("9VP");
test_math_round("8FNW6SSSGO");
test_math_round(-779);
test_math_round("R8F5K311AG");
test_math_round("JVCESHW3U");
test_math_round(7.183728364924891e+307);
test_math_round(-711);
test_math_round(8.334569162125981e+307);
test_math_round("A85DXHC");
test_math_round(3.893256806731974e+307);
test_math_round(5.712363956777844e+307);
test_math_round(-151);
test_math_round("J0EYZUMJ");
test_math_round("OK5YSUNU");
test_math_round(4.458670057450487e+307);
test_math_round("P332WLQL");
test_math_round("RBAKQOAW");
test_math_round("66E");
test_math_round(-289);
test_math_round(-81);
test_math_round(1.457369400341777e+306);
test_math_round(-23);
test_math_round(-747);
test_math_round("MDY");
test_math_round(-125);
test_math_round(-965);
test_math_round(1.0779964323607799e+307);
test_math_round(9.224275008868381e+307);
test_math_round("52V9PS6");
test_math_round(1.1810696558096268e+308);
test_math_round("CDQ5CO");
test_math_round("FPQ");
test_math_round(-993);
test_math_round("XDY2D1Z80Z");
test_math_round("154G8JV");
test_math_round(4.265022384230767e+307);
test_math_round(-621);
test_math_round(1.0221960174211001e+308);
test_math_round("IMBFA");
test_math_round(1.3943687246158419e+308);
test_math_round("9JG");
test_math_round("PWWPZ");
test_math_round("TY59");
test_math_round(-507);
test_math_round("EKYHT");
test_math_round("M6411ETH3T");
test_math_round(6.696936449284538e+307);
test_math_round(-699);
test_math_round(1.6341794370708162e+308);
test_math_round(1.5413706624254044e+308);
test_math_round(1.7263858865047687e+308);
test_math_round(-697);
test_math_round("KX0R6J6LTQ");
test_math_round(1.5246856283109402e+308);
test_math_round("194VC5BHPG");
test_math_round(-273);
test_math_round(2.0346724627456282e+307);
test_math_round(1.7811194030079997e+307);
test_math_round(2.9368269109397394e+307);
test_math_round("HYL7B361OJ");
test_math_round("P7VNAB");
test_math_round("7POVGKQ");
test_math_round(4.189520298692734e+306);
test_math_round(-119);
test_math_round(8.764398566168166e+307);
test_math_round("0DO8");
test_math_round("UQ00MXGX3");
test_math_round("BS9PYRPZO");
test_math_round(1.0497913837411688e+308);
test_math_round("CHXXP5C");
test_math_round("CEN");
test_math_round(3.0900940653415366e+307);
test_math_round("C96W1E");
test_math_round(1.1484076287682506e+308);
test_math_round(3.8103875505778333e+307);
test_math_round(1.698005132081092e+308);
test_math_round(-33);
test_math_round(8.720847336209583e+307);
test_math_round(1.7155737438767135e+308);
test_math_round(9.597741939312285e+307);
test_math_round(4.555941660975509e+307);
test_math_round(-73);
test_math_round(1.0413659307481517e+308);
test_math_round(-99);
test_math_round(-849);
test_math_round("KFN6SQX");
test_math_round(1.2392193289193556e+308);
test_math_round(2.39901977170912e+307);
test_math_round(1.0766000197608861e+308);
test_math_round(4.587220566219931e+307);
test_math_round("0A3FGP");
test_math_round(2.6857972264173694e+307);
test_math_round(1.3228486786274357e+308);
test_math_round(1.1708443435062758e+308);
test_math_round("M0D370C3E");
test_math_round(-471);
test_math_round(1.2302748226478777e+308);
test_math_round("BQM");
test_math_round("PRCO9TVR9B");
test_math_round(-187);
test_math_round("ZFWARE3L0");
test_math_round(-717);
test_math_round(-157);
test_math_round(1.0185807751371884e+308);
test_math_round(2.7287895954930364e+307);
test_math_round(2.711324528920031e+307);
test_math_round(-869);
test_math_round("6BGI1");
test_math_round("A30HE");
test_math_round("DJ4T");
test_math_round(1.3246299082859851e+308);
test_math_round(3.2621758910006723e+307);
test_math_round(-927);
test_math_round("6QUE");
test_math_round("8C272AEVG");
test_math_round("I4HJUIU6V");
test_math_round(5.012322231444057e+307);
test_math_round(-353);
test_math_round(-403);
test_math_round(-369);
test_math_round("470Q");
test_math_round("11H");
test_math_round(1.0390434763775331e+308);
test_math_round(-967);
test_math_round(1.051221567025802e+308);
test_math_round(-953);
test_math_round(-815);
test_math_round(1.9676740140359506e+307);
test_math_round(-567);
test_math_round(-553);
test_math_round(-53);
test_math_round(1.5060520500521336e+308);
test_math_round(1.5696139359817193e+308);
test_math_round(-823);
test_math_round("O7GENF6");
test_math_round(6.592511505362376e+306);
test_math_round("V6FCWSG");
test_math_round(1.7924938821387792e+308);
test_math_round("5SN0");
test_math_round(1.953420556113655e+306);
test_math_round(-731);
test_math_round("H2TDJ1Y1AJ");
test_math_round("1GK9197UC9");
test_math_round("9GHI3QWHK");
test_math_round(-519);
test_math_round(1.4633725953571636e+308);
test_math_round("WBYSCYSI");
test_math_round(-907);
test_math_round("8MQDCVG8");
test_math_round(-845);
test_math_round(3.7937231691844924e+307);
test_math_round("XAPPQLJV");
test_math_round(1.3691417872064226e+308);
test_math_round(-69);
test_math_round(1.1647116893254058e+308);
test_math_round("AXHO");
test_math_round(-793);
test_math_round("IVR64L06");
test_math_round(1.3803023661452546e+307);
test_math_round(4.339850929134801e+307);
test_math_round("DQFMA");
test_math_round("1AGPRMU");
test_math_round(1.4454125610995263e+308);
test_math_round("3INRV2G14");
test_math_round(1.6712908546177535e+308);
test_math_round("K7IKOZM");
test_math_round(-257);
test_math_round(-753);
test_math_round(-185);
test_math_round("H8P1DJDFQF");
test_math_round(668);
test_math_round(6.659439978310626e+306);
test_math_round(-963);
test_math_round("QBK5K");
test_math_round("Z38");
test_math_round(1.0244343537944872e+308);
test_math_round(-331);
test_math_round(-659);
test_math_round(-427);
test_math_round(4.614743719113841e+307);
test_math_round(5.072760776733985e+307);
test_math_round(4.497378168715437e+307);
test_math_round("D0PD69T");
test_math_round(-543);
test_math_round("TFEM77");
test_math_round("2PR3OW6W5A");
test_math_round(1.3756426926275147e+308);
test_math_round("O7PVSA5X3");
test_math_round(-11);
test_math_round("CKBL");
test_math_round("870O7IL");
test_math_round("S8EE");
test_math_round(4.609489430882922e+306);
test_math_round(-751);
test_math_round("NPLVSZA");
test_math_round("AV1J9OG6J");
test_math_round(5.770218353707609e+307);
test_math_round("XPK");
test_math_round("QKQP");
test_math_round(4.1315663141787147e+307);
test_math_round(1.632790113566266e+308);
test_math_round(-433);
test_math_round(8.303021931032365e+307);
test_math_round("AF6T5O");
test_math_round(-221);
test_math_round(3.597525639507377e+307);
test_math_round(-195);
test_math_round("1ZHX60Y40E");
test_math_round(8.155157656143572e+307);
test_math_round(-531);
test_math_round("6WYD");
test_math_round(-597);
test_math_round(1.319209891321371e+307);
test_math_round(-571);
test_math_round("GSL8H");
test_math_round(1.4921543619700217e+308);
test_math_round(-329);
test_math_round("ENW3XL19");
test_math_round("U0ENPDO");
test_math_round("IZW");
test_math_round("2BE1A");
test_math_round("URS8K4B");
test_math_round(1.4963980986664555e+308);
test_math_round("PP3L");
test_math_round(1.4967564732115156e+308);
test_math_round(1.757086870745521e+308);
test_math_round(1.6301968952627795e+308);
test_math_round(-319);
test_math_round(1.0276231632497871e+308);
test_math_round("ZHWVQ08O");
test_math_round(-41);
test_math_round(1.1398162768145374e+308);
test_math_round("JOOKHMQ");
test_math_round("6PT5G");
test_math_round(9.180531024892881e+307);
test_math_round(-707);
test_math_round("LFHNXEI3R2");
test_math_round("HXP8BEAQZ");
test_math_round(-75);
test_math_round("LXXK39");
test_math_round(8.854491364098308e+306);
test_math_round(1.2555901928716788e+308);
test_math_round(8.258357286946255e+307);
test_math_round("KIHF");
test_math_round("RBWS");
test_math_round(1.1949605316749041e+308);
test_math_round("9517PVPNHX");
test_math_round(1.057191491806472e+308);
test_math_round(1.385003642382705e+306);
test_math_round("EOKW1B2");
test_math_round(4.774745319959848e+307);
test_math_round(2.4854207558562944e+307);
test_math_round("UQME31B");
test_math_round("BNTS8");
test_math_round(-661);
test_math_round("QZW60");
test_math_round(-215);
test_math_round(-357);
test_math_round("NUESAADC2");
test_math_round(1.493385786353057e+308);
test_math_round(1.673782083813678e+308);
test_math_round(-911);
test_math_round("6EFJFCR");
test_math_round("QVRN");
test_math_round("WPE556NH6");
test_math_round(1.1570710700431648e+308);
test_math_round("SMJ9OOR");
test_math_round(-451);
test_math_round("ETTQFWBU");
test_math_round(1.7516730206779285e+307);
test_math_round(1.5471088788215627e+308);
test_math_round(-861);
test_math_round(-277);
test_math_round("BYZ5");
test_math_round(7.579765168215638e+307);
test_math_round(1.3786734488625145e+308);
test_math_round("ES585");
test_math_round("FJM75SM");
test_math_round("4W4LL");
test_math_round(9.877049447247789e+307);
test_math_round(-207);
test_math_round(8.339820498290225e+307);
test_math_round(-61);
test_math_round(5.832133531557424e+307);
test_math_round(-383);
test_math_round("C0RUQOTF");
test_math_round("HYXXPYS94");
test_math_round("KFXDPRVW6T");
test_math_round("TXZ8WOMFI");
test_math_round(1.324805242171587e+306);
test_math_round(-247);
test_math_round(1.5341002717001512e+307);
test_math_round("6OLHKYNP");
test_math_round(3.7132854165969113e+307);
test_math_round(-775);
test_math_round(8.929235654967144e+307);
test_math_round("5FX613");
test_math_round(9.816975041448507e+307);
test_math_round(-491);
test_math_round("T188SYUWL3");
test_math_round(5.210968238643046e+306);
test_math_round(-423);
test_math_round("RRVSEK1");
test_math_round("GP6KRGV1");
test_math_round("JAD6T");
test_math_round("GLW5U0");
test_math_round(1.7688282826389347e+308);
test_math_round(-679);
test_math_round("QEIVBV5");
test_math_round(-407);
test_math_round(1.28328714874456e+307);
test_math_round("32PDUZTFS");
test_math_round(5.104933205221795e+307);
test_math_round("V3X5K69");
test_math_round(8.572311346871372e+307);
test_math_round(1.1519565439207994e+308);
test_math_round("BXVL");
test_math_round("3IDZ7846E9");
test_math_round(-857);
test_math_round("E984LTJXJ6");
test_math_round("JADVQBN");
test_math_round(-29);
test_math_round(-323);
test_math_round("KFXUJYIFF");
test_math_round(-781);
test_math_round(-629);
test_math_round(-231);
test_math_round(9.303989828232472e+306);
test_math_round(1.0667712404387144e+307);
test_math_round("W75ICS8");
test_math_round("UX3KIX");
test_math_round(5.482931135071777e+307);
test_math_round(4.915418251220376e+307);
test_math_round(1.2735041033765602e+308);
test_math_round("KKO06I2");
test_math_round("FJFFCUVFQ");
test_math_round(6.543178249602932e+307);
test_math_round(-387);
test_math_round(-19);
test_math_round("BV8T9SN1");
test_math_round("KCM");
test_math_round(-685);
test_math_round("5T69I3U7");
test_math_round(-103);
test_math_round("WT812");
test_math_round(-51);
test_math_round(1.4201174143954405e+308);
test_math_round(-455);
test_math_round("ULUMC025W6");
test_math_round(-179);
test_math_round(2.5863895181172743e+307);
test_math_round("7AX6");
test_math_round(4.716030479509044e+307);
test_math_round(3.002576134664851e+307);
test_math_round(9.190345346885457e+307);
test_math_round(2.252849909032421e+307);
test_math_round(1.0039642883955029e+308);
test_math_round(-341);
test_math_round("1J4MK9BNI7");
test_math_round(-411);
test_math_round(-803);
test_math_round("F6T");
test_math_round(-9);
test_math_round("F9Q1HRYH4V");
test_math_round(1.5094204774752316e+308);
test_math_round(-853);
test_math_round("WQ92KZ2RSU");
test_math_round("4CE3371S");
test_math_round(-263);
test_math_round("F4RL5R6ZUW");
test_math_round("836MY7CKQ");
test_math_round(2.5707417784858355e+307);
test_math_round(9.656817716462212e+307);
test_math_round(1.7483371576117468e+308);
test_math_round(1.4112444825130637e+308);
test_math_round(-765);
test_math_round(7.509352594072122e+307);
test_math_round(-101);
test_math_round(1.5915447287226368e+308);
test_math_round("D7ZORIQB");
test_math_round(1.3195643020450265e+308);
test_math_round(9.71018295672615e+307);
test_math_round(4.163268657291374e+307);
test_math_round("DAOI9Q");
test_math_round("5SMIC");
test_math_round(3.597391523338712e+307);
test_math_round(5.040874289094365e+307);
test_math_round("SHJX0");
test_math_round(-17);
test_math_round("INJIULI");
test_math_round(1.553951380111807e+308);
test_math_round("DUMBUR9KW3");
test_math_round("A7YCSGM7H");
test_math_round(1.3291614197013425e+308);
test_math_round(7.891728543010833e+307);
test_math_round(7.638382990824542e+307);
test_math_round("3XLWPGSF");
test_math_round("PNMYGV1O");
test_math_round(-249);
test_math_round(1.4966474330261287e+308);
test_math_round(4.899588082688943e+307);
test_math_round("B1O");
test_math_round("363O");
test_math_round("6HVXY7LY37");
test_math_round(-439);
test_math_round(1.7200663057751293e+308);
test_math_round(9.156686883057074e+307);
test_math_round("3OXCGQ");
test_math_round(-607);
test_math_round("29EJL3");
test_math_round("TOER");
test_math_round("EOBTMF");
test_math_round(1.281632180915831e+308);
test_math_round("1HN78");
test_math_round(4.656335776879945e+307);
test_math_round(1.6489940438478997e+308);
test_math_round(1.7040976074428854e+308);
test_math_round("QFX5");
test_math_round(1.2982877141198918e+308);
test_math_round(1.0640366223203104e+308);
test_math_round("MUUG");
test_math_round(4.2879449190114927e+307);
test_math_round("7YV");
test_math_round(1.5687341447176065e+308);
test_math_round(6.894393285231889e+307);
test_math_round(-973);
test_math_round(-839);
test_math_round("EY92T8I");
test_math_round(-565);
test_math_round(-203);
test_math_round(-805);
test_math_round("7XI6ZKX");
test_math_round("LMRO1TK");
test_math_round(-159);
test_math_round(6.884595407487191e+307);
test_math_round(1.505861965551314e+308);
test_math_round("AU2YC");
test_math_round("IMY6QVEI");
test_math_round(1.5169358143162747e+308);
test_math_round("0U4Z31131");
test_math_round("3A1MRZYDVO");
test_math_round(1.5440707634710765e+308);
test_math_round("PU30K");
test_math_round(1.1440768934352865e+308);
test_math_round(-217);
test_math_round(1.5462347822280785e+308);
test_math_round("0PX9");
test_math_round(1.5454352303184882e+308);
test_math_round("FP8");
test_math_round(-931);
test_math_round("P7YV8YN");
test_math_round(-143);
test_math_round(1.1521318763662317e+308);
test_math_round(2.57947072583326e+306);
test_math_round(6.58578274607299e+307);
test_math_round(1.7054786238377614e+308);
test_math_round(-379);
test_math_round(-919);
test_math_round(-121);
test_math_round(9.400574573547348e+306);
test_math_round(6.643102774713152e+307);
test_math_round("0T9JPHVM");
test_math_round(1.6305426875572118e+308);
test_math_round(-915);
test_math_round("292");
test_math_round("836VRBX2UY");
test_math_round("9UMV5T");
test_math_round("J6TUVG8WHI");
test_math_round(1.6141164545342419e+308);
test_math_round("HRYJC2");
test_math_round("Y71WWQ2ZU0");
test_math_round(9.166677004284393e+307);
test_math_round(7.929023971091137e+306);
test_math_round(1.4419599610375027e+308);
test_math_round("NNAGSB5TX");
test_math_round(-525);
test_math_round(1.0476325937724297e+308);
test_math_round(1.0346855494294014e+308);
test_math_round("EOI5R");
test_math_round("QGSXPJVQ");
test_math_round(-173);
test_math_round("GV9DF37");
test_math_round(1.7226405832979558e+308);
test_math_round(6.7346869383235015e+307);
test_math_round(1.2305552233624094e+308);
test_math_round(1.5048339859077296e+308);
test_math_round("MOREFZ");
test_math_round("3I2A5Y2BB6");
test_math_round(1.6349264927578504e+308);
test_math_round("4KCVOD");
test_math_round("MLZN50Z2WB");
test_math_round(-791);
test_math_round(5.659681470964387e+307);
test_math_round("7AMJN9");
test_math_round(-883);
test_math_round(1.1355636673907617e+308);
test_math_round(-169);
test_math_round(-617);
test_math_round("040X2AQU");
test_math_round("UN000XVDM");
test_math_round(1.5602978287338711e+308);
test_math_round(1.018243758481385e+308);
test_math_round("I4AQLR1");
test_math_round("9TS64MM");
test_math_round("R58J4NTPH");
test_math_round("XOM");
test_math_round("0PRJR");
test_math_round(1.0368262363981371e+308);
test_math_round("KMSX7L8ZS");
test_math_round(-637);
test_math_round("SZ0J");
test_math_round(5.998717476687123e+307);
test_math_round("4GZ9");
test_math_round(-71);
test_math_round("3FXOH0XH1");
test_math_round(-227);
test_math_round(2.829438880330197e+307);
test_math_round("LTO3N83Q1S");
test_math_round(3.351570355844559e+307);
test_math_round(-655);
test_math_round("13ITUOU");
test_math_round(-35);
test_math_round("QUX7CWPDX");
test_math_round("1WI48AL");
test_math_round(-587);
test_math_round(3.8096405063994524e+307);
test_math_round(-435);
test_math_round(9.425512763711121e+306);
test_math_round(-669);
test_math_round("I3RNH");
test_math_round(6.580818907006193e+307);
test_math_round(-461);
test_math_round(5.04027119251517e+307);
test_math_round("W3E");
test_math_round(1.2850717253457707e+308);
test_math_round("PXYWB5X");
test_math_round("STVFKM");
test_math_round(-305);
test_math_round(2.3326934822292675e+307);
test_math_round(1.7767191188827253e+308);
test_math_round(1.4739598650031811e+308);
test_math_round(5.167978825053659e+307);
test_math_round("HIRVTD7VV5");
test_math_round(-209);
test_math_round("NNGCIW8BMQ");
test_math_round(1.3532406322356853e+308);
test_math_round("JM678NP");
test_math_round(-275);
test_math_round(2.9978383249365817e+307);
test_math_round("9F0VPVVRF");
test_math_round("1TSWPEA4");
test_math_round(1.0222465959886426e+308);
test_math_round(1.7289777452289245e+308);
test_math_round(-859);
test_math_round(-347);
test_math_round("3439");
test_math_round("8URYGI");
test_math_round(7.126915556930136e+307);
test_math_round(-811);
test_math_round(7.401323729761823e+307);
test_math_round("RQDH");
test_math_round("P1RIHQ");
test_math_round(6.366029136741868e+307);
test_math_round(3.476079478100892e+307);
test_math_round("QFAD");
test_math_round(5.740554383339586e+307);
test_math_round(1.7644213362552509e+308);
test_math_round(8.701363468683002e+307);
test_math_round("EQNEI");
test_math_round("9URZ1K2H46");
test_math_round(-175);
test_math_round(-137);
test_math_round(1.4003057274887653e+308);
test_math_round(-431);
test_math_round(3.615057280280899e+307);
test_math_round("8R6UCD");
test_math_round("KOUJU");
test_math_round(4.587074004151158e+307);
test_math_round("1VF");
test_math_round(1.7768730454037963e+307);
test_math_round("T1RB3Z");
test_math_round(9.017236990475927e+307);
test_math_round(1.4518525867195223e+308);
test_math_round(1.5489108070922375e+308);
test_math_round("1WDTV74KO");
test_math_round(3.723634655764265e+307);
test_math_round(9.99758779842951e+307);
test_math_round("DT1YI0SHH");
test_math_round(-569);
test_math_round("DBQPR1IP4G");
test_math_round(4.2884139990165836e+307);
test_math_round("0S9KKOXDG");
test_math_round(1.4783944264416115e+308);
test_math_round(3.3399707503655123e+307);
test_math_round(1.1364180733226725e+308);
test_math_round(1.2069735285970483e+308);
test_math_round(6.496893820888069e+307);
test_math_round(-469);
test_math_round("D3X3KYC");
test_math_round("KNYR5A");
test_math_round(-529);
test_math_round("T3O90LX2C");
test_math_round("MB7O8FX2M");
test_math_round("EZTFKWF1A8");
test_math_round(-575);
test_math_round("C8MHYZ");
test_math_round("5P8UYG3");
test_math_round("ZJ9PY");
test_math_round("PEDAW2LFMB");
test_math_round(1.5635161679763461e+308);
test_math_round("NP4DVD");
test_math_round("SUP20VK8FS");
test_math_round("W1OKX6JQ8");
test_math_round("YLPVH");
test_math_round(1.6921095673994989e+308);
test_math_round(1.653967681479459e+308);
test_math_round("Q1YB");
test_math_round(1.4835301747560285e+308);
test_math_round(-133);
test_math_round(1.5999245272618814e+308);
test_math_round("VE05KJ23");
test_math_round("YL7");
test_math_round("OWSN2RERV");
test_math_round(9.81281942958304e+307);
test_math_round(3.195485621437376e+307);
test_math_round(-163);
test_math_round(7.859197429054473e+306);
test_math_round(70);
test_math_round(1.1224362061486374e+308);
test_math_round(-719);
test_math_round("NO6");
test_math_round(-489);
test_math_round("PVIJ9MRP3");
test_math_round("NNZAK");
test_math_round(9.553729332741504e+306);
test_math_round("5SS");
test_math_round(-271);
test_math_round(-619);
test_math_round(1.1745183716642788e+308);
test_math_round(1.2073525644329904e+308);
test_math_round(1.1514276701425178e+308);
test_math_round("1EWIP0WQ");
test_math_round("0LIJG5YZ3");
test_math_round(-479);
test_math_round(1.223837616786021e+308);
test_math_round("2I865");
test_math_round(1.529483843046833e+308);
test_math_round("5Z4ASOKNP");
test_math_round("10RQ");
test_math_round(-947);
test_math_round("AHIO5");
test_math_round(-315);
test_math_round(-39);
test_math_round("VU9PZSP");
test_math_round(-375);
test_math_round(-871);