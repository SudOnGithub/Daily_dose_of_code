var output = [];
var a = 0;


function fizzBuzz(){
  a= a+1;

if (a%5===0 && a%3 === 0){output.push("FizzBuzz");}                        
else if (a%3 === 0){output.push("Fizz");}
else if (a%5 === 0){ output.push("Buzz");}
else { output.push(a);}
  
  console.log(output);
}

fizzBuzz();

// With while loop:

var output = [];
var a = 0;


function fizzBuzz(){
  while (a<100){
  a= a+1;

if (a%5===0 && a%3 === 0){output.push("FizzBuzz");}                        
else if (a%3 === 0){output.push("Fizz");}
else if (a%5 === 0){ output.push("Buzz");}
else { output.push(a);}
 }
  console.log(output);
}

fizzBuzz();


// With For loop:


var output = [];



function fizzBuzz(){
  for (a=0; a<100; a++){

if (a%5===0 && a%3 === 0){output.push("FizzBuzz");}                        
else if (a%3 === 0){output.push("Fizz");}
else if (a%5 === 0){ output.push("Buzz");}
else { output.push(a);}
 }
  console.log(output);
}

fizzBuzz();
