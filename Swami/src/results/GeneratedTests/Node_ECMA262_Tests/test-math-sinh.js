/*
* This file is automatically generated by Swami
*
* 2019-08-07 16:35:23.497775
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
function test_math_sinh(x){
	if (Object.is( x,NaN )){
		var output = Math.sinh(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.sinh(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === - 0 )){
		var output = Math.sinh(x);
		assert.strictEqual(- 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === + Infinity )){
		var output = Math.sinh(x);
		assert.strictEqual(+ Infinity, output);
		console.log("Good Test");
		return;
		}
	if (( x === - Infinity )){
		var output = Math.sinh(x);
		assert.strictEqual(- Infinity, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}



/*TESTS GENERATED AUTOMATICALLY*/
test_math_sinh(1.6166224817475223e+308);
test_math_sinh(/ab+c/);
test_math_sinh(false);
test_math_sinh(undefined);
test_math_sinh(-273);
test_math_sinh(true);
test_math_sinh("0B8");
test_math_sinh(/[^.]+/);
test_math_sinh(1.7672156509102912e+308);
test_math_sinh(-671);
test_math_sinh(Infinity);
test_math_sinh(-9);
test_math_sinh(/foo/g);
test_math_sinh(/yes[^]*day/);
test_math_sinh(3.0613170774897427e+307);
test_math_sinh("9CASLGM");
test_math_sinh(/[\u0400-\u04FF]+/g);
test_math_sinh(-841);
test_math_sinh(NaN);
test_math_sinh(6.727665175449028e+306);
test_math_sinh("L7N");
test_math_sinh(1.1086537916273584e+308);
test_math_sinh(/\r\n|\r|\n/);
test_math_sinh(-475);
test_math_sinh("9GCL");
test_math_sinh("SENLIWULR");
test_math_sinh(3.220750276659775e+307);
test_math_sinh(-927);
test_math_sinh("KLWIJO");
test_math_sinh(5.47496192668664e+307);
test_math_sinh(-0);
test_math_sinh(-857);
test_math_sinh(6.868273014972187e+307);
test_math_sinh(-39);
test_math_sinh(9.693410328174245e+307);
test_math_sinh(+0);
test_math_sinh("PXEZN0");
test_math_sinh(-611);
test_math_sinh("1S7NW6DEF5");
test_math_sinh("FZQX8AQ");
test_math_sinh("EK6DJZY57C");
test_math_sinh(-575);
test_math_sinh(-587);
test_math_sinh("0L1VZFSI");
test_math_sinh("FEUR");
test_math_sinh("PSM5G");
test_math_sinh(-921);
test_math_sinh("UNB5W");
test_math_sinh(6.185041545077225e+307);
test_math_sinh(-381);
test_math_sinh(/yes.*day/);
test_math_sinh(-507);
test_math_sinh(-781);
test_math_sinh(-571);
test_math_sinh(-535);
test_math_sinh(-815);
test_math_sinh("9534GIDH4S");
test_math_sinh(-615);
test_math_sinh(3.051468110672528e+307);
test_math_sinh(/(\w+)\s(\w+)/);
test_math_sinh(6.847424321695288e+305);
test_math_sinh(7.888653616086241e+307);
test_math_sinh("9CJPM4");
test_math_sinh("JXOGWOV");
test_math_sinh(null);
test_math_sinh(7.242783821237019e+307);
test_math_sinh(-451);
test_math_sinh("6XLD8TRT");
test_math_sinh(2.1968053084520784e+307);
test_math_sinh(9.114090646535854e+307);
test_math_sinh("RC7G");
test_math_sinh("92KGPS93ZH");
test_math_sinh(7.014105222776169e+307);
test_math_sinh(6.106486529543617e+307);
test_math_sinh(6.328083269992943e+307);
test_math_sinh(1.7682912762893053e+308);
test_math_sinh("1F6C");
test_math_sinh("RJ8YFT");
test_math_sinh(-453);
test_math_sinh(9.50972364161906e+307);
test_math_sinh(3.402245261642266e+307);
test_math_sinh("TLU9NAWOST");
test_math_sinh(1.005429214854435e+308);
test_math_sinh("OZINIMG5");
test_math_sinh(1.6532794428140454e+308);
test_math_sinh(-517);
test_math_sinh(-325);
test_math_sinh(-729);
test_math_sinh("YPF");
test_math_sinh("DFIILW7C");
test_math_sinh(8.961579079396735e+307);
test_math_sinh("NHIIEMAWV");
test_math_sinh(6.684895357294406e+307);
test_math_sinh("1AS0");
test_math_sinh(-957);
test_math_sinh(-1);
test_math_sinh("QLGU3JOR7");
test_math_sinh(-445);
test_math_sinh("0UPXR9");
test_math_sinh(7.36072491906548e+307);
test_math_sinh("4052DD80");
test_math_sinh("Z98RPZR");
test_math_sinh("LZJRJ9D0XS");
test_math_sinh(-997);
test_math_sinh(-199);
test_math_sinh(-119);
test_math_sinh(-111);
test_math_sinh(7.526975529833815e+307);
test_math_sinh(-377);
test_math_sinh(-899);
test_math_sinh(2.828565522090479e+305);
test_math_sinh(1.1501715042020083e+308);
test_math_sinh(-367);
test_math_sinh(-71);
test_math_sinh(-183);
test_math_sinh("34BAME");
test_math_sinh(1.5542694168723194e+308);
test_math_sinh(-589);
test_math_sinh(-25);
test_math_sinh(1.6318884529172568e+308);
test_math_sinh("ZZ73");
test_math_sinh(1.4459592372434107e+308);
test_math_sinh("CNJ9");
test_math_sinh(2.561072310352639e+306);
test_math_sinh(3.715356083972156e+307);
test_math_sinh(9.459711681070886e+307);
test_math_sinh(1.364385977111568e+308);
test_math_sinh(1.7872789028494035e+308);
test_math_sinh("NTDREH50");
test_math_sinh(-551);
test_math_sinh("TU0");
test_math_sinh("QSFDRL5");
test_math_sinh(1.0829804338423965e+308);
test_math_sinh("7GI8IE2O");
test_math_sinh(5.397766531590323e+307);
test_math_sinh("NMR");
test_math_sinh(-805);
test_math_sinh("EOCZ3JTG7");
test_math_sinh("X4NFT");
test_math_sinh(-905);
test_math_sinh("XSLW6K");
test_math_sinh(-763);
test_math_sinh(7.09718032320048e+307);
test_math_sinh(6.954986144485712e+307);
test_math_sinh("9JQ3XQVWVX");
test_math_sinh("KB79");
test_math_sinh("Z4ELUOIRAU");
test_math_sinh("VIQZACWND");
test_math_sinh("1WPQ2NJCF9");
test_math_sinh(1.0966182431885327e+308);
test_math_sinh(-911);
test_math_sinh("ZF5ZVLM6");
test_math_sinh(-761);
test_math_sinh(-559);
test_math_sinh("VY2TWUUC5");
test_math_sinh(1.1257376386577916e+306);
test_math_sinh(-749);
test_math_sinh(3.6185271169499287e+307);
test_math_sinh(1.3090818512867306e+308);
test_math_sinh(1.3739626130520077e+308);
test_math_sinh(-413);
test_math_sinh("41QOJXS");
test_math_sinh(1.0441610009291332e+308);
test_math_sinh(7.383858261407691e+307);
test_math_sinh(1.7787867318091553e+308);
test_math_sinh("L53S8473X8");
test_math_sinh("Y2GP4");
test_math_sinh("KO8N8B3O43");
test_math_sinh("QBC1O");
test_math_sinh(-663);
test_math_sinh(-779);
test_math_sinh(1.1176050990225781e+308);
test_math_sinh(-159);
test_math_sinh(1.1034160697761374e+308);
test_math_sinh(1.64744850012797e+307);
test_math_sinh(1.4085911004068506e+308);
test_math_sinh("LOLEJS2");
test_math_sinh("2E5766LC");
test_math_sinh(-155);
test_math_sinh("TOMY3YMB");
test_math_sinh("RATY5N3W");
test_math_sinh("UO7PA5S");
test_math_sinh("CL09THJM2");
test_math_sinh(-275);
test_math_sinh("KM8");
test_math_sinh("7SX8FI");
test_math_sinh(-123);
test_math_sinh(1.7361736289679883e+308);
test_math_sinh("MWDWEFXXR");
test_math_sinh("2Q6");
test_math_sinh(-969);
test_math_sinh("LWT9");
test_math_sinh(2.1627560102622484e+307);
test_math_sinh(2.516841919117917e+307);
test_math_sinh(1.4771102755752874e+308);
test_math_sinh("B7P");
test_math_sinh(-523);
test_math_sinh(1.7697870227951646e+308);
test_math_sinh(-141);
test_math_sinh("ULLG3D4KE4");
test_math_sinh(-635);
test_math_sinh("SFMTCFWC");
test_math_sinh("LUI");
test_math_sinh(-243);
test_math_sinh(2.216595974415935e+307);
test_math_sinh(1.2036996058297116e+308);
test_math_sinh("AK49Q");
test_math_sinh("0SSS4YEK");
test_math_sinh(-151);
test_math_sinh("02Y0");
test_math_sinh(1.1320149402700575e+308);
test_math_sinh(-255);
test_math_sinh(7.599935497585984e+307);
test_math_sinh(1.8096470779242987e+307);
test_math_sinh("DVP6");
test_math_sinh(3.8064745205336084e+307);
test_math_sinh(6.525350745083805e+307);
test_math_sinh(3.45775758992346e+307);
test_math_sinh(-817);
test_math_sinh(-131);
test_math_sinh(-843);
test_math_sinh("F0K9KI3YP");
test_math_sinh(1.3794537702284248e+308);
test_math_sinh(-395);
test_math_sinh(-79);
test_math_sinh(4.4712401464754027e+307);
test_math_sinh(-207);
test_math_sinh(5.744628739817855e+307);
test_math_sinh(-45);
test_math_sinh(6.343846352470239e+307);
test_math_sinh(4.898706805833859e+307);
test_math_sinh(-125);
test_math_sinh("H5X8W7XZZH");
test_math_sinh("6V1L73MA0");
test_math_sinh(-691);
test_math_sinh(-345);
test_math_sinh(-139);
test_math_sinh("212ILHH1CU");
test_math_sinh(-949);
test_math_sinh(-755);
test_math_sinh(1.5283615310054205e+308);
test_math_sinh(7.543267347902687e+307);
test_math_sinh("8L5UIMH6FF");
test_math_sinh(7.104591377061156e+307);
test_math_sinh("BDD5H9T");
test_math_sinh("KN7U97PKE");
test_math_sinh(1.1928852926114034e+308);
test_math_sinh(1.1324640379874908e+308);
test_math_sinh(1.3355852973287851e+308);
test_math_sinh("OZD");
test_math_sinh("B2LAN");
test_math_sinh("JGA");
test_math_sinh("D6TCJK5Y");
test_math_sinh(-693);
test_math_sinh(1.9337099371940094e+307);
test_math_sinh(8.517623635172426e+307);
test_math_sinh(8.673588860699549e+307);
test_math_sinh("KVFS");
test_math_sinh(-797);
test_math_sinh(-853);
test_math_sinh(-99);
test_math_sinh("83L");
test_math_sinh(-869);
test_math_sinh(1.140723911570384e+308);
test_math_sinh(1.8529575446532293e+307);
test_math_sinh("6SY2ALHH");
test_math_sinh(7.232279837735273e+307);
test_math_sinh("ASMQXV3");
test_math_sinh(-813);
test_math_sinh(-609);
test_math_sinh(1.0421527320047207e+308);
test_math_sinh(1.7044179850861722e+307);
test_math_sinh(7.102132080559827e+307);
test_math_sinh(2.9460736931525915e+307);
test_math_sinh("FBY5");
test_math_sinh("3P5F3VEE");
test_math_sinh(6.918077548565616e+307);
test_math_sinh(-403);
test_math_sinh("597");
test_math_sinh(1.512766853120579e+308);
test_math_sinh(9.48802143249738e+307);
test_math_sinh(-29);
test_math_sinh("FPMD4X3");
test_math_sinh("WP2J");
test_math_sinh(-863);
test_math_sinh(-795);
test_math_sinh(-867);
test_math_sinh(5.044975351032698e+307);
test_math_sinh(1.5484783910805036e+308);
test_math_sinh("FAWJLEB8CG");
test_math_sinh("2X384");
test_math_sinh(6.250192799142533e+307);
test_math_sinh(7.884337158192765e+307);
test_math_sinh("R44");
test_math_sinh(6.065818618384716e+307);
test_math_sinh(1.0824733678936259e+308);
test_math_sinh(1.1456113975199586e+308);
test_math_sinh("2NJUXIO");
test_math_sinh(1.7636876711460061e+308);
test_math_sinh(-353);
test_math_sinh("7EKS2J");
test_math_sinh(4.1718286688392615e+306);
test_math_sinh(5.897650716502063e+307);
test_math_sinh(-215);
test_math_sinh(-3);
test_math_sinh("FB2JU376EP");
test_math_sinh("8T1OAQJS");
test_math_sinh(3.9912374755490115e+307);
test_math_sinh(6.261049082929388e+307);
test_math_sinh(5.748754927759769e+306);
test_math_sinh("HFIIT32");
test_math_sinh("WATNF");
test_math_sinh("R4TVTCLTH");
test_math_sinh(-481);
test_math_sinh(-117);
test_math_sinh(1.556905952629096e+308);
test_math_sinh(-419);
test_math_sinh("GKT1OF53");
test_math_sinh(7.978506554531345e+307);
test_math_sinh(-703);
test_math_sinh(2.035018442445835e+307);
test_math_sinh(1.5758707433694112e+308);
test_math_sinh("NCDK");
test_math_sinh("AXM");
test_math_sinh("I56VJ");
test_math_sinh(2.393515562416538e+307);
test_math_sinh(1.3202498051987481e+308);
test_math_sinh(2.1819657488138957e+307);
test_math_sinh(-249);
test_math_sinh("070");
test_math_sinh(7.939969400479206e+307);
test_math_sinh(-431);
test_math_sinh("8763");
test_math_sinh(-773);
test_math_sinh(4.638238237709351e+307);
test_math_sinh(-279);
test_math_sinh(-845);
test_math_sinh(-57);
test_math_sinh(2.133119950386098e+307);
test_math_sinh("7KDBLSDT9X");
test_math_sinh(1.2357688605349978e+308);
test_math_sinh("5M0F15");
test_math_sinh(-705);
test_math_sinh("DDMS60");
test_math_sinh("CTSJ73C");
test_math_sinh("Q2PXWYW");
test_math_sinh(6.14616962656066e+307);
test_math_sinh(-185);
test_math_sinh(4.321722098886086e+307);
test_math_sinh(1.3918819218723516e+308);
test_math_sinh(-335);
test_math_sinh(-133);
test_math_sinh(-829);
test_math_sinh(9.591076699944225e+307);
test_math_sinh("S3J");
test_math_sinh(-995);
test_math_sinh(6.493894701297022e+307);
test_math_sinh("NB8UF58O");
test_math_sinh(-711);
test_math_sinh("TL07");
test_math_sinh("XO03V2");
test_math_sinh(1.5483668219225826e+307);
test_math_sinh(5.323348415161543e+307);
test_math_sinh("79E");
test_math_sinh(4.766001080786561e+307);
test_math_sinh(8.172477821881974e+307);
test_math_sinh(1.5053464027135864e+308);
test_math_sinh(-941);
test_math_sinh(-371);
test_math_sinh(7.15595880441272e+307);
test_math_sinh("E5R5N4I");
test_math_sinh("4X9BHEWK");
test_math_sinh("G7W");
test_math_sinh("1LN5U6");
test_math_sinh(4.656437347854084e+307);
test_math_sinh(2.5953093209503856e+307);
test_math_sinh(3.1071517265903346e+307);
test_math_sinh(9.34680078220723e+307);
test_math_sinh(-385);
test_math_sinh(5.300225594990519e+307);
test_math_sinh(-655);
test_math_sinh(1.4222546789357617e+308);
test_math_sinh("XEA6");
test_math_sinh(-379);
test_math_sinh(5.451419244671782e+307);
test_math_sinh("76292H");
test_math_sinh(8.16819134786416e+307);
test_math_sinh(9.46786941467007e+307);
test_math_sinh(-633);
test_math_sinh(5.141429032286769e+307);
test_math_sinh(-809);
test_math_sinh(-293);
test_math_sinh(-697);
test_math_sinh("P4FLOCX");
test_math_sinh(4.2210529842791433e+307);
test_math_sinh(2.354404357070168e+307);
test_math_sinh(-67);
test_math_sinh("HEP0VT");
test_math_sinh(-539);
test_math_sinh("E40Z");
test_math_sinh(8.0788757159956e+307);
test_math_sinh(-291);
test_math_sinh(5.059531763198467e+307);
test_math_sinh("WAQXTDNT");
test_math_sinh("AT4");
test_math_sinh(1.6107959387403884e+308);
test_math_sinh("GM0LJR");
test_math_sinh(5.743427597983433e+307);
test_math_sinh(-15);
test_math_sinh(-167);
test_math_sinh("SWOT");
test_math_sinh(-441);
test_math_sinh(4.822029797305807e+307);
test_math_sinh(1.206130655041749e+308);
test_math_sinh(2.3967072165634717e+307);
test_math_sinh("P37Q4SKV5");
test_math_sinh(1.6193783842146543e+308);
test_math_sinh("8U7L");
test_math_sinh(7.937838026083085e+306);
test_math_sinh("FIJZXQK69");
test_math_sinh(-859);
test_math_sinh(-745);
test_math_sinh(-875);
test_math_sinh("QRU");
test_math_sinh("CI1UMV2CAH");
test_math_sinh("0MQDRGJ");
test_math_sinh("MUWG");
test_math_sinh("RNGW0DQ1I5");
test_math_sinh("WJFXK7OVZ");
test_math_sinh("VN0V2LWYZF");
test_math_sinh(-641);
test_math_sinh(1.7417277614389762e+308);
test_math_sinh("K44JOGNT");
test_math_sinh(1.0804935775530781e+308);
test_math_sinh(-253);
test_math_sinh("ZTNGILA7NU");
test_math_sinh(6.738935209553339e+307);
test_math_sinh(-81);
test_math_sinh("ZZCN3O");
test_math_sinh("6HAQT");
test_math_sinh("18I0");
test_math_sinh(7.349698740417977e+307);
test_math_sinh(-961);
test_math_sinh("VCJP2T3Q");
test_math_sinh("966N0X37");
test_math_sinh("AOS26");
test_math_sinh(-685);
test_math_sinh("B0C089");
test_math_sinh(4.955640251555383e+307);
test_math_sinh(8.594390457215442e+306);
test_math_sinh(1.5165771602218694e+308);
test_math_sinh("GIH4PN1V7");
test_math_sinh("W57");
test_math_sinh("NSPH98C2Z");
test_math_sinh(2.6680959903721096e+307);
test_math_sinh(8.070136185308816e+307);
test_math_sinh(8.803409118226717e+306);
test_math_sinh("2UCCP");
test_math_sinh(2.3620555449020285e+307);
test_math_sinh(-109);
test_math_sinh(-217);
test_math_sinh("SHFH8U");
test_math_sinh(1.3523041405416583e+308);
test_math_sinh(668);
test_math_sinh(-837);
test_math_sinh(-389);
test_math_sinh(-777);
test_math_sinh(8.32328766498565e+307);
test_math_sinh(9.970353358301656e+307);
test_math_sinh(6.048710826524688e+307);
test_math_sinh(6.937605361391803e+307);
test_math_sinh(2.7715383575991583e+307);
test_math_sinh(3.6589994294218713e+307);
test_math_sinh(-33);
test_math_sinh(-555);
test_math_sinh("D3NY41");
test_math_sinh(-47);
test_math_sinh("46SC8BDEQE");
test_math_sinh("Z0HJG6AKM");
test_math_sinh(-313);
test_math_sinh("X7RIH");
test_math_sinh(-939);
test_math_sinh(-449);
test_math_sinh("3IGPQC40D");
test_math_sinh("2U1T96");
test_math_sinh(-607);
test_math_sinh("T4F");
test_math_sinh(1.0426559735006652e+308);
test_math_sinh(5.468667340984452e+306);
test_math_sinh(1.4053799526152748e+308);
test_math_sinh(7.165402764374123e+307);
test_math_sinh(3.5429229738732654e+307);
test_math_sinh(4.897582666372001e+307);
test_math_sinh(-361);
test_math_sinh(4.956869645920418e+307);
test_math_sinh(-101);
test_math_sinh("MWNVFZS");
test_math_sinh("XCNNFYDJ");
test_math_sinh(7.918434422818199e+307);
test_math_sinh("ZC2PI");
test_math_sinh(-245);
test_math_sinh(1.4977531162607338e+308);
test_math_sinh(-415);
test_math_sinh(-295);
test_math_sinh(2.1706812653556323e+307);
test_math_sinh(-537);
test_math_sinh("G390JP1KNP");
test_math_sinh("611P77B3");
test_math_sinh("3BZ7M");
test_math_sinh("0NLY7");
test_math_sinh(1.5886694037204882e+308);
test_math_sinh("UYI2C");
test_math_sinh("V92G");
test_math_sinh(6.037469263947977e+307);
test_math_sinh("ERM");
test_math_sinh(-723);
test_math_sinh("391I8");
test_math_sinh(5.079076545737311e+307);
test_math_sinh(3.812592566007054e+307);
test_math_sinh(5.596530239485554e+307);
test_math_sinh(1.4291934089488489e+308);
test_math_sinh("0E1XC2K3");
test_math_sinh(1.3614729074180122e+308);
test_math_sinh(1.762074964408624e+308);
test_math_sinh(1.1737581227174434e+308);
test_math_sinh(4.05931423758494e+307);
test_math_sinh("KR1012SMOZ");
test_math_sinh(-11);
test_math_sinh(6.862601949664369e+307);
test_math_sinh(6.023026534266781e+307);
test_math_sinh(-617);
test_math_sinh(-121);
test_math_sinh(-677);
test_math_sinh(1.5192486982671754e+308);
test_math_sinh("N0TI7VG");
test_math_sinh(-783);
test_math_sinh("ZID8H");
test_math_sinh(-433);
test_math_sinh(-865);
test_math_sinh(-407);
test_math_sinh(1.2274759607899838e+308);
test_math_sinh(2.3096262589542384e+307);
test_math_sinh("QQWE6");
test_math_sinh(-247);
test_math_sinh("VH2MYYPH9");
test_math_sinh("YM6U");
test_math_sinh(-581);
test_math_sinh(-223);
test_math_sinh(-383);
test_math_sinh("WMDHFJ7");
test_math_sinh(-637);
test_math_sinh(1.406739024835902e+307);
test_math_sinh("8Y4B9ZVT5I");
test_math_sinh(6.31895099163286e+307);
test_math_sinh(1.4835909265671274e+308);
test_math_sinh(1.0045614750558878e+308);
test_math_sinh(-195);
test_math_sinh("2JSXTL4Q");
test_math_sinh(1.3705575356824092e+308);
test_math_sinh("QEFL");
test_math_sinh(2.157289265588485e+307);
test_math_sinh(1.4494920009446406e+308);
test_math_sinh("DQYRCATS");
test_math_sinh("GT1LIEEXH5");
test_math_sinh(1.156029523873002e+308);
test_math_sinh(2.47214439864819e+307);
test_math_sinh(-113);
test_math_sinh("1SWW3AA");
test_math_sinh("IJVP");
test_math_sinh(1.0018769068731106e+308);
test_math_sinh(8.244498282590222e+307);
test_math_sinh("UZL6H570TR");
test_math_sinh("URRTGO37X");
test_math_sinh(-201);
test_math_sinh(6.450337477315694e+307);
test_math_sinh("DJUGF5LF");
test_math_sinh(-327);
test_math_sinh("1LTGU19");
test_math_sinh("GNWO");
test_math_sinh("JQ7M");
test_math_sinh(1.020308807908621e+308);
test_math_sinh(-647);
test_math_sinh(1.6540200815029752e+308);
test_math_sinh(7.171254654165992e+307);
test_math_sinh(3.542746479054771e+307);
test_math_sinh(5.303605597488797e+307);
test_math_sinh("GRHL9NC5KC");
test_math_sinh(5.882336793272526e+307);
test_math_sinh("C5F9NJDWP6");
test_math_sinh(1.5793289597819268e+308);
test_math_sinh("VITGMTY45K");
test_math_sinh(-951);
test_math_sinh(8.583662112360735e+307);
test_math_sinh(5.550553962237142e+306);
test_math_sinh("945KER");
test_math_sinh(1.138130138079425e+308);
test_math_sinh(-427);
test_math_sinh(5.288902794156999e+307);
test_math_sinh(2.619355550390615e+307);
test_math_sinh(-785);
test_math_sinh(1.479604484193798e+308);
test_math_sinh(7.732223014297768e+307);
test_math_sinh(3.555821145738134e+307);
test_math_sinh("7SJKRM");
test_math_sinh("7P2Z2RAWY");
test_math_sinh("H6N5L");
test_math_sinh("PLVS");
test_math_sinh(-23);
test_math_sinh("H16");
test_math_sinh(1.7216117600483903e+307);
test_math_sinh(1.5437248123919047e+308);
test_math_sinh("Y6R7D89RL7");
test_math_sinh(-309);
test_math_sinh(1.4624716910359928e+308);
test_math_sinh("IERDM");
test_math_sinh("3N1");
test_math_sinh(-317);
test_math_sinh(-765);
test_math_sinh("J9P");
test_math_sinh(7.521308341159757e+307);
test_math_sinh(-731);
test_math_sinh(1.4529397092037599e+308);
test_math_sinh("LGJ3Z4RY4");
test_math_sinh(1.2400183658340356e+308);
test_math_sinh(1.6805892529326918e+308);
test_math_sinh("UX6K");
test_math_sinh("9D4");
test_math_sinh(-531);
test_math_sinh("CMLNKHD");
test_math_sinh("W12");
test_math_sinh("DERT8F");
test_math_sinh(1.5268575112978617e+308);
test_math_sinh(1.2802509353847032e+308);
test_math_sinh(5.834788305210101e+307);
test_math_sinh("5KJBLBSCL");
test_math_sinh("U15");
test_math_sinh(7.567074021798812e+307);
test_math_sinh(1.2545664853991122e+306);
test_math_sinh(-519);
test_math_sinh("SI4R1");
test_math_sinh(1.4082122785690386e+308);
test_math_sinh("2MJBWUV");
test_math_sinh(1.2897916926714745e+308);
test_math_sinh(1.408802267564917e+308);
test_math_sinh(-187);
test_math_sinh("KCS7O");
test_math_sinh(6.38241983292926e+307);
test_math_sinh("CCKE");
test_math_sinh("GZCEKXGI8V");
test_math_sinh("CT3UZUZH");
test_math_sinh(-933);
test_math_sinh("52J3");
test_math_sinh(-545);
test_math_sinh(-331);
test_math_sinh("75FNF0MS6L");
test_math_sinh(1.3793445890182305e+308);
test_math_sinh(7.675777348041767e+307);
test_math_sinh(-349);
test_math_sinh(-97);
test_math_sinh(2.3840374375750945e+307);
test_math_sinh(-721);
test_math_sinh("6A9O");
test_math_sinh(4.4253057881168425e+307);
test_math_sinh("3VYG1BWN");
test_math_sinh(6.811963920548633e+307);
test_math_sinh("S3LJWW9XS");
test_math_sinh(7.771081332540992e+307);
test_math_sinh(8.775605863276345e+306);
test_math_sinh(-65);
test_math_sinh(6.114966828448345e+307);
test_math_sinh(-579);
test_math_sinh(4.526748625302707e+307);
test_math_sinh(-485);
test_math_sinh("REYZ");
test_math_sinh("U9Y24R47K");
test_math_sinh("9KORTK");
test_math_sinh("DRJF");
test_math_sinh(1.4995680262975453e+308);
test_math_sinh(-339);
test_math_sinh("YVQY4E24KE");
test_math_sinh("2B4UM03XO");
test_math_sinh(-901);
test_math_sinh(3.1730593333710946e+307);
test_math_sinh(-553);
test_math_sinh(9.046033731822734e+307);
test_math_sinh(1.7878430332780242e+308);
test_math_sinh("YQKKEVA0AQ");
test_math_sinh(6.100717415915841e+307);
test_math_sinh("8K76DE8");
test_math_sinh(1.3180487420472782e+308);
test_math_sinh(8.101170927137315e+307);
test_math_sinh(-145);
test_math_sinh("54762I2");
test_math_sinh(-613);
test_math_sinh(2.272189465208172e+307);
test_math_sinh(2.495095722570654e+307);
test_math_sinh("26V2RAIOK");
test_math_sinh(8.407377968324476e+307);
test_math_sinh("CP3VYQ2");
test_math_sinh(6.953966365865108e+307);
test_math_sinh("D3R33B4");
test_math_sinh("572SC4YR");
test_math_sinh(1.2716809552384062e+308);
test_math_sinh(1.2279190482755396e+308);
test_math_sinh("TMWJKPPD");
test_math_sinh(1.223881324605798e+308);
test_math_sinh("7YW2QIJ");
test_math_sinh("T74XB7CYIS");
test_math_sinh(-459);
test_math_sinh(-985);
test_math_sinh("88N9");
test_math_sinh(3.2615624399641065e+307);
test_math_sinh(6.755540016253805e+307);
test_math_sinh(-683);
test_math_sinh("RB61JHK7KQ");
test_math_sinh(-993);
test_math_sinh("BWF52WEQXV");
test_math_sinh(1.0438119077648335e+308);
test_math_sinh(-515);
test_math_sinh(-231);
test_math_sinh("4OBDJY");
test_math_sinh("CG69R0W");
test_math_sinh(-457);
test_math_sinh("VHDTGZ");
test_math_sinh(1.7006875188928883e+308);
test_math_sinh(-807);
test_math_sinh("E3SV38O");
test_math_sinh(-5);
test_math_sinh("62QE");
test_math_sinh(4.5232883744735956e+305);
test_math_sinh(1.0344067248306573e+308);
test_math_sinh(1.477151315514885e+308);
test_math_sinh(1.7212044155624267e+308);
test_math_sinh("AGVCE7M");
test_math_sinh(1.5805167565996948e+308);
test_math_sinh(1.1604110305582405e+308);
test_math_sinh(1.7056597783556614e+308);
test_math_sinh(-983);
test_math_sinh("RVA26NM");
test_math_sinh("DREZD");
test_math_sinh("2S3C9");
test_math_sinh("DPEKJ496CS");
test_math_sinh("0VHFS20VJZ");
test_math_sinh(1.1108111140820428e+308);
test_math_sinh(6.563684295349865e+307);
test_math_sinh("I9E1HA1NX");
test_math_sinh("6P4Q7");
test_math_sinh("DC1URMJ9Q7");
test_math_sinh("Q89X");
test_math_sinh("WUPE");
test_math_sinh(-793);
test_math_sinh(-771);
test_math_sinh(1.7421277280792437e+307);
test_math_sinh(-443);
test_math_sinh(1.1461157910581932e+308);
test_math_sinh("7V08Q");
test_math_sinh(1.4806533347101288e+307);
test_math_sinh("9S9I");
test_math_sinh("JNJDO");
test_math_sinh(-147);
test_math_sinh(1.638737534457102e+308);
test_math_sinh(-981);
test_math_sinh(1.4105076706408084e+308);
test_math_sinh(1.364359606805591e+308);
test_math_sinh(-205);
test_math_sinh("9UWP6");
test_math_sinh(1.4728904994002652e+308);
test_math_sinh("68SBZ");
test_math_sinh("665SV7A");
test_math_sinh("BYJPR");
test_math_sinh("3FTE4K71");
test_math_sinh("OD56EKA");
test_math_sinh(-871);
test_math_sinh(1.3408906413876318e+308);
test_math_sinh("YRRRY");
test_math_sinh(1.7470031131198537e+308);
test_math_sinh("2S9LL3PZF8");
test_math_sinh(1.7610610810959768e+308);
test_math_sinh(260);
test_math_sinh(-77);
test_math_sinh(1.2161035763005258e+307);
test_math_sinh("EANA");
test_math_sinh(1.6328558096270812e+308);
test_math_sinh(-591);
test_math_sinh(7.623274415992341e+307);
test_math_sinh(-999);
test_math_sinh(1.5090189987322063e+308);
test_math_sinh(-653);
test_math_sinh("NFSKPT");
test_math_sinh("TR4O");
test_math_sinh("2FNXCVF6");
test_math_sinh(8.810044657785652e+307);
test_math_sinh(1.7145136110776478e+308);
test_math_sinh("XGV");
test_math_sinh("HOWPU11");
test_math_sinh(-463);
test_math_sinh(500);
test_math_sinh("KXTS0W3C");
test_math_sinh("4DI4");
test_math_sinh("7DZZ187CK");
test_math_sinh(-241);
test_math_sinh("36KG5UE");
test_math_sinh("TS27DQPE");
test_math_sinh(3.9845866804242086e+307);
test_math_sinh(-227);
test_math_sinh(3.6945181940829047e+307);
test_math_sinh("U1U");
test_math_sinh(6.981782715322024e+307);
test_math_sinh("PUFAWXCNWJ");
test_math_sinh(-287);
test_math_sinh("OFWZMFO");
test_math_sinh("GT36A3");
test_math_sinh("YGIN9BNQN");
test_math_sinh(1.2086052507581e+308);
test_math_sinh(-753);
test_math_sinh(-175);
test_math_sinh(1.262002245543244e+308);
test_math_sinh(-135);
test_math_sinh(1.7101694045865994e+308);
test_math_sinh("9PV8");
test_math_sinh(3.0591944268978787e+307);
test_math_sinh(1.1241371720963846e+308);
test_math_sinh("W8BF35");
test_math_sinh(1.1332710974672362e+308);
test_math_sinh(5.69691412440703e+307);
test_math_sinh("U02DRGPE4");
test_math_sinh(6.754082520164707e+307);
test_math_sinh(1.3607548393938205e+308);
test_math_sinh(2.752419124358368e+307);
test_math_sinh("KGWNBF2");
test_math_sinh(-263);
test_math_sinh("JVL");
test_math_sinh("0UO1");
test_math_sinh(4.779950342045715e+307);
test_math_sinh(1.4913182315152256e+308);
test_math_sinh(4.974595808531757e+307);
test_math_sinh(1.1577496316109268e+308);
test_math_sinh(1.6776482342254305e+308);
test_math_sinh(5.894427488295143e+307);
test_math_sinh("ETC");
test_math_sinh("JVJ7VH6");
test_math_sinh("I9BIV5XZ9B");
test_math_sinh(1.5279157655401643e+308);
test_math_sinh(7.192883678791545e+306);
test_math_sinh(3.22342772418212e+307);
test_math_sinh(5.545758006456887e+307);
test_math_sinh(9.832803825633358e+307);
test_math_sinh(9.922362360958227e+307);
test_math_sinh("56ZJML7E");
test_math_sinh(5.098128972420296e+307);
test_math_sinh(-915);
test_math_sinh("9LEA223");
test_math_sinh(4.993718611046245e+306);
test_math_sinh(-821);
test_math_sinh(1.0354876541724722e+308);
test_math_sinh(-321);
test_math_sinh("T0204MU");
test_math_sinh(-791);
test_math_sinh("YF9A3VMS");
test_math_sinh("ORSE");
test_math_sinh("CNAUX4S6GB");
test_math_sinh(-833);
test_math_sinh(7.547031547244259e+307);
test_math_sinh(-883);
test_math_sinh(1.0124184258299375e+308);
test_math_sinh("X6D732GMG");
test_math_sinh("MS52SLO");
test_math_sinh("L3AEXG7O1");
test_math_sinh("OQ6O");
test_math_sinh(7.20945913844981e+307);
test_math_sinh("5V92I22Z");
test_math_sinh("IC64EXMOE");
test_math_sinh("W5U8");
test_math_sinh("L2CY6Q");
test_math_sinh(1.4472277358112353e+308);
test_math_sinh("ZAX");
test_math_sinh(1.7804190683692667e+308);
test_math_sinh(-909);
test_math_sinh(1.2332642366854135e+308);
test_math_sinh(-83);
test_math_sinh("RGR1");
test_math_sinh(-73);
test_math_sinh(2.5094589809217177e+307);
test_math_sinh(1.7056673490386899e+308);
test_math_sinh(1.193343384019114e+308);
test_math_sinh("2MAMLE3");
test_math_sinh("LBPX");
test_math_sinh(1.4952833523666896e+308);
test_math_sinh(1.0924066663936557e+308);
test_math_sinh(-959);
test_math_sinh(-839);
test_math_sinh("TIMT7T");
test_math_sinh(-487);
test_math_sinh(1.1483558883782566e+308);
test_math_sinh(1.4856579320859064e+308);
test_math_sinh(9.999771669755835e+307);
test_math_sinh(1.0913155581448013e+308);
test_math_sinh("M5BTL3DW");
test_math_sinh(-895);
test_math_sinh("PNGFVYBAE");
test_math_sinh("P59B1F8");
test_math_sinh("QPQ060");
test_math_sinh(1.7238220687866994e+308);
test_math_sinh("GIIHPEFE7");
test_math_sinh(1.7109685354658573e+308);
test_math_sinh("44A78LWACK");
test_math_sinh(2.675395844970093e+307);
test_math_sinh(-597);
test_math_sinh("PU8Q");
test_math_sinh(1.4237949483282368e+308);
test_math_sinh(1.7532881017198553e+307);
test_math_sinh(-701);
test_math_sinh("3FJV5JMH");
test_math_sinh(1.7475532207328186e+307);
test_math_sinh("G7HK");
test_math_sinh("0KV");
test_math_sinh(1.1952148979871352e+308);
test_math_sinh(-53);
test_math_sinh(1.3345986160517575e+308);
test_math_sinh(-257);
test_math_sinh(1.7267857667363957e+308);
test_math_sinh(1.5025000322007826e+308);
test_math_sinh("PLW");
test_math_sinh(1.3337735427030231e+307);
test_math_sinh(7.926438290417306e+307);
test_math_sinh("4M491");
test_math_sinh(1.9981782876430652e+307);
test_math_sinh(-889);
test_math_sinh("SE3UMU");
test_math_sinh(8.272251028179857e+307);
test_math_sinh(4.1794168876763916e+307);
test_math_sinh("HE33AZ3");
test_math_sinh("H9XM");
test_math_sinh("6WS");
test_math_sinh(8.429785695818888e+307);
test_math_sinh(1.2966137940739115e+308);
test_math_sinh(-799);
test_math_sinh("IPH8");
test_math_sinh(9.276990352870297e+307);
test_math_sinh("U8W4");
test_math_sinh("HCC9WX6");
test_math_sinh(7.633993596091009e+307);
test_math_sinh("WACRUUO");
test_math_sinh(1.1800701290198593e+308);
test_math_sinh("IYR6L9VY");
test_math_sinh(-191);
test_math_sinh("2XSH4GL");
test_math_sinh("FP4OA");
test_math_sinh(9.959516191115298e+306);
test_math_sinh(8.233096084344906e+307);
test_math_sinh("HD1EUIZ1S8");
test_math_sinh(6.315309375032241e+307);
test_math_sinh("CTVTI5KPJ");
test_math_sinh("KSJTFF");
test_math_sinh(-341);
test_math_sinh("KUPQDJ");
test_math_sinh(1.2112373977252012e+308);
test_math_sinh("Z471");
test_math_sinh(8.095522313214889e+307);
test_math_sinh(1.0506520150811729e+308);
test_math_sinh(3.5141426734500824e+306);
test_math_sinh(-667);
test_math_sinh("767E");
test_math_sinh(1.4361803234580294e+308);
test_math_sinh("NYGM");
test_math_sinh("992XZ3ETM");
test_math_sinh("9CFGRV");
test_math_sinh(6.33384195083502e+307);
test_math_sinh(1.7311127733049725e+307);
test_math_sinh("WNZM");
test_math_sinh("Z0PN");
test_math_sinh(3.0843332105404877e+307);
test_math_sinh(1.6995877890521447e+308);
test_math_sinh("O1Z04S");
test_math_sinh(-277);
test_math_sinh(-229);
test_math_sinh("A6NI");
test_math_sinh("V6AU0H");
test_math_sinh(5.188148704050565e+307);
test_math_sinh("LXZ6");
test_math_sinh(5.149383619757511e+307);
test_math_sinh(5.2353747987251e+307);
test_math_sinh(-775);
test_math_sinh("D7SR");
test_math_sinh("LOFU4");
test_math_sinh(-525);
test_math_sinh(-225);
test_math_sinh(-17);
test_math_sinh(1.036322567210006e+308);
test_math_sinh(1.3607934936431226e+308);
test_math_sinh(1.0944567823924857e+308);
test_math_sinh(-181);
test_math_sinh("306N67N");
test_math_sinh("3XRD");
test_math_sinh(1.5539832553866922e+308);
test_math_sinh(-917);
test_math_sinh(9.564660861652147e+307);
test_math_sinh("7OZBLF7R3I");
test_math_sinh("VCC");
test_math_sinh(1.6438502790238204e+308);
