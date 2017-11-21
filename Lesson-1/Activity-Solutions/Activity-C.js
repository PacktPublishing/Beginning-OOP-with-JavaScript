function Hotel(name, street, city, phoneNumber) {
   this.name = name;
   this.address = {
      street: street,
      city: city
   };
   this["phone-number"] = phoneNumber;
}

Hotel.prototype.getInfo = function() {
   return this.name + " - " + this.address.street + ", " + this.address.city + " - tel. " + this["phone-number"];
}

var hotel1 = new Hotel("My Hotel", "30 Nelson Street", "Edinburgh", "3281738263");
var hotel2 = new Hotel("Your Hotel", "50 Parker Square", "New York", "3458264829");
