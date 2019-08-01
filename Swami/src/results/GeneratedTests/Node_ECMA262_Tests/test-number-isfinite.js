/*
* This file is automatically generated by Swami
*
* 2019-08-01 15:58:21.136928
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
function test_number_isfinite(number){
	if (( typeof ( number ) != "number" )){
		var output = Number.isFinite(number);
		assert.strictEqual(false, output);
		console.log("Good Test");
		return;
		}
	if ((Object.is( number,NaN) &&  number === + Infinity  &&  number ===- Infinity )){
		var output = Number.isFinite(number);
		assert.strictEqual(false, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}



/*TESTS GENERATED AUTOMATICALLY*/
test_number_isfinite(true);
test_number_isfinite(/[\u0400-\u04FF]+/g);
test_number_isfinite(+0);
test_number_isfinite(5.529471824322725e+307);
test_number_isfinite(6.570634629610409e+307);
test_number_isfinite(false);
test_number_isfinite(null);
test_number_isfinite(undefined);
test_number_isfinite(/(\w+)\s(\w+)/);
test_number_isfinite("Q3UZVF");
test_number_isfinite(-0);
test_number_isfinite(Infinity);
test_number_isfinite(5.044002214793617e+307);
test_number_isfinite(-649);
test_number_isfinite("VPXOO3N4");
test_number_isfinite("YI68ZV0E");
test_number_isfinite(/[^.]+/);
test_number_isfinite(1.1821090030837166e+308);
test_number_isfinite(-573);
test_number_isfinite(/\r\n|\r|\n/);
test_number_isfinite(/foo/g);
test_number_isfinite(1.5964991579031609e+308);
test_number_isfinite(/yes.*day/);
test_number_isfinite(-379);
test_number_isfinite(7.389655648398681e+307);
test_number_isfinite(1.0369506043544741e+308);
test_number_isfinite(/yes[^]*day/);
test_number_isfinite(-139);
test_number_isfinite(/ab+c/);
test_number_isfinite(1.2450106194964545e+308);
test_number_isfinite(3.775735444107558e+307);
test_number_isfinite("KA6FW");
test_number_isfinite(-331);
test_number_isfinite(-421);
test_number_isfinite("B7AR");
test_number_isfinite("T8D");
test_number_isfinite(7.713445679846062e+307);
test_number_isfinite("KZ2KGH");
test_number_isfinite(1.1991232582841863e+308);
test_number_isfinite(-65);
test_number_isfinite("75N2HL");
test_number_isfinite(-187);
test_number_isfinite(NaN);
test_number_isfinite("50A");
test_number_isfinite(-767);
test_number_isfinite(-455);
test_number_isfinite(4.4014781532694297e+307);
test_number_isfinite(1.7684636092873894e+308);
test_number_isfinite(-295);
test_number_isfinite(1.4341519898162484e+307);
test_number_isfinite(2.723884870443117e+307);
test_number_isfinite(1.2620272585170316e+308);
test_number_isfinite(-35);
test_number_isfinite(1.2530536996221362e+308);
test_number_isfinite("2PQYK");
test_number_isfinite("V7O1EU2UR2");
test_number_isfinite("IC04BBCIG");
test_number_isfinite(5.231165485255452e+307);
test_number_isfinite(9.461729051257497e+307);
test_number_isfinite("816XIP11EQ");
test_number_isfinite(-459);
test_number_isfinite(-743);
test_number_isfinite(-957);
test_number_isfinite(8.2229912751803e+307);
test_number_isfinite(4.240293474142394e+307);
test_number_isfinite("KOWWHET");
test_number_isfinite(1.0994533000122707e+308);
test_number_isfinite(-297);
test_number_isfinite(-681);
test_number_isfinite(3.478988555832327e+307);
test_number_isfinite(-889);
test_number_isfinite(-725);
test_number_isfinite("QLJR58NF");
test_number_isfinite(-127);
test_number_isfinite("SCL1A");
test_number_isfinite(4.831337935249142e+307);
test_number_isfinite("AWRRYOQFW");
test_number_isfinite("TC9SI13XC");
test_number_isfinite(-775);
test_number_isfinite("WX63W");
test_number_isfinite(1.9263423267615336e+307);
test_number_isfinite(1.7774108090159307e+306);
test_number_isfinite(2.394393201397734e+307);
test_number_isfinite(-59);
test_number_isfinite(-887);
test_number_isfinite("D59YESNF");
test_number_isfinite("IG6Z");
test_number_isfinite(1.695437776207265e+308);
test_number_isfinite(1.104718064292431e+308);
test_number_isfinite("85OWX43355");
test_number_isfinite("851KX");
test_number_isfinite(1.6622743686766655e+308);
test_number_isfinite(4.3345459162445924e+307);
test_number_isfinite(1.2125998133081672e+308);
test_number_isfinite(-961);
test_number_isfinite("WNX9RCOTX");
test_number_isfinite(-693);
test_number_isfinite(3.03231129613348e+307);
test_number_isfinite(1.324170095125114e+308);
test_number_isfinite(1.4079801776155626e+308);
test_number_isfinite(-521);
test_number_isfinite("SKMT4");
test_number_isfinite(1.6324067064737617e+308);
test_number_isfinite("8NC");
test_number_isfinite(-509);
test_number_isfinite("ZMNCCX");
test_number_isfinite("I5YJ");
test_number_isfinite("4JLND5TFRU");
test_number_isfinite(1.3402117910344176e+308);
test_number_isfinite(-805);
test_number_isfinite(-357);
test_number_isfinite("VA0");
test_number_isfinite(7.667789669538262e+307);
test_number_isfinite(-415);
test_number_isfinite(-437);
test_number_isfinite("4UV0XMB");
test_number_isfinite(3.024867445655351e+307);
test_number_isfinite("IZY049GY2");
test_number_isfinite("63P962V9B");
test_number_isfinite(-783);
test_number_isfinite(-337);
test_number_isfinite(-241);
test_number_isfinite(-121);
test_number_isfinite("D4K");
test_number_isfinite(6.010474388395487e+306);
test_number_isfinite(-515);
test_number_isfinite("757XQZ7IY");
test_number_isfinite(-43);
test_number_isfinite(-699);
test_number_isfinite(1.1425272716213248e+308);
test_number_isfinite("87SU0DX");
test_number_isfinite("Y7XUFCK");
test_number_isfinite(-933);
test_number_isfinite(8.226621485112984e+307);
test_number_isfinite(9.586320019215418e+307);
test_number_isfinite(-405);
test_number_isfinite(1.0509277712446918e+308);
test_number_isfinite("RUPJJ");
test_number_isfinite(-361);
test_number_isfinite("O6EJ");
test_number_isfinite(1.0256946050543134e+308);
test_number_isfinite(6.550391825277301e+307);
test_number_isfinite(5.911353882474425e+307);
test_number_isfinite(1.4323300527763897e+308);
test_number_isfinite(1.1123206528590922e+308);
test_number_isfinite("WILNLP3G");
test_number_isfinite("VNY8");
test_number_isfinite(-615);
test_number_isfinite(-99);
test_number_isfinite(1.5377846187508545e+307);
test_number_isfinite("W3XSQS");
test_number_isfinite("PRG4HIJ5O");
test_number_isfinite(-921);
test_number_isfinite("RTZ4W82");
test_number_isfinite("1CZ0P");
test_number_isfinite("33GTNEQ");
test_number_isfinite(-849);
test_number_isfinite(1.59638236054461e+307);
test_number_isfinite(8.073796993785369e+306);
test_number_isfinite("59JYBK");
test_number_isfinite(-697);
test_number_isfinite("GT1D2S2Z");
test_number_isfinite("51R3W");
test_number_isfinite(-937);
test_number_isfinite(1.4422738274900218e+308);
test_number_isfinite(-181);
test_number_isfinite(7.655325325772079e+307);
test_number_isfinite("ZM2");
test_number_isfinite("XMZB5");
test_number_isfinite(-125);
test_number_isfinite(8.95536182741122e+307);
test_number_isfinite(-585);
test_number_isfinite(3.164059294160814e+307);
test_number_isfinite(1.585269242311523e+308);
test_number_isfinite("N2XSDD8");
test_number_isfinite(-439);
test_number_isfinite(7.255826379147315e+307);
test_number_isfinite(1.1639849233390966e+308);
test_number_isfinite("WW0BP");
test_number_isfinite(-347);
test_number_isfinite(-211);
test_number_isfinite(-71);
test_number_isfinite("3SVRL1");
test_number_isfinite(1.720068228576633e+308);
test_number_isfinite(4.539927036757135e+307);
test_number_isfinite("KSI");
test_number_isfinite(1.6192143104213067e+308);
test_number_isfinite(7.107406561578639e+307);
test_number_isfinite(-817);
test_number_isfinite(-901);
test_number_isfinite(-713);
test_number_isfinite(1.5067335764494535e+307);
test_number_isfinite("LLVJF7L3Q");
test_number_isfinite(-341);
test_number_isfinite("IVCZOAW");
test_number_isfinite(5.89267782104337e+307);
test_number_isfinite(-891);
test_number_isfinite(-637);
test_number_isfinite(1.3958075281826484e+308);
test_number_isfinite(1.1117496906944948e+308);
test_number_isfinite("VKR6OBR0Q");
test_number_isfinite(-97);
test_number_isfinite(-875);
test_number_isfinite("QIHT");
test_number_isfinite("XVO4OAA69");
test_number_isfinite("HMHETRZ");
test_number_isfinite(4.521934072369223e+307);
test_number_isfinite("XTL0YM");
test_number_isfinite("M3ENG8");
test_number_isfinite(1.6962054719746817e+307);
test_number_isfinite(1.6267634100618728e+308);
test_number_isfinite(-135);
test_number_isfinite(-979);
test_number_isfinite(1.3153898560763694e+308);
test_number_isfinite(4.982725958121984e+307);
test_number_isfinite(2.2981951094173075e+307);
test_number_isfinite("Y7ICVZIV5");
test_number_isfinite(2.736882450735317e+307);
test_number_isfinite("P8PG6BD");
test_number_isfinite(-759);
test_number_isfinite("V5Y50A");
test_number_isfinite(-355);
test_number_isfinite("I3RNH");
test_number_isfinite("4CRO");
test_number_isfinite(1.2425239805291224e+308);
test_number_isfinite("IWFJ1");
test_number_isfinite(4.842444200254901e+307);
test_number_isfinite("XKHDTTVX9");
test_number_isfinite(3.8204993360648317e+307);
test_number_isfinite(8.802013594786208e+306);
test_number_isfinite(-151);
test_number_isfinite(1.2503746739398765e+308);
test_number_isfinite(-935);
test_number_isfinite("AIW");
test_number_isfinite("U7U");
test_number_isfinite(1.2940797894296464e+308);
test_number_isfinite(1.2933562380497576e+308);
test_number_isfinite("62HBMGFSA");
test_number_isfinite(1.344092652063001e+307);
test_number_isfinite("ZQJFDQLE");
test_number_isfinite(1.2870100945274775e+308);
test_number_isfinite("LAAA1KJ");
test_number_isfinite(5.264689473782773e+307);
test_number_isfinite(4.665343720900021e+307);
test_number_isfinite(1.2723364020389012e+308);
test_number_isfinite(-597);
test_number_isfinite(1.7730066674906302e+308);
test_number_isfinite(6.715790698635212e+307);
test_number_isfinite("7RHIUHBC");
test_number_isfinite(6.779048194826059e+307);
test_number_isfinite("1PVJCRNI4T");
test_number_isfinite("H0D");
test_number_isfinite(-291);
test_number_isfinite(4.281431908117505e+307);
test_number_isfinite(1.259713330144573e+308);
test_number_isfinite(-177);
test_number_isfinite("296");
test_number_isfinite("X9E10WJ6");
test_number_isfinite("08MG");
test_number_isfinite(-771);
test_number_isfinite("CI7");
test_number_isfinite(1.3117058108757238e+308);
test_number_isfinite(1.6186552193799346e+308);
test_number_isfinite(-289);
test_number_isfinite(-153);
test_number_isfinite(6.503260721055623e+307);
test_number_isfinite(1.3172728157371372e+308);
test_number_isfinite("1AYTO2");
test_number_isfinite(1.6167525700578125e+308);
test_number_isfinite(-263);
test_number_isfinite("3O2RVIRDS");
test_number_isfinite("FSK");
test_number_isfinite(1.5770777886264737e+308);
test_number_isfinite(-377);
test_number_isfinite(-349);
test_number_isfinite("C0OLV5LDT");
test_number_isfinite(1.378412701374897e+308);
test_number_isfinite(1.537194826005521e+308);
test_number_isfinite(-653);
test_number_isfinite(-991);
test_number_isfinite(-559);
test_number_isfinite(1.619768359030054e+308);
test_number_isfinite(-353);
test_number_isfinite(-709);
test_number_isfinite("4JG1EN");
test_number_isfinite("T2SW7K");
test_number_isfinite(-223);
test_number_isfinite(1.2517873109337924e+308);
test_number_isfinite(-89);
test_number_isfinite("4S1BIH3");
test_number_isfinite(9.158712792078027e+307);
test_number_isfinite(-201);
test_number_isfinite("SL9F0I63F");
test_number_isfinite("HNVBR13QK");
test_number_isfinite("Q08A87A");
test_number_isfinite(9.014586286074844e+307);
test_number_isfinite(8.187694056472421e+307);
test_number_isfinite(9.860634496690388e+306);
test_number_isfinite(3.142475365074524e+307);
test_number_isfinite("XIIAF82IT");
test_number_isfinite(1.0624077946763689e+307);
test_number_isfinite(1.258971159453511e+308);
test_number_isfinite("J6LK40N75");
test_number_isfinite("F8Z");
test_number_isfinite("KD9L");
test_number_isfinite("4NR");
test_number_isfinite(1.6847144817170347e+308);
test_number_isfinite(-79);
test_number_isfinite(-383);
test_number_isfinite(2.962212495901841e+307);
test_number_isfinite("FLHWRFH");
test_number_isfinite(1.259748426825898e+308);
test_number_isfinite("F71NG");
test_number_isfinite(7.45597822215571e+307);
test_number_isfinite("42S6RL");
test_number_isfinite("Y1B");
test_number_isfinite(1.0373095517193047e+308);
test_number_isfinite(1.7431337693200633e+308);
test_number_isfinite(-443);
test_number_isfinite(-173);
test_number_isfinite("F1JY");
test_number_isfinite(-893);
test_number_isfinite("AKHJ59M");
test_number_isfinite(1.2753831025469778e+308);
test_number_isfinite(-69);
test_number_isfinite("XCSER");
test_number_isfinite("53H9QF4DW");
test_number_isfinite("YZWG");
test_number_isfinite(-523);
test_number_isfinite("UY2C98V7FT");
test_number_isfinite("84XRO9XJ");
test_number_isfinite("BO43KM");
test_number_isfinite(-37);
test_number_isfinite("34X9M");
test_number_isfinite(1.1221065584695727e+308);
test_number_isfinite(7.229376707100301e+307);
test_number_isfinite(-323);
test_number_isfinite(-45);
test_number_isfinite(-145);
test_number_isfinite("PHV");
test_number_isfinite(1.1702170007166447e+308);
test_number_isfinite(-813);
test_number_isfinite(-895);
test_number_isfinite("FAGS7AA9O");
test_number_isfinite("O6P2F");
test_number_isfinite(-83);
test_number_isfinite("73L");
test_number_isfinite(-739);
test_number_isfinite("RDHI92B1");
test_number_isfinite(1.3728141597353883e+308);
test_number_isfinite(1.6038612844195707e+308);
test_number_isfinite(1.052037699582852e+308);
test_number_isfinite("SB0");
test_number_isfinite(9.983103646883981e+307);
test_number_isfinite(8.564230362538503e+307);
test_number_isfinite(1.934784384962748e+307);
test_number_isfinite("WNZM");
test_number_isfinite("TNZM");
test_number_isfinite(-273);
test_number_isfinite(8.206938006802454e+307);
test_number_isfinite("FMHP64");
test_number_isfinite(4.4551622310262696e+307);
test_number_isfinite(2.6067243753889586e+307);
test_number_isfinite(-869);
test_number_isfinite("1ONLFTLP1I");
test_number_isfinite(-303);
test_number_isfinite("KNI091UQ6X");
test_number_isfinite(5.900396071043291e+307);
test_number_isfinite(2.834226147475842e+307);
test_number_isfinite(-343);
test_number_isfinite("VU9Y4C5A");
test_number_isfinite(1.5594808232155109e+308);
test_number_isfinite(-749);
test_number_isfinite("KNEP8LY9CJ");
test_number_isfinite(1.1370061226822682e+308);
test_number_isfinite(-865);
test_number_isfinite(1.3315264362942223e+307);
test_number_isfinite(5.597342980988351e+306);
test_number_isfinite("D1ICK68Y4E");
test_number_isfinite("BVVCX04JWW");
test_number_isfinite(-867);
test_number_isfinite(-859);
test_number_isfinite("2WHAV1HK");
test_number_isfinite("LM17R0Z5LN");
test_number_isfinite(-313);
test_number_isfinite(-251);
test_number_isfinite(-469);
test_number_isfinite("75YMK");
test_number_isfinite(1.625566864583204e+308);
test_number_isfinite(1.2073786359584551e+308);
test_number_isfinite(9.254260621347392e+307);
test_number_isfinite(1.3396840266829656e+308);
test_number_isfinite("KGR");
test_number_isfinite("6SUXLT");
test_number_isfinite(1.3607018012892769e+308);
test_number_isfinite(-841);
test_number_isfinite("V8D");
test_number_isfinite("2P0");
test_number_isfinite(1.186873538455613e+308);
test_number_isfinite(8.498341804917136e+307);
test_number_isfinite(-969);
test_number_isfinite("374XBAIT9D");
test_number_isfinite(-391);
test_number_isfinite(-727);
test_number_isfinite(5.348581857354364e+307);
test_number_isfinite(1.5752501159801407e+308);
test_number_isfinite(-169);
test_number_isfinite(-435);
test_number_isfinite(1.1037038398664898e+308);
test_number_isfinite("XKE");
test_number_isfinite(2.4905409785861044e+307);
test_number_isfinite("1WZUW");
test_number_isfinite(3.372778300807437e+307);
test_number_isfinite("TOY2MZ");
test_number_isfinite("BVFW8D8YJ");
test_number_isfinite(-977);
test_number_isfinite("P4E1IWU6");
test_number_isfinite(-77);
test_number_isfinite(-183);
test_number_isfinite("JQQ");
test_number_isfinite(-995);
test_number_isfinite(1.7190732713291492e+308);
test_number_isfinite(-133);
test_number_isfinite(-777);
test_number_isfinite(8.634947032435606e+307);
test_number_isfinite(-825);
test_number_isfinite("LRF9G9QH");
test_number_isfinite(514);
test_number_isfinite(-671);
test_number_isfinite("D8LDJS02PX");
test_number_isfinite("XCSM");
test_number_isfinite("0BR5P");
test_number_isfinite(-833);
test_number_isfinite("QJLVRLIK9");
test_number_isfinite("0KV");
test_number_isfinite(-715);
test_number_isfinite("NIWLZZ7K1J");
test_number_isfinite(4.573120971626895e+307);
test_number_isfinite("ANAQCL6A0R");
test_number_isfinite("5GPD16QM1");
test_number_isfinite("9SE");
test_number_isfinite("5E9DCJ0QO");
test_number_isfinite("ALFG");
test_number_isfinite("PDTDL28T4");
test_number_isfinite(-551);
test_number_isfinite(-835);
test_number_isfinite(-47);
test_number_isfinite(-221);
test_number_isfinite("CP0DK");
test_number_isfinite(1.4661974181858093e+307);
test_number_isfinite(3.8299908067628575e+306);
test_number_isfinite("U2WC2V3");
test_number_isfinite("WBN7OCBO");
test_number_isfinite("4P9YVAP");
test_number_isfinite("EWQJW2D");
test_number_isfinite(5.960231859755214e+306);
test_number_isfinite(1.0486747938984887e+308);
test_number_isfinite(-623);
test_number_isfinite("4L9388DZ");
test_number_isfinite("ST1");
test_number_isfinite("KFG");
test_number_isfinite(-719);
test_number_isfinite("0DYV");
test_number_isfinite("NAIGBMAM");
test_number_isfinite(-217);
test_number_isfinite(3.8988694296481995e+307);
test_number_isfinite(-321);
test_number_isfinite(-369);
test_number_isfinite("3CDWA9BCG8");
test_number_isfinite(1.1258179835432983e+308);
test_number_isfinite(7.169204725679538e+307);
test_number_isfinite("PTJCJ7V");
test_number_isfinite("KHIU");
test_number_isfinite("03E8");
test_number_isfinite(1.2834679214541751e+308);
test_number_isfinite(-423);
test_number_isfinite(8.713549960912294e+307);
test_number_isfinite("F8OT");
test_number_isfinite("YBUHW");
test_number_isfinite(1.8272602931203424e+307);
test_number_isfinite("8TK09UZFK5");
test_number_isfinite(5.926836990438343e+307);
test_number_isfinite("GMVO3");
test_number_isfinite("925FOWH7M");
test_number_isfinite(1.7599902750832424e+308);
test_number_isfinite(7.534861104674829e+307);
test_number_isfinite("KG5FZL");
test_number_isfinite(6.414688542079675e+307);
test_number_isfinite(-299);
test_number_isfinite(-815);
test_number_isfinite(-3);
test_number_isfinite("4D6WCTYX");
test_number_isfinite("0MUB42XUV");
test_number_isfinite(-635);
test_number_isfinite(8.968261720151648e+307);
test_number_isfinite(1.794444055957371e+308);
test_number_isfinite(-745);
test_number_isfinite(1.453433787715838e+308);
test_number_isfinite(7.690669086832599e+307);
test_number_isfinite(-503);
test_number_isfinite(1.6467782649030086e+308);
test_number_isfinite(-905);
test_number_isfinite(4.506648000537544e+307);
test_number_isfinite(1.1672411316363157e+308);
test_number_isfinite(-577);
test_number_isfinite("BFULCT");
test_number_isfinite(-879);
test_number_isfinite(1.330436710338095e+308);
test_number_isfinite(1.0811889082183954e+308);
test_number_isfinite("T9IHK82");
test_number_isfinite(1.7129479818951674e+308);
test_number_isfinite(8.556546182852134e+306);
test_number_isfinite("184");
test_number_isfinite("ECTPXYCP");
test_number_isfinite(8.309772922324121e+307);
test_number_isfinite(3.0116830940151694e+307);
test_number_isfinite("11EK5B");
test_number_isfinite("DATE66E");
test_number_isfinite("HEFD9D9");
test_number_isfinite("DR1BEJ7R");
test_number_isfinite(1.6961499575287442e+308);
test_number_isfinite("G4Z3C");
test_number_isfinite(9.87709619876225e+306);
test_number_isfinite(7.055374979681312e+307);
test_number_isfinite(4.646349485576966e+307);
test_number_isfinite("5MIGTU42NQ");
test_number_isfinite(-317);
test_number_isfinite(-609);
test_number_isfinite(1.0457274385203371e+308);
test_number_isfinite("Z80");
test_number_isfinite(2.121141265706663e+306);
test_number_isfinite(1.3967113071545718e+308);
test_number_isfinite(-325);
test_number_isfinite("PS2X57S");
test_number_isfinite("7U82ZDE");
test_number_isfinite(5.819976580078377e+307);
test_number_isfinite("MC6F");
test_number_isfinite("S7XW6ODC21");
test_number_isfinite(2.1303619898033936e+306);
test_number_isfinite("P8B");
test_number_isfinite(1.736846047381286e+308);
test_number_isfinite("06NE7Q");
test_number_isfinite("BZF");
test_number_isfinite(5.40670038656104e+307);
test_number_isfinite(-499);
test_number_isfinite("SLKH1R41SK");
test_number_isfinite("DZZS");
test_number_isfinite(-393);
test_number_isfinite(-307);
test_number_isfinite(-111);
test_number_isfinite(3.6851224723787543e+307);
test_number_isfinite(7.116944584025869e+307);
test_number_isfinite(8.695787469696676e+307);
test_number_isfinite("SAZC");
test_number_isfinite(-137);
test_number_isfinite("Y8AI2UK5GG");
test_number_isfinite(9.678388225125553e+307);
test_number_isfinite(1.746275180883731e+306);
test_number_isfinite(7.150119859742107e+307);
test_number_isfinite("HES11TJP");
test_number_isfinite(-219);
test_number_isfinite(1.1886832349817071e+308);
test_number_isfinite(1.1548652448495477e+308);
test_number_isfinite(-213);
test_number_isfinite("31OVZ6DF");
test_number_isfinite("ZNAV");
test_number_isfinite(-595);
test_number_isfinite(-541);
test_number_isfinite("9EB7L9B3XA");
test_number_isfinite("WFN3HNX");
test_number_isfinite("9J29");
test_number_isfinite("EVB679RF");
test_number_isfinite(9.181827024337114e+307);
test_number_isfinite("I2WWQPAIF");
test_number_isfinite("8E3CG");
test_number_isfinite(2.3876257899299794e+307);
test_number_isfinite(-517);
test_number_isfinite(7.641081763490007e+306);
test_number_isfinite("GEJP260Q9C");
test_number_isfinite(1.0703986890888e+308);
test_number_isfinite("LP37");
test_number_isfinite(-245);
test_number_isfinite(-493);
test_number_isfinite("AANFH");
test_number_isfinite(-567);
test_number_isfinite(1.535633098385541e+308);
test_number_isfinite("AMDA");
test_number_isfinite(1.038178746023227e+308);
test_number_isfinite(7.4133639036739945e+307);
test_number_isfinite(7.294874392647802e+305);
test_number_isfinite(1.7447243257665348e+308);
test_number_isfinite("25F");
test_number_isfinite(1.2824200233720253e+308);
test_number_isfinite("3GPIBWO619");
test_number_isfinite("M61NF");
test_number_isfinite(9.781941803467667e+307);
test_number_isfinite("RN1");
test_number_isfinite(-989);
test_number_isfinite("MHE9F4J");
test_number_isfinite(-949);
test_number_isfinite(1.2986336567398468e+308);
test_number_isfinite("W51QT9RB");
test_number_isfinite("WLF");
test_number_isfinite("ODRCZGXUKR");
test_number_isfinite(1.497850350597105e+308);
test_number_isfinite("MAZUY");
test_number_isfinite(9.53136043293458e+307);
test_number_isfinite("BNQ");
test_number_isfinite(-721);
test_number_isfinite(2.20487596544337e+306);
test_number_isfinite(-561);
test_number_isfinite(-315);
test_number_isfinite(5.918154770917307e+307);
test_number_isfinite(3.493342436945414e+306);
test_number_isfinite(1.6272363532219013e+307);
test_number_isfinite(-951);
test_number_isfinite(1.4129211879136133e+308);
test_number_isfinite(1.6902187196920606e+308);
test_number_isfinite(2.4550092813744424e+307);
test_number_isfinite(1.0346471023877301e+308);
test_number_isfinite(-495);
test_number_isfinite("E727XD0");
test_number_isfinite(9.627279918643544e+307);
test_number_isfinite(1.5505729197632587e+308);
test_number_isfinite("TFNP");
test_number_isfinite("VIDTTNHJ");
test_number_isfinite("27R9NP152");
test_number_isfinite("DIQ87IFG");
test_number_isfinite(1.0065032260367849e+308);
test_number_isfinite(-141);
test_number_isfinite("M1L2PN");
test_number_isfinite("T7XZA");
test_number_isfinite(1.3989429345379687e+308);
test_number_isfinite(-675);
test_number_isfinite(-885);
test_number_isfinite(-407);
test_number_isfinite(-205);
test_number_isfinite("QPRRJ4T");
test_number_isfinite(-811);
test_number_isfinite(1.310407947161302e+307);
test_number_isfinite(1.1938578992483353e+308);
test_number_isfinite("8OMGN");
test_number_isfinite(-711);
test_number_isfinite(-707);
test_number_isfinite(-553);
test_number_isfinite("N7JSK0KOJY");
test_number_isfinite(1.3808791640926139e+308);
test_number_isfinite(5.752872092101332e+307);
test_number_isfinite(-823);
test_number_isfinite("EGRMFJOZ4");
test_number_isfinite(-625);
test_number_isfinite(5.550474678896521e+307);
test_number_isfinite("WAG13S");
test_number_isfinite(7.259110606251016e+307);
test_number_isfinite("OQ4Q");
test_number_isfinite("DUA1ZZIEEQ");
test_number_isfinite(1.461896115894039e+308);
test_number_isfinite(-57);
test_number_isfinite("0HLKVN");
test_number_isfinite(4.3085641945239906e+307);
test_number_isfinite(1.3377660504256733e+308);
test_number_isfinite("NR994M");
test_number_isfinite(7.130595255282019e+307);
test_number_isfinite("LHCKH45GZ");
test_number_isfinite("PZL8AS8");
test_number_isfinite(1.3155217592343219e+308);
test_number_isfinite("WNT4CRY1");
test_number_isfinite(-109);
test_number_isfinite(-279);
test_number_isfinite(3.1762169114415695e+307);
test_number_isfinite(1.0125921685367464e+308);
test_number_isfinite("TDH1IV");
test_number_isfinite(-915);
test_number_isfinite(1.3122143766590329e+308);
test_number_isfinite("7P9TL21");
test_number_isfinite(-973);
test_number_isfinite(-547);
test_number_isfinite(4.1515438618591944e+307);
test_number_isfinite(5.563549426326697e+307);
test_number_isfinite(-81);
test_number_isfinite(6.473657175341133e+306);
test_number_isfinite(1.6778231241320736e+308);
test_number_isfinite("897");
test_number_isfinite(1.2940345938673225e+308);
test_number_isfinite("3DZJE8PO");
test_number_isfinite(-157);
test_number_isfinite(1.6094666796424272e+308);
test_number_isfinite(-769);
test_number_isfinite(1.7384156191974828e+308);
test_number_isfinite(5.787469357074107e+307);
test_number_isfinite("X137");
test_number_isfinite(-787);
test_number_isfinite(-93);
test_number_isfinite(-985);
test_number_isfinite("Q9P");
test_number_isfinite("59EY4");
test_number_isfinite(-735);
test_number_isfinite(-647);
test_number_isfinite(9.4786969569562e+307);
test_number_isfinite(-247);
test_number_isfinite(-923);
test_number_isfinite("UQSO");
test_number_isfinite(-327);
test_number_isfinite(1.568214427804738e+307);
test_number_isfinite("6ANDN");
test_number_isfinite("BYIF7");
test_number_isfinite(-723);
test_number_isfinite(-95);
test_number_isfinite(-899);
test_number_isfinite(3.0039159501525997e+307);
test_number_isfinite("UJJ1YO7");
test_number_isfinite(3.0125501038685233e+307);
test_number_isfinite("49IP7KYPZ");
test_number_isfinite("LBSO2");
test_number_isfinite("HT2AH96");
test_number_isfinite(-193);
test_number_isfinite("ZOXG");
test_number_isfinite(1.537419359157652e+308);
test_number_isfinite(1.0169275462778613e+308);
test_number_isfinite(1.1934630021220202e+308);
test_number_isfinite("NCGK1XKZ");
test_number_isfinite(1.0575883558774274e+308);
test_number_isfinite(-569);
test_number_isfinite(1.3246732180070954e+308);
test_number_isfinite(1.3184205986775712e+308);
test_number_isfinite(994);
test_number_isfinite("MCX");
test_number_isfinite(4.863078803647018e+307);
test_number_isfinite(-651);
test_number_isfinite(-123);
test_number_isfinite("T9KWRR");
test_number_isfinite("TQ8NEYW497");
test_number_isfinite("XPHQ5Q");
test_number_isfinite(2.968368706174641e+307);
test_number_isfinite(1.774523344472688e+308);
test_number_isfinite(-741);
test_number_isfinite(1.4106095645850831e+308);
test_number_isfinite(-603);
test_number_isfinite(9.185891888770569e+307);
test_number_isfinite(1.0720047123858283e+308);
test_number_isfinite("NJB64Y");
test_number_isfinite(1.5275016634183903e+308);
test_number_isfinite("KIS6WQ3JE");
test_number_isfinite("NTPF");
test_number_isfinite("9I7A7");
test_number_isfinite(-131);
test_number_isfinite(-119);
test_number_isfinite("EDWRWN8");
test_number_isfinite(-227);
test_number_isfinite(1.6785535737871413e+308);
test_number_isfinite(1.1051147898526288e+307);
test_number_isfinite(1.4298317679004778e+308);
test_number_isfinite("9OS4");
test_number_isfinite("0D3E4N1");
test_number_isfinite(-851);
test_number_isfinite("9V8VG27F");
test_number_isfinite(-607);
test_number_isfinite(2.986422095582662e+307);
test_number_isfinite(1.3167611647849179e+308);
test_number_isfinite(1.1102299147652991e+308);
test_number_isfinite(-51);
test_number_isfinite(2.8238773562066816e+307);
test_number_isfinite("0DL5XM");
test_number_isfinite("PMGY3M52");
test_number_isfinite(-975);
test_number_isfinite("MIV9N");
test_number_isfinite(1.5364235917098693e+308);
test_number_isfinite("67EFE7COF");
test_number_isfinite(-345);
test_number_isfinite("F23V7Y");
test_number_isfinite("WS5U494IF");
test_number_isfinite(-987);
test_number_isfinite(1.7806973066390156e+308);
test_number_isfinite(-753);
test_number_isfinite(-179);
test_number_isfinite("6GLATS");
test_number_isfinite("76LMFXBWU0");
test_number_isfinite("LZE989VT7");
test_number_isfinite(-925);
test_number_isfinite("3KEKKLER24");
test_number_isfinite("CO47Q22GUD");
test_number_isfinite(-225);
test_number_isfinite("RPI");
test_number_isfinite("GZYSITZ59X");
test_number_isfinite(1.6337780335445023e+308);
test_number_isfinite("O31ZKC0V8");
test_number_isfinite(1.1343940767598958e+308);
test_number_isfinite("63Y6OQVN");
test_number_isfinite("M3LKYZ");
test_number_isfinite("SHVHTP");
test_number_isfinite("PPXJWUH7U");
test_number_isfinite("IYPM0B6");
test_number_isfinite(2.5741050345073196e+307);
test_number_isfinite("PVDUIZNCU6");
test_number_isfinite(-627);
test_number_isfinite("GJJBIFJYN");
test_number_isfinite("OWFM");
test_number_isfinite(1.3507462509409737e+306);
test_number_isfinite(-663);
test_number_isfinite("TG3T3");
test_number_isfinite(-549);
test_number_isfinite(4.600622305636789e+307);
test_number_isfinite(-53);
test_number_isfinite("AMLF");
test_number_isfinite(1.5082589610754988e+308);
test_number_isfinite("ZGT4OO0VD");
test_number_isfinite(-429);
test_number_isfinite(9.09916850664605e+307);
test_number_isfinite(1.322008176884002e+308);
test_number_isfinite(1.2831343339678347e+308);
test_number_isfinite(-479);
test_number_isfinite(-161);
test_number_isfinite("S13E");
test_number_isfinite(-329);
test_number_isfinite(7.120733878847181e+307);
test_number_isfinite(1.1536757157656635e+308);
test_number_isfinite("5H4B");
test_number_isfinite("BD6GK6");
test_number_isfinite(6.318414383542385e+307);
test_number_isfinite(1.0484340857515445e+307);
test_number_isfinite(1.1663542047277183e+308);
test_number_isfinite("E1F40");
test_number_isfinite(1.3307320146352451e+308);
test_number_isfinite(-91);
test_number_isfinite("6B6KT");
test_number_isfinite(586);
test_number_isfinite("7WM");
test_number_isfinite("H6YL7FJ");
test_number_isfinite("EX2V8");
test_number_isfinite(1.5164919254297658e+308);
test_number_isfinite(4.551337941141086e+307);
test_number_isfinite(8.224813502025338e+307);
test_number_isfinite(4.0571084204192324e+307);
test_number_isfinite("4DCC");
test_number_isfinite("C7TXCZ");
test_number_isfinite(5.551145096845252e+306);
test_number_isfinite(1.1317707901406493e+308);
test_number_isfinite(1.6272418026157436e+307);
test_number_isfinite(-919);
test_number_isfinite(5.536492071876042e+307);
test_number_isfinite(1.0840630361061745e+308);
test_number_isfinite(2.625549901872442e+307);
test_number_isfinite(-253);
test_number_isfinite(1.6397994771555356e+308);
test_number_isfinite(9.045467557979818e+307);
test_number_isfinite(3.686873634580399e+306);
test_number_isfinite("M7S8KE8ZGR");
test_number_isfinite(8.005338078620942e+307);
test_number_isfinite("Z619D2Z0J");
test_number_isfinite(1.020444081814654e+308);
test_number_isfinite("0TN");
test_number_isfinite("GVB");
test_number_isfinite(9.38931786915396e+307);
test_number_isfinite(5.978911804961217e+307);
test_number_isfinite("8FNW6SSSGO");
test_number_isfinite("KSYRU");
test_number_isfinite(1.1287522468305503e+308);
test_number_isfinite(1.0404843311732194e+308);
test_number_isfinite(1.0974431365544855e+308);
test_number_isfinite(-61);
test_number_isfinite("Q98G377M0");
test_number_isfinite(4.578531812140699e+307);
test_number_isfinite(1.6111745922705085e+308);
test_number_isfinite(9.713206406187254e+306);
test_number_isfinite(8.915581546502792e+307);
test_number_isfinite(-793);
test_number_isfinite("3XG3PGDR");
test_number_isfinite(1.688128370617504e+308);
test_number_isfinite(1.3318894943179047e+308);
test_number_isfinite(602);
test_number_isfinite(-417);
test_number_isfinite("UM1FHWP");
test_number_isfinite("V3W");
test_number_isfinite(-411);
test_number_isfinite(4.1910021405395733e+307);
test_number_isfinite(8.869129837985775e+307);
test_number_isfinite(-473);
test_number_isfinite(5.941413554750474e+307);
test_number_isfinite(-301);
test_number_isfinite(-453);
test_number_isfinite("Q3DHK");
test_number_isfinite(-239);
test_number_isfinite(-461);
test_number_isfinite(-195);
test_number_isfinite(1.3947872282438444e+308);
test_number_isfinite("XKDRBPOF");
test_number_isfinite(8.640620778707681e+307);
test_number_isfinite(1.7249356494736802e+308);
test_number_isfinite(-9);
test_number_isfinite("O1LW");
test_number_isfinite(-175);
test_number_isfinite("ABF");
test_number_isfinite("BIQAA7B7HN");
test_number_isfinite("TJH3WN");
test_number_isfinite(-737);
test_number_isfinite(2.135695764090536e+307);
test_number_isfinite("SEZRYHW");
test_number_isfinite(5.578132961015123e+307);
test_number_isfinite("3GS3H9IAA4");
test_number_isfinite(1.5930865045149905e+307);
test_number_isfinite(-505);
test_number_isfinite(6.432760568476039e+307);
test_number_isfinite("WUE057FW");
test_number_isfinite(2.401794585248375e+307);
test_number_isfinite(-687);
test_number_isfinite("MQ8A6GKHQ4");
test_number_isfinite(-983);
test_number_isfinite("BF562ITK4Z");
test_number_isfinite(1.5344252432298791e+308);
test_number_isfinite(-507);
test_number_isfinite("2XOKQPX");
test_number_isfinite(1.1042473674747654e+308);
test_number_isfinite(1.7697508386942317e+308);
test_number_isfinite(1.7465481952264796e+308);
test_number_isfinite(8.241697546773214e+307);
test_number_isfinite(916);
test_number_isfinite(1.1677733124586389e+308);
test_number_isfinite("2CV");
test_number_isfinite("1OB");
test_number_isfinite("VRIEQ5M");
test_number_isfinite("LT7YCO");
test_number_isfinite("ZG8");
test_number_isfinite(1.0241505650939725e+308);
test_number_isfinite("RBQW");
test_number_isfinite("JI2");
test_number_isfinite(5.381598989824407e+307);
test_number_isfinite(-781);
test_number_isfinite(2.5075122284846846e+307);
test_number_isfinite(6.606646883907938e+307);
test_number_isfinite(5.967195949691624e+307);
test_number_isfinite("OMWF631ATZ");
test_number_isfinite("H05M3");
test_number_isfinite("31BEANFB6");
test_number_isfinite(-129);
test_number_isfinite(-17);
test_number_isfinite(9.77240982206273e+307);
test_number_isfinite(-913);
test_number_isfinite(1.561051598044203e+308);
test_number_isfinite(-765);
test_number_isfinite(1.646033776226647e+307);
test_number_isfinite(5.735081253147203e+307);
test_number_isfinite(-861);
test_number_isfinite(4.267575994609522e+307);
test_number_isfinite(7.056716463366287e+307);
test_number_isfinite(4.439944232751063e+307);
test_number_isfinite("DFRRG");
test_number_isfinite("2E8G");
test_number_isfinite(-191);
test_number_isfinite("CGGX6FONC");
test_number_isfinite(-611);
test_number_isfinite(-931);
test_number_isfinite(4.4848793089417144e+307);
test_number_isfinite(1.1255090462197333e+308);
test_number_isfinite("GYKNS");
test_number_isfinite("OXW6UCM");
test_number_isfinite(1.042066465612158e+308);
test_number_isfinite("5G7Y437");
test_number_isfinite(1.231431969978089e+308);
test_number_isfinite(1.4004701947122178e+308);
test_number_isfinite("ECLG");
test_number_isfinite("JUMJP2675U");
test_number_isfinite(-235);
test_number_isfinite("GNWCGM8");
test_number_isfinite(1.3814947366976683e+308);
test_number_isfinite(-853);
test_number_isfinite(7.139110345334866e+307);
test_number_isfinite(1.7802835587062685e+308);
test_number_isfinite(8.198442613170354e+307);
test_number_isfinite("0OKN1FO");
test_number_isfinite("FUGZU64P");
test_number_isfinite(8.938489129789024e+307);
test_number_isfinite(1.1413241178459157e+308);
test_number_isfinite("2K60NUZZ");
test_number_isfinite(-733);
test_number_isfinite("WJAC46");
test_number_isfinite(1.0549307844441567e+308);
test_number_isfinite("75IZR4LY");
test_number_isfinite(-283);
test_number_isfinite("BZW");
test_number_isfinite("1B6");
test_number_isfinite(1.6062229538179917e+308);
test_number_isfinite(8.094494774206812e+307);
test_number_isfinite(-839);
test_number_isfinite("2CGVBII");
test_number_isfinite(-159);
test_number_isfinite(-351);
test_number_isfinite("S6FA2LLYYL");
test_number_isfinite(-265);
test_number_isfinite(1.0677988313493088e+308);
test_number_isfinite(5.226541857260661e+307);
test_number_isfinite("2JDC4J6CJ");
test_number_isfinite("QN0ESZ");
test_number_isfinite(1.2519653287365692e+308);
test_number_isfinite(1.7293106989079331e+308);
test_number_isfinite(-587);
test_number_isfinite("AR18Z7");
test_number_isfinite("76R5ISHGV");
test_number_isfinite(2.5186097586737115e+307);
test_number_isfinite(-113);
test_number_isfinite("JBDU4D");
