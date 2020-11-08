class Thermostat {

  constructor() {
    this.temp = 20;
    this.minTemp = 10;
    this.maxTemp = 25;
    this.powerSave = 'ON';
  };

  increaseTemp(num = 1) {
    if((this.temp + num) >= this.maxTemp) {
      this.temp = this.maxTemp;
    } else {
      this.temp += num ;
    };
  };

  decreaseTemp(num = 1) {
    this.temp -= num ;
  };

  powerSaveOff() {
    this.powerSave = 'OFF';
    this.maxTemp = 32;
  };

  powerSaveOn() {
    this.powerSave = 'ON';
    this.maxTemp = 25;
    if(this.temp > this.maxTemp) {
      this.temp = 25;
    };
  };

  reset() {
    this.temp = 20;
    this.powerSaveOn();
  };

  usage() {
    if(this.temp <= 18) {
      return 'low-usage'
    }
    else if(this.temp >= 19 && this.temp <= 25) {
      return 'medium-usage'
    }
    else {
      return 'high-usage'
    }
  };

};