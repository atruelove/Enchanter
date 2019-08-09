/*
* This file is automatically generated by Swami
*
* 2019-08-08 15:38:16.052586
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
function test_math_floor(x){
	if (Object.is( x,NaN )){
		var output = Math.floor(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.floor(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === - 0 )){
		var output = Math.floor(x);
		assert.strictEqual(- 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === + Infinity )){
		var output = Math.floor(x);
		assert.strictEqual(+ Infinity, output);
		console.log("Good Test");
		return;
		}
	if (( x === - Infinity )){
		var output = Math.floor(x);
		assert.strictEqual(- Infinity, output);
		console.log("Good Test");
		return;
		}
	if (( x > 0 && x < 1 )){
		var output = Math.floor(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}



/*TESTS GENERATED AUTOMATICALLY*/
test_math_floor(/\r\n|\r|\n/);
test_math_floor(-505);
test_math_floor(NaN);
test_math_floor(-777);
test_math_floor(+0);
test_math_floor(/yes[^]*day/);
test_math_floor(1.6667436820177278e+308);
test_math_floor(1.637232495552419e+308);
test_math_floor(/[^.]+/);
test_math_floor("89N8DPU");
test_math_floor(/(\w+)\s(\w+)/);
test_math_floor(true);
test_math_floor(-443);
test_math_floor(-545);
test_math_floor(1.2048303980598201e+308);
test_math_floor(5.836621759321455e+307);
test_math_floor(-787);
test_math_floor(-183);
test_math_floor("L1XJHQAPJH");
test_math_floor(false);
test_math_floor(-0);
test_math_floor("IYMOS7O");
test_math_floor(1.623624359276212e+308);
test_math_floor("90JZ");
test_math_floor(null);
test_math_floor(-661);
test_math_floor("CVSGEF1Y");
test_math_floor(1.104073123899551e+308);
test_math_floor(/foo/g);
test_math_floor(Infinity);
test_math_floor(9.153215403656341e+305);
test_math_floor(1.5979670274518411e+308);
test_math_floor("19AI");
test_math_floor(-703);
test_math_floor(-567);
test_math_floor(/yes.*day/);
test_math_floor("BZUM");
test_math_floor(-119);
test_math_floor(-993);
test_math_floor(1.3596557306294025e+308);
test_math_floor("6ZGO6GWU");
test_math_floor(7.910560239156081e+307);
test_math_floor("SBRUBQYLR");
test_math_floor(-821);
test_math_floor(-989);
test_math_floor("B74KFOYBY");
test_math_floor(1.2286897203395517e+308);
test_math_floor(-929);
test_math_floor(9.962346244002618e+306);
test_math_floor("UGTMUQIIZY");
test_math_floor(-803);
test_math_floor(6.659556494832075e+307);
test_math_floor("DVNPL");
test_math_floor(7.611197503635513e+307);
test_math_floor(-639);
test_math_floor(-535);
test_math_floor("CV2U3D17");
test_math_floor("504E5TV");
test_math_floor(/[\u0400-\u04FF]+/g);
test_math_floor(-633);
test_math_floor(-249);
test_math_floor("JC7F");
test_math_floor(undefined);
test_math_floor(-641);
test_math_floor("JYXBDK6BE");
test_math_floor("IOCWJQ869");
test_math_floor(-863);
test_math_floor("Q1VKAN5C45");
test_math_floor(1.7192043261682468e+308);
test_math_floor("4YGFSSI");
test_math_floor(1.5886159297209767e+307);
test_math_floor("JWG5JM8X");
test_math_floor(-755);
test_math_floor(/ab+c/);
test_math_floor(6.971513155831348e+307);
test_math_floor("EIYRKCXNJ7");
test_math_floor(3.780359472433455e+307);
test_math_floor(5.176909797767203e+306);
test_math_floor(-451);
test_math_floor(-593);
test_math_floor(-699);
test_math_floor(-197);
test_math_floor(1.37890758038034e+308);
test_math_floor("52E");
test_math_floor(1.645552220790442e+308);
test_math_floor(-405);
test_math_floor("T86C");
test_math_floor(5.885225798996026e+307);
test_math_floor("Z9I");
test_math_floor("857IY");
test_math_floor(4.578636420670066e+306);
test_math_floor(1.7768002413225298e+308);
test_math_floor(-439);
test_math_floor(9.0133521011422e+307);
test_math_floor(1.2961565963362612e+308);
test_math_floor(-653);
test_math_floor(6.524352763478799e+307);
test_math_floor(4.944571626064413e+307);
test_math_floor(8.586871702861473e+307);
test_math_floor(4.0260200603674286e+307);
test_math_floor(1.840039359439462e+307);
test_math_floor(-971);
test_math_floor(1.4780614300818073e+308);
test_math_floor(1.9507981311469958e+307);
test_math_floor(1.167807304894017e+308);
test_math_floor(1.2992710433396647e+308);
test_math_floor("PI3YDU4");
test_math_floor(1.5634139612050807e+308);
test_math_floor(-957);
test_math_floor(1.072613408184027e+308);
test_math_floor("WL4YLGG8WL");
test_math_floor("84YILMG");
test_math_floor("MRGY54I10");
test_math_floor("77U19J7TJ7");
test_math_floor(-307);
test_math_floor("OVLDYZ");
test_math_floor("JSSTP");
test_math_floor(-511);
test_math_floor("VEVO6L");
test_math_floor(-115);
test_math_floor("ULJW6Z4");
test_math_floor(1.0801314107036164e+308);
test_math_floor("5QJNA");
test_math_floor(1.781063595151141e+307);
test_math_floor(-187);
test_math_floor(1.577092039425987e+308);
test_math_floor(1.6789035656546393e+308);
test_math_floor("GY1XQEEKWF");
test_math_floor(-811);
test_math_floor(-51);
test_math_floor(1.0773925447653015e+308);
test_math_floor(3.3384479256529386e+307);
test_math_floor(-549);
test_math_floor(1.407204313562386e+306);
test_math_floor(9.433060406055665e+307);
test_math_floor(1.5977701987858373e+308);
test_math_floor("VEA8");
test_math_floor("73L");
test_math_floor(-837);
test_math_floor(-783);
test_math_floor(-945);
test_math_floor(-869);
test_math_floor(1.4874255117938481e+308);
test_math_floor(-877);
test_math_floor("7UI7");
test_math_floor(1.346134636091834e+308);
test_math_floor(-39);
test_math_floor(-399);
test_math_floor("X8K0U");
test_math_floor("FSU9");
test_math_floor(-161);
test_math_floor(1.6563318613123487e+308);
test_math_floor(-983);
test_math_floor("2OX");
test_math_floor("VGTPOI");
test_math_floor("FZ3APSZ");
test_math_floor("J12NASU");
test_math_floor("XSNA86I");
test_math_floor("GZ611SGG5");
test_math_floor(-293);
test_math_floor(-123);
test_math_floor(7.117651866791834e+307);
test_math_floor(6.199181822602825e+307);
test_math_floor(1.0994916168583613e+307);
test_math_floor(-273);
test_math_floor(1.4399606117534798e+308);
test_math_floor(-933);
test_math_floor(1.676980510693035e+308);
test_math_floor(4.775754384364572e+307);
test_math_floor("QVSMM8JOLC");
test_math_floor("BJ5LVYN");
test_math_floor(-959);
test_math_floor(5.513656182439584e+307);
test_math_floor(1.5002094005222259e+308);
test_math_floor("AOK2VKRA");
test_math_floor("SS6VF");
test_math_floor("CHA8");
test_math_floor("7LPEUNBILL");
test_math_floor(5.292254019320554e+307);
test_math_floor(-381);
test_math_floor("5BEDJO");
test_math_floor("O9V");
test_math_floor(-475);
test_math_floor(-175);
test_math_floor("EYUXZLGXC");
test_math_floor("ZQE9IOSRO2");
test_math_floor(-981);
test_math_floor(2.018779018405239e+307);
test_math_floor("AOQU8YS");
test_math_floor(-523);
test_math_floor(-749);
test_math_floor("YQSB9DMF");
test_math_floor(1.7807238228581028e+308);
test_math_floor(-583);
test_math_floor("2P7I4O");
test_math_floor(-743);
test_math_floor(-833);
test_math_floor("EOZN6GO1SL");
test_math_floor("CRCK");
test_math_floor(-635);
test_math_floor(6.561369161958847e+307);
test_math_floor(-367);
test_math_floor(-581);
test_math_floor(-193);
test_math_floor(-997);
test_math_floor(1.5637638503678738e+308);
test_math_floor(-973);
test_math_floor(-221);
test_math_floor("DF4ILX0");
test_math_floor(-457);
test_math_floor(5.849124853412716e+307);
test_math_floor("Q0QRPYKP4A");
test_math_floor("CA9M");
test_math_floor(1.426474527432871e+308);
test_math_floor(1.528950224703046e+308);
test_math_floor(1.2952629480907366e+308);
test_math_floor("FPWF4C");
test_math_floor(1.3605143055452315e+308);
test_math_floor(1.0612100428165205e+308);
test_math_floor(9.890947334070568e+307);
test_math_floor(1.5835528106181965e+308);
test_math_floor(1.7137753882002448e+308);
test_math_floor("D2UWL6OOA");
test_math_floor(6.732296638685224e+307);
test_math_floor(1.1094659227318431e+306);
test_math_floor("S05S44F");
test_math_floor("CKI1");
test_math_floor(-71);
test_math_floor("9SQG5DL");
test_math_floor(1.2805538928282915e+308);
test_math_floor(-407);
test_math_floor("FEU1");
test_math_floor(-131);
test_math_floor(-813);
test_math_floor("YPKXOEDG2");
test_math_floor(3.4136053816589586e+306);
test_math_floor(-133);
test_math_floor(-275);
test_math_floor(7.454100676503466e+307);
test_math_floor(1.5523330945023028e+308);
test_math_floor("7Y2LC");
test_math_floor(-721);
test_math_floor(6.757985775516676e+307);
test_math_floor(1.642794724401628e+308);
test_math_floor(-417);
test_math_floor("7NPVA");
test_math_floor(1.5866656233369334e+308);
test_math_floor(1.3959246048213677e+308);
test_math_floor(-485);
test_math_floor(1.731898328323229e+307);
test_math_floor(1.0048112767117573e+308);
test_math_floor(-243);
test_math_floor("47BE57Z34");
test_math_floor("0JI99");
test_math_floor(1.6031258826155207e+308);
test_math_floor(-931);
test_math_floor("N1GNZ7J5");
test_math_floor(-355);
test_math_floor(-695);
test_math_floor(-289);
test_math_floor(1.4869887374414315e+308);
test_math_floor(6.347584745208211e+307);
test_math_floor(1.693384714864574e+307);
test_math_floor(1.399877449480587e+307);
test_math_floor(-519);
test_math_floor("K2PYC16980");
test_math_floor(-285);
test_math_floor(-531);
test_math_floor("KK485LFFW");
test_math_floor(8.063188494622173e+307);
test_math_floor(1.7680572472537164e+308);
test_math_floor(5.438025247788957e+307);
test_math_floor(-507);
test_math_floor(-143);
test_math_floor(1.0842022660481957e+308);
test_math_floor(7.928929922898779e+306);
test_math_floor("P7Q8UP7D9");
test_math_floor(-217);
test_math_floor(5.577695868137397e+307);
test_math_floor(-691);
test_math_floor("S3W9B8I7M");
test_math_floor(8.583001034745095e+307);
test_math_floor(3.154510365902309e+307);
test_math_floor("BSAD6G");
test_math_floor("IF1MKE");
test_math_floor("Z37");
test_math_floor(9.110836260594737e+307);
test_math_floor(1.248104167165212e+308);
test_math_floor(-679);
test_math_floor("PLB");
test_math_floor(-757);
test_math_floor(1.608800266963441e+308);
test_math_floor("7SU");
test_math_floor(-479);
test_math_floor(-327);
test_math_floor(1.2486423465127781e+308);
test_math_floor("2W0TG3J5");
test_math_floor(-823);
test_math_floor("58JZ");
test_math_floor(2.770304806219712e+307);
test_math_floor("AXP9Z");
test_math_floor(-215);
test_math_floor(-737);
test_math_floor("JROPUZ");
test_math_floor(1.213126448919793e+308);
test_math_floor(1.2065982466703186e+308);
test_math_floor(1.0258528365591168e+308);
test_math_floor(-515);
test_math_floor(1.079763053769342e+308);
test_math_floor("8P26QO");
test_math_floor(-651);
test_math_floor(-77);
test_math_floor(1.2567249618990728e+308);
test_math_floor("5VLKNJV3T");
test_math_floor("TM4HIT2VF");
test_math_floor(1.4586730780738223e+308);
test_math_floor("OJU");
test_math_floor(-195);
test_math_floor(2.131174331408795e+307);
test_math_floor("1F27YARX8");
test_math_floor(1.415668359364099e+307);
test_math_floor(1.6110754798468493e+308);
test_math_floor(5.047193462585077e+307);
test_math_floor("QI9TLJGV");
test_math_floor(-673);
test_math_floor("ZKHCSKN");
test_math_floor(1.1537626040673714e+308);
test_math_floor(-321);
test_math_floor(9.834287872077788e+307);
test_math_floor(1.9189006402167938e+307);
test_math_floor(-247);
test_math_floor("58ZQQST");
test_math_floor("FEHBH9J257");
test_math_floor(-643);
test_math_floor(6.762681134428891e+307);
test_math_floor("N8HST6KH");
test_math_floor("CSL");
test_math_floor("QHRUA6X9");
test_math_floor(-927);
test_math_floor(1.0448088088038156e+308);
test_math_floor("RAAG4A1BG");
test_math_floor("BK5DG7G2X1");
test_math_floor("LN5AIDS1T");
test_math_floor("1G9LO3C");
test_math_floor("NN36E4H");
test_math_floor(-33);
test_math_floor("EPB");
test_math_floor(-555);
test_math_floor(8.945585806709494e+307);
test_math_floor(-255);
test_math_floor(6.3919095846234e+307);
test_math_floor("DD04IKXDOO");
test_math_floor(1.213909361900455e+308);
test_math_floor("UETJDFLI");
test_math_floor("YZS");
test_math_floor(5.249038762914179e+307);
test_math_floor("0WD");
test_math_floor(-1);
test_math_floor(-753);
test_math_floor(-147);
test_math_floor("JP7WDTA");
test_math_floor(-339);
test_math_floor(3.849372582918822e+306);
test_math_floor(-375);
test_math_floor(-311);
test_math_floor(-435);
test_math_floor(-283);
test_math_floor(-163);
test_math_floor("95K1FGT5");
test_math_floor(-45);
test_math_floor(1.097458279079179e+308);
test_math_floor("22ASXVE84");
test_math_floor("41RD43A");
test_math_floor(1.6107606938891414e+308);
test_math_floor("6K8");
test_math_floor(-999);
test_math_floor(-465);
test_math_floor("0MZD");
test_math_floor(8.44078269930942e+307);
test_math_floor(1.3963073729170997e+308);
test_math_floor("TW3EQ1Y1");
test_math_floor(-637);
test_math_floor(9.398929780017415e+306);
test_math_floor(3.279074435955265e+307);
test_math_floor("W046");
test_math_floor(7.431052303048772e+306);
test_math_floor(-301);
test_math_floor(1.4920606634649171e+308);
test_math_floor("VQVN3");
test_math_floor(-395);
test_math_floor(-345);
test_math_floor("OUP80G");
test_math_floor(1.3511566322168161e+308);
test_math_floor("620HX696ID");
test_math_floor(6.420733441529588e+307);
test_math_floor(-603);
test_math_floor(1.1215059204628796e+308);
test_math_floor(-605);
test_math_floor("8XOLI");
test_math_floor(-585);
test_math_floor("7S8G643");
test_math_floor(-309);
test_math_floor("3KURT");
test_math_floor(-351);
test_math_floor(-899);
test_math_floor(1.4596767045029534e+308);
test_math_floor("X6NUJ11K");
test_math_floor(1.4608968373817158e+308);
test_math_floor(1.1326325564811874e+307);
test_math_floor(-449);
test_math_floor(1.1202826785703696e+308);
test_math_floor("044DA");
test_math_floor("7QBCYRM9L");
test_math_floor(-265);
test_math_floor(3.925450399338096e+307);
test_math_floor(-335);
test_math_floor(4.785077429936814e+307);
test_math_floor("JQXZV");
test_math_floor(-573);
test_math_floor("W91SKB8QI");
test_math_floor(-847);
test_math_floor(7.192961231997504e+306);
test_math_floor(8.285538208470245e+307);
test_math_floor(-261);
test_math_floor("EDX81EU");
test_math_floor(-167);
test_math_floor(-41);
test_math_floor("CS2IWG");
test_math_floor(1.017099318808845e+308);
test_math_floor(7.70487129138766e+307);
test_math_floor("V8H");
test_math_floor(1.414340887710393e+308);
test_math_floor(3.6404891432733654e+307);
test_math_floor("I5VI42NWT");
test_math_floor(-599);
test_math_floor(9.339513342974337e+305);
test_math_floor("XZURNO3R3");
test_math_floor(1.7683004403620056e+308);
test_math_floor(-105);
test_math_floor(-845);
test_math_floor(5.430617992673066e+305);
test_math_floor(7.808453976304553e+307);
test_math_floor("AC2T8C0BZ");
test_math_floor(9.951621146936615e+307);
test_math_floor(1.5445872748743304e+308);
test_math_floor("W48Y3NQ6");
test_math_floor(5.447001672591468e+307);
test_math_floor(494);
test_math_floor("CGCJJ");
test_math_floor(1.1981228437277948e+308);
test_math_floor(-671);
test_math_floor("YDR");
test_math_floor(-377);
test_math_floor("8DLGBLVM");
test_math_floor("2NSI93PW");
test_math_floor(1.6558859576133716e+308);
test_math_floor(1.7141216832452345e+308);
test_math_floor(8.000086453131558e+307);
test_math_floor(-911);
test_math_floor(6.139133510712895e+307);
test_math_floor("ZJEBF5B");
test_math_floor("Z8ZHP");
test_math_floor("QGMUV");
test_math_floor(7.641837719706529e+307);
test_math_floor(6.797327309135142e+307);
test_math_floor("DDCKKVYKL");
test_math_floor(1.4759331780262121e+308);
test_math_floor(1.4503406350437719e+308);
test_math_floor("JMFYD");
test_math_floor(-403);
test_math_floor(1.7344746441353349e+308);
test_math_floor(-817);
test_math_floor(-441);
test_math_floor("ZDD");
test_math_floor(-711);
test_math_floor(-445);
test_math_floor("L87ZOV1YN");
test_math_floor("RXHX73U");
test_math_floor("Z93NNV5LW");
test_math_floor(7.328837467661045e+307);
test_math_floor("H4PP952TT5");
test_math_floor("760S4LA");
test_math_floor(-601);
test_math_floor(-75);
test_math_floor(1.1140239768429513e+308);
test_math_floor(5.788250470652299e+307);
test_math_floor(-681);
test_math_floor(2.4984799949504485e+307);
test_math_floor(7.690245110791063e+307);
test_math_floor(-569);
test_math_floor(9.465230044532751e+307);
test_math_floor("62QA4C");
test_math_floor("MJCDH");
test_math_floor("5XCFK7LEW");
test_math_floor(6.635923290918753e+307);
test_math_floor("IZ3T7");
test_math_floor("3PCWZ4N5TU");
test_math_floor(1.3228720042196508e+308);
test_math_floor("BPKOL3EL8U");
test_math_floor("EIXM3VXGA");
test_math_floor("91VR9LAM");
test_math_floor(8.997048621557364e+307);
test_math_floor("353QMIP");
test_math_floor("G6B");
test_math_floor(4.363334311842406e+307);
test_math_floor(1.7998417663894773e+307);
test_math_floor("LRBRAKKAPF");
test_math_floor("YI6LNAAQX");
test_math_floor(-461);
test_math_floor(3.7467526419217935e+307);
test_math_floor("QSNTF");
test_math_floor(-597);
test_math_floor(-647);
test_math_floor(1.2039833495796094e+307);
test_math_floor(-305);
test_math_floor(5.225081677439493e+307);
test_math_floor("RABB6EJ");
test_math_floor(1.5508241431034255e+308);
test_math_floor(868);
test_math_floor("AJLVI6Z");
test_math_floor(-397);
test_math_floor(1.1903155778557606e+308);
test_math_floor(1.7060416044022994e+308);
test_math_floor("K6RTLV");
test_math_floor(9.453048991938869e+307);
test_math_floor("M320");
test_math_floor(-587);
test_math_floor("ET6TFHI5K");
test_math_floor("U7FT2JQ3");
test_math_floor(-489);
test_math_floor(3.1637296971660103e+307);
test_math_floor(-961);
test_math_floor("8B1J2IKX");
test_math_floor(3.2762274626940893e+307);
test_math_floor(-669);
test_math_floor(4.762606013963949e+307);
test_math_floor("Y47MRDO3");
test_math_floor(1.6125074889193988e+308);
test_math_floor(1.3060518532006265e+308);
test_math_floor(1.4965311562412553e+308);
test_math_floor(-859);
test_math_floor(2.0828800269522618e+307);
test_math_floor(-323);
test_math_floor(1.5008104061353652e+308);
test_math_floor(1.0788998873440747e+307);
test_math_floor(-267);
test_math_floor(-229);
test_math_floor(5.270307378326927e+307);
test_math_floor("7VNM");
test_math_floor(-887);
test_math_floor(7.297418294395369e+307);
test_math_floor("UGWL");
test_math_floor("GK56D");
test_math_floor(-333);
test_math_floor("RKG71");
test_math_floor(-55);
test_math_floor(6.440876645221545e+306);
test_math_floor("YUTHRPL4");
test_math_floor("7AJX4HHE");
test_math_floor(9.974049970906097e+307);
test_math_floor(5.873009126772288e+307);
test_math_floor(1.5194393642406156e+308);
test_math_floor("9VS7QCD2PW");
test_math_floor("HOA");
test_math_floor("PDIPF7");
test_math_floor("BU3QF06");
test_math_floor(-159);
test_math_floor("R59");
test_math_floor(-965);
test_math_floor(1.5560594828643963e+307);
test_math_floor(-621);
test_math_floor("XIWH0I");
test_math_floor(-113);
test_math_floor("VRP5BEH");
test_math_floor("OK1O");
test_math_floor("PCL1");
test_math_floor(1.6673167657759004e+308);
test_math_floor(7.234339459285421e+307);
test_math_floor("9NAYH5P");
test_math_floor("NFF");
test_math_floor(1.3334717875700584e+308);
test_math_floor(4.627781121822605e+307);
test_math_floor("JNIS");
test_math_floor(-477);
test_math_floor("WPWJD6");
test_math_floor("TU8MS");
test_math_floor(7.348521455220529e+307);
test_math_floor(1.055802240517878e+308);
test_math_floor("JSJ");
test_math_floor("NV6");
test_math_floor(1.719807747694849e+308);
test_math_floor(1.6923461473477027e+308);
test_math_floor(1.5846716480903763e+308);
test_math_floor(1.0914773239368583e+308);
test_math_floor("FN3");
test_math_floor("RRO5Q1");
test_math_floor("DO2KV");
test_math_floor(1.1639471745972683e+308);
test_math_floor(-421);
test_math_floor(5.888100128425207e+307);
test_math_floor(-627);
test_math_floor("JNOL0U");
test_math_floor(-101);
test_math_floor(6.656799422230542e+307);
test_math_floor(5.689236534654433e+307);
test_math_floor("7ZT4SW");
test_math_floor(-127);
test_math_floor(6.59483597320783e+307);
test_math_floor("8HZ9JBKF");
test_math_floor(3.366581396837521e+307);
test_math_floor(1.6607366423093721e+308);
test_math_floor("4I11");
test_math_floor("XWGP");
test_math_floor("9EGE");
test_math_floor(-415);
test_math_floor("0L6VGU");
test_math_floor(8.916446522414417e+307);
test_math_floor("BCW6Y8CRM");
test_math_floor(6.442056075058839e+307);
test_math_floor(1.2091657484856167e+308);
test_math_floor("JW2405X0Y");
test_math_floor(-551);
test_math_floor("728WD33KO");
test_math_floor(-455);
test_math_floor(5.839740153343291e+307);
test_math_floor(-347);
test_math_floor(5.818724836901762e+307);
test_math_floor(7.330866580230982e+307);
test_math_floor(-373);
test_math_floor(15);
test_math_floor(1.2115733374630387e+308);
test_math_floor("XX2");
test_math_floor(6.255270044434907e+307);
test_math_floor(1.6901112748046118e+308);
test_math_floor(-459);
test_math_floor(9.950552122082179e+307);
test_math_floor(-325);
test_math_floor("NKPTB");
test_math_floor(-987);
test_math_floor(1.0676440338200515e+308);
test_math_floor("CPZEM3");
test_math_floor(-483);
test_math_floor("DCILN8YMZW");
test_math_floor(3.55613541385743e+307);
test_math_floor(-773);
test_math_floor(5.656094379252028e+307);
test_math_floor(-843);
test_math_floor(-391);
test_math_floor("6NIXWFE5K");
test_math_floor(1.4995956527470587e+308);
test_math_floor(-447);
test_math_floor(9.591690978691439e+307);
test_math_floor("AE335");
test_math_floor(8.314518888088057e+307);
test_math_floor(-497);
test_math_floor(-529);
test_math_floor(-541);
test_math_floor(1.4347859888351363e+307);
test_math_floor(-313);
test_math_floor(-611);
test_math_floor("1L8");
test_math_floor(1.2096683343296853e+308);
test_math_floor(-789);
test_math_floor("DWTZ3NBW");
test_math_floor(-685);
test_math_floor(1.7373706124229708e+308);
test_math_floor(8.186889094516466e+307);
test_math_floor(1.6426960594205184e+308);
test_math_floor("9SKP");
test_math_floor("8I7");
test_math_floor("BWBSS8Z4");
test_math_floor(6.192638169667988e+307);
test_math_floor("96X6FB");
test_math_floor("KR5EZWF");
test_math_floor("ZGVEL");
test_math_floor("4US5");
test_math_floor(-805);
test_math_floor("J7SOM6TD");
test_math_floor(-835);
test_math_floor(-31);
test_math_floor("GCEEX");
test_math_floor("JQMG9L9P");
test_math_floor("EOU0");
test_math_floor("XIGA");
test_math_floor("LVTCV4Z4");
test_math_floor(4.691383525038245e+307);
test_math_floor("WLCJXD");
test_math_floor(-353);
test_math_floor("ADOJRCCE1");
test_math_floor(-141);
test_math_floor(-237);
test_math_floor(1.4305637544972806e+308);
test_math_floor(1.6345908462009613e+308);
test_math_floor("7KR");
test_math_floor(1.6807416176301557e+308);
test_math_floor("OIHGEE6Y8");
test_math_floor(1.6265671844700296e+307);
test_math_floor("QJAC");
test_math_floor("R81KZ");
test_math_floor("D30");
test_math_floor("P01SWW04");
test_math_floor(3.879871019514501e+307);
test_math_floor("YLZOMZC58");
test_math_floor(1.7192220173042402e+308);
test_math_floor("MV3B3");
test_math_floor(8.709760895938251e+307);
test_math_floor("J8JZT5JR");
test_math_floor(6.833723417838348e+307);
test_math_floor("FTREZW");
test_math_floor(5.047090261507226e+307);
test_math_floor("LNP5SSR");
test_math_floor("SO1");
test_math_floor("IR99");
test_math_floor("E2I45K");
test_math_floor(-453);
test_math_floor(5.313629240555808e+307);
test_math_floor("JWQUK");
test_math_floor("ZT40I6DI");
test_math_floor(3.341835386586395e+307);
test_math_floor("VZY");
test_math_floor(1.0628677796895055e+308);
test_math_floor("B9LBT");
test_math_floor("02DDVJ4DA");
test_math_floor(-575);
test_math_floor("9FLYL");
test_math_floor("4AGV");
test_math_floor("A9YK0KM");
test_math_floor("FGSSN");
test_math_floor("5U6ZIGR2");
test_math_floor(1.4447892692658722e+308);
test_math_floor(1.473876235133844e+308);
test_math_floor(8.833510302063172e+307);
test_math_floor("G0RG2");
test_math_floor("3FG");
test_math_floor(1.558638815956395e+308);
test_math_floor(1.0381326234887112e+308);
test_math_floor(2.6528503058076636e+307);
test_math_floor(9.452568747018784e+307);
test_math_floor(1.1765026862764014e+308);
test_math_floor(5.237114034106842e+307);
test_math_floor("6MJ638Q2");
test_math_floor("K26YAHM");
test_math_floor("ADXRK7");
test_math_floor(5.387510864799175e+307);
test_math_floor(-337);
test_math_floor(1.0185193748440016e+308);
test_math_floor("N09RYN");
test_math_floor(1.7664877458656608e+308);
test_math_floor(1.5522538689831016e+308);
test_math_floor(2.288338033314931e+307);
test_math_floor("5UMUYERB");
test_math_floor("PF9GL7");
test_math_floor(3.962625944972818e+307);
test_math_floor(1.6596833688939365e+308);
test_math_floor(1.1537309174619191e+308);
test_math_floor("1HY");
test_math_floor(2.6307518015365644e+307);
test_math_floor(6.801107402550938e+306);
test_math_floor(-991);
test_math_floor(6.540227596527688e+307);
test_math_floor(2.28083372475825e+307);
test_math_floor("EIQZL");
test_math_floor("X4WPCZP8OQ");
test_math_floor(-109);
test_math_floor(1.6619756026164145e+308);
test_math_floor(-689);
test_math_floor(5.887183465687738e+307);
test_math_floor("WPTXCMPE45");
test_math_floor(1.5746226272539293e+307);
test_math_floor(1.2589477184991455e+308);
test_math_floor(4.379858411575756e+307);
test_math_floor(2.1679554854000723e+306);
test_math_floor("8TUPDCR");
test_math_floor("366RBGXR");
test_math_floor(7.566127847804455e+307);
test_math_floor(2.3986012938559996e+307);
test_math_floor("J32PQS1OKK");
test_math_floor(5.433320541338087e+307);
test_math_floor("8JJTQRDU");
test_math_floor(-943);
test_math_floor(5.118277221298786e+307);
test_math_floor("TBGVVFO");
test_math_floor("C8JA");
test_math_floor("QYG3Y9UTD");
test_math_floor(1.6854099133546287e+308);
test_math_floor("186RB4");
test_math_floor(-343);
test_math_floor(1.4898783454623814e+308);
test_math_floor("Q7TFF");
test_math_floor(-871);
test_math_floor(-431);
test_math_floor(-939);
test_math_floor("5N44OCM");
test_math_floor("1COD");
test_math_floor(7.004983526398263e+307);
test_math_floor("ZJ5YH9DS6");
test_math_floor("GXPENO4H");
test_math_floor("341J");
test_math_floor(5.203453789607157e+307);
test_math_floor(2.054646049058573e+307);
test_math_floor(1.368130249205856e+308);
test_math_floor(4.761251718943297e+307);
test_math_floor("721");
test_math_floor(1.385893442769931e+308);
test_math_floor(1.2386055613254636e+307);
test_math_floor("CF9VN9M");
test_math_floor(4.548338393416802e+307);
test_math_floor("82M");
test_math_floor("9V0X");
test_math_floor(9.451377807595755e+307);
test_math_floor("6XDBB");
test_math_floor(-571);
test_math_floor(-853);
test_math_floor("2CO");
test_math_floor(610);
test_math_floor("VI7YVI4FK");
test_math_floor(-975);
test_math_floor(1.4577853483740516e+308);
test_math_floor(1.1944653617059902e+308);
test_math_floor(-59);
test_math_floor("LCE70AF");
test_math_floor(5.538977006857469e+307);
test_math_floor("20DXN5V60");
test_math_floor(-969);
test_math_floor(-751);
test_math_floor(1.462734068097291e+308);
test_math_floor("LVYF79IT");
test_math_floor(-657);
test_math_floor(1.520818498371691e+308);
test_math_floor(9.850675033880553e+307);
test_math_floor(1.0502865987386996e+308);
test_math_floor(-659);
test_math_floor(1.4648697114835197e+308);
test_math_floor(9.107655543937747e+307);
test_math_floor("ZPG5UP");
test_math_floor(-287);
test_math_floor(1.3826555604890179e+308);
test_math_floor(-47);
test_math_floor(1.641199041511002e+308);
test_math_floor(-295);
test_math_floor(1.3075398965638133e+308);
test_math_floor(2.047424392961366e+307);
test_math_floor("ZASM5");
test_math_floor("NMAEFNVXK");
test_math_floor(1.7903801996687333e+308);
test_math_floor("XJ77B");
test_math_floor("12VC2VJKL7");
test_math_floor("71LCQTVD");
test_math_floor(-771);
test_math_floor(-949);
test_math_floor("7RIE");
test_math_floor(-231);
test_math_floor(1.5901910268169514e+308);
test_math_floor(8.824044274842929e+306);
test_math_floor(-481);
test_math_floor("210TDBW5");
test_math_floor(-553);
test_math_floor(-967);
test_math_floor(-729);
test_math_floor("KXWN9VX");
test_math_floor("LYT");
test_math_floor("BGQCSID9R");
test_math_floor("TESJZ");
test_math_floor(-697);
test_math_floor(5.234715085021881e+307);
test_math_floor("K37C");
test_math_floor("9GDPV30YF");
test_math_floor(1.226017193144966e+308);
test_math_floor(-487);
test_math_floor(1.062633927926652e+308);
test_math_floor("OH9NZ35T5P");
test_math_floor("168SQ");
test_math_floor("VZA56QZE");
test_math_floor(1.1139566881390739e+308);
test_math_floor(1.615764032089122e+308);
test_math_floor(-385);
test_math_floor("WLQ42Q");
test_math_floor(1.0705993863244823e+308);
test_math_floor(6.547945379756603e+307);
test_math_floor("1PD2P");
test_math_floor("NRVUJE8P5H");
test_math_floor(3.312505749028428e+306);
test_math_floor("UZH6");
test_math_floor("XCI9VMV4");
test_math_floor(5.762770860700855e+307);
test_math_floor("FEUA");
test_math_floor("5E0NJXBK4");
test_math_floor("HHUNG");
test_math_floor(-271);
test_math_floor("2LVG9CY");
test_math_floor(-917);
test_math_floor("OP6LTV");
test_math_floor("DJILPJM6T4");
test_math_floor("XOA4CHZCDE");
test_math_floor(9.165720812318868e+307);
test_math_floor("6HIQ7E");
test_math_floor(-953);
test_math_floor(1.5492510289799233e+308);
test_math_floor(-17);
test_math_floor(-791);
test_math_floor(-895);
test_math_floor("HOZCYBK1U");
test_math_floor("FQOU2YBXJV");
test_math_floor("VM3P");
test_math_floor(3.616010310889453e+307);
test_math_floor(-259);
test_math_floor("PULLT7");
test_math_floor("JQTSX8");
test_math_floor("PBANA6I");
test_math_floor(3.263607375113799e+307);
test_math_floor(3.6873829328196644e+307);
test_math_floor(1.2555615537448048e+308);
test_math_floor("DGG0LX0PN6");
test_math_floor("2XLQU9BY46");
test_math_floor(1.6916181852071842e+308);
test_math_floor(1.5917585786817041e+308);
test_math_floor(8.025056853575217e+307);
test_math_floor("BNM9");
test_math_floor(1.2927879201533135e+308);
test_math_floor(9.615112476253575e+307);
test_math_floor(1.6598163198416562e+308);
test_math_floor("EIIZS46");
test_math_floor("NG90BPD");
test_math_floor("0UNIHFM");
test_math_floor("321M");
test_math_floor(1.0121043498752026e+308);
test_math_floor("HG0I9UI8");
test_math_floor("NSXKGTOKB");
test_math_floor("4RP1FVG");
test_math_floor(-827);
test_math_floor("OXU8JWLT");
test_math_floor("B56QZS3");
test_math_floor(9.782275400971207e+307);
test_math_floor("6IRFISIE");
test_math_floor("CPVZ0AH");
test_math_floor(2.1424671843051946e+307);
test_math_floor(-607);
test_math_floor(-579);
test_math_floor("ZFIYM2H");
test_math_floor("DN6TSAB");
test_math_floor("AOSY2");
test_math_floor(-423);
test_math_floor("6JLY");
test_math_floor("PXFRHGL2AR");
test_math_floor("Z5I2UHE");
test_math_floor(-707);
test_math_floor(-617);
test_math_floor(-841);
test_math_floor(-155);
test_math_floor("Y3211EOA");
test_math_floor(1.632010750871941e+308);
test_math_floor(-5);
test_math_floor(1.4683062229264975e+308);
test_math_floor("77L");
test_math_floor(1.6978465059637183e+308);
test_math_floor(1.7013872286260468e+307);
test_math_floor(1.5588822287740308e+308);
test_math_floor(2.0164977918693148e+307);
test_math_floor(1.6815116793547002e+308);
test_math_floor("TVVX9");
test_math_floor(-901);
test_math_floor("8E87X1PDGP");
test_math_floor(-521);
test_math_floor("2WGEVL6I4");
test_math_floor(-151);
test_math_floor(-775);
test_math_floor("U6CS8LVVJ");
test_math_floor(-433);
test_math_floor(7.695902804597426e+306);
test_math_floor(7.314267361663171e+307);
test_math_floor(-315);
test_math_floor(5.856430796760237e+307);
test_math_floor(1.4329386782164727e+308);
test_math_floor("4O0");
test_math_floor(1.3880225218163536e+308);
test_math_floor("Q4UT7WW");
test_math_floor("TI9NOXW");
test_math_floor(-741);
test_math_floor("H9SHUYA");
test_math_floor(-645);
test_math_floor(7.311939305703025e+307);
test_math_floor("7X2X4EEGWN");
test_math_floor(6.750142264864111e+307);
test_math_floor("GI51");
test_math_floor("VCB3YM");
test_math_floor(2.283623858077552e+307);
test_math_floor(1.5714819128689216e+308);
test_math_floor("K41WJ");
test_math_floor(1.6633403530835164e+308);
test_math_floor(1.7728768276344907e+308);
test_math_floor(7.389325667269358e+307);
test_math_floor("8RT9");
test_math_floor(2.6586455223158535e+307);
test_math_floor("CCESUY5HO");
test_math_floor("IKDV");
test_math_floor(3.3220638247540594e+306);
test_math_floor(-963);
test_math_floor("29DU");
test_math_floor(-227);
test_math_floor("0TDOPB9");
