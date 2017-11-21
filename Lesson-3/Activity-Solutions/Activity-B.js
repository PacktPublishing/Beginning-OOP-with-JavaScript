class Room {
      constructor(bedsCount, windowsCount, roomSize) {
      this.bedsCount = bedsCount;
      this.windowsCount =  windowsCount;
      this.roomSize =  roomSize;
    }
}

class SuperiorRoom extends Room{
      constructor(bedsCount, windowsCount) {
      super(bedsCount, windowsCount, 25);
      this.roomSize = 25;
      this.miniBar =  [];
      this.hasBathtub = true;
    }
}

class SuiteRoom extends Room {
      constructor(bedsCount, windowsCount) {
      super(bedsCount, windowsCount);
      this.roomSize = 50;
      this.bar =  [];
      this.hasWhirlpooltub = true;
      this.parlour = [];
    }
}
