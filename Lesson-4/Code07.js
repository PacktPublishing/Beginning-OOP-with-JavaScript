class SoftwareHouse {
	constructor() {
		this.employees = [];
	}

	hire(dev) {
		if (dev && dev["writeCode"] && dev["writeCode"] instanceof Function) {
			this.employees.push(dev);
		} else {
			throw new Error("The argument does not implement the writeCode method")
		}
	}
}
