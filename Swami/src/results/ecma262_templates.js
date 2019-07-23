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
		console.log("OK Test")
}


function test_array( len ){
	var numberOfArgs = arguments.length;
	if  ( NewTarget === undefined  ) { 
	}
	
	else {
		var newTarget = NewTarget;
	}
	
	var proto = GetPrototypeFromConstructor(newTarget, "%ArrayPrototype%");
	var array = ArrayCreate(0, proto);
	if  ( typeof ( len ) != "number"  ) { 
		var defineStatus = CreateDataProperty(array, "0", len);
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
			if  ( k >=  Math.pow ( 2 , 53 ) - 1  ) { 
				var error = ThrowCompletion( TypeError );
			}
			
			var Pk = ToString(k);
			var next = IteratorStep(iteratorRecord);
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
	}
	
	else {
		var T = undefined;
	}
	
	var A = ArraySpeciesCreate(O, 0);
	var k = 0;
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
	
		var k = len + n;
		if  ( k < 0  ) { 
			var k = 0;
	}
	
	while ( k < len ) { 
		var elementK =Get(O, ToString(k));
		if (( SameValueZero ( searchElement , elementK ) === true )){
			var output = new Array(randominput).includes( searchElement  , fromIndex  );
			assert.strictEqual(true, output);
			console.log("Good Test");
			return;
			}
		k = k + 1
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
	if  ( n >=  0  ) { 
		if  ( n === - 0  ) { 
		}
		
		else {
			var k = n;
	}
	
		var k = len + n;
		if  ( k < 0  ) { 
			var k = 0;
	}
	
	while ( k < len ) { 
		var kPresent = HasProperty(O, ToString(k));
		if  ( kPresent === true  ) { 
			var elementK = Get(O, ToString(k));
			var same =performing Strict Equality Comparison searchElement === elementK;
			if (( same === true )){
				var output = new Array(randominput).indexOf( searchElement  , fromIndex  );
				assert.strictEqual(k, output);
				console.log("Good Test");
				return;
				}
		}
		
		k = k + 1
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
	}
	
	else {
		var n = len-1;
	}
	
	if  ( n >=  0  ) { 
		if  ( n === - 0  ) { 
		}
		
		else {
			var k = min(n, len - 1);
	}
	
		var k = len + n;
	}
	
	while ( k >=  0 ) { 
		var kPresent = HasProperty(O, ToString(k));
		if  ( kPresent === true  ) { 
			var elementK = Get(O, ToString(k));
			var same =performing Strict Equality Comparison searchElement === elementK;
			if (( same === true )){
				var output = new Array(randominput).lastIndexOf( searchElement  , fromIndex  );
				assert.strictEqual(k, output);
				console.log("Good Test");
				return;
				}
		}
		
		k = k - 1
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
	if  ( initialValue === present  ) { 
	}
	
		var kPresent = false;
		while ( kPresent === false && k < len ) { 
			var Pk = ToString(k);
			var kPresent = HasProperty(O, Pk);
			if  ( kPresent === true  ) { 
			}
			
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
	if  ( initialValue === present  ) { 
	}
	
		var kPresent = false;
		while ( kPresent === false && k >=  0 ) { 
			var Pk = ToString(k);
			var kPresent = HasProperty(O, Pk);
			if  ( kPresent === true  ) { 
			}
			
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
		while ( k > 0 , ) { 
			var from = ToString(k-1);
			var to = ToString(k+argCount-1);
			var fromPresent = HasProperty(O, from);
			if  ( fromPresent === true  ) { 
				var fromValue = Get(O, from);
			}
			
			k = k - 1
		}
		
		var j = 0;
		while ( items != empty ) { 
			j = j + 1
	}
	
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
	}
	
	else {
		var first = min(relativeStart, len);
	}
	
	if  ( end === undefined  ) { 
	}
	
	else {
		var relativeEnd = ToInteger(end);
	}
	
	if  ( relativeEnd < 0  ) { 
	}
	
	else {
		var final = min(relativeEnd, len);
	}
	
	var newLen = max(final-first, 0);
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


function test_clonearraybuffer(srcBuffer,srcByteOffset,srcLength,cloneConstructor){
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


function test_map(randominput,iterable){
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
		var next = IteratorStep(iteratorRecord);
		if (( next === false )){
			var output = randominput.Map(iterable);
			assert.strictEqual(map, output);
			console.log("Good Test");
			return;
			}
		var nextItem = IteratorValue(next);
		if  ( typeof ( nextItem ) != "object"  ) { 
			var error = ThrowCompletion( TypeError );
		}
		
		var k = Get(nextItem, "0");
		if (( k === an abrupt completion )){
			var output = randominput.Map(iterable);
			assert.strictEqual(? IteratorClose ( iteratorRecord , k ), output);
			console.log("Good Test");
			return;
			}
		var v = Get(nextItem, "1");
		if (( v === an abrupt completion )){
			var output = randominput.Map(iterable);
			assert.strictEqual(? IteratorClose ( iteratorRecord , v ), output);
			console.log("Good Test");
			return;
			}
		var status = Call(adder, map, « k;
		if (( status === an abrupt completion )){
			var output = randominput.Map(iterable);
			assert.strictEqual(? IteratorClose ( iteratorRecord , status ), output);
			console.log("Good Test");
			return;
			}
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
	entries.forEach(function( p ) ) { 
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
	entries.forEach(function( p ) ) { 
		if  ( p.[[Key]] != empty && SameValueZero ( p.[[Key]] , key ) === true  ) { 
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
	}
	
	else {
		var T = undefined;
	}
	
		if  ( e.[[Key]] != empty  ) { 
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
	entries.forEach(function( p ) ) { 
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
	entries.forEach(function( p ) ) { 
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
	}
	
	if  ( key === - 0  ) { 
	}
	
	var p =Record { [[Key]]: key, [[Value]]: value };
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
	if (Object.is( x,NaN )){
		var output = Number(randominput).toExponential(fractionDigits);
		assert.strictEqual("NaN", output);
		console.log("Good Test");
		return;
		}
	var s ="";
	if  ( x = + Infinity  ) { 
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
	}
	
		if  ( fractionDigits != undefined  ) { 
		}
		
		var a =first element of m, and let b;
		var m =string-concatenation of a, ";
		var c = "+";
		var d = "0";
	else {
			var c = "+";
			var c = "-";
	}
	
	var m =string-concatenation of m, "e", c, and d;
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
		var s =code unit 0x002D (HYPHEN-MINUS);
	if  ( x = + Infinity  ) { 
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
	}
	
		if  ( e < - 6 || e >=  p  ) { 
			if  ( p!= 1  ) { 
				var a =first element of m, and let b;
				var m =string-concatenation of a, ";
				var c =code unit 0x002B (PLUS SIGN);
			}
			
				var c =code unit 0x002D (HYPHEN-MINUS);
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
	
	if  ( first code unit of type === code unit 0x0055 ( LATIN CAPITAL LETTER U )  ) { 
	}
	
	else {
	}
	
		console.log("OK Test")
}


function test_regexp(randominput,pattern,flags){
	var patternIsRegExp = IsRegExp(pattern);
	if  ( NewTarget === undefined  ) { 
		var newTarget =active function object;
		if  ( patternIsRegExp === true && flags === undefined  ) { 
			var patternConstructor = Get(pattern, "constructor");
			if (( SameValue ( newTarget , patternConstructor ) === true )){
				var output = new RegExp(randominput).RegExp(pattern,flags);
				assert.strictEqual(pattern, output);
				console.log("Good Test");
				return;
				}
	}
	
	else {
		var newTarget = NewTarget;
	}
	
	if  ( typeof ( pattern ) === "object" && pattern has [[RegExpMatcher]] internal slot  ) { 
		var P = pattern;
		if  ( flags === undefined  ) { 
			var F = pattern;
		}
		
		else {
			var F = flags;
	}
	
		var P = Get(pattern, "source");
		if  ( flags === undefined  ) { 
			var F = Get(pattern, "flags");
		}
		
		else {
			var F = flags;
	}
	
	else {
		var P = pattern;
		var F = flags;
	}
	
	var O = RegExpAlloc(newTarget);
	}
	
		console.log("OK Test")
}


function test_set(randominput,iterable){
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
		var next = IteratorStep(iteratorRecord);
		if (( next === false )){
			var output = randominput.Set(iterable);
			assert.strictEqual(set, output);
			console.log("Good Test");
			return;
			}
		var nextValue = IteratorValue(next);
		var status = Call(adder, set, « nextValue;
		if (( status === an abrupt completion )){
			var output = randominput.Set(iterable);
			assert.strictEqual(? IteratorClose ( iteratorRecord , status ), output);
			console.log("Good Test");
			return;
			}
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
		console.log("OK Test")
}


function test_string_fromcodepoint(randominput,codePoints){
	var length = codePoints.length;
	var nextIndex = 0;
	while ( nextIndex < length ) { 
		var next = codePoints[nextIndex];
		var nextCP = ToNumber(next);
		if (( SameValue ( nextCP , ToInteger ( nextCP ) ) === false )){
			 try{
				var output = new String(randominput).fromCodePoint(codePoints);
				console.log("Bad Test/Failed Test");
				 return;
			}catch(e){
				assert.strictEqual(true, eval(e instanceof RangeError));
				console.log("Good Test");
				return;
			}
		}
		if (( nextCP < 0 || nextCP > 0x10FFFF )){
			 try{
				var output = new String(randominput).fromCodePoint(codePoints);
				console.log("Bad Test/Failed Test");
				 return;
			}catch(e){
				assert.strictEqual(true, eval(e instanceof RangeError));
				console.log("Good Test");
				return;
			}
		}
		var nextIndex = nextIndex + 1;
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
	}
	
	else {
		var pos = ToInteger(endPosition);
	}
	
	var end = min(max(pos, 0), len);
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
	var start = min(max(pos, 0), len);
	var searchLen =length of searchStr;
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
		console.log("OK Test")
}


function test_string_prototype_split(randominput,separator,limit){
	var O = RequireObjectCoercible(randominput);
	if  ( separator === neither undefined nor null  ) { 
		var splitter = GetMethod(separator, @@split);
		if  ( splitter != undefined  ) { 
	}
	
	var S = ToString(O);
	}
	
	var A = ArrayCreate(0);
	var lengthA = 0;
	if  ( limit === undefined  ) { 
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
	}
	
	if  ( s = 0  ) { 
		var z = SplitMatch(S, 0, R);
		if (( z != false )){
			var output = new String(randominput).split(separator,limit);
			assert.strictEqual(A, output);
			console.log("Good Test");
			return;
			}
	}
	
	var q = p;
	while ( q!= s ) { 
		var e = SplitMatch(S, q, R);
			var q = q+1;
			if  ( e = p  ) { 
				var q = q+1;
			}
			
				lengthA = lengthA + 1
				if (( lengthA = lim )){
					var output = new String(randominput).split(separator,limit);
					assert.strictEqual(A, output);
					console.log("Good Test");
					return;
					}
				var p = e;
				var q = p;
	}
	
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
	var start = min(max(pos, 0), len);
	var searchLength =length of searchStr;
		console.log("OK Test")
}


function test_typedarray( buffer  , byteOffset  , length   ){
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
	
		console.log("OK Test")
}


function test_typedarray( typedArray ){
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


function test_validateatomicaccess( typedArray, requestIndex ){
	var accessIndex = ToIndex(requestIndex);
	var length = typedArray;
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
	
	else {
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
		console.log("OK Test")
}
