//Person class has been declared in Code01.js

function TheatreSeats() {
  var seats = [];

  this.placePerson = function(person) {
    seats.push(person);
  };
}
