var guestList = ["Him","MC","Rahul","Vikas","Golu"];

var guest= prompt("What is your Name?")

if (guestList.includes(guest)){
alert ("Welcome");
    }
else {
    alert( "Sorry");
}


//////////////////////////////////////////////////////////////////////////////////
// Reversing guest names

let arr = ["Sudhir","Dhruv","Rahul"]
let newArr =[]

function reverseString (){
    for(let i=0; i<arr.length; i++){
        let string ="";
        for( let j=arr[i].length-1;j>=0;j--){
           
            string+=(arr[i][j])
        } newArr.push(string)
        
    } console.log(newArr)
} 
reverseString()


///////////////////////////////////////////////////////////////////////////////





