/*
* This file is automatically generated by Swami
*
* 2019-08-06 12:34:35.108789
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
function test_math_exp(x){
	if (Object.is( x,NaN )){
		var output = Math.exp(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.exp(x);
		assert.strictEqual(1, output);
		console.log("Good Test");
		return;
		}
	if (( x === - 0 )){
		var output = Math.exp(x);
		assert.strictEqual(1, output);
		console.log("Good Test");
		return;
		}
	if (( x === + Infinity )){
		var output = Math.exp(x);
		assert.strictEqual(+ Infinity, output);
		console.log("Good Test");
		return;
		}
	if (( x === - Infinity )){
		var output = Math.exp(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}



/*TESTS GENERATED AUTOMATICALLY*/
test_math_exp(1.7432118952328566e+307);
test_math_exp("9J48F85TH");
test_math_exp(/\r\n|\r|\n/);
test_math_exp(true);
test_math_exp(/(\w+)\s(\w+)/);
test_math_exp(undefined);
test_math_exp(Infinity);
test_math_exp(false);
test_math_exp(-293);
test_math_exp("VIWAXR");
test_math_exp("0SIJV8");
test_math_exp("PJP3LV");
test_math_exp(1.5357838082387446e+307);
test_math_exp(-197);
test_math_exp("RL9ZAXLEQL");
test_math_exp(-769);
test_math_exp(-239);
test_math_exp(null);
test_math_exp("ADY0XU0");
test_math_exp("8S9");
test_math_exp(4.532223900263606e+307);
test_math_exp("CCU7Z");
test_math_exp(NaN);
test_math_exp(9.738777691142362e+306);
test_math_exp(6.530457840015881e+307);
test_math_exp(-49);
test_math_exp(/[^.]+/);
test_math_exp(1.6099361665275788e+308);
test_math_exp(1.15592636498127e+308);
test_math_exp(-973);
test_math_exp(-639);
test_math_exp("UQL");
test_math_exp(1.3861887813314462e+308);
test_math_exp("X2H7PC45H");
test_math_exp(1.6465552905164475e+308);
test_math_exp(-627);
test_math_exp(/yes.*day/);
test_math_exp(/[\u0400-\u04FF]+/g);
test_math_exp(/foo/g);
test_math_exp(1.4022528349314076e+308);
test_math_exp("ZO9EO94ML");
test_math_exp(-917);
test_math_exp(-0);
test_math_exp(/ab+c/);
test_math_exp(1.535614677673876e+307);
test_math_exp("V1WUGZ");
test_math_exp("80UMBYIB4");
test_math_exp(-941);
test_math_exp(2.691047744400294e+307);
test_math_exp(1.3129824106745474e+308);
test_math_exp(5.435379610300663e+307);
test_math_exp(9.626285083788239e+307);
test_math_exp(-829);
test_math_exp(-367);
test_math_exp(-959);
test_math_exp("AMZB");
test_math_exp(/yes[^]*day/);
test_math_exp(-895);
test_math_exp(-865);
test_math_exp(5.784526568841908e+307);
test_math_exp(-95);
test_math_exp("NIIW");
test_math_exp("4DEQYH");
test_math_exp(-417);
test_math_exp(-379);
test_math_exp(-87);
test_math_exp("8XAJVMGJ3M");
test_math_exp(1.1615291346500837e+307);
test_math_exp("M4CMB0O");
test_math_exp(3.131934709001332e+307);
test_math_exp(+0);
test_math_exp(1.178265753970164e+307);
test_math_exp("WB8IQIYQ");
test_math_exp(-531);
test_math_exp("5XCFR8XN7");
test_math_exp(1.7524946948483638e+308);
test_math_exp(1.128246204363726e+308);
test_math_exp(1.1385609651328526e+308);
test_math_exp(-763);
test_math_exp("XW8JCP");
test_math_exp(-961);
test_math_exp("KMTICPD");
test_math_exp("6F45Y5D3A");
test_math_exp(-397);
test_math_exp(-615);
test_math_exp("JQLIL5");
test_math_exp(-733);
test_math_exp("92Y");
test_math_exp("YO1S");
test_math_exp(-947);
test_math_exp("MZA3");
test_math_exp(1.0079901855866218e+308);
test_math_exp(3.1120906461523196e+306);
test_math_exp("WT0MVHGA");
test_math_exp("YGRYE");
test_math_exp(5.575443014820595e+307);
test_math_exp("XRISC8QOB");
test_math_exp("45BN");
test_math_exp("R8R");
test_math_exp(-345);
test_math_exp("VVLK5L2");
test_math_exp(-751);
test_math_exp(1.6694024729462559e+308);
test_math_exp(-921);
test_math_exp("38BC8B2JW");
test_math_exp(-135);
test_math_exp(-267);
test_math_exp(4.359770776297875e+306);
test_math_exp(-183);
test_math_exp(-457);
test_math_exp("0REQ");
test_math_exp(-217);
test_math_exp(1.0687132794362932e+308);
test_math_exp("Z9QJ74YIK6");
test_math_exp(1.6118489484974897e+308);
test_math_exp("KOJW0");
test_math_exp(1.3250043768615925e+308);
test_math_exp("KIGXW");
test_math_exp(3.502433999980547e+307);
test_math_exp(-787);
test_math_exp("VUDK");
test_math_exp(2.4149965698455043e+307);
test_math_exp("GVEZYE1F");
test_math_exp(1.5869254183187778e+308);
test_math_exp(-487);
test_math_exp("4ZDRER");
test_math_exp(1.7632597978119392e+308);
test_math_exp(-855);
test_math_exp("R7FVE7");
test_math_exp("1TD");
test_math_exp(1.980257918871422e+307);
test_math_exp(1.6785236701199503e+308);
test_math_exp(-105);
test_math_exp(1.6006542007557302e+308);
test_math_exp(-831);
test_math_exp(1.6628257218140308e+308);
test_math_exp("F314065");
test_math_exp(1.4288469759415236e+307);
test_math_exp("8493");
test_math_exp(1.3111451946077068e+308);
test_math_exp(-725);
test_math_exp(1.1941517529574144e+308);
test_math_exp(-559);
test_math_exp(-979);
test_math_exp(496);
test_math_exp("E6DPPGD7FO");
test_math_exp(1.7588054672628572e+308);
test_math_exp(-129);
test_math_exp("MFYF");
test_math_exp("2J4");
test_math_exp(-405);
test_math_exp("CSJ94EAPMV");
test_math_exp(9.181413453866351e+307);
test_math_exp(9.347285752142209e+307);
test_math_exp(8.305920839169882e+307);
test_math_exp("O64Z6");
test_math_exp(-25);
test_math_exp("PP7947NDOO");
test_math_exp(-665);
test_math_exp(3.5801478097669774e+307);
test_math_exp(1.6162019319002033e+308);
test_math_exp(4.636131999745913e+307);
test_math_exp("IK8R8");
test_math_exp("1MOM6");
test_math_exp("V1GF09QA");
test_math_exp(7.560281939849553e+307);
test_math_exp("1Y6TC");
test_math_exp(-561);
test_math_exp("Q55Y66HK");
test_math_exp(-597);
test_math_exp("PEVOY0APO");
test_math_exp(7.235419409129437e+307);
test_math_exp("8D5BF");
test_math_exp(-447);
test_math_exp(-727);
test_math_exp("6ZF4F0");
test_math_exp("UYS4I7C");
test_math_exp(1.1029234755673465e+308);
test_math_exp(-821);
test_math_exp(-901);
test_math_exp(4.0041534688048875e+307);
test_math_exp(-765);
test_math_exp("4X5EXL081");
test_math_exp("K982HEMU5");
test_math_exp("49UWCS81I");
test_math_exp(6.433628212478971e+307);
test_math_exp(-161);
test_math_exp(-279);
test_math_exp("M1ECYNDD");
test_math_exp("75QDPLDU6");
test_math_exp(1.020566595606015e+308);
test_math_exp("FSI0R");
test_math_exp("GE8B");
test_math_exp(1.269595101483394e+308);
test_math_exp(1.4828776275502148e+308);
test_math_exp(-497);
test_math_exp("VE5VCVHB1");
test_math_exp(-623);
test_math_exp("CW7MV8PEY");
test_math_exp("4SYCGL3D");
test_math_exp(7.200355883432142e+307);
test_math_exp(2.540615899494968e+307);
test_math_exp(-939);
test_math_exp("YBJ0");
test_math_exp(748);
test_math_exp("W2O");
test_math_exp(6.880572843514951e+307);
test_math_exp("22K");
test_math_exp("QDBCBV735K");
test_math_exp("6LTA6SO");
test_math_exp(3.8025856629047847e+307);
test_math_exp(1.4549378650490522e+308);
test_math_exp(2.3407583316784843e+307);
test_math_exp(-971);
test_math_exp("G9QQ");
test_math_exp(1.6745536695432121e+308);
test_math_exp(1.2252383109934188e+308);
test_math_exp(4.423225466814875e+307);
test_math_exp(1.5654905823180045e+308);
test_math_exp(-853);
test_math_exp(-795);
test_math_exp("92466ZS3J");
test_math_exp(1.7032725466882118e+308);
test_math_exp("NA2ZR");
test_math_exp("SDFMMIXR3");
test_math_exp(4.925888099676037e+306);
test_math_exp("9T8OBZWVT");
test_math_exp(2.4405483949720434e+307);
test_math_exp(5.142724636268738e+307);
test_math_exp(1.6501528730668353e+308);
test_math_exp(1.3547590690497477e+307);
test_math_exp("OZO");
test_math_exp("IDIVX");
test_math_exp("GH6AB");
test_math_exp("C43LFR0");
test_math_exp("V3SDQTM54");
test_math_exp("4UIF14");
test_math_exp(-631);
test_math_exp(1.7140599040852778e+308);
test_math_exp("ZVPFJO");
test_math_exp("DOHOOV55YE");
test_math_exp(1.7589732146135477e+308);
test_math_exp(-61);
test_math_exp("W3HW2EM");
test_math_exp(4.014399609190263e+307);
test_math_exp(-677);
test_math_exp("Q3JQ");
test_math_exp(-931);
test_math_exp(2.2626465799143305e+307);
test_math_exp("KYVN");
test_math_exp(-13);
test_math_exp("9KBOWK12");
test_math_exp(1.0225743504162456e+308);
test_math_exp(-245);
test_math_exp(-73);
test_math_exp(9.932128743444696e+307);
test_math_exp("SULI");
test_math_exp(-123);
test_math_exp(-335);
test_math_exp(9.659127169746465e+307);
test_math_exp(1.327567298450937e+308);
test_math_exp(1.4625737669089734e+308);
test_math_exp("BSQ2K5YBT");
test_math_exp(-951);
test_math_exp(1.1097636574123136e+308);
test_math_exp("HR9NM2LO");
test_math_exp(-371);
test_math_exp(1.408308241787624e+308);
test_math_exp("ZDVYRGLD2");
test_math_exp(-839);
test_math_exp("AY5EP3HH7");
test_math_exp(6.85497410871449e+307);
test_math_exp(9.946905296877253e+307);
test_math_exp("93AR98");
test_math_exp("LQX");
test_math_exp("42ZCK");
test_math_exp(4.57335631234773e+307);
test_math_exp("8JRERUL");
test_math_exp(-409);
test_math_exp("4N7Z8A");
test_math_exp("JI5Y7G095K");
test_math_exp("C4YLJS1");
test_math_exp(-713);
test_math_exp("0KAMV");
test_math_exp(-781);
test_math_exp("4M4XPES");
test_math_exp(1.2239578024308451e+308);
test_math_exp(1.6459163514141219e+308);
test_math_exp(-679);
test_math_exp(4.852663899689138e+307);
test_math_exp(5.21511126046672e+307);
test_math_exp(-119);
test_math_exp(-783);
test_math_exp(6.742895580549185e+307);
test_math_exp("SBIAOX");
test_math_exp("SUHDA");
test_math_exp(8.925993146291023e+307);
test_math_exp("P9SEUTLU");
test_math_exp("1HE148");
test_math_exp(-321);
test_math_exp(-131);
test_math_exp(8.059353796997437e+307);
test_math_exp(2.4310312451801554e+307);
test_math_exp("TKTP2VR4A");
test_math_exp("GQMNE5");
test_math_exp(-835);
test_math_exp(-357);
test_math_exp("RSDLNK");
test_math_exp(454);
test_math_exp(1.3350689881874967e+308);
test_math_exp(-883);
test_math_exp("GR73J61M");
test_math_exp(1.4034242416428748e+308);
test_math_exp(1.6982516993496935e+308);
test_math_exp("WAFQI");
test_math_exp(-673);
test_math_exp(1.1474630982868066e+308);
test_math_exp("TVMJ02RS");
test_math_exp("SB3DYBNK");
test_math_exp("YREUILYSOZ");
test_math_exp(1.549668961571377e+308);
test_math_exp(-697);
test_math_exp("WRF1VXI");
test_math_exp(4.82594851202972e+307);
test_math_exp("BJ0AXY");
test_math_exp(-613);
test_math_exp("W4O2E");
test_math_exp(-977);
test_math_exp(1.2352273479551447e+308);
test_math_exp(-383);
test_math_exp(-275);
test_math_exp("3STK5");
test_math_exp("LXWEC");
test_math_exp(-63);
test_math_exp(-333);
test_math_exp(1.2834638591213304e+308);
test_math_exp("2P552OEK9U");
test_math_exp("YY9BNZ5");
test_math_exp("A0BH84C5");
test_math_exp(-701);
test_math_exp("ECD");
test_math_exp(1.2784702774311163e+308);
test_math_exp(2.677897394474773e+307);
test_math_exp("BAQ");
test_math_exp("K5VQ");
test_math_exp("2IT");
test_math_exp(1.6731008001830763e+308);
test_math_exp(9.435943048168371e+307);
test_math_exp(-5);
test_math_exp(-681);
test_math_exp("T0B6Z");
test_math_exp(3.8015402987063226e+307);
test_math_exp("IUH4QX");
test_math_exp(-273);
test_math_exp("M8BPBNKG");
test_math_exp(-165);
test_math_exp(-747);
test_math_exp(984);
test_math_exp(1.1085496130909573e+308);
test_math_exp(-303);
test_math_exp("9AKFP2I");
test_math_exp("VVVG8");
test_math_exp(-913);
test_math_exp("5EYX");
test_math_exp(1.2226127452951277e+308);
test_math_exp(4.624483411844725e+307);
test_math_exp("89N8DPU");
test_math_exp(1.655800641189217e+308);
test_math_exp(-987);
test_math_exp(1.2883896206190524e+308);
test_math_exp(4.752272701504968e+307);
test_math_exp(-325);
test_math_exp("8PBMG6FJ");
test_math_exp(9.632452390538854e+307);
test_math_exp(-11);
test_math_exp("7GJ2S00");
test_math_exp(-167);
test_math_exp(-439);
test_math_exp(-225);
test_math_exp(6.915484124465375e+307);
test_math_exp(4.8004146564023e+307);
test_math_exp(-227);
test_math_exp("9A000U");
test_math_exp(-81);
test_math_exp(-499);
test_math_exp("5KVV48QF");
test_math_exp("TIYQD8");
test_math_exp(-453);
test_math_exp(1.393585878733471e+308);
test_math_exp("G6WLPQ02U3");
test_math_exp(7.783843364489963e+307);
test_math_exp("K8JAD6GX");
test_math_exp(9.647881413582807e+307);
test_math_exp(5.388253639329583e+307);
test_math_exp(8.503205772070806e+307);
test_math_exp(-465);
test_math_exp(-139);
test_math_exp("QJHTAYL");
test_math_exp("K0UP5");
test_math_exp(-71);
test_math_exp(1.0065012712079721e+307);
test_math_exp(-929);
test_math_exp(1.7589200295241611e+308);
test_math_exp("XR3AB8U3X");
test_math_exp("V70K");
test_math_exp(-213);
test_math_exp("4Y03F8JLC");
test_math_exp("0XGNEA9B");
test_math_exp("CGLPNU");
test_math_exp("Y3OI2H");
test_math_exp(-265);
test_math_exp(1.4962066259972247e+308);
test_math_exp(-955);
test_math_exp(-297);
test_math_exp("ROE8WQ718");
test_math_exp(-823);
test_math_exp(-231);
test_math_exp(-755);
test_math_exp("YHADS8AV");
test_math_exp(-331);
test_math_exp(2.762676860166707e+307);
test_math_exp("KX5");
test_math_exp(5.265761024935048e+307);
test_math_exp(-313);
test_math_exp(1.5289806265373683e+308);
test_math_exp("FDYC");
test_math_exp("UE80V8P");
test_math_exp("EL5DLXQ46");
test_math_exp("V7RCKHCVEY");
test_math_exp(-791);
test_math_exp(1.248392651467534e+308);
test_math_exp("RLZ");
test_math_exp(1.682612480798072e+308);
test_math_exp("WG00IR");
test_math_exp("NVKG8");
test_math_exp(1.673562616930655e+308);
test_math_exp(-915);
test_math_exp(1.7587207227406892e+308);
test_math_exp("SPJORI");
test_math_exp("GVBLW5Y");
test_math_exp(162);
test_math_exp(-543);
test_math_exp("RNXHRFCGH");
test_math_exp("ZVMHK");
test_math_exp("ME7BO5Q2");
test_math_exp(1.1574670293904446e+308);
test_math_exp(9.933615400866069e+307);
test_math_exp(-169);
test_math_exp(5.788141384037386e+307);
test_math_exp("OESKD");
test_math_exp(-981);
test_math_exp(1.5989101876403494e+308);
test_math_exp(8.264317211375841e+307);
test_math_exp("D242MFPKWS");
test_math_exp(3.580334995589385e+307);
test_math_exp("B2DH");
test_math_exp(1.7643303476148891e+308);
test_math_exp("DIEZM");
test_math_exp(-715);
test_math_exp("F3R45");
test_math_exp(5.003039829323554e+307);
test_math_exp("F9T0O5");
test_math_exp(2.751828386952978e+307);
test_math_exp(-301);
test_math_exp("EACZPURQ7X");
test_math_exp(-463);
test_math_exp("3CKQMTK");
test_math_exp(7.127751913644571e+307);
test_math_exp(3.22231005885626e+307);
test_math_exp("8RSUF64");
test_math_exp(-885);
test_math_exp(-851);
test_math_exp(-545);
test_math_exp("L10");
test_math_exp(-251);
test_math_exp("X02OC2G5");
test_math_exp(1.1818188914547176e+308);
test_math_exp(-317);
test_math_exp(1.1591354796391943e+308);
test_math_exp(-793);
test_math_exp(2.6754109140765405e+307);
test_math_exp(6.086394755998223e+307);
test_math_exp(-455);
test_math_exp(5.62497060323442e+307);
test_math_exp(6.396979248847746e+307);
test_math_exp(-969);
test_math_exp(1.1112648316563505e+308);
test_math_exp("L0UA");
test_math_exp("Z7KRTW1");
test_math_exp(1.6727881757783884e+308);
test_math_exp(9.966853046072334e+307);
test_math_exp("8K6");
test_math_exp(-489);
test_math_exp("7KPFQOHP");
test_math_exp(-305);
test_math_exp(1.5540307071021313e+308);
test_math_exp("QY9LQD");
test_math_exp(1.6103069414541961e+308);
test_math_exp("PO8LHGLBG");
test_math_exp("OXQT");
test_math_exp("TJ7");
test_math_exp(-881);
test_math_exp("KB0DC");
test_math_exp(7.232087738656813e+307);
test_math_exp("FWXGTNHR");
test_math_exp(7.565504561475154e+307);
test_math_exp(-873);
test_math_exp("DC1J");
test_math_exp(5.370481851223869e+307);
test_math_exp(-983);
test_math_exp(9.252653763477295e+307);
test_math_exp(4.3152328391853843e+307);
test_math_exp("2HZT");
test_math_exp(8.87189684193105e+307);
test_math_exp("SUXW8ZED");
test_math_exp(-671);
test_math_exp("TD1FTY32");
test_math_exp(4.847809478712772e+307);
test_math_exp(1.2893438979258005e+308);
test_math_exp("FOYT");
test_math_exp("7CFMM");
test_math_exp("AIW");
test_math_exp(-799);
test_math_exp(5.277905531718517e+307);
test_math_exp(1.4968998634999767e+307);
test_math_exp(-549);
test_math_exp(1.247680116465464e+308);
test_math_exp("WLX1");
test_math_exp("J8YQJOX4ZR");
test_math_exp(-151);
test_math_exp("LKKZC814");
test_math_exp("5S1RQ");
test_math_exp("KJHVHSSE");
test_math_exp("2AMEGY24A6");
test_math_exp(1.7224851175374926e+308);
test_math_exp("Y8TBVA4A");
test_math_exp(-149);
test_math_exp(-323);
test_math_exp(8.342569974802304e+307);
test_math_exp(-611);
test_math_exp("WNFCLLP8");
test_math_exp(-85);
test_math_exp("F3BMR");
test_math_exp(9.73907666527809e+307);
test_math_exp(-117);
test_math_exp(1.6545562792187605e+308);
test_math_exp("VYPQ089CAZ");
test_math_exp("Z0IJ4OLK");
test_math_exp(3.3540877778546546e+307);
test_math_exp(-437);
test_math_exp("NG1KC82TME");
test_math_exp(9.522950387655051e+307);
test_math_exp("HN1J2EW");
test_math_exp("UO8PIG");
test_math_exp(4.691039037318149e+307);
test_math_exp("E2IP");
test_math_exp("KA26");
test_math_exp("3YVO");
test_math_exp("8SEQ");
test_math_exp(-967);
test_math_exp(-491);
test_math_exp("LA656N5");
test_math_exp("A0PQY8");
test_math_exp(5.711821805966842e+307);
test_math_exp("RP6MOC88");
test_math_exp("F9JWE6NN4S");
test_math_exp(-889);
test_math_exp(-337);
test_math_exp(1.6977978281846952e+308);
test_math_exp("WE3NRS1");
test_math_exp(1.5109473808461328e+308);
test_math_exp(1.7319221626080489e+308);
test_math_exp(1.005013233096088e+308);
test_math_exp(-171);
test_math_exp(4.977886865324195e+306);
test_math_exp(6.32524859010323e+307);
test_math_exp(8.953056188820584e+307);
test_math_exp(8.063158212270702e+307);
test_math_exp(3.795573795098806e+307);
test_math_exp(6.719003846614294e+307);
test_math_exp("1G40");
test_math_exp(3.694461317628478e+307);
test_math_exp(-353);
test_math_exp("9CM4ORMBAD");
test_math_exp(1.5395157214362924e+308);
test_math_exp(-599);
test_math_exp(-595);
test_math_exp(-395);
test_math_exp(-943);
test_math_exp(1.7379475766967363e+308);
test_math_exp("AJE");
test_math_exp("HMHETRZ");
test_math_exp(-817);
test_math_exp("X1C");
test_math_exp(-745);
test_math_exp(4.391364051749447e+307);
test_math_exp(5.250119274392885e+307);
test_math_exp("SJ3");
test_math_exp(7.283477753712727e+307);
test_math_exp(2.63408183615811e+307);
test_math_exp(-757);
test_math_exp("EPUP");
test_math_exp(4.382534285117306e+307);
test_math_exp(4.413013026972212e+307);
test_math_exp(1.515052244508751e+308);
test_math_exp("AMDR0HQXXP");
test_math_exp(1.3483891738243735e+308);
test_math_exp("X859DA");
test_math_exp("IFNEJMO7");
test_math_exp(1.1445028138575553e+308);
test_math_exp("H71C5");
test_math_exp(4.326139398315817e+307);
test_math_exp(7.034017320345225e+307);
test_math_exp(2.646171430719972e+307);
test_math_exp(1.2014389192249923e+308);
test_math_exp(8.295114789263541e+307);
test_math_exp(1.66216390315236e+308);
test_math_exp(1.0155098148810762e+308);
test_math_exp("YUYAA0KJQ");
test_math_exp("FC7E7");
test_math_exp("B9LBT");
test_math_exp("MUEN3");
test_math_exp(3.718476531820076e+307);
test_math_exp(1.557764991075695e+308);
test_math_exp(1.6505584869986315e+308);
test_math_exp("07X");
test_math_exp(1.5130088104046447e+308);
test_math_exp("DZ73");
test_math_exp(1.4159914715042765e+308);
test_math_exp(-121);
test_math_exp(-65);
test_math_exp(1.4884028532208137e+308);
test_math_exp(8.983253773050265e+307);
test_math_exp(1.2398705511472458e+308);
test_math_exp(1.343008161646092e+308);
test_math_exp(-723);
test_math_exp("KEB1G");
test_math_exp("U0N6S2");
test_math_exp(1.2647720714641296e+308);
test_math_exp("FXZXED");
test_math_exp(8.6255233068359e+307);
test_math_exp(1.7878429331392275e+308);
test_math_exp("CXBWPZA");
test_math_exp("KM6G5L");
test_math_exp("22L15");
test_math_exp(4.4264199315281705e+307);
test_math_exp("MGYERT6CDC");
test_math_exp(1.2133909348261884e+308);
test_math_exp(7.716654693117697e+306);
test_math_exp("ZGM");
test_math_exp(1.8769367108813065e+307);
test_math_exp("LIR3BUED27");
test_math_exp("NHOTQT2VIQ");
test_math_exp("QBOD1");
test_math_exp(-413);
test_math_exp(1.5552855903729227e+308);
test_math_exp("365CBKL9");
test_math_exp(1.160322062925337e+308);
test_math_exp(1.5072190749537585e+308);
test_math_exp(-179);
test_math_exp(7.446860510269963e+307);
test_math_exp("7LF");
test_math_exp(-289);
test_math_exp(-685);
test_math_exp("GXEMZFUR");
test_math_exp(3.600368672518206e+307);
test_math_exp(8.533081798026396e+307);
test_math_exp(-157);
test_math_exp(8.659024404641551e+307);
test_math_exp(1.6931253970110896e+308);
test_math_exp(-111);
test_math_exp("0OWH57SF");
test_math_exp("BE9BGAFX");
test_math_exp(1.4930647226428498e+308);
test_math_exp("C5IONWY");
test_math_exp(-605);
test_math_exp(4.4451741551926054e+307);
test_math_exp(1.6269873103593577e+307);
test_math_exp(-291);
test_math_exp("JBYA9IQ");
test_math_exp("M54Y");
test_math_exp(1.2884583094024381e+308);
test_math_exp(9.938500809245617e+306);
test_math_exp(8.97638264497102e+307);
test_math_exp(-541);
test_math_exp("BEQLZZR");
test_math_exp(-721);
test_math_exp("4LB6H7W");
test_math_exp("G2D5LY");
test_math_exp("0H3EAABS");
test_math_exp("L2518W39");
test_math_exp("8KUGA5R9");
test_math_exp("I87RRSX4B");
test_math_exp("2DFXN6L");
test_math_exp("14K5");
test_math_exp("2OQLZB0HA4");
test_math_exp(4.665491747369649e+307);
test_math_exp(7.08323236256491e+307);
test_math_exp("M2UJY8");
test_math_exp("U55ZXWXF6");
test_math_exp(1.5108709474347403e+308);
test_math_exp(5.926645025173749e+307);
test_math_exp("5O36");
test_math_exp(-877);
test_math_exp("07KFJH7L1");
test_math_exp(1.036449584454645e+308);
test_math_exp(1.5477177338839018e+308);
test_math_exp(6.879036510096943e+307);
test_math_exp("EALSX8ZW");
test_math_exp("9E50FWJ4");
test_math_exp(1.5449298724334226e+308);
test_math_exp(-779);
test_math_exp(1.3995803226362417e+308);
test_math_exp("TFIJMB");
test_math_exp("Z4YMK1RHU");
test_math_exp(8.097910981669728e+307);
test_math_exp(3.786668692004162e+307);
test_math_exp("F82A1");
test_math_exp(8.975752385248731e+307);
test_math_exp(1.7037340257476794e+308);
test_math_exp("D87UYD");
test_math_exp(5.273768661782481e+307);
test_math_exp(4.981528747507947e+307);
test_math_exp("2U9ANSQZY");
test_math_exp(1.2683018148462574e+308);
test_math_exp(6.331049572644611e+307);
test_math_exp("UQTJ2");
test_math_exp(-113);
test_math_exp(-69);
test_math_exp(1.70298514485043e+308);
test_math_exp("ZLXP64DY4");
test_math_exp(5.709377822690565e+307);
test_math_exp("JJ9CUZ");
test_math_exp("9HULMGX");
test_math_exp("4570");
test_math_exp(-471);
test_math_exp(5.75302622267992e+307);
test_math_exp("OAI");
test_math_exp(-319);
test_math_exp(9.425545885652316e+307);
test_math_exp(-567);
test_math_exp("VAT0DMRUL");
test_math_exp(-573);
test_math_exp(-641);
test_math_exp(3.17707701519149e+307);
test_math_exp("3CGL");
test_math_exp("FBU4LGKPF");
test_math_exp("7GHG32839Q");
test_math_exp(1.6290590431367963e+307);
test_math_exp("7ORZ6GAXX");
test_math_exp(1.7737030349977291e+308);
test_math_exp("HFES5");
test_math_exp("FYDIVSCM");
test_math_exp(8.334426993355693e+307);
test_math_exp("LPL7");
test_math_exp(1.7741691573253452e+308);
test_math_exp("YAFJ0P");
test_math_exp(-841);
test_math_exp("AHUR5I");
test_math_exp(1.745187127073989e+308);
test_math_exp("0AWFSU");
test_math_exp(1.6647649208904923e+308);
test_math_exp("C15G4SA");
test_math_exp(-451);
test_math_exp("U8OXH9");
test_math_exp(-45);
test_math_exp(1.29304418369694e+308);
test_math_exp(1.0526008969760585e+308);
test_math_exp(874);
test_math_exp(1.2649952997748557e+307);
test_math_exp(-683);
test_math_exp("GDLZ");
test_math_exp("7J51GUVOA4");
test_math_exp(-729);
test_math_exp(-991);
test_math_exp("E74HX0");
test_math_exp("5GK");
test_math_exp(-145);
test_math_exp(1.1153821997840874e+308);
test_math_exp(7.903593848951816e+307);
test_math_exp(1.7182615359127418e+308);
test_math_exp(1.2587445634645562e+308);
test_math_exp(1.432984403597301e+308);
test_math_exp("6X8W");
test_math_exp(-327);
test_math_exp(-925);
test_math_exp(-277);
test_math_exp(1.4529367387843442e+308);
test_math_exp(1.2508427484024808e+308);
test_math_exp(-241);
test_math_exp(-147);
test_math_exp(1.1239769501336127e+308);
test_math_exp("HJH6J");
test_math_exp(3.5005116154224856e+307);
test_math_exp(6.302278403272213e+307);
test_math_exp("GQSVH3J4W");
test_math_exp(-879);
test_math_exp(2.6110016404873486e+307);
test_math_exp("XM9X");
test_math_exp("4C745AJY");
test_math_exp(2.1059314551267596e+307);
test_math_exp("B6ACI");
test_math_exp(3.956794550313731e+307);
test_math_exp("IHBZQN");
test_math_exp("14IQE");
test_math_exp(-629);
test_math_exp(1.9516592637978017e+307);
test_math_exp("4RJZZC8OKA");
test_math_exp(6.54033115042694e+306);
test_math_exp(1.398886697847854e+308);
test_math_exp("NZA7");
test_math_exp("3LTE");
test_math_exp(7.575406503247379e+307);
test_math_exp("0UZCAACNJ1");
test_math_exp(1.7893235115876313e+308);
test_math_exp(9.894714982792372e+307);
test_math_exp("8Y8C4UZBUD");
test_math_exp(-575);
test_math_exp(8.335156982929071e+307);
test_math_exp(1.7357190637418105e+308);
test_math_exp("2CWQ");
test_math_exp(1.018239589068147e+308);
test_math_exp(7.496977431260197e+307);
test_math_exp(-819);
test_math_exp(-669);
test_math_exp(1.5870774695495725e+308);
test_math_exp(1.4359618943595546e+308);
test_math_exp(1.6656308997496786e+308);
test_math_exp("R156P3W5");
test_math_exp(1.3388121960013073e+307);
test_math_exp("T3UX1");
test_math_exp("V3SXLO7I");
test_math_exp("V3L68Q70NS");
test_math_exp("WNV");
test_math_exp("65VWX7M");
test_math_exp(1.113815376250597e+308);
test_math_exp(-75);
test_math_exp("UU78");
test_math_exp(2.4639717711995026e+307);
test_math_exp(8.886701603648697e+307);
test_math_exp(-619);
test_math_exp("CXF9GHE");
test_math_exp(5.797044595997948e+307);
test_math_exp(7.600264356607902e+307);
test_math_exp(-59);
test_math_exp(1.4979331335937177e+308);
test_math_exp("WO8P9NM");
test_math_exp(5.756954169516895e+307);
test_math_exp("BYM2KY");
test_math_exp("BG7V");
test_math_exp(6.825843707025028e+307);
test_math_exp(-647);
test_math_exp("GMH9W");
test_math_exp(1.1169086822563066e+308);
test_math_exp(1.1023131309057407e+308);
test_math_exp("5P1T1");
test_math_exp(1.3676463314670372e+308);
test_math_exp(1.0892973336275326e+308);
test_math_exp(7.360668661311638e+307);
test_math_exp(-369);
test_math_exp(5.852105972900884e+307);
test_math_exp("41NRH8DAHI");
test_math_exp(-585);
test_math_exp("3Y8S340Q39");
test_math_exp("AB2JFN88OU");
test_math_exp("LRBRAKKAPF");
test_math_exp(7.95561396195076e+307);
test_math_exp(2.5077715212083207e+307);
test_math_exp(-93);
test_math_exp(-661);
test_math_exp(-349);
test_math_exp(-83);
test_math_exp("15ID");
test_math_exp("ZZ91G4C");
test_math_exp(2.4777763807936926e+307);
test_math_exp(1.7716542100889106e+308);
test_math_exp(-435);
test_math_exp(1.3329936498436421e+308);
test_math_exp(-307);
test_math_exp(6.562282874138478e+307);
test_math_exp(3.210705048636875e+307);
test_math_exp(-923);
test_math_exp("3EUQPF0E");
test_math_exp(-257);
test_math_exp("QSRSS2");
test_math_exp(-127);
test_math_exp(7.740423007719218e+307);
test_math_exp(1.717757134311087e+308);
test_math_exp(-603);
test_math_exp(1.0752537827644364e+308);
test_math_exp("KBNR");
test_math_exp(-565);
test_math_exp(-659);
test_math_exp(-767);
test_math_exp("ZJT86EWYE");
test_math_exp(-809);
test_math_exp("4VXK");
test_math_exp(9.836534212528508e+307);
test_math_exp(7.605975260650844e+307);
test_math_exp("R1CSESGT1");
test_math_exp("58EXJPV6BD");
test_math_exp(1.2765032810396487e+308);
test_math_exp(5.604820734378628e+307);
test_math_exp(1.7493546652209521e+308);
test_math_exp("3GT");
test_math_exp("QCI9IG");
test_math_exp(-415);
test_math_exp(1.4792822980004959e+308);
test_math_exp(-655);
test_math_exp(-583);
test_math_exp(3.3897781553488247e+307);
test_math_exp(-903);
test_math_exp("6CEX2GZ");
test_math_exp("O7SQC235D");
test_math_exp(1.1148617678745246e+308);
test_math_exp(1.2194425049336699e+308);
test_math_exp(-237);
test_math_exp(-283);
test_math_exp(5.370846480558229e+307);
test_math_exp(1.7635137192187624e+308);
test_math_exp(4.925992104526547e+307);
test_math_exp(1.1339285433363618e+308);
test_math_exp("QFL4P");
test_math_exp("RXAVG7FABO");
test_math_exp("GHCRMPTWTT");
test_math_exp("ZM57N4");
test_math_exp(-651);
test_math_exp(-503);
test_math_exp("NK734B3G");
test_math_exp("GWV");
test_math_exp("SV6");
test_math_exp(1.4755450779789943e+308);
test_math_exp("9TWHVNJ");
test_math_exp(1.3901945883080254e+308);
test_math_exp(1.1797762010758578e+308);
test_math_exp(9.033339771541565e+307);
test_math_exp("NVL");
test_math_exp(1.7299977874295698e+308);
test_math_exp(1.7406868541413445e+308);
test_math_exp(-311);
test_math_exp(1.156605690964332e+308);
test_math_exp(1.4254968149015194e+308);
test_math_exp("4HGD");
test_math_exp(1.5721892524530913e+308);
test_math_exp("XBJMUVD6");
test_math_exp("1C8");
test_math_exp("5W2OSVGZ");
test_math_exp(4.1210756922580404e+307);
test_math_exp(1.6200324210006023e+308);
test_math_exp(1.2653208508705663e+308);
test_math_exp(1.5481327958572008e+308);
test_math_exp(-449);
test_math_exp(-419);
test_math_exp("571JZOG36");
test_math_exp(-235);
test_math_exp(5.011539159489542e+307);
test_math_exp(-475);
test_math_exp(-77);
test_math_exp(-985);
test_math_exp("SKAAX0JQ7M");
test_math_exp(-909);
test_math_exp(9.674024588680744e+307);
test_math_exp(1.6354141268128599e+308);
test_math_exp("G7TD072JP");
test_math_exp(-15);
test_math_exp(-837);
test_math_exp(7.218054744507117e+307);
test_math_exp("1WY");
test_math_exp("Y4LTOAX");
test_math_exp("OTDEGV1N");
test_math_exp(1.3179981971858903e+308);
test_math_exp(6.300293820894025e+307);
test_math_exp(-897);
test_math_exp("HSU4CL");
test_math_exp(6.662595751282674e+307);
test_math_exp("O4SN93");
test_math_exp(-373);
test_math_exp(-519);
test_math_exp(-689);
test_math_exp(1.3544261114836547e+308);
test_math_exp("XM9S6K");
test_math_exp("UFH");
test_math_exp(7.58156715175614e+307);
test_math_exp("I9FURIE");
test_math_exp("X6032JTUX");
test_math_exp(4.615923094411418e+307);
test_math_exp(1.502019800045684e+307);
test_math_exp(1.4590987241161632e+307);
test_math_exp(1.7637538953384374e+308);
test_math_exp(1.1881293388837885e+307);
test_math_exp(-51);
test_math_exp("ZTNII2FGN");
test_math_exp(8.936665311696001e+307);
test_math_exp(1.329859539831421e+308);
test_math_exp("P6VDOS6Y");
test_math_exp("G4TIUNQ1");
test_math_exp(1.6587162935435803e+308);
test_math_exp(-467);
test_math_exp("LZI7");
test_math_exp(7.570129781999457e+307);