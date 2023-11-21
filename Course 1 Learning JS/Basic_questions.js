// Ans1

let a = "Sudhir";
let b = 10;

console.log(a + b);

// Ans2

console.log(typeof (a + b));

// Ans3 -- NO, we can't

const item1 = {
  Sudhir: 6,
  Nakul: "Youngest",
  Kartar: 90,
};

// item1 = 56

console.log(item1);

// Ans4

item1["Yash"] = 5;

console.log(item1);

// Ans5

const dict1 = {
  Word1: "Meaning1",
  Word2: "Meaning2",
  Word3: "Meaning3",
  Word4: "Meaning4",
  Word5: "Meaning5",
};

console.log(dict1);

// To print just 1 word of dictionary(Object)

console.log(dict1["Word3"]);

// OR

console.log(dict1.Word4);
