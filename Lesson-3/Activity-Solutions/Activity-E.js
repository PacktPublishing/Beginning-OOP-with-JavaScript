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



cameraMixin = {
      takeSnapshot() {
            return "Snapshot";
    },
      takePicture() {
            return "Picture";
    },
      takeVideo() {
            return "Video";
    }
};

GPSMixin = {
      getCurrentLocation() {
            return "Location";
    }
};

accelerometerMixin = {
      getAccelerationX() {
            return "X";
    },
      getAccelerationY() {
            return "Y"
    },
      getAccelerationZ() {
            return "Z";
    }
};

Object.assign(Phone.prototype, cameraMixin);
Object.assign(Phone.prototype, GPSMixin);
Object.assign(Phone.prototype, accelerometerMixin);

var myPhone = new Phone("mySmartPhoneModel", 19191919);
