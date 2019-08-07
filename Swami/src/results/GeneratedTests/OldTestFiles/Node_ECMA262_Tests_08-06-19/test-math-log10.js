/*
* This file is automatically generated by Swami
*
* 2019-08-06 15:05:46.023982
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
function test_math_log10(x){
	if (Object.is( x,NaN )){
		var output = Math.log10(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (( x < 0 )){
		var output = Math.log10(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.log10(x);
		assert.strictEqual(- Infinity, output);
		console.log("Good Test");
		return;
		}
	if (( x === - 0 )){
		var output = Math.log10(x);
		assert.strictEqual(- Infinity, output);
		console.log("Good Test");
		return;
		}
	if (( x === 1 )){
		var output = Math.log10(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === + Infinity )){
		var output = Math.log10(x);
		assert.strictEqual(+ Infinity, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}



/*TESTS GENERATED AUTOMATICALLY*/
test_math_log10(-303);
test_math_log10(false);
test_math_log10(true);
test_math_log10(2.2025294878873892e+307);
test_math_log10(-0);
test_math_log10(/[^.]+/);
test_math_log10(/ab+c/);
test_math_log10(-405);
test_math_log10("CREGOO9VW1");
test_math_log10(4.803004332240268e+307);
test_math_log10(3.773510822632863e+307);
test_math_log10("MZ565JCI");
test_math_log10(-453);
test_math_log10(undefined);
test_math_log10("8QHYI4O");
test_math_log10(+0);
test_math_log10("0WG");
test_math_log10(null);
test_math_log10("9R3");
test_math_log10("OKT48XET4");
test_math_log10(/[\u0400-\u04FF]+/g);
test_math_log10(-11);
test_math_log10(Infinity);
test_math_log10(5.506850192037089e+307);
test_math_log10("6Q3CW5");
test_math_log10(-175);
test_math_log10(/yes.*day/);
test_math_log10("JNY64MI3NN");
test_math_log10(9.261694947385786e+307);
test_math_log10(-777);
test_math_log10(1.0490507807592126e+308);
test_math_log10(-289);
test_math_log10(7.150934413056591e+307);
test_math_log10(-75);
test_math_log10(-441);
test_math_log10(/foo/g);
test_math_log10(4.849451021498188e+307);
test_math_log10(3.050858899938716e+307);
test_math_log10(6.199325986810568e+307);
test_math_log10(1.3811772573824308e+308);
test_math_log10(/\r\n|\r|\n/);
test_math_log10(-461);
test_math_log10(-889);
test_math_log10("WWGXXR2QJP");
test_math_log10(3.00460408720436e+307);
test_math_log10("NALR20");
test_math_log10(2.9846295524964873e+305);
test_math_log10(-685);
test_math_log10("7DWWU4");
test_math_log10(-47);
test_math_log10("OKURK");
test_math_log10(7.329180436741152e+307);
test_math_log10(8.337847204615297e+307);
test_math_log10(-81);
test_math_log10(NaN);
test_math_log10(-881);
test_math_log10("MTRJZLX4I");
test_math_log10("ESWSCVA92K");
test_math_log10(-887);
test_math_log10("QKD4867E2");
test_math_log10(-273);
test_math_log10(-431);
test_math_log10(8.804186959869136e+307);
test_math_log10(/(\w+)\s(\w+)/);
test_math_log10(7.110365043285708e+307);
test_math_log10(-403);
test_math_log10(8.097540274248373e+307);
test_math_log10("KNV3");
test_math_log10("6HO");
test_math_log10(1.0543733351480803e+308);
test_math_log10(-649);
test_math_log10(-991);
test_math_log10(-607);
test_math_log10(-633);
test_math_log10("QG514VP");
test_math_log10(-477);
test_math_log10(1.3060796982367188e+308);
test_math_log10(8.985467663114181e+307);
test_math_log10(1.1338480181031207e+307);
test_math_log10(3.0018177532141523e+307);
test_math_log10(-929);
test_math_log10(3.3244344060926865e+307);
test_math_log10(-721);
test_math_log10(6.282216843847666e+307);
test_math_log10(1.1775249294875995e+307);
test_math_log10(-871);
test_math_log10(7.934828371547439e+307);
test_math_log10(-93);
test_math_log10(-803);
test_math_log10("E0DWS");
test_math_log10(1.3978757257999666e+308);
test_math_log10("G2AWVJ");
test_math_log10(-925);
test_math_log10("RLSEMFJ9V6");
test_math_log10("QEL");
test_math_log10("9QJ3E41YK");
test_math_log10(-867);
test_math_log10(-551);
test_math_log10(-959);
test_math_log10(-611);
test_math_log10("1LF0P3");
test_math_log10(1.4982840091457032e+308);
test_math_log10(-499);
test_math_log10(1.1848966506213635e+308);
test_math_log10("9T9S9");
test_math_log10("VUTKL7BOG");
test_math_log10(5.492491056536906e+307);
test_math_log10(-783);
test_math_log10(1.7412776695200123e+308);
test_math_log10(5.004546348614593e+307);
test_math_log10("6B8LE2ZK9");
test_math_log10("OXE7AR");
test_math_log10("ABR115B");
test_math_log10(-787);
test_math_log10("CMXE34UUD");
test_math_log10(6.662087377885806e+307);
test_math_log10(1.181737496253746e+307);
test_math_log10("98H17M");
test_math_log10("NLS");
test_math_log10(-495);
test_math_log10(5.170997223713852e+307);
test_math_log10("28DBB5WV1");
test_math_log10(8.782284738519273e+307);
test_math_log10("3SS1T");
test_math_log10("W8EM");
test_math_log10("BEV7BM8N");
test_math_log10(1.1644581190082057e+308);
test_math_log10(1.5941995991480482e+308);
test_math_log10(1.1228498603475828e+308);
test_math_log10("7M2JS");
test_math_log10(-637);
test_math_log10(-493);
test_math_log10(4.456872274908332e+307);
test_math_log10(1.000694905960666e+308);
test_math_log10(-41);
test_math_log10(-821);
test_math_log10("3FU");
test_math_log10(1.1404953852466006e+308);
test_math_log10("EJ6LN8PKC");
test_math_log10(-807);
test_math_log10(-565);
test_math_log10(-709);
test_math_log10("VMXNKXZ");
test_math_log10(-865);
test_math_log10("FD9");
test_math_log10("TTBSPHDU");
test_math_log10("RB2ELHA");
test_math_log10(-833);
test_math_log10("TZL8");
test_math_log10(-91);
test_math_log10(-355);
test_math_log10("P5WX0YVKQ");
test_math_log10("JXXINWUQ");
test_math_log10(-43);
test_math_log10(6.092838028473273e+307);
test_math_log10(2.681339957007993e+307);
test_math_log10(-501);
test_math_log10(4.90876034682428e+307);
test_math_log10(1.2011445429088768e+308);
test_math_log10(-829);
test_math_log10("PN76SIL4");
test_math_log10("W78");
test_math_log10("VMXPD06G");
test_math_log10("JURP");
test_math_log10("HABUA7MS");
test_math_log10(1.1452287785891962e+308);
test_math_log10(-837);
test_math_log10(6.849717444260454e+307);
test_math_log10(-447);
test_math_log10("M62F");
test_math_log10(1.4233000901867307e+308);
test_math_log10(2.2022106068650857e+307);
test_math_log10(-535);
test_math_log10(1.0616519448002161e+308);
test_math_log10("IPGQH7");
test_math_log10("AIF");
test_math_log10("I5CZB");
test_math_log10(-923);
test_math_log10(3.7369918856598314e+307);
test_math_log10("675NUL");
test_math_log10(9.128799809366487e+307);
test_math_log10("98R5E2MF6");
test_math_log10(1.7864625231252602e+308);
test_math_log10(3.5595872814193173e+307);
test_math_log10(1.0936779965187896e+308);
test_math_log10("8AT6077XVC");
test_math_log10(-337);
test_math_log10(-545);
test_math_log10("YD1G");
test_math_log10(3.878378905411058e+307);
test_math_log10("DDST9EMF");
test_math_log10("G5AEF");
test_math_log10(1.1032611063477952e+308);
test_math_log10(8.085552348775066e+307);
test_math_log10(3.050631482784651e+307);
test_math_log10(1.3203514358175422e+308);
test_math_log10("51I");
test_math_log10(-291);
test_math_log10(-241);
test_math_log10("G8QGSOC");
test_math_log10(-965);
test_math_log10("GU916T");
test_math_log10(-729);
test_math_log10("GH2");
test_math_log10("ZVN2MVIO");
test_math_log10("4XE4BOVO5U");
test_math_log10(-557);
test_math_log10("U84I");
test_math_log10(-363);
test_math_log10(-147);
test_math_log10(1.1659203795840483e+308);
test_math_log10("7B41A");
test_math_log10(1.064317844427027e+306);
test_math_log10(1.6421373756736927e+308);
test_math_log10("327G");
test_math_log10(-63);
test_math_log10(7.095693806593595e+307);
test_math_log10(3.483564125114296e+307);
test_math_log10(-639);
test_math_log10("QJ9M");
test_math_log10("XTHCHTFJP");
test_math_log10("020K4V");
test_math_log10("BWPYC2C");
test_math_log10(1.0645598571323724e+308);
test_math_log10(-181);
test_math_log10("W5NDBHV");
test_math_log10(1.393444485378645e+308);
test_math_log10("MR5L85SZ2");
test_math_log10(-563);
test_math_log10(1.6998911645659272e+308);
test_math_log10("00TP");
test_math_log10(1.0199795858379792e+308);
test_math_log10(-919);
test_math_log10(1.4804838964428355e+307);
test_math_log10(-505);
test_math_log10("UPAWFEZ");
test_math_log10(9.84370827340775e+307);
test_math_log10(-339);
test_math_log10("16P5XZ");
test_math_log10(1.7785482070864076e+308);
test_math_log10(-687);
test_math_log10(1.1203430744842715e+308);
test_math_log10(4.892972987356896e+307);
test_math_log10("ZFV09J7X");
test_math_log10("S1ITA");
test_math_log10("PKD88R7R");
test_math_log10(1.5747909030638022e+308);
test_math_log10(-393);
test_math_log10("K6GRWA");
test_math_log10("JQL7DJ");
test_math_log10(2.2490698660818947e+307);
test_math_log10(1.6039693833677865e+308);
test_math_log10("3RHI75PI");
test_math_log10(1.9637147601666057e+307);
test_math_log10(6.626379004423154e+307);
test_math_log10("FGRG7B");
test_math_log10(6.120630546822882e+307);
test_math_log10("SHZW6ED50Z");
test_math_log10(/yes[^]*day/);
test_math_log10(1.7935037500618958e+308);
test_math_log10(3.22342772418212e+307);
test_math_log10(1.0408156385399687e+308);
test_math_log10(-55);
test_math_log10("8STY");
test_math_log10(-487);
test_math_log10(6.132191263925629e+307);
test_math_log10(-767);
test_math_log10(1.4889370651738664e+308);
test_math_log10(-25);
test_math_log10(-765);
test_math_log10("7XTNP");
test_math_log10(-519);
test_math_log10("W3XQOC5TS");
test_math_log10(-601);
test_math_log10(-183);
test_math_log10(8.56062710390795e+307);
test_math_log10("B2D");
test_math_log10(7.883074427657124e+307);
test_math_log10(-87);
test_math_log10("YOG");
test_math_log10(7.42033222076067e+307);
test_math_log10("THMI0VEDM");
test_math_log10(-29);
test_math_log10("U1A6IV");
test_math_log10(1.6795056583201745e+308);
test_math_log10(1.0525523262326211e+308);
test_math_log10(5.595504973142611e+307);
test_math_log10(-143);
test_math_log10("C3BM3G");
test_math_log10(-133);
test_math_log10("Y8Y");
test_math_log10(-127);
test_math_log10(8.11385735651694e+307);
test_math_log10("TTM");
test_math_log10(-347);
test_math_log10(1.7964915518275826e+308);
test_math_log10("GMGMIX343D");
test_math_log10(1.1796680294400113e+308);
test_math_log10(1.2685748438706096e+308);
test_math_log10(-793);
test_math_log10(1.1012189965082e+308);
test_math_log10(-631);
test_math_log10(1.0331079505863419e+307);
test_math_log10("816F");
test_math_log10("UN4WBU");
test_math_log10("JKXZ0IXG8J");
test_math_log10(1.619809368219186e+308);
test_math_log10("NKP141");
test_math_log10("GZBYF");
test_math_log10("85YZIKM777");
test_math_log10("PJ3L5VKKJX");
test_math_log10("319UW8");
test_math_log10(-5);
test_math_log10("2TSWH3");
test_math_log10("1Y5YEG58C");
test_math_log10(-173);
test_math_log10("WU7I");
test_math_log10(-115);
test_math_log10(-647);
test_math_log10(-655);
test_math_log10(4.321975627544893e+306);
test_math_log10("F3HZINEMSN");
test_math_log10(-741);
test_math_log10("B8JZG49");
test_math_log10(8.693569397813555e+307);
test_math_log10(1.424947925899958e+308);
test_math_log10(1.1729270160745074e+307);
test_math_log10(-873);
test_math_log10(1.0507973378386563e+308);
test_math_log10(8.512340575147339e+307);
test_math_log10("JGV");
test_math_log10(1.3187514929925062e+307);
test_math_log10(9.75266080098884e+305);
test_math_log10(-513);
test_math_log10("AH457");
test_math_log10("PI4SHZB");
test_math_log10(-435);
test_math_log10("V7N8");
test_math_log10("SGJ9O");
test_math_log10("J41W");
test_math_log10("PD0J");
test_math_log10("5WJT");
test_math_log10(-473);
test_math_log10(2.5114266260629045e+307);
test_math_log10(1.5909581189186104e+308);
test_math_log10("4CAX89");
test_math_log10(4.680473502602467e+307);
test_math_log10("1DQ2ZHJ73L");
test_math_log10(-373);
test_math_log10("Q8G8P8");
test_math_log10(-399);
test_math_log10(1.3320792685275115e+308);
test_math_log10(-949);
test_math_log10(-137);
test_math_log10("GDAJ");
test_math_log10(-931);
test_math_log10(1.107866205158947e+308);
test_math_log10(8.287629775315947e+307);
test_math_log10("OAXJA8XFH");
test_math_log10(-875);
test_math_log10(8.177046707656568e+307);
test_math_log10(-367);
test_math_log10(1.2779232499385017e+308);
test_math_log10(-113);
test_math_log10(1.1230589118283929e+307);
test_math_log10(-301);
test_math_log10(-77);
test_math_log10(-819);
test_math_log10(1.7725419236251538e+308);
test_math_log10(2.788454177211303e+307);
test_math_log10("O4YPVJZ8BO");
test_math_log10("JME0IUDQ4");
test_math_log10(4.907277173993829e+307);
test_math_log10(7.939378549381093e+307);
test_math_log10(-743);
test_math_log10(9.294584330096838e+307);
test_math_log10(-623);
test_math_log10("G8NCHLDG");
test_math_log10(4.714198031254729e+307);
test_math_log10(8.391767828578318e+307);
test_math_log10(-935);
test_math_log10(-861);
test_math_log10(1.421281673589286e+308);
test_math_log10("ZGF9GPMHBA");
test_math_log10(1.427612612231628e+308);
test_math_log10(1.0570735223550774e+308);
test_math_log10(7.992507913923211e+307);
test_math_log10("M12O");
test_math_log10("64YT2");
test_math_log10(-397);
test_math_log10(1.6726347407022275e+308);
test_math_log10("QGWC4");
test_math_log10("ZPK3CS1C");
test_math_log10(2.768149698409793e+307);
test_math_log10("8F973X");
test_math_log10("QMZH9AO5V");
test_math_log10("8K9");
test_math_log10("U0NWP");
test_math_log10(1.2429214980059396e+308);
test_math_log10("FHP175Y");
test_math_log10(-187);
test_math_log10(1.2365892270058777e+308);
test_math_log10(-481);
test_math_log10("QIOX7W");
test_math_log10(-645);
test_math_log10("2M7O");
test_math_log10("WT8AM5QOUA");
test_math_log10("HHSB1");
test_math_log10("1G83GWYSYE");
test_math_log10(-259);
test_math_log10("2IPVPBIP");
test_math_log10(5.826067305349853e+307);
test_math_log10("EQPY");
test_math_log10(-69);
test_math_log10(-583);
test_math_log10(-377);
test_math_log10(-955);
test_math_log10(1.639653737203806e+308);
test_math_log10(-813);
test_math_log10(7.315995051192895e+307);
test_math_log10("ZKYE5YQO");
test_math_log10("RYUXG");
test_math_log10(7.415733618956612e+307);
test_math_log10(6.985661348485125e+307);
test_math_log10(1.1452333440653996e+308);
test_math_log10("KBJO");
test_math_log10(1.0239720438727547e+308);
test_math_log10("9GCL");
test_math_log10("AUCZ6Z8IV");
test_math_log10("SIC77S");
test_math_log10(-541);
test_math_log10("HQ6");
test_math_log10("R6B");
test_math_log10("YQ9C4");
test_math_log10(2.298446063311711e+307);
test_math_log10(-653);
test_math_log10(7.507664167139627e+306);
test_math_log10(-597);
test_math_log10(5.746379805899553e+307);
test_math_log10("FRO");
test_math_log10(-327);
test_math_log10("KCNUY1ET");
test_math_log10(-325);
test_math_log10(3.9866252320438827e+307);
test_math_log10(1.4799156309928295e+308);
test_math_log10("Q3BR");
test_math_log10("TRJ");
test_math_log10("RQX9JSMOZ");
test_math_log10(1.3587874710007223e+308);
test_math_log10(-421);
test_math_log10(1.3418615036826942e+307);
test_math_log10(7.499577119827154e+307);
test_math_log10(4.451813394102281e+307);
test_math_log10(-999);
test_math_log10(-895);
test_math_log10("SQTLYXEA");
test_math_log10("LMC0NM8");
test_math_log10("6CEX2GZ");
test_math_log10(1.5804507459471238e+308);
test_math_log10(8.280113275755786e+303);
test_math_log10(1.709616368761255e+307);
test_math_log10("CYGK4RK");
test_math_log10(-253);
test_math_log10(1.7615086620404797e+308);
test_math_log10("Z5V");
test_math_log10(1.5842154274206953e+308);
test_math_log10("3FEN4WW4");
test_math_log10("DNVG0Q5N");
test_math_log10(-553);
test_math_log10(-53);
test_math_log10("IWL9");
test_math_log10("XJWGTFLV");
test_math_log10(-755);
test_math_log10("A7TNSG64XA");
test_math_log10(-445);
test_math_log10(1.5649828713586434e+308);
test_math_log10(-167);
test_math_log10("2OX");
test_math_log10(1.3406767906564888e+308);
test_math_log10(7.513231515826271e+307);
test_math_log10("C21ZEF");
test_math_log10(-701);
test_math_log10("COQ50J6XQ");
test_math_log10(1.190485512669124e+308);
test_math_log10("Q4AJFB");
test_math_log10("Y328JX18");
test_math_log10(1.7290007446236427e+308);
test_math_log10("1HURUTB");
test_math_log10("3SW7R8G");
test_math_log10(-67);
test_math_log10(-89);
test_math_log10(-471);
test_math_log10(5.12497765016163e+307);
test_math_log10(-773);
test_math_log10(-279);
test_math_log10(1.2829322190252953e+308);
test_math_log10(1.4765019563974678e+308);
test_math_log10(-815);
test_math_log10(950);
test_math_log10(-191);
test_math_log10(-749);
test_math_log10(5.754277790809454e+306);
test_math_log10("TNS");
test_math_log10("0Q2IKUA");
test_math_log10("NZ7DO0");
test_math_log10(-369);
test_math_log10(-57);
test_math_log10(-423);
test_math_log10("GI23HEJ");
test_math_log10(-503);
test_math_log10("KDAE7ALP9");
test_math_log10("UL5LB");
test_math_log10("2HELWLH94");
test_math_log10(-197);
test_math_log10(5.313636715180493e+307);
test_math_log10("NPQ3GHE7SE");
test_math_log10(-239);
test_math_log10(2.859252213113413e+307);
test_math_log10(1.1972643522323508e+308);
test_math_log10(-973);
test_math_log10(7.219403247503538e+307);
test_math_log10(-855);
test_math_log10(-251);
test_math_log10(-737);
test_math_log10(-947);
test_math_log10("6EYKUKXK1");
test_math_log10("IEAQKAKD2G");
test_math_log10("RWIEGQHTW");
test_math_log10(1.160937366766379e+308);
test_math_log10(3.858943602475599e+306);
test_math_log10(-927);
test_math_log10(8.92317825524279e+307);
test_math_log10(4.183757144193654e+307);
test_math_log10(-37);
test_math_log10("YU07UKRCSS");
test_math_log10("2PRDGB8WX");
test_math_log10(-475);
test_math_log10(-349);
test_math_log10("NVWVPJQUB");
test_math_log10(1.1443882918852355e+308);
test_math_log10(-753);
test_math_log10("I2GPA3Y");
test_math_log10("EZQ6");
test_math_log10(-711);
test_math_log10("HYHO21BB");
test_math_log10("MRG839");
test_math_log10("PAQFBQ");
test_math_log10(1.9930152895208646e+306);
test_math_log10(-891);
test_math_log10(1.4996902058271332e+308);
test_math_log10(1.3452182112707849e+308);
test_math_log10("FIUWJ7");
test_math_log10(7.631146640828615e+307);
test_math_log10("OGFUG");
test_math_log10(2.0039308077954682e+307);
test_math_log10("3KCT");
test_math_log10("Z5C7");
test_math_log10(-659);
test_math_log10(1.3887822880315823e+308);
test_math_log10("4P38");
test_math_log10(4.993153858980031e+307);
test_math_log10("PJG74GH");
test_math_log10(-525);
test_math_log10("Y0333");
test_math_log10(-969);
test_math_log10("4930ZOKR");
test_math_log10("0AOO0ND3");
test_math_log10(1.5659479040217722e+307);
test_math_log10(-351);
test_math_log10(-905);
test_math_log10("49V4");
test_math_log10(4.0083269767866294e+307);
test_math_log10("2E8DP0R453");
test_math_log10("EQKS26X");
test_math_log10(-571);
test_math_log10("L8JU");
test_math_log10("4RD");
test_math_log10("G8R0CDK98K");
test_math_log10(1.1405397283258806e+307);
test_math_log10("A6Z");
test_math_log10(3.6108308208328744e+307);
test_math_log10(1.441247455703238e+308);
test_math_log10(1.4796181799567618e+308);
test_math_log10("EGZ");
test_math_log10("MGUJ");
test_math_log10("HOXR655I9R");
test_math_log10("A2LMF");
test_math_log10(5.027788080244277e+307);
test_math_log10(1.3433979406745826e+308);
test_math_log10(6.990817335139131e+307);
test_math_log10("L1PFLFAE1");
test_math_log10(1.8925939104397385e+307);
test_math_log10("GKLO4");
test_math_log10(5.214098818564343e+307);
test_math_log10(6.51744652195652e+307);
test_math_log10(-587);
test_math_log10("NDKOUPVPO");
test_math_log10("X8V4LDYZFK");
test_math_log10(-577);
test_math_log10(-409);
test_math_log10(8.737063169353378e+307);
test_math_log10(1.0445288187993474e+308);
test_math_log10(6.205725682132551e+307);
test_math_log10(-817);
test_math_log10(-859);
test_math_log10(1.1482900730275009e+308);
test_math_log10(3.851996273863475e+307);
test_math_log10("MR56EH");
test_math_log10("7HB2D8JJ8");
test_math_log10(-951);
test_math_log10(1.0234993114483204e+308);
test_math_log10(9.020629326480608e+307);
test_math_log10(1.1782815897088773e+308);
test_math_log10("0MXJN");
test_math_log10(1.2770748915184502e+308);
test_math_log10(1.4222131084598224e+308);
test_math_log10(1.325583117273345e+308);
test_math_log10(1.41655489888698e+308);
test_math_log10(1.5629138733877058e+308);
test_math_log10(7.311406652255928e+307);
test_math_log10(1.048555792738371e+308);
test_math_log10(1.6906429162982893e+308);
test_math_log10(-933);
test_math_log10(1.3372250138883167e+307);
test_math_log10(5.894075592441611e+307);
test_math_log10(-385);
test_math_log10(1.5266689752424035e+308);
test_math_log10("RS5V");
test_math_log10("RIPDSMTX");
test_math_log10(1.4823201699992504e+307);
test_math_log10("GR8");
test_math_log10(-19);
test_math_log10("X3XZA");
test_math_log10(1.2811618420135895e+308);
test_math_log10(1.7196322815566974e+308);
test_math_log10("YRBPH");
test_math_log10(3.356371451021725e+307);
test_math_log10("Z8OR");
test_math_log10(7.668837687375234e+307);
test_math_log10("X5D");
test_math_log10("YQJA0");
test_math_log10("70SYNDIP");
test_math_log10("L6TGP5DEU");
test_math_log10("UUIBUH0");
test_math_log10(-155);
test_math_log10(-271);
test_math_log10(1.4632602813439422e+308);
test_math_log10("CUC");
test_math_log10("S88OXOSJ");
test_math_log10("PBIFCUSIKP");
test_math_log10(2.7954485436044685e+307);
test_math_log10(-761);
test_math_log10(-717);
test_math_log10(1.7653746518246976e+307);
test_math_log10(-585);
test_math_log10(4.96322955635001e+307);
test_math_log10("IK00JB83");
test_math_log10("CL8HJW");
test_math_log10(844);
test_math_log10("2IJS");
test_math_log10("OXLKDZZR");
test_math_log10(5.616072931403926e+307);
test_math_log10(3.9101668625931296e+307);
test_math_log10(1.2631754608376391e+308);
test_math_log10(-719);
test_math_log10(1.777100042363442e+308);
test_math_log10("2ZGZUPC");
test_math_log10(-193);
test_math_log10("RCD0NONX4");
test_math_log10(5.132677203716063e+307);
test_math_log10(1.3497742250029242e+308);
test_math_log10(-715);
test_math_log10("U6BBCCPE");
test_math_log10("9Y9FFIX");
test_math_log10(1.5066979454083596e+308);
test_math_log10("6XDW9");
test_math_log10(3.1445155344232417e+307);
test_math_log10(-853);
test_math_log10(1.7724496093358547e+308);
test_math_log10(-547);
test_math_log10(8.785726149860832e+307);
test_math_log10("TX8F3");
test_math_log10("NV8NJQS6S");
test_math_log10(5.645536627679739e+307);
test_math_log10(1.50191053374453e+307);
test_math_log10(7.961224929908725e+307);
test_math_log10("N9W2OEIH9");
test_math_log10(-979);
test_math_log10("L5R");
test_math_log10(1.2279979144652398e+308);
test_math_log10("ENPCH1Z");
test_math_log10("HT0UGV0WG");
test_math_log10(1.7781743533316215e+308);
test_math_log10(-123);
test_math_log10(-763);
test_math_log10(-105);
test_math_log10("NBE5");
test_math_log10(-665);
test_math_log10(-615);
test_math_log10(-31);
test_math_log10("WW8C5T");
test_math_log10("UA74P8");
test_math_log10(2.4108552983409093e+307);
test_math_log10("F8KVB38");
test_math_log10(-79);
test_math_log10("BO4W357");
test_math_log10("CKKEWOB364");
test_math_log10("3O8");
test_math_log10(4.2335300690633717e+307);
test_math_log10(-945);
test_math_log10(7.030466263008287e+307);
test_math_log10(7.561411115130938e+307);
test_math_log10(-699);
test_math_log10(2.6381741422933407e+307);
test_math_log10("BPKG56I2");
test_math_log10("7V515");
test_math_log10("D0JJ");
test_math_log10(1.9659281224795763e+307);
test_math_log10(6.578654600039009e+307);
test_math_log10(-539);
test_math_log10("BKOPU7");
test_math_log10(9.025412084776493e+307);
test_math_log10(-981);
test_math_log10("GIENH1G1");
test_math_log10(1.1216654934314522e+308);
test_math_log10(-841);
test_math_log10("01F1DX72QY");
test_math_log10("ZTA5O4UH9F");
test_math_log10(-121);
test_math_log10(5.0551371613683594e+306);
test_math_log10(1.8876742109796394e+307);
test_math_log10(4.0748523605305416e+307);
test_math_log10("CXZZKZ");
test_math_log10(9.328984695307659e+306);
test_math_log10("ADCH");
test_math_log10("3QRQTNFQP");
test_math_log10(490);
test_math_log10(1.4484730679841079e+308);
test_math_log10("GRTXAINHA");
test_math_log10("NYZMUFAS");
test_math_log10(5.83494519164406e+307);
test_math_log10("7ZRDD7T");
test_math_log10(1.2650568798760963e+308);
test_math_log10(1.882524180101588e+307);
test_math_log10(1.5227102246869764e+308);
test_math_log10(1.0399319314445741e+308);
test_math_log10(1.8144914010501585e+306);
test_math_log10(-465);
test_math_log10(1.0933923626871822e+308);
test_math_log10(-321);
test_math_log10(-425);
test_math_log10(4.967879691766168e+307);
test_math_log10(-407);
test_math_log10(-635);
test_math_log10(9.027780023826717e+306);
test_math_log10("MNH2T");
test_math_log10("B01Q9H");
test_math_log10(-257);
test_math_log10(-459);
test_math_log10(7.292799588028992e+307);
test_math_log10(-671);
test_math_log10(1.697102866336961e+308);
test_math_log10("R8HY6A7");
test_math_log10(1.687706534184224e+308);
test_math_log10(9.833382814296956e+307);
test_math_log10("20LKTCTZJR");
test_math_log10("00GF2X6");
test_math_log10(8.357483907180381e+307);
test_math_log10(1.2720333593864405e+308);
test_math_log10("HB45I8G59F");
test_math_log10(-17);
test_math_log10("O3JW4U");
test_math_log10(-759);
test_math_log10(-443);
test_math_log10(-185);
test_math_log10("U9ZG");
test_math_log10("PMVPQ");
test_math_log10(3.905552604028334e+306);
test_math_log10(-621);
test_math_log10(6.318580567592133e+307);
test_math_log10(6.832443133539152e+307);
test_math_log10(1.7251245333097186e+308);
test_math_log10("TUL");
test_math_log10(-309);
test_math_log10("OEOP");
test_math_log10(8.450578291014061e+307);
test_math_log10(1.5131400452045602e+308);
test_math_log10(6.039853435819053e+307);
test_math_log10(1.5742156740276076e+308);
test_math_log10("W1Y2OMR");
test_math_log10("GVK");
test_math_log10("FTOM4");
test_math_log10("F7YH9THF");
test_math_log10("BJ1DZ0YRB");
test_math_log10(-507);
test_math_log10(-125);
test_math_log10("MDQ");
test_math_log10(8.636534465879675e+306);
test_math_log10(5.836267728901078e+307);
test_math_log10(-603);
test_math_log10(1.1382960844882443e+308);
test_math_log10(1.2756005096198103e+308);
test_math_log10(-735);
test_math_log10(8.374018142252612e+307);
test_math_log10("QSS1TCWP");
test_math_log10("NQ4H81Z");
test_math_log10(8.603121788766838e+307);
test_math_log10(-375);
test_math_log10(1.5170770329979501e+308);
test_math_log10(7.616725459211951e+307);
test_math_log10("EEAYQE");
test_math_log10(-485);
test_math_log10("UFH");
test_math_log10(-663);
test_math_log10(5.384581817445654e+307);
test_math_log10(-489);
test_math_log10(-217);
test_math_log10("R5A");
test_math_log10("VDYXYFF4L");
test_math_log10("Q2V265RT");
test_math_log10(6.023419225891739e+307);
test_math_log10(-907);
test_math_log10(-51);
test_math_log10(4.587963681954181e+306);
test_math_log10("GNDC2");
test_math_log10(8.836549575961489e+307);
test_math_log10(1.3511886084081214e+308);
test_math_log10(1.4372072055179036e+307);
test_math_log10("F09QIQLLK7");
test_math_log10(8.559541701712552e+307);
test_math_log10(9.460533684920628e+307);
test_math_log10(-937);
test_math_log10("6W8PXDD");
test_math_log10(-365);
test_math_log10("9AW8G");
test_math_log10(-343);
test_math_log10("V9GC7");
test_math_log10("99V8H7J16M");
test_math_log10(5.242771312844699e+307);
test_math_log10("VGRM");
test_math_log10(9.501994055410547e+307);
test_math_log10(-141);
test_math_log10("WT0OX");
test_math_log10("HT2AH96");
test_math_log10("9Y51K");
test_math_log10("MSGNJ");
test_math_log10(2.3792462188671927e+307);
test_math_log10("54IFG55");
test_math_log10(-703);
test_math_log10("1X8");
test_math_log10(-619);
test_math_log10("3X0HVD");
test_math_log10(-695);
test_math_log10(6.493400323238432e+307);
test_math_log10("65BNIJOVQ");
test_math_log10(8.18086988936101e+307);
test_math_log10(-581);
test_math_log10("GVW1A34YYF");
test_math_log10(6.490088251813152e+307);
test_math_log10("1RLM1PGSAM");
test_math_log10(2.890139126807723e+304);
test_math_log10("ML9EJXK");
test_math_log10(2.043417671021808e+307);
test_math_log10(9.955167501527793e+307);
test_math_log10("IH2YA54TGS");
test_math_log10("DZOJUNWH");
test_math_log10(1.7659515283225132e+308);
test_math_log10("R1H9J5");
test_math_log10("ZTOXFUP6OK");
test_math_log10(-161);
test_math_log10("FVBULO1NGX");
test_math_log10(1.0120133361348528e+308);
test_math_log10("QFJ");
test_math_log10("JTO6G2");
test_math_log10("2WZ3YG0I");
test_math_log10("2OKAMHRP1");
test_math_log10(-789);
test_math_log10(1.7786488316007792e+308);
test_math_log10(1.3353363492568366e+308);
test_math_log10("TXS6S");
test_math_log10("BGNWUYH8F");
test_math_log10(202);
test_math_log10(-305);
test_math_log10(1.7663194059399305e+308);
test_math_log10(1.2359001838516168e+308);
test_math_log10("LSX");
test_math_log10("30HCHB");
test_math_log10("GJ015BMVX9");
test_math_log10(3.014904982553633e+307);
test_math_log10(2.597442275730215e+306);
test_math_log10(-669);
test_math_log10(-555);
test_math_log10(-791);
test_math_log10("GN59");
test_math_log10(8.147840470082031e+307);
test_math_log10(-497);
test_math_log10("FW7Q7");
test_math_log10(1.0705959467932472e+307);
test_math_log10("XPX");
test_math_log10(3.116154190001841e+307);
test_math_log10("CKQPGUX2FX");
test_math_log10(1.0695521855966553e+308);
test_math_log10(-357);
test_math_log10(1.6115214321342164e+308);
test_math_log10(5.431526166741374e+307);
test_math_log10(1.9098606663534848e+307);
test_math_log10("W2FQEAZG");
test_math_log10("6A1KNKLESB");
test_math_log10("QP53");
test_math_log10("87QVOEFML");
test_math_log10("X4V6MKJF8");
test_math_log10(1.4253090721662016e+308);
test_math_log10(-449);
test_math_log10("BUKEJ2ZL");
test_math_log10(1.6884754997678657e+308);
test_math_log10("8CGKM38W");
test_math_log10("WVAV20L1RV");
test_math_log10(2.276381225942378e+307);
test_math_log10(1.342996523204765e+308);
test_math_log10("F6WQX");
test_math_log10("UNB");
test_math_log10(1.5481108715591538e+308);
test_math_log10(5.042566462305786e+307);
test_math_log10("B5H");
test_math_log10(8.103522854043272e+307);
test_math_log10("RRI07");
test_math_log10("3LR0L347H");
test_math_log10(9.221668665998948e+307);
test_math_log10(2.308840305430609e+306);
test_math_log10(-831);
test_math_log10(482);
test_math_log10(9.311816565728551e+307);
test_math_log10("3SJ5FC");
test_math_log10(7.412037797239004e+307);
test_math_log10("4XN6MT");
test_math_log10(1.6326174880978022e+308);
test_math_log10("OS5G135");
test_math_log10(-165);
test_math_log10("UDW2NGUQ47");
test_math_log10("JH3ZU7H");
test_math_log10(1.6436320724548633e+308);
test_math_log10("XS2L5MKF");
test_math_log10(-379);
test_math_log10(6.136884501597244e+307);
test_math_log10(8.596541273342361e+307);
test_math_log10("EO4E");
test_math_log10(-163);
test_math_log10(-609);
test_math_log10(-963);
test_math_log10("YSJ9");
test_math_log10(1.518689016689893e+308);
test_math_log10("L1KBD3Y3");
test_math_log10(-199);
test_math_log10("AEFPGN");
test_math_log10(6.61734868926915e+306);
test_math_log10("RISTZQGSR7");
test_math_log10("ULI");
test_math_log10(-769);
test_math_log10(3.777970913717125e+307);
test_math_log10(1.7824192880096744e+308);
test_math_log10(1.7615012626045465e+308);
test_math_log10(-169);
test_math_log10(1.5671668428296366e+308);
test_math_log10(-71);
test_math_log10(-797);
test_math_log10(6.628640682360273e+307);
test_math_log10("H3J68W3JBF");
test_math_log10("RE3P1N");
test_math_log10("ZEZQ2KO");
test_math_log10("KWNW4Y92");
test_math_log10("7YZVPE");
test_math_log10(6.322919078444683e+307);
test_math_log10(-939);
test_math_log10(7.555580049262767e+307);
test_math_log10("A4VJDXUW");
test_math_log10(1.1288331059095053e+308);
test_math_log10(-455);
test_math_log10("S04SG");
test_math_log10("ZCN3VKE");
test_math_log10(9.788782336131863e+306);
test_math_log10(-439);
test_math_log10("CTSJ73C");
test_math_log10("V3MV");
test_math_log10("RZB1TE3");
test_math_log10("8M1D");
test_math_log10(-987);
test_math_log10("EPZ");
test_math_log10(-657);
test_math_log10(1.7390264038102464e+308);
test_math_log10(-211);
test_math_log10(1.6663700987354633e+308);
test_math_log10(4.806697284385124e+307);
test_math_log10(-371);
test_math_log10(-189);
test_math_log10(-227);
test_math_log10("OHETB");
test_math_log10("7QBCYRM9L");
test_math_log10(-751);
test_math_log10("SI80UD1Y");
test_math_log10("QA7CDUX1");
