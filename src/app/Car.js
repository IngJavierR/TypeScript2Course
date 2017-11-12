var Car = (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.startEngine = function () {
        alert("Engine started: " + this.engine);
    };
    Car.prototype.stopEngine = function () {
        alert("Egine stopped: " + this.engine);
    };
    return Car;
}());
window.onload = function () {
    var car = new Car('V8');
    car.startEngine();
    car.stopEngine();
};
