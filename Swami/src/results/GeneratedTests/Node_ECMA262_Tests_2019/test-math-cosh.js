/*
* This file is automatically generated by Swami
*
* 2019-08-08 15:38:07.695287
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
function test_math_cosh(x){
	if (Object.is( x,NaN )){
		var output = Math.cosh(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.cosh(x);
		assert.strictEqual(1, output);
		console.log("Good Test");
		return;
		}
	if (( x === - 0 )){
		var output = Math.cosh(x);
		assert.strictEqual(1, output);
		console.log("Good Test");
		return;
		}
	if (( x === + Infinity )){
		var output = Math.cosh(x);
		assert.strictEqual(+ Infinity, output);
		console.log("Good Test");
		return;
		}
	if (( x === - Infinity )){
		var output = Math.cosh(x);
		assert.strictEqual(+ Infinity, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}



/*TESTS GENERATED AUTOMATICALLY*/
test_math_cosh(false);
test_math_cosh(true);
test_math_cosh("Q0X6A");
test_math_cosh("E61");
test_math_cosh(/yes[^]*day/);
test_math_cosh(NaN);
test_math_cosh(1.1143633295529327e+308);
test_math_cosh(-429);
test_math_cosh(1.6117332285350867e+308);
test_math_cosh("04JPW");
test_math_cosh(1.1648417818038623e+308);
test_math_cosh(-595);
test_math_cosh("NR508O4V");
test_math_cosh(/\r\n|\r|\n/);
test_math_cosh(3.3634455117525053e+306);
test_math_cosh(null);
test_math_cosh(+0);
test_math_cosh(-607);
test_math_cosh(1.4386650099043797e+308);
test_math_cosh(1.8547974092251715e+307);
test_math_cosh(/[^.]+/);
test_math_cosh(-401);
test_math_cosh("KUFZ6J2VLP");
test_math_cosh(-0);
test_math_cosh(4.874161914926562e+307);
test_math_cosh("SL10UQXX");
test_math_cosh(1.43861346975098e+308);
test_math_cosh("AAY6SJOG");
test_math_cosh(/(\w+)\s(\w+)/);
test_math_cosh("DUYXNA");
test_math_cosh("4B5QAC");
test_math_cosh("8VC1KU5GCP");
test_math_cosh(2.0606729060313883e+307);
test_math_cosh(2.295293832013508e+307);
test_math_cosh(/[\u0400-\u04FF]+/g);
test_math_cosh(1.7801915245916705e+308);
test_math_cosh("TLVTY");
test_math_cosh(/yes.*day/);
test_math_cosh(-717);
test_math_cosh(Infinity);
test_math_cosh(1.2878778898608988e+308);
test_math_cosh(-213);
test_math_cosh("FXNKQQE3");
test_math_cosh("M9X3N1X9");
test_math_cosh(1.4625984947912198e+308);
test_math_cosh("0QEQ");
test_math_cosh(undefined);
test_math_cosh(1.7049339974831543e+307);
test_math_cosh("SKWJ");
test_math_cosh("VDSEO");
test_math_cosh(/ab+c/);
test_math_cosh("R4QI");
test_math_cosh("KZ6V7INXDJ");
test_math_cosh(-3);
test_math_cosh("HR8ZW7");
test_math_cosh(-593);
test_math_cosh(1.6548827405195173e+307);
test_math_cosh(7.744192401931356e+307);
test_math_cosh(1.6546076916833003e+308);
test_math_cosh("91O4VM");
test_math_cosh(1.3717445564875268e+308);
test_math_cosh("II4R7");
test_math_cosh(1.528099393585772e+308);
test_math_cosh(-727);
test_math_cosh("RECEP5L9SV");
test_math_cosh(1.46448014451935e+308);
test_math_cosh(1.6995665866902308e+308);
test_math_cosh(3.9048417475522514e+307);
test_math_cosh(8.895659894550497e+307);
test_math_cosh(1.2216467739825283e+308);
test_math_cosh(-385);
test_math_cosh(5.478831571906317e+307);
test_math_cosh(1.5377051528555117e+308);
test_math_cosh(9.182927687414566e+307);
test_math_cosh("2VERSC5");
test_math_cosh("CIBD4A0");
test_math_cosh("OMTWJBM");
test_math_cosh(-919);
test_math_cosh(8.09267705386301e+307);
test_math_cosh(/foo/g);
test_math_cosh(8.458187474624322e+307);
test_math_cosh("9L175A8");
test_math_cosh(-125);
test_math_cosh(1.6815116793547002e+308);
test_math_cosh(3.9734857484529323e+307);
test_math_cosh(-495);
test_math_cosh(1.1629371304993582e+307);
test_math_cosh(-791);
test_math_cosh(-615);
test_math_cosh("G4IEDR48Q");
test_math_cosh(9.095382932030793e+307);
test_math_cosh("V74");
test_math_cosh("CI0HAW6HD");
test_math_cosh("JCJ9");
test_math_cosh(3.7539565596336366e+307);
test_math_cosh("BKDHFGQ");
test_math_cosh(-849);
test_math_cosh("ED7JCO");
test_math_cosh("NL94N");
test_math_cosh("CDGEA5OOG5");
test_math_cosh("XF38YXAEW");
test_math_cosh(1.5174718550320162e+308);
test_math_cosh(-879);
test_math_cosh("Z3UF");
test_math_cosh("0R4WZW6U61");
test_math_cosh(1.352884479317614e+308);
test_math_cosh("N9DPXZZS6");
test_math_cosh(-587);
test_math_cosh("7XKX0BWD3O");
test_math_cosh(-877);
test_math_cosh(6.660193388679399e+307);
test_math_cosh(9.074784101136832e+307);
test_math_cosh(-253);
test_math_cosh(1.2675378689989525e+308);
test_math_cosh(-127);
test_math_cosh(-69);
test_math_cosh(-893);
test_math_cosh("X0I2CG0H9");
test_math_cosh(1.393331605563133e+308);
test_math_cosh("NAIRG6SO");
test_math_cosh(-509);
test_math_cosh("IVQCZ85");
test_math_cosh("6HQRRNO59A");
test_math_cosh(1.672495689458827e+308);
test_math_cosh(-667);
test_math_cosh("A5O2G2C");
test_math_cosh(-73);
test_math_cosh(-621);
test_math_cosh(-503);
test_math_cosh(-299);
test_math_cosh(-199);
test_math_cosh(4.487876741928351e+307);
test_math_cosh(-729);
test_math_cosh(1.368130249205856e+308);
test_math_cosh(6.046882681385159e+307);
test_math_cosh(-143);
test_math_cosh(1.1630248915505169e+308);
test_math_cosh("A18AO2P7DN");
test_math_cosh(-853);
test_math_cosh(-731);
test_math_cosh(-521);
test_math_cosh(6.684714643710812e+307);
test_math_cosh(1.7496914672926289e+308);
test_math_cosh(-161);
test_math_cosh(-499);
test_math_cosh(7.538893822717667e+307);
test_math_cosh(2.1130843744138438e+307);
test_math_cosh("DH7");
test_math_cosh("OLIYP");
test_math_cosh(6.673435714257458e+306);
test_math_cosh(-49);
test_math_cosh("BPKG56I2");
test_math_cosh(-259);
test_math_cosh(1.1867816920722066e+308);
test_math_cosh(-979);
test_math_cosh("2SYTNC");
test_math_cosh(5.819348827375957e+307);
test_math_cosh("OUO7");
test_math_cosh(1.1096578006272593e+308);
test_math_cosh(-867);
test_math_cosh(9.20710673451615e+307);
test_math_cosh("53C1HT");
test_math_cosh("VGEM5IMW");
test_math_cosh(-53);
test_math_cosh(-437);
test_math_cosh(-361);
test_math_cosh("JH927WCLNN");
test_math_cosh(9.613406918786404e+307);
test_math_cosh(-523);
test_math_cosh("9DFCG9");
test_math_cosh("KI8F710");
test_math_cosh(9.226925440140371e+306);
test_math_cosh(-857);
test_math_cosh("202ISW");
test_math_cosh(4.832641114327447e+307);
test_math_cosh("SVYGQ42");
test_math_cosh(8.493098441968923e+307);
test_math_cosh("KHDADJRSHP");
test_math_cosh("THGSSQVN");
test_math_cosh(8.298457292198742e+307);
test_math_cosh("IIZPP8");
test_math_cosh(7.283649700778216e+307);
test_math_cosh(1.3291186826000619e+308);
test_math_cosh(-297);
test_math_cosh(1.534657913236651e+307);
test_math_cosh(5.546935040615587e+307);
test_math_cosh("EFV4");
test_math_cosh(1.746486218429248e+308);
test_math_cosh(1.140923130982657e+308);
test_math_cosh("2OIQ14KYG");
test_math_cosh("06Q");
test_math_cosh("T86C");
test_math_cosh(-25);
test_math_cosh(-159);
test_math_cosh("03WT03XJFZ");
test_math_cosh(5.920310413545914e+307);
test_math_cosh("2KCMS");
test_math_cosh(-529);
test_math_cosh(4.3265541419773885e+307);
test_math_cosh("U03G");
test_math_cosh("RFMABUIOSS");
test_math_cosh(3.5567272792169004e+307);
test_math_cosh(-937);
test_math_cosh(8.569819191370776e+307);
test_math_cosh(-551);
test_math_cosh(1.3233601186329535e+308);
test_math_cosh("8IFT0");
test_math_cosh(1.3228127560737997e+308);
test_math_cosh(5.299815692643869e+307);
test_math_cosh("7CZQ");
test_math_cosh(1.2867047935416315e+307);
test_math_cosh(-711);
test_math_cosh(-739);
test_math_cosh("40BSHNNK0");
test_math_cosh(4.248579894092471e+307);
test_math_cosh("EA3W4XH9");
test_math_cosh(-605);
test_math_cosh(1.2566882050980715e+308);
test_math_cosh("GGU6JOU");
test_math_cosh(-765);
test_math_cosh("QHPUR9SB");
test_math_cosh("U3YL8FXW");
test_math_cosh("8PFYGNDFC");
test_math_cosh("FPYPYO25ZX");
test_math_cosh(-827);
test_math_cosh(-315);
test_math_cosh(5.820694708118473e+307);
test_math_cosh(-287);
test_math_cosh(-989);
test_math_cosh("JMN");
test_math_cosh("CW5J80T9CN");
test_math_cosh(-935);
test_math_cosh("3WZ5G");
test_math_cosh(1.1516185266550495e+308);
test_math_cosh(-889);
test_math_cosh(-13);
test_math_cosh(-895);
test_math_cosh(-643);
test_math_cosh(1.7566851080276914e+307);
test_math_cosh(1.2201490590606745e+308);
test_math_cosh(-317);
test_math_cosh("HXI7AJCRSU");
test_math_cosh("XQEUAFW2QS");
test_math_cosh(1.6607747294344546e+308);
test_math_cosh(-921);
test_math_cosh(5.992787628829912e+307);
test_math_cosh(-685);
test_math_cosh("GG7Z367");
test_math_cosh(-927);
test_math_cosh(-139);
test_math_cosh(-577);
test_math_cosh(-855);
test_math_cosh(3.007697729258358e+307);
test_math_cosh("1D9D5EP");
test_math_cosh(8.965351182914013e+307);
test_math_cosh("WEGT65O1M");
test_math_cosh(1.239325917704511e+308);
test_math_cosh("MG97Y");
test_math_cosh(8.314518888088057e+307);
test_math_cosh("DCD7");
test_math_cosh(1.4269384628143165e+308);
test_math_cosh(1.0219907676602189e+308);
test_math_cosh("QGQMVEJA1L");
test_math_cosh(7.519934616136025e+307);
test_math_cosh(1.4305303784377235e+308);
test_math_cosh(-929);
test_math_cosh(1.499983971397901e+308);
test_math_cosh(9.42083139436515e+307);
test_math_cosh(-611);
test_math_cosh(-389);
test_math_cosh("VZ1YK5KDY");
test_math_cosh("7W0EBNYUPN");
test_math_cosh(1.7552655185297714e+308);
test_math_cosh(1.022764519910558e+308);
test_math_cosh("P2Z6XQYC");
test_math_cosh(1.1218395021503068e+308);
test_math_cosh(-269);
test_math_cosh(-639);
test_math_cosh(-339);
test_math_cosh(1.8886858824264568e+307);
test_math_cosh(1.7429811524573156e+307);
test_math_cosh(1.2186013693315608e+308);
test_math_cosh(9.17093812799446e+307);
test_math_cosh(1.5007854273231523e+307);
test_math_cosh("N7YBK7FI");
test_math_cosh("I60CFP");
test_math_cosh("HKAQS9P3T");
test_math_cosh(4.933129766877189e+307);
test_math_cosh("SVMPOAS");
test_math_cosh("GXHS2R");
test_math_cosh(9.598785852491021e+307);
test_math_cosh("3FKF");
test_math_cosh("WLQI5");
test_math_cosh("8MR");
test_math_cosh(-459);
test_math_cosh(-811);
test_math_cosh(1.292932090991455e+308);
test_math_cosh("GA6HKGULDJ");
test_math_cosh("9L3YV");
test_math_cosh(-293);
test_math_cosh(1.2946910380589951e+308);
test_math_cosh(8.084757122517531e+307);
test_math_cosh(6.560465853323612e+307);
test_math_cosh("DPTLENOM1");
test_math_cosh("0T3");
test_math_cosh(1.1406052239955168e+308);
test_math_cosh(-533);
test_math_cosh(1.5223920923202138e+307);
test_math_cosh("94BTABI3");
test_math_cosh(1.6908547208825765e+308);
test_math_cosh("5098CJ7");
test_math_cosh(7.033247472431433e+306);
test_math_cosh("CPVGHB");
test_math_cosh(1.7963597507849954e+308);
test_math_cosh("8MPA2NYO");
test_math_cosh("5ONK");
test_math_cosh(4.41803146846366e+307);
test_math_cosh("Y4ZGN7AM");
test_math_cosh(-195);
test_math_cosh(1.0976698469359281e+308);
test_math_cosh("JZ0RQ7Q1GK");
test_math_cosh(6.156213713057506e+307);
test_math_cosh(-579);
test_math_cosh(-645);
test_math_cosh("BVEQHX");
test_math_cosh("U9PB");
test_math_cosh("RXC70SG37");
test_math_cosh("R4F0SPWJ");
test_math_cosh(3.093806168872239e+306);
test_math_cosh(-183);
test_math_cosh("6ELC");
test_math_cosh(6.047300947515206e+307);
test_math_cosh("YGNQ8M7");
test_math_cosh(-99);
test_math_cosh(1.3349025685803018e+308);
test_math_cosh("KD0RUU8");
test_math_cosh("8I7MDYS");
test_math_cosh("FA0NK5");
test_math_cosh(-311);
test_math_cosh("YKME16CSX6");
test_math_cosh(1.5208231902489078e+308);
test_math_cosh(4.419077719531267e+307);
test_math_cosh(1.6379849099705972e+308);
test_math_cosh("SIUR7Q5IIO");
test_math_cosh("C4H43PAWZ4");
test_math_cosh(4.386310331326888e+307);
test_math_cosh(1.16700999474963e+308);
test_math_cosh(1.6259256576375894e+308);
test_math_cosh(-783);
test_math_cosh("T0GU7X");
test_math_cosh("BPDKJVVRCC");
test_math_cosh(1.5374240461782038e+308);
test_math_cosh(6.202979090125592e+307);
test_math_cosh("8YU5H");
test_math_cosh(-863);
test_math_cosh(-873);
test_math_cosh(-691);
test_math_cosh("DJ7VBFZJ");
test_math_cosh("3CKOB");
test_math_cosh("9SC8BSLH");
test_math_cosh(-277);
test_math_cosh(-291);
test_math_cosh(1.2441298096697483e+308);
test_math_cosh(402);
test_math_cosh("IV06PQFZ");
test_math_cosh(-85);
test_math_cosh("0ZM");
test_math_cosh(1.2671097307257984e+308);
test_math_cosh(-743);
test_math_cosh(-467);
test_math_cosh(1.3764751800094156e+308);
test_math_cosh(7.703131346154378e+307);
test_math_cosh("M29G5G");
test_math_cosh("VUU8LK");
test_math_cosh(-103);
test_math_cosh("LYZNFT");
test_math_cosh(3.5714780586288993e+307);
test_math_cosh(3.0782302144674266e+307);
test_math_cosh("QUJ");
test_math_cosh(-707);
test_math_cosh(4.340127466567278e+307);
test_math_cosh(-347);
test_math_cosh("0SLV");
test_math_cosh(-163);
test_math_cosh(-505);
test_math_cosh(7.534203425533761e+307);
test_math_cosh(1.742322212826891e+308);
test_math_cosh(9.151409899763203e+307);
test_math_cosh(-657);
test_math_cosh("BG3");
test_math_cosh(-107);
test_math_cosh("7AS2");
test_math_cosh(876);
test_math_cosh(7.696696446873921e+307);
test_math_cosh(5.878932832895667e+307);
test_math_cosh(-697);
test_math_cosh(1.7254899465443446e+308);
test_math_cosh(6.959519960313063e+307);
test_math_cosh("D4V85T");
test_math_cosh("8KUGA5R9");
test_math_cosh(1.4483837505930347e+307);
test_math_cosh(-333);
test_math_cosh(1.745795183396978e+308);
test_math_cosh(-649);
test_math_cosh("DQI");
test_math_cosh("4XT75ORB4");
test_math_cosh("BWGRBRT8");
test_math_cosh("N9OZ0FYQV4");
test_math_cosh(1.8773125312166942e+307);
test_math_cosh("A7N04IOG");
test_math_cosh(-661);
test_math_cosh("KA869RF71U");
test_math_cosh("D13KB7EAI8");
test_math_cosh("G0O9");
test_math_cosh(1.6153251337768743e+308);
test_math_cosh("7MU");
test_math_cosh(1.6761357746183162e+308);
test_math_cosh("CEDO");
test_math_cosh("KZI");
test_math_cosh(2.815933322074032e+307);
test_math_cosh(1.4620967503006022e+308);
test_math_cosh("PH7EQ");
test_math_cosh(1.764065202233381e+308);
test_math_cosh(948);
test_math_cosh("9LH2XN");
test_math_cosh(1.2539550100793912e+308);
test_math_cosh(-885);
test_math_cosh(-211);
test_math_cosh("GLW");
test_math_cosh("P8L90");
test_math_cosh(1.464122202334807e+308);
test_math_cosh("MATPY");
test_math_cosh("HCC52L");
test_math_cosh("23OZU9");
test_math_cosh(1.1163854799919157e+308);
test_math_cosh(1.4825749288840676e+308);
test_math_cosh("5VF19B5XMR");
test_math_cosh("39TC");
test_math_cosh("LNEWQEXZR");
test_math_cosh("ZLC");
test_math_cosh("LM8");
test_math_cosh(1.6411080232972395e+308);
test_math_cosh(1.0587735955318514e+308);
test_math_cosh(1.320767747552213e+308);
test_math_cosh(-7);
test_math_cosh(-105);
test_math_cosh(-627);
test_math_cosh(7.56800953232558e+307);
test_math_cosh(1.5844348617431017e+308);
test_math_cosh(7.654171909263584e+307);
test_math_cosh(1.339502364083116e+308);
test_math_cosh(7.38309831997499e+306);
test_math_cosh(1.0827759918340046e+308);
test_math_cosh(-19);
test_math_cosh(1.5222708398257587e+308);
test_math_cosh(-71);
test_math_cosh(-847);
test_math_cosh(1.4616960535991077e+308);
test_math_cosh(6.693180055483002e+307);
test_math_cosh(-229);
test_math_cosh(1.1393540733535464e+308);
test_math_cosh(1.6727192319999315e+308);
test_math_cosh("TJEWGSQR73");
test_math_cosh(-415);
test_math_cosh(3.1289639298032863e+307);
test_math_cosh(-713);
test_math_cosh(2.5998874538666995e+307);
test_math_cosh(1.5767915491987363e+308);
test_math_cosh(1.6156084680118408e+308);
test_math_cosh("DE4324P");
test_math_cosh(1.4666926185229863e+306);
test_math_cosh(1.1267814705123145e+308);
test_math_cosh(-507);
test_math_cosh(-747);
test_math_cosh(-327);
test_math_cosh(9.470668423544963e+307);
test_math_cosh(1.631364884703227e+308);
test_math_cosh(-781);
test_math_cosh(1.294247317507723e+308);
test_math_cosh(1.703016212151813e+308);
test_math_cosh("WVLSV");
test_math_cosh(4.1291685649444085e+306);
test_math_cosh("NDKOUPVPO");
test_math_cosh("O70N23");
test_math_cosh(-245);
test_math_cosh("DUWE3O6E");
test_math_cosh("CF0");
test_math_cosh(-831);
test_math_cosh("BI01A");
test_math_cosh("JBUON");
test_math_cosh(5.129746371378527e+307);
test_math_cosh(4.798982046546567e+307);
test_math_cosh("SVE2");
test_math_cosh("0DUGO");
test_math_cosh(-11);
test_math_cosh(1.2662546761272821e+308);
test_math_cosh(-787);
test_math_cosh(8.246674255006594e+307);
test_math_cosh("KM76K");
test_math_cosh(-483);
test_math_cosh("WP273HYZ");
test_math_cosh("XGAJY47C");
test_math_cosh(1.4184752279578721e+308);
test_math_cosh(3.189847377561169e+307);
test_math_cosh("0815IO");
test_math_cosh("FZT8UJ2XI");
test_math_cosh(-427);
test_math_cosh(-995);
test_math_cosh(-809);
test_math_cosh("4BG");
test_math_cosh(-405);
test_math_cosh(6.016475493137938e+306);
test_math_cosh("AJ84BO8");
test_math_cosh(-883);
test_math_cosh(-511);
test_math_cosh("P3A7X0");
test_math_cosh(-911);
test_math_cosh(-695);
test_math_cosh(-631);
test_math_cosh(2.604143243198828e+307);
test_math_cosh("TXLSWX");
test_math_cosh("NUSYMZ6");
test_math_cosh(-807);
test_math_cosh("Y8LK23");
test_math_cosh(1.327783503939941e+308);
test_math_cosh(-803);
test_math_cosh("UVRLAJNUI");
test_math_cosh(3.010876012869982e+307);
test_math_cosh(3.0109612874453553e+307);
test_math_cosh("QS6R");
test_math_cosh(1.6782515521842849e+308);
test_math_cosh("OSURR");
test_math_cosh(3.325513918154309e+307);
test_math_cosh(1.0344590365797189e+308);
test_math_cosh(1.3435390281543444e+308);
test_math_cosh(-753);
test_math_cosh(1.6741070340692656e+308);
test_math_cosh(6.53362144663946e+307);
test_math_cosh(8.510187848065675e+307);
test_math_cosh(1.3533363364132021e+308);
test_math_cosh("49YT");
test_math_cosh("G3IYDURR");
test_math_cosh(8.96807917986464e+307);
test_math_cosh("QNPOXN");
test_math_cosh(1.4796320183266216e+308);
test_math_cosh("7U9NLRUWH");
test_math_cosh(810);
test_math_cosh(-967);
test_math_cosh("Z48R");
test_math_cosh(1.0162646296108535e+308);
test_math_cosh("61JL");
test_math_cosh(-337);
test_math_cosh(1.526470457663898e+308);
test_math_cosh(1.6624687272397614e+308);
test_math_cosh(8.476362972888211e+307);
test_math_cosh("Y8HYZINMYU");
test_math_cosh("LIFC");
test_math_cosh(1.4962600320993919e+308);
test_math_cosh(-0xF1A7);
test_math_cosh("MLMCNSY");
test_math_cosh("LH95W9W");
test_math_cosh(8.433903311252483e+307);
test_math_cosh(-179);
test_math_cosh(9.637205721020547e+307);
test_math_cosh(9.844050567333373e+307);
test_math_cosh(1.6285786111152135e+308);
test_math_cosh(2.391624592656924e+307);
test_math_cosh("3TDBF1X3");
test_math_cosh(6.093990218001638e+307);
test_math_cosh("V4QUM");
test_math_cosh(-359);
test_math_cosh("NXLRKJC21");
test_math_cosh("TP5HS");
test_math_cosh(-449);
test_math_cosh(1.0871232378522686e+308);
test_math_cosh("IJIZACIE");
test_math_cosh("JCU");
test_math_cosh(1.0816768675185575e+308);
test_math_cosh("UCU3WY4G7");
test_math_cosh(-573);
test_math_cosh(-445);
test_math_cosh("YNUICEOTF");
test_math_cosh(-963);
test_math_cosh(-257);
test_math_cosh(1.497278942471218e+308);
test_math_cosh(3.5023673854465286e+307);
test_math_cosh("NAT5RW2T");
test_math_cosh(1.2980922101622148e+308);
test_math_cosh(1.0795388229735809e+308);
test_math_cosh(-487);
test_math_cosh(-307);
test_math_cosh(1.7313922388974155e+308);
test_math_cosh(-353);
test_math_cosh("BV6B");
test_math_cosh(1.0943061114922584e+308);
test_math_cosh("HJHQLTXS6Y");
test_math_cosh("VR3X");
test_math_cosh("H9S");
test_math_cosh(-435);
test_math_cosh(-567);
test_math_cosh(-513);
test_math_cosh(2.782313496245929e+307);
test_math_cosh("DZTADPD");
test_math_cosh("P5E2W");
test_math_cosh(1.2403192763501811e+308);
test_math_cosh(-419);
test_math_cosh(6.492671573196917e+307);
test_math_cosh(6.250118617969766e+307);
test_math_cosh("EAGGF1O");
test_math_cosh(4.639429784010172e+307);
test_math_cosh(-395);
test_math_cosh(-759);
test_math_cosh(6.826094057469078e+306);
test_math_cosh(-115);
test_math_cosh(1.1362022703433815e+308);
test_math_cosh(3.057244964699961e+307);
test_math_cosh(-823);
test_math_cosh(-109);
test_math_cosh(-373);
test_math_cosh(-581);
test_math_cosh(-87);
test_math_cosh(3.9997855188218847e+307);
test_math_cosh("8IPV96E4U");
test_math_cosh(-817);
test_math_cosh("KEVIBMC");
test_math_cosh("A1M5R");
test_math_cosh("T1FDG0L22");
test_math_cosh("H4RNBL2");
test_math_cosh("IR6H6NG1AS");
test_math_cosh(1.0700696934256192e+308);
test_math_cosh(1.5283308674974271e+308);
test_math_cosh(4.259461004379069e+307);
test_math_cosh(-371);
test_math_cosh("UDILL");
test_math_cosh(1.6469357724717259e+308);
test_math_cosh("GQEXXH2");
test_math_cosh("XWHXJQ");
test_math_cosh(1.2843651838911648e+308);
test_math_cosh(1.734654301240263e+308);
test_math_cosh(9.551600658590876e+307);
test_math_cosh(1.7183736950822332e+308);
test_math_cosh("SPVYV161MJ");
test_math_cosh(-17);
test_math_cosh("5V31D");
test_math_cosh(6.124004229753056e+307);
test_math_cosh(6.283106528095508e+307);
test_math_cosh(2.2325150048923094e+307);
test_math_cosh("P85B13Z");
test_math_cosh("P0VX");
test_math_cosh("177TK8YF");
test_math_cosh(2.6143204763462633e+307);
test_math_cosh(1.727328427979522e+308);
test_math_cosh("55Z2ZW9S95");
test_math_cosh(-735);
test_math_cosh("VW71FZG994");
test_math_cosh("J51LH");
test_math_cosh("I8DPXTJI");
test_math_cosh(6.1652641861273e+307);
test_math_cosh(7.205229848223074e+307);
test_math_cosh(1.3076709864737073e+308);
test_math_cosh(-601);
test_math_cosh(5.346574845917165e+307);
test_math_cosh(7.13026171691509e+306);
test_math_cosh("SEVLUU3DPF");
test_math_cosh(2.6617109983233505e+307);
test_math_cosh(-21);
test_math_cosh(-871);
test_math_cosh(1.662071696288611e+308);
test_math_cosh("U9S7LXM");
test_math_cosh("S6NYF");
test_math_cosh(-455);
test_math_cosh(1.6924004818956845e+308);
test_math_cosh(4.957305038811618e+307);
test_math_cosh("M75S2XHK0");
test_math_cosh(-247);
test_math_cosh(2.3073354955053857e+306);
test_math_cosh(-933);
test_math_cosh("TCV8VNF7P");
test_math_cosh(-113);
test_math_cosh(-471);
test_math_cosh("MWKO59S");
test_math_cosh("NFIZX");
test_math_cosh("OU3MW201J");
test_math_cosh(-281);
test_math_cosh("642DX4B");
test_math_cosh(8.78812335319948e+306);
test_math_cosh(-795);
test_math_cosh(7.718420663719987e+307);
test_math_cosh("VMTSXFR");
test_math_cosh(-171);
test_math_cosh("LB294LSY");
test_math_cosh(-465);
test_math_cosh("51N6");
test_math_cosh("L37ATC6LH8");
test_math_cosh("R88");
test_math_cosh("E8CVZQ");
test_math_cosh(6.988530444334722e+307);
test_math_cosh(1.39976446268263e+308);
test_math_cosh("JKN35P4");
test_math_cosh(1.328735387946644e+307);
test_math_cosh("8XL");
test_math_cosh("6NC929PTNY");
test_math_cosh(1.6159477454766236e+308);
test_math_cosh(-215);
test_math_cosh("P5W");
test_math_cosh("22L15");
test_math_cosh("OJJOAJIWBG");
test_math_cosh(-547);
test_math_cosh(1.535777559156348e+308);
test_math_cosh(3.4744107574899545e+307);
test_math_cosh("XR3QIUC7");
test_math_cosh(1.4739598650031811e+308);
test_math_cosh(-93);
test_math_cosh(1.3642583039120867e+308);
test_math_cosh(2.4335450867680155e+307);
test_math_cosh("AAXX");
test_math_cosh("F94LNS5W");
test_math_cosh("W6S8VH0T1");
test_math_cosh("ZQOSF8OK1I");
test_math_cosh(1.2254781266669852e+308);
test_math_cosh(-851);
test_math_cosh(1.6663242853180439e+308);
test_math_cosh(1.1501396088232897e+308);
test_math_cosh("DSZPA0K");
test_math_cosh("WHAQZW");
test_math_cosh(6.808695808389447e+307);
test_math_cosh(1.3642877943293493e+308);
test_math_cosh(3.359226115666084e+307);
test_math_cosh(1.022967634562644e+308);
test_math_cosh(-157);
test_math_cosh(4.796725882375528e+307);
test_math_cosh("G07X");
test_math_cosh(-181);
test_math_cosh("2IRNE5I7E2");
test_math_cosh(1.552752267001258e+308);
test_math_cosh(1.6189257279266667e+308);
test_math_cosh(5.287824597666739e+307);
test_math_cosh("3BWCE");
test_math_cosh("K68C");
test_math_cosh(1.0560366411028874e+308);
test_math_cosh(1.5875265064297228e+307);
test_math_cosh(-75);
test_math_cosh(8.625737059704829e+307);
test_math_cosh("U0HNDR0YT");
test_math_cosh(-441);
test_math_cosh("MY0");
test_math_cosh(-425);
test_math_cosh(9.136383858534957e+307);
test_math_cosh("BLSA0M0VEQ");
test_math_cosh("97NL");
test_math_cosh(-95);
test_math_cosh(9.16138890452806e+307);
test_math_cosh(-561);
test_math_cosh(9.986158599497965e+307);
test_math_cosh("RTFHFKCOB7");
test_math_cosh("B5L");
test_math_cosh("UIW11XYM9");
test_math_cosh(1.2435512790827912e+308);
test_math_cosh(1.7611923102148995e+308);
test_math_cosh("8WS095H");
test_math_cosh("KZNBE");
test_math_cosh("CW9ZLD");
test_math_cosh("AOXLB77B");
test_math_cosh(6.576286619491254e+307);
test_math_cosh("00H6");
test_math_cosh("SGBVKF8K");
test_math_cosh("RLTKSTL7EQ");
test_math_cosh("GB8TEMO");
test_math_cosh("4DI4");
test_math_cosh(4.1773358752817736e+307);
test_math_cosh(1.1414745075519046e+308);
test_math_cosh(1.1215086505997722e+308);
test_math_cosh(3.669490495187367e+307);
test_math_cosh(2.4900601720249053e+307);
test_math_cosh(5.349587098241258e+307);
test_math_cosh(3.7561327385074077e+307);
test_math_cosh("XSNC");
test_math_cosh("ONM6S0");
test_math_cosh("2FM");
test_math_cosh(1.888377978262367e+307);
test_math_cosh("S48D7RT");
test_math_cosh(-947);
test_math_cosh(6.306072382964239e+307);
test_math_cosh("OV6FB");
test_math_cosh(1.9340525702584415e+306);
test_math_cosh(-527);
test_math_cosh(1.2900529898774809e+308);
test_math_cosh("OQZ8W4LNS5");
test_math_cosh(1.0869053871475615e+308);
test_math_cosh("3BKNA");
test_math_cosh(1.8159931704577638e+307);
test_math_cosh(3.815215047953719e+307);
test_math_cosh("PYYLT50");
test_math_cosh(-675);
test_math_cosh(-953);
test_math_cosh(1.324988585614061e+308);
test_math_cosh(7.7038656056829e+307);
test_math_cosh(-987);
test_math_cosh(1.3178636455941513e+308);
test_math_cosh(1.358923755825658e+308);
test_math_cosh(-83);
test_math_cosh("TBJT");
test_math_cosh("093XQOW");
test_math_cosh("W7BTX4L1W");
test_math_cosh("KCAWMXH65");
test_math_cosh(-141);
test_math_cosh("OP6LTV");
test_math_cosh(1.7061243900140065e+308);
test_math_cosh(2.0355740272846433e+307);
test_math_cosh(-917);
test_math_cosh(-197);
test_math_cosh("EZPP8OFE");
test_math_cosh("U8V");
test_math_cosh("GFFQW");
test_math_cosh(1.1419814563006483e+308);
test_math_cosh("QYJPFPGX1O");
test_math_cosh(4.4842613739708767e+307);
test_math_cosh(1.3829144230835239e+308);
test_math_cosh("IF1MKE");
test_math_cosh("X0YGGTB");
test_math_cosh("ELWY");
test_math_cosh(-647);
test_math_cosh(-407);
test_math_cosh("LO2S");
test_math_cosh(688);
test_math_cosh("HFX66EV44");
test_math_cosh("WIRJ6TEE6");
test_math_cosh(-983);
test_math_cosh(1.6542981742189912e+308);
test_math_cosh(-931);
test_math_cosh("0ZUCL3VK");
test_math_cosh("U7Y");
test_math_cosh(1.717257303129474e+308);
test_math_cosh(7.012445587841796e+307);
test_math_cosh("PZK222YF");
test_math_cosh("6QAENYX4");
test_math_cosh("6F74G");
test_math_cosh("6WW9V4JU");
test_math_cosh(8.092546426213315e+307);
test_math_cosh("URS8K4B");
test_math_cosh(1.1396160302265024e+308);
test_math_cosh(-943);
test_math_cosh(1.5580329098045871e+308);
test_math_cosh(-421);
test_math_cosh("E8TNV9R");
test_math_cosh("10ZBK");
test_math_cosh(9.80240702397674e+307);
test_math_cosh("XQDYTZW");
test_math_cosh(3.726550265974995e+307);
test_math_cosh(6.713863269993261e+307);
test_math_cosh("HBG42WOOH");
test_math_cosh("R7AE");
test_math_cosh("Q8LQ9WE7J8");
test_math_cosh(1.7583981934925935e+307);
test_math_cosh("2LL");
test_math_cosh("VG6R");
test_math_cosh(3.542140488331607e+307);
test_math_cosh("8LLL");
test_math_cosh(7.699588714181858e+307);
test_math_cosh(1.7365873867487606e+308);
test_math_cosh("KVPX8E");
test_math_cosh(-477);
test_math_cosh(-417);
test_math_cosh("SN9WVFANX");
test_math_cosh("VN7HJC8Q8S");
test_math_cosh(-859);
test_math_cosh(3.212486002924348e+307);
test_math_cosh(1.6821525267358375e+308);
test_math_cosh("KCF6KTSPCM");
test_math_cosh("F3DSYL");
test_math_cosh("OON");
test_math_cosh("T3NG");
test_math_cosh(-557);
test_math_cosh(1.463245234742677e+308);
test_math_cosh(4.661476314335119e+307);
test_math_cosh(1.1636929622602294e+307);
test_math_cosh(-439);
test_math_cosh("QUXCDZ2TW");
test_math_cosh(1.7283696747224784e+308);
test_math_cosh("H35CBLWKP");
test_math_cosh(7.757785430837673e+307);
test_math_cosh(1.664492110016716e+308);
test_math_cosh(6.333506359611561e+307);
test_math_cosh(-273);
test_math_cosh("DSGTA");
test_math_cosh(-391);
test_math_cosh("H5U54N7P1");
test_math_cosh("FYP");
test_math_cosh("RVFYA0M");
test_math_cosh(3.4131107622089084e+307);
test_math_cosh(-825);
test_math_cosh(2.446756877490632e+307);
test_math_cosh("QJFX");
test_math_cosh(1.8230796727477633e+307);
test_math_cosh(1.2675453379830954e+307);
test_math_cosh("GKIAZLHK");
test_math_cosh(998);
test_math_cosh("SDDJ9F");
test_math_cosh("NNVQYA4T46");
test_math_cosh(-673);
test_math_cosh(-843);
test_math_cosh(6.605267195419588e+307);
test_math_cosh("JWRBVAS4AV");
test_math_cosh(522);
test_math_cosh(-81);
test_math_cosh(-111);
test_math_cosh(-689);
test_math_cosh("186JQZWG");
test_math_cosh(4.664809377729548e+307);
test_math_cosh("K6M75");
test_math_cosh(-283);
test_math_cosh("R4VAXAKVD5");
test_math_cosh(1.4975321018408967e+308);
test_math_cosh("YRS");
test_math_cosh(-151);
test_math_cosh(-133);
test_math_cosh("WSE");
test_math_cosh("UNAMB7Q6");
test_math_cosh(-263);
test_math_cosh("IX73BIMR70");
test_math_cosh(-235);
test_math_cosh("GHVZNAB22");
test_math_cosh("MYPHY");
test_math_cosh("06NE7Q");
test_math_cosh(1.4975875062979498e+308);
test_math_cosh(7.747629143062746e+307);
test_math_cosh(-383);
test_math_cosh(1.5444085206707724e+308);
test_math_cosh("SGDWD0");
test_math_cosh("XTJYK");
test_math_cosh("EQKS26X");
test_math_cosh("XZEWU5");
test_math_cosh(7.321092379540964e+307);
test_math_cosh("R9LVKQK9CJ");
test_math_cosh("FNZY");
test_math_cosh(-997);
test_math_cosh("L79");
test_math_cosh(4.503382830582585e+307);
test_math_cosh(1.1099882554140719e+308);
test_math_cosh("TWOEWAI3L9");
test_math_cosh(8.820516380780172e+307);
test_math_cosh("KOR0K1");
test_math_cosh("QX9H6M");
test_math_cosh(1.0435997514150137e+308);
test_math_cosh(-669);
test_math_cosh(1.663042057791442e+308);
test_math_cosh(5.858624095580544e+307);
test_math_cosh(1.685093664420995e+308);
test_math_cosh("AZ7OCBA");
test_math_cosh("W6065EMF");
test_math_cosh("KUELP5R");
test_math_cosh("C3CWX53");
test_math_cosh("D1UYGH4ULC");
test_math_cosh("6LL2");
test_math_cosh(7.049132376305276e+307);
test_math_cosh(1.7795197644205695e+308);
test_math_cosh("LJOKO");
test_math_cosh(-203);
test_math_cosh(-39);
test_math_cosh("TQVP");
test_math_cosh(5.556700623883915e+307);
test_math_cosh(1.2020433493491415e+308);
test_math_cosh("9SKA4G");
test_math_cosh(1.0214126966013561e+308);
test_math_cosh(6.743924324114446e+307);
test_math_cosh(4.784971658234119e+307);
test_math_cosh("OUXOSH3");
test_math_cosh("SEO");
test_math_cosh(3.5843430125994313e+307);
test_math_cosh(-303);
test_math_cosh(1.0866500164813823e+308);
test_math_cosh(4.613951157929545e+307);
test_math_cosh(1.5325508416035734e+308);
test_math_cosh(-51);
test_math_cosh(2.793582627523173e+307);
test_math_cosh(6.93149689048511e+307);
test_math_cosh("8R78E7HENI");
test_math_cosh(3.2202159851514973e+307);
test_math_cosh("9Z27U");
test_math_cosh("DOZVZ");
test_math_cosh("VZPUJ9RQMG");
test_math_cosh(1.5470285806125212e+308);
test_math_cosh(-961);
test_math_cosh(5.353894529842826e+307);
test_math_cosh("LA0");
test_math_cosh("7LQZMV");
test_math_cosh(2.8897482620141124e+307);
test_math_cosh("LXTIJI");
test_math_cosh(1.0826315932195831e+308);
test_math_cosh(1.5597245537871845e+308);
test_math_cosh(-33);
test_math_cosh("JHU9WRA78");
test_math_cosh("Z5EUQ6");
test_math_cosh(-671);
test_math_cosh(-413);
test_math_cosh(-775);
test_math_cosh("JH46AN");
test_math_cosh(-623);
test_math_cosh(-537);
test_math_cosh(-903);