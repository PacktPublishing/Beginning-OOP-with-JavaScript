(function() {
	var pi = 3.14;
	var exportObj;

	function circumference(radius) {
		return 2*pi*radius;
	}

	function circleArea(radius) {
		return pi*radius*radius;
	}

	exportObj = {
		calculateCircumference:  circumference,
		calculateCircleArea:   circleArea
	};

	if (typeof define === 'function') {
  		define([], function () {
    		return exportObj;
  		});
	}
})();
