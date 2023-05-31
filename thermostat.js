

class Thermostat {
    constructor(temperature = 20, powerSaver = "true") {
        this.temp = temperature;
        this.status = powerSaver;
    }

    up(increase){
        this.temp = this.temp + increase;
        return this.temp;
    }

    down(decrease){
        this.temp = this.temp - decrease;
        return this.temp;
    }

    powerSaverOn(){
        this.status = "true";
        return this.status;

    }

    powerSaverOff(){
        this.status = "false";
        return this.status;
    }

    reset(){
        this.temp = 20;
    }

    checkUsage(){
        if (this.temp < 18){
            return "Low usage"
        }
        else if (this.temp <= 25){
            return "Medium usage"
        }
        else {
            return "High usage"
        }
    }
}

const test = new Thermostat 
console.log(test.temp)
console.log(test.status)
test.powerSaverOff()
console.log(test.status)
test.up(22)
console.log(test.temp)
test.down(41)
console.log(test.temp)
console.log(test.checkUsage())
test.reset()
console.log(test.temp)