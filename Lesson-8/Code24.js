//(function (root, factory) {
//  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
//    define([], factory);
//  } else if (typeof exports === "object") {
// Node. Does not work with strict CommonJS, but
// only CommonJS-like environments that support
// module.exports, like Node.
//    module.exports = factory();
//  } else {
// Browser globals (root is window)
//    root.returnExports = factory();
// }(this, function () {
// Module code
//  return {...};
// }));


(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.returnExports = factory();
    }
}(this, function () {
	var pi = 3.14;

	function circumference(radius) {
		return 2*pi*radius;
	}

	function circleArea(radius) {
		return pi*radius*radius;
	}

	return {
		calculateCircumference:  circumference,
		calculateCircleArea:   circleArea
	};
}));