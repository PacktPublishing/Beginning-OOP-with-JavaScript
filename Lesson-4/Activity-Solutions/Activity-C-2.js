class Interface {
  constructor(name, methods=[], properties=[]) {
    this.name = name;
    this.methods = [];
    this.properties = [];

    for (let i = 0, len = methods.length; i < len; i++) {
      if (typeof methods[i] !== 'string') {
        throw new Error("Interface constructor expects method names to be passed in as a string.");
      }
      this.methods.push(methods[i]);
    }

    for (let i = 0, len = properties.length; i < len; i++) {
      if (typeof properties[i] !== 'string') {
        throw new Error("Interface constructor expects property names to be 
passed in as a string.");
      }
      this.properties.push(properties[i]);
    }
  }

  isImplementedBy(obj) {
    var methodsLen = this.methods.length;
    var propertiesLen = this.properties.length;
    var currentMember;

    if (obj) {
      //check methods
      for (let i = 0; i < methodsLen; i++) {
        currentMember = this.methods[i];
        if (!obj[currentMember] || typeof obj[currentMember] !==
        "function") {
          throw new Error("The object does not implement the interface " + 
this.name + ". Method " + currentMember + " not found.");
        }
      }

      //check properties 
      for (let i = 0; i < propertiesLen; i++) {
        currentMember = this.properties[i];
        if (!obj[currentMember] || typeof obj[currentMember] ===
        "function") {
          throw new Error("The object does not implement the interface " + 
this.name + ". Property " + currentMember + " not found.");
        } 
      } 
    } else {
      throw new Error("No object to check!");
    }
  }
}

function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}

Person.prototype.pay = function(amount) {
  //make a payment
};

var IAdmittable = new Interface("IAdmittable", ["pay"],  ["name"]);



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
    IAdmittable.isImplementedBy(guests[i]);
    this.rooms[roomNumber].push(guests[i]); 
  }
};

var hotel = new Hotel(10);

hotel.accomodateInRoom(2, [new Person("John", "Smith")]);
//positive case
hotel.accomodateInRoom(2, [{name: "Mario", surname: "Rossi", pay() {}}]);
//positive case
hotel.accomodateInRoom(2, [{name: "Rick", surname: "Jones"}]);
//negative case
