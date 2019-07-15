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
	if (( index + 1 >=  length )){
		var output = new String(randominput).AdvanceStringIndex(S,index,unicode);
		assert.strictEqual(index + 1, output);
		console.log("Good Test");
		return;
		}
	if (( first < 0xD800 || first > 0xDBFF )){
		var output = new String(randominput).AdvanceStringIndex(S,index,unicode);
		assert.strictEqual(index + 1, output);
		console.log("Good Test");
		return;
		}
	if (( second < 0xDC00 || second > 0xDFFF )){
		var output = new String(randominput).AdvanceStringIndex(S,index,unicode);
		assert.strictEqual(index + 1, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_array( len ){
	if (( ToUint32 ( len )!= len )){
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
		console.log("OK Test")
}


function test_array_from(items,mapfn,thisArg){
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
	}if  ( usingIterator != undefined  ) { if  ( IsConstructor (randominput ) === true  ) { if  ( mapping === true  ) { 
	if (( mappedValue === an abrupt completion )){
		var output = Array.from(items,mapfn,thisArg);
		assert.strictEqual(? IteratorClose ( iteratorRecord , mappedValue ), output);
		console.log("Good Test");
		return;
		}
	if (( defineStatus === an abrupt completion )){
		var output = Array.from(items,mapfn,thisArg);
		assert.strictEqual(? IteratorClose ( iteratorRecord , defineStatus ), output);
		console.log("Good Test");
		return;
		}if  ( IsConstructor ( randominput ) === true  ) { if  ( mapping === true  ) { 
		console.log("OK Test")
}


function test_array_of(items){if  ( IsConstructor (randominput ) === true  ) { 
		console.log("OK Test")
}


function test_array_prototype_concat(randominput, args ){
	if (( 0 + ToLength ( Get ( E , "length" ) ) > 253- 1 )){
		 try{
			var output = new Array(randominput).concat( arguments );
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	if (( 0 >= 253- 1 )){
		 try{
			var output = new Array(randominput).concat( arguments );
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


function test_array_prototype_copywithin(randominput, target, start  , end  ){if  ( HasProperty ( ToObject ( randominput ) , ToString ( from ) ) === true  ) { 
		console.log("OK Test")
}


function test_array_prototype_every(randominput, callbackfn  , thisArg  ){
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
	}if  ( HasProperty ( ToObject ( randominput ) , ToString ( 0 ) ) === true  ) { 
	if (( testResult === false )){
		var output = new Array(randominput).every( callbackfn  , thisArg  );
		assert.strictEqual(false, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_array_prototype_filter(randominput, callbackfn  , thisArg  ){
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
	}if  ( HasProperty ( ToObject ( randominput ) , ToString ( 0 ) ) === true  ) { 
		console.log("OK Test")
}


function test_array_prototype_find(randominput, predicate  , thisArg  ){
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
	if (( testResult === true )){
		var output = new Array(randominput).find( predicate  , thisArg  );
		assert.strictEqual(Get ( ToObject ( randominput ) , ToString ( 0 ) ), output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_array_prototype_findindex(randominput, predicate  , thisArg  ){
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
	if (( testResult === true )){
		var output = new Array(randominput).findIndex( predicate  , thisArg  );
		assert.strictEqual(0, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_array_prototype_foreach(randominput, callbackfn  , thisArg  ){
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
	}if  ( HasProperty ( ToObject ( randominput ) , ToString ( 0 ) ) === true  ) { 
		console.log("OK Test")
}


function test_array_prototype_includes(randominput, searchElement  , fromIndex  ){
	if (( ToLength ( Get ( ToObject ( randominput ) , "length" ) ) === 0 )){
		var output = new Array(randominput).includes( searchElement  , fromIndex  );
		assert.strictEqual(false, output);
		console.log("Good Test");
		return;
		}
	if (( SameValueZero ( searchElement , elementK ) === true )){
		var output = new Array(randominput).includes( searchElement  , fromIndex  );
		assert.strictEqual(true, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_array_prototype_indexof(randominput, searchElement  , fromIndex  ){
	if (( ToLength ( Get ( ToObject ( randominput ) , "length" ) ) === 0 )){
		var output = new Array(randominput).indexOf( searchElement  , fromIndex  );
		assert.strictEqual(- 1, output);
		console.log("Good Test");
		return;
		}
	if (( n >= ToLength ( Get ( ToObject ( randominput ) , "length" ) ) )){
		var output = new Array(randominput).indexOf( searchElement  , fromIndex  );
		assert.strictEqual(- 1, output);
		console.log("Good Test");
		return;
		}if  ( kPresent === true  ) { 
	if (( same === true )){
		var output = new Array(randominput).indexOf( searchElement  , fromIndex  );
		assert.strictEqual(k, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_array_prototype_lastindexof(randominput, searchElement  , fromIndex  ){
	if (( ToLength ( Get ( ToObject ( randominput ) , "length" ) ) === 0 )){
		var output = new Array(randominput).lastIndexOf( searchElement  , fromIndex  );
		assert.strictEqual(- 1, output);
		console.log("Good Test");
		return;
		}if  ( kPresent === true  ) { 
	if (( same === true )){
		var output = new Array(randominput).lastIndexOf( searchElement  , fromIndex  );
		assert.strictEqual(k, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_array_prototype_map(randominput, callbackfn  , thisArg  ){
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
	}if  ( HasProperty ( ToObject ( randominput ) , ToString ( 0 ) ) === true  ) { 
		console.log("OK Test")
}


function test_array_prototype_push(randominput, items ){
	if (( ToLength ( Get ( ToObject ( randominput ) , "length" ) ) + argCount > 253- 1 )){
		 try{
			var output = new Array(randominput).push( items );
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


function test_array_prototype_reduce(randominput, callbackfn  , initialValue  ){
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
	if (( ToLength ( Get ( ToObject ( randominput ) , "length" ) ) === 0 && initialValue != present )){
		 try{
			var output = new Array(randominput).reduce( callbackfn  , initialValue  );
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}if  ( initialValue === present  ) { if  ( HasProperty ( ToObject ( randominput ) , ToString ( 0 ) ) === true  ) { 
	if (( HasProperty ( ToObject ( randominput ) , ToString ( 0 ) ) === false )){
		 try{
			var output = new Array(randominput).reduce( callbackfn  , initialValue  );
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}if  ( HasProperty ( ToObject ( randominput ) , ToString ( 0 ) ) === true  ) { 
		console.log("OK Test")
}


function test_array_prototype_reduceright(randominput, callbackfn  , initialValue  ){
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
	if (( ToLength ( Get ( ToObject ( randominput ) , "length" ) ) === 0 && initialValue != present )){
		 try{
			var output = new Array(randominput).reduceRight( callbackfn  , initialValue  );
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}if  ( initialValue === present  ) { if  ( HasProperty ( ToObject ( randominput ) , ToString ( len- 1 ) ) === true  ) { 
	if (( HasProperty ( ToObject ( randominput ) , ToString ( len- 1 ) ) === false )){
		 try{
			var output = new Array(randominput).reduceRight( callbackfn  , initialValue  );
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}if  ( HasProperty ( ToObject ( randominput ) , ToString ( len- 1 ) ) === true  ) { 
		console.log("OK Test")
}


function test_array_prototype_shift(randominput, ){if  ( HasProperty ( ToObject ( randominput ) , ToString ( 1 ) ) === true  ) { 
		console.log("OK Test")
}


function test_array_prototype_slice(randominput, start, end ){if  ( HasProperty ( ToObject ( randominput ) , ToString ( k ) ) === true  ) { 
		console.log("OK Test")
}


function test_array_prototype_some(randominput, callbackfn  , thisArg  ){
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
	}if  ( HasProperty ( ToObject ( randominput ) , ToString ( 0 ) ) === true  ) { 
	if (( testResult === true )){
		var output = new Array(randominput).some( callbackfn  , thisArg  );
		assert.strictEqual(true, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_array_prototype_sort(randominput, comparefn ){
	if (( comparefn != undefined && IsCallable ( comparefn ) === false )){
		 try{
			var output = new Array(randominput).sort( comparefn );
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


function test_array_prototype_splice(randominput, start, deleteCount, items ){
	if (( ToLength ( Get ( ToObject ( randominput ) , "length" ) ) + insertCount- 0 > 253- 1 )){
		 try{
			var output = new Array(randominput).splice( start, deleteCount, items );
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}if Object.is( HasProperty ( ToObject ( randominput ) , ToString ( actualStart + 0 ) ),true  ) { if Object.is( HasProperty ( ToObject ( randominput ) , ToString ( actualStart + 0 ) ),true  ) { if Object.is( HasProperty ( ToObject ( randominput ) , ToString ( ToLength ( Get ( ToObject ( randominput ) , "length" ) ) + 0 ) ),true  ) { 
		console.log("OK Test")
}


function test_array_prototype_unshift(randominput, items ){
	if (( ToLength ( Get ( ToObject ( randominput ) , "length" ) ) + argCount > 253- 1 )){
		 try{
			var output = new Array(randominput).unshift( items );
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}if  ( HasProperty ( ToObject ( randominput ) , ToString ( k- 1 ) ) === true  ) { 
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
	if (( typeof (randominput ) != "object" )){
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
	if (( randominput instanceof ArrayBuffer === false )){
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
	if (( IsSharedArrayBuffer (randominput ) === true )){
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
	if (( IsDetachedBuffer (randominput ) === true )){
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
	if (( SameValue ( new , randominput ) === true )){
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
	if (( IsDetachedBuffer ( randominput ) === true )){
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
		console.log("OK Test")
}


function test_atomics_wait(typedArray,index,value,timeout){
	if (( B === false )){
		 try{
			var output = Array.wait(typedArray,index,value,timeout);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}if  ( awoken === true  ) { 
	if (( awoken === true )){
		var output = Array.wait(typedArray,index,value,timeout);
		assert.strictEqual(String "ok", output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_clonearraybuffer(srcBuffer,srcByteOffset,srcLength,cloneConstructor){
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
	if (Object.is( thisTimeValue ( randominput ),NaN )){
		var output = new Date(randominput).getDate();
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_date_prototype_getday(randominput){
	if (Object.is( thisTimeValue ( randominput ),NaN )){
		var output = new Date(randominput).getDay();
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_date_prototype_getfullyear(randominput){
	if (Object.is( thisTimeValue ( randominput ),NaN )){
		var output = new Date(randominput).getFullYear();
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_date_prototype_gethours(randominput){
	if (Object.is( thisTimeValue ( randominput ),NaN )){
		var output = new Date(randominput).getHours();
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_date_prototype_getmilliseconds(randominput){
	if (Object.is( thisTimeValue ( randominput ),NaN )){
		var output = new Date(randominput).getMilliseconds();
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_date_prototype_getminutes(randominput){
	if (Object.is( thisTimeValue ( randominput ),NaN )){
		var output = new Date(randominput).getMinutes();
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_date_prototype_getmonth(randominput){
	if (Object.is( thisTimeValue ( randominput ),NaN )){
		var output = new Date(randominput).getMonth();
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_date_prototype_getseconds(randominput){
	if (Object.is( thisTimeValue ( randominput ),NaN )){
		var output = new Date(randominput).getSeconds();
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_date_prototype_gettimezoneoffset(randominput){
	if (Object.is( thisTimeValue ( randominput ),NaN )){
		var output = new Date(randominput).getTimezoneOffset();
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_date_prototype_getutcdate(randominput){
	if (Object.is( thisTimeValue ( randominput ),NaN )){
		var output = new Date(randominput).getUTCDate();
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_date_prototype_getutcday(randominput){
	if (Object.is( thisTimeValue ( randominput ),NaN )){
		var output = new Date(randominput).getUTCDay();
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_date_prototype_getutcfullyear(randominput){
	if (Object.is( thisTimeValue ( randominput ),NaN )){
		var output = new Date(randominput).getUTCFullYear();
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_date_prototype_getutchours(randominput){
	if (Object.is( thisTimeValue ( randominput ),NaN )){
		var output = new Date(randominput).getUTCHours();
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_date_prototype_getutcmilliseconds(randominput){
	if (Object.is( thisTimeValue ( randominput ),NaN )){
		var output = new Date(randominput).getUTCMilliseconds();
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_date_prototype_getutcminutes(randominput){
	if (Object.is( thisTimeValue ( randominput ),NaN )){
		var output = new Date(randominput).getUTCMinutes();
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_date_prototype_getutcmonth(randominput){
	if (Object.is( thisTimeValue ( randominput ),NaN )){
		var output = new Date(randominput).getUTCMonth();
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_date_prototype_getutcseconds(randominput){
	if (Object.is( thisTimeValue ( randominput ),NaN )){
		var output = new Date(randominput).getUTCSeconds();
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_date_prototype_todatestring(randominput){
	if (Object.is( tv,NaN )){
		var output = new Date(randominput).toDateString();
		assert.strictEqual("Invalid Date", output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_date_prototype_totimestring(randominput){
	if (Object.is( tv,NaN )){
		var output = new Date(randominput).toTimeString();
		assert.strictEqual("Invalid Date", output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_date_prototype_toutcstring(randominput){
	if (Object.is( tv,NaN )){
		var output = new Date(randominput).toUTCString();
		assert.strictEqual("Invalid Date", output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_getvaluefrombuffer( arrayBuffer, byteIndex, type, isTypedArray, order  , isLittleEndian  ){if  ( IsSharedArrayBuffer ( arrayBuffer ) === true  ) { 
		console.log("OK Test")
}


function test_issharedarraybuffer(randominput,obj){
	if (( obj=== null )){
		var output = new SharedArrayBuffer(randominput).IsSharedArrayBuffer(obj);
		assert.strictEqual(false, output);
		console.log("Good Test");
		return;
		}
	if (( obj=== Data Block )){
		var output = new SharedArrayBuffer(randominput).IsSharedArrayBuffer(obj);
		assert.strictEqual(false, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_map_prototype_clear(randominput){
	if (( typeof (randominput ) != "object" )){
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
	if (( randominput instanceof Map === false )){
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
	if (( typeof (randominput ) != "object" )){
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
	if (( randominput instanceof Map === false )){
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
	if (( typeof (randominput ) != "object" )){
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
	if (( randominput instanceof Map === false )){
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
		console.log("OK Test")
}


function test_map_prototype_get(randominput,key){
	if (( typeof (randominput ) != "object" )){
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
	if (( randominput instanceof Map === false )){
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
	if (( typeof (randominput ) != "object" )){
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
	if (( randominput instanceof Map === false )){
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
	if (( typeof (randominput ) != "object" )){
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
	if (( randominput instanceof Map === false )){
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
		console.log("OK Test")
}


function test_math_imul(x,y){
	if (( product >=  231 )){
		var output = Math.imul(x,y);
		assert.strictEqual(product - 232; else, output);
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
	if (( ToInteger ( number ) != number )){
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
	if (( ToInteger ( number ) != number )){
		var output = Number.isSafeInteger(number);
		assert.strictEqual(false, output);
		console.log("Good Test");
		return;
		}
	if (( Math.abs ( ToInteger ( number ) ) <=  253- 1 )){
		var output = Number.isSafeInteger(number);
		assert.strictEqual(true, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_number_prototype_toexponential(randominput,fractionDigits){
	if (Object.is( thisNumberValue ( randominput ),NaN )){
		var output = Number(randominput).toExponential(fractionDigits);
		assert.strictEqual("NaN", output);
		console.log("Good Test");
		return;
		}
	if (( ToInteger ( fractionDigits ) < 0 ||ToInteger ( fractionDigits ) > 100 )){
		 try{
			var output = Number(randominput).toExponential(fractionDigits);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof RangeError));
			console.log("Good Test");
			return;
		}
	}if  ( fractionDigits != undefined  ) { 
		console.log("OK Test")
}


function test_number_prototype_tofixed(randominput,fractionDigits){
	if (( f < 0 || f > 100 )){
		 try{
			var output = Number(randominput).toFixed(fractionDigits);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof RangeError));
			console.log("Good Test");
			return;
		}
	}
	if (Object.is( thisNumberValue ( randominput ),NaN )){
		var output = Number(randominput).toFixed(fractionDigits);
		assert.strictEqual("NaN", output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_number_prototype_toprecision(randominput,precision){
	if (( precision === undefined )){
		var output = Number(randominput).toPrecision(precision);
		assert.strictEqual(ToString ( thisNumberValue ( randominput ) ), output);
		console.log("Good Test");
		return;
		}
	if (Object.is( thisNumberValue ( randominput ),NaN )){
		var output = Number(randominput).toPrecision(precision);
		assert.strictEqual("NaN", output);
		console.log("Good Test");
		return;
		}
	if (( ToInteger ( precision ) < 1 ||ToInteger ( precision ) > 100 )){
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
		console.log("OK Test")
}


function test_number_prototype_tostring(randominput,radix){
	if (( radixNumber < 2 || radixNumber > 36 )){
		 try{
			var output = Number(randominput).toString(radix);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof RangeError));
			console.log("Good Test");
			return;
		}
	}
	if (( radixNumber = 10 )){
		var output = Number(randominput).toString(radix);
		assert.strictEqual(ToString ( thisNumberValue ( randominput ) ), output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_rawbytestonumber(type,rawBytes,isLittleEndian){
	if (Object.is( value,an IEEE 754- 2008 binary32 NaN value )){
		var output = Number.RawBytesToNumber(type,rawBytes,isLittleEndian);
		assert.strictEqual(NaN "number" value, output);
		console.log("Good Test");
		return;
		}
	if (Object.is( value,an IEEE 754- 2008 binary64 NaN value )){
		var output = Number.RawBytesToNumber(type,rawBytes,isLittleEndian);
		assert.strictEqual(NaN "number" value, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_regexp(randominput,pattern,flags){
	if (( SameValue ( active function object , patternConstructor ) === true )){
		var output = new RegExp(randominput).RegExp(pattern,flags);
		assert.strictEqual(pattern, output);
		console.log("Good Test");
		return;
		}if  ( flags === undefined  ) { 
		console.log("OK Test")
}


function test_regexp_prototype_exec(randominput,string){
	if (( typeof (randominput ) != "object" )){
		 try{
			var output = new RegExp(randominput).exec(string);
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


function test_regexp_prototype_test(randominput,S){
	if (( typeof (randominput ) != "object" )){
		 try{
			var output = new RegExp(randominput).test(S);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	if (( RegExpExec (randominput , string ) != null )){
		var output = new RegExp(randominput).test(S);
		assert.strictEqual(true; else, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_regexp_prototype_tostring(randominput){
	if (( typeof (randominput ) != "object" )){
		 try{
			var output = new RegExp(randominput).toString();
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


function test_set_prototype_add(randominput,value){
	if (( typeof (randominput ) != "object" )){
		 try{
			var output = randominput.add(value);
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


function test_set_prototype_clear(randominput){
	if (( typeof (randominput ) != "object" )){
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


function test_set_prototype_delete(randominput,value){
	if (( typeof (randominput ) != "object" )){
		 try{
			var output = randominput.delete(value);
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


function test_set_prototype_foreach(randominput,callbackfn,thisArg){
	if (( typeof (randominput ) != "object" )){
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
		console.log("OK Test")
}


function test_set_prototype_has(randominput,value){
	if (( typeof (randominput ) != "object" )){
		 try{
			var output = randominput.has(value);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	if (( e != empty && SameValueZero ( e , value ) === true )){
		var output = randominput.has(value);
		assert.strictEqual(true, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_setvalueinbuffer( arrayBuffer, byteIndex, type, value, isTypedArray, order  , isLittleEndian  ){if  ( IsSharedArrayBuffer ( arrayBuffer ) === true  ) { 
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
	if (( IsDetachedBuffer ( view ) === true )){
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
	if (( ToIndex ( requestIndex ) + elementSize > view )){
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
		console.log("OK Test")
}


function test_sharedarraybuffer_prototype_slice(randominput,start,end){
	if (( typeof (randominput ) != "object" )){
		 try{
			var output = new SharedArrayBuffer(randominput).slice(start,end);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	if (( randominput instanceof ArrayBuffer === false )){
		 try{
			var output = new SharedArrayBuffer(randominput).slice(start,end);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	if (( IsSharedArrayBuffer (randominput ) === false )){
		 try{
			var output = new SharedArrayBuffer(randominput).slice(start,end);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	if (( new instanceof ArrayBuffer === false )){
		 try{
			var output = new SharedArrayBuffer(randominput).slice(start,end);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	if (( IsSharedArrayBuffer ( new ) === false )){
		 try{
			var output = new SharedArrayBuffer(randominput).slice(start,end);
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


function test_string_fromcodepoint(randominput,codePoints){
	if (( SameValue ( ToNumber ( next ) , ToInteger ( ToNumber ( next ) ) ) === false )){
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
	if (( ToNumber ( next ) < 0 ||ToNumber ( next ) > 0x10FFFF )){
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
		console.log("OK Test")
}


function test_string_prototype_charat(randominput,pos){
	if (( ToInteger ( pos ) < 0 ||ToInteger ( pos ) >= the length ofToString ( RequireObjectCoercible ( randominput ) ) )){
		var output = new String(randominput).charAt(pos);
		assert.strictEqual("", output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_string_prototype_charcodeat(randominput,pos){
	if (( ToInteger ( pos ) < 0 ||ToInteger ( pos ) >= the length ofToString ( RequireObjectCoercible ( randominput ) ) )){
		var output = new String(randominput).charCodeAt(pos);
		assert.strictEqual(isNaN(output), true);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_string_prototype_codepointat(randominput,pos){
	if (( ToInteger ( pos ) < 0 ||ToInteger ( pos ) >= the length ofToString ( RequireObjectCoercible ( randominput ) ) )){
		var output = new String(randominput).codePointAt(pos);
		assert.strictEqual(undefined, output);
		console.log("Good Test");
		return;
		}
	if (( first < 0xD800 || first > 0xDBFF ||ToInteger ( pos ) + 1 =the length ofToString ( RequireObjectCoercible ( randominput ) ) )){
		var output = new String(randominput).codePointAt(pos);
		assert.strictEqual(first, output);
		console.log("Good Test");
		return;
		}
	if (( second < 0xDC00 || second > 0xDFFF )){
		var output = new String(randominput).codePointAt(pos);
		assert.strictEqual(first, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_string_prototype_endswith(randominput,searchString,endPosition){
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
	if (( start < 0 )){
		var output = new String(randominput).endsWith(searchString,endPosition);
		assert.strictEqual(false, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_string_prototype_includes(randominput,searchString,position){
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
		console.log("OK Test")
}


function test_string_prototype_match(randominput,regexp){if  ( matcher != undefined  ) { 
		console.log("OK Test")
}


function test_string_prototype_normalize(randominput,form){
	if (( ToString ( form ) != one of "NFC" , "NFD" , "NFKC" , or "NFKD" )){
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
	if (( ToLength ( maxLength ) < length ofToString ( RequireObjectCoercible ( randominput ) ) )){
		var output = new String(randominput).padEnd(maxLength,fillString);
		assert.strictEqual(ToString ( RequireObjectCoercible ( randominput ) ), output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_string_prototype_padstart(randominput,maxLength,fillString){
	if (( ToLength ( maxLength ) < length ofToString ( RequireObjectCoercible ( randominput ) ) )){
		var output = new String(randominput).padStart(maxLength,fillString);
		assert.strictEqual(ToString ( RequireObjectCoercible ( randominput ) ), output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_string_prototype_repeat(randominput,count){
	if (( ToInteger ( count ) < 0 )){
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
	if (( ToInteger ( count ) === + Infinity )){
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


function test_string_prototype_replace(randominput,searchValue,replaceValue){if  ( replacer != undefined  ) { if  ( IsCallable ( replaceValue ) === false  ) { if  ( IsCallable ( ToString ( ToString (ToString(replaceValue)) ) ) === true  ) { 
		console.log("OK Test")
}


function test_string_prototype_search(randominput,regexp){if  ( searcher != undefined  ) { 
		console.log("OK Test")
}


function test_string_prototype_split(randominput,separator,limit){if  ( splitter != undefined  ) { 
	if (( lim = 0 )){
		var output = new String(randominput).split(separator,limit);
		assert.strictEqual(A, output);
		console.log("Good Test");
		return;
		}if  ( separator === undefined  ) { 
	if (( z != false )){
		var output = new String(randominput).split(separator,limit);
		assert.strictEqual(A, output);
		console.log("Good Test");
		return;
		}
	if (( 0= lim )){
		var output = new String(randominput).split(separator,limit);
		assert.strictEqual(A, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_string_prototype_startswith(randominput,searchString,position){
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
	if (( length of searchStr + start > length ofToString ( RequireObjectCoercible ( randominput ) ) )){
		var output = new String(randominput).startsWith(searchString,position);
		assert.strictEqual(false, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_string_raw(randominput,template,substitutions){
	if (( literalSegments <=  0 )){
		var output = new String(randominput).raw(template,substitutions);
		assert.strictEqual("", output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_validateatomicaccess( typedArray, requestIndex ){
	if (( ToIndex ( requestIndex ) >= typedArray )){
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
	}if  ( onlyInt32 === true  ) { 
	if (( typedArray != "Int32Array" )){
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
	if (( IsSharedArrayBuffer ( typedArray ) === false )){
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


function test_weakmap_prototype_delete(randominput,key){
	if (( typeof (randominput ) != "object" )){
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
	if (( typeof ( key ) != "object" )){
		var output = randominput.delete(key);
		assert.strictEqual(false, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_weakmap_prototype_get(randominput,key){
	if (( typeof (randominput ) != "object" )){
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
	if (( typeof ( key ) != "object" )){
		var output = randominput.get(key);
		assert.strictEqual(undefined, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_weakmap_prototype_has(randominput,key){
	if (( typeof (randominput ) != "object" )){
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
	if (( typeof ( key ) != "object" )){
		var output = randominput.has(key);
		assert.strictEqual(false, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_weakmap_prototype_set(randominput,key,value){
	if (( typeof (randominput ) != "object" )){
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
	if (( typeof ( key ) != "object" )){
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
		console.log("OK Test")
}


function test_weakset_prototype_add(randominput,value){
	if (( typeof (randominput ) != "object" )){
		 try{
			var output = randominput.add(value);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	if (( typeof ( value ) != "object" )){
		 try{
			var output = randominput.add(value);
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


function test_weakset_prototype_delete(randominput,value){
	if (( typeof (randominput ) != "object" )){
		 try{
			var output = randominput.delete(value);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	if (( typeof ( value ) != "object" )){
		var output = randominput.delete(value);
		assert.strictEqual(false, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}


function test_weakset_prototype_has(randominput,value){
	if (( typeof (randominput ) != "object" )){
		 try{
			var output = randominput.has(value);
			console.log("Bad Test/Failed Test");
			 return;
		}catch(e){
			assert.strictEqual(true, eval(e instanceof TypeError));
			console.log("Good Test");
			return;
		}
	}
	if (( typeof ( value ) != "object" )){
		var output = randominput.has(value);
		assert.strictEqual(false, output);
		console.log("Good Test");
		return;
		}
	if (( e != empty && SameValue ( e , value ) === true )){
		var output = randominput.has(value);
		assert.strictEqual(true, output);
		console.log("Good Test");
		return;
		}
		console.log("OK Test")
}
