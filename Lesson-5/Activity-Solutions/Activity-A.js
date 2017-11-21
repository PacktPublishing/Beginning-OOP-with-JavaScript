class Reservation {
  constructor(reservationId, reservationDate, hotelId, roomId, customerName, customerEmail) {
    this.id = reservationId;
    this.date = reservationDate;
    this.hotelId = hotelId;
    this.roomId = roomId;
    this.customerName = customerName;
    this.customerEmail = customerEmail;
  }
}

var ReservationCentre = (function(){
  var instance;
  var reservations = [];

  return class {
    constructor() {
      if (!instance) {
        instance = this;
      }

      return instance;
    }

    addReservation(reservation) {
      reservation.id = reservations.length + 1;
      reservations.push(reservation);

      return reservation;
    }

    getReservation(reservationId) {
      var result = null;

      for (let i=0; i< reservations.length; i++) {
        if (reservations[i].id == reservationId) {
          result = reservations[i];
        }
      }

      return result;
    }
  };
})();
