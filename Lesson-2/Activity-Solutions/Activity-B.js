var  Hotel = (function() { 
  var priv = new WeakMap();

  function HotelConstructor(maxRoomsCount) {
    var privateMembers = {rooms: []};
    priv.set(this, privateMembers);
    this.maxSize = maxRoomsCount;
  }

  HotelConstructor.prototype.book = function(person)    {
    priv.get(this).rooms.push(person);
  };

  HotelConstructor.prototype.countAvailableRooms = function() {
    return this.maxSize - priv.get(this).rooms.length;
  };

  HotelConstructor.prototype.isFull = function() {
    return priv.get(this).rooms.length <= 0;
  };

  HotelConstructor.prototype.countBookedRooms = function() { 
    return priv.get(this).rooms.length;
  };

  return  HotelConstructor;
}());
