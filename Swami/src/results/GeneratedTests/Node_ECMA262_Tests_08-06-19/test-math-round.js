/*
* This file is automatically generated by Swami
*
* 2019-08-06 19:23:32.662412
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
test_math_round(2.413456140583357e+307);
test_math_round(/[\u0400-\u04FF]+/g);
test_math_round(false);
test_math_round(-221);
test_math_round(/\r\n|\r|\n/);
test_math_round(/yes[^]*day/);
test_math_round(9.348275804136191e+307);
test_math_round(1.4375848849064729e+308);
test_math_round(6.556046897929328e+307);
test_math_round(1.208408668828039e+308);
test_math_round(1.3223108415787117e+308);
test_math_round(1.3559216084273647e+308);
test_math_round(NaN);
test_math_round(/yes.*day/);
test_math_round(-145);
test_math_round("8CH9XG");
test_math_round("R5FWBPRM41");
test_math_round(undefined);
test_math_round(Infinity);
test_math_round(/[^.]+/);
test_math_round(1.2119341455136288e+308);
test_math_round("CCYO");
test_math_round(-49);
test_math_round(+0);
test_math_round(true);
test_math_round(-265);
test_math_round(1.0088225504771591e+308);
test_math_round(-343);
test_math_round(-431);
test_math_round(1.196741853450489e+308);
test_math_round("U4XK7UBKU");
test_math_round("UVUMRLA514");
test_math_round(1.1054588920490034e+308);
test_math_round(1.2460810449017016e+308);
test_math_round("VIQXLZJPCC");
test_math_round(null);
test_math_round(-481);
test_math_round("HY7");
test_math_round(9.276186637048017e+307);
test_math_round(-997);
test_math_round(-0);
test_math_round(-381);
test_math_round(-335);
test_math_round(1.6333032112772384e+308);
test_math_round("B9KRPVL");
test_math_round(-299);
test_math_round(/(\w+)\s(\w+)/);
test_math_round(3.7734030356134537e+307);
test_math_round(5.918988648888731e+307);
test_math_round("UECX");
test_math_round(5.478213164121746e+307);
test_math_round(-591);
test_math_round(-653);
test_math_round(-627);
test_math_round("D4VGNP8E5K");
test_math_round(-97);
test_math_round("UKQ");
test_math_round(-383);
test_math_round("C15W");
test_math_round("ZQL5V");
test_math_round(1.621131378799416e+308);
test_math_round("7O7W4BQ9QC");
test_math_round(/foo/g);
test_math_round("KVGTI");
test_math_round(1.5472657872681005e+308);
test_math_round(1.1598296668665526e+308);
test_math_round(6.771035182422354e+307);
test_math_round("RJ1ERA06J");
test_math_round(1.1272325219311392e+308);
test_math_round(/ab+c/);
test_math_round(3.355569276147578e+307);
test_math_round(-753);
test_math_round("O2XJW3");
test_math_round(1.346909887671432e+308);
test_math_round(9.361812321500992e+306);
test_math_round(1.3786221118346063e+308);
test_math_round("6UNV");
test_math_round("FD46");
test_math_round("8E87X1PDGP");
test_math_round(-595);
test_math_round(-723);
test_math_round(1.6665761240343957e+308);
test_math_round("PA7T3FA");
test_math_round(-515);
test_math_round("CPVJMDJ9");
test_math_round(-309);
test_math_round("GUKN30C36");
test_math_round(8.813526691870941e+307);
test_math_round(-861);
test_math_round(-485);
test_math_round(-121);
test_math_round("T1X");
test_math_round("X4U5IC849C");
test_math_round(-899);
test_math_round("JR3E5MQNG");
test_math_round("VCCUDQ486");
test_math_round("H0CO");
test_math_round(9.122818012557042e+307);
test_math_round(-301);
test_math_round(1.7998073555535555e+307);
test_math_round(8.052225116406625e+307);
test_math_round("VXUWJ778");
test_math_round(-421);
test_math_round(6.279586231538908e+307);
test_math_round(-35);
test_math_round("Q25KV");
test_math_round("7VCZL");
test_math_round("X3JO");
test_math_round(9.236761885566313e+307);
test_math_round("EKFAOYV");
test_math_round(8.106346868977e+307);
test_math_round(-127);
test_math_round(-163);
test_math_round(1.3996826904561568e+308);
test_math_round(1.2746686323677142e+308);
test_math_round("4PYK");
test_math_round("LZ50ZAK");
test_math_round("AYY3UA");
test_math_round(1.5652978894101345e+308);
test_math_round(-565);
test_math_round(7.448927523415049e+307);
test_math_round(7.269693200429912e+305);
test_math_round(-41);
test_math_round(-521);
test_math_round(1.4238128799812852e+308);
test_math_round(-391);
test_math_round(5.130971541148016e+307);
test_math_round(1.6804075135165256e+308);
test_math_round(1.2887897383259933e+308);
test_math_round(1.4423407032717703e+308);
test_math_round("W62AFH7ZOC");
test_math_round("AJDX");
test_math_round("JOFPX8");
test_math_round("QX6RDCX");
test_math_round(-195);
test_math_round("XPYPX");
test_math_round("MOG");
test_math_round(1.2719911759433218e+308);
test_math_round(-109);
test_math_round("3M6O");
test_math_round("F1WI");
test_math_round(-409);
test_math_round("5005JJ18");
test_math_round(1.060584580206471e+308);
test_math_round(1.7902289347478174e+307);
test_math_round(9.218308224856905e+307);
test_math_round(-909);
test_math_round(-897);
test_math_round("GC1OZZC3");
test_math_round(1.1297809240770462e+307);
test_math_round(8.001301551704666e+307);
test_math_round(5.644438213056276e+307);
test_math_round("ADDI");
test_math_round(-111);
test_math_round(6.394267426416455e+307);
test_math_round(9.646940675239408e+307);
test_math_round(-801);
test_math_round(8.438905549431822e+307);
test_math_round(-661);
test_math_round(-583);
test_math_round("JPI");
test_math_round(6.135957285922798e+307);
test_math_round(4.83385436091744e+307);
test_math_round("LPFOSB");
test_math_round("ZWJMN60EKV");
test_math_round(1.6117372378613053e+308);
test_math_round(-123);
test_math_round(1.0645988935865282e+308);
test_math_round(-685);
test_math_round(2.7270636560513837e+307);
test_math_round(6.724920546476555e+307);
test_math_round("WUMWU0GNS");
test_math_round(-305);
test_math_round(-945);
test_math_round(-787);
test_math_round("U6H6P5WA44");
test_math_round("ZR5J4B8A");
test_math_round("3FX3X9VOC");
test_math_round("GPUZ324ZT3");
test_math_round(8.357360351271324e+307);
test_math_round("1Q2ZUBHR");
test_math_round("MET802FFZ");
test_math_round(-407);
test_math_round("3J7GW776");
test_math_round("NFK1");
test_math_round("18VG8PAMH");
test_math_round("NAA");
test_math_round(1.2341045203990113e+308);
test_math_round("QCB71PFXZI");
test_math_round(-473);
test_math_round(9.118126445335787e+307);
test_math_round("ZENL57W6HS");
test_math_round("AK5J");
test_math_round(7.976648176175986e+307);
test_math_round(1.7915880346624842e+308);
test_math_round(1.5251439934115435e+308);
test_math_round(-803);
test_math_round(-369);
test_math_round(1.3003998261887376e+307);
test_math_round(-203);
test_math_round(-101);
test_math_round("TVR0S8C49N");
test_math_round("9IWH9");
test_math_round(1.46713211726977e+308);
test_math_round(1.1369941773105633e+308);
test_math_round(-39);
test_math_round(-979);
test_math_round("7D5");
test_math_round(-347);
test_math_round(-923);
test_math_round("2SYTNC");
test_math_round(-837);
test_math_round("F1DM4XJWO");
test_math_round("13DJ546MQ");
test_math_round(9.841602824516604e+307);
test_math_round("C8BD");
test_math_round(1.297566703527857e+308);
test_math_round("E705J");
test_math_round("ZT14LZ4KSX");
test_math_round(1.2534881432148792e+308);
test_math_round(-87);
test_math_round(-707);
test_math_round(1.2543088178997426e+308);
test_math_round(1.5659750788305667e+308);
test_math_round("9CILYX2FN");
test_math_round(6.278623052410083e+307);
test_math_round(-681);
test_math_round(-907);
test_math_round("W766ALPN");
test_math_round("WCZXB9");
test_math_round("S2IBSV2");
test_math_round(6.520066962370273e+307);
test_math_round("9BUHH3TMB");
test_math_round(7.681065177574659e+307);
test_math_round(1.3465750198783637e+308);
test_math_round(1.392368738012124e+308);
test_math_round(5.186075229417706e+307);
test_math_round(-353);
test_math_round(1.0077211963559238e+307);
test_math_round("KWDKURN");
test_math_round(-847);
test_math_round(1.5661559761381041e+308);
test_math_round("UVWUJLTMS");
test_math_round(-227);
test_math_round("SREK");
test_math_round("UG9");
test_math_round(-879);
test_math_round(6.441945380444798e+307);
test_math_round(-613);
test_math_round("2X41I3");
test_math_round(7.811809747113952e+306);
test_math_round(-23);
test_math_round(-69);
test_math_round(-655);
test_math_round("CZS8");
test_math_round("GKRMWYRX7V");
test_math_round("R5OUZER3K3");
test_math_round("ZOL1JDD");
test_math_round(-509);
test_math_round(5.658831707800164e+307);
test_math_round("3HL3N8M");
test_math_round("5STAM0AO");
test_math_round("W73F94CA2");
test_math_round(-735);
test_math_round(-931);
test_math_round(-141);
test_math_round(1.0223365729215571e+308);
test_math_round(1.6882324151038939e+308);
test_math_round("NY1XOZ228");
test_math_round(-393);
test_math_round(6.41309859695097e+307);
test_math_round(1.7887786725012715e+308);
test_math_round(-889);
test_math_round(1.1384826026400777e+307);
test_math_round("TSH");
test_math_round(-645);
test_math_round(1.7645090269718198e+308);
test_math_round(1.3197599682600548e+308);
test_math_round("HGQKR5W18B");
test_math_round(1.3465314560112125e+308);
test_math_round(-401);
test_math_round(5.458570018376695e+307);
test_math_round(-503);
test_math_round(-891);
test_math_round(1.080182910855266e+308);
test_math_round("U7N9TD2YM");
test_math_round(-857);
test_math_round(9.022695338172826e+306);
test_math_round("GUZXT9");
test_math_round(2.8681073129214993e+307);
test_math_round(-775);
test_math_round("9CWIU6Z");
test_math_round(-133);
test_math_round(-855);
test_math_round(1.267923949155169e+308);
test_math_round(-273);
test_math_round(-741);
test_math_round(1.1872403596608165e+308);
test_math_round(-975);
test_math_round(-497);
test_math_round(1.2800392237552345e+308);
test_math_round(6.309926985362056e+307);
test_math_round(8.921345380222225e+307);
test_math_round(2.47845276282863e+307);
test_math_round("FBZFL0QS1N");
test_math_round(6.9876337057347e+307);
test_math_round(-903);
test_math_round("CYZ4HLR0DJ");
test_math_round(3.7015485405653175e+307);
test_math_round(4.035075881854852e+306);
test_math_round(8.959825500880606e+307);
test_math_round("Y9IFMQ2");
test_math_round(-193);
test_math_round(2.3846685267613814e+307);
test_math_round("9IJRS");
test_math_round("ESE");
test_math_round(1.0140210008121514e+308);
test_math_round(7.9859888053155e+307);
test_math_round("FL17");
test_math_round("Y7XTOOLS");
test_math_round(8.01303648630339e+307);
test_math_round("COWWDJ6V");
test_math_round("ZVVTAJH7");
test_math_round(3.145058977757373e+307);
test_math_round(-725);
test_math_round("A6DW5LD0N");
test_math_round(2.5649603104840275e+307);
test_math_round(8.696049525579802e+307);
test_math_round(-357);
test_math_round(1.424777507620101e+308);
test_math_round(3.546693450339547e+307);
test_math_round("RA0J2");
test_math_round("ZMVV3VND");
test_math_round(-557);
test_math_round(1.5172382042447642e+308);
test_math_round(1.2361437600927213e+308);
test_math_round("9841GEKB");
test_math_round(3.720383043075208e+307);
test_math_round("8RL7C");
test_math_round("3J4ZHM");
test_math_round(5.460674462933603e+307);
test_math_round(-191);
test_math_round(-603);
test_math_round(-629);
test_math_round("2FHN");
test_math_round(1.7602444011487923e+307);
test_math_round("ABBEKXU");
test_math_round(-387);
test_math_round(1.049371371300475e+307);
test_math_round(1.3072208600696699e+308);
test_math_round(1.6285655747438328e+308);
test_math_round(1.378613689093068e+308);
test_math_round(1.0864257575012719e+308);
test_math_round(-207);
test_math_round(-113);
test_math_round(4.4158731731735493e+307);
test_math_round(-475);
test_math_round("CV7Y");
test_math_round("PS0D3Y8Q");
test_math_round(-445);
test_math_round("Y4GQD3TCZ");
test_math_round("CFKIKOBUPS");
test_math_round("I19WXPQ");
test_math_round(9.95308079002638e+307);
test_math_round("M6HUGXEL4");
test_math_round("NPM3LFLF");
test_math_round(1.4988776690890165e+308);
test_math_round(-623);
test_math_round(9.158466721727607e+307);
test_math_round(2.787688907238782e+307);
test_math_round(4.280171020571562e+307);
test_math_round(3.3039027363575313e+307);
test_math_round(1.4262970698925454e+308);
test_math_round(1.3257341538180493e+308);
test_math_round("ICAKAG3T1");
test_math_round("JFF");
test_math_round(2.3342825409554305e+307);
test_math_round(3.3310349728343653e+307);
test_math_round(4.769126304490218e+307);
test_math_round(-701);
test_math_round(7.581225499249429e+307);
test_math_round("0W8CDS1O");
test_math_round(8.575220150542955e+307);
test_math_round(2.4301483926681897e+307);
test_math_round(-283);
test_math_round(6.336649149552724e+307);
test_math_round("02GFQW1");
test_math_round(8.593891407185553e+307);
test_math_round("JTB");
test_math_round(9.508260731242294e+307);
test_math_round(1.6832382650970047e+308);
test_math_round("A4DFS");
test_math_round("BD3");
test_math_round("Q1FK");
test_math_round(1.2857234583224143e+308);
test_math_round(-985);
test_math_round(3.427941601367762e+307);
test_math_round(1.238366818461392e+308);
test_math_round(1.0049196247622637e+308);
test_math_round(1.2842500392340517e+308);
test_math_round(-665);
test_math_round(5.725111136055328e+307);
test_math_round(-115);
test_math_round(-757);
test_math_round(8.210108622321978e+307);
test_math_round("KONUQXBAG");
test_math_round("0JOCD5F");
test_math_round(1.659031289676278e+308);
test_math_round("6Z0VQ9XOJR");
test_math_round(-311);
test_math_round("H4RNBL2");
test_math_round("SQG1");
test_math_round(1.764925173513402e+308);
test_math_round(6.436696387502516e+307);
test_math_round("6LDDU8");
test_math_round(4.575096242872763e+307);
test_math_round("HB4");
test_math_round(1.2705087497273588e+308);
test_math_round("6AVI4OCIM");
test_math_round("8H1YCE9F");
test_math_round("UD24SJMGD");
test_math_round(338);
test_math_round(1.7614767023663203e+308);
test_math_round(1.5209744379527787e+308);
test_math_round(-385);
test_math_round("BBJKZ08KN");
test_math_round("EAJPAS");
test_math_round(1.789487812125202e+308);
test_math_round(-713);
test_math_round("NIEV");
test_math_round("EXEV3");
test_math_round(1.650309589767247e+308);
test_math_round(-969);
test_math_round(-57);
test_math_round("SANAN");
test_math_round("N4PJSVY");
test_math_round(-325);
test_math_round(7.664217391013915e+307);
test_math_round("ZWBE1Z8GW");
test_math_round(1.3702988661979113e+308);
test_math_round(9.419538291392883e+307);
test_math_round(-37);
test_math_round(-639);
test_math_round(1.2638280281168346e+308);
test_math_round("69G6C");
test_math_round(3.692062200804497e+307);
test_math_round("8IT0HGV");
test_math_round(3.462161651715295e+306);
test_math_round("KBAQILUQ");
test_math_round("P491RBZNM");
test_math_round("MR1");
test_math_round(1.229937720105634e+308);
test_math_round(6.994710308938015e+306);
test_math_round(1.7340198953037855e+308);
test_math_round("ZLZK");
test_math_round("EQB5M9U");
test_math_round(1.1631221319137129e+308);
test_math_round(1.2683506449109023e+308);
test_math_round(3.4245907404949906e+307);
test_math_round("GS9D140");
test_math_round(-955);
test_math_round(1.3171830217831875e+308);
test_math_round("P3VUJV");
test_math_round("369TA8SB12");
test_math_round(-235);
test_math_round(-179);
test_math_round("VT8M2XHA");
test_math_round(8.763943258629087e+307);
test_math_round(1.5955818276992328e+308);
test_math_round("SE3YNADXNC");
test_math_round("OWMLOFY2");
test_math_round(6.456824794364369e+307);
test_math_round("FBOR");
test_math_round("B2S");
test_math_round(4.0535553356994676e+307);
test_math_round(1.485896544470318e+308);
test_math_round("EC84Z2");
test_math_round("WS39U");
test_math_round("TRT0JJO6");
test_math_round(-625);
test_math_round(4.9233261385178154e+306);
test_math_round(2.1352927908631967e+307);
test_math_round(1.2548950755075637e+308);
test_math_round(-447);
test_math_round("UCXA219P");
test_math_round("XPLYCWOKS");
test_math_round(4.919181711313438e+307);
test_math_round(-609);
test_math_round(1.2859647791932545e+308);
test_math_round(1.1929039675010247e+308);
test_math_round("UEDNPVJL");
test_math_round(1.5726617180691754e+308);
test_math_round("HSULVHJ1M");
test_math_round("7BX8");
test_math_round("2VPORC");
test_math_round(-597);
test_math_round(7.524187077621757e+307);
test_math_round(-105);
test_math_round("KOFQ3");
test_math_round(1.6153380619331984e+308);
test_math_round("YO2H678LO0");
test_math_round(9.96268926017995e+307);
test_math_round(4.727652431317741e+307);
test_math_round("4ZE3");
test_math_round(-887);
test_math_round("MEGFRL");
test_math_round("9AD");
test_math_round(1.0343468128986285e+308);
test_math_round(3.623470012653086e+307);
test_math_round(1.0090704141755707e+308);
test_math_round("DSZPA0K");
test_math_round("HY6IY7T3");
test_math_round(4.3082369625083704e+307);
test_math_round(-103);
test_math_round("V0A5T2");
test_math_round(-875);
test_math_round("IIG0F616");
test_math_round(7.758342428696938e+307);
test_math_round("AND");
test_math_round(-663);
test_math_round(1.794348899629694e+308);
test_math_round(-345);
test_math_round(1.0767109289443698e+308);
test_math_round(-175);
test_math_round(1.448035611855682e+308);
test_math_round("DJL0KS8CDN");
test_math_round(-257);
test_math_round(-747);
test_math_round("G46KF6");
test_math_round("9IBG6WK");
test_math_round("SDYYY");
test_math_round(5.016051990187452e+307);
test_math_round(-153);
test_math_round("KIHNEHO");
test_math_round(-3);
test_math_round(1.1416847776085575e+307);
test_math_round("UYQ4");
test_math_round(-993);
test_math_round("T2MTVZ");
test_math_round(8.462363843033775e+307);
test_math_round("64A1XL1U8");
test_math_round("OIUG");
test_math_round(1.2253461353948306e+308);
test_math_round(1.5787948006566525e+308);
test_math_round("VXOAV503HW");
test_math_round("LVPTR2");
test_math_round("I3CQMC2O3F");
test_math_round(9.995193436859388e+307);
test_math_round(1.0727352436140775e+308);
test_math_round(9.19217871529535e+307);
test_math_round("QGFRK41");
test_math_round("HIJ9G");
test_math_round(-487);
test_math_round("GJI5FBPT");
test_math_round(1.2938536339591245e+308);
test_math_round(1.2003249963142171e+308);
test_math_round("A1JSKE0");
test_math_round(-531);
test_math_round("IHQ");
test_math_round("NO8M");
test_math_round(-759);
test_math_round(4.17111730341338e+307);
test_math_round("X8K6E3");
test_math_round("6PF");
test_math_round(1.5423030022711888e+307);
test_math_round("9OV4");
test_math_round(-965);
test_math_round(1.0929016671862687e+308);
test_math_round("J563C");
test_math_round("9G4C0");
test_math_round(1.3937388258280011e+308);
test_math_round("KXSEC2DUJD");
test_math_round("RCF5T5T1");
test_math_round("TUU");
test_math_round(6.252701406464242e+306);
test_math_round("KY02HD6R3");
test_math_round("V6WKDUOK");
test_math_round(-563);
test_math_round("344HK");
test_math_round(4.622082525708226e+307);
test_math_round("JFBV3O");
test_math_round(-839);
test_math_round("8SQ3R70P");
test_math_round("91TJI");
test_math_round(1.6697678896643397e+308);
test_math_round("72RMHF08U0");
test_math_round(1.7817238807348603e+308);
test_math_round("WGO");
test_math_round("IWF");
test_math_round(-295);
test_math_round("NRLS8KD0");
test_math_round("952KNW");
test_math_round(1.6216278393817453e+308);
test_math_round("H2AR");
test_math_round(-973);
test_math_round(-917);
test_math_round("N8N7UABX4");
test_math_round(6.686417545580797e+307);
test_math_round(3.8396446261272714e+307);
test_math_round(-523);
test_math_round("4GA");
test_math_round(-813);
test_math_round(-873);
test_math_round(3.693147111263757e+307);
test_math_round(-213);
test_math_round(1.0203647933078882e+308);
test_math_round(-927);
test_math_round(-467);
test_math_round(-323);
test_math_round(-881);
test_math_round(-419);
test_math_round("DWVHKZS41P");
test_math_round(-657);
test_math_round(1.5093443958006824e+308);
test_math_round("0PCZ0VX");
test_math_round(1.3742781526644075e+308);
test_math_round("SDEPX8R7");
test_math_round("XPKBNMP487");
test_math_round("KSAON8NA9");
test_math_round("GR2D7HVF89");
test_math_round("ZJS7");
test_math_round("WTGPP92UID");
test_math_round("VD4NPHDOXG");
test_math_round(1.776408684143744e+308);
test_math_round(7.155892056973951e+307);
test_math_round("S5TV");
test_math_round(6.767954458348888e+307);
test_math_round(2.135301682201134e+307);
test_math_round(-709);
test_math_round(-395);
test_math_round(-45);
test_math_round("JSDHP0");
test_math_round(-959);
test_math_round(1.5192558474086297e+307);
test_math_round("J8ST5R69");
test_math_round(1.5937634525403199e+308);
test_math_round("6D77OWDSU");
test_math_round(7.981959878572787e+307);
test_math_round("7FA");
test_math_round("ARHM9Q8");
test_math_round(1.665114098485192e+308);
test_math_round(9.181247927124034e+307);
test_math_round("6066LPM");
test_math_round("KZAE3");
test_math_round("Y7TFC08S");
test_math_round("UDBK5");
test_math_round("VXSSHSSW6P");
test_math_round("W4E");
test_math_round("URKAGJ");
test_math_round(1.0896392882195606e+308);
test_math_round(8.03994508142698e+306);
test_math_round("OH6");
test_math_round(-499);
test_math_round(-241);
test_math_round("DCVGEQFG");
test_math_round(-987);
test_math_round(1.5778289772299543e+308);
test_math_round("P2N54YE");
test_math_round("364KMO4");
test_math_round(3.8796373665784225e+307);
test_math_round(564);
test_math_round("4FA9SPJS1");
test_math_round(1.0350031830102676e+308);
test_math_round("54U");
test_math_round(1.1916405123400482e+308);
test_math_round("E0HZY6MK3G");
test_math_round("70MD");
test_math_round(-737);
test_math_round("IMG9ASC30J");
test_math_round(1.9269899628896272e+307);
test_math_round("0A2MXIC5W");
test_math_round(9.491029080245484e+307);
test_math_round(1.624845695497564e+308);
test_math_round(5.65307326699944e+307);
test_math_round("1SQA");
test_math_round("1N014Q02");
test_math_round(7.935041155466703e+307);
test_math_round(6.706187095896465e+307);
test_math_round("QKXF8Z");
test_math_round("96AXV3");
test_math_round(1.7297956198682004e+308);
test_math_round(-439);
test_math_round(9.469840526773472e+307);
test_math_round(-491);
test_math_round(9.84382984412868e+307);
test_math_round("QYJVSAVVTS");
test_math_round("HE8M");
test_math_round(-995);
test_math_round(1.253902346888546e+307);
test_math_round(-763);
test_math_round("22ICT");
test_math_round(-575);
test_math_round(-251);
test_math_round(3.387488887935173e+307);
test_math_round("1W0T1");
test_math_round("XZ45DU1V");
test_math_round(7.541056715014428e+306);
test_math_round(-219);
test_math_round(1.1415805980857539e+308);
test_math_round("5WG");
test_math_round(-719);
test_math_round("0KV6VXLIH");
test_math_round(-793);
test_math_round("BFE");
test_math_round("9AU6T");
test_math_round(-403);
test_math_round("FUU5TE");
test_math_round("LTS543A");
test_math_round("RGJBP6");
test_math_round(1.1993223328268796e+308);
test_math_round(-543);
test_math_round(1.566617699997351e+308);
test_math_round(9.556155192984876e+307);
test_math_round("16AY");
test_math_round("Z2VD47HS40");
test_math_round("OHQNTE6OZ");
test_math_round("TT4BY8C");
test_math_round(1.2664092243196792e+308);
test_math_round(4.295533729847291e+307);
test_math_round(5.743745216260225e+306);
test_math_round("9WCC");
test_math_round("0W0DJ");
test_math_round("I20ELP");
test_math_round(-55);
test_math_round(1.7740583467121807e+308);
test_math_round("W32");
test_math_round(1.1812392881316986e+308);
test_math_round("CZNDZYYX3J");
test_math_round("32JPRW9");
test_math_round(-79);
test_math_round(8.07416220572656e+307);
test_math_round(1.0031842533566614e+308);
test_math_round(8.900882215104947e+307);
test_math_round(1.0300990402354515e+308);
test_math_round("PWZW3AF9KE");
test_math_round("YG0A175C");
test_math_round("JY1Y3");
test_math_round(9.925415419683973e+306);
test_math_round(1.4731298207872751e+308);
test_math_round(3.313917369903149e+307);
test_math_round("Q5KTRBT9");
test_math_round("86K");
test_math_round(5.483285544389134e+307);
test_math_round(-605);
test_math_round(1.3981172304735923e+308);
test_math_round(3.151801234689175e+307);
test_math_round(1.7552641647614303e+308);
test_math_round("TE4AJK");
test_math_round(-545);
test_math_round(-429);
test_math_round(6.163588441694013e+307);
test_math_round("11ZK1PEN4");
test_math_round(1.7210969150510077e+308);
test_math_round("CAO");
test_math_round(-717);
test_math_round("LT9");
test_math_round(8.389989269746937e+307);
test_math_round(-319);
test_math_round(3.421398465066048e+306);
test_math_round(-893);
test_math_round(1.2106891667451066e+308);
test_math_round(1.2516054649976193e+308);
test_math_round(9.878501983908383e+307);
test_math_round("1LU9DB4");
test_math_round(1.2660305677815206e+308);
test_math_round(-267);
test_math_round("PKOO");
test_math_round("MA8");
test_math_round("Z0L921M");
test_math_round("9YZGG9CY");
test_math_round(1.1964963530347515e+308);
test_math_round(1.5970980359466954e+308);
test_math_round(1.6262904693837275e+308);
test_math_round(8.518941341594773e+307);
test_math_round(-463);
test_math_round("VDU1");
test_math_round(3.256271721019636e+307);
test_math_round(4.4209413659050534e+307);
test_math_round(-547);
test_math_round(-501);
test_math_round(-333);
test_math_round(1.1725326788266125e+307);
test_math_round("FRQ");
test_math_round("FHHEX1");
test_math_round("0L4VB");
test_math_round(-275);
test_math_round(7.7573856736407e+307);
test_math_round("6WK2L");
test_math_round(9.478347260553954e+306);
test_math_round("TAK4");
test_math_round(8.094654721490401e+307);
test_math_round(1.3510164968855505e+308);
test_math_round(-553);
test_math_round("SKIETUXH");
test_math_round("P2N45HBA8K");
test_math_round(4.691631819266007e+307);
test_math_round(1.7636405180316716e+308);
test_math_round("FPA10");
test_math_round(1.7567218496855726e+308);
test_math_round(-633);
test_math_round("2PZ");
test_math_round(7.420365671626111e+307);
test_math_round(1.649957319759076e+308);
test_math_round(7.287953743476486e+307);
test_math_round(1.5496828839405477e+308);
test_math_round(-885);
test_math_round("FYOZ");
test_math_round("IZO6RUDL4A");
test_math_round(-983);
test_math_round(1.690906203753814e+307);
test_math_round(2.346754701190923e+307);
test_math_round(1.3747249260845985e+308);
test_math_round(8.487394531591708e+307);
test_math_round(1.5441515891697541e+308);
test_math_round(1.5101422991709302e+308);
test_math_round(7.821231947525127e+307);
test_math_round("L6ESPSSLMK");
test_math_round(3.767812005082313e+307);
test_math_round(5.917702428338527e+307);
test_math_round("S4G5RIJT");
test_math_round(6.061306563038017e+307);
test_math_round(1.1714980286793078e+308);
test_math_round(2.8117785192767765e+307);
test_math_round(9.569670261313692e+307);
test_math_round(1.3676657497064483e+308);
test_math_round(2.536268401280061e+306);
test_math_round(-465);
test_math_round("AWUWMH");
test_math_round(-929);
test_math_round(5.21460805411637e+307);
test_math_round(1.318358932507919e+308);
test_math_round(1.6655144255181712e+308);
test_math_round("M3M06NNSVG");
test_math_round(8.99463099938197e+307);
test_math_round("C6M");
test_math_round(3.0359447468373237e+307);
test_math_round("LBTHBM833Z");
test_math_round(1.4342561499482448e+308);
test_math_round("4P6EV3Y4");
test_math_round("HM0JJHTX4");
test_math_round(6.809126530149248e+307);
test_math_round(5.501423151792373e+307);
test_math_round(-229);
test_math_round(8.043329795569964e+307);
test_math_round("O64VX");
test_math_round("51KAH2");
test_math_round(7.231233525987382e+307);
test_math_round(6.940153234048985e+307);
test_math_round(-427);
test_math_round("V9GVUS");
test_math_round("XXPARO65");
test_math_round("J7U4C4MGBT");
test_math_round(-363);
test_math_round(1.2046019865869126e+308);
test_math_round(-471);
test_math_round("O41V4");
test_math_round("5GHLAI9G96");
test_math_round(-161);
test_math_round("8IQOS53DL");
test_math_round(1.9920192653068915e+307);
test_math_round(7.842761960021793e+307);
test_math_round("J9F9");
test_math_round("Y8CCVOMP2P");
test_math_round(7.760611951715008e+307);
test_math_round(1.656500466573604e+308);
test_math_round("2V4");
test_math_round(3.6841335757633666e+307);
test_math_round("P3774X6");
test_math_round("61TV0");
test_math_round(-233);
test_math_round(1.385769067714019e+308);
test_math_round(1.0406056219018279e+308);
test_math_round("EFRW81AS00");
test_math_round(1.1189924714392806e+308);
test_math_round("LEVI2NM");
test_math_round(-287);
test_math_round(-667);
test_math_round(-777);
test_math_round("Q6ZM4NQ");
test_math_round("SXN4VEPEV");
test_math_round(-95);
test_math_round(-743);
test_math_round(-437);
test_math_round(7.284802478902701e+307);
test_math_round(4.155926489247878e+307);
test_math_round(-451);
test_math_round("CC0HX");
test_math_round("WZ3");
test_math_round(-259);
test_math_round("WQQQ");
test_math_round(1.2526694626129807e+308);
test_math_round("COC5P");
test_math_round(446);
test_math_round(6.344096694232749e+307);
test_math_round(-135);
test_math_round("5ET3Q");
test_math_round(-1);
test_math_round(1.747308489935175e+308);
test_math_round("VFW8RD");
test_math_round(-365);
test_math_round("7U1PB9UN");
test_math_round(1.0103346366153616e+308);
test_math_round(-947);
test_math_round("OC5");
test_math_round(1.5557276466037033e+308);
test_math_round("J9BP27C");
test_math_round("7P2Z2RAWY");
test_math_round("QII6X0");
test_math_round("9GJ10M10CH");
test_math_round("MBDO30K");
test_math_round("SQ3UXOVM");
test_math_round(58);
test_math_round(1.1279310515377577e+308);
test_math_round("3HXCEPL1NJ");
test_math_round(-317);
test_math_round(-593);
test_math_round("IZJB");
test_math_round(9.54505506484836e+306);
test_math_round("4YZ");
test_math_round(2.308907599224048e+307);
test_math_round("VCF");
test_math_round(1.6534517093108748e+308);
test_math_round(-745);
test_math_round("Q0F");
test_math_round(8.961254991479031e+307);
test_math_round("DFW35KY");
test_math_round("9C02M2");
test_math_round(6.127249109034103e+307);
test_math_round(-171);
test_math_round(-913);
test_math_round("OB6RDL5M");
test_math_round(920);
test_math_round("MQIZTTUHQ");
test_math_round("2E16LJ80J");
test_math_round("7SR");
test_math_round(1.1187546771652306e+308);
test_math_round("C4BG");
test_math_round("JXG");
test_math_round("2RN0GF");
test_math_round("EONKS3Y");
test_math_round(8.870860243437334e+307);
test_math_round(6.753159957406019e+307);
test_math_round("V6SK18");
test_math_round(1.1780186165155952e+307);
test_math_round(8.295689996374543e+307);
test_math_round("882");
test_math_round(7.952889209494337e+307);
test_math_round(-901);
test_math_round(-827);
test_math_round("QI84V0JVKW");
test_math_round(5.427061073662485e+307);
test_math_round(1.327047707474879e+307);
test_math_round(1.1442653794554878e+308);
test_math_round("V67M");
test_math_round("F09QIQLLK7");
test_math_round(1.3289224652058209e+308);
test_math_round("KGBHP");
test_math_round(3.799703116146291e+307);
test_math_round(-925);
test_math_round(-43);
test_math_round(8.171858631916102e+307);
test_math_round(1.369547571824098e+308);
test_math_round("5Z43");
test_math_round(-91);
test_math_round(-957);
test_math_round(2.902869343344215e+307);
test_math_round("IFA");
test_math_round(1.5499954838570825e+308);
test_math_round("92Y8M8CU");
test_math_round("BHSCNU");
test_math_round("GSBA5");
test_math_round(1.7071588045816243e+308);
test_math_round(1.6569496564631267e+307);
test_math_round("SDGY9");
test_math_round("2LYY3");
test_math_round(-785);
test_math_round("UMBPXVFZH");
test_math_round(5.419871721014717e+307);
test_math_round(1.2020445054318386e+308);
test_math_round("3JPCU");
test_math_round("0A9XLBVX");
test_math_round(1.3876878293139635e+308);
test_math_round("EJK1");
test_math_round(1.6853292514541692e+308);
test_math_round("BTDI3D");
test_math_round(1.747813287336062e+308);
test_math_round(-157);
test_math_round("HQKJU2G");
test_math_round(1.8467691223957795e+306);
test_math_round(-77);
test_math_round(-11);
test_math_round(1.735508572898082e+308);
test_math_round(1.5150902293107574e+308);
test_math_round("ZJT422K0W3");
test_math_round(-253);
test_math_round(4.229455997927117e+307);
test_math_round(1.6189257279266667e+308);
test_math_round(-589);
test_math_round(1.7833562340941586e+308);
test_math_round(-967);
