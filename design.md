MVP Requirements

- The Thermostat starts with an initial temperature of 20 degrees
- You can increase the temperature with an up method
- You can decrease the temperature with a down method
- The minimum possible temperature is 10 degrees
- The Power saving mode is on by default but it can also be turned off
- If power saving mode is on, the maximum temperature is 25 degrees
- If power saving mode is off, the maximum temperature is 32 degrees
- You can reset the temperature to 20 with a reset method
- You can ask about the thermostat's current energy usage: < 18 is low-usage, <= 25 is medium-usage, anything else is high-usage.

Notes
- Temperature variable - default value 20
- Power Saver Method - powerSaverOn boolean. True? Max temp 25. False? Max temp 32. Default true
- Up Method - takes integer as argument, resets temperature to self + integer
- Down Method - takes integer as argument, resets temperature to self - integer
- Reset Method - Resets temperature value to 20
- Check usage method - if else statement - < 18 is low-usage, <= 25 is medium-usage, anything else is high-usage.





Doubles 

const thermostat = new Thermostat();

thermostat.getTemperature(); // should return 20

thermostat.up();
thermostat.up();
thermostat.getTemperature(); // should now return 22

thermostat.down();
thermostat.getTemperature(); // should now return 21

thermostat.setPowerSavingMode(true); // PSM is now on, max temperature is 25

for (let i = 0 ; i < 10 ; i++) {
  thermostat.up();
}

thermostat.getTemperature(); // should be 25 (max reached)

thermostat.setPowerSavingMode(false); // PSM is now off, max temperature is no more 25

thermostat.up();
thermostat.getTemperature(); // should now return 26

thermostat.reset();
thermostat.getTemperature(); // should be back to 20