// End result should look like below:
// 0,1,1,2,3,5,8,13;




// function fibo() {
//     let x=0;
// let y = 1;
// // var arr = [];
// for(x=0;x<20;x=+y){
//     let z=x+y;
//     console.log(z)
// }}

//     var fn=x+y;
//     console.log(x);
//     console.log(y);
//     while(fn<20){
//         console.log(fn);
//         x=y;
//         y=fn;
//     fn=x+y;}

// }

// fibo();



let x = 0;
let y = 1;

function fibo(){    
    z= x+y;
    x=y;
    y=z;
    console.log(z)
    if (y<13){ 
        fibo();
    }
}

fibo();







    






