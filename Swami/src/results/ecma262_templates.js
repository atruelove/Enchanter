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



function test_array( ){
	var numberOfArgs = arguments.length;
	if ( numberOfArgs = 0 ) {
		console.log("Good Test - Assert");
	}
	else { 
		console.log("Bad Test/Failed Test");
		return;
	} 
	if ( typeof  NewTarget === 'undefined'  ) { 
		var newTarget = new Array ( );
	}

	else {
		var newTarget = NewTarget;
	}

	var proto = GetPrototypeFromConstructor(newTarget, "%ArrayPrototype%");
		console.log("OK Test")
}


function test_array( items ){
	var numberOfArgs = arguments.length;
	if ( numberOfArgs >= 2 ) {
		console.log("Good Test - Assert");
	}
	else { 
		console.log("Bad Test/Failed Test");
		return;
	} 
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
		if ( defineStatus === true ) {
			console.log("Good Test - Assert");
		}
		else { 
			console.log("Bad Test/Failed Test");
			return;
		} 
		k = k + 1
	}

		console.log("OK Test")
}


function test_array( len ){
	var numberOfArgs = arguments.length;
	if ( numberOfArgs = 1 ) {
		console.log("Good Test - Assert");
	}
	else { 
		console.log("Bad Test/Failed Test");
		return;
	} 
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
		if ( defineStatus === true ) {
			console.log("Good Test - Assert");
		}
		else { 
			console.log("Bad Test/Failed Test");
			return;
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

		console.log("OK Test")
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
					assert.strictEqual(? IteratorClose ( iteratorRecord , error ), output);
					console.log("Good Test");
					return;
			}
												
			var Pk = ToString(k);
			var next = IteratorStep(iteratorRecord);
			if  ( next === false  ) { 
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
								
		k = k + 1
	}

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
				to = to + 1
		}
								
		k = k + 1
	}

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
		}
						
		k = k + 1
	}

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
		}
							
		k = k + 1
	}

		console.log("OK Test")
}


function test_array_prototype_pop(randominput, ){
	var O = ToObject(randominput);
	var len = ToLength( Get(O, "length"));
	if  ( len === zero  ) { 
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

		console.log("OK Test")
}


function test_array_prototype_shift(randominput, ){
	var O = ToObject(randominput);
	var len = ToLength( Get(O, "length"));
	if  ( len === zero  ) { 
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
		}
							
		else if ( fromPresent === false ) {
		k = k + 1
	}

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
			}
										
			else if ( fromPresent === false ) {
			k = k - 1
		}
												
		var j = 0;
		while ( items != empty ) { 
			j = j + 1
			}

		}

		console.log("OK Test")
}


