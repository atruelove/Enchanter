/*
* This file is automatically generated by Swami
*
* 2019-08-07 16:48:03.678014
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
function test_math_asin(x){
	if (Object.is( x,NaN )){
		var output = Math.asin(x);
		new TestCase("math_asin", "math_asin", NaN, output);
		test();
		return;
		}
	if (( x > 1 )){
		var output = Math.asin(x);
		new TestCase("math_asin", "math_asin", NaN, output);
		test();
		return;
		}
	if (( x < - 1 )){
		var output = Math.asin(x);
		new TestCase("math_asin", "math_asin", NaN, output);
		test();
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.asin(x);
		new TestCase("math_asin", "math_asin", + 0, output);
		test();
		return;
		}
	if (( x === - 0 )){
		var output = Math.asin(x);
		new TestCase("math_asin", "math_asin", - 0, output);
		test();
		return;
		}
}



/*TESTS GENERATED AUTOMATICALLY*/
test_math_asin(5.090164596292747e+307);
test_math_asin(-973);
test_math_asin(/[^.]+/);
test_math_asin(-913);
test_math_asin("3FI");
test_math_asin(2.601316535058928e+307);
test_math_asin(-511);
test_math_asin(/(\w+)\s(\w+)/);
test_math_asin(-587);
test_math_asin(+0);
test_math_asin("CYZ11");
test_math_asin(Infinity);
test_math_asin(1.6496121298827248e+308);
test_math_asin(NaN);
test_math_asin(/yes[^]*day/);
test_math_asin(true);
test_math_asin(1.6113435905378655e+308);
test_math_asin(-719);
test_math_asin(/foo/g);
test_math_asin(1.6279188835099703e+308);
test_math_asin("LKMET8ZAAS");
test_math_asin("UNBR5WZ");
test_math_asin(false);
test_math_asin(null);
test_math_asin("HMBIBO");
test_math_asin(6.4486064300378e+307);
test_math_asin(/ab+c/);
test_math_asin(1.1056812295132847e+308);
test_math_asin(7.909915475838697e+307);
test_math_asin(1.7750877029535465e+308);
test_math_asin(-65);
test_math_asin(-337);
test_math_asin(1.8990532010191538e+307);
test_math_asin(-551);
test_math_asin(/yes.*day/);
test_math_asin(3.232842907392171e+307);
test_math_asin(/\r\n|\r|\n/);
test_math_asin(-0);
test_math_asin("VCZ3");
test_math_asin(-341);
test_math_asin("J21CV8TI");
test_math_asin("H266");
test_math_asin(-877);
test_math_asin(-107);
test_math_asin(-837);
test_math_asin(undefined);
test_math_asin(1.1881521121112429e+308);
test_math_asin(-111);
test_math_asin("183");
test_math_asin("YVFBMF");
test_math_asin(/[\u0400-\u04FF]+/g);
test_math_asin("ZR5J4B8A");
test_math_asin("ZIL5ON");
test_math_asin("5BHL6RGG");
test_math_asin("AO0RUVZFD");
test_math_asin("6WNCN8D1");
test_math_asin("N968SW");
test_math_asin("UL5BXZA2");
test_math_asin(-817);
test_math_asin(-367);
test_math_asin(-95);
test_math_asin("20Y3");
test_math_asin(-741);
test_math_asin(1.4588768845300864e+308);
test_math_asin(-311);
test_math_asin("E11NM1NTB");
test_math_asin(-941);
test_math_asin(7.255826379147315e+307);
test_math_asin(1.0459578317567445e+308);
test_math_asin(1.5154623675380857e+308);
test_math_asin(4.424767174698126e+307);
test_math_asin("XBHZH");
test_math_asin(9.902104783274706e+307);
test_math_asin(1.7207369066338661e+308);
test_math_asin(1.4707416710301908e+308);
test_math_asin("JAKQF5VHZK");
test_math_asin(-641);
test_math_asin(-123);
test_math_asin(1.5303055717278507e+308);
test_math_asin(5.473082474291657e+307);
test_math_asin(-699);
test_math_asin("MYU");
test_math_asin("KM7SRLOA3X");
test_math_asin(1.3587945648232284e+308);
test_math_asin(1.113394831315653e+308);
test_math_asin("4EH2B");
test_math_asin("PJD");
test_math_asin(1.5297970177762778e+308);
test_math_asin("NZCABUA");
test_math_asin(-657);
test_math_asin(-813);
test_math_asin("M2F65AZ4");
test_math_asin(1.7052661066042676e+308);
test_math_asin(-909);
test_math_asin("QPT");
test_math_asin(1.5533583661757465e+308);
test_math_asin(-679);
test_math_asin("1V64V");
test_math_asin(-957);
test_math_asin("7Y2");
test_math_asin(-793);
test_math_asin(-479);
test_math_asin("SMDZ");
test_math_asin("QYBCYEHB");
test_math_asin("7EQ541");
test_math_asin("IFUJWWMP");
test_math_asin("HN5MVRXZA");
test_math_asin(8.686845678568735e+307);
test_math_asin("KCJ");
test_math_asin(1.6768455873578653e+307);
test_math_asin(-861);
test_math_asin("EU0N7IL2L");
test_math_asin(-637);
test_math_asin(5.890094158949167e+307);
test_math_asin(-279);
test_math_asin(-189);
test_math_asin("BJ4AEE7");
test_math_asin(-125);
test_math_asin("X0R9NYC4VO");
test_math_asin(4.667979573059737e+307);
test_math_asin(4.750005686628076e+307);
test_math_asin(-1);
test_math_asin(6.286993701370147e+307);
test_math_asin("SW1A3V5IQ");
test_math_asin("9GTMZED");
test_math_asin(-851);
test_math_asin(1.0542170768219614e+308);
test_math_asin(-109);
test_math_asin("DJ9M61SQW9");
test_math_asin(-79);
test_math_asin(860);
test_math_asin("HJMWF");
test_math_asin("C4F");
test_math_asin("7A9L7J6");
test_math_asin(8.452926603593027e+307);
test_math_asin(1.782733256079333e+308);
test_math_asin(-759);
test_math_asin(1.0583598810986738e+308);
test_math_asin("N4QAGO");
test_math_asin(1.7642741375585746e+308);
test_math_asin(1.3595472186918262e+308);
test_math_asin(-267);
test_math_asin(658);
test_math_asin("LOOX5");
test_math_asin(-581);
test_math_asin("XNKKJ");
test_math_asin(7.905878123222818e+307);
test_math_asin("LMCKBZC3YL");
test_math_asin("3ZD53YZ5");
test_math_asin(1.2261299844108838e+308);
test_math_asin(2.892205680606304e+307);
test_math_asin("WD961OEFZW");
test_math_asin(1.1490197761714774e+308);
test_math_asin(2.496162400320419e+307);
test_math_asin("G3FEQ9PPGR");
test_math_asin("JGL1GA");
test_math_asin(-529);
test_math_asin(1.2191438623176449e+308);
test_math_asin("6ETC7MH1");
test_math_asin(-809);
test_math_asin(1.020733981499513e+308);
test_math_asin("WGNP3J1B6V");
test_math_asin(1.3239911573323126e+308);
test_math_asin("RMDHOCPV9J");
test_math_asin(-799);
test_math_asin("M7ETUZP22");
test_math_asin(1.7640840718700535e+308);
test_math_asin(1.0662794946035179e+308);
test_math_asin(-693);
test_math_asin("J13O1DSL");
test_math_asin(1.7228288722934009e+308);
test_math_asin("R1VG66");
test_math_asin(-763);
test_math_asin("OYPAJRNB");
test_math_asin("7R7KCG");
test_math_asin("PWM935O");
test_math_asin(-917);
test_math_asin("92790K");
test_math_asin("P5M5YXFPTN");
test_math_asin("R52M");
test_math_asin(-43);
test_math_asin("ZWS0");
test_math_asin("7WJFW1D4L");
test_math_asin(8.368094835564865e+307);
test_math_asin("A2G0");
test_math_asin("AJJFIJ3UD");
test_math_asin("MH8FFHT8");
test_math_asin("HTZJ8");
test_math_asin(-509);
test_math_asin("QXCFG5NGS");
test_math_asin("G92CKNZ9W");
test_math_asin("X3C8MGL3N");
test_math_asin("SGP4Z1F");
test_math_asin(-849);
test_math_asin("BSFLHW");
test_math_asin("36N7Z");
test_math_asin(9.803146624196248e+307);
test_math_asin(-85);
test_math_asin("RA2BG");
test_math_asin("640LFDH");
test_math_asin(-979);
test_math_asin(1.3556510021194102e+308);
test_math_asin(7.599818940536016e+305);
test_math_asin(-921);
test_math_asin(-507);
test_math_asin(1.4991001586399484e+308);
test_math_asin(7.486503999515879e+307);
test_math_asin("IZWRENYA");
test_math_asin(4.558432782566012e+307);
test_math_asin("T1B5RQ");
test_math_asin("JX0");
test_math_asin(-703);
test_math_asin(-667);
test_math_asin("4J9ZHU602H");
test_math_asin("0SC8YOH3M");
test_math_asin(-721);
test_math_asin("AR4VU");
test_math_asin(-751);
test_math_asin(2.0942168898299685e+307);
test_math_asin("W0EPT");
test_math_asin(-765);
test_math_asin(-825);
test_math_asin("A4M91C70J");
test_math_asin(-325);
test_math_asin("UEI48IO");
test_math_asin("STDW28J");
test_math_asin("D06Q");
test_math_asin(8.600425587521599e+307);
test_math_asin(3.478632447911471e+307);
test_math_asin(-771);
test_math_asin(-151);
test_math_asin(2.0723101409753526e+307);
test_math_asin(-669);
test_math_asin(1.6617369465716649e+308);
test_math_asin(-273);
test_math_asin("CIP");
test_math_asin(9.672174525550838e+307);
test_math_asin(9.695521528509381e+307);
test_math_asin("W5NDBHV");
test_math_asin(-733);
test_math_asin("EY3EW8");
test_math_asin(5.464711540256335e+307);
test_math_asin("Q6LCGTU6F");
test_math_asin("PN9Y");
test_math_asin("J9HZNLM2");
test_math_asin(6.484462119171401e+307);
test_math_asin("4RC");
test_math_asin(9.204891318585592e+307);
test_math_asin(2.138233611756143e+307);
test_math_asin(9.52058383325784e+307);
test_math_asin(1.5084243245121629e+308);
test_math_asin(-119);
test_math_asin("KYOT7");
test_math_asin("WXUY");
test_math_asin(-935);
test_math_asin("KK9E");
test_math_asin("XCL1Y0AZ5");
test_math_asin(1.5824720154169513e+308);
test_math_asin(-187);
test_math_asin("MTMK");
test_math_asin("JPM4PMC");
test_math_asin("ISR4L5KK");
test_math_asin(3.3544341960083535e+307);
test_math_asin(-333);
test_math_asin(9.697670990622022e+307);
test_math_asin(1.1864929074606183e+308);
test_math_asin(5.066588051302313e+307);
test_math_asin("FD5ZHI");
test_math_asin("HTY0");
test_math_asin("AI9E");
test_math_asin(3.807292143966185e+307);
test_math_asin("GAO");
test_math_asin(-175);
test_math_asin(1.3480989744199805e+308);
test_math_asin(5.657332154596763e+307);
test_math_asin("D2U");
test_math_asin(6.77024073960353e+307);
test_math_asin(2.732746660060728e+307);
test_math_asin(1.304305351225539e+307);
test_math_asin("PT4AC");
test_math_asin("FUUVB0ND");
test_math_asin(-517);
test_math_asin("BNYEOE872");
test_math_asin(-847);
test_math_asin(-193);
test_math_asin("I1KGF");
test_math_asin("JGZ3I06C28");
test_math_asin("PAWZG04");
test_math_asin("NQE1LBMSI3");
test_math_asin(-777);
test_math_asin(1.745826735281578e+308);
test_math_asin(5.730542290247789e+307);
test_math_asin("M636N");
test_math_asin("B5K4F");
test_math_asin(3.8390013992115874e+307);
test_math_asin(-357);
test_math_asin(-575);
test_math_asin(-399);
test_math_asin(3.237343262376939e+307);
test_math_asin("1VCICU");
test_math_asin(4.138898316770095e+307);
test_math_asin(-811);
test_math_asin(-727);
test_math_asin(7.665677362890519e+307);
test_math_asin(5.810633490974968e+307);
test_math_asin("JJ0A");
test_math_asin(-173);
test_math_asin(1.0611404584744699e+307);
test_math_asin("57Y07");
test_math_asin(-725);
test_math_asin("S42OW7");
test_math_asin("7CT");
test_math_asin(-99);
test_math_asin("SQRV");
test_math_asin(-3);
test_math_asin("H71X72");
test_math_asin(1.5046057815627086e+308);
test_math_asin(1.2355991297516935e+308);
test_math_asin(6.735381180018283e+307);
test_math_asin(-783);
test_math_asin("605XHL");
test_math_asin(1.67618602821282e+308);
test_math_asin(9.626184095276258e+307);
test_math_asin(-63);
test_math_asin(-453);
test_math_asin("K7H7V");
test_math_asin(-797);
test_math_asin(-445);
test_math_asin(-649);
test_math_asin(1.615536429163241e+308);
test_math_asin("SZWEK4WJ");
test_math_asin("NUBF4");
test_math_asin("OCNCO0LEB");
test_math_asin(1.4533555093935901e+308);
test_math_asin(1.3376135284015498e+308);
test_math_asin("HIQ3SD6I7");
test_math_asin(-387);
test_math_asin("J95L");
test_math_asin(-879);
test_math_asin(-539);
test_math_asin(-133);
test_math_asin("OGJM");
test_math_asin(-447);
test_math_asin("1YE");
test_math_asin(-89);
test_math_asin("292");
test_math_asin(-485);
test_math_asin(3.101392728703508e+307);
test_math_asin(9.18997082284527e+307);
test_math_asin("VNLIHKHB7");
test_math_asin("5GJX");
test_math_asin(-635);
test_math_asin("7TOL09RI");
test_math_asin(1.7050625700225424e+308);
test_math_asin("WJC4");
test_math_asin(1.0481026218566951e+308);
test_math_asin("V761BYU");
test_math_asin(8.268913023826419e+307);
test_math_asin("Q4U");
test_math_asin("6REQ7J");
test_math_asin(-451);
test_math_asin(114);
test_math_asin(2.9253475147722013e+307);
test_math_asin(5.485790586793876e+307);
test_math_asin(1.2772233264875826e+308);
test_math_asin(-287);
test_math_asin(-723);
test_math_asin("SX9UGJJSS");
test_math_asin(3.084208893140976e+307);
test_math_asin(550);
test_math_asin("II7CIATN8");
test_math_asin("BXVL");
test_math_asin(1.682471760767201e+308);
test_math_asin("WHPHRVH");
test_math_asin(4.504784780875883e+307);
test_math_asin("EC7N6GMV");
test_math_asin("7O7VP7PC");
test_math_asin(2.868609449700992e+306);
test_math_asin(886);
test_math_asin(1.1710313961053985e+308);
test_math_asin(6.493333037672685e+307);
test_math_asin("AKFKY3O9");
test_math_asin("3GAD7");
test_math_asin(-697);
test_math_asin("FPFM");
test_math_asin("6BJB7K7");
test_math_asin(1.565398643080633e+308);
test_math_asin("JQZFJ4652");
test_math_asin(-597);
test_math_asin(1.4214777429896396e+308);
test_math_asin(1.2223469446507516e+307);
test_math_asin("HR0JK3LK");
test_math_asin(8.501556807195519e+307);
test_math_asin(-457);
test_math_asin(1.3200848741290331e+308);
test_math_asin("XLJ9YA5V");
test_math_asin(8.335435317026842e+306);
test_math_asin(-73);
test_math_asin(-177);
test_math_asin(-433);
test_math_asin(-359);
test_math_asin(-45);
test_math_asin("AOIW1LSB");
test_math_asin(1.5726292732925487e+308);
test_math_asin(1.090772927004329e+308);
test_math_asin(4.888879976067854e+307);
test_math_asin("85U6QVWS");
test_math_asin("0IP");
test_math_asin(4.766483027348875e+306);
test_math_asin("T5O8ZP7K");
test_math_asin("LQLH");
test_math_asin(1.6673122299944222e+308);
test_math_asin("EL9U");
test_math_asin(1.644622982614186e+308);
test_math_asin(-377);
test_math_asin(8.998633694831834e+307);
test_math_asin(9.665883887975031e+307);
test_math_asin("9U5O8O9");
test_math_asin(1.0468703408454639e+307);
test_math_asin(1.0694484698291467e+308);
test_math_asin(-429);
test_math_asin("QQ6A5UZ");
test_math_asin(-245);
test_math_asin("9QR");
test_math_asin(5.639704842044686e+307);
test_math_asin(1.5470024571029503e+308);
test_math_asin("K8JAD6GX");
test_math_asin("KW3N");
test_math_asin(-761);
test_math_asin("VKBNZ62CM");
test_math_asin(-37);
test_math_asin(2.144000763557795e+307);
test_math_asin(-789);
test_math_asin(-247);
test_math_asin("27UPQ99H");
test_math_asin(-115);
test_math_asin(4.2658737172128784e+307);
test_math_asin(1.1519120345393582e+308);
test_math_asin("551");
test_math_asin(1.544851566693437e+308);
test_math_asin(3.0107325622363104e+306);
test_math_asin("BIWWKA");
test_math_asin(-613);
test_math_asin(9.12009820511994e+307);
test_math_asin("HLMAY7D6");
test_math_asin(6.80528123847548e+307);
test_math_asin(5.071077478797213e+307);
test_math_asin("ENNR4W");
test_math_asin("AQE55C4ZW");
test_math_asin(1.192986874118625e+308);
test_math_asin("74SWITJMSH");
test_math_asin(1.3537736623990454e+307);
test_math_asin(-905);
test_math_asin("GRPYOTN");
test_math_asin("XTL");
test_math_asin(-495);
test_math_asin(-353);
test_math_asin(6.95860982638809e+307);
test_math_asin("YPE");
test_math_asin("P0KEA04CR");
test_math_asin(8.429150743956655e+307);
test_math_asin(1.6202215432725405e+308);
test_math_asin(3.9385178504991325e+307);
test_math_asin("8J6");
test_math_asin(-561);
test_math_asin("O99KM");
test_math_asin("OHP60CR9TC");
test_math_asin(5.537801287276987e+307);
test_math_asin("MJ3P");
test_math_asin(1.7392416842463575e+308);
test_math_asin("4YEC");
test_math_asin("V84Z");
test_math_asin(456);
test_math_asin(1.2579917216334033e+308);
test_math_asin(-113);
test_math_asin(1.7039610416703904e+308);
test_math_asin(7.248379622404756e+307);
test_math_asin(-291);
test_math_asin(-629);
test_math_asin(-963);
test_math_asin("4AMW");
test_math_asin(-859);
test_math_asin("8NYL");
test_math_asin(1.7036599714490099e+307);
test_math_asin(9.855720469383603e+307);
test_math_asin("PYJS9NNJB");
test_math_asin("SW5XWYJL");
test_math_asin("OBOI");
test_math_asin(-499);
test_math_asin(-323);
test_math_asin(1.285365644651376e+308);
test_math_asin(1.3125317291457231e+308);
test_math_asin(1.494620899332789e+308);
test_math_asin("O9X5");
test_math_asin(5.961675528015016e+307);
test_math_asin(-483);
test_math_asin("PEY6ORJ");
test_math_asin(1.5374689934400081e+308);
test_math_asin(-503);
test_math_asin(7.640616980754918e+307);
test_math_asin("3UJD8R");
test_math_asin(7.961693406718196e+307);
test_math_asin("U3UT");
test_math_asin("W5TT3BT");
test_math_asin(9.105160310702634e+307);
test_math_asin(-923);
test_math_asin(6.454289723960578e+306);
test_math_asin("W3O");
test_math_asin(1.7309962538849276e+308);
test_math_asin(3.197025558531568e+307);
test_math_asin(1.6855423666326063e+308);
test_math_asin(5.801355346530763e+307);
test_math_asin(5.2325089698427973e+306);
test_math_asin("0XDGPO2PH");
test_math_asin(1.6992618697759943e+308);
test_math_asin("KIFTT80");
test_math_asin(4.1393212305144233e+307);
test_math_asin("0WOVRDDBS0");
test_math_asin(-427);
test_math_asin(1.696987351466862e+308);
test_math_asin("H71HKMDFA");
test_math_asin(9.219869088556363e+307);
test_math_asin(6.870593243323014e+307);
test_math_asin("B2NNK6X");
test_math_asin(-735);
test_math_asin(-57);
test_math_asin(1.0057994314178505e+308);
test_math_asin("R9YI");
test_math_asin(3.2218981835442755e+307);
test_math_asin(1.6108716781799126e+308);
test_math_asin(-945);
test_math_asin(-955);
test_math_asin(1.6137826828483972e+308);
test_math_asin(-787);
test_math_asin(-127);
test_math_asin(-943);
test_math_asin("VQPU79IGOY");
test_math_asin(3.3920124726266346e+307);
test_math_asin("KG7OUZVM8");
test_math_asin("DTG");
test_math_asin(-477);
test_math_asin("RR88");
test_math_asin(1.3882475864734174e+307);
test_math_asin("MQJ2LPGCZ");
test_math_asin("7KXVZ2");
test_math_asin(-897);
test_math_asin(-749);
test_math_asin("2KIY");
test_math_asin(1.2463022160426165e+308);
test_math_asin("964WC1N");
test_math_asin(1.7220938174181459e+308);
test_math_asin("KV91NWTTI");
test_math_asin("NT3");
test_math_asin(-545);
test_math_asin("SCOW1Z6Q1");
test_math_asin("G212U");
test_math_asin("YSU9Y0R27D");
test_math_asin(-347);
test_math_asin("WT0MVHGA");
test_math_asin("U6OTXE");
test_math_asin(2.440360242840835e+307);
test_math_asin(6.042173941287459e+307);
test_math_asin(1.2287087459814336e+308);
test_math_asin("LP74RKH3");
test_math_asin("L8R");
test_math_asin(-737);
test_math_asin(3.8991116713336943e+307);
test_math_asin(1.5263073942685833e+308);
test_math_asin(1.997877806336113e+307);
test_math_asin(-397);
test_math_asin(8.662963275593866e+306);
test_math_asin("RVQTTXMH9T");
test_math_asin(1.3996256193752788e+308);
test_math_asin("CEAJI");
test_math_asin(-653);
test_math_asin("J1KIRH");
test_math_asin(-717);
test_math_asin("AF00WS3VJ");
test_math_asin(1.3853042818252468e+308);
test_math_asin(1.7258713195993427e+308);
test_math_asin(-819);
test_math_asin(-329);
test_math_asin("Y99QEZV8XE");
test_math_asin(-415);
test_math_asin("4C7BSNSCO");
test_math_asin(-903);
test_math_asin("NXA0RL");
test_math_asin(-937);
test_math_asin("S511VCSI0");
test_math_asin("VT6VGUYO");
test_math_asin("TGA8");
test_math_asin(1.7928885072702112e+308);
test_math_asin("WSNZ59V");
test_math_asin("1FWW6U5FFP");
test_math_asin(-707);
test_math_asin(1.7819510180115853e+308);
test_math_asin("8RR9XWYSD8");
test_math_asin(-895);
test_math_asin("XOP4QSMYU");
test_math_asin("XIWW");
test_math_asin("KV2FH");
test_math_asin(-585);
test_math_asin("016IRN");
test_math_asin(1.452014072008112e+308);
test_math_asin(-605);
test_math_asin("4N7");
test_math_asin("1EWIP0WQ");
test_math_asin("YETK7T");
test_math_asin(3.3288033875574717e+307);
test_math_asin(1.3760884533252487e+307);
test_math_asin("0WY3D");
test_math_asin(7.936212753852268e+307);
test_math_asin("N0L");
test_math_asin(-195);
test_math_asin("E8NX481UY");
test_math_asin("C5UQPP34N");
test_math_asin(-501);
test_math_asin(1.7152708055114869e+308);
test_math_asin(7.121354044727172e+307);
test_math_asin("Q03B5");
test_math_asin(1.0882850832729942e+308);
test_math_asin(-51);
test_math_asin(-97);
test_math_asin(-381);
test_math_asin("UHV1EXHB9");
test_math_asin(-881);
test_math_asin(-975);
test_math_asin("FG49");
test_math_asin(2.714675926137481e+307);
test_math_asin(722);
test_math_asin(1.5204598699251278e+307);
test_math_asin(1.494901869941062e+308);
test_math_asin("JJIG35XXW");
test_math_asin(1.838446914507294e+307);
test_math_asin(3.860772862702605e+307);
test_math_asin(-685);
test_math_asin(-213);
test_math_asin(1.6784117605623693e+308);
test_math_asin(112);
test_math_asin("RKZS5");
test_math_asin("F1WI4");
test_math_asin(-625);
test_math_asin(8.405511376399051e+307);
test_math_asin(-767);
test_math_asin("1XWTHPW");
test_math_asin("JCV1");
test_math_asin(2.211184792943772e+307);
test_math_asin(1.3106372174022184e+308);
test_math_asin(7.867060355894807e+307);
test_math_asin("RCEU5");
test_math_asin(1.0308936524198582e+308);
test_math_asin("87JJY8");
test_math_asin(1.5474526448021564e+308);
test_math_asin(-883);
test_math_asin(8.10366027430075e+305);
test_math_asin("VZHKIYE0EG");
test_math_asin("21AORK4ICK");
test_math_asin(6.550112599418018e+307);
test_math_asin(4.742102339394226e+306);
test_math_asin(6.237860024906203e+307);
test_math_asin(1.7736343252225303e+308);
test_math_asin(1.0841902275352878e+308);
test_math_asin(7.124740967475727e+307);
test_math_asin(-493);
test_math_asin(1.7540179345653069e+308);
test_math_asin("C1UNATIXLG");
test_math_asin("SZ4C");
test_math_asin("5HZ");
test_math_asin(-841);
test_math_asin(1.5031608617626957e+308);
test_math_asin(-261);
test_math_asin(5.78682386563796e+307);
test_math_asin("E3SY6");
test_math_asin("LQQS");
test_math_asin(-873);
test_math_asin("5G4R");
test_math_asin(6.127768244647233e+307);
test_math_asin(1.926935800329502e+307);
test_math_asin(-315);
test_math_asin("D1DYGG");
test_math_asin("RHKD");
test_math_asin("368OD89D");
test_math_asin(-577);
test_math_asin(1.2825690486399014e+308);
test_math_asin(-403);
test_math_asin("IFN");
test_math_asin(6.710429215870692e+307);
test_math_asin(-795);
test_math_asin("XN7XCLIVX");
test_math_asin(-19);
test_math_asin("Z0HFP5N");
test_math_asin("5STR5P");
test_math_asin("85X2V");
test_math_asin("2Z6DH8");
test_math_asin("VF80PK");
test_math_asin(1.7326512434060131e+308);
test_math_asin(-297);
test_math_asin("60EN");
test_math_asin("ACZ");
test_math_asin(-157);
test_math_asin("LEK");
test_math_asin(-603);
test_math_asin(1.2110341280181715e+308);
test_math_asin("E3TQSPJ5WA");
test_math_asin(8.652380146937962e+307);
test_math_asin(1.723949145159866e+308);
test_math_asin(1.521815466381068e+308);
test_math_asin("CPPV");
test_math_asin("VHT81");
test_math_asin("N522");
test_math_asin(-833);
test_math_asin(-283);
test_math_asin(9.273334198136678e+307);
test_math_asin(-47);
test_math_asin("5Q4H2V0WDF");
test_math_asin("P4WBJO519G");
test_math_asin(1.728689265284545e+308);
test_math_asin("CWV");
test_math_asin(1.0553000352608979e+308);
test_math_asin(-519);
test_math_asin(1.7280240676982928e+308);
test_math_asin(1.1989090519568322e+308);
test_math_asin("9K31");
test_math_asin(-745);
test_math_asin(-21);
test_math_asin("669KAIHUL");
test_math_asin(1.7379323281474722e+308);
test_math_asin(3.5386272570086655e+307);
test_math_asin(8.785835670941276e+307);
test_math_asin("PX74YBHPRR");
test_math_asin(9.782397486282488e+307);
test_math_asin("LA751");
test_math_asin(1.4363870161385182e+308);
test_math_asin("E0IX69PDBZ");
test_math_asin("U065MS");
test_math_asin(-549);
test_math_asin(-369);
test_math_asin("C22CJAT");
test_math_asin(-417);
test_math_asin("7ZZS44I");
test_math_asin(-791);
test_math_asin(1.411442266505239e+308);
test_math_asin("INSM2");
test_math_asin("ITGZ4S6SSX");
test_math_asin("BJYC");
test_math_asin(-571);
test_math_asin(1.6302920094127876e+306);
test_math_asin(6.653580056668162e+306);
test_math_asin(-929);
test_math_asin(-313);
test_math_asin("23IXLTVP");
test_math_asin(3.430765118103469e+307);
test_math_asin("96LA6");
test_math_asin("6GS10");
test_math_asin(1.6516430462508416e+308);
test_math_asin(5.016717824386101e+307);
test_math_asin(-211);
test_math_asin(1.252343757758043e+308);
test_math_asin(6.843015286856015e+307);
test_math_asin(1.3258711113586484e+308);
test_math_asin(3.2946313412358236e+307);
test_math_asin("3L7H5L");
test_math_asin("ZKP4F8OEAG");
test_math_asin("17O");
test_math_asin("QKJ19");
test_math_asin(1.7811058080808298e+308);
test_math_asin(9.188792736772944e+307);
test_math_asin(-997);
test_math_asin(1.131307884742951e+308);
test_math_asin("FAY");
test_math_asin(2.0363138188445007e+307);
test_math_asin(-259);
test_math_asin(-55);
test_math_asin(-235);
test_math_asin("0O9");
test_math_asin(1.3280773826517817e+308);
test_math_asin(-559);
test_math_asin(-77);
test_math_asin(1.730202110870383e+308);
test_math_asin(9.878019873204564e+307);
test_math_asin(1.4239735867200066e+308);
test_math_asin(1.8598907931997804e+307);
test_math_asin(748);
test_math_asin(3.146230969646161e+307);
test_math_asin("PA2I2PB");
test_math_asin("XGNKH7L");
test_math_asin("F6X6E");
test_math_asin(-711);
test_math_asin("2N0AN");
test_math_asin(1.5236038021429476e+308);
test_math_asin(1.025074156898533e+308);
test_math_asin("DC7YO5KK");
test_math_asin("79SV");
test_math_asin(1.7882758391004423e+308);
test_math_asin("Y3Q");
test_math_asin(1.6220980447914195e+308);
test_math_asin("QRO9B3FAV");
test_math_asin(2.7174970428119002e+306);
test_math_asin("4X5LRHUI2");
test_math_asin(6.720677426607624e+307);
test_math_asin("FHC5AX1DCD");
test_math_asin(-309);
test_math_asin("OXBOA");
test_math_asin("P5J");
test_math_asin(3.507682831963036e+307);
test_math_asin("LN2UPA2GRY");
test_math_asin(9.760411537720261e+307);
test_math_asin("VFB");
test_math_asin(-437);
test_math_asin(-683);
test_math_asin(9.813827947967914e+306);
test_math_asin("TCXY3IM");
test_math_asin(3.5884715740136145e+307);
test_math_asin(2.52109585082622e+307);
test_math_asin(1.3007265335417907e+308);
test_math_asin(1.4676013091120728e+308);
test_math_asin(9.889128990682363e+307);
test_math_asin(1.5237798714239312e+307);
test_math_asin(8.051427181667693e+307);
test_math_asin(-257);
test_math_asin(-183);
test_math_asin("EI11GPFO0");
test_math_asin("4TX");
test_math_asin(-31);
test_math_asin(-885);
test_math_asin(-781);
test_math_asin(1.250524023039501e+308);
test_math_asin("BDM");
test_math_asin("UUML7KZYN7");
test_math_asin(-553);
test_math_asin(2.719249810549982e+307);
test_math_asin("SRCQ");
test_math_asin("V94J");
test_math_asin(6.500311228277878e+307);
test_math_asin("EBZJ");
test_math_asin(1.6108802921233517e+308);
test_math_asin(1.0273969875677024e+308);
test_math_asin(-199);
test_math_asin("D49OM106");
test_math_asin(1.2648341959943418e+308);
test_math_asin(-83);
test_math_asin(6.427458030291751e+307);
test_math_asin("QD4GFKIG");
test_math_asin(1.4631617549572261e+308);
test_math_asin(-401);
test_math_asin(954);
test_math_asin("BO1MVX2GY");
test_math_asin(9.422854059353476e+307);
test_math_asin(-293);
test_math_asin(-191);
test_math_asin("EY2GPS");
test_math_asin(7.344087313708893e+307);
test_math_asin(3.835901548657942e+307);
test_math_asin(1.2452442163714146e+308);
test_math_asin(1.461896115894039e+308);
test_math_asin(1.0515863025154292e+308);
test_math_asin(1.028881645626975e+308);
test_math_asin(5.291261768345073e+307);
test_math_asin("B3VEDEF");
test_math_asin(-153);
test_math_asin(-855);
test_math_asin("YPW66VE");
test_math_asin("LO872ULAS");
test_math_asin("N58A0MZ8P");
test_math_asin("K8ZTN0ZUZ");
test_math_asin("V54WOOL6");
test_math_asin(1.4430882272339786e+308);
test_math_asin("9QTWO");
test_math_asin(1.0940379408154182e+308);
test_math_asin(5.46658933487021e+307);
test_math_asin(5.338614059108252e+307);
test_math_asin(1.6051117345799726e+308);
test_math_asin(6.59533691239827e+307);
test_math_asin(4.4168788236266175e+307);
test_math_asin("G10HCWC14I");
test_math_asin(1.6479648246033388e+308);
test_math_asin(1.6110197421446084e+308);
test_math_asin("AF550XP");
test_math_asin(1.3610762173268332e+307);
test_math_asin(1.0371755963025284e+308);
test_math_asin("1GAV");
test_math_asin("9JY7WQC");
test_math_asin("2I4D");
test_math_asin("4K3T");
test_math_asin("RRMPG5E0J");
test_math_asin(-285);
test_math_asin(6.093588027624089e+307);
test_math_asin("FF2EV9O6T9");
test_math_asin("G99LT9D4H");
test_math_asin("I7OONS5K3D");
test_math_asin("FTTXA");
test_math_asin("4YOSK");
test_math_asin("4W840VIR96");
test_math_asin(7.179577331478667e+306);
test_math_asin("OGQXCP1NG");
test_math_asin(1.9906283186179878e+307);
test_math_asin("ZG8");
test_math_asin("QEL");
test_math_asin(1.1960419567701904e+308);
test_math_asin(9.381224537641237e+307);
test_math_asin(-939);
test_math_asin(-161);
test_math_asin(-147);
test_math_asin("EN77");
test_math_asin(1.3494632591714856e+306);
test_math_asin(1.1268900803732875e+308);
test_math_asin("8HT3");
test_math_asin("B3N");
test_math_asin(-689);
test_math_asin(1.678732281280883e+308);
test_math_asin(1.719786417719694e+308);
test_math_asin(1.3266959683794205e+308);
test_math_asin("WFA2JX");
test_math_asin("EEGC");
test_math_asin("ALUVJVT5");
test_math_asin("NXXIGAR");
test_math_asin(-567);
test_math_asin(7.726389193794509e+307);
test_math_asin(8.700667391013414e+307);
test_math_asin("54QU98HC");
test_math_asin("NUR1YF4KU1");
test_math_asin(-49);
test_math_asin(-373);
test_math_asin("UZ5JA");
test_math_asin(1.2248615848327281e+308);
test_math_asin("BNOIT");
test_math_asin(4.2649737401321984e+307);
test_math_asin("G24PR19EG");
test_math_asin("GAPRKN");
test_math_asin(1.4098723772291637e+308);
test_math_asin(-461);
test_math_asin(-525);
test_math_asin("9P2U1KLU");
test_math_asin("J1DO0");
test_math_asin("CO7EUYU");
test_math_asin(-139);
test_math_asin("EP7EA");
test_math_asin(7.647938039619258e+307);
test_math_asin("CUVOCO0");
test_math_asin(-305);
test_math_asin(1.0021631963416975e+308);
test_math_asin(-465);
test_math_asin("X72LFDW");
test_math_asin("NNWHK");
test_math_asin(-607);
test_math_asin(1.2352604939750355e+308);
test_math_asin(-663);
test_math_asin(8.182703026487567e+307);
test_math_asin(-701);
test_math_asin(-647);
test_math_asin(1.1862584786163827e+308);
test_math_asin("P69ZI9PW");
test_math_asin(5.009013787721228e+307);
test_math_asin(1.4148236342755058e+308);
test_math_asin(-29);
test_math_asin("M16RRUT0A");
test_math_asin("66CD");
test_math_asin(8.708225816601418e+307);
test_math_asin("4R2OOIW94");
test_math_asin(-911);
test_math_asin(4.46561320979993e+307);
test_math_asin("8HLM0");
test_math_asin("1XNGY6");
test_math_asin("0U0A48NB6");
test_math_asin("5LXOHS22S");
test_math_asin("14D");
test_math_asin(66);
test_math_asin("78MUT");
test_math_asin(8.66582702962049e+307);
test_math_asin("IGDMSPI5");
test_math_asin(1.04436532544508e+308);
test_math_asin(9.597451726713981e+307);
test_math_asin(6.50672623509532e+307);
test_math_asin(-327);
test_math_asin(1.0133352299100319e+308);
test_math_asin(7.255673181506022e+307);
test_math_asin("4TUG32MX5");
test_math_asin(2.734257321474829e+307);
test_math_asin("0FTUY");
test_math_asin(8.965009249717013e+307);
test_math_asin("YC8PC2R6AA");
test_math_asin(1.9064996773909079e+307);
test_math_asin(1.4835301747560285e+308);
test_math_asin(1.550311066699484e+308);
test_math_asin("5GMPN");
test_math_asin(-619);
test_math_asin(1.6131451872871235e+308);
test_math_asin(1.5726362335480085e+308);
test_math_asin("6VFZBSIX9");
test_math_asin(8.098594568288416e+307);
test_math_asin("H63RR5PZ7");
test_math_asin(1.6361107888640096e+308);
test_math_asin(-265);
test_math_asin(1.391219274676227e+308);
test_math_asin("3JKV1QF2H");
test_math_asin(3.4205930201171756e+307);
test_math_asin("5GE1K5PI");
test_math_asin(1.2411183004764734e+308);
test_math_asin(-141);
test_math_asin("2DP4K");
