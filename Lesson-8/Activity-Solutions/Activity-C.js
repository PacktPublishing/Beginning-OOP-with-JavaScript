var staffModule = (function() {
  class Person {
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
    }
  }

  class Concierge extends Person {
    constructor(name, surname) {
      super(name, surname);
    }
  
    assignRoom(room, customer) {
      /* Dummy function to assign a room to a customer */
    }
  }

  class Bellhop extends Person {
    constructor(name, surname) {
      super(name, surname);
    }
  
    shipBaggage(baggage, room) {
      /* Dummy function to ship a baggage into a room*/
    }
  }

  class Waiter extends Person {
    constructor(name, surname) {
      super(name, surname);
    }

    takeOrder(customer, order) {
      /* Dummy function to take an order from a customer*/
    }
  }

  return {
    Concierge,
    Bellhop,
    Waiter
  };
})();
