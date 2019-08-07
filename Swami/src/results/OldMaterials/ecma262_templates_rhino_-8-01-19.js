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



function test_advancestringindex(randominput,S,index,unicode){
	new TestCase("advancestringindex", "advancestringindex", typeof ( S ) ,   "string" );
		test();
		return;
	new TestCase("advancestringindex", "advancestringindex", 0 ,  index && index );
		test();
		return;
	new TestCase("advancestringindex", "advancestringindex", typeof ( unicode ) ,   "boolean" );
		test();
		return;
	if (( unicode === false )){
		var output = new String(randominput).AdvanceStringIndex(S,index,unicode);
		new TestCase("advancestringindex", "advancestringindex", index + 1, output);
		test();
		return;
		}
	var length =S.length;
	if (( index + 1 >=  length )){
		var output = new String(randominput).AdvanceStringIndex(S,index,unicode);
		new TestCase("advancestringindex", "advancestringindex", index + 1, output);
		test();
		return;
		}
	var first = S[index].charCodeAt();
	if (( first < 0xD800 || first > 0xDBFF )){
		var output = new String(randominput).AdvanceStringIndex(S,index,unicode);
		new TestCase("advancestringindex", "advancestringindex", index + 1, output);
		test();
		return;
		}
	var second = S[index+1].charCodeAt();
	if (( second < 0xDC00 || second > 0xDFFF )){
		var output = new String(randominput).AdvanceStringIndex(S,index,unicode);
		new TestCase("advancestringindex", "advancestringindex", index + 1, output);
		test();
		return;
		}
}


function test_array( ){
	var numberOfArgs = arguments.length;
	new TestCase("array", "array", numberOfArgs ,  0);
		test();
		return;
	if ( typeof  NewTarget === 'undefined'  ) { 
		var newTarget = new Array ( );
	}

	else {
		var newTarget = NewTarget;
	}

	var proto = GetPrototypeFromConstructor(newTarget, "%ArrayPrototype%");
}


function test_array( items ){
	var numberOfArgs = arguments.length;
	new TestCase("array", "array", numberOfArgs ,  2);
		test();
		return;
	if ( typeof  NewTarget === 'undefined'  ) { 
		var newTarget = new Array ( ...items );
	}

	else {
		var newTarget = NewTarget;
	}

	var proto = GetPrototypeFromConstructor(newTarget, "%ArrayPrototype%");
	var array = ArrayCreate(numberOfArgs, proto);
	var k = 0;
	var items = a zero-origined List containingargument items in order;
	while ( k < numberOfArgs ) { 
		var Pk = ToString(k);
		var itemK = items[k];
		var defineStatus = CreateDataProperty(array, Pk, itemK);
		new TestCase("array", "array", defineStatus ,  true);
			test();
			return;
		k = k + 1
	}

}


