function Company(name) {
	var employees = [];

	this.name = name;

	this.getEmployees = function() { 
		return employees;
	};
	this.addEmployee = function(employee) { 
		employees.push(employee);
	};
	this.sortEmployeesByName = function() {
		//...
	};
}

var company = new Company("ACME Inc.");
