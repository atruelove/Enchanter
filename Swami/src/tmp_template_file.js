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