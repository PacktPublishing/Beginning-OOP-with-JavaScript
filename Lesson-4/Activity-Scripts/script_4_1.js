Object.prototype.implementsMethod = function(method) {
	return !!(this[method] && this[method] instanceof Function)
};

Object.prototype.implementsProperty = function(property) {
	return !!(this[property] && !(this[property] instanceof Function))
};

