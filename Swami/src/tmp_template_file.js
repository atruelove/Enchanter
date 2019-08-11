function test_string(randominput,value){
		var s = "";
	else {
		if (( typeof  NewTarget === 'undefined' && typeof ( value ) === Symbol )){
			var output = new String(randominput).String(value);
			new TestCase("string", "string", SymbolDescriptiveString ( value ), output);
			test();
			return;
			}
		var s = ToString(value);
	}

	if (( typeof  NewTarget === 'undefined' )){
		var output = new String(randominput).String(value);
		new TestCase("string", "string", s, output);
		test();
		return;
		}
}