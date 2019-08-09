/*
* This file is automatically generated by Swami
*
* 2019-08-08 15:51:07.970208
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
function test_math_log(x){
	if (Object.is( x,NaN )){
		var output = Math.log(x);
		new TestCase("math_log", "math_log", NaN, output);
		test();
		return;
		}
	if (( x < 0 )){
		var output = Math.log(x);
		new TestCase("math_log", "math_log", NaN, output);
		test();
		return;
		}
	if ((Object.is( x,+ 0) &&  x === - 0 )){
		var output = Math.log(x);
		new TestCase("math_log", "math_log", - Infinity, output);
		test();
		return;
		}
	if (( x === 1 )){
		var output = Math.log(x);
		new TestCase("math_log", "math_log", + 0, output);
		test();
		return;
		}
	if (( x === + Infinity )){
		var output = Math.log(x);
		new TestCase("math_log", "math_log", + Infinity, output);
		test();
		return;
		}
}



/*TESTS GENERATED AUTOMATICALLY*/
test_math_log(6.021425399874694e+307);
test_math_log(true);
test_math_log("HM76");
test_math_log(false);
test_math_log(-657);
test_math_log(/yes.*day/);
test_math_log(/[^.]+/);
test_math_log("HZZ1PR2C");
test_math_log(1.1152080595071635e+308);
test_math_log(/(\w+)\s(\w+)/);
test_math_log(null);
test_math_log(5.753596795221122e+306);
test_math_log(1.8649881000757967e+307);
test_math_log(1.0788567353811982e+308);
test_math_log(-0);
test_math_log(/\r\n|\r|\n/);
test_math_log(Infinity);
test_math_log(-557);
test_math_log(1.330269633171764e+308);
test_math_log(-857);
test_math_log("BKNNCHEIVC");
test_math_log(-497);
test_math_log(9.531523693845509e+307);
test_math_log(1.4426703111137627e+308);
test_math_log(/yes[^]*day/);
test_math_log(+0);
test_math_log(-551);
test_math_log("ESX7Y7N8BS");
test_math_log("BTZRI0");
test_math_log(/ab+c/);
test_math_log(9.294931299777176e+307);
test_math_log(-721);
test_math_log(1.244021652612381e+308);
test_math_log(6.894300364693935e+307);
test_math_log("B50U2ZP");
test_math_log(-719);
test_math_log(1.944909616713594e+307);
test_math_log(1.5771832882871891e+308);
test_math_log(-615);
test_math_log("BB520NSKY");
test_math_log("4GU1");
test_math_log(-79);
test_math_log(-293);
test_math_log(/[\u0400-\u04FF]+/g);
test_math_log(NaN);
test_math_log("HUY81EJY");
test_math_log(7.833601199906916e+307);
test_math_log(-997);
test_math_log(-315);
test_math_log(6.483811487108349e+307);
test_math_log(1.0395089544061575e+308);
test_math_log("8FYDRWU52");
test_math_log(undefined);
test_math_log("CVE");
test_math_log(-637);
test_math_log(-471);
test_math_log(-521);
test_math_log(-317);
test_math_log(1.2833116231840299e+308);
test_math_log(-617);
test_math_log("L3STB");
test_math_log(1.4948307382507292e+308);
test_math_log("TDPSFM");
test_math_log(-951);
test_math_log(-825);
test_math_log("LEZV15B");
test_math_log("RQUMF5");
test_math_log(-295);
test_math_log("825Y3T");
test_math_log(4.963016038864381e+307);
test_math_log(-465);
test_math_log("LFH");
test_math_log(-547);
test_math_log(-447);
test_math_log(1.0398416634794223e+308);
test_math_log("7DR");
test_math_log(-399);
test_math_log("UW1");
test_math_log(/foo/g);
test_math_log(1.430992681875539e+308);
test_math_log(1.7774595941072635e+308);
test_math_log("16ICBN");
test_math_log(-527);
test_math_log(-975);
test_math_log("I4U");
test_math_log(-583);
test_math_log(1.4758620047409052e+308);
test_math_log(1.32924477299998e+308);
test_math_log(1.7852900918515128e+308);
test_math_log(1.6065562265107687e+308);
test_math_log("5XCFR8XN7");
test_math_log("B1P0SI5HII");
test_math_log("9E4H");
test_math_log(-569);
test_math_log("N4SWL");
test_math_log(1.6306435355005765e+307);
test_math_log(-199);
test_math_log(-391);
test_math_log(-65);
test_math_log(1.5259325184312678e+308);
test_math_log(1.6456557343983324e+308);
test_math_log("VFNR");
test_math_log("8R5X9EY07");
test_math_log("OFEKO");
test_math_log("1OV");
test_math_log(-955);
test_math_log(8.207632200524884e+307);
test_math_log(-715);
test_math_log("KCTV23DM");
test_math_log(3.2382588236994275e+307);
test_math_log(-243);
test_math_log("AOIW1LSB");
test_math_log("MMYBVUP");
test_math_log(6.747581013127303e+307);
test_math_log("19CF");
test_math_log("8JKRJ11GI");
test_math_log(-571);
test_math_log(-73);
test_math_log(1.678019974423901e+308);
test_math_log("Y7209NIOYP");
test_math_log(4.488165113839969e+307);
test_math_log("S7FON");
test_math_log(1.5878778263323456e+308);
test_math_log(1.0473213159848392e+308);
test_math_log("3OV6XV2");
test_math_log("16831F");
test_math_log(2.2205542919180198e+307);
test_math_log("ZH4L");
test_math_log(-861);
test_math_log(1.3246254920151888e+306);
test_math_log(-619);
test_math_log(-379);
test_math_log(7.090176238795952e+307);
test_math_log(-259);
test_math_log("L98RB0BN");
test_math_log("7LG3P");
test_math_log("M3DSWN");
test_math_log("6ZRX2Y");
test_math_log(8.0837658453733e+307);
test_math_log("8FGYYBW");
test_math_log(-937);
test_math_log("XUX");
test_math_log("HIESAIC2");
test_math_log(1.3660533412836254e+308);
test_math_log("71A");
test_math_log(2.613278018021693e+307);
test_math_log(-685);
test_math_log("RSZK1WO");
test_math_log("9HY78PH0EK");
test_math_log(-695);
test_math_log(-125);
test_math_log(-87);
test_math_log(-991);
test_math_log(1.0663668620543165e+308);
test_math_log("4XKIQGIKEA");
test_math_log(-901);
test_math_log("QHLQUKZA");
test_math_log("18RJLGEVL");
test_math_log(-739);
test_math_log(-821);
test_math_log(1.1351343731936044e+307);
test_math_log(5.309268067392126e+307);
test_math_log(6.900390940356637e+307);
test_math_log(3.103000071050582e+307);
test_math_log("96B9TTK");
test_math_log("8Q1ALD5TXH");
test_math_log("IZ9");
test_math_log("D5IINRQLLB");
test_math_log(-361);
test_math_log(9.342838743772387e+307);
test_math_log(-101);
test_math_log(1.6688890373533165e+308);
test_math_log(1.368280508422129e+308);
test_math_log(-907);
test_math_log("PQDEU");
test_math_log(4.96397072602184e+307);
test_math_log(-229);
test_math_log(1.5479101841231413e+308);
test_math_log(-787);
test_math_log(1.0922419054979834e+308);
test_math_log(1.1399271466840419e+308);
test_math_log(6.293365964849592e+307);
test_math_log(1.5755188446999832e+308);
test_math_log(1.389413005942558e+308);
test_math_log("8YZLM");
test_math_log(-669);
test_math_log("Q9V");
test_math_log("ERHM5ME7E");
test_math_log(-275);
test_math_log(-651);
test_math_log("KLWIJO");
test_math_log(-705);
test_math_log("KQFR0");
test_math_log("FDJGO9R");
test_math_log(-175);
test_math_log("TE1UX2038B");
test_math_log("8BTLXQJW");
test_math_log(-409);
test_math_log(-687);
test_math_log(-935);
test_math_log(1.3500229679717445e+308);
test_math_log(-405);
test_math_log(-915);
test_math_log("3LSPG");
test_math_log("18D72E105");
test_math_log(1.5869480713050548e+308);
test_math_log("FH7DJ");
test_math_log(-91);
test_math_log("OAB");
test_math_log("W5I8MO");
test_math_log(-343);
test_math_log(6.849538703950408e+307);
test_math_log(-49);
test_math_log("EOCON");
test_math_log(-227);
test_math_log(1.539636608355621e+308);
test_math_log("4U2PBQHG6X");
test_math_log(-641);
test_math_log(-9);
test_math_log(1.036376960831111e+308);
test_math_log(5.999203401549245e+307);
test_math_log(-151);
test_math_log(1.1937345437620407e+308);
test_math_log(4.1988336196434534e+307);
test_math_log("MC3DWV");
test_math_log(2.644770197249249e+307);
test_math_log(-815);
test_math_log("YE30XZ870");
test_math_log("Q9K");
test_math_log(5.011003748136762e+307);
test_math_log(-585);
test_math_log(7.873739670631849e+307);
test_math_log("9VTIN");
test_math_log(1.7539738414983057e+308);
test_math_log("75XH160");
test_math_log(9.419316407729889e+307);
test_math_log(-121);
test_math_log(9.210076803008302e+307);
test_math_log(-67);
test_math_log(1.7456541815846329e+308);
test_math_log(1.1516320562071218e+308);
test_math_log(-905);
test_math_log(3.163370795410836e+307);
test_math_log(-523);
test_math_log("EN77");
test_math_log(-277);
test_math_log(-195);
test_math_log("6DDO");
test_math_log(-925);
test_math_log(2.178007384876183e+307);
test_math_log(4.996868522558727e+307);
test_math_log(1.1348576701848186e+308);
test_math_log("NOH");
test_math_log("YR6G");
test_math_log(-43);
test_math_log(1.5471529764163682e+308);
test_math_log("VC634");
test_math_log("924921");
test_math_log("ZAE");
test_math_log(4.19884715988354e+307);
test_math_log(-27);
test_math_log(1.7580334464525535e+308);
test_math_log(5.879504317753053e+307);
test_math_log("QBCZ5JZH");
test_math_log("NT3");
test_math_log(1.5691016550107473e+308);
test_math_log(1.26249207049277e+308);
test_math_log(2.082734565398771e+307);
test_math_log(-639);
test_math_log("QOIHQO570");
test_math_log(-947);
test_math_log(-271);
test_math_log(1.3761973341089796e+308);
test_math_log(1.418200633399848e+308);
test_math_log(1.1163164364868119e+308);
test_math_log(4.302740066252376e+307);
test_math_log(1.2712658337379962e+308);
test_math_log("KTXZYYKR1C");
test_math_log("032U8H");
test_math_log(1.699996989117611e+308);
test_math_log("OQDG1Q0");
test_math_log(7.656967982072236e+307);
test_math_log(7.563568077830752e+306);
test_math_log(-681);
test_math_log(-55);
test_math_log(-983);
test_math_log(-723);
test_math_log(782);
test_math_log("GTP");
test_math_log("X18I");
test_math_log("PYY");
test_math_log("HHLFJ");
test_math_log(1.2565690273410706e+307);
test_math_log(-549);
test_math_log(6.264378652087415e+307);
test_math_log("GMVO3");
test_math_log(-319);
test_math_log(1.287732628041379e+308);
test_math_log(-919);
test_math_log("0ZKC7W");
test_math_log("4TCRET6");
test_math_log(1.308480520074246e+308);
test_math_log("PU1N3");
test_math_log(7.767107193928613e+307);
test_math_log(-733);
test_math_log(1.4211739049305998e+308);
test_math_log(2.5843095482326637e+307);
test_math_log(-855);
test_math_log("P685TMUN");
test_math_log(2.2422940131176863e+307);
test_math_log("AEP8W");
test_math_log("DDG6");
test_math_log(6.859458447439919e+307);
test_math_log(3.884747511776401e+307);
test_math_log(1.1368836752865665e+307);
test_math_log("ZENJ");
test_math_log("J4VKY8GC");
test_math_log(8.359499371684061e+307);
test_math_log("29ZG8TA");
test_math_log("TZRTS");
test_math_log(-15);
test_math_log(256);
test_math_log(-747);
test_math_log(3.0785519800153156e+307);
test_math_log(7.855699042092168e+307);
test_math_log("91EPOO");
test_math_log(-321);
test_math_log("B85K");
test_math_log("4M4XPES");
test_math_log("Z7HG9");
test_math_log("75CVETB");
test_math_log("GRN0WUBYL");
test_math_log("2IR");
test_math_log("CC71");
test_math_log(-167);
test_math_log("RQPYS8");
test_math_log("R3HHIDL");
test_math_log("288RWCRDB");
test_math_log(1.5868106243303868e+308);
test_math_log("JR9EKM");
test_math_log(1.0266831962443102e+308);
test_math_log(8.458486217023551e+307);
test_math_log(8.022355835520966e+307);
test_math_log(-323);
test_math_log(-845);
test_math_log("ZCO");
test_math_log(1.1745453798222149e+308);
test_math_log(-469);
test_math_log(-47);
test_math_log("PLKSS8WZNR");
test_math_log("4FGNV2NY2");
test_math_log("2644X");
test_math_log(-3);
test_math_log("R3Q4Y4L9");
test_math_log("6IUPG3IL");
test_math_log("OPN8");
test_math_log(2.1837550334780623e+307);
test_math_log(1.3994310233069467e+308);
test_math_log(1.7283415011938598e+308);
test_math_log("3KURT");
test_math_log("SK19HV");
test_math_log(-903);
test_math_log(1.536400480406703e+308);
test_math_log(1.2046230812178488e+308);
test_math_log(1.7307048289117734e+308);
test_math_log(-959);
test_math_log(9.234667184689975e+307);
test_math_log(3.1670112222733115e+307);
test_math_log("ANKUD1PT");
test_math_log(1.70329995141219e+308);
test_math_log(6.924995853242169e+307);
test_math_log(-261);
test_math_log(-299);
test_math_log("FLHA6");
test_math_log(-745);
test_math_log("2Z63");
test_math_log("C2D6BZMJ");
test_math_log(1.304398249321901e+308);
test_math_log(9.89418925096202e+307);
test_math_log(8.530472140240454e+307);
test_math_log("FU7CCSK");
test_math_log("LVJ");
test_math_log("4NPK");
test_math_log("Y0U4J8W");
test_math_log(-667);
test_math_log(-209);
test_math_log("U3Q");
test_math_log(1.282234511231799e+308);
test_math_log("8RCOOD0O");
test_math_log(2.250891049702191e+307);
test_math_log("HKRFK8UJHR");
test_math_log("602PSR");
test_math_log("7PONHINAW4");
test_math_log(4.282801858472406e+307);
test_math_log(6.294406443582125e+307);
test_math_log(1.4968891645930399e+308);
test_math_log("I07V6YP8");
test_math_log(1.210142066410104e+308);
test_math_log(1.248511337424976e+307);
test_math_log(-757);
test_math_log("D60");
test_math_log(1.5249101283145207e+308);
test_math_log(3.6573618532389995e+307);
test_math_log(-561);
test_math_log("CK85ZB6ZQ");
test_math_log("HWSM1CA9D");
test_math_log(4.841046121047274e+307);
test_math_log(6.412513643345177e+307);
test_math_log(3.42856695782882e+307);
test_math_log("V2KI02R");
test_math_log(-311);
test_math_log(-161);
test_math_log("0XYV3YLG");
test_math_log("KU0H");
test_math_log(6.154365334324342e+307);
test_math_log(1.1889195644368211e+308);
test_math_log(-449);
test_math_log(1.144772198164762e+308);
test_math_log("IPMK1");
test_math_log("T1Z");
test_math_log(-367);
test_math_log(3.4656540736922473e+307);
test_math_log(-689);
test_math_log(8.299332759833499e+307);
test_math_log(1.2966449235290392e+308);
test_math_log("WUMWU0GNS");
test_math_log(2.9258369373328267e+307);
test_math_log(-149);
test_math_log(4.729919704324584e+307);
test_math_log(-263);
test_math_log(-89);
test_math_log(3.383401895946177e+307);
test_math_log(5.974759859003877e+307);
test_math_log(4.67687477298547e+307);
test_math_log(1.2006251784936482e+308);
test_math_log(-533);
test_math_log(7.610435119748307e+307);
test_math_log(-483);
test_math_log("CO7EUYU");
test_math_log(5.246755272548151e+307);
test_math_log(-455);
test_math_log("6EA8RFO932");
test_math_log(1.3337886092896306e+307);
test_math_log(1.3042349502145823e+308);
test_math_log(-451);
test_math_log(-591);
test_math_log(-339);
test_math_log(1.6759194408263345e+308);
test_math_log(-59);
test_math_log(-257);
test_math_log(-119);
test_math_log("9WSHZH");
test_math_log("2E64");
test_math_log(-249);
test_math_log(-753);
test_math_log(-995);
test_math_log(3.218834175844034e+307);
test_math_log(1.6338377630490688e+308);
test_math_log("RTJWSA");
test_math_log(-435);
test_math_log(2.8037688097325763e+307);
test_math_log(4.52443054638325e+307);
test_math_log(-809);
test_math_log(4.398863940620105e+307);
test_math_log(-737);
test_math_log("L0RY48");
test_math_log(-729);
test_math_log(-813);
test_math_log("6WWDVQV");
test_math_log("BYCJ2");
test_math_log(1.7813778780220584e+308);
test_math_log("0SHR");
test_math_log("VAOHWNDNF");
test_math_log(3.6847348641983015e+307);
test_math_log(-341);
test_math_log(4.670908426151872e+307);
test_math_log("98U1HP45");
test_math_log(7.013419638698328e+307);
test_math_log(-817);
test_math_log(1.5379284860803331e+308);
test_math_log("FFO0T9Z");
test_math_log(1.2152443925574136e+308);
test_math_log("GYUJ0MRC");
test_math_log(1.3551229043787503e+308);
test_math_log("7QZ8C1CMXA");
test_math_log(1.555986543254714e+308);
test_math_log(-943);
test_math_log("EM7MS");
test_math_log(2.778621612548684e+307);
test_math_log("61ZIJKT");
test_math_log(1.5231045572254546e+308);
test_math_log(9.531962818538802e+307);
test_math_log(1.3391170528659957e+307);
test_math_log("0GSN");
test_math_log(-393);
test_math_log(5.3996973415990204e+306);
test_math_log("W1G1XK5TR");
test_math_log("0A5YX3X");
test_math_log(-543);
test_math_log(9.434234999208414e+307);
test_math_log("4NM329JOO2");
test_math_log(-169);
test_math_log(5.058810450699935e+307);
test_math_log(-927);
test_math_log(-771);
test_math_log(-889);
test_math_log("IC82ZHBM");
test_math_log(-515);
test_math_log(-223);
test_math_log("FYZ4AE9JS");
test_math_log(1.3786942362635856e+308);
test_math_log(-829);
test_math_log("R15AFQFGX");
test_math_log(-71);
test_math_log(-837);
test_math_log("PA7T3FA");
test_math_log(1.6711376507189524e+308);
test_math_log(5.621424777568916e+307);
test_math_log("FE3");
test_math_log(-555);
test_math_log(1.3959909082519064e+308);
test_math_log(3.661570389408774e+306);
test_math_log(7.306854430584241e+307);
test_math_log("PDFRSS3Y");
test_math_log(8.880597140506642e+307);
test_math_log(1.017145503938035e+308);
test_math_log("WDQQ");
test_math_log("PJ3YNUC4M");
test_math_log("2WE");
test_math_log(-159);
test_math_log(1.350809282807555e+308);
test_math_log(-513);
test_math_log("QFNQF09JWH");
test_math_log(1.3737930890393145e+308);
test_math_log(-805);
test_math_log(1.7902662464965372e+308);
test_math_log("2L99TD6TF");
test_math_log(8.828208069148566e+307);
test_math_log("7ODI71");
test_math_log(-357);
test_math_log("79QL");
test_math_log(-395);
test_math_log("0KXGFB");
test_math_log("HC4KBNZ7");
test_math_log(-433);
test_math_log(3.3535665095853086e+307);
test_math_log("DSAMD");
test_math_log("WCM");
test_math_log(9.439281551370283e+307);
test_math_log(6.110952163117191e+307);
test_math_log(4.1964824709861346e+307);
test_math_log(7.95686642027449e+307);
test_math_log("NF105T7S");
test_math_log(4.367569721868381e+307);
test_math_log(6.108792627762024e+307);
test_math_log(4.0528349756827564e+307);
test_math_log(-675);
test_math_log(1.0389248739043913e+308);
test_math_log("ZL6");
test_math_log("8PZQ2J64");
test_math_log(-269);
test_math_log(1.1077142851377318e+308);
test_math_log("MAS8TT4EXL");
test_math_log(-103);
test_math_log("27T");
test_math_log(-153);
test_math_log(1.2974028281005625e+307);
test_math_log(-731);
test_math_log("VKV");
test_math_log("PQGA");
test_math_log("F1L803U");
test_math_log("Q96OMIVYB");
test_math_log("K24MK8GZ");
test_math_log("2WTTH");
test_math_log(1.20381021958765e+308);
test_math_log(-567);
test_math_log("P1CSZ");
test_math_log("5BHL6RGG");
test_math_log(1.2538198995511965e+308);
test_math_log("0ZHCCG63R");
test_math_log(5.473065564734748e+307);
test_math_log("YNB4V8QEWX");
test_math_log("JT26KAGKD1");
test_math_log(-509);
test_math_log(1.5878818540093466e+306);
test_math_log("9PPXZJT1");
test_math_log("037NO57");
test_math_log(-479);
test_math_log(1.2259988537574549e+308);
test_math_log(-545);
test_math_log("7AD8F");
test_math_log(-989);
test_math_log("OGJM");
test_math_log("3US");
test_math_log(-157);
test_math_log(-891);
test_math_log(6.380759736253717e+307);
test_math_log("YHO1O470");
test_math_log(-291);
test_math_log(1.5436172690004059e+308);
test_math_log("WFHANO0HI");
test_math_log("MTOR8S");
test_math_log(-265);
test_math_log("QMXU6ANSGR");
test_math_log(9.005137692926117e+307);
test_math_log(8.692525310709333e+307);
test_math_log("4LED");
test_math_log(-201);
test_math_log("JW4H5CV1");
test_math_log(1.6120192625939416e+308);
test_math_log("5XOKD2");
test_math_log(4.788877051760107e+307);
test_math_log("23TJZWHT");
test_math_log(9.91755446485255e+307);
test_math_log("VB24KAHVWW");
test_math_log(-345);
test_math_log("W4X8ANV5SV");
test_math_log(-537);
test_math_log("7MZMA4");
test_math_log("M9MXT4AHX");
test_math_log(3.315732902275599e+306);
test_math_log(-629);
test_math_log(9.65430387533273e+307);
test_math_log(7.794501345247723e+307);
test_math_log(1.5294769048894633e+308);
test_math_log(-475);
test_math_log(-507);
test_math_log(-427);
test_math_log(-123);
test_math_log("GU8NYCT");
test_math_log(-181);
test_math_log(-755);
test_math_log(1.3289968614089916e+308);
test_math_log(4.4085850800747806e+307);
test_math_log(-485);
test_math_log("WIX8H44U5W");
test_math_log("GGV");
test_math_log(-725);
test_math_log(1.7382455026558265e+308);
test_math_log(1.5173307528798667e+308);
test_math_log("7K8L");
test_math_log("AAN74");
test_math_log(9.559638491818531e+307);
test_math_log("I1L15I49");
test_math_log("Q8H44");
test_math_log(1.0221084265348796e+308);
test_math_log(-189);
test_math_log(1.4966256246655753e+308);
test_math_log("7ESKE3BNFF");
test_math_log("W81BES");
test_math_log("8YMLI");
test_math_log(-137);
test_math_log(-853);
test_math_log(-193);
test_math_log(-835);
test_math_log(-603);
test_math_log(-413);
test_math_log(1.5112928119463043e+308);
test_math_log(-743);
test_math_log("0FW1JBY");
test_math_log(-785);
test_math_log("NN3J0BW");
test_math_log(-847);
test_math_log(-773);
test_math_log(-931);
test_math_log(4.005888027420638e+307);
test_math_log(1.789730162773758e+308);
test_math_log(1.4118751463792515e+308);
test_math_log(1.6718378189893475e+308);
test_math_log(6.874715369217179e+307);
test_math_log("53GPBGCU8");
test_math_log("ZQJFDQLE");
test_math_log(-439);
test_math_log("0ZCQMLYA");
test_math_log(1.442492751740829e+308);
test_math_log(1.7493240205133068e+308);
test_math_log(1.0466967683852198e+308);
test_math_log(9.816110281888423e+307);
test_math_log("KF5LK");
test_math_log("RW6W7GB");
test_math_log(-177);
test_math_log(9.065512082434804e+307);
test_math_log(-139);
test_math_log(-381);
test_math_log(8.403468669808808e+307);
test_math_log(1.6603147438068454e+308);
test_math_log(1.1675575275552037e+308);
test_math_log(-897);
test_math_log(-971);
test_math_log("MXY1V");
test_math_log("CZFHBMU03D");
test_math_log(4.608509259311126e+307);
test_math_log("5U9R24X4");
test_math_log(2.945611546716345e+307);
test_math_log(8.51417069814832e+307);
test_math_log("VQVN3");
test_math_log("66RZ7MA");
test_math_log("OX2OLX");
test_math_log("Y3211EOA");
test_math_log("4JIZH");
test_math_log("IZ9V1L5YNV");
test_math_log(1.176208675549887e+308);
test_math_log("PULA874PW");
test_math_log(1.046736182671458e+308);
test_math_log(-235);
test_math_log("Y6AY");
test_math_log("4Q2");
test_math_log(1.501267133856621e+308);
test_math_log(-105);
test_math_log("0KK1WA");
test_math_log(6.070112789716096e+305);
test_math_log("ZQNLL");
test_math_log(-693);
test_math_log(1.257521495466407e+308);
test_math_log(1.3881202380364984e+308);
test_math_log("TLHEN");
test_math_log(1.2200781449522662e+308);
test_math_log(1.468480067046776e+307);
test_math_log(1.2530147955718007e+308);
test_math_log(-653);
test_math_log(2.0363799203006315e+306);
test_math_log(2.470023557277831e+306);
test_math_log(-419);
test_math_log("OT8");
test_math_log("Y4V0P");
test_math_log("NT9M6C3CBE");
test_math_log(1.6262584525957474e+308);
test_math_log(4.132591718500956e+307);
test_math_log(1.1154801663829174e+308);
test_math_log(1.758191902669457e+308);
test_math_log("QAY6");
test_math_log(1.3237603149279176e+308);
test_math_log(-287);
test_math_log(1.1845570853759585e+307);
test_math_log("RLOBJF");
test_math_log("4SW24NP");
test_math_log(-283);
test_math_log(-797);
test_math_log(-819);
test_math_log("4HD");
test_math_log("722");
test_math_log(3.998441115807036e+307);
test_math_log("2NXZEF4SK");
test_math_log(-489);
test_math_log("2ZKDW2JT4");
test_math_log("59GIDHXL");
test_math_log("TWEF");
test_math_log("ELO14KFKM");
test_math_log(2.333874292384068e+307);
test_math_log("8NWJ7EOIAN");
test_math_log(4.310194499729947e+307);
test_math_log(-863);
test_math_log(-623);
test_math_log("JBDC23A");
test_math_log(-779);
test_math_log("EWVC12V");
test_math_log(1.4899288727296753e+308);
test_math_log(-961);
test_math_log(1.7388536792977001e+308);
test_math_log(7.563767435997554e+307);
test_math_log("XEZY");
test_math_log("8HG0DRF");
test_math_log(8.282535692616132e+307);
test_math_log(-215);
test_math_log(3.365267546634383e+307);
test_math_log("L1SAO");
test_math_log("OUG9F3R9T");
test_math_log("7Z2T4UGC");
test_math_log(1.5471282839798724e+308);
test_math_log(4.3372853135420886e+307);
test_math_log(-305);
test_math_log("TBA6Q16");
test_math_log(-595);
test_math_log("5JSKPE4OWX");
test_math_log(-535);
test_math_log("4PN3X57M");
test_math_log("64QBG4WTO");
test_math_log(5.737318076438857e+307);
test_math_log("BUOJDW6F48");
test_math_log(6.412538799572802e+307);
test_math_log("CYQPH");
test_math_log("B6T3SIEBAE");
test_math_log("KS6");
test_math_log("V6NQD7H");
test_math_log("0R55YHA");
test_math_log(1.0043587278705846e+307);
test_math_log("Y5F");
test_math_log("02GK30");
test_math_log("D1JMX8UU");
test_math_log(1.5282550718975514e+308);
test_math_log(5.981809697437663e+307);
test_math_log(-581);
test_math_log("PIT");
test_math_log(6.757673277995756e+307);
test_math_log("EE9SFXWKT9");
test_math_log(7.046515289338803e+307);
test_math_log("KK8");
test_math_log("OPXJPS647U");
test_math_log(7.898020049209464e+306);
test_math_log(1.5325820538198486e+308);
test_math_log(-839);
test_math_log("AX5H34AYJ");
test_math_log(-531);
test_math_log("79NZ9H1W");
test_math_log("B5F5O7CY");
test_math_log(-99);
test_math_log(1.7589099361059054e+308);
test_math_log("CYQHIM");
test_math_log("Q26B35NF7");
test_math_log("EZO");
test_math_log(6.258053594803198e+307);
test_math_log(528);
test_math_log("QEH");
test_math_log(-631);
test_math_log(1.6145063929869943e+308);
test_math_log(1.2386303750927833e+308);
test_math_log(8.104621384305836e+307);
test_math_log(5.599390114015052e+307);
test_math_log(-155);
test_math_log("GVJ04");
test_math_log(1.6531343522361624e+308);
test_math_log("Y2MVKIT");
test_math_log(8.405316655513655e+307);
test_math_log(-255);
test_math_log(9.195182765473061e+307);
test_math_log(6.453453657044042e+307);
test_math_log(9.984079576449036e+307);
test_math_log("2TG");
test_math_log("DDU3VQIQ");
test_math_log("XZGB1");
test_math_log(3.304462401131949e+307);
test_math_log("NAH7B0E");
test_math_log(5.221851683262083e+307);
test_math_log("4OUUT34");
test_math_log(-421);
test_math_log(3.6291181105995285e+307);
test_math_log(-97);
test_math_log("1KVT");
test_math_log(-663);
test_math_log(-147);
test_math_log(2.536454212912909e+307);
test_math_log(1.2937460790849375e+308);
test_math_log("TFZTZTG22F");
test_math_log(1.55038132572739e+308);
test_math_log("FVEB6LNJ0Y");
test_math_log(-231);
test_math_log(3.7684215080250113e+307);
test_math_log("EUN");
test_math_log("0FRHD3F");
test_math_log(8.586724951143296e+307);
test_math_log(784);
test_math_log(1.0547068820497226e+308);
test_math_log("JO05");
test_math_log("7JLI");
test_math_log(3.133582157030998e+307);
test_math_log(8.818470513939963e+307);
test_math_log("IKX");
test_math_log("ZPIE");
test_math_log(1.6418350075033777e+308);
test_math_log("UOLL");
test_math_log(1.2084447588402693e+308);
test_math_log(-141);
test_math_log(1.6375582051533402e+308);
test_math_log("OMCODP");
test_math_log("2VJHML2");
test_math_log("V7E");
test_math_log(-487);
test_math_log("7VPBSL");
test_math_log(1.3200123187536034e+308);
test_math_log("MWCWQ0J");
test_math_log("4EJG");
test_math_log("2MN");
test_math_log(1.5167316710108178e+308);
test_math_log(6.765094654709294e+307);
test_math_log("3NE51");
test_math_log("CLVDVAXQM");
test_math_log("TSMFD");
test_math_log("EZ8BVK26");
test_math_log(-7);
test_math_log(1.102520300736103e+308);
test_math_log(-33);
test_math_log(2.3035949402499465e+307);
test_math_log(-977);
test_math_log(-403);
test_math_log(1.1517527457292189e+308);
test_math_log(7.238632125040692e+307);
test_math_log(5.365179790540748e+307);
test_math_log("5QPO");
test_math_log(-941);
test_math_log(4.122478249493657e+307);
test_math_log(-751);
test_math_log("U9ZRD8JF");
test_math_log(-23);
test_math_log(-329);
test_math_log("AUDXXMGO");
test_math_log("OAB43CVC5I");
test_math_log("DXPB48C");
test_math_log("DT5VPT7OXR");
test_math_log("21FCURTEMW");
test_math_log(1.3371367243121446e+308);
test_math_log(1.379099057158691e+308);
test_math_log(7.350217433557284e+307);
test_math_log("6QGUF5");
test_math_log("1CC0KM66");
test_math_log(-717);
test_math_log(1.6279978485100994e+308);
test_math_log(-333);
test_math_log(6.607758094116893e+307);
test_math_log("NXJPU");
test_math_log("RDKLI5TUF");
test_math_log(8.508876567376758e+307);
test_math_log(-203);
test_math_log(9.837017328274592e+307);
test_math_log(282);
test_math_log(1.5263493360609577e+308);
test_math_log("DN2WHPWJ");
test_math_log("NUY8A");
test_math_log("KX5");
test_math_log(9.631190650270356e+307);
test_math_log(-493);
test_math_log(2.304209956275721e+307);
test_math_log(8.092864355433857e+307);
test_math_log("RW4");
test_math_log(-359);
test_math_log(1.6824949610970317e+308);
test_math_log("EKNWWED3FX");
test_math_log("OFVOX5KQ");
test_math_log("0K68AE8");
test_math_log("C845AV");
test_math_log("S0ZZ");
test_math_log(1.245347180977311e+308);
test_math_log("7E0RO7EIPU");
test_math_log(-769);
test_math_log(-365);
test_math_log(7.86449228889727e+307);
test_math_log(-709);
test_math_log("I8O3O");
test_math_log(6.363593159154024e+306);
test_math_log(4.610072266397083e+307);
test_math_log(1.6359117143322363e+308);
test_math_log("YIA");
test_math_log(-397);
test_math_log("JVCESHW3U");
test_math_log(1.2102998384722868e+308);
test_math_log(2.194869762329401e+307);
test_math_log("257A");
test_math_log(2.6540889510128423e+307);
test_math_log("36C4E4V5O");
test_math_log("UTG");
test_math_log(-425);
test_math_log(2.079562293716909e+307);
test_math_log("COG4Z5UG");
test_math_log(1.1250517221883499e+308);
test_math_log(3.261143248084408e+307);
test_math_log("QXFCO0J");
test_math_log("698YCZI");
test_math_log(-575);
test_math_log(3.834815644164223e+307);
test_math_log("ADSD2");
test_math_log(1.0648214325824858e+308);
test_math_log("36QQ");
test_math_log("4BL7LJPGE");
test_math_log("F8Q40H");
test_math_log(-355);
test_math_log(4.1681443404206597e+307);
test_math_log(-337);
test_math_log(8.551031017026318e+307);
test_math_log(8.251290114306375e+307);
test_math_log(-781);
test_math_log(1.4832303342597049e+308);
test_math_log(-207);
test_math_log("22WUR");
test_math_log("HLQ79ELJR");
test_math_log(1.6653734922816234e+308);
test_math_log(-407);
test_math_log("D9G");
test_math_log("TABX1");
test_math_log(6.337121690042176e+306);
test_math_log("ZRC9B");
test_math_log("AAV");
test_math_log(-19);
test_math_log("EBHM");
test_math_log("MF63YTSZ");
test_math_log(8.03117605730691e+306);
test_math_log("X91C258T1A");
test_math_log("RQDZ6D");
test_math_log(-443);
test_math_log(-459);
test_math_log(3.60498933556131e+307);
test_math_log(1.1123673455115768e+308);
test_math_log(7.213930601396991e+307);
test_math_log("TG9W8943C");
test_math_log(1.4685283564919339e+308);
test_math_log("XZEWU5");
test_math_log("O12VX59UJ");
test_math_log(6.41988839868202e+307);
test_math_log(1.0694472189221958e+308);
test_math_log("75LRWKD8");
test_math_log(-41);
test_math_log(-597);
