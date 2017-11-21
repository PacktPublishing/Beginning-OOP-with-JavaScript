function Person(name, surname) {
	this.name = name;
	this.surname = surname;
	this.parent = null;
}

var company = {
	name: "ACME Inc.",
	employees: []
};

var johnSmith = new Person("John", "Smith");
var marioRossi = new Person("Mario", "Rossi");

company.employees.push(johnSmith);
company.employees.push(marioRossi);
