// function beer(){

// var count = 100;
// var bottleWord = "bottle";
  

  
// while (count>0){
//     console.log (count + bottleWord + " of beer on the wall, " + count + "bottles of beer. Take 1 down, pass it around, " + (count-1)+ " bottles of beer on the wall.");
//     count--;}
// }

// beer();


var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottles";
    if (numberOfBottles === 1) {
        bottleWord = "bottle";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}




