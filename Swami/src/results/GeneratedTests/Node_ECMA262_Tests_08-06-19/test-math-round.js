/*
* This file is automatically generated by Swami
*
* 2019-08-06 12:35:06.131717
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
function test_math_round(x){
	if (Object.is( x,NaN )){
		var output = Math.round(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.round(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === - 0 )){
		var output = Math.round(x);
		assert.strictEqual(- 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === + Infinity )){
		var output = Math.round(x);
		assert.strictEqual(+ Infinity, output);
		console.log("Good Test");
		return;
		}
	if (( x === - Infinity )){
		var output = Math.round(x);
		assert.strictEqual(- Infinity, output);
		console.log("Good Test");
		return;
		}
	if (( x > 0 && x < 0.5 )){
		var output = Math.round(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
	if (( x < 0 && x >=  - 0.5 )){
		var output = Math.round(x);
		assert.strictEqual(- 0, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}



/*TESTS GENERATED AUTOMATICALLY*/
test_math_round(/ab+c/);
test_math_round(/\r\n|\r|\n/);
test_math_round(7.150013139200129e+307);
test_math_round(3.715356083972156e+307);
test_math_round(9.459711681070886e+307);
test_math_round(/[^.]+/);
test_math_round(1.364385977111568e+308);
test_math_round(1.7872789028494035e+308);
test_math_round("NTDREH50");
test_math_round(-551);
test_math_round("TU0");
test_math_round("QSFDRL5");
test_math_round(true);
test_math_round(1.0829804338423965e+308);
test_math_round(false);
test_math_round(-0);
test_math_round("7GI8IE2O");
test_math_round(5.397766531590323e+307);
test_math_round(null);
test_math_round("NMR");
test_math_round(-805);
test_math_round(/[\u0400-\u04FF]+/g);
test_math_round("S3AVKVR9OE");
test_math_round("S7J");
test_math_round(Infinity);
test_math_round(/yes.*day/);
test_math_round(/yes[^]*day/);
test_math_round(-905);
test_math_round("T9TMJA9F");
test_math_round(-451);
test_math_round(7.09718032320048e+307);
test_math_round(1.1715900295413916e+308);
test_math_round("LV5445J8L8");
test_math_round("OUSUDGY49");
test_math_round("Z4ELUOIRAU");
test_math_round("QNPVZT");
test_math_round("1WPQ2NJCF9");
test_math_round(1.0966182431885327e+308);
test_math_round(-911);
test_math_round("ZF5ZVLM6");
test_math_round(-531);
test_math_round(-559);
test_math_round("VY2TWUUC5");
test_math_round(1.1257376386577916e+306);
test_math_round(-749);
test_math_round(7.191314451590378e+307);
test_math_round(1.3090818512867306e+308);
test_math_round(undefined);
test_math_round(1.3739626130520077e+308);
test_math_round(-421);
test_math_round(/foo/g);
test_math_round("41QOJXS");
test_math_round(-605);
test_math_round(1.0441610009291332e+308);
test_math_round(7.383858261407691e+307);
test_math_round(1.0052809370704225e+308);
test_math_round("L53S8473X8");
test_math_round("Y7AYBYKKZJ");
test_math_round("KO8N8B3O43");
test_math_round("QBC1O");
test_math_round(-19);
test_math_round(/(\w+)\s(\w+)/);
test_math_round(-779);
test_math_round(1.1176050990225781e+308);
test_math_round(-159);
test_math_round(1.1034160697761374e+308);
test_math_round(1.64744850012797e+307);
test_math_round(1.4085911004068506e+308);
test_math_round("XV6ZE");
test_math_round("H3UTBCW3");
test_math_round(-17);
test_math_round("TOMY3YMB");
test_math_round("RATY5N3W");
test_math_round("UO7PA5S");
test_math_round("EU29LJ");
test_math_round(-275);
test_math_round("KM8");
test_math_round(NaN);
test_math_round("AMWME2Q3JX");
test_math_round(-123);
test_math_round(5.219726055582515e+307);
test_math_round(+0);
test_math_round("F09");
test_math_round("2Q6");
test_math_round(-969);
test_math_round("LWT9");
test_math_round(6.412975679262642e+307);
test_math_round(2.516841919117917e+307);
test_math_round(1.4771102755752874e+308);
test_math_round("B7P");
test_math_round(-313);
test_math_round(1.7300507145077492e+308);
test_math_round(-141);
test_math_round("ULLG3D4KE4");
test_math_round(-483);
test_math_round("SFMTCFWC");
test_math_round("VKK");
test_math_round(-243);
test_math_round(2.216595974415935e+307);
test_math_round(1.6236806570244607e+308);
test_math_round("3VMDP2FZ");
test_math_round("RVA2RLTJ2");
test_math_round(-903);
test_math_round("02Y0");
test_math_round(2.8308396522357905e+307);
test_math_round(-753);
test_math_round(1.7339297938868249e+308);
test_math_round(6.33772942714236e+307);
test_math_round("38GY");
test_math_round(1.5789941013069421e+308);
test_math_round(1.7730843959051993e+307);
test_math_round(3.601303252390336e+307);
test_math_round(-597);
test_math_round(-897);
test_math_round(-843);
test_math_round("F0K9KI3YP");
test_math_round(1.3794537702284248e+308);
test_math_round(-395);
test_math_round(-755);
test_math_round(4.3616329032203857e+307);
test_math_round(-207);
test_math_round(1.6228791337863802e+308);
test_math_round(-45);
test_math_round(6.343846352470239e+307);
test_math_round(4.898706805833859e+307);
test_math_round(-705);
test_math_round("DLORGAVIFH");
test_math_round("6V1L73MA0");
test_math_round(-691);
test_math_round(-345);
test_math_round(-139);
test_math_round("212ILHH1CU");
test_math_round(-125);
test_math_round(1.5283615310054205e+308);
test_math_round(7.543267347902687e+307);
test_math_round("8L5UIMH6FF");
test_math_round(1.1414572708714252e+308);
test_math_round("G8JK");
test_math_round("KN7U97PKE");
test_math_round(1.1928852926114034e+308);
test_math_round(1.7005520644456872e+308);
test_math_round(1.3355852973287851e+308);
test_math_round("OZD");
test_math_round("B2LAN");
test_math_round("JGA");
test_math_round("D6TCJK5Y");
test_math_round(-693);
test_math_round(1.1027994212658048e+308);
test_math_round(8.517623635172426e+307);
test_math_round(1.6407814831786273e+306);
test_math_round("KVFS");
test_math_round(-469);
test_math_round(-853);
test_math_round(-99);
test_math_round("65VI9YKMT4");
test_math_round(-909);
test_math_round(1.140723911570384e+308);
test_math_round(1.8529575446532293e+307);
test_math_round("HFSWU");
test_math_round(1.3285133671856115e+308);
test_math_round("ASMQXV3");
test_math_round(-831);
test_math_round(-85);
test_math_round(1.1243057430947974e+308);
test_math_round(1.7044179850861722e+307);
test_math_round(7.102132080559827e+307);
test_math_round(2.9460736931525915e+307);
test_math_round("NYUT");
test_math_round("3P5F3VEE");
test_math_round(6.918077548565616e+307);
test_math_round(-403);
test_math_round("8B87");
test_math_round(1.512766853120579e+308);
test_math_round(9.48802143249738e+307);
test_math_round(-527);
test_math_round("FPMD4X3");
test_math_round("WP2J");
test_math_round(-861);
test_math_round(-925);
test_math_round(-867);
test_math_round(5.044975351032698e+307);
test_math_round(1.5484783910805036e+308);
test_math_round("6MJT7");
test_math_round("2X384");
test_math_round(1.4108565071701082e+308);
test_math_round(7.884337158192765e+307);
test_math_round("R44");
test_math_round(6.065818618384716e+307);
test_math_round(1.0824733678936259e+308);
test_math_round(1.1456113975199586e+308);
test_math_round("RP43UHW");
test_math_round(9.808453108132193e+307);
test_math_round(-353);
test_math_round("7EKS2J");
test_math_round(7.908533286851855e+307);
test_math_round(9.94455277732072e+307);
test_math_round(-979);
test_math_round(-791);
test_math_round("FB2JU376EP");
test_math_round("8T1OAQJS");
test_math_round(-453);
test_math_round(3.9912374755490115e+307);
test_math_round(1.316793628670382e+308);
test_math_round(-113);
test_math_round(3.885269755706578e+307);
test_math_round("HFIIT32");
test_math_round("WATNF");
test_math_round("R4TVTCLTH");
test_math_round(-213);
test_math_round(1.556905952629096e+308);
test_math_round(-349);
test_math_round("GKT1OF53");
test_math_round(7.978506554531345e+307);
test_math_round(-891);
test_math_round(2.035018442445835e+307);
test_math_round(1.5758707433694112e+308);
test_math_round("NCDK");
test_math_round("AJPJ38DI1");
test_math_round("I56VJ");
test_math_round(2.393515562416538e+307);
test_math_round(1.2198394960553886e+308);
test_math_round(2.1819657488138957e+307);
test_math_round(-249);
test_math_round("NV7ADUR0B6");
test_math_round(1.674857387293924e+308);
test_math_round(-431);
test_math_round("8763");
test_math_round(-773);
test_math_round(4.638238237709351e+307);
test_math_round(-645);
test_math_round(-333);
test_math_round(1.7123687818037157e+307);
test_math_round("7KDBLSDT9X");
test_math_round(1.2357688605349978e+308);
test_math_round("985FQS9OBD");
test_math_round("NNFFW");
test_math_round("CTSJ73C");
test_math_round("MPAQAWUME");
test_math_round(3.216353264990326e+307);
test_math_round(-185);
test_math_round(4.321722098886086e+307);
test_math_round(1.3820757679278478e+308);
test_math_round(-11);
test_math_round(-133);
test_math_round(-829);
test_math_round(9.591076699944225e+307);
test_math_round("UD6J2D");
test_math_round(-995);
test_math_round(6.493894701297022e+307);
test_math_round("NB8UF58O");
test_math_round(-381);
test_math_round(-523);
test_math_round("TL07");
test_math_round("XO03V2");
test_math_round(1.233620662040747e+308);
test_math_round(1.2689186018961498e+308);
test_math_round("I9NEPTAMP");
test_math_round(-577);
test_math_round(4.766001080786561e+307);
test_math_round(8.172477821881974e+307);
test_math_round(1.5053464027135864e+308);
test_math_round(-983);
test_math_round(-301);
test_math_round(1.6944175627738444e+308);
test_math_round("E5R5N4I");
test_math_round(-817);
test_math_round("4X9BHEWK");
test_math_round("FHVKBLP");
test_math_round("G4RLIKAD");
test_math_round(4.656437347854084e+307);
test_math_round(2.5953093209503856e+307);
test_math_round(-921);
test_math_round(-151);
test_math_round(3.1071517265903346e+307);
test_math_round(9.34680078220723e+307);
test_math_round(-211);
test_math_round(5.300225594990519e+307);
test_math_round(-655);
test_math_round(1.4222546789357617e+308);
test_math_round("XEA6");
test_math_round(-723);
test_math_round(5.451419244671782e+307);
test_math_round("76292H");
test_math_round(8.16819134786416e+307);
test_math_round(9.46786941467007e+307);
test_math_round(-633);
test_math_round(5.141429032286769e+307);
test_math_round(-293);
test_math_round(-697);
test_math_round("P4FLOCX");
test_math_round(7.263973770139048e+307);
test_math_round(5.117432723810553e+307);
test_math_round(-565);
test_math_round("HEP0VT");
test_math_round(-539);
test_math_round("E40Z");
test_math_round(4.1871058836760544e+306);
test_math_round(-291);
test_math_round(5.059531763198467e+307);
test_math_round("WAQXTDNT");
test_math_round("JG2RAF4FS5");
test_math_round(9.817760046933877e+307);
test_math_round("GM0LJR");
test_math_round(1.4998149146988877e+308);
test_math_round(-15);
test_math_round(-257);
test_math_round("SWOT");
test_math_round(-441);
test_math_round(4.822029797305807e+307);
test_math_round(1.206130655041749e+308);
test_math_round(2.3967072165634717e+307);
test_math_round("YJRE");
test_math_round(1.6193783842146543e+308);
test_math_round("8U7L");
test_math_round(7.937838026083085e+306);
test_math_round("FIJZXQK69");
test_math_round(-859);
test_math_round(-129);
test_math_round(-875);
test_math_round("AI3JDH");
test_math_round("EVZJ565");
test_math_round("3U5WUX");
test_math_round("WH5C3GV38");
test_math_round("ATV0D7KSA");
test_math_round("WJFXK7OVZ");
test_math_round("EP43VKHV");
test_math_round(-101);
test_math_round(1.7417277614389762e+308);
test_math_round("MQXK322K4");
test_math_round(1.0804935775530781e+308);
test_math_round(-253);
test_math_round("ZTNGILA7NU");
test_math_round(6.738935209553339e+307);
test_math_round(-81);
test_math_round("IHJL37AQRX");
test_math_round("0RL");
test_math_round("18I0");
test_math_round(7.349698740417977e+307);
test_math_round(-813);
test_math_round("VCJP2T3Q");
test_math_round("CEPK");
test_math_round("AOS26");
test_math_round(-685);
test_math_round("B0C089");
test_math_round(4.955640251555383e+307);
test_math_round(8.594390457215442e+306);
test_math_round(1.5165771602218694e+308);
test_math_round("GIH4PN1V7");
test_math_round("W57");
test_math_round("NSPH98C2Z");
test_math_round(2.6680959903721096e+307);
test_math_round(8.070136185308816e+307);
test_math_round(1.392195959901635e+308);
test_math_round("2UCCP");
test_math_round(2.3620555449020285e+307);
test_math_round(-109);
test_math_round(-751);
test_math_round("SHFH8U");
test_math_round(1.0872465363099525e+308);
test_math_round(668);
test_math_round(-389);
test_math_round(-777);
test_math_round(-445);
test_math_round(8.32328766498565e+307);
test_math_round(2.34364350207903e+307);
test_math_round(1.750427168660281e+308);
test_math_round(-957);
test_math_round(6.937605361391803e+307);
test_math_round(2.7715383575991583e+307);
test_math_round(1.5530335408494016e+308);
test_math_round(-255);
test_math_round(-555);
test_math_round("D3NY41");
test_math_round(-47);
test_math_round("46SC8BDEQE");
test_math_round("Z0HJG6AKM");
test_math_round("XV8");
test_math_round(-939);
test_math_round(-449);
test_math_round("3IGPQC40D");
test_math_round("VNM251K");
test_math_round(-607);
test_math_round("T4F");
test_math_round(1.0426559735006652e+308);
test_math_round(5.468667340984452e+306);
test_math_round(1.4053799526152748e+308);
test_math_round(2.418998730988234e+307);
test_math_round(3.5429229738732654e+307);
test_math_round(4.897582666372001e+307);
test_math_round(-361);
test_math_round(4.956869645920418e+307);
test_math_round("MWNVFZS");
test_math_round("GSWN");
test_math_round(7.918434422818199e+307);
test_math_round("ZC2PI");
test_math_round(-927);
test_math_round(-245);
test_math_round(1.082658325643212e+308);
test_math_round(-53);
test_math_round(-343);
test_math_round(-415);
test_math_round(-295);
test_math_round(2.1706812653556323e+307);
test_math_round(-537);
test_math_round("G390JP1KNP");
test_math_round("611P77B3");
test_math_round("MHRO");
test_math_round("N4IZ0ZFC");
test_math_round(1.5886694037204882e+308);
test_math_round("UYI2C");
test_math_round("0MUB42XUV");
test_math_round(6.037469263947977e+307);
test_math_round("ERM");
test_math_round("391I8");
test_math_round(5.079076545737311e+307);
test_math_round(8.155412399349025e+307);
test_math_round(5.596530239485554e+307);
test_math_round(1.4291934089488489e+308);
test_math_round("0E1XC2K3");
test_math_round(1.3614729074180122e+308);
test_math_round(1.272888115379928e+308);
test_math_round(1.1737581227174434e+308);
test_math_round(1.4323222235721704e+308);
test_math_round("S80GWOLNM");
test_math_round(9.401318567074577e+307);
test_math_round(6.023026534266781e+307);
test_math_round(-617);
test_math_round(-763);
test_math_round(-677);
test_math_round(1.5168580002702008e+308);
test_math_round("N0TI7VG");
test_math_round(-783);
test_math_round("T15E68XJ6N");
test_math_round(-433);
test_math_round(-865);
test_math_round(-407);
test_math_round(1.2274759607899838e+308);
test_math_round(2.3096262589542384e+307);
test_math_round("QQWE6");
test_math_round(-387);
test_math_round("86O0D4C");
test_math_round("YM6U");
test_math_round(-383);
test_math_round(-707);
test_math_round("WMDHFJ7");
test_math_round(-33);
test_math_round(8.33933184232707e+307);
test_math_round("3CL5V556OP");
test_math_round(6.31895099163286e+307);
test_math_round(-797);
test_math_round(1.4835909265671274e+308);
test_math_round(1.7626089317199005e+308);
test_math_round(-195);
test_math_round("TCQ5RSYCX");
test_math_round(1.3705575356824092e+308);
test_math_round("QWYHRBIG2");
test_math_round(2.157289265588485e+307);
test_math_round(1.4494920009446406e+308);
test_math_round("LOUP9J");
test_math_round("GT1LIEEXH5");
test_math_round(1.156029523873002e+308);
test_math_round(8.570427681483337e+307);
test_math_round("0EFVKP1JZ");
test_math_round("IJVP");
test_math_round(4.1387060022474975e+307);
test_math_round(8.244498282590222e+307);
test_math_round("UZL6H570TR");
test_math_round("URRTGO37X");
test_math_round(-573);
test_math_round(6.450337477315694e+307);
test_math_round("DJUGF5LF");
test_math_round(-327);
test_math_round("7EB69SJ");
test_math_round("81M9248");
test_math_round("0RSNT5LYS");
test_math_round(1.020308807908621e+308);
test_math_round(-803);
test_math_round(2.839014606236277e+307);
test_math_round(7.171254654165992e+307);
test_math_round(3.542746479054771e+307);
test_math_round(5.303605597488797e+307);
test_math_round("GRHL9NC5KC");
test_math_round(5.882336793272526e+307);
test_math_round("C5F9NJDWP6");
test_math_round(1.5793289597819268e+308);
test_math_round("5GE1K5PI");
test_math_round(-951);
test_math_round(8.583662112360735e+307);
test_math_round(5.550553962237142e+306);
test_math_round("945KER");
test_math_round(1.138130138079425e+308);
test_math_round(-427);
test_math_round(5.288902794156999e+307);
test_math_round(2.619355550390615e+307);
test_math_round(-785);
test_math_round(1.4862034498072674e+308);
test_math_round(7.732223014297768e+307);
test_math_round(3.555821145738134e+307);
test_math_round("7SJKRM");
test_math_round("7P2Z2RAWY");
test_math_round("H6N5L");
test_math_round("PLVS");
test_math_round(-571);
test_math_round("H16");
test_math_round(1.7216117600483903e+307);
test_math_round(-457);
test_math_round(2.4662510139434283e+307);
test_math_round("Y6R7D89RL7");
test_math_round(-309);
test_math_round(1.4624716910359928e+308);
test_math_round("IERDM");
test_math_round("TI74DTQT");
test_math_round(-317);
test_math_round(-765);
test_math_round("N7JT");
test_math_round(7.521308341159757e+307);
test_math_round(5.653715276268086e+307);
test_math_round("LGJ3Z4RY4");
test_math_round(1.2400183658340356e+308);
test_math_round(1.6805892529326918e+308);
test_math_round("UX6K");
test_math_round("9D4");
test_math_round("7FT");
test_math_round("W12");
test_math_round(-227);
test_math_round("DERT8F");
test_math_round(4.60211923376567e+307);
test_math_round(1.2802509353847032e+308);
test_math_round(5.834788305210101e+307);
test_math_round("5KJBLBSCL");
test_math_round("U15");
test_math_round(7.567074021798812e+307);
test_math_round(1.2545664853991122e+306);
test_math_round(-519);
test_math_round("08WDYN2VB");
test_math_round(1.0836914946304983e+308);
test_math_round(-435);
test_math_round("2MJBWUV");
test_math_round(1.2897916926714745e+308);
test_math_round(1.408802267564917e+308);
test_math_round(-187);
test_math_round("KCS7O");
test_math_round(-339);
test_math_round(6.38241983292926e+307);
test_math_round("CCKE");
test_math_round("8CLGRH8");
test_math_round("CT3UZUZH");
test_math_round("52J3");
test_math_round(-545);
test_math_round(-331);
test_math_round("P5QKNRC8X1");
test_math_round(3.173916164284771e+307);
test_math_round(1.0401741010079514e+308);
test_math_round(-97);
test_math_round(2.3840374375750945e+307);
test_math_round(-883);
test_math_round("3PDOX51");
test_math_round(4.4253057881168425e+307);
test_math_round("3VYG1BWN");
test_math_round(6.071403923262992e+307);
test_math_round("I7M8");
test_math_round(7.771081332540992e+307);
test_math_round(9.435110660994868e+307);
test_math_round(6.114966828448345e+307);
test_math_round(-579);
test_math_round(-529);
test_math_round(1.2159069480244222e+308);
test_math_round(-485);
test_math_round("VN0V2LWYZF");
test_math_round("AKB5R");
test_math_round("9KORTK");
test_math_round("DRJF");
test_math_round(1.4995680262975453e+308);
test_math_round("YVQY4E24KE");
test_math_round("2B4UM03XO");
test_math_round(-901);
test_math_round(7.607588332887732e+307);
test_math_round(-287);
test_math_round(9.046033731822734e+307);
test_math_round(-325);
test_math_round(1.7878430332780242e+308);
test_math_round("YQKKEVA0AQ");
test_math_round(6.100717415915841e+307);
test_math_round("8K76DE8");
test_math_round(1.3180487420472782e+308);
test_math_round(8.101170927137315e+307);
test_math_round(-145);
test_math_round("X2OPKIYC");
test_math_round(-613);
test_math_round(2.272189465208172e+307);
test_math_round(2.495095722570654e+307);
test_math_round("26V2RAIOK");
test_math_round(-121);
test_math_round(8.407377968324476e+307);
test_math_round("CP3VYQ2");
test_math_round(7.147852197612375e+307);
test_math_round("D3R33B4");
test_math_round("572SC4YR");
test_math_round(8.180057403706529e+307);
test_math_round(1.2279190482755396e+308);
test_math_round(-535);
test_math_round(-247);
test_math_round("9YD5HYHPE");
test_math_round(1.1935530443560618e+308);
test_math_round("7YW2QIJ");
test_math_round("T74XB7CYIS");
test_math_round(-459);
test_math_round("88N9");
test_math_round(3.2615624399641065e+307);
test_math_round(1.7384089955288485e+308);
test_math_round(-201);
test_math_round("RB61JHK7KQ");
test_math_round(-993);
test_math_round("BWF52WEQXV");
test_math_round(1.0438119077648335e+308);
test_math_round(-515);
test_math_round(-231);
test_math_round("4OBDJY");
test_math_round("CG69R0W");
test_math_round("Z1FB1");
test_math_round(1.3486866783132142e+308);
test_math_round(-541);
test_math_round("E3SV38O");
test_math_round(-5);
test_math_round("62QE");
test_math_round(4.5232883744735956e+305);
test_math_round(4.2400053773270597e+307);
test_math_round(1.477151315514885e+308);
test_math_round(1.7212044155624267e+308);
test_math_round(-731);
test_math_round("AGVCE7M");
test_math_round(1.5805167565996948e+308);
test_math_round(1.1604110305582405e+308);
test_math_round(1.7056597783556614e+308);
test_math_round(-511);
test_math_round("9K9UK");
test_math_round("DREZD");
test_math_round("2S3C9");
test_math_round("DPEKJ496CS");
test_math_round("0VHFS20VJZ");
test_math_round(7.585687803225774e+307);
test_math_round(9.291356928595799e+307);
test_math_round("I9E1HA1NX");
test_math_round("6P4Q7");
test_math_round(-997);
test_math_round("JFFZ");
test_math_round("2QK4J");
test_math_round("WUPE");
test_math_round(-663);
test_math_round(-251);
test_math_round(1.3625964890297848e+308);
test_math_round(-443);
test_math_round(1.1461157910581932e+308);
test_math_round("00ORWPGR2B");
test_math_round(1.4806533347101288e+307);
test_math_round("9S9I");
test_math_round("MCJ0J5BF");
test_math_round(-147);
test_math_round(7.224072013138282e+307);
test_math_round(8.596046073579106e+307);
test_math_round(1.364359606805591e+308);
test_math_round(-205);
test_math_round("CI4PY");
test_math_round(-471);
test_math_round(-863);
test_math_round(1.4728904994002652e+308);
test_math_round("2COG6TE46");
test_math_round("665SV7A");
test_math_round("CMD06G74YL");
test_math_round("3FTE4K71");
test_math_round("OD56EKA");
test_math_round(-871);
test_math_round(1.3408906413876318e+308);
test_math_round("YRRRY");
test_math_round(1.7470031131198537e+308);
test_math_round("1GAZMH3F94");
test_math_round(1.7610610810959768e+308);
test_math_round(260);
test_math_round(8.712492136380304e+307);
test_math_round(3.6300700493821583e+307);
test_math_round("JMNANPD");
test_math_round(1.6328558096270812e+308);
test_math_round(-57);
test_math_round(7.623274415992341e+307);
test_math_round(-837);
test_math_round(-999);
test_math_round(1.5090189987322063e+308);
test_math_round(-653);
test_math_round("NFSKPT");
test_math_round("TR4O");
test_math_round("5PWIO3IN");
test_math_round(1.1365009706821291e+308);
test_math_round(1.7145136110776478e+308);
test_math_round(-869);
test_math_round("XGV");
test_math_round("HOWPU11");
test_math_round(-463);
test_math_round(500);
test_math_round("KXTS0W3C");
test_math_round(-781);
test_math_round(-439);
test_math_round("4DI4");
test_math_round("HXH");
test_math_round("36KG5UE");
test_math_round("TS27DQPE");
test_math_round(1.0748212471935926e+308);
test_math_round(3.6945181940829047e+307);
test_math_round("U1U");
test_math_round(1.007253870615393e+308);
test_math_round("PUFAWXCNWJ");
test_math_round("OFWZMFO");
test_math_round("GT36A3");
test_math_round("YGIN9BNQN");
test_math_round(1.2086052507581e+308);
test_math_round(-175);
test_math_round(1.4400500427097138e+308);
test_math_round(1.7101694045865994e+308);
test_math_round("9PV8");
test_math_round(3.0591944268978787e+307);
test_math_round(1.0110513973718735e+308);
test_math_round("W8BF35");
test_math_round(1.1332710974672362e+308);
test_math_round(7.924200176066514e+307);
test_math_round("U02DRGPE4");
test_math_round(1.2940646893294644e+308);
test_math_round(1.1821266892263086e+308);
test_math_round(2.752419124358368e+307);
test_math_round("IXMAKR9NK1");
test_math_round(-771);
test_math_round(-263);
test_math_round("JVL");
test_math_round("SQUZCR");
test_math_round(2.1257712592936221e+307);
test_math_round(5.031293682713427e+307);
test_math_round(6.753989686339906e+307);
test_math_round(1.1577496316109268e+308);
test_math_round(-561);
test_math_round(1.6776482342254305e+308);
test_math_round(-553);
test_math_round(5.894427488295143e+307);
test_math_round("ETC");
test_math_round("Z6WZD2KDDC");
test_math_round("I9BIV5XZ9B");
test_math_round(1.3929643933871234e+308);
test_math_round(7.192883678791545e+306);
test_math_round(3.22342772418212e+307);
test_math_round(5.545758006456887e+307);
test_math_round(9.832803825633358e+307);
test_math_round(9.922362360958227e+307);
test_math_round(-611);
test_math_round("56ZJML7E");
test_math_round(1.197932296750838e+308);
test_math_round("9LEA223");
test_math_round(6.853031007142216e+307);
test_math_round(-821);
test_math_round(-933);
test_math_round(1.0354876541724722e+308);
test_math_round(-377);
test_math_round("T0204MU");
test_math_round("YF9A3VMS");
test_math_round("KF04I9");
test_math_round("9YVH2IYJF7");
test_math_round(-833);
test_math_round(1.7816275009659625e+308);
test_math_round(-77);
test_math_round(3.2036805532948126e+307);
test_math_round("OMEZU5");
test_math_round("MS52SLO");
test_math_round("L3AEXG7O1");
test_math_round(-767);
test_math_round("T18NBI2S");
test_math_round(7.20945913844981e+307);
test_math_round("5V92I22Z");
test_math_round("5MPB9M");
test_math_round("TECHZX");
test_math_round(-217);
test_math_round("6NBN5");
test_math_round(-885);
test_math_round(7.209194437250066e+307);
test_math_round("JRYCL");
test_math_round(2.593891340343196e+307);
test_math_round(1.2332642366854135e+308);
test_math_round(-83);
test_math_round("YEPDOWY");
test_math_round(-745);
test_math_round(6.281230796502448e+307);
test_math_round(1.7056673490386899e+308);
test_math_round(1.193343384019114e+308);
test_math_round("2MAMLE3");
test_math_round("LBPX");
test_math_round(-9);
test_math_round(1.4952833523666896e+308);
test_math_round(1.0924066663936557e+308);
test_math_round(-959);
test_math_round(-587);
test_math_round("R473P");
test_math_round(-487);
test_math_round(1.1732226459002557e+308);
test_math_round(1.4856579320859064e+308);
test_math_round(9.999771669755835e+307);
test_math_round(1.3631391111519062e+308);
test_math_round(-599);
test_math_round("M5BTL3DW");
test_math_round(-893);
test_math_round("WLYZ6S");
test_math_round("P59B1F8");
test_math_round("QPQ060");
test_math_round(4.605167232130916e+307);
test_math_round("GIIHPEFE7");
test_math_round(1.7109685354658573e+308);
test_math_round("5DZ1W399E");
test_math_round(1.4366256676709964e+308);
test_math_round("UALP");
test_math_round(1.4237949483282368e+308);
test_math_round(8.131313227340347e+307);
test_math_round(-701);
test_math_round("CM8");
test_math_round(1.7475532207328186e+307);
test_math_round("G7HK");
test_math_round("0KV");
test_math_round(1.1594741848144985e+308);
test_math_round(-961);
test_math_round(1.3345986160517575e+308);
test_math_round(1.7267857667363957e+308);
test_math_round(1.6876051364365528e+308);
test_math_round("XRAOO");
test_math_round(1.3337735427030231e+307);
test_math_round(7.926438290417306e+307);
test_math_round("4M491");
test_math_round(1.713279098981928e+308);
test_math_round(-595);
test_math_round("7M3760Y");
test_math_round(8.272251028179857e+307);
test_math_round(1.1933431627059294e+308);
test_math_round("1ZYSVG22D");
test_math_round("H9XM");
test_math_round("6WS");
test_math_round(8.429785695818888e+307);
test_math_round(1.138244026045296e+308);
test_math_round(-799);
test_math_round("14QZO5IV");
test_math_round(9.276990352870297e+307);
test_math_round("TWMBEZ");
test_math_round("HCC9WX6");
test_math_round(1.6475963535984101e+308);
test_math_round("WACRUUO");
test_math_round(1.1800701290198593e+308);
test_math_round("IYR6L9VY");
test_math_round(-191);
test_math_round("2XSH4GL");
test_math_round("FP4OA");
test_math_round(9.959516191115298e+306);
test_math_round(1.2953760119930875e+308);
test_math_round("50AXW5NE");
test_math_round(1.6789208072501892e+308);
test_math_round("CTVTI5KPJ");
test_math_round("CA61D");
test_math_round(-341);
test_math_round("KUPQDJ");
test_math_round(1.2112373977252012e+308);
test_math_round("Z471");
test_math_round(8.095522313214889e+307);
test_math_round(1.0506520150811729e+308);
test_math_round(3.5141426734500824e+306);
test_math_round(-667);
test_math_round("T5TLIGAME");
test_math_round(1.4361803234580294e+308);
test_math_round("4AFEN6");
test_math_round(-729);
test_math_round("992XZ3ETM");
test_math_round(-547);
test_math_round("GUDT2");
test_math_round("ETGBCJ0KH");
test_math_round(-351);
test_math_round(2.3407102813493934e+307);
test_math_round(-747);
test_math_round(1.2047750825574497e+308);
test_math_round("ACHP5CVX");
test_math_round(-229);
test_math_round("A6NI");
test_math_round("V6AU0H");
test_math_round(5.188148704050565e+307);
test_math_round("LXZ6");
test_math_round(5.149383619757511e+307);
test_math_round(5.2353747987251e+307);
test_math_round(-775);
test_math_round("D7SR");
test_math_round("LOFU4");
test_math_round(-167);
test_math_round(-411);
test_math_round(-475);
test_math_round(1.036322567210006e+308);
test_math_round(1.3607934936431226e+308);
test_math_round(8.097910981669728e+307);
test_math_round(-181);
test_math_round("306N67N");
test_math_round("3XRD");
test_math_round(1.5751004382732847e+308);
test_math_round(-917);
test_math_round(3.194595409588172e+306);
test_math_round("7OZBLF7R3I");
test_math_round("740YOEI");
test_math_round(1.6438502790238204e+308);
test_math_round(-639);
test_math_round(1.9663408169394232e+307);
test_math_round(-107);
test_math_round("VH5");
test_math_round(-759);
test_math_round(1.0392030837497536e+308);
test_math_round("EAM");
test_math_round(-683);
test_math_round(8.451122107635512e+307);
test_math_round(-267);
test_math_round(8.447068897516402e+307);
test_math_round(-845);
test_math_round("UYQDEEF");
test_math_round(8.54519900166213e+307);
test_math_round(3.314763453074585e+307);
test_math_round(-465);
test_math_round(-593);
test_math_round("MG8BMMNA4");
test_math_round(-807);
test_math_round(-975);
test_math_round("6RIKRM22XS");
test_math_round(9.149430916444872e+307);
test_math_round(1.298077433707981e+308);
test_math_round("HQI");
test_math_round("X4BMVQ");
test_math_round("Q3YX");
test_math_round("56LZ");
test_math_round(2.6529026785945344e+307);
test_math_round("DTHEC");
test_math_round(3.973429866670011e+307);
test_math_round(-757);
test_math_round(-461);
test_math_round("LMB910Z4E");
test_math_round(-183);
test_math_round(6.782244030692413e+307);
test_math_round("GZUN4MBZQI");
test_math_round(7.16599743660217e+307);
test_math_round(7.116318769155781e+307);
test_math_round("IPQHO");
test_math_round(1.347834623991767e+308);
test_math_round(-363);
test_math_round("610O");
test_math_round(1.1858498246471156e+308);
test_math_round(-419);
test_math_round(1.7412591130997494e+308);
test_math_round(-369);
test_math_round(-521);
test_math_round("2Q7YG");
test_math_round("TM37U");
test_math_round("FPIGGHT6");
test_math_round("QZO2O");
test_math_round(-413);
test_math_round(1.4750939045031881e+308);
test_math_round(-965);
test_math_round(7.848852047186676e+307);
test_math_round("SR5");
test_math_round(1.4382137785010415e+308);
test_math_round(2.2173084403263147e+307);
test_math_round(-819);
test_math_round(1.2840106542906042e+308);
test_math_round(1.8748125204741428e+307);
test_math_round("22ICT");
test_math_round("N6Y6MPV");
test_math_round(7.115588327747144e+307);
test_math_round(1.2098475033591066e+308);
test_math_round("42EDQ");
test_math_round("EE13IX5T2U");
test_math_round("60YPZIF");
test_math_round("FMVMS0QFGQ");
test_math_round(1.5389855177952632e+308);
test_math_round("ZLCE");
test_math_round("WWGM8EA47");
test_math_round(-203);
test_math_round(-629);
test_math_round(1.3756098449078382e+307);
test_math_round("ZAE");
test_math_round(6.896427532073382e+306);
test_math_round(1.360270712258142e+308);
test_math_round(1.2965359934286282e+308);
test_math_round(1.0456925612534536e+308);
test_math_round("XZ6YSFEE");
test_math_round(-87);
test_math_round(4.4712239031673165e+306);
test_math_round("HBD8GHYK");
test_math_round("FONC");
test_math_round(1.2769100917381313e+308);
test_math_round("9A2FL380Y");
test_math_round(2.1807809208516853e+307);
test_math_round(1.635846014134514e+308);
test_math_round("HFZP3WZ");
test_math_round(6.366330935579687e+307);
test_math_round("0N5IED");
test_math_round(3.1490047357879234e+307);
test_math_round(1.6671247533941865e+308);
test_math_round("M6KHKS1C");
test_math_round(1.6562059908224962e+308);
test_math_round(-735);
