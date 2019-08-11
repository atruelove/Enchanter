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


/*TEST TEMPLATES GENERATED AUTOMATICALLY*/



function test_array( len ){
	var numberOfArgs = arguments.length;
	if  ( typeof ( len ) !=  "number"  ) {
		var intLen = 1;
	}

	else {
		var intLen = ToUint32(len);
		if (( intLen!= len )){
			 try{
				var output = new Array ( len );
				 return;
			}catch(e){
				new TestCase("array", "array", true, eval(e instanceof RangeError));
				test();
				return;
			}
		}
	}

}


function test_array_from(items,mapfn,thisArg){
	var C =null;
	if ( typeof  mapfn === 'undefined' ) {
		var mapping = false;
	}

	else {
		if (( IsCallable ( mapfn ) === false )){
			 try{
				var output = Array.from(items,mapfn,thisArg);
				 return;
			}catch(e){
				new TestCase("array_from", "array_from", true, eval(e instanceof TypeError));
				test();
				return;
			}
		}
		if  ( thisArg === present ) {
			var T = thisArg;
		}
					
		else {
			var T = undefined;
		}
							
		var mapping = true;
	}

}


function test_array_prototype_includes(randominput, searchElement  , fromIndex  ){
	var O = ToObject(randominput);
	var len = ToLength( Get(O, "length"));
	if (( len === 0 )){
		var output = new Array(randominput).includes( searchElement  , fromIndex  );
		new TestCase("array_prototype_includes", "array_prototype_includes", false, output);
		test();
		return;
		}
	var n = ToInteger(fromIndex);
	if  ( n >=  0 ) {
		var k = n;
	}

	if ( n < 0 ) {
		var k = len + n;
		if  ( k < 0 ) {
			var k = 0;
			}

		}

	while ( k < len ) { 
		var elementK =Get(O, ToString(k));
		if (( SameValueZero ( searchElement , elementK ) === true )){
			var output = new Array(randominput).includes( searchElement  , fromIndex  );
			new TestCase("array_prototype_includes", "array_prototype_includes", true, output);
			test();
			return;
			}
		k = k + 1
	}

}


function test_array_prototype_pop(randominput, ){
	var O = ToObject(randominput);
	var len = ToLength( Get(O, "length"));
	if  ( len === zero ) {
		var output = new Array(randominput).pop( );
			new TestCase("array_prototype_pop", "array_prototype_pop", undefined, output);
			test();
			return;
	}

}


function test_array_prototype_shift(randominput, ){
	var O = ToObject(randominput);
	var len = ToLength( Get(O, "length"));
	if  ( len === zero ) {
		var output = new Array(randominput).shift( );
			new TestCase("array_prototype_shift", "array_prototype_shift", undefined, output);
			test();
			return;
	}

}


function test_array_prototype_unshift(randominput, items ){
	var O = ToObject(randominput);
	var len = ToLength( Get(O, "length"));
	var argCount = arguments.length;
	if  ( argCount > 0 ) {
		if (( len + argCount > Math.pow ( 2 , 53 ) - 1 )){
			 try{
				var output = new Array(randominput).unshift( items );
				 return;
			}catch(e){
				new TestCase("array_prototype_unshift", "array_prototype_unshift", true, eval(e instanceof TypeError));
				test();
				return;
			}
		}
		var k = len;
		while ( k > 0 ) { 
			var from = ToString(k-1);
			var to = ToString(k+argCount-1);
			k = k - 1
		}
								
		var j = 0;
		while ( items != empty ) { 
			j = j + 1
			}

		}

}


function test_date(randominput){
	var numberOfArgs = arguments.length;
	if ( typeof  NewTarget === 'undefined' ) {
		var now = Date(Date.now());
		var output = new Date(randominput).Date();
			new TestCase("date", "date", ToDateString ( now ), output);
			test();
			return;
	}

}


function test_date(randominput,value){
	var numberOfArgs = arguments.length;
	if ( typeof  NewTarget === 'undefined' ) {
		var now = Date(Date.now());
		var output = new Date(randominput).Date(value);
			new TestCase("date", "date", ToDateString ( now ), output);
			test();
			return;
	}

}


function test_date(randominput,year,month,date,hours,minutes,seconds,ms){
	var numberOfArgs = arguments.length;
	if ( typeof  NewTarget === 'undefined' ) {
		var now = Date(Date.now());
		var output = new Date(randominput).Date(year,month,date,hours,minutes,seconds,ms);
			new TestCase("date", "date", ToDateString ( now ), output);
			test();
			return;
	}

}
