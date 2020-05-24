// Simple types (numbers, booleans, strings)

const addNumbers = (
  n1: number,
  n2: number,
  logResult: boolean,
  message: string
) => {
  logResult ? console.log(`${message}${n1 + n2}`) : n1 + n2;
};

const n1 = 5;
const n2 = 2.5;
const logResult = true;
const message = "Your result is: ";

addNumbers(n1, n2, logResult, message);

// Object types
const car: { brand: string; hp: number } = {
  brand: "Volkswagen",
  hp: 120,
};

console.log(car.brand);

// Arrays
let cars: string[];
cars = ["Volkswagen", "Audi"];

for (const car of cars) {
  // Here TS knows that the car is a string
  // and can use string methods in a secure way
  console.log(car.toUpperCase());
}

// Tuple
let tuple: [number, string];
tuple = [1, "string"];

// Enum
enum myCarColor {
  Blue,
  Red,
  White = "White",
}

const myCar = {
  brand: "Ford",
  hp: 95,
  color: myCarColor.Blue,
};

if (myCar.color === myCarColor.Blue) {
  console.log("my car is Blue");
}

// Any
let anyType: any;
