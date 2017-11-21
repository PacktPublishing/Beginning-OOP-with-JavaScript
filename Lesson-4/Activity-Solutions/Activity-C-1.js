Object.prototype.implementsMethod = function(method) {
  return !!(this[method] && this[method] instanceof Function);
};

Object.prototype.implementsProperty = function(property) {
  return !!(this[property] && !(this[property] instanceof    Function));
};

function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}

Person.prototype.pay = function(amount) {
  //make a payment
};



function Hotel(roomsCount) {
  this.rooms = [];

  for (let i=0; i < roomsCount; i++) {
    this.rooms.push([]);
  }
}



Hotel.prototype.accomodateInRoom = function(roomNumber, guests) {
  if (typeof roomNumber !== "number") {
    throw new Error("Invalid room number type. Please, provide a number"); 
  }
  for (let i=0; i < guests.length; i++) {
    if (guests[i].implementsProperty("name") && guests[i].implementsMethod("pay")) {
      this.rooms[roomNumber].push(guests[i]); 
    } else {
      throw new Error("Invalid guest type. Only persons are admitted"); 
    }
  }
};

var hotel = new Hotel(10);

hotel.accomodateInRoom(2, [new Person("John", "Smith")]);
//positive case
hotel.accomodateInRoom(2, [{name: "Mario", surname: "Rossi", pay() {}}]);
//positive case
hotel.accomodateInRoom(2, [{name: "Rick", surname: "Jones"}]);
//negative case
