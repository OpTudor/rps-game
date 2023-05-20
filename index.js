function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if(choice === 1){
        return "rock";
            }else if(choice === 2){
                return "paper";
            }else{
                return "scissors";
            }                 
}
function playRound(playerChoice, computerChoice){
    console.log(playerChoice, computerChoice);
    if(playerChoice.toLowerCase() === computerChoice.toLowerCase()){
        return "It's a tie";
            }else if(playerChoice.toLowerCase() === "rock")
            {
                if(computerChoice.toLowerCase() === "scissors")
                {
                    return "You win";
                }else{
                    return "You lose";
                }
            }else if(playerChoice.toLowerCase() === "paper")
            {
                if(computerChoice.toLowerCase() === "rock")
                {
                    return "You win";
                }else{
                    return "You lose";
                }
            }else{
                if(computerChoice.toLowerCase() === "scissors")
                {
                    return "You win";
                }else{
                    return "You lose";
                }
            }
}
function getPlayerChoice()
{
    let playerChoice = prompt("Rock, Paper or Scissors?", )
    if(!playerChoice ||playerChoice.toLowerCase() !== "rock" && playerChoice.toLowerCase() !== "paper" && playerChoice.toLowerCase() !== "scissors")
    {
        alert("Please enter rock, paper or scissors");
        return getPlayerChoice();
    }else{
        return playerChoice;
    }
    
}
function game(){
    let playerScore = 0, computerScore = 0;
    while(playerScore < 5 && computerScore < 5){
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);
        if(result === "You win"){
            playerScore ++;
        }else if(result === "You lose"){
            computerScore++;
        }
        console.log(result);
        console.log(`Player Score: ${playerScore} \nComputer Score: ${computerScore}`);
    }
    console.log(`Player Score: ${playerScore} \nComputer Score: ${computerScore}`);
}
game()
