/*
* This file is automatically generated by Swami
*
* 2019-08-07 16:49:31.877559
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
function test_set(randominput,iterable){
	if (( typeof  NewTarget === 'undefined' )){
		 try{
			var output = randominput.Set(iterable);
			 return;
		}catch(e){
			new TestCase("set", "set", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
}



/*TESTS GENERATED AUTOMATICALLY*/
test_set(1.3100652691377069e+307, NaN);
test_set(-351, true);
test_set("C4KE8ZU8", "LVX5EJDP7");
test_set(NaN, 1.5555352784515184e+308);
test_set(3.3533134503932806e+307, "A3KVBW");
test_set(true, "UK7K58RIJ");
test_set(1.7146566959425912e+308, true);
test_set("UK4TGEV", Infinity);
test_set(-971, /(\w+)\s(\w+)/);
test_set(/\r\n|\r|\n/, 1.0791255969355954e+308);
test_set("O6G", -325);
test_set(true, false);
test_set(6.289256081706372e+306, true);
test_set(false, /yes[^]*day/);
test_set(true, "H2EGU9I");
test_set(/(\w+)\s(\w+)/, /[\u0400-\u04FF]+/g);
test_set(-877, 1.509194337171338e+308);
test_set(-689, null);
test_set(-791, true);
test_set(/\r\n|\r|\n/, true);
test_set(true, Infinity);
test_set(-0, -237);
test_set(/yes[^]*day/, true);
test_set(NaN, /ab+c/);
test_set(Infinity, 1.730919358531543e+308);
test_set(true, -571);
test_set(1.154587934751594e+308, false);
test_set(/[\u0400-\u04FF]+/g, -403);
test_set(/yes[^]*day/, false);
test_set("VF80PK", 1.5706267209726165e+306);
test_set(/ab+c/, /yes[^]*day/);
test_set(false, -0);
test_set(true, /yes.*day/);
test_set(true, null);
test_set(9.443146755571222e+307, /[^.]+/);
test_set(undefined, "R6DVQ");
test_set(-929, 1.0227920035237179e+308);
test_set("N56XCPX6SO", undefined);
test_set(1.4451798145145744e+308, null);
test_set(-39, 1.9731696783349213e+307);
test_set("NFFN11JIN", 6.536502384208247e+307);
test_set(-973, "8UWRK2LGZ");
test_set(5.281799468824245e+307, undefined);
test_set(/foo/g, /ab+c/);
test_set(false, /yes.*day/);
test_set(1.647427251808824e+308, 4.1003126484383976e+307);
test_set(true, -905);
test_set(undefined, -557);
test_set(-0, true);
test_set(/ab+c/, "DCR");
test_set(/[\u0400-\u04FF]+/g, false);
test_set(+0, -433);
test_set(/ab+c/, "RXUIR7");
test_set(7.547375448084799e+307, -723);
test_set(/foo/g, false);
test_set(1.6925400242785661e+308, "6OZ2T2YI6");
test_set(undefined, 1.6662769067654951e+308);
test_set(-587, +0);
test_set(true, -461);
test_set(true, 1.0872655825481557e+308);
test_set(true, "7L0EZG4");
test_set(1.1470268476957185e+308, NaN);
test_set(-71, -7);
test_set(false, /\r\n|\r|\n/);
test_set(-57, "5X3QUUQ865");
test_set("XESII", 2.367698011060944e+307);
test_set("EC5NID4H5", false);
test_set(/[^.]+/, /\r\n|\r|\n/);
test_set(6.059329395822262e+307, -697);
test_set(/yes.*day/, -601);
test_set(-975, -0);
test_set(false, false);
test_set("67Y8SXI6G", /\r\n|\r|\n/);
test_set(/[\u0400-\u04FF]+/g, null);
test_set(Infinity, /(\w+)\s(\w+)/);
test_set(true, "I4KH8");
test_set(true, /yes[^]*day/);
test_set(/\r\n|\r|\n/, "UTVVS1A");
test_set(1.4222715151757683e+308, /[\u0400-\u04FF]+/g);
test_set(9.332269077445523e+307, /[\u0400-\u04FF]+/g);
test_set(1.5492774787025538e+308, /[^.]+/);
test_set(false, "NYQGQ1");
test_set(false, null);
test_set(9.09244827322813e+306, "DQS10RY9");
test_set(/yes[^]*day/, 1.3903127563807371e+308);
test_set(-211, -839);
test_set(1.326084859475632e+308, Infinity);
test_set(-957, /(\w+)\s(\w+)/);
test_set(-887, "XKF6D7UN");
test_set(-973, /[^.]+/);
test_set(2.0017698734833565e+307, "3TOL1QN");
test_set(3.2981139171474944e+307, /(\w+)\s(\w+)/);
test_set(Infinity, "053EK");
test_set("OQJ6D5R", 6.240782023072613e+307);
test_set(NaN, "XQZ");
test_set("QZEV", -79);
test_set(-333, NaN);
test_set(false, -757);
test_set(false, -973);
test_set(NaN, true);
test_set("MDJZW", /foo/g);
test_set(1.3543824976623033e+308, "3NFE");
test_set(true, 2.518156149272749e+307);
test_set("TRTO59G", /yes.*day/);
test_set(-767, +0);
test_set(1.0831584310656308e+308, false);
test_set(-599, +0);
test_set(-881, -813);
test_set("PIYP7JYS1I", -283);
test_set(-601, /ab+c/);
test_set("JSTV5FN", true);
test_set(1.537860526688993e+308, /[\u0400-\u04FF]+/g);
test_set(Infinity, NaN);
test_set(8.23294734132013e+307, "BY2983C");
test_set(6.588315587135445e+306, -791);
test_set(1.3502273694328957e+308, /foo/g);
test_set(/foo/g, -0);
test_set(-803, "Y6XI");
test_set(-849, /(\w+)\s(\w+)/);
test_set(1.0821779132170352e+308, true);
test_set(-767, "ZWY3V1HQ57");
test_set("AS9UMSFF", /yes.*day/);
test_set("CM6LD", -641);
test_set(-801, /[\u0400-\u04FF]+/g);
test_set(+0, 1.7265039175600477e+307);
test_set(Infinity, false);
test_set(9.02199325822526e+307, /[^.]+/);
test_set(-589, -739);
test_set(true, -187);
test_set(1.1916883088642322e+308, true);
test_set(true, "KZ6");
test_set(8.666999653040821e+307, true);
test_set(7.474061261986848e+307, "V6UMAV");
test_set(1.288677817824181e+308, -979);
test_set(9.647360351572176e+307, false);
test_set("UTWD", true);
test_set("83179R", "48B3N4FS");
test_set(-781, /[\u0400-\u04FF]+/g);
test_set("5RPQLZ", true);
test_set(true, true);
test_set(/[^.]+/, 1.1538936995287959e+308);
test_set(-517, false);
test_set(+0, -373);
test_set(7.616019117203535e+307, "PYDO6X");
test_set(/(\w+)\s(\w+)/, undefined);
test_set(/[^.]+/, "MUUCK8F8");
test_set(/ab+c/, "N9CJ28CNFJ");
test_set(true, -67);
test_set(/[\u0400-\u04FF]+/g, true);
test_set(1.1008049210881618e+308, "Y9RUCE");
test_set(-803, undefined);
test_set(+0, 1.3843411136079924e+308);
test_set(/\r\n|\r|\n/, -0);
test_set(+0, /foo/g);
test_set("DMAB4", -291);
test_set(8.183724367734605e+307, 1.3955228828478106e+308);
test_set(NaN, null);
test_set(-709, -861);
test_set(-567, Infinity);
test_set("NSAGS214", 1.381642413851799e+308);
test_set(6.438807899728615e+306, -639);
test_set(3.0693368650937003e+307, "T33AI");
test_set(-213, Infinity);
test_set(/(\w+)\s(\w+)/, +0);
test_set(undefined, /\r\n|\r|\n/);
test_set(/foo/g, /[^.]+/);
test_set(-961, -535);
test_set(/yes.*day/, 6.693846963964854e+307);
test_set(-401, -837);
test_set(4.3472531548914264e+307, "NXW0R51Z");
test_set(/[\u0400-\u04FF]+/g, -175);
test_set(true, -519);
test_set(-23, true);
test_set(false, "0U3OWS");
test_set(2.1571683684866933e+307, +0);
test_set(true, -97);
test_set(-675, 1.6946237803614296e+308);
test_set(false, 1.7934087159116304e+308);
test_set("J8NZTF", false);
test_set(-517, true);
test_set("DOQU1MXS", "WPZQV65JZ");
test_set(true, 9.923111499134794e+307);
test_set(1.5278181712570441e+308, false);
test_set(1.0634534111656709e+308, "5HT7XCN8G");
test_set(-729, /\r\n|\r|\n/);
test_set(5.744539651464613e+307, true);
test_set("Y8VSJH39S6", +0);
test_set(-439, /foo/g);
test_set(/[^.]+/, false);
test_set("B9F8", -899);
test_set(/[\u0400-\u04FF]+/g, /yes.*day/);
test_set(1.439560117234603e+308, +0);
test_set(/[\u0400-\u04FF]+/g, -615);
test_set(NaN, 8.536117275823876e+306);
test_set(-969, -271);
test_set(6.235992918341257e+307, -165);
test_set(-0, -201);
test_set(/foo/g, /foo/g);
test_set(true, NaN);
test_set(/yes[^]*day/, -1);
test_set(-0, 1.3382136109407548e+308);
test_set(/\r\n|\r|\n/, undefined);
test_set(+0, -233);
test_set(-61, "U6RVYAWP7");
test_set(NaN, Infinity);
test_set(/foo/g, true);
test_set(NaN, 1.593798456205109e+308);
test_set(1.0512725525129533e+308, true);
test_set("XX1F", 1.6148340744827578e+308);
test_set("UA27", "3SABD6");
test_set(1.6196106545660198e+308, "LS64FM");
test_set("4H5Y8L", 1.5759422691745445e+308);
test_set(-185, /\r\n|\r|\n/);
test_set(/[^.]+/, /foo/g);
test_set(1.1501002654211198e+308, "XFC6QWU");
test_set(/(\w+)\s(\w+)/, "AHMQSO0");
test_set("H2V", true);
test_set("EAKN3LIJW", "YT5RSU");
test_set(6.942805212980541e+306, "2OVM6F");
test_set(true, /[\u0400-\u04FF]+/g);
test_set(-531, "RIVZE2DCFN");
test_set(true, -131);
test_set(null, /yes[^]*day/);
test_set(-981, -0);
test_set(false, -683);
test_set(false, 1.2958302321790942e+308);
test_set(-409, false);
test_set("8VSJZC1VD1", "T2I");
test_set(-623, /ab+c/);
test_set(null, -683);
test_set(/yes[^]*day/, "13NR5X0B");
test_set(/\r\n|\r|\n/, -643);
test_set(/(\w+)\s(\w+)/, 9.901749097419371e+307);
test_set(/yes[^]*day/, "R73RW");
test_set(5.231909769449955e+306, 6.826255764237705e+307);
test_set(-679, false);
test_set(undefined, false);
test_set(true, /\r\n|\r|\n/);
test_set(false, true);
test_set(9.998081697469403e+307, "CMN5S3I9");
test_set("QBIXM", 1.7694230902948985e+308);
test_set(1.2570547608791115e+308, /yes[^]*day/);
test_set(1.6302916768446813e+308, /foo/g);
test_set(5.19735602525791e+307, /ab+c/);
test_set("3NBA7181OV", -0);
test_set(false, 1.7670030880374269e+308);
test_set(true, "M16RRUT0A");
test_set("SYWHX3MJ", "DYS8UR");
test_set(/foo/g, -343);
test_set(-873, null);
test_set("N32FI0O91", +0);
test_set(/foo/g, "CQYISYI");
test_set(false, 1.2056711443858175e+308);
test_set(1.2356920793094953e+308, true);
test_set("XOFBS", -487);
test_set("02L4", /[\u0400-\u04FF]+/g);
test_set(+0, true);
test_set(7.867060355894807e+307, true);
test_set("NADE", Infinity);
test_set(null, -961);
test_set(-243, undefined);
test_set(1.4795656094983558e+308, "2JDU50TS");
test_set(-981, "WU2WUXN");
test_set(/yes[^]*day/, /\r\n|\r|\n/);
test_set(/yes[^]*day/, 4.777060616070996e+307);
test_set(-27, -811);
test_set(1.2482152794272384e+308, NaN);
test_set(1.6162225499809218e+308, -187);
test_set(-13, Infinity);
test_set(2.794756737525156e+307, 1.2168202875370774e+308);
test_set(false, "RQVRH");
test_set(/[^.]+/, -31);
test_set(/foo/g, 8.179511793721957e+307);
test_set(/ab+c/, "FF6YYLK");
test_set(/yes[^]*day/, "WVEUTSUQF");
test_set(1.3411272570740598e+308, null);
test_set(-145, false);
test_set(/yes.*day/, undefined);
test_set(5.510383923676052e+307, /yes[^]*day/);
test_set(true, +0);
test_set(-483, "9RN9F8QUU");
test_set(/\r\n|\r|\n/, 1.7023546589133982e+307);
test_set("2GRBD0", -433);
test_set(/(\w+)\s(\w+)/, "RDRLKWI44");
test_set(1.268892166167745e+308, 1.4449760879068162e+308);
test_set(7.53282238626905e+307, NaN);
test_set(/ab+c/, "1RTKF1");
test_set(3.051022434369703e+307, /(\w+)\s(\w+)/);
test_set(/ab+c/, "WLYZ6S");
test_set(null, true);
test_set(2.582357129471476e+307, /(\w+)\s(\w+)/);
test_set(null, "F57B");
test_set(-705, true);
test_set(362, false);
test_set(true, -497);
test_set(true, undefined);
test_set(5.9812719817554e+307, false);
test_set(null, 1.6217881774172643e+308);
test_set(true, -103);
test_set(-827, undefined);
test_set(-931, -687);
test_set("QF8JLP9MN", -0);
test_set(false, +0);
test_set(-327, /[^.]+/);
test_set(9.560881707048077e+307, false);
test_set("TPKRYZ5", NaN);
test_set(-623, /yes.*day/);
test_set(7.275265558858871e+307, 1.0320938268281252e+308);
test_set(-0, -0);
test_set(false, -293);
test_set(1.2011488004739661e+308, "KE6A");
test_set(false, -277);
test_set("13E", 1.7195876473087818e+308);
test_set(-0, /(\w+)\s(\w+)/);
test_set("X0R8J", /foo/g);
test_set(+0, "0C6V46D0BI");
test_set(/yes.*day/, "FRP7DCHYRV");
test_set(/yes[^]*day/, /(\w+)\s(\w+)/);
test_set(1.4868432450911136e+308, true);
test_set(1.6768455873578653e+307, true);
test_set(-95, -411);
test_set(/foo/g, 1.2317110910089847e+307);
test_set("NM6HY", 434);
test_set(-31, /[\u0400-\u04FF]+/g);
test_set(-879, 1.1783753867370056e+308);
test_set(NaN, false);
test_set(false, -339);
test_set("1N75D", 1.8901948529788242e+307);
test_set(true, -853);
test_set(-249, /foo/g);
test_set(3.1131026169909347e+307, undefined);
test_set(true, "FE169RVCE");
test_set(-585, +0);
test_set(false, -375);
test_set(undefined, 8.326290527025328e+306);
test_set(/ab+c/, 1.1510919142435373e+308);
test_set("Q5PQ49ZOS4", /yes[^]*day/);
test_set(/[\u0400-\u04FF]+/g, "FXY6");
test_set("5PCCPSDG", true);
test_set(false, "OPV37SA2");
test_set(/yes[^]*day/, /ab+c/);
test_set("PM6E3", true);
test_set(true, -629);
test_set(+0, "EKYB");
test_set(/(\w+)\s(\w+)/, true);
test_set(+0, /(\w+)\s(\w+)/);
test_set(-0, -87);
test_set(2.78170597859964e+307, -195);
test_set(/[^.]+/, /yes.*day/);
test_set(NaN, /[\u0400-\u04FF]+/g);
test_set(4.651435594767776e+307, -579);
test_set(1.1632514891769857e+308, /foo/g);
test_set(false, -749);
test_set(-217, undefined);
test_set(null, "H5H5HX0B3V");
test_set(+0, "NSCLNEG");
test_set(Infinity, undefined);
test_set(1.1734510021749966e+308, 1.213090021929661e+308);
test_set(/[^.]+/, 7.7612384978732955e+307);
test_set(-0, "G7HK");
test_set(4.3114057561651426e+307, "PORL");
test_set(/(\w+)\s(\w+)/, 3.981911794938197e+307);
test_set(-763, 3.110345474533484e+307);
test_set("Y5SD", "ARHH");
test_set(-47, /foo/g);
test_set(undefined, /yes.*day/);
test_set("01NLKSR2LD", null);
test_set(7.590715093741743e+307, "H1TXMZWMC");
test_set(-229, /(\w+)\s(\w+)/);
test_set(Infinity, -3);
test_set(/(\w+)\s(\w+)/, -207);
test_set("L38F98BCOS", "OO4ER5K");
test_set(-287, true);
test_set("BI2DY1", "B3SBIZSAU");
test_set("19QP", false);
test_set(NaN, "J0EOCWCIFS");
test_set("HEOLUWFX", -361);
test_set(-0, +0);
test_set(null, "JIKU");
test_set(-783, NaN);
test_set(1.5711748725071218e+308, "R9OROJH2");
test_set(+0, /[\u0400-\u04FF]+/g);
test_set(1.6457529895774616e+308, -899);
test_set(false, Infinity);
test_set(true, 2.2306260535064712e+307);
test_set(NaN, "NYGUK3PH5");
test_set(true, -0);
test_set(undefined, 6.756106416261395e+307);
test_set(NaN, "P6N");
test_set(null, false);
test_set(-0, /yes[^]*day/);
test_set("TNV93UUN", "3JEWL3B");
test_set("HRN2REI2A", 7.186741912468128e+306);
test_set(Infinity, "FM8Y54J");
test_set(/yes.*day/, 944);
test_set(/\r\n|\r|\n/, "BJWXZAW");
test_set(null, /[^.]+/);
test_set(Infinity, "EU36QIF7E");
test_set(-215, true);
test_set(1.6155443030320615e+308, -185);
test_set(9.62103388217614e+307, /yes[^]*day/);
test_set(false, -889);
test_set(-0, /foo/g);
test_set(-907, 1.1845117916935352e+308);
test_set(undefined, Infinity);
test_set(undefined, /[^.]+/);
test_set("M5W2", Infinity);
test_set(-351, false);
test_set(true, 1.5484619156386506e+308);
test_set("PA2I2PB", false);
test_set(/foo/g, Infinity);
test_set(-95, -619);
test_set(8.560732498198243e+307, /yes[^]*day/);
test_set(+0, /yes[^]*day/);
test_set(-197, false);
test_set(/[\u0400-\u04FF]+/g, Infinity);
test_set(1.8170662225675928e+307, Infinity);
test_set(/ab+c/, -93);
test_set("1AO71D19", undefined);
test_set(false, NaN);
test_set(-131, 6.126723857326184e+307);
test_set(/yes[^]*day/, /[\u0400-\u04FF]+/g);
test_set(-479, -991);
test_set(5.305949129271779e+307, -0);
test_set(1.2765413475552287e+308, NaN);
test_set(-0, 1.7192222605403112e+308);
test_set(2.0996179121733406e+307, false);
test_set(/(\w+)\s(\w+)/, -397);
test_set(/yes.*day/, 2.236656275699885e+307);
test_set("357OT67EIM", true);
test_set(4.94067203498989e+307, /\r\n|\r|\n/);
test_set("6FK", true);
test_set("GUYDCTHR", true);
test_set(1.036845439591836e+308, 1.416125342531298e+308);
test_set(1.1110423760036493e+308, 1.5998750087847641e+308);
test_set("GG72IIT", "K5EXB");
test_set("4WEN1P", /[\u0400-\u04FF]+/g);
test_set(/[\u0400-\u04FF]+/g, /ab+c/);
test_set(3.721333828923758e+306, true);
test_set(-73, /[\u0400-\u04FF]+/g);
test_set(NaN, 8.921322181662695e+307);
test_set(6.508465914154236e+307, null);
test_set("YPC", /yes[^]*day/);
test_set(/ab+c/, /yes.*day/);
test_set("WL9VQQ", Infinity);
test_set(+0, false);
test_set(/yes.*day/, true);
test_set(-341, true);
test_set(10, 1.6180100495711526e+308);
test_set(-247, 9.665883887975031e+307);
test_set(/[^.]+/, "3M0R709");
test_set(/[^.]+/, true);
test_set(-629, -727);
test_set("O41V4", Infinity);
test_set(NaN, "JHVSV");
test_set(/yes.*day/, -513);
test_set("TVYMTXZR", -147);
test_set(false, "TJ055R");
test_set(1.1887959211685505e+308, undefined);
test_set(-271, undefined);
test_set(Infinity, true);
test_set(true, 9.536061904553208e+307);
test_set("IA6BY7R", true);
test_set(-835, 8.304602429157566e+307);
test_set(false, -731);
test_set(/foo/g, -527);
test_set("BYZ5", -805);
test_set(+0, -359);
test_set(5.278106853429872e+307, 1.7512053242031802e+308);
test_set(-669, true);
test_set(1.0840529532876121e+308, -391);
test_set(4.0278793936704787e+307, Infinity);
test_set("9BPURI", -305);
test_set(-641, /\r\n|\r|\n/);
test_set(4.047619647276346e+307, -703);
test_set(null, "VKP6Z77");
test_set(-285, "I6ZBC5");
test_set(-889, true);
test_set("2H90QIFX1C", "MF4AFW525J");
test_set(1.7672168783430164e+308, 1.3207227436023433e+307);
test_set(-711, false);
test_set(1.3005664149759584e+308, "CPYKH");
test_set("9GBSYXX7", "C706I7");
test_set("NBVE0EXIN", Infinity);
test_set(/yes[^]*day/, NaN);
test_set(true, "V8Y");
test_set(7.489776342150751e+307, 1.0828228213654698e+308);
test_set("HLTCGT5RDF", Infinity);
test_set(8.246566776369428e+307, +0);
test_set("KGJ0", "25D5OZ");
test_set(-653, "GXOBX");
test_set("6RIKRM22XS", -385);
test_set("YWCRHP0", true);
test_set(true, "T0C3");
test_set(1.4664929896779282e+308, -965);
test_set(-375, false);
test_set("ZP97XP", Infinity);
test_set(false, "WJ6NT");
test_set(-627, NaN);
test_set(undefined, /ab+c/);
test_set(-957, null);
test_set(false, "X19");
test_set("RRB1", 1.0444775818289976e+306);
test_set(-215, -141);
test_set(/yes[^]*day/, "8URYGI");
test_set(+0, +0);
test_set(/ab+c/, false);
test_set(false, undefined);
test_set(-471, Infinity);
test_set(false, -911);
test_set(-485, NaN);
test_set(+0, -0);
test_set(-911, Infinity);
test_set(-913, -0);
test_set(null, 1.581011943513823e+308);
test_set(/yes[^]*day/, -771);
test_set(true, 1.689683573892787e+308);
test_set("LJLTS", +0);
test_set(3.370979916002448e+307, "0U2");
test_set(+0, -733);
test_set("13IM", 1.6695019392202057e+307);
test_set(false, /foo/g);
test_set(-369, /ab+c/);
test_set(-0, -955);
test_set(-17, /(\w+)\s(\w+)/);
test_set(1.7672094450264348e+308, 1.696435343330145e+307);
test_set(1.123398876313664e+308, -935);
test_set(false, "FKMECQ2");
test_set(-0, false);
test_set(-871, -661);
test_set(7.471803760160606e+306, false);
test_set(-529, /\r\n|\r|\n/);
test_set(-0, /ab+c/);
test_set(1.6365005582344286e+308, -0);
test_set(-0, "UHPT26");
test_set("C9TH", null);
test_set(-755, 1.702529768921895e+308);
test_set("QHRUA6X9", -325);
test_set(5.719017948605113e+307, true);
test_set(/[^.]+/, -225);
test_set(5.345389260271036e+307, /foo/g);
test_set(/yes[^]*day/, -0);
test_set(true, /foo/g);
test_set(null, "LP0");
test_set(-771, -727);
test_set(null, undefined);
test_set(1.3861479422098315e+308, "B79N");
test_set(6.487755620988598e+307, 1.3325297753220668e+307);
test_set(1.379165101630554e+307, 1.7326856542369378e+308);
test_set("HE0VZ89W", "T3WJL");
test_set(5.786816721085747e+307, true);
test_set(true, 6.566497617197718e+307);
test_set(true, -457);
test_set("2KH7049RY", true);
test_set(/foo/g, 1.2535263560321653e+308);
test_set(+0, -293);
test_set(NaN, 5.432950676660309e+307);
test_set(/ab+c/, +0);
test_set("JTEERLJAU", -753);
test_set(true, /[^.]+/);
test_set(-193, /foo/g);
test_set(1.6124840750132147e+308, /yes[^]*day/);
test_set(-497, /yes.*day/);
test_set(1.4817447864860176e+307, true);
test_set(-519, /[^.]+/);
test_set(6.404571170406689e+307, -379);
test_set(/yes[^]*day/, -909);
test_set("2XL5P3", true);
test_set(Infinity, "OAM0GWNM6");
test_set(undefined, 1.7522966084480485e+308);
test_set(-813, true);
test_set(6.493312819487682e+307, "568");
test_set("J5WX5T", +0);
test_set(false, "O1HI91");
test_set(NaN, "U892NQ");
test_set("LARBBG2D", /foo/g);
test_set(7.606726901105542e+307, null);
test_set(-379, /ab+c/);
test_set(false, "0WRFED");
test_set(2.6013977014645323e+307, -273);
test_set(/(\w+)\s(\w+)/, "C14DTEI3M");
test_set(true, 1.3944464603809841e+308);
test_set(/\r\n|\r|\n/, "GO3");
test_set(1.6068409103455056e+308, undefined);
test_set(-177, 1.688738322124223e+308);
test_set("4GDY13FXU", -455);
test_set(-719, -877);
test_set(-593, false);
test_set("EE13IX5T2U", /foo/g);
test_set(8.755976837653645e+307, NaN);
test_set(undefined, -51);
test_set(/[^.]+/, 8.339710488414121e+307);
test_set(/[\u0400-\u04FF]+/g, -295);
test_set(4.127323298375656e+307, undefined);
test_set(-209, NaN);
test_set(/yes.*day/, -429);
test_set(/foo/g, "IYE9BDU");
test_set(false, -691);
test_set(-567, 5.74752375233988e+307);
test_set(-645, "EEI441EGW");
test_set(5.567888286718688e+307, "WPH");
test_set("XZXT1QEIC", /[\u0400-\u04FF]+/g);
test_set(/[^.]+/, -0);
test_set(-577, /yes.*day/);
test_set(/ab+c/, true);
test_set(false, "EHWZXGWG");
test_set(false, "V72K0CKRJY");
test_set(null, -585);
test_set(-495, +0);
test_set(1.293224875649309e+307, false);
test_set("0TER4", true);
test_set(1.1622359702090499e+308, undefined);
test_set(/(\w+)\s(\w+)/, /foo/g);
test_set(/yes[^]*day/, Infinity);
test_set(/yes.*day/, 1.0197061229580317e+308);
test_set("VOK96", /ab+c/);
test_set(-225, /(\w+)\s(\w+)/);
test_set("9NAM", "7D681EZ9VW");
test_set("6IP25VFLRC", /yes.*day/);
test_set(-453, "Y1465L5T83");
test_set(-0, 1.5584501382785827e+308);
test_set(8.3277302112281e+307, 9.199796458047894e+307);
test_set(5.495326396953905e+307, 1.6894693671136994e+308);
test_set(3.4880941055565397e+307, "H9WMKXE");
test_set(/(\w+)\s(\w+)/, "JHTLML");
test_set(2.5170696154455297e+307, -387);
test_set("35R", 7.513960671348876e+305);
test_set("LVF", false);
test_set("OJ7OAF7", 1.070063547639265e+308);
test_set(1.0612714743019708e+308, -905);
test_set(3.209793074522515e+307, 1.1298797808243243e+308);
test_set("TBC21RB", 6.649546238748511e+306);
test_set(-0, Infinity);
test_set(-979, true);
test_set(null, "FCDM1");
test_set(-385, false);
test_set(false, 1.0389804488726697e+308);
test_set("0LUL0XBN", "YFU");
test_set("373G4QETY", -285);
test_set(9.723274836597899e+307, "OO1M98R6LB");
test_set(/yes.*day/, null);
test_set(/yes.*day/, -0);
test_set(-645, false);
test_set(8.314643078101724e+307, "2JM7PTRPMR");
test_set(2.192391977716808e+307, NaN);
test_set(undefined, true);
test_set(true, /(\w+)\s(\w+)/);
test_set(true, 8.9033939614211e+306);
test_set(/[^.]+/, "J73RB4N9U");
test_set("U2SP1", 6.650078592881973e+307);
test_set(-777, -589);
test_set(-671, 3.194615273524389e+307);
test_set(/yes.*day/, "KMVE");
test_set(/yes.*day/, false);
test_set("6F6TXUO", -513);
test_set(1.7424299439143262e+308, 1.153162039180232e+308);
test_set(/(\w+)\s(\w+)/, -365);
test_set(1.6686654129682198e+308, /(\w+)\s(\w+)/);
test_set("CJR30", /[^.]+/);
test_set(/[\u0400-\u04FF]+/g, "3ZCVB");
test_set(-785, "I2IMI1HE9");
test_set("8BORN7ABV3", /(\w+)\s(\w+)/);
test_set("1QOXEJ7", -237);
test_set("FJFBGWTC", "7J5");
test_set(-631, "1YAQKVW7HC");
test_set(-201, true);
test_set(-521, "DL6TGZ");
test_set(true, "KD9L");
test_set(/\r\n|\r|\n/, +0);
test_set(NaN, "UU36SQZD95");
test_set(-891, 1.0675832762484727e+307);
test_set("9H0LV", Infinity);
test_set(1.6404462501058415e+308, 1.3995525787651128e+308);
test_set(-793, 2.9691206475766605e+307);
test_set(-0, "FKBUWS");
test_set(false, -829);
test_set(false, 1.011049129647144e+308);
test_set("PNPV", /[\u0400-\u04FF]+/g);
test_set(4.889370751043855e+307, false);
test_set(null, -0);
test_set("5A8SQOZF", "VQLNCCP");
test_set(-69, /yes.*day/);
test_set(true, 9.75026367768816e+307);
test_set(undefined, /foo/g);
test_set("TRGV6X4M3Y", Infinity);
test_set(/[^.]+/, "BO5C49");
test_set(-539, true);
test_set(/[^.]+/, "05MRFLZV");
test_set(null, 5.709828310483104e+307);
test_set(-537, true);
test_set(-761, 8.457603992242245e+307);
test_set(undefined, "TLP1PEG78");
test_set(-171, /ab+c/);
test_set("0P80SKU4ZB", /\r\n|\r|\n/);
test_set(/ab+c/, Infinity);
test_set(-527, /yes.*day/);
test_set(false, -985);
test_set(2.6973651826828343e+306, /yes.*day/);
test_set(9.972389723120211e+307, -739);
test_set(-643, NaN);
test_set(-117, +0);
test_set("02YG0", "XODX6JU5");
test_set(false, -203);
test_set(1.1359324122206767e+308, -869);
test_set(-33, Infinity);
test_set(-777, undefined);
test_set("4TL", 2.388998057171358e+307);
test_set(/(\w+)\s(\w+)/, -419);
test_set(false, -881);
test_set(-527, /foo/g);
test_set(0x1123, -15);
test_set(/ab+c/, 9.39398461907259e+307);
test_set(3.477877861005925e+306, NaN);
test_set("1ZZC64ZSJ", /foo/g);
test_set(true, -399);
test_set(1.1173506802721374e+307, 1.259166617829519e+308);
test_set(-13, 5.574950452085079e+307);
test_set("D5PHZ0UE8", 1.605764219928623e+308);
test_set(1.4434925659311326e+308, +0);
test_set("3UH", true);
test_set(Infinity, 4.645473271084531e+307);
test_set("BMNP8AC", "1SJX1AMYLJ");
test_set(/[\u0400-\u04FF]+/g, /[\u0400-\u04FF]+/g);
test_set(-0, -533);
test_set(/yes.*day/, /yes.*day/);
test_set(1.3222049888590977e+308, /ab+c/);
test_set(1.5672607072196418e+308, "KQ51E2B");
test_set(/\r\n|\r|\n/, 6.942547837043395e+307);
test_set(true, -803);
test_set(3.1270778555842786e+307, /(\w+)\s(\w+)/);
test_set(1.589651100375238e+307, false);
test_set(/yes[^]*day/, "L111A1691O");
test_set(false, -593);
test_set("6DPWMW", /[\u0400-\u04FF]+/g);
test_set("XJPJ3P6YU", 1.1340691634035327e+308);
test_set(-0, -265);
test_set(7.68272975445477e+307, /yes.*day/);
test_set(true, -617);
test_set(NaN, -477);
test_set("ZQBFVHEUW", -15);
test_set(1.0066741457811866e+308, "RUK");
test_set(false, /[^.]+/);
test_set(1.4756076929164698e+308, true);
test_set(/[\u0400-\u04FF]+/g, 8.251601694278957e+306);
test_set(-857, true);
test_set("4F2FQ4A", 4.679592029226559e+307);
test_set("41BH", +0);
test_set(-0, -407);
test_set("1P1D8I8", -69);
test_set(-951, /foo/g);
test_set(9.57748110221756e+307, true);
test_set(Infinity, Infinity);
test_set(-217, 1.2815739922089317e+308);
test_set(-603, "QS7");
test_set(-323, -681);
test_set("UZWGW", true);
test_set(Infinity, /\r\n|\r|\n/);
test_set(false, "CMTA");
test_set(Infinity, -521);
test_set("U5C", /(\w+)\s(\w+)/);
test_set(/[\u0400-\u04FF]+/g, -359);
test_set("GRPYOTN", 9.230782925863034e+307);
test_set(/yes[^]*day/, -851);
test_set(/ab+c/, -295);
test_set(/yes.*day/, -839);
test_set(/yes.*day/, /\r\n|\r|\n/);
test_set(false, 6.598707538497283e+307);
test_set(/\r\n|\r|\n/, "VET");
test_set(+0, "HS0YT1TVMR");
test_set(/foo/g, -993);
test_set(-299, Infinity);
test_set(/[\u0400-\u04FF]+/g, undefined);
test_set(-565, "O2A");
test_set(false, 1.7226912230227156e+307);
test_set(NaN, -933);
test_set("4LTP", "Z4A");
test_set(/yes[^]*day/, null);
test_set(false, "XPK");
test_set("7BYZIHY", "2BSIPVR");
test_set(4.877044969800987e+307, /foo/g);
test_set(null, -233);
test_set(null, -519);
test_set(true, /ab+c/);
test_set(/[^.]+/, /[^.]+/);
test_set(Infinity, -619);
test_set(-459, /[^.]+/);
test_set(undefined, +0);
test_set(8.706038453417872e+307, "67N");
test_set(-211, NaN);
test_set(1.0980732360813506e+308, 1.652255052465322e+307);
test_set("SIFLI", true);
test_set("L402OP7K4W", 9.071356094384774e+307);
test_set(-0, "5WN");
test_set(false, 2.7007929858603084e+307);
test_set(false, /(\w+)\s(\w+)/);
test_set("CT3", true);
test_set("032U8H", /foo/g);
test_set(/ab+c/, /[^.]+/);
test_set(1.6641550865712355e+308, 1.7561138407836483e+308);
test_set(false, "U5TD1LW8JJ");
test_set(4.978391042679428e+307, "YPLEQCXT3");
test_set(/[\u0400-\u04FF]+/g, -717);
test_set(-0, 1.5405340903323872e+308);
test_set(7.009525571090883e+307, -915);
test_set("A90B", -0);
test_set(false, -453);
test_set(-811, "X9N81U");
test_set(false, "C5YA");
test_set(-753, true);
test_set(1.4950883002216146e+308, -0);
test_set(undefined, -0);
test_set(6.9092506516508e+307, NaN);
test_set(1.4688447540340794e+308, -357);
test_set(null, -803);
test_set(/[\u0400-\u04FF]+/g, "IN3YW");
test_set(true, 1.3233341468391386e+308);
test_set(2.7315902457973905e+307, 1.3783609681233542e+308);
test_set(-223, undefined);
test_set(-509, -413);
test_set("9AZIH", true);
test_set(/\r\n|\r|\n/, null);
test_set(-125, 2.0997336281454394e+307);
test_set(-5, "A486FLM");
test_set(true, "YXJ");
test_set(-0, "6W4H5M");
test_set(-701, 1.1515734648217614e+308);
test_set(NaN, 1.3640292508410912e+308);
test_set(-49, 6.828040866063098e+307);
test_set(/[\u0400-\u04FF]+/g, -731);
test_set(Infinity, -563);
test_set(NaN, "O82TK");
test_set("553NGDM", 9.98925217729768e+307);
test_set(/yes.*day/, "0HAZ24EQJ");
test_set(8.817781877256427e+307, false);
test_set("6YO8", 1.2511675406158558e+307);
test_set("LB9QQ55", false);
test_set(-265, "NOJOTZZ");
test_set(-765, "645ORC2");
test_set("P57MUWOZ3K", 1.106541881572092e+308);
test_set(false, "HONTG04D");
test_set(-347, 6.011211002062352e+307);
test_set(NaN, /[^.]+/);
test_set(undefined, "0X84");
test_set(-765, null);
test_set(7.959611958568143e+307, /yes.*day/);
test_set(1.5697953071243305e+308, true);
test_set(/yes.*day/, NaN);
test_set(-919, null);
test_set(true, "7EOUVSHT");
test_set(1.6192503753959784e+307, 5.474911110229389e+307);
test_set(null, +0);
test_set("44BI5BT4O", "KLGR");
test_set(/[^.]+/, "1S712");
test_set(-265, /[\u0400-\u04FF]+/g);
test_set(/ab+c/, null);
test_set(-381, -953);
test_set(undefined, "CTI7T0");
test_set(/[\u0400-\u04FF]+/g, 1.629893029947823e+308);
test_set("XC1L17QF", /yes[^]*day/);
test_set(true, "YID3RDF");
test_set(-413, false);
test_set(false, "YEN1K5CTA8");
test_set(false, /[\u0400-\u04FF]+/g);
test_set("X8LDSV", "QU6IYFRZRH");
test_set(9.68399973940141e+307, "3VSVL");
test_set(/yes.*day/, /[^.]+/);
test_set(/yes.*day/, -123);
test_set("U3BB", "0RA3");
test_set(undefined, "5I7");
test_set(1.7247806801037507e+308, /\r\n|\r|\n/);
test_set(1.0941580265629233e+308, /[^.]+/);
test_set(/(\w+)\s(\w+)/, 4.513214503877058e+307);
test_set(/yes[^]*day/, "1BWQ924");
test_set(-619, -189);
test_set(-943, false);
test_set(-313, "6LAE");
test_set(8.070997666970359e+307, -703);
test_set(-0, null);
test_set(/\r\n|\r|\n/, /[\u0400-\u04FF]+/g);
test_set(true, "Z3WER0");
test_set(NaN, /foo/g);
test_set(2.5058985736084857e+307, -277);
test_set(-279, "SMLRLGMX");
test_set("VN3Z4WU", -431);
test_set("XXRIRY9TA6", /[\u0400-\u04FF]+/g);
test_set(/yes[^]*day/, 1.3398722589578666e+308);
test_set("BF1F", -931);
test_set("19Z3D7", -95);
test_set(-607, true);
test_set(false, -1);
test_set("MIR6UUL", "NB01A3U");
test_set(1.5777511673898145e+308, -755);
test_set(true, -119);
test_set("A6XX05DE", 9.32615370386265e+307);
test_set("7VZW8PV", -19);
test_set("EDG8F", false);
test_set(9.232887636013727e+307, -733);
test_set(null, 1.2945176036161837e+308);
test_set(/[^.]+/, -387);
test_set(1.1893359448088467e+308, NaN);
test_set(4.489988157361584e+307, -0);
test_set("WNPWCEK6E", /\r\n|\r|\n/);
test_set(-0, 1.119095655554246e+308);
test_set("5R7UHDT", "OX29TR");
test_set(true, "2XF07UKTA");
test_set(2.8911173498647517e+307, true);
test_set("OFRHZ76", 1.083102708432214e+308);
test_set("93YZXC", -751);
test_set(-815, "ST9JBBY590");
test_set(1.5491968400325703e+306, 1.1990303386959512e+308);
test_set("ZTAENTY", "XL1Q9WU");
test_set("4D3I0MHVX", /yes.*day/);
test_set("VJGNDCF76", false);
test_set(3.3826498711724434e+307, true);
test_set(3.039974312185125e+307, "ZZL9SM8L");
test_set("FJ7GXPRV", /foo/g);
test_set(-919, true);
test_set(false, "FVLWH1A80");
test_set(+0, -989);
test_set(7.982355783437732e+307, "JM6");
test_set(/\r\n|\r|\n/, -329);
test_set(/(\w+)\s(\w+)/, -0);
test_set("HFIRTP", -131);
test_set(/ab+c/, 6.7913655787361e+307);
test_set(NaN, -143);
test_set(-263, "U2HM");
test_set(/\r\n|\r|\n/, "IQM");
test_set(/yes[^]*day/, 7.90662242010036e+307);
test_set(/yes.*day/, -487);
test_set(NaN, 7.685116556718287e+307);
test_set(1.4836949403448764e+308, NaN);
test_set("KPVY", /\r\n|\r|\n/);
test_set(4.417104759764451e+307, false);
test_set(1.888049073931311e+307, null);
test_set(-131, -0);
test_set(-993, /foo/g);
test_set("357E", /foo/g);
test_set(-0, 1.3756870776143874e+308);
test_set(false, "4AZ3");
test_set(-563, -0);
test_set(Infinity, "P6OC5T5IG");
test_set(/foo/g, -727);
test_set(/\r\n|\r|\n/, false);
test_set(/\r\n|\r|\n/, /foo/g);
test_set(6.201096741473836e+307, 1.700233254609984e+308);
test_set(false, -137);
test_set(1.7715632419846278e+308, "V4FM7Y");
test_set(4.671051808721226e+307, 9.081283392163714e+307);
test_set(1.035270210275183e+308, -685);
test_set(/(\w+)\s(\w+)/, /yes[^]*day/);
test_set(3.351732283557801e+307, true);
test_set(-997, null);
test_set(undefined, -849);
test_set("UQ8R", "C7DJVO");
test_set(false, -317);
test_set(1.5741481524952612e+308, 1.3069075565834584e+308);
test_set(7.962341646916355e+307, -0);
test_set(/foo/g, +0);
test_set(/yes.*day/, /(\w+)\s(\w+)/);
test_set(undefined, -791);
test_set(true, "OAFZDV");
test_set(/yes.*day/, -415);
test_set(-543, -497);
test_set(-577, /yes[^]*day/);
test_set(-273, -0);
test_set(5.281006018189315e+307, true);
test_set(/\r\n|\r|\n/, /yes.*day/);
test_set(/yes[^]*day/, 1.0940544137610759e+308);
test_set(-259, -265);
test_set("5OU7", -91);
test_set(1.7032058904230459e+308, /[\u0400-\u04FF]+/g);
test_set(-729, /ab+c/);
test_set(2.792960388458875e+307, -759);
test_set(6.05926374477299e+307, /[^.]+/);
test_set(-181, "VGTS63W");
test_set(false, 1.3657657100270683e+306);
test_set("FX4Q45L0", /ab+c/);
test_set(7.875436742371277e+307, true);
test_set("LALDH6C6V", 8.49576985964751e+307);
test_set(-0, -525);
test_set("NHCV6JRR", false);
test_set(-789, 8.110461657065589e+305);
test_set(1.6961340072670758e+308, undefined);
test_set(false, "J1WB");
test_set(1.1644970698288567e+308, /yes.*day/);
test_set(/yes[^]*day/, "EPR4V");
test_set(-359, -519);
test_set(+0, "IOJ0UBUP");
test_set(3.562953044262881e+307, -235);
test_set("XJBE", "1E9U4");
test_set("TBR028", -949);
test_set(undefined, "LI15JF3");
test_set(-709, Infinity);
test_set(-0, 1.0210756373469738e+308);
test_set(NaN, "5I3Z");
test_set("FEYUOL52W", -895);
test_set("SLVZW", true);
test_set(/[\u0400-\u04FF]+/g, "4KB");
test_set(/[^.]+/, 1.6870800531354373e+308);
test_set(Infinity, /foo/g);