function test_arraybuffer(length){
	if (( typeof  NewTarget === 'undefined' )){
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
	var w = AtomicLoad(typedArray, i);
	var W = AgentSignier();
	var awoken = Suspend(WL, W, t);
		if ( W != on list of waiters in WL ) {
			console.log("Good Test - Assert");
		}
		else { 
			console.log("Bad Test/Failed Test");
			return;
		} 
		console.log("OK Test")
}


function test_createarrayiterator( array, kind ){
	if ( typeof ( array ) ===  "object"  ) {
		console.log("Good Test - Assert");
	}
	else { 
		console.log("Bad Test/Failed Test");
		return;
	} 
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
		console.log("OK Test")
}


function test_createstringiterator(randominput,string){
	if ( typeof ( string ) ===  "string"  ) {
		console.log("Good Test - Assert");
	}
	else { 
		console.log("Bad Test/Failed Test");
		return;
	} 
		console.log("OK Test")
}


function test_date(randominput){
	var numberOfArgs = arguments.length;
	if ( numberOfArgs = 0 ) {
		console.log("Good Test - Assert");
	}
	else { 
		console.log("Bad Test/Failed Test");
		return;
	} 
	if ( typeof  NewTarget === 'undefined'  ) { 
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
	if ( numberOfArgs = 1 ) {
		console.log("Good Test - Assert");
	}
	else { 
		console.log("Bad Test/Failed Test");
		return;
	} 
	if ( typeof  NewTarget === 'undefined'  ) { 
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
	if ( numberOfArgs >= 2 ) {
		console.log("Good Test - Assert");
	}
	else { 
		console.log("Bad Test/Failed Test");
		return;
	} 
	if ( typeof  NewTarget === 'undefined'  ) { 
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


function test_get_arraybuffer_prototype_bytelength(randominput){
	var O =randominput;
	if (( typeof ( O ) != "object" )){
		 try{
			var output = randominput.byteLength;
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
			var output = randominput.byteLength;
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
			var output = randominput.byteLength;
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
			var output = randominput.byteLength;
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	var length = O;
		console.log("OK Test")
}


function test_get_regexp_prototype_source(randominput){
	var R =randominput;
	if ( R has an [[OriginalFlags]] internal slot ) {
		console.log("Good Test - Assert");
	}
	else { 
		console.log("Bad Test/Failed Test");
		return;
	} 
	var src = R;
	var flags = R;
		console.log("OK Test")
}


function test_issharedarraybuffer(randominput,obj){
	if ( typeof ( obj ) === "object" && it has an [[ArrayBufferData]] internal slot ) {
		console.log("Good Test - Assert");
	}
	else { 
		console.log("Bad Test/Failed Test");
		return;
	} 
	var bufferData = obj;
	if ( bufferData === Shared Data Block ) {
		console.log("Good Test - Assert");
	}
	else { 
		console.log("Bad Test/Failed Test");
		return;
	} 
		console.log("OK Test")
}


function test_map(randominput,iterable){
	if (( typeof  NewTarget === 'undefined' )){
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
		console.log("OK Test")
}


function test_math_abs(x){
	if (Object.is( x,NaN )){
		var output = Math.abs(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (( x === - 0 )){
		var output = Math.abs(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === - Infinity )){
		var output = Math.abs(x);
		assert.strictEqual(+ Infinity, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_math_acos(x){
	if (Object.is( x,NaN )){
		var output = Math.acos(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (( x > 1 )){
		var output = Math.acos(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (( x < - 1 )){
		var output = Math.acos(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (( x === 1 )){
		var output = Math.acos(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


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


function test_math_asin(x){
	if (Object.is( x,NaN )){
		var output = Math.asin(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (( x > 1 )){
		var output = Math.asin(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (( x < - 1 )){
		var output = Math.asin(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.asin(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === - 0 )){
		var output = Math.asin(x);
		assert.strictEqual(- 0, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_math_asinh(x){
	if (Object.is( x,NaN )){
		var output = Math.asinh(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.asinh(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === - 0 )){
		var output = Math.asinh(x);
		assert.strictEqual(- 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === + Infinity )){
		var output = Math.asinh(x);
		assert.strictEqual(+ Infinity, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_math_atan(x){
	if (Object.is( x,NaN )){
		var output = Math.atan(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.atan(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === - 0 )){
		var output = Math.atan(x);
		assert.strictEqual(- 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === + Infinity )){
		var output = Math.atan(x);
		assert.strictEqual(an implementation- dependent approximation to + π/2, output);
		console.log("Good Test");
		return;
		}
	if (( x === - Infinity )){
		var output = Math.atan(x);
		assert.strictEqual(an implementation- dependent approximation to - π/2, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_math_atan2(y,x){
	if (( y > 0 && x === - 0 )){
		var output = Math.atan2(y,x);
		assert.strictEqual(an implementation- dependent approximation to + π/2, output);
		console.log("Good Test");
		return;
		}
	if ((Object.is( y,+ 0) &&  x > 0 )){
		var output = Math.atan2(y,x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
	if ((Object.is( y,+ 0) && Object.is(x,+ 0 ))){
		var output = Math.atan2(y,x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
	if ((Object.is( y,+ 0) &&  x === - 0 )){
		var output = Math.atan2(y,x);
		assert.strictEqual(an implementation- dependent approximation to + π, output);
		console.log("Good Test");
		return;
		}
	if ((Object.is( y,+ 0) &&  x < 0 )){
		var output = Math.atan2(y,x);
		assert.strictEqual(an implementation- dependent approximation to + π, output);
		console.log("Good Test");
		return;
		}
	if (( y === - 0 && x > 0 )){
		var output = Math.atan2(y,x);
		assert.strictEqual(- 0, output);
		console.log("Good Test");
		return;
		}
	if (( y === - 0 && x === - 0 )){
		var output = Math.atan2(y,x);
		assert.strictEqual(an implementation- dependent approximation to - π, output);
		console.log("Good Test");
		return;
		}
	if (( y === - 0 && x < 0 )){
		var output = Math.atan2(y,x);
		assert.strictEqual(an implementation- dependent approximation to - π, output);
		console.log("Good Test");
		return;
		}
	if (( y < 0 && x === - 0 )){
		var output = Math.atan2(y,x);
		assert.strictEqual(an implementation- dependent approximation to - π/2, output);
		console.log("Good Test");
		return;
		}
	if (( y === + Infinity && x === + Infinity )){
		var output = Math.atan2(y,x);
		assert.strictEqual(an implementation- dependent approximation to + π/4, output);
		console.log("Good Test");
		return;
		}
	if (( y === + Infinity && x === - Infinity )){
		var output = Math.atan2(y,x);
		assert.strictEqual(an implementation- dependent approximation to + 3π/4, output);
		console.log("Good Test");
		return;
		}
	if (( y === - Infinity && x === + Infinity )){
		var output = Math.atan2(y,x);
		assert.strictEqual(an implementation- dependent approximation to - π/4, output);
		console.log("Good Test");
		return;
		}
	if (( y === - Infinity && x === - Infinity )){
		var output = Math.atan2(y,x);
		assert.strictEqual(an implementation- dependent approximation to - 3π/4, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_math_atanh(x){
	if (Object.is( x,NaN )){
		var output = Math.atanh(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (( x < - 1 )){
		var output = Math.atanh(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (( x > 1 )){
		var output = Math.atanh(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (( x === - 1 )){
		var output = Math.atanh(x);
		assert.strictEqual(- Infinity, output);
		console.log("Good Test");
		return;
		}
	if (( x === + 1 )){
		var output = Math.atanh(x);
		assert.strictEqual(+ Infinity, output);
		console.log("Good Test");
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.atanh(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === - 0 )){
		var output = Math.atanh(x);
		assert.strictEqual(- 0, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_math_cbrt(x){
	if (Object.is( x,NaN )){
		var output = Math.cbrt(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.cbrt(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === - 0 )){
		var output = Math.cbrt(x);
		assert.strictEqual(- 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === + Infinity )){
		var output = Math.cbrt(x);
		assert.strictEqual(+ Infinity, output);
		console.log("Good Test");
		return;
		}
	if (( x === - Infinity )){
		var output = Math.cbrt(x);
		assert.strictEqual(- Infinity, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


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


function test_math_cos(x){
	if (Object.is( x,NaN )){
		var output = Math.cos(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.cos(x);
		assert.strictEqual(1, output);
		console.log("Good Test");
		return;
		}
	if (( x === - 0 )){
		var output = Math.cos(x);
		assert.strictEqual(1, output);
		console.log("Good Test");
		return;
		}
	if (( x === + Infinity )){
		var output = Math.cos(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (( x === - Infinity )){
		var output = Math.cos(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_math_cosh(x){
	if (Object.is( x,NaN )){
		var output = Math.cosh(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.cosh(x);
		assert.strictEqual(1, output);
		console.log("Good Test");
		return;
		}
	if (( x === - 0 )){
		var output = Math.cosh(x);
		assert.strictEqual(1, output);
		console.log("Good Test");
		return;
		}
	if (( x === + Infinity )){
		var output = Math.cosh(x);
		assert.strictEqual(+ Infinity, output);
		console.log("Good Test");
		return;
		}
	if (( x === - Infinity )){
		var output = Math.cosh(x);
		assert.strictEqual(+ Infinity, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


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


function test_math_expm1(x){
	if (Object.is( x,NaN )){
		var output = Math.expm1(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.expm1(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === - 0 )){
		var output = Math.expm1(x);
		assert.strictEqual(- 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === + Infinity )){
		var output = Math.expm1(x);
		assert.strictEqual(+ Infinity, output);
		console.log("Good Test");
		return;
		}
	if (( x === - Infinity )){
		var output = Math.expm1(x);
		assert.strictEqual(- 1, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_math_floor(x){
	if (Object.is( x,NaN )){
		var output = Math.floor(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.floor(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === - 0 )){
		var output = Math.floor(x);
		assert.strictEqual(- 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === + Infinity )){
		var output = Math.floor(x);
		assert.strictEqual(+ Infinity, output);
		console.log("Good Test");
		return;
		}
	if (( x === - Infinity )){
		var output = Math.floor(x);
		assert.strictEqual(- Infinity, output);
		console.log("Good Test");
		return;
		}
	if (( x > 0 && x < 1 )){
		var output = Math.floor(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
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


function test_math_log(x){
	if (Object.is( x,NaN )){
		var output = Math.log(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (( x < 0 )){
		var output = Math.log(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if ((Object.is( x,+ 0) &&  x === - 0 )){
		var output = Math.log(x);
		assert.strictEqual(- Infinity, output);
		console.log("Good Test");
		return;
		}
	if (( x === 1 )){
		var output = Math.log(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === + Infinity )){
		var output = Math.log(x);
		assert.strictEqual(+ Infinity, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


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


function test_math_log1p(x){
	if (Object.is( x,NaN )){
		var output = Math.log1p(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (( x < - 1 )){
		var output = Math.log1p(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.log1p(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === - 0 )){
		var output = Math.log1p(x);
		assert.strictEqual(- 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === + Infinity )){
		var output = Math.log1p(x);
		assert.strictEqual(+ Infinity, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_math_log2(x){
	if (Object.is( x,NaN )){
		var output = Math.log2(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (( x < 0 )){
		var output = Math.log2(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.log2(x);
		assert.strictEqual(- Infinity, output);
		console.log("Good Test");
		return;
		}
	if (( x === - 0 )){
		var output = Math.log2(x);
		assert.strictEqual(- Infinity, output);
		console.log("Good Test");
		return;
		}
	if (( x === 1 )){
		var output = Math.log2(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === + Infinity )){
		var output = Math.log2(x);
		assert.strictEqual(+ Infinity, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_math_round(x){
	if (Object.is( x,NaN )){
		var output = Math.round(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.round(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === - 0 )){
		var output = Math.round(x);
		assert.strictEqual(- 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === + Infinity )){
		var output = Math.round(x);
		assert.strictEqual(+ Infinity, output);
		console.log("Good Test");
		return;
		}
	if (( x === - Infinity )){
		var output = Math.round(x);
		assert.strictEqual(- Infinity, output);
		console.log("Good Test");
		return;
		}
	if (( x > 0 && x < 0.5 )){
		var output = Math.round(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
	if (( x < 0 && x >=  - 0.5 )){
		var output = Math.round(x);
		assert.strictEqual(- 0, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_math_sign(x){
	if (Object.is( x,NaN )){
		var output = Math.sign(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (( x === - 0 )){
		var output = Math.sign(x);
		assert.strictEqual(- 0, output);
		console.log("Good Test");
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.sign(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_math_sin(x){
	if (Object.is( x,NaN )){
		var output = Math.sin(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.sin(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === - 0 )){
		var output = Math.sin(x);
		assert.strictEqual(- 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === + Infinity || x === - Infinity )){
		var output = Math.sin(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_math_sinh(x){
	if (Object.is( x,NaN )){
		var output = Math.sinh(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.sinh(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === - 0 )){
		var output = Math.sinh(x);
		assert.strictEqual(- 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === + Infinity )){
		var output = Math.sinh(x);
		assert.strictEqual(+ Infinity, output);
		console.log("Good Test");
		return;
		}
	if (( x === - Infinity )){
		var output = Math.sinh(x);
		assert.strictEqual(- Infinity, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_math_sqrt(x){
	if (Object.is( x,NaN )){
		var output = Math.sqrt(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (( x < 0 )){
		var output = Math.sqrt(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.sqrt(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === - 0 )){
		var output = Math.sqrt(x);
		assert.strictEqual(- 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === + Infinity )){
		var output = Math.sqrt(x);
		assert.strictEqual(+ Infinity, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_math_tan(x){
	if (Object.is( x,NaN )){
		var output = Math.tan(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.tan(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === - 0 )){
		var output = Math.tan(x);
		assert.strictEqual(- 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === + Infinity || x === - Infinity )){
		var output = Math.tan(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_math_tanh(x){
	if (Object.is( x,NaN )){
		var output = Math.tanh(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.tanh(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === - 0 )){
		var output = Math.tanh(x);
		assert.strictEqual(- 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === + Infinity )){
		var output = Math.tanh(x);
		assert.strictEqual(+ 1, output);
		console.log("Good Test");
		return;
		}
	if (( x === - Infinity )){
		var output = Math.tanh(x);
		assert.strictEqual(- 1, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_math_trunc(x){
	if (Object.is( x,NaN )){
		var output = Math.trunc(x);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
	if (( x === - 0 )){
		var output = Math.trunc(x);
		assert.strictEqual(- 0, output);
		console.log("Good Test");
		return;
		}
	if (Object.is( x,+ 0 )){
		var output = Math.trunc(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
	if (( x === + Infinity )){
		var output = Math.trunc(x);
		assert.strictEqual(+ Infinity, output);
		console.log("Good Test");
		return;
		}
	if (( x === - Infinity )){
		var output = Math.trunc(x);
		assert.strictEqual(- Infinity, output);
		console.log("Good Test");
		return;
		}
	if (( x > 0 && x < 1 )){
		var output = Math.trunc(x);
		assert.strictEqual(+ 0, output);
		console.log("Good Test");
		return;
		}
	if (( x < 0 && x > - 1 )){
		var output = Math.trunc(x);
		assert.strictEqual(- 0, output);
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

	if (( typeof  NewTarget === 'undefined' )){
		var output = Number.Number(value);
		assert.strictEqual(n, output);
		console.log("Good Test");
		return;
		}
	var O = OrdinaryCreateFromConstructor(NewTarget, "%NumberPrototype%", « [[NumberData]] »);
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
	if ( typeof f === 0 , when fractionDigits === 'undefined' ) {
		console.log("Good Test - Assert");
	}
	else { 
		console.log("Bad Test/Failed Test");
		return;
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
	if (( typeof  precision === 'undefined' )){
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

	else if ( x!= 0 ) {
		if  ( e < - 6 || e >=  p  ) { 
			if ( e!= 0 ) {
				console.log("Good Test - Assert");
			}
			else { 
				console.log("Bad Test/Failed Test");
				return;
			} 
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

		console.log("OK Test")
}


function test_set(randominput,iterable){
	if (( typeof  NewTarget === 'undefined' )){
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


function test_string(randominput,value){
		var s = "";
	else {
		if (( typeof  NewTarget === 'undefined' && typeof ( value ) === Symbol )){
			var output = new String(randominput).String(value);
			assert.strictEqual(SymbolDescriptiveString ( value ), output);
			console.log("Good Test");
			return;
			}
		var s = ToString(value);
	}

	if (( typeof  NewTarget === 'undefined' )){
		var output = new String(randominput).String(value);
		assert.strictEqual(s, output);
		console.log("Good Test");
		return;
		}
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
	var first = S[position].charCodeAt();
	if (( first < 0xD800 || first > 0xDBFF || position + 1 = size )){
		var output = new String(randominput).codePointAt(pos);
		assert.strictEqual(first, output);
		console.log("Good Test");
		return;
		}
	var second = S[position+1].charCodeAt();
	if (( second < 0xDC00 || second > 0xDFFF )){
		var output = new String(randominput).codePointAt(pos);
		assert.strictEqual(first, output);
		console.log("Good Test");
		return;
		}
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
	if ( typeof  regexp === neither 'undefined' nor null  ) { 
		var matcher = GetMethod(regexp, @@match);
		if ( typeof  matcher != 'undefined'  ) { 
			var output = new String(randominput).match(regexp);
				assert.strictEqual(? Call ( matcher , regexp , « O » ), output);
				console.log("Good Test");
				return;
	}
					
	var S = ToString(O);
	var rx = RegExpCreate(regexp, undefined);
		console.log("OK Test")
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
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof RangeError));
			console.log("Good Test");
			return;
		}
	}
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
	if ( typeof  fillString === 'undefined'  ) { 
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
	if ( typeof  fillString === 'undefined'  ) { 
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
		console.log("OK Test")
}


function test_string_prototype_replace(randominput,searchValue,replaceValue){
	var O = RequireObjectCoercible(randominput);
	if ( typeof  searchValue === neither 'undefined' nor null  ) { 
		var replacer = GetMethod(searchValue, @@replace);
		if ( typeof  replacer != 'undefined'  ) { 
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
		console.log("OK Test")
}


function test_string_prototype_search(randominput,regexp){
	var O = RequireObjectCoercible(randominput);
	if ( typeof  regexp === neither 'undefined' nor null  ) { 
		var searcher = GetMethod(regexp, @@search);
		if ( typeof  searcher != 'undefined'  ) { 
			var output = new String(randominput).search(regexp);
				assert.strictEqual(? Call ( searcher , regexp , « O » ), output);
				console.log("Good Test");
				return;
			}

		}

	var rx = RegExpCreate(regexp, undefined);
		console.log("OK Test")
}


function test_string_prototype_split(randominput,separator,limit){
	var O = RequireObjectCoercible(randominput);
	if ( typeof  separator === neither 'undefined' nor null  ) { 
		var splitter = GetMethod(separator, @@split);
		if ( typeof  splitter != 'undefined'  ) { 
			var output = new String(randominput).split(separator,limit);
				assert.strictEqual(? Call ( splitter , separator , « O , limit » ), output);
				console.log("Good Test");
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
		assert.strictEqual(A, output);
		console.log("Good Test");
		return;
		}
	if ( typeof  separator === 'undefined'  ) { 
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
	if (( typeof  NewTarget === 'undefined' )){
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
		console.log("OK Test")
}


function test_typedarray( buffer  , byteOffset  , length   ){
	if ( typeof ( buffer ) === "object" && buffer has an [[ArrayBufferData]] internal slot ) {
		console.log("Good Test - Assert");
	}
	else { 
		console.log("Bad Test/Failed Test");
		return;
	} 
	if (( typeof  NewTarget === 'undefined' )){
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
	if ( typeof  length === present && length != 'undefined'  ) { 
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

		console.log("OK Test")
}


function test_typedarray( length ){
	if ( typeof ( length ) != Object ) {
		console.log("Good Test - Assert");
	}
	else { 
		console.log("Bad Test/Failed Test");
		return;
	} 
	if (( typeof  NewTarget === 'undefined' )){
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
		console.log("OK Test")
}


function test_typedarray( object ){
	if (( typeof  NewTarget === 'undefined' )){
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
	if ( typeof  usingIterator != 'undefined'  ) { 
		var values = IterableToList(object, usingIterator);
		var len = values.length;
		AllocateTypedArrayBuffer ( O , len )
		var k = 0;
		while ( k < len ) { 
			var Pk = ToString(k);
			var kValue =first element of values and remove that element from values;
			k = k + 1
		}
										
		if ( values === now an empty List ) {
			console.log("Good Test - Assert");
		}
		else { 
			console.log("Bad Test/Failed Test");
			return;
		} 
		var output = new TypedArray ( object );
			assert.strictEqual(O, output);
			console.log("Good Test");
			return;
	}

	var arrayLike = object;
	var len = ToLength( Get(arrayLike, "length"));
	AllocateTypedArrayBuffer ( O , len )
	var k = 0;
	while ( k < len ) { 
		var Pk = ToString(k);
		var kValue = Get(arrayLike, Pk);
		k = k + 1
	}

		console.log("OK Test")
}


function test_typedarray( typedArray ){
	if ( typeof ( typedArray ) === "object" && typedArray has [[TypedArrayName]] internal slot ) {
		console.log("Good Test - Assert");
	}
	else { 
		console.log("Bad Test/Failed Test");
		return;
	} 
	if (( typeof  NewTarget === 'undefined' )){
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
			count = count - 1
			}

		}

		console.log("OK Test")
}
