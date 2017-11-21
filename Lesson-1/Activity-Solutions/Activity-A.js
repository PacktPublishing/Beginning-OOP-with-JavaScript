var hotel = {
   name: "My Hotel",
   address: {
      street: "30 Nelson Street",
      city: "Edinburgh"
   },
   "phone-number":"3281738263",
   getInfo: function() {
      return this.name + " - " + this.address.street + ", " + 
      this.address.city + " - tel. " + this["phone-number"];
    }
};
