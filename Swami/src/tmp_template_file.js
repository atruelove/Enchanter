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