/*
* This file is automatically generated by Swami
*
* 2019-08-08 15:51:25.273661
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
test_math_sin(false);
test_math_sin(undefined);
test_math_sin(8.779717122178188e+306);
test_math_sin(-17);
test_math_sin(+0);
test_math_sin(1.1808192215722796e+307);
test_math_sin(/\r\n|\r|\n/);
test_math_sin(/(\w+)\s(\w+)/);
test_math_sin(-711);
test_math_sin(true);
test_math_sin(8.695700702123958e+307);
test_math_sin(-507);
test_math_sin(3.315127969403681e+307);
test_math_sin(-411);
test_math_sin(-583);
test_math_sin(-193);
test_math_sin(NaN);
test_math_sin(-53);
test_math_sin("OK75");
test_math_sin(/[^.]+/);
test_math_sin(8.470972052413476e+307);
test_math_sin(-553);
test_math_sin(-725);
test_math_sin(-871);
test_math_sin(1.616895164108843e+308);
test_math_sin(1.0575047895109306e+307);
test_math_sin("LN2");
test_math_sin(6.130144242072095e+307);
test_math_sin(Infinity);
test_math_sin("AAF60JXA");
test_math_sin(-665);
test_math_sin(1.0898395903464174e+308);
test_math_sin(1.6776323491332367e+307);
test_math_sin(1.7763209136160514e+308);
test_math_sin(-637);
test_math_sin(4.797997542678256e+307);
test_math_sin("4S9W8Q");
test_math_sin(-571);
test_math_sin(4.107945618626251e+307);
test_math_sin(/yes.*day/);
test_math_sin(1.6031883354959693e+308);
test_math_sin(/foo/g);
test_math_sin(-487);
test_math_sin(-897);
test_math_sin(5.514258063586424e+307);
test_math_sin(1.4258567887055783e+306);
test_math_sin(1.1753811869511669e+308);
test_math_sin("JWQP");
test_math_sin(1.690902297332505e+308);
test_math_sin(8.396142778260076e+306);
test_math_sin("5LD4LJI17Q");
test_math_sin(-39);
test_math_sin(/ab+c/);
test_math_sin(1.4191303035798013e+308);
test_math_sin(-457);
test_math_sin(-317);
test_math_sin(/[\u0400-\u04FF]+/g);
test_math_sin("U0UVDKGRAU");
test_math_sin(1.14257330250678e+308);
test_math_sin(1.6291630092771706e+308);
test_math_sin("C29ACCOI");
test_math_sin(1.4470392460109599e+308);
test_math_sin(-249);
test_math_sin("U77NRTB");
test_math_sin("525E9DK");
test_math_sin(-569);
test_math_sin(1.4443051210663279e+308);
test_math_sin(-587);
test_math_sin(-861);
test_math_sin(1.3139619255648188e+308);
test_math_sin(1.2132951337343652e+308);
test_math_sin(5.860010792116248e+307);
test_math_sin(4.425880897586607e+307);
test_math_sin("UZW11");
test_math_sin(-73);
test_math_sin("WKLUZU6GB");
test_math_sin(null);
test_math_sin(-613);
test_math_sin("PDFRSS3Y");
test_math_sin("RS3LP9H8RB");
test_math_sin("HRB2VX3MK");
test_math_sin(8.256633470757822e+307);
test_math_sin(2.463945011070772e+307);
test_math_sin(3.334922939393698e+307);
test_math_sin(1.3387231443124263e+308);
test_math_sin("K4IVYNW7");
test_math_sin(1.6184637348259292e+307);
test_math_sin(-155);
test_math_sin(-239);
test_math_sin(5.491696520223254e+307);
test_math_sin("YS57K");
test_math_sin("HEP8S");
test_math_sin(1.1360822326981155e+308);
test_math_sin(1.2037114905030548e+307);
test_math_sin("NR2UQ65");
test_math_sin(1.5908571894915064e+308);
test_math_sin(9.834304670504729e+307);
test_math_sin(1.5881378824709663e+308);
test_math_sin(-649);
test_math_sin(-0);
test_math_sin("M60J");
test_math_sin("CXC80");
test_math_sin("K2MS89");
test_math_sin(-601);
test_math_sin("GH7UTELDB");
test_math_sin(-251);
test_math_sin(-473);
test_math_sin(-833);
test_math_sin("WWE60BRT9T");
test_math_sin(-621);
test_math_sin("QIEWL5F");
test_math_sin(1.277728545381049e+307);
test_math_sin("3SKHUAANH");
test_math_sin(-345);
test_math_sin(-869);
test_math_sin(-873);
test_math_sin("R67A");
test_math_sin(5.515636732811656e+307);
test_math_sin(-695);
test_math_sin("D33LOBT");
test_math_sin(-121);
test_math_sin(1.1876252033413275e+308);
test_math_sin("X1JDQ5S");
test_math_sin(-57);
test_math_sin(-103);
test_math_sin("EI6Y");
test_math_sin(-1);
test_math_sin(4.699829052966143e+307);
test_math_sin(-267);
test_math_sin("3TGHS");
test_math_sin("ISHDB");
test_math_sin(-49);
test_math_sin(1.152035045467816e+308);
test_math_sin("J2C");
test_math_sin("OL6CD");
test_math_sin("KUW1L0I");
test_math_sin(-491);
test_math_sin("EKS");
test_math_sin("S7EV");
test_math_sin("92EOD0NVX6");
test_math_sin(/yes[^]*day/);
test_math_sin(2.2143548633736272e+307);
test_math_sin("2BQAA");
test_math_sin(-839);
test_math_sin(6.598479705575471e+307);
test_math_sin(-971);
test_math_sin("V0543ZV0A");
test_math_sin(-367);
test_math_sin("8USQ7XN41");
test_math_sin(-501);
test_math_sin(-729);
test_math_sin(1.6603681420874783e+308);
test_math_sin("VPTCSNE3C");
test_math_sin(-55);
test_math_sin("5OL1W8R2N2");
test_math_sin("W4ROSUWD3A");
test_math_sin("CCRT2TTZNO");
test_math_sin("G2ZEY0WQ");
test_math_sin(8.949205657541409e+307);
test_math_sin("GPHP8O7RDQ");
test_math_sin(1.1044358382921595e+308);
test_math_sin(-325);
test_math_sin(-207);
test_math_sin("T1FDG0L22");
test_math_sin("W2SSIRD2");
test_math_sin(-279);
test_math_sin(-109);
test_math_sin(-879);
test_math_sin("BDVJ88");
test_math_sin("3KM");
test_math_sin(5.742695871569621e+307);
test_math_sin(1.4934685626958211e+308);
test_math_sin(1.1087482989108136e+308);
test_math_sin(-11);
test_math_sin("QGEBDT1Y");
test_math_sin(-137);
test_math_sin("MRDSUBJDH1");
test_math_sin(-631);
test_math_sin("CV146L");
test_math_sin(-479);
test_math_sin(1.318135361983617e+307);
test_math_sin("RI0PSOK5A");
test_math_sin(-823);
test_math_sin(1.5807726800865435e+308);
test_math_sin(-381);
test_math_sin(1.6104755047499824e+308);
test_math_sin(1.5467404656382166e+307);
test_math_sin("ECSHZ6YEA5");
test_math_sin(4.3380718867129877e+307);
test_math_sin(-273);
test_math_sin("8HU0VK4");
test_math_sin(5.331502773471544e+307);
test_math_sin("7GBPLPEPOJ");
test_math_sin(-113);
test_math_sin(-303);
test_math_sin(1.6378439082737457e+306);
test_math_sin(1.3315720804897757e+308);
test_math_sin("9U5Q");
test_math_sin("5KWYCG1");
test_math_sin(-493);
test_math_sin("IGXOWPWWU5");
test_math_sin("ZYU2QT98H");
test_math_sin(4.896297146232997e+306);
test_math_sin(1.4129842640318427e+308);
test_math_sin(3.907682250053332e+306);
test_math_sin("8GYO");
test_math_sin("WRMSIF");
test_math_sin("381JHJRW2");
test_math_sin(1.193444030126822e+308);
test_math_sin("98QE");
test_math_sin(8.990720896795862e+307);
test_math_sin(-847);
test_math_sin(-669);
test_math_sin("UJJ1YO7");
test_math_sin(-401);
test_math_sin(-735);
test_math_sin("7GZW");
test_math_sin("CIA");
test_math_sin(1.7128684030828604e+308);
test_math_sin("5RUGZGC");
test_math_sin(-853);
test_math_sin("5E65");
test_math_sin("7AI0ZUFO");
test_math_sin(1.3265718496018515e+308);
test_math_sin(9.028103563571927e+307);
test_math_sin(8.055042072698909e+307);
test_math_sin(2.4773966847918357e+306);
test_math_sin(1.6005683041546115e+308);
test_math_sin(1.4452898369805434e+308);
test_math_sin(-429);
test_math_sin("K89CM");
test_math_sin("0NN6");
test_math_sin("7CDI66R8F");
test_math_sin(5.710600531906893e+307);
test_math_sin(-883);
test_math_sin("O91MDQ63V");
test_math_sin("DJBIGJ66NS");
test_math_sin("Z6QLJ88C");
test_math_sin("FBK");
test_math_sin("HO1U7Q6BC0");
test_math_sin(1.5251181956057332e+308);
test_math_sin("JFVMDV0MKJ");
test_math_sin("22E");
test_math_sin(-611);
test_math_sin("B8MKFCY");
test_math_sin("XRI8");
test_math_sin("U913H1OE6X");
test_math_sin(7.855826762237914e+307);
test_math_sin(-261);
test_math_sin(-737);
test_math_sin(1.6172879882442723e+308);
test_math_sin(-761);
test_math_sin(1.6150815632904941e+308);
test_math_sin(1.1303500905470325e+308);
test_math_sin("K1GKZAGC");
test_math_sin(-845);
test_math_sin(4.262426196420874e+307);
test_math_sin(-671);
test_math_sin(1.4662508382665922e+308);
test_math_sin(-687);
test_math_sin("8CZRM3");
test_math_sin(-247);
test_math_sin(1.3520308067141099e+308);
test_math_sin(-309);
test_math_sin(1.1585767775937915e+308);
test_math_sin("7ORLR");
test_math_sin("B5SXT5");
test_math_sin(8.415687076401997e+307);
test_math_sin(-995);
test_math_sin("CIO");
test_math_sin(-427);
test_math_sin(-721);
test_math_sin("1HZU4");
test_math_sin(9.99297804073931e+307);
test_math_sin(-685);
test_math_sin("EU9IDZ5B");
test_math_sin("1BNTWQFIS4");
test_math_sin(1.496588239745863e+308);
test_math_sin(1.5432247337595842e+308);
test_math_sin(1.618044891306985e+308);
test_math_sin(-383);
test_math_sin("H1CV4L");
test_math_sin(4.020977622977806e+307);
test_math_sin("KNXK2R5H");
test_math_sin("DNKVRON");
test_math_sin(-405);
test_math_sin(-851);
test_math_sin(1.0250109997738216e+308);
test_math_sin(1.236688803916471e+308);
test_math_sin(1.4166585772503168e+308);
test_math_sin(-709);
test_math_sin(8.941660687685489e+307);
test_math_sin(-341);
test_math_sin(1.5417717259891719e+308);
test_math_sin("EZRIKL4NYQ");
test_math_sin(-221);
test_math_sin("7XM6WJQP7H");
test_math_sin("LW36GZ");
test_math_sin(-347);
test_math_sin(-531);
test_math_sin(-169);
test_math_sin(1.2661214390323626e+308);
test_math_sin(-225);
test_math_sin("AKQ9CEN");
test_math_sin("JT1RU00");
test_math_sin("CAU8");
test_math_sin(-459);
test_math_sin(-837);
test_math_sin("VU68T2KT4O");
test_math_sin(-323);
test_math_sin(-163);
test_math_sin(8.67300918842081e+307);
test_math_sin(1.5091408506369004e+308);
test_math_sin("1GJ");
test_math_sin(5.736908956158411e+307);
test_math_sin(-959);
test_math_sin("RW31KJV5B");
test_math_sin(1.135793229954729e+308);
test_math_sin("FI0Q6V9T");
test_math_sin(1.4049017498460603e+308);
test_math_sin(9.31971372409688e+307);
test_math_sin(9.327976298627885e+307);
test_math_sin("6NFR4NLBP");
test_math_sin("SNFT");
test_math_sin(1.4809471262882012e+308);
test_math_sin(7.161002878983307e+307);
test_math_sin(8.879884758674003e+307);
test_math_sin(-83);
test_math_sin(-929);
test_math_sin(7.873372963089245e+307);
test_math_sin(-629);
test_math_sin(1.6151808573870787e+308);
test_math_sin(6.67082726226466e+307);
test_math_sin(-939);
test_math_sin(-941);
test_math_sin(1.3934111116391859e+308);
test_math_sin(8.829602917394523e+307);
test_math_sin(-131);
test_math_sin("P3UI6HRMXV");
test_math_sin(-463);
test_math_sin(-115);
test_math_sin("WDIBW");
test_math_sin("R8WT6Q7I6");
test_math_sin("CI8H4");
test_math_sin(-831);
test_math_sin("O64U6H4W1");
test_math_sin("Z4CN4");
test_math_sin(-905);
test_math_sin(-409);
test_math_sin(7.544793437844515e+307);
test_math_sin(9.05314655919957e+307);
test_math_sin("3YP0");
test_math_sin(-3);
test_math_sin("PTUG5");
test_math_sin(-393);
test_math_sin(4.622306221912875e+305);
test_math_sin(3.403731271395053e+307);
test_math_sin(5.181683204898596e+307);
test_math_sin(-227);
test_math_sin(1.4121630759353715e+308);
test_math_sin("O6KA2ESS68");
test_math_sin("RJSNXHM2FK");
test_math_sin(1.11048862455604e+308);
test_math_sin(3.570351882003653e+307);
test_math_sin(1.5126934543296045e+307);
test_math_sin(4.904291007100542e+307);
test_math_sin("HHM");
test_math_sin(-867);
test_math_sin(1.704581462825135e+308);
test_math_sin(-899);
test_math_sin(1.0430793501651759e+308);
test_math_sin(1.2667745363342618e+308);
test_math_sin(1.7192265756796367e+308);
test_math_sin("Q420");
test_math_sin(1.4932060206746011e+308);
test_math_sin(-151);
test_math_sin(-925);
test_math_sin(1.920354594441601e+306);
test_math_sin("UPKWHH");
test_math_sin(7.661022440413124e+307);
test_math_sin(-749);
test_math_sin(-465);
test_math_sin("DY7L1");
test_math_sin(4.962727437304305e+307);
test_math_sin(2.081248027356333e+307);
test_math_sin("71X");
test_math_sin(1.051853001951741e+308);
test_math_sin(-451);
test_math_sin(1.1267550395943795e+308);
test_math_sin("DIHJUN0N5N");
test_math_sin(-97);
test_math_sin(-101);
test_math_sin("FOAJTJ6");
test_math_sin(4.875052943657021e+307);
test_math_sin("Y6HS5T93");
test_math_sin(3.561460280171318e+307);
test_math_sin("8JSML4NYZ");
test_math_sin(-431);
test_math_sin("3ZIKC9O");
test_math_sin(1.407992890852121e+308);
test_math_sin(4.450785855736822e+305);
test_math_sin("J6GZB");
test_math_sin("D81FJNFL8");
test_math_sin(-271);
test_math_sin(-81);
test_math_sin("KXVYAI1");
test_math_sin("V0EGATTMQP");
test_math_sin(-171);
test_math_sin("JYYPT");
test_math_sin(4.602200783849474e+307);
test_math_sin(1.69185456039566e+307);
test_math_sin("MFQI");
test_math_sin("BO7B04AI");
test_math_sin(4.543276780078342e+307);
test_math_sin(-407);
test_math_sin("N7EWSG");
test_math_sin(-433);
test_math_sin("DLAAYXSQUT");
test_math_sin("RC7G");
test_math_sin("OUC");
test_math_sin(5.476448483747892e+306);
test_math_sin(4.52387964758009e+306);
test_math_sin(6.686547140568017e+307);
test_math_sin("R6Z1141ADO");
test_math_sin(1.6999746790227558e+308);
test_math_sin("T08");
test_math_sin(1.6523807635260467e+308);
test_math_sin(6.900390940356637e+307);
test_math_sin(1.7321932473300671e+308);
test_math_sin("3HW2");
test_math_sin("2WAS9P");
test_math_sin(-187);
test_math_sin(1.7884873260776937e+308);
test_math_sin(-419);
test_math_sin(1.7545065239937645e+308);
test_math_sin(-157);
test_math_sin("S82YGG95");
test_math_sin(1.4161231436310563e+308);
test_math_sin("2HZ23X3KV");
test_math_sin(1.7684109044979295e+307);
test_math_sin(-577);
test_math_sin(1.3266428742118158e+308);
test_math_sin(-355);
test_math_sin(4.833822697780806e+307);
test_math_sin(-799);
test_math_sin(-677);
test_math_sin(-485);
test_math_sin("GM6OT9FP");
test_math_sin(6.055731949708088e+306);
test_math_sin(-41);
test_math_sin("0CO3WFNGC");
test_math_sin("DO4RV");
test_math_sin(-865);
test_math_sin("3SKX4P9ILA");
test_math_sin("OLU");
test_math_sin(8.721370742033237e+307);
test_math_sin(1.2509872630951008e+308);
test_math_sin(-975);
test_math_sin("1SVBB6C0CV");
test_math_sin(-213);
test_math_sin(5.924439516490708e+307);
test_math_sin(7.752062152932859e+307);
test_math_sin(1.1514029033668963e+308);
test_math_sin(1.7075748909176937e+308);
test_math_sin(-999);
test_math_sin(-605);
test_math_sin(4.801611288008875e+307);
test_math_sin("33K833RQ");
test_math_sin(-855);
test_math_sin(-945);
test_math_sin(5.883959368375301e+307);
test_math_sin("256CTRL1");
test_math_sin(-343);
test_math_sin(1.7822594437854601e+308);
test_math_sin("24TZ7U2ZTT");
test_math_sin("X64CWM0Z");
test_math_sin(1.0444370112913896e+308);
test_math_sin(1.3572364596878243e+308);
test_math_sin("Z0AJ4X06M8");
test_math_sin("V83WNWH5");
test_math_sin(4.076812395784192e+307);
test_math_sin("7I690A1M");
test_math_sin(-765);
test_math_sin(3.15070118265235e+307);
test_math_sin(-395);
test_math_sin(-195);
test_math_sin("AMJ27LB5F");
test_math_sin("T5X15M5");
test_math_sin("8QI");
test_math_sin(-259);
test_math_sin(5.692243083964832e+307);
test_math_sin(-379);
test_math_sin(-201);
test_math_sin(1.6218091312583347e+308);
test_math_sin("4F96QPM");
test_math_sin(-389);
test_math_sin(1.2795208635706387e+307);
test_math_sin("JXG");
test_math_sin("J7X9");
test_math_sin("MKU");
test_math_sin("K4I4BRM");
test_math_sin(-963);
test_math_sin("CXEW13NL");
test_math_sin(1.5672308977224608e+308);
test_math_sin("5PVWEJ");
test_math_sin("GR9QWRUV");
test_math_sin(1.060002736439341e+308);
test_math_sin(-827);
test_math_sin(7.842224071873738e+306);
test_math_sin(-663);
test_math_sin("886");
test_math_sin(3.519116978280858e+307);
test_math_sin("69YZJVC");
test_math_sin(1.5945258681407683e+308);
test_math_sin("ZWTB08IYA");
test_math_sin(1.3632781816856771e+308);
test_math_sin("KSJPWFC");
test_math_sin(1.1324618635583072e+308);
test_math_sin(6.137646879270665e+306);
test_math_sin("QECB3");
test_math_sin(4.3479814756606803e+307);
test_math_sin("HYG6N66");
test_math_sin("3CPSGIOH");
test_math_sin(1.1000855297129237e+308);
test_math_sin("H6BJ2");
test_math_sin("FH60QT164");
test_math_sin("RZWGGJWLN");
test_math_sin(9.90150347957212e+307);
test_math_sin(-819);
test_math_sin(-935);
test_math_sin(-727);
test_math_sin(1.0295943531733005e+308);
test_math_sin("FAACIHMD");
test_math_sin("VQD5Y4Q");
test_math_sin(1.1805967499805028e+307);
test_math_sin(3.8881386160313895e+307);
test_math_sin(3.1432365177618687e+306);
test_math_sin(2.502858411496997e+306);
test_math_sin("DIJ2");
test_math_sin(1.7274920411869695e+308);
test_math_sin(1.4328867674574628e+308);
test_math_sin("NMFCUG");
test_math_sin(-657);
test_math_sin("TOH8G8JNA");
test_math_sin(1.730338481631512e+307);
test_math_sin("QM9");
test_math_sin(7.197965843418809e+306);
test_math_sin(9.482826573551406e+307);
test_math_sin("3L3DR7");
test_math_sin("MB9LQ");
test_math_sin("53XQL");
test_math_sin("3UYRAEYM");
test_math_sin("SO0");
test_math_sin(6.673895891798964e+307);
test_math_sin(1.0488043016105103e+308);
test_math_sin(1.535576179929952e+308);
test_math_sin(-969);
test_math_sin("FS8U7HNYP");
test_math_sin(1.6034771876825039e+308);
test_math_sin("HH2E");
test_math_sin("5XD83QYJZI");
test_math_sin(-803);
test_math_sin(7.479866184034604e+307);
test_math_sin("SHW7OMIUB");
test_math_sin(7.529294479467044e+307);
test_math_sin(-61);
test_math_sin(1.6918760900978392e+307);
test_math_sin("9NH8F5X901");
test_math_sin("FINJOS7W5");
test_math_sin(2.2284426863210874e+307);
test_math_sin("W826");
test_math_sin(-653);
test_math_sin(-111);
test_math_sin(9.992376801938508e+307);
test_math_sin(1.685505868458462e+308);
test_math_sin("L3KBVOZ");
test_math_sin(-79);
test_math_sin(-159);
test_math_sin("ES68");
test_math_sin("SKWJ");
test_math_sin("Z2CEX");
test_math_sin("9B4TX1P");
test_math_sin("VVAENH");
test_math_sin(-525);
test_math_sin("6VJV");
test_math_sin("QLJWW1Y2TK");
test_math_sin(1.1912388581873405e+308);
test_math_sin(6.745569178538529e+307);
test_math_sin(9.312039211140947e+307);
test_math_sin("HGTFAFO");
test_math_sin("52EO4");
test_math_sin("UR6HLLE");
test_math_sin("OFRMKA");
test_math_sin(-513);
test_math_sin(-759);
test_math_sin("1IYSP7V");
test_math_sin(5.559865037799133e+307);
test_math_sin("4J4GA");
test_math_sin("M5JNJR");
test_math_sin("14VFGH");
test_math_sin("8QOIPRB7");
test_math_sin("XIZL8");
test_math_sin("8PP95S");
test_math_sin(-647);
test_math_sin("XIDR6D");
test_math_sin(5.92381355230302e+307);
test_math_sin("ZMLPWQ1W00");
test_math_sin(-387);
test_math_sin(8.588511074787605e+307);
test_math_sin(-951);
test_math_sin(-573);
test_math_sin(1.6434090400199738e+308);
test_math_sin(-723);
test_math_sin("PO5PP6QS");
test_math_sin(1.7089001796551867e+308);
test_math_sin(2.4261387442315683e+307);
test_math_sin("GSJ");
test_math_sin(-441);
test_math_sin(-299);
test_math_sin("XX0LN");
test_math_sin("Z1AFGERX");
test_math_sin(504);
test_math_sin(8.387065156543842e+307);
test_math_sin(3.8043875663818296e+305);
test_math_sin(1.3801503339946324e+308);
test_math_sin(-263);
test_math_sin("29JXHKX");
test_math_sin(-591);
test_math_sin("6HY3M");
test_math_sin(7.15663047409719e+307);
test_math_sin(1.7497895769362286e+307);
test_math_sin(1.1804502307440553e+308);
test_math_sin(1.7649184720079374e+308);
test_math_sin(1.7472467712504702e+308);
test_math_sin(-849);
test_math_sin("8VCKH33");
test_math_sin("CZR");
test_math_sin(-607);
test_math_sin(1.539781818280129e+308);
test_math_sin("8NSFZOM");
test_math_sin(-147);
test_math_sin(6.33089806013481e+307);
test_math_sin(1.3518008461846998e+307);
test_math_sin("L0HHH0");
test_math_sin(-923);
test_math_sin(8.695139062131975e+306);
test_math_sin(-779);
test_math_sin(1.2259037966511068e+308);
test_math_sin(1.0275792035738565e+308);
test_math_sin("PUZ4EA9VLX");
test_math_sin("DKDI");
test_math_sin(6.089848746529665e+307);
test_math_sin(-829);
test_math_sin(5.304344886308417e+307);
test_math_sin(-237);
test_math_sin("MTYJG2O5H");
test_math_sin(9.031668227733686e+307);
test_math_sin(1.6192482506547728e+308);
test_math_sin(9.248972796045098e+307);
test_math_sin(-277);
test_math_sin(1.5640050813478142e+308);
test_math_sin("LXBFNFK");
test_math_sin(1.5009568708489063e+308);
test_math_sin("P22E");
test_math_sin(-283);
test_math_sin("6UNZ3T45");
test_math_sin("AH4PASJ9LM");
test_math_sin("7CFA");
test_math_sin("P0GC");
test_math_sin("Z7JFI6NUTT");
test_math_sin("2ZSA");
test_math_sin("EAFT3WG");
test_math_sin(-893);
test_math_sin("SYIXY");
test_math_sin("IM6K5PU");
test_math_sin("NVAS3S");
test_math_sin(6.977689424307741e+307);
test_math_sin(1.3662286833444098e+308);
test_math_sin("YVUD");
test_math_sin(1.0059475489655804e+308);
test_math_sin("DJ8RWGNQ");
test_math_sin(-589);
test_math_sin(3.443242513526131e+307);
test_math_sin(-377);
test_math_sin(1.0554829599169349e+307);
test_math_sin(928);
test_math_sin("4FYMLXAT");
test_math_sin(1.6044937573424518e+308);
test_math_sin("418C");
test_math_sin("687");
test_math_sin(1.010301129292276e+308);
test_math_sin(6.625268244699282e+307);
test_math_sin(1.7522923688561485e+308);
test_math_sin(1.2343206552535309e+308);
test_math_sin(-229);
test_math_sin(-655);
test_math_sin(3.1885395182532315e+307);
test_math_sin(8.159363996818324e+306);
test_math_sin(-245);
test_math_sin(1.1978297065344649e+308);
test_math_sin("MZP");
test_math_sin(3.9905662354449047e+307);
test_math_sin(-191);
test_math_sin(3.214437021914345e+307);
test_math_sin(1.4688851281275096e+308);
test_math_sin(-499);
test_math_sin("6LTA6SO");
test_math_sin(4.012973964294788e+307);
test_math_sin(-257);
test_math_sin("R6EVGQ2KS3");
test_math_sin("6H2DFSWFPQ");
test_math_sin("8FH");
test_math_sin("YC530ES1H0");
test_math_sin("QNXM5H9");
test_math_sin(1.5766850340218998e+308);
test_math_sin(1.7322050293996663e+308);
test_math_sin(2.011286644564488e+306);
test_math_sin(-333);
test_math_sin("XCB3I");
test_math_sin("5OS4ZM30S");
test_math_sin(4.775476176710871e+307);
test_math_sin(-539);
test_math_sin(8.185439933728727e+307);
test_math_sin("8MR3G4");
test_math_sin("S1KX6Q9S");
test_math_sin(8.065821230250948e+306);
test_math_sin("WE2D1B");
test_math_sin("AHPWN");
test_math_sin("J2O9SR1F");
test_math_sin("BU1B655RY0");
test_math_sin("LD98600U05");
test_math_sin(1.1507639566016867e+308);
test_math_sin(1.3204467241445596e+308);
test_math_sin("0I3EX");
test_math_sin(7.874671803935113e+307);
test_math_sin(-967);
test_math_sin(-359);
test_math_sin(-955);
test_math_sin(7.421198989924145e+307);
test_math_sin("CGUWCO");
test_math_sin(1.0087958868271986e+308);
test_math_sin(1.7704901984381618e+307);
test_math_sin(-731);
test_math_sin(1.2010522128727838e+308);
test_math_sin(-337);
test_math_sin("AOYFBPGH3");
test_math_sin("MQSE");
test_math_sin(3.1333801832194696e+307);
test_math_sin("YHULYV");
test_math_sin(-985);
test_math_sin(-815);
test_math_sin(1.5897161181019336e+308);
test_math_sin(1.7805455432143477e+308);
test_math_sin(1.9589558626130083e+307);
test_math_sin(-399);
test_math_sin(-965);
test_math_sin("FZQM9JAV06");
test_math_sin("TAQ6M12");
test_math_sin(4.492285109579492e+307);
test_math_sin(-555);
test_math_sin(9.95782403564983e+307);
test_math_sin(-521);
test_math_sin(1.4174439755070471e+308);
test_math_sin("D4621DJREM");
test_math_sin(-295);
test_math_sin("A1XSOV");
test_math_sin(8.115571273079824e+307);
test_math_sin(-403);
test_math_sin(9.62420315434687e+307);
test_math_sin(-707);
test_math_sin("NYM");
test_math_sin(-269);
test_math_sin("BJFANE2");
test_math_sin(1.5246827986591425e+308);
test_math_sin(-907);
test_math_sin(5.158863542441311e+307);
test_math_sin("9ZT7OP3");
test_math_sin(1.0067577135164909e+308);
test_math_sin(1.477473272864872e+308);
test_math_sin("F34FL2");
test_math_sin(-551);
test_math_sin("AON92");
test_math_sin(-543);
test_math_sin("2ZS7S2WZ");
test_math_sin(1.1461017963710016e+308);
test_math_sin(-783);
test_math_sin("JFXNSAVTW6");
test_math_sin(2.6046991568195856e+307);
test_math_sin(1.3693602706088643e+308);
test_math_sin("Y1AIFJ");
test_math_sin(1.2938147353760632e+308);
test_math_sin(-927);
test_math_sin("9T1POZ0C3");
test_math_sin("LZDDYRM");
test_math_sin("4AZ3");
test_math_sin("WQ281");
test_math_sin(1.4751167327254675e+308);
test_math_sin("CJPTBIKN2");
test_math_sin(3.688496744093918e+307);
test_math_sin(-807);
test_math_sin("OVRQ");
test_math_sin(-141);
test_math_sin("URMM98S4CF");
test_math_sin("4166AJCKIY");
test_math_sin(-623);
test_math_sin(4.635382803401901e+307);
test_math_sin(1.4176143786777225e+308);
test_math_sin(-537);
test_math_sin("LW8CC");
test_math_sin("79VN");
test_math_sin("OZB43");
test_math_sin(1.7251679014382443e+308);
test_math_sin("1AMVIYT25S");
test_math_sin("KYC7");
test_math_sin("W94YM");
test_math_sin(1.2031735196325679e+308);
test_math_sin(2.7888111575162558e+306);
test_math_sin(7.875081813833884e+307);
test_math_sin(1.4660186123566472e+308);
test_math_sin("94IGWAC");
test_math_sin("RFVQCW");
test_math_sin(1.5616989478562236e+308);
test_math_sin(1.5479015773271668e+308);
test_math_sin(-627);
test_math_sin(-757);
test_math_sin(4.298252394969277e+307);
test_math_sin("QIVR672");
test_math_sin(-397);
test_math_sin(5.586619120931762e+307);
test_math_sin(-813);
test_math_sin(-95);
test_math_sin(1.6722121520693383e+308);
test_math_sin(-455);
test_math_sin(-327);
test_math_sin(7.542874949224063e+307);
test_math_sin(8.227310400433275e+307);
test_math_sin(-363);
test_math_sin(-961);
test_math_sin(7.79209077115266e+307);
test_math_sin("HK6KFC514");
test_math_sin("DLD1H");
test_math_sin("JKN35P4");
test_math_sin(9.005210069028653e+307);
test_math_sin("TN1CXU");
test_math_sin("BFMCB");
test_math_sin(-697);
test_math_sin("E0P5L");
test_math_sin("VR9BVP");
test_math_sin(3.5770872884026044e+307);
test_math_sin(1.2826648138675314e+308);
test_math_sin("FL0IK");
test_math_sin(5.485691034644028e+307);
test_math_sin("U5JFLB");
test_math_sin("Z7IN");
test_math_sin(-561);
test_math_sin("ZNE7VM3");
test_math_sin(1.1882556816362572e+308);
test_math_sin("LYDKMM");
test_math_sin("PJPY");
test_math_sin("T414FN9FP3");
test_math_sin("SUIG");
test_math_sin(9.755109300708901e+307);
test_math_sin("8RQDZNF6");
test_math_sin(8.457682766660688e+307);
test_math_sin(1.0805606336302998e+308);
test_math_sin(-751);
test_math_sin("YF8Z");
test_math_sin(1.6325824800699837e+308);
test_math_sin("7WEVLJJ");
test_math_sin("N9W0");
test_math_sin(-181);
test_math_sin(6.475994167501258e+307);
test_math_sin(2.0069100102738015e+307);
test_math_sin(-489);
test_math_sin(6.238444254231938e+307);
test_math_sin(7.228062231783205e+307);
test_math_sin(1.2359548027316925e+308);
test_math_sin(8.484827922087393e+307);
test_math_sin(7.54946497289841e+307);
test_math_sin(3.779321999092655e+306);
test_math_sin("OPZLAPL");
test_math_sin(1.7319205915898169e+308);
test_math_sin(5.721999348958803e+307);
test_math_sin("AEWZC4W");
test_math_sin(8.265362981474587e+306);
test_math_sin("8SW1V");
test_math_sin(-437);
test_math_sin("6NOY1");
test_math_sin(-617);
test_math_sin(1.8334376355730077e+307);
test_math_sin("PZSYQ1TGM");
test_math_sin(3.7394476882919185e+306);
test_math_sin("Q5OP");
test_math_sin("OLAH");
test_math_sin("VYAVY");
test_math_sin("9G0");
test_math_sin(1.1047711723332103e+308);
test_math_sin(1.7350451451209805e+308);
test_math_sin(1.640207971428871e+308);
test_math_sin("XBH");
test_math_sin(3.513842127616084e+307);
test_math_sin(7.431640160133485e+307);
test_math_sin("UOGFJQT");
test_math_sin(1.4425413033777823e+308);
test_math_sin("ZNHVF");
test_math_sin("ITUMM");
test_math_sin("XB2FJJQ");
test_math_sin(1.394755256408411e+307);
test_math_sin(1.7832527083679858e+308);
test_math_sin(2.332946272882275e+307);
test_math_sin(-461);
test_math_sin("AUZ5VVWQCC");
test_math_sin(1.7177424384938712e+308);
test_math_sin(7.014177891951978e+307);
test_math_sin(3.15253095546833e+307);
test_math_sin(-209);
test_math_sin(2.5354834922157e+307);
test_math_sin("YII8JTBL");
test_math_sin(6.149703526248632e+306);
test_math_sin(9.91191607300757e+307);
test_math_sin(1.1082380601221872e+308);
test_math_sin(-689);
test_math_sin(-993);
test_math_sin("TYM0Z8EMA");
test_math_sin(7.801240747923632e+306);
test_math_sin("H2QX74B741");
test_math_sin(8.086492781360464e+307);
test_math_sin(6.210616913752912e+307);
test_math_sin("V0A3GYU");
test_math_sin(8.860352763171118e+307);
test_math_sin("32P");
test_math_sin("OIZ8Z");
test_math_sin(1.238152476718548e+308);
test_math_sin("FWF3");
test_math_sin("I32G12H");
test_math_sin("IG4D6J7G3T");
test_math_sin(-445);
test_math_sin("39SU6K");
test_math_sin(3.8755522996745764e+306);
test_math_sin("UPAD4U");
test_math_sin(1.0493656598774585e+308);
test_math_sin(3.40206860292712e+307);
test_math_sin(3.000079554038105e+307);
test_math_sin(-645);
test_math_sin("1EM8ZE");
test_math_sin("HST");
test_math_sin("JHK0ZE");
test_math_sin("W85272C1WT");
test_math_sin(1.2745661440872716e+308);
test_math_sin(5.662781595780462e+307);
test_math_sin("WBIAR");
test_math_sin(3.837568377542133e+307);
test_math_sin("D3X");
test_math_sin("TUJJLYQ");
test_math_sin("XA212REG89");
test_math_sin(1.5071014075502305e+308);
test_math_sin("A9V8FK7Y");
test_math_sin("5DUSX4L7BO");
test_math_sin(1.4690487043108337e+308);
test_math_sin("Y4HEU1");
test_math_sin("D54WZ8");
test_math_sin("TOUQYH1CD");
test_math_sin(3.5006745857319413e+307);
test_math_sin("C8F");
test_math_sin(1.450293501578233e+308);
test_math_sin("05AN6O9MY");
test_math_sin(1.7754992255481816e+308);
test_math_sin("2K4IDJF");
test_math_sin(-703);
test_math_sin(-949);
test_math_sin(9.345031591052868e+307);
test_math_sin(1.784426332327087e+308);
test_math_sin("HCUSPY");
test_math_sin(1.6194649400476262e+308);
test_math_sin("QNJRBWUL5A");
test_math_sin(-293);
test_math_sin("S2HO9");
test_math_sin("O28ZWILPM");
test_math_sin("GWO1");
test_math_sin(1.342264737577813e+308);
test_math_sin(9.698064058389806e+307);
test_math_sin(1.3448971176600344e+308);
test_math_sin(5.567959349536951e+307);
test_math_sin("SW8BZG9V2Y");
test_math_sin(6.100868339116642e+307);
test_math_sin(5.26382926386189e+307);
test_math_sin("40HH");
test_math_sin(1.7671856002698605e+308);
test_math_sin(-863);
test_math_sin(9.53664723061923e+307);
test_math_sin(-859);
test_math_sin("BLGL2RZ8");
test_math_sin(-415);
test_math_sin(1.4432836784367528e+308);
test_math_sin("FKIWO");
test_math_sin(160);
test_math_sin(-19);
test_math_sin(4.2281815650950205e+307);
test_math_sin("Y32IXNSYV");
test_math_sin(1.7521154945797523e+308);