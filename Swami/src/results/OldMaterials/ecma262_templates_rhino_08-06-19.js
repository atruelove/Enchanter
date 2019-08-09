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
	new TestCase("array", "array", numberOfArgs ,  1);
		test();
		return;
	if  ( typeof ( len ) != Number ) {
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


function test_array_prototype_every(randominput, callbackfn  , thisArg  ){
	var O = ToObject(randominput);
	var len = ToLength( Get(O, "length"));
	if (( IsCallable ( callbackfn ) === false )){
		 try{
			var output = new Array(randominput).every( callbackfn  , thisArg  );
			 return;
		}catch(e){
			new TestCase("array_prototype_every", "array_prototype_every", true, eval(e instanceof TypeError));
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

	var k = 0;
	while ( k < len ) { 
		var Pk = ToString(k);
		k = k + 1
	}

}


function test_array_prototype_filter(randominput, callbackfn  , thisArg  ){
	var O = ToObject(randominput);
	var len = ToLength( Get(O, "length"));
	if (( IsCallable ( callbackfn ) === false )){
		 try{
			var output = new Array(randominput).filter( callbackfn  , thisArg  );
			 return;
		}catch(e){
			new TestCase("array_prototype_filter", "array_prototype_filter", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
}


function test_array_prototype_find(randominput, predicate  , thisArg  ){
	var O = ToObject(randominput);
	var len = ToLength( Get(O, "length"));
	if (( IsCallable ( predicate ) === false )){
		 try{
			var output = new Array(randominput).find( predicate  , thisArg  );
			 return;
		}catch(e){
			new TestCase("array_prototype_find", "array_prototype_find", true, eval(e instanceof TypeError));
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

	var k = 0;
	while ( k < len ) { 
		var Pk = ToString(k);
		var kValue = Get(O, Pk);
		k = k + 1
	}

}


function test_array_prototype_findindex(randominput, predicate  , thisArg  ){
	var O = ToObject(randominput);
	var len = ToLength( Get(O, "length"));
	if (( IsCallable ( predicate ) === false )){
		 try{
			var output = new Array(randominput).findIndex( predicate  , thisArg  );
			 return;
		}catch(e){
			new TestCase("array_prototype_findindex", "array_prototype_findindex", true, eval(e instanceof TypeError));
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

	var k = 0;
	while ( k < len ) { 
		var Pk = ToString(k);
		var kValue = Get(O, Pk);
		k = k + 1
	}

}


function test_array_prototype_foreach(randominput, callbackfn  , thisArg  ){
	var O = ToObject(randominput);
	var len = ToLength( Get(O, "length"));
	if (( IsCallable ( callbackfn ) === false )){
		 try{
			var output = new Array(randominput).forEach( callbackfn  , thisArg  );
			 return;
		}catch(e){
			new TestCase("array_prototype_foreach", "array_prototype_foreach", true, eval(e instanceof TypeError));
			test();
			return;
		}
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

}


function test_array_prototype_indexof(randominput, searchElement  , fromIndex  ){
	var O = ToObject(randominput);
	var len = ToLength( Get(O, "length"));
	if (( len === 0 )){
		var output = new Array(randominput).indexOf( searchElement  , fromIndex  );
		new TestCase("array_prototype_indexof", "array_prototype_indexof", - 1, output);
		test();
		return;
		}
	var n = ToInteger(fromIndex);
	if (( n >=  len )){
		var output = new Array(randominput).indexOf( searchElement  , fromIndex  );
		new TestCase("array_prototype_indexof", "array_prototype_indexof", - 1, output);
		test();
		return;
		}
}


function test_array_prototype_lastindexof(randominput, searchElement  , fromIndex  ){
	var O = ToObject(randominput);
	var len = ToLength( Get(O, "length"));
	if (( len === 0 )){
		var output = new Array(randominput).lastIndexOf( searchElement  , fromIndex  );
		new TestCase("array_prototype_lastindexof", "array_prototype_lastindexof", - 1, output);
		test();
		return;
		}
	if  ( fromIndex === present ) {
		var n = ToInteger(fromIndex);
	}

	else {
		var n = len-1;
	}

}


function test_array_prototype_map(randominput, callbackfn  , thisArg  ){
	var O = ToObject(randominput);
	var len = ToLength( Get(O, "length"));
	if (( IsCallable ( callbackfn ) === false )){
		 try{
			var output = new Array(randominput).map( callbackfn  , thisArg  );
			 return;
		}catch(e){
			new TestCase("array_prototype_map", "array_prototype_map", true, eval(e instanceof TypeError));
			test();
			return;
		}
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


function test_array_prototype_some(randominput, callbackfn  , thisArg  ){
	var O = ToObject(randominput);
	var len = ToLength( Get(O, "length"));
	if (( IsCallable ( callbackfn ) === false )){
		 try{
			var output = new Array(randominput).some( callbackfn  , thisArg  );
			 return;
		}catch(e){
			new TestCase("array_prototype_some", "array_prototype_some", true, eval(e instanceof TypeError));
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

	var k = 0;
	while ( k < len ) { 
		var Pk = ToString(k);
		k = k + 1
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


function test_arraybuffer(length){
	if (( typeof  NewTarget === 'undefined' )){
		 try{
			var output = ArrayBuffer.ArrayBuffer(length);
			 return;
		}catch(e){
			new TestCase("arraybuffer", "arraybuffer", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
}


function test_arraybuffer_isview(arg){
	if (( typeof ( arg ) != "object" )){
		var output = ArrayBuffer.isView(arg);
		new TestCase("arraybuffer_isview", "arraybuffer_isview", false, output);
		test();
		return;
		}
	if (( arg instanceof ArrayBuffer === true )){
		var output = ArrayBuffer.isView(arg);
		new TestCase("arraybuffer_isview", "arraybuffer_isview", true, output);
		test();
		return;
		}
}


function test_arraybuffer_prototype_slice(randominput,start,end){
	var O =randominput;
	if (( typeof ( O ) != "object" )){
		 try{
			var output = randominput.slice(start,end);
			 return;
		}catch(e){
			new TestCase("arraybuffer_prototype_slice", "arraybuffer_prototype_slice", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
	if (( O instanceof ArrayBuffer === false )){
		 try{
			var output = randominput.slice(start,end);
			 return;
		}catch(e){
			new TestCase("arraybuffer_prototype_slice", "arraybuffer_prototype_slice", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
	if (( IsSharedArrayBuffer ( O ) === true )){
		 try{
			var output = randominput.slice(start,end);
			 return;
		}catch(e){
			new TestCase("arraybuffer_prototype_slice", "arraybuffer_prototype_slice", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
	var len = O;
	var relativeStart = ToInteger(start);
	if  ( relativeStart < 0 ) {
		var first = Math.max ((len + relativeStart), 0);
	}

	else {
		var first = Math.min (relativeStart, len);
	}

	if ( typeof  end === 'undefined' ) {
		var relativeEnd = len;
	}

	else {
		var relativeEnd = ToInteger(end);
	}

	if  ( relativeEnd < 0 ) {
		var final = Math.max ((len + relativeEnd), 0);
	}

	else {
		var final = Math.min (relativeEnd, len);
	}

	var newLen = Math.max (final-first, 0);
}


function test_createmapiterator(randominput,map,kind){
	if (( typeof ( map ) != "object" )){
		 try{
			var output = randominput.CreateMapIterator(map,kind);
			 return;
		}catch(e){
			new TestCase("createmapiterator", "createmapiterator", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
	if (( map instanceof Map === false )){
		 try{
			var output = randominput.CreateMapIterator(map,kind);
			 return;
		}catch(e){
			new TestCase("createmapiterator", "createmapiterator", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
}


function test_createsetiterator(randominput,set,kind){
	if (( typeof ( set ) != "object" )){
		 try{
			var output = randominput.CreateSetIterator(set,kind);
			 return;
		}catch(e){
			new TestCase("createsetiterator", "createsetiterator", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
}


function test_date_prototype_getdate(randominput){
	var t = thisTimeValue(randominput);
	if (Object.is( t,NaN )){
		var output = new Date(randominput).getDate();
		new TestCase("date_prototype_getdate", "date_prototype_getdate", NaN, output);
		test();
		return;
		}
}


function test_date_prototype_getday(randominput){
	var t = thisTimeValue(randominput);
	if (Object.is( t,NaN )){
		var output = new Date(randominput).getDay();
		new TestCase("date_prototype_getday", "date_prototype_getday", NaN, output);
		test();
		return;
		}
}


function test_date_prototype_getfullyear(randominput){
	var t = thisTimeValue(randominput);
	if (Object.is( t,NaN )){
		var output = new Date(randominput).getFullYear();
		new TestCase("date_prototype_getfullyear", "date_prototype_getfullyear", NaN, output);
		test();
		return;
		}
}


function test_date_prototype_gethours(randominput){
	var t = thisTimeValue(randominput);
	if (Object.is( t,NaN )){
		var output = new Date(randominput).getHours();
		new TestCase("date_prototype_gethours", "date_prototype_gethours", NaN, output);
		test();
		return;
		}
}


function test_date_prototype_getmilliseconds(randominput){
	var t = thisTimeValue(randominput);
	if (Object.is( t,NaN )){
		var output = new Date(randominput).getMilliseconds();
		new TestCase("date_prototype_getmilliseconds", "date_prototype_getmilliseconds", NaN, output);
		test();
		return;
		}
}


function test_date_prototype_getminutes(randominput){
	var t = thisTimeValue(randominput);
	if (Object.is( t,NaN )){
		var output = new Date(randominput).getMinutes();
		new TestCase("date_prototype_getminutes", "date_prototype_getminutes", NaN, output);
		test();
		return;
		}
}


function test_date_prototype_getmonth(randominput){
	var t = thisTimeValue(randominput);
	if (Object.is( t,NaN )){
		var output = new Date(randominput).getMonth();
		new TestCase("date_prototype_getmonth", "date_prototype_getmonth", NaN, output);
		test();
		return;
		}
}


function test_date_prototype_getseconds(randominput){
	var t = thisTimeValue(randominput);
	if (Object.is( t,NaN )){
		var output = new Date(randominput).getSeconds();
		new TestCase("date_prototype_getseconds", "date_prototype_getseconds", NaN, output);
		test();
		return;
		}
}


function test_date_prototype_gettimezoneoffset(randominput){
	var t = thisTimeValue(randominput);
	if (Object.is( t,NaN )){
		var output = new Date(randominput).getTimezoneOffset();
		new TestCase("date_prototype_gettimezoneoffset", "date_prototype_gettimezoneoffset", NaN, output);
		test();
		return;
		}
}


function test_date_prototype_getutcdate(randominput){
	var t = thisTimeValue(randominput);
	if (Object.is( t,NaN )){
		var output = new Date(randominput).getUTCDate();
		new TestCase("date_prototype_getutcdate", "date_prototype_getutcdate", NaN, output);
		test();
		return;
		}
}


function test_date_prototype_getutcday(randominput){
	var t = thisTimeValue(randominput);
	if (Object.is( t,NaN )){
		var output = new Date(randominput).getUTCDay();
		new TestCase("date_prototype_getutcday", "date_prototype_getutcday", NaN, output);
		test();
		return;
		}
}


function test_date_prototype_getutcfullyear(randominput){
	var t = thisTimeValue(randominput);
	if (Object.is( t,NaN )){
		var output = new Date(randominput).getUTCFullYear();
		new TestCase("date_prototype_getutcfullyear", "date_prototype_getutcfullyear", NaN, output);
		test();
		return;
		}
}


function test_date_prototype_getutchours(randominput){
	var t = thisTimeValue(randominput);
	if (Object.is( t,NaN )){
		var output = new Date(randominput).getUTCHours();
		new TestCase("date_prototype_getutchours", "date_prototype_getutchours", NaN, output);
		test();
		return;
		}
}


function test_date_prototype_getutcmilliseconds(randominput){
	var t = thisTimeValue(randominput);
	if (Object.is( t,NaN )){
		var output = new Date(randominput).getUTCMilliseconds();
		new TestCase("date_prototype_getutcmilliseconds", "date_prototype_getutcmilliseconds", NaN, output);
		test();
		return;
		}
}


function test_date_prototype_getutcminutes(randominput){
	var t = thisTimeValue(randominput);
	if (Object.is( t,NaN )){
		var output = new Date(randominput).getUTCMinutes();
		new TestCase("date_prototype_getutcminutes", "date_prototype_getutcminutes", NaN, output);
		test();
		return;
		}
}


function test_date_prototype_getutcmonth(randominput){
	var t = thisTimeValue(randominput);
	if (Object.is( t,NaN )){
		var output = new Date(randominput).getUTCMonth();
		new TestCase("date_prototype_getutcmonth", "date_prototype_getutcmonth", NaN, output);
		test();
		return;
		}
}


function test_date_prototype_getutcseconds(randominput){
	var t = thisTimeValue(randominput);
	if (Object.is( t,NaN )){
		var output = new Date(randominput).getUTCSeconds();
		new TestCase("date_prototype_getutcseconds", "date_prototype_getutcseconds", NaN, output);
		test();
		return;
		}
}


function test_get_arraybuffer_prototype_bytelength(randominput){
	var O =randominput;
	if (( typeof ( O ) != "object" )){
		 try{
			var output = randominput.byteLength;
			 return;
		}catch(e){
			new TestCase("get_arraybuffer_prototype_bytelength", "get_arraybuffer_prototype_bytelength", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
	if (( O instanceof ArrayBuffer === false )){
		 try{
			var output = randominput.byteLength;
			 return;
		}catch(e){
			new TestCase("get_arraybuffer_prototype_bytelength", "get_arraybuffer_prototype_bytelength", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
	if (( IsSharedArrayBuffer ( O ) === true )){
		 try{
			var output = randominput.byteLength;
			 return;
		}catch(e){
			new TestCase("get_arraybuffer_prototype_bytelength", "get_arraybuffer_prototype_bytelength", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
}


function test_map(randominput,iterable){
	if (( typeof  NewTarget === 'undefined' )){
		 try{
			var output = randominput.Map(iterable);
			 return;
		}catch(e){
			new TestCase("map", "map", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
}


function test_map_prototype_clear(randominput){
	var M =randominput;
	if (( typeof ( M ) != "object" )){
		 try{
			var output = randominput.clear();
			 return;
		}catch(e){
			new TestCase("map_prototype_clear", "map_prototype_clear", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
	if (( M instanceof Map === false )){
		 try{
			var output = randominput.clear();
			 return;
		}catch(e){
			new TestCase("map_prototype_clear", "map_prototype_clear", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
}


function test_map_prototype_delete(randominput,key){
	var M =randominput;
	if (( typeof ( M ) != "object" )){
		 try{
			var output = randominput.delete(key);
			 return;
		}catch(e){
			new TestCase("map_prototype_delete", "map_prototype_delete", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
	if (( M instanceof Map === false )){
		 try{
			var output = randominput.delete(key);
			 return;
		}catch(e){
			new TestCase("map_prototype_delete", "map_prototype_delete", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
}


function test_map_prototype_foreach(randominput,callbackfn,thisArg){
	var M =randominput;
	if (( typeof ( M ) != "object" )){
		 try{
			var output = randominput.forEach(callbackfn,thisArg);
			 return;
		}catch(e){
			new TestCase("map_prototype_foreach", "map_prototype_foreach", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
	if (( M instanceof Map === false )){
		 try{
			var output = randominput.forEach(callbackfn,thisArg);
			 return;
		}catch(e){
			new TestCase("map_prototype_foreach", "map_prototype_foreach", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
	if (( IsCallable ( callbackfn ) === false )){
		 try{
			var output = randominput.forEach(callbackfn,thisArg);
			 return;
		}catch(e){
			new TestCase("map_prototype_foreach", "map_prototype_foreach", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
}


function test_map_prototype_get(randominput,key){
	var M =randominput;
	if (( typeof ( M ) != "object" )){
		 try{
			var output = randominput.get(key);
			 return;
		}catch(e){
			new TestCase("map_prototype_get", "map_prototype_get", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
	if (( M instanceof Map === false )){
		 try{
			var output = randominput.get(key);
			 return;
		}catch(e){
			new TestCase("map_prototype_get", "map_prototype_get", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
}


function test_map_prototype_has(randominput,key){
	var M =randominput;
	if (( typeof ( M ) != "object" )){
		 try{
			var output = randominput.has(key);
			 return;
		}catch(e){
			new TestCase("map_prototype_has", "map_prototype_has", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
	if (( M instanceof Map === false )){
		 try{
			var output = randominput.has(key);
			 return;
		}catch(e){
			new TestCase("map_prototype_has", "map_prototype_has", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
}


function test_map_prototype_set(randominput,key,value){
	var M =randominput;
	if (( typeof ( M ) != "object" )){
		 try{
			var output = randominput.set(key,value);
			 return;
		}catch(e){
			new TestCase("map_prototype_set", "map_prototype_set", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
	if (( M instanceof Map === false )){
		 try{
			var output = randominput.set(key,value);
			 return;
		}catch(e){
			new TestCase("map_prototype_set", "map_prototype_set", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
	if  ( key === - 0 ) {
		var key = 0;
	}

}


function test_math_abs(x){
	if (Object.is( x,NaN )){
		var output = Math.abs(x);
		new TestCase("math_abs", "math_abs", NaN, output);
		test();
		return;
		}
	if (( x === - 0 )){
		var output = Math.abs(x);
		new TestCase("math_abs", "math_abs", + 0, output);
		test();
		return;
		}
	if (( x === - Infinity )){
		var output = Math.abs(x);
		new TestCase("math_abs", "math_abs", + Infinity, output);
		test();
		return;
		}
}


function test_math_acos(x){
	if (Object.is( x,NaN )){
		var output = Math.acos(x);
		new TestCase("math_acos", "math_acos", NaN, output);
		test();
		return;
		}
	if (( x > 1 )){
		var output = Math.acos(x);
		new TestCase("math_acos", "math_acos", NaN, output);
		test();
		return;
		}
	if (( x < - 1 )){
		var output = Math.acos(x);
		new TestCase("math_acos", "math_acos", NaN, output);
		test();
		return;
		}
	if (( x === 1 )){
		var output = Math.acos(x);
		new TestCase("math_acos", "math_acos", + 0, output);
		test();
		return;
		}
}


function test_math_acosh(x){
	if (Object.is( x,NaN )){
		var output = Math.acosh(x);
		new TestCase("math_acosh", "math_acosh", NaN, output);
		test();
		return;
		}
	if (( x === 1 )){
		var output = Math.acosh(x);
		new TestCase("math_acosh", "math_acosh", + 0, output);
		test();
		return;
		}
	if (( x === + Infinity )){
		var output = Math.acosh(x);
		new TestCase("math_acosh", "math_acosh", + Infinity, output);
		test();
		return;
		}
}


function test_math_asin(x){
	if (Object.is( x,NaN )){
		var output = Math.asin(x);
		new TestCase("math_asin", "math_asin", NaN, output);
		test();
		return;
		}
	if (( x > 1 )){
		var output = Math.asin(x);
		new TestCase("math_asin", "math_asin", NaN, output);
		test();
		return;
		}
	if (( x < - 1 )){
		var output = Math.asin(x);
		new TestCase("math_asin", "math_asin", NaN, output);
		test();
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.asin(x);
		new TestCase("math_asin", "math_asin", + 0, output);
		test();
		return;
		}
	if (( x === - 0 )){
		var output = Math.asin(x);
		new TestCase("math_asin", "math_asin", - 0, output);
		test();
		return;
		}
}


function test_math_asinh(x){
	if (Object.is( x,NaN )){
		var output = Math.asinh(x);
		new TestCase("math_asinh", "math_asinh", NaN, output);
		test();
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.asinh(x);
		new TestCase("math_asinh", "math_asinh", + 0, output);
		test();
		return;
		}
	if (( x === - 0 )){
		var output = Math.asinh(x);
		new TestCase("math_asinh", "math_asinh", - 0, output);
		test();
		return;
		}
	if (( x === + Infinity )){
		var output = Math.asinh(x);
		new TestCase("math_asinh", "math_asinh", + Infinity, output);
		test();
		return;
		}
}


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
	if (( x === - 0 )){
		var output = Math.atan(x);
		new TestCase("math_atan", "math_atan", - 0, output);
		test();
		return;
		}
}


function test_math_atan2(y,x){
	if ((Object.is( y,+ 0) &&  x > 0 )){
		var output = Math.atan2(y,x);
		new TestCase("math_atan2", "math_atan2", + 0, output);
		test();
		return;
		}
	if ((Object.is( y,+ 0) && Object.is(x,+ 0 ))){
		var output = Math.atan2(y,x);
		new TestCase("math_atan2", "math_atan2", + 0, output);
		test();
		return;
		}
	if (( y === - 0 && x > 0 )){
		var output = Math.atan2(y,x);
		new TestCase("math_atan2", "math_atan2", - 0, output);
		test();
		return;
		}
}


function test_math_atanh(x){
	if (Object.is( x,NaN )){
		var output = Math.atanh(x);
		new TestCase("math_atanh", "math_atanh", NaN, output);
		test();
		return;
		}
	if (( x < - 1 )){
		var output = Math.atanh(x);
		new TestCase("math_atanh", "math_atanh", NaN, output);
		test();
		return;
		}
	if (( x > 1 )){
		var output = Math.atanh(x);
		new TestCase("math_atanh", "math_atanh", NaN, output);
		test();
		return;
		}
	if (( x === - 1 )){
		var output = Math.atanh(x);
		new TestCase("math_atanh", "math_atanh", - Infinity, output);
		test();
		return;
		}
	if (( x === + 1 )){
		var output = Math.atanh(x);
		new TestCase("math_atanh", "math_atanh", + Infinity, output);
		test();
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.atanh(x);
		new TestCase("math_atanh", "math_atanh", + 0, output);
		test();
		return;
		}
	if (( x === - 0 )){
		var output = Math.atanh(x);
		new TestCase("math_atanh", "math_atanh", - 0, output);
		test();
		return;
		}
}


function test_math_cbrt(x){
	if (Object.is( x,NaN )){
		var output = Math.cbrt(x);
		new TestCase("math_cbrt", "math_cbrt", NaN, output);
		test();
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.cbrt(x);
		new TestCase("math_cbrt", "math_cbrt", + 0, output);
		test();
		return;
		}
	if (( x === - 0 )){
		var output = Math.cbrt(x);
		new TestCase("math_cbrt", "math_cbrt", - 0, output);
		test();
		return;
		}
	if (( x === + Infinity )){
		var output = Math.cbrt(x);
		new TestCase("math_cbrt", "math_cbrt", + Infinity, output);
		test();
		return;
		}
	if (( x === - Infinity )){
		var output = Math.cbrt(x);
		new TestCase("math_cbrt", "math_cbrt", - Infinity, output);
		test();
		return;
		}
}


function test_math_ceil(x){
	if (Object.is( x,NaN )){
		var output = Math.ceil(x);
		new TestCase("math_ceil", "math_ceil", NaN, output);
		test();
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.ceil(x);
		new TestCase("math_ceil", "math_ceil", + 0, output);
		test();
		return;
		}
	if (( x === - 0 )){
		var output = Math.ceil(x);
		new TestCase("math_ceil", "math_ceil", - 0, output);
		test();
		return;
		}
	if (( x === + Infinity )){
		var output = Math.ceil(x);
		new TestCase("math_ceil", "math_ceil", + Infinity, output);
		test();
		return;
		}
	if (( x === - Infinity )){
		var output = Math.ceil(x);
		new TestCase("math_ceil", "math_ceil", - Infinity, output);
		test();
		return;
		}
	if (( x < 0 && x > - 1 )){
		var output = Math.ceil(x);
		new TestCase("math_ceil", "math_ceil", - 0, output);
		test();
		return;
		}
}


function test_math_cos(x){
	if (Object.is( x,NaN )){
		var output = Math.cos(x);
		new TestCase("math_cos", "math_cos", NaN, output);
		test();
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.cos(x);
		new TestCase("math_cos", "math_cos", 1, output);
		test();
		return;
		}
	if (( x === - 0 )){
		var output = Math.cos(x);
		new TestCase("math_cos", "math_cos", 1, output);
		test();
		return;
		}
	if (( x === + Infinity )){
		var output = Math.cos(x);
		new TestCase("math_cos", "math_cos", NaN, output);
		test();
		return;
		}
	if (( x === - Infinity )){
		var output = Math.cos(x);
		new TestCase("math_cos", "math_cos", NaN, output);
		test();
		return;
		}
}


function test_math_cosh(x){
	if (Object.is( x,NaN )){
		var output = Math.cosh(x);
		new TestCase("math_cosh", "math_cosh", NaN, output);
		test();
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.cosh(x);
		new TestCase("math_cosh", "math_cosh", 1, output);
		test();
		return;
		}
	if (( x === - 0 )){
		var output = Math.cosh(x);
		new TestCase("math_cosh", "math_cosh", 1, output);
		test();
		return;
		}
	if (( x === + Infinity )){
		var output = Math.cosh(x);
		new TestCase("math_cosh", "math_cosh", + Infinity, output);
		test();
		return;
		}
	if (( x === - Infinity )){
		var output = Math.cosh(x);
		new TestCase("math_cosh", "math_cosh", + Infinity, output);
		test();
		return;
		}
}


function test_math_exp(x){
	if (Object.is( x,NaN )){
		var output = Math.exp(x);
		new TestCase("math_exp", "math_exp", NaN, output);
		test();
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.exp(x);
		new TestCase("math_exp", "math_exp", 1, output);
		test();
		return;
		}
	if (( x === - 0 )){
		var output = Math.exp(x);
		new TestCase("math_exp", "math_exp", 1, output);
		test();
		return;
		}
	if (( x === + Infinity )){
		var output = Math.exp(x);
		new TestCase("math_exp", "math_exp", + Infinity, output);
		test();
		return;
		}
	if (( x === - Infinity )){
		var output = Math.exp(x);
		new TestCase("math_exp", "math_exp", + 0, output);
		test();
		return;
		}
}


function test_math_expm1(x){
	if (Object.is( x,NaN )){
		var output = Math.expm1(x);
		new TestCase("math_expm1", "math_expm1", NaN, output);
		test();
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.expm1(x);
		new TestCase("math_expm1", "math_expm1", + 0, output);
		test();
		return;
		}
	if (( x === - 0 )){
		var output = Math.expm1(x);
		new TestCase("math_expm1", "math_expm1", - 0, output);
		test();
		return;
		}
	if (( x === + Infinity )){
		var output = Math.expm1(x);
		new TestCase("math_expm1", "math_expm1", + Infinity, output);
		test();
		return;
		}
	if (( x === - Infinity )){
		var output = Math.expm1(x);
		new TestCase("math_expm1", "math_expm1", - 1, output);
		test();
		return;
		}
}


function test_math_floor(x){
	if (Object.is( x,NaN )){
		var output = Math.floor(x);
		new TestCase("math_floor", "math_floor", NaN, output);
		test();
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.floor(x);
		new TestCase("math_floor", "math_floor", + 0, output);
		test();
		return;
		}
	if (( x === - 0 )){
		var output = Math.floor(x);
		new TestCase("math_floor", "math_floor", - 0, output);
		test();
		return;
		}
	if (( x === + Infinity )){
		var output = Math.floor(x);
		new TestCase("math_floor", "math_floor", + Infinity, output);
		test();
		return;
		}
	if (( x === - Infinity )){
		var output = Math.floor(x);
		new TestCase("math_floor", "math_floor", - Infinity, output);
		test();
		return;
		}
	if (( x > 0 && x < 1 )){
		var output = Math.floor(x);
		new TestCase("math_floor", "math_floor", + 0, output);
		test();
		return;
		}
}


function test_math_fround(x){
	if (Object.is( x,NaN )){
		var output = Math.fround(x);
		new TestCase("math_fround", "math_fround", NaN, output);
		test();
		return;
		}
	if ((Object.is( x,+ 0) && Object.is(x,+ 0) &&  x === - 0  &&  x === + Infinity  &&  x === - Infinity )){
		var output = Math.fround(x);
		new TestCase("math_fround", "math_fround", x, output);
		test();
		return;
		}
}


function test_math_log(x){
	if (Object.is( x,NaN )){
		var output = Math.log(x);
		new TestCase("math_log", "math_log", NaN, output);
		test();
		return;
		}
	if (( x < 0 )){
		var output = Math.log(x);
		new TestCase("math_log", "math_log", NaN, output);
		test();
		return;
		}
	if ((Object.is( x,+ 0) &&  x === - 0 )){
		var output = Math.log(x);
		new TestCase("math_log", "math_log", - Infinity, output);
		test();
		return;
		}
	if (( x === 1 )){
		var output = Math.log(x);
		new TestCase("math_log", "math_log", + 0, output);
		test();
		return;
		}
	if (( x === + Infinity )){
		var output = Math.log(x);
		new TestCase("math_log", "math_log", + Infinity, output);
		test();
		return;
		}
}


function test_math_log10(x){
	if (Object.is( x,NaN )){
		var output = Math.log10(x);
		new TestCase("math_log10", "math_log10", NaN, output);
		test();
		return;
		}
	if (( x < 0 )){
		var output = Math.log10(x);
		new TestCase("math_log10", "math_log10", NaN, output);
		test();
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.log10(x);
		new TestCase("math_log10", "math_log10", - Infinity, output);
		test();
		return;
		}
	if (( x === - 0 )){
		var output = Math.log10(x);
		new TestCase("math_log10", "math_log10", - Infinity, output);
		test();
		return;
		}
	if (( x === 1 )){
		var output = Math.log10(x);
		new TestCase("math_log10", "math_log10", + 0, output);
		test();
		return;
		}
	if (( x === + Infinity )){
		var output = Math.log10(x);
		new TestCase("math_log10", "math_log10", + Infinity, output);
		test();
		return;
		}
}


function test_math_log1p(x){
	if (Object.is( x,NaN )){
		var output = Math.log1p(x);
		new TestCase("math_log1p", "math_log1p", NaN, output);
		test();
		return;
		}
	if (( x < - 1 )){
		var output = Math.log1p(x);
		new TestCase("math_log1p", "math_log1p", NaN, output);
		test();
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.log1p(x);
		new TestCase("math_log1p", "math_log1p", + 0, output);
		test();
		return;
		}
	if (( x === - 0 )){
		var output = Math.log1p(x);
		new TestCase("math_log1p", "math_log1p", - 0, output);
		test();
		return;
		}
	if (( x === + Infinity )){
		var output = Math.log1p(x);
		new TestCase("math_log1p", "math_log1p", + Infinity, output);
		test();
		return;
		}
}


function test_math_log2(x){
	if (Object.is( x,NaN )){
		var output = Math.log2(x);
		new TestCase("math_log2", "math_log2", NaN, output);
		test();
		return;
		}
	if (( x < 0 )){
		var output = Math.log2(x);
		new TestCase("math_log2", "math_log2", NaN, output);
		test();
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.log2(x);
		new TestCase("math_log2", "math_log2", - Infinity, output);
		test();
		return;
		}
	if (( x === - 0 )){
		var output = Math.log2(x);
		new TestCase("math_log2", "math_log2", - Infinity, output);
		test();
		return;
		}
	if (( x === 1 )){
		var output = Math.log2(x);
		new TestCase("math_log2", "math_log2", + 0, output);
		test();
		return;
		}
	if (( x === + Infinity )){
		var output = Math.log2(x);
		new TestCase("math_log2", "math_log2", + Infinity, output);
		test();
		return;
		}
}


function test_math_round(x){
	if (Object.is( x,NaN )){
		var output = Math.round(x);
		new TestCase("math_round", "math_round", NaN, output);
		test();
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.round(x);
		new TestCase("math_round", "math_round", + 0, output);
		test();
		return;
		}
	if (( x === - 0 )){
		var output = Math.round(x);
		new TestCase("math_round", "math_round", - 0, output);
		test();
		return;
		}
	if (( x === + Infinity )){
		var output = Math.round(x);
		new TestCase("math_round", "math_round", + Infinity, output);
		test();
		return;
		}
	if (( x === - Infinity )){
		var output = Math.round(x);
		new TestCase("math_round", "math_round", - Infinity, output);
		test();
		return;
		}
	if (( x > 0 && x < 0.5 )){
		var output = Math.round(x);
		new TestCase("math_round", "math_round", + 0, output);
		test();
		return;
		}
	if (( x < 0 && x >=  - 0.5 )){
		var output = Math.round(x);
		new TestCase("math_round", "math_round", - 0, output);
		test();
		return;
		}
}


function test_math_sign(x){
	if (Object.is( x,NaN )){
		var output = Math.sign(x);
		new TestCase("math_sign", "math_sign", NaN, output);
		test();
		return;
		}
	if (( x === - 0 )){
		var output = Math.sign(x);
		new TestCase("math_sign", "math_sign", - 0, output);
		test();
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.sign(x);
		new TestCase("math_sign", "math_sign", + 0, output);
		test();
		return;
		}
}


function test_math_sin(x){
	if (Object.is( x,NaN )){
		var output = Math.sin(x);
		new TestCase("math_sin", "math_sin", NaN, output);
		test();
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.sin(x);
		new TestCase("math_sin", "math_sin", + 0, output);
		test();
		return;
		}
	if (( x === - 0 )){
		var output = Math.sin(x);
		new TestCase("math_sin", "math_sin", - 0, output);
		test();
		return;
		}
	if (( x === + Infinity || x === - Infinity )){
		var output = Math.sin(x);
		new TestCase("math_sin", "math_sin", NaN, output);
		test();
		return;
		}
}


function test_math_sinh(x){
	if (Object.is( x,NaN )){
		var output = Math.sinh(x);
		new TestCase("math_sinh", "math_sinh", NaN, output);
		test();
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.sinh(x);
		new TestCase("math_sinh", "math_sinh", + 0, output);
		test();
		return;
		}
	if (( x === - 0 )){
		var output = Math.sinh(x);
		new TestCase("math_sinh", "math_sinh", - 0, output);
		test();
		return;
		}
	if (( x === + Infinity )){
		var output = Math.sinh(x);
		new TestCase("math_sinh", "math_sinh", + Infinity, output);
		test();
		return;
		}
	if (( x === - Infinity )){
		var output = Math.sinh(x);
		new TestCase("math_sinh", "math_sinh", - Infinity, output);
		test();
		return;
		}
}


function test_math_sqrt(x){
	if (Object.is( x,NaN )){
		var output = Math.sqrt(x);
		new TestCase("math_sqrt", "math_sqrt", NaN, output);
		test();
		return;
		}
	if (( x < 0 )){
		var output = Math.sqrt(x);
		new TestCase("math_sqrt", "math_sqrt", NaN, output);
		test();
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.sqrt(x);
		new TestCase("math_sqrt", "math_sqrt", + 0, output);
		test();
		return;
		}
	if (( x === - 0 )){
		var output = Math.sqrt(x);
		new TestCase("math_sqrt", "math_sqrt", - 0, output);
		test();
		return;
		}
	if (( x === + Infinity )){
		var output = Math.sqrt(x);
		new TestCase("math_sqrt", "math_sqrt", + Infinity, output);
		test();
		return;
		}
}


function test_math_tan(x){
	if (Object.is( x,NaN )){
		var output = Math.tan(x);
		new TestCase("math_tan", "math_tan", NaN, output);
		test();
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.tan(x);
		new TestCase("math_tan", "math_tan", + 0, output);
		test();
		return;
		}
	if (( x === - 0 )){
		var output = Math.tan(x);
		new TestCase("math_tan", "math_tan", - 0, output);
		test();
		return;
		}
	if (( x === + Infinity || x === - Infinity )){
		var output = Math.tan(x);
		new TestCase("math_tan", "math_tan", NaN, output);
		test();
		return;
		}
}


function test_math_tanh(x){
	if (Object.is( x,NaN )){
		var output = Math.tanh(x);
		new TestCase("math_tanh", "math_tanh", NaN, output);
		test();
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.tanh(x);
		new TestCase("math_tanh", "math_tanh", + 0, output);
		test();
		return;
		}
	if (( x === - 0 )){
		var output = Math.tanh(x);
		new TestCase("math_tanh", "math_tanh", - 0, output);
		test();
		return;
		}
	if (( x === + Infinity )){
		var output = Math.tanh(x);
		new TestCase("math_tanh", "math_tanh", + 1, output);
		test();
		return;
		}
	if (( x === - Infinity )){
		var output = Math.tanh(x);
		new TestCase("math_tanh", "math_tanh", - 1, output);
		test();
		return;
		}
}


function test_math_trunc(x){
	if (Object.is( x,NaN )){
		var output = Math.trunc(x);
		new TestCase("math_trunc", "math_trunc", NaN, output);
		test();
		return;
		}
	if (( x === - 0 )){
		var output = Math.trunc(x);
		new TestCase("math_trunc", "math_trunc", - 0, output);
		test();
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.trunc(x);
		new TestCase("math_trunc", "math_trunc", + 0, output);
		test();
		return;
		}
	if (( x === + Infinity )){
		var output = Math.trunc(x);
		new TestCase("math_trunc", "math_trunc", + Infinity, output);
		test();
		return;
		}
	if (( x === - Infinity )){
		var output = Math.trunc(x);
		new TestCase("math_trunc", "math_trunc", - Infinity, output);
		test();
		return;
		}
	if (( x > 0 && x < 1 )){
		var output = Math.trunc(x);
		new TestCase("math_trunc", "math_trunc", + 0, output);
		test();
		return;
		}
	if (( x < 0 && x > - 1 )){
		var output = Math.trunc(x);
		new TestCase("math_trunc", "math_trunc", - 0, output);
		test();
		return;
		}
}


function test_number_isfinite(number){
	if (( typeof ( number ) != "number" )){
		var output = Number.isFinite(number);
		new TestCase("number_isfinite", "number_isfinite", false, output);
		test();
		return;
		}
	if ((Object.is( number,NaN) &&  number === + Infinity  &&  number ===- Infinity )){
		var output = Number.isFinite(number);
		new TestCase("number_isfinite", "number_isfinite", false, output);
		test();
		return;
		}
}


function test_number_isinteger(number){
	if (( typeof ( number ) != "number" )){
		var output = Number.isInteger(number);
		new TestCase("number_isinteger", "number_isinteger", false, output);
		test();
		return;
		}
	if ((Object.is( number,NaN) &&  number === + Infinity  &&  number ===- Infinity )){
		var output = Number.isInteger(number);
		new TestCase("number_isinteger", "number_isinteger", false, output);
		test();
		return;
		}
	var integer = ToInteger(number);
	if (( integer != number )){
		var output = Number.isInteger(number);
		new TestCase("number_isinteger", "number_isinteger", false, output);
		test();
		return;
		}
}


function test_number_isnan(number){
	if (( typeof ( number ) != "number" )){
		var output = Number.isNaN(number);
		new TestCase("number_isnan", "number_isnan", false, output);
		test();
		return;
		}
	if (Object.is( number,NaN )){
		var output = Number.isNaN(number);
		new TestCase("number_isnan", "number_isnan", true, output);
		test();
		return;
		}
}


function test_number_issafeinteger(number){
	if (( typeof ( number ) != "number" )){
		var output = Number.isSafeInteger(number);
		new TestCase("number_issafeinteger", "number_issafeinteger", false, output);
		test();
		return;
		}
	if ((Object.is( number,NaN) &&  number === + Infinity  &&  number ===- Infinity )){
		var output = Number.isSafeInteger(number);
		new TestCase("number_issafeinteger", "number_issafeinteger", false, output);
		test();
		return;
		}
	var integer = ToInteger(number);
	if (( integer != number )){
		var output = Number.isSafeInteger(number);
		new TestCase("number_issafeinteger", "number_issafeinteger", false, output);
		test();
		return;
		}
}


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


function test_string_prototype_charat(randominput,pos){
	var O = RequireObjectCoercible(randominput);
	var S = ToString(O);
	var position = ToInteger(pos);
	var size = S.length;
	if (( position < 0 || position >=  size )){
		var output = new String(randominput).charAt(pos);
		new TestCase("string_prototype_charat", "string_prototype_charat", "", output);
		test();
		return;
		}
}


function test_string_prototype_charcodeat(randominput,pos){
	var O = RequireObjectCoercible(randominput);
	var S = ToString(O);
	var position = ToInteger(pos);
	var size = S.length;
	if (( position < 0 || position >=  size )){
		var output = new String(randominput).charCodeAt(pos);
		new TestCase("string_prototype_charcodeat", "string_prototype_charcodeat", NaN, output);
		test();
		return;
		}
}


function test_string_prototype_endswith(randominput,searchString,endPosition){
	var O = RequireObjectCoercible(randominput);
	var S = ToString(O);
	var isRegExp = IsRegExp(searchString);
	if (( isRegExp === true )){
		 try{
			var output = new String(randominput).endsWith(searchString,endPosition);
			 return;
		}catch(e){
			new TestCase("string_prototype_endswith", "string_prototype_endswith", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
	var searchStr = ToString(searchString);
	var len = S.length;
	if ( typeof  endPosition === 'undefined' ) {
		var pos = len;
	}

	else {
		var pos = ToInteger(endPosition);
	}

	var end = Math.min (Math.max (pos, 0), len);
	if (( start < 0 )){
		var output = new String(randominput).endsWith(searchString,endPosition);
		new TestCase("string_prototype_endswith", "string_prototype_endswith", false, output);
		test();
		return;
		}
}


function test_string_prototype_includes(randominput,searchString,position){
	var O = RequireObjectCoercible(randominput);
	var S = ToString(O);
	var isRegExp = IsRegExp(searchString);
	if (( isRegExp === true )){
		 try{
			var output = new String(randominput).includes(searchString,position);
			 return;
		}catch(e){
			new TestCase("string_prototype_includes", "string_prototype_includes", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
}


function test_string_prototype_padend(randominput,maxLength,fillString){
	var O = RequireObjectCoercible(randominput);
	var S = ToString(O);
	var intMaxLength = ToLength(maxLength);
	var stringLength = S.length;
	if (( intMaxLength < stringLength )){
		var output = new String(randominput).padEnd(maxLength,fillString);
		new TestCase("string_prototype_padend", "string_prototype_padend", S, output);
		test();
		return;
		}
}


function test_string_prototype_padstart(randominput,maxLength,fillString){
	var O = RequireObjectCoercible(randominput);
	var S = ToString(O);
	var intMaxLength = ToLength(maxLength);
	var stringLength = S.length;
	if (( intMaxLength < stringLength )){
		var output = new String(randominput).padStart(maxLength,fillString);
		new TestCase("string_prototype_padstart", "string_prototype_padstart", S, output);
		test();
		return;
		}
}


function test_string_prototype_repeat(randominput,count){
	var O = RequireObjectCoercible(randominput);
	var S = ToString(O);
	var n = ToInteger(count);
	if (( n < 0 )){
		 try{
			var output = new String(randominput).repeat(count);
			 return;
		}catch(e){
			new TestCase("string_prototype_repeat", "string_prototype_repeat", true, eval(e instanceof RangeError));
			test();
			return;
		}
	}
	if (( n === + Infinity )){
		 try{
			var output = new String(randominput).repeat(count);
			 return;
		}catch(e){
			new TestCase("string_prototype_repeat", "string_prototype_repeat", true, eval(e instanceof RangeError));
			test();
			return;
		}
	}
}


function test_string_prototype_startswith(randominput,searchString,position){
	var O = RequireObjectCoercible(randominput);
	var S = ToString(O);
	var isRegExp = IsRegExp(searchString);
	if (( isRegExp === true )){
		 try{
			var output = new String(randominput).startsWith(searchString,position);
			 return;
		}catch(e){
			new TestCase("string_prototype_startswith", "string_prototype_startswith", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
	var searchStr = ToString(searchString);
	var pos = ToInteger(position);
	var len = S.length;
	var start = Math.min (Math.max (pos, 0), len);
}


function test_typedarray( ){
	if (( typeof  NewTarget === 'undefined' )){
		 try{
			var output = new TypedArray ( );
			 return;
		}catch(e){
			new TestCase("typedarray", "typedarray", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
}


function test_typedarray( length ){
	new TestCase("typedarray", "typedarray", typeof ( length ) ,  Object);
		test();
		return;
	if (( typeof  NewTarget === 'undefined' )){
		 try{
			var output = new TypedArray ( length );
			 return;
		}catch(e){
			new TestCase("typedarray", "typedarray", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
}


function test_typedarray( object ){
	if (( typeof  NewTarget === 'undefined' )){
		 try{
			var output = new TypedArray ( object );
			 return;
		}catch(e){
			new TestCase("typedarray", "typedarray", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
	var O = AllocateTypedArray(constructorName, NewTarget, "%TypedArrayPrototype%");
}
