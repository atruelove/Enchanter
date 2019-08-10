/*
* This file is automatically generated by Swami
*
* 2019-08-09 12:16:50.027788
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
function test_math_fround(x){
	if (Object.is( x,NaN )){
		var output = Math.fround(x);
		new TestCase("math_fround", "math_fround", NaN, output);
		test();
		return;
		}
	if ((Object.is( x,+ 0) && Object.is(x,+ 0) &&  x === - 0  &&  x === + Infinity  &&  x === - Infinity )){
		var output = Math.fround(x);
		new TestCase("math_fround", "math_fround", x, output);
		test();
		return;
		}
}



/*TESTS GENERATED AUTOMATICALLY*/
test_math_fround(4.406348241576446e+307);
test_math_fround(true);
test_math_fround("L9TFFZKSH");
test_math_fround(-135);
test_math_fround(1.727733867289926e+308);
test_math_fround(+0);
test_math_fround(-117);
test_math_fround(Infinity);
test_math_fround(null);
test_math_fround(4.798395317844446e+307);
test_math_fround(/[^.]+/);
test_math_fround(/foo/g);
test_math_fround("FCFG");
test_math_fround(false);
test_math_fround(-251);
test_math_fround(NaN);
test_math_fround(undefined);
test_math_fround(-603);
test_math_fround(/ab+c/);
test_math_fround("G46KF6");
test_math_fround("W2N2DP");
test_math_fround("0C44A57VJ3");
test_math_fround(5.016051990187452e+307);
test_math_fround(-875);
test_math_fround("VR5T");
test_math_fround(-111);
test_math_fround(7.694336088160986e+307);
test_math_fround("RSD2");
test_math_fround(-745);
test_math_fround(-285);
test_math_fround("2EX7");
test_math_fround(1.2862654577522369e+308);
test_math_fround(/(\w+)\s(\w+)/);
test_math_fround(-129);
test_math_fround("60O9Y");
test_math_fround(/\r\n|\r|\n/);
test_math_fround("WR5GKLA5QN");
test_math_fround(1.7305923313546799e+308);
test_math_fround(7.663478535263332e+306);
test_math_fround(/[\u0400-\u04FF]+/g);
test_math_fround("9KMH6");
test_math_fround("9ZE");
test_math_fround("YX21QZ");
test_math_fround(9.999170245988172e+307);
test_math_fround(1.0097090636477486e+307);
test_math_fround(1.2475610781876506e+308);
test_math_fround("RB63G55");
test_math_fround("4YQDREKV");
test_math_fround(-401);
test_math_fround("V3XET0ZXJQ");
test_math_fround(1.7152688303905592e+308);
test_math_fround(1.6962681225719996e+308);
test_math_fround("69T2LW9UA");
test_math_fround(-295);
test_math_fround("MDQ4T");
test_math_fround("V940A7IL");
test_math_fround(-505);
test_math_fround(1.6787368828117432e+308);
test_math_fround(-0);
test_math_fround("JXXUB7JCZ");
test_math_fround("M6DFTGF");
test_math_fround(7.014177891951978e+307);
test_math_fround("TDJ8");
test_math_fround(-579);
test_math_fround(/yes.*day/);
test_math_fround(1.4811608738641585e+308);
test_math_fround("VC0Q24");
test_math_fround("KFD");
test_math_fround(1.3115844522198703e+308);
test_math_fround(-923);
test_math_fround("AS7OX265T");
test_math_fround("00JSKT");
test_math_fround("TMVJD7PE7");
test_math_fround(4.645518198419731e+307);
test_math_fround("2XIP5YJTE");
test_math_fround("FT4LM7");
test_math_fround(-769);
test_math_fround("8PWJ6Z");
test_math_fround(1.3417836438899808e+308);
test_math_fround("AY5EP3HH7");
test_math_fround(-239);
test_math_fround(-177);
test_math_fround("MFN4M");
test_math_fround("EYGQL");
test_math_fround(-289);
test_math_fround(7.206514118296932e+307);
test_math_fround("97JTA");
test_math_fround(1.5388552796141277e+307);
test_math_fround("XRR");
test_math_fround("0DYIQ5E");
test_math_fround(-47);
test_math_fround("4XW8V8N");
test_math_fround("L2X");
test_math_fround(1.5228929800004075e+308);
test_math_fround("YAMZKH");
test_math_fround(-783);
test_math_fround(-255);
test_math_fround("N8N7UABX4");
test_math_fround(3.725137177120646e+307);
test_math_fround(2.0289742509142685e+307);
test_math_fround(-631);
test_math_fround(-411);
test_math_fround("XH20N");
test_math_fround(-513);
test_math_fround(-237);
test_math_fround(5.6465627929374e+307);
test_math_fround(-711);
test_math_fround(1.7851489481839648e+307);
test_math_fround(-665);
test_math_fround(-835);
test_math_fround(-827);
test_math_fround(-497);
test_math_fround(-721);
test_math_fround(-215);
test_math_fround("H6XYGB");
test_math_fround(-385);
test_math_fround(1.1205691478330734e+308);
test_math_fround(/yes[^]*day/);
test_math_fround("KBCWG9F19");
test_math_fround(5.822868619243119e+307);
test_math_fround("SDEPX8R7");
test_math_fround("1TE82");
test_math_fround("SIAEVV9X");
test_math_fround("ZND");
test_math_fround("SQKSPVT");
test_math_fround("SZSNC2S");
test_math_fround("SJ0NAXQ0TE");
test_math_fround(9.651040716529783e+306);
test_math_fround(4.533793342153591e+307);
test_math_fround(-979);
test_math_fround("C8RO4L");
test_math_fround(-743);
test_math_fround(1.1470528685274689e+308);
test_math_fround(2.2136585720221074e+307);
test_math_fround(-561);
test_math_fround(-229);
test_math_fround(-173);
test_math_fround(-581);
test_math_fround(-863);
test_math_fround("B2WAV8K");
test_math_fround(-847);
test_math_fround(1.4811302537648207e+308);
test_math_fround("7IQ");
test_math_fround(1.6160879939639071e+308);
test_math_fround("HDW");
test_math_fround(1.3064565015240585e+308);
test_math_fround("W2DM6DV3V");
test_math_fround("GPB8I");
test_math_fround(9.426545357037061e+307);
test_math_fround(5.423753979173177e+307);
test_math_fround("4OVTTU");
test_math_fround("UT90");
test_math_fround("J5S0LG44N");
test_math_fround("Q49D3FMA");
test_math_fround("NZ2HU");
test_math_fround("E2C9KM");
test_math_fround("DNG");
test_math_fround(1.209476841701135e+307);
test_math_fround(1.0827720140106356e+308);
test_math_fround("Z5101");
test_math_fround(-617);
test_math_fround(-499);
test_math_fround(-451);
test_math_fround(-163);
test_math_fround("QP4K");
test_math_fround(-609);
test_math_fround(1.250481198006026e+308);
test_math_fround("ZDCF");
test_math_fround("7NE679PFMH");
test_math_fround(1.61375476610072e+308);
test_math_fround(564);
test_math_fround("475IM");
test_math_fround(5.632947114046995e+307);
test_math_fround("UYIXSQF");
test_math_fround(1.4294926973707468e+308);
test_math_fround("EK2DMOV5I");
test_math_fround("HO168PS");
test_math_fround(-845);
test_math_fround("6ZV2273C");
test_math_fround(1.323823922376815e+308);
test_math_fround("LA35");
test_math_fround(4.624518266027922e+306);
test_math_fround(4.59688773584143e+307);
test_math_fround(-673);
test_math_fround(1.3442969684631746e+308);
test_math_fround("GIET2");
test_math_fround("R55OB0N9");
test_math_fround(1.0517491939185171e+308);
test_math_fround(1.1126217430277773e+308);
test_math_fround("0WOU1DM");
test_math_fround("MPR3EFTVF8");
test_math_fround(1.5378554615137453e+308);
test_math_fround(-195);
test_math_fround(2.295592851850367e+307);
test_math_fround(-265);
test_math_fround(9.84382984412868e+307);
test_math_fround("86Z2D6");
test_math_fround("WC0S");
test_math_fround(-601);
test_math_fround(3.958534149979761e+307);
test_math_fround(-547);
test_math_fround("22ICT");
test_math_fround(-43);
test_math_fround(-465);
test_math_fround(1.5335335094528312e+308);
test_math_fround("PIVO9");
test_math_fround("4QHZJPDML");
test_math_fround(1.5850548806746477e+308);
test_math_fround(-97);
test_math_fround(8.859000074929537e+307);
test_math_fround("K2IA");
test_math_fround(-327);
test_math_fround("ECEK13Q");
test_math_fround(-623);
test_math_fround(-887);
test_math_fround("JAJ");
test_math_fround("B5W8AXV");
test_math_fround(-941);
test_math_fround("PEW7C4");
test_math_fround("HAF");
test_math_fround("AFWOHIR3");
test_math_fround(1.5403052172699543e+308);
test_math_fround(-811);
test_math_fround(2.3505899802427375e+307);
test_math_fround(1.2506961104490725e+308);
test_math_fround("FLY3E");
test_math_fround("PZ5CR6");
test_math_fround("O6WRM3SRDL");
test_math_fround("3P8TRS");
test_math_fround(1.4054132322774953e+308);
test_math_fround(1.4138449807117106e+308);
test_math_fround(1.655169280723821e+307);
test_math_fround("JNRT2325IZ");
test_math_fround("ZQSITU14K3");
test_math_fround("XXNI");
test_math_fround(-539);
test_math_fround(4.525408321630521e+306);
test_math_fround("5M0F15");
test_math_fround(7.40584995952232e+307);
test_math_fround(-741);
test_math_fround("3H5V");
test_math_fround("SGF6Y2W22");
test_math_fround(-693);
test_math_fround(-771);
test_math_fround(1.7216734552728108e+308);
test_math_fround(2.8196175240815673e+307);
test_math_fround(3.520775019842722e+307);
test_math_fround(1.0227586955040648e+308);
test_math_fround("MNZJT");
test_math_fround("6GOIVIHF");
test_math_fround("BOL1DL4");
test_math_fround(8.192537861460427e+307);
test_math_fround(8.256907942214928e+307);
test_math_fround(1.717218638069033e+308);
test_math_fround("WKHLY");
test_math_fround("Q6LCGTU6F");
test_math_fround(1.2240475771679583e+308);
test_math_fround(-825);
test_math_fround(2.8102501178695203e+307);
test_math_fround(3.151801234689175e+307);
test_math_fround(4.489988157361584e+307);
test_math_fround("28YZ0QYK");
test_math_fround(-439);
test_math_fround(-657);
test_math_fround(3.610025173202762e+307);
test_math_fround("46NY");
test_math_fround(-731);
test_math_fround(3.278577251056306e+307);
test_math_fround("LYE0JXE");
test_math_fround(-833);
test_math_fround("43667PGPZ");
test_math_fround(1.2569770728977042e+308);
test_math_fround(-319);
test_math_fround(8.223349481964629e+307);
test_math_fround(-537);
test_math_fround(1.2023358606639584e+308);
test_math_fround(4.725977492978495e+307);
test_math_fround(1.9767905489575887e+307);
test_math_fround("WSSIA");
test_math_fround(1.3729216773735264e+308);
test_math_fround(-883);
test_math_fround(-755);
test_math_fround("4L0E4RTR3");
test_math_fround("8GR0FSLDUG");
test_math_fround("25VMLJ7OH");
test_math_fround("FGFU");
test_math_fround(7.593083399962979e+307);
test_math_fround(1.4419714526432853e+308);
test_math_fround(1.0087709079836495e+308);
test_math_fround(1.6391417608801172e+308);
test_math_fround(-139);
test_math_fround("AQ97MW9");
test_math_fround(1.3972048731254005e+308);
test_math_fround(-393);
test_math_fround(1.6810289312467243e+308);
test_math_fround(-937);
test_math_fround(1.1637715334948715e+308);
test_math_fround("LKI58GXN");
test_math_fround("YXCUZRT");
test_math_fround(-457);
test_math_fround(-455);
test_math_fround("2XOKQPX");
test_math_fround(-181);
test_math_fround(3.415747488155038e+307);
test_math_fround("Y5BKDHQC");
test_math_fround(3.2392166846310827e+307);
test_math_fround("YB2S72");
test_math_fround(1.3544524021908888e+308);
test_math_fround(1.5326977884989518e+308);
test_math_fround(-487);
test_math_fround("YC0T2HWX");
test_math_fround("5HB5F592");
test_math_fround(4.78451033339243e+307);
test_math_fround(5.115276675108383e+306);
test_math_fround("6BH");
test_math_fround(6.929222457762341e+307);
test_math_fround(-917);
test_math_fround("AQF");
test_math_fround(1.69013981788295e+308);
test_math_fround(1.85433693766867e+306);
test_math_fround(1.922298541763882e+307);
test_math_fround(8.029195385655956e+307);
test_math_fround(-607);
test_math_fround("Z95K6");
test_math_fround("EUGP51308");
test_math_fround(-705);
test_math_fround(1.4824196372525479e+308);
test_math_fround(9.281852518485708e+307);
test_math_fround(3.41891892998535e+307);
test_math_fround(1.7704393350387886e+308);
test_math_fround(-727);
test_math_fround(1.0664208822010517e+307);
test_math_fround(1.5101422991709302e+308);
test_math_fround(7.213037032116342e+306);
test_math_fround("EFZ18J2J");
test_math_fround(-509);
test_math_fround(7.937670529725658e+307);
test_math_fround(1.5681709912373763e+308);
test_math_fround("AZH64Z7");
test_math_fround(1.501891654416509e+308);
test_math_fround(1.7892937757533002e+308);
test_math_fround(1.5938602318465995e+308);
test_math_fround(1.3008135144881487e+308);
test_math_fround(-955);
test_math_fround(5.943140211178392e+307);
test_math_fround(1.1884945232588246e+308);
test_math_fround(-589);
test_math_fround("VHEKOBPB3W");
test_math_fround(4.716617846938847e+307);
test_math_fround(1.7842676070798035e+308);
test_math_fround(6.957878622472997e+306);
test_math_fround("10Q");
test_math_fround(1.1524924533710883e+308);
test_math_fround(-861);
test_math_fround(-85);
test_math_fround(-655);
test_math_fround("3WQSKUSEP3");
test_math_fround(1.026653183600687e+307);
test_math_fround("0FTVIWMF");
test_math_fround(8.044406604097433e+307);
test_math_fround("8X4");
test_math_fround("CUYKSR8SE8");
test_math_fround(1.6103286288008842e+308);
test_math_fround(1.997394203892039e+307);
test_math_fround(-399);
test_math_fround(7.861978071303472e+307);
test_math_fround("1MHX");
test_math_fround("7VC");
test_math_fround(1.2902571949125523e+307);
test_math_fround(1.7854219730480875e+308);
test_math_fround(-903);
test_math_fround("A9KAOM8B6");
test_math_fround("E2GAYG");
test_math_fround("TNF");
test_math_fround(-553);
test_math_fround(1.6679894191776808e+307);
test_math_fround(-93);
test_math_fround("CFOF7");
test_math_fround(-999);
test_math_fround("OYDH");
test_math_fround(-31);
test_math_fround("3IIIGEH");
test_math_fround(1.3211828605294183e+308);
test_math_fround(1.3271120941306814e+308);
test_math_fround("R16IN");
test_math_fround("B36C0SUL6");
test_math_fround(-853);
test_math_fround(1.2958704561013373e+308);
test_math_fround(-877);
test_math_fround(3.66110851175714e+306);
test_math_fround("C0UL90996");
test_math_fround(6.586892285179315e+307);
test_math_fround("J3KTJ53Z");
test_math_fround("65415");
test_math_fround(-233);
test_math_fround(8.918335070527204e+307);
test_math_fround(1.289939761240947e+308);
test_math_fround(-441);
test_math_fround("U9BUNKS");
test_math_fround(4.46561320979993e+307);
test_math_fround("WD33OJ");
test_math_fround(-257);
test_math_fround(-253);
test_math_fround(-993);
test_math_fround("JI3");
test_math_fround("NA9KTKTQ");
test_math_fround(-913);
test_math_fround(-715);
test_math_fround(-185);
test_math_fround(-367);
test_math_fround(9.059995896557205e+306);
test_math_fround(1.7836345850247568e+307);
test_math_fround(-649);
test_math_fround("24QR");
test_math_fround("IZ86");
test_math_fround(-133);
test_math_fround("6ZPUW");
test_math_fround(1.4575314056875672e+308);
test_math_fround("XOXJ92");
test_math_fround(-525);
test_math_fround(1.457369400341777e+306);
test_math_fround(-45);
test_math_fround("6U67E0T0Y8");
test_math_fround(1.2238092260562105e+308);
test_math_fround(-197);
test_math_fround("8FDK");
test_math_fround(-557);
test_math_fround("X1SY");
test_math_fround(1.0103346366153616e+308);
test_math_fround(-947);
test_math_fround("OC5");
test_math_fround(1.1622207919040748e+308);
test_math_fround("M07TYOJT3");
test_math_fround("8T1");
test_math_fround("B30Q");
test_math_fround("6LGMQML");
test_math_fround("695QGK");
test_math_fround("FFB69AV");
test_math_fround(58);
test_math_fround(1.3684642224316601e+308);
test_math_fround("BQM4PVU");
test_math_fround(-717);
test_math_fround(-95);
test_math_fround(-23);
test_math_fround("0R8");
test_math_fround(3.917978437261157e+307);
test_math_fround("GN3BO3EOXE");
test_math_fround(7.317684734102086e+307);
test_math_fround("9FY733KV7V");
test_math_fround(-905);
test_math_fround(6.957364862281695e+306);
test_math_fround(-373);
test_math_fround("Q0F");
test_math_fround(9.540908889219261e+305);
test_math_fround("X7ROFOE2NJ");
test_math_fround(-461);
test_math_fround("Z9Y");
test_math_fround(-785);
test_math_fround(1.4007463091619585e+308);
test_math_fround(-227);
test_math_fround(-351);
test_math_fround("OB6RDL5M");
test_math_fround(-371);
test_math_fround(-477);
test_math_fround(920);
test_math_fround("FRBEKWD");
test_math_fround(-201);
test_math_fround("TFYU");
test_math_fround("Q3I2J");
test_math_fround(1.545662602717851e+308);
test_math_fround(-37);
test_math_fround("2ZS");
test_math_fround("U20S77Z8");
test_math_fround("Z1C1ZS8JC1");
test_math_fround("IVYNSX");
test_math_fround(9.842757972786698e+306);
test_math_fround(-431);
test_math_fround(9.937199381092604e+307);
test_math_fround("MQQ7WK");
test_math_fround(1.183734945630431e+308);
test_math_fround(5.282706357275983e+307);
test_math_fround("SRPSTR");
test_math_fround(7.817340475037609e+307);
test_math_fround(-763);
test_math_fround(-707);
test_math_fround("S6D");
test_math_fround(1.3123705080423828e+308);
test_math_fround(1.0589352101311986e+308);
test_math_fround(1.2562825132002242e+308);
test_math_fround("39FU9R5GL");
test_math_fround("SHJX0");
test_math_fround(-365);
test_math_fround(1.2361643315928756e+308);
test_math_fround("3TE724V");
test_math_fround(1.0621782141630984e+308);
test_math_fround(2.571034757403274e+307);
test_math_fround(5.183752596016657e+306);
test_math_fround("NXP");
test_math_fround(-131);
test_math_fround(-587);
test_math_fround(1.0122862509171965e+308);
test_math_fround("C7K");
test_math_fround(1.1459912782892338e+308);
test_math_fround("NN5YN39BQ");
test_math_fround("IXIVJSK");
test_math_fround("34JP1A3W");
test_math_fround(1.5836658355296648e+308);
test_math_fround(5.157550342759288e+307);
test_math_fround("JO7O");
test_math_fround(-975);
test_math_fround("IKY0J3IX");
test_math_fround(-383);
test_math_fround("OK6YN1615Q");
test_math_fround(-345);
test_math_fround(1.5771916525936912e+308);
test_math_fround(1.1521363477228846e+308);
test_math_fround("Z3ACK");
test_math_fround("50UP1");
test_math_fround(6.908841581064558e+307);
test_math_fround(-151);
test_math_fround("Y1KIAP6RN");
test_math_fround(-13);
test_math_fround(1.6536427349664356e+308);
test_math_fround("ZC0");
test_math_fround(1.2777071847924374e+308);
test_math_fround(-551);
test_math_fround("5JR5R9R29");
test_math_fround(2.1182426067591273e+307);
test_math_fround(-27);
test_math_fround(-403);
test_math_fround(2.1754707615264775e+307);
test_math_fround(1.3217017962926427e+308);
test_math_fround("HHN1UJZGBH");
test_math_fround(-963);
test_math_fround(-969);
test_math_fround(7.06261185016151e+307);
test_math_fround(1.0665204427235867e+308);
test_math_fround(-463);
test_math_fround(1.7054909584290151e+308);
test_math_fround("S81IV");
test_math_fround(458);
test_math_fround("JZ5O");
test_math_fround(2.843096958243598e+307);
test_math_fround("0QQ3NEVC8");
test_math_fround("51R3W");
test_math_fround("TYCMI4DSC");
test_math_fround(1.7675532507914655e+308);
test_math_fround(2.1551172274749304e+307);
test_math_fround("SF8JHZ9QOY");
test_math_fround(4.2626045856390486e+307);
test_math_fround(-529);
test_math_fround(1.4506974523504973e+308);
test_math_fround(1.3717557212744753e+308);
test_math_fround(1.9152537877666457e+307);
test_math_fround("YYK4");
test_math_fround(1.7169825412068385e+308);
test_math_fround(-433);
test_math_fround("6ONY7F79");
test_math_fround("SEH");
test_math_fround(8.708599828092112e+307);
test_math_fround("2XJV2X");
test_math_fround("RBQW");
test_math_fround(4.697526822969094e+307);
test_math_fround("VZ0YSG0CZ");
test_math_fround(-857);
test_math_fround("4VE");
test_math_fround(1.258665314906016e+307);
test_math_fround(1.351188929003285e+308);
test_math_fround("WN84B");
test_math_fround(1.4535082544643716e+308);
test_math_fround("GNJ5I741S");
test_math_fround(-819);
test_math_fround(1.521815466381068e+308);
test_math_fround(-359);
test_math_fround(8.874127458644714e+307);
test_math_fround(4.68754480952268e+307);
test_math_fround("PUPJG");
test_math_fround(-417);
test_math_fround("Z62F5ELEH");
test_math_fround(1.4300556442998112e+307);
test_math_fround("7CQNVOS");
test_math_fround(-575);
test_math_fround("3REKW");
test_math_fround(6.583189936752871e+307);
test_math_fround("QNT");
test_math_fround("R72L0MM");
test_math_fround(6.301991408900336e+307);
test_math_fround(-245);
test_math_fround("BQS");
test_math_fround(1.3488949593489558e+308);
test_math_fround(7.139733303798804e+307);
test_math_fround(-953);
test_math_fround(-995);
test_math_fround(1.4624966401576405e+308);
test_math_fround(-925);
test_math_fround("4JBCVUESL4");
test_math_fround(-49);
test_math_fround(1.288682989589522e+308);
test_math_fround("TH52");
test_math_fround(7.734296966329248e+307);
test_math_fround(-511);
test_math_fround(9.742594601735045e+305);
test_math_fround(-301);
test_math_fround(2.6811527705449464e+307);
test_math_fround(1.1263813861315162e+308);
test_math_fround("A8ZDKZ");
test_math_fround(4.0072994681210107e+307);
test_math_fround(6.121017733692115e+307);
test_math_fround(-851);
test_math_fround("37M1W");
test_math_fround("68ZUPOOFG");
test_math_fround(-683);
test_math_fround(-137);
test_math_fround(1.7724469151333509e+308);
test_math_fround(3.149700552178228e+307);
test_math_fround(1.6861161994288055e+308);
test_math_fround(-897);
test_math_fround(4.4746383400388384e+307);
test_math_fround(8.221551133586683e+307);
test_math_fround("CU25OR51");
test_math_fround("I6LO9D6K9");
test_math_fround(1.8992013628456236e+307);
test_math_fround("CCFVFNQO");
test_math_fround(7.882183332175952e+307);
test_math_fround("Z9QD");
test_math_fround(9.275567639567985e+307);
test_math_fround(-973);
test_math_fround(-733);
test_math_fround(-35);
test_math_fround("OWVSJ3MS");
test_math_fround("0J80P");
test_math_fround(-959);
test_math_fround(1.9971470385642648e+306);
test_math_fround(-333);
test_math_fround("J46Q");
test_math_fround("L4LP5BF");
test_math_fround(1.1869190385715412e+308);
test_math_fround("5MUWXI");
test_math_fround(-421);
test_math_fround(1.0939836112203296e+308);
test_math_fround(-915);
test_math_fround(1.5750303480528348e+307);
test_math_fround("KCQ9");
test_math_fround(6.916221309354514e+307);
test_math_fround("5Z2");
test_math_fround(1.344105135613523e+308);
test_math_fround(-843);
test_math_fround(1.6658413418189264e+308);
test_math_fround(-459);
test_math_fround("O0W4G");
test_math_fround(1.187320710332764e+308);
test_math_fround(1.1470695841920516e+308);
test_math_fround(5.237323549295412e+307);
test_math_fround("NPYZ1HO");
test_math_fround("9JDLGA");
test_math_fround(-501);
test_math_fround(1.3394676346686517e+308);
test_math_fround(1.1425563660351248e+308);
test_math_fround(-303);
test_math_fround(1.3914043313600616e+308);
test_math_fround(-507);
test_math_fround(-679);
test_math_fround(-533);
test_math_fround(1.577183121742885e+308);
test_math_fround("WU4UEQJI6R");
test_math_fround(1.0340466176327207e+308);
test_math_fround(1.6171739669688458e+308);
test_math_fround(1.2258257188383833e+308);
test_math_fround("5NCJ");
test_math_fround("9EORWT3ZJ");
test_math_fround(8.664581410697193e+307);
test_math_fround("78MPKKNG");
test_math_fround("QOIHQO570");
test_math_fround(-15);
test_math_fround(1.4839993829366202e+308);
test_math_fround(4.449468275570098e+307);
test_math_fround(7.480454097801882e+307);
test_math_fround(1.243348069547066e+308);
test_math_fround("K5TB");
test_math_fround(-691);
test_math_fround(6.390376995089406e+307);
test_math_fround(1.686055418611461e+308);
test_math_fround(1.1560906315927118e+308);
test_math_fround(-615);
test_math_fround(4.504680994320955e+307);
test_math_fround(1.44044779294887e+308);
test_math_fround("P33U3P03U");
test_math_fround("DJ5OL");
test_math_fround(-231);
test_math_fround("UFIQTMP");
test_math_fround(1.4384723966920702e+308);
test_math_fround(3.305960238399584e+307);
test_math_fround(1.596352506582484e+308);
test_math_fround(-325);
test_math_fround(1.345056407177081e+308);
test_math_fround(1.5018579765026955e+308);
test_math_fround(7.639096134501382e+307);
test_math_fround(2.077275576010818e+307);
test_math_fround("QLS");
test_math_fround("3P8CZV5EZ8");
test_math_fround(9.607551396939242e+307);
test_math_fround(3.584779026630115e+307);
test_math_fround("QBZ");
test_math_fround(-145);
test_math_fround(6.143854173184787e+307);
test_math_fround("CSWFUHZIS5");
test_math_fround(-203);
test_math_fround("K3GXE");
test_math_fround(2.6517502815534566e+307);
test_math_fround(2.4296901825367356e+307);
test_math_fround(-991);
test_math_fround("LQZ");
test_math_fround(-521);
test_math_fround("TG9W8943C");
test_math_fround("VTD0EM0H");
test_math_fround(-387);
test_math_fround(-445);
test_math_fround(5.075125685290084e+307);
test_math_fround(5.227787745077809e+307);
test_math_fround(-933);
test_math_fround(-591);
test_math_fround("LTLCNY79");
test_math_fround("B9MFK7");
test_math_fround("FZT8UJ2XI");
test_math_fround("2BG");
test_math_fround(1.463799536005691e+308);
test_math_fround("WVU");
test_math_fround(1.4355163852170532e+308);
test_math_fround(1.1461301343828657e+307);
test_math_fround(-739);
test_math_fround("3ISP9RP7M9");
test_math_fround("W0FJAV1");
test_math_fround("PTJFEIHZE6");
test_math_fround(-479);
test_math_fround(1.7674575640657094e+308);
test_math_fround("G7X38WLABW");
test_math_fround("43L");
test_math_fround(1.087827119438609e+308);
test_math_fround("8XOLI");
test_math_fround("TN59B29");
test_math_fround("AQKUD3RMO4");
test_math_fround(-831);
test_math_fround(3.42915405917003e+307);
test_math_fround("BBUBDBJS9");
test_math_fround(1.393651108836093e+308);
test_math_fround(-179);
test_math_fround(-263);
test_math_fround(5.716929739534452e+307);
test_math_fround(1.6807233546729156e+308);
test_math_fround("ID9CKTYL8U");
test_math_fround(1.2004482968379288e+308);
test_math_fround(1.038314775933882e+308);
test_math_fround(-723);
test_math_fround(1.4063472987987422e+308);
test_math_fround(-671);
test_math_fround(-155);
test_math_fround("ADEZP");
test_math_fround(1.737844181675655e+308);
test_math_fround(-523);
test_math_fround("ZXMRLRYPQS");
test_math_fround(2.5106897392658325e+307);
test_math_fround("K0QSI");
test_math_fround(1.3532406322356853e+308);
test_math_fround("21EPQW4XTS");
test_math_fround(-361);
test_math_fround("JYFF13O8D");
test_math_fround(-907);
test_math_fround(1.0472027263646697e+308);
test_math_fround(8.742611721952743e+307);
test_math_fround(4.463193473140917e+307);
test_math_fround("ZCAQRM");
test_math_fround("EGNNIYOK");
test_math_fround("L30C1R8");
test_math_fround(1.4340717574143875e+308);
test_math_fround(1.3179577308214195e+307);
test_math_fround(5.250417933426782e+307);
test_math_fround("SATPGW4");
test_math_fround(1.2986782248441819e+308);
test_math_fround(3.7984700390948434e+307);
test_math_fround("CX5VRU");
test_math_fround(-967);
test_math_fround(1.1193652673882682e+308);
test_math_fround("0OBFL");
test_math_fround(-275);
test_math_fround(6.186480612059705e+307);
test_math_fround("OHNRN1");
test_math_fround(-747);
test_math_fround(6.413281699359909e+307);
test_math_fround("CQB8Z0EU5J");
test_math_fround(9.446003991695585e+307);
test_math_fround("R6L5LY");
test_math_fround("6XWMKSV9M");
test_math_fround(1.019218909934122e+308);
test_math_fround(6.962984540860476e+307);
test_math_fround("85X2V");
test_math_fround("ZEXUFT");
test_math_fround("M8H05");
test_math_fround(3.265512531338642e+307);
test_math_fround("R0XZK");
test_math_fround(-309);
test_math_fround("SPERRH5");
test_math_fround("QFE0U70M");
test_math_fround(2.222646650580643e+307);
test_math_fround(1.0694417580430625e+308);
test_math_fround(-41);
test_math_fround(-675);
test_math_fround(1.7771481714734814e+308);
test_math_fround(1.2746700226043923e+308);
test_math_fround(-647);
test_math_fround(1.2990971017327324e+308);
test_math_fround(5.113282465324411e+307);
test_math_fround("AB4BC0");
test_math_fround(-791);
test_math_fround("1D1ZEG");
test_math_fround("R2S");
test_math_fround(5.524451827150923e+307);
test_math_fround(1.7488611512374754e+308);
test_math_fround(-71);
test_math_fround("FGOF3WOEC");
test_math_fround(-287);
test_math_fround(-669);
test_math_fround("JVD");
test_math_fround(1.6867959608015867e+307);
test_math_fround(-127);
test_math_fround(7.698523138336867e+307);
test_math_fround(-855);
test_math_fround(-713);
test_math_fround("MC4L9OAZ");
test_math_fround("VYN4L");
test_math_fround(-153);
test_math_fround(-343);
test_math_fround("CPK");
test_math_fround("V1CIDG");
test_math_fround("EX8X");
test_math_fround("ZPDS");
test_math_fround("RDU97J7S3I");
test_math_fround("QOXB8WU1Q");
test_math_fround(7.681989699219124e+307);
test_math_fround(-11);
test_math_fround("7SXW");
test_math_fround("HCEBTEAY");
test_math_fround(-895);
test_math_fround("N3Y");
test_math_fround(1.5660315136809105e+308);
test_math_fround(3.3924565126530065e+307);
test_math_fround(-929);
test_math_fround(5.76191624373447e+307);
test_math_fround("0B68G");
test_math_fround(-3);
test_math_fround("EOIIYN1IE");
test_math_fround(-349);
test_math_fround("1DOKSGWN9R");
test_math_fround(1.6733912264951455e+308);
test_math_fround("C71V1");
test_math_fround(1.7932144263471907e+308);
test_math_fround(1.051506808974682e+308);
test_math_fround("ZKWM");
test_math_fround(-165);
test_math_fround(8.716770469736712e+307);
test_math_fround(1.151192338611872e+308);
test_math_fround(-703);
test_math_fround(5.125041591353299e+307);
test_math_fround(-413);
test_math_fround(-171);
test_math_fround(-115);
test_math_fround(9.238541291262174e+307);
test_math_fround(1.161318085798921e+308);
test_math_fround("359CWEWN2");
test_math_fround("0C4G9");
test_math_fround("RV5QUG2B");
test_math_fround("801NA");
test_math_fround("NDYD12GV");
test_math_fround(3.578884267195416e+307);
test_math_fround("7MIPU2KH");
test_math_fround(1.5899220523806076e+308);
test_math_fround(-297);
test_math_fround("LM9");
test_math_fround(1.5479169262184211e+308);
test_math_fround(-317);
test_math_fround(6.456370095720253e+307);
test_math_fround(-449);
test_math_fround("RN2OQ87X1");
test_math_fround("QDOXX");
test_math_fround(-261);
test_math_fround("V32007");
test_math_fround(-175);
test_math_fround(6.461945446657865e+307);
test_math_fround("DWIYDBB3WW");
test_math_fround(2.8594663682880163e+307);
test_math_fround(-321);
test_math_fround(-567);
test_math_fround("UV28");
test_math_fround(-677);
test_math_fround(1.0994944602812275e+308);
test_math_fround(7.465435234945996e+306);
test_math_fround(-629);
test_math_fround(-531);
test_math_fround(5.518812015274479e+307);
test_math_fround(-695);
test_math_fround("O4F2ID");
test_math_fround(3.3053494088321305e+306);
test_math_fround("6H35PQ");
test_math_fround(-503);
test_math_fround(1.6700563609794152e+307);
test_math_fround(-987);
test_math_fround("SYRVEZ");
test_math_fround(-259);
test_math_fround(5.782275363833064e+305);
test_math_fround(1.181148964364649e+308);
test_math_fround("EHPW1");
test_math_fround(3.8283354109933e+307);
test_math_fround(-805);
test_math_fround("BRL");
test_math_fround(1.10439073194039e+308);
test_math_fround("QP0R");
test_math_fround(-353);
test_math_fround("IBNA0I");
test_math_fround(1.0595994929349849e+307);
test_math_fround(6.066613341165188e+307);
test_math_fround(1.3786632643683472e+308);
test_math_fround(3.493578339433777e+307);
test_math_fround("7S4NK1");
test_math_fround(-749);
test_math_fround(-191);
test_math_fround(1.7313351308798065e+308);
test_math_fround("H3V8");
test_math_fround(1.7740257301986985e+308);
test_math_fround(9.051044709534019e+307);
test_math_fround(7.727969191152502e+307);
test_math_fround(1.5264451719411513e+308);
test_math_fround(1.0771194280191912e+308);
test_math_fround(-635);
test_math_fround(440);
test_math_fround("HABQ");
test_math_fround("RQT1UUB");
test_math_fround("9U8");
test_math_fround(296);
test_math_fround("CLYKQU2CE");
test_math_fround(1.371428792423403e+308);
test_math_fround(6.014904574353613e+307);
test_math_fround(-701);
test_math_fround(9.496174936024814e+307);
test_math_fround("ZG90G");
test_math_fround("I91J4Z");
test_math_fround(-335);
test_math_fround(-357);
test_math_fround(6.816952501807125e+307);
test_math_fround("2L8H");
test_math_fround(4.740566913075334e+307);
test_math_fround("9EM0");
test_math_fround("XQMTRN");
test_math_fround("ZF9ZYLGK");
test_math_fround(1.3157038788381042e+307);
test_math_fround(-493);
test_math_fround(1.0898016211223099e+307);
test_math_fround(-829);
test_math_fround(1.334248959833165e+308);
test_math_fround(7.940599697268877e+307);
test_math_fround("ZNC1RUUYSK");
test_math_fround("ZQ1BNDKKD");
test_math_fround(-893);
test_math_fround("1ECC7JDHNV");
test_math_fround(1.5636723297831274e+308);
test_math_fround(1.4318120358954681e+308);
test_math_fround(9.599844845859983e+307);
test_math_fround(1.2100433660984386e+308);
test_math_fround(-983);
test_math_fround("06362");
test_math_fround(-653);
test_math_fround(1.5373607547600017e+308);
test_math_fround(6.258277613432578e+306);
test_math_fround("95OX2");
test_math_fround("UE0Y");
test_math_fround(3.3378998778742464e+307);
test_math_fround("5H67IQYUO5");
test_math_fround("TLZ");
test_math_fround(4.638451175678611e+307);
test_math_fround(1.315810546366237e+308);
test_math_fround(3.398338685617539e+307);
test_math_fround(1.719270757185048e+308);
test_math_fround(9.81281942958304e+307);
test_math_fround(1.769479477260762e+308);
test_math_fround(-565);
test_math_fround("OC4HKEA");
test_math_fround("MCLL5EZM8");
test_math_fround(8.677497784784698e+307);
test_math_fround("XX5TM");
test_math_fround(1.6569473729292618e+308);
test_math_fround("CD9");
test_math_fround(3.0573124858101255e+307);
test_math_fround(9.48778914200467e+307);
test_math_fround(4.538093771447049e+307);
test_math_fround("SP8Z1N2");
test_math_fround(1.2041105051601893e+308);
test_math_fround(1.4411766418819845e+308);
test_math_fround("ME4VE3BXFA");
test_math_fround(1.2752159819269002e+307);
test_math_fround(5.960983369535523e+307);
test_math_fround(7.799102409909959e+307);
test_math_fround("5D2QENR31S");