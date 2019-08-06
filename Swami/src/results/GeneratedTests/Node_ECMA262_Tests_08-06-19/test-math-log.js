/*
* This file is automatically generated by Swami
*
* 2019-08-06 12:34:51.887341
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
function test_math_log(x){
	if (Object.is( x,NaN )){
		var output = Math.log(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (( x < 0 )){
		var output = Math.log(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if ((Object.is( x,+ 0) &&  x === - 0 )){
		var output = Math.log(x);
		assert.strictEqual(- Infinity, output);
		console.log("Good Test");
		return;
		}
	if (( x === 1 )){
		var output = Math.log(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === + Infinity )){
		var output = Math.log(x);
		assert.strictEqual(+ Infinity, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}



/*TESTS GENERATED AUTOMATICALLY*/
test_math_log(5.406097211511657e+306);
test_math_log(-3);
test_math_log(-0);
test_math_log(NaN);
test_math_log(/(\w+)\s(\w+)/);
test_math_log(-793);
test_math_log(null);
test_math_log(/ab+c/);
test_math_log("NVX5QP7");
test_math_log(true);
test_math_log(/[\u0400-\u04FF]+/g);
test_math_log(-21);
test_math_log("HNK9DQXS3");
test_math_log(-719);
test_math_log(/yes.*day/);
test_math_log(/foo/g);
test_math_log(2.0797657411450993e+307);
test_math_log(-649);
test_math_log(false);
test_math_log(1.7332366147955347e+308);
test_math_log(Infinity);
test_math_log("MJI6TY");
test_math_log("G1T9BXELKP");
test_math_log(9.864435954470704e+307);
test_math_log(1.5274084469238114e+308);
test_math_log(3.6650298603163486e+307);
test_math_log(-301);
test_math_log("G55CWBMX");
test_math_log(6.217337276575303e+307);
test_math_log("Q9FIAGGMRX");
test_math_log(+0);
test_math_log(/\r\n|\r|\n/);
test_math_log(9.840745633414393e+307);
test_math_log("GJZ");
test_math_log(3.619698612888953e+307);
test_math_log("EVDE33");
test_math_log(5.653715276268086e+307);
test_math_log(-751);
test_math_log(3.3478048383913714e+307);
test_math_log("ZCALRUT");
test_math_log("2VI6FS1RM");
test_math_log(-37);
test_math_log(/[^.]+/);
test_math_log(-529);
test_math_log(7.405398239354905e+307);
test_math_log(-71);
test_math_log(1.2663602871858648e+308);
test_math_log(1.5472657872681005e+308);
test_math_log(-389);
test_math_log(-843);
test_math_log("L8QF5CEGX5");
test_math_log(-911);
test_math_log(1.3260922320543648e+308);
test_math_log(-343);
test_math_log(-863);
test_math_log(-509);
test_math_log(1.7184882511531568e+308);
test_math_log(-695);
test_math_log(1.5973707628173888e+308);
test_math_log("04DP4LO7A");
test_math_log(-405);
test_math_log(-821);
test_math_log(6.305299756143292e+307);
test_math_log("XFE905T8HJ");
test_math_log(5.926530660335452e+306);
test_math_log("WVSPU");
test_math_log(1.2739915293588339e+308);
test_math_log(648);
test_math_log(1.0578911060871979e+308);
test_math_log(-883);
test_math_log(6.434494399264213e+307);
test_math_log(-307);
test_math_log(1.4057926947982362e+307);
test_math_log("89BHAJ");
test_math_log(1.6168384721816397e+308);
test_math_log("8OCYDL97MY");
test_math_log(-119);
test_math_log(-949);
test_math_log("Q1LM");
test_math_log(7.9180863556246e+307);
test_math_log(1.027714347226808e+308);
test_math_log(4.677346628575893e+307);
test_math_log(-167);
test_math_log("76F9N0RH");
test_math_log("7L8FY6YJ9L");
test_math_log(1.3920105637925255e+307);
test_math_log("F725K");
test_math_log("46AXMWDIQ7");
test_math_log(-449);
test_math_log(9.209779109678815e+307);
test_math_log(-329);
test_math_log(1.5171063509370118e+308);
test_math_log(-533);
test_math_log("6BHXDZX9O8");
test_math_log("2IUL3");
test_math_log(-927);
test_math_log(-59);
test_math_log("4F0");
test_math_log("MNNB28NZ2");
test_math_log("OHQG690U");
test_math_log("B18D7N8UE2");
test_math_log("7ZT4SW");
test_math_log(1.7530424832047619e+308);
test_math_log(-621);
test_math_log(1.5019150912089477e+307);
test_math_log("C8C");
test_math_log("N2B1LE");
test_math_log(-653);
test_math_log(8.05404598528046e+307);
test_math_log(-959);
test_math_log(-761);
test_math_log(-873);
test_math_log(-907);
test_math_log(/yes[^]*day/);
test_math_log("MFL7D5JARK");
test_math_log(8.559541701712552e+307);
test_math_log(1.2667846517528273e+308);
test_math_log(undefined);
test_math_log("E6ZSC9");
test_math_log(4.1568634931674764e+307);
test_math_log(-493);
test_math_log(-97);
test_math_log(-723);
test_math_log(-265);
test_math_log(-261);
test_math_log(-687);
test_math_log("W6BXE");
test_math_log(1.3510840335836738e+307);
test_math_log(4.611891628908869e+307);
test_math_log("AHBV22L9V");
test_math_log(6.679225975929389e+307);
test_math_log(9.989945107184623e+307);
test_math_log("95R");
test_math_log("K3XKBYBMSG");
test_math_log(1.6313104626025022e+308);
test_math_log("W2JUG3");
test_math_log("RNB2");
test_math_log(288);
test_math_log(6.684670236287679e+307);
test_math_log("9NQU");
test_math_log(1.6082247517647955e+308);
test_math_log(-901);
test_math_log("CT3UZUZH");
test_math_log(6.046248715335585e+306);
test_math_log("ZF0");
test_math_log("8H74GBJIQ");
test_math_log(-33);
test_math_log("HPHGV");
test_math_log(-355);
test_math_log(1.1523518120104799e+308);
test_math_log(-303);
test_math_log(2.4230588565100157e+307);
test_math_log(-299);
test_math_log("ZLD");
test_math_log("GY3");
test_math_log(-283);
test_math_log("3NGS0R");
test_math_log(3.9802503937256734e+307);
test_math_log(-139);
test_math_log(9.793767202950755e+307);
test_math_log(1.238760211340785e+308);
test_math_log(1.0634130057110978e+308);
test_math_log(1.506507434073478e+308);
test_math_log(1.0859752458019408e+308);
test_math_log("QA0PUW66Z");
test_math_log("NFQ1KUSTE");
test_math_log("8RB");
test_math_log(1.3511089794317655e+308);
test_math_log(4.844668268261239e+307);
test_math_log(5.51957039022051e+307);
test_math_log("695");
test_math_log("TYQ4443");
test_math_log(3.3887521932389615e+307);
test_math_log(1.4323146567978865e+308);
test_math_log("AEX");
test_math_log(1.0771361568234711e+307);
test_math_log(-289);
test_math_log("EU5RT478");
test_math_log("C1FB4");
test_math_log("AJF");
test_math_log("JPKHBZ1");
test_math_log(7.167884020482863e+307);
test_math_log("XFF");
test_math_log("0ZFVZFD");
test_math_log("GVL4GOQN7");
test_math_log("5YB");
test_math_log(3.4291172017285984e+307);
test_math_log(-817);
test_math_log("4QVWA3");
test_math_log(1.360877171405208e+308);
test_math_log(1.5188803262615276e+308);
test_math_log(3.333950322890973e+307);
test_math_log(1.120617908247511e+307);
test_math_log(-779);
test_math_log(1.4631186132827111e+308);
test_math_log(-475);
test_math_log(1.606677448325758e+308);
test_math_log(8.741913518446198e+307);
test_math_log("D487");
test_math_log(-975);
test_math_log("6SBN17");
test_math_log("5TJ8");
test_math_log("O2Q9FO");
test_math_log("6C7B1");
test_math_log(8.129020735446045e+307);
test_math_log("31NYDQ");
test_math_log(-103);
test_math_log("A2G0");
test_math_log(-579);
test_math_log("GDO22LYTWG");
test_math_log(-335);
test_math_log(1.6952031961768735e+308);
test_math_log(7.44666181355847e+307);
test_math_log(-93);
test_math_log("KUHCJJB");
test_math_log(1.7233371550854259e+308);
test_math_log("H2H74Z");
test_math_log(9.59165102768672e+307);
test_math_log(-951);
test_math_log("D5WEM1");
test_math_log(1.2725737007587462e+308);
test_math_log(1.484768286715405e+308);
test_math_log(6.819578961854679e+307);
test_math_log(4.929808071652579e+307);
test_math_log("TIGAH7");
test_math_log(1.5941880691833693e+308);
test_math_log(1.7862465425387356e+307);
test_math_log(-785);
test_math_log(2.8369816290628475e+307);
test_math_log("UPT5CIBH");
test_math_log(9.655871397916764e+307);
test_math_log(1.344081131541674e+308);
test_math_log(1.2475610781876506e+308);
test_math_log("0T5UZH80Z");
test_math_log(2.2030967529992877e+307);
test_math_log(-671);
test_math_log(1.2174761190595039e+308);
test_math_log(-237);
test_math_log(3.381833821908987e+307);
test_math_log(-467);
test_math_log(1.959195304967e+307);
test_math_log("UJ5");
test_math_log("5URM0J");
test_math_log(1.6900479602594017e+308);
test_math_log(-41);
test_math_log(1.2501714342585221e+308);
test_math_log(-673);
test_math_log(-437);
test_math_log("D22KK2VP");
test_math_log(-445);
test_math_log(-633);
test_math_log(-973);
test_math_log(-743);
test_math_log(-229);
test_math_log(-823);
test_math_log(8.162160321406697e+307);
test_math_log(-955);
test_math_log(1.6105753179515714e+308);
test_math_log("EN35JTAD");
test_math_log(-463);
test_math_log(-587);
test_math_log(1.3429114876108062e+307);
test_math_log(-515);
test_math_log(1.538482204335847e+308);
test_math_log(3.827733792863768e+307);
test_math_log(-599);
test_math_log("HAQHGU");
test_math_log("541K5");
test_math_log("NLMHDQJM");
test_math_log(4.0018175200104644e+307);
test_math_log("RRG32CVE4");
test_math_log(4.332951336566932e+307);
test_math_log("MXYOL");
test_math_log("DBR5");
test_math_log(-807);
test_math_log(-375);
test_math_log(1.3284271964472094e+308);
test_math_log(1.572197150861827e+307);
test_math_log("2SU6MP");
test_math_log("N61");
test_math_log("2CJOC2NQ4");
test_math_log("OTPLK");
test_math_log(1.567875250839619e+308);
test_math_log(1.2297356934680162e+308);
test_math_log(3.748579613687752e+307);
test_math_log(-593);
test_math_log("765GO");
test_math_log(-725);
test_math_log(1.1649585263548305e+308);
test_math_log("BH6N5M5");
test_math_log(1.6245630575327939e+308);
test_math_log("XGMF");
test_math_log(4.571534154375675e+307);
test_math_log("JRF");
test_math_log(2.5589891569856904e+307);
test_math_log(1.27570478665692e+308);
test_math_log(1.2134386752632416e+307);
test_math_log("UZPP544T");
test_math_log("5N4");
test_math_log("LH0XFUYI");
test_math_log(1.0796755813074863e+308);
test_math_log("WW2H2LOVB");
test_math_log(-989);
test_math_log(4.1274761761765684e+307);
test_math_log(1.187328410341563e+308);
test_math_log("1JKDI6LBR");
test_math_log(6.842736860733881e+307);
test_math_log(-749);
test_math_log("T7B");
test_math_log(-839);
test_math_log(1.2663058348469889e+308);
test_math_log(1.6179449755155211e+308);
test_math_log("PBG");
test_math_log(4.764768214661204e+307);
test_math_log(-435);
test_math_log(-637);
test_math_log(-479);
test_math_log("WXF");
test_math_log("ZI76");
test_math_log(-203);
test_math_log(3.801273921820338e+307);
test_math_log(-527);
test_math_log(7.830318105216e+306);
test_math_log("5I3XHYCK");
test_math_log(9.22363363328356e+307);
test_math_log(-847);
test_math_log("IBW0TH");
test_math_log(3.4118932081810056e+306);
test_math_log("K9D9TN8O29");
test_math_log(4.98729566332457e+307);
test_math_log("Z01O");
test_math_log(-395);
test_math_log(1.736609862814999e+308);
test_math_log("HZ4H");
test_math_log("3LV6Z");
test_math_log(-931);
test_math_log(6.52752338031072e+307);
test_math_log(1.44613987895437e+308);
test_math_log("QQ9");
test_math_log(-293);
test_math_log("L22T8");
test_math_log(-571);
test_math_log(3.064505652063649e+307);
test_math_log("3CKQMTK");
test_math_log(-121);
test_math_log(-679);
test_math_log(-745);
test_math_log(-453);
test_math_log(9.430878415001434e+307);
test_math_log("WM7");
test_math_log(9.760928220820417e+307);
test_math_log(-227);
test_math_log(1.3761987430206042e+308);
test_math_log(-523);
test_math_log(2.2693847139992093e+307);
test_math_log(-507);
test_math_log(7.61904462652421e+307);
test_math_log(-921);
test_math_log(-549);
test_math_log("YD09N");
test_math_log(1.4024835761152628e+308);
test_math_log(-197);
test_math_log(-663);
test_math_log(1.573777532958801e+308);
test_math_log(3.8715000908452546e+307);
test_math_log("5FUXUG0AS");
test_math_log(1.22566477020644e+307);
test_math_log("PO21O");
test_math_log(-337);
test_math_log(1.4475253181716469e+308);
test_math_log(3.4514201946657786e+307);
test_math_log(1.1745405645255714e+308);
test_math_log(1.3007951027959457e+308);
test_math_log("D8ECW");
test_math_log(-631);
test_math_log(3.7601205065342935e+307);
test_math_log(7.35436838722087e+307);
test_math_log(-601);
test_math_log(1.7761881074904221e+308);
test_math_log(1.6826487915080126e+308);
test_math_log(7.847865453750664e+307);
test_math_log("9GDY7TO");
test_math_log(2.5851086807743794e+307);
test_math_log(4.3788029989913267e+307);
test_math_log("1Y6TC");
test_math_log(5.848667137847461e+307);
test_math_log(-531);
test_math_log(-967);
test_math_log("031O9IGND");
test_math_log(7.990517634909958e+307);
test_math_log(-681);
test_math_log(1.0109412747909523e+308);
test_math_log("0EMCO");
test_math_log(1.2581199770484607e+308);
test_math_log(-173);
test_math_log("3FI");
test_math_log("Q4MZ4");
test_math_log(1.0232649896272216e+308);
test_math_log(-629);
test_math_log(-771);
test_math_log(1.0757236446943973e+308);
test_math_log(1.2132951337343652e+308);
test_math_log(6.850906221724352e+307);
test_math_log(3.9079462014401654e+307);
test_math_log("UZW11");
test_math_log(-953);
test_math_log("BM1V968");
test_math_log(-737);
test_math_log("61B8");
test_math_log("5P7LWP74L");
test_math_log("83Z");
test_math_log(6.87857463194794e+307);
test_math_log(8.5351395631598e+306);
test_math_log(1.6448600612393485e+308);
test_math_log(1.7230948152247803e+308);
test_math_log("K0NQGA2E8");
test_math_log(1.6822715393893408e+308);
test_math_log(-619);
test_math_log(6.195162937216874e+307);
test_math_log("Z9M");
test_math_log("N6VC9XSL8");
test_math_log(9.16498943261999e+307);
test_math_log(7.986805222973867e+307);
test_math_log("O9N78YIH40");
test_math_log(1.1501427719748992e+308);
test_math_log(1.1069314215375284e+308);
test_math_log(1.0519790010611227e+307);
test_math_log(-5);
test_math_log("GQY8EV4S");
test_math_log("J9EV7QFBTT");
test_math_log("5EHYAJ");
test_math_log("I0IGU6Z");
test_math_log(-763);
test_math_log(-899);
test_math_log("4TPLPE2U6");
test_math_log(-799);
test_math_log("GG6MWD4L");
test_math_log(-249);
test_math_log(1.0770262112278302e+308);
test_math_log("687OQMW");
test_math_log(-683);
test_math_log(-285);
test_math_log("ABJ87F19WW");
test_math_log(1.1723356688513356e+307);
test_math_log(-151);
test_math_log("D33LOBT");
test_math_log(-77);
test_math_log(1.6782745032549284e+308);
test_math_log("QSNWKR9M");
test_math_log(-73);
test_math_log(-317);
test_math_log("QJLHQDCOB");
test_math_log(-117);
test_math_log(1.4550601911161095e+308);
test_math_log(-243);
test_math_log("N8F5H1QN");
test_math_log("5FOS");
test_math_log(-125);
test_math_log(1.5926534345598985e+308);
test_math_log("HTC");
test_math_log("YQR");
test_math_log(5.258395526329804e+307);
test_math_log("BMQ87D52S7");
test_math_log(-555);
test_math_log(1.5868747098145418e+308);
test_math_log("WBKDME9");
test_math_log("89WUHQFO");
test_math_log("N5D19");
test_math_log(2.2143548633736272e+307);
test_math_log("V73WIPM");
test_math_log(-609);
test_math_log(-43);
test_math_log(1.6328193967434236e+308);
test_math_log(-741);
test_math_log(-443);
test_math_log("27H");
test_math_log(-155);
test_math_log("BPNX");
test_math_log(-501);
test_math_log(-31);
test_math_log(-327);
test_math_log(1.5289806265373683e+308);
test_math_log("RF1J1");
test_math_log(-525);
test_math_log("GDOSTUTY6");
test_math_log("OG58P");
test_math_log("PY8");
test_math_log("JNOL8H");
test_math_log(9.022695338172826e+306);
test_math_log("6S5E095KGU");
test_math_log(8.652270932389713e+305);
test_math_log(-963);
test_math_log("PHB12");
test_math_log("FC4RWY");
test_math_log(-239);
test_math_log(-351);
test_math_log(-689);
test_math_log("E02H3JA3IK");
test_math_log(-429);
test_math_log("9Y5TC3QDA");
test_math_log(5.147603776237831e+307);
test_math_log(9.314284391090486e+307);
test_math_log(6.579140023716697e+307);
test_math_log(-867);
test_math_log("G1OD4");
test_math_log(-347);
test_math_log("1U8I");
test_math_log(-499);
test_math_log("ZD7H");
test_math_log(4.529673397578426e+307);
test_math_log("LL4");
test_math_log(-645);
test_math_log(9.926156351930994e+307);
test_math_log(8.4035212799168e+306);
test_math_log(-67);
test_math_log(5.733511068701714e+307);
test_math_log("2CXM");
test_math_log(1.0911057150609434e+308);
test_math_log(-415);
test_math_log("95SG");
test_math_log(1.2041326210732845e+308);
test_math_log("3288G");
test_math_log(-797);
test_math_log(-165);
test_math_log(8.135837658661932e+307);
test_math_log(1.0152487174886659e+308);
test_math_log("W9ERFT79N");
test_math_log("LR1VPX");
test_math_log("MD5ME");
test_math_log("8M3");
test_math_log(1.4779246923290998e+308);
test_math_log(7.451420735756474e+307);
test_math_log(1.7262090275141198e+308);
test_math_log("82TT9NWIB");
test_math_log("WMB");
test_math_log("8GV6");
test_math_log(2.774502620107752e+307);
test_math_log("UFNF11W");
test_math_log(-273);
test_math_log(6.699931183562467e+307);
test_math_log(-297);
test_math_log("YK7EP40");
test_math_log(-625);
test_math_log(-27);
test_math_log("9HMX");
test_math_log("6ESBQQQQ0");
test_math_log(1.2332560116568913e+308);
test_math_log("E5PJ7");
test_math_log(-313);
test_math_log("OWFG");
test_math_log("S81IV");
test_math_log(3.106009134944197e+305);
test_math_log(3.108138781585287e+307);
test_math_log(8.622643018488475e+307);
test_math_log(8.716394300669022e+307);
test_math_log(5.479799918140656e+307);
test_math_log(1.480732469002061e+308);
test_math_log("75RPYMZ");
test_math_log("RJFRNUP");
test_math_log("7HAREGQ");
test_math_log(8.087485249008026e+307);
test_math_log("O53");
test_math_log("JQRN");
test_math_log("8ZSIHZ");
test_math_log("018RTIY4");
test_math_log("BMQ");
test_math_log(1.5251181956057332e+308);
test_math_log("LI3DSG7YL");
test_math_log("ULCXED8H");
test_math_log("1MH");
test_math_log("AEV6M41");
test_math_log("9J0ZN1HNK");
test_math_log(4.2699758329314936e+307);
test_math_log(-157);
test_math_log(-349);
test_math_log(2.0710645779224298e+307);
test_math_log(1.058608407740494e+308);
test_math_log(1.0353215445074655e+307);
test_math_log("6YUPRS4M");
test_math_log(-829);
test_math_log(5.853044787142154e+306);
test_math_log(1.6076428089479242e+308);
test_math_log("BS5685EXS1");
test_math_log(-141);
test_math_log(5.75348319056632e+307);
test_math_log(-615);
test_math_log(1.209492936952951e+308);
test_math_log("UX43I2F3");
test_math_log("LOYQIITL");
test_math_log(1.877601773905811e+307);
test_math_log(-721);
test_math_log("JDLPC3BS");
test_math_log(-977);
test_math_log("O7B31UX");
test_math_log(5.725748170978521e+307);
test_math_log("K68C");
test_math_log(-441);
test_math_log("FVW36YO");
test_math_log(7.57750440255035e+307);
test_math_log(1.2495534698894013e+308);
test_math_log(1.346451843769574e+308);
test_math_log(-835);
test_math_log(-183);
test_math_log("U90Q");
test_math_log(8.650332998654259e+307);
test_math_log("VE5");
test_math_log("K3MLSZX2");
test_math_log(-897);
test_math_log(-987);
test_math_log(1.4297047479280565e+308);
test_math_log(9.674314665853878e+307);
test_math_log(2.2642404677431184e+307);
test_math_log(8.26921043085255e+307);
test_math_log(-757);
test_math_log(1.5190593938959708e+308);
test_math_log("A9MZSP1");
test_math_log("S89TZS3G");
test_math_log("S9ABQX");
test_math_log(-13);
test_math_log(-513);
test_math_log(-143);
test_math_log(6.322001742750464e+307);
test_math_log(-363);
test_math_log("E101U8GLV");
test_math_log("RGAD");
test_math_log("Z5JN5AD6");
test_math_log(-257);
test_math_log(-831);
test_math_log("VU68T2KT4O");
test_math_log(-827);
test_math_log(1.0848937329495156e+308);
test_math_log(3.7157580395334124e+307);
test_math_log("0JFX1");
test_math_log(1.2386055613254636e+307);
test_math_log(-915);
test_math_log("RW31KJV5B");
test_math_log(4.516636066797745e+307);
test_math_log("70XA");
test_math_log(1.3280211345829615e+308);
test_math_log(1.439969299436448e+307);
test_math_log(1.6207619168780952e+308);
test_math_log("2EF9");
test_math_log("MXV47LOJ93");
test_math_log(1.2943500254405849e+308);
test_math_log(7.222742835239212e+307);
test_math_log(1.2830394222793652e+308);
test_math_log(-381);
test_math_log(-175);
test_math_log(8.632066813410047e+307);
test_math_log(1.1651590280201815e+308);
test_math_log(2.9060478644346044e+306);
test_math_log(-471);
test_math_log(5.330864427325936e+307);
test_math_log(4.966527863986484e+307);
test_math_log(-51);
test_math_log(-567);
test_math_log("KIGQN8L4KS");
test_math_log("FUJWH");
test_math_log("BXD");
test_math_log(-981);
test_math_log("TH7A2I");
test_math_log(-905);
test_math_log(-925);
test_math_log(1.4339145950609262e+308);
test_math_log(1.1046009849284959e+308);
test_math_log("XJ85WV5QZ");
test_math_log(-859);
test_math_log("3YBWCPWC");
test_math_log(-553);
test_math_log(1.2013790284796678e+308);
test_math_log(1.3684244872576131e+308);
test_math_log(3.648725569940196e+307);
test_math_log(-185);
test_math_log(8.470520300239923e+306);
test_math_log("KNF0UHD");
test_math_log("89SZX7RTJ");
test_math_log(1.2077464034965695e+308);
test_math_log(1.5167891829972553e+308);
test_math_log(1.4194702773626991e+308);
test_math_log(1.7174730555790771e+308);
test_math_log("SQ56H4OEJ");
test_math_log(-537);
test_math_log(7.872215744800862e+307);
test_math_log(-613);
test_math_log(1.1232800918683116e+308);
test_math_log(1.6447716169295323e+308);
test_math_log(7.943464165455063e+306);
test_math_log("O4SN93");
test_math_log(4.0060784507279485e+307);
test_math_log(-875);
test_math_log(1.575546440739345e+308);
test_math_log("APCFQS");
test_math_log(5.876506969735729e+307);
test_math_log(-91);
test_math_log(-483);
test_math_log("BLH7W4YN10");
test_math_log(1.1360721712689853e+308);
test_math_log(-957);
test_math_log(9.186549716082355e+307);
test_math_log("N0M78ZCKZ1");
test_math_log(7.815215159372488e+307);
test_math_log(-123);
test_math_log(3.178527717735178e+307);
test_math_log("6IFNSV9");
test_math_log("FD7IORL");
test_math_log(1.6820804285086025e+308);
test_math_log("GX8DILR5Z");
test_math_log(6.998033466444078e+307);
test_math_log("0KWEQ");
test_math_log("14QZO5IV");
test_math_log(4.271369189569643e+307);
test_math_log(3.5014211253415125e+307);
test_math_log("LR36XOT");
test_math_log("O2GS");
test_math_log(-397);
test_math_log("JYO");
test_math_log("7HGRPQ");
test_math_log("KQU4Y7EBS");
test_math_log(2.9263059081991125e+307);
test_math_log(2.9934897912808877e+307);
test_math_log("AK0PN6N");
test_math_log("VFNR");
test_math_log(6.403191027012223e+307);
test_math_log(-603);
test_math_log("78NQHBNTAT");
test_math_log(-109);
test_math_log("QAQF2VR");
test_math_log(-669);
test_math_log("Z2JVY");
test_math_log("N9SWJ");
test_math_log(2.5652041503791697e+307);
test_math_log(1.0407661916162144e+308);
test_math_log(1.3953186386637161e+308);
test_math_log("V6ZT43");
test_math_log(4.0121211606589394e+307);
test_math_log("SAPBP9OR5");
test_math_log(1.0935229681248308e+308);
test_math_log(6.267753758415339e+307);
test_math_log(7.646477739367639e+307);
test_math_log("EQDHD9IPF");
test_math_log("ZGCTMSBLJ");
test_math_log(-57);
test_math_log(1.2773560549096365e+308);
test_math_log(8.048267336297427e+306);
test_math_log(-365);
test_math_log("AZX24CRF");
test_math_log(1.3377157939230635e+308);
test_math_log(-181);
test_math_log("YJPLB0JI");
test_math_log(8.296194970501537e+307);
test_math_log(6.073122039281202e+307);
test_math_log(7.657863633426159e+307);
test_math_log(-803);
test_math_log(-421);
test_math_log("FLXSCZP7");
test_math_log(7.468750321711644e+307);
test_math_log(-919);
test_math_log(-393);
test_math_log("KW7KP4");
test_math_log(-99);
test_math_log("4NJR6Y");
test_math_log(-403);
test_math_log("I5VI42NWT");
test_math_log("0GOI");
test_math_log(8.415051027364775e+307);
test_math_log(-917);
test_math_log(5.788031159075023e+307);
test_math_log("CUNXN");
test_math_log(1.6357527631961213e+308);
test_math_log(1.7907383949904353e+308);
test_math_log(6.535212327048138e+307);
test_math_log(6.027820126243595e+307);
test_math_log(-753);
test_math_log(3.951988375230701e+306);
test_math_log("70OKYH0SHB");
test_math_log(-419);
test_math_log(2.0744507032149863e+306);
test_math_log("40M52B");
test_math_log(-465);
test_math_log(8.7009756744845e+307);
test_math_log("CP4FNPPMII");
test_math_log("3BEDV");
test_math_log(1.6589564501266341e+308);
test_math_log(-617);
test_math_log(1.2264571296543588e+308);
test_math_log("UQOO");
test_math_log("0OWH57SF");
test_math_log(1.7754761839373831e+308);
test_math_log("U156G4");
test_math_log(-879);
test_math_log(1.5272260192841482e+308);
test_math_log(-357);
test_math_log("HK686U83");
test_math_log("N9070");
test_math_log("46DY8Y");
test_math_log(-889);
test_math_log(5.692243083964832e+307);
test_math_log(-1);
test_math_log(1.0621182629021514e+307);
test_math_log("7AMHH1ST");
test_math_log(-563);
test_math_log(-341);
test_math_log(8.248145856529732e+307);
test_math_log("57E8XNW2C");
test_math_log("D572LWU4");
test_math_log("6RWI");
test_math_log("2OO0");
test_math_log(-999);
test_math_log("W0DBIE");
test_math_log(8.566770341131532e+307);
test_math_log(-321);
test_math_log("SD7");
test_math_log("GR9QWRUV");
test_math_log(1.7481241043465057e+308);
test_math_log(-541);
test_math_log(1.4746942613157027e+307);
test_math_log(-885);
test_math_log("J0T8KB49BC");
test_math_log(1.5972215382362728e+305);
test_math_log(-809);
test_math_log("L8D468PVNB");
test_math_log(6.073783698524445e+307);
test_math_log(-477);
test_math_log("VRT");
test_math_log(1.7411031735679297e+307);
test_math_log("GSU5W87RJ");
test_math_log(2.6638259412152406e+307);
test_math_log(1.2811793913218088e+308);
test_math_log("62RH2LSL");
test_math_log(2.261944355935546e+307);
test_math_log("LXXIM7GF");
test_math_log("GOTOT0W");
test_math_log(2.9231795330184785e+307);
test_math_log("RVIHN");
test_math_log("0HH");
test_math_log("6WIX");
test_math_log(1.4992674161467067e+308);
test_math_log(-47);
test_math_log(-271);
test_math_log(-623);
test_math_log(-773);
test_math_log(-63);
test_math_log(2.0361817697017916e+307);
test_math_log("S8KU");
test_math_log("WZ9LW81BMQ");
test_math_log(3.649405867144861e+306);
test_math_log(1.0029060127461719e+308);
test_math_log(1.4064755286612664e+308);
test_math_log(1.3995683757574907e+308);
test_math_log("55CI564");
test_math_log(1.6278809260173211e+308);
test_math_log(2.2757482040006376e+307);
test_math_log(-101);
test_math_log("Y32TL");
test_math_log("LBMA6K");
test_math_log(2.637339749068883e+307);
test_math_log("WJJ");
test_math_log(7.497130215930146e+306);
test_math_log(1.503286344502484e+308);
test_math_log("1BW603I");
test_math_log("Q9GELC1Q2C");
test_math_log("4F2XD2YWHS");
test_math_log("LA751");
test_math_log("FR1");
test_math_log(5.733478046019779e+307);
test_math_log(-665);
test_math_log(3.3555781955357913e+307);
test_math_log(1.4865880476256003e+308);
test_math_log(-519);
test_math_log(-983);
test_math_log("T6W5");
test_math_log(7.739191568330115e+306);
test_math_log("ZXYUL5I3");
test_math_log("AVT4E");
test_math_log(-943);
test_math_log(1.7951391873680745e+308);
test_math_log("ZLTQJ414F");
test_math_log(3.3873456615791824e+307);
test_math_log(1.5570765483532944e+308);
test_math_log("ZVNRZ3T");
test_math_log("A44V8TM");
test_math_log(1.2932187899781592e+307);
test_math_log("5RBXSSQ");
test_math_log(-331);
test_math_log(1.682492459895656e+308);
test_math_log(1.0405528245733602e+307);
test_math_log("K9KH0");
test_math_log(-871);
test_math_log("326P");
test_math_log("68IJQ5Z");
test_math_log("B6B602HWL");
test_math_log("EFV1DKV48F");
test_math_log("JWK3ZV");
test_math_log("RYUXG");
test_math_log(1.7630857372795632e+308);
test_math_log(1.3399399356589375e+308);
test_math_log(6.28390214855668e+307);
test_math_log("8W0P");
test_math_log(-387);
test_math_log("OHZ50B");
test_math_log("DVYT4NTD5Q");
test_math_log("KU0");
test_math_log(-373);
test_math_log("OLTTE2");
test_math_log(1.496090971411747e+308);
test_math_log("TW1ZELFWBS");
test_math_log("FROR");
test_math_log("5JEIUE");
test_math_log("W54E6XXQ0");
test_math_log("4V5KY");
test_math_log("IBIA");
test_math_log(-259);
test_math_log("ZS3KCV9J");
test_math_log(-965);
test_math_log(1.2696079848925225e+307);
test_math_log("JEU10VQ");
test_math_log(-105);
test_math_log(3.87787685064144e+307);
test_math_log(7.330654975480094e+306);
test_math_log(-717);
test_math_log("K3Y5");
test_math_log(6.053892656691969e+307);
test_math_log(4.05931423758494e+307);
test_math_log("JWJCWO");
test_math_log(-521);
test_math_log(-83);
test_math_log("YXR2RX1VE");
test_math_log("XKIVA");
test_math_log(-75);
test_math_log(3.6563487075018844e+307);
test_math_log(1.5033670361007113e+308);
test_math_log(1.9155884846117076e+306);
test_math_log(-969);
test_math_log("AC1VFO5");
test_math_log(-685);
test_math_log("6HY3M");
test_math_log(1.64909148718798e+308);
test_math_log(1.1395597531702152e+308);
test_math_log(1.23330658619718e+308);
test_math_log(-25);
test_math_log(6.442539287979215e+307);
test_math_log(1.823351779862809e+307);
test_math_log("1SQ6PD3KE");
test_math_log("3EG92");
test_math_log(-379);
test_math_log(2.34574148428436e+306);
test_math_log("KIWWGQ");
test_math_log(-309);
test_math_log(1.4143014351665137e+308);
test_math_log(1.779166797668816e+308);
test_math_log("MQTTQX7S8Y");
test_math_log(5.033400210716009e+307);
test_math_log(9.422287034932401e+306);
test_math_log(1.7373918653161887e+308);
test_math_log("U8Q");
test_math_log("31A4GNVKA");
test_math_log(7.017588620729887e+307);
test_math_log(1.3988585526259408e+308);
test_math_log("MTYJG2O5H");
test_math_log(3.199274842440325e+307);
test_math_log(1.683351590411363e+308);
test_math_log(1.2830042752158835e+308);
test_math_log(-39);
test_math_log(1.2562000452108364e+307);
test_math_log("TRKFXB");
test_math_log(1.72265957659601e+308);
test_math_log("75CTYXU");
test_math_log("TI0XMDYZL");
test_math_log("ITIM");
test_math_log("1LLY5Q");
test_math_log(-115);
test_math_log("LHPG");
test_math_log("GWLRCGY");
test_math_log("UB5I97NQ1");
test_math_log(-137);
test_math_log("F0WZ7DZPZ");
test_math_log(-281);
test_math_log(-473);
test_math_log("NB4T");
test_math_log("0FH41GUVG");
test_math_log("5X8VN2IRL1");
test_math_log(5.074880241964064e+307);
test_math_log(1.747934811118862e+307);
test_math_log("FQ1MVZQ");
test_math_log(1.508977897233003e+308);
test_math_log("7071A9K");
test_math_log(-339);
test_math_log(-941);
test_math_log(3.443242513526131e+307);
test_math_log(1.3106699047735343e+308);
test_math_log(928);
test_math_log("V1GF09QA");
test_math_log(9.021117802371206e+307);
test_math_log("GM22QG3R");
test_math_log("DU7AA");
test_math_log(1.0301782768327422e+308);
test_math_log(1.5955439657282648e+308);
test_math_log(1.2658214783953476e+308);
test_math_log(2.516580380356877e+307);
test_math_log(-111);
