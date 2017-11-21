function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}



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
    if (guests[i] instanceof Person) {
      this.rooms[roomNumber].push(guests[i]); 
    } else {
      throw new Error("Invalid guest type. Only persons are admitted"); 
    }
  }
};

var hotel = new Hotel(10);

hotel.accomodateInRoom(2, [new Person("John", "Smith")]);
hotel.accomodateInRoom(2, [{name: "Mario", surname: "Rossi"}]);
