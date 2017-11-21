function Building(street, city, nFloors) {
   this.address = {street: street, city: city};
   this.numberOfFloors = nFloors;
   this.numberOfRooms = 0;
}

function School(name) {
   this.name = name;
   this.numberOfGymns = 0;
   this.gardenSize = 0;
}

School.prototype = new Building();

function Castle(name) {
   this.name = name;
   this.numberOfTowers = 0;
}

Castle.prototype = new Building();

var school = new School("My school");
var castle = new Castle("My Castle");
