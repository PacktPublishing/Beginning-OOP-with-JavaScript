(function (root, factory) { 
  if (typeof define === 'function' && define.amd) { 
    // AMD. Register as an anonymous module. 
    define(['module1'], factory); 
  } else if (typeof exports === 'object') { 
    // Node. Does not work with strict CommonJS, but 
    // only CommonJS-like environments that support 
    //module.exports, like Node. 
    module.exports = factory(require('module1')); 
  } else { 
    // Browser globals (root is window) 
    root.returnExports = factory(root.module1); 
  } 
}(this, function (module1) { 
  //Module code 
  return {/*...*/}; 
})); 