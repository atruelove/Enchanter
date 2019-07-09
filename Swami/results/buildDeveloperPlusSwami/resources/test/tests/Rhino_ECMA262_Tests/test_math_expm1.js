/*
* This file is automatically generated by Swami
*
* 2019-01-09 23:18:30.140103
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
function test_math_expm1(x){
	if (Object.is( x,NaN )){
		var output = Math.expm1(x);
		new TestCase("math_expm1", "math_expm1", NaN, output);
		test();
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.expm1(x);
		new TestCase("math_expm1", "math_expm1", + 0, output);
		test();
		return;
		}
	if (Object.is( x,-0 )){
		var output = Math.expm1(x);
		new TestCase("math_expm1", "math_expm1", -0, output);
		test();
		return;
		}
	if (( x === + Infinity )){
		var output = Math.expm1(x);
		new TestCase("math_expm1", "math_expm1", + Infinity, output);
		test();
		return;
		}
	if (( x === -Infinity )){
		var output = Math.expm1(x);
		new TestCase("math_expm1", "math_expm1", -1, output);
		test();
		return;
		}
}



/*TESTS GENERATED AUTOMATICALLY*/
test_math_expm1(false);
test_math_expm1(-687);
test_math_expm1(2.0711656808545862e+307);
test_math_expm1("2NXZEF4SK");
test_math_expm1(true);
test_math_expm1(/foo/g);
test_math_expm1("4UHEU2TAYT");
test_math_expm1(-0);
test_math_expm1(1.4362772132862128e+308);
test_math_expm1(NaN);
test_math_expm1("MIMP0K");
test_math_expm1(-639);
test_math_expm1(5.756707329357568e+307);
test_math_expm1(/yes.*day/);
test_math_expm1(-275);
test_math_expm1(-821);
test_math_expm1("ODHDUD33");
test_math_expm1(/yes[^]*day/);
test_math_expm1("J1BO6VJR");
test_math_expm1(5.609250286923302e+307);
test_math_expm1(-233);
test_math_expm1(-349);
test_math_expm1(1.7620600799780818e+308);
test_math_expm1(Infinity);
test_math_expm1(/(\w+)\s(\w+)/);
test_math_expm1("P0GC");
test_math_expm1(9.787789956982834e+307);
test_math_expm1(2.4579315616440252e+306);
test_math_expm1("ILV9J4QA");
test_math_expm1(/ab+c/);
test_math_expm1(-413);
test_math_expm1("AFSV2UXZ");
test_math_expm1(undefined);
test_math_expm1(7.242564428155e+307);
test_math_expm1(/\r\n|\r|\n/);
test_math_expm1(1.6173196668649235e+308);
test_math_expm1(-977);
test_math_expm1("RVFH3C5IPT");
test_math_expm1(1.4334060009434147e+308);
test_math_expm1(+0);
test_math_expm1(1.528295388044188e+308);
test_math_expm1("5GFCDNQJEF");
test_math_expm1(/[\u0400-\u04FF]+/g);
test_math_expm1(3.3782124831693436e+307);
test_math_expm1("8Q7JNYHZ9");
test_math_expm1(4.785821994695639e+307);
test_math_expm1(1.4197009364819844e+308);
test_math_expm1(-887);
test_math_expm1(-947);
test_math_expm1("8UQK");
test_math_expm1(2.8168507763953384e+307);
test_math_expm1(8.572945265187618e+306);
test_math_expm1(-249);
test_math_expm1(-417);
test_math_expm1(-217);
test_math_expm1(1.1793137709528566e+308);
test_math_expm1(-663);
test_math_expm1(-3);
test_math_expm1("JRPB");
test_math_expm1("6WDD7GN49J");
test_math_expm1("4FQC749Z");
test_math_expm1("DJ10T");
test_math_expm1("PAFGFI");
test_math_expm1("FHQTG");
test_math_expm1(4.963016038864381e+307);
test_math_expm1(7.451056833851151e+307);
test_math_expm1(-495);
test_math_expm1(3.787649478284831e+307);
test_math_expm1("2GW");
test_math_expm1("OUFE7B5");
test_math_expm1(/[^.]+/);
test_math_expm1("59ZRVMX0");
test_math_expm1(2.1940794442163315e+307);
test_math_expm1(-137);
test_math_expm1(5.929280877467677e+306);
test_math_expm1("LPPV8A9I");
test_math_expm1("7BY");
test_math_expm1(5.684920125316101e+307);
test_math_expm1("ADS");
test_math_expm1(1.333211067650311e+308);
test_math_expm1("YC5X");
test_math_expm1(-485);
test_math_expm1(1.6529948373776351e+308);
test_math_expm1(2.986639016114447e+307);
test_math_expm1(1.020523294743576e+308);
test_math_expm1(5.774986986952434e+307);
test_math_expm1(-603);
test_math_expm1(-835);
test_math_expm1("U5VNBET8ES");
test_math_expm1("X72N92AFXS");
test_math_expm1("3WSOGHG8P");
test_math_expm1("GLPB11V7S");
test_math_expm1(1.2634647535574902e+308);
test_math_expm1(-599);
test_math_expm1(-29);
test_math_expm1(-211);
test_math_expm1(1.2011008528503406e+308);
test_math_expm1("JZEU5XNTF");
test_math_expm1(1.4851557367490019e+308);
test_math_expm1(6.139995746362908e+307);
test_math_expm1(2.1214949725761422e+307);
test_math_expm1(1.2191691617676814e+308);
test_math_expm1("HCKO1EA0");
test_math_expm1(1.189671312535008e+308);
test_math_expm1(-511);
test_math_expm1(-909);
test_math_expm1(1.0725344193226222e+308);
test_math_expm1(1.4572763105614473e+308);
test_math_expm1(-499);
test_math_expm1("86KO0");
test_math_expm1(1.4937581189153634e+308);
test_math_expm1(1.0314572925843183e+308);
test_math_expm1(null);
test_math_expm1(2.212345183126362e+307);
test_math_expm1("ME6CPKFP");
test_math_expm1("CVDAJXDQ");
test_math_expm1(-91);
test_math_expm1(-191);
test_math_expm1(8.733299892166872e+307);
test_math_expm1(-501);
test_math_expm1(1.0455454176799487e+308);
test_math_expm1("YPBNVRW59");
test_math_expm1(2.2070106719173216e+307);
test_math_expm1("KH69N7WHH");
test_math_expm1(4.851543910801337e+307);
test_math_expm1(9.06625779180255e+307);
test_math_expm1(2.8350864221817514e+307);
test_math_expm1("DS6");
test_math_expm1(-629);
test_math_expm1(-505);
test_math_expm1("2QZ");
test_math_expm1(1.5550460914955002e+308);
test_math_expm1("SLB");
test_math_expm1(-163);
test_math_expm1(-159);
test_math_expm1("ZM2M32R9");
test_math_expm1("4IZROIJ4G");
test_math_expm1(-457);
test_math_expm1(6.585770901400955e+307);
test_math_expm1(9.054356885496e+307);
test_math_expm1(1.3841608046661841e+308);
test_math_expm1(8.568558983542013e+307);
test_math_expm1("6E43J");
test_math_expm1(-463);
test_math_expm1(1.6055520227782916e+308);
test_math_expm1(-271);
test_math_expm1(-201);
test_math_expm1(3.14140040521259e+306);
test_math_expm1(1.3514131954954068e+308);
test_math_expm1(-123);
test_math_expm1("H7W2G");
test_math_expm1("KH6LCC");
test_math_expm1("YGHDGM");
test_math_expm1("P4LCJ1ME7K");
test_math_expm1(1.4087325789851748e+308);
test_math_expm1("3E8S");
test_math_expm1(-235);
test_math_expm1(7.355832157993142e+307);
test_math_expm1(1.5277973715407177e+307);
test_math_expm1("WDKZ6QJA5");
test_math_expm1(-619);
test_math_expm1(8.552474699119337e+307);
test_math_expm1(-831);
test_math_expm1("NYQGQ1");
test_math_expm1("4827TYLOX8");
test_math_expm1(-361);
test_math_expm1(5.022663995507928e+307);
test_math_expm1("3JNEUGM8H6");
test_math_expm1("EKYWUBZIB");
test_math_expm1("G5VYDC");
test_math_expm1("5MRFMM5");
test_math_expm1("2P0");
test_math_expm1("R81LFJQDZ");
test_math_expm1(-543);
test_math_expm1(-45);
test_math_expm1(1.6631846367889513e+307);
test_math_expm1(1.765423215707848e+308);
test_math_expm1("P108K");
test_math_expm1(5.441050948709333e+307);
test_math_expm1(-285);
test_math_expm1(-765);
test_math_expm1(1.3038466262454105e+308);
test_math_expm1(3.2416202741052596e+307);
test_math_expm1("G9D");
test_math_expm1("OFKN281");
test_math_expm1("NXXIGAR");
test_math_expm1("M150");
test_math_expm1("TLW");
test_math_expm1("0UHHJGXM");
test_math_expm1(-583);
test_math_expm1(5.328928450045438e+307);
test_math_expm1(1.7613669118654728e+308);
test_math_expm1(-973);
test_math_expm1("Z7Z1BO");
test_math_expm1("4GQ");
test_math_expm1(-755);
test_math_expm1(-357);
test_math_expm1(6.809355864380585e+306);
test_math_expm1(2.0509162237168384e+307);
test_math_expm1("GV7X");
test_math_expm1(1.4983953680870078e+307);
test_math_expm1(-655);
test_math_expm1(-351);
test_math_expm1(7.229878918538323e+306);
test_math_expm1(-749);
test_math_expm1("WMPS1SL5SP");
test_math_expm1(-143);
test_math_expm1(-383);
test_math_expm1(5.081828630557654e+307);
test_math_expm1(-173);
test_math_expm1(1.1483795285834844e+308);
test_math_expm1(-33);
test_math_expm1("KCLHFST");
test_math_expm1(-391);
test_math_expm1(1.0591023988889058e+308);
test_math_expm1("KSUNE5IY");
test_math_expm1("7S9CZ7");
test_math_expm1("5LEM");
test_math_expm1(1.7570043662832797e+308);
test_math_expm1(1.5380188905825186e+308);
test_math_expm1("WWV6KGEZOG");
test_math_expm1("K3CHI0V");
test_math_expm1("17UN");
test_math_expm1(-971);
test_math_expm1(-581);
test_math_expm1("C8KAK2W");
test_math_expm1("HG9S");
test_math_expm1(7.890165871547615e+307);
test_math_expm1(1.568493679066378e+308);
test_math_expm1(-167);
test_math_expm1(1.5600710815805055e+308);
test_math_expm1(1.1800513224930694e+308);
test_math_expm1(1.1303526916734656e+308);
test_math_expm1(-423);
test_math_expm1("GPNDNV");
test_math_expm1(-125);
test_math_expm1("R98FUPQHY9");
test_math_expm1(7.802206884992783e+307);
test_math_expm1(-65);
test_math_expm1(-251);
test_math_expm1(2.911298199475665e+307);
test_math_expm1("N3Y0GY1");
test_math_expm1("6Z3KWMF1");
test_math_expm1(7.316690498627767e+307);
test_math_expm1(-865);
test_math_expm1("VSN1Y4");
test_math_expm1("KUW1L0I");
test_math_expm1(7.977999323656957e+307);
test_math_expm1(-289);
test_math_expm1(-451);
test_math_expm1(1.035296814954888e+308);
test_math_expm1(2.5164057024352365e+307);
test_math_expm1(-563);
test_math_expm1("29B");
test_math_expm1("TP0WHF");
test_math_expm1("CLLU");
test_math_expm1(1.4816746805464904e+308);
test_math_expm1(-307);
test_math_expm1(-195);
test_math_expm1("NXC6CBQ");
test_math_expm1(9.739055581974626e+306);
test_math_expm1("TPTW");
test_math_expm1("5BHL6RGG");
test_math_expm1(4.70736291985253e+307);
test_math_expm1(-757);
test_math_expm1(-557);
test_math_expm1(8.644476259457508e+307);
test_math_expm1(4.678103470463189e+307);
test_math_expm1(4.052630922966358e+307);
test_math_expm1(1.3801503339946324e+308);
test_math_expm1("ONIY");
test_math_expm1("5X7C9");
test_math_expm1(1.6916604601173178e+308);
test_math_expm1("7TW6A3B");
test_math_expm1("ZJ9PY");
test_math_expm1(-875);
test_math_expm1("T13");
test_math_expm1(6.615820779339959e+307);
test_math_expm1("ASA300ILPM");
test_math_expm1("FH0L76SUD");
test_math_expm1("YVF");
test_math_expm1(1.6202470774655037e+308);
test_math_expm1(-997);
test_math_expm1("N7L");
test_math_expm1(1.2478581009933325e+308);
test_math_expm1("6WLX");
test_math_expm1("BMXG4");
test_math_expm1(-469);
test_math_expm1(1.4825755642322287e+308);
test_math_expm1("L6ESPSSLMK");
test_math_expm1(-313);
test_math_expm1(-11);
test_math_expm1(-269);
test_math_expm1(-895);
test_math_expm1(4.0397549360479033e+307);
test_math_expm1(1.2847847932519495e+308);
test_math_expm1(1.5338550375300298e+308);
test_math_expm1("JJRHL9");
test_math_expm1(-57);
test_math_expm1(-37);
test_math_expm1(-931);
test_math_expm1(-279);
test_math_expm1(5.42175723241808e+307);
test_math_expm1(1.3678875768765312e+308);
test_math_expm1("2RCB");
test_math_expm1(-769);
test_math_expm1(1.1702854097573697e+308);
test_math_expm1(-577);
test_math_expm1("V3ZXECW7");
test_math_expm1(-287);
test_math_expm1(-227);
test_math_expm1(-645);
test_math_expm1("IL60JCP");
test_math_expm1("TBT47N");
test_math_expm1("E9N7NG");
test_math_expm1(1.0851078347930372e+308);
test_math_expm1("75IZR4LY");
test_math_expm1(1.4298281282363546e+308);
test_math_expm1(-465);
test_math_expm1(1.714310394268558e+307);
test_math_expm1(8.916118961520835e+307);
test_math_expm1(-183);
test_math_expm1("J7F6");
test_math_expm1(1.0429256296724649e+308);
test_math_expm1("0V41PFZA");
test_math_expm1(-421);
test_math_expm1("GRIHI67QY");
test_math_expm1("1NOZVKJHG");
test_math_expm1("SCONVCKED1");
test_math_expm1(-733);
test_math_expm1(206);
test_math_expm1(1.7632155829403126e+308);
test_math_expm1(4.3508922342105627e+307);
test_math_expm1(3.278966378946646e+307);
test_math_expm1(-779);
test_math_expm1(-923);
test_math_expm1(1.08904186047867e+308);
test_math_expm1(-197);
test_math_expm1(-369);
test_math_expm1("TBNMSNB49D");
test_math_expm1(-815);
test_math_expm1(1.7972061824850088e+308);
test_math_expm1(-371);
test_math_expm1("3WTP2EJ3");
test_math_expm1("QBLHPYD");
test_math_expm1(-861);
test_math_expm1("5DYPP");
test_math_expm1(1.0310587353819657e+306);
test_math_expm1("6NZFJ8Q4JD");
test_math_expm1(1.6877891835727547e+308);
test_math_expm1("SKNI4S");
test_math_expm1(5.586071764213579e+307);
test_math_expm1(-265);
test_math_expm1(-569);
test_math_expm1(3.318482266391917e+307);
test_math_expm1("9256ON");
test_math_expm1("I46E");
test_math_expm1(-329);
test_math_expm1("DEY1MLDT2");
test_math_expm1("QXGIU9");
test_math_expm1(3.339929147342972e+307);
test_math_expm1(-653);
test_math_expm1(8.642579670274923e+307);
test_math_expm1(2.1724590330469573e+305);
test_math_expm1("0I4IA0I09");
test_math_expm1(4.912251748363057e+304);
test_math_expm1("1D5NAEIOII");
test_math_expm1(742);
test_math_expm1(8.445279541027076e+307);
test_math_expm1(9.054464863172332e+307);
test_math_expm1("SUXT1R9HHD");
test_math_expm1(-853);
test_math_expm1(7.516378748640971e+307);
test_math_expm1("9NMS2");
test_math_expm1("6XD2SBYY");
test_math_expm1("111F");
test_math_expm1("7IN21XHF");
test_math_expm1(1.2784438312061322e+308);
test_math_expm1(1.7520707890511936e+308);
test_math_expm1(3.8991116713336943e+307);
test_math_expm1(7.299072633982778e+307);
test_math_expm1(1.6584124696344228e+308);
test_math_expm1("6U9BYM4J");
test_math_expm1("TDVG");
test_math_expm1(-121);
test_math_expm1(-545);
test_math_expm1(-913);
test_math_expm1(2.0869828749163336e+307);
test_math_expm1(4.756424895849855e+307);
test_math_expm1("VK05HBLTN");
test_math_expm1(-221);
test_math_expm1(-879);
test_math_expm1("X5XZR5DR8");
test_math_expm1(2.1649842920349214e+307);
test_math_expm1("01ZHPK3Q0");
test_math_expm1(-989);
test_math_expm1(-513);
test_math_expm1("L1PFLFAE1");
test_math_expm1(5.230341313255191e+307);
test_math_expm1(1.3880928855250944e+308);
test_math_expm1(5.725717555244761e+307);
test_math_expm1(3.8636265207005e+307);
test_math_expm1("2V4P");
test_math_expm1("779C");
test_math_expm1(1.6164207989779624e+308);
test_math_expm1(1.192632126717848e+308);
test_math_expm1(5.23625980468438e+305);
test_math_expm1(-161);
test_math_expm1(-761);
test_math_expm1("7DBR82JTAT");
test_math_expm1(5.582613061092701e+307);
test_math_expm1(7.024479980241886e+307);
test_math_expm1(-665);
test_math_expm1(1.1465360413636996e+308);
test_math_expm1(-857);
test_math_expm1(-567);
test_math_expm1(-839);
test_math_expm1(-763);
test_math_expm1("1G9207H");
test_math_expm1(9.72705315020725e+307);
test_math_expm1(1.691876506183098e+308);
test_math_expm1(1.3719285748309209e+308);
test_math_expm1(1.7671321024218448e+308);
test_math_expm1("TRA33UGFCR");
test_math_expm1(1.0809465577798692e+308);
test_math_expm1("DU5");
test_math_expm1("7CCD7F");
test_math_expm1("QRR6VCQAV");
test_math_expm1("WCX2");
test_math_expm1(5.472244498437196e+307);
test_math_expm1(1.54668614029725e+307);
test_math_expm1(1.4445999581160061e+308);
test_math_expm1(-979);
test_math_expm1(1.162125398328331e+308);
test_math_expm1("P24BR");
test_math_expm1("2A46");
test_math_expm1(1.46984348597724e+308);
test_math_expm1(-561);
test_math_expm1("NZ3YM");
test_math_expm1("0I40ZUNP15");
test_math_expm1("AX8X191Y50");
test_math_expm1(-295);
test_math_expm1("XDDK");
test_math_expm1(1.4090755739037716e+308);
test_math_expm1(-171);
test_math_expm1("PCYGS");
test_math_expm1(-827);
test_math_expm1(-587);
test_math_expm1("3G56EH4M2");
test_math_expm1("RQX0XKYZD");
test_math_expm1("GQ5");
test_math_expm1(-727);
test_math_expm1(6.561768280853317e+307);
test_math_expm1("VTDYYO2SD");
test_math_expm1(1.653216898568463e+308);
test_math_expm1(-259);
test_math_expm1(4.956628213017305e+307);
test_math_expm1(3.205275414106068e+307);
test_math_expm1("G0O9");
test_math_expm1(470);
test_math_expm1("0IHC9YHD");
test_math_expm1("4SV4QURM5");
test_math_expm1(6.057176432678359e+307);
test_math_expm1(1.466054204074284e+308);
test_math_expm1(-409);
test_math_expm1(-959);
test_math_expm1(1.5982666526760408e+308);
test_math_expm1("GDWGOX45Y");
test_math_expm1(50);
test_math_expm1("D1S9RMYOSX");
test_math_expm1("ECD");
test_math_expm1(2.6366122925587457e+306);
test_math_expm1(-975);
test_math_expm1(7.473931879355543e+307);
test_math_expm1(8.167167152418648e+307);
test_math_expm1(-339);
test_math_expm1("OS1905FFY");
test_math_expm1(1.4397589367906773e+308);
test_math_expm1(-935);
test_math_expm1("3JVA0BPIX");
test_math_expm1(-939);
test_math_expm1("JYIX3LC");
test_math_expm1(-483);
test_math_expm1(2.6245566900311416e+307);
test_math_expm1("QKN7V");
test_math_expm1(1.7330864715415991e+308);
test_math_expm1("HKEBD");
test_math_expm1("6UOU");
test_math_expm1(1.0724110814819277e+308);
test_math_expm1(2.5814652255013047e+307);
test_math_expm1("K5IF8RA20R");
test_math_expm1(7.816802176308172e+306);
test_math_expm1("2VXTQXP5N0");
test_math_expm1(-209);
test_math_expm1("4AJ");
test_math_expm1(-467);
test_math_expm1(-129);
test_math_expm1(-355);
test_math_expm1(1.2524629175400154e+308);
test_math_expm1(-565);
test_math_expm1(1.1350529498624592e+308);
test_math_expm1("2GOVRCCCI");
test_math_expm1(1.3700367172074151e+308);
test_math_expm1(2.1096836060811148e+307);
test_math_expm1(1.2076906087504338e+308);
test_math_expm1(3.154777591770807e+307);
test_math_expm1(1.3732473104049936e+308);
test_math_expm1("N86EN2");
test_math_expm1(1.7718616637221818e+308);
test_math_expm1("ICYVK2A");
test_math_expm1(-759);
test_math_expm1("L44");
test_math_expm1("RYM");
test_math_expm1("ID1O1GS4NJ");
test_math_expm1(4.717332972523811e+307);
test_math_expm1(-303);
test_math_expm1(1.4730288738154064e+308);
test_math_expm1(-247);
test_math_expm1("O5C5");
test_math_expm1(3.5275622292792203e+307);
test_math_expm1(1.1403412083765097e+306);
test_math_expm1(1.5621441957935961e+308);
test_math_expm1(4.803427673903852e+307);
test_math_expm1("DZGY2");
test_math_expm1(-25);
test_math_expm1(8.948991938079464e+306);
test_math_expm1("E64");
test_math_expm1("6F6Y");
test_math_expm1(6.909729516091228e+307);
test_math_expm1(-401);
test_math_expm1("PTZ");
test_math_expm1(-767);
test_math_expm1("XRYOB3");
test_math_expm1(5.94334111254988e+306);
test_math_expm1("BKT1F3I");
test_math_expm1("BTXAPEL7D");
test_math_expm1(-397);
test_math_expm1(-185);
test_math_expm1("4TT");
test_math_expm1("WX5GNI5D");
test_math_expm1(-267);
test_math_expm1("4OGU1UYCC");
test_math_expm1(-393);
test_math_expm1(5.708022641159239e+306);
test_math_expm1("EQY72T9");
test_math_expm1("N1GM9A");
test_math_expm1(9.53845932432069e+307);
test_math_expm1("73RO37");
test_math_expm1(1.6938040487969894e+308);
test_math_expm1("UUSHG931C7");
test_math_expm1("5017F3MQ0");
test_math_expm1("KDQ");
test_math_expm1("Z136MYHU");
test_math_expm1("80BMYZS");
test_math_expm1(1.3127858793477809e+308);
test_math_expm1(-707);
test_math_expm1(9.349878671888456e+307);
test_math_expm1(3.859677344481967e+307);
test_math_expm1(6.102670382614265e+307);
test_math_expm1(-19);
test_math_expm1(1.8984252759705604e+307);
test_math_expm1(-575);
test_math_expm1(4.4027558266960157e+307);
test_math_expm1(1.722146588973065e+308);
test_math_expm1(1.4665399846862138e+308);
test_math_expm1(5.509900852454922e+307);
test_math_expm1(-341);
test_math_expm1(4.519040219045622e+307);
test_math_expm1("3XLWPGSF");
test_math_expm1(5.13406302044258e+306);
test_math_expm1(-817);
test_math_expm1(1.1369161275157033e+308);
test_math_expm1(6.401079447010191e+306);
test_math_expm1("ZJT86EWYE");
test_math_expm1(-95);
test_math_expm1("WQ5FL6RAT");
test_math_expm1(1.5904458368825178e+308);
test_math_expm1(-709);
test_math_expm1(1.148358746626234e+308);
test_math_expm1(-883);
test_math_expm1(9.189668622950892e+307);
test_math_expm1(1.5847894665595756e+307);
test_math_expm1(9.397010956175076e+307);
test_math_expm1("9P5QYIJ54");
test_math_expm1("JXDV1FNDE");
test_math_expm1("LZ1");
test_math_expm1("V5ZJ3AQTIN");
test_math_expm1(-825);
test_math_expm1("5DV2RJWVAI");
test_math_expm1(-965);
test_math_expm1("PR4M");
test_math_expm1(-595);
test_math_expm1(-981);
test_math_expm1("A4CPSBGG4");
test_math_expm1(1.1232866223867415e+308);
test_math_expm1(1.6991098246418609e+308);
test_math_expm1("YZ5WH");
test_math_expm1("PSB1G");
test_math_expm1("YKJFIM");
test_math_expm1(-745);
test_math_expm1(1.046910747195611e+308);
test_math_expm1(1.3123705080423828e+308);
test_math_expm1("UXE944W");
test_math_expm1(1.609945812890483e+308);
test_math_expm1("W37WT9P");
test_math_expm1("GNWQ83HK");
test_math_expm1("RT3767");
test_math_expm1(1.2287300597912092e+308);
test_math_expm1("8X1K5V5G");
test_math_expm1(9.368691090069747e+307);
test_math_expm1("AYO0TCTBRV");
test_math_expm1(1.5828611996418381e+308);
test_math_expm1(1.1663047908487278e+308);
test_math_expm1("HNY");
test_math_expm1(1.1396687113354954e+308);
test_math_expm1("FUILC7ZUAU");
test_math_expm1("H2UINX1R13");
test_math_expm1("AX9");
test_math_expm1(-611);
test_math_expm1("KHTNP3J0");
test_math_expm1(-555);
test_math_expm1(-49);
test_math_expm1(-673);
test_math_expm1(3.2506979302694706e+307);
test_math_expm1(1.296984229485707e+308);
test_math_expm1(-331);
test_math_expm1("XCN4GED7XW");
test_math_expm1("0NDXU0N12E");
test_math_expm1(1.3759808566095078e+308);
test_math_expm1("ACSWTSUBVL");
test_math_expm1(1.0903672967080632e+308);
test_math_expm1(-21);
test_math_expm1("BZ7MOAV");
test_math_expm1(1.3218471176441178e+308);
test_math_expm1("1SB6OCR2F9");
test_math_expm1(-617);
test_math_expm1("0L7H3VLBJ");
test_math_expm1(-535);
test_math_expm1(1.744700181337306e+308);
test_math_expm1("4LTRH");
test_math_expm1(944);
test_math_expm1(9.257678580726033e+307);
test_math_expm1("FAZD3S2");
test_math_expm1(5.554110111028558e+307);
test_math_expm1(6.414809249654253e+307);
test_math_expm1(2.5443671608459306e+307);
test_math_expm1(2.710704761242051e+307);
test_math_expm1(-17);
test_math_expm1("S1K4MZ97T6");
test_math_expm1(6.933802691282194e+306);
test_math_expm1("IXEK0CR");
test_math_expm1("UT91VD1ZT4");
test_math_expm1("KE5PYUY");
test_math_expm1(3.418515292224993e+307);
test_math_expm1("BUXK");
test_math_expm1("1ZSXJR");
test_math_expm1("TO7JOOC687");
test_math_expm1(7.564093929927006e+307);
test_math_expm1(-291);
test_math_expm1("2V29P");
test_math_expm1("0WFFU");
test_math_expm1("QXLF4");
test_math_expm1("UY9YN2FB");
test_math_expm1("WDY");
test_math_expm1(-479);
test_math_expm1(-525);
test_math_expm1(7.076507596809397e+307);
test_math_expm1(5.801355346530763e+307);
test_math_expm1(-623);
test_math_expm1("VQ9S");
test_math_expm1("KWGB");
test_math_expm1(1.6456190071432992e+308);
test_math_expm1("739FRS6N1E");
test_math_expm1("EX3XNT3");
test_math_expm1("ZKU1VDI4");
test_math_expm1("JJ20VY");
test_math_expm1(9.233663610899362e+307);
test_math_expm1(9.351517791022981e+307);
test_math_expm1("MCDE97");
test_math_expm1(-473);
test_math_expm1(1.167114124485901e+308);
test_math_expm1(-823);
test_math_expm1("7TWAKW5");
test_math_expm1(3.3235847199580463e+306);
test_math_expm1("LPW");
test_math_expm1(1.1724286480319115e+308);
test_math_expm1(-809);
test_math_expm1("VMQH7J2E");
test_math_expm1(7.670007064324461e+307);
test_math_expm1(1.4345333786200426e+308);
test_math_expm1(2.7989440283478623e+307);
test_math_expm1(2.291394373970877e+307);
test_math_expm1(-533);
test_math_expm1(-299);
test_math_expm1(-625);
test_math_expm1(2.67686105922334e+307);
test_math_expm1("H6BJ2");
test_math_expm1(1.0495391809333667e+308);
test_math_expm1(-493);
test_math_expm1("6HU1827P");
test_math_expm1("36PKJ");
test_math_expm1(2.4692791371402304e+307);
test_math_expm1(-717);
test_math_expm1("88QHXXT");
test_math_expm1("KWODVSC");
test_math_expm1("CYCWO");
test_math_expm1(3.3642324693647257e+307);
test_math_expm1("MYDFKR");
test_math_expm1(1.1887102769976448e+308);
test_math_expm1(4.219225586664949e+307);
test_math_expm1("D3DRP");
test_math_expm1(1.6855964041550281e+308);
test_math_expm1("TILBI9");
test_math_expm1(2.8141904700787093e+307);
test_math_expm1(3.0480256014424106e+307);
test_math_expm1("QDJ");
test_math_expm1(7.927397928788367e+307);
test_math_expm1(-713);
test_math_expm1("ZUW90WSSE2");
test_math_expm1(4.1628285434943853e+307);
test_math_expm1(1.7007514672779063e+307);
test_math_expm1(1.7390679097215438e+308);
test_math_expm1("ZNRV9O0M");
test_math_expm1("CUW1XUDN");
test_math_expm1("FU991HF");
test_math_expm1("U703A7H");
test_math_expm1("MGTZ3TA5");
test_math_expm1(-945);
test_math_expm1(1.6733528796466258e+308);
test_math_expm1(4.3957392454380175e+307);
test_math_expm1("W8P");
test_math_expm1("BM4WYLXA");
test_math_expm1(1.6507350384209658e+308);
test_math_expm1(-153);
test_math_expm1(-985);
test_math_expm1("75B6IV");
test_math_expm1("56ZZB6LF");
test_math_expm1(1.7722386778380192e+308);
test_math_expm1(-113);
test_math_expm1("0GCQ");
test_math_expm1(3.2701662002956e+307);
test_math_expm1(-99);
test_math_expm1(-85);
test_math_expm1("AQHWXV3");
test_math_expm1(1.0469154977676565e+308);
test_math_expm1("NB6I2");
test_math_expm1(3.739177007000412e+307);
test_math_expm1(7.333053525017523e+307);
test_math_expm1(7.702932586217208e+307);
test_math_expm1(-5);
test_math_expm1("TQHRFO7G");
test_math_expm1("IBNRBS");
test_math_expm1(1.6014013517690201e+308);
test_math_expm1(-475);
test_math_expm1("BMJYC5G5N");
test_math_expm1(-179);
test_math_expm1(-375);
test_math_expm1(8.901655105406107e+307);
test_math_expm1(1.5875092447916338e+308);
test_math_expm1("01NLKSR2LD");
test_math_expm1(7.534811005184378e+307);
test_math_expm1(-263);
test_math_expm1("AB2JFN88OU");
test_math_expm1("NB8UF58O");
test_math_expm1(1.510892361171814e+308);
test_math_expm1(8.902929809180112e+307);
test_math_expm1("I7K77PK8");
test_math_expm1("4TO06K");
test_math_expm1(7.96199118396141e+307);
test_math_expm1(1.2293542548142285e+308);
test_math_expm1(-73);
test_math_expm1(2.1333657671409588e+307);
test_math_expm1("I0IZUZ3Y");
test_math_expm1(-819);
test_math_expm1("AZTTV");
test_math_expm1("OZB43");
test_math_expm1(-407);
test_math_expm1(-453);
test_math_expm1(2.4567569923264366e+307);
test_math_expm1(2.1903465187945917e+307);
test_math_expm1(1.5518349226037458e+308);
test_math_expm1(-13);
test_math_expm1(5.093572113664422e+307);
test_math_expm1(8.971464583742507e+307);
test_math_expm1(-385);
test_math_expm1("F8CSAZT3UV");
test_math_expm1("XNJ");
test_math_expm1(-729);
test_math_expm1(-323);
test_math_expm1(6.878067158393225e+307);
test_math_expm1(7.199864348848471e+307);
test_math_expm1(164);
test_math_expm1(1.1896512260974388e+307);
test_math_expm1(-225);
test_math_expm1("5QYND");
test_math_expm1("DD5JYA93XK");
test_math_expm1(1.8142114502571815e+307);
test_math_expm1("A4Z9JFYF3C");
test_math_expm1(1.315876326621512e+308);
test_math_expm1(-51);
test_math_expm1(4.908929450146851e+307);
test_math_expm1(-897);
test_math_expm1(8.727009163521588e+307);
test_math_expm1("VVYKP3Z7");
test_math_expm1(1.2523413603949039e+308);
test_math_expm1(1.7632326403817412e+308);
test_math_expm1("MPPM8U3");
test_math_expm1(1.1067946513057579e+308);
test_math_expm1("4WJ");
test_math_expm1(1.7778102135559837e+308);
test_math_expm1("C8UJIPFST");
test_math_expm1(-531);
test_math_expm1("HQL");
test_math_expm1(6.75295088860996e+307);
test_math_expm1("TDZGUS5");
test_math_expm1("TMILSKY6");
test_math_expm1("Q9VF");
test_math_expm1("1FDZ");
test_math_expm1(1.2510298578011207e+308);
test_math_expm1("AR0BM");
test_math_expm1("EIWJHGELO");
test_math_expm1(1.6561721899990837e+308);
test_math_expm1(3.0323836447471e+307);
test_math_expm1(9.144271776970609e+307);
test_math_expm1(1.0043968788928127e+308);
test_math_expm1("13KRY");
test_math_expm1("HYZWTF");
test_math_expm1("8FVEEI2OU6");
test_math_expm1("2AT0OK");
test_math_expm1("ZS2");
test_math_expm1("HAV");
test_math_expm1("M4C");
test_math_expm1(9.496867792529048e+307);
test_math_expm1(1.6611722906700484e+308);
test_math_expm1("V8431MV8W");
test_math_expm1("NVVYE");
test_math_expm1(-991);
test_math_expm1(6.566169900318162e+307);
test_math_expm1(-115);
test_math_expm1(4.2250586700922334e+307);
test_math_expm1(1.687092219086799e+308);
test_math_expm1(316);
test_math_expm1(-647);
test_math_expm1("YQD");
test_math_expm1("IPK6WK");
test_math_expm1(1.1390743020336035e+308);
test_math_expm1("817");
test_math_expm1(-873);
test_math_expm1(7.639146609247625e+306);
test_math_expm1("APNEN");
test_math_expm1("CFEC");
test_math_expm1(-993);
test_math_expm1(1.3480989744199805e+308);
test_math_expm1("U3ZOMWT");
test_math_expm1("53WX9S3");
test_math_expm1(1.7427770711364343e+308);
test_math_expm1(1.694550894149444e+308);
test_math_expm1(3.660051107553109e+307);
test_math_expm1(1.0503732453321884e+308);
test_math_expm1(5.713607854456229e+307);
test_math_expm1(1.1159712828520655e+308);
test_math_expm1(1.7235121709356506e+308);
test_math_expm1(1.6013008214959062e+308);
test_math_expm1("IPFLJ3");
test_math_expm1("BWPEER");
test_math_expm1(7.492317108639224e+307);
test_math_expm1("2PGQ8M741E");
test_math_expm1(1.3682883354119447e+308);
test_math_expm1("30L");
test_math_expm1(1.443038800028345e+308);
test_math_expm1(-917);
test_math_expm1(1.3523217521634461e+308);
test_math_expm1(1.3445660646975686e+308);
test_math_expm1("PZOM4");
test_math_expm1(-695);
test_math_expm1(-791);
test_math_expm1(9.719684144543764e+307);
test_math_expm1(-789);
test_math_expm1("4RG23");
test_math_expm1(1.3406861288132817e+308);
test_math_expm1(4.877224220229783e+307);
test_math_expm1(-793);
test_math_expm1(-23);
test_math_expm1("C9V");
test_math_expm1("1S0767");
test_math_expm1(-381);
test_math_expm1("IFFL");
test_math_expm1(-461);
test_math_expm1(-593);
test_math_expm1(1.5295370371196151e+308);
test_math_expm1("J6ARWYC01H");
test_math_expm1("K4LNE");
test_math_expm1(3.920304266714261e+307);
test_math_expm1("IWYLN1QAFD");
test_math_expm1(1.4337649835965493e+308);
test_math_expm1("266XW");
test_math_expm1("O82NXMF");
test_math_expm1(3.5176375039519894e+307);
test_math_expm1("5148Q");
test_math_expm1("6TPFKLH");
test_math_expm1("G41E2M8VGV");
test_math_expm1("R1SD8OO");
test_math_expm1("UCBEQS");
test_math_expm1("9QTWO");
test_math_expm1(-689);
test_math_expm1(7.066873523651963e+307);
test_math_expm1("78SRJT");
test_math_expm1(6.47866359849304e+307);
test_math_expm1("Q3E1");
test_math_expm1(9.909959269741183e+307);
test_math_expm1(1.3054127271489699e+308);
test_math_expm1(6.791360509614161e+307);
test_math_expm1("IC301QB");
test_math_expm1("O8U3KMCV");
test_math_expm1(1.4369813510249456e+308);
test_math_expm1("9BYC64");
test_math_expm1(-205);
test_math_expm1("ZQHTN");
test_math_expm1("6VG88E");
test_math_expm1("ZYEUUS");
test_math_expm1(-359);
test_math_expm1("KBB");
test_math_expm1(6.398194484331989e+307);
test_math_expm1(2.1708739788224143e+307);
test_math_expm1(-31);
test_math_expm1(3.679190918482646e+307);
test_math_expm1(1.0717379366440019e+308);
test_math_expm1(1.768032955620874e+308);
test_math_expm1(1.0908435709715664e+307);
test_math_expm1(1.5826255687098872e+308);
test_math_expm1(-41);
test_math_expm1(-591);
test_math_expm1("FFP9");
test_math_expm1(4.232990012958798e+307);
test_math_expm1(1.789634456130613e+308);
test_math_expm1(-523);
test_math_expm1(3.3234692616182037e+307);
test_math_expm1("VVRQ6C");
test_math_expm1("NJL54");
test_math_expm1(1.3007664947681747e+308);
test_math_expm1(1.649916775968386e+308);
test_math_expm1(1.7812808797087497e+308);
test_math_expm1(-169);
test_math_expm1(1.6734717705474414e+308);
test_math_expm1(3.7360981309485296e+307);
test_math_expm1("M8ZEJ");
test_math_expm1(3.346256772852647e+307);
test_math_expm1(1.6723155651883655e+308);
test_math_expm1(-705);
test_math_expm1(-435);
test_math_expm1("NZ7DO0");
test_math_expm1(-219);
test_math_expm1(8.657937577944232e+307);
test_math_expm1("0B7QKTHE3V");
test_math_expm1("8I5E0DTW");
test_math_expm1(6.500306857668335e+307);
test_math_expm1(-891);
test_math_expm1("WP6EUB10");
test_math_expm1("FBGD7WL89");
test_math_expm1(5.132077629439565e+307);
test_math_expm1(4.026457437086241e+307);
test_math_expm1("E2E5GCJ65");
test_math_expm1("4PX2H");
test_math_expm1("R91SF");
test_math_expm1(-797);
test_math_expm1("UICRM0");
test_math_expm1(9.911615844859672e+306);
test_math_expm1(1.3614871432044468e+308);
test_math_expm1("QVJB4TE");
test_math_expm1(8.880597140506642e+307);
test_math_expm1("V7C027LZG");
test_math_expm1(8.208816580329195e+307);
test_math_expm1("E7008");
test_math_expm1("8MR");
test_math_expm1(9.263790002764948e+307);
test_math_expm1("SGG88");
test_math_expm1(7.231042556366929e+307);
test_math_expm1("FNYD0OP0UP");
test_math_expm1(-633);
test_math_expm1("PIWB");
test_math_expm1(1.326516601131623e+308);
test_math_expm1("NWVX9LFR8A");
test_math_expm1(-803);
test_math_expm1("NARFYKTAH");
test_math_expm1("ENWCC0MBSX");
test_math_expm1("X4LNVGQI");
test_math_expm1("PMYGVJH19P");
test_math_expm1(5.291203140443838e+307);
test_math_expm1(1.713649846634335e+308);
test_math_expm1("R5A");
test_math_expm1("P4VLUCWO");
test_math_expm1("MF49D8NQUO");
test_math_expm1(-199);
test_math_expm1(6.435443829765075e+307);
test_math_expm1(3.48370819988598e+307);
test_math_expm1(-725);
test_math_expm1(1.5274107612519723e+308);
test_math_expm1(1.2207987121269245e+308);
test_math_expm1(5.28669367788327e+307);
test_math_expm1("H1L1Y");
