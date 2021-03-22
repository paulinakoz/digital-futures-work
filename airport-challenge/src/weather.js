class Weather {
    constructor(randomWeather = Math.floor(Math.random() * 100)){
        this.randomWeather = randomWeather;
    }

    generateWeather(){
        if((this.randomWeather > 10)  && (this.randomWeather <= 25)){
            return 'Stormy';
        } else {
            return 'Sunny';
        }
    }
     
}

module.exports = Weather;