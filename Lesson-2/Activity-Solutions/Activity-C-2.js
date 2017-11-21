var Reservation = (function() {
  function ReservationConstructor(date, customerName, customerEmail, 
numberOfAdults, numberOfChildren) {
    var emailRegExp = /\w+@\w+\.\w{2,4}/i;
    var _number = new Date().getTime();
    var _date = date;
    var _customerName = customerName;
    var _customerEmail = customerEmail;
    var _numberOfAdults = numberOfAdults;
    var _numberOfChildren = numberOfChildren;

    if (_date <= new Date()) {
             throw new Error("The reservation date cannot be today or before today");
    }
    if (!/^[a-zA-Z ]*$/.test(_customerName)) {
              throw new Error("The customer name is invalid");
    }
    if (!emailRegExp.test(_customerEmail)) {
            throw new Error("Invalid email address!");
    }
    if (_numberOfAdults + _numberOfChildren >= 5) {
             throw new Error("The total number of adults and children cannot be more than 5");
    }
    if (_numberOfAdults + _numberOfChildren >= 5) {
             throw new Error("The total number of adults and children cannot be more than 5");
    }

    Object.defineProperty(
      this,
      "number",
      { 
        get: function() { return _number; }
      }
    );

    Object.defineProperty(
      this,
      "date",
      {
        get: function() {
          return _date;
        },
        set: function(value){
          if (value <= new Date()) {
            throw new Error("The reservation date cannot be today or before today");
          }
          _date = value;
        }
      }
    );

    Object.defineProperty(
      this,
      "customerName",
      {
        get: function() {
          return _customerName;
        },
        set: function(value){
          if (!/^[a-zA-Z ]*$/.test(_customerName)) {
            throw new Error("The customer name is invalid");
          }
          _customerName = value;
        }
      }
    );

    Object.defineProperty(
      this,
        "customerEmail",
        {
          get: function() { return _customerEmail; },
          set: function(value) {
            if (emailRegExp.test(value)) {
               _email = value;
            } else {
              throw new Error("Invalid email address!");
            }
          }
        }
    );

    Object.defineProperty( 
      this,
      "numberOfAdults",
      {
        get: function() {
          return _numberOfAdults;
        },
        set: function(value){
          if (value + _numberOfChildren >= 5) {
            throw new Error("The total number of adults and children cannot be more than 5");
          }
          _numberOfAdults = value;
        }
      }
    );

    Object.defineProperty(
      this,
      "numberOfChildren",
      {
        get: function() {
          return _numberOfChildren;
        },
        set: function(value){
          if (_numberOfAdults + value >= 5) {
            throw new Error("The total number of adults and children cannot be more than 5");
          }
          _numberOfChildren = value;
       }
      }
    );

  }

  return ReservationConstructor;
}());
