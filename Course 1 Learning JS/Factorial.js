// const number12 = 3;

// function factor() {
//   let newNumber = number12 - 1;
//   let factorialOfNumber = number12 * newNumber;
//   if(number12 >= 1){
//     factor()
//   } console.log(factorialOfNumber);

// }

// factor()

// let num = 5

// function factorial (){
//   if(num>1){
//   let finalResult = num * (num-1)
//      num--;
//     if(num>1){
//     factorial()
//     }
//  }

//   console.log(finalResult)
// }

// factorial();

const factNumber = (n) => {
  if (n < 2) {
    return 1;
  } else {
    let answer = 1;
    for (let i = 2; i <= n; i++) {
      answer = answer * i;
    }
    return answer;
  }
};

console.log(factNumber(10));

// 2nd way

const factNumber2 = (n) => {
  if (n > 1) {
    let answer2;
    answer2 = n * factNumber2(n - 1);
    return answer2;
  } else return 1;
};

console.log(factNumber2(10));
