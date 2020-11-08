$(document).ready(function() {
  let thermostat = new Thermostat();
  updateTemperature();

  $('#up').on('click', () => {
    thermostat.increaseTemp();
    updateTemperature();
  });

  $('#down').on('click', () => {
    thermostat.decreaseTemp();
    updateTemperature();
  });

  $('#power_save_on').on('click', () => {
    thermostat.powerSaveOn();
    updatePSM();
  });

  $('#power_save_off').on('click', () => {
    thermostat.powerSaveOff();
    updatePSM();
  });

  $('#reset').on('click', () => {
    thermostat.reset();
    updateTemperature();
    updatePSM();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temp);
  }

  function updatePSM() {
    $('#power_save_status').text(thermostat.powerSave);
  }
})