class Engine {
    constructor(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
}
class Car2 {
    constructor(engine) {
        this._engine = engine;
    }
    get engine() {
        return this._engine;
    }
    set engine(value) {
        if (value !== null) {
            this._engine = value;
        }
    }
    startEngine() {
        alert(`Car engine started: ${this._engine.engineType}`);
    }
}
window.onload = function () {
    var engine = new Engine(200, 'V6');
    var car = new Car2(engine);
    alert(car.engine.engineType);
    alert(car.engine.horsePower);
};
