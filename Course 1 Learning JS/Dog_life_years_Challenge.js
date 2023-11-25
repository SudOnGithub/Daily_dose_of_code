function lifeInWeeks(age) {
    
/************Don't change the code above************/    
    
//  var currentAge= console.log("Input your current age");
 var months= age*12;
 var weeks= age*52;
 var days= age*365;
 
 var monthsLeft= (90*12) - months;
 var weeksLeft= (90*52) - weeks;
 var daysLeft= (90*365) - days;
    
console.log("You have " + daysLeft + " days," + weeksLeft + " weeks, " + monthsLeft + " months left." ); 
    
/*************Don't change the code below**********/
}

lifeInWeeks(56);