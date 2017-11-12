class Car {
    private engine: string;

    constructor(engine: string){
        this.engine = engine;
    }

    startEngine(){
        alert(`Engine started: ${this.engine}`);
    }

    stopEngine(){
        alert(`Egine stopped: ${this.engine}`);
    }
}

window.onload = function(){
    
    var car = new Car('V8');
    car.startEngine();
    car.stopEngine();
}