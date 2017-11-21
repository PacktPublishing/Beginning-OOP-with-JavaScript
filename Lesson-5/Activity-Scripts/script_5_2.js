//Dummy hotel reservation centre
var hotelReservationCentre = {
  reservationCounter: 0,
  getAvailableRoom(hotelname) {return Math.floor((Math.random() * 100) + 1);},
  getNewReservationId() {return ++this.reservationCounter;}
};

//Dummy flight reservation centre
var flightReservationCentre = {
  reservationCounter: 0,
  getAvailableSeat(flightNumber) {return Math.floor((Math.random() * 200) + 1);},
  getNewReservationId() {return ++this.reservationCounter;}
};



class RoomReservation {
  constructor(date, customerName, hotelName, roomNumber) {
    this.id = 0;
    this.date = date;
	this.customerName = customerName;
	this.hotelName = hotelName;
	this.roomNumber = roomNumber;
  }
}

class FlightReservation {
  constructor(date, customerName, flightNumber, seatNumber) {
    this.id = 0;
    this.date = date;
	this.customerName = customerName;
	this.flightNumber = flightNumber;
	this.seatNumber = seatNumber;
  }
}
