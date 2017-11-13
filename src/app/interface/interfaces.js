class Calculator1 {
    constructor() { }
    suma(num1, num2) {
        return num1 + num2;
    }
    resta(num1, num2) {
        return num2 - num1;
    }
}
window.onload = function () {
    var calc = new Calculator1();
    var result1 = calc.suma(1, 2);
    var result2 = calc.resta(1, 2);
    console.log(`Result suma: ${result1}`);
    console.log(`Result resta: ${result2}`);
};
