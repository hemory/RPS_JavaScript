let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById('user-score');
let computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');
const computerChoice = Math.floor(Math.random() * 3);

function getComputerChoice() {
    let choices = ['r', 'p','s'];
   let ranNum =  Math.floor(Math.random() * 3);
   return choices[ranNum];
}

function game(userChoice){
    console.log("poop" + userChoice)
}

function main() {
    $(document).ready(function () {

        $(rock_div).click(function () {
            game('rock');
        })

        $(paper_div).click(function () {
            game('paper');
        })

        $(scissors_div).click(function () {
            game('scissors');
        })



    })

}

main();





// $(rock_div).click(function () {
//     if (computerChoice === 1){
//         $('.result').replaceWith('<p id="tie">Tie!</p>');
//     }
//     else if (computerChoice === 2){
//         $('.result').replaceWith('<p id="tie">Paper beats Rock. Computer Wins!</p>');
//         computerScore++;
//         computerScore_span.innerHTML = computerScore.toString();
//     }
//     else if (computerChoice === 3){
//         $('.result').replaceWith('<p id="tie">Rock beats Scissors. Players Wins!</p>');
//         userScore++;
//         userScore_span.innerHTML = userScore.toString();
//     }
// });
//
// $(paper_div).click(function () {
//     if (computerChoice === 1){
//         $('.result').replaceWith('<p id="tie">Paper beats Rock. Player Wins!</p>');
//         userScore++;
//         userScore_span.innerHTML = userScore.toString();
//     }
//     else if (computerChoice === 2){
//         $('.result').replaceWith('<p id="tie">Tie!</p>');
//     }
//     else if (computerChoice === 3){
//         $('.result').replaceWith('<p id="tie">Scissors beats Paper. Computer Wins!</p>');
//         computerScore++;
//         computerScore_span.innerHTML = computerScore.toString();
//     }
// });
//
// $(scissors_div).click(function () {
//     if (computerChoice === 1){
//         $('.result').replaceWith('<p id="tie">Rock beats Scissors. Computer Wins!</p>');
//         computerScore++;
//         computerScore_span.innerHTML = computerScore.toString();
//     }
//     else if (computerChoice === 2){
//         $('.result').replaceWith('<p id="tie">Scissors beats Paper. Player Wins!</p>');
//         userScore++;
//         userScore_span.innerHTML = userScore.toString();
//     }
//     else if (computerChoice === 3){
//         $('.result').replaceWith('<p id="tie">Tie!</p>');
//     }
// });
