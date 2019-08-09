/*
* This file is automatically generated by Swami
*
* 2019-08-08 15:37:44.171802
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
function test_math_acosh(x){
	if (Object.is( x,NaN )){
		var output = Math.acosh(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (( x === 1 )){
		var output = Math.acosh(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === + Infinity )){
		var output = Math.acosh(x);
		assert.strictEqual(+ Infinity, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}



/*TESTS GENERATED AUTOMATICALLY*/
test_math_acosh(/[\u0400-\u04FF]+/g);
test_math_acosh(1.6826392213187212e+308);
test_math_acosh(/\r\n|\r|\n/);
test_math_acosh(-975);
test_math_acosh(false);
test_math_acosh(Infinity);
test_math_acosh(4.887010774061325e+307);
test_math_acosh("U37");
test_math_acosh(/yes.*day/);
test_math_acosh(-915);
test_math_acosh(2.008956122337747e+307);
test_math_acosh(-589);
test_math_acosh(-185);
test_math_acosh(2.6439600954794573e+307);
test_math_acosh(NaN);
test_math_acosh(true);
test_math_acosh("EFLM");
test_math_acosh("4FH");
test_math_acosh(-219);
test_math_acosh(3.4757706096408426e+307);
test_math_acosh(-811);
test_math_acosh(-997);
test_math_acosh(-45);
test_math_acosh(-207);
test_math_acosh(/(\w+)\s(\w+)/);
test_math_acosh(1.457365681124334e+308);
test_math_acosh(1.494990294386229e+308);
test_math_acosh(-627);
test_math_acosh(+0);
test_math_acosh(1.3446973206270425e+306);
test_math_acosh(null);
test_math_acosh("4QD5IE1");
test_math_acosh(-147);
test_math_acosh(undefined);
test_math_acosh(-157);
test_math_acosh(1.588318397377367e+308);
test_math_acosh(-887);
test_math_acosh(-541);
test_math_acosh("F9CZMU");
test_math_acosh("Y3XNG");
test_math_acosh(-0);
test_math_acosh("18IIWX");
test_math_acosh(-201);
test_math_acosh("A3Y2SBZ6");
test_math_acosh(-995);
test_math_acosh(-307);
test_math_acosh("S6SI452D8");
test_math_acosh(3.072002979927093e+307);
test_math_acosh("ZLZBLL");
test_math_acosh("DNLN");
test_math_acosh("HA28G9Y");
test_math_acosh(/ab+c/);
test_math_acosh(1.574875156002315e+308);
test_math_acosh(1.7922458326150507e+308);
test_math_acosh("5YYGWRJU");
test_math_acosh("H23G6PKOWP");
test_math_acosh(-549);
test_math_acosh(/[^.]+/);
test_math_acosh("E9M");
test_math_acosh("2QW");
test_math_acosh(5.229401917062808e+307);
test_math_acosh(-369);
test_math_acosh(1.041922676370664e+308);
test_math_acosh(-791);
test_math_acosh(-719);
test_math_acosh(-433);
test_math_acosh("Z4VZ9HZH");
test_math_acosh(-293);
test_math_acosh(/yes[^]*day/);
test_math_acosh(8.200647415418309e+307);
test_math_acosh(2.6291189447071066e+307);
test_math_acosh(-145);
test_math_acosh(/foo/g);
test_math_acosh("XQT");
test_math_acosh(-969);
test_math_acosh(1.1738514037075608e+308);
test_math_acosh(8.69390610577907e+307);
test_math_acosh(1.454623111632021e+308);
test_math_acosh(-107);
test_math_acosh("459");
test_math_acosh(2.290859373607395e+307);
test_math_acosh(3.3154379437767705e+307);
test_math_acosh(-529);
test_math_acosh(-601);
test_math_acosh(-79);
test_math_acosh(1.2773910270618084e+308);
test_math_acosh(7.41213159931451e+307);
test_math_acosh(1.330973453798299e+308);
test_math_acosh(1.6390549479232317e+308);
test_math_acosh(7.127213076858411e+307);
test_math_acosh("TE3682");
test_math_acosh(4.359582106009977e+307);
test_math_acosh("Q30AZNM");
test_math_acosh(-825);
test_math_acosh(-23);
test_math_acosh(1.1707441142927264e+308);
test_math_acosh(-315);
test_math_acosh(1.2638408930353285e+308);
test_math_acosh(6.313686579312853e+307);
test_math_acosh(7.746291273835703e+306);
test_math_acosh("IY6");
test_math_acosh("HJNC1BD");
test_math_acosh(3.125680149789973e+307);
test_math_acosh("351RANQJ");
test_math_acosh("CY60KXZ");
test_math_acosh(9.575999686094246e+307);
test_math_acosh(-511);
test_math_acosh(-897);
test_math_acosh("PB3");
test_math_acosh(1.6361892883075027e+308);
test_math_acosh("K0FW4PH");
test_math_acosh(4.108592774351718e+306);
test_math_acosh(-659);
test_math_acosh(1.2748798180604508e+308);
test_math_acosh(6.484958630864125e+307);
test_math_acosh(6.494717573908906e+307);
test_math_acosh("0SD45LE7DK");
test_math_acosh(-883);
test_math_acosh("KCJPW3P36I");
test_math_acosh(-981);
test_math_acosh(-355);
test_math_acosh("K4KHB");
test_math_acosh(1.664757796686077e+308);
test_math_acosh(-965);
test_math_acosh("NVA5R0");
test_math_acosh(1.5872569604251948e+308);
test_math_acosh(-381);
test_math_acosh(-99);
test_math_acosh("C6DQZ4YEQS");
test_math_acosh(-37);
test_math_acosh("HLFME");
test_math_acosh("92VY");
test_math_acosh(1.3009511279898296e+308);
test_math_acosh(2.5856153823130105e+306);
test_math_acosh(1.5966990756341249e+308);
test_math_acosh("GHCRMPTWTT");
test_math_acosh("OY4HNBG3S0");
test_math_acosh(9.283214947876226e+306);
test_math_acosh("JDTZ0YY1");
test_math_acosh(1.121420561148011e+308);
test_math_acosh("4R2KY0");
test_math_acosh(1.2249058247312604e+308);
test_math_acosh(1.2282475113070519e+308);
test_math_acosh("7LBL2SYL");
test_math_acosh(-13);
test_math_acosh(1.3750201722913683e+308);
test_math_acosh(8.708496274485077e+307);
test_math_acosh("FSBNSRFEF");
test_math_acosh("GTG0");
test_math_acosh(-243);
test_math_acosh(8.720866672581806e+307);
test_math_acosh(8.179462577208754e+307);
test_math_acosh(2.2626510155239776e+307);
test_math_acosh("89V8TXK");
test_math_acosh(-593);
test_math_acosh(-743);
test_math_acosh("EBSDCOLN2B");
test_math_acosh(-175);
test_math_acosh("X0B2B249D");
test_math_acosh(-427);
test_math_acosh(-479);
test_math_acosh("OPS2");
test_math_acosh("SV8UG");
test_math_acosh("HXSNY");
test_math_acosh("AJD5K");
test_math_acosh("I6WV4");
test_math_acosh(4.0729337535061403e+307);
test_math_acosh("ZKM2");
test_math_acosh(-149);
test_math_acosh(-131);
test_math_acosh(1.4024285026444972e+308);
test_math_acosh(1.1371820494555006e+308);
test_math_acosh(-629);
test_math_acosh(1.6397615320088093e+308);
test_math_acosh(-225);
test_math_acosh("9V3T7F4MI");
test_math_acosh(9.822919739856367e+307);
test_math_acosh("YF0C");
test_math_acosh(3.6684980421487017e+307);
test_math_acosh("92M0GK1Z50");
test_math_acosh(-367);
test_math_acosh(5.108424085028646e+307);
test_math_acosh("UJZJW");
test_math_acosh("NZL91IMCLX");
test_math_acosh("QGJ71");
test_math_acosh(-649);
test_math_acosh(4.4602789229681193e+307);
test_math_acosh(-705);
test_math_acosh(6.026861427342925e+307);
test_math_acosh(-717);
test_math_acosh("OZ9TG");
test_math_acosh("MV29TL3");
test_math_acosh("NJ65KPII0");
test_math_acosh(1.1810380619989895e+308);
test_math_acosh("CFWTSRTE2");
test_math_acosh("W3YH3RG");
test_math_acosh(-399);
test_math_acosh(1.0576424343480064e+308);
test_math_acosh(1.4901477764029423e+308);
test_math_acosh("DKN0WX");
test_math_acosh(5.577661933467579e+307);
test_math_acosh(-397);
test_math_acosh(1.2820901050784812e+308);
test_math_acosh("X08V8X");
test_math_acosh(5.3873104470526516e+306);
test_math_acosh("TJJ53");
test_math_acosh(1.695833819030152e+308);
test_math_acosh("G04FD");
test_math_acosh(-911);
test_math_acosh(2.8749762956006583e+307);
test_math_acosh(1.223155137220252e+308);
test_math_acosh("JGL");
test_math_acosh(2.4560314310098387e+307);
test_math_acosh(1.97015958114211e+307);
test_math_acosh(-311);
test_math_acosh("03WV");
test_math_acosh("LQTARR");
test_math_acosh(9.086693464642872e+307);
test_math_acosh("5187");
test_math_acosh(-167);
test_math_acosh(-585);
test_math_acosh(1.7557978445252432e+308);
test_math_acosh(-353);
test_math_acosh("17USB9Y");
test_math_acosh(1.6088125197044337e+308);
test_math_acosh("6VNZG");
test_math_acosh(1.4567321638304069e+308);
test_math_acosh("BF1F");
test_math_acosh(1.4573727700623475e+308);
test_math_acosh("LIKLOW");
test_math_acosh("P6AHFVSFSU");
test_math_acosh(-461);
test_math_acosh(1.7405590678713103e+308);
test_math_acosh(-881);
test_math_acosh("OKXZ");
test_math_acosh("RMYU3KX");
test_math_acosh(8.733884129557814e+307);
test_math_acosh("TVC");
test_math_acosh("5C0NZ");
test_math_acosh(6.566345544280052e+307);
test_math_acosh("33JKNJ6B4T");
test_math_acosh("9NPYJYL4");
test_math_acosh("IC301QB");
test_math_acosh(6.283926671943825e+307);
test_math_acosh(-909);
test_math_acosh("3CZHPZCVIX");
test_math_acosh(-617);
test_math_acosh(-735);
test_math_acosh(3.5852153303487665e+307);
test_math_acosh(-161);
test_math_acosh("295H0O");
test_math_acosh(1.749411470126978e+307);
test_math_acosh(-471);
test_math_acosh(-289);
test_math_acosh(-565);
test_math_acosh(-195);
test_math_acosh("UIW11XYM9");
test_math_acosh(-327);
test_math_acosh("3SW7R8G");
test_math_acosh(1.1836811234991748e+308);
test_math_acosh(-187);
test_math_acosh("U2XO2IN1K");
test_math_acosh(1.6239962269117536e+308);
test_math_acosh(1.6151484883174661e+308);
test_math_acosh("CN5QUMCEZ7");
test_math_acosh("KKNN2");
test_math_acosh(5.014221091604425e+307);
test_math_acosh("NFYT8KV");
test_math_acosh(-891);
test_math_acosh("9PI87A5V");
test_math_acosh(-371);
test_math_acosh(-899);
test_math_acosh("ICCWY73W3T");
test_math_acosh("S192R3JA");
test_math_acosh("CH70DU");
test_math_acosh("SQS25NEKM");
test_math_acosh("QA2");
test_math_acosh("9BWH1");
test_math_acosh(-979);
test_math_acosh(1.096976848316147e+308);
test_math_acosh(-63);
test_math_acosh("HKNDGS");
test_math_acosh(8.11411206258014e+307);
test_math_acosh(2.047424392961366e+307);
test_math_acosh("7HV");
test_math_acosh("MO6YIVD");
test_math_acosh(-945);
test_math_acosh("FXM");
test_math_acosh(1.9762621550436944e+306);
test_math_acosh("7WYK");
test_math_acosh(1.0875602625181964e+308);
test_math_acosh(2.0164977918693148e+307);
test_math_acosh("JEY");
test_math_acosh("Q7QQ");
test_math_acosh(7.229576044820329e+307);
test_math_acosh(9.579947577056086e+307);
test_math_acosh("LBU34LW83");
test_math_acosh("DVNPL");
test_math_acosh(-709);
test_math_acosh(-189);
test_math_acosh(-895);
test_math_acosh(-437);
test_math_acosh(4.4975010570638505e+306);
test_math_acosh("9XSP");
test_math_acosh("V2LF9G");
test_math_acosh(1.157808391669042e+308);
test_math_acosh(1.0816768675185575e+308);
test_math_acosh("6DYDID5VT");
test_math_acosh(1.445676909889417e+308);
test_math_acosh(-555);
test_math_acosh("19MGDXY6");
test_math_acosh("7BBYF");
test_math_acosh(4.339308819288988e+307);
test_math_acosh(1.3755297356016576e+308);
test_math_acosh(1.148823068629451e+308);
test_math_acosh("FKGISMLXC");
test_math_acosh("KPRH");
test_math_acosh(-731);
test_math_acosh("J1THK0Z1AQ");
test_math_acosh(2.443071540564962e+307);
test_math_acosh("26D9Z8G");
test_math_acosh("3NE51");
test_math_acosh(-773);
test_math_acosh(-5);
test_math_acosh(1.0815033961226103e+308);
test_math_acosh(-677);
test_math_acosh(1.1701717690046338e+307);
test_math_acosh("NQKIDZ55");
test_math_acosh(3.9167794676743897e+307);
test_math_acosh(-759);
test_math_acosh(8.414294710813197e+307);
test_math_acosh(-7);
test_math_acosh("57U0G9M6C");
test_math_acosh(-431);
test_math_acosh(-155);
test_math_acosh(-951);
test_math_acosh("HOD4H41");
test_math_acosh(1.3082679889452327e+308);
test_math_acosh(-499);
test_math_acosh(-941);
test_math_acosh("VYVFE2CTR5");
test_math_acosh(762);
test_math_acosh("LNB7");
test_math_acosh(1.2386103121233241e+308);
test_math_acosh(7.042440583148252e+307);
test_math_acosh(-787);
test_math_acosh("5E6A3CZ4");
test_math_acosh(-449);
test_math_acosh(-507);
test_math_acosh(5.54882645456868e+307);
test_math_acosh(6.6047736503411995e+305);
test_math_acosh(-41);
test_math_acosh(-193);
test_math_acosh(3.6766184694158596e+307);
test_math_acosh("0P14FKDD");
test_math_acosh(1.2378700950077685e+308);
test_math_acosh("G5ZQG");
test_math_acosh("TKECWZ7JEA");
test_math_acosh("0R0I");
test_math_acosh("TPYTF8TQ");
test_math_acosh(1.1858037677422148e+307);
test_math_acosh("BTNP");
test_math_acosh(1.3966106047985843e+308);
test_math_acosh("UXALR");
test_math_acosh(3.845265503915875e+307);
test_math_acosh(-51);
test_math_acosh("QS5LUO");
test_math_acosh("EB6XRHB");
test_math_acosh("NREHD5RO");
test_math_acosh("YDCKVF8");
test_math_acosh("S1ITA");
test_math_acosh("O5NTR");
test_math_acosh(2.0627149780376112e+307);
test_math_acosh(-331);
test_math_acosh("TGE16G3T6");
test_math_acosh("BFC4XOIVG");
test_math_acosh("6RBWZ4DQV");
test_math_acosh(-841);
test_math_acosh(4.834713828491361e+307);
test_math_acosh(-543);
test_math_acosh(-573);
test_math_acosh(-933);
test_math_acosh("EPUEB");
test_math_acosh(-889);
test_math_acosh("FJ9UNH1KN");
test_math_acosh(-455);
test_math_acosh("8YA5Q");
test_math_acosh(1.0027091875660253e+308);
test_math_acosh(1.7222888052480091e+308);
test_math_acosh(-687);
test_math_acosh("ZJFV7");
test_math_acosh("CEQBTLNZ");
test_math_acosh(1.4786062153498008e+308);
test_math_acosh(-843);
test_math_acosh("E5E6J");
test_math_acosh(3.4304682485607557e+307);
test_math_acosh(1.5392949547352352e+308);
test_math_acosh(3.437292878594176e+307);
test_math_acosh(3.24378949608903e+307);
test_math_acosh(-847);
test_math_acosh(6.74923820871944e+307);
test_math_acosh(2.0582168744114809e+307);
test_math_acosh("CUXRO0");
test_math_acosh(-467);
test_math_acosh("GVH1BOPT");
test_math_acosh(-823);
test_math_acosh("UYVE");
test_math_acosh("J4764");
test_math_acosh(-963);
test_math_acosh(6.487178246146701e+307);
test_math_acosh("NKFYWL");
test_math_acosh(4.806488126178059e+307);
test_math_acosh(968);
test_math_acosh(-607);
test_math_acosh(-111);
test_math_acosh(-235);
test_math_acosh(2.5036976384374464e+307);
test_math_acosh(9.312729255606272e+307);
test_math_acosh("H465");
test_math_acosh("FEGYPRJ");
test_math_acosh("2VEWRXW");
test_math_acosh("XMD5QIHFW");
test_math_acosh(1.2242114233949937e+308);
test_math_acosh("0FO0ME");
test_math_acosh(1.3862478920441683e+308);
test_math_acosh("NM8GPH3P8");
test_math_acosh("L9R");
test_math_acosh("BSFL2");
test_math_acosh(-53);
test_math_acosh(1.5471865399592083e+308);
test_math_acosh(1.7678126210337588e+308);
test_math_acosh(284);
test_math_acosh("0YHS");
test_math_acosh(1.1338864465967296e+308);
test_math_acosh(-473);
test_math_acosh(9.774521017815355e+307);
test_math_acosh(6.303742770588084e+307);
test_math_acosh("49513");
test_math_acosh("1DRRPS");
test_math_acosh(-329);
test_math_acosh(-801);
test_math_acosh(-697);
test_math_acosh("95OLKSQ");
test_math_acosh("O7O80RSCE");
test_math_acosh("BNZPVUG");
test_math_acosh(4.1043261343029264e+307);
test_math_acosh(1.342585728976138e+308);
test_math_acosh(8.875341021453691e+307);
test_math_acosh("RY246W42S5");
test_math_acosh(-347);
test_math_acosh(1.0612792204185631e+308);
test_math_acosh(1.4359222059453695e+308);
test_math_acosh("R9Q33IWC0G");
test_math_acosh("781PM6VGDS");
test_math_acosh(-341);
test_math_acosh(-885);
test_math_acosh("2QPNSUJW");
test_math_acosh("82M");
test_math_acosh(-721);
test_math_acosh("9J0C1M9RIU");
test_math_acosh(6.756514066511421e+307);
test_math_acosh("OGMKS6A27");
test_math_acosh(-319);
test_math_acosh(-105);
test_math_acosh(8.853575417956236e+307);
test_math_acosh(-459);
test_math_acosh("65VULUH");
test_math_acosh(-183);
test_math_acosh(-619);
test_math_acosh(-679);
test_math_acosh(1.7239308124031753e+308);
test_math_acosh(1.1583937689373094e+308);
test_math_acosh("9SIXODA9ZV");
test_math_acosh(-637);
test_math_acosh("GPCTL1");
test_math_acosh(1.2312882791025867e+308);
test_math_acosh(-481);
test_math_acosh(-103);
test_math_acosh("NAQGCULA");
test_math_acosh(1.6868372674937107e+308);
test_math_acosh("PU21EA6GH");
test_math_acosh(9.852315262025181e+307);
test_math_acosh("DJNDVS");
test_math_acosh(-379);
test_math_acosh("NCDC");
test_math_acosh(-361);
test_math_acosh(7.327257612621796e+307);
test_math_acosh(1.0827419883473822e+308);
test_math_acosh("WNAN");
test_math_acosh("PWXE44RCYE");
test_math_acosh(1.751978366674593e+308);
test_math_acosh("NDWO3J961");
test_math_acosh(-255);
test_math_acosh(-937);
test_math_acosh(5.930360104288763e+307);
test_math_acosh(5.982069174382257e+307);
test_math_acosh(-405);
test_math_acosh("D6M");
test_math_acosh(6.935222376347603e+307);
test_math_acosh(-241);
test_math_acosh(1.3606242242372202e+308);
test_math_acosh(8.569623628681257e+307);
test_math_acosh(8.004271162237217e+307);
test_math_acosh(8.863407329079553e+307);
test_math_acosh("APE7");
test_math_acosh(-281);
test_math_acosh("ISQ0");
test_math_acosh(1.1278802717218562e+308);
test_math_acosh(1.7893660211083224e+307);
test_math_acosh("03M");
test_math_acosh("33OCL6O6W");
test_math_acosh(7.338712546935774e+307);
test_math_acosh("1EF");
test_math_acosh("BZW");
test_math_acosh(3.976763081391292e+307);
test_math_acosh("QC2DODIDA");
test_math_acosh("P5E2W");
test_math_acosh("H8KZIZT");
test_math_acosh("L9ITA3ALC2");
test_math_acosh(-943);
test_math_acosh(7.314916500169718e+307);
test_math_acosh(2.8531602878342407e+307);
test_math_acosh(898);
test_math_acosh("S92Q");
test_math_acosh(1.7825361988235685e+308);
test_math_acosh(9.891978628007857e+307);
test_math_acosh("DJILPJM6T4");
test_math_acosh(-69);
test_math_acosh(1.2866622639047573e+308);
test_math_acosh(1.1974840182588902e+308);
test_math_acosh(9.215667870377043e+307);
test_math_acosh(1.4769008049283493e+308);
test_math_acosh(3.080173718250182e+307);
test_math_acosh(-91);
test_math_acosh(8.889892103313581e+307);
test_math_acosh(-509);
test_math_acosh(1.2220095988896013e+308);
test_math_acosh("E9E4QOFYAO");
test_math_acosh("03WV6");
test_math_acosh(-93);
test_math_acosh("FCDPASG");
test_math_acosh("CVTVF8");
test_math_acosh("RBOD");
test_math_acosh(-639);
test_math_acosh(-451);
test_math_acosh(-553);
test_math_acosh("3XG3PGDR");
test_math_acosh("SWHU");
test_math_acosh("2SXVH9");
test_math_acosh("U5O");
test_math_acosh(8.454707875508315e+307);
test_math_acosh(7.228587344319922e+307);
test_math_acosh(9.958238516530076e+307);
test_math_acosh(-57);
test_math_acosh(-927);
test_math_acosh("J03GVJ");
test_math_acosh("E6WMP");
test_math_acosh(-181);
test_math_acosh(-97);
test_math_acosh("3I580ML");
test_math_acosh("Z0O815XZ");
test_math_acosh("LJ7ZAZW2X");
test_math_acosh(1.0861091664003344e+308);
test_math_acosh("8G20KFNK9");
test_math_acosh(3.8080674298796284e+306);
test_math_acosh(1.5266822718959542e+308);
test_math_acosh(-33);
test_math_acosh(8.606634603348096e+307);
test_math_acosh(7.522273220497227e+307);
test_math_acosh(-779);
test_math_acosh(1.5624708731931894e+308);
test_math_acosh("95ZKU7O");
test_math_acosh(-489);
test_math_acosh(-117);
test_math_acosh(-39);
test_math_acosh("RS4G");
test_math_acosh(1.509434200346721e+308);
test_math_acosh(-279);
test_math_acosh(6.225714578909792e+307);
test_math_acosh(-715);
test_math_acosh(3.6404891432733654e+307);
test_math_acosh(-985);
test_math_acosh(-813);
test_math_acosh(2.01306013306543e+307);
test_math_acosh("3BIFJP");
test_math_acosh(1.311550562447377e+308);
test_math_acosh(-493);
test_math_acosh(1.453430140042342e+308);
test_math_acosh(1.226557399411927e+308);
test_math_acosh(-967);
test_math_acosh(-645);
test_math_acosh("DDKKMF");
test_math_acosh("FSN");
test_math_acosh(-913);
test_math_acosh(1.0137820382668065e+308);
test_math_acosh(7.693051323211334e+307);
test_math_acosh("0GLN3A0OTJ");
test_math_acosh(-165);
test_math_acosh(-781);
test_math_acosh("EO40");
test_math_acosh("48U");
test_math_acosh("CAQY8I");
test_math_acosh(1.7810410881007024e+308);
test_math_acosh("ZNJ5");
test_math_acosh("DGYX0F4C");
test_math_acosh(-393);
test_math_acosh(-429);
test_math_acosh(4.722441046958411e+307);
test_math_acosh("AYJV2R");
test_math_acosh("A6CNX");
test_math_acosh(2.60100440911544e+307);
test_math_acosh(9.01114265591537e+307);
test_math_acosh(-739);
test_math_acosh("UBRJJ5GO4");
test_math_acosh("U6OM20");
test_math_acosh("75G");
test_math_acosh(-3);
test_math_acosh(8.901488711914791e+307);
test_math_acosh("6HV");
test_math_acosh(9.730738110847328e+307);
test_math_acosh(1.665418927785662e+308);
test_math_acosh(5.84363466468428e+307);
test_math_acosh(9.687387170742572e+307);
test_math_acosh("40UQYD9");
test_math_acosh(6.853642069095092e+307);
test_math_acosh(-377);
test_math_acosh(1.6681374153516325e+308);
test_math_acosh(1.2190843424132419e+308);
test_math_acosh(5.573251553628586e+307);
test_math_acosh("OVZ49JYI6");
test_math_acosh("491AE7U");
test_math_acosh(3.7313251882576106e+307);
test_math_acosh(-597);
test_math_acosh("PB7VTJ");
test_math_acosh(-603);
test_math_acosh(-647);
test_math_acosh(1.359640861396212e+308);
test_math_acosh(-599);
test_math_acosh(1.257398099685179e+308);
test_math_acosh(1.4084350492228186e+308);
test_math_acosh("57W0G8");
test_math_acosh("G39");
test_math_acosh("IVEGI");
test_math_acosh(-765);
test_math_acosh(1.0417346893860616e+307);
test_math_acosh(-387);
test_math_acosh("QZ0CL");
test_math_acosh(6.398452272138427e+306);
test_math_acosh(1.1315603414890815e+308);
test_math_acosh("V7OGYYEWAK");
test_math_acosh(5.933211322139551e+307);
test_math_acosh(-221);
test_math_acosh("ZVD218KGX");
test_math_acosh(-783);
test_math_acosh("PVEH");
test_math_acosh(7.175564789828003e+307);
test_math_acosh(8.458123454113985e+307);
test_math_acosh(-81);
test_math_acosh(7.455458191990622e+307);
test_math_acosh(2.9092871621778674e+307);
test_math_acosh(3.6933901641963607e+307);
test_math_acosh("RSOBY");
test_math_acosh("CLV8L");
test_math_acosh("L2C8R");
test_math_acosh("JDBYGEY");
test_math_acosh(1.6566131855920822e+307);
test_math_acosh("799");
test_math_acosh(5.681621872848981e+307);
test_math_acosh(9.0589055083563e+307);
test_math_acosh(1.1513616759324654e+307);
test_math_acosh("PO43TEF");
test_math_acosh(3.542140488331607e+307);
test_math_acosh("HHBSB");
test_math_acosh(1.7499678009465508e+308);
test_math_acosh("DARZA");
test_math_acosh(1.420249463014309e+308);
test_math_acosh(7.865395037400981e+306);
test_math_acosh("6JNB");
test_math_acosh("8HHBKHYKTP");
test_math_acosh(-831);
test_math_acosh(7.98724653227895e+307);
test_math_acosh("4DOT7KALX");
test_math_acosh(-763);
test_math_acosh("XTLO");
test_math_acosh(5.105612403390216e+306);
test_math_acosh("8XMBRZAC");
test_math_acosh("4ZFPM");
test_math_acosh(1.528824888115748e+308);
test_math_acosh(3.9784646118104375e+307);
test_math_acosh(5.38757375737057e+307);
test_math_acosh("RNBECTC");
test_math_acosh(-55);
test_math_acosh(1.0767109289443698e+308);
test_math_acosh(1.4104102533161122e+308);
test_math_acosh("HM4WHW3U9R");
test_math_acosh(7.329351332160706e+307);
test_math_acosh(2.1021360433270135e+307);
test_math_acosh(-851);
test_math_acosh(7.137009458015782e+307);
test_math_acosh("PWS8C6");
test_math_acosh(-373);
test_math_acosh("ESGWKTRD");
test_math_acosh(8.57544999279833e+307);
test_math_acosh("0MWRW6E");
test_math_acosh("FQTG670K2");
test_math_acosh(1.5346366685286717e+308);
test_math_acosh("I0KRN");
test_math_acosh(-253);
test_math_acosh("MH2FNL893");
test_math_acosh(2.1414305522328837e+307);
test_math_acosh(1.054942502934097e+308);
test_math_acosh(-249);
test_math_acosh(1.6274465241179401e+308);
test_math_acosh(5.371710000752527e+307);
test_math_acosh(1.2724839509251276e+308);
test_math_acosh(-345);
test_math_acosh(-789);
test_math_acosh(-939);
test_math_acosh(1.4934771384057302e+308);
test_math_acosh("VKUSPN2VV");
test_math_acosh("YLAZ6A4L");
test_math_acosh("L5M73GMW");
test_math_acosh(1.5906147640941689e+308);
test_math_acosh(-375);
test_math_acosh(1.2706743083677348e+308);
test_math_acosh(-693);
test_math_acosh(-587);
test_math_acosh(1.777488519570094e+308);
test_math_acosh("PIQXXJIDU");
test_math_acosh(7.651475855949417e+307);
test_math_acosh(-271);
test_math_acosh("Q7UCO");
test_math_acosh(-257);
test_math_acosh("9BJT0UX");
test_math_acosh(1.3014165095671615e+308);
test_math_acosh(1.6365516031420666e+308);
test_math_acosh(-395);
test_math_acosh("FHM7R");
test_math_acosh(-229);
test_math_acosh(-101);
test_math_acosh("7OPWE");
test_math_acosh(3.741485060075843e+307);
test_math_acosh(404);
test_math_acosh(1.265001707088369e+307);
test_math_acosh(-263);
test_math_acosh("8NC5QN0QTU");
test_math_acosh("MUJQ0BN");
test_math_acosh("H5R4Z7Y4");
test_math_acosh("CW2");
test_math_acosh("LAP1");
test_math_acosh(1.1478965156643546e+308);
test_math_acosh(-609);
test_math_acosh("8N7CMZ");
test_math_acosh("DRBOK");
test_math_acosh(9.903259957488743e+307);
test_math_acosh(1.7577564327814665e+308);
test_math_acosh("WL4YLGG8WL");
test_math_acosh(7.538846466999385e+305);
test_math_acosh(-643);
test_math_acosh(-135);
test_math_acosh(1.7541209513027845e+308);
test_math_acosh(-357);
test_math_acosh(1.6111787213919064e+308);
test_math_acosh(7.03771831069639e+307);
test_math_acosh("LX0UYCKZJ");
test_math_acosh(3.145322972373878e+307);
test_math_acosh(7.497682415236508e+307);
test_math_acosh(-153);
test_math_acosh(-483);
test_math_acosh(1.7670707446576668e+308);
test_math_acosh(-537);
test_math_acosh("1YBTN");
test_math_acosh(1.5380915216242365e+308);
test_math_acosh(6.10944693074073e+307);
test_math_acosh("KLI");
test_math_acosh("6ZTY");
test_math_acosh(-15);
test_math_acosh(9.151409899763203e+307);
test_math_acosh("BUR4C9Z2");
test_math_acosh(1.3357558129790516e+308);
test_math_acosh("30Y82Q");
test_math_acosh(1.0051281700953392e+307);
test_math_acosh(6.438257657151514e+307);
test_math_acosh("C32HFIFPBN");
test_math_acosh("GZ37");
test_math_acosh(1.5143281042677298e+308);
test_math_acosh(1.1346752773248677e+308);
test_math_acosh(1.2315948476075317e+308);
test_math_acosh(-269);
test_math_acosh(1.3349151353401377e+306);
test_math_acosh(6.663260267568358e+307);
test_math_acosh(-829);
test_math_acosh("IERL1UGL");
test_math_acosh("UX0ZAKX9T");
test_math_acosh(1.2891613486214808e+308);
test_math_acosh(-297);
test_math_acosh("MNFJKID");
test_math_acosh("V8DJNQX");
test_math_acosh("M438OFIAJC");
test_math_acosh(-321);
test_math_acosh(1.7075662803167522e+308);
test_math_acosh(1.3305850341566966e+308);
test_math_acosh(1.0323300366220279e+308);
test_math_acosh(1.037731469736887e+308);
test_math_acosh("FIFF5F");
test_math_acosh(1.7795802350338004e+308);
test_math_acosh(578);
test_math_acosh(-561);
test_math_acosh(9.415021661490175e+306);
test_math_acosh("0Y2KJ");
test_math_acosh(-317);
test_math_acosh("2EYYD");
test_math_acosh(-861);
test_math_acosh(-29);
test_math_acosh(1.333076067121892e+308);
test_math_acosh(-973);
test_math_acosh("6E0");
test_math_acosh("SFZWI3");
test_math_acosh("2I0SOBSQC");
test_math_acosh(1.1589160555083463e+308);
test_math_acosh(1.0387673570941454e+308);
test_math_acosh(1.2962950390510826e+308);
test_math_acosh(1.76195809239689e+308);
test_math_acosh(3.8192945242157267e+307);
test_math_acosh("4TO06K");
test_math_acosh(6.806555583238392e+307);
test_math_acosh(6.86664654103595e+307);
test_math_acosh("GX86DAAUS");
test_math_acosh(-663);
test_math_acosh("VVVG");
test_math_acosh("B7W0");
test_math_acosh("K12K");
test_math_acosh(1.3637456430520782e+308);
test_math_acosh("P491RBZNM");
test_math_acosh("PFHC");
test_math_acosh(-673);
test_math_acosh("FY7C");
test_math_acosh("C4WHC0H");
test_math_acosh("PZXI");
test_math_acosh(1.4758167879280229e+308);
test_math_acosh("VLS12W7GFI");
test_math_acosh(-711);
test_math_acosh("VN7HJC8Q8S");
test_math_acosh(-485);
test_math_acosh("9M2AMJS17");
test_math_acosh("P3DZ6");
test_math_acosh(-845);
test_math_acosh("ANOR");
test_math_acosh("GE9");
test_math_acosh(4.010668279890424e+306);
test_math_acosh(1.0807595162296811e+308);
test_math_acosh("34MG2BVMGM");
test_math_acosh(1.4557211019489992e+308);
test_math_acosh("YXFIB8SHIZ");
test_math_acosh(-863);
test_math_acosh(-959);
test_math_acosh(8.5029765157189e+306);
test_math_acosh(-821);
test_math_acosh(-523);
test_math_acosh(-303);
test_math_acosh(1.2151373132199554e+307);
test_math_acosh("SJDYH002VN");
test_math_acosh(1.1036960116443211e+308);
test_math_acosh(-339);
test_math_acosh("3NWOGXDH");
test_math_acosh("R0AJAAK66");
test_math_acosh("5O7PUYTXTH");
test_math_acosh("A8ZCZJHM");
test_math_acosh("012");
test_math_acosh("36N7Z");
test_math_acosh(5.112886535261853e+307);
test_math_acosh(1.3640496851004445e+308);
test_math_acosh(3.723887548508211e+307);
test_math_acosh("XMJCFKTM");
test_math_acosh("X2UDE");
test_math_acosh(-421);
test_math_acosh("594WATV");
test_math_acosh("EQL1K");
test_math_acosh("KXJA44");
test_math_acosh(1.6486102164359037e+308);
test_math_acosh("40UMBDMXW");
test_math_acosh("H95W1AY4");
test_math_acosh(6.860995080631344e+307);
test_math_acosh(1.7584902389934049e+308);
test_math_acosh(1.0504626066258296e+306);
test_math_acosh("Q38DCDX");
test_math_acosh(1.5572405133978315e+308);
test_math_acosh(-525);
test_math_acosh("4C30");
test_math_acosh(7.774442061919512e+307);
test_math_acosh("JOYU55");
test_math_acosh(6.216630224087047e+307);
test_math_acosh(6.988324456138857e+307);
test_math_acosh(-769);
test_math_acosh(-559);
test_math_acosh(-505);
test_math_acosh("MJK87EYT0Z");
test_math_acosh("OGUR5BM");
test_math_acosh(-275);
test_math_acosh(-337);
test_math_acosh(-59);
test_math_acosh(1.4399459680475497e+308);
test_math_acosh(-203);
test_math_acosh(9.283283130681167e+306);
test_math_acosh(-143);
test_math_acosh(1.5948884900940814e+308);
test_math_acosh(2.1076644193876187e+307);
test_math_acosh("15G70");
test_math_acosh("JC51F4A7I");
test_math_acosh(2.2626465799143305e+307);
test_math_acosh("N56");
test_math_acosh("8IT8V");
test_math_acosh(2.445866794254607e+307);
test_math_acosh(1.473718667895768e+308);
test_math_acosh(-733);
test_math_acosh("AAWF");
test_math_acosh(-803);
test_math_acosh(4.51754705197815e+307);
test_math_acosh(5.547504887827053e+307);
test_math_acosh("MM4HFYM0");
test_math_acosh(-47);
test_math_acosh("0EJXJ");
test_math_acosh("MDNXTFG");
test_math_acosh(7.149805772859612e+307);
test_math_acosh(4.2996707472732376e+307);
test_math_acosh("TSUXPL01U");
test_math_acosh("XESXVTSO1F");
test_math_acosh(3.754166722944307e+307);
test_math_acosh("INPT7RKULZ");
test_math_acosh("GWLRCGY");
test_math_acosh(-89);
test_math_acosh(-921);
test_math_acosh(1.309543050393834e+308);
test_math_acosh(4.842013554847556e+307);
test_math_acosh("UT1TV");
test_math_acosh(5.123607608306895e+307);
test_math_acosh("MSXFHT6");
test_math_acosh("AS7MYW");
test_math_acosh(1.7483560039884028e+308);
test_math_acosh(1.1544908618593442e+307);
test_math_acosh(-753);
test_math_acosh(1.441056810973437e+308);
test_math_acosh("D26EXG");
test_math_acosh(1.454417145828176e+308);
test_math_acosh("MYDFKR");
test_math_acosh("F9T0O5");
test_math_acosh("31NYDQ");
test_math_acosh("BRTZMMF3P");
test_math_acosh(2.952027841197391e+307);
test_math_acosh(-535);
test_math_acosh("7S827");
test_math_acosh(-443);
test_math_acosh(8.630683252386699e+306);
test_math_acosh("PUO");
test_math_acosh("BKWIJ9PA");
test_math_acosh("ER9TZ");
test_math_acosh(1.4363282473495673e+308);
test_math_acosh("5QP43OW0");
test_math_acosh(-703);
test_math_acosh("UQWQWKTGZ");
test_math_acosh("2C5");
test_math_acosh(1.6394274066706632e+308);
test_math_acosh(9.49453115254181e+307);
test_math_acosh("9WB9G");
test_math_acosh("QX63O");
test_math_acosh(9.679649500142442e+307);
test_math_acosh("X7111RIB");
test_math_acosh(1.284392123415618e+308);
test_math_acosh("SMI1U");
test_math_acosh("2CJKDIANV");
test_math_acosh(-701);
test_math_acosh("SPRMMVBTK");
test_math_acosh(4.133679247796418e+307);
test_math_acosh(8.719783339972615e+307);
test_math_acosh("L9BJ0MCT5F");
test_math_acosh(1.7356186302354287e+308);
test_math_acosh("2L7V7");
test_math_acosh(3.5900239238897567e+307);
test_math_acosh("0K1DA9");
test_math_acosh(1.5487775693402774e+308);
test_math_acosh("4MO");
test_math_acosh("3JSQ23THN8");
test_math_acosh("KL41R6");
test_math_acosh(-935);
test_math_acosh("GPNRPRJ2B");
test_math_acosh(1.335938420898417e+308);
test_math_acosh(6.269243684139221e+307);
test_math_acosh("3IWX");
test_math_acosh(-991);
test_math_acosh("0GRYROLGT0");
test_math_acosh("3L1V1D7");
test_math_acosh(1.1332043118500448e+308);
test_math_acosh(8.089899837666792e+307);
test_math_acosh("R2Z");
test_math_acosh("2PFLGM9WUU");
test_math_acosh("BPX");
test_math_acosh(-903);
test_math_acosh("Q3HF0");
test_math_acosh(7.52865219334829e+306);
test_math_acosh("HPZF9IX2");
