/*
* This file is automatically generated by Swami
*
* 2019-08-06 19:40:22.269649
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
function test_math_acosh(x){
	if (Object.is( x,NaN )){
		var output = Math.acosh(x);
		new TestCase("math_acosh", "math_acosh", NaN, output);
		test();
		return;
		}
	if (( x === 1 )){
		var output = Math.acosh(x);
		new TestCase("math_acosh", "math_acosh", + 0, output);
		test();
		return;
		}
	if (( x === + Infinity )){
		var output = Math.acosh(x);
		new TestCase("math_acosh", "math_acosh", + Infinity, output);
		test();
		return;
		}
}



/*TESTS GENERATED AUTOMATICALLY*/
test_math_acosh(true);
test_math_acosh(-7);
test_math_acosh("VQR9LJ1J");
test_math_acosh(3.0535971093409538e+305);
test_math_acosh(false);
test_math_acosh(-0);
test_math_acosh(1.1566308607883379e+308);
test_math_acosh("AJ4P2QO54L");
test_math_acosh(/yes.*day/);
test_math_acosh(/(\w+)\s(\w+)/);
test_math_acosh(Infinity);
test_math_acosh(undefined);
test_math_acosh(1.2039790101901905e+308);
test_math_acosh(/foo/g);
test_math_acosh(6.302777720302376e+307);
test_math_acosh("ODRB");
test_math_acosh(/\r\n|\r|\n/);
test_math_acosh("66TXQ");
test_math_acosh(NaN);
test_math_acosh("JGTKDQ");
test_math_acosh(1.980312451086925e+307);
test_math_acosh(-417);
test_math_acosh("1T4SXY");
test_math_acosh(-3);
test_math_acosh(1.7948412538007284e+308);
test_math_acosh(8.378389203068467e+307);
test_math_acosh(-771);
test_math_acosh(-979);
test_math_acosh(-337);
test_math_acosh("6VFE8X");
test_math_acosh("3B3FA0Q");
test_math_acosh("ITGJUU");
test_math_acosh(/[^.]+/);
test_math_acosh("TX8F3");
test_math_acosh(4.868508594402535e+307);
test_math_acosh(6.363638095868043e+307);
test_math_acosh(null);
test_math_acosh(6.237866469578747e+306);
test_math_acosh(9.181547342195872e+307);
test_math_acosh(-603);
test_math_acosh(/yes[^]*day/);
test_math_acosh(-883);
test_math_acosh("JPXI1L");
test_math_acosh(3.5773235805441677e+307);
test_math_acosh(/ab+c/);
test_math_acosh("RJV");
test_math_acosh("BAR");
test_math_acosh(6.390500048515885e+307);
test_math_acosh(1.2011845165663326e+308);
test_math_acosh(-301);
test_math_acosh(1.4241605678904082e+308);
test_math_acosh(1.6955650219461575e+308);
test_math_acosh("0ZZ");
test_math_acosh(4.859026099803822e+307);
test_math_acosh(-35);
test_math_acosh(/[\u0400-\u04FF]+/g);
test_math_acosh("YUGTMXD55Y");
test_math_acosh(-949);
test_math_acosh(-933);
test_math_acosh("UID1C8");
test_math_acosh(+0);
test_math_acosh(-685);
test_math_acosh(1.0619317759247341e+308);
test_math_acosh("W1R3QKSS7");
test_math_acosh("P74GFF7BQ9");
test_math_acosh("O79");
test_math_acosh(1.569264312295645e+308);
test_math_acosh(-799);
test_math_acosh(-231);
test_math_acosh(1.7757909925736456e+308);
test_math_acosh(-991);
test_math_acosh(-527);
test_math_acosh(-415);
test_math_acosh(-987);
test_math_acosh("X5RC");
test_math_acosh(1.034213814355445e+308);
test_math_acosh("4T8");
test_math_acosh(1.0051760048812933e+308);
test_math_acosh("91NC6NN");
test_math_acosh("30HRJ6");
test_math_acosh(1.274624985549115e+308);
test_math_acosh(-755);
test_math_acosh("V8OWH");
test_math_acosh(-275);
test_math_acosh("DJ5OL");
test_math_acosh(4.960074330571258e+307);
test_math_acosh(1.1470695841920516e+308);
test_math_acosh("D807J7");
test_math_acosh(-549);
test_math_acosh(-171);
test_math_acosh(-151);
test_math_acosh("JT3");
test_math_acosh(-119);
test_math_acosh(1.2251419722223857e+308);
test_math_acosh(1.5433064638748259e+308);
test_math_acosh(5.410527965057318e+307);
test_math_acosh(8.349284839002082e+307);
test_math_acosh("H3K3AKB342");
test_math_acosh("XU5F8C23");
test_math_acosh(-879);
test_math_acosh(1.4255385501579886e+308);
test_math_acosh(1.7510339715925055e+308);
test_math_acosh("E1E");
test_math_acosh("VJ5PBWX0L");
test_math_acosh(7.496008806048734e+307);
test_math_acosh(-471);
test_math_acosh(-339);
test_math_acosh(2.2164954075535207e+306);
test_math_acosh(1.4438029771675676e+308);
test_math_acosh(-19);
test_math_acosh("JAV3NC");
test_math_acosh("KAMPVL");
test_math_acosh("KITIMU4");
test_math_acosh(1.7921475600075957e+308);
test_math_acosh("9Q2T6PW3MS");
test_math_acosh("FZA");
test_math_acosh(-307);
test_math_acosh(-923);
test_math_acosh("O17JWCZX");
test_math_acosh(-185);
test_math_acosh(-805);
test_math_acosh(-355);
test_math_acosh(-427);
test_math_acosh(-459);
test_math_acosh("6D5B5J");
test_math_acosh(6.7116263457617e+307);
test_math_acosh(3.5241373700128874e+307);
test_math_acosh(-315);
test_math_acosh(-455);
test_math_acosh("J0MRXEJ1");
test_math_acosh(-617);
test_math_acosh("Q96OMIVYB");
test_math_acosh(5.983415760998978e+307);
test_math_acosh("65M");
test_math_acosh(-509);
test_math_acosh("WYSQTD7GR");
test_math_acosh(7.930824538840801e+307);
test_math_acosh("AASOFRX3VW");
test_math_acosh(2.0356075685789862e+306);
test_math_acosh("R1IIRNUW");
test_math_acosh(1.3031335705281331e+308);
test_math_acosh("U9AF2");
test_math_acosh("QTAUGV");
test_math_acosh(4.187534632597765e+306);
test_math_acosh(1.3810099147018242e+308);
test_math_acosh(-731);
test_math_acosh(-199);
test_math_acosh("R3DY");
test_math_acosh(-137);
test_math_acosh(-937);
test_math_acosh(1.7801139541211238e+308);
test_math_acosh(-857);
test_math_acosh(6.379227423526306e+307);
test_math_acosh(-419);
test_math_acosh("X77A7M");
test_math_acosh(-267);
test_math_acosh("VSY5MYTS");
test_math_acosh("3P6GIO4H");
test_math_acosh("RDGTKESWAK");
test_math_acosh(1.150816066712772e+308);
test_math_acosh(1.6297636126044224e+308);
test_math_acosh(6.554743633045653e+307);
test_math_acosh(1.6458111236419458e+308);
test_math_acosh(1.1932584138843245e+308);
test_math_acosh(1.0797605662994089e+308);
test_math_acosh("TV5HGSE6J");
test_math_acosh("53FR18HCRU");
test_math_acosh("FH1OJM3");
test_math_acosh(-695);
test_math_acosh(1.5657841928958722e+308);
test_math_acosh("A2DU0L");
test_math_acosh("N4D7H7IAM");
test_math_acosh("2RL6S");
test_math_acosh("S0GUCARR0");
test_math_acosh(-87);
test_math_acosh("TIMO48");
test_math_acosh(-863);
test_math_acosh("CF1UEOJ");
test_math_acosh(-683);
test_math_acosh("ME9G8OB");
test_math_acosh("0AGF3HLFB");
test_math_acosh(-247);
test_math_acosh(1.64098341270884e+308);
test_math_acosh(-719);
test_math_acosh(1.398624551607e+308);
test_math_acosh("QTC");
test_math_acosh(8.797713146497181e+307);
test_math_acosh(-741);
test_math_acosh("NFM4P");
test_math_acosh(-265);
test_math_acosh("NMN75ANC");
test_math_acosh(1.5546039461852072e+308);
test_math_acosh(-839);
test_math_acosh(-669);
test_math_acosh(-225);
test_math_acosh(1.3003114884221955e+308);
test_math_acosh(-445);
test_math_acosh(-995);
test_math_acosh(-257);
test_math_acosh("DEU");
test_math_acosh(-815);
test_math_acosh(-353);
test_math_acosh("LG3T9TIT");
test_math_acosh(-113);
test_math_acosh(9.934986514170602e+306);
test_math_acosh("DOMH");
test_math_acosh("EZDB8M5");
test_math_acosh(-925);
test_math_acosh(9.337656392152615e+307);
test_math_acosh("M74M");
test_math_acosh(-523);
test_math_acosh(7.370338730379484e+307);
test_math_acosh("OIUG");
test_math_acosh("Y6T");
test_math_acosh(1.6609843181133403e+308);
test_math_acosh("QNWCH");
test_math_acosh(-295);
test_math_acosh("C13WORPL");
test_math_acosh(-189);
test_math_acosh(4.752252867384896e+307);
test_math_acosh(-847);
test_math_acosh(-289);
test_math_acosh("Y645FBYOGB");
test_math_acosh(7.477452798794808e+307);
test_math_acosh("TIFN");
test_math_acosh("8856TK88S");
test_math_acosh(-321);
test_math_acosh("7PX82MF");
test_math_acosh("1F6F");
test_math_acosh(1.5066432800223494e+308);
test_math_acosh(3.164631965410644e+307);
test_math_acosh("SK3N");
test_math_acosh(-341);
test_math_acosh(-507);
test_math_acosh(-929);
test_math_acosh(-831);
test_math_acosh("OK2DOB3K");
test_math_acosh(1.2807941880987522e+308);
test_math_acosh("60D1GTPR");
test_math_acosh("TC97R6");
test_math_acosh("Z9CPDY1");
test_math_acosh(-607);
test_math_acosh(1.450644282864274e+308);
test_math_acosh(7.23335038861884e+307);
test_math_acosh("MQW");
test_math_acosh(5.101593705494931e+307);
test_math_acosh(6.270966319927277e+307);
test_math_acosh(-779);
test_math_acosh(4.011874831426498e+307);
test_math_acosh(-357);
test_math_acosh(-759);
test_math_acosh(-37);
test_math_acosh("6481X");
test_math_acosh(6.665477291454949e+307);
test_math_acosh(9.49739005982185e+306);
test_math_acosh(7.848852047186676e+307);
test_math_acosh(1.0452088923506163e+308);
test_math_acosh(1.0249609455349556e+308);
test_math_acosh("G71GOSV");
test_math_acosh(8.464897090763241e+307);
test_math_acosh(-303);
test_math_acosh(-837);
test_math_acosh("MF49D8NQUO");
test_math_acosh(3.8778384145691014e+307);
test_math_acosh(7.202650146013768e+307);
test_math_acosh(2.4627388063924177e+307);
test_math_acosh(-491);
test_math_acosh(-135);
test_math_acosh("B78CEW");
test_math_acosh(-575);
test_math_acosh("BZ1HECXI");
test_math_acosh(-61);
test_math_acosh(9.602672954345794e+307);
test_math_acosh(1.6601032097214666e+307);
test_math_acosh("BPU");
test_math_acosh(9.973136903705855e+307);
test_math_acosh("K12K");
test_math_acosh("23IFMEV");
test_math_acosh(1.3400114026128755e+308);
test_math_acosh(-299);
test_math_acosh("A1TZB");
test_math_acosh("NDGA5");
test_math_acosh(9.832574519785782e+307);
test_math_acosh("RMG6JX5O");
test_math_acosh(-149);
test_math_acosh("P2G");
test_math_acosh("RAIA6");
test_math_acosh("1R1W");
test_math_acosh("CRZK2IC");
test_math_acosh(-343);
test_math_acosh(1.4085401215611838e+308);
test_math_acosh("69PZML");
test_math_acosh(-291);
test_math_acosh("AD85PVOYIJ");
test_math_acosh("UIOYX65J");
test_math_acosh("2U4LW");
test_math_acosh(1.3515818111592434e+308);
test_math_acosh(1.3691480105966477e+308);
test_math_acosh("J4L2QPH0");
test_math_acosh(-793);
test_math_acosh(-969);
test_math_acosh("D9Z");
test_math_acosh("9WV");
test_math_acosh(1.2119545432199208e+308);
test_math_acosh("Z9KHRDSNSO");
test_math_acosh(2.859910792196768e+307);
test_math_acosh(5.421351678490454e+307);
test_math_acosh(-689);
test_math_acosh(1.442493032883786e+308);
test_math_acosh(-765);
test_math_acosh(5.603096081869065e+307);
test_math_acosh(-775);
test_math_acosh("V2H5U");
test_math_acosh("4SE4X");
test_math_acosh(-63);
test_math_acosh(1.7402232152110617e+308);
test_math_acosh(-691);
test_math_acosh(1.5606094692876338e+308);
test_math_acosh(8.261807249379825e+307);
test_math_acosh(1.229723086098096e+308);
test_math_acosh("PWH5");
test_math_acosh(1.6765364283904169e+308);
test_math_acosh(-629);
test_math_acosh(3.9120661974023923e+307);
test_math_acosh(5.279346763638953e+307);
test_math_acosh("HPS0NYSW");
test_math_acosh("9QK");
test_math_acosh(1.063480480625335e+307);
test_math_acosh(-95);
test_math_acosh(9.56509081821376e+307);
test_math_acosh(-555);
test_math_acosh(1.7912637269088021e+308);
test_math_acosh(3.650488021912163e+307);
test_math_acosh("5JGZ");
test_math_acosh("GO99");
test_math_acosh(-761);
test_math_acosh(5.525028566438546e+307);
test_math_acosh(1.4439768194380949e+308);
test_math_acosh(1.4172767202626328e+308);
test_math_acosh(5.683571856292067e+307);
test_math_acosh("65MSXFB9B");
test_math_acosh(3.3080684919007325e+307);
test_math_acosh(1.4394571741298086e+308);
test_math_acosh("A54W5EBUHD");
test_math_acosh("SYU9");
test_math_acosh(-809);
test_math_acosh(-125);
test_math_acosh("W8QZUQ673");
test_math_acosh(-169);
test_math_acosh(-203);
test_math_acosh("GYN49E2IK");
test_math_acosh("C5UQPP34N");
test_math_acosh("KONRUUX50");
test_math_acosh("6T6HU6JAF");
test_math_acosh(-83);
test_math_acosh("GWFGRA75IM");
test_math_acosh("DKBCK3QM");
test_math_acosh(1.9524205856970803e+307);
test_math_acosh(2.8237649469146664e+307);
test_math_acosh(6.894578628794375e+307);
test_math_acosh("ENPS");
test_math_acosh("G390JP1KNP");
test_math_acosh("VTY");
test_math_acosh(5.209128066503031e+307);
test_math_acosh("46B11SY0RO");
test_math_acosh("4N5SJ00");
test_math_acosh(1.568444407025185e+308);
test_math_acosh(1.4985778377168876e+308);
test_math_acosh(1.227985417703035e+308);
test_math_acosh("3QPX3MK");
test_math_acosh(-577);
test_math_acosh(1.426443989168219e+308);
test_math_acosh(8.433260290005473e+307);
test_math_acosh("H6VDHC4CQ");
test_math_acosh("RKD7S");
test_math_acosh(6.512691066843774e+307);
test_math_acosh("WX85");
test_math_acosh(9.043225712412191e+307);
test_math_acosh(1.5754101930438055e+308);
test_math_acosh("2FPT17GO");
test_math_acosh(1.264341734547573e+308);
test_math_acosh("ZB20R7R7");
test_math_acosh("EQNG4M");
test_math_acosh(-481);
test_math_acosh("06IC0C335");
test_math_acosh(1.4044889592745906e+308);
test_math_acosh("LIFQ6O");
test_math_acosh(1.5405024699949031e+308);
test_math_acosh(1.3413492635282218e+306);
test_math_acosh("RD0I8X8");
test_math_acosh(8.207569681031744e+306);
test_math_acosh("NZYU7LWJ");
test_math_acosh("E1F40");
test_math_acosh(1.1361383933658678e+308);
test_math_acosh(7.334719231510523e+306);
test_math_acosh(-627);
test_math_acosh(7.512904682527659e+307);
test_math_acosh("YE4K");
test_math_acosh(-107);
test_math_acosh(1.5837239618209498e+308);
test_math_acosh("X6DW5");
test_math_acosh(-895);
test_math_acosh(3.767484892256458e+307);
test_math_acosh("9TZ93H0KE");
test_math_acosh(1.466625215534777e+308);
test_math_acosh(1.7726890766693902e+308);
test_math_acosh(-223);
test_math_acosh("V0OZE8");
test_math_acosh(1.4207851580431389e+308);
test_math_acosh(1.4235052309304077e+308);
test_math_acosh(4.903003635184907e+307);
test_math_acosh(3.7470614198308177e+307);
test_math_acosh(1.0317556569370996e+308);
test_math_acosh("HJ9FVLHM");
test_math_acosh(1.1938509891379668e+308);
test_math_acosh(2.801404614638516e+307);
test_math_acosh(-159);
test_math_acosh(-679);
test_math_acosh("75N5SSZ");
test_math_acosh(1.0863410733418353e+308);
test_math_acosh("U72Y7");
test_math_acosh("56QKVH");
test_math_acosh(6.844698730371132e+307);
test_math_acosh(6.487398026981733e+307);
test_math_acosh(1.0411133343297588e+308);
test_math_acosh(-51);
test_math_acosh(-985);
test_math_acosh("RCVY3F4PZB");
test_math_acosh(-259);
test_math_acosh("9WCC");
test_math_acosh(1.4380411146380509e+308);
test_math_acosh("5HSGFZA5G");
test_math_acosh(1.3027125920731186e+308);
test_math_acosh(1.0092066752934845e+308);
test_math_acosh(5.974066785131027e+307);
test_math_acosh("1F77O");
test_math_acosh("XLUTR1SJ");
test_math_acosh(4.2544874177285587e+307);
test_math_acosh("RV8");
test_math_acosh(-281);
test_math_acosh(-701);
test_math_acosh(-623);
test_math_acosh(-333);
test_math_acosh(-317);
test_math_acosh(1.6023478716467411e+308);
test_math_acosh(4.1790188790567443e+307);
test_math_acosh("AEM");
test_math_acosh(1.1876906932156843e+308);
test_math_acosh("V9QGNZRLG7");
test_math_acosh(6.953493544512184e+307);
test_math_acosh("0MV");
test_math_acosh(2.1802760175500787e+307);
test_math_acosh(6.995227653658578e+307);
test_math_acosh(8.524120324136063e+307);
test_math_acosh(1.3438113591751814e+308);
test_math_acosh("R6DR");
test_math_acosh(5.050571380711046e+307);
test_math_acosh(1.6794198540153475e+307);
test_math_acosh(1.0457553570894117e+308);
test_math_acosh(-43);
test_math_acosh("VBGK");
test_math_acosh(7.133009643743181e+307);
test_math_acosh(-191);
test_math_acosh("9ZUMKH");
test_math_acosh(-73);
test_math_acosh(-797);
test_math_acosh("DTZNY9WKX");
test_math_acosh(1.170310467728105e+308);
test_math_acosh(-927);
test_math_acosh("UWD");
test_math_acosh("M8KO1K15");
test_math_acosh(6.526689488652081e+307);
test_math_acosh(1.2131554447167763e+308);
test_math_acosh(-505);
test_math_acosh(-999);
test_math_acosh("BNU50BWGZQ");
test_math_acosh("R0FO");
test_math_acosh("T8UT7WT");
test_math_acosh("TLB6OBDJ5");
test_math_acosh(1.7182530886556735e+308);
test_math_acosh(1.1946491477965593e+308);
test_math_acosh("XRP");
test_math_acosh(-425);
test_math_acosh(-81);
test_math_acosh("1T9GMKT5");
test_math_acosh(-211);
test_math_acosh(8.531130534297441e+307);
test_math_acosh("7EQDFWO6");
test_math_acosh("36ZL");
test_math_acosh("6RLYJ9VS7Y");
test_math_acosh(-463);
test_math_acosh("BJLFJM9");
test_math_acosh(-769);
test_math_acosh("9PO1K");
test_math_acosh("8Z7831O");
test_math_acosh("VAQ3SBRABA");
test_math_acosh("3A1VFLCM");
test_math_acosh("ABRS8FV");
test_math_acosh(-915);
test_math_acosh(-907);
test_math_acosh(-497);
test_math_acosh(-539);
test_math_acosh(-9);
test_math_acosh(-961);
test_math_acosh(8.584303323857218e+307);
test_math_acosh(-375);
test_math_acosh("S21LLOIIAR");
test_math_acosh(-467);
test_math_acosh("IRXDV0MJ");
test_math_acosh(-827);
test_math_acosh("ZM2JJTR");
test_math_acosh(-919);
test_math_acosh(5.300108722945845e+307);
test_math_acosh("NXXIGAR");
test_math_acosh(-525);
test_math_acosh(1.2735505181499204e+307);
test_math_acosh("QX6WI9");
test_math_acosh(-365);
test_math_acosh("5MZU");
test_math_acosh("Y6AY");
test_math_acosh("IWGRO");
test_math_acosh(2.7792439874134833e+307);
test_math_acosh(7.50421789514941e+307);
test_math_acosh(2.0074178745064768e+307);
test_math_acosh("E5WQ6");
test_math_acosh("06KHS3I");
test_math_acosh("RTO4");
test_math_acosh(1.5004375521806672e+308);
test_math_acosh(-885);
test_math_acosh(7.446451277721867e+307);
test_math_acosh("9IYQO7N");
test_math_acosh(1.7061029500251014e+308);
test_math_acosh(1.3355242774123754e+308);
test_math_acosh("KQ0Y7B1");
test_math_acosh("MT6WDV");
test_math_acosh(7.580417758068659e+306);
test_math_acosh("W5UU1AIQJ");
test_math_acosh(4.535979179935523e+307);
test_math_acosh(1.794528168949262e+308);
test_math_acosh(5.170037756297889e+307);
test_math_acosh(1.3364391410141288e+308);
test_math_acosh(1.495377773095156e+308);
test_math_acosh(1.7497659883841494e+308);
test_math_acosh(1.3406820300857463e+308);
test_math_acosh("9WPPEVBFNT");
test_math_acosh(-541);
test_math_acosh(8.909839139076837e+307);
test_math_acosh(1.0914773239368583e+308);
test_math_acosh(1.7231936521375848e+308);
test_math_acosh("0HCSNT");
test_math_acosh("EFYGJFP96B");
test_math_acosh(1.5845036992137835e+308);
test_math_acosh("W6B3");
test_math_acosh(9.988669418836612e+307);
test_math_acosh("EAKB8S");
test_math_acosh(-361);
test_math_acosh(-905);
test_math_acosh("C0Y6");
test_math_acosh(7.573426187236182e+307);
test_math_acosh(1.0278154325669762e+308);
test_math_acosh(9.739527114743896e+307);
test_math_acosh(-413);
test_math_acosh(-133);
test_math_acosh(-573);
test_math_acosh("EL5MHVOP2");
test_math_acosh("89XOLFW320");
test_math_acosh(5.696528308789338e+307);
test_math_acosh(3.65156364254869e+305);
test_math_acosh(1.320867495029123e+308);
test_math_acosh(5.484055069588959e+307);
test_math_acosh(4.582209126615757e+307);
test_math_acosh(-705);
test_math_acosh(4.4804507880517687e+307);
test_math_acosh("UESJOALFNA");
test_math_acosh("PWWFVQY");
test_math_acosh(3.5927282515664893e+307);
test_math_acosh("NFJR0");
test_math_acosh(7.897563158613914e+307);
test_math_acosh(-115);
test_math_acosh(8.435719008628372e+307);
test_math_acosh(2.1521942268183778e+307);
test_math_acosh("I41OQB1");
test_math_acosh("U7WCSDPE");
test_math_acosh(-373);
test_math_acosh(-553);
test_math_acosh(-439);
test_math_acosh(1.4462267183634753e+308);
test_math_acosh("US5TY6W");
test_math_acosh("WRK59HX");
test_math_acosh(-551);
test_math_acosh(-663);
test_math_acosh("GJH9");
test_math_acosh("GU92");
test_math_acosh(2.731393791231916e+306);
test_math_acosh("HFP1AMI");
test_math_acosh(8.332924869263073e+306);
test_math_acosh(8.108754083296286e+307);
test_math_acosh(-437);
test_math_acosh("N8KBTWH");
test_math_acosh(1.2806916144311885e+308);
test_math_acosh(8.062300595120404e+307);
test_math_acosh("51S");
test_math_acosh(2.358186371780045e+307);
test_math_acosh(-127);
test_math_acosh("MNO8SE");
test_math_acosh(1.4235859232679185e+307);
test_math_acosh("FEZCKG5NH");
test_math_acosh(-109);
test_math_acosh(1.2925570044089427e+308);
test_math_acosh("9GYZWRD");
test_math_acosh("UOXAI8");
test_math_acosh("L3LBP9");
test_math_acosh(1.221145261826015e+308);
test_math_acosh("ZQVCBG0");
test_math_acosh("Z9G6A7");
test_math_acosh(3.2003316894989057e+307);
test_math_acosh(1.7069245474504402e+308);
test_math_acosh(-783);
test_math_acosh(6.790465405650388e+307);
test_math_acosh(1.4945346613680605e+308);
test_math_acosh(-659);
test_math_acosh("C789GY");
test_math_acosh(6.757865736732495e+307);
test_math_acosh("TW6W75Z");
test_math_acosh(-819);
test_math_acosh("N4FXEVR24");
test_math_acosh("ZH7");
test_math_acosh(5.601840715133985e+307);
test_math_acosh(4.878199142355395e+307);
test_math_acosh(-121);
test_math_acosh(1.2780091239858886e+308);
test_math_acosh(4.0267408787952225e+307);
test_math_acosh("MS7");
test_math_acosh(-801);
test_math_acosh("MJZ2LK3Z");
test_math_acosh(6.440053228231393e+307);
test_math_acosh("4JP13W");
test_math_acosh(1.6219237499208845e+308);
test_math_acosh(1.3782017168790084e+308);
test_math_acosh(1.6664529262972928e+308);
test_math_acosh("STAM");
test_math_acosh(3.1123540245653996e+307);
test_math_acosh(-781);
test_math_acosh("VYG");
test_math_acosh(1.496415464565564e+307);
test_math_acosh(-687);
test_math_acosh(1.0694302482827348e+308);
test_math_acosh(-277);
test_math_acosh(1.7626763019521316e+308);
test_math_acosh(1.3859221905395932e+307);
test_math_acosh(-345);
test_math_acosh(3.551774960608526e+307);
test_math_acosh(1.2146865029723928e+308);
test_math_acosh(-377);
test_math_acosh("NCZ");
test_math_acosh(378);
test_math_acosh(-117);
test_math_acosh(-331);
test_math_acosh("RWR0");
test_math_acosh("OYCETLCZ7");
test_math_acosh("APBS4");
test_math_acosh(1.0326104679933567e+308);
test_math_acosh("2LGLLZ215V");
test_math_acosh(-889);
test_math_acosh("HARYK");
test_math_acosh(370);
test_math_acosh(1.6775950970565288e+308);
test_math_acosh(-973);
test_math_acosh(-873);
test_math_acosh("QL5XZKH");
test_math_acosh("ZEB6S9U");
test_math_acosh("IX1QFRT");
test_math_acosh(1.3468332282198595e+308);
test_math_acosh("44LHSZX5S");
test_math_acosh(-791);
test_math_acosh("R72L0MM");
test_math_acosh(2.6351708080724886e+307);
test_math_acosh(9.047817620144713e+307);
test_math_acosh("SPF4DS");
test_math_acosh(-369);
test_math_acosh(1.3085366048368425e+308);
test_math_acosh(2.7791514031645237e+307);
test_math_acosh("WRTS5R94QQ");
test_math_acosh(9.33156903511658e+307);
test_math_acosh("Q2GS2M");
test_math_acosh(1.1132357924528608e+308);
test_math_acosh("JJM");
test_math_acosh("ESN3SK");
test_math_acosh(9.5632842003502e+307);
test_math_acosh(7.520180048478898e+307);
test_math_acosh(-633);
test_math_acosh(-29);
test_math_acosh("3ZH");
test_math_acosh("LZE989VT7");
test_math_acosh(1.1313144946568949e+308);
test_math_acosh(3.2410168914262603e+307);
test_math_acosh(-25);
test_math_acosh(-861);
test_math_acosh(-583);
test_math_acosh(7.661036839751455e+307);
test_math_acosh("A6IHS");
test_math_acosh(1.4350683093270215e+308);
test_math_acosh(8.596793908081747e+307);
test_math_acosh(-557);
test_math_acosh(9.25263408666158e+307);
test_math_acosh(1.082097997787986e+308);
test_math_acosh("ICLLR1");
test_math_acosh("I6T");
test_math_acosh(-249);
test_math_acosh(3.0372447644243014e+307);
test_math_acosh(7.63390662568435e+307);
test_math_acosh(4.0212923725672273e+307);
test_math_acosh(1.0176790601108632e+308);
test_math_acosh(4.387691357634558e+307);
test_math_acosh("FDMF76NDKK");
test_math_acosh("C6PPRKFKWQ");
test_math_acosh(1.5569426330369548e+308);
test_math_acosh(-531);
test_math_acosh("7OABHHPY");
test_math_acosh("5LH1");
test_math_acosh("7KCB");
test_math_acosh("52QC4LKOEP");
test_math_acosh(7.333520070490351e+307);
test_math_acosh(2.331517028244309e+307);
test_math_acosh(-981);
test_math_acosh("2B0V");
test_math_acosh(-803);
test_math_acosh(-569);
test_math_acosh("HXI5A");
test_math_acosh("4R5RH44");
test_math_acosh("DALQJSMW");
test_math_acosh(1.7815799591529402e+308);
test_math_acosh(1.0565993286779096e+307);
test_math_acosh("Q1LJ");
test_math_acosh("GCN3KWL6LR");
test_math_acosh("DU5");
test_math_acosh("WWRAW2XX7");
test_math_acosh("K5GG1");
test_math_acosh(2.4296901825367356e+307);
test_math_acosh(-57);
test_math_acosh(1.3015646641351891e+307);
test_math_acosh(-395);
test_math_acosh(4.23548950262716e+307);
test_math_acosh(-351);
test_math_acosh("G5JF9WJJBQ");
test_math_acosh("EZWU");
test_math_acosh(2.1301751317935994e+307);
test_math_acosh("RXC3");
test_math_acosh("HKAQS9P3T");
test_math_acosh("LTUR6O5");
test_math_acosh("2WHYAI");
test_math_acosh(7.866669068597473e+307);
test_math_acosh(-239);
test_math_acosh("FAT4P");
test_math_acosh(786);
test_math_acosh("24XSD7");
test_math_acosh("3JTHI");
test_math_acosh(1.5465158786616271e+308);
test_math_acosh(1.767706333748302e+308);
test_math_acosh(-207);
test_math_acosh(9.75862268950218e+307);
test_math_acosh("W9R2M0W");
test_math_acosh(1.1547805916272447e+308);
test_math_acosh("QS7S2");
test_math_acosh(1.6051874625186851e+308);
test_math_acosh("AD8HTN9O2");
test_math_acosh("S187FYW");
test_math_acosh("CMZX55P");
test_math_acosh(1.3070976755710937e+308);
test_math_acosh(9.245977234965647e+306);
test_math_acosh(-495);
test_math_acosh(2.895079218785383e+306);
test_math_acosh(9.695124202585473e+307);
test_math_acosh("0TJFTEH6");
test_math_acosh("WT0");
test_math_acosh("AMCJG2M74Q");
test_math_acosh(-187);
test_math_acosh("J4VMVL2");
test_math_acosh("K77X3FAY");
test_math_acosh(7.604112110757525e+307);
test_math_acosh("BWEQZ");
test_math_acosh(-271);
test_math_acosh(1.6360553238400151e+308);
test_math_acosh(-639);
test_math_acosh(1.1273802539970246e+308);
test_math_acosh("T53");
test_math_acosh("0U87");
test_math_acosh("22KJ8C8K");
test_math_acosh(7.614277855175738e+306);
test_math_acosh(7.451280978539122e+307);
test_math_acosh("7DR");
test_math_acosh(-411);
test_math_acosh("MM9SQR");
test_math_acosh(1.6196575596285015e+308);
test_math_acosh(1.3353334837977163e+308);
test_math_acosh(6.344967939200885e+307);
test_math_acosh("FKF1X8YKA8");
test_math_acosh("K9BU");
test_math_acosh(-457);
test_math_acosh("DP5B");
test_math_acosh(-869);
test_math_acosh("CSCFLN");
test_math_acosh("GC28QS8");
test_math_acosh(-725);
test_math_acosh(-511);
test_math_acosh(1.6264453074114749e+308);
test_math_acosh("K3GPVUFTN8");
test_math_acosh(1.1764680947691583e+308);
test_math_acosh("D19XNASDWR");
test_math_acosh(1.337903051562161e+308);
test_math_acosh(2.213748550559415e+307);
test_math_acosh(-55);
test_math_acosh("PY2");
test_math_acosh("Q3FS6B7MDA");
test_math_acosh(1.5849041228812293e+308);
test_math_acosh("UM92Z");
test_math_acosh(9.552859877140438e+307);
test_math_acosh(5.003005908096852e+307);
test_math_acosh("CW7");
test_math_acosh(5.018696682478024e+307);
test_math_acosh(2.4676605574701086e+307);
test_math_acosh("B9PWC");
test_math_acosh(1.6492109330749536e+308);
test_math_acosh(1.7736607462635335e+308);
test_math_acosh("XVUX8I9X1");
test_math_acosh("4K3");
test_math_acosh("SCPN3");
test_math_acosh(2.370751150078012e+307);
test_math_acosh("X58IVZVN4B");
test_math_acosh(2.7773171186975004e+307);
test_math_acosh(5.217429387891512e+307);
test_math_acosh(-967);
test_math_acosh("3R3XB0D4");
test_math_acosh(-711);
test_math_acosh(9.086671419515352e+307);
test_math_acosh("WR9QWPM");
test_math_acosh(2.64664053799463e+307);
test_math_acosh("XGMO");
test_math_acosh("RBQIQCMP");
test_math_acosh(1.3612142268005776e+307);
test_math_acosh(-513);
test_math_acosh("6XVPPF8");
test_math_acosh("ZDBFC4");
test_math_acosh(1.2688118150033829e+308);
test_math_acosh("VXSIEMPB");
test_math_acosh("923V");
test_math_acosh("4BF8BMR9QO");
test_math_acosh("SKN");
test_math_acosh("03ZIF2LF");
test_math_acosh(8.16208436508117e+307);
test_math_acosh(-501);
test_math_acosh(9.4817064628395e+307);
test_math_acosh("GK4");
test_math_acosh(1.2675881906510203e+308);
test_math_acosh(1.6075101818546996e+308);
test_math_acosh("2IU3P9HT");
test_math_acosh(5.82897980785627e+307);
test_math_acosh(-649);
test_math_acosh("UJE24");
test_math_acosh(8.936944299460429e+307);
test_math_acosh(1.1407161054864336e+308);
test_math_acosh("4WURI");
test_math_acosh("LO24NS2R99");
test_math_acosh(-205);
test_math_acosh("W2N5O");
test_math_acosh(3.2814574200056383e+307);
test_math_acosh("E0VP");
test_math_acosh(1.0864689385551604e+308);
test_math_acosh(-811);
test_math_acosh(9.123585202236128e+307);
test_math_acosh(-787);
test_math_acosh("65LCGK");
test_math_acosh(3.3480556750637584e+307);
test_math_acosh("8K3VDDA3HR");
test_math_acosh("AOWN");
test_math_acosh(-89);
test_math_acosh("MIV9N");
test_math_acosh("8NOILI");
test_math_acosh(2.574447130215134e+307);
test_math_acosh("DIAVJBN");
test_math_acosh(1.5192413225737737e+308);
test_math_acosh(-253);
test_math_acosh(1.33088554322902e+308);
test_math_acosh(1.3366969238743586e+308);
test_math_acosh(6.335882012866659e+307);
test_math_acosh("8EKG");
test_math_acosh(-681);
test_math_acosh(5.034581462616624e+307);
test_math_acosh(1.1361335200630714e+308);
test_math_acosh(1.2667171298065103e+308);
test_math_acosh("8OPSX");
test_math_acosh(9.082274684008359e+307);
test_math_acosh("VTWCXL");
test_math_acosh(7.434708194467391e+307);
test_math_acosh("MBOGPSR5");
test_math_acosh(8.417645008830757e+307);
test_math_acosh("5JQ15");
test_math_acosh(-699);
test_math_acosh(1.5296406892852072e+308);
test_math_acosh("W3X2");
test_math_acosh(7.970801590858663e+307);
test_math_acosh("5C80Q6B7");
test_math_acosh("20TM5KP");
test_math_acosh("ELTJF12M");
test_math_acosh("2SR0R0S5");
test_math_acosh(1.0690092026966246e+308);
test_math_acosh("QZSF21PX");
test_math_acosh(-853);
test_math_acosh("4AS");
test_math_acosh(-807);
test_math_acosh(-461);
test_math_acosh(4.499494993448256e+307);
test_math_acosh(-621);
test_math_acosh("EJFLU4975");
test_math_acosh(1.2527853287137525e+308);
test_math_acosh(-875);
test_math_acosh(1.7401204650116847e+308);
test_math_acosh("OJR");
test_math_acosh(1.3289176973873574e+308);
test_math_acosh(-465);
test_math_acosh(-945);
test_math_acosh(1.2295250716652113e+308);
test_math_acosh(-941);
test_math_acosh(8.288089600041152e+307);
test_math_acosh(1.2417550504121068e+307);
test_math_acosh(-71);
test_math_acosh(4.532922241635175e+307);
test_math_acosh(-47);
test_math_acosh(1.9219759031136257e+304);
test_math_acosh("X0K1C0DU9U");
test_math_acosh(1.5733638400269467e+308);
test_math_acosh(1.7565802724073402e+308);
test_math_acosh(-631);
test_math_acosh(1.4725207739506716e+308);
test_math_acosh("N8YWTJ");
test_math_acosh(5.58941617897529e+307);
test_math_acosh(5.873200879321491e+307);
test_math_acosh("J2FKQRP");
test_math_acosh("ZM36");
test_math_acosh(4.1022442387690336e+307);
test_math_acosh("I9VRW7PB");
test_math_acosh("HTMCJKY9EN");
test_math_acosh(5.894092606726523e+307);
test_math_acosh(6.084344788909261e+307);
test_math_acosh(-963);
test_math_acosh("F4EMBU");
test_math_acosh(1.3394710692534843e+308);
test_math_acosh(1.6442082593408604e+308);
test_math_acosh(4.4057502194225315e+307);
test_math_acosh(3.471782841656919e+307);
test_math_acosh(1.5375495143805202e+308);
test_math_acosh(4.462711630602361e+307);
test_math_acosh(8.5831982363956e+307);
test_math_acosh(-349);
test_math_acosh(2.414169887357863e+307);
test_math_acosh(-347);
test_math_acosh(4.020158864041715e+307);
test_math_acosh(2.387129433700526e+307);
test_math_acosh(-319);
test_math_acosh(6.335310656912652e+304);
test_math_acosh("X5MS2J2");
test_math_acosh(-367);
test_math_acosh(1.72403605259593e+308);
test_math_acosh(1.6074101082178465e+308);
test_math_acosh(4.981802081062759e+307);
test_math_acosh("H30DC23U");
test_math_acosh(1.7838563579931138e+308);
test_math_acosh("4RZZ12Y8");
test_math_acosh("ZXMRLRYPQS");
test_math_acosh("PVEUR0UW33");
test_math_acosh("ON9ZQ");
test_math_acosh(1.2255867350984127e+308);
test_math_acosh(1.3419286701163465e+308);
test_math_acosh(4.810927951944538e+307);
test_math_acosh(-325);
test_math_acosh(-59);
test_math_acosh("Q54J");
test_math_acosh(1.7442013962840673e+304);
test_math_acosh(-591);
test_math_acosh("MXUILPPUD");
test_math_acosh("Q54TBX5O");
test_math_acosh("UWSI");
test_math_acosh(1.0754486911791623e+308);
test_math_acosh("UTB9D5G766");
test_math_acosh("LOFU4");
test_math_acosh(7.270139837280655e+307);
test_math_acosh("6106");
test_math_acosh("HYMT2D0XAG");
test_math_acosh("BOB3LL8WAD");
test_math_acosh(8.13747181017261e+307);
test_math_acosh(1.1719562150101243e+308);
test_math_acosh("QJ4UT");
test_math_acosh("DZZV0Q5");
test_math_acosh("YJ7NE8QLF0");
test_math_acosh(1.503091018707163e+308);
test_math_acosh("DKBXE");
test_math_acosh(1.4305216436046406e+308);
test_math_acosh(7.746019362649968e+307);
test_math_acosh(-899);
test_math_acosh(1.5471447400242468e+308);
