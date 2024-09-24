
let button =  document.getElementById('roll-button');
const diceSound = document.getElementById("dice-sound");


button.addEventListener('click', function(){
    let dice1 = document.getElementById('dice1');
    let dice2 = document.getElementById('dice2');

    let value1 = Math.floor(Math.random()*6)+1;
    let value2 = Math.floor(Math.random()*6)+1;

    diceSound.play();

dice1.setAttribute("src", "image" + value1 + ".png");
dice2.setAttribute("src", "image" + value2 + ".png");

let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');
let heading = document.getElementById("heading");

if(value1>value2){
    heading.innerText="player 1 wins";
    heading.innerText = "player 2 wins ";
}else if(value1==value2){
    heading.innerText="It's a tie";
    heading.innerText= "It's a tie";
}else{
    heading.innerText="player 2 wins";
    heading.innerText = "player 1 wins";
}

})


