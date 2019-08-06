/*
* This file is automatically generated by Swami
*
* 2019-08-06 12:34:29.089742
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
function test_math_cos(x){
	if (Object.is( x,NaN )){
		var output = Math.cos(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.cos(x);
		assert.strictEqual(1, output);
		console.log("Good Test");
		return;
		}
	if (( x === - 0 )){
		var output = Math.cos(x);
		assert.strictEqual(1, output);
		console.log("Good Test");
		return;
		}
	if (( x === + Infinity )){
		var output = Math.cos(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (( x === - Infinity )){
		var output = Math.cos(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}



/*TESTS GENERATED AUTOMATICALLY*/
test_math_cos(1.3813872244502389e+308);
test_math_cos("IAXD");
test_math_cos(/[\u0400-\u04FF]+/g);
test_math_cos(true);
test_math_cos(+0);
test_math_cos("R86");
test_math_cos(false);
test_math_cos(/(\w+)\s(\w+)/);
test_math_cos(1.314141571568343e+308);
test_math_cos(8.598902300265442e+307);
test_math_cos(-637);
test_math_cos(/\r\n|\r|\n/);
test_math_cos(NaN);
test_math_cos("EKAUIU0F");
test_math_cos(4.1353130040300216e+307);
test_math_cos(null);
test_math_cos(9.553377663175636e+307);
test_math_cos(-469);
test_math_cos(-0);
test_math_cos(Infinity);
test_math_cos(-185);
test_math_cos("GEO");
test_math_cos(/foo/g);
test_math_cos(2.995141188328234e+307);
test_math_cos(-867);
test_math_cos("YQZIKM6ID");
test_math_cos(-303);
test_math_cos(undefined);
test_math_cos(1.7829617788399946e+308);
test_math_cos(-593);
test_math_cos(/yes[^]*day/);
test_math_cos(9.40614283651545e+307);
test_math_cos(-109);
test_math_cos("M54Y");
test_math_cos(7.138424579974278e+307);
test_math_cos(/yes.*day/);
test_math_cos(-443);
test_math_cos("NO7M");
test_math_cos(-139);
test_math_cos(2.3220132815744123e+307);
test_math_cos(/[^.]+/);
test_math_cos(1.785644306414332e+308);
test_math_cos("LGZPL");
test_math_cos("AMQ1N735");
test_math_cos(/ab+c/);
test_math_cos(5.935449811813904e+306);
test_math_cos("OOCZ");
test_math_cos("CTFI");
test_math_cos(1.1942988820342909e+308);
test_math_cos("IPPFKLFV");
test_math_cos("CV6RY");
test_math_cos(-671);
test_math_cos("3VAWNUPV");
test_math_cos(1.5328767021565205e+308);
test_math_cos(-859);
test_math_cos("ZOIW3I9RD4");
test_math_cos(8.013279522633452e+307);
test_math_cos(-561);
test_math_cos(-755);
test_math_cos(8.27415760038385e+306);
test_math_cos("3Q0H2SHWP");
test_math_cos("UQTVQCKN8U");
test_math_cos("EAUV");
test_math_cos("6VX");
test_math_cos(4.556288027014289e+307);
test_math_cos(-951);
test_math_cos("S9MEVW01");
test_math_cos("NAR");
test_math_cos(-489);
test_math_cos("VQWSBPG55");
test_math_cos("RRJS");
test_math_cos(1.6571451106674004e+307);
test_math_cos(-35);
test_math_cos(1.0239048170975628e+308);
test_math_cos("PYWLD");
test_math_cos("2KYT");
test_math_cos(-633);
test_math_cos(-597);
test_math_cos("Y7ZRJ1");
test_math_cos(1.3943000667794383e+308);
test_math_cos(3.8673496749279916e+307);
test_math_cos(1.6365925853612927e+308);
test_math_cos("JL98HO8W");
test_math_cos(3.764904335676219e+306);
test_math_cos(-201);
test_math_cos(5.821966452963065e+307);
test_math_cos(-83);
test_math_cos("TRAH7FLK");
test_math_cos(7.814142596404344e+307);
test_math_cos(9.8482431279138e+306);
test_math_cos("Z8DQPAD");
test_math_cos(1.5767713197054684e+308);
test_math_cos("C4YSZ0U3");
test_math_cos("MWAZTOTWS");
test_math_cos(7.101856605363028e+307);
test_math_cos(-93);
test_math_cos(1.7857796282072655e+308);
test_math_cos(-941);
test_math_cos(6.784902487673438e+307);
test_math_cos(-893);
test_math_cos("SLG");
test_math_cos(-793);
test_math_cos(8.087454933770208e+307);
test_math_cos("XOXL9");
test_math_cos("2B0V");
test_math_cos("1BW8W5");
test_math_cos(-595);
test_math_cos("C4834DPMT2");
test_math_cos(1.008248972923243e+308);
test_math_cos("3NGG86");
test_math_cos("WD7UCI3CYA");
test_math_cos(1.578012063697233e+308);
test_math_cos(4.422001534310621e+306);
test_math_cos(-663);
test_math_cos(1.5258273274311054e+308);
test_math_cos(-13);
test_math_cos("YTC");
test_math_cos("T79D");
test_math_cos(5.054542618839685e+307);
test_math_cos(-323);
test_math_cos(1.3321681521238459e+308);
test_math_cos(-723);
test_math_cos("VYBPMDUU");
test_math_cos(-741);
test_math_cos(-655);
test_math_cos(4.985854105963559e+307);
test_math_cos(1.543820793163414e+308);
test_math_cos(-603);
test_math_cos(-587);
test_math_cos(9.166905262485423e+307);
test_math_cos("0SQMF5ZCQW");
test_math_cos(5.708931509299525e+307);
test_math_cos("KVFS");
test_math_cos(-521);
test_math_cos(-645);
test_math_cos(1.2691708217924259e+308);
test_math_cos("CMLPPRIA");
test_math_cos(-95);
test_math_cos(9.242058069563005e+307);
test_math_cos("57SLO65L");
test_math_cos(-9);
test_math_cos("Z9XC6");
test_math_cos(5.100642012780868e+307);
test_math_cos(-399);
test_math_cos("KTF4");
test_math_cos(-515);
test_math_cos(-817);
test_math_cos(-15);
test_math_cos(-967);
test_math_cos(-981);
test_math_cos("MWJA8C5HU");
test_math_cos("7K8UBJ8VWV");
test_math_cos(-927);
test_math_cos(-813);
test_math_cos(1.1601111916171046e+308);
test_math_cos("KLZERZV7P");
test_math_cos(1.5386056353343479e+308);
test_math_cos("C1SFED8E");
test_math_cos(-891);
test_math_cos(-809);
test_math_cos(5.035211148627139e+307);
test_math_cos(5.0175827979652453e+306);
test_math_cos("7KWWSCS4");
test_math_cos("97U64IFP");
test_math_cos(-321);
test_math_cos(-297);
test_math_cos(-49);
test_math_cos(-327);
test_math_cos(4.0437091376562614e+307);
test_math_cos(-641);
test_math_cos(-623);
test_math_cos("2G53QA");
test_math_cos(-689);
test_math_cos(-613);
test_math_cos(1.5980569617005081e+308);
test_math_cos(-717);
test_math_cos(6.328083269992943e+307);
test_math_cos("N4IWJ0");
test_math_cos(5.360321534882022e+307);
test_math_cos(-669);
test_math_cos(-145);
test_math_cos("XP6QCOCQS");
test_math_cos("K6AA1KT");
test_math_cos(3.18896306414247e+307);
test_math_cos(-673);
test_math_cos(1.7449943726456383e+308);
test_math_cos(7.285620997784646e+307);
test_math_cos("1DQYIIOUP");
test_math_cos(1.5614557535997753e+308);
test_math_cos(-797);
test_math_cos("KQ2");
test_math_cos(5.421781889941874e+307);
test_math_cos(9.304081254346061e+307);
test_math_cos("M17KGJ7");
test_math_cos(3.9015128147954933e+307);
test_math_cos(6.318147379594628e+307);
test_math_cos(1.0970740776291697e+308);
test_math_cos(-409);
test_math_cos("F9840F");
test_math_cos("XOJWCATF8");
test_math_cos(1.424614572604507e+308);
test_math_cos(1.4852845466085638e+308);
test_math_cos("NXJPU");
test_math_cos(1.7577652611432063e+307);
test_math_cos("GIQQGF1LWX");
test_math_cos(-825);
test_math_cos(1.5266957422549665e+308);
test_math_cos(-183);
test_math_cos("UZPP544T");
test_math_cos(-301);
test_math_cos(-457);
test_math_cos(4.680845345659834e+307);
test_math_cos(4.820207919651247e+307);
test_math_cos("M5UJZUT");
test_math_cos("ZDY");
test_math_cos(1.4436915551936525e+308);
test_math_cos(1.3855155334071192e+308);
test_math_cos("B5F0TNE9R");
test_math_cos(9.465171261574244e+307);
test_math_cos("IDNS18XN5");
test_math_cos("K56O");
test_math_cos(1.0426750907469396e+308);
test_math_cos("IU6JWG");
test_math_cos("OIPOK");
test_math_cos(-463);
test_math_cos(-653);
test_math_cos(-985);
test_math_cos("SF5");
test_math_cos(-959);
test_math_cos(-215);
test_math_cos(-257);
test_math_cos(6.281945578076891e+307);
test_math_cos(4.807375761278278e+307);
test_math_cos("ZV3936DL");
test_math_cos(-823);
test_math_cos(-367);
test_math_cos(1.1691674123370862e+308);
test_math_cos("W401L9RGQ");
test_math_cos(1.3852349209520876e+308);
test_math_cos(-675);
test_math_cos("7CYAM");
test_math_cos(1.1783696535705776e+308);
test_math_cos(1.1198229849813299e+308);
test_math_cos("K27DT6K8P");
test_math_cos(1.337850393512208e+308);
test_math_cos(5.689282280144443e+306);
test_math_cos("ZNHVF");
test_math_cos(-427);
test_math_cos("V3L7ZKBBX");
test_math_cos("LRLYGE");
test_math_cos(-249);
test_math_cos(1.7109698343804706e+307);
test_math_cos(-917);
test_math_cos("C1ERB8B");
test_math_cos(-879);
test_math_cos(1.0204553278501635e+308);
test_math_cos(1.0897915402984913e+306);
test_math_cos(1.6728370046113738e+307);
test_math_cos(8.887494266493206e+307);
test_math_cos(-629);
test_math_cos("L1QSXX6S");
test_math_cos(3.227928247830734e+306);
test_math_cos(-779);
test_math_cos("9FD3PI8ZBS");
test_math_cos(-449);
test_math_cos("A6NI");
test_math_cos(-163);
test_math_cos(-429);
test_math_cos(-847);
test_math_cos(-261);
test_math_cos(1.888834644969613e+306);
test_math_cos(1.7465367475510205e+308);
test_math_cos(-601);
test_math_cos(4.1463466736571586e+307);
test_math_cos(1.3579646391818674e+308);
test_math_cos("XBJMUVD6");
test_math_cos(-539);
test_math_cos("L2Q770OHSB");
test_math_cos(2.641535761307399e+307);
test_math_cos("Z29VMF");
test_math_cos(-227);
test_math_cos(1.2711837044470056e+308);
test_math_cos("AAN74");
test_math_cos(-181);
test_math_cos("2OO0");
test_math_cos("TGTUOSOKJ");
test_math_cos(1.010805119213763e+308);
test_math_cos("CR0");
test_math_cos(1.232480111072762e+308);
test_math_cos(1.339982669115275e+308);
test_math_cos("5FU0TJN");
test_math_cos("YFJCN4Z");
test_math_cos("MO1NN");
test_math_cos(6.780983259368438e+307);
test_math_cos(8.17268138829913e+307);
test_math_cos(-277);
test_math_cos(1.4625216021686118e+308);
test_math_cos("GSWN");
test_math_cos("EVL5561ASI");
test_math_cos(-599);
test_math_cos("INDPDW");
test_math_cos("VBHQYMVGT");
test_math_cos("0BTTD6YH7O");
test_math_cos(-839);
test_math_cos("5NOIL");
test_math_cos("KB2U5N0X9U");
test_math_cos("YSSRBUIOL");
test_math_cos(-803);
test_math_cos(-41);
test_math_cos("CUSFSBG");
test_math_cos(-393);
test_math_cos(2.0658551070257426e+307);
test_math_cos(1.4434612776027416e+308);
test_math_cos(-677);
test_math_cos(-905);
test_math_cos("2A2");
test_math_cos("5MVHOIH8");
test_math_cos("ULCN089");
test_math_cos(1.4495281569736545e+308);
test_math_cos("ZXZP");
test_math_cos("EKBYJAZR");
test_math_cos(-993);
test_math_cos("L1080F7IC");
test_math_cos("JDBW5");
test_math_cos("QHAZ8");
test_math_cos(1.7610694815714094e+307);
test_math_cos("NM9AI857S");
test_math_cos("5XXBPD");
test_math_cos(-21);
test_math_cos(1.4884028532208137e+308);
test_math_cos("4LFY");
test_math_cos(1.2433234627082557e+308);
test_math_cos(8.409755590134012e+307);
test_math_cos("AX3XIO790");
test_math_cos("QFH1LYF4G");
test_math_cos(-565);
test_math_cos(-437);
test_math_cos(-955);
test_math_cos(4.919880260378395e+307);
test_math_cos(-419);
test_math_cos(-795);
test_math_cos(1.4931832476919039e+308);
test_math_cos(-881);
test_math_cos(6.617868569430106e+307);
test_math_cos(1.0272958212768093e+308);
test_math_cos("LOZLCQK4");
test_math_cos("W2D5NR1VX");
test_math_cos("LAJYUSX2YG");
test_math_cos(-617);
test_math_cos(1.4003128188053068e+308);
test_math_cos(-821);
test_math_cos(-317);
test_math_cos(-241);
test_math_cos("2SDEJ89I");
test_math_cos(2.724030928159078e+307);
test_math_cos("RX4J5AFE0");
test_math_cos(-505);
test_math_cos(-665);
test_math_cos("VET0U4BCK");
test_math_cos(-311);
test_math_cos(1.044816980861191e+308);
test_math_cos(-581);
test_math_cos("UUNVJ9UBOE");
test_math_cos(-55);
test_math_cos("LDBGZ");
test_math_cos("GRHL9NC5KC");
test_math_cos("AIYQHEW1TC");
test_math_cos("M0RLCE");
test_math_cos(186);
test_math_cos(-761);
test_math_cos("MRB2");
test_math_cos("3LVDYQM8Z");
test_math_cos(1.544675167318336e+308);
test_math_cos("EN8NZ");
test_math_cos("U87K3");
test_math_cos(-263);
test_math_cos(8.418615771312138e+307);
test_math_cos(2.621280251253059e+307);
test_math_cos(1.4563652583531275e+307);
test_math_cos(1.4316058092194804e+308);
test_math_cos(-111);
test_math_cos(1.2674559918805395e+308);
test_math_cos(1.794314074936341e+307);
test_math_cos("498TXT47AF");
test_math_cos(-475);
test_math_cos(2.178165988757078e+307);
test_math_cos(9.02208470309143e+307);
test_math_cos(4.788420713107147e+307);
test_math_cos("89LBU9OD6");
test_math_cos(1.4161333949894484e+308);
test_math_cos(-333);
test_math_cos(1.6931539899825632e+308);
test_math_cos(-949);
test_math_cos(5.872525817489469e+307);
test_math_cos(9.627688776644909e+307);
test_math_cos("WIYCLE");
test_math_cos("QQ55YQFK");
test_math_cos("0FQ");
test_math_cos(-211);
test_math_cos(1.6328886856796346e+308);
test_math_cos(-537);
test_math_cos(1.1879777674925942e+308);
test_math_cos(4.1968818111488105e+307);
test_math_cos("66XTLJYZA6");
test_math_cos("52PDA");
test_math_cos(1.5143533580051211e+308);
test_math_cos(1.702672287479267e+308);
test_math_cos("NHQH6OB");
test_math_cos("LZ0");
test_math_cos(-935);
test_math_cos(5.011867730221431e+307);
test_math_cos(-279);
test_math_cos(-815);
test_math_cos(5.055406890262868e+307);
test_math_cos(-873);
test_math_cos(1.2826464614711833e+308);
test_math_cos("1NTEL3ST");
test_math_cos("SBX9C");
test_math_cos(-735);
test_math_cos(-101);
test_math_cos(-335);
test_math_cos(4.503838434356859e+307);
test_math_cos(1.9047717979624168e+306);
test_math_cos("VF9D");
test_math_cos("AR7H4PN");
test_math_cos("XP9TC8");
test_math_cos(2.813365053527734e+307);
test_math_cos(-693);
test_math_cos(1.764006533665498e+308);
test_math_cos(1.6197354240907035e+308);
test_math_cos(-971);
test_math_cos("RHXLFQ4N");
test_math_cos(2.059423761092285e+307);
test_math_cos(-7);
test_math_cos("SULI");
test_math_cos("6J8I");
test_math_cos(8.044367085094542e+307);
test_math_cos(-67);
test_math_cos("KBLN");
test_math_cos(1.5452465280350386e+308);
test_math_cos(-381);
test_math_cos(9.941249789340125e+307);
test_math_cos("YOVC1");
test_math_cos(2.093666126683216e+307);
test_math_cos(-621);
test_math_cos("T25TFC9");
test_math_cos("B23L34");
test_math_cos("9Y1");
test_math_cos("GL2");
test_math_cos("55XC7HO");
test_math_cos(7.716654693117697e+306);
test_math_cos(1.2363803494555886e+308);
test_math_cos("X3JNEFMO");
test_math_cos(-861);
test_math_cos("IHPT85H8");
test_math_cos(1.0973114630077204e+308);
test_math_cos("7WI0");
test_math_cos(-731);
test_math_cos(8.614421320265297e+307);
test_math_cos("FOFYAX");
test_math_cos(-759);
test_math_cos(-569);
test_math_cos(-999);
test_math_cos(-379);
test_math_cos(7.513104649821587e+306);
test_math_cos(-987);
test_math_cos("0V0YF5");
test_math_cos(1.0771703426183664e+308);
test_math_cos("PWTS1");
test_math_cos(-289);
test_math_cos("ZV5NFA");
test_math_cos(1.6023151338501117e+308);
test_math_cos(9.46786941467007e+307);
test_math_cos("YKUB0CSMU3");
test_math_cos(1.4306035479157185e+307);
test_math_cos(-43);
test_math_cos(-207);
test_math_cos(1.3780483287009588e+308);
test_math_cos("9XQWE3B4N");
test_math_cos("1WAYSLZL");
test_math_cos("4VVSFV");
test_math_cos(1.745956671318123e+307);
test_math_cos("QP0R");
test_math_cos("02MM");
test_math_cos("02L4CSE");
test_math_cos(2.6550382667027135e+307);
test_math_cos(-205);
test_math_cos("FY7C");
test_math_cos(1.31212092352692e+308);
test_math_cos(-307);
test_math_cos("TMZMU");
test_math_cos("F8IN");
test_math_cos("K9WEXAU");
test_math_cos("87M02");
test_math_cos("YWI");
test_math_cos("ZPLB2P");
test_math_cos(7.985217569935734e+307);
test_math_cos("KANO2");
test_math_cos("LK51IQ");
test_math_cos(4.964076571733427e+307);
test_math_cos(-441);
test_math_cos("0TWVF0");
test_math_cos(2.2210179792606919e+307);
test_math_cos(5.34720876881159e+307);
test_math_cos(-357);
test_math_cos("KUCYMCIZ");
test_math_cos(-853);
test_math_cos(164);
test_math_cos(1.2929656799976456e+308);
test_math_cos(-369);
test_math_cos("9B4TX1P");
test_math_cos("XVE0G");
test_math_cos("NB3");
test_math_cos(-171);
test_math_cos(1.7171270043319016e+307);
test_math_cos("R1VG66");
test_math_cos(1.7764005059917874e+308);
test_math_cos(1.7091778912651945e+308);
test_math_cos("EUKDJVI5L");
test_math_cos("A5SRJTQ");
test_math_cos("8OWSMA");
test_math_cos(-121);
test_math_cos(-285);
test_math_cos("BBSS");
test_math_cos("FOYB90TTD");
test_math_cos("2HMA9");
test_math_cos(1.3513891546688277e+308);
test_math_cos(-461);
test_math_cos("KO6");
test_math_cos(7.631049731132426e+307);
test_math_cos("JRS3");
test_math_cos(8.590413315201961e+306);
test_math_cos("Z0G");
test_math_cos(-925);
test_math_cos(-513);
test_math_cos(-627);
test_math_cos("PUMS6C8W");
test_math_cos(7.223447124693532e+307);
test_math_cos(-907);
test_math_cos(-209);
test_math_cos("IN35X");
test_math_cos(1.025427357467832e+306);
test_math_cos(8.623205195278835e+306);
test_math_cos("20DXN5V60");
test_math_cos(-855);
test_math_cos(7.63115806814749e+305);
test_math_cos(-113);
test_math_cos("QVSMM8JOLC");
test_math_cos("VEB0S2X");
test_math_cos(6.267065485307125e+307);
test_math_cos(-295);
test_math_cos(4.2041712819911237e+307);
test_math_cos(1.0760885565018097e+308);
test_math_cos("NO8T3");
test_math_cos(1.0723423204798837e+308);
test_math_cos("V6P2M");
test_math_cos(-339);
test_math_cos(-5);
test_math_cos(-751);
test_math_cos(9.009321704716058e+307);
test_math_cos(1.5586234813865005e+308);
test_math_cos(-395);
test_math_cos(1.6823560147897873e+308);
test_math_cos("PH6T6A");
test_math_cos("X5XYU6EI");
test_math_cos(8.401935910073482e+307);
test_math_cos(1.7811355383485755e+307);
test_math_cos(2.0764086720449336e+307);
test_math_cos("LGG8");
test_math_cos(1.7230988243994207e+308);
test_math_cos("0GMKXFR7LR");
test_math_cos("977210");
test_math_cos(2.245761093405798e+307);
test_math_cos("YPP8");
test_math_cos(1.7383120011710647e+308);
test_math_cos(1.5488828559575485e+308);
test_math_cos(1.6052986265269932e+308);
test_math_cos(-203);
test_math_cos(1.6551879559030284e+308);
test_math_cos("9Y9XL7M");
test_math_cos(1.3092990544614956e+308);
test_math_cos(1.0441439833953465e+308);
test_math_cos(1.3345986160517575e+308);
test_math_cos(1.7334374568357147e+308);
test_math_cos("GUNHC");
test_math_cos(-531);
test_math_cos(1.7566847610980942e+308);
test_math_cos(8.527705655882797e+307);
test_math_cos("1TV");
test_math_cos(6.19715781783251e+307);
test_math_cos("ZY9XBW3KX");
test_math_cos(-57);
test_math_cos("SRY83U");
test_math_cos("FN7PKDQE");
test_math_cos(5.700478421646567e+307);
test_math_cos(-557);
test_math_cos(-225);
test_math_cos(1.3778978777464885e+308);
test_math_cos(992);
test_math_cos(-87);
test_math_cos("1W6");
test_math_cos("RDXUS3L");
test_math_cos(1.5291655189508837e+308);
test_math_cos(5.554133420823469e+305);
test_math_cos(5.316199696926782e+307);
test_math_cos(1.2931865801848552e+308);
test_math_cos(1.1064258800472698e+308);
test_math_cos(-281);
test_math_cos(1.7670415459255083e+308);
test_math_cos(-477);
test_math_cos("6R3J80");
test_math_cos("TAE2");
test_math_cos("0SAWNG");
test_math_cos("ACH8Q");
test_math_cos(1.7577989795561726e+308);
test_math_cos("4N9");
test_math_cos("I6KYV5Q");
test_math_cos(1.4079699259624146e+308);
test_math_cos(1.4339947656216352e+308);
test_math_cos("XCLL2T0WI");
test_math_cos(1.7266855278433097e+308);
test_math_cos(4.180049031997873e+307);
test_math_cos(5.332102375001586e+307);
test_math_cos(-217);
test_math_cos("4RBI1P");
test_math_cos(3.909366268073886e+306);
test_math_cos("T3X0");
test_math_cos(-819);
test_math_cos(-19);
test_math_cos(1.0706982577515059e+308);
test_math_cos(1.0195325379382269e+308);
test_math_cos("6HKZNY");
test_math_cos(-997);
test_math_cos("SBKA");
test_math_cos("AHXVR");
test_math_cos(-417);
test_math_cos("KQUJL");
test_math_cos(1.2014950942391762e+308);
test_math_cos("GS89");
test_math_cos(-533);
test_math_cos(3.3507583418597993e+307);
test_math_cos(-189);
test_math_cos(4.7015616482640474e+306);
test_math_cos("J39A");
test_math_cos(1.936782211607291e+307);
test_math_cos(7.118419154396459e+307);
test_math_cos(-451);
test_math_cos("UZSERULPJZ");
test_math_cos("UZ5J79U8");
test_math_cos(-387);
test_math_cos(1.7336315608805438e+308);
test_math_cos(1.0779208129812603e+308);
test_math_cos(2.3126084945093996e+307);
test_math_cos(9.883790150767599e+307);
test_math_cos(1.0089142823015107e+308);
test_math_cos(-619);
test_math_cos(-885);
test_math_cos("S7OOJ63NCH");
test_math_cos("4Z0W3JT9VU");
test_math_cos(6.431493286008272e+307);
test_math_cos("KBPLQH0UXS");
test_math_cos(3.890474473045256e+307);
test_math_cos("5ALKKSP");
test_math_cos(6.761474088704734e+307);
test_math_cos(3.763732482833502e+306);
test_math_cos(9.75266080098884e+305);
test_math_cos("KODOI7MM");
test_math_cos(1.4667125180925123e+308);
test_math_cos("C82OOJR2UF");
test_math_cos(-923);
test_math_cos(4.364676825888855e+307);
test_math_cos("AYAOIMW88");
test_math_cos(884);
test_math_cos("K0SIHRYI");
test_math_cos("46AXMWDIQ7");
test_math_cos("O9X5");
test_math_cos("1GUW8JMX7P");
test_math_cos(2.325110202848755e+306);
test_math_cos(1.7087944385434466e+308);
test_math_cos(2.1063562013416137e+307);
test_math_cos(5.650136143450318e+307);
test_math_cos("RD96WZH5");
test_math_cos(-143);
test_math_cos(-915);
test_math_cos(-659);
test_math_cos(5.392319294226769e+307);
test_math_cos("ETEM");
test_math_cos(-371);
test_math_cos(-343);
test_math_cos("8T1");
test_math_cos(9.998437151537771e+307);
test_math_cos(-699);
test_math_cos("C2K96H");
test_math_cos(1.3224240295951565e+308);
test_math_cos("H5A8");
test_math_cos(-503);
test_math_cos("RP43UHW");
test_math_cos(-579);
test_math_cos(7.767478884623183e+307);
test_math_cos("7OMIZOCO");
test_math_cos("KJ3DQ0X");
test_math_cos(1.7564867916936125e+308);
test_math_cos(-135);
test_math_cos(-545);
test_math_cos(1.6622795275400633e+308);
test_math_cos("WOHXOCYX");
test_math_cos(-681);
test_math_cos(6.613153886014442e+307);
test_math_cos("5LARJXO");
test_math_cos(2.410392425320092e+307);
test_math_cos("R0I5");
test_math_cos("3U71");
test_math_cos(-943);
test_math_cos(8.102990511260104e+307);
test_math_cos(-37);
test_math_cos(4.3454543106433754e+307);
test_math_cos(-753);
test_math_cos("V91BQFJN");
test_math_cos(1.5267023992612188e+308);
test_math_cos("PRZ6AC2");
test_math_cos(1.641536440134451e+308);
test_math_cos(1.8230840687672154e+307);
test_math_cos(1.0007500766955729e+308);
test_math_cos("CBCP9KAO");
test_math_cos("T3XCWM");
test_math_cos(1.1358108523532978e+308);
test_math_cos("JPC");
test_math_cos(-25);
test_math_cos(1.6928993137243119e+308);
test_math_cos(-705);
test_math_cos("3SGEVL");
test_math_cos("B3UJP");
test_math_cos(1.1060290736410517e+308);
test_math_cos(7.57097951430248e+307);
test_math_cos("82K");
test_math_cos("V2JE");
test_math_cos(1.744780645462468e+308);
test_math_cos(8.133505653201705e+307);
test_math_cos(1.6211499462072367e+308);
test_math_cos("NS31");
test_math_cos(1.365212168907837e+308);
test_math_cos("U7JI0M8");
test_math_cos("OVBIT92UY");
test_math_cos("KCQY3J");
test_math_cos("WBP");
test_math_cos(3.6137765671973593e+307);
test_math_cos("LYW8R42");
test_math_cos(-91);
test_math_cos(5.170124028712675e+307);
test_math_cos("MS3");
test_math_cos(8.232038794051032e+307);
test_math_cos("VM5RDKI7");
test_math_cos(-1);
test_math_cos(3.696586721103757e+307);
test_math_cos(-411);
test_math_cos(-79);
test_math_cos("O46O");
test_math_cos(-787);
test_math_cos(1.2924113398660836e+308);
test_math_cos("VBQ0N");
test_math_cos("KEE");
test_math_cos("K1V26A");
test_math_cos(5.985531479398848e+307);
test_math_cos("EPZ");
test_math_cos(1.4336689573360274e+308);
test_math_cos(1.0536645947451832e+308);
test_math_cos(9.39904504893109e+306);
test_math_cos(-131);
test_math_cos("AGAU8");
test_math_cos("J341");
test_math_cos(-235);
test_math_cos("5T7XLA");
test_math_cos(1.0594682569451173e+308);
test_math_cos("2EYYD");
test_math_cos(2.538365612488176e+307);
test_math_cos(-739);
test_math_cos(9.956619838709206e+307);
test_math_cos("UN6WOBQ7W");
test_math_cos(4.717546820925276e+307);
test_math_cos(-685);
test_math_cos("NTMEDQ50X3");
test_math_cos(1.472663365193494e+308);
test_math_cos("PTM8");
test_math_cos("PKTBEV56");
test_math_cos(-73);
test_math_cos("GUS5E");
test_math_cos("BF5Q3");
test_math_cos("STEZP7K");
test_math_cos("NYH2X7IQNC");
test_math_cos(1.0281651828955319e+307);
test_math_cos("PHY4LU0E");
test_math_cos("71DNY0E3");
test_math_cos(5.898329636957403e+306);
test_math_cos(1.5174030824135758e+308);
test_math_cos(1.710343300189791e+308);
test_math_cos(-219);
test_math_cos(1.7873217161736608e+308);
test_math_cos(1.9388062754838276e+307);
test_math_cos(-141);
test_math_cos("70I");
test_math_cos("B75QI");
test_math_cos("NELLTU624");
test_math_cos("C2L5MAG");
test_math_cos(-811);
test_math_cos("XFS1");
test_math_cos(1.6532603199362152e+308);
test_math_cos("YGTKHS");
test_math_cos(-63);
test_math_cos(5.443324750239985e+307);
test_math_cos("V6XY3536H");
test_math_cos(9.101513002958784e+307);
test_math_cos(7.752702545631565e+307);
test_math_cos("KR0135L");
test_math_cos(6.403944618699164e+307);
test_math_cos(-939);
test_math_cos(1.62908525478373e+308);
test_math_cos(1.656469175608761e+308);
test_math_cos("58WEE");
test_math_cos("9ZFG");
test_math_cos(1.0522441431658883e+308);
test_math_cos(1.0668561188674417e+308);
test_math_cos(8.454490387413453e+307);
test_math_cos(6.036257850485118e+307);
test_math_cos("QRZZ");
test_math_cos("5VL");
test_math_cos("LAKGX8T");
test_math_cos("DUDEWDO5");
test_math_cos(6.508138621329538e+307);
test_math_cos("Q4D3TU");
test_math_cos(2.0293133288701489e+307);
test_math_cos(-17);
test_math_cos("6DUA");
test_math_cos("HTP4FRUV7");
test_math_cos("N2TDU6E2");
test_math_cos("G7GG7Q6Z");
test_math_cos(-353);
test_math_cos("ME9G8OB");
test_math_cos("ZJ9PY");
test_math_cos(1.548158440158953e+308);
test_math_cos(1.7241930279801168e+308);
test_math_cos(2.939932875249227e+307);
test_math_cos("UBXCAM");
test_math_cos("J3PUAUU");
test_math_cos("MGTA");
test_math_cos(-319);
test_math_cos("H5CCP3");
test_math_cos(-251);
test_math_cos(5.344130387929684e+307);
test_math_cos("MIZJ4Q9U6E");
test_math_cos(-53);
test_math_cos(6.53030156297982e+307);
test_math_cos(-231);
test_math_cos(-33);
test_math_cos("CY4VX");
test_math_cos(3.978982339013613e+307);
test_math_cos(1.8870500311393956e+307);
test_math_cos("07M9IEVCN");
test_math_cos(-875);
test_math_cos(1.4536814505402478e+308);
test_math_cos(8.677125411242682e+307);
test_math_cos(-97);
test_math_cos("2HWDT7");
test_math_cos(1.3233582423852205e+308);
test_math_cos(1.576098750091777e+308);
test_math_cos(1.8808573609524736e+307);
test_math_cos("OMFJAZ");
test_math_cos("79163P57");
test_math_cos("ETMM");
test_math_cos(3.152664680950095e+307);
test_math_cos(1.225018591496929e+308);
test_math_cos("NR2UQ65");
test_math_cos(1.734148429142188e+307);
test_math_cos("5Y4FO0K80B");
test_math_cos("ANAD3F2S13");
test_math_cos(-403);
test_math_cos("PFMAA2SE");
test_math_cos(-471);
test_math_cos("Q0X6A");
test_math_cos("U3Q3");
test_math_cos(9.292317121680086e+307);
test_math_cos(1.6117332285350867e+308);
test_math_cos("QH69PHW7S7");
test_math_cos(1.54452768690987e+308);
test_math_cos(-137);
test_math_cos("NR508O4V");
test_math_cos(1.3111451946077068e+308);
test_math_cos(-27);
test_math_cos(6.78298066774834e+306);
test_math_cos(1.8547974092251715e+307);
test_math_cos("9NQU");
test_math_cos(1.6802902631792896e+308);
test_math_cos("39TC");
test_math_cos(1.3097165398226865e+308);
test_math_cos("V1NPD8");
test_math_cos("TZRKL16823");
test_math_cos("HBD8GHYK");
test_math_cos("WHW5M");
test_math_cos(1.0137136192147337e+308);
test_math_cos(6.245131265693949e+307);
test_math_cos(1.7801915245916705e+308);
test_math_cos("3PNEYF6IXH");
test_math_cos(-337);
test_math_cos(7.887077075966567e+307);
test_math_cos("BQ7NS0");
test_math_cos("9XA58");
test_math_cos(2.1114259338060013e+307);
test_math_cos("0QEQ");
test_math_cos(5.134503839696277e+307);
test_math_cos("JCL");
test_math_cos("VDSEO");
test_math_cos("LPGNJC");
test_math_cos("KZ6V7INXDJ");
test_math_cos("WAD");
test_math_cos(-447);
test_math_cos(9.490323579836986e+307);
test_math_cos(2.4419471596307587e+307);
test_math_cos(1.0471298371513273e+308);
test_math_cos("91O4VM");
test_math_cos(8.728812119370433e+307);
test_math_cos("II4R7");
test_math_cos(1.1850468174936719e+308);
test_math_cos(-727);
test_math_cos("RASJB1");
test_math_cos(1.4141681118545355e+308);
test_math_cos(1.4568816697988625e+308);
test_math_cos(3.9048417475522514e+307);
test_math_cos(8.895659894550497e+307);
test_math_cos(5.267413199607258e+307);
test_math_cos(5.478831571906317e+307);
test_math_cos(4.8585781658956655e+306);
test_math_cos(3.614693845449821e+307);
test_math_cos("2VERSC5");
test_math_cos("HD0UK028");
test_math_cos("OMTWJBM");
test_math_cos(2.0341939268582062e+307);
test_math_cos(1.381985004186905e+308);
test_math_cos("9L175A8");
test_math_cos(-831);
test_math_cos(1.7858179209861696e+308);
test_math_cos(1.5439197737428001e+308);
test_math_cos(1.304446943747559e+308);
test_math_cos("T42MTIM3");
test_math_cos(1.384474234590052e+308);
test_math_cos("LTXWX7G");
test_math_cos("1EP4UDWG");
test_math_cos("96P4");
test_math_cos(1.2853472961534775e+308);
test_math_cos("8DBFAC");
test_math_cos(-511);
test_math_cos("4GVQ2Q");
test_math_cos("KPZ");
test_math_cos("50K6II");
test_math_cos("YVMDZQNG7C");
test_math_cos(1.5174718550320162e+308);
test_math_cos("F4JX34J7");
test_math_cos("3GY65TA8");
test_math_cos(1.352884479317614e+308);
test_math_cos("924921");
test_math_cos("7XKX0BWD3O");
test_math_cos(1.675966555921226e+308);
test_math_cos(9.575853312405085e+307);
test_math_cos(-611);
test_math_cos(1.5289073321103665e+308);
test_math_cos("VKZ806M");
test_math_cos(6.519832036963642e+307);
test_math_cos("A4H1RCBMLP");
test_math_cos(-509);
test_math_cos("IVQCZ85");
test_math_cos("FXGQZ");
test_math_cos(1.7854363449441056e+308);
test_math_cos(-553);
test_math_cos("JYNSP");
test_math_cos(-377);
test_math_cos(-299);
test_math_cos(-125);
test_math_cos(4.487876741928351e+307);
test_math_cos(1.5643806801546814e+308);
test_math_cos(1.145639327995123e+307);
test_math_cos(-359);
test_math_cos(9.220707644906792e+307);
test_math_cos("2N911");
test_math_cos(-919);
test_math_cos(6.684714643710812e+307);
test_math_cos(1.3820757679278478e+308);
test_math_cos(-259);
test_math_cos(-499);
test_math_cos(1.7489396156904493e+308);
test_math_cos(2.1130843744138438e+307);
test_math_cos("B25FW2");
test_math_cos("11TJAQL");
test_math_cos(4.591411880286247e+307);
test_math_cos(-541);
test_math_cos("MBWRWZ1");
test_math_cos(1.419457160982189e+308);
test_math_cos(-729);
test_math_cos("1GE6I");
test_math_cos(1.532255979835607e+308);
test_math_cos("WY4YL8IXLR");
test_math_cos(1.1096578006272593e+308);
test_math_cos(-767);
