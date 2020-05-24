"use strict";
var addNumbers = function (n1, n2, logResult, message) {
    logResult ? console.log("" + message + (n1 + n2)) : n1 + n2;
};
var n1 = 5;
var n2 = 2.5;
var logResult = true;
var message = "Your result is: ";
addNumbers(n1, n2, logResult, message);
var car = {
    brand: "Volkswagen",
    hp: 120,
};
console.log(car.brand);
var cars;
cars = ["Volkswagen", "Audi"];
for (var _i = 0, cars_1 = cars; _i < cars_1.length; _i++) {
    var car_1 = cars_1[_i];
    console.log(car_1.toUpperCase());
}
var tuple;
tuple = [1, "string"];
var myCarColor;
(function (myCarColor) {
    myCarColor[myCarColor["Blue"] = 0] = "Blue";
    myCarColor[myCarColor["Red"] = 1] = "Red";
    myCarColor["White"] = "White";
})(myCarColor || (myCarColor = {}));
var myCar = {
    brand: "Ford",
    hp: 95,
    color: myCarColor.Blue,
};
if (myCar.color === myCarColor.Blue) {
    console.log("my car is Blue");
}
var anyType;