function test_array( len ){
	var numberOfArgs = arguments.length;
	new TestCase("array", "array", numberOfArgs ,  1);
		test();
		return;
	if ( typeof  NewTarget === 'undefined'  ) { 
		var newTarget = new Array ( len );
	}

	else {
		var newTarget = NewTarget;
	}

	var proto = GetPrototypeFromConstructor(newTarget, "%ArrayPrototype%");
	var array = ArrayCreate(0, proto);
	if  ( typeof ( len ) != "number"  ) { 
		var defineStatus = CreateDataProperty(array, "0", len);
		new TestCase("array", "array", defineStatus ,  true);
			test();
			return;
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

	Set ( array , "length" , intLen , true )
}


function test_array_from(items,mapfn,thisArg){
	var C =randominput;
	if ( typeof  mapfn === 'undefined'  ) { 
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
		if  ( thisArg === present  ) { 
			var T = thisArg;
		}
					
		else {
			var T = undefined;
		}
							
		var mapping = true;
	}

	var usingIterator = GetMethod(items, @@iterator);
	if ( typeof  usingIterator != 'undefined'  ) { 
		if  ( IsConstructor ( C ) === true  ) { 
			var A = Construct(C);
		}
				
		else {
			var A = ArrayCreate(0);
		}
						
		var iteratorRecord = GetIterator(items, sync, usingIterator);
		var k = 0;
		while ( true ) {
			if  ( k >=  Math.pow ( 2 , 53 ) - 1  ) { 
				var error = ThrowCompletion( TypeError );
				var output = Array.from(items,mapfn,thisArg);
					new TestCase("array_from", "array_from", ? IteratorClose ( iteratorRecord , error ), output);
					test();
					return;
			}
												
			var Pk = ToString(k);
			var next = IteratorStep(iteratorRecord);
			if  ( next === false  ) { 
				Set ( A , "length" , k , true )
				var output = Array.from(items,mapfn,thisArg);
					new TestCase("array_from", "array_from", A, output);
					test();
					return;
			}
																	
			var nextValue = IteratorValue(next);
			if  ( mapping === true  ) { 
				var mappedValue = Call(mapfn, T, « nextValue, k »);
				if (( mappedValue === an abrupt completion )){
					var output = Array.from(items,mapfn,thisArg);
					new TestCase("array_from", "array_from", ? IteratorClose ( iteratorRecord , mappedValue ), output);
					test();
					return;
					}
				var mappedValue = mappedValue;
			}
																						
			else {
				var mappedValue = nextValue;
			}
																								
			var defineStatus = CreateDataPropertyOrThrow(A, Pk, mappedValue);
			if (( defineStatus === an abrupt completion )){
				var output = Array.from(items,mapfn,thisArg);
				new TestCase("array_from", "array_from", ? IteratorClose ( iteratorRecord , defineStatus ), output);
				test();
				return;
				}
			k = k + 1
			}

		}

	var arrayLike = ToObject(items);
	var len = ToLength( Get(arrayLike, "length"));
	if  ( IsConstructor ( C ) === true  ) { 
		var A = Construct(C, « len »);
	}

	else {
		var A = ArrayCreate(len);
	}

	var k = 0;
	while ( k < len ) { 
		var Pk = ToString(k);
		var kValue = Get(arrayLike, Pk);
		if  ( mapping === true  ) { 
			var mappedValue = Call(mapfn, T, « kValue, k »);
		}
						
		else {
			var mappedValue = kValue;
		}
								
		CreateDataPropertyOrThrow ( A , Pk , mappedValue )
		k = k + 1
	}

	Set ( A , "length" , len , true )
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
	if  ( thisArg === present  ) { 
		var T = thisArg;
	}

	else {
		var T = undefined;
	}

	var k = 0;
	while ( k < len ) { 
		var Pk = ToString(k);
		var kPresent = HasProperty(O, Pk);
		if  ( kPresent === true  ) { 
			var kValue = Get(O, Pk);
			var testResult = ToBoolean( Call(callbackfn, T, « kValue, k, O »));
			if (( testResult === false )){
				var output = new Array(randominput).every( callbackfn  , thisArg  );
				new TestCase("array_prototype_every", "array_prototype_every", false, output);
				test();
				return;
				}
		}
								
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
	if  ( thisArg === present  ) { 
		var T = thisArg;
	}

	else {
		var T = undefined;
	}

	var A = ArraySpeciesCreate(O, 0);
	var k = 0;
	var to = 0;
	while ( k < len ) { 
		var Pk = ToString(k);
		var kPresent = HasProperty(O, Pk);
		if  ( kPresent === true  ) { 
			var kValue = Get(O, Pk);
			var selected = ToBoolean( Call(callbackfn, T, « kValue, k, O »));
				CreateDataPropertyOrThrow ( A , ToString ( to ) , kValue )
				to = to + 1
		}
									
		k = k + 1
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
	if  ( thisArg === present  ) { 
		var T = thisArg;
	}

	else {
		var T = undefined;
	}

	var k = 0;
	while ( k < len ) { 
		var Pk = ToString(k);
		var kValue = Get(O, Pk);
		var testResult = ToBoolean( Call(predicate, T, « kValue, k, O »));
		if (( testResult === true )){
			var output = new Array(randominput).find( predicate  , thisArg  );
			new TestCase("array_prototype_find", "array_prototype_find", kValue, output);
			test();
			return;
			}
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
	if  ( thisArg === present  ) { 
		var T = thisArg;
	}

	else {
		var T = undefined;
	}

	var k = 0;
	while ( k < len ) { 
		var Pk = ToString(k);
		var kValue = Get(O, Pk);
		var testResult = ToBoolean( Call(predicate, T, « kValue, k, O »));
		if (( testResult === true )){
			var output = new Array(randominput).findIndex( predicate  , thisArg  );
			new TestCase("array_prototype_findindex", "array_prototype_findindex", k, output);
			test();
			return;
			}
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
	if  ( thisArg === present  ) { 
		var T = thisArg;
	}

	else {
		var T = undefined;
	}

	var k = 0;
	while ( k < len ) { 
		var Pk = ToString(k);
		var kPresent = HasProperty(O, Pk);
		if  ( kPresent === true  ) { 
			var kValue = Get(O, Pk);
			Call ( callbackfn , T , « kValue , k , O » )
		}
							
		k = k + 1
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
	if  ( n >=  0  ) { 
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
	if  ( fromIndex === present  ) { 
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
	if  ( thisArg === present  ) { 
		var T = thisArg;
	}

	else {
		var T = undefined;
	}

	var A = ArraySpeciesCreate(O, len);
	var k = 0;
	while ( k < len ) { 
		var Pk = ToString(k);
		var kPresent = HasProperty(O, Pk);
		if  ( kPresent === true  ) { 
			var kValue = Get(O, Pk);
			var mappedValue = Call(callbackfn, T, « kValue, k, O »);
			CreateDataPropertyOrThrow ( A , Pk , mappedValue )
		}
								
		k = k + 1
	}

}


function test_array_prototype_pop(randominput, ){
	var O = ToObject(randominput);
	var len = ToLength( Get(O, "length"));
	if  ( len === zero  ) { 
		Set ( O , "length" , 0 , true )
		var output = new Array(randominput).pop( );
			new TestCase("array_prototype_pop", "array_prototype_pop", undefined, output);
			test();
			return;
	}

}


function test_array_prototype_reduce(randominput, callbackfn  , initialValue  ){
	var O = ToObject(randominput);
	var len = ToLength( Get(O, "length"));
	if (( IsCallable ( callbackfn ) === false )){
		 try{
			var output = new Array(randominput).reduce( callbackfn  , initialValue  );
			 return;
		}catch(e){
			new TestCase("array_prototype_reduce", "array_prototype_reduce", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
	if (( len === 0 && initialValue != present )){
		 try{
			var output = new Array(randominput).reduce( callbackfn  , initialValue  );
			 return;
		}catch(e){
			new TestCase("array_prototype_reduce", "array_prototype_reduce", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
	var k = 0;
	var accumulator = undefined;
	else if ( initialValue != present ) {
		var kPresent = false;
		while ( kPresent === false && k < len ) { 
			var Pk = ToString(k);
			var kPresent = HasProperty(O, Pk);
			if  ( kPresent === true  ) { 
			k = k + 1
		}
								
		if (( kPresent === false )){
			 try{
				var output = new Array(randominput).reduce( callbackfn  , initialValue  );
				 return;
			}catch(e){
				new TestCase("array_prototype_reduce", "array_prototype_reduce", true, eval(e instanceof TypeError));
				test();
				return;
			}
		}
	}

	while ( k < len ) { 
		var Pk = ToString(k);
		var kPresent = HasProperty(O, Pk);
		if  ( kPresent === true  ) { 
			var kValue = Get(O, Pk);
		}
						
		k = k + 1
	}

}


function test_array_prototype_reduceright(randominput, callbackfn  , initialValue  ){
	var O = ToObject(randominput);
	var len = ToLength( Get(O, "length"));
	if (( IsCallable ( callbackfn ) === false )){
		 try{
			var output = new Array(randominput).reduceRight( callbackfn  , initialValue  );
			 return;
		}catch(e){
			new TestCase("array_prototype_reduceright", "array_prototype_reduceright", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
	if (( len === 0 && initialValue != present )){
		 try{
			var output = new Array(randominput).reduceRight( callbackfn  , initialValue  );
			 return;
		}catch(e){
			new TestCase("array_prototype_reduceright", "array_prototype_reduceright", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
	var k = len-1;
	var accumulator = undefined;
	else if ( initialValue != present ) {
		var kPresent = false;
		while ( kPresent === false && k >=  0 ) { 
			var Pk = ToString(k);
			var kPresent = HasProperty(O, Pk);
			if  ( kPresent === true  ) { 
			k = k - 1
		}
								
		if (( kPresent === false )){
			 try{
				var output = new Array(randominput).reduceRight( callbackfn  , initialValue  );
				 return;
			}catch(e){
				new TestCase("array_prototype_reduceright", "array_prototype_reduceright", true, eval(e instanceof TypeError));
				test();
				return;
			}
		}
	}

	while ( k >=  0 ) { 
		var Pk = ToString(k);
		var kPresent = HasProperty(O, Pk);
		if  ( kPresent === true  ) { 
			var kValue = Get(O, Pk);
		}
						
		k = k - 1
	}

}


function test_array_prototype_shift(randominput, ){
	var O = ToObject(randominput);
	var len = ToLength( Get(O, "length"));
	if  ( len === zero  ) { 
		Set ( O , "length" , 0 , true )
		var output = new Array(randominput).shift( );
			new TestCase("array_prototype_shift", "array_prototype_shift", undefined, output);
			test();
			return;
	}

	var first = Get(O, "0");
	var k = 1;
	while ( k < len ) { 
		var from = ToString(k);
		var to = ToString(k-1);
		var fromPresent = HasProperty(O, from);
		if  ( fromPresent === true  ) { 
			var fromVal = Get(O, from);
			Set ( O , to , fromVal , true )
		}
								
		else if ( fromPresent === false ) {
			DeletePropertyOrThrow ( O , to )
		}
										
		k = k + 1
	}

	DeletePropertyOrThrow ( O , ToString ( len- 1 ) )
	Set ( O , "length" , len- 1 , true )
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
	if  ( thisArg === present  ) { 
		var T = thisArg;
	}

	else {
		var T = undefined;
	}

	var k = 0;
	while ( k < len ) { 
		var Pk = ToString(k);
		var kPresent = HasProperty(O, Pk);
		if  ( kPresent === true  ) { 
			var kValue = Get(O, Pk);
			var testResult = ToBoolean( Call(callbackfn, T, « kValue, k, O »));
			if (( testResult === true )){
				var output = new Array(randominput).some( callbackfn  , thisArg  );
				new TestCase("array_prototype_some", "array_prototype_some", true, output);
				test();
				return;
				}
		}
								
		k = k + 1
	}

}


function test_array_prototype_unshift(randominput, items ){
	var O = ToObject(randominput);
	var len = ToLength( Get(O, "length"));
	var argCount =number of actual arguments;
	if  ( argCount > 0  ) { 
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
			var fromPresent = HasProperty(O, from);
			if  ( fromPresent === true  ) { 
				var fromValue = Get(O, from);
				Set ( O , to , fromValue , true )
			}
											
			else if ( fromPresent === false ) {
				DeletePropertyOrThrow ( O , to )
			}
													
			k = k - 1
		}
														
		var j = 0;
		while ( items != empty ) { 
			Set ( O , ToString ( j ) , E , true )
			j = j + 1
	}
																		
	Set ( O , "length" , len + argCount , true )
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
	var byteLength = ToIndex(length);
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
	if (( IsDetachedBuffer ( O ) === true )){
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
	if  ( relativeStart < 0  ) { 
		var first = Math.max ((len + relativeStart), 0);
	}

	else {
		var first = Math.min (relativeStart, len);
	}

	if ( typeof  end === 'undefined'  ) { 
		var relativeEnd = len;
	}

	else {
		var relativeEnd = ToInteger(end);
	}

	if  ( relativeEnd < 0  ) { 
		var final = Math.max ((len + relativeEnd), 0);
	}

	else {
		var final = Math.min (relativeEnd, len);
	}

	var newLen = Math.max (final-first, 0);
	var ctor = SpeciesConstructor(O, %ArrayBuffer%);
	var new = Construct(ctor, « newLen »);
	if (( new instanceof ArrayBuffer === false )){
		 try{
			var output = randominput.slice(start,end);
			 return;
		}catch(e){
			new TestCase("arraybuffer_prototype_slice", "arraybuffer_prototype_slice", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
	if (( IsSharedArrayBuffer ( new ) === true )){
		 try{
			var output = randominput.slice(start,end);
			 return;
		}catch(e){
			new TestCase("arraybuffer_prototype_slice", "arraybuffer_prototype_slice", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
	if (( IsDetachedBuffer ( new ) === true )){
		 try{
			var output = randominput.slice(start,end);
			 return;
		}catch(e){
			new TestCase("arraybuffer_prototype_slice", "arraybuffer_prototype_slice", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
	if (( SameValue ( new , O ) === true )){
		 try{
			var output = randominput.slice(start,end);
			 return;
		}catch(e){
			new TestCase("arraybuffer_prototype_slice", "arraybuffer_prototype_slice", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
	if (( IsDetachedBuffer ( O ) === true )){
		 try{
			var output = randominput.slice(start,end);
			 return;
		}catch(e){
			new TestCase("arraybuffer_prototype_slice", "arraybuffer_prototype_slice", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
	var fromBuf = O;
	var toBuf = new;
}


function test_clonearraybuffer(srcBuffer,srcByteOffset,srcLength,cloneConstructor){
	new TestCase("clonearraybuffer", "clonearraybuffer", typeof ( srcBuffer ) ,  "object" && it has an [[ArrayBufferData]] internal slot);
		test();
		return;
	new TestCase("clonearraybuffer", "clonearraybuffer", IsConstructor ( cloneConstructor ) ,  true);
		test();
		return;
	var targetBuffer = AllocateArrayBuffer(cloneConstructor, srcLength);
	if (( IsDetachedBuffer ( srcBuffer ) === true )){
		 try{
			var output = ArrayBuffer.CloneArrayBuffer(srcBuffer,srcByteOffset,srcLength,cloneConstructor);
			 return;
		}catch(e){
			new TestCase("clonearraybuffer", "clonearraybuffer", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
	var srcBlock = srcBuffer;
	var targetBlock = targetBuffer;
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


function test_date(randominput){
	var numberOfArgs = arguments.length;
	new TestCase("date", "date", numberOfArgs ,  0);
		test();
		return;
	if ( typeof  NewTarget === 'undefined'  ) { 
		var now =Number that istime value (UTC) identyingcurrent time;
		var output = new Date(randominput).Date();
			new TestCase("date", "date", ToDateString ( now ), output);
			test();
			return;
	}

}


function test_date(randominput,value){
	var numberOfArgs = arguments.length;
	new TestCase("date", "date", numberOfArgs ,  1);
		test();
		return;
	if ( typeof  NewTarget === 'undefined'  ) { 
		var now =Number that istime value (UTC) identyingcurrent time;
		var output = new Date(randominput).Date(value);
			new TestCase("date", "date", ToDateString ( now ), output);
			test();
			return;
	}

}


function test_date(randominput,year,month,date,hours,minutes,seconds,ms){
	var numberOfArgs = arguments.length;
	new TestCase("date", "date", numberOfArgs ,  2);
		test();
		return;
	if ( typeof  NewTarget === 'undefined'  ) { 
		var now =Number that istime value (UTC) identyingcurrent time;
		var output = new Date(randominput).Date(year,month,date,hours,minutes,seconds,ms);
			new TestCase("date", "date", ToDateString ( now ), output);
			test();
			return;
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


function test_date_prototype_todatestring(randominput){
	var O = this Date object;
	var tv = thisTimeValue(O);
	if (Object.is( tv,NaN )){
		var output = new Date(randominput).toDateString();
		new TestCase("date_prototype_todatestring", "date_prototype_todatestring", "Invalid Date", output);
		test();
		return;
		}
	var t = LocalTime(tv);
}


function test_date_prototype_totimestring(randominput){
	var O = this Date object;
	var tv = thisTimeValue(O);
	if (Object.is( tv,NaN )){
		var output = new Date(randominput).toTimeString();
		new TestCase("date_prototype_totimestring", "date_prototype_totimestring", "Invalid Date", output);
		test();
		return;
		}
	var t = LocalTime(tv);
}


function test_date_prototype_toutcstring(randominput){
	var O = this Date object;
	var tv = thisTimeValue(O);
	if (Object.is( tv,NaN )){
		var output = new Date(randominput).toUTCString();
		new TestCase("date_prototype_toutcstring", "date_prototype_toutcstring", "Invalid Date", output);
		test();
		return;
		}
	var weekday =Name ofentry in Table 46 withNumber WeekDay(tv);
	var month =Name ofentry in Table 47 withNumber MonthFromTime(tv);
}


function test_getmodifysetvalueinbuffer(randominput,arrayBuffer,byteIndex,type,value,op,isLittleEndian){
	new TestCase("getmodifysetvalueinbuffer", "getmodifysetvalueinbuffer", IsSharedArrayBuffer ( arrayBuffer ) ,  true);
		test();
		return;
	new TestCase("getmodifysetvalueinbuffer", "getmodifysetvalueinbuffer", byteIndex ,  0);
		test();
		return;
	new TestCase("getmodifysetvalueinbuffer", "getmodifysetvalueinbuffer", typeof ( value ) ,   "number" );
		test();
		return;
	var block = arrayBuffer;
	var rawBytes = NumberToRawBytes(type, value, isLittleEndian);
	var execution =[[CandidateExecution]] field ofsurrounding agent's Agent Record;
	var rawBytesRead = a List of length elementSize of nondeterministically chosen byte values;
}


function test_getvaluefrombuffer( arrayBuffer, byteIndex, type, isTypedArray, order  , isLittleEndian  ){
	new TestCase("getvaluefrombuffer", "getvaluefrombuffer", IsDetachedBuffer ( arrayBuffer ) ,  false);
		test();
		return;
	new TestCase("getvaluefrombuffer", "getvaluefrombuffer", byteIndex ,  0);
		test();
		return;
	var block = arrayBuffer;
	if  ( IsSharedArrayBuffer ( arrayBuffer ) === true  ) { 
		var execution =[[CandidateExecution]] field ofsurrounding agent's Agent Record;
		if  ( isTypedArray === true && type === "Int8" , "Uint8" , "Int16" , "Uint16" , "Int32" , or "Uint32"  ) { 
			var noTear = true; otherwise let noTear;
		}
					
		var rawValue = a List of length elementSize of nondeterministically chosen byte values;
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
	var map = OrdinaryCreateFromConstructor(NewTarget, "%MapPrototype%", « [[MapData]] »);
	var adder = Get(map, "set");
	if (( IsCallable ( adder ) === false )){
		 try{
			var output = randominput.Map(iterable);
			 return;
		}catch(e){
			new TestCase("map", "map", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
	var iteratorRecord = GetIterator(iterable);
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
	if  ( thisArg === present  ) { 
		var T = thisArg;
	}

	else {
		var T = undefined;
	}

		if  ( e.[[Key]] != empty  ) { 
			Call ( callbackfn , T , « e.[[Value]] , e.[[Key]] , M » )
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
	entries.forEach(function( p ) ) { 
		if  ( p.[[Key]] != empty && SameValueZero ( p.[[Key]] , key ) === true  ) { 
			var output = randominput.set(key,value);
				new TestCase("map_prototype_set", "map_prototype_set", M, output);
				test();
				return;
	}
				
	if  ( key === - 0  ) { 
		var key = 0;
	}
						
	var p =Record { [[Key]]: key, [[Value]]: value };
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
	var x64 =converting x32 to a value in IEEE 754-2008 binary64 format;
}


function test_math_imul(x,y){
	var a = ToUint32(x);
	var b = ToUint32(y);
	var product = (a × b) modulo 2--EXP0--32--EXP1--;
	if (( product >=  Math.pow ( 2 , 31 ) )){
		var output = Math.imul(x,y);
		new TestCase("math_imul", "math_imul", product - Math.pow ( 2 , 32 ) ; else, output);
		test();
		return;
		}
}


function test_number(value){
		var n = 0;
	else {
		var n = ToNumber(value);
	}

	if (( typeof  NewTarget === 'undefined' )){
		var output = Number.Number(value);
		new TestCase("number", "number", n, output);
		test();
		return;
		}
	var O = OrdinaryCreateFromConstructor(NewTarget, "%NumberPrototype%", « [[NumberData]] »);
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


function test_number_prototype_toexponential(randominput,fractionDigits){
	var x = thisNumberValue(randominput);
	var f = ToInteger(fractionDigits);
	new TestCase("number_prototype_toexponential", "number_prototype_toexponential", typeof f ,  0 , when fractionDigits );
		test();
		return;
	if (Object.is( x,NaN )){
		var output = Number(randominput).toExponential(fractionDigits);
		new TestCase("number_prototype_toexponential", "number_prototype_toexponential", "NaN", output);
		test();
		return;
		}
	var s ="";
	if  ( x < 0  ) { 
		var s = "-";
		var x = -x;
	}

	if (( f < 0 || f > 100 )){
		 try{
			var output = Number(randominput).toExponential(fractionDigits);
			 return;
		}catch(e){
			new TestCase("number_prototype_toexponential", "number_prototype_toexponential", true, eval(e instanceof RangeError));
			test();
			return;
		}
	}
	if  ( x = 0  ) { 
		var m =String value consisting of f+1 occurrences ofcode unit 0x0030 (DIGIT ZERO);
		var e = 0;
	}

}


function test_number_prototype_toprecision(randominput,precision){
	var x = thisNumberValue(randominput);
	if (( typeof  precision === 'undefined' )){
		var output = Number(randominput).toPrecision(precision);
		new TestCase("number_prototype_toprecision", "number_prototype_toprecision", ToString ( x ), output);
		test();
		return;
		}
	var p = ToInteger(precision);
	if (Object.is( x,NaN )){
		var output = Number(randominput).toPrecision(precision);
		new TestCase("number_prototype_toprecision", "number_prototype_toprecision", "NaN", output);
		test();
		return;
		}
	var s ="";
	if  ( x < 0  ) { 
		var s =code unit 0x002D (HYPHEN-MINUS);
		var x = -x;
	}

	if (( p < 1 || p > 100 )){
		 try{
			var output = Number(randominput).toPrecision(precision);
			 return;
		}catch(e){
			new TestCase("number_prototype_toprecision", "number_prototype_toprecision", true, eval(e instanceof RangeError));
			test();
			return;
		}
	}
	if  ( x = 0  ) { 
		var m =String value consisting of p occurrences ofcode unit 0x0030 (DIGIT ZERO);
		var e = 0;
	}

	else if ( x!= 0 ) {
		if  ( e < - 6 || e >=  p  ) { 
			new TestCase("number_prototype_toprecision", "number_prototype_toprecision", e,  0);
				test();
				return;
			if  ( p!= 1  ) { 
				var a =first element of m, and let b;
				var m =string-concatenation of a, ";
			}
							
			if  ( e > 0  ) { 
				var c =code unit 0x002B (PLUS SIGN);
			}
									
			else if ( e < 0 ) {
				var c =code unit 0x002D (HYPHEN-MINUS);
				var e = -e;
						}

					}

			}

}


function test_rawbytestonumber(type,rawBytes,isLittleEndian){
	if  ( type === "Float32"  ) { 
		if (Object.is( value,an IEEE 754- 2008 binary32 NaN value )){
			var output = Number.RawBytesToNumber(type,rawBytes,isLittleEndian);
			new TestCase("rawbytestonumber", "rawbytestonumber", NaN "number" value, output);
			test();
			return;
			}
	}

	if  ( type === "Float64"  ) { 
		if (Object.is( value,an IEEE 754- 2008 binary64 NaN value )){
			var output = Number.RawBytesToNumber(type,rawBytes,isLittleEndian);
			new TestCase("rawbytestonumber", "rawbytestonumber", NaN "number" value, output);
			test();
			return;
			}
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
	var set = OrdinaryCreateFromConstructor(NewTarget, "%SetPrototype%", « [[SetData]] »);
	var adder = Get(set, "add");
	if (( IsCallable ( adder ) === false )){
		 try{
			var output = randominput.Set(iterable);
			 return;
		}catch(e){
			new TestCase("set", "set", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
	var iteratorRecord = GetIterator(iterable);
}


function test_setviewvalue(randominput,view,requestIndex,isLittleEndian,type,value){
	if (( typeof ( view ) != "object" )){
		 try{
			var output = randominput.SetViewValue(view,requestIndex,isLittleEndian,type,value);
			 return;
		}catch(e){
			new TestCase("setviewvalue", "setviewvalue", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
	new TestCase("setviewvalue", "setviewvalue", view instanceof ArrayBuffer ,  true);
		test();
		return;
	var getIndex = ToIndex(requestIndex);
	var numberValue = ToNumber(value);
	var buffer = view;
	if (( IsDetachedBuffer ( buffer ) === true )){
		 try{
			var output = randominput.SetViewValue(view,requestIndex,isLittleEndian,type,value);
			 return;
		}catch(e){
			new TestCase("setviewvalue", "setviewvalue", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
	var viewOffset = view;
	var viewSize = view;
	if (( getIndex + elementSize > viewSize )){
		 try{
			var output = randominput.SetViewValue(view,requestIndex,isLittleEndian,type,value);
			 return;
		}catch(e){
			new TestCase("setviewvalue", "setviewvalue", true, eval(e instanceof RangeError));
			test();
			return;
		}
	}
	var bufferIndex = getIndex + viewOffset;
}


function test_string(randominput,value){
		var s = "";
	else {
		if (( typeof  NewTarget === 'undefined' && typeof ( value ) === Symbol )){
			var output = new String(randominput).String(value);
			new TestCase("string", "string", SymbolDescriptiveString ( value ), output);
			test();
			return;
			}
		var s = ToString(value);
	}

	if (( typeof  NewTarget === 'undefined' )){
		var output = new String(randominput).String(value);
		new TestCase("string", "string", s, output);
		test();
		return;
		}
}


function test_string_prototype_charat(randominput,pos){
	var O = RequireObjectCoercible(randominput);
	var S = ToString(O);
	var position = ToInteger(pos);
	var size =length of S;
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
	var size =length of S;
	if (( position < 0 || position >=  size )){
		var output = new String(randominput).charCodeAt(pos);
		new TestCase("string_prototype_charcodeat", "string_prototype_charcodeat", NaN, output);
		test();
		return;
		}
}


function test_string_prototype_codepointat(randominput,pos){
	var O = RequireObjectCoercible(randominput);
	var S = ToString(O);
	var position = ToInteger(pos);
	var size =length of S;
	if (( position < 0 || position >=  size )){
		var output = new String(randominput).codePointAt(pos);
		new TestCase("string_prototype_codepointat", "string_prototype_codepointat", undefined, output);
		test();
		return;
		}
	var first = S[position].charCodeAt();
	if (( first < 0xD800 || first > 0xDBFF || position + 1 = size )){
		var output = new String(randominput).codePointAt(pos);
		new TestCase("string_prototype_codepointat", "string_prototype_codepointat", first, output);
		test();
		return;
		}
	var second = S[position+1].charCodeAt();
	if (( second < 0xDC00 || second > 0xDFFF )){
		var output = new String(randominput).codePointAt(pos);
		new TestCase("string_prototype_codepointat", "string_prototype_codepointat", first, output);
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
	var len =length of S;
	if ( typeof  endPosition === 'undefined'  ) { 
		var pos = len;
	}

	else {
		var pos = ToInteger(endPosition);
	}

	var end = Math.min (Math.max (pos, 0), len);
	var searchLength =length of searchStr;
	var start = end - searchLength;
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
	var searchStr = ToString(searchString);
	var pos = ToInteger(position);
	var len =length of S;
	var start = Math.min (Math.max (pos, 0), len);
	var searchLen =length of searchStr;
}


function test_string_prototype_match(randominput,regexp){
	var O = RequireObjectCoercible(randominput);
	if ( typeof  regexp === neither 'undefined' nor null  ) { 
		var matcher = GetMethod(regexp, @@match);
		if ( typeof  matcher != 'undefined'  ) { 
			var output = new String(randominput).match(regexp);
				new TestCase("string_prototype_match", "string_prototype_match", ? Call ( matcher , regexp , « O » ), output);
				test();
				return;
	}
					
	var S = ToString(O);
	var rx = RegExpCreate(regexp, undefined);
}


function test_string_prototype_normalize(randominput,form){
	var O = RequireObjectCoercible(randominput);
	var S = ToString(O);
	if ( typeof  form != present or form === 'undefined'  ) { 
		var form = "NFC";
	}

	var f = ToString(form);
	if (( f != one of "NFC" , "NFD" , "NFKC" , or "NFKD" )){
		 try{
			var output = new String(randominput).normalize(form);
			 return;
		}catch(e){
			new TestCase("string_prototype_normalize", "string_prototype_normalize", true, eval(e instanceof RangeError));
			test();
			return;
		}
	}
}


function test_string_prototype_padend(randominput,maxLength,fillString){
	var O = RequireObjectCoercible(randominput);
	var S = ToString(O);
	var intMaxLength = ToLength(maxLength);
	var stringLength =length of S;
	if (( intMaxLength < stringLength )){
		var output = new String(randominput).padEnd(maxLength,fillString);
		new TestCase("string_prototype_padend", "string_prototype_padend", S, output);
		test();
		return;
		}
	if ( typeof  fillString === 'undefined'  ) { 
		var filler =String value consisting solely ofcode unit 0x0020 (SPACE);
	}

	else {
		var filler = ToString(fillString);
	}

	var fillLen = intMaxLength - stringLength;
}


function test_string_prototype_padstart(randominput,maxLength,fillString){
	var O = RequireObjectCoercible(randominput);
	var S = ToString(O);
	var intMaxLength = ToLength(maxLength);
	var stringLength =length of S;
	if (( intMaxLength < stringLength )){
		var output = new String(randominput).padStart(maxLength,fillString);
		new TestCase("string_prototype_padstart", "string_prototype_padstart", S, output);
		test();
		return;
		}
	if ( typeof  fillString === 'undefined'  ) { 
		var filler =String value consisting solely ofcode unit 0x0020 (SPACE);
	}

	else {
		var filler = ToString(fillString);
	}

	var fillLen = intMaxLength - stringLength;
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


function test_string_prototype_replace(randominput,searchValue,replaceValue){
	var O = RequireObjectCoercible(randominput);
	if ( typeof  searchValue === neither 'undefined' nor null  ) { 
		var replacer = GetMethod(searchValue, @@replace);
		if ( typeof  replacer != 'undefined'  ) { 
			var output = new String(randominput).replace(searchValue,replaceValue);
				new TestCase("string_prototype_replace", "string_prototype_replace", ? Call ( replacer , searchValue , « O , replaceValue » ), output);
				test();
				return;
			}

		}

	var functionalReplace = IsCallable(replaceValue);
	if  ( functionalReplace === false  ) { 
		var replaceValue = ToString(replaceValue);
	}

	if  ( functionalReplace === true  ) { 
		var replValue = Call(replaceValue, undefined, « matched, pos, string »);
		var replStr = ToString(replValue);
	}

	else {
		var captures = a new empty List;
		var replStr = GetSubstitution(matched, string, pos, captures, undefined, replaceValue);
	}

	var tailPos = pos +matched.length;
}


function test_string_prototype_search(randominput,regexp){
	var O = RequireObjectCoercible(randominput);
	if ( typeof  regexp === neither 'undefined' nor null  ) { 
		var searcher = GetMethod(regexp, @@search);
		if ( typeof  searcher != 'undefined'  ) { 
			var output = new String(randominput).search(regexp);
				new TestCase("string_prototype_search", "string_prototype_search", ? Call ( searcher , regexp , « O » ), output);
				test();
				return;
			}

		}

	var rx = RegExpCreate(regexp, undefined);
}


function test_string_prototype_split(randominput,separator,limit){
	var O = RequireObjectCoercible(randominput);
	if ( typeof  separator === neither 'undefined' nor null  ) { 
		var splitter = GetMethod(separator, @@split);
		if ( typeof  splitter != 'undefined'  ) { 
			var output = new String(randominput).split(separator,limit);
				new TestCase("string_prototype_split", "string_prototype_split", ? Call ( splitter , separator , « O , limit » ), output);
				test();
				return;
	}
					
	var S = ToString(O);
	var A = ArrayCreate(0);
	var lengthA = 0;
	if ( typeof  limit === 'undefined'  ) { 
		var lim = 2--EXP0--32--EXP1---1;
	}

	else {
		var lim = ToUint32(limit);
	}

	var s =length of S;
	var p = 0;
	var R = ToString(separator);
	if (( lim = 0 )){
		var output = new String(randominput).split(separator,limit);
		new TestCase("string_prototype_split", "string_prototype_split", A, output);
		test();
		return;
		}
	if ( typeof  separator === 'undefined'  ) { 
		CreateDataProperty ( A , "0" , S )
		var output = new String(randominput).split(separator,limit);
			new TestCase("string_prototype_split", "string_prototype_split", A, output);
			test();
			return;
	}

	if  ( s = 0  ) { 
		var z = SplitMatch(S, 0, R);
		if (( z != false )){
			var output = new String(randominput).split(separator,limit);
			new TestCase("string_prototype_split", "string_prototype_split", A, output);
			test();
			return;
			}
		CreateDataProperty ( A , "0" , S )
		var output = new String(randominput).split(separator,limit);
			new TestCase("string_prototype_split", "string_prototype_split", A, output);
			test();
			return;
	}

	var q = p;
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
	var len =length of S;
	var start = Math.min (Math.max (pos, 0), len);
	var searchLength =length of searchStr;
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


function test_typedarray( buffer  , byteOffset  , length   ){
	new TestCase("typedarray", "typedarray", typeof ( buffer ) ,  "object" && buffer has an [[ArrayBufferData]] internal slot);
		test();
		return;
	if (( typeof  NewTarget === 'undefined' )){
		 try{
			var output = new TypedArray ( buffer  , byteOffset  , length   );
			 return;
		}catch(e){
			new TestCase("typedarray", "typedarray", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
	var O = AllocateTypedArray(constructorName, NewTarget, "%TypedArrayPrototype%");
	var elementSize =Number value ofElement Size value in Table 56 for constructorName;
	var offset = ToIndex(byteOffset);
	if (( offset modulo elementSize!= 0 )){
		 try{
			var output = new TypedArray ( buffer  , byteOffset  , length   );
			 return;
		}catch(e){
			new TestCase("typedarray", "typedarray", true, eval(e instanceof RangeError));
			test();
			return;
		}
	}
	if ( typeof  length === present && length != 'undefined'  ) { 
		var newLength = ToIndex(length);
	}

	if (( IsDetachedBuffer ( buffer ) === true )){
		 try{
			var output = new TypedArray ( buffer  , byteOffset  , length   );
			 return;
		}catch(e){
			new TestCase("typedarray", "typedarray", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
	var bufferByteLength = buffer;
		if (( bufferByteLength modulo elementSize!= 0 )){
			 try{
				var output = new TypedArray ( buffer  , byteOffset  , length   );
				 return;
			}catch(e){
				new TestCase("typedarray", "typedarray", true, eval(e instanceof RangeError));
				test();
				return;
			}
		}
		var newByteLength = bufferByteLength - offset;
		if (( newByteLength < 0 )){
			 try{
				var output = new TypedArray ( buffer  , byteOffset  , length   );
				 return;
			}catch(e){
				new TestCase("typedarray", "typedarray", true, eval(e instanceof RangeError));
				test();
				return;
			}
		}
	else {
		var newByteLength = newLength × elementSize;
		if (( offset + newByteLength > bufferByteLength )){
			 try{
				var output = new TypedArray ( buffer  , byteOffset  , length   );
				 return;
			}catch(e){
				new TestCase("typedarray", "typedarray", true, eval(e instanceof RangeError));
				test();
				return;
			}
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
	var elementLength = ToIndex(length);
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
	var usingIterator = GetMethod(object, @@iterator);
	if ( typeof  usingIterator != 'undefined'  ) { 
		var values = IterableToList(object, usingIterator);
		var len = values.length;
		AllocateTypedArrayBuffer ( O , len )
		var k = 0;
		while ( k < len ) { 
			var Pk = ToString(k);
			var kValue =first element of values and remove that element from values;
			Set ( O , Pk , kValue , true )
			k = k + 1
		}
											
		new TestCase("typedarray", "typedarray", values ,  now an empty List);
			test();
			return;
		var output = new TypedArray ( object );
			new TestCase("typedarray", "typedarray", O, output);
			test();
			return;
	}

	var arrayLike = object;
	var len = ToLength( Get(arrayLike, "length"));
	AllocateTypedArrayBuffer ( O , len )
	var k = 0;
	while ( k < len ) { 
		var Pk = ToString(k);
		var kValue = Get(arrayLike, Pk);
		Set ( O , Pk , kValue , true )
		k = k + 1
	}

}


function test_typedarray( typedArray ){
	new TestCase("typedarray", "typedarray", typeof ( typedArray ) ,  "object" && typedArray has [[TypedArrayName]] internal slot);
		test();
		return;
	if (( typeof  NewTarget === 'undefined' )){
		 try{
			var output = new TypedArray ( typedArray );
			 return;
		}catch(e){
			new TestCase("typedarray", "typedarray", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
	var O = AllocateTypedArray(constructorName, NewTarget, "%TypedArrayPrototype%");
	var srcArray = typedArray;
	var srcData = srcArray;
	if (( IsDetachedBuffer ( srcData ) === true )){
		 try{
			var output = new TypedArray ( typedArray );
			 return;
		}catch(e){
			new TestCase("typedarray", "typedarray", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
	var elementType =String value ofElement Type value in Table 56 for constructorName;
	var elementLength = srcArray;
	var srcName =String value of srcArray;
	var srcType =String value ofElement Type value in Table 56 for srcName;
	var srcElementSize =Element Size value in Table 56 for srcName;
	var srcByteOffset = srcArray;
	var elementSize =Element Size value in Table 56 for constructorName;
	var byteLength = elementSize × elementLength;
	if  ( IsSharedArrayBuffer ( srcData ) === false  ) { 
		var bufferConstructor = SpeciesConstructor(srcData, %ArrayBuffer%);
	}

	else {
		var bufferConstructor = %ArrayBuffer%;
	}

	if  ( SameValue ( elementType , srcType ) === true  ) { 
		if (( IsDetachedBuffer ( srcData ) === true )){
			 try{
				var output = new TypedArray ( typedArray );
				 return;
			}catch(e){
				new TestCase("typedarray", "typedarray", true, eval(e instanceof TypeError));
				test();
				return;
			}
		}
		var data = CloneArrayBuffer(srcData, srcByteOffset, byteLength, bufferConstructor);
	}

	else {
		var data = AllocateArrayBuffer(bufferConstructor, byteLength);
		if (( IsDetachedBuffer ( srcData ) === true )){
			 try{
				var output = new TypedArray ( typedArray );
				 return;
			}catch(e){
				new TestCase("typedarray", "typedarray", true, eval(e instanceof TypeError));
				test();
				return;
			}
		}
		var srcByteIndex = srcByteOffset;
		var targetByteIndex = 0;
		var count = elementLength;
		while ( count > 0 ) { 
			var value = GetValueFromBuffer(srcData, srcByteIndex, srcType, true, "Unordered");
			SetValueInBuffer ( data , targetByteIndex , elementType , value , true , "Unordered" )
			count = count - 1
			}

		}

}


function test_validateatomicaccess( typedArray, requestIndex ){
	new TestCase("validateatomicaccess", "validateatomicaccess", typedArray ,  an "object" that instanceof ArrayBuffer );
		test();
		return;
	var accessIndex = ToIndex(requestIndex);
	var length = typedArray;
	new TestCase("validateatomicaccess", "validateatomicaccess", accessIndex ,  0);
		test();
		return;
	if (( accessIndex >=  length )){
		 try{
			var output = new ValidateAtomicAccess ( typedArray, requestIndex );
			 return;
		}catch(e){
			new TestCase("validateatomicaccess", "validateatomicaccess", true, eval(e instanceof RangeError));
			test();
			return;
		}
	}
}


function test_validatesharedintegertypedarray( typedArray  , onlyInt32  ){
	if (( typeof ( typedArray ) != "object" )){
		 try{
			var output = new ValidateSharedIntegerTypedArray ( typedArray  , onlyInt32  );
			 return;
		}catch(e){
			new TestCase("validatesharedintegertypedarray", "validatesharedintegertypedarray", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
	var typeName = typedArray;
	if  ( onlyInt32 === true  ) { 
		if (( typeName != "Int32Array" )){
			 try{
				var output = new ValidateSharedIntegerTypedArray ( typedArray  , onlyInt32  );
				 return;
			}catch(e){
				new TestCase("validatesharedintegertypedarray", "validatesharedintegertypedarray", true, eval(e instanceof TypeError));
				test();
				return;
			}
		}
	}

	new TestCase("validatesharedintegertypedarray", "validatesharedintegertypedarray", typedArray instanceof ArrayBuffer ,  true);
		test();
		return;
	var buffer = typedArray;
	if (( IsSharedArrayBuffer ( buffer ) === false )){
		 try{
			var output = new ValidateSharedIntegerTypedArray ( typedArray  , onlyInt32  );
			 return;
		}catch(e){
			new TestCase("validatesharedintegertypedarray", "validatesharedintegertypedarray", true, eval(e instanceof TypeError));
			test();
			return;
		}
	}
}
