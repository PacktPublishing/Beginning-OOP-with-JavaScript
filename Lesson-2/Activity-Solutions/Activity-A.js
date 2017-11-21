class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}
function Hotel(maxRoomsCount) {
  var rooms = [];

  this.book = function(person) {
    rooms.push(person);
  };
  this.countAvailableRooms = function() {
    return this.maxSize - rooms.length;
  };

  this.maxSize = maxRoomsCount;
}

Hotel.prototype.isFull = function() {
  return this.countAvailableRooms() <= 0;
}; 

Hotel.prototype.countBookedRooms = function() {
  return this.maxSize - this.countAvailableRooms();
};
