function Room(bedsCount, windowsCount) {
  this.bedsCount = bedsCount;
  this.windowsCount =  windowsCount;
}

Room.prototype.getDescription = function() {
     return "This room has " + this.bedsCount + " beds and " + 
this.windowsCount + " windows";

};

function SuperiorRoom(bedsCount, windowsCount) {
  Room.apply(this, arguments);
  this.roomSize = 25;
  this.miniBar =  [];
  this.hasBathtub = true;

  Object.preventExtensions(this);
  Object.seal(this);
}

SuperiorRoom.prototype = Object.create(Room.prototype);
SuperiorRoom.prototype.constructor = SuperiorRoom;
SuperiorRoom.prototype.getDescription = function() {
   return Room.prototype.getDescription.call(this) + ". It is " + 
this.roomSize + " square meters large and has a minibar and a Bathtub";

};
