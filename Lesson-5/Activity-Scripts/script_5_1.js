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