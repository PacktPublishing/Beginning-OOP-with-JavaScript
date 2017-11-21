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


class ComputerBuilder {
  constructor(specs) {
    this.specs = specs;
  }
  
  createHardware() {
    this.product = new Computer(this.specs.cpuType, this.specs.ramSize, 
this.specs.diskSize);
  }
  
  installSoftware() {
    this.product.operatingSystem = this.specs.operatingSystem;
  }
  
  getProduct() {
    return this.product;
  }
}

class SmartPhoneBuilder {
  constructor(specs) {
    this.specs = specs;
  }
  
  createHardware() {
    this.product = new SmartPhone(this.specs.ramSize);
  }
  
  installSoftware() {
    this.product.operatingSystem = this.specs.operatingSystem;
  }
  
  getProduct() {
    return this.product;
  }
}

class TechProducer {
  buildProduct(builder) {
    builder.createHardware();
    builder.installSoftware();

    return builder.getProduct();
  }
}


var techProducer = new TechProducer();
var computerBuilder = new ComputerBuilder({cpuType: "i7", ramSize: "8", diskSize: 
"500", operatingSystem: "Windows 10"});
var smartPhoneBuilder = new SmartPhoneBuilder({ramSize: "4", operatingSystem: 
"Android 7"});

var computer = techProducer.buildProduct(computerBuilder);
var smartPhone = techProducer.buildProduct(smartPhoneBuilder);

console.log(computer);
console.log(smartPhone);
