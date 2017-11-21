var person = {};

Object.defineProperty(
  person,
  "name",
  { 
    value: "John",
    writable: true,
    configurable: true,
    enumerable: true
  }
);
