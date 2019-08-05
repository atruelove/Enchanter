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