/*
* This file is automatically generated by Swami
*
* 2019-08-08 15:38:19.042619
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
function test_math_fround(x){
	if (Object.is( x,NaN )){
		var output = Math.fround(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if ((Object.is( x,+ 0) && Object.is(x,+ 0) &&  x === - 0  &&  x === + Infinity  &&  x === - Infinity )){
		var output = Math.fround(x);
		assert.strictEqual(x, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}



/*TESTS GENERATED AUTOMATICALLY*/
test_math_fround(NaN);
test_math_fround(1.8508855308603953e+307);
test_math_fround("31X14UO");
test_math_fround(1.2382293168504273e+308);
test_math_fround(true);
test_math_fround(/[\u0400-\u04FF]+/g);
test_math_fround(/(\w+)\s(\w+)/);
test_math_fround(4.539327959542461e+307);
test_math_fround(4.815230570549153e+307);
test_math_fround(1.039418105725617e+308);
test_math_fround(-715);
test_math_fround(/\r\n|\r|\n/);
test_math_fround("5FL5AZ9K");
test_math_fround(Infinity);
test_math_fround("DPN0R6IDJ");
test_math_fround(/yes[^]*day/);
test_math_fround(undefined);
test_math_fround(-455);
test_math_fround("NX22MKIC98");
test_math_fround(-575);
test_math_fround(-815);
test_math_fround(-705);
test_math_fround(false);
test_math_fround("NZS5");
test_math_fround(1.0021657005723081e+308);
test_math_fround(5.764096881754873e+307);
test_math_fround(548);
test_math_fround(-0);
test_math_fround(-101);
test_math_fround(-911);
test_math_fround(-353);
test_math_fround(7.816251388764467e+307);
test_math_fround(-93);
test_math_fround(-877);
test_math_fround(1.6061301112479719e+308);
test_math_fround(1.6954276095561481e+308);
test_math_fround(-889);
test_math_fround("F6Q6N1O3S5");
test_math_fround(-765);
test_math_fround(/[^.]+/);
test_math_fround(-851);
test_math_fround(-129);
test_math_fround(null);
test_math_fround(-57);
test_math_fround("UB235TR");
test_math_fround(/yes.*day/);
test_math_fround(/ab+c/);
test_math_fround("AC1VFO5");
test_math_fround(1.0203349966707984e+308);
test_math_fround(1.6092039599299844e+308);
test_math_fround(2.0312470241663617e+307);
test_math_fround("72AN7XUZ8L");
test_math_fround(-935);
test_math_fround(7.477563218638081e+307);
test_math_fround(-687);
test_math_fround("QY2DM");
test_math_fround(4.061779979537444e+306);
test_math_fround(4.666339233738936e+307);
test_math_fround(4.677542066516398e+307);
test_math_fround(6.457872666611101e+307);
test_math_fround(1.4238093081732016e+307);
test_math_fround(-31);
test_math_fround(/foo/g);
test_math_fround(+0);
test_math_fround("6MU2C");
test_math_fround(-749);
test_math_fround(4.3105559024083193e+307);
test_math_fround("E92YOJN");
test_math_fround(-771);
test_math_fround(3.616010310889453e+307);
test_math_fround(3.283275206861433e+306);
test_math_fround("JJHU4HRT8");
test_math_fround(3.8290765755233306e+307);
test_math_fround(4.635501652459274e+307);
test_math_fround(-173);
test_math_fround("C6EQA78Y0");
test_math_fround(-811);
test_math_fround(1.2214740110911937e+308);
test_math_fround("L3RDPTZ5");
test_math_fround("2GB");
test_math_fround("8QPI6");
test_math_fround(9.954461883253076e+307);
test_math_fround(-865);
test_math_fround("SBJZ");
test_math_fround(-407);
test_math_fround("P5KZ");
test_math_fround(9.169271327480118e+307);
test_math_fround(5.649450578450666e+307);
test_math_fround("EEIM");
test_math_fround(1.4534321710404792e+308);
test_math_fround(1.0867634975423096e+308);
test_math_fround(8.102688400040589e+307);
test_math_fround("W1N4E1A");
test_math_fround(3.5089886577868666e+307);
test_math_fround(1.7234849401994251e+308);
test_math_fround("VFU3CXA");
test_math_fround(-673);
test_math_fround(-919);
test_math_fround("MEQZ8LC4P");
test_math_fround(-91);
test_math_fround(9.587595219982242e+307);
test_math_fround("7OPWE");
test_math_fround(-249);
test_math_fround(-363);
test_math_fround("DUDEWDO5");
test_math_fround(1.4529367387843442e+308);
test_math_fround(1.4748439881003746e+308);
test_math_fround("HGJP");
test_math_fround(4.684748761927591e+307);
test_math_fround("WGR");
test_math_fround(-541);
test_math_fround(-283);
test_math_fround(-259);
test_math_fround(-965);
test_math_fround(-883);
test_math_fround(8.278888508091477e+307);
test_math_fround(1.5236812166158435e+307);
test_math_fround(1.0457861751090015e+308);
test_math_fround(2.1726793492191367e+307);
test_math_fround("CXV6D1700");
test_math_fround(2.4331737183035614e+307);
test_math_fround(1.4161283990881442e+308);
test_math_fround(3.126871344978035e+307);
test_math_fround(-119);
test_math_fround("8ZOG3TTVA");
test_math_fround(-387);
test_math_fround("PHJ9IIC");
test_math_fround(5.643732456465036e+307);
test_math_fround(-341);
test_math_fround(-647);
test_math_fround(1.0070339965735865e+308);
test_math_fround("IPU5");
test_math_fround("B70NCR");
test_math_fround(-253);
test_math_fround(-417);
test_math_fround(-501);
test_math_fround(-593);
test_math_fround("MBA");
test_math_fround(-711);
test_math_fround(1.7500279095257922e+308);
test_math_fround(4.6851746635633344e+306);
test_math_fround(-325);
test_math_fround(-873);
test_math_fround(-993);
test_math_fround(-483);
test_math_fround("V28V");
test_math_fround(9.366491375357804e+306);
test_math_fround(-123);
test_math_fround(1.1993926779401395e+307);
test_math_fround("K2FGHCS6M");
test_math_fround("Z01ZKK7");
test_math_fround(1.705574527960473e+308);
test_math_fround(1.777315510291656e+308);
test_math_fround("OW1TQ");
test_math_fround(-567);
test_math_fround(5.749142223397911e+307);
test_math_fround(-757);
test_math_fround(1.3823498366682967e+308);
test_math_fround(1.7086865300085302e+308);
test_math_fround(3.9128152542106883e+307);
test_math_fround(-445);
test_math_fround(1.4285873791901742e+308);
test_math_fround(-597);
test_math_fround(832);
test_math_fround("LVF");
test_math_fround("39LPMRGV3");
test_math_fround("AEB");
test_math_fround(9.081018910042435e+307);
test_math_fround("2RU6OVO");
test_math_fround("SIRPA");
test_math_fround(-665);
test_math_fround(-907);
test_math_fround("K1RP");
test_math_fround(5.062752918389287e+307);
test_math_fround("Z6F8718X");
test_math_fround(1.1220588110460548e+308);
test_math_fround("5B54EZR1");
test_math_fround("OQU");
test_math_fround("02HN68P1");
test_math_fround("X1F");
test_math_fround(4.582850138615854e+307);
test_math_fround("32765R2");
test_math_fround("72802J");
test_math_fround(7.194023297875697e+306);
test_math_fround(-491);
test_math_fround(-489);
test_math_fround(1.3224145757043195e+307);
test_math_fround(2.9706657446628525e+307);
test_math_fround(-649);
test_math_fround(-623);
test_math_fround("DK8CGSH2C4");
test_math_fround(4.248579894092471e+307);
test_math_fround(-395);
test_math_fround("4X7S512B");
test_math_fround("ITGZ4S6SSX");
test_math_fround(-731);
test_math_fround("NQYZK7CKO");
test_math_fround("C6PNL4N9");
test_math_fround(1.4599311160118893e+308);
test_math_fround("89Z6YBG2LB");
test_math_fround(-609);
test_math_fround(2.528499456074668e+307);
test_math_fround(1.2294917941895083e+308);
test_math_fround("YVC");
test_math_fround(2.9868720639349293e+307);
test_math_fround(4.752357920814247e+307);
test_math_fround(-693);
test_math_fround("E6FHRTFJW1");
test_math_fround("XNTRXZ0F6G");
test_math_fround(1.0279421778787268e+307);
test_math_fround("56B2");
test_math_fround("M7G99479");
test_math_fround(-23);
test_math_fround("JA1W559XE");
test_math_fround(-933);
test_math_fround("L49UUDH3");
test_math_fround(7.467447695786407e+307);
test_math_fround("5QZKT4U3C");
test_math_fround(1.6740092760645398e+308);
test_math_fround(1.7776656901581271e+308);
test_math_fround(-645);
test_math_fround(1.610867912332199e+308);
test_math_fround(-789);
test_math_fround("H26W0PC347");
test_math_fround("9AE");
test_math_fround(-917);
test_math_fround(1.0568989713879908e+306);
test_math_fround(-135);
test_math_fround("BBL1GIV");
test_math_fround(-797);
test_math_fround(-625);
test_math_fround(1.3946018091783357e+307);
test_math_fround(1.6535555178572947e+308);
test_math_fround("TTFT");
test_math_fround(6.044094371062769e+307);
test_math_fround("RX8A236");
test_math_fround("BTV7IJ4");
test_math_fround("1VN0V1MWK");
test_math_fround(-783);
test_math_fround(-637);
test_math_fround("P9RYYD0OPH");
test_math_fround(-205);
test_math_fround("09KJ343");
test_math_fround("3NOQDE9C");
test_math_fround(5.690062649797881e+307);
test_math_fround("K9O8K1T");
test_math_fround(5.432418040451555e+307);
test_math_fround("QFC");
test_math_fround("40IFF2");
test_math_fround(1.3412082492892687e+308);
test_math_fround(1.2422746281350428e+308);
test_math_fround("GWAIRZ");
test_math_fround(-813);
test_math_fround(-383);
test_math_fround(1.4203319267750875e+308);
test_math_fround(-895);
test_math_fround(5.319613779904097e+307);
test_math_fround(-739);
test_math_fround(1.5323899431490026e+307);
test_math_fround(-559);
test_math_fround("ABGU");
test_math_fround(-17);
test_math_fround(1.594194436149689e+308);
test_math_fround("GAGLX3AI");
test_math_fround(1.7470005952563391e+308);
test_math_fround("UXL");
test_math_fround(-955);
test_math_fround("IJRJS0");
test_math_fround(9.318042761974196e+307);
test_math_fround(1.3870967134298417e+308);
test_math_fround("97IX");
test_math_fround("U1Z");
test_math_fround("DWUOPW9");
test_math_fround(-289);
test_math_fround(-703);
test_math_fround(-287);
test_math_fround(1.6575203728670786e+308);
test_math_fround(-133);
test_math_fround(2.947490993270198e+307);
test_math_fround(1.5569447253021182e+308);
test_math_fround(-339);
test_math_fround(-59);
test_math_fround(-727);
test_math_fround("CKKBFSR51");
test_math_fround(1.1383669824111859e+308);
test_math_fround(-397);
test_math_fround(1.4223314113788483e+308);
test_math_fround(1.066025332543043e+308);
test_math_fround(9.731107926845661e+307);
test_math_fround("YBZ4T");
test_math_fround("SIP");
test_math_fround("C88EH6");
test_math_fround(7.292947537466455e+307);
test_math_fround(-871);
test_math_fround(1.4041021593614824e+308);
test_math_fround(1.7091753277332996e+308);
test_math_fround("OA7M6MYE");
test_math_fround(8.384446851797514e+307);
test_math_fround(9.260605142197921e+307);
test_math_fround(-69);
test_math_fround(5.651376580617677e+307);
test_math_fround(-187);
test_math_fround(1.4114248813516547e+308);
test_math_fround(-521);
test_math_fround("CXPAZD0O3M");
test_math_fround("GXX1DA");
test_math_fround("N3ZSPG4E");
test_math_fround("VGENDAP");
test_math_fround(-463);
test_math_fround(1.5923944080667927e+308);
test_math_fround(-667);
test_math_fround("C7DRV7XGY");
test_math_fround("1O6C");
test_math_fround(-635);
test_math_fround("2OLHBFN");
test_math_fround(1.728810464414728e+308);
test_math_fround("ZHYTFS4X");
test_math_fround(-475);
test_math_fround(3.679438493441058e+307);
test_math_fround(-905);
test_math_fround(2.620261633177147e+307);
test_math_fround(-73);
test_math_fround(-113);
test_math_fround(1.618583429354037e+307);
test_math_fround(-733);
test_math_fround("5ZIVYYGQ");
test_math_fround(6.950222205280608e+307);
test_math_fround(-951);
test_math_fround(1.5643675651026712e+308);
test_math_fround("VN9P7LH");
test_math_fround(-719);
test_math_fround("HBUD6EG");
test_math_fround(5.883525916170369e+307);
test_math_fround("QC6DLTG");
test_math_fround(2.326582459784857e+307);
test_math_fround(-921);
test_math_fround(-77);
test_math_fround(4.2925111404323593e+307);
test_math_fround(-21);
test_math_fround("BKB3");
test_math_fround(5.362209603719803e+307);
test_math_fround("02ZK");
test_math_fround(160);
test_math_fround("I7VA83U8");
test_math_fround("FGASD7MP");
test_math_fround(-109);
test_math_fround("0XR1TQ");
test_math_fround(-377);
test_math_fround(-319);
test_math_fround("DXGFYVV3N9");
test_math_fround("3837T0Y9");
test_math_fround(1.7761025792134794e+308);
test_math_fround("7IBP8BV5G");
test_math_fround("464U");
test_math_fround("A8JI3");
test_math_fround(-367);
test_math_fround("9UTCS");
test_math_fround("L2AF47H1P");
test_math_fround("ORIS37K");
test_math_fround("2RFZ");
test_math_fround(-857);
test_math_fround("0L1");
test_math_fround(2.4399020836019237e+307);
test_math_fround(-401);
test_math_fround("H8G3TV");
test_math_fround(4.884015132378702e+307);
test_math_fround(1.779058491870372e+308);
test_math_fround(2.501878575257966e+307);
test_math_fround(1.7654686805921467e+308);
test_math_fround("IYBZ48YY1R");
test_math_fround(-759);
test_math_fround(-879);
test_math_fround(4.710082689076313e+307);
test_math_fround("KYGPFW4U");
test_math_fround("QZ7K");
test_math_fround(-159);
test_math_fround("A31ORA");
test_math_fround(-493);
test_math_fround(7.750551910110659e+307);
test_math_fround("BR9");
test_math_fround(-441);
test_math_fround("1YI");
test_math_fround("BUJLDKT");
test_math_fround(-655);
test_math_fround(4.606898261722398e+307);
test_math_fround("GQBRRX66BN");
test_math_fround(1.7891796976528926e+308);
test_math_fround("H0JC");
test_math_fround(4.958674060569932e+307);
test_math_fround("O91UCJ6S");
test_math_fround(5.606339208403265e+307);
test_math_fround(1.5548026221227027e+308);
test_math_fround(-43);
test_math_fround("57N5");
test_math_fround(5.866579393898967e+307);
test_math_fround("YQJHUV");
test_math_fround(1.7854001057183935e+306);
test_math_fround("9MKLWAVRS");
test_math_fround("LDIRJ");
test_math_fround(1.9047397183779733e+307);
test_math_fround(-149);
test_math_fround("0P34SK19");
test_math_fround("CGR1");
test_math_fround("6VIL1LXQ");
test_math_fround(2.532543231156368e+307);
test_math_fround("EMC819");
test_math_fround("QBS86LYI7M");
test_math_fround("57N98A1HEF");
test_math_fround(-233);
test_math_fround(-557);
test_math_fround("97JM");
test_math_fround(-753);
test_math_fround(8.981566429407402e+307);
test_math_fround(1.1555250187849694e+308);
test_math_fround("6T1");
test_math_fround(-809);
test_math_fround("KWVZLE008Q");
test_math_fround(-211);
test_math_fround(-369);
test_math_fround(7.313974985914608e+307);
test_math_fround("33ZUB8ZCLJ");
test_math_fround(1.7618040351593612e+308);
test_math_fround(1.4921424478290118e+308);
test_math_fround("9VG3ZPN2HR");
test_math_fround("MMYBVUP");
test_math_fround("0AUJRV390");
test_math_fround("U10PW");
test_math_fround("8I3673RD");
test_math_fround("TDPFWC4IC");
test_math_fround(1.747105942540242e+308);
test_math_fround("DV35EFG");
test_math_fround("4R9FW");
test_math_fround(1.343661511250308e+307);
test_math_fround(5.825055932190561e+307);
test_math_fround("8V5HP0L");
test_math_fround("PDSVXOVMRW");
test_math_fround("WBCAKC3");
test_math_fround("7BS");
test_math_fround(7.972216249801803e+307);
test_math_fround(6.137820730099593e+307);
test_math_fround(1.4728786606050081e+308);
test_math_fround(5.316460925803099e+307);
test_math_fround("5EQ");
test_math_fround("4OJ5F08PY");
test_math_fround(1.6331316421844825e+308);
test_math_fround(-967);
test_math_fround(-517);
test_math_fround("HEKII5SGF");
test_math_fround("AR68RA4");
test_math_fround("PQM657");
test_math_fround("UB5R2TMWUU");
test_math_fround("HKMNEL6NH");
test_math_fround(2.847632611959007e+307);
test_math_fround(7.6153317210143e+307);
test_math_fround(-553);
test_math_fround("RJEGZXUV3Q");
test_math_fround(-691);
test_math_fround(1.2085722948054716e+308);
test_math_fround("NMU1SQSW4");
test_math_fround(-349);
test_math_fround(-189);
test_math_fround("7X419");
test_math_fround(1.053387900067592e+308);
test_math_fround(7.631459511794192e+307);
test_math_fround(-587);
test_math_fround("JSHP6T1CH");
test_math_fround(-761);
test_math_fround("6J2Z4Z7");
test_math_fround("WGQF6EQEK");
test_math_fround("2OOY2UHV");
test_math_fround(-261);
test_math_fround("74NFJW3ET");
test_math_fround(1.3741439672315122e+307);
test_math_fround(5.612040280285336e+307);
test_math_fround(-807);
test_math_fround(1.0077342693808885e+308);
test_math_fround("QT3784S");
test_math_fround(2.2631430855336387e+307);
test_math_fround("8FJMJG36");
test_math_fround(1.3927469428737656e+308);
test_math_fround(1.795553081430354e+308);
test_math_fround("Y3FPKWUK");
test_math_fround("WM7TTIBR");
test_math_fround(-331);
test_math_fround(-527);
test_math_fround(7.309201596344328e+307);
test_math_fround("EQ2UX");
test_math_fround(5.964054257607941e+307);
test_math_fround(1.8473147470462212e+307);
test_math_fround(-403);
test_math_fround("E6I8GD0T");
test_math_fround(-279);
test_math_fround(-217);
test_math_fround(1.094691775082116e+307);
test_math_fround(1.051543121467261e+308);
test_math_fround(5.047813445951519e+307);
test_math_fround(-219);
test_math_fround("BVEUPPMQ");
test_math_fround(9.803842998183267e+307);
test_math_fround(9.088172698052424e+307);
test_math_fround(-201);
test_math_fround(-887);
test_math_fround("X8ZLFKCH67");
test_math_fround(-305);
test_math_fround(6.941262242325895e+307);
test_math_fround(-629);
test_math_fround(1.2702092741931492e+307);
test_math_fround("L6H");
test_math_fround(-435);
test_math_fround(-371);
test_math_fround("QWT");
test_math_fround("9LLE2");
test_math_fround(1.4553522365430202e+307);
test_math_fround(5.07653286039886e+307);
test_math_fround("S4EPS71X");
test_math_fround("W7NSQW51X");
test_math_fround(9.854240994158928e+307);
test_math_fround("YKK6");
test_math_fround("WX3");
test_math_fround("PLCE20");
test_math_fround("OG5QLC5A5B");
test_math_fround("A3EDXAPGRV");
test_math_fround("U23TP");
test_math_fround(-231);
test_math_fround(1.7088966526401307e+308);
test_math_fround(4.244426640327695e+307);
test_math_fround("6M7YI5VET");
test_math_fround(-27);
test_math_fround(-67);
test_math_fround("35YY");
test_math_fround(8.40489658257514e+307);
test_math_fround("6XSD");
test_math_fround(9.15990680633935e+307);
test_math_fround(1.776863853510806e+308);
test_math_fround(1.244191448382807e+308);
test_math_fround("G16WD0");
test_math_fround("UIMR520I");
test_math_fround(-915);
test_math_fround(-313);
test_math_fround(1.5152907317537305e+308);
test_math_fround("RVO24T");
test_math_fround("WDYG9A4CPA");
test_math_fround(-755);
test_math_fround("V3SDQTM54");
test_math_fround(5.604715661519203e+307);
test_math_fround("BAGY8OJ");
test_math_fround(-613);
test_math_fround(-563);
test_math_fround("TDHLIZI");
test_math_fround("E3X4M1DF");
test_math_fround(-195);
test_math_fround(2.0012778487542985e+307);
test_math_fround(-389);
test_math_fround(1.2264124519203363e+307);
test_math_fround("O1S");
test_math_fround(1.7623663817055904e+308);
test_math_fround("YZHETAE");
test_math_fround(-555);
test_math_fround(-945);
test_math_fround("QYS4N");
test_math_fround(9.700601512697112e+307);
test_math_fround("54F");
test_math_fround(-179);
test_math_fround("93TZA9DW2F");
test_math_fround("F8OP3CLZS");
test_math_fround(518);
test_math_fround("P8MPG6");
test_math_fround(8.945464637107e+307);
test_math_fround(1.0413411231315015e+308);
test_math_fround(1.0349979457834872e+308);
test_math_fround(2.9609598178030727e+307);
test_math_fround("YXUKA");
test_math_fround(6.327164314657652e+307);
test_math_fround(1.535912591104403e+307);
test_math_fround(9.456723473985578e+307);
test_math_fround(-429);
test_math_fround(1.1674565113975881e+308);
test_math_fround("NIJL7O");
test_math_fround(2.3197023548651915e+307);
test_math_fround("P117");
test_math_fround(-825);
test_math_fround(5.734615456679054e+307);
test_math_fround(-659);
test_math_fround(1.2365035821222676e+308);
test_math_fround(-345);
test_math_fround(-411);
test_math_fround("5EL5TEL");
test_math_fround(1.1816618203553424e+308);
test_math_fround(6.288612362687548e+307);
test_math_fround(-117);
test_math_fround(1.7019325524124888e+308);
test_math_fround(218);
test_math_fround(-785);
test_math_fround(9.61588062668841e+307);
test_math_fround(-913);
test_math_fround("80BIP2M6N");
test_math_fround(5.276020918992535e+307);
test_math_fround(1.0764016965121121e+307);
test_math_fround(-979);
test_math_fround(1.4918471076337812e+308);
test_math_fround(9.233013850437883e+307);
test_math_fround("F8BMNLPHFY");
test_math_fround(-707);
test_math_fround(-337);
test_math_fround(4.422803709351479e+307);
test_math_fround(-975);
test_math_fround("RGRQMOV8IC");
test_math_fround(1.1051964092943785e+308);
test_math_fround(-427);
test_math_fround(1.6279492584486026e+308);
test_math_fround(1.1709083999230502e+308);
test_math_fround("XES03S");
test_math_fround("C96Q");
test_math_fround("LEI3SG9Q6");
test_math_fround(3.534878746312126e+307);
test_math_fround("9ZE");
test_math_fround(-689);
test_math_fround(5.699440747489045e+307);
test_math_fround("3GUZU9J");
test_math_fround("JH3ZU7H");
test_math_fround(-197);
test_math_fround("UPZS1O56");
test_math_fround(1.067553486146734e+308);
test_math_fround(3.506658795674243e+307);
test_math_fround(3.186456244623259e+307);
test_math_fround("7KVBD9DTVK");
test_math_fround(1.3721405678396292e+308);
test_math_fround(4.1097019267272833e+307);
test_math_fround(-87);
test_math_fround(1.3157196994134512e+308);
test_math_fround("JS728KRJ1T");
test_math_fround(-837);
test_math_fround("HQRRD2HG7");
test_math_fround("TP8P7Z7");
test_math_fround("576PVINK");
test_math_fround(-207);
test_math_fround(8.983711247729107e+307);
test_math_fround(-151);
test_math_fround(1.1481586614637248e+308);
test_math_fround("D2XA13P");
test_math_fround("WHFX");
test_math_fround("Z63AY0DCP");
test_math_fround("6DE43PHNV7");
test_math_fround("MZ7Q52");
test_math_fround("D1H");
test_math_fround("YCFLJS7");
test_math_fround("APVPXJT8");
test_math_fround(3.5906187183755706e+307);
test_math_fround("14ZR");
test_math_fround("AKUVR2JT");
test_math_fround("ODHKWSDGA");
test_math_fround(5.584644944724384e+307);
test_math_fround(-657);
test_math_fround(-105);
test_math_fround(1.1348381087189426e+308);
test_math_fround(-565);
test_math_fround(-479);
test_math_fround(1.082908952934305e+308);
test_math_fround(1.887580311433468e+307);
test_math_fround(1.983244451053246e+307);
test_math_fround("6DIV29TI");
test_math_fround(5.423212078635801e+307);
test_math_fround(-393);
test_math_fround(6.511408884782923e+307);
test_math_fround(-3);
test_math_fround(3.5319192622031713e+307);
test_math_fround(-577);
test_math_fround("N50QS");
test_math_fround(-335);
test_math_fround(3.9600373892863744e+307);
test_math_fround("MG1CEF");
test_math_fround(-819);
test_math_fround(1.451755748881799e+308);
test_math_fround(5.53987357169598e+307);
test_math_fround("VF9COZ85Y5");
test_math_fround(8.081416075946666e+307);
test_math_fround("4J9DDX");
test_math_fround(-893);
test_math_fround(6.581611166889661e+307);
test_math_fround("2DENG");
test_math_fround(1.0773002655723586e+308);
test_math_fround(1.2821223159710999e+308);
test_math_fround("YT78X");
test_math_fround(1.0459075114793462e+308);
test_math_fround("JMZL5IXG");
test_math_fround("5A5QXA");
test_math_fround("45M9P8");
test_math_fround(1.237297293417632e+308);
test_math_fround("862");
test_math_fround("2QIRAEN4");
test_math_fround(-419);
test_math_fround("C0DBXS");
test_math_fround(-251);
test_math_fround("3N7");
test_math_fround(5.577089037504153e+306);
test_math_fround(1.2842960267773669e+308);
test_math_fround(1.7364680957517634e+307);
test_math_fround(-503);
test_math_fround(1.3668111381410708e+307);
test_math_fround(1.446845698462301e+308);
test_math_fround(1.6955122425538949e+308);
test_math_fround(-275);
test_math_fround(1.406934445767444e+307);
test_math_fround("292OU");
test_math_fround("9NZOGI");
test_math_fround("RQGI4B7N");
test_math_fround(1.1270268998558643e+308);
test_math_fround(1.2201835581185822e+308);
test_math_fround(1.2901433028268031e+308);
test_math_fround("ZNFQ");
test_math_fround("1ETNWO");
test_math_fround("3U0");
test_math_fround(-449);
test_math_fround("V7D12FRUMH");
test_math_fround(2.5578104561767796e+307);
test_math_fround(1.0630685829311051e+308);
test_math_fround("WHI");
test_math_fround(1.8943566050664595e+307);
test_math_fround(2.04659580539206e+307);
test_math_fround("FNTBUWV5");
test_math_fround("H1CAI9V");
test_math_fround("NG9WMZ34");
test_math_fround("3N6");
test_math_fround("55F3GF26");
test_math_fround("WOO9");
test_math_fround(1.2594079138866523e+308);
test_math_fround(8.171814632695731e+307);
test_math_fround("RRDK");
test_math_fround("02H0T8MID");
test_math_fround("2YLRRF1AD8");
test_math_fround(-681);
test_math_fround(-943);
test_math_fround(5.743826561747633e+307);
test_math_fround(-297);
test_math_fround("00JHI20T");
test_math_fround("NU7");
test_math_fround(-347);
test_math_fround(-987);
test_math_fround(1.3838337371124743e+307);
test_math_fround("FRGG");
test_math_fround(1.251780171174199e+308);
test_math_fround(-591);
test_math_fround("WQZW9I");
test_math_fround(7.790430533733615e+307);
test_math_fround("CWSYT1");
test_math_fround(1.3879545416520218e+308);
test_math_fround(4.3218593806260567e+307);
test_math_fround("YG3");
test_math_fround(1.3232324434447414e+308);
test_math_fround("BETJ14ZO30");
test_math_fround(1.0077608588849837e+308);
test_math_fround(8.817062360064114e+307);
test_math_fround(1.4775243665884336e+308);
test_math_fround(-447);
test_math_fround("XNA2UTSP3");
test_math_fround(1.7492965838580256e+308);
test_math_fround(-737);
test_math_fround(-663);
test_math_fround("RDU");
test_math_fround("I08Z");
test_math_fround(-405);
test_math_fround("ZVYCOSV9");
test_math_fround(3.7807776638155304e+307);
test_math_fround(-307);
test_math_fround(1.2701527641587666e+308);
test_math_fround("O2S4KV7O");
test_math_fround(1.0459403129176498e+308);
test_math_fround(-633);
test_math_fround(9.624150139119408e+307);
test_math_fround(-497);
test_math_fround(1.299219387926404e+308);
test_math_fround(-751);
test_math_fround("UD3CB89JE4");
test_math_fround(9.91196362820206e+307);
test_math_fround("IJ3959JBY");
test_math_fround(-729);
test_math_fround("OJ476RJ");
test_math_fround("NOW");
test_math_fround(1.1382978083555096e+308);
test_math_fround("XHSN");
test_math_fround(-33);
test_math_fround(-95);
test_math_fround(-263);
test_math_fround(8.902678421607191e+307);
test_math_fround(1.2572622678733502e+308);
test_math_fround("CUJ");
test_math_fround(-163);
test_math_fround("KFC9S6");
test_math_fround(-247);
test_math_fround(7.711718156030456e+307);
test_math_fround(7.690055838838446e+307);
test_math_fround(8.80553091668963e+307);
test_math_fround("3JX");
test_math_fround("0RB0");
test_math_fround(-923);
test_math_fround("CMSZ8");
test_math_fround(4.042177975995698e+307);
test_math_fround("0LC");
test_math_fround(1.473300271501613e+308);
test_math_fround("EHMKBO56C");
test_math_fround("OKT48XET4");
test_math_fround(5.070151701117104e+307);
test_math_fround(1.5940057015732204e+308);
test_math_fround("57BFTH7");
test_math_fround(-299);
test_math_fround(-357);
test_math_fround("OBH");
test_math_fround(-215);
test_math_fround("741F");
test_math_fround("0KGH9T4");
test_math_fround(-571);
test_math_fround(-469);
test_math_fround(-355);
test_math_fround("86KO0");
test_math_fround("QMS44MTIHT");
test_math_fround("SQE2DX");
test_math_fround("YQLUG");
test_math_fround("TWC937");
test_math_fround("CY1ZL45IQ");
test_math_fround(-845);
test_math_fround(1.27570478665692e+308);
test_math_fround(2.1463081732553752e+307);
test_math_fround(1.782527317423e+307);
test_math_fround("5IASKJUT0F");
test_math_fround(1.249607921948792e+308);
test_math_fround(6.220080132149284e+307);
test_math_fround(1.4144743798223677e+307);
test_math_fround("GR8R3T");
test_math_fround(8.119077307014818e+307);
test_math_fround(1.3318063658269266e+308);
test_math_fround(1.4550061414094306e+308);
test_math_fround(2.589530657253238e+307);
test_math_fround(1.7126300494182623e+308);
test_math_fround("3EU");
test_math_fround("2U1J40");
test_math_fround("0JGB1");
test_math_fround(1.088967089686172e+308);
test_math_fround("2UN");
test_math_fround(-523);
test_math_fround(1.6974026053711513e+308);
test_math_fround(-303);
test_math_fround(3.317600164314702e+307);
test_math_fround(6.718506554621081e+307);
test_math_fround("3F7WL8R");
test_math_fround(1.7576668496743136e+308);
test_math_fround(9.494478570970108e+307);
test_math_fround(1.7680537616568373e+308);
test_math_fround(1.5425089530016521e+308);
test_math_fround("ZRVEN1");
test_math_fround("39Q");
test_math_fround(1.2668520426362106e+307);
test_math_fround(1.287952696174209e+308);
test_math_fround(-997);
test_math_fround("WUQI");
test_math_fround(-177);
test_math_fround(1.5352066096852898e+308);
test_math_fround(2.9512237111796847e+307);
test_math_fround("3YDJ93W");
test_math_fround("LVL0");
test_math_fround(9.94882384348842e+307);
test_math_fround(2.8329291166421786e+307);
test_math_fround(9.960229536849402e+307);
test_math_fround("KAYM7SGHP8");
test_math_fround("YUFFSQ");
test_math_fround(1.7493161721060924e+308);
test_math_fround(7.821894022094598e+306);
test_math_fround("HR9NM2LO");
test_math_fround(9.50687732982787e+307);
test_math_fround(1.253736916588137e+308);
test_math_fround("V4EEF4QUM3");
test_math_fround(1.3576827391517398e+308);
test_math_fround(-831);
test_math_fround(1.6907558849215486e+308);
test_math_fround(-451);
test_math_fround(1.1418480160527219e+308);
test_math_fround("VV73");
test_math_fround("YJQC");
test_math_fround("TZAYSDGQO");
test_math_fround("KLL");
test_math_fround(-709);
test_math_fround("ABQY6FS1");
test_math_fround("Z7XU1DUZ");
test_math_fround(-643);
test_math_fround("WICU7TT");
test_math_fround("G5214");
test_math_fround(3.8128141569764665e+307);
test_math_fround("1RRNTSQWG");
test_math_fround(-237);
test_math_fround("EPC1Y");
test_math_fround(4.515621326290089e+307);
test_math_fround("19T");
test_math_fround(1.0810287317248546e+308);
test_math_fround("X67T5C10V");
test_math_fround(-169);
test_math_fround(9.064175761458654e+307);
test_math_fround(2.0168476298980505e+307);
test_math_fround("QM5S8");
test_math_fround(9.7283540125605e+307);
test_math_fround("YD08M330NL");
test_math_fround(1.015413293995156e+308);
test_math_fround("VT39JH");
test_math_fround("LXZ6");
test_math_fround(1.0716417895343816e+308);
test_math_fround(9.477434986440904e+307);
test_math_fround(-323);
test_math_fround(-19);
test_math_fround("W26A");
test_math_fround("KUY0F");
test_math_fround(9.785064945401058e+307);
test_math_fround(8.550921365923033e+307);
test_math_fround(-805);
test_math_fround(5.235874174085484e+306);
test_math_fround(1.073481994580469e+308);
test_math_fround("OV2CK2YZJW");
test_math_fround(1.460506611329903e+308);
test_math_fround(2.131142701076493e+307);
test_math_fround("1MX4VB");
test_math_fround(1.1837022717655066e+308);
test_math_fround("Q30TK");
test_math_fround("IO3Z7AY62");
test_math_fround(8.353191166668091e+307);
test_math_fround("KA7");
test_math_fround("VK3X12QI");
test_math_fround("SL6R2G");
test_math_fround("7NJ82W");
test_math_fround(4.2462728128265083e+307);
test_math_fround(1.4365159811565598e+308);
test_math_fround(3.304212445189361e+307);
test_math_fround(-495);
test_math_fround(1.3519100091571986e+308);
test_math_fround("DS697KVI");
test_math_fround(838);
test_math_fround(2.4955956964614325e+306);
test_math_fround(1.3502914832406373e+307);
test_math_fround(1.1575049305682167e+308);
test_math_fround(1.2607505591259694e+308);
test_math_fround(3.7840638018520846e+307);
test_math_fround(9.41331503153399e+307);
test_math_fround(1.2655751605071651e+308);
test_math_fround("W4I357U6");
test_math_fround("V5US7");
test_math_fround("RQMNFW4");
test_math_fround(2.726702620738797e+307);
test_math_fround(1.735256187276137e+308);
test_math_fround(1.5928836529015611e+308);
test_math_fround(-573);
test_math_fround(-793);
test_math_fround(2.8172364425778424e+307);
test_math_fround("D13713WAA");
test_math_fround(1.6684918169214709e+307);
test_math_fround(-443);
test_math_fround(1.4020319532440663e+308);
test_math_fround(-375);
test_math_fround("6474VYZM3");
test_math_fround(-9);
test_math_fround(7.532127944697671e+307);
test_math_fround(9.721799285162937e+307);
test_math_fround("VMETH");
test_math_fround("WJEWW");
test_math_fround(1.761418685511319e+308);
test_math_fround("244GEIRER");
test_math_fround(5.570720470124696e+307);
test_math_fround(3.334213620027542e+307);
test_math_fround(1.613281135760613e+308);
test_math_fround("KTS");
test_math_fround(5.39160641303076e+306);
test_math_fround(-193);
test_math_fround(8.451336398962443e+307);
test_math_fround(1.6013661318658942e+308);
test_math_fround("XM1KL");
test_math_fround(1.5225888616338448e+308);
test_math_fround(-843);
test_math_fround("TBC7WH");
test_math_fround(-41);
test_math_fround(1.792954726595755e+308);
test_math_fround(-267);
test_math_fround("9HIN14HJK");
test_math_fround(-773);
test_math_fround(310);
test_math_fround("40PKP2U");
test_math_fround(4.529437011471605e+307);
test_math_fround("MHQ");
test_math_fround(-931);
test_math_fround("CQ9X3PQO");
test_math_fround("J4K37UX75G");
test_math_fround("9GOUKD");
test_math_fround("7ZGNN69GII");
test_math_fround(1.0112841637706375e+308);
test_math_fround("CWI");
test_math_fround("C45CQ1N");
test_math_fround(7.173325376599316e+306);
test_math_fround(1.6283547762666114e+308);
test_math_fround(1.6539275585170594e+308);
test_math_fround(1.957334781693225e+307);
test_math_fround(2.020438199566403e+307);
test_math_fround("ZAWO2");
test_math_fround(1.8526773792793934e+307);
test_math_fround(5.159511344169652e+307);
test_math_fround("8FPPEKN");
test_math_fround(-531);
