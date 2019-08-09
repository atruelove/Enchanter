/*
* This file is automatically generated by Swami
*
* 2019-08-09 12:17:06.814681
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
function test_math_sign(x){
	if (Object.is( x,NaN )){
		var output = Math.sign(x);
		new TestCase("math_sign", "math_sign", NaN, output);
		test();
		return;
		}
	if (( x === - 0 )){
		var output = Math.sign(x);
		new TestCase("math_sign", "math_sign", - 0, output);
		test();
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.sign(x);
		new TestCase("math_sign", "math_sign", + 0, output);
		test();
		return;
		}
}



/*TESTS GENERATED AUTOMATICALLY*/
test_math_sign(+0);
test_math_sign(false);
test_math_sign(-529);
test_math_sign(true);
test_math_sign(/[^.]+/);
test_math_sign(/yes[^]*day/);
test_math_sign(/(\w+)\s(\w+)/);
test_math_sign(-247);
test_math_sign(undefined);
test_math_sign(-915);
test_math_sign(3.436174595834481e+307);
test_math_sign(7.592480041520949e+307);
test_math_sign(-839);
test_math_sign(-543);
test_math_sign("D9G");
test_math_sign(-751);
test_math_sign("L29AVJ");
test_math_sign(4.2988124278373473e+307);
test_math_sign(-819);
test_math_sign(-899);
test_math_sign(1.141034666936755e+308);
test_math_sign(1.3488401285420758e+308);
test_math_sign(-315);
test_math_sign(-217);
test_math_sign(Infinity);
test_math_sign("OJD23KSML");
test_math_sign(1.3551768400101974e+307);
test_math_sign(NaN);
test_math_sign("Z5XDI3CCXW");
test_math_sign(8.18563472878865e+307);
test_math_sign("24VFY");
test_math_sign("YYLU6RDW7");
test_math_sign("31SM4TX");
test_math_sign(/ab+c/);
test_math_sign("ZSZWIDI5");
test_math_sign(1.0925253815993013e+308);
test_math_sign(-567);
test_math_sign("R7KS");
test_math_sign("SM78M");
test_math_sign(1.5718980226326583e+308);
test_math_sign(-303);
test_math_sign(-0);
test_math_sign(/\r\n|\r|\n/);
test_math_sign(/yes.*day/);
test_math_sign("EFX");
test_math_sign(1.0244343537944872e+308);
test_math_sign(7.46098021491726e+306);
test_math_sign(/foo/g);
test_math_sign(1.4688302458311453e+308);
test_math_sign("40K66T1");
test_math_sign(-283);
test_math_sign("TWLCY");
test_math_sign(9.565237659920691e+307);
test_math_sign(4.920796684937453e+307);
test_math_sign(3.8037115175722967e+307);
test_math_sign(1.497538640517551e+308);
test_math_sign(2.1984860745396584e+307);
test_math_sign("SGN7L5");
test_math_sign(-535);
test_math_sign(1.7124343588559023e+308);
test_math_sign(1.3280642623910402e+308);
test_math_sign(-967);
test_math_sign(-185);
test_math_sign(1.2653133314878575e+308);
test_math_sign(-557);
test_math_sign(6.575241269727727e+307);
test_math_sign(1.1536310148622262e+308);
test_math_sign(null);
test_math_sign("KMPK");
test_math_sign(8.439083062731225e+307);
test_math_sign(1.6298187112851437e+308);
test_math_sign(-793);
test_math_sign(1.243541671929059e+308);
test_math_sign(9.143432583996883e+306);
test_math_sign(-183);
test_math_sign("3WY8");
test_math_sign(2.785704624692935e+307);
test_math_sign(7.209514472622991e+307);
test_math_sign(1.5475080637691936e+308);
test_math_sign(1.2768273217826746e+308);
test_math_sign("Z4B");
test_math_sign(-559);
test_math_sign("YW6G3");
test_math_sign(1.651465505637748e+308);
test_math_sign("NK88GDNN86");
test_math_sign("DKUQG0DAJ0");
test_math_sign(-55);
test_math_sign("3N6");
test_math_sign("NV50Z");
test_math_sign(1.4635934087561166e+308);
test_math_sign("RHF");
test_math_sign(-683);
test_math_sign(3.7291527826067996e+307);
test_math_sign("KIS");
test_math_sign(-209);
test_math_sign(1.1170950046680754e+308);
test_math_sign(1.0794324517918976e+308);
test_math_sign(-83);
test_math_sign(-377);
test_math_sign(4.599945689883471e+307);
test_math_sign(-171);
test_math_sign(6.999968274686373e+307);
test_math_sign("42DIW");
test_math_sign(-995);
test_math_sign(-223);
test_math_sign(4.021965596447344e+307);
test_math_sign(-823);
test_math_sign("325TD2U7X3");
test_math_sign(1.5222766401907405e+308);
test_math_sign(7.875436742371277e+307);
test_math_sign("5DCRJ");
test_math_sign("7A1U");
test_math_sign("58XGW");
test_math_sign(-963);
test_math_sign("O6I");
test_math_sign(2.0901996992408685e+307);
test_math_sign(-549);
test_math_sign("PSO6IBI9X");
test_math_sign("K7IFP9II");
test_math_sign("2AMEOWC3V7");
test_math_sign("3SPD");
test_math_sign("RHKD");
test_math_sign(1.6183147391094126e+308);
test_math_sign(-225);
test_math_sign("1PF");
test_math_sign(/[\u0400-\u04FF]+/g);
test_math_sign(1.7117243995953381e+308);
test_math_sign("GBR5NG");
test_math_sign(-675);
test_math_sign("I3HO93G");
test_math_sign(1.1885562069822332e+307);
test_math_sign(-167);
test_math_sign("B7HLMC");
test_math_sign("VSNMUU");
test_math_sign(1.3711510096958821e+308);
test_math_sign(7.170136255827654e+307);
test_math_sign(4.306972058801763e+305);
test_math_sign("7Q4R47");
test_math_sign(7.71128784596593e+307);
test_math_sign(-319);
test_math_sign(-811);
test_math_sign("RDPQSQ");
test_math_sign("FNZY");
test_math_sign("43R");
test_math_sign(-637);
test_math_sign("1SHU");
test_math_sign(-269);
test_math_sign("DUJVFA");
test_math_sign(1.3916882293426821e+308);
test_math_sign(-925);
test_math_sign(-699);
test_math_sign("NGM");
test_math_sign(1.2434484638025462e+308);
test_math_sign("1KN7X");
test_math_sign("ZDIKRYR9B");
test_math_sign("1J0LWJXQJU");
test_math_sign("IBC");
test_math_sign(-495);
test_math_sign(-373);
test_math_sign("P99WQROT3F");
test_math_sign(1.5173521017143633e+307);
test_math_sign(-745);
test_math_sign(-887);
test_math_sign(-187);
test_math_sign(7.748089162852323e+307);
test_math_sign("4NPK0J2BYZ");
test_math_sign("9742B4");
test_math_sign(5.878504073771411e+307);
test_math_sign(-105);
test_math_sign("6SXJ4");
test_math_sign("4K1");
test_math_sign(-87);
test_math_sign(-725);
test_math_sign("UJPKR3");
test_math_sign(7.535053499116805e+307);
test_math_sign("XYK2UX6X");
test_math_sign(1.4393540486843651e+308);
test_math_sign("A0T9L19");
test_math_sign(1.202633354478276e+308);
test_math_sign(3.8234560901483147e+307);
test_math_sign(1.7260628509181263e+308);
test_math_sign("MTX8DMBK");
test_math_sign(-275);
test_math_sign(2.2241767067574415e+307);
test_math_sign("WEJXT77N");
test_math_sign(6.206673279403031e+307);
test_math_sign("0J6SD4AP");
test_math_sign(1.4398585019953506e+308);
test_math_sign("DXSUXK0SK");
test_math_sign("16NBOJZK3H");
test_math_sign(-505);
test_math_sign(-655);
test_math_sign("AHF9MK0J");
test_math_sign("A16CJH9");
test_math_sign(9.60445111764348e+307);
test_math_sign(4.0138442189581337e+307);
test_math_sign(7.517445526070008e+306);
test_math_sign(1.2598322067969397e+308);
test_math_sign(-457);
test_math_sign(7.7655383919499635e+307);
test_math_sign(-693);
test_math_sign("KR2L60FB2");
test_math_sign(2.435116911867311e+307);
test_math_sign("QULUN3");
test_math_sign("MJ84");
test_math_sign("KQHC49K4GQ");
test_math_sign(-533);
test_math_sign("9XSXA1");
test_math_sign("MK2C8");
test_math_sign(1.6789592918612126e+308);
test_math_sign(-15);
test_math_sign(4.53306250899066e+307);
test_math_sign("SE6VMICW6S");
test_math_sign(1.651597438588297e+308);
test_math_sign("VLTR0");
test_math_sign(-331);
test_math_sign("941EP6V");
test_math_sign("EJHQF");
test_math_sign("X4ZYNS");
test_math_sign(-991);
test_math_sign("1FN7ZIMXZ");
test_math_sign("GPAYRGAWWI");
test_math_sign(1.5965159199197602e+308);
test_math_sign(-103);
test_math_sign("2AMMN62WF9");
test_math_sign(-489);
test_math_sign(1.49962770446152e+308);
test_math_sign(5.177152145333082e+307);
test_math_sign("2PH");
test_math_sign(-155);
test_math_sign("MDYT");
test_math_sign(7.572801668210777e+307);
test_math_sign(1.0179751604379564e+308);
test_math_sign("H3JDGAW");
test_math_sign(9.667195294691719e+307);
test_math_sign(1.5484619156386506e+308);
test_math_sign("C9AOSIC");
test_math_sign("2OKAMHRP1");
test_math_sign(8.859973569410689e+307);
test_math_sign("P47U9Q7P");
test_math_sign(-939);
test_math_sign("BS5M15");
test_math_sign("ZWN9PKP");
test_math_sign(-923);
test_math_sign(-935);
test_math_sign(-771);
test_math_sign(-253);
test_math_sign("4YQ");
test_math_sign("2F7B");
test_math_sign(1.588213732896534e+307);
test_math_sign(9.878161298392353e+307);
test_math_sign(-837);
test_math_sign(1.2845861522048583e+308);
test_math_sign(1.0921226119962528e+308);
test_math_sign(-575);
test_math_sign(-47);
test_math_sign(1.4736919764481615e+308);
test_math_sign("QUFFMM7W");
test_math_sign(-285);
test_math_sign("YZRXOO15WB");
test_math_sign("8SMUS");
test_math_sign(-795);
test_math_sign(-127);
test_math_sign(-359);
test_math_sign("7WZ3EKV2R");
test_math_sign("TX6Z");
test_math_sign(1.0864617611533236e+308);
test_math_sign(5.15911629967925e+307);
test_math_sign("S2PJC");
test_math_sign(-813);
test_math_sign(-867);
test_math_sign("AYZ2");
test_math_sign(-539);
test_math_sign("7IX1EBF");
test_math_sign("UTNZLA");
test_math_sign(1.5980445453947268e+308);
test_math_sign("OXQT");
test_math_sign(3.302780254862223e+306);
test_math_sign("32Q");
test_math_sign(-381);
test_math_sign("EDQW");
test_math_sign(3.32019892323409e+307);
test_math_sign(1.1817142044549888e+308);
test_math_sign(1.6112919553764642e+308);
test_math_sign("XRAOO");
test_math_sign("LFEPV9UK9");
test_math_sign("1S40OP");
test_math_sign(-531);
test_math_sign(-351);
test_math_sign(5.482931135071777e+307);
test_math_sign(1.4533338870617702e+308);
test_math_sign(-865);
test_math_sign(5.472937410980729e+307);
test_math_sign(-689);
test_math_sign(6.028487596888526e+307);
test_math_sign(-231);
test_math_sign("Y43");
test_math_sign("F16JPOO8");
test_math_sign("VH7V3QZ8NY");
test_math_sign(-189);
test_math_sign("UKNR");
test_math_sign(4.95701503191002e+307);
test_math_sign(1.045668928179321e+308);
test_math_sign("MO08B");
test_math_sign(-697);
test_math_sign("HOU9CKJJ");
test_math_sign(-99);
test_math_sign(-481);
test_math_sign("11H");
test_math_sign(-151);
test_math_sign(-437);
test_math_sign(5.307580360844343e+307);
test_math_sign("27UNH1YNE");
test_math_sign(-931);
test_math_sign(1.3531763695254582e+308);
test_math_sign("HUV5DT");
test_math_sign(-831);
test_math_sign(-79);
test_math_sign(3.289664413945863e+307);
test_math_sign(-131);
test_math_sign(-981);
test_math_sign("GGOXS1B9G");
test_math_sign(9.84394223426602e+307);
test_math_sign(1.3061455774775935e+308);
test_math_sign("B4MAKPG0P");
test_math_sign(6.876877487912322e+307);
test_math_sign("5QBZI3");
test_math_sign(1.469967644614801e+308);
test_math_sign("N40F3X");
test_math_sign(-341);
test_math_sign(1.2888712739140299e+308);
test_math_sign(-85);
test_math_sign("W9CZ0L");
test_math_sign("NXFZ2TMY4");
test_math_sign("K76");
test_math_sign("CM3");
test_math_sign(-415);
test_math_sign(-817);
test_math_sign("ZDBTZY04Q8");
test_math_sign("8N811ASWSS");
test_math_sign("4ZEH33SS3J");
test_math_sign(6.552185554191045e+307);
test_math_sign(-843);
test_math_sign(1.2967503741698088e+308);
test_math_sign("D2W");
test_math_sign("J2U6IXAT0");
test_math_sign(-177);
test_math_sign(5.347031786700487e+307);
test_math_sign("OVRQ");
test_math_sign(6.20786288723814e+307);
test_math_sign(7.044912459364946e+307);
test_math_sign("T6UGXW");
test_math_sign("5AG7F");
test_math_sign(1.1601735983049871e+308);
test_math_sign("ICZA");
test_math_sign("WOJHHZ");
test_math_sign("OPXJPS647U");
test_math_sign(1.5607394284807096e+308);
test_math_sign("F32SVNU");
test_math_sign("X067QP");
test_math_sign(7.975647579401584e+307);
test_math_sign("7310IF");
test_math_sign(-137);
test_math_sign(6.75899735872597e+307);
test_math_sign("IT5B");
test_math_sign("L5H");
test_math_sign(8.012928630791132e+307);
test_math_sign("LC25Q");
test_math_sign(-919);
test_math_sign(-261);
test_math_sign(7.768843466895768e+307);
test_math_sign("HTQ0B");
test_math_sign(1.5968902838858248e+308);
test_math_sign("6HHX3649S");
test_math_sign(-993);
test_math_sign(6.85497996737573e+307);
test_math_sign(3.83514053004236e+307);
test_math_sign(-507);
test_math_sign("QEN9I9VWKJ");
test_math_sign(7.982355783437732e+307);
test_math_sign(2.0194343247239506e+307);
test_math_sign(-845);
test_math_sign("XVEQBGM");
test_math_sign(-77);
test_math_sign(5.514056954532573e+307);
test_math_sign(-723);
test_math_sign("IGDAP7VQQ9");
test_math_sign(1.7066973689584978e+308);
test_math_sign(1.4300925429618153e+308);
test_math_sign("1Z76XO2");
test_math_sign(6.344415935186165e+307);
test_math_sign("PW1P7F");
test_math_sign("F1MD5F");
test_math_sign("J8M68BLGD");
test_math_sign("3KTNECV2");
test_math_sign(-953);
test_math_sign("AD3");
test_math_sign(-933);
test_math_sign(9.972030980773405e+307);
test_math_sign(1.2077730727878894e+308);
test_math_sign("8ML8OPR");
test_math_sign(1.4914352435491282e+308);
test_math_sign(4.606172094685277e+307);
test_math_sign(-367);
test_math_sign(-301);
test_math_sign(1.494951451290648e+308);
test_math_sign(-681);
test_math_sign("V3N");
test_math_sign(4.97884730260933e+306);
test_math_sign("6GVQ");
test_math_sign(-425);
test_math_sign("ES01G09LTN");
test_math_sign(-947);
test_math_sign("MTZUK");
test_math_sign(2.3192363413279835e+307);
test_math_sign("FRWRPONJ");
test_math_sign("ETNN");
test_math_sign(4.270731638093863e+307);
test_math_sign("FO0495CHAB");
test_math_sign(1.4505339181624984e+308);
test_math_sign(-787);
test_math_sign("O8UZDGN0A");
test_math_sign("4K2ZJOHAO");
test_math_sign("HXB24R1");
test_math_sign(-809);
test_math_sign(1.0675850016558739e+308);
test_math_sign(7.857857130767381e+307);
test_math_sign("4S05LC7");
test_math_sign(-647);
test_math_sign("1JARD5PL");
test_math_sign("FH1B");
test_math_sign(1.080603246622008e+308);
test_math_sign(2.603280981332199e+307);
test_math_sign(-999);
test_math_sign(-297);
test_math_sign(1.4805896122797908e+308);
test_math_sign("IZ075XK2OA");
test_math_sign("0V6IEAD87");
test_math_sign(1.2144949665348126e+308);
test_math_sign(6.381134419882616e+307);
test_math_sign(4.3236270576550785e+307);
test_math_sign("J95JTT1");
test_math_sign(9.42871504719236e+306);
test_math_sign("XUX");
test_math_sign(-213);
test_math_sign(2.9978383249365817e+307);
test_math_sign(1.2373599605185434e+308);
test_math_sign(-67);
test_math_sign(3.8812142095832896e+307);
test_math_sign("TW8BEHBFDX");
test_math_sign("8GV");
test_math_sign(-775);
test_math_sign("OG7I3FH");
test_math_sign(-221);
test_math_sign(1.7890128389556187e+308);
test_math_sign(-707);
test_math_sign("ZJQPT");
test_math_sign(4.253541820141105e+307);
test_math_sign(2.979686154881349e+307);
test_math_sign(-279);
test_math_sign("ML8S7DMRF");
test_math_sign(1.4473759808611164e+308);
test_math_sign(4.945344430253922e+307);
test_math_sign("431X");
test_math_sign("LI12");
test_math_sign(-997);
test_math_sign(1.2821338656894614e+308);
test_math_sign(-325);
test_math_sign(82);
test_math_sign(1.3675030610194867e+308);
test_math_sign(3.997250295035513e+307);
test_math_sign(2.4562015475936964e+306);
test_math_sign(-25);
test_math_sign("PTWWA");
test_math_sign(3.0524703597751967e+307);
test_math_sign(-607);
test_math_sign("9272RTUL");
test_math_sign(-913);
test_math_sign("FWCHD2F");
test_math_sign(8.185845499134029e+306);
test_math_sign(6.54217568003714e+307);
test_math_sign(1.194689368095756e+307);
test_math_sign(5.939358587246769e+307);
test_math_sign(3.4108585692878986e+307);
test_math_sign(-385);
test_math_sign(-827);
test_math_sign("EYL1ZV");
test_math_sign("CFKWHW");
test_math_sign("TD34N1Z");
test_math_sign("UMB4RU96");
test_math_sign(-71);
test_math_sign(-207);
test_math_sign("AO233X");
test_math_sign(-443);
test_math_sign(-563);
test_math_sign("IBCU3TUI");
test_math_sign("M725P0");
test_math_sign(-219);
test_math_sign(1.6738303785445711e+308);
test_math_sign(-639);
test_math_sign(1.9592480972600863e+307);
test_math_sign(-755);
test_math_sign("FMWKQZLJXY");
test_math_sign(1.2205611642782742e+308);
test_math_sign(-805);
test_math_sign(-439);
test_math_sign("L9GFIJJFYE");
test_math_sign(-905);
test_math_sign(8.756148676333233e+307);
test_math_sign(1.8546865929393346e+307);
test_math_sign(5.695361039138627e+307);
test_math_sign("7XJF2H");
test_math_sign("9VAKSTCFS");
test_math_sign(1.5546269033518633e+308);
test_math_sign("7N5CQPQJTI");
test_math_sign(-447);
test_math_sign(2.569866458118445e+307);
test_math_sign(-847);
test_math_sign("Q8L0BWRMD");
test_math_sign(1.0184350637818171e+308);
test_math_sign(1.0637653147635602e+308);
test_math_sign("UNXQGRP");
test_math_sign(-643);
test_math_sign(1.2698696551970886e+308);
test_math_sign("7W9BKNOEZE");
test_math_sign(1.327596400233655e+308);
test_math_sign("AC5C6TM");
test_math_sign(2.52109585082622e+307);
test_math_sign(-701);
test_math_sign("1NOS1M2");
test_math_sign(1.4009559990499366e+307);
test_math_sign(1.3339713087922165e+308);
test_math_sign("55GO7R66C");
test_math_sign(-203);
test_math_sign(1.1002008667377119e+308);
test_math_sign("ZLA5XPN");
test_math_sign("FGNY0L");
test_math_sign("YUWS5");
test_math_sign("BCHPG");
test_math_sign("XW1IA1268");
test_math_sign("APTPD2IO2");
test_math_sign(-513);
test_math_sign(1.754354872806671e+308);
test_math_sign(1.255590976112528e+308);
test_math_sign(-73);
test_math_sign("IVZY");
test_math_sign(-869);
test_math_sign(9.658271205213316e+307);
test_math_sign("JKV14O");
test_math_sign(1.1222409577896152e+308);
test_math_sign(-989);
test_math_sign("1CCGBL70MW");
test_math_sign(1.0427546660975718e+308);
test_math_sign(1.5303527992211232e+308);
test_math_sign(4.3535942573952076e+307);
test_math_sign(7.722125559817003e+307);
test_math_sign("RSH2IXBJ");
test_math_sign(-715);
test_math_sign(-33);
test_math_sign(7.185495407904994e+306);
test_math_sign(-95);
test_math_sign(1.293794651139232e+307);
test_math_sign("B0VCN");
test_math_sign(9.746438595890932e+307);
test_math_sign(1.3908092709128933e+308);
test_math_sign(-159);
test_math_sign("JFR4CA9");
test_math_sign(1.5738826200501874e+308);
test_math_sign(4.260720809564482e+307);
test_math_sign(-229);
test_math_sign(1.5483804675017542e+308);
test_math_sign(3.9025385527274736e+307);
test_math_sign(-951);
test_math_sign("OM1DSUP6KA");
test_math_sign(-17);
test_math_sign(1.195241267162399e+308);
test_math_sign(5.27261570052213e+307);
test_math_sign(9.71132517297223e+307);
test_math_sign(-859);
test_math_sign(-589);
test_math_sign(-257);
test_math_sign(-109);
test_math_sign("3UAMB3");
test_math_sign("UP2");
test_math_sign(5.631024738181277e+307);
test_math_sign(1.6240154763681958e+308);
test_math_sign(-695);
test_math_sign("3OHMLI");
test_math_sign(1.5338390345830756e+308);
test_math_sign(1.7490655733334902e+308);
test_math_sign(9.069861612994728e+307);
test_math_sign(1.2141120622421129e+308);
test_math_sign(6.705487454765263e+306);
test_math_sign(-665);
test_math_sign(1.8292108128556956e+307);
test_math_sign(1.1555316343118138e+308);
test_math_sign("5U60");
test_math_sign(-629);
test_math_sign(-617);
test_math_sign("9QWVXAZK7");
test_math_sign("2KI");
test_math_sign(4.279135225555256e+307);
test_math_sign("7UE1");
test_math_sign(1.4488630100570074e+308);
test_math_sign(5.039214768528164e+307);
test_math_sign(-391);
test_math_sign(1.0627720958561787e+308);
test_math_sign(7.092444549172811e+307);
test_math_sign(3.697129189634245e+307);
test_math_sign("4FA9SPJS1");
test_math_sign(1.2228773987107575e+308);
test_math_sign("EX2ZG");
test_math_sign(-955);
test_math_sign("TJRMH5");
test_math_sign(8.957033542671309e+306);
test_math_sign("CQR3");
test_math_sign(-497);
test_math_sign("ATQUH9IMK");
test_math_sign(-941);
test_math_sign(1.7724925363043307e+308);
test_math_sign(-417);
test_math_sign(-499);
test_math_sign("B79XZ");
test_math_sign(6.076446865371933e+307);
test_math_sign("THE");
test_math_sign("TNFCCV");
test_math_sign(8.800066498781762e+307);
test_math_sign(1.0834260578533737e+308);
test_math_sign("SD3KVW75");
test_math_sign(-235);
test_math_sign(6.125632713289402e+307);
test_math_sign("1NGG");
test_math_sign("28HQQZQ2");
test_math_sign("SDHR");
test_math_sign(-875);
test_math_sign(-747);
test_math_sign("MYONLYE6W");
test_math_sign(-245);
test_math_sign("18V");
test_math_sign(-347);
test_math_sign("CXA0");
test_math_sign(1.106924068285624e+308);
test_math_sign("ZMOZX");
test_math_sign(-645);
test_math_sign(6.031483697014855e+307);
test_math_sign(7.301214226278711e+307);
test_math_sign(-65);
test_math_sign("NRFDV8OO9");
test_math_sign("OYVXDQQCJ");
test_math_sign(-861);
test_math_sign(1.0231333316236556e+308);
test_math_sign(80);
test_math_sign("U66K6XSP1");
test_math_sign(-709);
test_math_sign(4.538251555416449e+307);
test_math_sign("H10SJT5P");
test_math_sign("57W0G8");
test_math_sign(1.7883674978646763e+308);
test_math_sign("EUGP51308");
test_math_sign(1.4403558931025066e+308);
test_math_sign("MT2VD");
test_math_sign(1.174283292459238e+308);
test_math_sign(1.6971192727653402e+308);
test_math_sign("HE4");
test_math_sign(3.636321533054013e+307);
test_math_sign(1.464207688000253e+308);
test_math_sign(1.0346696561023628e+308);
test_math_sign("BU8PH6");
test_math_sign(-669);
test_math_sign(4.313667162269412e+307);
test_math_sign("HGPEG21");
test_math_sign(7.867228516690749e+307);
test_math_sign("ND1DJXV8G");
test_math_sign("ST2K");
test_math_sign(-615);
test_math_sign(-471);
test_math_sign("97SXW5H");
test_math_sign(5.860269655208024e+307);
test_math_sign(7.426459745516269e+307);
test_math_sign(6.526177606531322e+307);
test_math_sign(1.167085444857787e+308);
test_math_sign(9.204064986293236e+307);
test_math_sign(-23);
test_math_sign("ZK4QG0C");
test_math_sign(-43);
test_math_sign("Y3K9EI27WG");
test_math_sign("D6Q");
test_math_sign("CMLGNVI");
test_math_sign(7.530456115615355e+307);
test_math_sign(3.9559050346440573e+307);
test_math_sign("CP0DK");
test_math_sign(-27);
test_math_sign(-411);
test_math_sign("ILHCGHP");
test_math_sign("TUZ");
test_math_sign(-627);
test_math_sign(-799);
test_math_sign(1.6367845503617147e+308);
test_math_sign(-251);
test_math_sign(7.833599618989874e+307);
test_math_sign("DQOJ8");
test_math_sign(210);
test_math_sign("V35YVLLA");
test_math_sign(6.54870821838469e+307);
test_math_sign(1.731223982294766e+308);
test_math_sign(-267);
test_math_sign(1.544171675878619e+308);
test_math_sign(92);
test_math_sign("Y0MUD0RJLD");
test_math_sign(6.981008238026276e+307);
test_math_sign(1.515260475521537e+308);
test_math_sign(-801);
test_math_sign(-307);
test_math_sign("7806");
test_math_sign(-53);
test_math_sign("67LM");
test_math_sign("NTKWR0");
test_math_sign(-379);
test_math_sign(-97);
test_math_sign("CF0");
test_math_sign(-271);
test_math_sign(-773);
test_math_sign(4.716848979852872e+307);
test_math_sign(-641);
test_math_sign("8SHXX5H18");
test_math_sign(-345);
test_math_sign(-293);
test_math_sign(9.257656396729357e+307);
test_math_sign("V5DEJ");
test_math_sign(-291);
test_math_sign("4EAI1I");
test_math_sign(8.589946844185455e+307);
test_math_sign(1.5113690216312039e+308);
test_math_sign(-661);
test_math_sign(-917);
test_math_sign(1.0909502600595525e+308);
test_math_sign(6.99482798269042e+307);
test_math_sign(5.818586844685486e+307);
test_math_sign(5.191201328010612e+307);
test_math_sign(-51);
test_math_sign(9.540441881801417e+307);
test_math_sign("3SCU6P4");
test_math_sign("76BPQYX");
test_math_sign(-181);
test_math_sign(1.4318547776411833e+308);
test_math_sign("WGQNAZY9Q");
test_math_sign(4.101045826422579e+307);
test_math_sign("UKPL5GEB");
test_math_sign(9.821255948001951e+307);
test_math_sign(1.6883189870014694e+308);
test_math_sign("CYA8D");
test_math_sign(9.508917691909493e+307);
test_math_sign(8.64064153999051e+307);
test_math_sign("WMGX66F2");
test_math_sign(-405);
test_math_sign("3GLQTB");
test_math_sign(9.365834264386458e+307);
test_math_sign(-985);
test_math_sign("V64");
test_math_sign(7.620168145021146e+307);
test_math_sign(1.0486378237648745e+308);
test_math_sign(1.4039919253067282e+308);
test_math_sign(-333);
test_math_sign("005IUQ");
test_math_sign(-879);
test_math_sign(2.7555900517496433e+307);
test_math_sign(-197);
test_math_sign(8.602784682500845e+307);
test_math_sign(1.6680477030846276e+308);
test_math_sign(-21);
test_math_sign("KAF6");
test_math_sign(-395);
test_math_sign("KX3VZ6OIB");
test_math_sign(-121);
test_math_sign("3F9");
test_math_sign("EBXZ52");
test_math_sign(8.532823351722923e+305);
test_math_sign(3.6773664685361956e+307);
test_math_sign("13C6HOZHSC");
test_math_sign(748);
test_math_sign("DC749");
test_math_sign("JDLGNLN29V");
test_math_sign(1.5816889777023488e+308);
test_math_sign(-527);
test_math_sign(-399);
test_math_sign("716");
test_math_sign("R2Q13IYO");
test_math_sign(1.208832646463138e+308);
test_math_sign(-975);
test_math_sign(1.7904872187280146e+308);
test_math_sign("ZDHC38ZDH");
test_math_sign(-339);
test_math_sign(6.628490914112424e+307);
test_math_sign(9.678300352197289e+307);
test_math_sign("GD0");
test_math_sign("ENHWDD5K9I");
test_math_sign(1.2307123940454293e+308);
test_math_sign("6D0OHOIS");
test_math_sign("9O14R");
test_math_sign("GLY4UR");
test_math_sign(3.5597681304036164e+307);
test_math_sign("PIR45O");
test_math_sign("SRH3OVBWC");
test_math_sign("HVTD3");
test_math_sign("D4T");
test_math_sign(-119);
test_math_sign(1.4214140694880007e+308);
test_math_sign(7.108192613109877e+306);
test_math_sign(-609);
test_math_sign("M8HB876");
test_math_sign(1.1097740385575222e+307);
test_math_sign(-369);
test_math_sign(4.2359251826285647e+307);
test_math_sign(1.4909697624684092e+306);
test_math_sign("VV152L67L");
test_math_sign("PYKBD8DQDT");
test_math_sign("JE71");
test_math_sign(-657);
test_math_sign(-427);
test_math_sign("P0097ORL8");
test_math_sign("6KV");
test_math_sign(1.6873524793279174e+308);
test_math_sign("MRJRBDSGM8");
test_math_sign(2.601356802872538e+306);
test_math_sign(-133);
test_math_sign(-113);
test_math_sign("SL8UC8VL1Q");
test_math_sign(-169);
test_math_sign("A59B");
test_math_sign("FBA0B");
test_math_sign(6.358339876415583e+307);
test_math_sign("3KPS");
test_math_sign(-401);
test_math_sign("GVU0JD0C");
test_math_sign(1.113777973897834e+308);
test_math_sign("B7YGPQ");
test_math_sign(7.888064542132169e+306);
test_math_sign(1.5677801850334633e+308);
test_math_sign(-493);
test_math_sign("KQ1N1C");
test_math_sign(1.1733235501981345e+308);
test_math_sign(5.805824127636367e+307);
test_math_sign("Z41IZFRUJU");
test_math_sign(-965);
test_math_sign(-929);
test_math_sign("DAN93RZ");
test_math_sign(-733);
test_math_sign(-407);
test_math_sign(4.3544002111639263e+307);
test_math_sign(1.0306000286087933e+308);
test_math_sign("P0ED");
test_math_sign(2.419744233077602e+307);
test_math_sign(-39);
test_math_sign("LPUMG");
test_math_sign(1.570608624943862e+307);
test_math_sign("L1C0W");
test_math_sign(-483);
test_math_sign("0HFDGT");
test_math_sign(-335);
test_math_sign(1.2327564542254288e+308);
test_math_sign(1.4522255711646089e+308);
test_math_sign("22KU52I");
test_math_sign("KFXNUM");
test_math_sign("QI9YFBX0");
test_math_sign(1.0541552962223438e+307);
test_math_sign("P7L");
test_math_sign(7.627756119760134e+307);
test_math_sign(1.5002457637526445e+308);
test_math_sign("2MD6");
test_math_sign("8EPCFDG");
test_math_sign(-323);
test_math_sign("JZ9");
test_math_sign(-263);
test_math_sign("8ZXY");
test_math_sign(6.73506958087928e+307);
test_math_sign("VGSPGMQQ1");
test_math_sign(-673);
test_math_sign(-449);
test_math_sign(-7);
test_math_sign(3.419320375305966e+307);
test_math_sign("E1NON8EC");
test_math_sign("5QJD5KUL");
test_math_sign(1.733850233487505e+307);
test_math_sign("ISX");
test_math_sign("Q59VUFBPZ");
test_math_sign(1.5239538246700543e+308);
test_math_sign("Z85B6BF0");
test_math_sign("1PRYC");
test_math_sign(6.850813524462144e+307);
test_math_sign(-577);
test_math_sign("OJVWQA");
test_math_sign("OAFZDV");
test_math_sign(-911);
test_math_sign(7.375148938259406e+307);
test_math_sign("D5WEM1");
test_math_sign("X0I2CG0H9");
test_math_sign(4.841124154039472e+307);
test_math_sign("663O");
test_math_sign(-719);
test_math_sign("QMS6FA");
test_math_sign("MN00F2TKE");
test_math_sign(4.796345205449571e+307);
test_math_sign("REK6");
test_math_sign(3.2195313380686435e+307);
test_math_sign(-289);
test_math_sign("YTJ");
test_math_sign("6D2RZ66HOS");
test_math_sign(8.843744633096276e+307);
test_math_sign("OJZ0HF");
test_math_sign(-789);
test_math_sign("4538YHHB");
test_math_sign("HUYA");
test_math_sign(7.547036018580234e+307);
test_math_sign(-833);
test_math_sign("RBMVPXB");
test_math_sign("C7IDPS0E7");
test_math_sign(1.1139843137505776e+308);
test_math_sign("KL20O10");
test_math_sign(-115);
test_math_sign(4.692822884146185e+307);
test_math_sign("DRKZ5YHP7");
test_math_sign("5TJE62ILQ5");
test_math_sign(4.209919444704412e+307);
test_math_sign(1.2698334171605713e+308);
test_math_sign("90SZR41B8");
test_math_sign("3W5OE");
test_math_sign("7F6F");
test_math_sign("EINQ");
test_math_sign(1.2824603675007026e+308);
test_math_sign(5.288706398062428e+307);
test_math_sign(-273);
test_math_sign("OPDXO35O2O");
test_math_sign(6.898984437343413e+307);
test_math_sign(9.003224676134278e+307);
test_math_sign(-605);
test_math_sign("6VC3C4A");
test_math_sign(9.069650741478714e+306);
test_math_sign(-467);
test_math_sign(1.4280731130821769e+308);
test_math_sign("M083DK");
test_math_sign("OUT96A");
test_math_sign("76UEHQ");
test_math_sign("W7371A8GX");
test_math_sign("LPFPSR");
test_math_sign("TV8H0D");
test_math_sign(1.4756955852379207e+308);
test_math_sign(1.050185206607451e+308);
test_math_sign(-825);
test_math_sign("S270");
test_math_sign("UIT");
test_math_sign(1.7932081878127757e+308);
test_math_sign(4.3333255859108987e+307);
test_math_sign(7.787161091561969e+307);
test_math_sign(1.3233341468391386e+308);
test_math_sign(1.0863362518100243e+308);
test_math_sign("S3QLBHD3");
test_math_sign(1.2847755523747083e+308);
test_math_sign("SS5");
test_math_sign("SC2XXS");
test_math_sign("PQRINTDCX");
test_math_sign("V4MDO5F");
test_math_sign("Q98E7");
test_math_sign("E1MYRMNK");
test_math_sign(1.463712365306259e+307);
test_math_sign(-633);
test_math_sign("APF839");
test_math_sign(-13);
test_math_sign(9.677038307608035e+307);
test_math_sign(1.588300971222892e+308);
test_math_sign(4.131072500541575e+307);
test_math_sign(606);
test_math_sign("JW4B");
test_math_sign(1.717782717930103e+308);
test_math_sign(1.5002048557969867e+308);
test_math_sign("RZ4KBZ112");
test_math_sign("RILS4XTY");
test_math_sign(-613);
test_math_sign(-327);
test_math_sign(3.102238966305074e+307);
test_math_sign(7.448267394521489e+306);
test_math_sign("PXP9A");
test_math_sign(-781);
test_math_sign(1.4095885923252394e+308);
test_math_sign("Q62Y");
test_math_sign(2.7885197291248397e+307);
test_math_sign("NH59Q");
test_math_sign(2.7634339627042886e+307);
test_math_sign(-969);
test_math_sign("X9UZQQOUY");
test_math_sign(5.096257551145922e+307);
test_math_sign("48J88257X");
test_math_sign(-233);
test_math_sign("VX1");
test_math_sign(3.7740915393248075e+307);
test_math_sign(-31);
test_math_sign(3.928783787432628e+307);
test_math_sign(9.92941446746614e+307);
test_math_sign("EJQ6G0");
test_math_sign(6.664651090863012e+307);
test_math_sign(6.546500148679913e+306);
