class SoftwareHouse {
	constructor() {
		this.employees = [];
	}

	hire(dev) {
		if (dev instanceof Person) {
				this.employees.push(dev);
		} else {
			throw new Error("This software house only hires people!");
		}
	}

	createSoftware() {
		var newSoftware = [];
		var employee;
		var module;

		   this.employees.forEach(function(employee) {
                     module = employee.writeCode();
                     newSoftware.push(module);
                   });



		return newSoftware;
	}
}
