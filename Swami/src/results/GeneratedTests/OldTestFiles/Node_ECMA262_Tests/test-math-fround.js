/*
* This file is automatically generated by Swami
*
* 2019-08-02 14:45:03.428245
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
function test_math_fround(x){
	if (Object.is( x,NaN )){
		var output = Math.fround(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if ((Object.is( x,+ 0) && Object.is(x,+ 0) &&  x === - 0  &&  x === + Infinity  &&  x === - Infinity )){
		var output = Math.fround(x);
		assert.strictEqual(x, output);
		console.log("Good Test");
		return;
		}
	var x64 =converting x32 to a value in IEEE 754-2008 binary64 format;
		console.log("OK Test")
}



/*TESTS GENERATED AUTOMATICALLY*/
test_math_fround(/[^.]+/);
test_math_fround(false);
test_math_fround(undefined);
test_math_fround(NaN);
test_math_fround(-0);
test_math_fround(/[\u0400-\u04FF]+/g);
test_math_fround("T6O9H7IF");
test_math_fround(+0);
test_math_fround(Infinity);
test_math_fround(/\r\n|\r|\n/);
test_math_fround(5.198679533695376e+307);
test_math_fround(/foo/g);
test_math_fround("S730Y2D9");
test_math_fround("PXE");
test_math_fround(/yes.*day/);
test_math_fround(1.2351409891067065e+308);
test_math_fround(true);
test_math_fround("WE3NRS1");
test_math_fround(-815);
test_math_fround(1.690073268028529e+308);
test_math_fround(null);
test_math_fround("6LQTT");
test_math_fround("H4VI1XKT");
test_math_fround(-99);
test_math_fround(-515);
test_math_fround(-291);
test_math_fround(-135);
test_math_fround("005IUQ");
test_math_fround(344);
test_math_fround("FDBI2C");
test_math_fround(9.644013342794608e+307);
test_math_fround("M2O");
test_math_fround(-187);
test_math_fround(-881);
test_math_fround(5.161971901217605e+307);
test_math_fround(-965);
test_math_fround(-211);
test_math_fround(4.835194468685759e+307);
test_math_fround("LH9H");
test_math_fround(2.681804100365576e+307);
test_math_fround("TRDM3XU1T");
test_math_fround(5.89267782104337e+307);
test_math_fround(-769);
test_math_fround(1.179018052664576e+308);
test_math_fround(8.903677737807496e+307);
test_math_fround("1WBV9G");
test_math_fround(-401);
test_math_fround("9AXMV");
test_math_fround(-149);
test_math_fround(/yes[^]*day/);
test_math_fround("KLGR");
test_math_fround(-819);
test_math_fround("7G31DLJB");
test_math_fround(1.3184205986775712e+308);
test_math_fround(7.9513122512575e+305);
test_math_fround(1.0436172493792629e+308);
test_math_fround(-239);
test_math_fround(-477);
test_math_fround("WEQV");
test_math_fround(-441);
test_math_fround(/ab+c/);
test_math_fround(1.1062757330169933e+307);
test_math_fround("3XTX");
test_math_fround(7.501610632002924e+307);
test_math_fround(-349);
test_math_fround("9VYSBJ");
test_math_fround("SCKR7Z76I9");
test_math_fround(-621);
test_math_fround(3.704272103984582e+307);
test_math_fround(4.847385214528701e+307);
test_math_fround("3XVXW");
test_math_fround("41G11O");
test_math_fround(/(\w+)\s(\w+)/);
test_math_fround(1.5241874102243866e+308);
test_math_fround("E0FX");
test_math_fround(-669);
test_math_fround(-845);
test_math_fround(-739);
test_math_fround(-125);
test_math_fround(4.668065629733712e+307);
test_math_fround(4.909176182684858e+307);
test_math_fround(1.2328217074365115e+308);
test_math_fround(-303);
test_math_fround(6.66850624053159e+306);
test_math_fround(-591);
test_math_fround(-347);
test_math_fround(-859);
test_math_fround(1.2204350325369103e+308);
test_math_fround(-81);
test_math_fround(7.957983773097153e+307);
test_math_fround("H3BOWQD");
test_math_fround("ZZWG3");
test_math_fround(-7);
test_math_fround(1.6701693813244618e+308);
test_math_fround("9QAY");
test_math_fround(-51);
test_math_fround("ZVA3");
test_math_fround(-231);
test_math_fround(-223);
test_math_fround(1.4577500343424268e+308);
test_math_fround("UBP99NZL");
test_math_fround("Y6UJQD");
test_math_fround(-191);
test_math_fround(7.95638710475757e+307);
test_math_fround("KZV4RO51");
test_math_fround(1.6333305750044353e+308);
test_math_fround(5.236726891423638e+307);
test_math_fround("OSCR4GL");
test_math_fround(3.496720189894875e+307);
test_math_fround(1.1425487518055422e+308);
test_math_fround(-619);
test_math_fround(5.314829759484919e+307);
test_math_fround("5X1");
test_math_fround(-485);
test_math_fround(-79);
test_math_fround(-161);
test_math_fround("8OB");
test_math_fround(-327);
test_math_fround(-413);
test_math_fround(1.6900142320574796e+308);
test_math_fround(-379);
test_math_fround(1.4548447066372614e+308);
test_math_fround("UBVI");
test_math_fround("RH0SM19");
test_math_fround(8.317571980979164e+307);
test_math_fround(5.471139259438796e+307);
test_math_fround("EZEFKSSTP");
test_math_fround(1.7901253278099163e+308);
test_math_fround("0IS9L0C941");
test_math_fround(-935);
test_math_fround("6KXA");
test_math_fround(1.0315993902274616e+308);
test_math_fround("GE52");
test_math_fround(1.0826966111817624e+308);
test_math_fround(4.874100299400994e+307);
test_math_fround("LMLBO1C6K");
test_math_fround(1.419049699425357e+307);
test_math_fround("O0N5");
test_math_fround("B4B4U");
test_math_fround("9ADHU55KS");
test_math_fround(1.778853205185162e+308);
test_math_fround(-771);
test_math_fround(3.7863183150159706e+307);
test_math_fround("0J8Y6JTXN");
test_math_fround(-973);
test_math_fround(-101);
test_math_fround("5U9ZUZMW");
test_math_fround(-671);
test_math_fround(2.3747371471456535e+307);
test_math_fround("Z9G6A7");
test_math_fround(1.1031092699616917e+308);
test_math_fround("TY57SRTO");
test_math_fround("3F5A8PNGM");
test_math_fround("JTFZS4HKYS");
test_math_fround("R8NZ");
test_math_fround("6MPI");
test_math_fround(1.1220083756771913e+308);
test_math_fround(-971);
test_math_fround(-15);
test_math_fround(4.433773823958518e+307);
test_math_fround(1.1424177597879646e+308);
test_math_fround(4.195987184301641e+307);
test_math_fround("EMMS07");
test_math_fround(1.5268040712158672e+307);
test_math_fround(4.651139019326804e+307);
test_math_fround(3.806294981137003e+307);
test_math_fround("ZEEKE");
test_math_fround("637TWT70");
test_math_fround("UEQGG2DE");
test_math_fround(-811);
test_math_fround("E44");
test_math_fround(-705);
test_math_fround("V62MMQOU");
test_math_fround("GWTM");
test_math_fround("T4JHQW");
test_math_fround(-779);
test_math_fround(-509);
test_math_fround(-901);
test_math_fround(-955);
test_math_fround("FUFF");
test_math_fround(-897);
test_math_fround(-331);
test_math_fround(2.1900421854571144e+307);
test_math_fround(-209);
test_math_fround(-745);
test_math_fround(4.670644354795116e+307);
test_math_fround(1.3817421273348197e+308);
test_math_fround(-561);
test_math_fround("RHONXM");
test_math_fround(-151);
test_math_fround(1.5197952455547012e+308);
test_math_fround("9J2CL");
test_math_fround(1.8150101357878685e+307);
test_math_fround(-765);
test_math_fround(1.4114580382089928e+308);
test_math_fround(1.0277065919560695e+308);
test_math_fround(3.4580802940009064e+307);
test_math_fround("MPSD1AHFPO");
test_math_fround(4.984062180685262e+307);
test_math_fround("T5X2EVQA");
test_math_fround(9.10795953678972e+307);
test_math_fround(7.96865887239898e+307);
test_math_fround(1.4366668653178107e+308);
test_math_fround(1.5842807199283678e+308);
test_math_fround(4.2516806252512267e+307);
test_math_fround(-157);
test_math_fround("TGSD9PG");
test_math_fround(1.20004699784883e+308);
test_math_fround(-271);
test_math_fround("XIJSL");
test_math_fround("8XDGMV4L");
test_math_fround(1.5797443346020992e+308);
test_math_fround(-11);
test_math_fround(4.564844600743294e+307);
test_math_fround(1.488386929936147e+308);
test_math_fround(3.1132058973701855e+307);
test_math_fround(1.6745491969400295e+308);
test_math_fround("ESFC6B");
test_math_fround("6HAB51E");
test_math_fround(2.622099667538575e+307);
test_math_fround(-247);
test_math_fround(-165);
test_math_fround(1.6281865216545767e+308);
test_math_fround(-131);
test_math_fround(-807);
test_math_fround("AUDFK");
test_math_fround(6.744090357306765e+307);
test_math_fround(150);
test_math_fround(1.544775700465395e+308);
test_math_fround(1.6545002304445398e+308);
test_math_fround(3.346831847811341e+307);
test_math_fround(1.2252236378940865e+308);
test_math_fround(1.2223593933176612e+308);
test_math_fround(-531);
test_math_fround("E9E");
test_math_fround("AG5");
test_math_fround(-539);
test_math_fround(1.0042022595115214e+308);
test_math_fround("PMH5OW97J1");
test_math_fround(9.598734392457766e+307);
test_math_fround(1.4821634777833825e+308);
test_math_fround(-141);
test_math_fround(1.135394062007632e+308);
test_math_fround("FKY8W");
test_math_fround(2.6707623164739567e+307);
test_math_fround(-155);
test_math_fround(1.5209744379527787e+308);
test_math_fround(1.4249242940309055e+308);
test_math_fround(-661);
test_math_fround("5HIFL");
test_math_fround(1.1413285656662505e+308);
test_math_fround("8GC48OF");
test_math_fround(6.177353814944382e+307);
test_math_fround(8.854064071407167e+307);
test_math_fround("EUKR8");
test_math_fround("KDNT6G");
test_math_fround(1.3627180905456806e+308);
test_math_fround(-527);
test_math_fround("CU2");
test_math_fround("UXZODZ7GH2");
test_math_fround("JJ6NTIGE");
test_math_fround(1.384621161058336e+308);
test_math_fround(-883);
test_math_fround("9OKSI47");
test_math_fround(1.6602973150088673e+308);
test_math_fround(-511);
test_math_fround(1.5256295293536727e+308);
test_math_fround(4.807469018249076e+307);
test_math_fround("LJ3");
test_math_fround(-487);
test_math_fround(1.717835252189374e+308);
test_math_fround(9.921896780743051e+307);
test_math_fround(-497);
test_math_fround(1.2034205322363245e+308);
test_math_fround("Q8IVQRH");
test_math_fround(-979);
test_math_fround(3.750121771596056e+307);
test_math_fround(1.704304744123108e+308);
test_math_fround(1.0768844340328633e+308);
test_math_fround(-871);
test_math_fround(1.0642142921915017e+307);
test_math_fround(216);
test_math_fround("T5WIDL5TTF");
test_math_fround("M7XLI2TH6");
test_math_fround(-243);
test_math_fround(1.306786163949143e+308);
test_math_fround("SFMTVTO7");
test_math_fround("3LTAP");
test_math_fround("JEQYW0EFC");
test_math_fround("0JRALVHM");
test_math_fround(1.7751627026663408e+308);
test_math_fround(-329);
test_math_fround("2FOAOX");
test_math_fround("LDLJLVH4H8");
test_math_fround("M2CZZ8WDF5");
test_math_fround(1.0690890936589631e+308);
test_math_fround(-659);
test_math_fround(8.052903114646782e+307);
test_math_fround(1.1936042163648948e+308);
test_math_fround("9TWOIVRCB");
test_math_fround(-299);
test_math_fround("IQ4HP5SO");
test_math_fround("1Z5I");
test_math_fround(-741);
test_math_fround("7O3IGK7Q");
test_math_fround("OET8YZGRY");
test_math_fround(1.2197366926548103e+306);
test_math_fround(1.2535405488955205e+308);
test_math_fround(1.7853451049230164e+308);
test_math_fround("CMU");
test_math_fround("Y1DOGY");
test_math_fround("U0VGX");
test_math_fround(-921);
test_math_fround("O1SST7");
test_math_fround(-251);
test_math_fround(-781);
test_math_fround(1.4728908463252882e+308);
test_math_fround(9.25967268725763e+307);
test_math_fround("RPHAF2712");
test_math_fround("EVIT");
test_math_fround(3.069735068013152e+307);
test_math_fround(5.329182805399289e+307);
test_math_fround("L0H7");
test_math_fround(1.3343634522396182e+308);
test_math_fround(1.5497877885638486e+308);
test_math_fround(-127);
test_math_fround(6.226080891123291e+307);
test_math_fround(-629);
test_math_fround("UOJCECD");
test_math_fround("A356FA0");
test_math_fround(4.135099465480241e+307);
test_math_fround("GMZ1EJ");
test_math_fround(-369);
test_math_fround("1YXOWH1");
test_math_fround("XF9JX6");
test_math_fround(1.6407893420729815e+308);
test_math_fround("W8TRW");
test_math_fround("4P9");
test_math_fround(1.6042923273641105e+307);
test_math_fround("1EF");
test_math_fround("XOLMUNVC");
test_math_fround("PUJ6Z");
test_math_fround(2.0916944115921375e+307);
test_math_fround("28BEGE4");
test_math_fround(-83);
test_math_fround("QRBDK");
test_math_fround(4.051621699164272e+307);
test_math_fround("FPMQ");
test_math_fround(-493);
test_math_fround("CJOW71");
test_math_fround(-709);
test_math_fround(-715);
test_math_fround(1.1129010581365425e+308);
test_math_fround("XALUJU");
test_math_fround("UA94H4");
test_math_fround(-289);
test_math_fround(7.39710142891352e+307);
test_math_fround(-797);
test_math_fround(1.0962332778325584e+308);
test_math_fround(2.607505117500134e+307);
test_math_fround("LIXSJ");
test_math_fround("8T1R");
test_math_fround(-87);
test_math_fround(-585);
test_math_fround(-855);
test_math_fround("IQWM5N4");
test_math_fround("0WRC");
test_math_fround("QE0V7M1");
test_math_fround("LPTY1");
test_math_fround("RSPE");
test_math_fround(1.2844371784900847e+308);
test_math_fround("1DG99F2");
test_math_fround("P96G9O");
test_math_fround(-339);
test_math_fround(8.510749249234521e+307);
test_math_fround(1.444650435065605e+308);
test_math_fround(1.1138449331513197e+308);
test_math_fround("SI0S65Y");
test_math_fround(-409);
test_math_fround(1.763445865123906e+308);
test_math_fround("E4NG5458IK");
test_math_fround(9.155514816686834e+307);
test_math_fround("WM6G42B");
test_math_fround("SWOT");
test_math_fround(3.692782907724022e+307);
test_math_fround("FGYKW0OZ");
test_math_fround(-575);
test_math_fround("IVS");
test_math_fround(-111);
test_math_fround(-219);
test_math_fround(1.5630724393420805e+308);
test_math_fround(1.0432498344633428e+308);
test_math_fround(8.036091833753803e+307);
test_math_fround("PNKZO17E");
test_math_fround(1.6947190705392455e+308);
test_math_fround(1.337560289980168e+308);
test_math_fround(-481);
test_math_fround(3.908736395045537e+306);
test_math_fround(-861);
test_math_fround(3.386392960659294e+307);
test_math_fround(-483);
test_math_fround(-873);
test_math_fround(1.0910985762164491e+308);
test_math_fround("3F97OK");
test_math_fround("8VMGNOZY05");
test_math_fround(1.5879556195276404e+307);
test_math_fround(-181);
test_math_fround(-597);
test_math_fround(1.1800736393539428e+307);
test_math_fround(-425);
test_math_fround("ECONLLBB");
test_math_fround(-75);
test_math_fround(-9);
test_math_fround(-115);
test_math_fround(1.6827111236656716e+308);
test_math_fround("KBB");
test_math_fround("X6J8K7MAZZ");
test_math_fround("4TDOB08QR");
test_math_fround(7.248138947844858e+307);
test_math_fround(-153);
test_math_fround("XOS");
test_math_fround(-959);
test_math_fround(9.557616255787975e+307);
test_math_fround(-559);
test_math_fround(-213);
test_math_fround(-563);
test_math_fround(-195);
test_math_fround(-573);
test_math_fround(7.532161234818912e+307);
test_math_fround(4.720676338417308e+307);
test_math_fround(-29);
test_math_fround(5.938479749256076e+307);
test_math_fround(-805);
test_math_fround("PCU41QH6Z");
test_math_fround(-787);
test_math_fround(-143);
test_math_fround("OKKFW");
test_math_fround(8.019569418534253e+307);
test_math_fround(1.2387154341560625e+308);
test_math_fround("0HBWF");
test_math_fround(8.001557427102241e+307);
test_math_fround("AZ3HE7");
test_math_fround(3.5943016424355425e+305);
test_math_fround(1.4148236342755058e+308);
test_math_fround(-229);
test_math_fround(-533);
test_math_fround(1.3286791320296982e+308);
test_math_fround("DYGR");
test_math_fround(1.6738962953418068e+308);
test_math_fround("AGSU");
test_math_fround(140);
test_math_fround(5.314848562190217e+307);
test_math_fround(-325);
test_math_fround(-423);
test_math_fround(-139);
test_math_fround(3.170308757964202e+306);
test_math_fround(3.3040098287057824e+307);
test_math_fround(8.051427181667693e+307);
test_math_fround(5.024244941019416e+307);
test_math_fround(-451);
test_math_fround("8GGEE");
test_math_fround(-727);
test_math_fround(-843);
test_math_fround("YGTLYUA0");
test_math_fround("J6A3");
test_math_fround(2.868370031782704e+307);
test_math_fround("I9RT0JX");
test_math_fround("SJVLJSX1");
test_math_fround(6.901327204542961e+307);
test_math_fround(-641);
test_math_fround(9.897679441549952e+307);
test_math_fround("5VC");
test_math_fround(-375);
test_math_fround(8.222882895146941e+307);
test_math_fround(-605);
test_math_fround("ILJVLA4NH4");
test_math_fround(-197);
test_math_fround(-337);
test_math_fround(-467);
test_math_fround(6.596202428183912e+307);
test_math_fround(1.1490222000074054e+307);
test_math_fround(1.4006252590037564e+308);
test_math_fround("YMAS2");
test_math_fround(-751);
test_math_fround(7.688300937701645e+307);
test_math_fround(-363);
test_math_fround(3.064369556641347e+307);
test_math_fround(4.741594961547706e+307);
test_math_fround(-885);
test_math_fround(-335);
test_math_fround(-319);
test_math_fround("B585U7TYVR");
test_math_fround("8MK");
test_math_fround("AF2FV87");
test_math_fround(1.6470243509212244e+308);
test_math_fround(1.2363653284761923e+308);
test_math_fround("AC78");
test_math_fround(1.6552671034831563e+308);
test_math_fround(7.639080919950377e+307);
test_math_fround(7.703832897009306e+307);
test_math_fround(-19);
test_math_fround("R1IVL6TYNI");
test_math_fround("C0TYHFZEIJ");
test_math_fround(1.7357409521135354e+308);
test_math_fround(4.373073375992614e+307);
test_math_fround("COCDAZSZ");
test_math_fround("K4968FX2VL");
test_math_fround(1.186620580893821e+308);
test_math_fround(-625);
test_math_fround("URXRJ3LXL");
test_math_fround("CVGEWQQPP");
test_math_fround(-851);
test_math_fround("ULP68JT");
test_math_fround(1.3676404121805793e+308);
test_math_fround(6.456535539935045e+307);
test_math_fround("HAZZ");
test_math_fround(-457);
test_math_fround(1.4279955797739877e+308);
test_math_fround(8.009233383596351e+307);
test_math_fround("RE8U8481JJ");
test_math_fround(-259);
test_math_fround(-245);
test_math_fround("N5VG");
test_math_fround("4ZAOVBLA");
test_math_fround(-991);
test_math_fround(1.402973832633062e+308);
test_math_fround(-757);
test_math_fround("2RG8VNQB");
test_math_fround("BGB6O");
test_math_fround("K79CF6");
test_math_fround("PTWC");
test_math_fround("533MW");
test_math_fround(1.46605436396582e+308);
test_math_fround(-977);
test_math_fround("NAIN1");
test_math_fround("ZNH");
test_math_fround(1.4133413648150202e+308);
test_math_fround("TPV");
test_math_fround(-729);
test_math_fround(-25);
test_math_fround("EPTCAPQVZ");
test_math_fround(1.1397315576599508e+307);
test_math_fround(-317);
test_math_fround(-145);
test_math_fround("9A1QBT");
test_math_fround("77R8X");
test_math_fround("MBMXH");
test_math_fround("ETFJYZQ8MN");
test_math_fround("54XV6X27FZ");
test_math_fround(1.2141434431055432e+308);
test_math_fround(1.2306683413129854e+308);
test_math_fround(-989);
test_math_fround(5.252505464115718e+307);
test_math_fround(-997);
test_math_fround("K6RG");
test_math_fround("I5JE4HTW5C");
test_math_fround("KS7Y4GSJ");
test_math_fround(5.554532572363541e+307);
test_math_fround(7.437613278280728e+307);
test_math_fround("7RKPH");
test_math_fround("S2P");
test_math_fround("0W3");
test_math_fround("PPRSMU");
test_math_fround("QU0K6SWBSO");
test_math_fround("YYXSF9VESX");
test_math_fround(-753);
test_math_fround(6.388246702393872e+307);
test_math_fround(1.5037728026497266e+308);
test_math_fround("2R6SAMX");
test_math_fround("XTD1UKBXJ");
test_math_fround("0C4KBY");
test_math_fround(-109);
test_math_fround(-623);
test_math_fround(6.938459339237794e+307);
test_math_fround(4.628350655304254e+307);
test_math_fround(1.6027829472576814e+308);
test_math_fround(5.559381407765632e+307);
test_math_fround(-295);
test_math_fround(-437);
test_math_fround(1.6385999120358024e+308);
test_math_fround(996);
test_math_fround(-263);
test_math_fround("YPJT7H");
test_math_fround(1.0243458948394553e+308);
test_math_fround(1.0781556680768326e+308);
test_math_fround("NESNSUZ");
test_math_fround(-371);
test_math_fround(-23);
test_math_fround(1.2443580956421499e+308);
test_math_fround("BJP0KTSW");
test_math_fround("ZK08PU48");
test_math_fround("XDDK");
test_math_fround(-389);
test_math_fround("3MJ");
test_math_fround(1.5267116201819597e+308);
test_math_fround(8.872983735220781e+307);
test_math_fround(1.1991718083935027e+308);
test_math_fround(1.3752136810458375e+308);
test_math_fround("IWF");
test_math_fround("G4U4MHO4");
test_math_fround(-333);
test_math_fround(-95);
test_math_fround(-175);
test_math_fround(6.579441789666987e+307);
test_math_fround(1.498851721707573e+308);
test_math_fround(6.402210085073414e+307);
test_math_fround(-549);
test_math_fround(1.3102748623602073e+308);
test_math_fround(7.682176012535915e+307);
test_math_fround("DQ1WAT");
test_math_fround(1.4854358035430907e+308);
test_math_fround("5XGO9");
test_math_fround("Z4LC47W");
test_math_fround("UBE2");
test_math_fround(-609);
test_math_fround("YHMDVFOR");
test_math_fround(-393);
test_math_fround(-313);
test_math_fround("9CWIU6Z");
test_math_fround(5.334387854228978e+307);
test_math_fround(1.7314912510776389e+308);
test_math_fround(-385);
test_math_fround(9.479426051906998e+307);
test_math_fround(6.055002619232661e+306);
test_math_fround(8.288864723321639e+307);
test_math_fround("EGNZO41");
test_math_fround("EVBR");
test_math_fround("0FPH0");
test_math_fround("BB96GA2Z");
test_math_fround(-835);
test_math_fround("J9KZETM");
test_math_fround(6.433704983356477e+307);
test_math_fround("WASX");
test_math_fround(1.6113524868794734e+308);
test_math_fround(-635);
test_math_fround("55I4BX86I");
test_math_fround(-403);
test_math_fround(1.5032381563374074e+308);
test_math_fround(8.697401504260014e+307);
test_math_fround(-595);
test_math_fround("KUHCJJB");
test_math_fround(2.4710943379496413e+307);
test_math_fround(1.3485613709467604e+308);
test_math_fround(1.2867339594590337e+308);
test_math_fround("MAKCPAWE73");
test_math_fround("EXQ");
test_math_fround(-975);
test_math_fround(-569);
test_math_fround(1.0024771850670914e+308);
test_math_fround(1.3523279959425911e+308);
test_math_fround(3.7355752122694365e+307);
test_math_fround(1.1436702160120838e+308);
test_math_fround("R4K3");
test_math_fround("TR1NSLN");
test_math_fround(1.499748865041873e+308);
test_math_fround(9.379302638466586e+307);
test_math_fround(1.7697362954256802e+308);
test_math_fround("TPDRY");
test_math_fround(-353);
test_math_fround(6.496082970974769e+307);
test_math_fround("08ZZ0XI");
test_math_fround(3.212801081940511e+307);
test_math_fround("JYK");
test_math_fround(1.2758992043044292e+308);
test_math_fround("7X4");
test_math_fround("6DDO");
test_math_fround(-495);
test_math_fround(-863);
test_math_fround(1.1531076645138025e+308);
test_math_fround(-159);
test_math_fround(1.4532961534474815e+307);
test_math_fround("ZCE");
test_math_fround("50791VW");
test_math_fround(1.4841083161181183e+308);
test_math_fround(1.7487733714281825e+308);
test_math_fround("5GQB5H");
test_math_fround("9J8JHEY22");
test_math_fround("SG4IJCD");
test_math_fround("94E");
test_math_fround("DNQT");
test_math_fround(1.1049973968141141e+308);
test_math_fround(1.5774265544571406e+308);
test_math_fround(1.3027006213475686e+308);
test_math_fround(8.572009169164454e+307);
test_math_fround(1.5289320179151037e+308);
test_math_fround(6.048926264777924e+307);
test_math_fround(3.70089880565106e+307);
test_math_fround(-825);
test_math_fround(-947);
test_math_fround(5.790116715170179e+306);
test_math_fround("9IOAQXXZWJ");
test_math_fround(1.5577032414550434e+308);
test_math_fround(1.0090892722927994e+308);
test_math_fround(-857);
test_math_fround("EQQLU0");
test_math_fround(1.0892644514425255e+306);
test_math_fround(1.5984623581056648e+308);
test_math_fround(-985);
test_math_fround(-593);
test_math_fround(8.225763896584985e+307);
test_math_fround(4.2786605147407534e+307);
test_math_fround(-465);
test_math_fround(-345);
test_math_fround(9.383946466905748e+307);
test_math_fround("MWU");
test_math_fround(-837);
test_math_fround(4.3161122667145067e+307);
test_math_fround(-679);
test_math_fround(3.15595085188921e+306);
test_math_fround("D49XR");
test_math_fround("2KXT5R09");
test_math_fround(8.323348731040739e+307);
test_math_fround(3.1532008509291375e+307);
test_math_fround(-761);
test_math_fround(1.463509784206195e+307);
test_math_fround(1.7124343588559023e+308);
test_math_fround(4.861686026672104e+307);
test_math_fround(-359);
test_math_fround(-61);
test_math_fround("O5JSJ");
test_math_fround(2.455923294615759e+307);
test_math_fround("DEMD015O");
test_math_fround(1.4486338087908342e+308);
test_math_fround(1.9512649692915655e+307);
test_math_fround("WNXUV4");
test_math_fround(4.0013761187810886e+307);
test_math_fround(-201);
test_math_fround(8.101383120959691e+307);
test_math_fround(-681);
test_math_fround(1.5560392729833075e+308);
test_math_fround(-647);
test_math_fround(1.6386700617582037e+308);
test_math_fround(-905);
test_math_fround(1.50302656819471e+308);
test_math_fround(1.4397242327317502e+308);
test_math_fround("90SE");
test_math_fround(5.852417418244272e+307);
test_math_fround(4.2946002451875093e+307);
test_math_fround(1.300466701873309e+307);
test_math_fround(1.3933477235946644e+308);
test_math_fround(-73);
test_math_fround(-611);
test_math_fround(1.3306001862659878e+308);
test_math_fround("SX6L3");
test_math_fround("A3FXIGVM");
test_math_fround(-63);
test_math_fround(-785);
test_math_fround(1.658342304649803e+308);
test_math_fround("BW3JCOOI9F");
test_math_fround("PTE71UNJ");
test_math_fround("GWCB");
test_math_fround(-391);
test_math_fround(-937);
test_math_fround(-285);
test_math_fround("KONRUUX50");
test_math_fround(1.275506145372937e+308);
test_math_fround(5.898665748739282e+307);
test_math_fround(3.036306302538343e+307);
test_math_fround("TJVU");
test_math_fround(4.939928269284377e+307);
test_math_fround(-789);
test_math_fround(-697);
test_math_fround("1RXTVZWS");
test_math_fround(-535);
test_math_fround("X95YJ");
test_math_fround(1.118887239857691e+308);
test_math_fround(-177);
test_math_fround("6AIC3QY");
test_math_fround("8TUPYH");
test_math_fround(4.971974292630334e+307);
test_math_fround("YERL");
test_math_fround(1.5542146749139644e+308);
test_math_fround(-399);
test_math_fround(1.1964735720875793e+308);
test_math_fround(1.2475206769148054e+308);
test_math_fround(1.1718542753475973e+308);
test_math_fround(2.7787284690605544e+307);
test_math_fround(-27);
test_math_fround(248);
test_math_fround("E649Q9VYZ");
test_math_fround(7.681604872577811e+307);
test_math_fround("K28");
test_math_fround(1.54617045202402e+308);
test_math_fround("FP8VX");
test_math_fround("SMBL8DCE");
test_math_fround("5NOIL");
test_math_fround(-463);
test_math_fround(-119);
test_math_fround(-909);
test_math_fround("SYQL4897");
test_math_fround(1.2800273378869678e+307);
test_math_fround(-737);
test_math_fround("F3JJ1NWWWN");
test_math_fround("NUZ");
test_math_fround("UYLC92");
test_math_fround(-637);
test_math_fround(-777);
test_math_fround(928);
test_math_fround("FMGHQ1E3J");
test_math_fround(1.7906083664409873e+308);
test_math_fround("69X7ZYUD7");
test_math_fround(8.568135295679592e+307);
test_math_fround("0P8R9G");
test_math_fround("GDAN2U");
test_math_fround("B0R");
test_math_fround(-893);
test_math_fround(-853);
test_math_fround("X3L7ME");
test_math_fround("9S0A");
test_math_fround("D5QZJ2GH");
test_math_fround(-529);
test_math_fround(9.90615007003256e+307);
test_math_fround(-225);
test_math_fround(-315);
test_math_fround("U03GFOEQ");
test_math_fround(1.2132902721744995e+308);
test_math_fround(7.128491989112491e+307);
test_math_fround(7.715919058346125e+307);
test_math_fround(7.557684135666706e+307);
test_math_fround("CDWI07P5C");
test_math_fround("XRJ685BE");
test_math_fround(1.2610244176494833e+308);
test_math_fround("NIOBYF1C5");
test_math_fround(-895);
test_math_fround(1.4364783634794105e+308);
test_math_fround(-657);
test_math_fround(9.738438535133806e+307);
test_math_fround("BQ3V");
test_math_fround("5ZBV9");
test_math_fround(-105);
test_math_fround("XFULY");
test_math_fround("C7HM4");
test_math_fround("NEXQLULO");
test_math_fround(-639);
test_math_fround("GBUQZP0VIG");
test_math_fround("2Q5N");
test_math_fround("EOGGC");
test_math_fround(6.576910348535821e+307);
test_math_fround(3.125837128950458e+307);
test_math_fround(6.87123674547225e+307);
test_math_fround(-613);
test_math_fround(-241);
test_math_fround("1NYFEZEKM");
test_math_fround("4XF");
test_math_fround("RB7TR");
test_math_fround(1.4577107628370189e+308);
test_math_fround("CUNXN");
test_math_fround("IQJEQ80O4C");
test_math_fround(1.608229324131456e+308);
test_math_fround(1.601669966880457e+307);
test_math_fround(1.3641738130442462e+308);
test_math_fround(-355);
test_math_fround("1J3TJE");
test_math_fround(6.366654665198369e+307);
test_math_fround(-653);
test_math_fround("ZGUO2");
test_math_fround("CGVULVU7Y");
test_math_fround(1.3839742823363113e+308);
test_math_fround(1.7104734707547982e+307);
test_math_fround(8.471649395177315e+307);
test_math_fround(1.1343178019149798e+308);
test_math_fround(-945);
test_math_fround(8.769902409976976e+307);
test_math_fround("0VUTJ");
test_math_fround("08XOCR");
test_math_fround(1.034519163646091e+308);
test_math_fround("B11WA");
test_math_fround(1.3206542619652982e+308);
test_math_fround(6.268045675329007e+307);
test_math_fround("TRDL3Y");
test_math_fround(-351);
test_math_fround(1.4248877521334639e+308);
test_math_fround("6NG0");
test_math_fround(-405);
test_math_fround(-643);
test_math_fround("D14");
test_math_fround("3ZHDIB7Z");
test_math_fround(1.541532726139193e+307);
test_math_fround(5.757581074558431e+307);
test_math_fround("F5PXG");
test_math_fround(-685);
test_math_fround(-553);
test_math_fround("LBN7A1LJKH");
test_math_fround(7.925858522301151e+306);
test_math_fround(3.0260573337437174e+307);
test_math_fround(-917);
test_math_fround(-381);
test_math_fround("GB8TEMO");
test_math_fround(1.4574273638106523e+307);
test_math_fround("RK6HC");
test_math_fround(8.770430923479406e+307);
test_math_fround("60RIQ2J4BW");
test_math_fround(-281);
test_math_fround(1.5411430959466014e+308);
test_math_fround("2PQYK");
test_math_fround("S5I4DBTV");
test_math_fround("MUU9");
test_math_fround("U2EV");
test_math_fround(1.1510302067978002e+308);
test_math_fround("SFVL28");
test_math_fround(1.3349293411657779e+308);
test_math_fround(1.2995448541509229e+308);
test_math_fround(9.505270971034364e+306);
test_math_fround("BUMJ5JD");
test_math_fround(3.238225029447773e+307);
test_math_fround(1.3023896782654782e+308);
test_math_fround("4WDIQT");
test_math_fround(-525);
test_math_fround(-763);
test_math_fround(1.2898014754399526e+308);
test_math_fround(2.9871450606993975e+307);
test_math_fround(6.116279097120077e+307);
test_math_fround(9.080715154418403e+307);
test_math_fround(1.5312839446367423e+308);
test_math_fround(7.463331608199638e+306);
test_math_fround("D0D");
test_math_fround(1.2710762449341642e+308);
test_math_fround(-203);
test_math_fround("86V");
test_math_fround(-931);
test_math_fround("HQQE0Q4C");
test_math_fround(2.5998009090263613e+305);
test_math_fround("D9CQTAF59Q");
test_math_fround(7.33068188379172e+307);
test_math_fround(-923);
test_math_fround(-795);
test_math_fround(4.8217775778974e+307);
test_math_fround(1.0028606996699277e+308);
test_math_fround(1.3991000237917793e+308);
test_math_fround(8.619560355484453e+307);
test_math_fround("459");
test_math_fround(1.3991299351126658e+308);
test_math_fround("D0Q");
test_math_fround(6.26298798188885e+307);
test_math_fround(1.440693344219955e+308);
test_math_fround(-809);
test_math_fround(1.5914078067987717e+308);
test_math_fround("OZKPPX6");
test_math_fround("01M0LQ2CH9");
test_math_fround("JQZ4XN7TU");
test_math_fround(8.517179761185269e+307);
test_math_fround(7.821605497390752e+307);
test_math_fround(-265);
test_math_fround(1.629578066579048e+307);
test_math_fround(1.7462139216899295e+308);
test_math_fround(4.614582956588456e+307);
test_math_fround("C2JHJ3E4W");
test_math_fround("CBY8WC");
test_math_fround(1.4923325955931363e+308);
test_math_fround(6.402881115729877e+307);
test_math_fround(3.1755904044185675e+307);
test_math_fround(1.4773889544923737e+307);
test_math_fround("7B7LAP");
test_math_fround("40C0R");
test_math_fround("49XEO701BK");
test_math_fround("VJJFDVIVWQ");
test_math_fround("HRN2REI2A");
test_math_fround("UC78O");
test_math_fround(-995);
test_math_fround(-767);
test_math_fround(1.2280708232683172e+308);
test_math_fround(5.263030793224049e+307);
test_math_fround(-455);
test_math_fround(9.801500709338605e+307);
test_math_fround(-793);
test_math_fround("4M2V6");
test_math_fround("VOZH6XXQ");
test_math_fround(1.2167753559165746e+307);
test_math_fround(1.6812110843901783e+308);
test_math_fround(8.420661985100484e+307);
test_math_fround(1.2473636296101967e+308);
test_math_fround(1.4310546311528737e+308);
test_math_fround("XONZKB");
test_math_fround(1.2939017854762204e+308);
test_math_fround(1.812091179097824e+307);
test_math_fround(-631);
test_math_fround(1.4429228799148717e+308);
test_math_fround("G24PR19EG");
test_math_fround("HEY");
test_math_fround(1.682088212166011e+307);
test_math_fround("J97");
test_math_fround("12LZU0O52Y");
test_math_fround("AYQUIXPW2");
test_math_fround("1L07");
test_math_fround("X9VFBUUB8F");
test_math_fround("ICX807LE");
test_math_fround("G9Q");
test_math_fround("YR0S");
test_math_fround("7FZG1");
test_math_fround(-701);
test_math_fround(-699);
test_math_fround(-377);
test_math_fround(7.697665503148073e+307);
test_math_fround(-513);
test_math_fround(4.839908123628018e+307);
test_math_fround(4.902451455784528e+307);
test_math_fround(5.722341459298725e+307);
test_math_fround(-443);
test_math_fround(3.8453126501154663e+307);
test_math_fround(1.3198711418963584e+308);