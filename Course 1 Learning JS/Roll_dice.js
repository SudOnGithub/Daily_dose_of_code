let randomNumber01= (Math.floor(Math.random()*6)+1);
let randomNumber02=(Math.floor(Math.random()*6))+1;


console.log(randomNumber01, randomNumber02);

function rollDice() {
    if (randomNumber01>randomNumber02){
    return "Player 1 Wins!";
} 
    else if (randomNumber01===randomNumber02){
        return "It's a Tie!"
    }
    else return "Player 2 Wins!";
}

rollDice();


