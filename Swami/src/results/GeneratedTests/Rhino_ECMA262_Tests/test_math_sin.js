/*
* This file is automatically generated by Swami
*
* 2019-08-09 12:17:09.743732
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
function test_math_sin(x){
	if (Object.is( x,NaN )){
		var output = Math.sin(x);
		new TestCase("math_sin", "math_sin", NaN, output);
		test();
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.sin(x);
		new TestCase("math_sin", "math_sin", + 0, output);
		test();
		return;
		}
	if (( x === - 0 )){
		var output = Math.sin(x);
		new TestCase("math_sin", "math_sin", - 0, output);
		test();
		return;
		}
	if (( x === + Infinity || x === - Infinity )){
		var output = Math.sin(x);
		new TestCase("math_sin", "math_sin", NaN, output);
		test();
		return;
		}
}



/*TESTS GENERATED AUTOMATICALLY*/
test_math_sin(2.565360597958603e+307);
test_math_sin(true);
test_math_sin(9.966453745363357e+307);
test_math_sin("XCU");
test_math_sin(/(\w+)\s(\w+)/);
test_math_sin(NaN);
test_math_sin(1.5328583102242136e+307);
test_math_sin("8DKVR2K");
test_math_sin(false);
test_math_sin(-753);
test_math_sin(/[^.]+/);
test_math_sin(1.3662665289567475e+308);
test_math_sin(-791);
test_math_sin(-123);
test_math_sin(-599);
test_math_sin(-481);
test_math_sin(/\r\n|\r|\n/);
test_math_sin("ETZ");
test_math_sin(-269);
test_math_sin(-509);
test_math_sin("RAXP8");
test_math_sin(+0);
test_math_sin(/foo/g);
test_math_sin(-601);
test_math_sin(1.4755826009513444e+308);
test_math_sin(null);
test_math_sin(/yes[^]*day/);
test_math_sin(-0);
test_math_sin(4.713428109606425e+307);
test_math_sin(8.548202189270427e+307);
test_math_sin(-963);
test_math_sin(-711);
test_math_sin(-655);
test_math_sin(-925);
test_math_sin(1.389673144533466e+308);
test_math_sin("MON1LP7");
test_math_sin("DGMW12468");
test_math_sin(8.993259440955732e+307);
test_math_sin(1.238865515741928e+308);
test_math_sin(-355);
test_math_sin(-447);
test_math_sin(4.041193207962039e+306);
test_math_sin(1.7525179492748505e+308);
test_math_sin(6.664958364552456e+307);
test_math_sin("UFF");
test_math_sin(-63);
test_math_sin(Infinity);
test_math_sin(/yes.*day/);
test_math_sin(9.622565363073213e+307);
test_math_sin("F7A28");
test_math_sin(4.2220964222830975e+307);
test_math_sin(/[\u0400-\u04FF]+/g);
test_math_sin(/ab+c/);
test_math_sin("5SAJRK");
test_math_sin(1.074904809918004e+308);
test_math_sin("GE1HGCT");
test_math_sin(1.0645047580956293e+308);
test_math_sin("FV1");
test_math_sin(1.272049842521187e+307);
test_math_sin(1.7436887580478562e+308);
test_math_sin(9.310284022860435e+307);
test_math_sin(1.6770191434695135e+308);
test_math_sin(5.084385718976023e+307);
test_math_sin(-995);
test_math_sin(undefined);
test_math_sin("LBCU8E72");
test_math_sin(1.1160378469609909e+308);
test_math_sin(1.3227258427134913e+308);
test_math_sin(-493);
test_math_sin(1.5029058536918744e+308);
test_math_sin(1.682612480798072e+308);
test_math_sin(-291);
test_math_sin("F9XL");
test_math_sin(-325);
test_math_sin("8M7IPB");
test_math_sin(-89);
test_math_sin(6.740001650711483e+307);
test_math_sin(-999);
test_math_sin(-949);
test_math_sin("D5BDVSY2");
test_math_sin(1.3332541547533404e+307);
test_math_sin("YPTYCFXD1");
test_math_sin("AG11G");
test_math_sin(8.716246484581517e+307);
test_math_sin(1.7526662697925207e+308);
test_math_sin(1.7073029444876603e+308);
test_math_sin(3.856145851308657e+307);
test_math_sin(-135);
test_math_sin(-713);
test_math_sin(-867);
test_math_sin(-451);
test_math_sin("H4PQO");
test_math_sin(1.2107395066067465e+308);
test_math_sin("P6D");
test_math_sin(-251);
test_math_sin(-55);
test_math_sin("BV5DZP2D");
test_math_sin(-107);
test_math_sin(9.814888199830536e+307);
test_math_sin("2J4");
test_math_sin("ZOH3M");
test_math_sin(1.4041086077139633e+308);
test_math_sin(1.01588959665679e+308);
test_math_sin("ZJ14JJI");
test_math_sin(-147);
test_math_sin(-727);
test_math_sin("MOJ");
test_math_sin(-639);
test_math_sin("V9E");
test_math_sin("Z1KWLKM1X");
test_math_sin("S5B");
test_math_sin(1.4141099492547987e+308);
test_math_sin("3IX3WQH");
test_math_sin(9.405754299205734e+307);
test_math_sin("QR7");
test_math_sin(1.3581156580818104e+308);
test_math_sin("39P5B76C43");
test_math_sin(1.2817957205266192e+308);
test_math_sin("TBI6");
test_math_sin(-411);
test_math_sin(2.243553542502256e+307);
test_math_sin(-319);
test_math_sin(-565);
test_math_sin(-709);
test_math_sin("MYVK7OL49F");
test_math_sin(1.4754160143041878e+308);
test_math_sin(532);
test_math_sin(1.169080307479718e+308);
test_math_sin(-905);
test_math_sin(-705);
test_math_sin(4.209699682052042e+307);
test_math_sin(-813);
test_math_sin(-339);
test_math_sin(-75);
test_math_sin(-809);
test_math_sin(1.3112409949321552e+308);
test_math_sin("YKWE6XK");
test_math_sin(-125);
test_math_sin("AXPA1");
test_math_sin("94LPU5DG");
test_math_sin(2.3443958782887657e+307);
test_math_sin("EYICVWT");
test_math_sin("OV2");
test_math_sin(1.3853572902941958e+308);
test_math_sin(9.84555552073491e+307);
test_math_sin(-871);
test_math_sin(7.660104353508256e+307);
test_math_sin(-373);
test_math_sin(5.752390802076576e+307);
test_math_sin(4.49684254044697e+307);
test_math_sin("MMOI");
test_math_sin(-129);
test_math_sin("S42WW4AUF3");
test_math_sin(1.5034999295199796e+308);
test_math_sin("U1Q8FCFTJP");
test_math_sin(1.176570008158641e+308);
test_math_sin("BU9UW");
test_math_sin(7.742712871699352e+307);
test_math_sin(-507);
test_math_sin("QMG");
test_math_sin(2.491436194249898e+307);
test_math_sin(7.441789592026971e+307);
test_math_sin("I2TM4W9T");
test_math_sin(-983);
test_math_sin("V2H7NM7NS");
test_math_sin(8.90211648358063e+307);
test_math_sin(5.849719938088248e+307);
test_math_sin(-243);
test_math_sin("7A79GA57LQ");
test_math_sin("641MM71H6");
test_math_sin("ER42Y1FVNF");
test_math_sin("24PFR7");
test_math_sin("I3E0G34");
test_math_sin(-985);
test_math_sin(-531);
test_math_sin("Z9FJ42Q49");
test_math_sin(-229);
test_math_sin("C6H2U1");
test_math_sin("VML926V");
test_math_sin(4.7691489688226024e+306);
test_math_sin(-495);
test_math_sin(1.1684567019403037e+307);
test_math_sin(-305);
test_math_sin(-919);
test_math_sin(1.3976424409656178e+306);
test_math_sin(1.452171282648124e+308);
test_math_sin(1.2921606774166844e+306);
test_math_sin(2.6689434392141343e+307);
test_math_sin(-473);
test_math_sin("4CR3AQAGGY");
test_math_sin("8TTJ");
test_math_sin(4.59047277862695e+307);
test_math_sin(-703);
test_math_sin("KIBEJWO1");
test_math_sin("K0CIBXIFAQ");
test_math_sin(2.0277268148086427e+307);
test_math_sin(9.11871747714629e+307);
test_math_sin(-993);
test_math_sin("ZT66TWSR");
test_math_sin(-805);
test_math_sin("VT8M2XHA");
test_math_sin(1.0701928547980192e+308);
test_math_sin(1.070515225588939e+308);
test_math_sin("08JQ");
test_math_sin("LED7TO5E");
test_math_sin(1.0161831852904314e+308);
test_math_sin(1.4452811242300555e+308);
test_math_sin("YE41S79WGG");
test_math_sin("L3YIOJ");
test_math_sin(8.689763938301865e+307);
test_math_sin(-61);
test_math_sin(3.038071039164354e+307);
test_math_sin(1.7965119389989669e+308);
test_math_sin(-921);
test_math_sin(8.110891747547485e+307);
test_math_sin(-523);
test_math_sin(-739);
test_math_sin("7HLL74P3UA");
test_math_sin(-577);
test_math_sin("BK9I3");
test_math_sin(-681);
test_math_sin("XWP0ZSU4");
test_math_sin("BCJD");
test_math_sin(4.424902524272162e+307);
test_math_sin(1.078531739639629e+307);
test_math_sin(-903);
test_math_sin(8.20608185230019e+307);
test_math_sin("LXBFYE3N9");
test_math_sin(-317);
test_math_sin("6KYH0WOF");
test_math_sin("ME62VG");
test_math_sin(9.683723392042592e+307);
test_math_sin(1.1284113341931685e+307);
test_math_sin("R0U3");
test_math_sin("0KL");
test_math_sin("HDXFV");
test_math_sin(-367);
test_math_sin(-761);
test_math_sin(1.4922050391216257e+308);
test_math_sin("VXN1");
test_math_sin(-719);
test_math_sin("HJYUQGKP");
test_math_sin(-561);
test_math_sin(-501);
test_math_sin("M1MV6GFR");
test_math_sin(4.779725794415594e+307);
test_math_sin(-737);
test_math_sin("YC9GL3W");
test_math_sin("8O04DKP");
test_math_sin("VB8J969MB");
test_math_sin(-751);
test_math_sin("GNIP2Q");
test_math_sin("C2FP2PLC");
test_math_sin(1.1047224016230816e+308);
test_math_sin("PT4QS");
test_math_sin("UPGB");
test_math_sin(-273);
test_math_sin(4.2340885228221024e+307);
test_math_sin(1.0948941414285922e+308);
test_math_sin(1.6574544795740362e+308);
test_math_sin("A6VSZV1B");
test_math_sin(9.007579762937358e+307);
test_math_sin(-331);
test_math_sin(-133);
test_math_sin(-21);
test_math_sin(3.7889490661062235e+307);
test_math_sin("ZGTN3RQ");
test_math_sin(9.251221054110913e+307);
test_math_sin(-213);
test_math_sin(-267);
test_math_sin(1.2431271290058083e+308);
test_math_sin("ZML");
test_math_sin(-973);
test_math_sin(-1);
test_math_sin(5.162515734423222e+307);
test_math_sin("G9I9TD6W9I");
test_math_sin("0L9");
test_math_sin(-595);
test_math_sin(9.44108730144351e+307);
test_math_sin(-571);
test_math_sin("VTJZR3NV");
test_math_sin("DKSUT6Z9");
test_math_sin(1.465131563505549e+308);
test_math_sin("YM53LSIKU");
test_math_sin(7.209406896136018e+307);
test_math_sin(9.881157837201644e+307);
test_math_sin(-429);
test_math_sin("JDIBH3G");
test_math_sin(-425);
test_math_sin("MUUG");
test_math_sin("08OZP1HIW");
test_math_sin(1.3309503018908807e+308);
test_math_sin("6FYZNX");
test_math_sin(-281);
test_math_sin(-137);
test_math_sin(1.2055698424694801e+308);
test_math_sin(-189);
test_math_sin("323M6QBH5");
test_math_sin(8.774194901145327e+307);
test_math_sin("QPOLRMT");
test_math_sin(-979);
test_math_sin("3LVIKT7");
test_math_sin("0VN41QSJ7");
test_math_sin(3.9581666788305126e+307);
test_math_sin("8HD");
test_math_sin(6.085861316045631e+307);
test_math_sin(-937);
test_math_sin(-17);
test_math_sin(1.616044493761787e+307);
test_math_sin(5.799033783793164e+307);
test_math_sin(1.2936211908963304e+308);
test_math_sin(4.61755550717918e+307);
test_math_sin("2JK8");
test_math_sin(-271);
test_math_sin("PX9YE794");
test_math_sin(-245);
test_math_sin("6275LI");
test_math_sin("MDI8AK6G21");
test_math_sin("RVLO");
test_math_sin(-227);
test_math_sin(-749);
test_math_sin("JG5981");
test_math_sin(1.0006779869618544e+308);
test_math_sin("FLK");
test_math_sin(1.2846393996337869e+308);
test_math_sin("6Y89V07F");
test_math_sin(1.4311318387655057e+308);
test_math_sin(-173);
test_math_sin(1.706765359100291e+307);
test_math_sin("MQZ");
test_math_sin("ZKM5H6IRQ");
test_math_sin("QZSU56");
test_math_sin("0OBFL");
test_math_sin(4.119717689626072e+306);
test_math_sin("YSVJGNPMK");
test_math_sin(6.088133673205975e+307);
test_math_sin(-167);
test_math_sin(-691);
test_math_sin("P5WN");
test_math_sin("LAIGTLMCWY");
test_math_sin("R7THDL4W");
test_math_sin(1.4695728801665726e+308);
test_math_sin(1.6535115474999582e+308);
test_math_sin(-503);
test_math_sin(-909);
test_math_sin("QSDUC");
test_math_sin(-287);
test_math_sin(3.7879851506342223e+307);
test_math_sin("3FT36EMQ");
test_math_sin("RGN27");
test_math_sin("J31KGRB");
test_math_sin("6643QM");
test_math_sin("4FSHWJY90B");
test_math_sin("P96YJSF7TS");
test_math_sin("96VA");
test_math_sin(-497);
test_math_sin("GUJ");
test_math_sin(5.636371113583693e+307);
test_math_sin("N7SO6QLI7C");
test_math_sin("UHUV5SR");
test_math_sin(-199);
test_math_sin("WSN15");
test_math_sin("X7SUQ");
test_math_sin(1.2568329373468498e+308);
test_math_sin("V2RHA");
test_math_sin(7.294488522948854e+307);
test_math_sin(1.2158499353708606e+308);
test_math_sin(-797);
test_math_sin("DPZXJ");
test_math_sin(7.10604385224407e+307);
test_math_sin(-457);
test_math_sin("N9FBWRM");
test_math_sin(-207);
test_math_sin("HYSAI");
test_math_sin(-215);
test_math_sin(1.7808683844748785e+308);
test_math_sin(1.3070254044651517e+307);
test_math_sin("4XBZ");
test_math_sin(1.1519120345393582e+308);
test_math_sin(1.1331055651321639e+308);
test_math_sin("IL74JS");
test_math_sin(6.6496139122907e+307);
test_math_sin(-95);
test_math_sin("O8R0AIME7C");
test_math_sin(1.3546704390171137e+308);
test_math_sin("AUQ0DE4M");
test_math_sin(9.177997296410595e+307);
test_math_sin(8.830156368433029e+307);
test_math_sin(-923);
test_math_sin(1.1269805285097684e+308);
test_math_sin("6FQOUV3MB");
test_math_sin("LNNM0F");
test_math_sin("R0W");
test_math_sin(3.109406324835971e+307);
test_math_sin(1.406340332770014e+308);
test_math_sin("RPGZ441");
test_math_sin(8.399967473603367e+307);
test_math_sin(-71);
test_math_sin(2.3912237030039807e+307);
test_math_sin("Y4X");
test_math_sin("YD1NCFC");
test_math_sin(1.0147965352683515e+307);
test_math_sin(1.6364659087954006e+308);
test_math_sin("0PO98RPP2S");
test_math_sin(-623);
test_math_sin(-725);
test_math_sin(8.548285701987945e+307);
test_math_sin(6.879948923448444e+307);
test_math_sin(9.544282116996e+307);
test_math_sin(1.3321925626476341e+308);
test_math_sin(1.1482227025072527e+308);
test_math_sin("PU0ES2N");
test_math_sin("ZI4EUCH");
test_math_sin(7.078094162063035e+307);
test_math_sin(-747);
test_math_sin("BUWI08GSF");
test_math_sin(-547);
test_math_sin("VGWMPGUJ8");
test_math_sin(-559);
test_math_sin(1.36630077820827e+307);
test_math_sin("ACKGCXHOCL");
test_math_sin(8.972627563431518e+307);
test_math_sin("8LV");
test_math_sin(4.884062712832556e+306);
test_math_sin("8SBWH");
test_math_sin(1.5332330442276428e+308);
test_math_sin(1.6926675708932614e+306);
test_math_sin(5.818618439782077e+307);
test_math_sin(-835);
test_math_sin("AIEE0U");
test_math_sin("M851");
test_math_sin("6OOH");
test_math_sin(5.701946345477888e+307);
test_math_sin(6.270773550091855e+307);
test_math_sin(4.978612336133436e+307);
test_math_sin("TC0X40BN");
test_math_sin(-853);
test_math_sin(-25);
test_math_sin(2.703794616891732e+307);
test_math_sin(7.378903148633603e+307);
test_math_sin("BNK6XAD");
test_math_sin(-715);
test_math_sin("G0BS0X9P");
test_math_sin("CS0786");
test_math_sin("3NR0J");
test_math_sin(-153);
test_math_sin(8.685372348131245e+306);
test_math_sin(5.51765936630838e+307);
test_math_sin(1.870468238158802e+305);
test_math_sin(1.7649561901711037e+308);
test_math_sin("SFGHXY9AVF");
test_math_sin(-437);
test_math_sin("JKKEA");
test_math_sin(9.855720469383603e+307);
test_math_sin(-351);
test_math_sin(5.439464402804157e+307);
test_math_sin(1.7001786685918733e+308);
test_math_sin(1.6169088713313374e+308);
test_math_sin(-263);
test_math_sin(6.100494174893027e+307);
test_math_sin("O5I0");
test_math_sin(4.752449540782679e+307);
test_math_sin(1.2421488844165533e+308);
test_math_sin(-573);
test_math_sin(-499);
test_math_sin(1.02114345981172e+308);
test_math_sin("F5S");
test_math_sin(-193);
test_math_sin(6.319322292954041e+307);
test_math_sin(-435);
test_math_sin("GVJ4610G");
test_math_sin("UBSRMVIN");
test_math_sin("S4BOUTQWL");
test_math_sin(-413);
test_math_sin(3.062038694288931e+307);
test_math_sin(-793);
test_math_sin(9.577802759120477e+307);
test_math_sin(-255);
test_math_sin(-883);
test_math_sin(-515);
test_math_sin(2.33524485805491e+307);
test_math_sin(1.0627715625047624e+308);
test_math_sin(1.1512450243215354e+308);
test_math_sin(-335);
test_math_sin(1.693114732810395e+306);
test_math_sin(4.327581134269762e+306);
test_math_sin("3WJZ17T82");
test_math_sin(-695);
test_math_sin(1.5323899431490026e+307);
test_math_sin("R1VG66");
test_math_sin("7UVABI");
test_math_sin(5.352615742076516e+307);
test_math_sin("55S7I");
test_math_sin(-811);
test_math_sin(6.868030561268402e+305);
test_math_sin("6P1G");
test_math_sin(4.977573351758322e+307);
test_math_sin(-987);
test_math_sin(-247);
test_math_sin(-965);
test_math_sin("R4USW7");
test_math_sin(-405);
test_math_sin(1.804333255090636e+307);
test_math_sin(6.077557821818749e+307);
test_math_sin("0DJ");
test_math_sin(7.805792660797546e+307);
test_math_sin(1.797387346558098e+308);
test_math_sin("NOFHRU");
test_math_sin("JFGYR");
test_math_sin(1.3691417872064226e+308);
test_math_sin("FM0");
test_math_sin(1.2276449647173497e+308);
test_math_sin("QMYUORKTA3");
test_math_sin(8.024009913094888e+307);
test_math_sin(4.0871660091831935e+307);
test_math_sin("9WQ4Y4K7");
test_math_sin(-665);
test_math_sin(1.227930218235608e+308);
test_math_sin("ZZEX6Y");
test_math_sin(8.012467588474112e+307);
test_math_sin("H40ZKAGO");
test_math_sin(-403);
test_math_sin(3.581970580718639e+307);
test_math_sin("QR9");
test_math_sin("76F");
test_math_sin(1.6873740381239915e+308);
test_math_sin(1.5286887811153575e+308);
test_math_sin("A7TH");
test_math_sin(-67);
test_math_sin("TPC7S");
test_math_sin(1.9085854558164276e+307);
test_math_sin("XD5");
test_math_sin(-231);
test_math_sin(1.5494480837678886e+308);
test_math_sin("TA847");
test_math_sin("5KKA");
test_math_sin("KQTMX1UO");
test_math_sin(1.3530163039611459e+307);
test_math_sin(9.652747122267263e+307);
test_math_sin("H25NX3LM");
test_math_sin("0YDYG75A");
test_math_sin("LZM");
test_math_sin(-981);
test_math_sin(1.1493999012023778e+308);
test_math_sin("TOFFWSNBAY");
test_math_sin(8.021991974265517e+307);
test_math_sin("ULI6UWKC0");
test_math_sin(7.117996385355105e+307);
test_math_sin("WQG2RL");
test_math_sin(1.0125281913324535e+308);
test_math_sin(3.4605038353831595e+307);
test_math_sin(-783);
test_math_sin(1.3869848367514696e+308);
test_math_sin(8.973812321883929e+307);
test_math_sin("YLJEP");
test_math_sin("ULAHP4P23W");
test_math_sin(-191);
test_math_sin(1.1708667165745503e+308);
test_math_sin("V715CT38AU");
test_math_sin(-653);
test_math_sin(3.954746277493247e+307);
test_math_sin("DHPZ4T");
test_math_sin("97WGIU");
test_math_sin("BXQQ8A");
test_math_sin(1.674384240174238e+308);
test_math_sin(1.1457795273129635e+308);
test_math_sin(9.663749029305726e+307);
test_math_sin("9S5K7RVK");
test_math_sin(1.570504088377349e+308);
test_math_sin(-977);
test_math_sin(490);
test_math_sin(1.7839302667954986e+308);
test_math_sin("BLTURG84KK");
test_math_sin(1.0116243948801094e+308);
test_math_sin(-453);
test_math_sin("4PH2");
test_math_sin(1.582742326145207e+308);
test_math_sin(-33);
test_math_sin(3.004732113458475e+307);
test_math_sin("7NAP44FRHE");
test_math_sin(-393);
test_math_sin(-677);
test_math_sin(5.810682270068153e+307);
test_math_sin("2G286660");
test_math_sin(1.596370798866254e+308);
test_math_sin(1.450348940769512e+308);
test_math_sin(8.200596743642308e+307);
test_math_sin("PP6B2");
test_math_sin(1.5777558711695646e+308);
test_math_sin(5.946543651287554e+307);
test_math_sin("H8PVCMX065");
test_math_sin("CYPNL12Y");
test_math_sin(1.2007429780942635e+308);
test_math_sin(1.6978005480593784e+308);
test_math_sin("0EAA6B");
test_math_sin(5.255148828025822e+307);
test_math_sin("RDR7QQP84");
test_math_sin("6HCHOTG");
test_math_sin(1.7152975013703143e+308);
test_math_sin(3.432044371601669e+307);
test_math_sin(1.3623432869870358e+308);
test_math_sin(2.7851218843036105e+307);
test_math_sin("YBSXTT");
test_math_sin("06QW");
test_math_sin("8FGYYBW");
test_math_sin(8.443785078588634e+307);
test_math_sin(-505);
test_math_sin(-115);
test_math_sin(-441);
test_math_sin("T7P95FSAMQ");
test_math_sin("1D5NAEIOII");
test_math_sin(-277);
test_math_sin(1.4768754094205101e+308);
test_math_sin("G7KFYC");
test_math_sin("7EUK4PD");
test_math_sin(1.7671865755878596e+308);
test_math_sin(-77);
test_math_sin(6.0421138088693045e+307);
test_math_sin(9.064425822050778e+307);
test_math_sin(-237);
test_math_sin("994HC155IF");
test_math_sin(-197);
test_math_sin("16D");
test_math_sin("8XB60MO8");
test_math_sin("6B8LRN2O8V");
test_math_sin(-769);
test_math_sin(6.016023562437362e+307);
test_math_sin(7.610247546261747e+307);
test_math_sin(-839);
test_math_sin(1.178804556184735e+308);
test_math_sin(-543);
test_math_sin(1.3662482860546557e+308);
test_math_sin("EGG6ET");
test_math_sin(2.29205080019699e+307);
test_math_sin("GIDAD69RBI");
test_math_sin(1.8848312208384366e+307);
test_math_sin("55V");
test_math_sin(-201);
test_math_sin(8.521757914438559e+307);
test_math_sin("VY0UT");
test_math_sin("CEFA93EB");
test_math_sin(1.5265610613231382e+308);
test_math_sin("H42KCF7");
test_math_sin(9.166554275280839e+306);
test_math_sin(-333);
test_math_sin(-663);
test_math_sin(-615);
test_math_sin(4.458284700408838e+307);
test_math_sin(1.5779059722829604e+308);
test_math_sin("FSMYRFQS9");
test_math_sin(-421);
test_math_sin(1.7263858865047687e+308);
test_math_sin(5.485778186725151e+307);
test_math_sin("7UZV");
test_math_sin("TEP");
test_math_sin(-969);
test_math_sin(9.861072373731697e+307);
test_math_sin(-391);
test_math_sin("C1FH8");
test_math_sin(5.028516600905332e+307);
test_math_sin(-731);
test_math_sin(1.522532833816898e+308);
test_math_sin("7UFG4WDFA");
test_math_sin("EVX");
test_math_sin(1.4819790878914606e+308);
test_math_sin("RE864");
test_math_sin(-789);
test_math_sin(3.0304682985078176e+307);
test_math_sin(-5);
test_math_sin(1.784175611496317e+308);
test_math_sin("IH6P863");
test_math_sin(-149);
test_math_sin(7.831470065669265e+307);
test_math_sin(1.0592968480987262e+308);
test_math_sin(1.393084907427684e+308);
test_math_sin(8.0412021582681e+307);
test_math_sin(2.9268018370425693e+307);
test_math_sin(-293);
test_math_sin(-41);
test_math_sin(-171);
test_math_sin("OLR9Z");
test_math_sin(-87);
test_math_sin(6.341411753219873e+307);
test_math_sin(1.236995077519703e+307);
test_math_sin(7.139748290703072e+307);
test_math_sin(1.4566065783208635e+308);
test_math_sin(-579);
test_math_sin(-121);
test_math_sin("OB4V");
test_math_sin("X8446AN");
test_math_sin("ZXZ");
test_math_sin(-347);
test_math_sin("OS7G00SO");
test_math_sin("GFYELAP");
test_math_sin("P7XJF304K");
test_math_sin("T46Y");
test_math_sin("A053V");
test_math_sin(1.0600824226645181e+308);
test_math_sin(-583);
test_math_sin("PSK827H");
test_math_sin(1.5330817653801464e+308);
test_math_sin(1.7070930044368789e+308);
test_math_sin(1.3830833994578974e+308);
test_math_sin(7.230331231788943e+307);
test_math_sin("VZLMO6");
test_math_sin("VXUZPWFXZS");
test_math_sin(6.684538493962816e+307);
test_math_sin(1.3567824702306263e+308);
test_math_sin("LQ75W");
test_math_sin(-817);
test_math_sin(7.136426405035034e+307);
test_math_sin(1.0989096741876954e+308);
test_math_sin(1.0411133343297588e+308);
test_math_sin(6.06387601572539e+307);
test_math_sin(2.2511507052527664e+306);
test_math_sin(1.679202653053138e+307);
test_math_sin(-141);
test_math_sin(-683);
test_math_sin(1.1147242064825745e+308);
test_math_sin(5.730422596548897e+307);
test_math_sin(-927);
test_math_sin("G0EP");
test_math_sin("5QU6PFD0");
test_math_sin("PIDQQM8");
test_math_sin(-99);
test_math_sin(1.6265532020762049e+308);
test_math_sin(1.7354738256364426e+308);
test_math_sin(2.1164244343388603e+307);
test_math_sin("MHNUT8O68");
test_math_sin("UVKI2BQF");
test_math_sin("XFI");
test_math_sin("0MT");
test_math_sin(6.486288193988436e+307);
test_math_sin("JNN");
test_math_sin("MXQ");
test_math_sin(1.4659542641256655e+307);
test_math_sin(-111);
test_math_sin("EHU6IV");
test_math_sin("VL15");
test_math_sin(7.303630408315489e+307);
test_math_sin(9.529736811119006e+307);
test_math_sin("KREI6");
test_math_sin(1.0962331081298775e+308);
test_math_sin(-855);
test_math_sin(5.049569309298569e+307);
test_math_sin(7.915586048007484e+307);
test_math_sin(1.2615528526265827e+307);
test_math_sin(-299);
test_math_sin(1.2035157883203732e+308);
test_math_sin(5.607896071947578e+307);
test_math_sin(1.4136904100774947e+308);
test_math_sin(-97);
test_math_sin("L0SOOHU");
test_math_sin("13OTBIM8");
test_math_sin(1.7556188889487552e+308);
test_math_sin(-953);
test_math_sin("87JJY8");
test_math_sin(-693);
test_math_sin("6X4IYT9WL");
test_math_sin("WPE4R5PF");
test_math_sin("OAFGT39Q8Y");
test_math_sin("U7FMK");
test_math_sin("ZUBYHW2VS");
test_math_sin("JS16OMZDVT");
test_math_sin(1.3271120941306814e+308);
test_math_sin(-657);
test_math_sin(6.178171579000967e+307);
test_math_sin(-773);
test_math_sin("9VVYXN3QGD");
test_math_sin(1.248277770619316e+307);
test_math_sin("KM1EDRU9T");
test_math_sin(8.47883313374728e+307);
test_math_sin("MHEVARR");
test_math_sin(-51);
test_math_sin(3.8831474185792297e+307);
test_math_sin("SFBRTCF8");
test_math_sin("V23AL");
test_math_sin(9.621074762627707e+307);
test_math_sin(6.203276711146491e+307);
test_math_sin(-31);
test_math_sin("7R606V");
test_math_sin(1.1935112536305495e+308);
test_math_sin(1.2189652418920285e+307);
test_math_sin(1.3558314491643459e+308);
test_math_sin(1.4504412271512523e+308);
test_math_sin(-975);
test_math_sin(1.106770806750282e+308);
test_math_sin("HV8V7");
test_math_sin(-329);
test_math_sin(6.964625773102079e+307);
test_math_sin("OXD93FC2");
test_math_sin(4.4461147260298456e+307);
test_math_sin(1.4838297421363612e+308);
test_math_sin("1V3WS20H");
test_math_sin(1.8901948529788242e+307);
test_math_sin(-591);
test_math_sin("MM5IE7GV");
test_math_sin(3.797355533054222e+307);
test_math_sin(1.3188601731859989e+308);
test_math_sin("KU5VGW8UKF");
test_math_sin(3.23174123492428e+307);
test_math_sin(1.0602291017655978e+308);
test_math_sin(-889);
test_math_sin("QMA");
test_math_sin(1.0300955841969167e+308);
test_math_sin(1.028615210729327e+308);
test_math_sin(1.860338587508019e+307);
test_math_sin(5.743315351276098e+307);
test_math_sin("31W2K7OB");
test_math_sin("39KLWOAGMX");
test_math_sin("ALOYO7");
test_math_sin(3.6786365926419053e+307);
test_math_sin(1.2866278028146419e+308);
test_math_sin(5.835746457175144e+307);
test_math_sin(1.040787360328283e+308);
test_math_sin("YLIV68RNTJ");
test_math_sin("TXM");
test_math_sin(-401);
test_math_sin(1.22465714826664e+308);
test_math_sin(-787);
test_math_sin("O8PDIZ0");
test_math_sin("I8GJ4F");
test_math_sin("PHLN4RA");
test_math_sin("VB9123FL");
test_math_sin(3.048790387469206e+306);
test_math_sin(-363);
test_math_sin("1EXTFZWL");
test_math_sin(7.368977472984498e+307);
test_math_sin(-815);
test_math_sin(-479);
test_math_sin(-621);
test_math_sin(-947);
test_math_sin("5T0");
test_math_sin("TBC9TJ87NS");
test_math_sin("VL7TB36");
test_math_sin("XEABHCK");
test_math_sin("NEJ6OKE");
test_math_sin("033WHBO");
test_math_sin("A5DK8C");
test_math_sin("QMWDW");
test_math_sin("9CGAPM");
test_math_sin("H10WHM");
test_math_sin("2EJ7MX54");
test_math_sin(1.1463259781781125e+308);
test_math_sin(4.0868716476026916e+307);
test_math_sin(1.3114493707569298e+308);
test_math_sin("37H5QO");
test_math_sin(-43);
test_math_sin(1.256630440362666e+308);
test_math_sin(9.417877601310197e+307);
test_math_sin(1.5968657595530116e+308);
test_math_sin(1.5955314906240063e+308);
test_math_sin(-475);
test_math_sin("F980UE8TLY");
test_math_sin(9.962748978378e+307);
test_math_sin("WPF");
test_math_sin("T5KU24F72P");
test_math_sin("A6ND");
test_math_sin("BJP0KTSW");
test_math_sin("2Q22D7N");
test_math_sin("0NMRWHDHDT");
test_math_sin(-803);
test_math_sin(1.7691924544924816e+308);
test_math_sin(4.1820024794436845e+307);
test_math_sin("EPSD");
test_math_sin("LHFXB1Y");
test_math_sin("QHJ9X9OYA");
test_math_sin("MDLI5D");
test_math_sin(-671);
test_math_sin(1.70880712375247e+308);
test_math_sin(1.2824600331300099e+308);
test_math_sin(-117);
test_math_sin(1.4978324475124041e+308);
test_math_sin(1.4992431092535874e+307);
test_math_sin("5AYWRV5");
test_math_sin("K1OC50");
test_math_sin("TEJX");
test_math_sin(1.5121473503555673e+308);
test_math_sin(-73);
test_math_sin(-745);
test_math_sin(1.3835145008566704e+308);
test_math_sin("PYZGXMC");
test_math_sin(-265);
test_math_sin("HCR7LD");
test_math_sin("2N1M93TXBA");
test_math_sin(3.113518223330015e+307);
test_math_sin("7XCPKZ4");
test_math_sin(1.244810785187392e+308);
test_math_sin(7.51891847840884e+307);
test_math_sin(1.2070551419174316e+308);
test_math_sin("FBY5");
test_math_sin(5.671972213899753e+307);
test_math_sin(-395);
test_math_sin(7.012715398356966e+307);
test_math_sin("24D4ITG6");
test_math_sin(5.85603532721377e+307);
test_math_sin("0EBPSS");
test_math_sin("6HY3M");
test_math_sin(5.709393449401259e+307);
test_math_sin(-47);
test_math_sin("OOENQU2");
test_math_sin(1.7596576788824676e+308);
test_math_sin("TQRJ");
test_math_sin(6.118719317319012e+307);
test_math_sin("RFL");
test_math_sin(5.723786165766295e+307);
test_math_sin("7POZPM");
test_math_sin(1.6619184078342073e+308);
test_math_sin(3.136285792946815e+307);
test_math_sin("EJS4HKQXE");
test_math_sin(-763);
test_math_sin(-569);
test_math_sin(6.654789396454021e+307);
test_math_sin(-563);
test_math_sin(9.109054327057934e+307);
test_math_sin(1.515011344257179e+307);
test_math_sin(1.2004482968379288e+308);
test_math_sin("MWNBXS9VGW");
test_math_sin(-931);
test_math_sin(-603);
test_math_sin(-619);
test_math_sin("6PYBWB4F");
test_math_sin(-139);
test_math_sin(1.5245580226030558e+308);
test_math_sin("W71");
test_math_sin(1.0993324964471218e+308);
test_math_sin("CV8");
test_math_sin(2.1768886658526047e+307);
test_math_sin(-485);
test_math_sin(6.08019600807249e+307);
test_math_sin("9MLK7BPZS1");
test_math_sin("VU34");
test_math_sin(3.294543271676636e+306);
test_math_sin(-91);
test_math_sin("RRS8C");
test_math_sin(1.3262632106237732e+308);
test_math_sin(-699);
test_math_sin(-253);
test_math_sin("BBU5");
test_math_sin(4.556932355739907e+307);
test_math_sin(-873);
test_math_sin(-165);
test_math_sin("TB9VF1FZJ");
test_math_sin(-65);
test_math_sin("KT11WM82");
test_math_sin(2.0936821296308526e+307);
test_math_sin(-221);
test_math_sin(3.7937231691844924e+307);
test_math_sin(1.155402884843197e+308);
test_math_sin(4.92657552401339e+307);
test_math_sin(-419);
test_math_sin("789OWPDY8");
test_math_sin(5.604848322511623e+307);
test_math_sin(-19);
test_math_sin(1.7054026040644183e+308);
test_math_sin(1.6174509521302943e+307);
test_math_sin(6.150352854934293e+307);
test_math_sin(1.9036180651593975e+307);
test_math_sin("8STWUJ6LD");
test_math_sin("UZGXQU");
test_math_sin(5.975996910258066e+306);
test_math_sin("VRGXC8N3CN");
test_math_sin(-105);
test_math_sin("KUU2");
test_math_sin(8.129652628052721e+307);
test_math_sin(2.676964063206923e+307);
test_math_sin(1.3642475178915045e+308);
test_math_sin(4.443971881351481e+307);
test_math_sin(1.7273361276230589e+308);
test_math_sin("8BSI727G2");
test_math_sin(1.1385711504817714e+308);
test_math_sin(1.755664819615356e+308);
test_math_sin("HQPKNCSDSM");
test_math_sin(9.338872955712457e+307);
test_math_sin("UNXPSMKJKZ");
test_math_sin(1.2721514547855347e+308);
test_math_sin(9.17110156522522e+307);
test_math_sin(-859);
test_math_sin(-101);
test_math_sin("GLB2");
test_math_sin(4.614743719113841e+307);
test_math_sin(4.496460787991219e+307);
test_math_sin(-673);
test_math_sin("UTIQR5W");
test_math_sin("6QQAPKQ");
test_math_sin(1.8055575193130275e+307);
test_math_sin(7.378823349950774e+306);
test_math_sin(5.617417440580829e+307);
test_math_sin("7ER3");
test_math_sin(7.977991415125289e+307);
test_math_sin("M6B");
test_math_sin(1.3269270099675707e+308);
test_math_sin(-353);
test_math_sin(-439);
test_math_sin("H505");
test_math_sin("3VNY");
test_math_sin("U1TD");
test_math_sin("EVRB33TH7");
test_math_sin(1.6097019507121027e+308);
test_math_sin(-415);