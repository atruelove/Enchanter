/*
* This file is automatically generated by Swami
*
* 2019-08-07 16:34:24.924352
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
function test_math_acosh(x){
	if (Object.is( x,NaN )){
		var output = Math.acosh(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (( x === 1 )){
		var output = Math.acosh(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === + Infinity )){
		var output = Math.acosh(x);
		assert.strictEqual(+ Infinity, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}



/*TESTS GENERATED AUTOMATICALLY*/
test_math_acosh(-213);
test_math_acosh("H5A8");
test_math_acosh(undefined);
test_math_acosh("VGDZQK4");
test_math_acosh("2S84");
test_math_acosh("7QBZG0");
test_math_acosh(1.0407661916162144e+308);
test_math_acosh(false);
test_math_acosh(1.0374955945645191e+308);
test_math_acosh(1.6538005704128889e+308);
test_math_acosh(/ab+c/);
test_math_acosh(5.488667565891016e+307);
test_math_acosh(-0);
test_math_acosh(4.280300363427646e+307);
test_math_acosh(/yes.*day/);
test_math_acosh(1.47703179012214e+308);
test_math_acosh(NaN);
test_math_acosh("2LJPD9OXV");
test_math_acosh(/yes[^]*day/);
test_math_acosh(/(\w+)\s(\w+)/);
test_math_acosh(1.6956014821022273e+308);
test_math_acosh(-823);
test_math_acosh(-315);
test_math_acosh(+0);
test_math_acosh(3.9224285929058075e+307);
test_math_acosh(true);
test_math_acosh("PBA");
test_math_acosh(/[\u0400-\u04FF]+/g);
test_math_acosh(null);
test_math_acosh(3.2987873090938227e+307);
test_math_acosh(-337);
test_math_acosh(5.497554079602217e+307);
test_math_acosh("S8F1P7SP7");
test_math_acosh(/[^.]+/);
test_math_acosh("S6SUSS8R");
test_math_acosh("DVS280KF3");
test_math_acosh(-559);
test_math_acosh(-969);
test_math_acosh(-727);
test_math_acosh(3.322547499074173e+307);
test_math_acosh(-577);
test_math_acosh(1.2722714177620924e+307);
test_math_acosh(Infinity);
test_math_acosh(-893);
test_math_acosh(9.271673222546196e+306);
test_math_acosh(-291);
test_math_acosh(-761);
test_math_acosh(8.542590357228665e+307);
test_math_acosh(/foo/g);
test_math_acosh(-459);
test_math_acosh(-107);
test_math_acosh(-281);
test_math_acosh(9.180920019796052e+307);
test_math_acosh(1.5059378156925201e+308);
test_math_acosh(-921);
test_math_acosh(-49);
test_math_acosh(1.2440484990935064e+308);
test_math_acosh("MFV");
test_math_acosh("DJFLOX9");
test_math_acosh(1.5917655844014593e+308);
test_math_acosh(-163);
test_math_acosh("UNQVO");
test_math_acosh(1.3283981952687064e+308);
test_math_acosh(-911);
test_math_acosh(9.649743068406364e+307);
test_math_acosh("CP0DK");
test_math_acosh(/\r\n|\r|\n/);
test_math_acosh("J1NNG1HYB");
test_math_acosh(-795);
test_math_acosh(-115);
test_math_acosh(1.1820810971530633e+308);
test_math_acosh("UOAA");
test_math_acosh(-225);
test_math_acosh(2.4985705431053686e+307);
test_math_acosh("0MLUDHE");
test_math_acosh(6.180280684983449e+307);
test_math_acosh(4.072647773963792e+307);
test_math_acosh(9.09732930930695e+307);
test_math_acosh(8.751986521825522e+307);
test_math_acosh(-767);
test_math_acosh(-279);
test_math_acosh(-215);
test_math_acosh("5TA");
test_math_acosh(-313);
test_math_acosh("2J4A8");
test_math_acosh("6GF94LIL");
test_math_acosh("OAN8N23BG8");
test_math_acosh(1.3911515675138088e+308);
test_math_acosh("2D3N6");
test_math_acosh(1.3277171411708377e+308);
test_math_acosh("PFBT5AX");
test_math_acosh("UM6P42L");
test_math_acosh(8.781804647403427e+307);
test_math_acosh("LPX0");
test_math_acosh("2JUYIE5CK1");
test_math_acosh(2.881756848941354e+307);
test_math_acosh("6ZB");
test_math_acosh(1.6224400793478057e+306);
test_math_acosh(-855);
test_math_acosh("MJ03");
test_math_acosh(1.4578641555246898e+308);
test_math_acosh(1.1689993095480935e+308);
test_math_acosh(1.1661292214334952e+308);
test_math_acosh(1.9925794796751928e+307);
test_math_acosh(1.3421800421505162e+308);
test_math_acosh(-437);
test_math_acosh("KCVR2FBY0");
test_math_acosh(6.992565617720702e+307);
test_math_acosh(-297);
test_math_acosh(1.0153085607283322e+308);
test_math_acosh("V58");
test_math_acosh("CBL");
test_math_acosh("4NVK");
test_math_acosh("5IBLUI98VF");
test_math_acosh(1.81030152111621e+307);
test_math_acosh("DN2WHPWJ");
test_math_acosh(1.7939461402415627e+307);
test_math_acosh("4QC");
test_math_acosh(3.131822494860782e+307);
test_math_acosh(-193);
test_math_acosh(1.822938084723698e+307);
test_math_acosh("D9INE");
test_math_acosh(-793);
test_math_acosh("0TBE");
test_math_acosh("IHFZ");
test_math_acosh(7.133825265336359e+307);
test_math_acosh(6.193373340813331e+307);
test_math_acosh(-431);
test_math_acosh(-433);
test_math_acosh("0SD45LE7DK");
test_math_acosh(-447);
test_math_acosh(-283);
test_math_acosh(-717);
test_math_acosh("9CV2PZ92");
test_math_acosh("6RIKRM22XS");
test_math_acosh("9P3");
test_math_acosh(-191);
test_math_acosh(-691);
test_math_acosh(1.3093158721845994e+308);
test_math_acosh("LZJEZ");
test_math_acosh(-351);
test_math_acosh(-159);
test_math_acosh("6EQHG9T6M");
test_math_acosh("4Q286ARZMU");
test_math_acosh(1.9602722882032098e+307);
test_math_acosh(-789);
test_math_acosh(-81);
test_math_acosh(-725);
test_math_acosh(1.4870543776654481e+308);
test_math_acosh(2.4676272883946464e+307);
test_math_acosh(-685);
test_math_acosh(1.0427380502007427e+308);
test_math_acosh(1.0995772301624946e+308);
test_math_acosh(1.0600534935351373e+308);
test_math_acosh(-31);
test_math_acosh(6.09571978161372e+307);
test_math_acosh(-601);
test_math_acosh("EWDYJ7W7A");
test_math_acosh(-659);
test_math_acosh(-941);
test_math_acosh(4.473964163621347e+307);
test_math_acosh(-103);
test_math_acosh(1.1405436900674002e+308);
test_math_acosh("PAIL3AO");
test_math_acosh(1.5455934148557314e+308);
test_math_acosh("7KWWSCS4");
test_math_acosh(1.380281582668728e+308);
test_math_acosh(-903);
test_math_acosh(8.287581169762524e+307);
test_math_acosh(-93);
test_math_acosh(1.747270867595717e+308);
test_math_acosh("1UO");
test_math_acosh("DNTL349GQ");
test_math_acosh(-615);
test_math_acosh("H6N36");
test_math_acosh(-651);
test_math_acosh("Z9BLZ");
test_math_acosh(8.760150645368328e+307);
test_math_acosh(-165);
test_math_acosh("UPNACH");
test_math_acosh(-65);
test_math_acosh(1.090110510976184e+308);
test_math_acosh(6.38762521366252e+307);
test_math_acosh("Y8D2H98");
test_math_acosh(1.1717924721185203e+308);
test_math_acosh(7.127603223606765e+307);
test_math_acosh(-779);
test_math_acosh(1.5081758089880093e+308);
test_math_acosh(4.165352413863005e+307);
test_math_acosh(1.7961545438396023e+308);
test_math_acosh(1.0975628272682827e+308);
test_math_acosh(1.0078353557989553e+307);
test_math_acosh(1.4095941034698343e+308);
test_math_acosh(1.5604474447466567e+308);
test_math_acosh("JTTZ3R1B");
test_math_acosh("YOUISVQ");
test_math_acosh("3V4XGS4");
test_math_acosh("ROYL7OBE2Y");
test_math_acosh(5.10404192256148e+307);
test_math_acosh("PBI4L1LA7");
test_math_acosh("UXZODZ7GH2");
test_math_acosh("8PS8H");
test_math_acosh("I0SJCW");
test_math_acosh(1.9838884386773427e+307);
test_math_acosh("TE01ERY1");
test_math_acosh(-155);
test_math_acosh(-339);
test_math_acosh(1.455178953205399e+308);
test_math_acosh("RIH");
test_math_acosh("N1NKTYUF");
test_math_acosh(2.2338495117745795e+307);
test_math_acosh(-271);
test_math_acosh("7U9R4");
test_math_acosh(-227);
test_math_acosh("PRNM");
test_math_acosh(-975);
test_math_acosh(1.9847850831502012e+307);
test_math_acosh(-807);
test_math_acosh(1.4099252730473569e+308);
test_math_acosh("26BC37");
test_math_acosh(1.645676674172156e+308);
test_math_acosh(7.500038329119121e+307);
test_math_acosh(5.102860311305667e+307);
test_math_acosh("LNZQVGBD");
test_math_acosh("J1LQNG7");
test_math_acosh("P9F");
test_math_acosh("MKHI350893");
test_math_acosh(1.632036405237702e+308);
test_math_acosh("V2QTIA6LJY");
test_math_acosh(-817);
test_math_acosh(6.193014040313325e+307);
test_math_acosh(-513);
test_math_acosh("1SVMPXQKO");
test_math_acosh(1.2536056947599934e+308);
test_math_acosh("PY7TL8N4");
test_math_acosh("VVHKPMKBX");
test_math_acosh(1.6776166514999915e+308);
test_math_acosh(-983);
test_math_acosh(1.6039357845436974e+308);
test_math_acosh("Q9FIAGGMRX");
test_math_acosh("9DDFXN");
test_math_acosh(1.8459793570789392e+307);
test_math_acosh("ZN3ZU5X0");
test_math_acosh(3.588702676472732e+307);
test_math_acosh("KAN");
test_math_acosh(-899);
test_math_acosh(1.4122604287517802e+308);
test_math_acosh(1.7857589656750605e+308);
test_math_acosh(-121);
test_math_acosh(3.506143034093754e+307);
test_math_acosh(1.0666640692922833e+308);
test_math_acosh("5O443Y");
test_math_acosh(1.1860623720921872e+308);
test_math_acosh(-341);
test_math_acosh(1.4907670489798488e+307);
test_math_acosh(2.980438228842082e+307);
test_math_acosh(1.2689290462971942e+308);
test_math_acosh(1.7609401413610177e+307);
test_math_acosh("H1VXAZFG9D");
test_math_acosh(-153);
test_math_acosh(2.76526192787536e+307);
test_math_acosh(1.0396899926134902e+307);
test_math_acosh("DCUM");
test_math_acosh(-871);
test_math_acosh("XX4B87");
test_math_acosh(6.257581216431122e+307);
test_math_acosh("XY0S");
test_math_acosh(-593);
test_math_acosh("ERWX8ERKIX");
test_math_acosh(-607);
test_math_acosh(1.505771283132724e+308);
test_math_acosh(-247);
test_math_acosh(-111);
test_math_acosh(5.243445808026261e+307);
test_math_acosh(4.934224311628828e+307);
test_math_acosh("7DERWNAN");
test_math_acosh("6VME");
test_math_acosh(1.6470594396301922e+308);
test_math_acosh(1.064317844427027e+306);
test_math_acosh("AYAOIMW88");
test_math_acosh("E9DIE");
test_math_acosh(6.583629182126648e+307);
test_math_acosh(8.669024214559913e+307);
test_math_acosh("BB3ZHH");
test_math_acosh("GMW96HN8");
test_math_acosh("1FUNZDFIB");
test_math_acosh(1.2476890500087158e+308);
test_math_acosh("2O4A97OUF");
test_math_acosh(1.310812527619942e+307);
test_math_acosh(-357);
test_math_acosh(4.786592217147091e+306);
test_math_acosh(7.405634115753733e+307);
test_math_acosh(-751);
test_math_acosh("O39T");
test_math_acosh(8.926557993846446e+307);
test_math_acosh(8.000053686902978e+307);
test_math_acosh(-73);
test_math_acosh(1.1776863882850988e+308);
test_math_acosh("ED0FKXV38C");
test_math_acosh(1.7122012588204688e+308);
test_math_acosh(-367);
test_math_acosh(-815);
test_math_acosh(-97);
test_math_acosh("2MJBWUV");
test_math_acosh(-183);
test_math_acosh(1.3545344314918158e+308);
test_math_acosh(-507);
test_math_acosh("T79D");
test_math_acosh(-205);
test_math_acosh("RBG");
test_math_acosh("F2SVG");
test_math_acosh(1.2207402832270034e+308);
test_math_acosh(-641);
test_math_acosh(-91);
test_math_acosh(-889);
test_math_acosh(-35);
test_math_acosh("8I4");
test_math_acosh("SOXU3N5EB");
test_math_acosh("242XO03MW6");
test_math_acosh(-629);
test_math_acosh(-597);
test_math_acosh("PZL04HJ");
test_math_acosh("6TM7G1");
test_math_acosh("O9MWXQD");
test_math_acosh(-669);
test_math_acosh("TE52JGM1RK");
test_math_acosh("BRQZOX");
test_math_acosh(-393);
test_math_acosh("0PC");
test_math_acosh(1.570697521861075e+308);
test_math_acosh(-545);
test_math_acosh(-209);
test_math_acosh(-273);
test_math_acosh("99FYSVM");
test_math_acosh("I168QP");
test_math_acosh(-257);
test_math_acosh(6.886978230081037e+307);
test_math_acosh("GHDKB");
test_math_acosh("8T2SZ3MRXM");
test_math_acosh(-997);
test_math_acosh("EGN");
test_math_acosh("CRX");
test_math_acosh("N77GDIZ");
test_math_acosh("MLSDK");
test_math_acosh("BS0JF");
test_math_acosh("01NLKSR2LD");
test_math_acosh(1.1032111240077545e+308);
test_math_acosh(-523);
test_math_acosh(-769);
test_math_acosh("W0WCIO8NJ");
test_math_acosh("KXVDV6");
test_math_acosh("49A1XQNEXD");
test_math_acosh(-729);
test_math_acosh("AMO2L");
test_math_acosh(1.3148844750312327e+308);
test_math_acosh(1.3639170429223981e+308);
test_math_acosh(-287);
test_math_acosh(-519);
test_math_acosh("QD7JN4HY");
test_math_acosh(1.68362181995633e+308);
test_math_acosh("Q78D54CL");
test_math_acosh("A4IQ");
test_math_acosh(-613);
test_math_acosh(-461);
test_math_acosh("32BBOPT2");
test_math_acosh("9NT55OZ");
test_math_acosh(-915);
test_math_acosh("LZHNWZL8XB");
test_math_acosh(1.5833742307564561e+307);
test_math_acosh(-929);
test_math_acosh(-805);
test_math_acosh(7.822860589561594e+307);
test_math_acosh(-403);
test_math_acosh(-415);
test_math_acosh(-665);
test_math_acosh("KU072");
test_math_acosh(8.442499068463632e+306);
test_math_acosh("DSH5PS6IH");
test_math_acosh("V6B0");
test_math_acosh(1.1810355374500929e+308);
test_math_acosh(7.108950540634823e+307);
test_math_acosh(1.5173099511302765e+308);
test_math_acosh(1.2666177662197711e+308);
test_math_acosh(-991);
test_math_acosh("ZSK5JFCO");
test_math_acosh("IG2YGO3M0O");
test_math_acosh(-753);
test_math_acosh(1.1537840110064586e+308);
test_math_acosh(1.670987102639815e+308);
test_math_acosh(-701);
test_math_acosh("G0JQ3");
test_math_acosh(1.1959245975887092e+308);
test_math_acosh(-989);
test_math_acosh(1.75657335371203e+308);
test_math_acosh(1.1282435198038764e+308);
test_math_acosh(-399);
test_math_acosh(1.0848940044104825e+308);
test_math_acosh("IJHYR0M");
test_math_acosh(4.917776115490317e+307);
test_math_acosh(2.9067341574087226e+307);
test_math_acosh("19YI2RKJ");
test_math_acosh(2.641535761307399e+307);
test_math_acosh("RXO");
test_math_acosh(1.28907453846319e+308);
test_math_acosh("G6T3N7ORY");
test_math_acosh(-581);
test_math_acosh(-709);
test_math_acosh(3.85805386630073e+307);
test_math_acosh(1.327730340879642e+308);
test_math_acosh("E9W");
test_math_acosh(1.7108505023182322e+308);
test_math_acosh("JI9K0");
test_math_acosh(1.2822094373453163e+308);
test_math_acosh(-413);
test_math_acosh("LCX6PAG88");
test_math_acosh("BSF3NKK8");
test_math_acosh("43L");
test_math_acosh(3.0169372235037303e+307);
test_math_acosh("F69BXOYI1");
test_math_acosh(1.0414478187190652e+308);
test_math_acosh(9.955344741961451e+307);
test_math_acosh(1.5206493055867398e+307);
test_math_acosh(-785);
test_math_acosh("M0IWWBM0");
test_math_acosh(-471);
test_math_acosh("Y7H6BSZ0");
test_math_acosh("AHF6UXJQN");
test_math_acosh("4052DD80");
test_math_acosh("FI3");
test_math_acosh("IJ81A34VM");
test_math_acosh(9.855179420276698e+307);
test_math_acosh("C8SZPVH");
test_math_acosh(7.006281225206982e+307);
test_math_acosh("XF2IWXK");
test_math_acosh(-671);
test_math_acosh(1.6323479806088016e+308);
test_math_acosh(5.506015136216469e+307);
test_math_acosh(-87);
test_math_acosh("5ODGG");
test_math_acosh("M6FE5S");
test_math_acosh(8.704874446521361e+307);
test_math_acosh(7.679317070331178e+307);
test_math_acosh(-719);
test_math_acosh(4.5620402004999144e+306);
test_math_acosh(8.124908655054442e+307);
test_math_acosh(-755);
test_math_acosh(4.805493087598483e+307);
test_math_acosh(1.2007153528220072e+308);
test_math_acosh(-679);
test_math_acosh(1.399277334055191e+308);
test_math_acosh("RYXAR5");
test_math_acosh(3.2673044578199e+307);
test_math_acosh(8.476976894349193e+307);
test_math_acosh("1FTC12R22");
test_math_acosh("PK3N00MCG");
test_math_acosh(8.338080505734605e+307);
test_math_acosh(-773);
test_math_acosh(1.536235757062813e+308);
test_math_acosh(-951);
test_math_acosh("097");
test_math_acosh(-745);
test_math_acosh("5B04U4P");
test_math_acosh("N0TI7VG");
test_math_acosh("3DIGBKYQTS");
test_math_acosh(-955);
test_math_acosh(-627);
test_math_acosh(-947);
test_math_acosh("WYX");
test_math_acosh(3.0062677913345067e+307);
test_math_acosh(-809);
test_math_acosh(1.7719765190782114e+308);
test_math_acosh(-635);
test_math_acosh(-379);
test_math_acosh(-491);
test_math_acosh(8.053615876192089e+307);
test_math_acosh(-131);
test_math_acosh(2.947935900635591e+307);
test_math_acosh("3ULXOCNCP");
test_math_acosh(8.652834638877272e+307);
test_math_acosh(5.727758991907328e+306);
test_math_acosh(5.978577474578961e+307);
test_math_acosh(4.4182778762059325e+307);
test_math_acosh(-105);
test_math_acosh(4.135089808570631e+307);
test_math_acosh("SQ6EHSAJ3L");
test_math_acosh(1.7304224874879608e+308);
test_math_acosh(8.960042434326426e+305);
test_math_acosh("MM5");
test_math_acosh(1.7755545498390977e+308);
test_math_acosh(-687);
test_math_acosh(1.6019410054251181e+308);
test_math_acosh(9.45476866949186e+306);
test_math_acosh("O37BGDV");
test_math_acosh(9.054391474820743e+307);
test_math_acosh(7.28037938235978e+307);
test_math_acosh(-575);
test_math_acosh("ULOQUS7P");
test_math_acosh("50A");
test_math_acosh("TVL4B");
test_math_acosh("PU8Q");
test_math_acosh(1.4699809086814911e+308);
test_math_acosh(6.190044719133349e+307);
test_math_acosh(1.7482326887287115e+308);
test_math_acosh(4.643661006404837e+305);
test_math_acosh("E6A");
test_math_acosh(-811);
test_math_acosh("FNIM");
test_math_acosh(-663);
test_math_acosh("NXMH03JQA");
test_math_acosh(1.6148161792069384e+308);
test_math_acosh(1.2963984660263784e+308);
test_math_acosh("OZ2E");
test_math_acosh("LCWUA81A");
test_math_acosh(1.037744888648956e+308);
test_math_acosh(-361);
test_math_acosh(1.2921215462977139e+308);
test_math_acosh(-21);
test_math_acosh(9.254868021886075e+307);
test_math_acosh(1.012387447569152e+308);
test_math_acosh(-299);
test_math_acosh("60LJH");
test_math_acosh("87VOM4RS");
test_math_acosh(1.5416145169291944e+308);
test_math_acosh(-833);
test_math_acosh(-595);
test_math_acosh("Q30JA");
test_math_acosh(-645);
test_math_acosh("P8LOYC0");
test_math_acosh(-965);
test_math_acosh("CUOYUW");
test_math_acosh("URXZSGQ");
test_math_acosh(1.2632306796828014e+308);
test_math_acosh("4IA5XS");
test_math_acosh(-599);
test_math_acosh("C57JQZXAX2");
test_math_acosh(-829);
test_math_acosh(1.6583242252657863e+308);
test_math_acosh("TXGUWB9BIZ");
test_math_acosh(-735);
test_math_acosh(-813);
test_math_acosh(-569);
test_math_acosh("CAUM");
test_math_acosh("73ZV");
test_math_acosh("T7X494");
test_math_acosh(9.204273449148362e+307);
test_math_acosh(1.3389578589356462e+308);
test_math_acosh(-917);
test_math_acosh("I4ZHNWCWG");
test_math_acosh(5.596486389053773e+306);
test_math_acosh("8MWVVE6TU");
test_math_acosh(9.077886237670263e+307);
test_math_acosh(1.3550499929686088e+308);
test_math_acosh("MVUBK7P");
test_math_acosh("6QEL6TF7O6");
test_math_acosh("MN3ZEWT0VB");
test_math_acosh(1.6540141722623126e+308);
test_math_acosh("J9F9");
test_math_acosh("9G9ZTOO5E");
test_math_acosh("YFAHP11V");
test_math_acosh(4.1455989516353593e+307);
test_math_acosh(2.2402549454723944e+306);
test_math_acosh(1.705365568657802e+308);
test_math_acosh(6.748787303616871e+307);
test_math_acosh(-743);
test_math_acosh(1.2289935841828143e+308);
test_math_acosh(1.1249597458119253e+308);
test_math_acosh(-647);
test_math_acosh(7.790919875921933e+307);
test_math_acosh(-267);
test_math_acosh(3.333639791878971e+307);
test_math_acosh(1.6461585178001562e+308);
test_math_acosh(-535);
test_math_acosh(-839);
test_math_acosh(-347);
test_math_acosh(-783);
test_math_acosh(8.452424629514806e+307);
test_math_acosh("L595OZKD6");
test_math_acosh(2.8492942547452076e+307);
test_math_acosh(-277);
test_math_acosh("J1Y9F");
test_math_acosh("II0");
test_math_acosh(1.6879677062550497e+308);
test_math_acosh("40CBMNOGB");
test_math_acosh(-53);
test_math_acosh("RS36SL");
test_math_acosh("EMVH8AX");
test_math_acosh("O6WYY3CR");
test_math_acosh(-561);
test_math_acosh(2.41807383326261e+307);
test_math_acosh("WOOZ3");
test_math_acosh("MLT86Z7ITA");
test_math_acosh(1.5544887657302992e+308);
test_math_acosh("TKGSU8G7GX");
test_math_acosh(-837);
test_math_acosh("GHNSN2NY");
test_math_acosh("KOGZ94");
test_math_acosh(-797);
test_math_acosh("FLU");
test_math_acosh(6.112906827178431e+307);
test_math_acosh(1.336894137293213e+308);
test_math_acosh(-781);
test_math_acosh("PH3H3");
test_math_acosh("CXS0");
test_math_acosh("8FSG");
test_math_acosh(1.0132614204260737e+308);
test_math_acosh(-79);
test_math_acosh(4.4277383541279985e+307);
test_math_acosh("15FHHXGFTN");
test_math_acosh(2.6762912818442664e+307);
test_math_acosh("69NGLSZ");
test_math_acosh("TH5418X6WP");
test_math_acosh(4.052548241807893e+307);
test_math_acosh(-473);
test_math_acosh(1.7333250343514392e+308);
test_math_acosh(3.321638205402304e+307);
test_math_acosh("GCMJM");
test_math_acosh(-3);
test_math_acosh(4.0545713410955326e+307);
test_math_acosh(-799);
test_math_acosh(-71);
test_math_acosh(5.312260207616249e+307);
test_math_acosh(3.034890575132137e+307);
test_math_acosh(9.002976361077173e+307);
test_math_acosh(-147);
test_math_acosh("EDNM688E8");
test_math_acosh(1.583535234177937e+308);
test_math_acosh(1.4195960625171162e+308);
test_math_acosh(1.1002500629117626e+308);
test_math_acosh(-261);
test_math_acosh("FRKU");
test_math_acosh("W7W06P1HL");
test_math_acosh(-161);
test_math_acosh(5.0372269600653913e+306);
test_math_acosh(8.171358549501796e+307);
test_math_acosh(9.5371694515113e+307);
test_math_acosh(1.0514587038689775e+308);
test_math_acosh(-201);
test_math_acosh("1AREL3MX");
test_math_acosh("P2MC5N");
test_math_acosh(8.368896450622131e+307);
test_math_acosh("IS1Z");
test_math_acosh(7.769067987236428e+307);
test_math_acosh("EI4");
test_math_acosh("U5E6P3SVP");
test_math_acosh("7YST");
test_math_acosh(1.58219320013518e+308);
test_math_acosh("QUARYDMIV");
test_math_acosh(1.5560245563996714e+308);
test_math_acosh(-759);
test_math_acosh(-259);
test_math_acosh("EMH");
test_math_acosh("R7FS");
test_math_acosh("TOTBJ2U");
test_math_acosh("D3Q");
test_math_acosh("VCPKTO");
test_math_acosh("57T9");
test_math_acosh("SKMI9AFXH");
test_math_acosh(-439);
test_math_acosh(-699);
test_math_acosh(2.581260845830596e+306);
test_math_acosh("BIL");
test_math_acosh(-239);
test_math_acosh(4.777403299186689e+307);
test_math_acosh(3.1874241304604165e+307);
test_math_acosh(-943);
test_math_acosh("6ARMTE7UX9");
test_math_acosh("WUWHHJNJP1");
test_math_acosh(1.6718442862445427e+308);
test_math_acosh(7.207862371473891e+307);
test_math_acosh("JXOQ8UXUNF");
test_math_acosh(-221);
test_math_acosh(1.477991639791199e+308);
test_math_acosh(7.436462617800724e+307);
test_math_acosh(1.6566442611261959e+308);
test_math_acosh("B7IJ30C376");
test_math_acosh(1.16611584026268e+308);
test_math_acosh(-919);
test_math_acosh(1.7073884527061686e+308);
test_math_acosh("X650EC");
test_math_acosh(-51);
test_math_acosh(-5);
test_math_acosh(1.6319273907931515e+308);
test_math_acosh(7.642048867228013e+307);
test_math_acosh(3.49746407299184e+306);
test_math_acosh(3.566969967243649e+307);
test_math_acosh(9.304554457435778e+307);
test_math_acosh(1.4078390995237082e+308);
test_math_acosh("Y6H9R7");
test_math_acosh(-721);
test_math_acosh(1.6383447231462787e+308);
test_math_acosh(-173);
test_math_acosh(1.909382856173454e+307);
test_math_acosh(4.522283249041677e+307);
test_math_acosh(1.3718041760974478e+308);
test_math_acosh(6.144794245994422e+307);
test_math_acosh("J3CYW5V");
test_math_acosh(1.3718903793524562e+308);
test_math_acosh("NIGJGW9Z9H");
test_math_acosh(-305);
test_math_acosh(1.5119378340887627e+308);
test_math_acosh(1.2432133016199959e+308);
test_math_acosh(-703);
test_math_acosh("B04GB8R2HV");
test_math_acosh(-359);
test_math_acosh(1.6730190684502104e+308);
test_math_acosh(-369);
test_math_acosh(9.164562589625678e+307);
test_math_acosh("NV48AQ7");
test_math_acosh(7.060500850743093e+307);
test_math_acosh("2NT4BP");
test_math_acosh("6H2DFSWFPQ");
test_math_acosh(1.5544729583452315e+308);
test_math_acosh(5.822746635118852e+307);
test_math_acosh("BADMPH");
test_math_acosh("6NHZZL26T");
test_math_acosh(-529);
test_math_acosh(1.2659144161746693e+308);
test_math_acosh(-245);
test_math_acosh(-381);
test_math_acosh("O4YPVJZ8BO");
test_math_acosh(-863);
test_math_acosh(4.472027903183629e+307);
test_math_acosh(1.327300431603076e+308);
test_math_acosh("ATWYCZJV8U");
test_math_acosh(1.5130306266408728e+308);
test_math_acosh(7.310032053501107e+307);
test_math_acosh(72);
test_math_acosh(1.007244509093918e+308);
test_math_acosh(1.4505850241744103e+308);
test_math_acosh(9.252788482138938e+307);
test_math_acosh(1.0829595675554321e+308);
test_math_acosh("JSLPFUUUS");
test_math_acosh(-617);
test_math_acosh("OGS5");
test_math_acosh("PY2SL70");
test_math_acosh(1.5828334387717872e+307);
test_math_acosh(1.6274023395865052e+308);
test_math_acosh(1.7222839463978872e+308);
test_math_acosh("LUOQLF8FD9");
test_math_acosh("0CYQD");
test_math_acosh("5FW4YX");
test_math_acosh(1.7873341427187364e+308);
test_math_acosh(1.54352589105063e+308);
test_math_acosh("QFD04XW");
test_math_acosh(1.6259832302837227e+308);
test_math_acosh("UUZD6GMLS");
test_math_acosh(5.575144063858512e+307);
test_math_acosh("EL22F43F");
test_math_acosh(1.0193380354836565e+308);
test_math_acosh("AMZEP");
test_math_acosh(-285);
test_math_acosh("PRA9");
test_math_acosh(-949);
test_math_acosh(6.434731790297572e+307);
test_math_acosh(1.1936981768930598e+308);
test_math_acosh("1B7");
test_math_acosh(-611);
test_math_acosh("AO9ZCB00TS");
test_math_acosh("45UPB");
test_math_acosh("ADM5SPG");
test_math_acosh(-453);
test_math_acosh("4UGV9D");
test_math_acosh(2.383077214175989e+307);
test_math_acosh("2SDXJE1N");
test_math_acosh(1.3405594439650025e+308);
test_math_acosh(6.123527591955706e+307);
test_math_acosh(6.202944976009401e+307);
test_math_acosh("1785WSH");
test_math_acosh(26);
test_math_acosh(7.026496676462524e+307);
test_math_acosh(1.5767814573943335e+306);
test_math_acosh(1.4557630920720338e+308);
test_math_acosh("WDXCP1D1");
test_math_acosh("3DIA");
test_math_acosh(1.4715440613023088e+307);
test_math_acosh(-15);
test_math_acosh(-255);
test_math_acosh(-185);
test_math_acosh("L519ZUOUOE");
test_math_acosh(8.495230371441567e+307);
test_math_acosh(1.6862453166313134e+308);
test_math_acosh(2.7898694599412507e+307);
test_math_acosh(4.902046237274464e+306);
test_math_acosh(-249);
test_math_acosh("LF2YT");
test_math_acosh(-463);
test_math_acosh(-109);
test_math_acosh("QLX5GCBDEH");
test_math_acosh(-525);
test_math_acosh(1.704275733256199e+308);
test_math_acosh("ZSIRM");
test_math_acosh(1.0589032092043742e+308);
test_math_acosh("B60SKGR");
test_math_acosh("PM14QP4EFJ");
test_math_acosh(1.5032668466238704e+308);
test_math_acosh(-503);
test_math_acosh(1.2642605847516783e+308);
test_math_acosh(-13);
test_math_acosh("V7D9YO8C");
test_math_acosh(3.993956453936823e+307);
test_math_acosh("KXPZK94J6");
test_math_acosh(2.673064285916889e+307);
test_math_acosh("F5UJ2WWO");
test_math_acosh(-981);
test_math_acosh("ER0TB");
test_math_acosh("X7ZY9T");
test_math_acosh(1.2514326930047917e+308);
test_math_acosh("IO9PLF4");
test_math_acosh("G37GNAW");
test_math_acosh(3.098933112814824e+307);
test_math_acosh("RVY2JOBK7");
test_math_acosh(-55);
test_math_acosh(1.5024655572814014e+308);
test_math_acosh("6UYLEW");
test_math_acosh(1.339264722122922e+308);
test_math_acosh(4.412266620526769e+307);
test_math_acosh("YZAL");
test_math_acosh(1.3804410251146667e+308);
test_math_acosh(3.5306404076381145e+307);
test_math_acosh(1.3149481827402562e+308);
test_math_acosh("48WAMR83I7");
test_math_acosh("JAHA0A");
test_math_acosh("NQS4");
test_math_acosh(9.926932297120627e+307);
test_math_acosh("8VV");
test_math_acosh(8.742579157431221e+307);
test_math_acosh(-349);
test_math_acosh(-661);
test_math_acosh("HZRUZZSJAY");
test_math_acosh(-819);
test_math_acosh(-731);
test_math_acosh(-429);
test_math_acosh("RUOC");
test_math_acosh("ITAS5E");
test_math_acosh(-141);
test_math_acosh(9.582763534080986e+306);
test_math_acosh("GY2FYG");
test_math_acosh(1.6929572719630167e+308);
test_math_acosh("X27QHHP16");
test_math_acosh(-127);
test_math_acosh(3.298270414354427e+307);
test_math_acosh(1.5421975277980386e+308);
test_math_acosh("BLMK6X");
test_math_acosh("EII");
test_math_acosh(-59);
test_math_acosh("51D8KJFPAQ");
test_math_acosh("X5940");
test_math_acosh(-135);
test_math_acosh("YO6A4");
test_math_acosh(3.2644699132234937e+307);
test_math_acosh("SPOQJ2LW");
test_math_acosh("A6FFIO");
test_math_acosh(-877);
test_math_acosh("ZEMC9M");
test_math_acosh("6QILW");
test_math_acosh(3.727187741757853e+307);
test_math_acosh("J1YV9Q5AVC");
test_math_acosh("BBSS");
test_math_acosh("59ECSGX5");
test_math_acosh(7.135971849012789e+307);
test_math_acosh(-909);
test_math_acosh(1.5097976123485173e+308);
test_math_acosh(-553);
test_math_acosh("TNOUV");
test_math_acosh(1.0324111082929561e+307);
test_math_acosh("KNPE");
test_math_acosh(-17);
test_math_acosh("K50QI4OXF");
test_math_acosh(2.2747287932349657e+307);
test_math_acosh(-37);
test_math_acosh(1.0446873889192752e+305);
test_math_acosh("7LH86DM");
test_math_acosh(8.374476657370206e+307);
test_math_acosh("ZYR3KIFG");
test_math_acosh(3.2698784195783567e+307);
test_math_acosh(1.171085060583804e+308);
test_math_acosh(1.7973842888808477e+308);
test_math_acosh("ZLFNBSLV");
test_math_acosh(-897);
test_math_acosh(7.42304318079269e+307);
test_math_acosh("AJ3");
test_math_acosh("ZE6QY88A");
test_math_acosh(1.702345776475509e+308);
test_math_acosh(8.979657268477657e+307);
test_math_acosh(8.789574581760767e+307);
test_math_acosh(1.0462947493133478e+308);
test_math_acosh(9.112733771420408e+307);
test_math_acosh("8EN1");
test_math_acosh(4.941718165916155e+307);
test_math_acosh("78L");
test_math_acosh("9POWXHJESP");
test_math_acosh("Q9BB");
test_math_acosh("H2U");
test_math_acosh("CWAK");
test_math_acosh("19Q7GX");
test_math_acosh("4LA");
test_math_acosh(8.749001953801154e+306);
test_math_acosh("2CH3");
test_math_acosh(6.12733405698534e+307);
test_math_acosh("D8K1PR");
test_math_acosh(9.823517695301253e+307);
test_math_acosh(4.0477277924844057e+307);
test_math_acosh(3.1924939514763885e+306);
test_math_acosh(1.594952135760249e+308);
test_math_acosh(2.9490389941073743e+307);
test_math_acosh(1.3175931600228054e+308);
test_math_acosh(8.35840738506083e+307);
test_math_acosh(-567);
test_math_acosh(9.140397304665912e+307);
test_math_acosh("VTWCXL");
test_math_acosh(9.989115615009832e+307);
test_math_acosh(164);
test_math_acosh("7BO");
test_math_acosh(1.1852563103930764e+308);
test_math_acosh("HZJW9HRM");
test_math_acosh(-117);
test_math_acosh(1.0745088064160715e+308);
test_math_acosh(-539);
test_math_acosh(1.780327625547253e+308);
test_math_acosh(5.127254467031534e+307);
test_math_acosh("NGBKQ9UXV");
test_math_acosh("7JGA0K19P");
test_math_acosh("24QPNQOM7");
test_math_acosh(-609);
test_math_acosh(-27);
test_math_acosh("GKHF");
test_math_acosh(-587);
test_math_acosh(1.1630184861951722e+308);
test_math_acosh(-353);
test_math_acosh("VQF91P9QC");
test_math_acosh(-521);
test_math_acosh(1.6958764336243656e+308);
test_math_acosh(3.3269455244034703e+307);
test_math_acosh("L7RVPS7W");
test_math_acosh("3QB8GNQE6");
test_math_acosh(7.133693646442133e+307);
test_math_acosh("SMKHC");
test_math_acosh("09AX");
test_math_acosh("85CTLBQ86");
test_math_acosh(1.532373246904611e+308);
test_math_acosh("ZW4J1LYU");
test_math_acosh(1.6710543937252924e+308);
test_math_acosh(1.1516322785424595e+308);
test_math_acosh("RD49J30");
test_math_acosh("4IRJRI2K6M");
test_math_acosh(4.3492168420969117e+307);
test_math_acosh("QQPQ");
test_math_acosh("M6IWG8VL");
test_math_acosh(1.677680229806463e+308);
test_math_acosh(-643);
test_math_acosh("JVPX");
test_math_acosh("S257585AIF");
test_math_acosh("IBJKPX4");
test_math_acosh("95OKRV40");
test_math_acosh(-867);
test_math_acosh(-655);
test_math_acosh("QXAWY35E6");
test_math_acosh("PXSYCO6IX");
test_math_acosh("53D6");
test_math_acosh(1.3107198179729813e+308);
test_math_acosh(4.90552078714254e+307);
test_math_acosh("O81P");
test_math_acosh(-953);
test_math_acosh("W4969");
test_math_acosh("70ARU");
test_math_acosh("JLCNV");
test_math_acosh("LGB");
test_math_acosh(5.427704593077075e+307);
test_math_acosh("UM3HY4J7T");
test_math_acosh(1.0792003206125678e+308);
test_math_acosh("Y6U0FI1BV");
test_math_acosh(5.709875823211408e+307);
test_math_acosh("XJYY2");
test_math_acosh(-397);
test_math_acosh(3.293739743261003e+307);
test_math_acosh(3.209895815664485e+307);
test_math_acosh(3.5255606702295714e+307);
test_math_acosh(2.837536763539248e+307);
test_math_acosh(2.7837170273082953e+307);
test_math_acosh("ZWXNT9DJ2Z");
test_math_acosh(6.205218439379993e+306);
test_math_acosh(-939);
test_math_acosh(9.164745351995064e+307);
test_math_acosh("T44ALDNTY");
test_math_acosh(-957);
test_math_acosh("5OF265");
test_math_acosh(-589);
test_math_acosh("9593ZY");
test_math_acosh(1.1381847910722092e+308);
test_math_acosh(6.521464292840822e+307);
test_math_acosh("LUKIJUJV");
test_math_acosh(4.02724907283818e+307);
test_math_acosh("49XC4DGQ4");
test_math_acosh(1.1346295234330052e+308);
test_math_acosh(1.1586237223501558e+308);
test_math_acosh(1.769272396318078e+308);
test_math_acosh(3.676229078983858e+307);
test_math_acosh("2W16OGB8B");
test_math_acosh(-573);
test_math_acosh(9.959516191115298e+306);