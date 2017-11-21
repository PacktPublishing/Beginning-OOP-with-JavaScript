function Phone(model, number) {
	this.model = model;
	this.number =  number;
	this.addressBook = [];
}

Phone.prototype.ring = function() {
	return "Drin drin!";
};

Phone.prototype.dial = function(number) {
	//connecting to number;
};


function Computer(model, ramSize) {
	this.model = model;
  	this.ramSize = ramSize;
	this.apps = [];
}

