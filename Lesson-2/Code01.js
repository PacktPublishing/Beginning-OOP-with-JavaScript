class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

function TheatreSeats() {
  this._seats = [];
}

TheatreSeats.prototype.placePerson = function(person) {
  this._seats.push(person);
};

var theatreSeats = new TheatreSeats();

theatreSeats.placePerson({name: "John", surname: "Smith"});
