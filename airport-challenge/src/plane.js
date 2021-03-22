class Plane {
    constructor(name){
        this._name = name;
        this.inAir = false;
    }
    
    get name(){
        return this._name;
    }
    
    isFlying() {
        this.inAir = true;
    }
}

module.exports = Plane;