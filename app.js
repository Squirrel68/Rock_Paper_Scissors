// randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
function getComputerChoice() {
    // This JavaScript function always returns a random number between min and max (both included):
    // return Math.floor(Math.random() * (max - min + 1) ) + min;
    return Math.floor(Math.random() * (2 - 0 + 1) ) + 0;
    //0=rock, 1=paper, 2= scissors
} 

function playRound(playerSelection, computerSelection) {
    // return 0=player win, 1=computer win, 2=draw 
    if (playerSelection==computerSelection) return 2;
    else if((playerSelection==0 && computerSelection==2)||
    (playerSelection==1 && computerSelection==0)||
    (playerSelection==2 && computerSelection==1)) return 0;
    else return 1;
}

function game() {
    for (let i=0; i<5; i++) {
        let playerSelection=window.prompt("Enter your choice Rock=0, Paper=1 or Scissors=2:");
        let computerSelection = getComputerChoice();
        let tmp=playRound(playerSelection, computerSelection);
        document.write(playerSelection+" "+computerSelection+" ");
        // write answer
        if (!tmp) document.write("Player WIN");
        else if(tmp==1) document.write("Computer WIN");
        else document.write("DRAW");
        document.write("<br>");
    }
}

game();