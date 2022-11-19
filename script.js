const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = 'ROCK';
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';



let gameIsRunning = false;

const getPlayerChoice = () => {
    const selection = prompt (`${ROCK},${PAPER} OR ${SCISSORS}`, '').toUpperCase();
    if (
        selection !== ROCK &&
        selection !== PAPER && 
        selection !== SCISSORS 
    ) {
        alert(`Invalid choise! We choise ${DEFAULT_USER_CHOICE} for you!`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;

};

const getComputerChoise = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    } 

};


   const getWinner = (cChoise,pChoise = DEFAULT_USER_CHOICE) => 
       cChoise === pChoise ? RESULT_DRAW 
        :  (cChoise === ROCK & pChoise === PAPER ||
            cChoise === PAPER & pChoise === SCISSORS ||
            cChoise === SCISSORS & pChoise === ROCK ) 
            ? RESULT_PLAYER_WINS 
            : RESULT_COMPUTER_WINS;

        

    // if (cChoise === pChoise) {
    //     return RESULT_DRAW;
    // } else if (
    //      cChoise === ROCK & pChoise === PAPER ||
    //      cChoise === PAPER & pChoise === SCISSORS ||
    //      cChoise === SCISSORS & pChoise === ROCK
    // ) {
    //     return RESULT_PLAYER_WINS;
    // } else {
    //     return RESULT_COMPUTER_WINS;
    // }


startGameBtn.addEventListener('click',() => {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    const playerChoise = getPlayerChoice();
    const computerChoise = getComputerChoise();
    let winner; 
    if (playerChoise) {
        winner = getWinner(computerChoise,playerChoise);
    } else {
        winner = getWinner(computerChoise,playerChoise);
    }
    let message =`You picked a ${playerChoise}, computer picked a ${computerChoise},therefore you `;
    if (winner === RESULT_DRAW) {
        message = message + 'had a draw';  
    } else if (winner === RESULT_PLAYER_WINS) {
        message = message + 'won' ;
    } else { message = message + 'lost';}
     tekst.innerHTML = message;
     gameIsRunning = false;
   
});


const tekst = document.getElementById('tekst');

