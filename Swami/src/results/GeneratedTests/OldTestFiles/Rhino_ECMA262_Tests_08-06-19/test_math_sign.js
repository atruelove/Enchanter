/*
* This file is automatically generated by Swami
*
* 2019-08-06 12:45:53.261052
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
test_math_sign(true);
test_math_sign(false);
test_math_sign("YI0KD04");
test_math_sign(1.281882495108999e+308);
test_math_sign(NaN);
test_math_sign(/[\u0400-\u04FF]+/g);
test_math_sign("2Q6C");
test_math_sign(1.064183566339592e+308);
test_math_sign("DMT1FIAGDI");
test_math_sign("348J");
test_math_sign(/\r\n|\r|\n/);
test_math_sign(9.056472526898217e+306);
test_math_sign(6.649205662743414e+307);
test_math_sign("FMHSSN0S0C");
test_math_sign(1.133652011597641e+308);
test_math_sign(/ab+c/);
test_math_sign(/(\w+)\s(\w+)/);
test_math_sign("QATETQLWEB");
test_math_sign(1.2902369222336552e+308);
test_math_sign(-561);
test_math_sign(-371);
test_math_sign(/foo/g);
test_math_sign(+0);
test_math_sign("731MBATE");
test_math_sign(8.641720221352207e+307);
test_math_sign(-171);
test_math_sign(-245);
test_math_sign(-955);
test_math_sign(5.595504973142611e+307);
test_math_sign(-875);
test_math_sign("2QS5");
test_math_sign(-565);
test_math_sign("P42");
test_math_sign(-189);
test_math_sign(/yes[^]*day/);
test_math_sign(9.386496162271795e+307);
test_math_sign(-0);
test_math_sign(/[^.]+/);
test_math_sign(-405);
test_math_sign("CREGOO9VW1");
test_math_sign(3.2132581717605236e+306);
test_math_sign(8.309312211311964e+307);
test_math_sign("OZ3F1F426I");
test_math_sign(-453);
test_math_sign(undefined);
test_math_sign("K6S");
test_math_sign("9EJIJABIU");
test_math_sign(null);
test_math_sign("9R3");
test_math_sign("IO5XV6CJET");
test_math_sign(-633);
test_math_sign(Infinity);
test_math_sign(5.506850192037089e+307);
test_math_sign("6Q3CW5");
test_math_sign(-175);
test_math_sign(/yes.*day/);
test_math_sign("JNY64MI3NN");
test_math_sign(1.5868751051640475e+308);
test_math_sign(-481);
test_math_sign(1.9398368665174565e+307);
test_math_sign(-733);
test_math_sign(7.150934413056591e+307);
test_math_sign(-75);
test_math_sign(-117);
test_math_sign(4.849451021498188e+307);
test_math_sign(1.105431469677769e+308);
test_math_sign(1.757436404758895e+308);
test_math_sign(4.3601270187085263e+307);
test_math_sign(-461);
test_math_sign(-945);
test_math_sign("WFUQCN");
test_math_sign(1.1052996404852241e+308);
test_math_sign("FJXW9");
test_math_sign(1.1414757482422015e+308);
test_math_sign(-685);
test_math_sign("7DWWU4");
test_math_sign(-847);
test_math_sign("K2H3U");
test_math_sign(7.329180436741152e+307);
test_math_sign(5.196806202123185e+307);
test_math_sign(-319);
test_math_sign(-291);
test_math_sign("VKALR3M");
test_math_sign("ESWSCVA92K");
test_math_sign(-887);
test_math_sign(-827);
test_math_sign("H543449DYG");
test_math_sign(-897);
test_math_sign(-431);
test_math_sign(8.804186959869136e+307);
test_math_sign(7.110365043285708e+307);
test_math_sign(-739);
test_math_sign(8.20445852986357e+307);
test_math_sign("YVHZJIBM7S");
test_math_sign("8VZKWU");
test_math_sign(6.376443524608673e+306);
test_math_sign(-855);
test_math_sign(-925);
test_math_sign(-411);
test_math_sign("2ESDC");
test_math_sign(-477);
test_math_sign(3.173897505505881e+307);
test_math_sign(8.861762831872508e+307);
test_math_sign(1.1338480181031207e+307);
test_math_sign(3.0018177532141523e+307);
test_math_sign(-859);
test_math_sign(5.739428197446055e+307);
test_math_sign(6.282216843847666e+307);
test_math_sign(1.3206497997442848e+308);
test_math_sign(-579);
test_math_sign(4.168553781176545e+306);
test_math_sign(-93);
test_math_sign(-803);
test_math_sign("E0DWS");
test_math_sign(7.988045383957547e+307);
test_math_sign("SS3HWMAJMZ");
test_math_sign(-297);
test_math_sign("DFK4YBN");
test_math_sign("QEL");
test_math_sign("VQGR8OMX");
test_math_sign(-867);
test_math_sign(-433);
test_math_sign(-449);
test_math_sign(-611);
test_math_sign("Y8NZOZI4F");
test_math_sign(1.5472437250847304e+308);
test_math_sign(-9);
test_math_sign(1.0672285441232233e+308);
test_math_sign("CCYHQ66");
test_math_sign("VUTKL7BOG");
test_math_sign(8.496339880073737e+307);
test_math_sign(-605);
test_math_sign(1.5848117509913472e+308);
test_math_sign(5.004546348614593e+307);
test_math_sign(-667);
test_math_sign("EHPHH2GSPW");
test_math_sign("WASX");
test_math_sign("ABR115B");
test_math_sign(-961);
test_math_sign("CMXE34UUD");
test_math_sign(6.662087377885806e+307);
test_math_sign(5.792450870336039e+307);
test_math_sign("98H17M");
test_math_sign("YV277A1ZC");
test_math_sign(-919);
test_math_sign(6.43115075661506e+307);
test_math_sign("28DBB5WV1");
test_math_sign(6.425881185324808e+307);
test_math_sign("5EL5TEL");
test_math_sign("PX74YBHPRR");
test_math_sign("BEV7BM8N");
test_math_sign(1.6618298321406227e+308);
test_math_sign(1.5941995991480482e+308);
test_math_sign(1.7719914807452148e+308);
test_math_sign("OSC3N");
test_math_sign(-169);
test_math_sign(4.004345517998638e+307);
test_math_sign(1.1165362067243973e+308);
test_math_sign(-273);
test_math_sign(-821);
test_math_sign("3FU");
test_math_sign(-607);
test_math_sign(1.03964598300201e+308);
test_math_sign("EJ6LN8PKC");
test_math_sign(-927);
test_math_sign(-725);
test_math_sign("W1WYTS6");
test_math_sign(-865);
test_math_sign("H4U85");
test_math_sign("00T33C494");
test_math_sign("MCUM");
test_math_sign(-275);
test_math_sign(-445);
test_math_sign("L3FJ7ME3T");
test_math_sign(-753);
test_math_sign(-355);
test_math_sign("IU5");
test_math_sign("EFP3M");
test_math_sign(1.8589863157308417e+307);
test_math_sign(1.1744489507803534e+308);
test_math_sign(-957);
test_math_sign(4.90876034682428e+307);
test_math_sign(1.2011445429088768e+308);
test_math_sign(-829);
test_math_sign("DWTP22L8B");
test_math_sign("DXCHQP2");
test_math_sign("2FBNK7");
test_math_sign("TTESTCLT");
test_math_sign("HABUA7MS");
test_math_sign(1.3677407726266706e+306);
test_math_sign(-837);
test_math_sign(6.849717444260454e+307);
test_math_sign(-447);
test_math_sign("JJ0HIVI96");
test_math_sign(1.4006741473101274e+308);
test_math_sign(2.692193506567284e+307);
test_math_sign(-323);
test_math_sign(-201);
test_math_sign(6.596202151473508e+306);
test_math_sign("IPGQH7");
test_math_sign("ODLX");
test_math_sign("T5XTM");
test_math_sign(-267);
test_math_sign(4.769178474982657e+307);
test_math_sign("F5UT4THKBG");
test_math_sign(9.128799809366487e+307);
test_math_sign("98R5E2MF6");
test_math_sign(5.0316058466918873e+306);
test_math_sign(3.5595872814193173e+307);
test_math_sign(2.5559153944670725e+306);
test_math_sign("8AT6077XVC");
test_math_sign(-907);
test_math_sign(-545);
test_math_sign("AG8QU");
test_math_sign(3.878378905411058e+307);
test_math_sign("RSA4ABZ");
test_math_sign("RPHAF2712");
test_math_sign(1.1032611063477952e+308);
test_math_sign(8.085552348775066e+307);
test_math_sign(3.050631482784651e+307);
test_math_sign(1.3203514358175422e+308);
test_math_sign("51I");
test_math_sign(-237);
test_math_sign("G8QGSOC");
test_math_sign(-965);
test_math_sign("RP2UQ");
test_math_sign(-369);
test_math_sign("F93O");
test_math_sign("0JID");
test_math_sign("ODWKZWDTM8");
test_math_sign(-959);
test_math_sign("W3F7");
test_math_sign(-363);
test_math_sign(-947);
test_math_sign(1.7781797277591413e+308);
test_math_sign("SCP2QY");
test_math_sign(1.188785958564457e+308);
test_math_sign(1.6421373756736927e+308);
test_math_sign("327G");
test_math_sign(-33);
test_math_sign(7.095693806593595e+307);
test_math_sign(1.319928445439199e+308);
test_math_sign(-637);
test_math_sign("QU6S5HH");
test_math_sign("MCK5AD6");
test_math_sign("020K4V");
test_math_sign("BWPYC2C");
test_math_sign(5.217411591794749e+307);
test_math_sign(-953);
test_math_sign("W5NDBHV");
test_math_sign(1.2820873986149042e+308);
test_math_sign("MR5L85SZ2");
test_math_sign(-563);
test_math_sign(1.5107465975938548e+308);
test_math_sign("00TP");
test_math_sign(1.0199795858379792e+308);
test_math_sign(1.4804838964428355e+307);
test_math_sign(-639);
test_math_sign("TFG7");
test_math_sign(1.6431607717651524e+308);
test_math_sign(-951);
test_math_sign("16P5XZ");
test_math_sign(8.919500433299079e+307);
test_math_sign(-687);
test_math_sign(5.03375465516484e+307);
test_math_sign(2.57977907465937e+307);
test_math_sign("SOCB7RFW");
test_math_sign("4UA");
test_math_sign("PKD88R7R");
test_math_sign(8.01957626325736e+307);
test_math_sign(-895);
test_math_sign("88T20");
test_math_sign("TSJVM");
test_math_sign(1.465988723902308e+308);
test_math_sign(1.1448917463357531e+308);
test_math_sign("3RHI75PI");
test_math_sign(1.9637147601666057e+307);
test_math_sign(6.626379004423154e+307);
test_math_sign("FGRG7B");
test_math_sign(1.2774345144520303e+308);
test_math_sign("SHZW6ED50Z");
test_math_sign(1.7860062986077887e+308);
test_math_sign(6.593660678017784e+307);
test_math_sign(1.7892329036350495e+308);
test_math_sign(-471);
test_math_sign("0KY7");
test_math_sign(-211);
test_math_sign(9.410856585317452e+307);
test_math_sign(-783);
test_math_sign(1.4889370651738664e+308);
test_math_sign(-57);
test_math_sign(-765);
test_math_sign("7XTNP");
test_math_sign(-61);
test_math_sign("W3XQOC5TS");
test_math_sign(-601);
test_math_sign(-931);
test_math_sign(9.685464818689275e+307);
test_math_sign("8EZ");
test_math_sign(7.883074427657124e+307);
test_math_sign(-87);
test_math_sign(-523);
test_math_sign("7BROC8UT8B");
test_math_sign(1.017654964004074e+308);
test_math_sign("THMI0VEDM");
test_math_sign(-747);
test_math_sign("CJCTPPHH");
test_math_sign(1.6816224222910277e+308);
test_math_sign(1.0525523262326211e+308);
test_math_sign(-515);
test_math_sign("C3BM3G");
test_math_sign(-133);
test_math_sign("CHC4X5OW92");
test_math_sign(-155);
test_math_sign(8.11385735651694e+307);
test_math_sign("HBL");
test_math_sign(1.562151762257822e+308);
test_math_sign("F3L3SO2");
test_math_sign(5.341953441528957e+307);
test_math_sign(6.728455511945153e+307);
test_math_sign(8.986707782385206e+307);
test_math_sign(-869);
test_math_sign(1.0331079505863419e+307);
test_math_sign("816F");
test_math_sign("UN4WBU");
test_math_sign("7RV3");
test_math_sign(1.3007995406560952e+307);
test_math_sign("NKP141");
test_math_sign("GZBYF");
test_math_sign("JDVDE");
test_math_sign("0YD");
test_math_sign("319UW8");
test_math_sign(-921);
test_math_sign("ZRKMXQ7W");
test_math_sign("1Y5YEG58C");
test_math_sign(-937);
test_math_sign("WU7I");
test_math_sign(-715);
test_math_sign(-111);
test_math_sign(-853);
test_math_sign(1.6434044682718279e+308);
test_math_sign("F3HZINEMSN");
test_math_sign(-741);
test_math_sign("B8JZG49");
test_math_sign(4.4793263441271804e+306);
test_math_sign(1.5053910141497913e+307);
test_math_sign(1.1729270160745074e+307);
test_math_sign(-727);
test_math_sign(1.0507973378386563e+308);
test_math_sign(2.014720867337743e+307);
test_math_sign("CJPTBIKN2");
test_math_sign(1.3187514929925062e+307);
test_math_sign(1.7923090450396517e+308);
test_math_sign(-79);
test_math_sign("8P9T60MZR");
test_math_sign("BXLF");
test_math_sign(-517);
test_math_sign("XZIQ0P3G");
test_math_sign(-427);
test_math_sign("DVY");
test_math_sign("HYVBEYN");
test_math_sign("DKJ");
test_math_sign("1QA");
test_math_sign(-473);
test_math_sign(1.6150289693433565e+308);
test_math_sign(2.8525721122671947e+307);
test_math_sign("4CAX89");
test_math_sign(1.9981782876430652e+307);
test_math_sign("3ZFF");
test_math_sign(-373);
test_math_sign("Q8G8P8");
test_math_sign(-409);
test_math_sign(1.5515680376462477e+308);
test_math_sign(-205);
test_math_sign(-903);
test_math_sign("GDAJ");
test_math_sign(-321);
test_math_sign(1.6188230202461583e+308);
test_math_sign(-219);
test_math_sign(1.4700074423182906e+308);
test_math_sign("V742AVFRJ");
test_math_sign(-367);
test_math_sign(1.6591370977882978e+307);
test_math_sign(-441);
test_math_sign(1.5544282610709059e+308);
test_math_sign(-329);
test_math_sign(1.0337711803364082e+308);
test_math_sign(-655);
test_math_sign(-37);
test_math_sign(-789);
test_math_sign(1.0949744369525428e+308);
test_math_sign(2.788454177211303e+307);
test_math_sign("O4YPVJZ8BO");
test_math_sign("R7R2Y83");
test_math_sign(1.6518734304921022e+308);
test_math_sign(7.60052739270044e+307);
test_math_sign(-743);
test_math_sign(9.294584330096838e+307);
test_math_sign(-623);
test_math_sign(-893);
test_math_sign("F0M8UJ1");
test_math_sign(1.477805948839916e+308);
test_math_sign(8.452493069376165e+307);
test_math_sign(-935);
test_math_sign(-799);
test_math_sign(1.076483119438535e+308);
test_math_sign("8TSZUIAPPS");
test_math_sign(1.029793907260906e+308);
test_math_sign(1.0570735223550774e+308);
test_math_sign(8.263489873244583e+307);
test_math_sign("8HLT9Y");
test_math_sign("64YT2");
test_math_sign(-125);
test_math_sign(5.256608323410598e+307);
test_math_sign("F1WI4");
test_math_sign("ZPK3CS1C");
test_math_sign(6.761372021476121e+307);
test_math_sign("VSLIYTNNQ");
test_math_sign("QMZH9AO5V");
test_math_sign("FMEFC");
test_math_sign("2OJ");
test_math_sign(3.8159366967495483e+307);
test_math_sign("J8S00");
test_math_sign(-191);
test_math_sign(1.0726360862684815e+308);
test_math_sign("WKED0PNR5");
test_math_sign(-645);
test_math_sign("2M7O");
test_math_sign("ZZY87XJM");
test_math_sign("HHSB1");
test_math_sign("1G83GWYSYE");
test_math_sign("2IPVPBIP");
test_math_sign(5.85055280157604e+307);
test_math_sign("485BM1");
test_math_sign(-583);
test_math_sign(-199);
test_math_sign(1.0355171119178749e+308);
test_math_sign(-519);
test_math_sign(-881);
test_math_sign(6.001440826180807e+307);
test_math_sign("TRU5AB3");
test_math_sign("410QAL2P");
test_math_sign(7.415733618956612e+307);
test_math_sign(6.985661348485125e+307);
test_math_sign(1.1452333440653996e+308);
test_math_sign("KBJO");
test_math_sign(7.785066489212729e+307);
test_math_sign("9GCL");
test_math_sign("M30");
test_math_sign("SIC77S");
test_math_sign(-413);
test_math_sign(-113);
test_math_sign(-991);
test_math_sign("KJD4");
test_math_sign("91D");
test_math_sign("QJDZZRZKCQ");
test_math_sign(2.298446063311711e+307);
test_math_sign(-841);
test_math_sign(6.029911429210215e+305);
test_math_sign(-597);
test_math_sign(1.7259429123617259e+308);
test_math_sign(-941);
test_math_sign("FRO");
test_math_sign(-213);
test_math_sign(-521);
test_math_sign("2Q5WX");
test_math_sign(-693);
test_math_sign(1.2341714041895279e+308);
test_math_sign(7.464734701143851e+307);
test_math_sign("JU26");
test_math_sign("TRJ");
test_math_sign("JBS0");
test_math_sign(1.3587874710007223e+308);
test_math_sign(-421);
test_math_sign(1.3418615036826942e+307);
test_math_sign(7.499577119827154e+307);
test_math_sign(1.2520548779156372e+308);
test_math_sign(-493);
test_math_sign("SQTLYXEA");
test_math_sign("PW4TKV7M2K");
test_math_sign("6CEX2GZ");
test_math_sign(9.988603999711407e+307);
test_math_sign(6.518468450988639e+307);
test_math_sign(2.934827742280686e+307);
test_math_sign("SKMBOP5J");
test_math_sign(-253);
test_math_sign(7.869511920701302e+307);
test_math_sign("Z5V");
test_math_sign(1.092055635266351e+308);
test_math_sign("8EGT4MCIEP");
test_math_sign("3R85WOA21");
test_math_sign(-553);
test_math_sign(-309);
test_math_sign("Y4X");
test_math_sign("XJWGTFLV");
test_math_sign(-451);
test_math_sign(-845);
test_math_sign("1F7");
test_math_sign(1.5649828713586434e+308);
test_math_sign(-679);
test_math_sign("I07G");
test_math_sign(1.7920427495041658e+308);
test_math_sign(7.513231515826271e+307);
test_math_sign("571RJN3ZHS");
test_math_sign(-701);
test_math_sign("L1UFR8W");
test_math_sign(1.1476242314184285e+308);
test_math_sign("2DFXN6L");
test_math_sign("Y328JX18");
test_math_sign(7.167280255011833e+307);
test_math_sign("1HURUTB");
test_math_sign("3SW7R8G");
test_math_sign(-17);
test_math_sign(-67);
test_math_sign(-819);
test_math_sign(1.3473270366712583e+308);
test_math_sign(-489);
test_math_sign(7.858461025998753e+307);
test_math_sign(5.79097533889326e+307);
test_math_sign(-91);
test_math_sign(950);
test_math_sign(-263);
test_math_sign(-341);
test_math_sign(1.1429361690739368e+308);
test_math_sign("8WT");
test_math_sign("SRKXJMY94");
test_math_sign("6B4");
test_math_sign(-871);
test_math_sign("GI23HEJ");
test_math_sign(-745);
test_math_sign("TPUX2AW");
test_math_sign("GXAH91W");
test_math_sign("U5VNBET8ES");
test_math_sign(-197);
test_math_sign(6.0363079625223e+307);
test_math_sign("KCVBTL5ZLD");
test_math_sign(-239);
test_math_sign(1.4104152939719115e+308);
test_math_sign(-53);
test_math_sign(1.7101677834680639e+308);
test_math_sign(-315);
test_math_sign(4.702863493399882e+307);
test_math_sign(-949);
test_math_sign(-257);
test_math_sign("7OUW");
test_math_sign(-299);
test_math_sign("IEAQKAKD2G");
test_math_sign("O2BOVEH8Q1");
test_math_sign(1.160937366766379e+308);
test_math_sign(3.858943602475599e+306);
test_math_sign(-99);
test_math_sign(1.193208262636434e+308);
test_math_sign(9.904261343169387e+307);
test_math_sign("7UZ14GUN");
test_math_sign("2PRDGB8WX");
test_math_sign(-5);
test_math_sign(-349);
test_math_sign("NVWVPJQUB");
test_math_sign(1.348615748869244e+308);
test_math_sign(-435);
test_math_sign("6PTJ");
test_math_sign("5MC7");
test_math_sign(-711);
test_math_sign("HYHO21BB");
test_math_sign("MRG839");
test_math_sign("T3N2OJNN73");
test_math_sign(1.9930152895208646e+306);
test_math_sign(-63);
test_math_sign(1.1936653706326205e+308);
test_math_sign(7.865775783877398e+307);
test_math_sign("FIUWJ7");
test_math_sign(1.393688838253079e+308);
test_math_sign("K4KYBK");
test_math_sign(8.377428059783182e+307);
test_math_sign("80WPPMHRA");
test_math_sign("O2DU3C536J");
test_math_sign(-83);
test_math_sign(3.5653880678267846e+307);
test_math_sign("VT7H5");
test_math_sign(-535);
test_math_sign(1.7128743665434608e+308);
test_math_sign(-811);
test_math_sign(-495);
test_math_sign("PJG74GH");
test_math_sign(-231);
test_math_sign("Y0333");
test_math_sign(-549);
test_math_sign("C5VMPZJNLJ");
test_math_sign("0AOO0ND3");
test_math_sign(1.5659479040217722e+307);
test_math_sign(-351);
test_math_sign(-501);
test_math_sign("YPJGZTC25H");
test_math_sign(4.0083269767866294e+307);
test_math_sign("2E8DP0R453");
test_math_sign("EQKS26X");
test_math_sign(-975);
test_math_sign(-255);
test_math_sign("L8JU");
test_math_sign("WVGM3Y");
test_math_sign("AIVB1S5U1A");
test_math_sign(3.1946964471328076e+307);
test_math_sign("UW6P7RV");
test_math_sign(6.998158048913039e+307);
test_math_sign(7.04341145875089e+307);
test_math_sign(1.507919014731172e+308);
test_math_sign("EGZ");
test_math_sign("LD2BCRK");
test_math_sign(-131);
test_math_sign("JXP");
test_math_sign("A2LMF");
test_math_sign(1.1573366470720799e+308);
test_math_sign(7.255719364064812e+307);
test_math_sign(1.5890077259068076e+308);
test_math_sign("3OXCGQ");
test_math_sign(4.815741026579964e+307);
test_math_sign("GKLO4");
test_math_sign(5.214098818564343e+307);
test_math_sign(1.3493741202751455e+308);
test_math_sign(-695);
test_math_sign("NDKOUPVPO");
test_math_sign("B05HJ");
test_math_sign(9.74942140411537e+307);
test_math_sign(9.575136351448197e+307);
test_math_sign(3.2472650285634816e+307);
test_math_sign(-817);
test_math_sign(-463);
test_math_sign(-707);
test_math_sign(1.2086951155307205e+308);
test_math_sign(1.6071403266909169e+308);
test_math_sign("HHHZX");
test_math_sign("7HB2D8JJ8");
test_math_sign(1.0234993114483204e+308);
test_math_sign(1.790504917598244e+308);
test_math_sign(1.2992517327703262e+308);
test_math_sign("L540");
test_math_sign(1.2770748915184502e+308);
test_math_sign(1.4222131084598224e+308);
test_math_sign(1.5338139265786692e+308);
test_math_sign(1.41655489888698e+308);
test_math_sign(1.5629138733877058e+308);
test_math_sign(1.2600405309750125e+308);
test_math_sign(8.768291835959411e+306);
test_math_sign(1.018979006209069e+308);
test_math_sign(-883);
test_math_sign(1.3372250138883167e+307);
test_math_sign(5.550283956784196e+307);
test_math_sign(-353);
test_math_sign(1.3567675042652173e+308);
test_math_sign("SVSKCZOE1W");
test_math_sign("8GPFBOB");
test_math_sign(9.578985683335597e+307);
test_math_sign("CWRTX4L");
test_math_sign(-19);
test_math_sign("FY29");
test_math_sign(1.5207037882989947e+308);
test_math_sign(4.23929679111238e+307);
test_math_sign("K670");
test_math_sign(1.457802717807657e+308);
test_math_sign("Z8OR");
test_math_sign(1.123254246786623e+308);
test_math_sign("VKIG5ZMM");
test_math_sign("OT561233W");
test_math_sign("70SYNDIP");
test_math_sign("655947OC");
test_math_sign("HSULW23E90");
test_math_sign(-621);
test_math_sign(1.8496301988293754e+307);
test_math_sign("CUC");
test_math_sign("YTNM6H");
test_math_sign("QNRD0A2");
test_math_sign(2.7954485436044685e+307);
test_math_sign(-761);
test_math_sign(-717);
test_math_sign(1.1845325014467456e+308);
test_math_sign(-389);
test_math_sign(-507);
test_math_sign(4.96322955635001e+307);
test_math_sign("6V8Z80DJ");
test_math_sign("CL8HJW");
test_math_sign(844);
test_math_sign("645NLB");
test_math_sign("10G4EI9");
test_math_sign(-181);
test_math_sign(5.616072931403926e+307);
test_math_sign(-377);
test_math_sign(5.359479173411502e+307);
test_math_sign(1.2631754608376391e+308);
test_math_sign(-719);
test_math_sign(2.7004358493988043e+307);
test_math_sign("722DK8S8XO");
test_math_sign(-51);
test_math_sign("S1ITA");
test_math_sign(5.132677203716063e+307);
test_math_sign(1.2840118293677535e+307);
test_math_sign("QCQ1");
test_math_sign("KP2R09Y0");
test_math_sign(7.377134412599804e+307);
test_math_sign("FC3S");
test_math_sign(1.5291074311152968e+308);
test_math_sign(-221);
test_math_sign(1.557554683366763e+308);
test_math_sign(1.782884953919209e+308);
test_math_sign("J014RMDKD");
test_math_sign("IF8V");
test_math_sign(1.3828672836911772e+308);
test_math_sign(1.4052950018561739e+308);
test_math_sign(1.4685952865840651e+308);
test_math_sign("TPDRY");
test_math_sign(-387);
test_math_sign("NXM54LJ0J");
test_math_sign(8.169629138826649e+307);
test_math_sign(-989);
test_math_sign("JEBUYF3V");
test_math_sign("5K29G4FR7");
test_math_sign(1.2439790072817621e+308);
test_math_sign(-763);
test_math_sign(-423);
test_math_sign("NBE5");
test_math_sign(-217);
test_math_sign(-615);
test_math_sign("8DOR");
test_math_sign(-29);
test_math_sign("6IVW3X10");
test_math_sign(9.173730850938424e+307);
test_math_sign("X7LCF0GL");
test_math_sign("3B9OMQHRAM");
test_math_sign("9HX4PXXXO");
test_math_sign("PJG0");
test_math_sign(1.677945531841376e+308);
test_math_sign(1.1810047500734826e+308);
test_math_sign(1.7781025315730542e+308);
test_math_sign(-699);
test_math_sign(2.6381741422933407e+307);
test_math_sign("BGKFI1");
test_math_sign("22D59K1KUI");
test_math_sign("D0JJ");
test_math_sign(7.182413400861955e+307);
test_math_sign(1.6009077078978571e+308);
test_math_sign(-899);
test_math_sign("3M7U9XHVVI");
test_math_sign(1.3650383312396181e+308);
test_math_sign(-981);
test_math_sign("KJXTW");
test_math_sign(1.2836210066853908e+308);
test_math_sign("RBW");
test_math_sign("ZTA5O4UH9F");
test_math_sign(1.5217630381687915e+308);
test_math_sign(8.041813963411525e+307);
test_math_sign(4.0748523605305416e+307);
test_math_sign("K1JIWE0");
test_math_sign(9.328984695307659e+306);
test_math_sign("YO44L");
test_math_sign("TMG38UYV0");
test_math_sign(490);
test_math_sign(1.2278009217546925e+308);
test_math_sign("04TPGDO49");
test_math_sign("OZXE3BRJ4E");
test_math_sign(5.83494519164406e+307);
test_math_sign("GQPMLQ9W0");
test_math_sign(5.635893452125114e+307);
test_math_sign(-767);
test_math_sign(1.2147725546703686e+308);
test_math_sign(9.201175023014643e+307);
test_math_sign(1.1642876275844735e+308);
test_math_sign(3.9431362278001725e+307);
test_math_sign(-787);
test_math_sign(4.03439649478335e+307);
test_math_sign(-335);
test_math_sign(-425);
test_math_sign(1.6871509416926464e+308);
test_math_sign(-613);
test_math_sign(-969);
test_math_sign(-851);
test_math_sign(1.2016261395010785e+308);
test_math_sign("EBSK");
test_math_sign("ULB");
test_math_sign(-913);
test_math_sign(1.5618687171585376e+308);
test_math_sign(-671);
test_math_sign(7.561411115130938e+307);
test_math_sign("CP264GDGYK");
test_math_sign(1.687706534184224e+308);
test_math_sign(9.833382814296956e+307);
test_math_sign("6VCF");
test_math_sign("WUYP1XH8MJ");
test_math_sign(-127);
test_math_sign(1.3380982363248327e+308);
test_math_sign(1.2720333593864405e+308);
test_math_sign(-771);
test_math_sign("HB45I8G59F");
test_math_sign("O3JW4U");
test_math_sign(-759);
test_math_sign(-509);
test_math_sign("CE7AUO");
test_math_sign(-249);
test_math_sign("TAZE9O3Y6");
test_math_sign(1.7561203085373791e+308);
test_math_sign(6.318580567592133e+307);
test_math_sign(6.832443133539152e+307);
test_math_sign(1.0376876111223595e+308);
test_math_sign("0P5");
test_math_sign(-357);
test_math_sign("2R4P7");
test_math_sign(8.450578291014061e+307);
test_math_sign(1.0795471840506459e+308);
test_math_sign(6.316439313219214e+307);
test_math_sign(2.3276264843379913e+307);
test_math_sign("W1Y2OMR");
test_math_sign("GVK");
test_math_sign("FTOM4");
test_math_sign("7UEH3P");
test_math_sign("BJ1DZ0YRB");
test_math_sign(-289);
test_math_sign("MDQ");
test_math_sign(7.562732002319268e+307);
test_math_sign(4.93820257080694e+306);
test_math_sign(-713);
test_math_sign(6.398341491422816e+307);
test_math_sign(-407);
test_math_sign(1.2756005096198103e+308);
test_math_sign(-375);
test_math_sign(-303);
test_math_sign(6.940391218018488e+307);
test_math_sign("T9LR71UT");
test_math_sign("GOW65O2GG");
test_math_sign(8.603121788766838e+307);
test_math_sign(-795);
test_math_sign(1.5170770329979501e+308);
test_math_sign(1.085972267085844e+308);
test_math_sign("ULKCDBS");
test_math_sign(-485);
test_math_sign("A03T");
test_math_sign(5.384581817445654e+307);
test_math_sign(-31);
test_math_sign("R5A");
test_math_sign("RPK526L");
test_math_sign("P8CRZLU1");
test_math_sign(6.023419225891739e+307);
test_math_sign(-769);
test_math_sign(4.587963681954181e+306);
test_math_sign("DOX2");
test_math_sign(1.6492058470336353e+308);
test_math_sign(2.099574145928517e+307);
test_math_sign(-81);
test_math_sign(2.3046755176776865e+306);
test_math_sign("3XM22G81Z");
test_math_sign(8.559541701712552e+307);
test_math_sign(9.460533684920628e+307);
test_math_sign("T8M4HSQ");
test_math_sign("SYGIQ");
test_math_sign(-705);
test_math_sign("V9GC7");
test_math_sign("926TTZE");
test_math_sign(1.6140220361871002e+307);
test_math_sign("AM8B4N");
test_math_sign(9.501994055410547e+307);
test_math_sign(-141);
test_math_sign("FXSZBM8");
test_math_sign("T0RM8040F");
test_math_sign("I8TJ0");
test_math_sign("P7TO");
test_math_sign(2.3792462188671927e+307);
test_math_sign("SIJTL1C");
test_math_sign(-703);
test_math_sign("43E4");
test_math_sign(-39);
test_math_sign("GL63ZYYW");
test_math_sign(-709);
test_math_sign(-479);
test_math_sign(1.2394591242922152e+308);
test_math_sign("U921XZT1");
test_math_sign(9.32015934091278e+307);
test_math_sign(-649);
test_math_sign("GVW1A34YYF");
test_math_sign(-331);
test_math_sign(6.490088251813152e+307);
test_math_sign("8PC");
test_math_sign(1.5415695289037182e+308);
test_math_sign("ML9EJXK");
test_math_sign(2.2099714362331226e+307);
test_math_sign(6.42776075366334e+307);
test_math_sign("CQRATZOW");
test_math_sign("VUZMNL");
test_math_sign(1.6236956598047133e+308);
test_math_sign(-971);
test_math_sign(-359);
test_math_sign("XLZ1AFLB");
test_math_sign("5GX");
test_math_sign("NFU2Y2T04S");
test_math_sign(1.5203110589259855e+308);
test_math_sign(-157);
test_math_sign("QFJ");
test_math_sign("7C9J6");
test_math_sign("2WZ3YG0I");
test_math_sign("675NUL");
test_math_sign(1.7786488316007792e+308);
test_math_sign(1.4145061866584414e+308);
test_math_sign("BQZWI0118Q");
test_math_sign("35ECV");
test_math_sign(202);
test_math_sign(-305);
test_math_sign(1.1014895626751442e+308);
test_math_sign(1.152685279469813e+308);
test_math_sign("9URZ1K2H46");
test_math_sign("30HCHB");
test_math_sign("UXPTB");
test_math_sign(7.760773265275419e+306);
test_math_sign(1.7673425136527177e+308);
test_math_sign(-755);
test_math_sign(-7);
test_math_sign(-259);
test_math_sign(-901);
test_math_sign(-247);
test_math_sign(-669);
test_math_sign(-995);
test_math_sign(-513);
test_math_sign("1KLVMV");
test_math_sign(2.4856957021898977e+306);
test_math_sign(-497);
test_math_sign("PGYIMW");
test_math_sign(6.629902400489319e+307);
test_math_sign("XPX");
test_math_sign(5.844069316494151e+307);
test_math_sign("CKQPGUX2FX");
test_math_sign(-749);
test_math_sign(1.0695521855966553e+308);
test_math_sign(7.136984534076105e+307);
test_math_sign(1.1733279866893242e+308);
test_math_sign(1.9098606663534848e+307);
test_math_sign("O8M982CQ1");
test_math_sign("Z62FXD");
test_math_sign("7GEB9D");
test_math_sign("87QVOEFML");
test_math_sign("X4V6MKJF8");
test_math_sign(1.188752247682471e+308);
test_math_sign("6GDIN62D54");
test_math_sign(1.6884754997678657e+308);
test_math_sign("KGZN6ZIJX3");
test_math_sign("WVAV20L1RV");
test_math_sign(7.724275196646271e+307);
test_math_sign(7.89812632195747e+307);
test_math_sign("GET");
test_math_sign("3YA7PN4MH");
test_math_sign(2.054704273695896e+307);
test_math_sign(7.528186881103951e+307);
test_math_sign("B5H");
test_math_sign(5.253903399011915e+307);
test_math_sign("61UB4TEPP");
test_math_sign(-873);
test_math_sign("3LR0L347H");
test_math_sign(4.510274171956969e+307);
test_math_sign(4.967879691766168e+307);
test_math_sign(482);
test_math_sign(1.6403323932343656e+308);
test_math_sign("X2Y4DUC643");
test_math_sign(7.412037797239004e+307);
test_math_sign("C3340PG8K");
test_math_sign(7.280052689366268e+307);
test_math_sign("X08D1Y2T4");
test_math_sign(-65);
test_math_sign("UDW2NGUQ47");
test_math_sign("JH3ZU7H");
test_math_sign(1.6436320724548633e+308);
test_math_sign("MEHFTMJ");
test_math_sign(-379);
test_math_sign(-97);
test_math_sign(6.252321949638405e+307);
test_math_sign(1.2896290735784784e+308);
test_math_sign("SSTU06ZGS4");
test_math_sign(-185);
test_math_sign(-629);
test_math_sign(-963);
test_math_sign("YSJ9");
test_math_sign(1.7225243405293923e+308);
test_math_sign("8SARIMK");
test_math_sign("OB59ST");
test_math_sign(6.61734868926915e+306);
test_math_sign(-43);
test_math_sign("7BN4E0POGD");
test_math_sign(-735);
test_math_sign("GLS62O90");
test_math_sign(3.1687088824462726e+307);
test_math_sign(2.374638678809756e+307);
test_math_sign(5.889365345680076e+307);
test_math_sign(1.5671668428296366e+308);
test_math_sign(4.904452091887378e+307);
test_math_sign("UA5");
test_math_sign("RE3P1N");
test_math_sign("D2P0JF");
test_math_sign(-215);
test_math_sign("MBEJB1Q");
test_math_sign("32BAB");
test_math_sign(6.322919078444683e+307);
test_math_sign(-939);
test_math_sign(1.116809622800925e+308);
test_math_sign("A4VJDXUW");
test_math_sign(6.274881892741565e+307);
test_math_sign(-455);
test_math_sign("LV6K4");