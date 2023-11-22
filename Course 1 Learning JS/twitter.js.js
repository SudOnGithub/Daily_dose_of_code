// Tweet Assignment

var total_chars="240";
var written_chars= prompt("Please type your tweet here.");

alert("Total remaining Characters are: " + ( total_chars - written_chars.length));

var tweet=prompt("Please write your tweet here:");

alert("You have written " + tweet.length + " Characters, you have " + (140 - tweet.length) + " Characters left");

alert(prompt("Tweet here: ").slice(0,140));



// Convert input name into Proper casing

var name= prompt("What is your name?");

var first_letter= name.slice(0,1).toUpperCase();
var other_letters= name.slice(1,10).toLowerCase();
alert(first_letter + other_letters);

alert( name.slice(0,1).toUpperCase() + name.slice(1,15).toLowerCase());

// Better way

var name= prompt("What is your name?");

alert( name.slice(0,1).toUpperCase() + name.slice(1,name.length).toLowerCase());