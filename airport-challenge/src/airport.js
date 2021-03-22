class Airport {
    constructor(name, capacity = 3){
        this.name = name;
        this.hangar = [];
        this._capacity = capacity;
        this.isFull = false;
    }

    get capacity() {
        return this._capacity;
    }

    landPlane(plane, weather){
        if(weather.generateWeather() === 'Sunny') {
            if(this.hangar.includes(plane)){
                return `${plane} has already landed`;
            }

            if(this.checkIfFull()){
                return `Sorry, ${plane.name} unable to land as airport is full`;
            }
            this.hangar.push(plane);
            return this.hangar;
        } else {
            return `${plane.name} can not land because weather is stormy`;
        }
    }

    checkIfFull(){
        if(this.hangar.length >= this._capacity){
            this.isFull = true;
        }
        return this.isFull;
    }

    takeOff(plane, weather){
        if(weather.generateWeather() === 'Sunny') {
            if(this.hangar.includes(plane)){
                this.hangar.splice(this.hangar.indexOf(plane), 1);
                plane.isFlying();
                return `Plane ${plane.name}, has departed.`;
            } else {
                return `Plane ${plane.name} is not in the aiport`;
            }
        } else {
            return `${plane.name} can not take off because weather is stormy`;
        }
    }

}

module.exports = Airport;