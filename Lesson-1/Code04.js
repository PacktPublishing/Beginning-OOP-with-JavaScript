var johnSmith = {
   name: "John",
   surname: "Smith",
   address: {
      street: "13 Duncannon Street",
      city: "London",
      country: "United Kingdom"
   },
   displayFullName: function() {
      return this.name + " " + this.surname;
    }
};
var marioRossi = {
   name: "Mario",
   surname: "Rossi",
   address: { 
      street: "Piazza Colonna 370",
      city: "Roma",
      country: "Italy"
   },
   displayFullName: function() {
      return this.name + " " + this.surname;
   }
};
