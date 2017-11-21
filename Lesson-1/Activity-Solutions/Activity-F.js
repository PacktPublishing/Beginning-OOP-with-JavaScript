class Hotel {
   constructor(name, street, city, phoneNumber, ownerName, ownerSurname) {
      this.name = name;
      this.address = {
          street: street,
          city: city
      };
      this["phone-number"] = phoneNumber;
      this.owner = {
          name: ownerName,
          surname: ownerSurname
      },
      this.staff = [],
      this.rooms = [
          {roomNumber: 1, nBeds: 2},
          {roomNumber: 2, nBeds: 3},
          {roomNumber: 3, nBeds: 2}
      ]
    }

    getInfo() {
      return this.name + " - " + this.address.street + ", " + this.address.city + " - tel. " + this["phone-number"];
    }
}
