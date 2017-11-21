class Computer {
  constructor(cpuType, ramSize, diskSize) {
    this.cpuType = cpuType;
	this.ramSize = ramSize;
	this.diskSize = diskSize;
	this.operatingSystem = "";
  }
}

class SmartPhone {
  constructor(ramSize) {
    this.cpuType = "ARM";
	this.ramSize = ramSize;
	this.diskSize = 8;
	this.operatingSystem = "";
  }
}
