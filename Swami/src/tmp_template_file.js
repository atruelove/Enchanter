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