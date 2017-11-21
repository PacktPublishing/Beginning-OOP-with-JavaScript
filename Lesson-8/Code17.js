var declaration = "var x = 123;";

function evaluate(code) {
	window.eval(code);
	return x;
}

console.log(evaluate(declaration));	//result: 123
console.log(x);				//result: 123


//function getFileContent(moduleName) { /*...*/ }

//function loadModule(moduleName) {
//	var moduleCode;
//	var module;

//	if (moduleName in loadModule.cache) {
//		module =  loadModule.cache[moduleName];
//	} else {
//		moduleCode = new Function("return " + getFileContent(moduleName));
//		module = moduleCode();
//		loadModule.cache[moduleName] = module;
//	}

//	return module;
//}

//loadModule.cache = {};
