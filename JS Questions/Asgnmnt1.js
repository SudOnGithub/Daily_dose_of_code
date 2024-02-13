//  Q1.	Write an if statement that checks if a number is greater than 5.

function input(number) {
  if (number > 5) {
    alert("True");
  } else alert("False");
}

input(prompt("Please enter a number to check: "));

//  Q2. Write an if statement that checks if a string is empty.

var str = "";

if (typeof str === "string" && str.length === 0) {
  console.log("The string is empty.");
} else if (str === null) {
  console.log("The string is null.");
} else {
  console.log("The string is not empty.");
}

//  OR

if (str.length === 0) {
  console.log("String is empty");
} else {
  console.log("String is not empty.");
}

// Q3. Write an if-else statement that checks if a number is even or odd.

let inputNumber = prompt("Please input a number: ");

inputNumber = parseFloat(inputNumber)
if (inputNumber % 2 === 0) {
  alert("It is an even number.");
} else {
  alert("It is a odd number");
}

//  Q4. Write a for loop that prints the numbers 1 to 10.

function printNumbers() {
  for (i = 1; i < 11; i++) {
    console.log(i);
  }
}

printNumbers();

//  Q5. Write a for loop that prints the even numbers between 1 and 10.

// Learned increment here

function printEvenNumbers() {
  for (f = 2; f < 11; f += 2) {
    console.log(f);
  }
}

printEvenNumbers();

//  Q6. Write a for loop that prints the odd numbers between 1 and 10.

for (i = 1; i <= 10; i += 2) {
  console.log(i);
}

// Q7. Write a function that takes in two numbers and returns their sum.

// Converting string to number

let number1 = prompt("Please type the 1st number: ");
let number2 = prompt("Please type the 2nd number: ");

function addTwoNumbers() {
  let num1 = parseFloat(number1);
  let num2 = parseFloat(number2);
  return num1 + num2;
}

addTwoNumbers();

//  Q8. Write a function that takes in a string and returns the length of the string.

function stringLength() {
  let stringRandom = prompt("Please type a string: ");
  return stringRandom.length;
}

stringLength();

// Q9. Write a function that takes in a array and returns the length of the array.

function arrayLength() {
  let array = ["Sud", "What", "6"];
  return array.length;
}

arrayLength();

// Q10. Write a function that takes in an object and returns the number of properties in the object.


const item = {
  item1: "Content1",
  item2: "Content2",
  item3: "Content3",
};

function keyCount(obj){
     return Object.keys(obj).length
}

keyCount(item)

