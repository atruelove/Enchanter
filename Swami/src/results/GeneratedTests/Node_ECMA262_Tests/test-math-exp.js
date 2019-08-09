/*
* This file is automatically generated by Swami
*
* 2019-08-09 12:09:30.397406
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
function test_math_exp(x){
	if (Object.is( x,NaN )){
		var output = Math.exp(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.exp(x);
		assert.strictEqual(1, output);
		console.log("Good Test");
		return;
		}
	if (( x === - 0 )){
		var output = Math.exp(x);
		assert.strictEqual(1, output);
		console.log("Good Test");
		return;
		}
	if (( x === + Infinity )){
		var output = Math.exp(x);
		assert.strictEqual(+ Infinity, output);
		console.log("Good Test");
		return;
		}
	if (( x === - Infinity )){
		var output = Math.exp(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}



/*TESTS GENERATED AUTOMATICALLY*/
test_math_exp(NaN);
test_math_exp(1.2238589637958674e+308);
test_math_exp(/(\w+)\s(\w+)/);
test_math_exp(-495);
test_math_exp(/yes.*day/);
test_math_exp(false);
test_math_exp(/[^.]+/);
test_math_exp(/\r\n|\r|\n/);
test_math_exp(1.0866639671484797e+308);
test_math_exp("P0VX");
test_math_exp("HQ5PE92");
test_math_exp(-921);
test_math_exp("LJ86P");
test_math_exp(/foo/g);
test_math_exp(1.0537977660822713e+308);
test_math_exp(true);
test_math_exp(+0);
test_math_exp(4.862727362248248e+307);
test_math_exp("MO83HHD");
test_math_exp(2.537622763390364e+307);
test_math_exp("W93TGEE");
test_math_exp(-703);
test_math_exp("PYPTUQ");
test_math_exp(3.3269186060331535e+307);
test_math_exp("C98VQG0S");
test_math_exp("KM5K");
test_math_exp(-543);
test_math_exp(/yes[^]*day/);
test_math_exp(-539);
test_math_exp(undefined);
test_math_exp("N5Z58PI5");
test_math_exp(-829);
test_math_exp("BL8");
test_math_exp(-217);
test_math_exp(/[\u0400-\u04FF]+/g);
test_math_exp(-147);
test_math_exp("41QZOMF4QR");
test_math_exp("RXBXOSFCU2");
test_math_exp(-937);
test_math_exp(-977);
test_math_exp(-41);
test_math_exp(-653);
test_math_exp(-569);
test_math_exp(9.209717262232195e+307);
test_math_exp(1.747270867595717e+308);
test_math_exp(1.4366944487433567e+308);
test_math_exp(null);
test_math_exp(-0);
test_math_exp(/ab+c/);
test_math_exp("B6P");
test_math_exp(2.5892343717575016e+307);
test_math_exp(5.299144536348706e+307);
test_math_exp(-143);
test_math_exp("00UWKY");
test_math_exp(Infinity);
test_math_exp(2.872952497674591e+307);
test_math_exp(1.4359154017343199e+308);
test_math_exp(1.6436503416684047e+308);
test_math_exp(-585);
test_math_exp(1.3065197717370597e+308);
test_math_exp(1.1675735937633375e+308);
test_math_exp(-453);
test_math_exp("7R0R");
test_math_exp(8.738759030958576e+307);
test_math_exp("0COJ");
test_math_exp(-781);
test_math_exp(-313);
test_math_exp("BPK3");
test_math_exp(-145);
test_math_exp(6.531532498730412e+306);
test_math_exp("NFAMO");
test_math_exp("RGDVPW557");
test_math_exp(1.2280642638789735e+308);
test_math_exp(6.654952542358418e+307);
test_math_exp(-57);
test_math_exp("BKNJHDON");
test_math_exp(1.3615305376946263e+308);
test_math_exp("S3AVKVR9OE");
test_math_exp(1.75595110186394e+308);
test_math_exp("JMYZDOGK");
test_math_exp(1.5400262289194832e+307);
test_math_exp(-555);
test_math_exp("KP9T");
test_math_exp("NT43XF");
test_math_exp(6.90788776443866e+306);
test_math_exp(-231);
test_math_exp(-481);
test_math_exp("YY7Y");
test_math_exp(-757);
test_math_exp("ECYHKHBGH4");
test_math_exp(-367);
test_math_exp(1.4466233045821345e+308);
test_math_exp("NTO1G");
test_math_exp(1.4893900288353502e+308);
test_math_exp(1.6678897009096194e+308);
test_math_exp("MFI383M");
test_math_exp(1.1454657229941576e+308);
test_math_exp(-111);
test_math_exp("GGE2D");
test_math_exp(-411);
test_math_exp(1.314141571568343e+308);
test_math_exp(8.598902300265442e+307);
test_math_exp(-637);
test_math_exp("FPM");
test_math_exp(4.1353130040300216e+307);
test_math_exp(9.553377663175636e+307);
test_math_exp(-469);
test_math_exp(-185);
test_math_exp("GEO");
test_math_exp(2.995141188328234e+307);
test_math_exp(-971);
test_math_exp("YQZIKM6ID");
test_math_exp(-27);
test_math_exp(1.7829617788399946e+308);
test_math_exp(-593);
test_math_exp(9.40614283651545e+307);
test_math_exp(-427);
test_math_exp("M54Y");
test_math_exp(4.723261724312397e+307);
test_math_exp(-443);
test_math_exp("BJBC");
test_math_exp(-139);
test_math_exp(2.3220132815744123e+307);
test_math_exp(1.785644306414332e+308);
test_math_exp("LGZPL");
test_math_exp("AMQ1N735");
test_math_exp(5.935449811813904e+306);
test_math_exp("OOCZ");
test_math_exp("4MW3UN9");
test_math_exp(6.485684703850397e+307);
test_math_exp("BTQM4R6E");
test_math_exp("8UQ7OD2TNC");
test_math_exp(-671);
test_math_exp("3VAWNUPV");
test_math_exp(1.5328767021565205e+308);
test_math_exp(-859);
test_math_exp("H4MOXI2LGY");
test_math_exp(8.013279522633452e+307);
test_math_exp(-561);
test_math_exp(-755);
test_math_exp(8.27415760038385e+306);
test_math_exp("3Q0H2SHWP");
test_math_exp("UQTVQCKN8U");
test_math_exp("O77E0K");
test_math_exp("TUZWGH");
test_math_exp(4.556288027014289e+307);
test_math_exp(-679);
test_math_exp("9FMR4C4HF8");
test_math_exp("NAR");
test_math_exp(-489);
test_math_exp("VQWSBPG55");
test_math_exp("RRJS");
test_math_exp(1.6571451106674004e+307);
test_math_exp(-617);
test_math_exp(1.0239048170975628e+308);
test_math_exp("PYWLD");
test_math_exp("WFCDKKPSAJ");
test_math_exp(-871);
test_math_exp(-597);
test_math_exp("Y7ZRJ1");
test_math_exp(1.6483533899809497e+308);
test_math_exp(6.252214448881218e+307);
test_math_exp(1.6365925853612927e+308);
test_math_exp("JL98HO8W");
test_math_exp(3.764904335676219e+306);
test_math_exp(-103);
test_math_exp(3.732591811471846e+307);
test_math_exp(-83);
test_math_exp("28WZJ0");
test_math_exp(1.1654473315216382e+308);
test_math_exp(9.8482431279138e+306);
test_math_exp("XBFHRUD7");
test_math_exp(1.5767713197054684e+308);
test_math_exp("C4YSZ0U3");
test_math_exp("MWAZTOTWS");
test_math_exp(7.101856605363028e+307);
test_math_exp(-7);
test_math_exp(1.7857796282072655e+308);
test_math_exp(-941);
test_math_exp(6.784902487673438e+307);
test_math_exp(-651);
test_math_exp("SLG");
test_math_exp(-793);
test_math_exp(1.2091203030822379e+308);
test_math_exp("XOXL9");
test_math_exp("2B0V");
test_math_exp("1BW8W5");
test_math_exp(-595);
test_math_exp("C4834DPMT2");
test_math_exp(1.008248972923243e+308);
test_math_exp("3NGG86");
test_math_exp("WD7UCI3CYA");
test_math_exp(1.578012063697233e+308);
test_math_exp(4.422001534310621e+306);
test_math_exp(-663);
test_math_exp(1.5258273274311054e+308);
test_math_exp(-13);
test_math_exp("YTC");
test_math_exp("T79D");
test_math_exp(3.520136467405306e+307);
test_math_exp(-323);
test_math_exp(1.6411622085520483e+308);
test_math_exp(-723);
test_math_exp("VYBPMDUU");
test_math_exp(-741);
test_math_exp(-655);
test_math_exp(4.985854105963559e+307);
test_math_exp(4.501194186210357e+307);
test_math_exp(-603);
test_math_exp(-587);
test_math_exp(9.166905262485423e+307);
test_math_exp("0SQMF5ZCQW");
test_math_exp(6.38059830282955e+307);
test_math_exp("KVFS");
test_math_exp(-521);
test_math_exp(-645);
test_math_exp(1.2691708217924259e+308);
test_math_exp("CMLPPRIA");
test_math_exp(-715);
test_math_exp(1.1587005020942055e+308);
test_math_exp("57SLO65L");
test_math_exp(-439);
test_math_exp("Z9XC6");
test_math_exp(5.100642012780868e+307);
test_math_exp(-399);
test_math_exp("KTF4");
test_math_exp(-899);
test_math_exp(-817);
test_math_exp(-43);
test_math_exp(-981);
test_math_exp("MWJA8C5HU");
test_math_exp("99ZA0");
test_math_exp(-927);
test_math_exp(-813);
test_math_exp(1.1601111916171046e+308);
test_math_exp("KLZERZV7P");
test_math_exp(1.5386056353343479e+308);
test_math_exp("C1SFED8E");
test_math_exp(-809);
test_math_exp(5.035211148627139e+307);
test_math_exp(5.0175827979652453e+306);
test_math_exp("7KWWSCS4");
test_math_exp("97U64IFP");
test_math_exp(-321);
test_math_exp(-297);
test_math_exp(-747);
test_math_exp(-327);
test_math_exp(1.5109552975506224e+308);
test_math_exp(-641);
test_math_exp(-589);
test_math_exp("2G53QA");
test_math_exp(-689);
test_math_exp(-613);
test_math_exp(1.5980569617005081e+308);
test_math_exp(-717);
test_math_exp(6.328083269992943e+307);
test_math_exp("34KNQ6F22");
test_math_exp(5.360321534882022e+307);
test_math_exp(-669);
test_math_exp("XP6QCOCQS");
test_math_exp("K6AA1KT");
test_math_exp(7.100549230035306e+307);
test_math_exp(-821);
test_math_exp(1.7449943726456383e+308);
test_math_exp(1.5450492552451106e+308);
test_math_exp("78C7KQWKP");
test_math_exp(1.5614557535997753e+308);
test_math_exp(-797);
test_math_exp("KOZC");
test_math_exp(2.9276802063479286e+307);
test_math_exp(9.304081254346061e+307);
test_math_exp("M17KGJ7");
test_math_exp(3.9015128147954933e+307);
test_math_exp(-201);
test_math_exp(6.318147379594628e+307);
test_math_exp(1.0970740776291697e+308);
test_math_exp(-409);
test_math_exp("F9840F");
test_math_exp("XOJWCATF8");
test_math_exp(1.424614572604507e+308);
test_math_exp(3.243874332168042e+307);
test_math_exp("NXJPU");
test_math_exp(1.7577652611432063e+307);
test_math_exp("GIQQGF1LWX");
test_math_exp(-891);
test_math_exp(1.5266957422549665e+308);
test_math_exp(-183);
test_math_exp("YCF");
test_math_exp(-301);
test_math_exp(-457);
test_math_exp(1.5344278059550999e+308);
test_math_exp(1.717196263043326e+308);
test_math_exp("M5UJZUT");
test_math_exp("ZDY");
test_math_exp(1.4436915551936525e+308);
test_math_exp(9.700805080557113e+307);
test_math_exp("7HUISO2E8");
test_math_exp(9.465171261574244e+307);
test_math_exp("3V5ZTC49P7");
test_math_exp("K56O");
test_math_exp(1.0426750907469396e+308);
test_math_exp("IU6JWG");
test_math_exp("OIPOK");
test_math_exp(-673);
test_math_exp(-985);
test_math_exp("SF5");
test_math_exp(-215);
test_math_exp(-257);
test_math_exp(6.281945578076891e+307);
test_math_exp(4.807375761278278e+307);
test_math_exp("ZV3936DL");
test_math_exp(1.1691674123370862e+308);
test_math_exp("W401L9RGQ");
test_math_exp(1.3328403565644692e+308);
test_math_exp(-525);
test_math_exp("7CYAM");
test_math_exp(1.1783696535705776e+308);
test_math_exp(3.0995620607678725e+307);
test_math_exp("K27DT6K8P");
test_math_exp(1.337850393512208e+308);
test_math_exp(5.689282280144443e+306);
test_math_exp("OGWE5H");
test_math_exp(-485);
test_math_exp("V3L7ZKBBX");
test_math_exp("LRLYGE");
test_math_exp(1.7109698343804706e+307);
test_math_exp(-917);
test_math_exp("C1ERB8B");
test_math_exp(1.0204553278501635e+308);
test_math_exp(1.0897915402984913e+306);
test_math_exp(1.6728370046113738e+307);
test_math_exp(8.887494266493206e+307);
test_math_exp(-629);
test_math_exp("60JE5");
test_math_exp(1.5486888486591889e+308);
test_math_exp(-413);
test_math_exp("9FD3PI8ZBS");
test_math_exp(-251);
test_math_exp("A6NI");
test_math_exp(-463);
test_math_exp(-163);
test_math_exp(-429);
test_math_exp(-503);
test_math_exp(7.109456984582855e+307);
test_math_exp(1.888834644969613e+306);
test_math_exp(1.7465367475510205e+308);
test_math_exp(-601);
test_math_exp(4.1463466736571586e+307);
test_math_exp(1.3579646391818674e+308);
test_math_exp("PV71A4R");
test_math_exp("HVXQLQ1WU");
test_math_exp(2.641535761307399e+307);
test_math_exp("Z29VMF");
test_math_exp(-227);
test_math_exp(6.288637554840756e+307);
test_math_exp("AAN74");
test_math_exp("2OO0");
test_math_exp("8NW2CXNF");
test_math_exp(1.010805119213763e+308);
test_math_exp("CR0");
test_math_exp(1.232480111072762e+308);
test_math_exp(1.339982669115275e+308);
test_math_exp("5FU0TJN");
test_math_exp("4LHGNECWI");
test_math_exp("XJ77B");
test_math_exp(1.1422525932906136e+308);
test_math_exp(4.67742207586804e+307);
test_math_exp(-211);
test_math_exp(1.4625216021686118e+308);
test_math_exp("XCNNFYDJ");
test_math_exp(-819);
test_math_exp("EVL5561ASI");
test_math_exp(-599);
test_math_exp("INDPDW");
test_math_exp("VBHQYMVGT");
test_math_exp("0BTTD6YH7O");
test_math_exp(-53);
test_math_exp("5NOIL");
test_math_exp("KB2U5N0X9U");
test_math_exp("YSSRBUIOL");
test_math_exp(-803);
test_math_exp(-623);
test_math_exp(-181);
test_math_exp("CUSFSBG");
test_math_exp(-393);
test_math_exp(2.0658551070257426e+307);
test_math_exp(1.4434612776027416e+308);
test_math_exp(-3);
test_math_exp(-905);
test_math_exp("2A2");
test_math_exp("5MVHOIH8");
test_math_exp("ULCN089");
test_math_exp(1.4495281569736545e+308);
test_math_exp("ZXZP");
test_math_exp("EKBYJAZR");
test_math_exp(-993);
test_math_exp("L1080F7IC");
test_math_exp("JDBW5");
test_math_exp("QHAZ8");
test_math_exp(1.7610694815714094e+307);
test_math_exp("NM9AI857S");
test_math_exp("C8MHYZ");
test_math_exp(-21);
test_math_exp(1.4884028532208137e+308);
test_math_exp("4LFY");
test_math_exp(1.2433234627082557e+308);
test_math_exp(8.409755590134012e+307);
test_math_exp("AX3XIO790");
test_math_exp("T1F8");
test_math_exp(-861);
test_math_exp(-681);
test_math_exp(3.945181039230135e+307);
test_math_exp(-795);
test_math_exp(1.4931832476919039e+308);
test_math_exp(-881);
test_math_exp(6.935307154983649e+307);
test_math_exp(1.0272958212768093e+308);
test_math_exp("LOZLCQK4");
test_math_exp("W2D5NR1VX");
test_math_exp("EHHSJI");
test_math_exp(5.993282051898776e+307);
test_math_exp(-141);
test_math_exp(-241);
test_math_exp("2SDEJ89I");
test_math_exp(2.724030928159078e+307);
test_math_exp("RX4J5AFE0");
test_math_exp(-573);
test_math_exp(-665);
test_math_exp("VET0U4BCK");
test_math_exp(1.044816980861191e+308);
test_math_exp(-581);
test_math_exp("UUNVJ9UBOE");
test_math_exp(-337);
test_math_exp("LDBGZ");
test_math_exp("GRHL9NC5KC");
test_math_exp("6NQ");
test_math_exp("M0RLCE");
test_math_exp(186);
test_math_exp(-761);
test_math_exp("MRB2");
test_math_exp("3LVDYQM8Z");
test_math_exp(1.544675167318336e+308);
test_math_exp("EN8NZ");
test_math_exp("U87K3");
test_math_exp(-263);
test_math_exp(8.418615771312138e+307);
test_math_exp(2.621280251253059e+307);
test_math_exp(1.4563652583531275e+307);
test_math_exp(1.4316058092194804e+308);
test_math_exp(1.2674559918805395e+308);
test_math_exp(1.1987705099022105e+308);
test_math_exp("498TXT47AF");
test_math_exp(-949);
test_math_exp(2.178165988757078e+307);
test_math_exp(9.02208470309143e+307);
test_math_exp(4.788420713107147e+307);
test_math_exp("89LBU9OD6");
test_math_exp(7.226387002805753e+307);
test_math_exp(-333);
test_math_exp(1.6931539899825632e+308);
test_math_exp(5.872525817489469e+307);
test_math_exp(8.516944748465837e+307);
test_math_exp("WIYCLE");
test_math_exp("O7GENF6");
test_math_exp("0FQ");
test_math_exp(1.6328886856796346e+308);
test_math_exp(-537);
test_math_exp(1.1879777674925942e+308);
test_math_exp(2.1132030540664669e+307);
test_math_exp("66XTLJYZA6");
test_math_exp("52PDA");
test_math_exp(1.42397217492794e+307);
test_math_exp(1.702672287479267e+308);
test_math_exp("NHQH6OB");
test_math_exp(-997);
test_math_exp("LZ0");
test_math_exp(-935);
test_math_exp(5.011867730221431e+307);
test_math_exp(-279);
test_math_exp(-815);
test_math_exp(1.374111240659518e+308);
test_math_exp(-873);
test_math_exp(1.2826464614711833e+308);
test_math_exp("1NTEL3ST");
test_math_exp("SBX9C");
test_math_exp(-735);
test_math_exp(-101);
test_math_exp(-335);
test_math_exp(4.503838434356859e+307);
test_math_exp(1.099302395877409e+308);
test_math_exp("VF9D");
test_math_exp("AR7H4PN");
test_math_exp("XP9TC8");
test_math_exp(1.1809992551848748e+308);
test_math_exp(-693);
test_math_exp(3.5992657546930656e+307);
test_math_exp(1.6197354240907035e+308);
test_math_exp(-695);
test_math_exp("RHXLFQ4N");
test_math_exp(3.9140058372354843e+307);
test_math_exp("SULI");
test_math_exp("6J8I");
test_math_exp(-15);
test_math_exp(8.044367085094542e+307);
test_math_exp(-67);
test_math_exp("KBLN");
test_math_exp(1.5452465280350386e+308);
test_math_exp(9.941249789340125e+307);
test_math_exp("YOVC1");
test_math_exp(1.519962385094621e+308);
test_math_exp(-621);
test_math_exp("T25TFC9");
test_math_exp("B23L34");
test_math_exp("R23");
test_math_exp("GL2");
test_math_exp("55XC7HO");
test_math_exp(7.716654693117697e+306);
test_math_exp(1.450265222523584e+307);
test_math_exp("X3JNEFMO");
test_math_exp("IHPT85H8");
test_math_exp(1.0973114630077204e+308);
test_math_exp("7WI0");
test_math_exp(-731);
test_math_exp(9.845501779439285e+307);
test_math_exp("FOFYAX");
test_math_exp(-45);
test_math_exp(-999);
test_math_exp(-379);
test_math_exp(7.513104649821587e+306);
test_math_exp(-987);
test_math_exp("AD9GZ9");
test_math_exp(1.0771703426183664e+308);
test_math_exp("PWTS1");
test_math_exp(-289);
test_math_exp("ZV5NFA");
test_math_exp(1.6023151338501117e+308);
test_math_exp(9.46786941467007e+307);
test_math_exp("V2EFPDHS");
test_math_exp(1.4306035479157185e+307);
test_math_exp(-207);
test_math_exp(1.3780483287009588e+308);
test_math_exp("96JTUTLF");
test_math_exp("1WAYSLZL");
test_math_exp("KXT");
test_math_exp(8.866318975425447e+307);
test_math_exp("QP0R");
test_math_exp("02MM");
test_math_exp("BIGNBGMW2");
test_math_exp(2.6550382667027135e+307);
test_math_exp(-205);
test_math_exp("VQCGN26TKA");
test_math_exp(1.31212092352692e+308);
test_math_exp(-307);
test_math_exp("TMZMU");
test_math_exp("F8IN");
test_math_exp("K9WEXAU");
test_math_exp("87M02");
test_math_exp("YWI");
test_math_exp("HZ2VKAI");
test_math_exp(7.985217569935734e+307);
test_math_exp("KANO2");
test_math_exp("LK51IQ");
test_math_exp(1.6958334109504342e+308);
test_math_exp(-441);
test_math_exp("0TWVF0");
test_math_exp(2.2210179792606919e+307);
test_math_exp(5.34720876881159e+307);
test_math_exp(-357);
test_math_exp("KUCYMCIZ");
test_math_exp(-853);
test_math_exp(164);
test_math_exp(6.57655331193585e+307);
test_math_exp(-369);
test_math_exp("CJB7JDDQR");
test_math_exp("XVE0G");
test_math_exp("NB3");
test_math_exp(-893);
test_math_exp(-171);
test_math_exp(1.7171270043319016e+307);
test_math_exp("R1VG66");
test_math_exp(1.7764005059917874e+308);
test_math_exp(1.7091778912651945e+308);
test_math_exp("Y2YX4");
test_math_exp("A5SRJTQ");
test_math_exp("8OWSMA");
test_math_exp(-285);
test_math_exp("BBSS");
test_math_exp("679");
test_math_exp("2HMA9");
test_math_exp(1.3513891546688277e+308);
test_math_exp(-461);
test_math_exp(-419);
test_math_exp("KO6");
test_math_exp(7.631049731132426e+307);
test_math_exp("JRS3");
test_math_exp(8.590413315201961e+306);
test_math_exp("Z0G");
test_math_exp(-991);
test_math_exp(-925);
test_math_exp(-627);
test_math_exp("PUMS6C8W");
test_math_exp(7.223447124693532e+307);
test_math_exp(-907);
test_math_exp(-107);
test_math_exp(-209);
test_math_exp("IN35X");
test_math_exp(1.025427357467832e+306);
test_math_exp(8.623205195278835e+306);
test_math_exp("20DXN5V60");
test_math_exp(-855);
test_math_exp(7.63115806814749e+305);
test_math_exp(-265);
test_math_exp("QVSMM8JOLC");
test_math_exp("VEB0S2X");
test_math_exp(6.267065485307125e+307);
test_math_exp(-295);
test_math_exp(8.724413421550756e+307);
test_math_exp(1.0760885565018097e+308);
test_math_exp("NO8T3");
test_math_exp(1.0723423204798837e+308);
test_math_exp("V6P2M");
test_math_exp(-5);
test_math_exp(-751);
test_math_exp(9.009321704716058e+307);
test_math_exp(1.5586234813865005e+308);
test_math_exp(-395);
test_math_exp(1.6823560147897873e+308);
test_math_exp("PH6T6A");
test_math_exp("QB0JD2");
test_math_exp("XPKBNMP487");
test_math_exp("N3QO8P");
test_math_exp(1.6175393351948014e+308);
test_math_exp(-165);
test_math_exp(1.7230988243994207e+308);
test_math_exp("0GMKXFR7LR");
test_math_exp("QHZ8JG");
test_math_exp(2.245761093405798e+307);
test_math_exp("YPP8");
test_math_exp(1.7383120011710647e+308);
test_math_exp(1.5488828559575485e+308);
test_math_exp(1.6052986265269932e+308);
test_math_exp(-203);
test_math_exp(1.6551879559030284e+308);
test_math_exp("9Y9XL7M");
test_math_exp(1.3092990544614956e+308);
test_math_exp(1.0441439833953465e+308);
test_math_exp(1.3345986160517575e+308);
test_math_exp(1.7334374568357147e+308);
test_math_exp("GUNHC");
test_math_exp(-807);
test_math_exp(1.7566847610980942e+308);
test_math_exp(8.527705655882797e+307);
test_math_exp("1TV");
test_math_exp(6.19715781783251e+307);
test_math_exp("ZY9XBW3KX");
test_math_exp("SRY83U");
test_math_exp("FN7PKDQE");
test_math_exp(5.700478421646567e+307);
test_math_exp(-557);
test_math_exp(-309);
test_math_exp(1.3778978777464885e+308);
test_math_exp(992);
test_math_exp(-23);
test_math_exp("1W6");
test_math_exp("RDXUS3L");
test_math_exp(1.5291655189508837e+308);
test_math_exp(1.2584961457869283e+308);
test_math_exp(5.316199696926782e+307);
test_math_exp(1.2931865801848552e+308);
test_math_exp(1.1064258800472698e+308);
test_math_exp(-237);
test_math_exp(1.7670415459255083e+308);
test_math_exp(-979);
test_math_exp("6R3J80");
test_math_exp("960T");
test_math_exp("0SAWNG");
test_math_exp("ACH8Q");
test_math_exp(1.7577989795561726e+308);
test_math_exp("4N9");
test_math_exp("I6KYV5Q");
test_math_exp(1.5941982381809468e+308);
test_math_exp(-675);
test_math_exp(1.4339947656216352e+308);
test_math_exp("XCLL2T0WI");
test_math_exp(1.7266855278433097e+308);
test_math_exp(7.485158995558147e+307);
test_math_exp(8.491735426457939e+307);
test_math_exp("4RBI1P");
test_math_exp(-943);
test_math_exp(3.909366268073886e+306);
test_math_exp("T3X0");
test_math_exp(-19);
test_math_exp(1.0706982577515059e+308);
test_math_exp(1.0195325379382269e+308);
test_math_exp("AO3GF");
test_math_exp("SBKA");
test_math_exp("VOW6ZPR2");
test_math_exp(-417);
test_math_exp("WHBG");
test_math_exp(1.2014950942391762e+308);
test_math_exp("GS89");
test_math_exp(-535);
test_math_exp(3.3507583418597993e+307);
test_math_exp(-189);
test_math_exp(4.7015616482640474e+306);
test_math_exp("J39A");
test_math_exp(1.3854158599325543e+308);
test_math_exp(7.118419154396459e+307);
test_math_exp(-451);
test_math_exp("UZSERULPJZ");
test_math_exp("UZ5J79U8");
test_math_exp(-387);
test_math_exp(1.7336315608805438e+308);
test_math_exp(1.0779208129812603e+308);
test_math_exp(2.3126084945093996e+307);
test_math_exp(9.883790150767599e+307);
test_math_exp(1.0089142823015107e+308);
test_math_exp(-619);
test_math_exp(-885);
test_math_exp("CV76G");
test_math_exp("4Z0W3JT9VU");
test_math_exp(5.361015129982746e+307);
test_math_exp("KBPLQH0UXS");
test_math_exp(-225);
test_math_exp(3.890474473045256e+307);
test_math_exp("TYS");
test_math_exp(-837);
test_math_exp(7.130966913898971e+307);
test_math_exp(3.763732482833502e+306);
test_math_exp(9.75266080098884e+305);
test_math_exp("KODOI7MM");
test_math_exp(1.4358365844033377e+308);
test_math_exp("C82OOJR2UF");
test_math_exp(-787);
test_math_exp(4.364676825888855e+307);
test_math_exp("AYAOIMW88");
test_math_exp(884);
test_math_exp(-433);
test_math_exp("K0SIHRYI");
test_math_exp("46AXMWDIQ7");
test_math_exp("O9X5");
test_math_exp("1GUW8JMX7P");
test_math_exp(2.325110202848755e+306);
test_math_exp(1.7087944385434466e+308);
test_math_exp(2.1063562013416137e+307);
test_math_exp(4.799433012444215e+307);
test_math_exp("RD96WZH5");
test_math_exp(-659);
test_math_exp(5.392319294226769e+307);
test_math_exp("ETEM");
test_math_exp(-371);
test_math_exp(-343);
test_math_exp("8T1");
test_math_exp(9.998437151537771e+307);
test_math_exp(-825);
test_math_exp(-699);
test_math_exp("C2K96H");
test_math_exp(1.3224240295951565e+308);
test_math_exp("H5A8");
test_math_exp("2NJUXIO");
test_math_exp(-579);
test_math_exp(7.767478884623183e+307);
test_math_exp("SLAJO1TUL");
test_math_exp("KJ3DQ0X");
test_math_exp(1.7918292817850005e+308);
test_math_exp(-975);
test_math_exp(1.6622795275400633e+308);
test_math_exp("WOHXOCYX");
test_math_exp(6.613153886014442e+307);
test_math_exp(-311);
test_math_exp("5LARJXO");
test_math_exp(2.410392425320092e+307);
test_math_exp("QI02");
test_math_exp("3U71");
test_math_exp(8.102990511260104e+307);
test_math_exp(-37);
test_math_exp(-831);
test_math_exp(4.3454543106433754e+307);
test_math_exp(-753);
test_math_exp("V91BQFJN");
test_math_exp(8.805857498642757e+307);
test_math_exp("PRZ6AC2");
test_math_exp(1.641536440134451e+308);
test_math_exp(1.2584075799790124e+308);
test_math_exp(1.0007500766955729e+308);
test_math_exp("CBCP9KAO");
test_math_exp("ULOND30");
test_math_exp(1.1358108523532978e+308);
test_math_exp(-919);
test_math_exp("JPC");
test_math_exp(-477);
test_math_exp(-25);
test_math_exp(1.6928993137243119e+308);
test_math_exp("3SGEVL");
test_math_exp(-179);
test_math_exp("B3UJP");
test_math_exp(1.1060290736410517e+308);
test_math_exp(7.57097951430248e+307);
test_math_exp("82K");
test_math_exp("42U2");
test_math_exp(1.744780645462468e+308);
test_math_exp(8.133505653201705e+307);
test_math_exp(1.6211499462072367e+308);
test_math_exp("NS31");
test_math_exp(4.805493087598483e+307);
test_math_exp("U7JI0M8");
test_math_exp("OVBIT92UY");
test_math_exp("PLHHRHP97");
test_math_exp("WBP");
test_math_exp(3.8053605227981577e+307);
test_math_exp("LYW8R42");
test_math_exp(-31);
test_math_exp(5.170124028712675e+307);
test_math_exp("MS3");
test_math_exp(8.232038794051032e+307);
test_math_exp("VM5RDKI7");
test_math_exp(-1);
test_math_exp(3.696586721103757e+307);
test_math_exp(-153);
test_math_exp(-79);
test_math_exp("O46O");
test_math_exp(1.2924113398660836e+308);
test_math_exp("OZYS");
test_math_exp("KEE");
test_math_exp("SUHDA");
test_math_exp(5.985531479398848e+307);
test_math_exp("FZTP");
test_math_exp(1.4336689573360274e+308);
test_math_exp(1.0536645947451832e+308);
test_math_exp(2.0111913060993167e+307);
test_math_exp("AGAU8");
test_math_exp("1I1WW");
test_math_exp(-235);
test_math_exp("B60SKGR");
test_math_exp(5.5778464302940845e+305);
test_math_exp("2EYYD");
test_math_exp(2.538365612488176e+307);
test_math_exp(-51);
test_math_exp(1.1825127252616302e+308);
test_math_exp("UN6WOBQ7W");
test_math_exp(4.717546820925276e+307);
test_math_exp(-345);
test_math_exp("NTMEDQ50X3");
test_math_exp(1.472663365193494e+308);
test_math_exp("JYZZSNUYC");
test_math_exp("PKTBEV56");
test_math_exp(-73);
test_math_exp("GUS5E");
test_math_exp("SGK");
test_math_exp("STEZP7K");
test_math_exp("NYH2X7IQNC");
test_math_exp(1.0281651828955319e+307);
test_math_exp("PHY4LU0E");
test_math_exp("PJ8G");
test_math_exp(5.898329636957403e+306);
test_math_exp(6.405330888564444e+307);
test_math_exp(-531);
test_math_exp(1.4878137826904659e+308);
test_math_exp(-219);
test_math_exp(1.7873217161736608e+308);
test_math_exp(-95);
test_math_exp(-249);
test_math_exp(1.9388062754838276e+307);
test_math_exp("70I");
test_math_exp("B75QI");
test_math_exp("VYMQ");
test_math_exp("NFHW8YNEZ5");
test_math_exp(-55);
test_math_exp(-385);
test_math_exp(-129);
test_math_exp("XFS1");
test_math_exp(1.6532603199362152e+308);
test_math_exp("YGTKHS");
test_math_exp(5.686547156399672e+307);
test_math_exp("V6XY3536H");
test_math_exp(9.101513002958784e+307);
test_math_exp(7.752702545631565e+307);
test_math_exp("KR0135L");
test_math_exp(6.403944618699164e+307);
test_math_exp(1.1488731795019034e+308);
test_math_exp(1.656469175608761e+308);
test_math_exp("58WEE");
test_math_exp("9ZFG");
test_math_exp(1.0522441431658883e+308);
test_math_exp(1.0668561188674417e+308);
test_math_exp(8.454490387413453e+307);
test_math_exp(6.036257850485118e+307);
test_math_exp("QRZZ");
test_math_exp(-983);
test_math_exp("5VL");
test_math_exp("LAKGX8T");
test_math_exp("82T");
test_math_exp(6.508138621329538e+307);
test_math_exp("Q4D3TU");
test_math_exp(2.0293133288701489e+307);
test_math_exp(-17);
test_math_exp("6DUA");
test_math_exp("HTP4FRUV7");
test_math_exp("0V8NN");
test_math_exp("G7GG7Q6Z");
test_math_exp(-547);
test_math_exp("ME9G8OB");
test_math_exp("ZJ9PY");
test_math_exp(6.408020819538103e+307);
test_math_exp(1.0625279051920747e+308);
test_math_exp(2.939932875249227e+307);
test_math_exp("UBXCAM");
test_math_exp("J3PUAUU");
test_math_exp("MGTA");
test_math_exp(-319);
test_math_exp("H5CCP3");
test_math_exp(1.0026666762032799e+308);
test_math_exp("MIZJ4Q9U6E");
test_math_exp(1.3264833968914167e+308);
test_math_exp("CY4VX");
test_math_exp(3.978982339013613e+307);
test_math_exp(-381);
test_math_exp(1.8870500311393956e+307);
test_math_exp("07M9IEVCN");
test_math_exp(-875);
test_math_exp(1.1261360612883611e+308);
test_math_exp(8.677125411242682e+307);
test_math_exp(-97);
test_math_exp(-49);
test_math_exp("KA22T");
test_math_exp(1.3233582423852205e+308);
test_math_exp(3.377128434224674e+307);
test_math_exp(1.8808573609524736e+307);
test_math_exp("OMFJAZ");
test_math_exp("TXRY");
test_math_exp("ETMM");
test_math_exp(9.031582367334571e+307);
test_math_exp(1.225018591496929e+308);
test_math_exp("3FE9FO");
test_math_exp(1.734148429142188e+307);
test_math_exp("5Y4FO0K80B");
test_math_exp("ANAD3F2S13");
test_math_exp(-403);
test_math_exp("1L0JEDO");
test_math_exp(-643);
test_math_exp("Q0X6A");
test_math_exp("WIH0LK4ASS");
test_math_exp(9.292317121680086e+307);
test_math_exp(1.6117332285350867e+308);
test_math_exp("QH69PHW7S7");
test_math_exp(1.54452768690987e+308);
test_math_exp("NR508O4V");
test_math_exp(1.3111451946077068e+308);
test_math_exp(2.6143690187530637e+307);
test_math_exp(1.8547974092251715e+307);
test_math_exp("TX9ITBQD83");
test_math_exp(4.142315343348226e+307);
test_math_exp("39TC");
test_math_exp(1.3097165398226865e+308);
test_math_exp("PEQCHLAL");
test_math_exp("5IUK");
test_math_exp("1A4");
test_math_exp("WMQMETETV");
test_math_exp(1.0137136192147337e+308);
test_math_exp(6.245131265693949e+307);
test_math_exp(1.7801915245916705e+308);
test_math_exp("3PNEYF6IXH");
test_math_exp(7.887077075966567e+307);
test_math_exp("BQ7NS0");
test_math_exp("9XA58");
test_math_exp(2.1114259338060013e+307);
test_math_exp("0QEQ");
test_math_exp(5.134503839696277e+307);
test_math_exp("IF09FTUL");
test_math_exp("VDSEO");
test_math_exp("LPGNJC");
test_math_exp("KZ6V7INXDJ");
test_math_exp("WAD");
test_math_exp(-291);
test_math_exp(9.028711344268416e+307);
test_math_exp(2.4419471596307587e+307);
test_math_exp(1.0471298371513273e+308);
test_math_exp("91O4VM");
test_math_exp(1.2283424439961459e+308);
test_math_exp("II4R7");
test_math_exp(9.267120359507803e+307);
test_math_exp(-727);
test_math_exp("15O8F3");
test_math_exp(1.4141681118545355e+308);
test_math_exp(3.848681283286778e+307);
test_math_exp(3.9048417475522514e+307);
test_math_exp(8.895659894550497e+307);
test_math_exp(4.845686074528497e+307);
test_math_exp(5.478831571906317e+307);
test_math_exp(4.8585781658956655e+306);
test_math_exp(3.614693845449821e+307);
test_math_exp("2VERSC5");
test_math_exp("HD0UK028");
test_math_exp("OMTWJBM");
test_math_exp(-713);
test_math_exp(2.0341939268582062e+307);
test_math_exp(1.381985004186905e+308);
test_math_exp("9L175A8");
test_math_exp(1.7858179209861696e+308);
test_math_exp(1.5439197737428001e+308);
