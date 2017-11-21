var obj = {};

Object.defineProperty(obj, 'attrib', {
  value: 42,
  writable: true,
  configurable: false, //attrib cannot be deleted
});

console.log(obj.attrib);
console.log(delete obj.attrib);
console.log(obj.attrib);

var obj2 = {};

Object.defineProperty(obj2, 'attrib', {
  value: 42,
  writable: true,
  configurable: true, //attrib can be deleted
});

console.log(obj2.attrib);
console.log(delete obj2.attrib);
console.log(obj2.attrib);
