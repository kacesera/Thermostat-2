describe('Thermostat', () => {

  // <!-- Thermostat starts at 20 degrees -->
  beforeEach(() => {
    thermostat = new Thermostat;
  });

  it('starts at 20 degrees', () => { 
    expect(thermostat.temp).toEqual(20);
  });

  it('can increase temp', () => {
    thermostat.increaseTemp();
    expect(thermostat.temp).toEqual(21)
  });

  it('can decrease temp', () => {
    thermostat.decreaseTemp();
    expect(thermostat.temp).toEqual(19)
  });

  it('has a minimum temp of 10 degrees', () => {
    expect(thermostat.minTemp).toEqual(10);
  });

  it('has a max temp of 25 degrees, if powerSave is on', () => {
    expect(thermostat.maxTemp).toEqual(25);
  });

  it('has a max temp of 32 degrees, if powerSave is off', () => {
    thermostat.powerSaveOff();
    expect(thermostat.maxTemp).toEqual(32);
  });
  
  it('has powerSave on as default, but it can be turned off', () => {
    expect(thermostat.powerSave).toEqual('ON');
    thermostat.powerSaveOff();
    expect(thermostat.powerSave).toEqual('OFF');
  });

  it('can reset temp back to 20 degrees', () => {
    thermostat.increaseTemp();
    thermostat.reset();
    expect(thermostat.temp).toEqual(20);
    expect(thermostat.powerSave).toEqual('ON');
  });

  it('can turn powerSave on, when it is off', () => {
    thermostat.powerSaveOff();
    thermostat.powerSaveOn();
    expect(thermostat.maxTemp).toEqual(25);
  });

  it('energy usage is low-usage', () => {
    thermostat.decreaseTemp(2)
    expect(thermostat.usage()).toEqual('low-usage');
  });

  it('energy usage is between 19 and 25 is medium-usage', () => {
    expect(thermostat.usage()).toEqual('medium-usage');
  });

  it('energy usage is higher than 25', () => {
    thermostat.powerSaveOff();
    thermostat.increaseTemp(10);
    expect(thermostat.usage()).toEqual('high-usage');
  });

});
