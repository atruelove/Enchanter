/*
* This file is automatically generated by Swami
*
* 2019-08-06 19:40:39.708577
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
function test_math_cos(x){
	if (Object.is( x,NaN )){
		var output = Math.cos(x);
		new TestCase("math_cos", "math_cos", NaN, output);
		test();
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.cos(x);
		new TestCase("math_cos", "math_cos", 1, output);
		test();
		return;
		}
	if (( x === - 0 )){
		var output = Math.cos(x);
		new TestCase("math_cos", "math_cos", 1, output);
		test();
		return;
		}
	if (( x === + Infinity )){
		var output = Math.cos(x);
		new TestCase("math_cos", "math_cos", NaN, output);
		test();
		return;
		}
	if (( x === - Infinity )){
		var output = Math.cos(x);
		new TestCase("math_cos", "math_cos", NaN, output);
		test();
		return;
		}
}



/*TESTS GENERATED AUTOMATICALLY*/
test_math_cos(null);
test_math_cos(-63);
test_math_cos("QR0XZ0");
test_math_cos(/yes.*day/);
test_math_cos(-657);
test_math_cos(false);
test_math_cos(undefined);
test_math_cos(NaN);
test_math_cos(/ab+c/);
test_math_cos("GEDHRY6");
test_math_cos(true);
test_math_cos(/foo/g);
test_math_cos(/\r\n|\r|\n/);
test_math_cos(/yes[^]*day/);
test_math_cos(/(\w+)\s(\w+)/);
test_math_cos(7.563754031478061e+307);
test_math_cos(-0);
test_math_cos(/[^.]+/);
test_math_cos(-863);
test_math_cos(+0);
test_math_cos(1.654398567753427e+308);
test_math_cos(-959);
test_math_cos("706G");
test_math_cos("10STYW");
test_math_cos(Infinity);
test_math_cos(1.165304347064714e+308);
test_math_cos(1.4458081576484009e+308);
test_math_cos("9M6");
test_math_cos("0BJX");
test_math_cos(-199);
test_math_cos(-535);
test_math_cos(5.082961728950343e+307);
test_math_cos("1PH");
test_math_cos("A8CC6I4LE");
test_math_cos(-887);
test_math_cos("GMAZ4AHI1");
test_math_cos(9.983972050792879e+307);
test_math_cos(1.4670558449991559e+308);
test_math_cos(-191);
test_math_cos("KBZDB40HOC");
test_math_cos(-795);
test_math_cos(-503);
test_math_cos(4.1027064992845603e+307);
test_math_cos(2.764203533384493e+307);
test_math_cos("CH3KJZ28DS");
test_math_cos("YE9H15");
test_math_cos("O7KI9N6J43");
test_math_cos(-821);
test_math_cos(7.142058176292831e+307);
test_math_cos(5.236982349672863e+306);
test_math_cos("4NDQ09");
test_math_cos("XARDSDYIAD");
test_math_cos(-93);
test_math_cos(2.486999979681639e+307);
test_math_cos("DUXJ7JNFTP");
test_math_cos(1.4595374170688612e+308);
test_math_cos(1.2255180403895146e+308);
test_math_cos(1.87855701003172e+307);
test_math_cos(/[\u0400-\u04FF]+/g);
test_math_cos("6MWFJ0BLS");
test_math_cos("6AQ1HGCR");
test_math_cos(-881);
test_math_cos(4.4351405645684934e+307);
test_math_cos("CL8H");
test_math_cos(-947);
test_math_cos(4.1468776062501925e+307);
test_math_cos("RL0A7XE");
test_math_cos("M89ZHTLXU4");
test_math_cos(-811);
test_math_cos(-965);
test_math_cos(2.3361787932832654e+307);
test_math_cos("23605EUT4P");
test_math_cos(1.5725324050491622e+308);
test_math_cos(1.5367729940870098e+308);
test_math_cos(1.3576827391517398e+308);
test_math_cos(6.225364257662722e+307);
test_math_cos(1.7515466790894684e+308);
test_math_cos(1.2092196834777242e+308);
test_math_cos("15S8G8VBG");
test_math_cos(630);
test_math_cos(8.116204021301584e+307);
test_math_cos(5.067782809282942e+307);
test_math_cos(1.3138293468015026e+307);
test_math_cos("ZGPG9DGE1");
test_math_cos(4.865815325831528e+307);
test_math_cos("1P1WH03JP");
test_math_cos(1.4749583000864362e+308);
test_math_cos("5KML346B4Y");
test_math_cos(-155);
test_math_cos(-879);
test_math_cos(4.826189513309697e+305);
test_math_cos(1.2496693878196246e+308);
test_math_cos(1.6750455745185248e+307);
test_math_cos("4ML");
test_math_cos(7.479415417736911e+307);
test_math_cos(6.73381446316955e+307);
test_math_cos("UB7F");
test_math_cos(-251);
test_math_cos(1.4760120556590645e+308);
test_math_cos(1.5422573443577677e+308);
test_math_cos(3.6121031442560247e+307);
test_math_cos(-429);
test_math_cos(-587);
test_math_cos("Y1CKBWPKAV");
test_math_cos(1.4834528515630372e+308);
test_math_cos("KKDL1");
test_math_cos(7.693792865905058e+307);
test_math_cos("O66U");
test_math_cos(1.1452353113620974e+308);
test_math_cos("1QWE9RA3D8");
test_math_cos(-859);
test_math_cos("9DFCV5IR");
test_math_cos(2.7209285344249246e+307);
test_math_cos(1.7686088939871195e+308);
test_math_cos(8.861627261611576e+306);
test_math_cos(-153);
test_math_cos(-907);
test_math_cos(128);
test_math_cos("OB09M4T6G");
test_math_cos(4.1481325014493626e+307);
test_math_cos("WY273119");
test_math_cos(5.034900245303849e+307);
test_math_cos("POY");
test_math_cos("HZL");
test_math_cos(1.311664382405663e+308);
test_math_cos("WIEDLJ");
test_math_cos("01JI0J");
test_math_cos(888);
test_math_cos("Y475");
test_math_cos(-531);
test_math_cos(1.3516309683690175e+308);
test_math_cos("H6NT119HJW");
test_math_cos(1.7811174525839009e+308);
test_math_cos("P15HQQC");
test_math_cos(1.032863727166836e+308);
test_math_cos("NV5SSX5");
test_math_cos("N42Z4T3YU");
test_math_cos(7.797448198093462e+307);
test_math_cos(-323);
test_math_cos("G0K0C");
test_math_cos("S19J5YHC8");
test_math_cos("OX3RE");
test_math_cos(-897);
test_math_cos(1.5196528283195245e+308);
test_math_cos(-489);
test_math_cos(2.341011288029354e+307);
test_math_cos(-409);
test_math_cos(5.758272748470326e+307);
test_math_cos(1.003074843023051e+308);
test_math_cos(1.2139826120832833e+308);
test_math_cos("22GT2T1H");
test_math_cos("16VG43W");
test_math_cos("Z4B");
test_math_cos("HF1W2YQR8");
test_math_cos(-689);
test_math_cos(4.651786122496986e+307);
test_math_cos(8.479742911978452e+307);
test_math_cos(-439);
test_math_cos(-73);
test_math_cos(-221);
test_math_cos(1.3677100399623135e+308);
test_math_cos("7CV");
test_math_cos("LIRWWUJWP");
test_math_cos(5.748352102859929e+307);
test_math_cos("THGSSQVN");
test_math_cos(1.3007741619325205e+308);
test_math_cos("X8C1JIICD");
test_math_cos(-353);
test_math_cos(3.0204553158772375e+307);
test_math_cos(-285);
test_math_cos(-271);
test_math_cos(6.729374157126463e+307);
test_math_cos(-147);
test_math_cos("6A63HA");
test_math_cos(8.243664157064145e+307);
test_math_cos(4.093437668205151e+307);
test_math_cos("QHMLXKAHT");
test_math_cos(-539);
test_math_cos("6PC11ELQU");
test_math_cos(-499);
test_math_cos("G5G3X9CKIP");
test_math_cos(1.0262359065375175e+308);
test_math_cos(-361);
test_math_cos(-487);
test_math_cos(4.883159122231002e+307);
test_math_cos(1.755167384305997e+308);
test_math_cos(4.955215420320203e+307);
test_math_cos(-383);
test_math_cos(9.79571579936116e+307);
test_math_cos(1.1193493280889633e+308);
test_math_cos(-981);
test_math_cos("UZ5JA");
test_math_cos(-877);
test_math_cos(-555);
test_math_cos("S87OH");
test_math_cos(-819);
test_math_cos("OVR6K");
test_math_cos("0E9IA");
test_math_cos(1.1715663032306197e+308);
test_math_cos(1.3657427223348267e+308);
test_math_cos(-783);
test_math_cos(1.6180712809212754e+308);
test_math_cos(-103);
test_math_cos(-839);
test_math_cos(1.1060194797576166e+307);
test_math_cos("IM4");
test_math_cos(9.950432830914056e+307);
test_math_cos(-845);
test_math_cos("RU1S9N");
test_math_cos("SWCZ9GL97");
test_math_cos("Q62T706EWV");
test_math_cos(1.0071886873298878e+308);
test_math_cos(1.0477406164843116e+308);
test_math_cos("IJ8W2LS");
test_math_cos(-371);
test_math_cos(-565);
test_math_cos("F55");
test_math_cos(-143);
test_math_cos(-797);
test_math_cos(-895);
test_math_cos(-977);
test_math_cos(-835);
test_math_cos(-513);
test_math_cos(-747);
test_math_cos(2.398544173070804e+307);
test_math_cos("TGXDCDU");
test_math_cos(1.0809280333569473e+308);
test_math_cos("UEVPIX81");
test_math_cos(1.1716286626028877e+308);
test_math_cos(9.537891758593185e+307);
test_math_cos(-135);
test_math_cos(8.557361266206004e+307);
test_math_cos(-217);
test_math_cos(-997);
test_math_cos(1.7857322138867514e+308);
test_math_cos(-643);
test_math_cos("JPIHASDO");
test_math_cos(-431);
test_math_cos("WER");
test_math_cos("3L3J9");
test_math_cos("SY9TP");
test_math_cos("MYQFY");
test_math_cos(4.768561381117638e+307);
test_math_cos(1.0894240626356097e+308);
test_math_cos("BL4ALT78D");
test_math_cos(-699);
test_math_cos(-889);
test_math_cos(-745);
test_math_cos(9.57827626833621e+307);
test_math_cos(-293);
test_math_cos(1.0775945496341376e+308);
test_math_cos(-115);
test_math_cos(2.8756463913680707e+307);
test_math_cos("URYZ31LYA");
test_math_cos(1.4748416765813128e+308);
test_math_cos(-597);
test_math_cos(3.0130291675635014e+307);
test_math_cos(-277);
test_math_cos(-861);
test_math_cos(-743);
test_math_cos(-141);
test_math_cos("Q6ZUSUDMSC");
test_math_cos(5.529140912174677e+306);
test_math_cos("LMCKBZC3YL");
test_math_cos(5.187236982550623e+307);
test_math_cos(-523);
test_math_cos(-865);
test_math_cos("QR5ZETF");
test_math_cos(6.917246483972899e+306);
test_math_cos("Q6PGA4CGC");
test_math_cos(6.12002722560942e+307);
test_math_cos("F3DSYL");
test_math_cos(-261);
test_math_cos(-991);
test_math_cos(-185);
test_math_cos(6.220795943837535e+307);
test_math_cos("6AM8O");
test_math_cos(5.791518558967393e+307);
test_math_cos("JLH3W");
test_math_cos("AUD");
test_math_cos(3.6032936392470877e+307);
test_math_cos(1.3874806878659196e+308);
test_math_cos(-379);
test_math_cos(-667);
test_math_cos(1.114077008521682e+308);
test_math_cos(-793);
test_math_cos(1.1989111590094693e+308);
test_math_cos(8.664241785552156e+307);
test_math_cos(-893);
test_math_cos(-695);
test_math_cos(2.763243166673056e+307);
test_math_cos(-983);
test_math_cos("847FSJ");
test_math_cos(-987);
test_math_cos(-279);
test_math_cos(1.625246028182156e+308);
test_math_cos(1.7611276891383547e+308);
test_math_cos(9.106079677804225e+307);
test_math_cos("3AS5M7FXCC");
test_math_cos(-493);
test_math_cos(-269);
test_math_cos("FYNODCHIP");
test_math_cos(2.5202452885942663e+307);
test_math_cos(-655);
test_math_cos(-909);
test_math_cos(1.7442358472423896e+308);
test_math_cos("Y91HNQ17");
test_math_cos(1.2162226874845366e+308);
test_math_cos(6.869550702338208e+307);
test_math_cos(-453);
test_math_cos(-423);
test_math_cos("DGQ");
test_math_cos("N805ZW9");
test_math_cos(-207);
test_math_cos(5.521753068088557e+307);
test_math_cos("D59EWE");
test_math_cos(-713);
test_math_cos(5.077580857958423e+307);
test_math_cos(-871);
test_math_cos(-533);
test_math_cos(-763);
test_math_cos("RK5I");
test_math_cos(1.0493224257140846e+308);
test_math_cos("WDZ0");
test_math_cos("APJ0L");
test_math_cos(-537);
test_math_cos(1.29619449097214e+308);
test_math_cos(1.4114378000887372e+308);
test_math_cos("CVJJMCTOY");
test_math_cos("6ZP28RO");
test_math_cos(-289);
test_math_cos(1.4425857933854928e+308);
test_math_cos("BWUUR9S");
test_math_cos("OHD38MJ");
test_math_cos(-931);
test_math_cos("06NE7Q");
test_math_cos(336);
test_math_cos(6.584800001485832e+307);
test_math_cos("WH728W5");
test_math_cos(-591);
test_math_cos(-267);
test_math_cos("4277XB9");
test_math_cos(6.763926362915594e+307);
test_math_cos(-721);
test_math_cos(-635);
test_math_cos(-799);
test_math_cos(1.7365337390703103e+308);
test_math_cos("ATEOTNUA");
test_math_cos("ELP24B7");
test_math_cos("I0G14");
test_math_cos(-105);
test_math_cos("6KHCL6");
test_math_cos(1.2729847582918737e+308);
test_math_cos(1.0205500389954409e+308);
test_math_cos("9KDPYT");
test_math_cos("4H890GU");
test_math_cos("NVAKBJBE");
test_math_cos(4.2350589182896864e+307);
test_math_cos("C6HWZ");
test_math_cos(-57);
test_math_cos("LXPJXU6EOS");
test_math_cos(1.4345116387390211e+308);
test_math_cos("JNY64MI3NN");
test_math_cos(-179);
test_math_cos(612);
test_math_cos("JS9YJV");
test_math_cos("1CG0EZQ");
test_math_cos(1.243639518028285e+308);
test_math_cos(5.732316339663466e+307);
test_math_cos("FFP9");
test_math_cos(1.323658321523249e+307);
test_math_cos(-641);
test_math_cos("2T3FF");
test_math_cos(-411);
test_math_cos("EUK");
test_math_cos(5.205953598423269e+307);
test_math_cos(-553);
test_math_cos(-733);
test_math_cos(-61);
test_math_cos("YNH5MORK");
test_math_cos(-521);
test_math_cos(4.884182357235296e+307);
test_math_cos(1.5319530023544452e+308);
test_math_cos(3.38507969439807e+307);
test_math_cos(-621);
test_math_cos(-407);
test_math_cos("2GIXQ");
test_math_cos(4.178327006206321e+307);
test_math_cos(-295);
test_math_cos("PDGTPS");
test_math_cos(-89);
test_math_cos(-637);
test_math_cos(8.79298219969707e+307);
test_math_cos("K7UYYI0O");
test_math_cos(9.77124031927801e+307);
test_math_cos("BEEAHH2Y0");
test_math_cos("1TJFZO");
test_math_cos(-567);
test_math_cos("AVNGF0CES");
test_math_cos(9.296122459289177e+307);
test_math_cos("QP3");
test_math_cos("VHYHN49N");
test_math_cos("675RBK2");
test_math_cos("032U16192");
test_math_cos("SQ9");
test_math_cos(-187);
test_math_cos(1.0106069749805972e+308);
test_math_cos(5.125628517355953e+307);
test_math_cos(1.6232674358553588e+308);
test_math_cos(-801);
test_math_cos("Y64AK");
test_math_cos(1.5392220455894808e+308);
test_math_cos(1.03047239759045e+308);
test_math_cos("OKZE6T");
test_math_cos(-651);
test_math_cos(1.3279938990720118e+308);
test_math_cos("0LW8HMXEV");
test_math_cos("8K02XDIA81");
test_math_cos(4.616954499825132e+307);
test_math_cos(-255);
test_math_cos(1.5452987158211916e+308);
test_math_cos(1.0836760967780342e+308);
test_math_cos(7.004349447827538e+307);
test_math_cos(4.605889396595277e+307);
test_math_cos("SRW9KW33U");
test_math_cos(7.711004754024338e+307);
test_math_cos("IT81");
test_math_cos(-215);
test_math_cos("VWSTV");
test_math_cos("AW9X2QU6");
test_math_cos(3.339929147342972e+307);
test_math_cos(-561);
test_math_cos(6.631382818008834e+307);
test_math_cos(-677);
test_math_cos("QRO9B3FAV");
test_math_cos("R2NU0SN46");
test_math_cos(1.3859945624197499e+308);
test_math_cos(-95);
test_math_cos("0BTTD6YH7O");
test_math_cos(-975);
test_math_cos(1.096242782648449e+308);
test_math_cos(1.4000444422699702e+308);
test_math_cos(-851);
test_math_cos(4.4548030179682285e+307);
test_math_cos("33PFNDNN");
test_math_cos("CJXG9H");
test_math_cos(7.584891169763658e+307);
test_math_cos(988);
test_math_cos(150);
test_math_cos(1.7369178960172998e+308);
test_math_cos("GXV3S");
test_math_cos("1PVJCRNI4T");
test_math_cos(-605);
test_math_cos(-437);
test_math_cos(1.3581029734576844e+308);
test_math_cos(1.844531017135513e+307);
test_math_cos(-853);
test_math_cos(5.2439578358094955e+306);
test_math_cos(1.5879272122701615e+308);
test_math_cos("GF29W6AB");
test_math_cos("IEE4B72B");
test_math_cos(6.128932484470976e+307);
test_math_cos(-669);
test_math_cos(3.0573124858101255e+307);
test_math_cos("LHZPK");
test_math_cos(2.0828288688227683e+307);
test_math_cos("YEWH7M");
test_math_cos(7.187059988363354e+307);
test_math_cos(1.0766441942580584e+308);
test_math_cos("2T120N");
test_math_cos(-441);
test_math_cos("SENLIWULR");
test_math_cos("0HFDGT");
test_math_cos(-495);
test_math_cos(-15);
test_math_cos(9.614099800279637e+307);
test_math_cos(6.755660673714983e+307);
test_math_cos("SOH7AXWPMG");
test_math_cos(1.020361772330209e+307);
test_math_cos(2.0733217706996193e+307);
test_math_cos("WRF1VXI");
test_math_cos(1.0610773273287102e+308);
test_math_cos(1.4921424478290118e+308);
test_math_cos("AEM4VOUL");
test_math_cos(-71);
test_math_cos(9.087138030951653e+307);
test_math_cos("ZS07NB");
test_math_cos("D3Q8QNCS");
test_math_cos(7.24729162411246e+307);
test_math_cos("5XPVT2709");
test_math_cos("EKQCRLNE4");
test_math_cos("B85K");
test_math_cos(1.4622604045067091e+308);
test_math_cos("K3MU8X");
test_math_cos("MLLF");
test_math_cos(-443);
test_math_cos("ZP8O4H2");
test_math_cos("H22I");
test_math_cos(-37);
test_math_cos("7UPM2OD");
test_math_cos(3.3536551796433107e+307);
test_math_cos(3.1867489362815133e+307);
test_math_cos("AQF7O767XW");
test_math_cos(1.4376084356020808e+308);
test_math_cos("97SXW5H");
test_math_cos(1.609178147933795e+308);
test_math_cos(1.2379907662298458e+308);
test_math_cos("ILHCGHP");
test_math_cos("ZVLRXQ");
test_math_cos(5.846867362446097e+307);
test_math_cos("JIZFHXY");
test_math_cos("HEA9MS9AB");
test_math_cos(-847);
test_math_cos("J35");
test_math_cos(6.772396722870894e+307);
test_math_cos(2.638274477616273e+307);
test_math_cos("NIN3");
test_math_cos(-259);
test_math_cos(1.469218758558447e+308);
test_math_cos("UMYJJ0NX");
test_math_cos("HALAS");
test_math_cos(-33);
test_math_cos(5.742630784360519e+307);
test_math_cos(1.0357489507795014e+308);
test_math_cos(-477);
test_math_cos(5.0372305744288074e+306);
test_math_cos(1.3753954353377514e+308);
test_math_cos(1.1242878822385383e+308);
test_math_cos(-359);
test_math_cos(1.5930650393834048e+308);
test_math_cos(-119);
test_math_cos(5.818396472852957e+307);
test_math_cos("30EK9Z5BDK");
test_math_cos(2.3912237030039807e+307);
test_math_cos("J9LPXWYE");
test_math_cos(-381);
test_math_cos(-551);
test_math_cos(-77);
test_math_cos("FOXSE62UC0");
test_math_cos(-151);
test_math_cos(3.9120661974023923e+307);
test_math_cos(-725);
test_math_cos(1.210549608397299e+308);
test_math_cos(1.5170212419950219e+308);
test_math_cos("HLZHND");
test_math_cos(9.975072374399738e+307);
test_math_cos(3.6684325318959725e+307);
test_math_cos(-491);
test_math_cos(6.119934318934256e+307);
test_math_cos(-773);
test_math_cos("3H89E0");
test_math_cos(-405);
test_math_cos(-731);
test_math_cos(3.576079663694876e+305);
test_math_cos(-173);
test_math_cos(8.570909981060406e+307);
test_math_cos(-781);
test_math_cos(1.496907135873887e+308);
test_math_cos("EYF5QDB");
test_math_cos(7.361098570724795e+307);
test_math_cos("WBO");
test_math_cos("5DK");
test_math_cos(-175);
test_math_cos("OXJBJ4PA6F");
test_math_cos("97542");
test_math_cos(-579);
test_math_cos("OWVB1PJUSG");
test_math_cos("R0PFKH9XRP");
test_math_cos(1.3869229490328369e+308);
test_math_cos(-69);
test_math_cos("MPSOQ");
test_math_cos(7.713060762572976e+307);
test_math_cos("UI2TEJN");
test_math_cos(-867);
test_math_cos("3FC0");
test_math_cos(-785);
test_math_cos(4.4343605301752466e+307);
test_math_cos(2.7561614516633765e+307);
test_math_cos(1.4046347509689076e+307);
test_math_cos(2.6182502851597687e+307);
test_math_cos(-765);
test_math_cos(9.816422672017442e+307);
test_math_cos("6LDQ");
test_math_cos(6.470803428117018e+307);
test_math_cos(1.5763482767095895e+308);
test_math_cos(-653);
test_math_cos(1.6987893586785716e+307);
test_math_cos(-349);
test_math_cos(8.002931786337823e+307);
test_math_cos(-355);
test_math_cos("UB1BAQC");
test_math_cos(-671);
test_math_cos("M1ORT");
test_math_cos("8BZB2YVCA");
test_math_cos(-99);
test_math_cos(-595);
test_math_cos(8.86674552325317e+307);
test_math_cos(-27);
test_math_cos(2.148046597327878e+307);
test_math_cos(1.1278658318671347e+308);
test_math_cos(1.2346053631872736e+308);
test_math_cos(-857);
test_math_cos("TP5HS");
test_math_cos("F582YQGJD");
test_math_cos("9VM");
test_math_cos(-925);
test_math_cos(1.6523607625507255e+308);
test_math_cos(2.46378806293593e+307);
test_math_cos(-849);
test_math_cos("GVHT");
test_math_cos(1.5325034530758514e+308);
test_math_cos("25YG3");
test_math_cos(7.515684255683273e+307);
test_math_cos("7TQ");
test_math_cos("2I0SOBSQC");
test_math_cos(-607);
test_math_cos("T6J27JG");
test_math_cos(9.26968609721109e+307);
test_math_cos(-3);
test_math_cos(1.6021942991612297e+308);
test_math_cos(6.98901935175516e+307);
test_math_cos(1.3278410375614916e+307);
test_math_cos(1.1806876149605812e+308);
test_math_cos(-31);
test_math_cos(-331);
test_math_cos("1AYRK4DJ");
test_math_cos(-189);
test_math_cos(-427);
test_math_cos(7.055147423371149e+307);
test_math_cos(5.624456818108211e+307);
test_math_cos("SGBGLUB9PA");
test_math_cos(-29);
test_math_cos("3H81N");
test_math_cos("9CGAPM");
test_math_cos(-475);
test_math_cos("DDKEE1");
test_math_cos("7BFMHTR");
test_math_cos("NQYQL");
test_math_cos("K1UDROZG");
test_math_cos("2C6N");
test_math_cos(2.615276435603211e+306);
test_math_cos("BLR");
test_math_cos(1.5264064215283747e+307);
test_math_cos("956");
test_math_cos(1.7893793612240911e+308);
test_math_cos("15W");
test_math_cos("IQ9DL6Y3");
test_math_cos("85SLYTDNTZ");
test_math_cos(7.489647264173387e+307);
test_math_cos("M1RQBGPRCO");
test_math_cos("FEZPAZDY");
test_math_cos(-395);
test_math_cos(1.1588179190853236e+307);
test_math_cos("D9UEO3LO");
test_math_cos(4.645359883413817e+307);
test_math_cos("NI4CAU991");
test_math_cos(-121);
test_math_cos(4.4561508831171264e+307);
test_math_cos(4.740499221107927e+307);
test_math_cos("ZSNXRP");
test_math_cos(-455);
test_math_cos("13ITUOU");
test_math_cos("ESHKVIB6");
test_math_cos("MOXVB4J");
test_math_cos("Q4PE");
test_math_cos("6KY8DOGRLM");
test_math_cos("R7L");
test_math_cos(1.5181627292805527e+307);
test_math_cos(4.955672171494415e+307);
test_math_cos(-779);
test_math_cos("4VQ29E");
test_math_cos(5.819461020046121e+307);
test_math_cos("KN7U97PKE");
test_math_cos("5VNI");
test_math_cos("BBT");
test_math_cos(2.6601402014090823e+307);
test_math_cos(-245);
test_math_cos("JKGMB");
test_math_cos(2.1617551690323315e+307);
test_math_cos(1.6852269840093977e+308);
test_math_cos("XGTCX");
test_math_cos("329DAFAZFT");
test_math_cos("A0C265");
test_math_cos(1.2536522136378146e+308);
test_math_cos("HAZZ");
test_math_cos(4.655914950667091e+307);
test_math_cos(-97);
test_math_cos(-467);
test_math_cos("IEXJ6F6G9");
test_math_cos("RFWW8J5R7");
test_math_cos("XWQS0ZLX");
test_math_cos(-389);
test_math_cos(-825);
test_math_cos(1.539306334032156e+308);
test_math_cos(9.781232648900057e+307);
test_math_cos("DFZHVBDRMT");
test_math_cos(1.7272575980283663e+308);
test_math_cos("5UE");
test_math_cos(-681);
test_math_cos("AV64");
test_math_cos(-995);
test_math_cos("PK7W9KSYP");
test_math_cos(-313);
test_math_cos("AFGHIIXIF");
test_math_cos(-557);
test_math_cos(2.1482204014890545e+307);
test_math_cos(7.802206884992783e+307);
test_math_cos("JZS5458");
test_math_cos(-701);
test_math_cos(3.069551658173031e+307);
test_math_cos("URXZSGQ");
test_math_cos(1.7375845780571889e+308);
test_math_cos("XMY09");
test_math_cos("RBLYKR");
test_math_cos("A34NKPMX2T");
test_math_cos(4.958821514484909e+307);
test_math_cos(1.7932915056283166e+308);
test_math_cos("ELCX");
test_math_cos(1.7284202194621295e+308);
test_math_cos(4.779215355721552e+307);
test_math_cos("SD86YIC4");
test_math_cos(-483);
test_math_cos("K9R");
test_math_cos(-625);
test_math_cos(9.432579451927625e+307);
test_math_cos(7.731568048245953e+307);
test_math_cos("JPVR5S");
test_math_cos("F23OOCP");
test_math_cos("YXR67XCLP");
test_math_cos("NB2");
test_math_cos("U1SP6AQE");
test_math_cos("DIPY5SWWRZ");
test_math_cos("KE64");
test_math_cos(-85);
test_math_cos(-49);
test_math_cos(-547);
test_math_cos(-343);
test_math_cos(2.950550999538971e+307);
test_math_cos(1.602915186645994e+308);
test_math_cos(1.7067512542187821e+308);
test_math_cos("F1VY7");
test_math_cos(-527);
test_math_cos("45B1");
test_math_cos(8.499491767917147e+307);
test_math_cos("ARIGZTQ1");
test_math_cos("Q9UWA26ED");
test_math_cos(306);
test_math_cos(1.3687949085936707e+308);
test_math_cos(1.2605800317270856e+308);
test_math_cos(1.4695680964053664e+308);
test_math_cos(1.2450497883515958e+308);
test_math_cos(-599);
test_math_cos(1.4402296304829703e+307);
test_math_cos("DXBWS1M");
test_math_cos("EAUKBU");
test_math_cos("M4M1UNIHS1");
test_math_cos(1.3551101903858822e+308);
test_math_cos(1.0532544634333635e+308);
test_math_cos("LEZV15B");
test_math_cos(5.274637198549344e+307);
test_math_cos("CGNZZ7K");
test_math_cos(1.5318903160662187e+308);
test_math_cos("V6OJ2");
test_math_cos("7TP7F8");
test_math_cos("T3IK");
test_math_cos(-961);
test_math_cos(1.7236560915528042e+307);
test_math_cos(6.091771022884174e+306);
test_math_cos(1.7425930831293735e+308);
test_math_cos(1.299336400410544e+308);
test_math_cos("XUPS");
test_math_cos("WVJURUQR4E");
test_math_cos("MT8RVELFMD");
test_math_cos(1.2952216822348968e+308);
test_math_cos(1.3109075506151614e+307);
test_math_cos(-573);
test_math_cos(-613);
test_math_cos("QT3YVH02Y5");
test_math_cos("XPQ");
test_math_cos("AWAA4");
test_math_cos(-911);
test_math_cos(-171);
test_math_cos("WL2PDLM3M3");
test_math_cos("2BKT49T");
test_math_cos(8.645096718911098e+307);
test_math_cos("TC8L");
test_math_cos(-275);
test_math_cos("0ORR3KB");
test_math_cos(-425);
test_math_cos(1.5370001192979486e+308);
test_math_cos(4.3935641789629054e+307);
test_math_cos(-161);
test_math_cos("AOYFBPGH3");
test_math_cos(4.683863175320486e+306);
test_math_cos(7.210876585339751e+307);
test_math_cos(1.7339746092701648e+308);
test_math_cos(1.5850787552309766e+308);
test_math_cos("JJ6");
test_math_cos(258);
test_math_cos("WS12");
test_math_cos(5.594168987239592e+307);
test_math_cos("C3QNDSSM9");
test_math_cos("CKY");
test_math_cos(1.4691832842269174e+308);
test_math_cos("QJLVRLIK9");
test_math_cos(-509);
test_math_cos(1.4885826387160947e+308);
test_math_cos(4.38229344459436e+307);
test_math_cos(1.5844578963993906e+308);
test_math_cos(6.629667093509511e+307);
test_math_cos(-759);
test_math_cos(-459);
test_math_cos("C3KW");
test_math_cos("JDH4PUN5N");
test_math_cos(1.172349523401731e+308);
test_math_cos(4.1157251057298367e+307);
test_math_cos("LE3J8S");
test_math_cos(1.3695631717373241e+308);
test_math_cos(1.0388660432337705e+308);
test_math_cos("JJZCCYSP");
test_math_cos("I0EMJSXSL");
test_math_cos(1.7189775566136847e+308);
test_math_cos(2.380018219297568e+307);
test_math_cos("U4B92EN");
test_math_cos(1.7490127278217872e+308);
test_math_cos("439ZF0J3M");
test_math_cos(-347);
test_math_cos("YQ6");
test_math_cos("T8GWR");
test_math_cos("APP69U4CL");
test_math_cos(-55);
test_math_cos(1.3544258427993029e+308);
test_math_cos(-327);
test_math_cos(1.0034550505084442e+308);
test_math_cos(1.473302851309269e+308);
test_math_cos("CI8GCHMR7");
test_math_cos(2.4631055872071736e+307);
test_math_cos(-583);
test_math_cos(6.562233615243478e+307);
test_math_cos(1.1910424380370664e+308);
test_math_cos(-341);
test_math_cos("YEMM0");
test_math_cos("UPR7Q54R7");
test_math_cos("VMKY");
test_math_cos("STZSW");
test_math_cos(8.771523447213769e+307);
test_math_cos(-769);
test_math_cos(1.2866236031526728e+308);
test_math_cos(-639);
test_math_cos("HZ6");
test_math_cos(1.544454747743953e+308);
test_math_cos("CSRE4ZG");
test_math_cos(6.844698730371132e+307);
test_math_cos(6.682636532882012e+307);
test_math_cos(1.9325505738365888e+307);
test_math_cos("MWATIV");
test_math_cos("0JDEPYVXUD");
test_math_cos("CLD824O0");
test_math_cos(9.357601456240878e+307);
test_math_cos(1.2270297816094836e+308);
test_math_cos(1.642176647689926e+307);
test_math_cos(1.1518993786944076e+308);
test_math_cos(7.053337010446433e+307);
test_math_cos("0BYEN");
test_math_cos("3KVTYU");
test_math_cos(-461);
test_math_cos(-319);
test_math_cos(9.052239305929834e+306);
test_math_cos("2E6203");
test_math_cos(1.2295523599917046e+308);
test_math_cos(2.614210228959163e+307);
test_math_cos(-127);
test_math_cos("6I3FQND4N");
test_math_cos("KIS6WQ3JE");
test_math_cos(-939);
test_math_cos(1.795355356854851e+308);
test_math_cos("E9CADJPD1C");
test_math_cos(-281);
test_math_cos(-935);
test_math_cos("Q3YX");
test_math_cos(-265);
test_math_cos(1.0297710061292222e+308);
test_math_cos(-297);
test_math_cos("UL484M");
test_math_cos("R2YSLQO3");
test_math_cos(4.24223454291435e+307);
test_math_cos("NF43ZBHE");
test_math_cos("POILI8OG");
test_math_cos(1.2942670428980571e+308);
test_math_cos("D14");
test_math_cos("KMIU2W");
test_math_cos(8.879008692057588e+307);
test_math_cos(8.005697537085767e+307);
test_math_cos(-511);
test_math_cos(1.1160074772648246e+308);
test_math_cos(3.799706840143223e+306);
test_math_cos("PL4XD9");
test_math_cos(666);
test_math_cos(9.996050522728438e+307);
test_math_cos(1.7753036719228473e+308);
test_math_cos(6.942616741733873e+307);
test_math_cos(1.2652955971045878e+308);
test_math_cos(1.6608254354486703e+308);
test_math_cos(1.634447364281246e+308);
test_math_cos(3.471243821444408e+307);
test_math_cos("F0X85");
test_math_cos(1.5442602275296028e+308);
test_math_cos(3.852756979474677e+307);
test_math_cos(-809);
test_math_cos(1.3336584508093872e+308);
test_math_cos("GYN");
test_math_cos(1.2309578345284716e+307);
test_math_cos(-507);
test_math_cos(-239);
test_math_cos(1.5301744708640907e+308);
test_math_cos(3.790087161030104e+307);
test_math_cos("IRL6FZ1L9G");
test_math_cos("HQEB9W");
test_math_cos(1.4676742682894543e+308);
test_math_cos(1.5703728885329577e+308);
test_math_cos(1.406340332770014e+308);
test_math_cos(-563);
test_math_cos(-101);
test_math_cos("4ST1KZELK");
test_math_cos(1.4322426585872746e+308);
test_math_cos(2.359110125629469e+307);
test_math_cos(2.497523397436278e+307);
test_math_cos(3.9567066581162894e+307);
test_math_cos(1.7139293864927069e+308);
test_math_cos(-901);
test_math_cos(-485);
test_math_cos(-963);
test_math_cos(-45);
test_math_cos(7.930024437373525e+307);
test_math_cos(1.1059233114945479e+308);
test_math_cos("R7FO7D");
test_math_cos(-195);
test_math_cos(-433);
test_math_cos(1.4268582259051448e+308);
test_math_cos("EJF");
test_math_cos("WCA1DZ");
test_math_cos("N00");
test_math_cos(9.88479818602839e+307);
test_math_cos(1.657156275181226e+308);
test_math_cos(-761);
test_math_cos(1.0143324488123456e+308);
test_math_cos(1.3107814373160037e+308);
test_math_cos(9.381698835416045e+307);
test_math_cos(1.1054482307753703e+308);
test_math_cos(7.593010227124066e+307);
test_math_cos("XZ6YSFEE");
test_math_cos("OBL524TI0");
test_math_cos("833");
test_math_cos("G7QPFQRRY");
test_math_cos(-823);
test_math_cos(4.928624646694615e+307);
test_math_cos(1.3208142966399081e+308);
test_math_cos(-805);
test_math_cos(-263);
test_math_cos(6.410566285652214e+307);
test_math_cos(9.061575716954582e+307);
test_math_cos(2.9633991552846434e+307);
test_math_cos("PB590");
test_math_cos(2.423887458913377e+307);
test_math_cos("5FC");
test_math_cos("1BU");
test_math_cos("EBYE");
test_math_cos("J7NCH");
test_math_cos(1.7331856211267575e+308);
test_math_cos("X2G1TB");
test_math_cos(-673);
test_math_cos(-421);
test_math_cos(9.804180743842028e+307);
test_math_cos(1.0618197368193505e+308);
test_math_cos("93LNZPR");
test_math_cos(1.2012443110460665e+307);
test_math_cos(-25);
test_math_cos(1.210080133421115e+308);
test_math_cos(9.544354909134518e+307);
test_math_cos(1.5882582939987296e+308);
test_math_cos(4.797901471807574e+307);
test_math_cos(1.2685184586259516e+307);
test_math_cos(1.5093342928289786e+308);
test_math_cos(292);
test_math_cos(5.452946886447878e+307);
test_math_cos("UQKGKCOBJ");
test_math_cos(-549);
test_math_cos("IURWQI14M");
test_math_cos("DR55WCK2NC");
test_math_cos(1.6452221224661614e+308);
test_math_cos(-543);
test_math_cos(-369);
test_math_cos(9.675189062785637e+307);
test_math_cos(-139);
test_math_cos(4.168783976225886e+306);
test_math_cos("9WFHKN");
test_math_cos(6.518022107984386e+307);
test_math_cos(2.867617241566646e+306);
test_math_cos(6.159540405299486e+307);
test_math_cos(8.279028291036218e+307);
