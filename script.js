
var playerScore = 0;
var compScore = 0;

function getComputerChoice(){
    //this shall return max 0, 1, or 2
    let random = Math.floor(Math.random() * 3);
    let choice;
    switch (random){
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
    }
    return choice;
}

function playRound(playerChoice,computerChoice){
    let player = playerChoice.toLowerCase();
    if((player == 'rock' && computerChoice == 'paper')
        || (player == 'paper' && computerChoice == 'scissors')
        ||  (player == 'scissors' && computerChoice == 'rock')
    ){
        compScore++;
        return `You lost this round! ${computerChoice} beats ${player}`;
    }

    else if((computerChoice == 'rock' && player == 'paper')
    || (computerChoice == 'paper' && player == 'scissors')
    ||  (computerChoice == 'scissors' && player == 'rock')
    ){
        playerScore++
        return `You won this round! ${player} beats ${computerChoice}`;
    }

    else if(computerChoice == player){
        return `It's a tie`;
    }

    else{
        return `Please enter valid choice`;
    }
}

function game(playerChoice){
    // const playerChoice = prompt("Please enter your choice : Rock / paper / scissors");
    const computerChoice = getComputerChoice();
    return playRound(playerChoice,computerChoice);
}

const radios = document.getElementsByName('rpc');
for(let i = 0; i<radios.length;i++){
    radios[i].addEventListener('click',(e)=>{
        playGame(e);
    });
}

function playGame(e){
    
    let msg = game(e.target.value);
    document.getElementById('user').innerText = playerScore;
    document.getElementById('computer').innerText = compScore;
    document.getElementById('msg').innerText = msg;

    if(playerScore == 5){
        document.getElementById('user').innerText = playerScore;
        alert(`You've won!! Thanks for saving humanity. Play again ?`);
        resetGame();
        return;
    }
    else if(compScore == 5){
        document.getElementById('computer').innerText = compScore;
        alert(`Uh oh! You let the computer win :( Try again?`);
        resetGame();
        return;
    }
}

function resetGame(){
    document.getElementById('user').innerText = 0;
    document.getElementById('computer').innerText = 0;
    document.getElementById('msg').innerText = ''; 
    compScore = 0;
    playerScore = 0;
}

window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);