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
	if (  typeof ( S ) === String ) {
		console.log("Good Test");
	}
	else { 
		console.log("Bad Test");
	} 
	if (  index === an integer such that 0 <= index <= Math.pow ( 2 , 53 ) - 1 ) {
		console.log("Good Test");
	}
	else { 
		console.log("Bad Test");
	} 
	if (  typeof ( unicode ) === Boolean ) {
		console.log("Good Test");
	}
	else { 
		console.log("Bad Test");
	} 
	if (( unicode === false )){
		var output = new String(randominput).AdvanceStringIndex(S,index,unicode);
		assert.strictEqual(index + 1, output);
		console.log("Good Test");
		return;
		}
	var length =S.length;
	if (( index + 1 >=  length )){
		var output = new String(randominput).AdvanceStringIndex(S,index,unicode);
		assert.strictEqual(index + 1, output);
		console.log("Good Test");
		return;
		}
	var first =numeric value ofcode unit at index index within S;
	if (( first < 0xD800 || first > 0xDBFF )){
		var output = new String(randominput).AdvanceStringIndex(S,index,unicode);
		assert.strictEqual(index + 1, output);
		console.log("Good Test");
		return;
		}
	var second =numeric value ofcode unit at index index+1 within S;
	if (( second < 0xDC00 || second > 0xDFFF )){
		var output = new String(randominput).AdvanceStringIndex(S,index,unicode);
		assert.strictEqual(index + 1, output);
		console.log("Good Test");
		return;
		}
	var output = new String(randominput).AdvanceStringIndex(S,index,unicode);
		assert.strictEqual(index + 2, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_allocatearraybuffer(constructor,byteLength){
	if (  byteLength === an integer value >=  0 ) {
		console.log("Good Test");
	}
	else { 
		console.log("Bad Test");
	} 
	var block = CreateByteDataBlock(byteLength);
	var output = ArrayBuffer.AllocateArrayBuffer(constructor,byteLength);
		assert.strictEqual(obj, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_allocatesharedarraybuffer(randominput,constructor,byteLength){
	if (  byteLength === nonnegative integer ) {
		console.log("Good Test");
	}
	else { 
		console.log("Bad Test");
	} 
	var block = CreateSharedByteDataBlock(byteLength);
	var output = new SharedArrayBuffer(randominput).AllocateSharedArrayBuffer(constructor,byteLength);
		assert.strictEqual(obj, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_array( ){
	var numberOfArgs = arguments.length;
	if (  numberOfArgs = 0 ) {
		console.log("Good Test");
	}
	else { 
		console.log("Bad Test");
	} 
	if  ( NewTarget === undefined  ) { 
		var newTarget = new Array ( );
	}

	else {
		var newTarget = NewTarget;
	}

	var proto = GetPrototypeFromConstructor(newTarget, "%ArrayPrototype%");
	var output = new Array ( );
		assert.strictEqual(ArrayCreate ( 0 , proto ), output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_array( items ){
	var numberOfArgs = arguments.length;
	if (  numberOfArgs >=  2 ) {
		console.log("Good Test");
	}
	else { 
		console.log("Bad Test");
	} 
	if  ( NewTarget === undefined  ) { 
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
		if (  defineStatus === true ) {
			console.log("Good Test");
		}
		else { 
			console.log("Bad Test");
		} 
		k = k + 1
	}

	var output = new Array ( items );
		assert.strictEqual(array, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_array( len ){
	var numberOfArgs = arguments.length;
	if (  numberOfArgs = 1 ) {
		console.log("Good Test");
	}
	else { 
		console.log("Bad Test");
	} 
	if  ( NewTarget === undefined  ) { 
		var newTarget = new Array ( len );
	}

	else {
		var newTarget = NewTarget;
	}

	var proto = GetPrototypeFromConstructor(newTarget, "%ArrayPrototype%");
	var array = ArrayCreate(0, proto);
	if  ( typeof ( len ) != "number"  ) { 
		var defineStatus = CreateDataProperty(array, "0", len);
		if (  defineStatus === true ) {
			console.log("Good Test");
		}
		else { 
			console.log("Bad Test");
		} 
		var intLen = 1;
	}

	else {
		var intLen = ToUint32(len);
		if (( intLen!= len )){
			 try{
				var output = new Array ( len );
				console.log("Bad Test/Failed Test");
				 return;
			}catch(e){
				assert.strictEqual(true, eval(e instanceof RangeError));
				console.log("Good Test");
				return;
			}
		}
	}

	Set ( array , "length" , intLen , true )
	var output = new Array ( len );
		assert.strictEqual(array, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_array_from(items,mapfn,thisArg){
	var C =randominput;
	if  ( mapfn === undefined  ) { 
		var mapping = false;
	}

	else {
		if (( IsCallable ( mapfn ) === false )){
			 try{
				var output = Array.from(items,mapfn,thisArg);
				console.log("Bad Test/Failed Test");
				 return;
			}catch(e){
				assert.strictEqual(true, eval(e instanceof TypeError));
				console.log("Good Test");
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
	if  ( usingIterator != undefined  ) { 
		if  ( IsConstructor ( C ) === true  ) { 
			var A = Construct(C);
		}
				
		else {
			var A = ArrayCreate(0);
		}
						
		var iteratorRecord = GetIterator(items, sync, usingIterator);
		var k = 0;
		{
			if  ( k >=  Math.pow ( 2 , 53 ) - 1  ) { 
				var error = ThrowCompletion( TypeError );
				var output = Array.from(items,mapfn,thisArg);
					assert.strictEqual(? IteratorClose ( iteratorRecord , error ), output);
					console.log("Good Test");
					return;
			}
												
			var Pk = ToString(k);
			var next = IteratorStep(iteratorRecord);
			if  ( next === false  ) { 
				? Set ( A , "length" , k , true )
				var output = Array.from(items,mapfn,thisArg);
					assert.strictEqual(A, output);
					console.log("Good Test");
					return;
			}
																	
			var nextValue = IteratorValue(next);
			if  ( mapping === true  ) { 
				var mappedValue = Call(mapfn, T, « nextValue, k »);
				if (( mappedValue === an abrupt completion )){
					var output = Array.from(items,mapfn,thisArg);
					assert.strictEqual(? IteratorClose ( iteratorRecord , mappedValue ), output);
					console.log("Good Test");
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
				assert.strictEqual(? IteratorClose ( iteratorRecord , defineStatus ), output);
				console.log("Good Test");
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
								
		? CreateDataPropertyOrThrow ( A , Pk , mappedValue )
		k = k + 1
	}

	? Set ( A , "length" , len , true )
	var output = Array.from(items,mapfn,thisArg);
		assert.strictEqual(A, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_array_of(items){
	var len =actual number of arguments passed to this function;
	var items =List of arguments passed to this function;
	var C =randominput;
	if  ( IsConstructor ( C ) === true  ) { 
		var A = Construct(C, « len »);
	}

	else {
		var A = ArrayCreate(len);
	}

	var k = 0;
	while ( k < len ) { 
		var kValue = items[k];
		var Pk = ToString(k);
		? CreateDataPropertyOrThrow ( A , Pk , kValue )
		k = k + 1
	}

	? Set ( A , "length" , len , true )
	var output = Array.of(items);
		assert.strictEqual(A, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_array_prototype_copywithin(randominput, target, start  , end  ){
	var O = ToObject(randominput);
	var len = ToLength( Get(O, "length"));
	var relativeTarget = ToInteger(target);
	if  ( relativeTarget < 0  ) { 
		var to = Math.max ((len + relativeTarget), 0);
	}

	else {
		var to = Math.min (relativeTarget, len);
	}

	var relativeStart = ToInteger(start);
	if  ( relativeStart < 0  ) { 
		var from = Math.max ((len + relativeStart), 0);
	}

	else {
		var from = Math.min (relativeStart, len);
	}

	if  ( end === undefined  ) { 
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

	var count = Math.min (final-from, len-to);
	if  ( from < to && to < from + count  ) { 
		var direction = -1;
		var from = from + count - 1;
		var to = to + count - 1;
	}

	else {
		var direction = 1;
	}

	while ( count > 0 ) { 
		var fromKey = ToString(from);
		var toKey = ToString(to);
		var fromPresent = HasProperty(O, fromKey);
		if  ( fromPresent === true  ) { 
			var fromVal = Get(O, fromKey);
			? Set ( O , toKey , fromVal , true )
		}
								
		{
			? DeletePropertyOrThrow ( O , toKey )
		}
										
		var from = from + direction;
		var to = to + direction;
		var count = count - 1;
	}

	var output = new Array(randominput).copyWithin( target, start  , end  );
		assert.strictEqual(O, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_array_prototype_every(randominput, callbackfn  , thisArg  ){
	var O = ToObject(randominput);
	var len = ToLength( Get(O, "length"));
	if (( IsCallable ( callbackfn ) === false )){
		 try{
			var output = new Array(randominput).every( callbackfn  , thisArg  );
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
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
				assert.strictEqual(false, output);
				console.log("Good Test");
				return;
				}
		}
								
		k = k + 1
	}

	var output = new Array(randominput).every( callbackfn  , thisArg  );
		assert.strictEqual(true, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_array_prototype_fill(randominput, value  , start  , end   ){
	var O = ToObject(randominput);
	var len = ToLength( Get(O, "length"));
	var relativeStart = ToInteger(start);
	if  ( relativeStart < 0  ) { 
		var k = Math.max ((len + relativeStart), 0);
	}

	else {
		var k = Math.min (relativeStart, len);
	}

	if  ( end === undefined  ) { 
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

	while ( k < final ) { 
		var Pk = ToString(k);
		? Set ( O , Pk , value , true )
		k = k + 1
	}

	var output = new Array(randominput).fill( value  , start  , end   );
		assert.strictEqual(O, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_array_prototype_filter(randominput, callbackfn  , thisArg  ){
	var O = ToObject(randominput);
	var len = ToLength( Get(O, "length"));
	if (( IsCallable ( callbackfn ) === false )){
		 try{
			var output = new Array(randominput).filter( callbackfn  , thisArg  );
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
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
				? CreateDataPropertyOrThrow ( A , ToString ( to ) , kValue )
				to = to + 1
		}
									
		k = k + 1
	}

	var output = new Array(randominput).filter( callbackfn  , thisArg  );
		assert.strictEqual(A, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_array_prototype_find(randominput, predicate  , thisArg  ){
	var O = ToObject(randominput);
	var len = ToLength( Get(O, "length"));
	if (( IsCallable ( predicate ) === false )){
		 try{
			var output = new Array(randominput).find( predicate  , thisArg  );
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
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
			assert.strictEqual(kValue, output);
			console.log("Good Test");
			return;
			}
		k = k + 1
	}

	var output = new Array(randominput).find( predicate  , thisArg  );
		assert.strictEqual(undefined, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_array_prototype_findindex(randominput, predicate  , thisArg  ){
	var O = ToObject(randominput);
	var len = ToLength( Get(O, "length"));
	if (( IsCallable ( predicate ) === false )){
		 try{
			var output = new Array(randominput).findIndex( predicate  , thisArg  );
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
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
			assert.strictEqual(k, output);
			console.log("Good Test");
			return;
			}
		k = k + 1
	}

	var output = new Array(randominput).findIndex( predicate  , thisArg  );
		assert.strictEqual(- 1, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_array_prototype_foreach(randominput, callbackfn  , thisArg  ){
	var O = ToObject(randominput);
	var len = ToLength( Get(O, "length"));
	if (( IsCallable ( callbackfn ) === false )){
		 try{
			var output = new Array(randominput).forEach( callbackfn  , thisArg  );
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
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
			? Call ( callbackfn , T , « kValue , k , O » )
		}
							
		k = k + 1
	}

	var output = new Array(randominput).forEach( callbackfn  , thisArg  );
		assert.strictEqual(undefined, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_array_prototype_includes(randominput, searchElement  , fromIndex  ){
	var O = ToObject(randominput);
	var len = ToLength( Get(O, "length"));
	if (( len === 0 )){
		var output = new Array(randominput).includes( searchElement  , fromIndex  );
		assert.strictEqual(false, output);
		console.log("Good Test");
		return;
		}
	var n = ToInteger(fromIndex);
	if  ( n >=  0  ) { 
		var k = n;
	}

		console.log("OK Test")
}


function test_array_prototype_indexof(randominput, searchElement  , fromIndex  ){
	var O = ToObject(randominput);
	var len = ToLength( Get(O, "length"));
	if (( len === 0 )){
		var output = new Array(randominput).indexOf( searchElement  , fromIndex  );
		assert.strictEqual(- 1, output);
		console.log("Good Test");
		return;
		}
	var n = ToInteger(fromIndex);
	if (( n >=  len )){
		var output = new Array(randominput).indexOf( searchElement  , fromIndex  );
		assert.strictEqual(- 1, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_array_prototype_join(randominput, separator ){
	var O = ToObject(randominput);
	var len = ToLength( Get(O, "length"));
	if  ( separator === undefined  ) { 
		var sep =single-element String ",";
	}

	else {
		var sep = ToString(separator);
	}

	var R ="";
	var k = 0;
	while ( k < len ) { 
		if  ( k > 0  ) { 
			var R =string-concatenation of R and sep;
		}
				
		var element = Get(O, ToString(k));
		k = k + 1
	}

	var output = new Array(randominput).join( separator );
		assert.strictEqual(R, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_array_prototype_lastindexof(randominput, searchElement  , fromIndex  ){
	var O = ToObject(randominput);
	var len = ToLength( Get(O, "length"));
	if (( len === 0 )){
		var output = new Array(randominput).lastIndexOf( searchElement  , fromIndex  );
		assert.strictEqual(- 1, output);
		console.log("Good Test");
		return;
		}
	if  ( fromIndex === present  ) { 
		var n = ToInteger(fromIndex);
	}

	else {
		var n = len-1;
	}

		console.log("OK Test")
}


function test_array_prototype_map(randominput, callbackfn  , thisArg  ){
	var O = ToObject(randominput);
	var len = ToLength( Get(O, "length"));
	if (( IsCallable ( callbackfn ) === false )){
		 try{
			var output = new Array(randominput).map( callbackfn  , thisArg  );
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
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
			? CreateDataPropertyOrThrow ( A , Pk , mappedValue )
		}
								
		k = k + 1
	}

	var output = new Array(randominput).map( callbackfn  , thisArg  );
		assert.strictEqual(A, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_array_prototype_pop(randominput, ){
	var O = ToObject(randominput);
	var len = ToLength( Get(O, "length"));
	if  ( len === zero  ) { 
		? Set ( O , "length" , 0 , true )
		var output = new Array(randominput).pop( );
			assert.strictEqual(undefined, output);
			console.log("Good Test");
			return;
	}

		console.log("OK Test")
}


function test_array_prototype_reduce(randominput, callbackfn  , initialValue  ){
	var O = ToObject(randominput);
	var len = ToLength( Get(O, "length"));
	if (( IsCallable ( callbackfn ) === false )){
		 try{
			var output = new Array(randominput).reduce( callbackfn  , initialValue  );
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	if (( len === 0 && initialValue != present )){
		 try{
			var output = new Array(randominput).reduce( callbackfn  , initialValue  );
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	var k = 0;
	var accumulator = undefined;
	{
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
				console.log("Bad Test/Failed Test");
				 return;
			}catch(e){
				assert.strictEqual(true, eval(e instanceof TypeError));
				console.log("Good Test");
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

	var output = new Array(randominput).reduce( callbackfn  , initialValue  );
		assert.strictEqual(accumulator, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_array_prototype_reduceright(randominput, callbackfn  , initialValue  ){
	var O = ToObject(randominput);
	var len = ToLength( Get(O, "length"));
	if (( IsCallable ( callbackfn ) === false )){
		 try{
			var output = new Array(randominput).reduceRight( callbackfn  , initialValue  );
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	if (( len === 0 && initialValue != present )){
		 try{
			var output = new Array(randominput).reduceRight( callbackfn  , initialValue  );
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	var k = len-1;
	var accumulator = undefined;
	{
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
				console.log("Bad Test/Failed Test");
				 return;
			}catch(e){
				assert.strictEqual(true, eval(e instanceof TypeError));
				console.log("Good Test");
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

	var output = new Array(randominput).reduceRight( callbackfn  , initialValue  );
		assert.strictEqual(accumulator, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_array_prototype_shift(randominput, ){
	var O = ToObject(randominput);
	var len = ToLength( Get(O, "length"));
	if  ( len === zero  ) { 
		? Set ( O , "length" , 0 , true )
		var output = new Array(randominput).shift( );
			assert.strictEqual(undefined, output);
			console.log("Good Test");
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
			? Set ( O , to , fromVal , true )
		}
								
		{
			? DeletePropertyOrThrow ( O , to )
		}
										
		k = k + 1
	}

	? DeletePropertyOrThrow ( O , ToString ( len- 1 ) )
	? Set ( O , "length" , len- 1 , true )
	var output = new Array(randominput).shift( );
		assert.strictEqual(first, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_array_prototype_slice(randominput, start, end ){
	var O = ToObject(randominput);
	var len = ToLength( Get(O, "length"));
	var relativeStart = ToInteger(start);
	if  ( relativeStart < 0  ) { 
		var k = Math.max ((len + relativeStart), 0);
	}

	else {
		var k = Math.min (relativeStart, len);
	}

	if  ( end === undefined  ) { 
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

	var count = Math.max (final - k, 0);
	var A = ArraySpeciesCreate(O, count);
	var n = 0;
	while ( k < final ) { 
		var Pk = ToString(k);
		var kPresent = HasProperty(O, Pk);
		if  ( kPresent === true  ) { 
			var kValue = Get(O, Pk);
			? CreateDataPropertyOrThrow ( A , ToString ( n ) , kValue )
		}
							
		k = k + 1
		n = n + 1
	}

	? Set ( A , "length" , n , true )
	var output = new Array(randominput).slice( start, end );
		assert.strictEqual(A, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_array_prototype_some(randominput, callbackfn  , thisArg  ){
	var O = ToObject(randominput);
	var len = ToLength( Get(O, "length"));
	if (( IsCallable ( callbackfn ) === false )){
		 try{
			var output = new Array(randominput).some( callbackfn  , thisArg  );
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
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
				assert.strictEqual(true, output);
				console.log("Good Test");
				return;
				}
		}
								
		k = k + 1
	}

	var output = new Array(randominput).some( callbackfn  , thisArg  );
		assert.strictEqual(false, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_array_prototype_tolocalestring(randominput,reserved1,reserved2){
	var array = ToObject(randominput);
	var len = ToLength( Get(array, "length"));
	var R ="";
	var k = 0;
	while ( k < len ) { 
		if  ( k > 0  ) { 
		var nextElement = Get(array, ToString(k));
		if  ( nextElement != undefined || null  ) { 
			var S = ToString( Invoke(nextElement, "toLocaleString"));
		}
						
		k = k + 1
	}

	var output = new String(randominput).toLocaleString(reserved1,reserved2);
		assert.strictEqual(R, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_array_prototype_tostring(randominput){
	var array = ToObject(randominput);
	var func = Get(array, "join");
	if  ( IsCallable ( func ) === false  ) { 
		var func =intrinsic function %ObjProto_toString%;
	}

	var output = new String(randominput).toString();
		assert.strictEqual(? Call ( func , array ), output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_array_prototype_unshift(randominput, items ){
	var O = ToObject(randominput);
	var len = ToLength( Get(O, "length"));
	var argCount =number of actual arguments;
	if  ( argCount > 0  ) { 
		if (( len + argCount > Math.pow ( 2 , 53 ) - 1 )){
			 try{
				var output = new Array(randominput).unshift( items );
				console.log("Bad Test/Failed Test");
				 return;
			}catch(e){
				assert.strictEqual(true, eval(e instanceof TypeError));
				console.log("Good Test");
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
				? Set ( O , to , fromValue , true )
			}
											
			{
				? DeletePropertyOrThrow ( O , to )
			}
													
			k = k - 1
		}
														
		var j = 0;
		while ( items != empty ) { 
			? Set ( O , ToString ( j ) , E , true )
			j = j + 1
	}
																		
	? Set ( O , "length" , len + argCount , true )
	var output = new Array(randominput).unshift( items );
		assert.strictEqual(len + argCount, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_arraybuffer(length){
	if (( NewTarget === undefined )){
		 try{
			var output = ArrayBuffer.ArrayBuffer(length);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	var byteLength = ToIndex(length);
	var output = ArrayBuffer.ArrayBuffer(length);
		assert.strictEqual(? AllocateArrayBuffer ( NewTarget , byteLength ), output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_arraybuffer_isview(arg){
	if (( typeof ( arg ) != "object" )){
		var output = ArrayBuffer.isView(arg);
		assert.strictEqual(false, output);
		console.log("Good Test");
		return;
		}
	if (( arg instanceof ArrayBuffer === true )){
		var output = ArrayBuffer.isView(arg);
		assert.strictEqual(true, output);
		console.log("Good Test");
		return;
		}
	var output = ArrayBuffer.isView(arg);
		assert.strictEqual(false, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_arraybuffer_prototype_slice(randominput,start,end){
	var O =randominput;
	if (( typeof ( O ) != "object" )){
		 try{
			var output = randominput.slice(start,end);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	if (( O instanceof ArrayBuffer === false )){
		 try{
			var output = randominput.slice(start,end);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	if (( IsSharedArrayBuffer ( O ) === true )){
		 try{
			var output = randominput.slice(start,end);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	if (( IsDetachedBuffer ( O ) === true )){
		 try{
			var output = randominput.slice(start,end);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
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

	if  ( end === undefined  ) { 
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
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	if (( IsSharedArrayBuffer ( new ) === true )){
		 try{
			var output = randominput.slice(start,end);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	if (( IsDetachedBuffer ( new ) === true )){
		 try{
			var output = randominput.slice(start,end);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	if (( SameValue ( new , O ) === true )){
		 try{
			var output = randominput.slice(start,end);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	if (( IsDetachedBuffer ( O ) === true )){
		 try{
			var output = randominput.slice(start,end);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	var fromBuf = O;
	var toBuf = new;
	var output = randominput.slice(start,end);
		assert.strictEqual(new, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_atomicreadmodifywrite( typedArray, index, value, op ){
	var buffer = ValidateSharedIntegerTypedArray(typedArray);
	var i = ValidateAtomicAccess(typedArray, index);
	var v = ToInteger(value);
	var arrayTypeName = typedArray;
	var elementType =String value ofElement Type value in Table 56 for arrayTypeName;
	var offset = typedArray;
	var indexedPosition = (i × elementSize) + offset;
	var output = new AtomicReadModifyWrite ( typedArray, index, value, op );
		assert.strictEqual(GetModySetValueInBuffer ( buffer , indexedPosition , elementType , v , op ), output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_atomics_wait(typedArray,index,value,timeout){
	var buffer = ValidateSharedIntegerTypedArray(typedArray, true);
	var i = ValidateAtomicAccess(typedArray, index);
	var v = ToInt32(value);
	var q = ToNumber(timeout);
		var t = +Infinity;
	else {
		var t = Math.max (q, 0);
	}

	var B = AgentCanSuspend();
	var block = buffer;
	var offset = typedArray;
	var indexedPosition = (i × 4) + offset;
	var WL = GetWaiterList(block, indexedPosition);
	EnterCriticalSection ( WL )
	var w = AtomicLoad(typedArray, i);
		LeaveCriticalSection ( WL )
	var W = AgentSignier();
	AddWaiter ( WL , W )
	var awoken = Suspend(WL, W, t);
		if (  W != on list of waiters in WL ) {
			console.log("Good Test");
		}
		else { 
			console.log("Bad Test");
		} 
	else {
		RemoveWaiter ( WL , W )
	}

	LeaveCriticalSection ( WL )
		console.log("OK Test")
}


function test_atomics_wake(typedArray,index,count){
	var buffer = ValidateSharedIntegerTypedArray(typedArray, true);
	var i = ValidateAtomicAccess(typedArray, index);
	if  ( count === undefined  ) { 
		var c = +Infinity;
	}

	else {
		var intCount = ToInteger(count);
		var c = Math.max (intCount, 0);
	}

	var block = buffer;
	var offset = typedArray;
	var indexedPosition = (i × 4) + offset;
	var WL = GetWaiterList(block, indexedPosition);
	var n = 0;
	EnterCriticalSection ( WL )
	var S = RemoveWaiters(WL, c);
	while ( S != an empty List ) { 
		var W =first agent in S;
		WakeWaiter ( WL , W )
	}

	LeaveCriticalSection ( WL )
	var output = Array.wake(typedArray,index,count);
		assert.strictEqual(n, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_clonearraybuffer(srcBuffer,srcByteOffset,srcLength,cloneConstructor){
	if (  typeof ( srcBuffer ) === "object" && it has an [[ArrayBufferData]] internal slot ) {
		console.log("Good Test");
	}
	else { 
		console.log("Bad Test");
	} 
	if (  IsConstructor ( cloneConstructor ) === true ) {
		console.log("Good Test");
	}
	else { 
		console.log("Bad Test");
	} 
	var targetBuffer = AllocateArrayBuffer(cloneConstructor, srcLength);
	if (( IsDetachedBuffer ( srcBuffer ) === true )){
		 try{
			var output = ArrayBuffer.CloneArrayBuffer(srcBuffer,srcByteOffset,srcLength,cloneConstructor);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	var srcBlock = srcBuffer;
	var targetBlock = targetBuffer;
	var output = ArrayBuffer.CloneArrayBuffer(srcBuffer,srcByteOffset,srcLength,cloneConstructor);
		assert.strictEqual(targetBuffer, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_createarrayiterator( array, kind ){
	if (  typeof ( array ) === Object ) {
		console.log("Good Test");
	}
	else { 
		console.log("Bad Test");
	} 
	var output = new CreateArrayIterator ( array, kind );
		assert.strictEqual(iterator, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_createmapiterator(randominput,map,kind){
	if (( typeof ( map ) != "object" )){
		 try{
			var output = randominput.CreateMapIterator(map,kind);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	if (( map instanceof Map === false )){
		 try{
			var output = randominput.CreateMapIterator(map,kind);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	var output = randominput.CreateMapIterator(map,kind);
		assert.strictEqual(iterator, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_createsetiterator(randominput,set,kind){
	if (( typeof ( set ) != "object" )){
		 try{
			var output = randominput.CreateSetIterator(set,kind);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	var output = randominput.CreateSetIterator(set,kind);
		assert.strictEqual(iterator, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_createstringiterator(randominput,string){
	if (  typeof ( string ) === String ) {
		console.log("Good Test");
	}
	else { 
		console.log("Bad Test");
	} 
	var output = new String(randominput).CreateStringIterator(string);
		assert.strictEqual(iterator, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_date(randominput){
	var numberOfArgs = arguments.length;
	if (  numberOfArgs = 0 ) {
		console.log("Good Test");
	}
	else { 
		console.log("Bad Test");
	} 
	if  ( NewTarget === undefined  ) { 
		var now =Number that istime value (UTC) identyingcurrent time;
		var output = new Date(randominput).Date();
			assert.strictEqual(ToDateString ( now ), output);
			console.log("Good Test");
			return;
	}

		console.log("OK Test")
}


function test_date(randominput,value){
	var numberOfArgs = arguments.length;
	if (  numberOfArgs = 1 ) {
		console.log("Good Test");
	}
	else { 
		console.log("Bad Test");
	} 
	if  ( NewTarget === undefined  ) { 
		var now =Number that istime value (UTC) identyingcurrent time;
		var output = new Date(randominput).Date(value);
			assert.strictEqual(ToDateString ( now ), output);
			console.log("Good Test");
			return;
	}

		console.log("OK Test")
}


function test_date(randominput,year,month,date,hours,minutes,seconds,ms){
	var numberOfArgs = arguments.length;
	if (  numberOfArgs >=  2 ) {
		console.log("Good Test");
	}
	else { 
		console.log("Bad Test");
	} 
	if  ( NewTarget === undefined  ) { 
		var now =Number that istime value (UTC) identyingcurrent time;
		var output = new Date(randominput).Date(year,month,date,hours,minutes,seconds,ms);
			assert.strictEqual(ToDateString ( now ), output);
			console.log("Good Test");
			return;
	}

		console.log("OK Test")
}


function test_date_prototype_getdate(randominput){
	var t = thisTimeValue(randominput);
	if (Object.is( t,NaN )){
		var output = new Date(randominput).getDate();
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	var output = new Date(randominput).getDate();
		assert.strictEqual(DateFromTime ( LocalTime ( t ) ), output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_date_prototype_getday(randominput){
	var t = thisTimeValue(randominput);
	if (Object.is( t,NaN )){
		var output = new Date(randominput).getDay();
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	var output = new Date(randominput).getDay();
		assert.strictEqual(WeekDay ( LocalTime ( t ) ), output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_date_prototype_getfullyear(randominput){
	var t = thisTimeValue(randominput);
	if (Object.is( t,NaN )){
		var output = new Date(randominput).getFullYear();
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	var output = new Date(randominput).getFullYear();
		assert.strictEqual(YearFromTime ( LocalTime ( t ) ), output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_date_prototype_gethours(randominput){
	var t = thisTimeValue(randominput);
	if (Object.is( t,NaN )){
		var output = new Date(randominput).getHours();
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	var output = new Date(randominput).getHours();
		assert.strictEqual(HourFromTime ( LocalTime ( t ) ), output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_date_prototype_getmilliseconds(randominput){
	var t = thisTimeValue(randominput);
	if (Object.is( t,NaN )){
		var output = new Date(randominput).getMilliseconds();
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	var output = new Date(randominput).getMilliseconds();
		assert.strictEqual(msFromTime ( LocalTime ( t ) ), output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_date_prototype_getminutes(randominput){
	var t = thisTimeValue(randominput);
	if (Object.is( t,NaN )){
		var output = new Date(randominput).getMinutes();
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	var output = new Date(randominput).getMinutes();
		assert.strictEqual(MinFromTime ( LocalTime ( t ) ), output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_date_prototype_getmonth(randominput){
	var t = thisTimeValue(randominput);
	if (Object.is( t,NaN )){
		var output = new Date(randominput).getMonth();
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	var output = new Date(randominput).getMonth();
		assert.strictEqual(MonthFromTime ( LocalTime ( t ) ), output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_date_prototype_getseconds(randominput){
	var t = thisTimeValue(randominput);
	if (Object.is( t,NaN )){
		var output = new Date(randominput).getSeconds();
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	var output = new Date(randominput).getSeconds();
		assert.strictEqual(SecFromTime ( LocalTime ( t ) ), output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_date_prototype_gettimezoneoffset(randominput){
	var t = thisTimeValue(randominput);
	if (Object.is( t,NaN )){
		var output = new Date(randominput).getTimezoneOffset();
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	var output = new Date(randominput).getTimezoneOffset();
		assert.strictEqual(( t - LocalTime ( t ) ) / msPerMinute, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_date_prototype_getutcdate(randominput){
	var t = thisTimeValue(randominput);
	if (Object.is( t,NaN )){
		var output = new Date(randominput).getUTCDate();
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	var output = new Date(randominput).getUTCDate();
		assert.strictEqual(DateFromTime ( t ), output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_date_prototype_getutcday(randominput){
	var t = thisTimeValue(randominput);
	if (Object.is( t,NaN )){
		var output = new Date(randominput).getUTCDay();
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	var output = new Date(randominput).getUTCDay();
		assert.strictEqual(WeekDay ( t ), output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_date_prototype_getutcfullyear(randominput){
	var t = thisTimeValue(randominput);
	if (Object.is( t,NaN )){
		var output = new Date(randominput).getUTCFullYear();
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	var output = new Date(randominput).getUTCFullYear();
		assert.strictEqual(YearFromTime ( t ), output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_date_prototype_getutchours(randominput){
	var t = thisTimeValue(randominput);
	if (Object.is( t,NaN )){
		var output = new Date(randominput).getUTCHours();
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	var output = new Date(randominput).getUTCHours();
		assert.strictEqual(HourFromTime ( t ), output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_date_prototype_getutcmilliseconds(randominput){
	var t = thisTimeValue(randominput);
	if (Object.is( t,NaN )){
		var output = new Date(randominput).getUTCMilliseconds();
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	var output = new Date(randominput).getUTCMilliseconds();
		assert.strictEqual(msFromTime ( t ), output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_date_prototype_getutcminutes(randominput){
	var t = thisTimeValue(randominput);
	if (Object.is( t,NaN )){
		var output = new Date(randominput).getUTCMinutes();
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	var output = new Date(randominput).getUTCMinutes();
		assert.strictEqual(MinFromTime ( t ), output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_date_prototype_getutcmonth(randominput){
	var t = thisTimeValue(randominput);
	if (Object.is( t,NaN )){
		var output = new Date(randominput).getUTCMonth();
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	var output = new Date(randominput).getUTCMonth();
		assert.strictEqual(MonthFromTime ( t ), output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_date_prototype_getutcseconds(randominput){
	var t = thisTimeValue(randominput);
	if (Object.is( t,NaN )){
		var output = new Date(randominput).getUTCSeconds();
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	var output = new Date(randominput).getUTCSeconds();
		assert.strictEqual(SecFromTime ( t ), output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_date_prototype_setutcfullyear(randominput,year,month,date){
	var t = thisTimeValue(randominput);
	if Object.is( t,NaN  ) { 
		var t = 0;
	}

	var y = ToNumber(year);
	var newDate = MakeDate(MakeDay(y, m, dt), TimeWithinDay(t));
	var v = TimeClip(newDate);
	var output = new Date(randominput).setUTCFullYear(year,month,date);
		assert.strictEqual(v, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_date_prototype_setutcminutes(randominput,min,sec,ms){
	var t = thisTimeValue(randominput);
	var m = ToNumber(min);
	if  ( sec != present  ) { 
		var s = SecFromTime(t);
	}

	else {
		var s = ToNumber(sec);
	}

	if  ( ms != present  ) { 
		var milli = msFromTime(t);
	}

	else {
		var milli = ToNumber(ms);
	}

	var date = MakeDate(Day(t), MakeTime(HourFromTime(t), m, s, milli));
	var v = TimeClip(date);
	var output = new Date(randominput).setUTCMinutes(min,sec,ms);
		assert.strictEqual(v, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_date_prototype_setutcmonth(randominput,month,date){
	var t = thisTimeValue(randominput);
	var m = ToNumber(month);
	if  ( date != present  ) { 
		var dt = DateFromTime(t);
	}

	else {
		var dt = ToNumber(date);
	}

	var newDate = MakeDate(MakeDay(YearFromTime(t), m, dt), TimeWithinDay(t));
	var v = TimeClip(newDate);
	var output = new Date(randominput).setUTCMonth(month,date);
		assert.strictEqual(v, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_date_prototype_setutcseconds(randominput,sec,ms){
	var t = thisTimeValue(randominput);
	var s = ToNumber(sec);
	if  ( ms != present  ) { 
		var milli = msFromTime(t);
	}

	else {
		var milli = ToNumber(ms);
	}

	var date = MakeDate(Day(t), MakeTime(HourFromTime(t), MinFromTime(t), s, milli));
	var v = TimeClip(date);
	var output = new Date(randominput).setUTCSeconds(sec,ms);
		assert.strictEqual(v, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_date_prototype_todatestring(randominput){
	var O = this Date object;
	var tv = thisTimeValue(O);
	if (Object.is( tv,NaN )){
		var output = new Date(randominput).toDateString();
		assert.strictEqual("Invalid Date", output);
		console.log("Good Test");
		return;
		}
	var t = LocalTime(tv);
	var output = new Date(randominput).toDateString();
		assert.strictEqual(DateString ( t ), output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_date_prototype_totimestring(randominput){
	var O = this Date object;
	var tv = thisTimeValue(O);
	if (Object.is( tv,NaN )){
		var output = new Date(randominput).toTimeString();
		assert.strictEqual("Invalid Date", output);
		console.log("Good Test");
		return;
		}
	var t = LocalTime(tv);
		console.log("OK Test")
}


function test_date_prototype_toutcstring(randominput){
	var O = this Date object;
	var tv = thisTimeValue(O);
	if (Object.is( tv,NaN )){
		var output = new Date(randominput).toUTCString();
		assert.strictEqual("Invalid Date", output);
		console.log("Good Test");
		return;
		}
	var weekday =Name ofentry in Table 46 withNumber WeekDay(tv);
	var month =Name ofentry in Table 47 withNumber MonthFromTime(tv);
		console.log("OK Test")
}


function test_date_utc(randominput,year,month,date,hours,minutes,seconds,ms){
	var y = ToNumber(year);
	if  ( month === present  ) { 
		var m = ToNumber(month);
	}

	else {
		var m = 0;
	}

	if  ( date === present  ) { 
		var dt = ToNumber(date);
	}

	else {
		var dt = 1;
	}

	if  ( hours === present  ) { 
		var h = ToNumber(hours);
	}

	else {
		var h = 0;
	}

	if  ( minutes === present  ) { 
		var min = ToNumber(minutes);
	}

	else {
		var min = 0;
	}

	if  ( seconds === present  ) { 
		var s = ToNumber(seconds);
	}

	else {
		var s = 0;
	}

	if  ( ms === present  ) { 
		var milli = ToNumber(ms);
	}

	else {
		var milli = 0;
	}

	var output = new Date(randominput).UTC(year,month,date,hours,minutes,seconds,ms);
		assert.strictEqual(TimeClip ( MakeDate ( MakeDay ( yr , m , dt ) , MakeTime ( h , min , s , milli ) ) ), output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_detacharraybuffer(arrayBuffer,key){
	if (  IsSharedArrayBuffer ( arrayBuffer ) === false ) {
		console.log("Good Test");
	}
	else { 
		console.log("Bad Test");
	} 
	var output = ArrayBuffer.DetachArrayBuffer(arrayBuffer,key);
		assert.strictEqual(NormalCompletion ( null ), output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_getmodifysetvalueinbuffer(randominput,arrayBuffer,byteIndex,type,value,op,isLittleEndian){
	if (  IsSharedArrayBuffer ( arrayBuffer ) === true ) {
		console.log("Good Test");
	}
	else { 
		console.log("Bad Test");
	} 
	if (  byteIndex === an integer value >=  0 ) {
		console.log("Good Test");
	}
	else { 
		console.log("Bad Test");
	} 
	if (  typeof ( value ) === Number ) {
		console.log("Good Test");
	}
	else { 
		console.log("Bad Test");
	} 
	var block = arrayBuffer;
	var rawBytes = NumberToRawBytes(type, value, isLittleEndian);
	var execution =[[CandidateExecution]] field ofsurrounding agent's Agent Record;
	var rawBytesRead = a List of length elementSize of nondeterministically chosen byte values;
	var output = randominput.GetModifySetValueInBuffer(arrayBuffer,byteIndex,type,value,op,isLittleEndian);
		assert.strictEqual(RawBytesToNumber ( type , rawBytesRead , isLittleEndian ), output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_getvaluefrombuffer( arrayBuffer, byteIndex, type, isTypedArray, order  , isLittleEndian  ){
	if (  IsDetachedBuffer ( arrayBuffer ) === false ) {
		console.log("Good Test");
	}
	else { 
		console.log("Bad Test");
	} 
	if (  byteIndex === an integer value >=  0 ) {
		console.log("Good Test");
	}
	else { 
		console.log("Bad Test");
	} 
	var block = arrayBuffer;
	if  ( IsSharedArrayBuffer ( arrayBuffer ) === true  ) { 
		var execution =[[CandidateExecution]] field ofsurrounding agent's Agent Record;
		if  ( isTypedArray === true && type === "Int8" , "Uint8" , "Int16" , "Uint16" , "Int32" , or "Uint32"  ) { 
			var noTear = true; otherwise let noTear;
		}
					
		var rawValue = a List of length elementSize of nondeterministically chosen byte values;
	}

	var output = new GetValueFromBuffer ( arrayBuffer, byteIndex, type, isTypedArray, order  , isLittleEndian  );
		assert.strictEqual(RawBytesToNumber ( type , rawValue , isLittleEndian ), output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_issharedarraybuffer(randominput,obj){
	if (  typeof ( obj ) === "object" && it has an [[ArrayBufferData]] internal slot ) {
		console.log("Good Test");
	}
	else { 
		console.log("Bad Test");
	} 
	var bufferData = obj;
	if (  bufferData === Shared Data Block ) {
		console.log("Good Test");
	}
	else { 
		console.log("Bad Test");
	} 
	var output = new SharedArrayBuffer(randominput).IsSharedArrayBuffer(obj);
		assert.strictEqual(true, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_map(randominput,iterable){
	if (( NewTarget === undefined )){
		 try{
			var output = randominput.Map(iterable);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	var map = OrdinaryCreateFromConstructor(NewTarget, "%MapPrototype%", « [[MapData]] »);
	var adder = Get(map, "set");
	if (( IsCallable ( adder ) === false )){
		 try{
			var output = randominput.Map(iterable);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	var iteratorRecord = GetIterator(iterable);
		console.log("OK Test")
}


function test_map_prototype_clear(randominput){
	var M =randominput;
	if (( typeof ( M ) != "object" )){
		 try{
			var output = randominput.clear();
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	if (( M instanceof Map === false )){
		 try{
			var output = randominput.clear();
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	var output = randominput.clear();
		assert.strictEqual(undefined, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_map_prototype_delete(randominput,key){
	var M =randominput;
	if (( typeof ( M ) != "object" )){
		 try{
			var output = randominput.delete(key);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	if (( M instanceof Map === false )){
		 try{
			var output = randominput.delete(key);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
		console.log("OK Test")
}


function test_map_prototype_foreach(randominput,callbackfn,thisArg){
	var M =randominput;
	if (( typeof ( M ) != "object" )){
		 try{
			var output = randominput.forEach(callbackfn,thisArg);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	if (( M instanceof Map === false )){
		 try{
			var output = randominput.forEach(callbackfn,thisArg);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	if (( IsCallable ( callbackfn ) === false )){
		 try{
			var output = randominput.forEach(callbackfn,thisArg);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
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
			? Call ( callbackfn , T , « e.[[Value]] , e.[[Key]] , M » )
			}

		}

	var output = randominput.forEach(callbackfn,thisArg);
		assert.strictEqual(undefined, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_map_prototype_get(randominput,key){
	var M =randominput;
	if (( typeof ( M ) != "object" )){
		 try{
			var output = randominput.get(key);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	if (( M instanceof Map === false )){
		 try{
			var output = randominput.get(key);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	var output = randominput.get(key);
		assert.strictEqual(undefined, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_map_prototype_has(randominput,key){
	var M =randominput;
	if (( typeof ( M ) != "object" )){
		 try{
			var output = randominput.has(key);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	if (( M instanceof Map === false )){
		 try{
			var output = randominput.has(key);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	var output = randominput.has(key);
		assert.strictEqual(false, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_map_prototype_set(randominput,key,value){
	var M =randominput;
	if (( typeof ( M ) != "object" )){
		 try{
			var output = randominput.set(key,value);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	if (( M instanceof Map === false )){
		 try{
			var output = randominput.set(key,value);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	entries.forEach(function( p ) ) { 
		if  ( p.[[Key]] != empty && SameValueZero ( p.[[Key]] , key ) === true  ) { 
			var output = randominput.set(key,value);
				assert.strictEqual(M, output);
				console.log("Good Test");
				return;
	}
				
	if  ( key === - 0  ) { 
		var key = 0;
	}
						
	var p =Record { [[Key]]: key, [[Value]]: value };
	var output = randominput.set(key,value);
		assert.strictEqual(M, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


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


function test_math_imul(x,y){
	var a = ToUint32(x);
	var b = ToUint32(y);
	var product = (a × b) modulo 2--EXP0--32--EXP1--;
	if (( product >=  Math.pow ( 2 , 31 ) )){
		var output = Math.imul(x,y);
		assert.strictEqual(product - Math.pow ( 2 , 32 ) ; else, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_number(value){
		var n = 0;
	else {
		var n = ToNumber(value);
	}

	if (( NewTarget === undefined )){
		var output = Number.Number(value);
		assert.strictEqual(n, output);
		console.log("Good Test");
		return;
		}
	var O = OrdinaryCreateFromConstructor(NewTarget, "%NumberPrototype%", « [[NumberData]] »);
	var output = Number.Number(value);
		assert.strictEqual(O, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


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


function test_number_isinteger(number){
	if (( typeof ( number ) != "number" )){
		var output = Number.isInteger(number);
		assert.strictEqual(false, output);
		console.log("Good Test");
		return;
		}
	if ((Object.is( number,NaN) &&  number === + Infinity  &&  number ===- Infinity )){
		var output = Number.isInteger(number);
		assert.strictEqual(false, output);
		console.log("Good Test");
		return;
		}
	var integer = ToInteger(number);
	if (( integer != number )){
		var output = Number.isInteger(number);
		assert.strictEqual(false, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_number_isnan(number){
	if (( typeof ( number ) != "number" )){
		var output = Number.isNaN(number);
		assert.strictEqual(false, output);
		console.log("Good Test");
		return;
		}
	if (Object.is( number,NaN )){
		var output = Number.isNaN(number);
		assert.strictEqual(true, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_number_issafeinteger(number){
	if (( typeof ( number ) != "number" )){
		var output = Number.isSafeInteger(number);
		assert.strictEqual(false, output);
		console.log("Good Test");
		return;
		}
	if ((Object.is( number,NaN) &&  number === + Infinity  &&  number ===- Infinity )){
		var output = Number.isSafeInteger(number);
		assert.strictEqual(false, output);
		console.log("Good Test");
		return;
		}
	var integer = ToInteger(number);
	if (( integer != number )){
		var output = Number.isSafeInteger(number);
		assert.strictEqual(false, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_number_prototype_toexponential(randominput,fractionDigits){
	var x = thisNumberValue(randominput);
	var f = ToInteger(fractionDigits);
	if (  f === 0 , when fractionDigits === undefined ) {
		console.log("Good Test");
	}
	else { 
		console.log("Bad Test");
	} 
	if (Object.is( x,NaN )){
		var output = Number(randominput).toExponential(fractionDigits);
		assert.strictEqual("NaN", output);
		console.log("Good Test");
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
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof RangeError));
			console.log("Good Test");
			return;
		}
	}
	if  ( x = 0  ) { 
		var m =String value consisting of f+1 occurrences ofcode unit 0x0030 (DIGIT ZERO);
		var e = 0;
	}

		console.log("OK Test")
}


function test_number_prototype_toprecision(randominput,precision){
	var x = thisNumberValue(randominput);
	if (( precision === undefined )){
		var output = Number(randominput).toPrecision(precision);
		assert.strictEqual(ToString ( x ), output);
		console.log("Good Test");
		return;
		}
	var p = ToInteger(precision);
	if (Object.is( x,NaN )){
		var output = Number(randominput).toPrecision(precision);
		assert.strictEqual("NaN", output);
		console.log("Good Test");
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
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof RangeError));
			console.log("Good Test");
			return;
		}
	}
	if  ( x = 0  ) { 
		var m =String value consisting of p occurrences ofcode unit 0x0030 (DIGIT ZERO);
		var e = 0;
	}

	{
		if  ( e < - 6 || e >=  p  ) { 
			if (  e!= 0 ) {
				console.log("Good Test");
			}
			else { 
				console.log("Bad Test");
			} 
			if  ( p!= 1  ) { 
				var a =first element of m, and let b;
				var m =string-concatenation of a, ";
			}
							
			if  ( e > 0  ) { 
				var c =code unit 0x002B (PLUS SIGN);
			}
									
			{
				var c =code unit 0x002D (HYPHEN-MINUS);
				var e = -e;
						}

					}

			}

		console.log("OK Test")
}


function test_rawbytestonumber(type,rawBytes,isLittleEndian){
	if  ( type === "Float32"  ) { 
		if (Object.is( value,an IEEE 754- 2008 binary32 NaN value )){
			var output = Number.RawBytesToNumber(type,rawBytes,isLittleEndian);
			assert.strictEqual(NaN "number" value, output);
			console.log("Good Test");
			return;
			}
	}

	if  ( type === "Float64"  ) { 
		if (Object.is( value,an IEEE 754- 2008 binary64 NaN value )){
			var output = Number.RawBytesToNumber(type,rawBytes,isLittleEndian);
			assert.strictEqual(NaN "number" value, output);
			console.log("Good Test");
			return;
			}
	}

		console.log("OK Test")
}


function test_set(randominput,iterable){
	if (( NewTarget === undefined )){
		 try{
			var output = randominput.Set(iterable);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	var set = OrdinaryCreateFromConstructor(NewTarget, "%SetPrototype%", « [[SetData]] »);
	var adder = Get(set, "add");
	if (( IsCallable ( adder ) === false )){
		 try{
			var output = randominput.Set(iterable);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	var iteratorRecord = GetIterator(iterable);
		console.log("OK Test")
}


function test_setvalueinbuffer( arrayBuffer, byteIndex, type, value, isTypedArray, order  , isLittleEndian  ){
	if (  IsDetachedBuffer ( arrayBuffer ) === false ) {
		console.log("Good Test");
	}
	else { 
		console.log("Bad Test");
	} 
	if (  byteIndex === an integer value >=  0 ) {
		console.log("Good Test");
	}
	else { 
		console.log("Bad Test");
	} 
	if (  typeof ( value ) === Number ) {
		console.log("Good Test");
	}
	else { 
		console.log("Bad Test");
	} 
	var block = arrayBuffer;
	var rawBytes = NumberToRawBytes(type, value, isLittleEndian);
		console.log("OK Test")
}


function test_setviewvalue(randominput,view,requestIndex,isLittleEndian,type,value){
	if (( typeof ( view ) != "object" )){
		 try{
			var output = randominput.SetViewValue(view,requestIndex,isLittleEndian,type,value);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	if (  view instanceof ArrayBuffer === true ) {
		console.log("Good Test");
	}
	else { 
		console.log("Bad Test");
	} 
	var getIndex = ToIndex(requestIndex);
	var numberValue = ToNumber(value);
	var buffer = view;
	if (( IsDetachedBuffer ( buffer ) === true )){
		 try{
			var output = randominput.SetViewValue(view,requestIndex,isLittleEndian,type,value);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	var viewOffset = view;
	var viewSize = view;
	if (( getIndex + elementSize > viewSize )){
		 try{
			var output = randominput.SetViewValue(view,requestIndex,isLittleEndian,type,value);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof RangeError));
			console.log("Good Test");
			return;
		}
	}
	var bufferIndex = getIndex + viewOffset;
	var output = randominput.SetViewValue(view,requestIndex,isLittleEndian,type,value);
		assert.strictEqual(SetValueInBuffer ( buffer , bufferIndex , type , numberValue , false , "Unordered" , isLittleEndian ), output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_string(randominput,value){
		var s = "";
	else {
		if (( NewTarget === undefined && typeof ( value ) === Symbol )){
			var output = new String(randominput).String(value);
			assert.strictEqual(SymbolDescriptiveString ( value ), output);
			console.log("Good Test");
			return;
			}
		var s = ToString(value);
	}

	if (( NewTarget === undefined )){
		var output = new String(randominput).String(value);
		assert.strictEqual(s, output);
		console.log("Good Test");
		return;
		}
	var output = new String(randominput).String(value);
		assert.strictEqual(? StringCreate ( s , ? GetPrototypeFromConstructor ( NewTarget , "%StringPrototype%" ) ), output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_string_prototype_charat(randominput,pos){
	var O = RequireObjectCoercible(randominput);
	var S = ToString(O);
	var position = ToInteger(pos);
	var size =length of S;
	if (( position < 0 || position >=  size )){
		var output = new String(randominput).charAt(pos);
		assert.strictEqual("", output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_string_prototype_charcodeat(randominput,pos){
	var O = RequireObjectCoercible(randominput);
	var S = ToString(O);
	var position = ToInteger(pos);
	var size =length of S;
	if (( position < 0 || position >=  size )){
		var output = new String(randominput).charCodeAt(pos);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_string_prototype_codepointat(randominput,pos){
	var O = RequireObjectCoercible(randominput);
	var S = ToString(O);
	var position = ToInteger(pos);
	var size =length of S;
	if (( position < 0 || position >=  size )){
		var output = new String(randominput).codePointAt(pos);
		assert.strictEqual(undefined, output);
		console.log("Good Test");
		return;
		}
	var first =numeric value ofcode unit at index position withinString S;
	if (( first < 0xD800 || first > 0xDBFF || position + 1 = size )){
		var output = new String(randominput).codePointAt(pos);
		assert.strictEqual(first, output);
		console.log("Good Test");
		return;
		}
	var second =numeric value ofcode unit at index position+1 withinString S;
	if (( second < 0xDC00 || second > 0xDFFF )){
		var output = new String(randominput).codePointAt(pos);
		assert.strictEqual(first, output);
		console.log("Good Test");
		return;
		}
	var output = new String(randominput).codePointAt(pos);
		assert.strictEqual(UTF16Decode ( first , second ), output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_string_prototype_endswith(randominput,searchString,endPosition){
	var O = RequireObjectCoercible(randominput);
	var S = ToString(O);
	var isRegExp = IsRegExp(searchString);
	if (( isRegExp === true )){
		 try{
			var output = new String(randominput).endsWith(searchString,endPosition);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	var searchStr = ToString(searchString);
	var len =length of S;
	if  ( endPosition === undefined  ) { 
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
		assert.strictEqual(false, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_string_prototype_includes(randominput,searchString,position){
	var O = RequireObjectCoercible(randominput);
	var S = ToString(O);
	var isRegExp = IsRegExp(searchString);
	if (( isRegExp === true )){
		 try{
			var output = new String(randominput).includes(searchString,position);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	var searchStr = ToString(searchString);
	var pos = ToInteger(position);
	var len =length of S;
	var start = Math.min (Math.max (pos, 0), len);
	var searchLen =length of searchStr;
		console.log("OK Test")
}


function test_string_prototype_match(randominput,regexp){
	var O = RequireObjectCoercible(randominput);
	if  ( regexp === neither undefined nor null  ) { 
		var matcher = GetMethod(regexp, @@match);
		if  ( matcher != undefined  ) { 
			var output = new String(randominput).match(regexp);
				assert.strictEqual(? Call ( matcher , regexp , « O » ), output);
				console.log("Good Test");
				return;
	}
					
	var S = ToString(O);
	var rx = RegExpCreate(regexp, undefined);
	var output = new String(randominput).match(regexp);
		assert.strictEqual(? Invoke ( rx , @@match , « S » ), output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_string_prototype_normalize(randominput,form){
	var O = RequireObjectCoercible(randominput);
	var S = ToString(O);
	if  ( form != present or form === undefined  ) { 
		var form = "NFC";
	}

	var f = ToString(form);
	if (( f != one of "NFC" , "NFD" , "NFKC" , or "NFKD" )){
		 try{
			var output = new String(randominput).normalize(form);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof RangeError));
			console.log("Good Test");
			return;
		}
	}
	var output = new String(randominput).normalize(form);
		assert.strictEqual(ns, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_string_prototype_padend(randominput,maxLength,fillString){
	var O = RequireObjectCoercible(randominput);
	var S = ToString(O);
	var intMaxLength = ToLength(maxLength);
	var stringLength =length of S;
	if (( intMaxLength < stringLength )){
		var output = new String(randominput).padEnd(maxLength,fillString);
		assert.strictEqual(S, output);
		console.log("Good Test");
		return;
		}
	if  ( fillString === undefined  ) { 
		var filler =String value consisting solely ofcode unit 0x0020 (SPACE);
	}

	else {
		var filler = ToString(fillString);
	}

	var fillLen = intMaxLength - stringLength;
		console.log("OK Test")
}


function test_string_prototype_padstart(randominput,maxLength,fillString){
	var O = RequireObjectCoercible(randominput);
	var S = ToString(O);
	var intMaxLength = ToLength(maxLength);
	var stringLength =length of S;
	if (( intMaxLength < stringLength )){
		var output = new String(randominput).padStart(maxLength,fillString);
		assert.strictEqual(S, output);
		console.log("Good Test");
		return;
		}
	if  ( fillString === undefined  ) { 
		var filler =String value consisting solely ofcode unit 0x0020 (SPACE);
	}

	else {
		var filler = ToString(fillString);
	}

	var fillLen = intMaxLength - stringLength;
		console.log("OK Test")
}


function test_string_prototype_repeat(randominput,count){
	var O = RequireObjectCoercible(randominput);
	var S = ToString(O);
	var n = ToInteger(count);
	if (( n < 0 )){
		 try{
			var output = new String(randominput).repeat(count);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof RangeError));
			console.log("Good Test");
			return;
		}
	}
	if (( n === + Infinity )){
		 try{
			var output = new String(randominput).repeat(count);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof RangeError));
			console.log("Good Test");
			return;
		}
	}
	var output = new String(randominput).repeat(count);
		assert.strictEqual(T, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_string_prototype_replace(randominput,searchValue,replaceValue){
	var O = RequireObjectCoercible(randominput);
	if  ( searchValue === neither undefined nor null  ) { 
		var replacer = GetMethod(searchValue, @@replace);
		if  ( replacer != undefined  ) { 
			var output = new String(randominput).replace(searchValue,replaceValue);
				assert.strictEqual(? Call ( replacer , searchValue , « O , replaceValue » ), output);
				console.log("Good Test");
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
	var output = new String(randominput).replace(searchValue,replaceValue);
		assert.strictEqual(newString, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_string_prototype_search(randominput,regexp){
	var O = RequireObjectCoercible(randominput);
	if  ( regexp === neither undefined nor null  ) { 
		var searcher = GetMethod(regexp, @@search);
		if  ( searcher != undefined  ) { 
			var output = new String(randominput).search(regexp);
				assert.strictEqual(? Call ( searcher , regexp , « O » ), output);
				console.log("Good Test");
				return;
			}

		}

	var rx = RegExpCreate(regexp, undefined);
	var output = new String(randominput).search(regexp);
		assert.strictEqual(? Invoke ( rx , @@search , « string » ), output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_string_prototype_split(randominput,separator,limit){
	var O = RequireObjectCoercible(randominput);
	if  ( separator === neither undefined nor null  ) { 
		var splitter = GetMethod(separator, @@split);
		if  ( splitter != undefined  ) { 
			var output = new String(randominput).split(separator,limit);
				assert.strictEqual(? Call ( splitter , separator , « O , limit » ), output);
				console.log("Good Test");
				return;
	}
					
	var S = ToString(O);
	var A = ArrayCreate(0);
	var lengthA = 0;
	if  ( limit === undefined  ) { 
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
		assert.strictEqual(A, output);
		console.log("Good Test");
		return;
		}
	if  ( separator === undefined  ) { 
		CreateDataProperty ( A , "0" , S )
		var output = new String(randominput).split(separator,limit);
			assert.strictEqual(A, output);
			console.log("Good Test");
			return;
	}

	if  ( s = 0  ) { 
		var z = SplitMatch(S, 0, R);
		if (( z != false )){
			var output = new String(randominput).split(separator,limit);
			assert.strictEqual(A, output);
			console.log("Good Test");
			return;
			}
		CreateDataProperty ( A , "0" , S )
		var output = new String(randominput).split(separator,limit);
			assert.strictEqual(A, output);
			console.log("Good Test");
			return;
	}

	var q = p;
		console.log("OK Test")
}


function test_string_prototype_startswith(randominput,searchString,position){
	var O = RequireObjectCoercible(randominput);
	var S = ToString(O);
	var isRegExp = IsRegExp(searchString);
	if (( isRegExp === true )){
		 try{
			var output = new String(randominput).startsWith(searchString,position);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	var searchStr = ToString(searchString);
	var pos = ToInteger(position);
	var len =length of S;
	var start = Math.min (Math.max (pos, 0), len);
	var searchLength =length of searchStr;
		console.log("OK Test")
}


function test_typedarray( ){
	if (( NewTarget === undefined )){
		 try{
			var output = new TypedArray ( );
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	var output = new TypedArray ( );
		assert.strictEqual(? AllocateTypedArray ( constructorName , NewTarget , "%TypedArrayPrototype%" , 0 ), output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_typedarray( buffer  , byteOffset  , length   ){
	if (  typeof ( buffer ) === "object" && buffer has an [[ArrayBufferData]] internal slot ) {
		console.log("Good Test");
	}
	else { 
		console.log("Bad Test");
	} 
	if (( NewTarget === undefined )){
		 try{
			var output = new TypedArray ( buffer  , byteOffset  , length   );
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	var O = AllocateTypedArray(constructorName, NewTarget, "%TypedArrayPrototype%");
	var elementSize =Number value ofElement Size value in Table 56 for constructorName;
	var offset = ToIndex(byteOffset);
	if (( offset modulo elementSize!= 0 )){
		 try{
			var output = new TypedArray ( buffer  , byteOffset  , length   );
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof RangeError));
			console.log("Good Test");
			return;
		}
	}
	if  ( length === present && length != undefined  ) { 
		var newLength = ToIndex(length);
	}

	if (( IsDetachedBuffer ( buffer ) === true )){
		 try{
			var output = new TypedArray ( buffer  , byteOffset  , length   );
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	var bufferByteLength = buffer;
		if (( bufferByteLength modulo elementSize!= 0 )){
			 try{
				var output = new TypedArray ( buffer  , byteOffset  , length   );
				console.log("Bad Test/Failed Test");
				 return;
			}catch(e){
				assert.strictEqual(true, eval(e instanceof RangeError));
				console.log("Good Test");
				return;
			}
		}
		var newByteLength = bufferByteLength - offset;
		if (( newByteLength < 0 )){
			 try{
				var output = new TypedArray ( buffer  , byteOffset  , length   );
				console.log("Bad Test/Failed Test");
				 return;
			}catch(e){
				assert.strictEqual(true, eval(e instanceof RangeError));
				console.log("Good Test");
				return;
			}
		}
	else {
		var newByteLength = newLength × elementSize;
		if (( offset + newByteLength > bufferByteLength )){
			 try{
				var output = new TypedArray ( buffer  , byteOffset  , length   );
				console.log("Bad Test/Failed Test");
				 return;
			}catch(e){
				assert.strictEqual(true, eval(e instanceof RangeError));
				console.log("Good Test");
				return;
			}
		}
	}

	var output = new TypedArray ( buffer  , byteOffset  , length   );
		assert.strictEqual(O, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_typedarray( length ){
	if (  typeof ( length ) != Object ) {
		console.log("Good Test");
	}
	else { 
		console.log("Bad Test");
	} 
	if (( NewTarget === undefined )){
		 try{
			var output = new TypedArray ( length );
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	var elementLength = ToIndex(length);
	var output = new TypedArray ( length );
		assert.strictEqual(? AllocateTypedArray ( constructorName , NewTarget , "%TypedArrayPrototype%" , elementLength ), output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_typedarray( object ){
	if (( NewTarget === undefined )){
		 try{
			var output = new TypedArray ( object );
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	var O = AllocateTypedArray(constructorName, NewTarget, "%TypedArrayPrototype%");
	var usingIterator = GetMethod(object, @@iterator);
	if  ( usingIterator != undefined  ) { 
		var values = IterableToList(object, usingIterator);
		var len = values.length;
		? AllocateTypedArrayBuffer ( O , len )
		var k = 0;
		while ( k < len ) { 
			var Pk = ToString(k);
			var kValue =first element of values and remove that element from values;
			? Set ( O , Pk , kValue , true )
			k = k + 1
		}
											
		if (  values === now an empty List ) {
			console.log("Good Test");
		}
		else { 
			console.log("Bad Test");
		} 
		var output = new TypedArray ( object );
			assert.strictEqual(O, output);
			console.log("Good Test");
			return;
	}

	var arrayLike = object;
	var len = ToLength( Get(arrayLike, "length"));
	? AllocateTypedArrayBuffer ( O , len )
	var k = 0;
	while ( k < len ) { 
		var Pk = ToString(k);
		var kValue = Get(arrayLike, Pk);
		? Set ( O , Pk , kValue , true )
		k = k + 1
	}

	var output = new TypedArray ( object );
		assert.strictEqual(O, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_typedarray( typedArray ){
	if (  typeof ( typedArray ) === "object" && typedArray has [[TypedArrayName]] internal slot ) {
		console.log("Good Test");
	}
	else { 
		console.log("Bad Test");
	} 
	if (( NewTarget === undefined )){
		 try{
			var output = new TypedArray ( typedArray );
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	var O = AllocateTypedArray(constructorName, NewTarget, "%TypedArrayPrototype%");
	var srcArray = typedArray;
	var srcData = srcArray;
	if (( IsDetachedBuffer ( srcData ) === true )){
		 try{
			var output = new TypedArray ( typedArray );
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
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
				console.log("Bad Test/Failed Test");
				 return;
			}catch(e){
				assert.strictEqual(true, eval(e instanceof TypeError));
				console.log("Good Test");
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
				console.log("Bad Test/Failed Test");
				 return;
			}catch(e){
				assert.strictEqual(true, eval(e instanceof TypeError));
				console.log("Good Test");
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

	var output = new TypedArray ( typedArray );
		assert.strictEqual(O, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_typedarrayspeciescreate( exemplar, argumentList ){
	if (  exemplar === an "object" that has [[TypedArrayName]] internal slot ) {
		console.log("Good Test");
	}
	else { 
		console.log("Bad Test");
	} 
	var constructor = SpeciesConstructor(exemplar, defaultConstructor);
	var output = new TypedArraySpeciesCreate ( exemplar, argumentList );
		assert.strictEqual(? TypedArrayCreate ( constructor , argumentList ), output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_validateatomicaccess( typedArray, requestIndex ){
	if (  typedArray === an "object" that instanceof ArrayBuffer === true ) {
		console.log("Good Test");
	}
	else { 
		console.log("Bad Test");
	} 
	var accessIndex = ToIndex(requestIndex);
	var length = typedArray;
	if (  accessIndex >=  0 ) {
		console.log("Good Test");
	}
	else { 
		console.log("Bad Test");
	} 
	if (( accessIndex >=  length )){
		 try{
			var output = new ValidateAtomicAccess ( typedArray, requestIndex );
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof RangeError));
			console.log("Good Test");
			return;
		}
	}
	var output = new ValidateAtomicAccess ( typedArray, requestIndex );
		assert.strictEqual(accessIndex, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}


function test_validatesharedintegertypedarray( typedArray  , onlyInt32  ){
	if (( typeof ( typedArray ) != "object" )){
		 try{
			var output = new ValidateSharedIntegerTypedArray ( typedArray  , onlyInt32  );
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	var typeName = typedArray;
	if  ( onlyInt32 === true  ) { 
		if (( typeName != "Int32Array" )){
			 try{
				var output = new ValidateSharedIntegerTypedArray ( typedArray  , onlyInt32  );
				console.log("Bad Test/Failed Test");
				 return;
			}catch(e){
				assert.strictEqual(true, eval(e instanceof TypeError));
				console.log("Good Test");
				return;
			}
		}
	}

	if (  typedArray instanceof ArrayBuffer === true ) {
		console.log("Good Test");
	}
	else { 
		console.log("Bad Test");
	} 
	var buffer = typedArray;
	if (( IsSharedArrayBuffer ( buffer ) === false )){
		 try{
			var output = new ValidateSharedIntegerTypedArray ( typedArray  , onlyInt32  );
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	var output = new ValidateSharedIntegerTypedArray ( typedArray  , onlyInt32  );
		assert.strictEqual(buffer, output);
		console.log("Good Test");
		return;
		console.log("OK Test")
}
