/*
* This file is automatically generated by Swami
*
* 2019-01-09 23:18:14.550067
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
function test_math_atan(x){
	if (Object.is( x,NaN )){
		var output = Math.atan(x);
		new TestCase("math_atan", "math_atan", NaN, output);
		test();
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.atan(x);
		new TestCase("math_atan", "math_atan", + 0, output);
		test();
		return;
		}
	if (Object.is( x,-0 )){
		var output = Math.atan(x);
		new TestCase("math_atan", "math_atan", -0, output);
		test();
		return;
		}
}



/*TESTS GENERATED AUTOMATICALLY*/
test_math_atan(1.7466465641746182e+308);
test_math_atan(5.097308381557656e+307);
test_math_atan("NTJ6ULJ44S");
test_math_atan(1.480148881844525e+308);
test_math_atan(null);
test_math_atan(1.1500978888048004e+308);
test_math_atan("NN8CCM");
test_math_atan("OP81AY");
test_math_atan("2HMIKXJB");
test_math_atan(1.0351706012995719e+308);
test_math_atan(-911);
test_math_atan(Infinity);
test_math_atan(-0);
test_math_atan(6.08602703850463e+307);
test_math_atan(/[\u0400-\u04FF]+/g);
test_math_atan(true);
test_math_atan(4.452568108562394e+307);
test_math_atan(+0);
test_math_atan(/foo/g);
test_math_atan(false);
test_math_atan(-643);
test_math_atan("D80KGL");
test_math_atan(-157);
test_math_atan("X7PRCQIRSC");
test_math_atan(-221);
test_math_atan("FSJMHZIV");
test_math_atan(/[^.]+/);
test_math_atan(-637);
test_math_atan("2E9IG");
test_math_atan(/\r\n|\r|\n/);
test_math_atan("8AARQ2J83Y");
test_math_atan(-219);
test_math_atan(8.436801134019887e+307);
test_math_atan(-675);
test_math_atan(/ab+c/);
test_math_atan("RRRL8B9HTJ");
test_math_atan(1.2259850910842384e+308);
test_math_atan(-63);
test_math_atan(-683);
test_math_atan("6QUE");
test_math_atan("P4LCJ1ME7K");
test_math_atan(1.6891324191225726e+308);
test_math_atan(1.546615640402503e+307);
test_math_atan(-243);
test_math_atan(-517);
test_math_atan(6.748072093743404e+307);
test_math_atan(1.3911502235431264e+307);
test_math_atan(1.5753096510181272e+308);
test_math_atan(NaN);
test_math_atan(1.3433773322103316e+308);
test_math_atan(1.395938065525206e+308);
test_math_atan("6SALVF");
test_math_atan("SXUZ5ZY");
test_math_atan(1.3532241649191411e+308);
test_math_atan(1.6127355660229905e+306);
test_math_atan(-871);
test_math_atan(-577);
test_math_atan(undefined);
test_math_atan(7.243608128971919e+307);
test_math_atan(8.377678292706097e+307);
test_math_atan(2.603423841512931e+307);
test_math_atan(-551);
test_math_atan(8.965525503854289e+307);
test_math_atan(-43);
test_math_atan("XGM");
test_math_atan(5.636070095313635e+307);
test_math_atan(2.261926822253182e+307);
test_math_atan(-717);
test_math_atan("RGAZM");
test_math_atan(-541);
test_math_atan(-793);
test_math_atan(-449);
test_math_atan(1.1157597745389171e+308);
test_math_atan(-901);
test_math_atan("X6SEJF2Q");
test_math_atan(4.4605360505288845e+307);
test_math_atan(-473);
test_math_atan("FSGPN5TOA");
test_math_atan(6.856039996883651e+307);
test_math_atan(-461);
test_math_atan("JZPNNWZ2B");
test_math_atan("EWIPKR");
test_math_atan(5.070985826484672e+307);
test_math_atan(6.301699530953556e+307);
test_math_atan(1.2098544900547077e+308);
test_math_atan(/yes[^]*day/);
test_math_atan(/yes.*day/);
test_math_atan("VK7UJ");
test_math_atan(-787);
test_math_atan(/(\w+)\s(\w+)/);
test_math_atan("QX31LI2T");
test_math_atan(1.5505394095451516e+307);
test_math_atan(3.5798458392180335e+307);
test_math_atan(-337);
test_math_atan(-933);
test_math_atan(-153);
test_math_atan(-251);
test_math_atan(8.248057440730573e+306);
test_math_atan(-591);
test_math_atan(-11);
test_math_atan("OWB");
test_math_atan("QE7FQEZ4K3");
test_math_atan(-497);
test_math_atan("NP4G2QQR1Q");
test_math_atan("7HZGFCYAS");
test_math_atan("L29A");
test_math_atan(-89);
test_math_atan(-857);
test_math_atan(1.0864467898934695e+307);
test_math_atan(-397);
test_math_atan("OITGO");
test_math_atan(-859);
test_math_atan(1.7165062461604278e+308);
test_math_atan("0N03AUB");
test_math_atan(8.861347909849571e+307);
test_math_atan(1.1477138114812645e+308);
test_math_atan(2.696656222243286e+307);
test_math_atan("RVBC5DQJDC");
test_math_atan("HWV8O3DD");
test_math_atan(9.94996368468101e+307);
test_math_atan(7.868902183164231e+307);
test_math_atan(2.0173553600090834e+307);
test_math_atan(4.1760937035042185e+307);
test_math_atan("RRW931A8");
test_math_atan("C0EH");
test_math_atan(4.1078193865110116e+306);
test_math_atan("CS4LLSQT");
test_math_atan(-563);
test_math_atan(-445);
test_math_atan("JDXC10D");
test_math_atan("RXHROG");
test_math_atan("6VCR");
test_math_atan("ZSVMOK1A");
test_math_atan("GCO9YZ");
test_math_atan("XR3XL8");
test_math_atan("ADCABT76E");
test_math_atan(-543);
test_math_atan(6.990726841316084e+307);
test_math_atan(-867);
test_math_atan(-91);
test_math_atan("2VNE1TE2");
test_math_atan(-139);
test_math_atan("JOO0");
test_math_atan(-327);
test_math_atan(-741);
test_math_atan(2.1984258723005095e+307);
test_math_atan(-437);
test_math_atan(-317);
test_math_atan("Q8DFJ");
test_math_atan("64X");
test_math_atan(3.7617799279031755e+307);
test_math_atan(4.719135343971014e+307);
test_math_atan(-207);
test_math_atan(3.183736755320025e+307);
test_math_atan(-699);
test_math_atan(5.401740997154248e+307);
test_math_atan("QEZ18SC");
test_math_atan("67REY9");
test_math_atan(-977);
test_math_atan(-835);
test_math_atan("HS03");
test_math_atan(-879);
test_math_atan(4.142742850057381e+306);
test_math_atan(9.243784780019837e+307);
test_math_atan("5E7F81O");
test_math_atan("0YQ1VS72Y");
test_math_atan(932);
test_math_atan(-201);
test_math_atan(-231);
test_math_atan(-571);
test_math_atan(-769);
test_math_atan(-969);
test_math_atan("ECL3VYPYH9");
test_math_atan(5.812558390132517e+307);
test_math_atan(6.616099009965481e+307);
test_math_atan(-499);
test_math_atan(-665);
test_math_atan("VTWCXL");
test_math_atan(-35);
test_math_atan("ZBKPGWW");
test_math_atan("RUI");
test_math_atan(1.6250990908439652e+308);
test_math_atan(-631);
test_math_atan(7.006532269803264e+307);
test_math_atan(7.150234764557062e+307);
test_math_atan(-41);
test_math_atan("DOHFS4");
test_math_atan(2.7242064054295395e+307);
test_math_atan("JEKCB");
test_math_atan(8.742974985826668e+307);
test_math_atan(5.081518126852336e+307);
test_math_atan("WAAYFQ9OU");
test_math_atan("XX3O4N75T7");
test_math_atan("LFP68M");
test_math_atan("8PG3MB");
test_math_atan(9.81392853597712e+307);
test_math_atan(-579);
test_math_atan(-141);
test_math_atan("KYRZ6PK9F2");
test_math_atan(1.324393657030828e+308);
test_math_atan(-365);
test_math_atan("LUXT");
test_math_atan(9.925248671143043e+307);
test_math_atan("I2WDSN");
test_math_atan("4B4E5");
test_math_atan(-623);
test_math_atan(3.3944180705618213e+307);
test_math_atan(-905);
test_math_atan(1.3774923857708348e+308);
test_math_atan(3.976578241952219e+307);
test_math_atan(1.1761764313640221e+308);
test_math_atan("3TOATPZ");
test_math_atan(2.641535761307399e+307);
test_math_atan("YIA56SHB");
test_math_atan(3.0805526332732256e+307);
test_math_atan(6.402981771680306e+307);
test_math_atan(3.0595557080653174e+306);
test_math_atan("OVC4U");
test_math_atan("WB7VS838O8");
test_math_atan(1.0037110986919955e+308);
test_math_atan("GBUTA");
test_math_atan(-897);
test_math_atan(4.924317047546246e+307);
test_math_atan("V3BAC4");
test_math_atan(-893);
test_math_atan("NLPFN");
test_math_atan(-703);
test_math_atan("02AD");
test_math_atan(1.0284393490688964e+308);
test_math_atan(1.7526286407474925e+308);
test_math_atan(7.12416120753548e+307);
test_math_atan(3.6109184373637827e+307);
test_math_atan(1.2464954606092282e+308);
test_math_atan("685B2");
test_math_atan(-481);
test_math_atan(7.629346662509498e+307);
test_math_atan("2FTMR1JT2W");
test_math_atan(1.5264096713652094e+308);
test_math_atan("NKM2573");
test_math_atan("Z8GN9OT");
test_math_atan(-195);
test_math_atan("2C6N");
test_math_atan(-995);
test_math_atan(6.893023430202541e+307);
test_math_atan(2.397929469596803e+307);
test_math_atan("C0RFGVTE3");
test_math_atan(-341);
test_math_atan(-275);
test_math_atan(-413);
test_math_atan("B8I1ZV68N");
test_math_atan("5D23");
test_math_atan("KYU2DNXJPV");
test_math_atan(2.8156823379403827e+307);
test_math_atan(-261);
test_math_atan("O9ZE40SUKO");
test_math_atan(-679);
test_math_atan(-373);
test_math_atan("5UYNJYJKMH");
test_math_atan(-567);
test_math_atan("XXS");
test_math_atan(4.695668744658484e+307);
test_math_atan(6.282344640329793e+307);
test_math_atan("6HVXY7LY37");
test_math_atan(9.080521238424294e+307);
test_math_atan(5.411909493310771e+306);
test_math_atan(5.61553171520976e+307);
test_math_atan("IJ7");
test_math_atan(-403);
test_math_atan("S28DT");
test_math_atan(-529);
test_math_atan(1.1107851704064912e+308);
test_math_atan(9.650264596174217e+307);
test_math_atan("JCS1");
test_math_atan("MEDBWZDC");
test_math_atan("CVQXNEM");
test_math_atan(2.0593387004793757e+307);
test_math_atan(-59);
test_math_atan(1.246862918856438e+308);
test_math_atan("0EZ");
test_math_atan("IJ5M86T");
test_math_atan(1.5803627232856717e+308);
test_math_atan("NHY2YKMUK");
test_math_atan("A1OGUZDXV");
test_math_atan(-713);
test_math_atan("KXF");
test_math_atan(-627);
test_math_atan(3.1709792662057985e+307);
test_math_atan(8.56681527604197e+307);
test_math_atan(-423);
test_math_atan("3KM");
test_math_atan(1.214456367255818e+308);
test_math_atan(-239);
test_math_atan("3E3XW2BJ");
test_math_atan(1.1439919831984792e+308);
test_math_atan("02MDUY9TI6");
test_math_atan(4.894009742563511e+307);
test_math_atan(-265);
test_math_atan(-889);
test_math_atan(-135);
test_math_atan(1.0590045533225142e+308);
test_math_atan(-51);
test_math_atan(1.0942519762738563e+308);
test_math_atan(1.3962062425339944e+308);
test_math_atan("Z7DB");
test_math_atan("A28J9U");
test_math_atan("R8OX01E8XR");
test_math_atan("979HL6B");
test_math_atan(1.3313064377559818e+308);
test_math_atan(1.1459246894432776e+308);
test_math_atan(1.6322687478752428e+308);
test_math_atan(1.7033355601317646e+308);
test_math_atan(1.2974292169976678e+308);
test_math_atan(1.5530358737782829e+308);
test_math_atan(1.4668176706505745e+307);
test_math_atan(-655);
test_math_atan(-23);
test_math_atan(1.2265778721952336e+308);
test_math_atan(2.0069294668864166e+307);
test_math_atan("AU0F3D6");
test_math_atan(-583);
test_math_atan(-233);
test_math_atan("YT26PJ");
test_math_atan("MCXZGYHYIX");
test_math_atan("LVT");
test_math_atan("3D0");
test_math_atan("7CY");
test_math_atan(-547);
test_math_atan(1.2411778528236274e+307);
test_math_atan(-831);
test_math_atan(-947);
test_math_atan(-681);
test_math_atan(3.5176375039519894e+307);
test_math_atan(1.6759951803707322e+308);
test_math_atan(-603);
test_math_atan(9.573167114634668e+307);
test_math_atan("CO47Q22GUD");
test_math_atan("T1N");
test_math_atan("DLIL27");
test_math_atan(8.98069786879471e+307);
test_math_atan(1.2868674567099826e+308);
test_math_atan(180);
test_math_atan("O54LM60");
test_math_atan(2.9828188561108883e+305);
test_math_atan(-97);
test_math_atan("UIP9NNLZK");
test_math_atan("E5DB");
test_math_atan(-17);
test_math_atan("R1Z");
test_math_atan("F0LCW16AAG");
test_math_atan(1.6835681219171382e+308);
test_math_atan(5.851984629145173e+307);
test_math_atan(-913);
test_math_atan("OWK43");
test_math_atan("FQAC9Z8Z1B");
test_math_atan("33E5");
test_math_atan(-61);
test_math_atan("W7W06P1HL");
test_math_atan("52X53MWQAK");
test_math_atan(1.3647797344968873e+308);
test_math_atan("P90EJ");
test_math_atan(-855);
test_math_atan(6.340507179662771e+307);
test_math_atan("QS1");
test_math_atan(-781);
test_math_atan("YQ9XGIG042");
test_math_atan("4YU9Y6QT7");
test_math_atan(-77);
test_math_atan("NANJA49DP");
test_math_atan(2.717187273748005e+307);
test_math_atan("0PA7X28N1E");
test_math_atan("J9ERL1YPES");
test_math_atan("8HT3");
test_math_atan(-753);
test_math_atan(8.674839259671219e+307);
test_math_atan(3.60117007274861e+307);
test_math_atan(-355);
test_math_atan(-909);
test_math_atan(1.595950699456152e+308);
test_math_atan(-861);
test_math_atan(1.5931653159243185e+308);
test_math_atan(-249);
test_math_atan("W88R7C6");
test_math_atan(1.1063233855331862e+308);
test_math_atan(4.7174933650496657e+306);
test_math_atan(1.4445999581160061e+308);
test_math_atan(1.6641885030756562e+308);
test_math_atan(122);
test_math_atan("TJUY");
test_math_atan("4PJ3VCL8");
test_math_atan(2.3807091837384347e+307);
test_math_atan(1.9704433734878976e+307);
test_math_atan("04SIYE");
test_math_atan(-405);
test_math_atan("Q9UWTCTX");
test_math_atan("DGCJ8L1C");
test_math_atan(6.239318324411808e+307);
test_math_atan(-169);
test_math_atan(9.392188458751494e+307);
test_math_atan(1.558710202484752e+307);
test_math_atan(9.035302480647524e+307);
test_math_atan(1.83355893493633e+307);
test_math_atan("PLY6CQKCY2");
test_math_atan(1.2553085370427127e+308);
test_math_atan("NSLJY");
test_math_atan("0YY41E");
test_math_atan(4.588558313112093e+307);
test_math_atan("M4DJY");
test_math_atan(-305);
test_math_atan(-439);
test_math_atan(-719);
test_math_atan("NYJUNV0");
test_math_atan("Z68PGU4");
test_math_atan(-179);
test_math_atan("LHU1R7G");
test_math_atan(2.8749994990756437e+307);
test_math_atan("I3I7ZPIP");
test_math_atan(7.877581208469573e+307);
test_math_atan(8.823489272688659e+307);
test_math_atan("J1THK0Z1AQ");
test_math_atan("BJ19J");
test_math_atan(-605);
test_math_atan(-379);
test_math_atan(5.992616275049417e+307);
test_math_atan(1.1000819794033136e+308);
test_math_atan("PORP");
test_math_atan(-311);
test_math_atan(-193);
test_math_atan("RG8C");
test_math_atan(1.9955329327336642e+307);
test_math_atan(5.436391941466937e+307);
test_math_atan(6.525621325014476e+307);
test_math_atan(8);
test_math_atan(3.255292863698458e+307);
test_math_atan(8.339501407852706e+307);
test_math_atan(-549);
test_math_atan("XDF");
test_math_atan("AWD5WCV5S3");
test_math_atan(-325);
test_math_atan(1.7793893437750938e+308);
test_math_atan(2.146354512215066e+307);
test_math_atan(8.975268924619202e+307);
test_math_atan("UFSEHRXJM");
test_math_atan("VKUSPN2VV");
test_math_atan(1.6219859380644617e+307);
test_math_atan(3.4855061509733984e+307);
test_math_atan("DES4");
test_math_atan(-581);
test_math_atan("4YJ");
test_math_atan(4.2241774570430143e+307);
test_math_atan("2AMEGY24A6");
test_math_atan("22MX6B2E");
test_math_atan("5DQ7ZM");
test_math_atan("ZK7W78AH6");
test_math_atan(-545);
test_math_atan("6DPWMW");
test_math_atan("8FRM");
test_math_atan(7.433170555946265e+307);
test_math_atan(1.75657335371203e+308);
test_math_atan("WX5GNI5D");
test_math_atan(1.514327457062902e+308);
test_math_atan("UA0OUZ");
test_math_atan(5.429541395788448e+307);
test_math_atan(1.3884995189743415e+308);
test_math_atan(3.489632746094604e+307);
test_math_atan("XKE");
test_math_atan("2JA8SZI");
test_math_atan("VJ6Z5AI");
test_math_atan(-503);
test_math_atan("4ZU0NDSIZ");
test_math_atan(1.2934135672881205e+308);
test_math_atan("4T7");
test_math_atan(1.2988935230062888e+308);
test_math_atan(1.5057382301925018e+306);
test_math_atan(-131);
test_math_atan("KLOQR3RC3");
test_math_atan("2LGXUOBKTT");
test_math_atan(2.6351829129565273e+307);
test_math_atan(1.747713263528584e+308);
test_math_atan("IC5");
test_math_atan("I04HU237PF");
test_math_atan("2NIMVASY");
test_math_atan(6.22747008204842e+307);
test_math_atan(-597);
test_math_atan(9.263790002764948e+307);
test_math_atan(2.3329247591684334e+307);
test_math_atan(442);
test_math_atan(-979);
test_math_atan("9YO1267XY");
test_math_atan(3.1124360218398497e+307);
test_math_atan(-709);
test_math_atan("70K5IP1XX");
test_math_atan(1.3522434479850864e+308);
test_math_atan(1.2889365204504659e+308);
test_math_atan(-209);
test_math_atan("RJBNM9ZKN");
test_math_atan(-587);
test_math_atan(2.9742247395601156e+307);
test_math_atan(-951);
test_math_atan("DAOONBVA");
test_math_atan("U7C");
test_math_atan("T1IAQ7");
test_math_atan("2X384");
test_math_atan("RRGNMDLL");
test_math_atan("J0XQPRX8");
test_math_atan(3.4532853361989177e+307);
test_math_atan(9.902396031630249e+307);
test_math_atan("93UAPQOBNU");
test_math_atan("60E9CT6Z8");
test_math_atan(4.80025847166053e+307);
test_math_atan(-755);
test_math_atan(-185);
test_math_atan("R3J708");
test_math_atan(-21);
test_math_atan("R57X7U0");
test_math_atan(7.758533607490069e+307);
test_math_atan(-457);
test_math_atan(8.479494186954837e+307);
test_math_atan(-993);
test_math_atan("7KONY");
test_math_atan("UFCEIS38FO");
test_math_atan(1.4125880434268762e+308);
test_math_atan(-425);
test_math_atan(-297);
test_math_atan("JJ2Z4H5L1L");
test_math_atan("MQZ");
test_math_atan(1.1606478052631847e+308);
test_math_atan(6.849347348102624e+307);
test_math_atan("SZCY6M");
test_math_atan(-751);
test_math_atan("M5U");
test_math_atan("3JQP76D");
test_math_atan(1.2024577838178235e+308);
test_math_atan(1.0987321676950045e+308);
test_math_atan("W5ZPDR");
test_math_atan(1.5265069521541163e+308);
test_math_atan("8FQR0");
test_math_atan(-697);
test_math_atan("96W");
test_math_atan(-557);
test_math_atan("SABL");
test_math_atan(5.173844811579573e+307);
test_math_atan("EDJEQ6QEO8");
test_math_atan(3.5441887792611304e+307);
test_math_atan(6.742890010190064e+307);
test_math_atan("9H8");
test_math_atan("OGWYZJXTY");
test_math_atan(-475);
test_math_atan("2506F6");
test_math_atan(-575);
test_math_atan("RI9");
test_math_atan("9CMJ2L9H");
test_math_atan("R75BNFM7DJ");
test_math_atan(-279);
test_math_atan(3.870067189598845e+307);
test_math_atan(1.5808898792034157e+308);
test_math_atan("HBUE0CR");
test_math_atan("O3Y665RPBM");
test_math_atan("4A8ZK17Q4K");
test_math_atan("LNHVM");
test_math_atan(-811);
test_math_atan(534);
test_math_atan("G9SD1");
test_math_atan(-3);
test_math_atan("D1CCRM");
test_math_atan(4.0726136685993827e+307);
test_math_atan(7.360584802949399e+307);
test_math_atan("YZMOS152Y");
test_math_atan(3.894815522471551e+307);
test_math_atan(-323);
test_math_atan(-983);
test_math_atan("II4R7");
test_math_atan("58B6XY1");
test_math_atan(3.142885751756665e+307);
test_math_atan(4.439556546640954e+307);
test_math_atan("JXRP");
test_math_atan(-667);
test_math_atan(-801);
test_math_atan(-963);
test_math_atan("ZCAQRM");
test_math_atan("WQMH746S");
test_math_atan("Q3YX");
test_math_atan("DB5L0J2QM");
test_math_atan(3.18849094309444e+307);
test_math_atan(-495);
test_math_atan(1.168767663442311e+308);
test_math_atan("WRX3ESYMBH");
test_math_atan(-789);
test_math_atan(1.316099711424351e+308);
test_math_atan("E8UVQBHZ9N");
test_math_atan("10H");
test_math_atan("8X1K5V5G");
test_math_atan(4.477412080231158e+307);
test_math_atan(1.2539858423901472e+308);
test_math_atan(1.1460181879203722e+308);
test_math_atan("FIGIP");
test_math_atan("AYE8WWGNT8");
test_math_atan("96ZRQFGI");
test_math_atan(-67);
test_math_atan(1.491609415829906e+308);
test_math_atan(1.3887822880315823e+308);
test_math_atan("MH02G9B11");
test_math_atan(-823);
test_math_atan(1.6515806978988074e+307);
test_math_atan(-891);
test_math_atan("HKNDGS");
test_math_atan(1.6540103479233933e+308);
test_math_atan(-863);
test_math_atan(-245);
test_math_atan(-745);
test_math_atan("4A8E6IM");
test_math_atan(-511);
test_math_atan("WDCYDME");
test_math_atan(-505);
test_math_atan(-949);
test_math_atan(1.750097628892066e+308);
test_math_atan(-27);
test_math_atan(1.1659014094151091e+308);
test_math_atan(2.6248997283837583e+307);
test_math_atan("48HG7Q");
test_math_atan(1.4059517746130014e+308);
test_math_atan(5.321763489838668e+307);
test_math_atan(1.7672488439986314e+308);
test_math_atan(3.3562314293505104e+307);
test_math_atan(-471);
test_math_atan("BISOP");
test_math_atan(1.3769979805181573e+308);
test_math_atan(3.177241189559595e+307);
test_math_atan(4.959079664144149e+307);
test_math_atan(9.064186750775405e+307);
test_math_atan(3.87097360594614e+307);
test_math_atan("NTNQLJ1IA8");
test_math_atan(2.7931661849190437e+307);
test_math_atan("3L3AJ");
test_math_atan(-119);
test_math_atan(1.6514947415019392e+308);
test_math_atan(1.5939100735932856e+308);
test_math_atan(1.5958963696366006e+308);
test_math_atan(-945);
test_math_atan(6.439315593771798e+307);
test_math_atan(-489);
test_math_atan("2XRNPZ");
test_math_atan(9.993794154256867e+307);
test_math_atan(8.259097007739018e+307);
test_math_atan(-147);
test_math_atan("GB7BWU2CM");
test_math_atan(-797);
test_math_atan("ZDHC38ZDH");
test_math_atan("S292MB8");
test_math_atan(-815);
test_math_atan(-589);
test_math_atan("WRK59HX");
test_math_atan(1.6571618283165631e+308);
test_math_atan(-199);
test_math_atan(2.6889637370670474e+307);
test_math_atan(-737);
test_math_atan(1.6865893354784275e+308);
test_math_atan(1.342006451479164e+308);
test_math_atan("IKP2W7HO");
test_math_atan("SVX9");
test_math_atan(-319);
test_math_atan(6.95754048209403e+307);
test_math_atan(9.270274757482265e+307);
test_math_atan(-929);
test_math_atan(-723);
test_math_atan(-807);
test_math_atan(-927);
test_math_atan("7A9L7J6");
test_math_atan(-803);
test_math_atan(1.4308375384486825e+308);
test_math_atan(1.283971613620204e+308);
test_math_atan("Z3T9");
test_math_atan(1.3282946787082328e+308);
test_math_atan("HXMP3CO");
test_math_atan(1.538810643727536e+308);
test_math_atan("2C7HPT");
test_math_atan("3N6OCYU6");
test_math_atan(1.1177632984018377e+308);
test_math_atan(1.0673705392353508e+308);
test_math_atan(1.4280618046645654e+308);
test_math_atan(4.0260200603674286e+307);
test_math_atan("EM0BFQZ");
test_math_atan(1.7754819855183968e+308);
test_math_atan("F26KH7LR");
test_math_atan(-765);
test_math_atan(7.621892410954208e+307);
test_math_atan(-455);
test_math_atan("43ALS");
test_math_atan("BW6HMI6Z");
test_math_atan(-81);
test_math_atan("7MIPV");
test_math_atan(2.880435092831994e+307);
test_math_atan("SP2OEVVQBG");
test_math_atan(-767);
test_math_atan(6.744007111294924e+306);
test_math_atan("IKNF");
test_math_atan("9TN");
test_math_atan(2.0219118591155372e+306);
test_math_atan("QZJ4TZU0S");
test_math_atan(-501);
test_math_atan(-817);
test_math_atan(-895);
test_math_atan("TOSPG7WD0");
test_math_atan(-869);
test_math_atan("X05");
test_math_atan(1.0041252732491704e+308);
test_math_atan("86V");
test_math_atan(-409);
test_math_atan("79BZ");
test_math_atan(1.7063636927077853e+308);
test_math_atan(-825);
test_math_atan(-47);
test_math_atan("FTXSWPF");
test_math_atan("XUMN3");
test_math_atan(1.419233449376096e+308);
test_math_atan(-295);
test_math_atan(1.0144132636121683e+308);
test_math_atan(1.3473042945265958e+308);
test_math_atan(-299);
test_math_atan(-163);
test_math_atan(2.112003724368049e+307);
test_math_atan(1.5858504037839722e+308);
test_math_atan(9.697751186807212e+307);
test_math_atan(7.063036188727998e+307);
test_math_atan(-71);
test_math_atan(1.6104083710358123e+308);
test_math_atan(1.6393730548152818e+308);
test_math_atan("MGOKW5ANW0");
test_math_atan(5.73372157626075e+307);
test_math_atan(-13);
test_math_atan(-883);
test_math_atan(-875);
test_math_atan(1.3111869292790844e+308);
test_math_atan(-925);
test_math_atan("TP0XYO");
test_math_atan(-25);
test_math_atan("QNXLY09QQC");
test_math_atan(1.7892287276353993e+308);
test_math_atan("UEK21P");
test_math_atan(7.309728140027512e+307);
test_math_atan(0x1123);
test_math_atan(3.205460533546374e+307);
test_math_atan(9.52862522380885e+307);
test_math_atan("IFQ060");
test_math_atan(5.0934467885607655e+305);
test_math_atan("1P5");
test_math_atan(3.3954383029507963e+307);
test_math_atan(1.384913441561096e+308);
test_math_atan("Y7ICVZIV5");
test_math_atan("23P0V1J");
test_math_atan(4.659721829258667e+307);
test_math_atan(1.7694693939927399e+308);
test_math_atan(4.2740636321741195e+305);
test_math_atan("2BXVERG");
test_math_atan(1.496470303955592e+308);
test_math_atan(-15);
test_math_atan(1.1013148910422625e+307);
test_math_atan("Q6IH");
test_math_atan(1.6900609242658994e+308);
test_math_atan(6.702523908380337e+307);
test_math_atan(1.1664923960179893e+308);
test_math_atan(1.3146980051840105e+308);
test_math_atan("KYALZ56MDE");
test_math_atan(9.195258868460101e+307);
test_math_atan(6.217185930017127e+307);
test_math_atan(9.030506584118796e+306);
test_math_atan(-809);
test_math_atan("XONH8C4Z7");
test_math_atan(1.2391320784611556e+308);
test_math_atan(-399);
test_math_atan(1.0377322894695287e+308);
test_math_atan(7.922531195710535e+307);
test_math_atan(1.4154300599825961e+308);
test_math_atan("84DZCN2");
test_math_atan(1.195208719571593e+308);
test_math_atan(6.925194286755244e+307);
test_math_atan(1.141539581018077e+308);
test_math_atan(1.1663581206110543e+308);
test_math_atan(-527);
test_math_atan(1.4859393713557938e+308);
test_math_atan(2.3444556826131267e+307);
test_math_atan("OS60E");
test_math_atan("32USHQ");
test_math_atan(5.971744716702099e+307);
test_math_atan(1.5717504353359664e+308);
test_math_atan(1.870347500483487e+307);
test_math_atan("BGLJVX");
test_math_atan(4.728633785839769e+307);
test_math_atan(-561);
test_math_atan("2Y3");
test_math_atan(-931);
test_math_atan(1.8240995245039694e+307);
test_math_atan(-791);
test_math_atan(-669);
test_math_atan(1.3773808690303636e+308);
test_math_atan("4LBOVV");
test_math_atan("PCO8K");
test_math_atan(2.2356696036971122e+307);
test_math_atan(1.2757256406345016e+308);
test_math_atan(6.786834911980084e+307);
test_math_atan(6.928912706227504e+307);
test_math_atan("L5IXB5X6N");
test_math_atan(-617);
test_math_atan(1.3973345895259712e+308);
test_math_atan(3.235056770257201e+307);
test_math_atan("O8WN3Y0DSF");
test_math_atan(1.649544384506761e+308);
test_math_atan(1.2667677076342965e+308);
test_math_atan("AZRJW");
test_math_atan("IN00TN02TE");
test_math_atan(-287);
test_math_atan(-165);
test_math_atan(-689);
test_math_atan(1.4967564732115156e+308);
test_math_atan("PAWZG04");
test_math_atan("VKKL31EKGW");
test_math_atan(-463);
test_math_atan(1.2255867350984127e+308);
test_math_atan(-877);
test_math_atan(1.6448307993045942e+308);
test_math_atan(1.7278911406535605e+308);
test_math_atan("PSXR9");
test_math_atan(-647);
test_math_atan(-935);
test_math_atan(2.9151780135778103e+307);
test_math_atan(9.700630850416985e+307);
test_math_atan("Y22LS6");
test_math_atan(-31);
test_math_atan(-645);
test_math_atan(8.040564951973416e+307);
test_math_atan("F9M2I");
test_math_atan(-961);
test_math_atan(1.7436640693059761e+308);
test_math_atan(1.1909547317283344e+308);
test_math_atan(1.4702353101960314e+308);
test_math_atan(-651);
test_math_atan("7SF");
test_math_atan(4.888410169305251e+307);
test_math_atan("5U3GFGX");
test_math_atan("A14RKCQ");
test_math_atan(-277);
test_math_atan(4.335204918304079e+307);
test_math_atan("6XDKQ");
test_math_atan("JWQF");
test_math_atan(-749);
test_math_atan("HMYM3WDX54");
test_math_atan("7VNM");
test_math_atan("9U4ZS");
test_math_atan("VCK1J70Q");
test_math_atan(1.3878696454102923e+308);
test_math_atan(4.770622287709061e+307);
test_math_atan("BK5BGO86L");
test_math_atan(8.544430355670823e+306);
test_math_atan(9.737923795105385e+307);
test_math_atan(7.192961231997504e+306);
test_math_atan("D7C4KS55KT");
test_math_atan(1.1952574519809545e+308);
test_math_atan("FI4KVXK3");
test_math_atan("4JC7GHZ5X");
test_math_atan("54HPS");
test_math_atan("USV863BV");
test_math_atan("JKWIP857");
test_math_atan(-313);
test_math_atan(-107);
test_math_atan(4.127323298375656e+307);
test_math_atan(1.0749649350639246e+308);
test_math_atan("M3Z5MB03B");
test_math_atan(-959);
test_math_atan(1.2460940109343436e+308);
test_math_atan(-921);
test_math_atan("CL8UGS6");
test_math_atan(4.1464876914676657e+307);
test_math_atan(1.898163751320844e+307);
test_math_atan(1.508375863054767e+307);
test_math_atan(8.973477785962986e+307);
test_math_atan(296);
test_math_atan("T0G");
test_math_atan(9.004890761272783e+307);
test_math_atan(-161);
test_math_atan(1.2679903409264083e+308);
test_math_atan(-981);
test_math_atan(5.005785173740616e+307);
test_math_atan("JFWVX961N3");
test_math_atan(1.0075093298536258e+308);
test_math_atan(1.49946183158344e+308);
test_math_atan("EKWA");
test_math_atan(1.4471494996238243e+308);
test_math_atan(7.692227232566979e+307);
test_math_atan(-729);
test_math_atan("YFTER7E");
test_math_atan(3.899479468780518e+307);
test_math_atan(1.0099406359703739e+308);
test_math_atan(1.5745921184176585e+308);
test_math_atan("AD2");
test_math_atan(1.2522095332969054e+308);
test_math_atan(1.5308608172701756e+307);
test_math_atan(1.1131827569712301e+308);
test_math_atan("RRG1");
test_math_atan("731");
test_math_atan(4.714880044692086e+307);
test_math_atan(-123);
test_math_atan(-727);
test_math_atan(-763);
test_math_atan(4.617918552993054e+307);
test_math_atan(4.0201968854411326e+307);
test_math_atan(7.335165110973161e+307);
test_math_atan(-285);
test_math_atan("DPA0GE");
test_math_atan("N4MNBT7");
test_math_atan(-383);
test_math_atan(7.161311971446006e+307);
test_math_atan(-997);
test_math_atan(-111);
test_math_atan(1.522430065875123e+308);
test_math_atan(1.0156026656005197e+308);
test_math_atan("HXJ1OQ2V6");
test_math_atan(1.5963019088191066e+308);
test_math_atan(-257);
test_math_atan("4P9NXJVKF");
test_math_atan("QPT");
test_math_atan(5.526680169376034e+307);
test_math_atan(9.215071827334947e+307);
test_math_atan(-301);
test_math_atan("IJ7U1EY2S9");
test_math_atan("U03FZA76");
test_math_atan(8.93123747944513e+307);
test_math_atan(1.015859474330255e+308);
test_math_atan(-49);
test_math_atan("UG7Z7SSF");
test_math_atan("DLA");
test_math_atan(6.346211587612277e+306);
test_math_atan(-225);
test_math_atan(1.3736183771614818e+308);
test_math_atan("8PJF11C");
test_math_atan("9MBN8T");
test_math_atan(5.441246994029986e+307);
test_math_atan(-843);
test_math_atan("XLSLAK5ZM5");
test_math_atan(1.103779974345658e+308);
test_math_atan(-215);
test_math_atan("3XDN");
test_math_atan("7QKTXUUM");
test_math_atan("3EG7R");
test_math_atan("93E7LTVK8D");
test_math_atan("817HDI");
test_math_atan("SF0YME");
test_math_atan(5.657332154596763e+307);
test_math_atan("UND1CIOS8");
test_math_atan("Z148");
test_math_atan("XEWAMGE0Z8");
test_math_atan("3VXI61");
test_math_atan(-779);
test_math_atan("8DHGM9AHCY");
test_math_atan(506);
test_math_atan(1.7602929336318223e+308);
test_math_atan(6.088308786149875e+307);
test_math_atan(1.3145218922136267e+308);
test_math_atan("4NPK");
test_math_atan(8.544775647533188e+305);
test_math_atan("G3HL9SZ9");
test_math_atan("NDCCDU9J");
test_math_atan("KC07");
test_math_atan("JM0");
test_math_atan(-101);
test_math_atan("GDL2H");
test_math_atan(4.238923473385785e+307);
test_math_atan(4.2823217484641114e+307);
test_math_atan(8.285991418947726e+307);
test_math_atan("ZS6U");
test_math_atan(-747);
test_math_atan("FX0ZB");
test_math_atan("GCELH5J");
test_math_atan(1.7877827288423325e+308);
test_math_atan(-419);
test_math_atan(1.3513955908324018e+308);
test_math_atan("KGIRQ");
test_math_atan("076R588BF");
test_math_atan(1.3031335705281331e+308);
test_math_atan("GPR0IZI");
test_math_atan(1.2805514355440042e+308);
test_math_atan("FJ7GXPRV");
test_math_atan(1.1322508596770436e+308);
test_math_atan("WTTN");
test_math_atan(-205);
test_math_atan(-639);
test_math_atan(6.550540340762317e+307);
test_math_atan(1.256143616263419e+308);
test_math_atan("0R0");
test_math_atan("EPLZ");
test_math_atan("PUD6PKS7SO");
test_math_atan(-991);
test_math_atan("YHF9Z");
test_math_atan("R90");
test_math_atan("JPHAOG");
test_math_atan("S2K2I6TUQ");
test_math_atan(7.948688573003655e+306);
test_math_atan(6.644191412494538e+307);
test_math_atan(1.7632652022853973e+308);
test_math_atan("97ZITGX");
test_math_atan(1.4579476524153916e+308);
test_math_atan(1.6450467424774408e+308);
