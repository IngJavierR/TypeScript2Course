class Engine {
    
    constructor(public horsePower: number,
                public engineType: string){}
}

class Car2 {
    private _engine: Engine;

    constructor(engine: Engine){
        this._engine = engine;
    }

    get engine(): Engine{
        return this._engine;
    }

    set engine(value: Engine){
        if(value !== null){
            this._engine = value;
        }
    }

    startEngine(){
        alert(`Car engine started: ${this._engine.engineType}`);
    }
}

window.onload = function(){

    var engine = new Engine(200, 'V6');
    var car = new Car2(engine);
    alert(car.engine.engineType);
    alert(car.engine.horsePower);
}