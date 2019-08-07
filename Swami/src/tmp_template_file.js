function test_typedarray( typedArray ){
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
	var elementLength = srcArray;
	var srcByteOffset = srcArray;
	var byteLength = elementSize * elementLength;
	else {
		var srcByteIndex = srcByteOffset;
		var targetByteIndex = 0;
		var count = elementLength;
		while ( count > 0 ) { 
			count = count - 1
			}

		}

		console.log("OK Test")
}