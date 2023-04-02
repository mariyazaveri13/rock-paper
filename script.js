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

const playerChoice = prompt("Please enter your choice : Rock / paper / scissors");
const computerChoice = getComputerChoice();

console.log(playRound(playerChoice,computerChoice));

function playRound(playerChoice,computerChoice){
    let player = playerChoice.toLowerCase();

    if((player == 'rock' && computerChoice == 'paper')
        || (player == 'paper' && computerChoice == 'scissors')
        ||  (player == 'scissors' && computerChoice == 'rock')
    ){
        return `You Lose! ${computerChoice} beats ${player}`;
    }

    else if((computerChoice == 'rock' && player == 'paper')
    || (computerChoice == 'paper' && player == 'scissors')
    ||  (computerChoice == 'scissors' && player == 'rock')
    ){
        return `You Win! ${player} beats ${computerChoice}`;
    }

    else if(computerChoice == player){
        return `It's a tie`;
    }

    else{
        return `Please enter valid choice`;
    }

}