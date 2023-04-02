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

function playRound(playerChoice,computerChoice,playerScore=0,compScore=0){
    let player = playerChoice.toLowerCase();
    if((player == 'rock' && computerChoice == 'paper')
        || (player == 'paper' && computerChoice == 'scissors')
        ||  (player == 'scissors' && computerChoice == 'rock')
    ){
        compScore++;
        return [`You Lose! ${computerChoice} beats ${player}`,playerScore,compScore];
    }

    else if((computerChoice == 'rock' && player == 'paper')
    || (computerChoice == 'paper' && player == 'scissors')
    ||  (computerChoice == 'scissors' && player == 'rock')
    ){
        playerScore++
        return [`You Win! ${player} beats ${computerChoice}`,playerScore,compScore];
    }

    else if(computerChoice == player){
        return [`It's a tie`,playerScore,compScore];
    }

    else{
        return [`Please enter valid choice`,playerScore,compScore];
    }
}

function game(playerScore,compScore){
    let game;

    const playerChoice = prompt("Please enter your choice : Rock / paper / scissors");
    const computerChoice = getComputerChoice();
    game = playRound(playerChoice,computerChoice,playerScore,compScore);
    console.log(game[0]);
    
    return [game[1],game[2]];
}

function startPlay(){
    let playerScore =0;
    let computerScore = 0;
    for(let i = 0; i < 5;i++){
        scores = game();
        if(scores[0] > scores[1]){
            playerScore++;
        }
        else if(scores[0] < scores[1]){
            computerScore++;
        }
    }
    if(playerScore>computerScore)
        alert(`You won !! Congratulations!!!`);
    else if(playerScore < computerScore)
        alert(`Better luck next time`);
    else 
        alert(`It's a tie`);
    
}

startPlay();
