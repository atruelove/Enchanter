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