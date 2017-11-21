class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

export class Concierge extends Person {
  constructor(name, surname) {
    super(name, surname);  
  }
  
  assignRoom(room, customer) {
    /* Dummy function to assign a room to a customer */
  }
}

export class Bellhop extends Person {
  constructor(name, surname) {
    super(name, surname);  
  }
  
  shipBaggage(baggage, room) {
    /* Dummy function to ship a baggage into a room*/
  }
}

export class Waiter extends Person {
  constructor(name, surname) {
    super(name, surname);  
  }
  
  takeOrder(customer, order) {
    /* Dummy function to take an order from a customer*/
  }
}


--------------
import {Waiter} from "staff";

var waiter = new Waiter("John", "Smith");
