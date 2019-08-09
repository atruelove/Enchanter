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
	var len = S.length;
	var start = Math.min (Math.max (pos, 0), len);
		console.log("OK Test")
}