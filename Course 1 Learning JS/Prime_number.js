// let inputNumber = prompt("Type in a number: ");
// let inputArray = [];

// function primeNumbers() {
//   inputNumber = parseInt(inputNumber);
//   for (i = 1; i < inputNumber; i++) {
//     if (inputNumber % i == 0) {
//       inputArray.push(i);
//     } else return "It is a Prime Number"
//   }
//   console.log(inputArray)
// }

// primeNumbers()

// Write a function that takes in a number and returns true if the number is prime, false otherwise.

// let inputNumber = prompt("Type in a number: ");

function primeNumbers(inputNumber) {
  inputNumber = parseInt(inputNumber);
  for (i = 2; i < inputNumber; i++) {
    if (inputNumber % i !== 0) {
      return "It is a prime number"
    } else return "It is a not Prime Number"
  }
}

console.log(primeNumbers(11))
