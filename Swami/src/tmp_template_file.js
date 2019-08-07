function test_typedarray( typedArray ){
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
	var elementType =String value ofElement Type value in Table 56 for constructorName;
	var elementLength = srcArray;
	var srcName =String value of srcArray;
	var srcType =String value ofElement Type value in Table 56 for srcName;
	var srcElementSize =Element Size value in Table 56 for srcName;
	var srcByteOffset = srcArray;
	var elementSize =Element Size value in Table 56 for constructorName;
	var byteLength = elementSize * elementLength;
	else {
		var srcByteIndex = srcByteOffset;
		var targetByteIndex = 0;
		var count = elementLength;
		while ( count > 0 ) { 
			count = count - 1
			}

		}

}