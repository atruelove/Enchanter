/*
* This file is automatically generated by Swami
*
* 2019-08-08 15:38:02.335020
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
function test_math_ceil(x){
	if (Object.is( x,NaN )){
		var output = Math.ceil(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.ceil(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === - 0 )){
		var output = Math.ceil(x);
		assert.strictEqual(- 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === + Infinity )){
		var output = Math.ceil(x);
		assert.strictEqual(+ Infinity, output);
		console.log("Good Test");
		return;
		}
	if (( x === - Infinity )){
		var output = Math.ceil(x);
		assert.strictEqual(- Infinity, output);
		console.log("Good Test");
		return;
		}
	if (( x < 0 && x > - 1 )){
		var output = Math.ceil(x);
		assert.strictEqual(- 0, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}



/*TESTS GENERATED AUTOMATICALLY*/
test_math_ceil(/\r\n|\r|\n/);
test_math_ceil(2.558481855705401e+307);
test_math_ceil(1.7535053115880228e+308);
test_math_ceil("JLD5JD72UY");
test_math_ceil(/(\w+)\s(\w+)/);
test_math_ceil(Infinity);
test_math_ceil(/ab+c/);
test_math_ceil(true);
test_math_ceil(NaN);
test_math_ceil("RBXWBQBBVA");
test_math_ceil(1.3024284481350146e+308);
test_math_ceil("PM9SV7364");
test_math_ceil(false);
test_math_ceil(-953);
test_math_ceil(null);
test_math_ceil("M5TBH0");
test_math_ceil(8.949845462203835e+307);
test_math_ceil(-633);
test_math_ceil(-325);
test_math_ceil("2YDNA6EMCB");
test_math_ceil(-847);
test_math_ceil("8AT0");
test_math_ceil("I9O3EZA1N1");
test_math_ceil(-0);
test_math_ceil(-281);
test_math_ceil(1.941362454185326e+307);
test_math_ceil(-297);
test_math_ceil(1.035561933519984e+308);
test_math_ceil(-287);
test_math_ceil(5.581441478548815e+307);
test_math_ceil(/foo/g);
test_math_ceil("W699QTU");
test_math_ceil(3.539718800859815e+307);
test_math_ceil(/yes[^]*day/);
test_math_ceil("SUPS0VX");
test_math_ceil(3.451154764090123e+307);
test_math_ceil(-905);
test_math_ceil("RMFL938");
test_math_ceil("EJ0");
test_math_ceil("VZOW1");
test_math_ceil(-879);
test_math_ceil(-13);
test_math_ceil("D3JA");
test_math_ceil(undefined);
test_math_ceil("CTOH0J");
test_math_ceil(6.712133971347074e+307);
test_math_ceil("KK485LFFW");
test_math_ceil("BW0SS0SWQ");
test_math_ceil(-935);
test_math_ceil(-951);
test_math_ceil(1.4810891586602434e+308);
test_math_ceil("DSPJHJHT");
test_math_ceil("2IVH");
test_math_ceil(-141);
test_math_ceil(1.4238999134182338e+308);
test_math_ceil("6RBCM6V");
test_math_ceil(6.351516324598149e+307);
test_math_ceil(1.6786964397394323e+306);
test_math_ceil(+0);
test_math_ceil(1.4238093081732016e+307);
test_math_ceil("D89SRHHAE0");
test_math_ceil(7.271164565310309e+306);
test_math_ceil(2.5600283603320134e+307);
test_math_ceil(-575);
test_math_ceil("Y0LWWZIV");
test_math_ceil(-927);
test_math_ceil(1.6441894429875694e+307);
test_math_ceil(1.0564079566508099e+308);
test_math_ceil("ZLT8OSKPBL");
test_math_ceil(7.445726619227689e+307);
test_math_ceil("HCK7A");
test_math_ceil(-155);
test_math_ceil(-153);
test_math_ceil("NSVUF");
test_math_ceil(/[\u0400-\u04FF]+/g);
test_math_ceil(/[^.]+/);
test_math_ceil(-733);
test_math_ceil("QPXGX");
test_math_ceil(1.1596586430671762e+308);
test_math_ceil("E08");
test_math_ceil(-793);
test_math_ceil(1.6093997718110053e+308);
test_math_ceil("FI4");
test_math_ceil("SIYGUK");
test_math_ceil("P3A7X0");
test_math_ceil(5.796706939135687e+307);
test_math_ceil(-771);
test_math_ceil(-735);
test_math_ceil(-719);
test_math_ceil(-537);
test_math_ceil("IHV");
test_math_ceil("X2X45BX28");
test_math_ceil(-541);
test_math_ceil("7OY");
test_math_ceil(-943);
test_math_ceil(6.818766063601608e+307);
test_math_ceil("Y6JP3HGY");
test_math_ceil("7NVEQIU6");
test_math_ceil(-167);
test_math_ceil("D7VUB5L1");
test_math_ceil(1.031068149568102e+308);
test_math_ceil("4XODXLH");
test_math_ceil(5.334031572440533e+307);
test_math_ceil(-503);
test_math_ceil("5K1Q");
test_math_ceil(-115);
test_math_ceil("NMMZ8697");
test_math_ceil("EMSPX0ET");
test_math_ceil("MAHLVES4QK");
test_math_ceil("FW3SPW21S2");
test_math_ceil(1.1494841727971217e+308);
test_math_ceil(-247);
test_math_ceil(-113);
test_math_ceil(1.7430417085287224e+308);
test_math_ceil(1.1138665619544258e+308);
test_math_ceil(1.522200886597418e+307);
test_math_ceil("EG0T26MT");
test_math_ceil(/yes.*day/);
test_math_ceil(5.1291039879701606e+306);
test_math_ceil(1.1838755878848554e+308);
test_math_ceil(-767);
test_math_ceil(1.273728649811111e+308);
test_math_ceil(-919);
test_math_ceil(6.95235396180925e+307);
test_math_ceil(9.134745907671234e+307);
test_math_ceil("1GX6210KL");
test_math_ceil("A33");
test_math_ceil(1.1065978588973485e+308);
test_math_ceil("ZGCR9ZZX");
test_math_ceil("XOG2U9");
test_math_ceil(7.065634106059319e+307);
test_math_ceil(6.995289133741767e+307);
test_math_ceil(3.492138837967621e+307);
test_math_ceil(7.358799289373005e+307);
test_math_ceil("A5YDN682");
test_math_ceil("G89ZYDP2");
test_math_ceil(1.5513203739938435e+308);
test_math_ceil(5.316351538901017e+307);
test_math_ceil("7VNM");
test_math_ceil(8.626680127381287e+307);
test_math_ceil("95X");
test_math_ceil(-335);
test_math_ceil(9.462271054830398e+307);
test_math_ceil(1.3128642349934825e+308);
test_math_ceil(8.409879508300593e+307);
test_math_ceil(8.17488299014347e+307);
test_math_ceil(-383);
test_math_ceil(1.1972046857192667e+308);
test_math_ceil(-947);
test_math_ceil(-761);
test_math_ceil(-43);
test_math_ceil(-395);
test_math_ceil("U4QAYM");
test_math_ceil("GW7PY1FIK");
test_math_ceil(1.2196840165823025e+308);
test_math_ceil(8.610074182911512e+307);
test_math_ceil(-129);
test_math_ceil("VFFS");
test_math_ceil(-367);
test_math_ceil(-959);
test_math_ceil(7.064682279452794e+306);
test_math_ceil(1.4570111576544696e+308);
test_math_ceil(1.338422493002682e+308);
test_math_ceil("WE531QVOHN");
test_math_ceil("ZDZOUC35BR");
test_math_ceil(-453);
test_math_ceil("DCV");
test_math_ceil(-799);
test_math_ceil("YOERYT6");
test_math_ceil(2.9696166130748403e+307);
test_math_ceil(8.487014030219263e+307);
test_math_ceil("TA8TW9JQ2X");
test_math_ceil("LB7GZVUB");
test_math_ceil(-517);
test_math_ceil(-347);
test_math_ceil(-185);
test_math_ceil(6.909663015131808e+307);
test_math_ceil("919V");
test_math_ceil(1.2643381083557396e+308);
test_math_ceil("6A5K5OZST");
test_math_ceil(-289);
test_math_ceil("UILBJ");
test_math_ceil(-639);
test_math_ceil("W8ZQ4KY");
test_math_ceil(-407);
test_math_ceil(-551);
test_math_ceil(7.586550105432333e+307);
test_math_ceil(-33);
test_math_ceil(1.452383661615012e+308);
test_math_ceil(-711);
test_math_ceil(-121);
test_math_ceil(-783);
test_math_ceil("FXM");
test_math_ceil(-65);
test_math_ceil(1.7821953186448208e+308);
test_math_ceil("1OQBWB1J6I");
test_math_ceil(1.0225444000894506e+308);
test_math_ceil(-77);
test_math_ceil(-737);
test_math_ceil(-657);
test_math_ceil("U1FV7MLUC");
test_math_ceil("KZNBE");
test_math_ceil(1.0112030678100356e+308);
test_math_ceil(-539);
test_math_ceil("J1SY4AY9");
test_math_ceil("WRF");
test_math_ceil(1.1500359277447542e+308);
test_math_ceil("5H3MGHNR9N");
test_math_ceil(7.177572957606731e+307);
test_math_ceil(9.47349151903564e+307);
test_math_ceil("BCIQKJID");
test_math_ceil(-319);
test_math_ceil(-301);
test_math_ceil("3S3G");
test_math_ceil("RAUT1IU");
test_math_ceil(-173);
test_math_ceil(-853);
test_math_ceil(7.094804883587639e+307);
test_math_ceil(-85);
test_math_ceil(-341);
test_math_ceil(1.0617462685621849e+308);
test_math_ceil(1.764720874373879e+308);
test_math_ceil(1.5195284675764493e+308);
test_math_ceil(1.3400560039666204e+308);
test_math_ceil(1.4757125233998044e+308);
test_math_ceil(-199);
test_math_ceil("N2B0E36OBG");
test_math_ceil("D2A4");
test_math_ceil(-273);
test_math_ceil(722);
test_math_ceil(-11);
test_math_ceil("ATYAOC");
test_math_ceil(1.3806024676144242e+308);
test_math_ceil("3MU5I1SS");
test_math_ceil(1.0263718121776032e+308);
test_math_ceil(-477);
test_math_ceil(-827);
test_math_ceil(1.4139716950767589e+308);
test_math_ceil(1.0977328854496872e+308);
test_math_ceil(-941);
test_math_ceil(1.7639247133993784e+308);
test_math_ceil("G71VFW");
test_math_ceil(-861);
test_math_ceil(1.447009672093644e+308);
test_math_ceil(1.6389126283984517e+308);
test_math_ceil(1.3345184750252709e+308);
test_math_ceil(3.0858480398736473e+307);
test_math_ceil("Z7X");
test_math_ceil("GLTV74F");
test_math_ceil("RIE");
test_math_ceil(5.46895113560412e+306);
test_math_ceil("IEN3KN7");
test_math_ceil(-815);
test_math_ceil(1.6610487541936603e+307);
test_math_ceil("9VS");
test_math_ceil(1.2354090863219546e+308);
test_math_ceil("O92QETR");
test_math_ceil(-675);
test_math_ceil(8.096510884572888e+307);
test_math_ceil(-553);
test_math_ceil(-127);
test_math_ceil("OVY4OQE");
test_math_ceil(-917);
test_math_ceil(8.347171454563566e+307);
test_math_ceil(1.2637925849067915e+308);
test_math_ceil("94PR7QDO");
test_math_ceil(1.8398313584676065e+307);
test_math_ceil("E9FZEF");
test_math_ceil(-693);
test_math_ceil(5.675618773833322e+307);
test_math_ceil("XW0");
test_math_ceil(4.917923377014996e+307);
test_math_ceil(-545);
test_math_ceil(1.6420713938112084e+308);
test_math_ceil(-689);
test_math_ceil("E6WMP");
test_math_ceil("3GF8TH");
test_math_ceil("SE7B26YA");
test_math_ceil("64B2QH");
test_math_ceil(7.77798851339993e+307);
test_math_ceil("IBP");
test_math_ceil(7.566836446705405e+307);
test_math_ceil(-717);
test_math_ceil(1.2057065939674414e+307);
test_math_ceil("GRG");
test_math_ceil("QAWVJ86U8");
test_math_ceil(1.8979177521203507e+306);
test_math_ceil(-339);
test_math_ceil(3.147639058138874e+307);
test_math_ceil("7AXB");
test_math_ceil("YLI7");
test_math_ceil(-241);
test_math_ceil(-585);
test_math_ceil(-501);
test_math_ceil(1.7207266054690678e+308);
test_math_ceil(6.252351230310274e+307);
test_math_ceil("YZ0KRX");
test_math_ceil(1.5466765969221073e+308);
test_math_ceil("QTM86YAV");
test_math_ceil(-451);
test_math_ceil(-123);
test_math_ceil(2.2202000957841117e+307);
test_math_ceil(1.425010857049881e+308);
test_math_ceil(4.676102523967999e+307);
test_math_ceil("1X99AVA");
test_math_ceil("6ZVHA");
test_math_ceil(-337);
test_math_ceil(1.1360145010540977e+308);
test_math_ceil("34TX36AS");
test_math_ceil("DVHOF");
test_math_ceil(1.3512097131595748e+307);
test_math_ceil(1.4686185169148762e+308);
test_math_ceil("GI0LD3R87");
test_math_ceil(1.1616414786332957e+308);
test_math_ceil("O5I7F6");
test_math_ceil(9.3484210368958e+306);
test_math_ceil(5.944256031635401e+307);
test_math_ceil("M3A");
test_math_ceil("GKGW");
test_math_ceil(1.0995687044848413e+308);
test_math_ceil("NGGP40NR");
test_math_ceil(-623);
test_math_ceil("CAG");
test_math_ceil("A8HWBJ");
test_math_ceil(-311);
test_math_ceil(3.261797933334409e+307);
test_math_ceil(-995);
test_math_ceil(3.230059563411673e+307);
test_math_ceil("ZZYE0UM");
test_math_ceil(1.6244818103911124e+308);
test_math_ceil(1.1219263709162232e+308);
test_math_ceil(-873);
test_math_ceil(-425);
test_math_ceil(2.3416899956593764e+307);
test_math_ceil(9.878253177349408e+307);
test_math_ceil("EWX8V");
test_math_ceil(9.80054536722221e+307);
test_math_ceil(9.783703754170937e+307);
test_math_ceil(-163);
test_math_ceil(-649);
test_math_ceil("Z0L6DBXC5");
test_math_ceil(1.6004277767048605e+308);
test_math_ceil("DDVZ5LCJF");
test_math_ceil(1.1932015261005045e+308);
test_math_ceil(-701);
test_math_ceil(-897);
test_math_ceil(2.7228142338975034e+307);
test_math_ceil("NRI");
test_math_ceil(-41);
test_math_ceil(258);
test_math_ceil(-993);
test_math_ceil("DZGUNNG");
test_math_ceil(-803);
test_math_ceil("3RY");
test_math_ceil(-607);
test_math_ceil("AQM8D7KZ");
test_math_ceil(-529);
test_math_ceil(-915);
test_math_ceil("4XE");
test_math_ceil(-653);
test_math_ceil(-721);
test_math_ceil(1.4221491987766394e+308);
test_math_ceil(-315);
test_math_ceil(-345);
test_math_ceil(1.3082178295957541e+308);
test_math_ceil("B3V");
test_math_ceil(-663);
test_math_ceil("8GYT");
test_math_ceil(1.084652493350018e+308);
test_math_ceil("K8KAXIX");
test_math_ceil(1.6935268109212896e+308);
test_math_ceil(9.356013754049854e+307);
test_math_ceil(1.6319582757026556e+308);
test_math_ceil(9.57723634059925e+307);
test_math_ceil("338");
test_math_ceil(2.8726192832059595e+306);
test_math_ceil(6.731817804565011e+307);
test_math_ceil(1.283791776781177e+308);
test_math_ceil("O1P");
test_math_ceil(1.6635558017028618e+308);
test_math_ceil(-525);
test_math_ceil(8.405269880435869e+307);
test_math_ceil("25WW2Y4T");
test_math_ceil(-851);
test_math_ceil("ZCU8VNZ");
test_math_ceil(1.162257799788937e+308);
test_math_ceil(-209);
test_math_ceil("I98D");
test_math_ceil(1.7369019367369258e+308);
test_math_ceil(3.9462906732908576e+307);
test_math_ceil("Y2DX2");
test_math_ceil("HQGMQ5R3I");
test_math_ceil(8.648049713859179e+307);
test_math_ceil(1.4092845007406264e+308);
test_math_ceil("S6Q6DO77OG");
test_math_ceil(-419);
test_math_ceil(-369);
test_math_ceil(-835);
test_math_ceil("6CAIAYBEW9");
test_math_ceil(-19);
test_math_ceil(1.4431346127595284e+308);
test_math_ceil("ZDD");
test_math_ceil(9.999184129869415e+307);
test_math_ceil(2.7326795270763097e+307);
test_math_ceil("56ZGW08A1");
test_math_ceil("7CFMM");
test_math_ceil("5OKCLBB7IC");
test_math_ceil(554);
test_math_ceil(-605);
test_math_ceil("4NAY9TJC");
test_math_ceil(6.156213713057506e+307);
test_math_ceil("UQI3BDD");
test_math_ceil(-219);
test_math_ceil("HNC1T8");
test_math_ceil(-591);
test_math_ceil(1.6396818101480536e+308);
test_math_ceil(-143);
test_math_ceil("QL7YF");
test_math_ceil(8.754126497895758e+307);
test_math_ceil(1.2747420122091663e+308);
test_math_ceil(1.578743748763566e+308);
test_math_ceil("YLBUKK2");
test_math_ceil(-741);
test_math_ceil("CI1V3XW");
test_math_ceil(-779);
test_math_ceil(-489);
test_math_ceil(-183);
test_math_ceil(1.5852289998716749e+308);
test_math_ceil(-305);
test_math_ceil(-755);
test_math_ceil(1.69135552521163e+307);
test_math_ceil(-403);
test_math_ceil(-493);
test_math_ceil(1.2803018582556265e+308);
test_math_ceil("X6Q8WIO9");
test_math_ceil("0DUWBCB");
test_math_ceil("FOA90B1K57");
test_math_ceil("NUMRTJH");
test_math_ceil(1.2218625552177657e+308);
test_math_ceil(3.0969489498473964e+307);
test_math_ceil("PZWLNWV7ZV");
test_math_ceil(1.4892136692319304e+308);
test_math_ceil(-519);
test_math_ceil(8.438577544382908e+307);
test_math_ceil(-261);
test_math_ceil("IFOHN");
test_math_ceil(4.1038284833424255e+307);
test_math_ceil(-103);
test_math_ceil("781OWNP1K");
test_math_ceil("U9S7LXM");
test_math_ceil(-381);
test_math_ceil(3.0782302144674266e+307);
test_math_ceil("U6R");
test_math_ceil("WNL");
test_math_ceil(6.782515769618658e+307);
test_math_ceil(-97);
test_math_ceil(-413);
test_math_ceil(-797);
test_math_ceil(1.4296058692009368e+308);
test_math_ceil("1ZF1IGTK");
test_math_ceil("KVFG2IV");
test_math_ceil(-25);
test_math_ceil("HRR");
test_math_ceil(-611);
test_math_ceil(1.4261510838195709e+308);
test_math_ceil(4.3341701438783344e+307);
test_math_ceil(1.4932082300857434e+308);
test_math_ceil(8.855589976026774e+306);
test_math_ceil(1.6679656133609995e+308);
test_math_ceil(6.121467470715075e+307);
test_math_ceil("EAE");
test_math_ceil(-343);
test_math_ceil("0UZQ");
test_math_ceil(3.8094470432388174e+307);
test_math_ceil(-985);
test_math_ceil(3.7446531603778133e+307);
test_math_ceil(1.3500545002838887e+308);
test_math_ceil(1.268403694467442e+307);
test_math_ceil(3.568805095163848e+307);
test_math_ceil("SY7XC5LY");
test_math_ceil(-37);
test_math_ceil("MIZJ4Q9U6E");
test_math_ceil(9.95106767964527e+307);
test_math_ceil(-601);
test_math_ceil(-293);
test_math_ceil(-251);
test_math_ceil("Z4IBIOON");
test_math_ceil(-411);
test_math_ceil("LFG56ON");
test_math_ceil(2.922655904696429e+307);
test_math_ceil(4.1251170786549456e+307);
test_math_ceil("49WS2X");
test_math_ceil(-685);
test_math_ceil("HR7QGYT4O");
test_math_ceil(2.1302511266665348e+307);
test_math_ceil(-769);
test_math_ceil("MFXU");
test_math_ceil(7.740586827135331e+307);
test_math_ceil(218);
test_math_ceil(-857);
test_math_ceil(-923);
test_math_ceil(4.1632513962997655e+307);
test_math_ceil("5GZU");
test_math_ceil(8.115294030786698e+307);
test_math_ceil("12OO7L");
test_math_ceil("OMNR1");
test_math_ceil("RC4JU");
test_math_ceil("PKUE3K");
test_math_ceil(1.5359242439011188e+308);
test_math_ceil("WDN2Q");
test_math_ceil(1.6405936307763484e+308);
test_math_ceil("JCQI");
test_math_ceil(1.6645581500020345e+308);
test_math_ceil(2.40667124839716e+307);
test_math_ceil(-365);
test_math_ceil(2.1478287145679675e+307);
test_math_ceil("UFCANQQE73");
test_math_ceil(1.6283547762666114e+308);
test_math_ceil(8.450980445620539e+307);
test_math_ceil(1.6865542566871027e+308);
test_math_ceil("5RD");
test_math_ceil(-533);
test_math_ceil(6.451441832004029e+306);
test_math_ceil(3.0323504895396964e+307);
test_math_ceil("OQL47K7SM");
test_math_ceil("NNVA2OZ0U");
test_math_ceil(-899);
test_math_ceil("AIIXATT");
test_math_ceil(-645);
test_math_ceil("5GZQH7015J");
test_math_ceil(-279);
test_math_ceil(9.69603752127394e+307);
test_math_ceil(1.5678486079444144e+308);
test_math_ceil("MJI6TY");
test_math_ceil("FZ651TLPAZ");
test_math_ceil("ZHCKF5E");
test_math_ceil(-647);
test_math_ceil("5YMPMJ");
test_math_ceil(1.0636865192245265e+308);
test_math_ceil("3YD5LT");
test_math_ceil(1.7786488316007792e+308);
test_math_ceil("OZ2E");
test_math_ceil(-45);
test_math_ceil(-763);
test_math_ceil("BOCPTHV");
test_math_ceil("VH34GZKE");
test_math_ceil(-75);
test_math_ceil(1.3747467179520538e+308);
test_math_ceil(6.3254906165364e+307);
test_math_ceil(-197);
test_math_ceil(1.0445284108641378e+308);
test_math_ceil("06600SM");
test_math_ceil("JKCG04");
test_math_ceil(-277);
test_math_ceil(1.0757183356059974e+308);
test_math_ceil(-933);
test_math_ceil(-527);
test_math_ceil(6.560334598044953e+306);
test_math_ceil(1.6922386719703189e+308);
test_math_ceil(-513);
test_math_ceil("KEOYU9");
test_math_ceil(1.6939249616959859e+308);
test_math_ceil(2.2437802425690916e+307);
test_math_ceil("OGNO0LR");
test_math_ceil("5GB7Y");
test_math_ceil(9.29188404320131e+307);
test_math_ceil("0IS8K");
test_math_ceil("4QO");
test_math_ceil("X0LISC8VF");
test_math_ceil(-699);
test_math_ceil(1.6764226208810259e+308);
test_math_ceil(1.0819239988359364e+308);
test_math_ceil(8.024218315789206e+307);
test_math_ceil("CEYN");
test_math_ceil(1.4575126599847319e+308);
test_math_ceil("5RUIW");
test_math_ceil(-801);
test_math_ceil("0EZOY4H");
test_math_ceil(-509);
test_math_ceil("7MOG5NG");
test_math_ceil(-593);
test_math_ceil(9.921530346950992e+307);
test_math_ceil(-131);
test_math_ceil(-49);
test_math_ceil(3.3111270118481867e+307);
test_math_ceil(7.994882535792499e+307);
test_math_ceil("R9IVJRWY");
test_math_ceil(2.394475070039891e+307);
test_math_ceil("BNU");
test_math_ceil(-299);
test_math_ceil(-295);
test_math_ceil(1.7646000098354547e+308);
test_math_ceil("QR1");
test_math_ceil("TC0X40BN");
test_math_ceil(4.506013508179919e+307);
test_math_ceil(1.7558665536967588e+308);
test_math_ceil("BUYL");
test_math_ceil("TL112Y");
test_math_ceil("66IYPI39");
test_math_ceil(5.227404076771152e+307);
test_math_ceil(1.1557262586496887e+308);
test_math_ceil(1.3181875096415164e+308);
test_math_ceil(-195);
test_math_ceil(724);
test_math_ceil("X62DH8T");
test_math_ceil(1.1059377862487412e+308);
test_math_ceil(-921);
test_math_ceil(-583);
test_math_ceil(1.3113959955194776e+308);
test_math_ceil(-641);
test_math_ceil(-665);
test_math_ceil(3.1887073767943884e+307);
test_math_ceil(-111);
test_math_ceil("79DLDXA");
test_math_ceil(-223);
test_math_ceil(-579);
test_math_ceil(-961);
test_math_ceil("9ES");
test_math_ceil("EAI");
test_math_ceil("WTOFHTMSD");
test_math_ceil(1.1337033098916123e+308);
test_math_ceil(4.907646719341806e+307);
test_math_ceil(5.843447575480319e+305);
test_math_ceil(1.44175596069514e+308);
test_math_ceil(6.167813492578003e+307);
test_math_ceil(9.775588253498383e+307);
test_math_ceil("NBSC3");
test_math_ceil("DQ6");
test_math_ceil("G8P");
test_math_ceil(1.6458116284432219e+308);
test_math_ceil("UDILL");
test_math_ceil("6RCD");
test_math_ceil("SYB5E");
test_math_ceil("COEO");
test_math_ceil("RFK5");
test_math_ceil(-435);
test_math_ceil("4WKWYH");
test_math_ceil("4ZS1Q4");
test_math_ceil(-661);
test_math_ceil(-229);
test_math_ceil(1.4229450449279256e+308);
test_math_ceil("A7OL");
test_math_ceil(1.3917549051944126e+308);
test_math_ceil("7HB9PSDF");
test_math_ceil(-977);
test_math_ceil("G5MU6BWL");
test_math_ceil(-643);
test_math_ceil("G4W");
test_math_ceil("JVV");
test_math_ceil(-245);
test_math_ceil("CD9");
test_math_ceil(-133);
test_math_ceil(1.191885261842211e+308);
test_math_ceil("C2JU0J8V0S");
test_math_ceil("RGX");
test_math_ceil("ZICXF");
test_math_ceil(3.8672180226861915e+307);
test_math_ceil(-161);
test_math_ceil("2JSXMWD8M");
test_math_ceil(1.723363193429518e+308);
test_math_ceil("NAZ");
test_math_ceil(-349);
test_math_ceil(-399);
test_math_ceil("1H78ZS0");
test_math_ceil(1.3879244403246746e+308);
test_math_ceil("M7NSC3");
test_math_ceil("YIA8OMIMYS");
test_math_ceil(-931);
test_math_ceil(1.476669803922175e+308);
test_math_ceil(7.605534007134191e+307);
test_math_ceil("W1J380SL");
test_math_ceil(-747);
test_math_ceil("4VSXHL");
test_math_ceil(-635);
test_math_ceil(-385);
test_math_ceil(180);
test_math_ceil(-571);
test_math_ceil(-687);
test_math_ceil(1.3517733967069168e+308);
test_math_ceil("HUGRSGOT1");
test_math_ceil(-979);
test_math_ceil(1.0033712373126616e+308);
test_math_ceil("GZVACGP");
test_math_ceil("70K5IP1XX");
test_math_ceil("8EU53C4");
test_math_ceil(4.122613412669247e+306);
test_math_ceil(5.717711386508358e+307);
test_math_ceil(2.5608557975701747e+307);
test_math_ceil("9LKY");
test_math_ceil(-169);
test_math_ceil("3P59B");
test_math_ceil("8ZQHX2MC5T");
test_math_ceil(1.3094499250092607e+308);
test_math_ceil(-967);
test_math_ceil(1.701373784399078e+308);
test_math_ceil(-95);
test_math_ceil(4.948649752166645e+307);
test_math_ceil(7.785397804485762e+307);
test_math_ceil(1.5983623498232323e+307);
test_math_ceil(1.6485004921513292e+308);
test_math_ceil("I5NAEHW");
test_math_ceil(8.665454937781792e+307);
test_math_ceil(9.168359951691824e+307);
test_math_ceil(5.710982865529378e+307);
test_math_ceil(-581);
test_math_ceil(5.228846461124282e+307);
test_math_ceil("0H5P");
test_math_ceil(-511);
test_math_ceil(-749);
test_math_ceil(-677);
test_math_ceil("N9IR5LX8M9");
test_math_ceil("NB0XG7OG6");
test_math_ceil(8.736427897089302e+307);
test_math_ceil("JW1HI1");
test_math_ceil("YH1");
test_math_ceil("L3DRZ");
test_math_ceil(1.0785220198909933e+308);
test_math_ceil(1.2751566349696158e+308);
test_math_ceil(1.1673925722212184e+308);
test_math_ceil(7.88841323007264e+307);
test_math_ceil(3.2669750779856005e+307);
test_math_ceil(1.2773366901840887e+308);
test_math_ceil(-939);
test_math_ceil("Z1KNI2");
test_math_ceil(-79);
test_math_ceil("X7Y38B");
test_math_ceil(-609);
test_math_ceil("SDDSRE");
test_math_ceil(-487);
test_math_ceil("TIA453V7");
test_math_ceil(1.1707672293564282e+308);
test_math_ceil(-757);
test_math_ceil("H2HE0BSIG5");
test_math_ceil("VSU");
test_math_ceil(4.259000904721216e+307);
test_math_ceil(-267);
test_math_ceil("EMS");
test_math_ceil(-875);
test_math_ceil(1.193037204590244e+308);
test_math_ceil("UB64CBDL9A");
test_math_ceil(-137);
test_math_ceil("8ZWGULH");
test_math_ceil(5.855255682453969e+307);
test_math_ceil(5.982549806785648e+307);
test_math_ceil(9.118521448949264e+307);
test_math_ceil("TZF4RDH1VH");
test_math_ceil(7.650505469480131e+307);
test_math_ceil(1.3619678961060869e+308);
test_math_ceil(4.968550883481118e+307);
test_math_ceil("EWRSO");
test_math_ceil(8.750128913937832e+307);
test_math_ceil(1.3274727804077139e+308);
test_math_ceil("CHYER72SBO");
test_math_ceil(7.481370039389883e+307);
test_math_ceil(-499);
test_math_ceil("9NB");
test_math_ceil(1.008750644731671e+308);
test_math_ceil(-697);
test_math_ceil(-811);
test_math_ceil("GBHPM");
test_math_ceil("9PRXB4PZ");
test_math_ceil("VUPJHSB");
test_math_ceil("WWGXXR2QJP");
test_math_ceil("3PCWZ4N5TU");
test_math_ceil("ZK62B");
test_math_ceil("PHMJSU");
test_math_ceil(-559);
test_math_ceil(-429);
test_math_ceil("YNO967NJ");
test_math_ceil("R0CU7");
test_math_ceil("QY3T");
test_math_ceil(-555);
test_math_ceil(5.828537617695992e+307);
test_math_ceil(-561);
test_math_ceil(2.60100440911544e+307);
test_math_ceil(-253);
test_math_ceil(5.119391218356787e+307);
test_math_ceil(8.255033577403134e+307);
test_math_ceil("37EJ5");
test_math_ceil("AGBN1O");
test_math_ceil("1K1H");
test_math_ceil(5.33698312067231e+307);
test_math_ceil("HD0");
test_math_ceil(1.2639804878540233e+308);
test_math_ceil(1.1683526506096589e+308);
test_math_ceil("CO7K5KO1PX");
test_math_ceil(1.0091994219628292e+308);
test_math_ceil("53YFK");
test_math_ceil(-179);
test_math_ceil(-9);
test_math_ceil(2.6035026077516513e+307);
test_math_ceil("0ATIT81");
test_math_ceil("35V76P");
test_math_ceil("VCB3YM");
test_math_ceil(2.8705648173222743e+307);
test_math_ceil("9D0M5CK6Z2");
test_math_ceil("VNBYR");
test_math_ceil(1.6875815732101505e+308);
test_math_ceil(5.184947462354569e+307);
test_math_ceil("OSN4752QK");
test_math_ceil(7.637215634159379e+307);
test_math_ceil(1.6762588719901638e+308);
test_math_ceil(-291);
test_math_ceil("F7PUHVG6X");
test_math_ceil(5.951624961163089e+307);
test_math_ceil(6.066885927882578e+307);
test_math_ceil("VAVAG77393");
test_math_ceil("MXA4ZKV");
test_math_ceil("3R6ZB6EMWV");
test_math_ceil(-417);
test_math_ceil(1.706451029477671e+308);
test_math_ceil(-389);
test_math_ceil(-93);
test_math_ceil(3.867375039921727e+307);
test_math_ceil(1.6005200098350173e+308);
test_math_ceil(1.5573490717512614e+308);
test_math_ceil("SR6");
test_math_ceil("NGBLEG");
test_math_ceil("48U");
test_math_ceil("5CPC0N1BH");
test_math_ceil(1.0762366404031974e+308);
test_math_ceil("3BBY");
test_math_ceil("SXKTLESDBF");
test_math_ceil(-869);
test_math_ceil(-53);
test_math_ceil(-999);
test_math_ceil(-457);
test_math_ceil(1.5056301589876064e+308);
test_math_ceil("877K3S4");
test_math_ceil(-789);
test_math_ceil(-843);
test_math_ceil("33IU");
test_math_ceil(-321);
test_math_ceil(1.4122748770412352e+308);
test_math_ceil(5.593746396061464e+307);
test_math_ceil("QWL6DXR");
test_math_ceil("1P1D8I8");
test_math_ceil(2.2712802997811897e+307);
test_math_ceil(5.822078166697062e+307);
test_math_ceil("0HTGW171");
test_math_ceil("O2WNF9RKNQ");
test_math_ceil("SVVJF34");
test_math_ceil(3.125287502601668e+307);
test_math_ceil(2.4694124110581356e+307);
test_math_ceil("TD85I");
test_math_ceil(1.1025478075267249e+308);
test_math_ceil(8.834550935029811e+307);
test_math_ceil(-621);
test_math_ceil("39M8KZL");
test_math_ceil(1.0140979186118076e+308);
test_math_ceil(5.343321026433036e+307);
test_math_ceil("PDNHS503");
test_math_ceil(-359);
test_math_ceil("CWYEB7W8P");
test_math_ceil(-483);
test_math_ceil("D4KP");
test_math_ceil(8.621262346387774e+307);
test_math_ceil(5.52904412146043e+307);
test_math_ceil(1.4966405909669996e+307);
test_math_ceil("7EY9VOBR");
test_math_ceil(-415);
test_math_ceil("FCQBA9");
test_math_ceil(-885);
test_math_ceil("35SD");
test_math_ceil(2.2654364308419537e+307);
test_math_ceil(1.3056103573953337e+308);
test_math_ceil(-447);
test_math_ceil(5.86032592799513e+307);
test_math_ceil(1.2170000271566904e+307);
test_math_ceil(1.1448197727223917e+308);
test_math_ceil(3.190579701669332e+307);
test_math_ceil(624);
test_math_ceil(1.792831999707883e+308);
test_math_ceil("5GJX");
test_math_ceil("IAQ");
test_math_ceil(1.102118789482345e+308);
test_math_ceil(1.6350143902278374e+307);
test_math_ceil(1.6552142565273942e+308);
test_math_ceil(1.5655492645041195e+308);
test_math_ceil(1.4637188464893766e+308);
test_math_ceil("2JW9");
test_math_ceil("5CP549IAD");
test_math_ceil(1.7694285422012067e+308);
test_math_ceil(1.4554921228816422e+308);
test_math_ceil(1.7562361507518443e+308);
test_math_ceil("G4A19AB");
test_math_ceil("W4PRV10VNM");
test_math_ceil(-309);
test_math_ceil(-409);
test_math_ceil("UFO");
test_math_ceil(1.4765656141978163e+308);
test_math_ceil("6X5HQOYYWP");
test_math_ceil(-495);
test_math_ceil(1.1561766392871834e+308);
test_math_ceil("QM9IL6C2JI");
test_math_ceil(-715);
test_math_ceil(9.620321717220205e+307);
test_math_ceil(-71);
test_math_ceil(1.7843135924742451e+308);
test_math_ceil("ZZ295B8J");
test_math_ceil(5.690062649797881e+307);
test_math_ceil(6.288230922140613e+307);
test_math_ceil(1.6016906421409974e+308);
test_math_ceil(4.917064017399847e+307);
test_math_ceil(1.0519161215552513e+308);
test_math_ceil(6.532366077302897e+307);
test_math_ceil(1.3824065899408668e+307);
test_math_ceil(1.3559216084273647e+308);
test_math_ceil("8ZS");
test_math_ceil("VH14C6HD");
test_math_ceil(1.098566475351136e+308);
test_math_ceil("M5IT1G");
test_math_ceil(-613);
test_math_ceil(-975);
test_math_ceil(1.0088225504771591e+308);
test_math_ceil(1.196741853450489e+308);
test_math_ceil("4B2");
test_math_ceil("XAHDJ9");
test_math_ceil(6.041277786050617e+307);
test_math_ceil(3.7991592033718654e+307);
test_math_ceil("5NCE2ZCS");
test_math_ceil("47KD");
test_math_ceil(6.856921130708907e+307);
test_math_ceil(-997);
test_math_ceil(1.0276363514213321e+308);
test_math_ceil("B9KRPVL");
test_math_ceil(-101);
test_math_ceil(5.710045257216163e+307);
test_math_ceil(5.918988648888731e+307);
test_math_ceil("7PUHCX5M4");
test_math_ceil(3.260498951027607e+307);
test_math_ceil(-631);
test_math_ceil("VSK");
test_math_ceil("F5C");
test_math_ceil(-971);
test_math_ceil("C15W");
test_math_ceil("W72HB");
test_math_ceil(1.621131378799416e+308);
test_math_ceil("7O7W4BQ9QC");
test_math_ceil("PRCZ");
test_math_ceil(4.919170422986171e+306);
test_math_ceil(5.247186164092436e+307);
test_math_ceil(1.6553209974935054e+308);
test_math_ceil("QPMID");
test_math_ceil(4.011411773516194e+307);
test_math_ceil(3.355569276147578e+307);
test_math_ceil("WLM");
test_math_ceil(1.7777206743401035e+308);
test_math_ceil("9Q1DGD");
test_math_ceil("6LD41MV");
test_math_ceil("RYGXY");
test_math_ceil("8E87X1PDGP");
test_math_ceil(-149);
test_math_ceil(-213);
test_math_ceil(1.5287663508691663e+308);
test_math_ceil("WPSA");
test_math_ceil(-481);
test_math_ceil("APO");
test_math_ceil("7O0UCNC7");
test_math_ceil(8.813526691870941e+307);
test_math_ceil(-105);
test_math_ceil(-1);
test_math_ceil("43XV0NODJ1");
test_math_ceil("X4U5IC849C");
test_math_ceil(-795);
test_math_ceil("6I468");
test_math_ceil("58V");
test_math_ceil("VW64");
test_math_ceil(9.636111274525586e+307);
test_math_ceil(-895);
test_math_ceil(1.1773373264370884e+308);
test_math_ceil(1.4119969716147917e+308);
test_math_ceil("KG0W7");
test_math_ceil(-991);
test_math_ceil(1.2187040274328566e+308);
test_math_ceil("DFZ9");
test_math_ceil("O7Q");
test_math_ceil("GR053IMBGK");
test_math_ceil(5.26396987470309e+307);
test_math_ceil(-705);
test_math_ceil("EKFAOYV");
test_math_ceil(3.8833382972381594e+306);
test_math_ceil(-625);
test_math_ceil(6.037542341495195e+307);
test_math_ceil(1.2746686323677142e+308);
test_math_ceil("4PYK");
test_math_ceil("LZ50ZAK");
test_math_ceil("AYY3UA");
test_math_ceil(1.5652978894101345e+308);
test_math_ceil(-565);
test_math_ceil(4.831051924021923e+307);
test_math_ceil(1.4363859903838328e+308);
test_math_ceil(-521);
test_math_ceil(5.777613910276424e+307);
test_math_ceil(-391);
test_math_ceil(5.130971541148016e+307);
test_math_ceil(1.2237733833671912e+308);
test_math_ceil(9.725705119109443e+307);
test_math_ceil(1.4423407032717703e+308);
test_math_ceil("W62AFH7ZOC");