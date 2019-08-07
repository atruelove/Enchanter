/*
* This file is automatically generated by Swami
*
* 2019-08-06 19:24:03.375030
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
function test_number_isnan(number){
	if (( typeof ( number ) != "number" )){
		var output = Number.isNaN(number);
		assert.strictEqual(false, output);
		console.log("Good Test");
		return;
		}
	if (Object.is( number,NaN )){
		var output = Number.isNaN(number);
		assert.strictEqual(true, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}



/*TESTS GENERATED AUTOMATICALLY*/
test_number_isnan(undefined);
test_number_isnan(false);
test_number_isnan(-47);
test_number_isnan("E8SFVFO");
test_number_isnan(1.0148517740064182e+307);
test_number_isnan(-429);
test_number_isnan(-773);
test_number_isnan("YCNH");
test_number_isnan(+0);
test_number_isnan(null);
test_number_isnan(true);
test_number_isnan("FJX9K97NDN");
test_number_isnan(NaN);
test_number_isnan(-137);
test_number_isnan(7.21802461307208e+307);
test_number_isnan(-639);
test_number_isnan(-471);
test_number_isnan("N2BS4HW");
test_number_isnan(1.2991020887768208e+308);
test_number_isnan("P7QT5");
test_number_isnan(/foo/g);
test_number_isnan(2.850689616302529e+307);
test_number_isnan(/ab+c/);
test_number_isnan(/[\u0400-\u04FF]+/g);
test_number_isnan("UM58WOX");
test_number_isnan(-855);
test_number_isnan("L0MWB34");
test_number_isnan(-33);
test_number_isnan(9.674840236299927e+307);
test_number_isnan(-447);
test_number_isnan(-767);
test_number_isnan(/[^.]+/);
test_number_isnan(1.3690077539815442e+308);
test_number_isnan(3.612726362261034e+306);
test_number_isnan(-711);
test_number_isnan("M7D");
test_number_isnan(-871);
test_number_isnan(/\r\n|\r|\n/);
test_number_isnan(-627);
test_number_isnan(-93);
test_number_isnan(Infinity);
test_number_isnan("4UZUINN2");
test_number_isnan("YWXZM5X");
test_number_isnan(1.3764826449164831e+308);
test_number_isnan(1.416634672431008e+308);
test_number_isnan(/(\w+)\s(\w+)/);
test_number_isnan(-117);
test_number_isnan("XI8T");
test_number_isnan(1.0219716121423851e+308);
test_number_isnan("FC4RWY");
test_number_isnan("RVL30NG8V");
test_number_isnan(-781);
test_number_isnan(1.709573191875538e+308);
test_number_isnan(1.3035203721908432e+308);
test_number_isnan("1AITV19");
test_number_isnan("RU3SP8");
test_number_isnan(-685);
test_number_isnan(4.625553734579174e+307);
test_number_isnan(-765);
test_number_isnan(1.3485530393722145e+308);
test_number_isnan(-0);
test_number_isnan("BFDO0G");
test_number_isnan("BL8X8K");
test_number_isnan(1.7346592021371738e+308);
test_number_isnan(-885);
test_number_isnan("SOQCQ5");
test_number_isnan(-751);
test_number_isnan(-835);
test_number_isnan(-41);
test_number_isnan("UA31A");
test_number_isnan("P32K");
test_number_isnan("FOSK");
test_number_isnan(-511);
test_number_isnan("L68");
test_number_isnan(-637);
test_number_isnan("ACA6MJI");
test_number_isnan("KYGF1");
test_number_isnan(-131);
test_number_isnan(1.548461557025132e+304);
test_number_isnan("71DR");
test_number_isnan("RKL7QU");
test_number_isnan(7.535433740293222e+307);
test_number_isnan("BCLUMV");
test_number_isnan(2.816770277015542e+307);
test_number_isnan(-147);
test_number_isnan(1.126419823891233e+308);
test_number_isnan(2.1165739498542148e+307);
test_number_isnan(2.011427438622719e+307);
test_number_isnan(-853);
test_number_isnan(-79);
test_number_isnan(7.41848189838513e+307);
test_number_isnan(-217);
test_number_isnan("G2ZEY0WQ");
test_number_isnan(-693);
test_number_isnan(7.15123074728923e+306);
test_number_isnan(2.8755602634081746e+307);
test_number_isnan(/yes[^]*day/);
test_number_isnan("7PSSR91D");
test_number_isnan("AED5TQ6JP0");
test_number_isnan(1.1983947110986046e+308);
test_number_isnan("6QEL6TF7O6");
test_number_isnan(-489);
test_number_isnan(2.4694255249234996e+307);
test_number_isnan(7.526440317781153e+307);
test_number_isnan(1.0204545048527926e+308);
test_number_isnan("DMXNBAI9");
test_number_isnan(-789);
test_number_isnan(-895);
test_number_isnan(-927);
test_number_isnan(-37);
test_number_isnan(1.11802275229556e+308);
test_number_isnan(-635);
test_number_isnan(1.7323212711411833e+308);
test_number_isnan("JENH2N");
test_number_isnan(-369);
test_number_isnan("FM5D");
test_number_isnan(-173);
test_number_isnan(-119);
test_number_isnan("KSGDA5");
test_number_isnan(1.5015211587990302e+308);
test_number_isnan("HYRI471MQX");
test_number_isnan(-459);
test_number_isnan(-957);
test_number_isnan("ZZIYAT");
test_number_isnan(3.867143063204191e+307);
test_number_isnan(-677);
test_number_isnan("NOFDMV46RY");
test_number_isnan("Q6T");
test_number_isnan(-5);
test_number_isnan(/yes.*day/);
test_number_isnan("CBOOTQD43");
test_number_isnan(1.565640744337233e+308);
test_number_isnan(7.148541773161348e+307);
test_number_isnan(-567);
test_number_isnan(1.1977289597796009e+308);
test_number_isnan("VTQ61U0ND");
test_number_isnan(1.414776600831276e+308);
test_number_isnan("KVW");
test_number_isnan("W8NEICV2");
test_number_isnan(5.938182289949908e+307);
test_number_isnan("2WK");
test_number_isnan(1.3843200534386147e+308);
test_number_isnan(-55);
test_number_isnan(-483);
test_number_isnan("OHTMWIN");
test_number_isnan(-407);
test_number_isnan(3.084481797306625e+307);
test_number_isnan(1.6918012273541072e+308);
test_number_isnan(-689);
test_number_isnan(1.2018568969104965e+308);
test_number_isnan(-411);
test_number_isnan(1.3888434974558735e+308);
test_number_isnan(-249);
test_number_isnan(1.344072895180237e+307);
test_number_isnan("F0FTIJB2");
test_number_isnan(1.6486309450047194e+307);
test_number_isnan(1.3161958002555422e+307);
test_number_isnan("0YFK");
test_number_isnan(-227);
test_number_isnan(-401);
test_number_isnan(2.5388006411820706e+307);
test_number_isnan(-39);
test_number_isnan(1.1268417106839577e+308);
test_number_isnan(2.606763740687778e+307);
test_number_isnan(-999);
test_number_isnan(9.370134684662801e+307);
test_number_isnan(-347);
test_number_isnan("A05F0X1T");
test_number_isnan(-247);
test_number_isnan(-985);
test_number_isnan(1.186760650943568e+308);
test_number_isnan(1.5091295728049397e+308);
test_number_isnan(7.206884742059036e+307);
test_number_isnan(1.0779800655165274e+307);
test_number_isnan("80I5RW");
test_number_isnan("K3KPR8Q");
test_number_isnan("Y1SSAN");
test_number_isnan(-223);
test_number_isnan(3.6905307530317327e+307);
test_number_isnan(-299);
test_number_isnan(8.341810120712222e+307);
test_number_isnan("QMEMTASY");
test_number_isnan(1.614474072149966e+308);
test_number_isnan(1.5147580464155163e+308);
test_number_isnan(-35);
test_number_isnan(1.1788590927655243e+308);
test_number_isnan(1.753534933640488e+307);
test_number_isnan(3.015132695014469e+307);
test_number_isnan("NTP");
test_number_isnan(-155);
test_number_isnan(-441);
test_number_isnan(1.7951612291325531e+308);
test_number_isnan(6.648864793186428e+307);
test_number_isnan(-503);
test_number_isnan("DCOW6BC");
test_number_isnan(-269);
test_number_isnan(-485);
test_number_isnan("P2MQR0M");
test_number_isnan("F33B9WF9D");
test_number_isnan(5.781816505695846e+307);
test_number_isnan("A3WGAW5H");
test_number_isnan(1.2223028200194424e+308);
test_number_isnan(-953);
test_number_isnan(1.4199911878098377e+308);
test_number_isnan("B6F219SS0");
test_number_isnan("X18I");
test_number_isnan(7.130796313497371e+307);
test_number_isnan(9.716087837624552e+307);
test_number_isnan(8.725443739346035e+307);
test_number_isnan(6.582238319085808e+307);
test_number_isnan(-887);
test_number_isnan(-13);
test_number_isnan("1A4KVH7B57");
test_number_isnan(8.306279535286941e+307);
test_number_isnan("91W7A");
test_number_isnan(3.019803109647081e+307);
test_number_isnan(1.0882677223882144e+307);
test_number_isnan("K3Z92");
test_number_isnan(7.732359329586549e+307);
test_number_isnan(1.4494430486259592e+308);
test_number_isnan(-225);
test_number_isnan(-917);
test_number_isnan(1.0503584851821086e+308);
test_number_isnan(1.1910644948865224e+308);
test_number_isnan(5.925419031195263e+307);
test_number_isnan(-875);
test_number_isnan(-203);
test_number_isnan(1.030628296470485e+308);
test_number_isnan("WNAN");
test_number_isnan(-107);
test_number_isnan("31PAC");
test_number_isnan(1.994893586364866e+307);
test_number_isnan(-921);
test_number_isnan("Y2RW");
test_number_isnan(4.6198592914563853e+306);
test_number_isnan(1.6139668854388908e+307);
test_number_isnan("GL7N4YH");
test_number_isnan(-105);
test_number_isnan("J4YD8F");
test_number_isnan("C0PDVYK");
test_number_isnan(-911);
test_number_isnan(-981);
test_number_isnan(1.5764054810885162e+308);
test_number_isnan(6.488451981115221e+307);
test_number_isnan(-791);
test_number_isnan("GEFZ88U");
test_number_isnan(-309);
test_number_isnan(-523);
test_number_isnan(-285);
test_number_isnan(1.6796324846594494e+308);
test_number_isnan(1.3746148876382387e+308);
test_number_isnan(-339);
test_number_isnan(-191);
test_number_isnan(6.84675384060181e+307);
test_number_isnan(-783);
test_number_isnan("GOAMWBOETH");
test_number_isnan("PMTM");
test_number_isnan(1.2766015286684744e+308);
test_number_isnan("Y3KM");
test_number_isnan(-29);
test_number_isnan(1.2218123403644884e+308);
test_number_isnan("1FR5HOQX3");
test_number_isnan("O35");
test_number_isnan(6.12030999283128e+307);
test_number_isnan(1.671780892113106e+308);
test_number_isnan("1NNP31");
test_number_isnan(7.4366510623407e+307);
test_number_isnan(4.393148870895671e+307);
test_number_isnan(1.0231210782785952e+308);
test_number_isnan(9.427214980148067e+307);
test_number_isnan("RB5X0WSC");
test_number_isnan(-437);
test_number_isnan(-843);
test_number_isnan("U1GMO");
test_number_isnan(-307);
test_number_isnan("ETDWA0");
test_number_isnan("9QRN5MQUQY");
test_number_isnan(-319);
test_number_isnan(-815);
test_number_isnan(1.0007500766955729e+308);
test_number_isnan("2ET8U82MPX");
test_number_isnan("GM36C93M");
test_number_isnan("PL93");
test_number_isnan(-481);
test_number_isnan("JE23Q1");
test_number_isnan(1.4105098255420487e+308);
test_number_isnan("2BW9BVR");
test_number_isnan(7.87683802023174e+307);
test_number_isnan("UCO6ULIS");
test_number_isnan("MRA07B");
test_number_isnan("QR9ZZ2G49D");
test_number_isnan(8.143207028831473e+307);
test_number_isnan("WDXFXT");
test_number_isnan("NCOJI");
test_number_isnan(-103);
test_number_isnan("6309OUN22");
test_number_isnan("YBEVPGGSN2");
test_number_isnan(-291);
test_number_isnan(1.1441938828727594e+308);
test_number_isnan("J0ANAFATXD");
test_number_isnan(-209);
test_number_isnan("NPUY5E");
test_number_isnan(9.695489822825332e+307);
test_number_isnan(1.6816365119976545e+308);
test_number_isnan("3FVORB");
test_number_isnan(-859);
test_number_isnan(1.7055886776943748e+308);
test_number_isnan(1.4044189161813214e+308);
test_number_isnan(1.3803157888779236e+308);
test_number_isnan(3.427913330499101e+307);
test_number_isnan(-725);
test_number_isnan(6.050718775445878e+307);
test_number_isnan("5I1PA");
test_number_isnan(5.073235498608614e+307);
test_number_isnan("3MKQDR");
test_number_isnan(-143);
test_number_isnan(1.0121653216702463e+308);
test_number_isnan(-161);
test_number_isnan("8GBHSB");
test_number_isnan(1.7330276625736778e+308);
test_number_isnan("CZQFTSIP1");
test_number_isnan("DJNU0DD4C");
test_number_isnan(1.3336841703153062e+308);
test_number_isnan("CFYX6U");
test_number_isnan("K2ST");
test_number_isnan("X19GJ");
test_number_isnan(-977);
test_number_isnan(3.946871047623089e+307);
test_number_isnan("F3YKBZC4J");
test_number_isnan("714VICN");
test_number_isnan(6.678142130469235e+307);
test_number_isnan(-623);
test_number_isnan(2.782968193565447e+307);
test_number_isnan(3.3242247027892245e+307);
test_number_isnan(-971);
test_number_isnan("FU761KH");
test_number_isnan(-517);
test_number_isnan("RAVR");
test_number_isnan("WJ8LC");
test_number_isnan(-975);
test_number_isnan(6.265242688261328e+307);
test_number_isnan(1.1228801276793079e+308);
test_number_isnan(-643);
test_number_isnan(-231);
test_number_isnan(1.7738753844587163e+307);
test_number_isnan(1.4917067378051549e+308);
test_number_isnan(1.6588956271903985e+308);
test_number_isnan("HV8V7");
test_number_isnan("KIZLE");
test_number_isnan(1.4412090888193718e+308);
test_number_isnan(-541);
test_number_isnan(3.8818872016779527e+307);
test_number_isnan(-943);
test_number_isnan(1.078792140112719e+308);
test_number_isnan("7TBK1YS8GC");
test_number_isnan(-979);
test_number_isnan(-497);
test_number_isnan("QPEO5");
test_number_isnan(-127);
test_number_isnan(-879);
test_number_isnan(-681);
test_number_isnan("5A9TY");
test_number_isnan("V6LS1R8AG");
test_number_isnan("8OG16T4PG");
test_number_isnan(-273);
test_number_isnan("R044");
test_number_isnan("UM3UX");
test_number_isnan(6.765182621745089e+307);
test_number_isnan("4M6XNF5");
test_number_isnan(-15);
test_number_isnan("IKYCU5M");
test_number_isnan(5.14427706727741e+307);
test_number_isnan("KB18YCN");
test_number_isnan("MRKW");
test_number_isnan("1U8BRRBDC");
test_number_isnan(-419);
test_number_isnan("CZBEX2NUM");
test_number_isnan(-449);
test_number_isnan(1.486599945709696e+308);
test_number_isnan(-593);
test_number_isnan("AZISK8E2");
test_number_isnan("0OA0B");
test_number_isnan(5.081125135525278e+307);
test_number_isnan("DJ0");
test_number_isnan("NM575CIW9");
test_number_isnan("SI3D70BW");
test_number_isnan(-721);
test_number_isnan(-439);
test_number_isnan(1.3764266932674101e+308);
test_number_isnan(8.639860422903183e+307);
test_number_isnan(-759);
test_number_isnan(1.3503270134681736e+307);
test_number_isnan("7SBOM40P");
test_number_isnan("29LFAI4");
test_number_isnan(2.2917764122577683e+307);
test_number_isnan(-109);
test_number_isnan(5.639423572977464e+307);
test_number_isnan(1.3283138253476644e+308);
test_number_isnan(-113);
test_number_isnan("VHZ32NSN");
test_number_isnan(-349);
test_number_isnan("452N");
test_number_isnan("V0QH3");
test_number_isnan(7.207916439427699e+307);
test_number_isnan(786);
test_number_isnan("JX1");
test_number_isnan(-77);
test_number_isnan("WYXL");
test_number_isnan("C4F");
test_number_isnan(1000);
test_number_isnan("0HRYPLUS");
test_number_isnan("JPKHBZ1");
test_number_isnan(7.830302668166205e+307);
test_number_isnan(1.9250434478958217e+307);
test_number_isnan(-59);
test_number_isnan(-951);
test_number_isnan(1.772570641018436e+308);
test_number_isnan(1.1174424168396057e+308);
test_number_isnan(7.525079355167011e+307);
test_number_isnan(-3);
test_number_isnan("6HOPT");
test_number_isnan("5CKLEWR3");
test_number_isnan(-615);
test_number_isnan("E94K0N");
test_number_isnan(-563);
test_number_isnan(2.4339952437985676e+307);
test_number_isnan(-607);
test_number_isnan("S9RS7T6");
test_number_isnan(-325);
test_number_isnan(-71);
test_number_isnan(-695);
test_number_isnan("P223");
test_number_isnan("PP88KQ");
test_number_isnan("6PZO9Q08");
test_number_isnan("KOPR1Y");
test_number_isnan(-581);
test_number_isnan("EICOOM");
test_number_isnan("8G8");
test_number_isnan("4CSVCJLAM");
test_number_isnan(1.1858997830196719e+308);
test_number_isnan(-293);
test_number_isnan(5.113622740194473e+307);
test_number_isnan("W0X18E6S");
test_number_isnan(-947);
test_number_isnan("LIV5L0QSF");
test_number_isnan("98G8YSSU7Q");
test_number_isnan(1.1984401420480145e+308);
test_number_isnan(-149);
test_number_isnan("EDSH1S");
test_number_isnan("TS3OHP");
test_number_isnan("BC20K0E");
test_number_isnan(8.911378437894392e+307);
test_number_isnan(7.566483668437982e+307);
test_number_isnan(1.6904527587591853e+308);
test_number_isnan(1.0415459550461641e+308);
test_number_isnan(-683);
test_number_isnan(-555);
test_number_isnan(1.4469061723300222e+308);
test_number_isnan(-507);
test_number_isnan("JNY64MI3NN");
test_number_isnan("E96XRFS");
test_number_isnan(-469);
test_number_isnan(1.4005460153690657e+308);
test_number_isnan(1.6160956852100549e+308);
test_number_isnan(-177);
test_number_isnan("TN9");
test_number_isnan("YQSB9DMF");
test_number_isnan("BDLRE");
test_number_isnan(3.5511020508356333e+307);
test_number_isnan("MKL9DUVR1S");
test_number_isnan(1.2807451660730278e+305);
test_number_isnan("XMHVN");
test_number_isnan(1.7084745251048393e+308);
test_number_isnan(1.352884479317614e+308);
test_number_isnan("HI7QPRUWMO");
test_number_isnan("GYXU");
test_number_isnan(-535);
test_number_isnan(6.031288317971991e+307);
test_number_isnan("MNLOU5V");
test_number_isnan(3.6390843513456755e+307);
test_number_isnan(3.279208298451437e+307);
test_number_isnan("M7LU");
test_number_isnan("Z61GODK");
test_number_isnan(1.2266531012367643e+308);
test_number_isnan(1.4828741947893673e+308);
test_number_isnan("POPT9DH");
test_number_isnan(-995);
test_number_isnan(-691);
test_number_isnan("6XBWX");
test_number_isnan(5.963074950826792e+307);
test_number_isnan(-551);
test_number_isnan(3.4298534043976503e+307);
test_number_isnan(-515);
test_number_isnan("KH3");
test_number_isnan(5.728140475585315e+306);
test_number_isnan(-697);
test_number_isnan(1.5533645237362703e+308);
test_number_isnan("SBXJSF");
test_number_isnan(-375);
test_number_isnan("78QEO");
test_number_isnan("HKYNWXS11Y");
test_number_isnan("AA9B");
test_number_isnan(1.2866314347451404e+306);
test_number_isnan("JHVBTPT");
test_number_isnan(-145);
test_number_isnan("3MKW4N2C");
test_number_isnan(-941);
test_number_isnan("X49");
test_number_isnan(-531);
test_number_isnan("28M");
test_number_isnan(-363);
test_number_isnan("2T7");
test_number_isnan(1.2319570258571971e+308);
test_number_isnan(1.4129287320698569e+308);
test_number_isnan(3.3990314063183296e+307);
test_number_isnan(-817);
test_number_isnan("DLCEARKYV");
test_number_isnan(-589);
test_number_isnan(-499);
test_number_isnan(1.1401742589981338e+308);
test_number_isnan(-525);
test_number_isnan(5.120755833155667e+307);
test_number_isnan(1.5664504523474208e+308);
test_number_isnan("1A3V8H");
test_number_isnan(1.2159692861804236e+308);
test_number_isnan(6.400334021653483e+307);
test_number_isnan(5.274883692433448e+307);
test_number_isnan(1.2148867497150598e+308);
test_number_isnan(8.174277561440383e+307);
test_number_isnan("IVG0KI1UQ7");
test_number_isnan(-343);
test_number_isnan("75J5MSKIB");
test_number_isnan("LZH7");
test_number_isnan("E4ZSYIUAB");
test_number_isnan(1.3772451071644294e+308);
test_number_isnan(9.427596739671168e+307);
test_number_isnan("YUI3RA3D4");
test_number_isnan("0FR0I5P");
test_number_isnan("HVEW");
test_number_isnan(-761);
test_number_isnan(6.526543837966485e+307);
test_number_isnan(1.784155443993196e+308);
test_number_isnan(4.990314137603833e+307);
test_number_isnan(1.4513432958963612e+307);
test_number_isnan("J5VSETI");
test_number_isnan("MIW7F159");
test_number_isnan(-101);
test_number_isnan("HHYR");
test_number_isnan(1.8854045752409015e+307);
test_number_isnan("TPIP");
test_number_isnan(3.6280693749531725e+306);
test_number_isnan(1.3967459346872673e+308);
test_number_isnan("31OUT6THW9");
test_number_isnan(1.3935995667602943e+308);
test_number_isnan("DUNX4SQ");
test_number_isnan(5.366073709547376e+307);
test_number_isnan("7LS3Z3P0D");
test_number_isnan(-385);
test_number_isnan(2.1883131365711333e+307);
test_number_isnan("7C5OSE");
test_number_isnan(1.3575745312292043e+308);
test_number_isnan(5.371886282576834e+307);
test_number_isnan(-63);
test_number_isnan("4SO9B2FMTJ");
test_number_isnan(5.238051551167421e+307);
test_number_isnan(-159);
test_number_isnan("79I1");
test_number_isnan(1.7407887740905766e+308);
test_number_isnan(-819);
test_number_isnan("6J2Z4Z7");
test_number_isnan(1.7159267581847077e+308);
test_number_isnan("K2YU16BGM");
test_number_isnan(-901);
test_number_isnan("33CM");
test_number_isnan(-709);
test_number_isnan("PYYLT50");
test_number_isnan("V705MS69K");
test_number_isnan("Q874");
test_number_isnan(-629);
test_number_isnan(-757);
test_number_isnan("8HUJQLX");
test_number_isnan(6.748741024679387e+307);
test_number_isnan("HG553Z");
test_number_isnan(-373);
test_number_isnan(-915);
test_number_isnan("ZP97XP");
test_number_isnan(-903);
test_number_isnan(8.731225593386084e+307);
test_number_isnan("80T8IRB");
test_number_isnan("KL20O10");
test_number_isnan(7.348503388909759e+307);
test_number_isnan(-913);
test_number_isnan("TFZJ8ORRMY");
test_number_isnan(-513);
test_number_isnan(2.0139281918007312e+307);
test_number_isnan("NGL");
test_number_isnan(-877);
test_number_isnan(-185);
test_number_isnan(-873);
test_number_isnan("6R2J");
test_number_isnan(-893);
test_number_isnan("289AY");
test_number_isnan("324CG");
test_number_isnan(9.407982703369262e+307);
test_number_isnan("VH34GZKE");
test_number_isnan("GI98GSIZ");
test_number_isnan(1.4391679924690797e+308);
test_number_isnan(-549);
test_number_isnan("QRKO9GX09S");
test_number_isnan("NXFNNACY");
test_number_isnan(5.45801408894462e+307);
test_number_isnan(8.212966622716745e+307);
test_number_isnan(1.6363200795323599e+308);
test_number_isnan("NIYH81");
test_number_isnan(1.2491419024551952e+308);
test_number_isnan(7.441149093643994e+307);
test_number_isnan(8.028930397461437e+307);
test_number_isnan("RW9V");
test_number_isnan("K2EP");
test_number_isnan(-239);
test_number_isnan(-391);
test_number_isnan("P1OLC");
test_number_isnan(-733);
test_number_isnan(-501);
test_number_isnan("FU4LGO0S");
test_number_isnan("MDQ0LWTD");
test_number_isnan(-279);
test_number_isnan(-365);
test_number_isnan(-383);
test_number_isnan("18JZP0SGVR");
test_number_isnan(1.7693792725821991e+308);
test_number_isnan("2BSCY9U8ZG");
test_number_isnan(9.276186637048017e+307);
test_number_isnan(-405);
test_number_isnan(-53);
test_number_isnan("ONYK3EP9");
test_number_isnan("60DU");
test_number_isnan("YUW");
test_number_isnan(6.201636475407427e+307);
test_number_isnan(1.5621590597904106e+308);
test_number_isnan(1.5723770540959636e+308);
test_number_isnan("ZIGSX1Z");
test_number_isnan("B3UEMCUVF");
test_number_isnan("ODM5F");
test_number_isnan("V870");
test_number_isnan("VGDVBHHI1F");
test_number_isnan(-205);
test_number_isnan("KHR2");
test_number_isnan("EZSP25VI");
test_number_isnan("QQ0OCZ8G");
test_number_isnan("4BKZJWHW");
test_number_isnan("UZKJSDR");
test_number_isnan("DATZI7X");
test_number_isnan("EZMITEA0");
test_number_isnan(7.39242780288944e+307);
test_number_isnan(-327);
test_number_isnan(-357);
test_number_isnan("RDY0FUSV");
test_number_isnan(-851);
test_number_isnan(-605);
test_number_isnan(-509);
test_number_isnan("SE0RTD");
test_number_isnan("NAYUFT7");
test_number_isnan(-317);
test_number_isnan(-601);
test_number_isnan(4.526221553049969e+307);
test_number_isnan(-543);
test_number_isnan("9MD");
test_number_isnan(2.658213660006234e+307);
test_number_isnan(-539);
test_number_isnan(-667);
test_number_isnan("81U");
test_number_isnan("EPPLUI");
test_number_isnan(5.797451287970597e+307);
test_number_isnan(1.440110038947036e+308);
test_number_isnan("31HS");
test_number_isnan(3.180745406921831e+307);
test_number_isnan("EJQ2POZFB2");
test_number_isnan("GX3");
test_number_isnan(2.747140582596002e+307);
test_number_isnan(5.086495318655174e+307);
test_number_isnan(-743);
test_number_isnan(1.4960942077525373e+308);
test_number_isnan(1.7838663325397969e+308);
test_number_isnan(-807);
test_number_isnan(2.35358345226447e+307);
test_number_isnan(1.1465126241298464e+308);
test_number_isnan(-599);
test_number_isnan(2.1805981354271622e+307);
test_number_isnan("DR9WXG");
test_number_isnan("RG4XA");
test_number_isnan(-467);
test_number_isnan("GI51");
test_number_isnan(-779);
test_number_isnan(-625);
test_number_isnan(1.1979474044805493e+308);
test_number_isnan("DBDBS");
test_number_isnan(1.6711446222072074e+308);
test_number_isnan(8.309495576282948e+307);
test_number_isnan(-621);
test_number_isnan("8P26QO");
test_number_isnan(1.267874644562009e+308);
test_number_isnan("65CXK");
test_number_isnan("SU05U");
test_number_isnan("I6J9OK9J4");
test_number_isnan(-939);
test_number_isnan(2.275626414673496e+307);
test_number_isnan("S6PEI5");
test_number_isnan(8.575234975636104e+307);
test_number_isnan(-753);
test_number_isnan(7.959732680191254e+307);
test_number_isnan(4.13271143952464e+307);
test_number_isnan(3.4126650378002584e+307);
test_number_isnan("0AXM");
test_number_isnan("ED6WAJ");
test_number_isnan("PL3TP");
test_number_isnan(3.314353529735426e+307);
test_number_isnan(1.0944806840355044e+308);
test_number_isnan("QKHDNGI9DX");
test_number_isnan(3.887832316979004e+307);
test_number_isnan(4.3994986577613684e+306);
test_number_isnan(9.870968995121205e+307);
test_number_isnan(1.519799636112457e+308);
test_number_isnan(2.9560724176179724e+307);
test_number_isnan(-1);
test_number_isnan("AES");
test_number_isnan(550);
test_number_isnan(1.7570141656750252e+308);
test_number_isnan(-811);
test_number_isnan(1.2985092325897088e+308);
test_number_isnan(-833);
test_number_isnan("R2OQ8UL4E");
test_number_isnan("SSP3");
test_number_isnan(-45);
test_number_isnan(-25);
test_number_isnan(1.2012607950694193e+308);
test_number_isnan(8.40066478504852e+307);
test_number_isnan(9.275457575722696e+306);
test_number_isnan("ICNS");
test_number_isnan("FR1V7TUE0");
test_number_isnan("DKPD2F393");
test_number_isnan(1.2674313159143219e+308);
test_number_isnan(1.7436640693059761e+308);
test_number_isnan("A8JSV0R9X");
test_number_isnan(1.506029331182909e+308);
test_number_isnan(3.898316653070921e+307);
test_number_isnan(4.120830558500568e+307);
test_number_isnan("UXJMWO269E");
test_number_isnan(-237);
test_number_isnan(5.799640557468377e+307);
test_number_isnan(-647);
test_number_isnan(1.4608968373817158e+308);
test_number_isnan(5.75637744719618e+307);
test_number_isnan(1.0256316145573295e+308);
test_number_isnan(-353);
test_number_isnan("TZO9");
test_number_isnan(7.577590420013527e+307);
test_number_isnan("066O9");
test_number_isnan(7.952506572311742e+307);
test_number_isnan(-433);
test_number_isnan("05OG6IPP84");
test_number_isnan("MR6KB");
test_number_isnan("VJP");
test_number_isnan(1.1314083347898939e+308);
test_number_isnan("LGO");
test_number_isnan(9.6543117094949e+307);
test_number_isnan(1.142044985937409e+308);
test_number_isnan(1.4654072043987755e+307);
test_number_isnan("ZB76INT2O");
test_number_isnan(4.440111822566449e+307);
test_number_isnan(1.042824295346206e+308);
test_number_isnan(1.4529702711901048e+308);
test_number_isnan("0E28E8G");
test_number_isnan("S2NGRW3");
test_number_isnan(7.232142493860089e+307);
test_number_isnan(-179);
test_number_isnan("UT4G7");
test_number_isnan(-11);
test_number_isnan("GHEQS");
test_number_isnan("3Y5");
test_number_isnan(1.3102258084580078e+308);
test_number_isnan(-657);
test_number_isnan(9.456110811156773e+307);
test_number_isnan("1AQ42");
test_number_isnan(-799);
test_number_isnan("TD1");
test_number_isnan(-393);
test_number_isnan("THX");
test_number_isnan(1.275905586623677e+308);
test_number_isnan("VK253O0Y");
test_number_isnan("UOZSXOO04");
test_number_isnan(-345);
test_number_isnan("W7DF5L");
test_number_isnan("EJLUX");
test_number_isnan(-387);
test_number_isnan("ODRB");
test_number_isnan(1.4673695132589334e+308);
test_number_isnan(2.755550355040822e+307);
test_number_isnan("FXIAMV");
test_number_isnan(-633);
test_number_isnan("BKMQO3J");
test_number_isnan(-739);
test_number_isnan(8.961200546933879e+307);
test_number_isnan("VHXFD0X");
test_number_isnan("CM275T");
test_number_isnan("NB5");
test_number_isnan("3B4");
test_number_isnan(6.569171826618761e+307);
test_number_isnan("UX03");
test_number_isnan(-813);
test_number_isnan("3WMK");
test_number_isnan(-463);
test_number_isnan("OAH9V3");
test_number_isnan("5C8OT2W7");
test_number_isnan(1.1750530602150327e+308);
test_number_isnan(7.891064396315418e+307);
test_number_isnan(1.0596307690809611e+308);
test_number_isnan(5.067428513331178e+307);
test_number_isnan(8.014017048365271e+307);
test_number_isnan("A3BXDB");
test_number_isnan("H1PLONC");
test_number_isnan(1.747871274376925e+308);
test_number_isnan(1.3347337194657667e+308);
test_number_isnan("3DU");
test_number_isnan("AWRMT32D");
test_number_isnan(4.2013295161777653e+307);
test_number_isnan(-997);
test_number_isnan("F52Y3WERTX");
test_number_isnan("AI0J");
test_number_isnan("CG6VIO9");
test_number_isnan(1.7853226903244719e+308);
test_number_isnan("C4K6M0ODF");
test_number_isnan("0MUB42XUV");
test_number_isnan(4.929211155727956e+307);
test_number_isnan(4.009886265973924e+307);
test_number_isnan(1.3257758787700449e+307);
test_number_isnan("SZN");
test_number_isnan("2GJ3N");
test_number_isnan(-23);
test_number_isnan(-991);
test_number_isnan("T4OP81EN0E");
test_number_isnan("035K7N");
test_number_isnan(2.252248843721655e+307);
test_number_isnan("LHMYSD");
test_number_isnan(888);
test_number_isnan(7.659653151961051e+307);
test_number_isnan(7.488506828925932e+307);
test_number_isnan(1.1235214016440585e+308);
test_number_isnan(7.026855317386194e+307);
test_number_isnan("HITC4LQRT1");
test_number_isnan("1WMXA");
test_number_isnan(1.5456686799788468e+308);
test_number_isnan("PZEFZX");
test_number_isnan(6.39620045505709e+307);
test_number_isnan("2KQIHLED");
test_number_isnan(320);
test_number_isnan(1.4912821790390904e+308);
test_number_isnan(1.1426646768608252e+308);
test_number_isnan("GPCF");
test_number_isnan(-377);
test_number_isnan(-121);
test_number_isnan("1L7XF");
test_number_isnan(1.6668630423866975e+308);
test_number_isnan(1.490197408421975e+308);
test_number_isnan(-311);
test_number_isnan(7.327499489693695e+306);
test_number_isnan("5IF6E76ZHH");
test_number_isnan(-645);
test_number_isnan(1.0598380434787742e+308);
test_number_isnan("3WOGRS");
test_number_isnan("PDKZ3Q");
test_number_isnan("7SK0");
test_number_isnan(3.205911413339379e+307);
test_number_isnan(9.08803373721083e+307);
test_number_isnan(1.6103820112078634e+308);
test_number_isnan("RF8");
test_number_isnan("455");
test_number_isnan(5.832156531927627e+307);
test_number_isnan("52QWH");
test_number_isnan("BNECKKXX");
test_number_isnan(9.497625541665993e+307);
test_number_isnan(-253);
test_number_isnan(-889);
test_number_isnan("414JA");
test_number_isnan("4V32FZP");
test_number_isnan(-201);
test_number_isnan(-945);
test_number_isnan(1.5545563012961419e+308);
test_number_isnan(1.7820836337010732e+308);
test_number_isnan("PCNT490F");
test_number_isnan("P7UK");
test_number_isnan(-521);
test_number_isnan(1.3367742254820651e+308);
test_number_isnan("B1ROMCW");
test_number_isnan(1.6136263687048566e+308);
test_number_isnan(-687);
test_number_isnan("UU76XXPI");
test_number_isnan(2.3104135092711414e+307);
test_number_isnan(-153);
test_number_isnan(-595);
test_number_isnan(1.0555376164528024e+308);
test_number_isnan(-243);
test_number_isnan(-573);
test_number_isnan("LA891");
test_number_isnan(1.4536874056156915e+308);
test_number_isnan(1.5519314639569015e+307);
test_number_isnan(7.124832241239388e+306);
test_number_isnan(-475);
test_number_isnan(-987);
test_number_isnan(1.2077305203378517e+307);
test_number_isnan(4.086644346638995e+307);
test_number_isnan("ZN8Z");
test_number_isnan("OHRJM6CQO3");
test_number_isnan(-197);
test_number_isnan(4.496232808294003e+307);
test_number_isnan("LDQZP");
test_number_isnan(1.449396524741831e+308);
test_number_isnan("NN0H3U2Z");
test_number_isnan("A2D1NWOIRQ");
test_number_isnan("FJIHTF1E4Y");
test_number_isnan(-613);
test_number_isnan(-487);
test_number_isnan("1ADWZS");
test_number_isnan(5.805842166097195e+306);
test_number_isnan(-491);
test_number_isnan(5.851183993458444e+307);
test_number_isnan(9.137863795661446e+307);
test_number_isnan(-395);
test_number_isnan(2.1299761914631123e+307);
test_number_isnan(1.6413249472328339e+308);
test_number_isnan(7.389131163851532e+307);
test_number_isnan(-741);
test_number_isnan(-907);
test_number_isnan(1.2566769915307992e+308);
test_number_isnan(-919);
test_number_isnan("HDWKEL8P6Z");
test_number_isnan(1.0689765908975481e+308);
test_number_isnan(1.5114471162915513e+308);
test_number_isnan("8MCRN3");
test_number_isnan(-19);
test_number_isnan(-707);
test_number_isnan(6.273718671838329e+307);
test_number_isnan("4MSCZLOH");
test_number_isnan("QAFUN");
test_number_isnan("TWOC5");
test_number_isnan(-91);
test_number_isnan(1.373587747272295e+308);
test_number_isnan(-141);
test_number_isnan("K7NOVAU9");
test_number_isnan("EZ9OZ");
test_number_isnan("HZMDAG");
test_number_isnan("ZI0HZLBA");
test_number_isnan("54MQT965");
test_number_isnan(-967);
test_number_isnan(7.729354570039154e+307);
test_number_isnan("UJ5DF");
test_number_isnan(1.0733779536973833e+307);
test_number_isnan("Z3Z92N");
test_number_isnan("BRE07P");
test_number_isnan(-545);
test_number_isnan(-57);
test_number_isnan(-935);
test_number_isnan(6.131436179182253e+307);
test_number_isnan(1.9477716034918457e+307);
test_number_isnan(-775);
test_number_isnan(-803);
test_number_isnan(-89);
test_number_isnan("DLAQQP3Y");
test_number_isnan("B4M4");
test_number_isnan("TVF3E6HHS");
test_number_isnan(1.0223962329872357e+307);
test_number_isnan(-955);
test_number_isnan(1.47458025560896e+308);
test_number_isnan(4.590948688126273e+307);
test_number_isnan("XHJEPTZ03");
test_number_isnan(-417);
test_number_isnan(1.575914864345546e+307);
test_number_isnan("VHYHN49N");
test_number_isnan("522");
test_number_isnan("20YSE0H");
test_number_isnan(6.396923608773454e+307);
test_number_isnan(1.3213935895685346e+308);
test_number_isnan("QXOA3H7ETC");
test_number_isnan(-865);
test_number_isnan("1BYTHV");
test_number_isnan("GQYR");
test_number_isnan("RRVWUMF5N9");
test_number_isnan(-399);
test_number_isnan(5.765446776077528e+307);
test_number_isnan(-99);
test_number_isnan("75XKBISNY");
test_number_isnan("5RN3");
test_number_isnan("O0QA0KN");
test_number_isnan("Z1IXWM");
test_number_isnan("B4368VX");
test_number_isnan(1.263490307085266e+308);
test_number_isnan(2.56204360348884e+307);
test_number_isnan("3ZBUW");
test_number_isnan("9YQJ0");
test_number_isnan("ML1O");
