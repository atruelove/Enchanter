/*
* This file is automatically generated by Swami
*
* 2019-08-06 15:05:49.219504
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
function test_math_log1p(x){
	if (Object.is( x,NaN )){
		var output = Math.log1p(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (( x < - 1 )){
		var output = Math.log1p(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.log1p(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === - 0 )){
		var output = Math.log1p(x);
		assert.strictEqual(- 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === + Infinity )){
		var output = Math.log1p(x);
		assert.strictEqual(+ Infinity, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}



/*TESTS GENERATED AUTOMATICALLY*/
test_math_log1p(3.695848216060835e+307);
test_math_log1p(7.755983947385664e+307);
test_math_log1p(true);
test_math_log1p(-417);
test_math_log1p(-553);
test_math_log1p(null);
test_math_log1p(false);
test_math_log1p(+0);
test_math_log1p("ZL7K6I");
test_math_log1p(5.419512168208969e+307);
test_math_log1p("4XWIRGMS");
test_math_log1p("FJ8");
test_math_log1p(/\r\n|\r|\n/);
test_math_log1p(-0);
test_math_log1p("NHXBBRG");
test_math_log1p(-725);
test_math_log1p(/yes.*day/);
test_math_log1p(/(\w+)\s(\w+)/);
test_math_log1p(7.25116463033036e+307);
test_math_log1p("HBLPA4IZ");
test_math_log1p(/yes[^]*day/);
test_math_log1p("60X0");
test_math_log1p("EWVVVV");
test_math_log1p(undefined);
test_math_log1p(5.860121217789705e+307);
test_math_log1p(-915);
test_math_log1p("5XC");
test_math_log1p(-53);
test_math_log1p(1.4486201648586752e+308);
test_math_log1p("60Z");
test_math_log1p(/ab+c/);
test_math_log1p("EHBSATHOFB");
test_math_log1p(Infinity);
test_math_log1p(/foo/g);
test_math_log1p("TII4V");
test_math_log1p(-605);
test_math_log1p(-471);
test_math_log1p(6.849414736352243e+307);
test_math_log1p(1.570218387907201e+308);
test_math_log1p(-491);
test_math_log1p(-623);
test_math_log1p("XY17S3K30");
test_math_log1p(-545);
test_math_log1p(-925);
test_math_log1p(1.420909984341067e+308);
test_math_log1p(-699);
test_math_log1p(1.3363273945295126e+308);
test_math_log1p(3.193635945088641e+307);
test_math_log1p(-695);
test_math_log1p(4.3446851230637825e+307);
test_math_log1p(-883);
test_math_log1p("6KW70");
test_math_log1p(5.2126173437835867e+306);
test_math_log1p(-217);
test_math_log1p("QHTMYAHFWA");
test_math_log1p(1.3358632139798187e+308);
test_math_log1p(1.3651703539146281e+308);
test_math_log1p(-887);
test_math_log1p(1.1212103830314284e+308);
test_math_log1p(-671);
test_math_log1p("G7QPFQRRY");
test_math_log1p("LTD9");
test_math_log1p("3BBQF4W");
test_math_log1p(1.4486103518511815e+307);
test_math_log1p(NaN);
test_math_log1p("1PSH");
test_math_log1p(1.7337973492358693e+308);
test_math_log1p("6Q3CW5");
test_math_log1p(1.3374582872820591e+308);
test_math_log1p(6.478369289892854e+307);
test_math_log1p("3UPOMG");
test_math_log1p("IK9");
test_math_log1p(-155);
test_math_log1p(-587);
test_math_log1p("283BB3");
test_math_log1p(-845);
test_math_log1p(1.5121229642940032e+308);
test_math_log1p(-927);
test_math_log1p(-629);
test_math_log1p(1.0556202602872233e+308);
test_math_log1p(2.8894211293875894e+304);
test_math_log1p(-779);
test_math_log1p(/[^.]+/);
test_math_log1p(1.0629436959365401e+307);
test_math_log1p("409");
test_math_log1p(1.6706705338853775e+308);
test_math_log1p("X8EOC");
test_math_log1p("K93257YD4Z");
test_math_log1p(9.605220885905926e+307);
test_math_log1p(-647);
test_math_log1p(1.2949294631487876e+308);
test_math_log1p(1.7851578356562696e+308);
test_math_log1p(4.124233370301853e+307);
test_math_log1p(1.7904685102455774e+308);
test_math_log1p("7H32D");
test_math_log1p(1.6802902631792896e+308);
test_math_log1p("3CW7HTR");
test_math_log1p(1.3826194438772723e+308);
test_math_log1p("VGLN");
test_math_log1p(5.15317812380573e+307);
test_math_log1p("AUOAI0I97");
test_math_log1p(8.120311717086633e+307);
test_math_log1p(1.7551040169917163e+308);
test_math_log1p("JX8W");
test_math_log1p("J0I57F");
test_math_log1p("DRM");
test_math_log1p(1.309478943483398e+308);
test_math_log1p(1.1661256174404543e+308);
test_math_log1p(3.979953846244079e+306);
test_math_log1p(1.5098406526429098e+308);
test_math_log1p(-619);
test_math_log1p("RZB1TE3");
test_math_log1p(1.4653951362369525e+308);
test_math_log1p(-301);
test_math_log1p(8.497258498423878e+307);
test_math_log1p(3.734845686394973e+307);
test_math_log1p("PIML13");
test_math_log1p(3.5201948107136573e+307);
test_math_log1p(3.582686320914203e+306);
test_math_log1p(4.2679646266278166e+307);
test_math_log1p(5.976978308257783e+307);
test_math_log1p("LUID");
test_math_log1p(1.6603923811058514e+308);
test_math_log1p("JX79CLFNN");
test_math_log1p(-519);
test_math_log1p("516M");
test_math_log1p(4.072647773963792e+307);
test_math_log1p(2.183027230113023e+307);
test_math_log1p(-5);
test_math_log1p("NQ1L");
test_math_log1p(9.80476715712526e+307);
test_math_log1p("O5M");
test_math_log1p("P8GX");
test_math_log1p(1.5591674296274816e+308);
test_math_log1p(-285);
test_math_log1p("5BA");
test_math_log1p(-263);
test_math_log1p(8.754137760951642e+307);
test_math_log1p(8.484765241300106e+307);
test_math_log1p("5OUQGL");
test_math_log1p(/[\u0400-\u04FF]+/g);
test_math_log1p(-859);
test_math_log1p(4.829881091833014e+306);
test_math_log1p(4.789766203564916e+307);
test_math_log1p(616);
test_math_log1p(-91);
test_math_log1p("QWBZ111QMP");
test_math_log1p(1.2404272860271557e+308);
test_math_log1p(1.029569533900667e+308);
test_math_log1p("1B271");
test_math_log1p(9.500103429002668e+307);
test_math_log1p("YETR");
test_math_log1p("PK648G");
test_math_log1p(1.6155445451198362e+308);
test_math_log1p(2.3281875279012533e+306);
test_math_log1p(1.2066536192720553e+308);
test_math_log1p(-781);
test_math_log1p(-681);
test_math_log1p("ZSNX8IAQAJ");
test_math_log1p(-319);
test_math_log1p(-951);
test_math_log1p(-803);
test_math_log1p(7.797570380711878e+307);
test_math_log1p(-61);
test_math_log1p(-15);
test_math_log1p(-37);
test_math_log1p(-651);
test_math_log1p(-795);
test_math_log1p("WLTOM");
test_math_log1p(-425);
test_math_log1p("BUE9FEQH");
test_math_log1p("G8CJTZG1");
test_math_log1p(1.4771661632164871e+308);
test_math_log1p(-383);
test_math_log1p(4.395267802316299e+307);
test_math_log1p(-437);
test_math_log1p("7O1G06RL37");
test_math_log1p("ML7E7DD4M");
test_math_log1p(9.180284201666423e+307);
test_math_log1p(-737);
test_math_log1p(-761);
test_math_log1p("HH99KVNA4");
test_math_log1p(-403);
test_math_log1p("J80VD");
test_math_log1p("60GXX6B");
test_math_log1p(7.568402661909979e+307);
test_math_log1p(1.5238326569057922e+308);
test_math_log1p(-993);
test_math_log1p(-731);
test_math_log1p(1.5692058433999612e+308);
test_math_log1p(7.665173150964124e+307);
test_math_log1p(6.895329609321806e+307);
test_math_log1p("S2E4VU94Z");
test_math_log1p(1.569536055809815e+308);
test_math_log1p(-929);
test_math_log1p(6.999152083816807e+307);
test_math_log1p("SGJJ");
test_math_log1p("C8JA");
test_math_log1p(-555);
test_math_log1p(1.7884678053571615e+308);
test_math_log1p(6.760232640997955e+305);
test_math_log1p(-289);
test_math_log1p(5.024577049748688e+307);
test_math_log1p(1.2837063158188936e+308);
test_math_log1p(-823);
test_math_log1p("YNORJ1OR");
test_math_log1p(8.626398069235077e+307);
test_math_log1p(6.125431483272174e+307);
test_math_log1p(2.3830695904055768e+306);
test_math_log1p(-773);
test_math_log1p(-745);
test_math_log1p("ISHDB");
test_math_log1p(-395);
test_math_log1p("OJ4BU8EFV");
test_math_log1p("PZDM9RM");
test_math_log1p("0E3ZCNOXS");
test_math_log1p("SAKFKAR6J9");
test_math_log1p(1.4564440114410723e+307);
test_math_log1p(1.5053180549879065e+308);
test_math_log1p(1.6705692641591581e+308);
test_math_log1p("VLLQ");
test_math_log1p("HRA");
test_math_log1p("Y9ONG");
test_math_log1p(-47);
test_math_log1p("PKN2");
test_math_log1p("7IHLI8A1L");
test_math_log1p("1KW15E181");
test_math_log1p(4.811160662939782e+307);
test_math_log1p(1.288798298902885e+308);
test_math_log1p(-7);
test_math_log1p(1.0568746955612065e+308);
test_math_log1p(-881);
test_math_log1p(1.5249331628432202e+308);
test_math_log1p(1.6380476450997118e+308);
test_math_log1p(8.237968097837595e+307);
test_math_log1p("T6RT");
test_math_log1p(-185);
test_math_log1p("4F8ACAH");
test_math_log1p(-505);
test_math_log1p("NQ95");
test_math_log1p("VCXI2SOE");
test_math_log1p(1.0404133240457186e+307);
test_math_log1p(-211);
test_math_log1p(1.7079148956144068e+308);
test_math_log1p("6UZGJBTJHE");
test_math_log1p(-0xF1A7);
test_math_log1p(-375);
test_math_log1p("D7SR");
test_math_log1p(1.2946528269048441e+308);
test_math_log1p(1.7005089875296443e+308);
test_math_log1p(-443);
test_math_log1p(1.7076200470152779e+308);
test_math_log1p(-625);
test_math_log1p("62QE");
test_math_log1p("GFOSRSBWV1");
test_math_log1p(-843);
test_math_log1p(4.0282632768227307e+307);
test_math_log1p("M04D");
test_math_log1p(3.2547685278761085e+307);
test_math_log1p("N9MU5");
test_math_log1p(-247);
test_math_log1p("KZPJ49FL");
test_math_log1p("5CC03IRNR");
test_math_log1p(-793);
test_math_log1p(3.706494713463245e+307);
test_math_log1p(-659);
test_math_log1p(-87);
test_math_log1p(-721);
test_math_log1p(-573);
test_math_log1p(-809);
test_math_log1p(-23);
test_math_log1p("IBWVAK2N");
test_math_log1p("IT4FR");
test_math_log1p(1.4639036017029759e+308);
test_math_log1p(-389);
test_math_log1p(7.357146909145603e+307);
test_math_log1p(-685);
test_math_log1p(-381);
test_math_log1p("VT6K9");
test_math_log1p(-919);
test_math_log1p(9.559045006525853e+307);
test_math_log1p(1.066185409652139e+308);
test_math_log1p(-789);
test_math_log1p(-513);
test_math_log1p("6RF4U0I");
test_math_log1p(1.0806815432447716e+306);
test_math_log1p(5.325971439901355e+307);
test_math_log1p(5.429286903411166e+307);
test_math_log1p(-851);
test_math_log1p(9.882538315165222e+307);
test_math_log1p("ME203A");
test_math_log1p("RGXIB7859");
test_math_log1p(-939);
test_math_log1p("X44W9BXPX");
test_math_log1p("AQY2THYYT");
test_math_log1p("CYLLAET");
test_math_log1p("R1875YVI6B");
test_math_log1p(2.0168526345276016e+306);
test_math_log1p(-27);
test_math_log1p(-559);
test_math_log1p(1.6211180457933518e+308);
test_math_log1p(2.1429425014691357e+307);
test_math_log1p(1.7040451649893752e+308);
test_math_log1p(1.4462103701362394e+308);
test_math_log1p(1.1022805633936075e+308);
test_math_log1p(6.623442729001354e+305);
test_math_log1p("QUK29IYVO7");
test_math_log1p("QWL6DXR");
test_math_log1p(-377);
test_math_log1p(-485);
test_math_log1p(-903);
test_math_log1p(2.6451523363359457e+307);
test_math_log1p(1.4594425566327068e+308);
test_math_log1p("SKLSJRLH7R");
test_math_log1p(7.471893625120312e+307);
test_math_log1p("088XVZO0O1");
test_math_log1p(8.828222380625123e+307);
test_math_log1p(4.802425611090784e+307);
test_math_log1p(4.738851213828316e+307);
test_math_log1p("QLR");
test_math_log1p("SKJ2ONYB");
test_math_log1p(1.4951691685781477e+308);
test_math_log1p(2.3165053548073803e+307);
test_math_log1p(1.1044766019034713e+308);
test_math_log1p(1.7905845022165732e+308);
test_math_log1p("XTJYK");
test_math_log1p(-317);
test_math_log1p(-149);
test_math_log1p("VA5W");
test_math_log1p("QWVH");
test_math_log1p("GM6OT9FP");
test_math_log1p("9KQJ9100GL");
test_math_log1p("7VUE8");
test_math_log1p(1.7212705081240158e+308);
test_math_log1p("F736RO");
test_math_log1p("GW0LXXG0R");
test_math_log1p("BF5Q3");
test_math_log1p("VNQY1CIWS");
test_math_log1p(-955);
test_math_log1p(8.482506979046009e+307);
test_math_log1p("40TE3V4");
test_math_log1p(1.4801132458991792e+307);
test_math_log1p(1.6177953667019696e+308);
test_math_log1p(-849);
test_math_log1p(5.838505177888242e+307);
test_math_log1p("7IKE");
test_math_log1p("ROXYW");
test_math_log1p(-799);
test_math_log1p(1.6795056583201745e+308);
test_math_log1p(8.078667542157695e+307);
test_math_log1p(-957);
test_math_log1p(7.462962893623018e+307);
test_math_log1p("EEPWZ");
test_math_log1p(5.875672014682961e+307);
test_math_log1p("8UOUQN9");
test_math_log1p(634);
test_math_log1p(1.0543324834454018e+308);
test_math_log1p("O0VTARL");
test_math_log1p(-229);
test_math_log1p(6.251831902195056e+307);
test_math_log1p(6.410720680694496e+307);
test_math_log1p(-365);
test_math_log1p(1.8283750189345938e+306);
test_math_log1p(1.2574600979679842e+308);
test_math_log1p("11F0J4WM4Y");
test_math_log1p(-421);
test_math_log1p(8.156752113424697e+307);
test_math_log1p(1.0059081629951637e+307);
test_math_log1p(6.621098772070598e+307);
test_math_log1p("D58JTK0Z");
test_math_log1p(-885);
test_math_log1p(9.681598462395998e+307);
test_math_log1p(-79);
test_math_log1p(1.0449554120201232e+308);
test_math_log1p("TP8RITD");
test_math_log1p(-691);
test_math_log1p(4.276384473180794e+307);
test_math_log1p(-379);
test_math_log1p(-711);
test_math_log1p("LUX4083D");
test_math_log1p("C86MMY");
test_math_log1p("B0NQO1T7HN");
test_math_log1p(1.3460874581664633e+308);
test_math_log1p("K5A313EO");
test_math_log1p("ZFVD2C");
test_math_log1p("DMHGB9");
test_math_log1p(1.9840544775249565e+307);
test_math_log1p(1.1251151990097875e+308);
test_math_log1p(1.217564632334298e+308);
test_math_log1p("T0QJ416W");
test_math_log1p(3.590472959595755e+307);
test_math_log1p(8.309562690046893e+307);
test_math_log1p(-445);
test_math_log1p("YV9G96AK");
test_math_log1p("6NOOPR2Q8");
test_math_log1p(1.6838447593213309e+308);
test_math_log1p(-921);
test_math_log1p("8JGOCD2X");
test_math_log1p("8B6L9ST5X");
test_math_log1p("NZWSP68CN");
test_math_log1p(1.8437591214196854e+307);
test_math_log1p(-391);
test_math_log1p(7.464983018631097e+306);
test_math_log1p(4.2107768796436626e+307);
test_math_log1p("I6C9K22");
test_math_log1p(-977);
test_math_log1p(5.439421629088364e+307);
test_math_log1p("3L7");
test_math_log1p(5.281825860346721e+307);
test_math_log1p("A13");
test_math_log1p(1.1542061177571223e+308);
test_math_log1p(-19);
test_math_log1p(1.7485692216498267e+308);
test_math_log1p(-277);
test_math_log1p("QMLNHQC");
test_math_log1p("LIR3BUED27");
test_math_log1p(1.7672156509102912e+308);
test_math_log1p("XP9XO6TNS");
test_math_log1p(1.5692027691169228e+308);
test_math_log1p(786);
test_math_log1p(6.057100731734474e+307);
test_math_log1p("0OVJU9I71");
test_math_log1p(1.6940996766997292e+308);
test_math_log1p(1.64162244765495e+308);
test_math_log1p(7.957563507916507e+307);
test_math_log1p("HMXWRKJZ");
test_math_log1p(-807);
test_math_log1p(-645);
test_math_log1p("L2AFOZ41L");
test_math_log1p(-255);
test_math_log1p(-113);
test_math_log1p("5WKTWO");
test_math_log1p("JYQZE5H");
test_math_log1p("ZLVI");
test_math_log1p(-967);
test_math_log1p(-935);
test_math_log1p(-271);
test_math_log1p("5KBSYZSM0R");
test_math_log1p("23N3M");
test_math_log1p(1.0460663877342476e+308);
test_math_log1p(1.2202300896133977e+308);
test_math_log1p(-627);
test_math_log1p("69TFKC66");
test_math_log1p(-679);
test_math_log1p(6.131101177115831e+306);
test_math_log1p("IFG8PG");
test_math_log1p(1.7647248804968512e+308);
test_math_log1p("PV984T152");
test_math_log1p(6.589489084903392e+307);
test_math_log1p(-871);
test_math_log1p(1.5343699106262462e+308);
test_math_log1p(1.0660094135215904e+308);
test_math_log1p("XIIOZWDX");
test_math_log1p("ZIGP");
test_math_log1p(1.0152693558693006e+308);
test_math_log1p(1.3678233094640432e+308);
test_math_log1p("VYZAW");
test_math_log1p(-565);
test_math_log1p(-153);
test_math_log1p(-313);
test_math_log1p("YPF");
test_math_log1p("HR468U7G");
test_math_log1p(-907);
test_math_log1p(-251);
test_math_log1p("YSM2UL6ZY");
test_math_log1p("86KOX");
test_math_log1p(1.5153629159235348e+308);
test_math_log1p(8.442284296058977e+307);
test_math_log1p(2.796925385381481e+307);
test_math_log1p("CEL80580WM");
test_math_log1p(1.1146836261356828e+308);
test_math_log1p(5.622904667660069e+307);
test_math_log1p(6.395738561181374e+307);
test_math_log1p("WNO");
test_math_log1p("97MJT");
test_math_log1p("55XF");
test_math_log1p("33OCL6O6W");
test_math_log1p("D9Z1H");
test_math_log1p("ZY1X");
test_math_log1p("S0GRJ860D6");
test_math_log1p(1.4426269756612152e+308);
test_math_log1p("2S4UT2P8JG");
test_math_log1p(3.044084586863729e+307);
test_math_log1p("SN4UF6CPB");
test_math_log1p(7.037276658160259e+307);
test_math_log1p(4.864385394096058e+307);
test_math_log1p(-205);
test_math_log1p("S4R2AR22Y0");
test_math_log1p("9P6Z");
test_math_log1p(-827);
test_math_log1p("7KZQUB398X");
test_math_log1p("C1I9QNJHD");
test_math_log1p("7KP");
test_math_log1p("688FGD");
test_math_log1p("1VO");
test_math_log1p(-257);
test_math_log1p("55EAZU65");
test_math_log1p("3G7TSR9Z");
test_math_log1p(-75);
test_math_log1p(-541);
test_math_log1p(-457);
test_math_log1p(1.1728305493008647e+308);
test_math_log1p("LQ2Y5K");
test_math_log1p("3A7178");
test_math_log1p("ZO8X0OL");
test_math_log1p("AQ1KB5HL7");
test_math_log1p(1.1488786811651218e+308);
test_math_log1p(-971);
test_math_log1p(1.575297932931496e+308);
test_math_log1p(1.0156242340029826e+308);
test_math_log1p("854V0A6TT");
test_math_log1p(-841);
test_math_log1p(-477);
test_math_log1p(1.5423106104318274e+308);
test_math_log1p(1.1792922669698913e+308);
test_math_log1p(1.091855014064348e+308);
test_math_log1p(-487);
test_math_log1p("BIDJ");
test_math_log1p("JRR0XYP2U5");
test_math_log1p(1.5040649648760255e+308);
test_math_log1p(-25);
test_math_log1p(7.28126860873446e+307);
test_math_log1p(1.26613759458265e+308);
test_math_log1p("UJ4");
test_math_log1p(1.536235757062813e+308);
test_math_log1p("E6IPCND0W");
test_math_log1p(8.792238661156868e+307);
test_math_log1p("DS4");
test_math_log1p(1.3740138717833047e+308);
test_math_log1p("HJ3C92Z");
test_math_log1p(-987);
test_math_log1p("OZ9");
test_math_log1p("AOQ");
test_math_log1p(1.5180896165135465e+308);
test_math_log1p(-913);
test_math_log1p(1.0656878407141475e+308);
test_math_log1p(-667);
test_math_log1p(1.5772989992343512e+308);
test_math_log1p(-93);
test_math_log1p("ECMEE9");
test_math_log1p("MS3");
test_math_log1p(3.4510390176863113e+307);
test_math_log1p(3.25497037024934e+307);
test_math_log1p("8K5H");
test_math_log1p("382TGAGRW");
test_math_log1p(6.43833771169114e+307);
test_math_log1p("3BJ");
test_math_log1p(1.3807929438765137e+308);
test_math_log1p(7.138976246815112e+307);
test_math_log1p("OYPHLDIE3");
test_math_log1p(2.8483594823773873e+307);
test_math_log1p(3.4921186519465865e+307);
test_math_log1p("EDAIW3U3D");
test_math_log1p("FQG3P");
test_math_log1p(1.2309260273668859e+308);
test_math_log1p(-243);
test_math_log1p(-909);
test_math_log1p("O2HC7VAKB");
test_math_log1p(-959);
test_math_log1p(3.110444871952018e+307);
test_math_log1p("WE07Z");
test_math_log1p("KGZN6ZIJX3");
test_math_log1p("ZXIAXSQB");
test_math_log1p("EVILD6Y");
test_math_log1p("HYMT2D0XAG");
test_math_log1p("3PXHW6");
test_math_log1p("652I");
test_math_log1p(-309);
test_math_log1p(-165);
test_math_log1p(-479);
test_math_log1p(-777);
test_math_log1p(-441);
test_math_log1p(1.039662408450218e+308);
test_math_log1p(-507);
test_math_log1p("B4E1");
test_math_log1p("M7JP8");
test_math_log1p(7.239107738588752e+307);
test_math_log1p(1.2322549897785214e+308);
test_math_log1p("VNM3W8UKY");
test_math_log1p(-817);
test_math_log1p(3.3994953443005876e+307);
test_math_log1p(-723);
test_math_log1p("TK9V61U");
test_math_log1p(-975);
test_math_log1p("8TQU8CH");
test_math_log1p(-543);
test_math_log1p(1.2817437292755936e+308);
test_math_log1p(-351);
test_math_log1p(-853);
test_math_log1p(1.660743953213306e+308);
test_math_log1p(-643);
test_math_log1p("ULR9EMOK");
test_math_log1p(1.6941442273145484e+308);
test_math_log1p("KXEOW80OH");
test_math_log1p("QHP");
test_math_log1p(-877);
test_math_log1p(7.600527094156537e+307);
test_math_log1p(-539);
test_math_log1p(-905);
test_math_log1p(3.0865832599106294e+307);
test_math_log1p("DRNSXAW");
test_math_log1p(8.937878426546656e+307);
test_math_log1p(-275);
test_math_log1p("W5C0");
test_math_log1p("N18Y3");
test_math_log1p("GPSM17");
test_math_log1p("9CSV");
test_math_log1p(-43);
test_math_log1p("R9HAZD9GH");
test_math_log1p(-467);
test_math_log1p(2.638990109098008e+307);
test_math_log1p("I30ITAQCKN");
test_math_log1p(1.6172452110570432e+306);
test_math_log1p("JPKHBZ1");
test_math_log1p(4.2421929401004847e+307);
test_math_log1p("A4WN8N0");
test_math_log1p(1.143938658581595e+308);
test_math_log1p(-215);
test_math_log1p(2.29262951393736e+307);
test_math_log1p("3BE3TOXP");
test_math_log1p(1.6355821310425317e+307);
test_math_log1p(-429);
test_math_log1p(1.5364049144288869e+308);
test_math_log1p("ZH4RHLLD");
test_math_log1p(1.2342822267812693e+307);
test_math_log1p(-189);
test_math_log1p(-529);
test_math_log1p(-797);
test_math_log1p("PQSKCLG6");
test_math_log1p(1.1164871174448342e+308);
test_math_log1p("5X3");
test_math_log1p(-293);
test_math_log1p(1.57251330876397e+308);
test_math_log1p(2.523791602048276e+307);
test_math_log1p("QA6WTABRJ");
test_math_log1p("QM1ZLKO8J");
test_math_log1p(-893);
test_math_log1p("GTD8X");
test_math_log1p(5.639096588919733e+307);
test_math_log1p(1.1265272442287333e+308);
test_math_log1p(5.443324750239985e+307);
test_math_log1p("F6HP");
test_math_log1p(7.821832292433882e+307);
test_math_log1p("DXQDXRU1X");
test_math_log1p(3.2060260653122755e+307);
test_math_log1p("WDUYBA");
test_math_log1p(1.7624847607482813e+308);
test_math_log1p("AEEY9");
test_math_log1p(-525);
test_math_log1p("LF012B");
test_math_log1p("B74ERS");
test_math_log1p(5.575144063858512e+307);
test_math_log1p("6I4J");
test_math_log1p(-673);
test_math_log1p(1.5691750176320018e+308);
test_math_log1p("UC7HUGVB9");
test_math_log1p(-161);
test_math_log1p(5.256468851130146e+307);
test_math_log1p("SFZ");
test_math_log1p(2.264649674151618e+307);
test_math_log1p("OOKO2YH2O");
test_math_log1p("0I58");
test_math_log1p("YLU1FL2");
test_math_log1p(8.462208261485451e+306);
test_math_log1p(-233);
test_math_log1p("WXT");
test_math_log1p(1.3239756323329003e+308);
test_math_log1p(-45);
test_math_log1p("PDDEY6E3");
test_math_log1p("NUTC9ULGS");
test_math_log1p("GFWYCM");
test_math_log1p(1.7324449030558385e+308);
test_math_log1p(1.212294162480485e+308);
test_math_log1p("5CE6");
test_math_log1p(1.441786284447408e+308);
test_math_log1p("GFA");
test_math_log1p("HJBOH7");
test_math_log1p(-427);
test_math_log1p(1.6074481903114776e+308);
test_math_log1p(-639);
test_math_log1p(1.0497097317928334e+308);
test_math_log1p("H0REJMOMC");
test_math_log1p(3.873950941552373e+307);
test_math_log1p(-561);
test_math_log1p(3.695398593368771e+307);
test_math_log1p(8.138357832174376e+307);
test_math_log1p(-579);
test_math_log1p("06VSJRSZVW");
test_math_log1p(-223);
test_math_log1p("PGNE8");
test_math_log1p(1.631955235693227e+307);
test_math_log1p(3.3524015108338696e+307);
test_math_log1p(3.044705034040619e+307);
test_math_log1p(1.59658104524781e+308);
test_math_log1p(7.068113990893249e+306);
test_math_log1p(1.4077193097402695e+308);
test_math_log1p(6.449977026486807e+307);
test_math_log1p(-419);
test_math_log1p(1.658576556420301e+308);
test_math_log1p(1.520622489297348e+307);
test_math_log1p("OBT1");
test_math_log1p("9PEARVH8");
test_math_log1p(1.1900611312871243e+308);
test_math_log1p(-107);
test_math_log1p(-413);
test_math_log1p("2OYN");
test_math_log1p(1.3378478615226153e+308);
test_math_log1p("I5GZ5P3A");
test_math_log1p("C4MS");
test_math_log1p("QX31LI2T");
test_math_log1p(1.1502406076167467e+308);
test_math_log1p(-363);
test_math_log1p("491AE7U");
test_math_log1p("WS275UN77");
test_math_log1p(1.3156477298351906e+308);
test_math_log1p(4.0393881161241456e+307);
test_math_log1p("O9EOHSM");
test_math_log1p("2KXZZ");
test_math_log1p(-547);
test_math_log1p(1.2604548631337432e+308);
test_math_log1p("SA5391M91");
test_math_log1p(-933);
test_math_log1p("Y8L5N");
test_math_log1p(3.861356334676362e+307);
test_math_log1p(2.944184036443879e+307);
test_math_log1p("FD5ZHI");
test_math_log1p("0LM6HR");
test_math_log1p(1.4306035479157185e+307);
test_math_log1p("B8WZ");
test_math_log1p(-649);
test_math_log1p(4.3922308219858676e+306);
test_math_log1p(1.0754008157282103e+308);
test_math_log1p(-281);
test_math_log1p("M6F4IH");
test_math_log1p(-367);
test_math_log1p(1.436065806504502e+308);
test_math_log1p(-863);
test_math_log1p(8.112513643433566e+307);
test_math_log1p("FOF");
test_math_log1p("D3CS5");
test_math_log1p(6.279500353615971e+307);
test_math_log1p(-791);
test_math_log1p("GR2NS997X");
test_math_log1p("7JY51IE5");
test_math_log1p(-899);
test_math_log1p(1.7762084838830221e+308);
test_math_log1p("Q0PO5DJ");
test_math_log1p("5N5");
test_math_log1p(3.890355274364433e+307);
test_math_log1p(3.9808208863185905e+307);
test_math_log1p(4.202027370188957e+307);
test_math_log1p(1.5243135023877207e+308);
test_math_log1p(8.890484276946259e+307);
test_math_log1p("JKB82GV2YI");
test_math_log1p("3CXG");
test_math_log1p("OWMLOFY2");
test_math_log1p(-813);
test_math_log1p("QLAWLCVJ");
test_math_log1p(9.907669350673582e+306);
test_math_log1p(-315);
test_math_log1p("J7BWS0Z5");
test_math_log1p(-787);
test_math_log1p(3.71195107560575e+306);
test_math_log1p("6BL2N");
test_math_log1p(-459);
test_math_log1p(-947);
test_math_log1p(-733);
test_math_log1p("FDLS1O5L0");
test_math_log1p("FTXBSKJR1");
test_math_log1p(5.246010326286196e+307);
test_math_log1p(8.979790479600894e+307);
test_math_log1p(1.348259768415835e+308);
test_math_log1p(764);
test_math_log1p("MAYP");
test_math_log1p(5.375797441513845e+307);
test_math_log1p("IZC2P");
test_math_log1p(1.1906419583855789e+308);
test_math_log1p("VAYH");
test_math_log1p(8.472826834789497e+307);
test_math_log1p(1.1296578152156805e+308);
test_math_log1p(1.331955518472249e+308);
test_math_log1p(-999);
test_math_log1p("QHJ");
test_math_log1p(6.288230977336995e+307);
test_math_log1p(-131);
test_math_log1p("G4Z100SR");
test_math_log1p("4FYMLXAT");
test_math_log1p(1.7254626932558906e+307);
test_math_log1p(-965);
test_math_log1p(-571);
test_math_log1p(-295);
test_math_log1p("PI7FSF17N");
test_math_log1p(1.3490327117375436e+308);
test_math_log1p(1.1703519019752248e+308);
test_math_log1p(-253);
test_math_log1p(1.4868537315717292e+308);
test_math_log1p("NT9");
test_math_log1p("W9X");
test_math_log1p("NZX4");
test_math_log1p(-801);
test_math_log1p("58JZ");
test_math_log1p(-327);
test_math_log1p(8.495926456366078e+307);
test_math_log1p(1.7355524731391482e+307);
test_math_log1p(3.8673496749279916e+307);
test_math_log1p("TTNZVC");
test_math_log1p(9.0654727802399e+307);
test_math_log1p(1.7122686636636642e+308);
test_math_log1p("P2ISR4");
test_math_log1p(-299);
test_math_log1p(1.1137842392531896e+308);
test_math_log1p(-557);
test_math_log1p(-49);
test_math_log1p(2.9346142929269173e+307);
test_math_log1p("ZZKK7PI");
test_math_log1p(2.34129850981954e+306);
test_math_log1p(-911);
test_math_log1p(6.529484780644015e+307);
test_math_log1p(1.4737058612774633e+308);
test_math_log1p(8.85400762554399e+307);
test_math_log1p(4.365610478349054e+307);
test_math_log1p("4L3LG7");
test_math_log1p("YUTYT");
test_math_log1p("LPITGJJQ");
test_math_log1p("0Z04NY001R");
test_math_log1p(3.153036182695264e+307);
test_math_log1p("WNP");
test_math_log1p(1.6574693230365598e+308);
test_math_log1p(1.4112804182085294e+308);
test_math_log1p(1.3420166236082312e+308);
test_math_log1p(-727);
test_math_log1p(1.1866072045469412e+308);
test_math_log1p("D2OOLJW");
test_math_log1p("GFHCD");
test_math_log1p(-889);
test_math_log1p(1.1537933579420657e+307);
test_math_log1p(-641);
test_math_log1p("5TOA0");
test_math_log1p(-631);
test_math_log1p(1.4261406029522485e+307);
test_math_log1p(-307);
test_math_log1p(1.4845973671196822e+308);
test_math_log1p(-633);
test_math_log1p("8EKOAO");
test_math_log1p(5.387228768569992e+307);
test_math_log1p(5.338033230314611e+307);
test_math_log1p("E8Z0L6L1AO");
test_math_log1p("ZGRWDWFK");
test_math_log1p("HABUA7MS");
test_math_log1p(4.8333171513654624e+306);
test_math_log1p(-355);
test_math_log1p("ENR");
test_math_log1p(-497);
test_math_log1p("ER0");
test_math_log1p("1GTRCP");
test_math_log1p("466WT6M5");
test_math_log1p(-269);
test_math_log1p("HMN91");
test_math_log1p("KICH");
test_math_log1p(-687);
test_math_log1p(1.4171430570994267e+308);
test_math_log1p(1.1491917193549832e+308);
test_math_log1p(8.301643828660683e+307);
test_math_log1p(1.658942855239289e+308);
test_math_log1p(-135);
test_math_log1p(1.3175819963525198e+308);
test_math_log1p("MD8K9LIF");
test_math_log1p(-265);
test_math_log1p("E9R2YAG0EA");
test_math_log1p("D2L060FML6");
test_math_log1p(-989);
test_math_log1p(9.732309879432142e+307);
test_math_log1p(8.965092328674334e+307);
test_math_log1p("41FU96AZS");
test_math_log1p(3.608305294084634e+307);
test_math_log1p(1.051740821583647e+308);
test_math_log1p(1.109187619681353e+308);
test_math_log1p("QO7T1QCT0");
test_math_log1p("3XG");
test_math_log1p(-747);
test_math_log1p(1.6485683728875858e+308);
test_math_log1p(6.52752338031072e+307);
test_math_log1p(7.640815171643002e+307);
test_math_log1p("EKI5");
test_math_log1p(-729);
test_math_log1p("KL7");
test_math_log1p(8.569670792713235e+306);
test_math_log1p(7.748344867048975e+307);
test_math_log1p(1.7278911406535605e+308);
test_math_log1p("V0JIUAO");
test_math_log1p("4ZUQTCEBN");
test_math_log1p(-943);
test_math_log1p(-581);
test_math_log1p(-635);
test_math_log1p(3.2114630317093077e+307);
test_math_log1p(-811);
test_math_log1p(1.241672611608703e+308);
test_math_log1p(-237);
test_math_log1p("5EXC548E");
test_math_log1p("8J5A");
test_math_log1p(9.035610452842218e+307);
test_math_log1p("QGQMVEJA1L");
test_math_log1p(-325);
test_math_log1p(-399);
test_math_log1p(7.476745979743809e+307);
test_math_log1p("O6UB58");
test_math_log1p("IM4ODT0P");
test_math_log1p("5VE4L59CAB");
test_math_log1p(1.4366589846912176e+308);
test_math_log1p("7CSSQNBNEG");
test_math_log1p(1.5593353345285146e+308);
test_math_log1p(1.7018528527013142e+308);
test_math_log1p("E4SSH4W");
test_math_log1p("QHUW5");
test_math_log1p(1.111214049641981e+308);
test_math_log1p(1.4692639731337486e+308);
test_math_log1p(9.803096541679751e+307);
test_math_log1p("4FF");
test_math_log1p(-599);
test_math_log1p(-527);
test_math_log1p(7.920116379794067e+306);
test_math_log1p(-741);
test_math_log1p(-95);
test_math_log1p("1U4TYF6X");
test_math_log1p("W7FBP039UF");
test_math_log1p("HMZUO");
test_math_log1p(1.5692989297401135e+307);
test_math_log1p(-83);
test_math_log1p(1.2524075419311118e+308);
test_math_log1p("0WLGRGGLAM");
test_math_log1p("DXEA25");
test_math_log1p(2.884791237935427e+307);
test_math_log1p(1.3545769333665887e+308);
test_math_log1p(7.139940662037529e+307);
test_math_log1p(-963);
test_math_log1p("JXQA8M");
test_math_log1p("IUI1KPS75");
test_math_log1p("Q0EVRUZ3");
test_math_log1p(1.4826619459079144e+308);
test_math_log1p(-139);
test_math_log1p("JROPUZ");
test_math_log1p("87XYBS");
test_math_log1p(6.69383217880315e+306);
test_math_log1p("3S98OU");
test_math_log1p("DN1M6NO9C3");
test_math_log1p("SLLKWS");
test_math_log1p(8.594433172111524e+307);
test_math_log1p(2.2073282124980686e+307);
test_math_log1p("DXKMU");
test_math_log1p(2.542054021665594e+307);
test_math_log1p(-901);
test_math_log1p("9BJC");
test_math_log1p("REVN7IH");
test_math_log1p(1.097770336463911e+308);
test_math_log1p(-183);
test_math_log1p("5UFQTQHN96");
test_math_log1p(1.4864671561064135e+308);
test_math_log1p(-141);
test_math_log1p(9.537942716740878e+307);
test_math_log1p("Z0OM8E");
test_math_log1p(-855);
test_math_log1p(-213);
test_math_log1p("OIK8H");
test_math_log1p(-489);
test_math_log1p(9.814912890611592e+307);
test_math_log1p(1.0521648327010747e+308);
test_math_log1p(-191);
test_math_log1p(1.6384157231730742e+308);
test_math_log1p("3G75K8YD5R");
test_math_log1p(-103);
test_math_log1p("ER0TB");
test_math_log1p(1.2234802681810955e+308);
test_math_log1p(1.3972327128982083e+308);
test_math_log1p("YK2");
test_math_log1p("MH7XP1");
test_math_log1p("RI358EBP");
test_math_log1p(9.722200249603871e+307);
test_math_log1p(1.2152708925840522e+308);
test_math_log1p(5.622696991283203e+307);
test_math_log1p(-805);
test_math_log1p("9K2HWS");
test_math_log1p(1.0871103472753543e+307);
test_math_log1p(8.655289869019834e+306);
test_math_log1p(8.031535750210686e+307);
test_math_log1p(1.0055777467347985e+308);
test_math_log1p(-353);
test_math_log1p("G85PG");
test_math_log1p(3.3810976844240796e+307);
test_math_log1p("MRNVZ6B2");
test_math_log1p(1.1645682531384432e+308);
test_math_log1p(-775);
test_math_log1p(8.152708275713745e+306);
test_math_log1p("TINRK6EB7");
test_math_log1p("0WUQ9FOA8");
test_math_log1p("81F49");
test_math_log1p(3.5961034295615484e+307);
test_math_log1p("FVE");
test_math_log1p("2Y3CX5");
test_math_log1p(-221);
test_math_log1p(-111);