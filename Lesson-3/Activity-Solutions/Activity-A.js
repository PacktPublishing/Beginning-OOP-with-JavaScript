function Room(bedsCount, windowsCount, roomSize) {
  this.bedsCount = bedsCount;
  this.windowsCount =  windowsCount;
  this.roomSize =  roomSize;
}

function SuperiorRoom(bedsCount, windowsCount) {
  Room.apply(this, arguments);
  this.roomSize = 25;
  this.miniBar =  [];
  this.hasBathtub = true;
}

SuperiorRoom.prototype = Object.create(Room.prototype);
SuperiorRoom.prototype.constructor = SuperiorRoom;

function SuiteRoom(bedsCount, windowsCount) {
  Room.apply(this, arguments);
  this.roomSize = 50;
  this.bar =  [];
  this.hasWhirlpooltub = true;
  this.parlour = [];
}

SuiteRoom.prototype = Object.create(Room.prototype);
SuiteRoom.prototype.constructor = SuiteRoom;
