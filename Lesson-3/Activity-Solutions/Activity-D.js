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
function SmartPhone(model, number, ramSize) {
      Phone.call(this, model, number);
      Computer.call(this, model, ramSize);
}

SmartPhone.prototype = Object.create(Phone.prototype);
SmartPhone.prototype.constructor = SmartPhone;
