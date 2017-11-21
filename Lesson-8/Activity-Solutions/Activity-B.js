(function(nameSpace) {
  nameSpace.version = "1.0";
  nameSpace.name = "Constructors";
  nameSpace.Person = function(name, surname) {
    this.name = name;
    this.surname = surname;
  };
  nameSpace.Hotel = function(name, address) {
    this.name = name;
    this.address = address;
  };
})(myApplication);
