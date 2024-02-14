// 1	Write a function that takes in a number and returns true if the number is even, false if it is odd.

let inputNumber = prompt(
  "Please type a random number to check if it's an even number: "
);

if (inputNumber % 2 === 0) {
  alert("true");
} else {
  alert("false");
}

// 2	Write a function that takes in a string and returns true if the string is empty, false otherwise.

let inputString = prompt("Please enter a string here: ");

if (inputString.length === 0) {
  alert("true");
} else {
  alert("false");
}

// 3	Write a function that takes in an array and returns true if the array is empty, false otherwise.

const array1 = [];

const arrayFunction = () => {
  if (array1.length === 0) {
    return true;
  } else return false;
};

// OR

// const arrayFunction = () => array1.length === 0;

// 4	Write a function that takes in an object and returns true if the object is empty, false otherwise.

const object1 = {
  set1: "string1",
  set2: "string2",
};

const objectFunction = () => Object.keys(object1).length === 0;

// NOTE : It seems like you're trying to check if the length of the object is equal to 0, but objects in JavaScript don't have a direct length property like arrays do. If you want to check if the object is empty, you can check the number of keys in the object.

// 5	Write a function that takes in an array of numbers and returns the sum of the numbers.

let arr = [10, 13, 16];

let sum = 0;

for (i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}

console.log(sum);

// 6	Write a function that takes in an array of strings and returns the length of the longest string.

let arrString = ["Sudhir", "Yash", "Nakul"];

let longestString = 0;

function lengthCalc(input) {
  if (arrString.length === 0) {
    return 0;
  }

  for (i = 0; i < arrString.length; i++) {
    let currentLength = arrString[i].length;
    if (currentLength > longestString) {
      longestString = currentLength;
    }
  }

  console.log(longestString);
}

lengthCalc(arrString);

// -------- 7	Write a function that takes in an array of objects and returns the number of objects that have a specific property.

// property = key: value -------------------
// aaray = [elemt, elmnt]
// = assign
// == value
// === datatype + value

const arrObjects = [
  { set1: "Yes", set2: "No", age: 29 },
  { family: "yes", nuclear: "no", age: 29 },
  { freedom: "yes", confined: "no", age: 29 },
];

function returnObjects(array, keyName) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    for (const key in array[i]) {
      if (key === keyName) {
        count++;
      } 
    }
  } 
  return count
}

// function add(a,b){  --- paramter  -----------------
//     return a+b;
// }

// add(3,4)----argument

// 8	Write a function that takes in an array of numbers and returns a new array with each number multiplied by 2.

let array50 = [1, 9, 82, 64, 2];
let newArray = [];

function multiplyArray() {
  for (i = 0; i < array50.length; i++) {
    newArray.push(2 * array50[i]);
  }
  console.log(newArray);
}

multiplyArray();

// 9	Write a function that takes in an array of strings and returns a new array with each string capitalized.

let array90 = ["mohan", "rohan", "sohan"];
let newArray90 = [];

function capitaliseArray() {
  for (i = 0; i < array90.length; i++) {
    newArray90.push(array90[i].toUpperCase());
  }
  console.log(newArray90);
}

capitaliseArray();

// 10	Write a function that takes in an array of objects and returns a new array with only the objects that have a specific property.

var mohit = 2
let mohit = 78
let mohit = 4
