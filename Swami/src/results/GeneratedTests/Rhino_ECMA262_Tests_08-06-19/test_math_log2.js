/*
* This file is automatically generated by Swami
*
* 2019-08-06 12:45:47.074062
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
function test_math_log2(x){
	if (Object.is( x,NaN )){
		var output = Math.log2(x);
		new TestCase("math_log2", "math_log2", NaN, output);
		test();
		return;
		}
	if (( x < 0 )){
		var output = Math.log2(x);
		new TestCase("math_log2", "math_log2", NaN, output);
		test();
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.log2(x);
		new TestCase("math_log2", "math_log2", - Infinity, output);
		test();
		return;
		}
	if (( x === - 0 )){
		var output = Math.log2(x);
		new TestCase("math_log2", "math_log2", - Infinity, output);
		test();
		return;
		}
	if (( x === 1 )){
		var output = Math.log2(x);
		new TestCase("math_log2", "math_log2", + 0, output);
		test();
		return;
		}
	if (( x === + Infinity )){
		var output = Math.log2(x);
		new TestCase("math_log2", "math_log2", + Infinity, output);
		test();
		return;
		}
}



/*TESTS GENERATED AUTOMATICALLY*/
test_math_log2("USD4");
test_math_log2(true);
test_math_log2(-431);
test_math_log2(-223);
test_math_log2("9D1NX3HL6");
test_math_log2(undefined);
test_math_log2(false);
test_math_log2(1.3475930710438584e+308);
test_math_log2(-73);
test_math_log2(-753);
test_math_log2(-61);
test_math_log2("DBWNFE");
test_math_log2(-923);
test_math_log2(/\r\n|\r|\n/);
test_math_log2(-135);
test_math_log2(/[\u0400-\u04FF]+/g);
test_math_log2(-455);
test_math_log2(1.6422643064945212e+308);
test_math_log2(null);
test_math_log2(-863);
test_math_log2(-239);
test_math_log2(1.4240313787604665e+308);
test_math_log2(-411);
test_math_log2(1.5201142980226693e+308);
test_math_log2(/foo/g);
test_math_log2(NaN);
test_math_log2(4.432207027227973e+307);
test_math_log2(4.5782259643520963e+306);
test_math_log2(-611);
test_math_log2("3LZU");
test_math_log2(9.11059379865599e+307);
test_math_log2("T8R81ACUR");
test_math_log2(/yes.*day/);
test_math_log2("TC7SZ");
test_math_log2(1.2958287213782008e+308);
test_math_log2(-793);
test_math_log2(-283);
test_math_log2("HYZWTF");
test_math_log2(-0);
test_math_log2("EUD04YZN0J");
test_math_log2(9.651504644380908e+307);
test_math_log2(-153);
test_math_log2(-97);
test_math_log2("UOIINOM");
test_math_log2("XU0116BUAX");
test_math_log2(1.5820298915645167e+308);
test_math_log2(1.5256506165397138e+308);
test_math_log2(+0);
test_math_log2(1.371379904317079e+308);
test_math_log2(1.376886654269004e+308);
test_math_log2("PXPY");
test_math_log2(1.268202594326788e+307);
test_math_log2("9C6W63SY");
test_math_log2(1.627287993145996e+307);
test_math_log2(Infinity);
test_math_log2("E00W");
test_math_log2(5.256213939559576e+307);
test_math_log2(1.1593045593344906e+308);
test_math_log2(/ab+c/);
test_math_log2(1.3430333536787163e+307);
test_math_log2(1.3305306536345271e+308);
test_math_log2(-501);
test_math_log2(/yes[^]*day/);
test_math_log2("13F0UJ");
test_math_log2(-791);
test_math_log2("RQTTU");
test_math_log2(-5);
test_math_log2("5LD4LJI17Q");
test_math_log2("0ZP");
test_math_log2("3FXHU6NW");
test_math_log2(3.0018177532141523e+307);
test_math_log2(/(\w+)\s(\w+)/);
test_math_log2(/[^.]+/);
test_math_log2(-445);
test_math_log2(-331);
test_math_log2(8.360795184000483e+307);
test_math_log2("7WDE5");
test_math_log2(1.6860622553195007e+308);
test_math_log2(-1);
test_math_log2(5.044623801318136e+305);
test_math_log2("PP0");
test_math_log2(1.495919326282678e+308);
test_math_log2(9.66455410441732e+307);
test_math_log2(-213);
test_math_log2(1.484025929300302e+308);
test_math_log2(-337);
test_math_log2(1.1282435198038764e+308);
test_math_log2(446);
test_math_log2("VOOPDOCT");
test_math_log2(-441);
test_math_log2(5.882341502445498e+307);
test_math_log2("2WNORZ7ME");
test_math_log2(-651);
test_math_log2(9.410568549162196e+307);
test_math_log2(-889);
test_math_log2(-817);
test_math_log2("XPQZ");
test_math_log2(2.351461171176583e+307);
test_math_log2(-659);
test_math_log2("05P");
test_math_log2("41PS6H");
test_math_log2(1.3714734890572094e+308);
test_math_log2("4NM9E2Y5");
test_math_log2("3UPS04QM6");
test_math_log2(1.5477252957316152e+308);
test_math_log2(-779);
test_math_log2(1.378910980690376e+308);
test_math_log2("M32AHTBQSM");
test_math_log2(2.1711069316645926e+307);
test_math_log2("VLG4LTH");
test_math_log2(-109);
test_math_log2(-291);
test_math_log2(9.464448747715567e+307);
test_math_log2(9.746881606120905e+307);
test_math_log2(-963);
test_math_log2(4.207030685675071e+307);
test_math_log2(5.886820148708936e+307);
test_math_log2(5.379831543868681e+307);
test_math_log2(4.630455161105452e+307);
test_math_log2(-377);
test_math_log2("FGRJUGBB");
test_math_log2(-327);
test_math_log2(-329);
test_math_log2(-539);
test_math_log2(-389);
test_math_log2("TWE53Y");
test_math_log2(1.4583248183897532e+308);
test_math_log2("IR7D5IFO");
test_math_log2(-13);
test_math_log2("0P498VI");
test_math_log2(5.0162405617634584e+306);
test_math_log2("GUS5E");
test_math_log2("6YVWSVV6");
test_math_log2("3W3");
test_math_log2("4Z0");
test_math_log2(-187);
test_math_log2("KNUPA2");
test_math_log2(1.5538380020242005e+308);
test_math_log2("5Y4J1F764U");
test_math_log2(1.6455415444457144e+308);
test_math_log2("K4RV");
test_math_log2(-271);
test_math_log2("3EV64NV");
test_math_log2(4.078844817649821e+307);
test_math_log2("E0C5T2774");
test_math_log2(2.4770400914422047e+306);
test_math_log2(1.7697165059560247e+308);
test_math_log2(4.1128618033487063e+307);
test_math_log2(-195);
test_math_log2(-853);
test_math_log2("BPP");
test_math_log2(6.720662529796925e+307);
test_math_log2(-627);
test_math_log2("KY6RA5");
test_math_log2(1.09618831245284e+308);
test_math_log2(1.1342387223339312e+308);
test_math_log2(-851);
test_math_log2(-605);
test_math_log2(-689);
test_math_log2(1.730558572760632e+308);
test_math_log2(1.1297987514753322e+308);
test_math_log2("ZCBRX3");
test_math_log2(6.113560422308969e+307);
test_math_log2("30BWA0KOB");
test_math_log2("UHX1WM7");
test_math_log2(5.160236195503025e+306);
test_math_log2(1.5522742663414725e+308);
test_math_log2(1.3468995672217339e+308);
test_math_log2("UA8CQAAFM");
test_math_log2(-31);
test_math_log2(768);
test_math_log2(9.99308188461204e+307);
test_math_log2(5.765756670886962e+307);
test_math_log2(-417);
test_math_log2(-629);
test_math_log2(5.908481706813171e+307);
test_math_log2(8.304363402776883e+306);
test_math_log2("BOQX");
test_math_log2(1.7779759958104806e+308);
test_math_log2("DI5YHA3J");
test_math_log2("P3SYLSC");
test_math_log2(-41);
test_math_log2(-303);
test_math_log2("LWPLSC");
test_math_log2(-827);
test_math_log2(3.705326270797525e+306);
test_math_log2("IA2X4C");
test_math_log2(-933);
test_math_log2(9.679452778192174e+307);
test_math_log2(8.343994074939739e+307);
test_math_log2("JY6C066I");
test_math_log2(1.6735226916673221e+308);
test_math_log2(8.79619037556354e+307);
test_math_log2("S28NY5BR0");
test_math_log2("58MG");
test_math_log2(7.967204764986921e+307);
test_math_log2(8.738609125330335e+307);
test_math_log2("319D");
test_math_log2("NVJPNGRQ");
test_math_log2(1.9233988872534408e+307);
test_math_log2(1.5646441424418723e+308);
test_math_log2(-333);
test_math_log2(8.666851910477884e+307);
test_math_log2(-91);
test_math_log2(-565);
test_math_log2("E35S5NZBL");
test_math_log2(1.7405215095998346e+308);
test_math_log2("VO1WVH");
test_math_log2("QZA8Y6BKGH");
test_math_log2(-937);
test_math_log2("MF48I1V4V2");
test_math_log2(1.1317148393453856e+308);
test_math_log2(-125);
test_math_log2("AITFG");
test_math_log2("PB7");
test_math_log2(-287);
test_math_log2("NKXUK63A2");
test_math_log2("5SJQ6SE6M");
test_math_log2(-993);
test_math_log2(5.069202655317631e+307);
test_math_log2("ZPDV2DMIQX");
test_math_log2(-371);
test_math_log2(8.834706560650608e+307);
test_math_log2(-825);
test_math_log2("RJ03X2S8M");
test_math_log2("CZMK1D0K2");
test_math_log2("QR0L");
test_math_log2("3QIU2QYZ");
test_math_log2("F2384");
test_math_log2("NKKC6YNZ4N");
test_math_log2(-613);
test_math_log2("XH9GQ5");
test_math_log2(1.7269505195457791e+308);
test_math_log2(2.1883131365711333e+307);
test_math_log2("V687SHYR");
test_math_log2("RJUU");
test_math_log2(1.66470846271668e+308);
test_math_log2(-625);
test_math_log2(-119);
test_math_log2(-861);
test_math_log2(-107);
test_math_log2(7.783843364489963e+307);
test_math_log2(-363);
test_math_log2("62AHX");
test_math_log2(1.470610510584153e+308);
test_math_log2(-167);
test_math_log2("5BTKH7Q");
test_math_log2(2.109803003687004e+307);
test_math_log2("UCJ4N4N0SH");
test_math_log2(2.055993366349212e+307);
test_math_log2(1.1481551721951217e+308);
test_math_log2(1.4099252730473569e+308);
test_math_log2(-731);
test_math_log2(4.753376037281654e+307);
test_math_log2("0D8TCS");
test_math_log2("ORWDCP62H4");
test_math_log2("8355WHI5");
test_math_log2("YDHYPUQ");
test_math_log2(3.875531928895481e+307);
test_math_log2(8.180930163281798e+307);
test_math_log2("K3PENIU1");
test_math_log2("RVA26NM");
test_math_log2(-47);
test_math_log2(-917);
test_math_log2("Z3FVA");
test_math_log2(1.000567339434794e+308);
test_math_log2("ZX12L");
test_math_log2("PFZ");
test_math_log2("9UOS0B");
test_math_log2("0DADDTZ4");
test_math_log2(9.137685105765405e+307);
test_math_log2(1.986271521515263e+307);
test_math_log2(6.195828262442185e+304);
test_math_log2(-797);
test_math_log2("ID8");
test_math_log2(7.696214852757798e+307);
test_math_log2(1.6251524808694293e+308);
test_math_log2("N7A84VYEM");
test_math_log2(-883);
test_math_log2(1.2141475799806733e+308);
test_math_log2(-795);
test_math_log2("16U6X8LUA");
test_math_log2(-867);
test_math_log2("SSBTKCYEL");
test_math_log2(1.507919014731172e+308);
test_math_log2(1.6035789962604145e+308);
test_math_log2(-403);
test_math_log2(5.119409989669464e+307);
test_math_log2(-447);
test_math_log2("HIYFU08L");
test_math_log2(1.7927347321049024e+307);
test_math_log2(-775);
test_math_log2(-129);
test_math_log2(3.675331076783396e+307);
test_math_log2("A4M91C70J");
test_math_log2(7.919019561607797e+307);
test_math_log2("E2LN54");
test_math_log2(1.56097675755215e+308);
test_math_log2(-57);
test_math_log2("GUSA");
test_math_log2(1.146059907553549e+308);
test_math_log2(1.092599644524423e+308);
test_math_log2(1.1932846940327367e+308);
test_math_log2(4.316492277369105e+307);
test_math_log2("EN1VLG");
test_math_log2(-759);
test_math_log2(1.1141498812475117e+308);
test_math_log2("M2DG1SMN");
test_math_log2(9.210299768767408e+305);
test_math_log2(-749);
test_math_log2("857I14");
test_math_log2(9.080903202841241e+306);
test_math_log2("PGGIRAJMFS");
test_math_log2(1.1328758569169653e+308);
test_math_log2(-573);
test_math_log2(8.230214401064726e+307);
test_math_log2(-645);
test_math_log2(1.0919743413572708e+308);
test_math_log2(7.840739999472745e+307);
test_math_log2(-893);
test_math_log2(6.610685657541893e+307);
test_math_log2("XDFRQI6");
test_math_log2(-275);
test_math_log2(-801);
test_math_log2(1.4436627552422957e+308);
test_math_log2(4.3557437733743725e+307);
test_math_log2("66MYW5V");
test_math_log2(3.081728491928107e+307);
test_math_log2("AWJQ");
test_math_log2(1.3075665207319682e+308);
test_math_log2("V4RE6U46F");
test_math_log2(-173);
test_math_log2(7.669824012773683e+307);
test_math_log2(1.2134956120072541e+308);
test_math_log2(1.2763567317453501e+308);
test_math_log2(-39);
test_math_log2("L18J");
test_math_log2(-113);
test_math_log2(-845);
test_math_log2("ISGV");
test_math_log2("ZYQ");
test_math_log2(-151);
test_math_log2("MZ7ZR");
test_math_log2(7.868076743772957e+307);
test_math_log2("RVFYA0M");
test_math_log2("QVSMM8JOLC");
test_math_log2(-577);
test_math_log2("Y8BUE2B7XZ");
test_math_log2("CUCAKJ7");
test_math_log2("6LLUPT80N");
test_math_log2(-787);
test_math_log2(9.869979589736874e+307);
test_math_log2("I5P");
test_math_log2(1.066406357116836e+308);
test_math_log2(1.1810380619989895e+308);
test_math_log2(1.7272262976777418e+308);
test_math_log2("L9GMK");
test_math_log2(1.4903309935155288e+308);
test_math_log2(-133);
test_math_log2(8.124868910590769e+307);
test_math_log2(1.236555617815862e+308);
test_math_log2("LL8EDGQV8");
test_math_log2(1.0109589217951349e+308);
test_math_log2("HE4");
test_math_log2(1.712232324639412e+308);
test_math_log2(-123);
test_math_log2(-273);
test_math_log2(-717);
test_math_log2("M77VP416");
test_math_log2("UVS8PZT9");
test_math_log2(-237);
test_math_log2("LI2");
test_math_log2("1WQL6MD");
test_math_log2("KCAWMXH65");
test_math_log2("T8JFE06");
test_math_log2(-617);
test_math_log2(-597);
test_math_log2(4.178163739284826e+307);
test_math_log2(-37);
test_math_log2("RBSFDDK3");
test_math_log2(7.230974533538192e+307);
test_math_log2(-343);
test_math_log2("JHP1EKG");
test_math_log2("FWDD");
test_math_log2(1.1116450282735989e+308);
test_math_log2("UBEDGI9");
test_math_log2(1.7196362306945142e+308);
test_math_log2("ITZE2");
test_math_log2(-579);
test_math_log2(1.4034703112918007e+308);
test_math_log2(-735);
test_math_log2("G7FTXFJPQ5");
test_math_log2("HZEMLXTJ");
test_math_log2(-201);
test_math_log2(5.687867271678045e+307);
test_math_log2(6.219256349145387e+307);
test_math_log2("YCBB");
test_math_log2("NSX");
test_math_log2(-527);
test_math_log2(-607);
test_math_log2(6.267930822776083e+307);
test_math_log2(1.2171213053928506e+308);
test_math_log2(7.34093182986793e+306);
test_math_log2(-733);
test_math_log2(1.3040638745091147e+308);
test_math_log2("NPLLBW0WB");
test_math_log2(-339);
test_math_log2("RJAOMX");
test_math_log2(6.161643266777351e+307);
test_math_log2("AEYHWP");
test_math_log2("ONV2YX");
test_math_log2(1.2594070400299304e+308);
test_math_log2(1.6388970239132415e+307);
test_math_log2("J55NMCUA06");
test_math_log2(-453);
test_math_log2("DU0UIE");
test_math_log2("5MXHE");
test_math_log2("97W");
test_math_log2(3.314027694210312e+307);
test_math_log2(-559);
test_math_log2(1.3851767678674326e+308);
test_math_log2(-777);
test_math_log2("ZFQOR931A");
test_math_log2(4.1483235470957305e+307);
test_math_log2(1.059410513490373e+308);
test_math_log2(-519);
test_math_log2("HQES35066P");
test_math_log2(7.92846363334385e+307);
test_math_log2(7.297876473623813e+307);
test_math_log2(-379);
test_math_log2(5.236419890232941e+307);
test_math_log2("CX62G");
test_math_log2(3.1472507145597905e+307);
test_math_log2(-165);
test_math_log2(2.334766547312974e+307);
test_math_log2(-425);
test_math_log2(1.6774629248966986e+308);
test_math_log2(-449);
test_math_log2(1.7559080524178277e+308);
test_math_log2("Q1I058H");
test_math_log2("35SD");
test_math_log2("DNZC");
test_math_log2(4.958595636236316e+307);
test_math_log2(-773);
test_math_log2(4.749886005663561e+307);
test_math_log2(1.3114221961815416e+308);
test_math_log2("V411G7EHG");
test_math_log2(7.571879908171813e+307);
test_math_log2("YOF");
test_math_log2("0FHY87SQO");
test_math_log2(3.358706541136082e+307);
test_math_log2(-985);
test_math_log2(3.465165861844616e+307);
test_math_log2(6.975092856241181e+307);
test_math_log2(-381);
test_math_log2(-307);
test_math_log2(1.0495398304256766e+308);
test_math_log2("E02H3JA3IK");
test_math_log2("MHRYLZ9");
test_math_log2("XE3XSM74");
test_math_log2("YD1I");
test_math_log2(-895);
test_math_log2(4.689791400793802e+307);
test_math_log2(-703);
test_math_log2(1.0673588828758718e+308);
test_math_log2("1MUZCIHK");
test_math_log2(-647);
test_math_log2("WD66");
test_math_log2(2.184944554750146e+307);
test_math_log2(-673);
test_math_log2(3.1160277772256017e+307);
test_math_log2(-241);
test_math_log2(3.6332067259945023e+307);
test_math_log2(1.2571543744344587e+308);
test_math_log2(-105);
test_math_log2("H016");
test_math_log2("98H17M");
test_math_log2(1.3043464976908157e+308);
test_math_log2(1.5516595872309309e+308);
test_math_log2("FKTGARO");
test_math_log2(1.5145196392974908e+308);
test_math_log2("DRNSXAW");
test_math_log2(1.3610859329103817e+308);
test_math_log2(-621);
test_math_log2(-485);
test_math_log2(-53);
test_math_log2("I3DK1ABM");
test_math_log2(-695);
test_math_log2("JQTGGQ8");
test_math_log2(7.757371876916239e+307);
test_math_log2(3.3977867683357836e+307);
test_math_log2("G35SB");
test_math_log2(-503);
test_math_log2(-953);
test_math_log2("AZ07W47LN2");
test_math_log2(4.273091685745811e+306);
test_math_log2("X7R99V");
test_math_log2("4ZP");
test_math_log2(-571);
test_math_log2("12T");
test_math_log2(1.6462266115167438e+308);
test_math_log2(-437);
test_math_log2(1.0733308537655447e+308);
test_math_log2(7.444856509608072e+307);
test_math_log2("QO23XHZXW");
test_math_log2("JRFJ11T");
test_math_log2("ILF");
test_math_log2("P9RYYD0OPH");
test_math_log2("BLD4");
test_math_log2("3YA7PN4MH");
test_math_log2(-409);
test_math_log2("Z4MB");
test_math_log2(1.6287626204616973e+308);
test_math_log2("HO35C");
test_math_log2(2.1425867498553996e+307);
test_math_log2("PSWCSW5B");
test_math_log2("KWUBDM");
test_math_log2(-995);
test_math_log2(1.1763784023276092e+308);
test_math_log2(-185);
test_math_log2(-715);
test_math_log2("SY3KX7GF");
test_math_log2("QP3");
test_math_log2(-179);
test_math_log2("8PS8H");
test_math_log2(-583);
test_math_log2(3.9586894569978116e+307);
test_math_log2("7EMA");
test_math_log2(-207);
test_math_log2(1.4842175227951768e+308);
test_math_log2(-547);
test_math_log2(-159);
test_math_log2(-965);
test_math_log2("UT6R8JOLA");
test_math_log2(-199);
test_math_log2(1.3894966138225333e+308);
test_math_log2(1.1594123104726845e+308);
test_math_log2(1.369941430090195e+308);
test_math_log2("PNEL");
test_math_log2("633XQMK7HB");
test_math_log2(1.2707986569250783e+307);
test_math_log2(1.2434857669460518e+308);
test_math_log2(-215);
test_math_log2("F2OCWV");
test_math_log2("SD0AY");
test_math_log2("NRHB");
test_math_log2("PW1P7F");
test_math_log2(9.082300718398108e+307);
test_math_log2("JPDUG");
test_math_log2("327G");
test_math_log2("EWT");
test_math_log2("186RB4");
test_math_log2("FTZPY5");
test_math_log2("U531X");
test_math_log2(-913);
test_math_log2("QXDG");
test_math_log2(-193);
test_math_log2(-687);
test_math_log2(1.4002435469479282e+308);
test_math_log2(7.030222132783175e+307);
test_math_log2(5.183837358696432e+307);
test_math_log2(-803);
test_math_log2("OXDZNODUD");
test_math_log2(-25);
test_math_log2("XDRHQL");
test_math_log2(-919);
test_math_log2(7.827266406842913e+307);
test_math_log2(-847);
test_math_log2(-663);
test_math_log2(1.6192630968835793e+308);
test_math_log2(6.224139646217833e+307);
test_math_log2("TMM7");
test_math_log2("26YUOJ0B");
test_math_log2("N7K10");
test_math_log2(4.312176254153396e+307);
test_math_log2(1.116809622800925e+308);
test_math_log2(1.0431535287899067e+308);
test_math_log2("7WMG425VR");
test_math_log2(-691);
test_math_log2(3.6691139534718734e+307);
test_math_log2("064F2DD230");
test_math_log2(1.7907723820526742e+308);
test_math_log2("FRU");
test_math_log2("SX2J");
test_math_log2("UJ5");
test_math_log2(1.3019860588875243e+307);
test_math_log2(7.357897264462601e+307);
test_math_log2("SHU6FZL5");
test_math_log2(-143);
test_math_log2(9.844806354029517e+307);
test_math_log2("Q2WXONT");
test_math_log2(5.81677730491918e+307);
test_math_log2(2.600118659932177e+306);
test_math_log2(2.2307724479446344e+307);
test_math_log2(1.0049404455932118e+308);
test_math_log2(-3);
test_math_log2(-395);
test_math_log2(2.7290831579763027e+307);
test_math_log2("871XOXAAC");
test_math_log2(6.698066218103482e+306);
test_math_log2("DARZA");
test_math_log2(1.5535546710310878e+308);
test_math_log2("FPIGGHT6");
test_math_log2("DHRWU");
test_math_log2(-467);
test_math_log2(-477);
test_math_log2("SP21SH0WM");
test_math_log2(1.5329673092670904e+308);
test_math_log2(-575);
test_math_log2(8.237675711779321e+307);
test_math_log2(-459);
test_math_log2(7.315707736646787e+307);
test_math_log2("QGUC");
test_math_log2("7040WHI21O");
test_math_log2("XR2KX71");
test_math_log2(3.0264059661034823e+307);
test_math_log2("7CFMM");
test_math_log2(9.103172758542928e+307);
test_math_log2("DK6BFCH");
test_math_log2(3.3452659996146944e+307);
test_math_log2(-429);
test_math_log2(6.080062336510543e+307);
test_math_log2(-569);
test_math_log2(-789);
test_math_log2("48Q14");
test_math_log2(6.82242540493084e+307);
test_math_log2("WQSQ");
test_math_log2(5.656951514347547e+307);
test_math_log2("4IR1CVY4JR");
test_math_log2("3074T0VU");
test_math_log2("LH2O1K");
test_math_log2("T1FS8");
test_math_log2(1.6794433999633335e+307);
test_math_log2(-141);
test_math_log2("JIIISF6DP3");
test_math_log2(-489);
test_math_log2(-457);
test_math_log2(1.4737876211555576e+308);
test_math_log2(-289);
test_math_log2(2.5592399654360273e+307);
test_math_log2("P3SAQ50");
test_math_log2(-111);
test_math_log2(1.728113013556854e+308);
test_math_log2(6.360013436385007e+307);
test_math_log2(1.997549121514498e+307);
test_math_log2("SRL");
test_math_log2("JNHVA67C");
test_math_log2("9585");
test_math_log2(1.553244023323389e+308);
test_math_log2(8.234711255280778e+307);
test_math_log2("3YCA6C5OL");
test_math_log2(1.0548502594303648e+308);
test_math_log2(9.020116906951368e+307);
test_math_log2("YXCUC");
test_math_log2("00GSJOL");
test_math_log2(1.6876617651202741e+308);
test_math_log2("LHRHTYSR");
test_math_log2(-63);
test_math_log2(1.304078446664077e+308);
test_math_log2(1.4220714998239923e+308);
test_math_log2("07D");
test_math_log2("57J43GPELO");
test_math_log2("C0I");
test_math_log2(-321);
test_math_log2(310);
test_math_log2(-819);
test_math_log2("7JGO");
test_math_log2("CZ4YO");
test_math_log2(1.1819728183478467e+307);
test_math_log2("RSMNR");
test_math_log2(-69);
test_math_log2("H2B");
test_math_log2("NBWWY");
test_math_log2(-99);
test_math_log2(-653);
test_math_log2(-609);
test_math_log2("ST12NIO");
test_math_log2(-661);
test_math_log2(-175);
test_math_log2(6.864941561072153e+307);
test_math_log2("FWYTI6ETP");
test_math_log2(2.876079820432112e+307);
test_math_log2(1.6268102706614377e+308);
test_math_log2("7XZ34");
test_math_log2(1.540104447902866e+308);
test_math_log2("UPT5CIBH");
test_math_log2("92BNBGKE3");
test_math_log2(8.259246637119507e+307);
test_math_log2("348J");
test_math_log2(-367);
test_math_log2("ZOP4");
test_math_log2(-413);
test_math_log2(1.4405971693965358e+308);
test_math_log2("UBU9");
test_math_log2(-77);
test_math_log2(-209);
test_math_log2("ZS3OJRW");
test_math_log2(1.790504917598244e+308);
test_math_log2(-397);
test_math_log2(1.0767294478672165e+308);
test_math_log2("5MVHOIH8");
test_math_log2(1.7975021991309218e+308);
test_math_log2(2.2821679741682927e+307);
test_math_log2("MX2MG");
test_math_log2("6S7DMJI1");
test_math_log2("5JYGLNOA");
test_math_log2(1.0349704787811726e+308);
test_math_log2(-507);
test_math_log2("B5PV");
test_math_log2(-767);
test_math_log2("968A44BQ");
test_math_log2("1LO");
test_math_log2(-979);
test_math_log2("ET3HJ0L819");
test_math_log2(1.9747891938905213e+307);
test_math_log2(4.680727440875757e+307);
test_math_log2(4.3148361975582206e+307);
test_math_log2(-901);
test_math_log2("Z0IND");
test_math_log2("JTTZ3R1B");
test_math_log2("FQ4SB05F");
test_math_log2(-849);
test_math_log2("8XOLI");
test_math_log2(-145);
test_math_log2("AXCXW1J");
test_math_log2(5.959886825412969e+307);
test_math_log2(1.1527036179488533e+308);
test_math_log2(1.1234209301182423e+308);
test_math_log2("EXKOE");
test_math_log2("OELELB5G");
test_math_log2(-545);
test_math_log2(8.447862286476616e+307);
test_math_log2("65XXIP");
test_math_log2(1.1781688960168032e+308);
test_math_log2(3.6428673240453513e+307);
test_math_log2(1.0178619961506616e+308);
test_math_log2(9.80730526692489e+307);
test_math_log2("4ZQDUMQBWI");
test_math_log2(-541);
test_math_log2(1.5099589097294276e+307);
test_math_log2(1.3206497997442848e+308);
test_math_log2(1.3881439877544785e+308);
test_math_log2("A1OGUZDXV");
test_math_log2(-977);
test_math_log2(1.5332524270247937e+308);
test_math_log2(-115);
test_math_log2("V00YZW2NXZ");
test_math_log2(4.821572094710418e+307);
test_math_log2("TMV43P46");
test_math_log2("5WG4GYDS");
test_math_log2("4Q286ARZMU");
test_math_log2("RM32IJF5M");
test_math_log2("19X8HSRSM");
test_math_log2(1.0862739941464249e+308);
test_math_log2("UD481QZH7F");
test_math_log2(1.5147928524431553e+308);
test_math_log2(-739);
test_math_log2(6.057176432678359e+307);
test_math_log2(-17);
test_math_log2(4.705044792108735e+307);
test_math_log2("41QZOMF4QR");
test_math_log2(-301);
test_math_log2(-969);
test_math_log2(-249);
test_math_log2("UNZ");
test_math_log2(-79);
test_math_log2(1.1961790203410618e+308);
test_math_log2(4.561775590969093e+307);
test_math_log2("LGUAZP");
test_math_log2("1SXW");
test_math_log2(-319);
test_math_log2("XVARRUL");
test_math_log2(-657);
test_math_log2("CIAJBYZ");
test_math_log2(1.3674901272505323e+308);
test_math_log2("9YL7CBA");
test_math_log2("FZ0TRGIZ");
test_math_log2(1.764245296271741e+308);
test_math_log2(1.1360372625536195e+308);
test_math_log2("JJN1JVT5");
test_math_log2(-543);
test_math_log2(-743);
test_math_log2(1.1330285897557926e+308);
test_math_log2("U953IJGO");
test_math_log2(-251);
test_math_log2("2IAAH");
test_math_log2("UXD73GWKG");
test_math_log2("VJY2BF1FS");
test_math_log2(1.5363146569322033e+308);
test_math_log2(9.664771691457724e+307);
test_math_log2(-631);
test_math_log2(1.0414628517759316e+308);
test_math_log2(-191);
test_math_log2(3.601273868189198e+307);
test_math_log2("PBN7Y4OI");
test_math_log2("0NG4");
test_math_log2("BNFNH3XF6Z");
test_math_log2(1.027341166621357e+308);
test_math_log2(-781);
test_math_log2("MYYQKK");
test_math_log2("JVHVOC0LK");
test_math_log2(-693);
test_math_log2("P64770");
test_math_log2("IJ57H44EW");
test_math_log2("KT3V4F3CA");
test_math_log2("CAU8");
test_math_log2(8.777204147991889e+307);
test_math_log2("FNU");
test_math_log2(1.2938134045672656e+308);
test_math_log2(1.1955543502871378e+308);
test_math_log2("NVLU8");
test_math_log2(-55);
test_math_log2("HJX2NT");
test_math_log2(1.6029758032306268e+308);
test_math_log2(2.373481147112083e+307);
test_math_log2(-997);
test_math_log2(-885);
test_math_log2("YFCJ");
test_math_log2("0VDGWZOC0");
test_math_log2(-491);
test_math_log2(-471);
test_math_log2("L875O");
test_math_log2("T1I7");
test_math_log2("J3PBG4SJN");
test_math_log2(8.106693076472167e+307);
test_math_log2("11B8QL3CD");
test_math_log2(4.203388751619617e+307);
test_math_log2("GMZ1EJ");
test_math_log2(7.45111994060412e+307);
test_math_log2(8.302199498927809e+307);
test_math_log2("09NT");
test_math_log2("25WW2Y4T");
test_math_log2("SI5MHRN");
test_math_log2("I5G76");
test_math_log2(-855);
test_math_log2(-807);
test_math_log2(1.396612228346918e+308);
test_math_log2(1.6148709512000571e+308);
test_math_log2(2.035499322826998e+306);
test_math_log2("PFQ");
test_math_log2(5.411954615536684e+307);
test_math_log2(1.0295619953876923e+308);
test_math_log2(-835);
test_math_log2("IOCFO");
test_math_log2(-805);
test_math_log2(1.7026100177627225e+307);
test_math_log2(1.8600251676847258e+307);
test_math_log2(7.814840406437101e+307);
test_math_log2("LMT");
test_math_log2("GG0RKSPUPZ");
test_math_log2("4G2");
test_math_log2(-461);
test_math_log2(6.351879402786233e+307);
test_math_log2("E4ZRTE");
test_math_log2(1.7461146580241425e+308);
test_math_log2(8.371871483434082e+307);
test_math_log2("X4X2UU8TY");
test_math_log2("Q0H03US");
test_math_log2("5L3WCMD");
test_math_log2(1.6616591213853197e+308);
test_math_log2("EP5EOON6");
test_math_log2(9.205559930436689e+307);
test_math_log2("9TCGBD4W3V");
test_math_log2(1.7364095881466146e+308);
test_math_log2(8.514842780830197e+307);
test_math_log2(2.6833641874192454e+307);
test_math_log2("AJ2BDO");
test_math_log2("GVJ4610G");
test_math_log2("I3PUFN4");
test_math_log2("UAZZBJG5SE");
test_math_log2(1.4746698909809703e+308);
test_math_log2(-317);
test_math_log2("SCUX0");
test_math_log2(-357);
test_math_log2("93RK24MM");
test_math_log2(8.654946228804572e+307);
test_math_log2(-349);
test_math_log2(-439);
test_math_log2(-245);
test_math_log2(-27);
test_math_log2("HU21");
test_math_log2("7M6XHYSGH2");
test_math_log2(1.2333621341942072e+308);
test_math_log2(1.2216225690519417e+308);
test_math_log2(1.6109105708281426e+308);
test_math_log2(7.09609742994049e+307);
test_math_log2(1.5850439429484466e+308);
test_math_log2("LAG");
test_math_log2(2.1582729670850017e+307);
test_math_log2(9.259598511879878e+307);
test_math_log2(7.213836692677253e+307);
test_math_log2(1.474166643253313e+308);
test_math_log2(-987);
test_math_log2(1.7548952406204932e+308);
test_math_log2("DFOGYA5F1");
test_math_log2("PF5Z0");
test_math_log2(1.1337565986634487e+308);
test_math_log2("790HW");
test_math_log2("YVFJBGPR");
test_math_log2("ZIGP");
test_math_log2(1.5958588630218058e+308);
test_math_log2("V2A29");
test_math_log2("QT3784S");
test_math_log2("VZVNZ5XE8K");
test_math_log2("WQZW9I");
test_math_log2(5.719307928302191e+307);
test_math_log2(850);
test_math_log2(3.1104654038088444e+307);
test_math_log2(-719);
test_math_log2("PF5P");
test_math_log2(-983);
test_math_log2(5.113744654009962e+307);
test_math_log2(-163);
test_math_log2(-615);
test_math_log2(-677);
test_math_log2(-915);
test_math_log2(-299);
test_math_log2("8LDY");
test_math_log2(6.493046655188366e+307);
test_math_log2(8.689288812482069e+307);
test_math_log2("9ZG5IQIHUY");
test_math_log2("TINRK6EB7");
test_math_log2("HCK7817F");
test_math_log2(1.4060760545985372e+308);
test_math_log2(-93);
test_math_log2(2.44244574077379e+307);
test_math_log2(-391);
test_math_log2("MZZ8R");
test_math_log2("RJWPTBR");
test_math_log2(8.134303367723996e+307);
test_math_log2(6.321605967211453e+307);
test_math_log2(5.354689162635652e+307);
test_math_log2(-71);
test_math_log2(-419);
test_math_log2("C98ZF7");
test_math_log2("TPJJXV");
test_math_log2(1.5368629771107953e+308);
test_math_log2("DMBY1UM8SV");
test_math_log2("CXBWPZA");
test_math_log2(1.7362999985927071e+308);
test_math_log2(-967);
test_math_log2(-95);
test_math_log2(-873);
test_math_log2("WQTF5");
test_math_log2(1.353313819421216e+308);
test_math_log2(5.719333618531469e+307);
test_math_log2("GPSM17");
test_math_log2(1.1159609973044793e+308);
test_math_log2(9.050734110431049e+307);
test_math_log2(1.6840600048153398e+308);
test_math_log2("4DX");
test_math_log2(-399);
test_math_log2("TO2Y1PU7U");
test_math_log2("K1XFD75");
test_math_log2("L4VHZ06QU");
test_math_log2("CGKZP5Q3UI");
test_math_log2(8.203798422716925e+307);
test_math_log2(9.852369182342923e+307);
test_math_log2(3.465002642557393e+307);
test_math_log2("Z0F1N");
test_math_log2(9.202968228961182e+307);
test_math_log2(-665);
test_math_log2(6.263777303312463e+307);
test_math_log2("NDL");
test_math_log2(5.385212967691352e+307);
test_math_log2(-423);
test_math_log2(1.7739172417175822e+308);
test_math_log2(-701);
test_math_log2(4.6039862714239675e+305);
test_math_log2("YVIOYEF3C");
test_math_log2("XKHMJPO6Y5");
test_math_log2("G46A7");
test_math_log2(8.557938514591262e+307);
test_math_log2(-601);
test_math_log2("X9NW1X4L");
test_math_log2(-587);
test_math_log2("MPIOK8H7SO");
test_math_log2("2PK64Y6Z");
test_math_log2(2.2233471472750413e+307);
test_math_log2(-293);
test_math_log2(2.239742812866695e+307);
test_math_log2("WFU7657K1L");
test_math_log2(4.227503287022387e+307);
test_math_log2(5.315063847830556e+307);
test_math_log2(-203);
test_math_log2(-103);
test_math_log2(-59);
test_math_log2(1.23723273261299e+308);
test_math_log2(1.3105199785244051e+308);
test_math_log2(1.5045481867652666e+308);
test_math_log2("QDRS4BLZ");
test_math_log2("JJXCRDJ");
test_math_log2(-879);
test_math_log2("OS713N1GB");
test_math_log2(7.281699805392811e+307);
test_math_log2(1.609446568596869e+307);
test_math_log2(-941);
test_math_log2(1.062478845301852e+306);
test_math_log2("1R86");
test_math_log2(3.73014017313322e+307);