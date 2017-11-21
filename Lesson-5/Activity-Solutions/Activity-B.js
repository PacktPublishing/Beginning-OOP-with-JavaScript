function RoomReservationFactory() {

  this.create = function(date, customerName, hotelName) {
    let roomNumber = hotelReservationCentre.getAvailableRoom(hotelName);
    let reservation = new RoomReservation(date, customerName, hotelName, 
roomNumber);

      reservation.id = hotelReservationCentre.getNewReservationId();
    return reservation;
  };
}


function FlightReservationFactory() {
  this.create = function(date, customerName, flightNumber) {
    let seatNumber = flightReservationCentre.getAvailableSeat(flightNumber);
    let reservation = new FlightReservation(date, customerName, flightNumber, seatNumber);

    reservation.id = flightReservationCentre.getNewReservationId();

    return reservation;
  };
}

var tour = [];

var flightReservationFactory = new FlightReservationFactory();
var roomReservationFactory = new RoomReservationFactory();

tour.push(flightReservationFactory.create(new Date(2017, 12, 20, 11, 30), "John 
Smith", "XY123O"));
tour.push(roomReservationFactory.create(new Date(2017, 12, 20), "John Smith", 
"Hotel Royal"));
