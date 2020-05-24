"use strict";
var addNumbers = function (n1, n2, logResult, message) {
    logResult ? console.log("" + message + (n1 + n2)) : n1 + n2;
};
var n1 = 5;
var n2 = 2.5;
var logResult = true;
var message = "Your result is: ";
addNumbers(n1, n2, logResult, message);
