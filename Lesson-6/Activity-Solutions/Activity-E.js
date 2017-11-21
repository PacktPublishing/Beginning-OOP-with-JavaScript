function observable(value) {

  var subscribers = [];

  function notify(newValue) {
      for (var i = 0; i < subscribers.length; i++) {
        subscribers[i](newValue);
      }
  }

  function accessor(newValue) {
    if (arguments.length && newValue !== value) {
      value = newValue;
      notify(newValue);
    }
    return value;
  }

  accessor.subscribe = function(subscriber) {
    subscribers.push(subscriber);
  };

  return accessor;
}


class WareHouse {
  constructor() {
    this.items = [];
    this.count = observable(0);
  }

  put(item) {
    this.items.push(item);
    this.count(this.count() + 1);
  }

  take() {
    if (this.items.length > 0) {
     this.count(this.count() - 1);
      return this.items.pop();
    }
  }
}

var wareHouse = new WareHouse();

wareHouse.put(1);
wareHouse.put(12);
wareHouse.put(13);
wareHouse.put(41);
wareHouse.put(31);
wareHouse.put(16);


wareHouse.count.subscribe(function(value) {
  if (value < threshold) {
    console.log("Under minimum threshold!");
  }
});


wareHouse.take();
wareHouse.take();
