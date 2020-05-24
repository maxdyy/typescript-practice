const addNumbers = (
  n1: number,
  n2: number,
  logResult: boolean,
  message: string
) => {
  logResult ? console.log(`${message}${n1 + n2}`) : n1 + n2;
};

const n1 = 5;
const n2 = 1.5;
const logResult = true;
const message = "Your result is: ";

addNumbers(n1, n2, logResult, message);
