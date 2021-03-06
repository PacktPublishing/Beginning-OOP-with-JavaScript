var  TheatreSeats = (function() {
  var seats = [];

  function TheatreSeatsConstructor() {
    this.maxSize = 10;
  }
	
  TheatreSeatsConstructor.prototype.placePerson = function(person) {
	seats.push(person);
  };
	
  TheatreSeatsConstructor.prototype.countOccupiedSeats = function() {
	return seats.length;
  };
	
  TheatreSeatsConstructor.prototype.isSoldOut = function() {
	return seats.length >= this.maxSize;
  };
	
  TheatreSeatsConstructor.prototype.countFreeSeats = function() {
	return this.maxSize - seats.length;
  };
	
  return  TheatreSeatsConstructor;
}());

var t1 = new TheatreSeats();
var t2 = new TheatreSeats();

t1.placePerson({name: "John", surname: "Smith"});

console.log(t1.countFreeSeats());		//result: 9
console.log(t2.countFreeSeats());		//result: 9

