let player1 = 0;
let player2 = 0;
let gameInPlay = true;
let TURN = false;

// Create Scoreboard
const SCORE_BOARD = [0,0,0,0,0,0,0,0,0];

// Calculate score and winner
const calculateScore = (SCORE_BOARD) => {
    const row1 = SCORE_BOARD[0] + SCORE_BOARD[1] + SCORE_BOARD[2];
    const row2 = SCORE_BOARD[3] + SCORE_BOARD[4] + SCORE_BOARD[5];
    const row3 = SCORE_BOARD[6] + SCORE_BOARD[7] + SCORE_BOARD[8];
    const col1 = SCORE_BOARD[0] + SCORE_BOARD[3] + SCORE_BOARD[6];
    const col2 = SCORE_BOARD[1] + SCORE_BOARD[4] + SCORE_BOARD[7];
    const col3 = SCORE_BOARD[2] + SCORE_BOARD[5] + SCORE_BOARD[8];
    const diag1 = SCORE_BOARD[0] + SCORE_BOARD[4] + SCORE_BOARD[8];
    const diag2 = SCORE_BOARD[2] + SCORE_BOARD[4] + SCORE_BOARD[6];
    if(row1 === 3 || row1 === -3){
        BOXES[0].style.backgroundColor = "lightgreen";
        BOXES[1].style.backgroundColor = "lightgreen";
        BOXES[2].style.backgroundColor = "lightgreen";
        if(row1 === 3) {player1++};
        if(row1 === -3) {player2++};
        gameInPlay = false;
    }
    if(row2 === 3 || row2 === -3){
        BOXES[3].style.backgroundColor = "lightgreen";
        BOXES[4].style.backgroundColor = "lightgreen";
        BOXES[5].style.backgroundColor = "lightgreen";
        if(row2 === 3) {player1++};
        if(row2 === -3) {player2++};
        gameInPlay = false;
    }
    if(row3 === 3 || row3 === -3){
        BOXES[6].style.backgroundColor = "lightgreen";
        BOXES[7].style.backgroundColor = "lightgreen";
        BOXES[8].style.backgroundColor = "lightgreen";
        if(row3 === 3) {player1++};
        if(row3 === -3) {player2++};
        gameInPlay = false;
    }
    if(col1 === 3 || col1 === -3){
        BOXES[0].style.backgroundColor = "lightgreen";
        BOXES[3].style.backgroundColor = "lightgreen";
        BOXES[6].style.backgroundColor = "lightgreen";
        if(col1 === 3) {player1++};
        if(col1 === -3) {player2++};
        gameInPlay = false;
    }
    if(col2 === 3 || col2 === -3){
        BOXES[1].style.backgroundColor = "lightgreen";
        BOXES[4].style.backgroundColor = "lightgreen";
        BOXES[7].style.backgroundColor = "lightgreen";
        if(col2 === 3) {player1++};
        if(col2 === -3) {player2++};
        gameInPlay = false;
    }
    if(col3 === 3 || col3 === -3){
        BOXES[2].style.backgroundColor = "lightgreen";
        BOXES[5].style.backgroundColor = "lightgreen";
        BOXES[8].style.backgroundColor = "lightgreen";
        if(col3 === 3) {player1++};
        if(col3 === -3) {player2++};
        gameInPlay = false;
    }
    if(diag1 === 3 || diag1 === -3){
        BOXES[0].style.backgroundColor = "lightgreen";
        BOXES[4].style.backgroundColor = "lightgreen";
        BOXES[8].style.backgroundColor = "lightgreen";
        if(diag1 === 3) {player1++};
        if(diag1 === -3) {player2++};
        gameInPlay = false;
    }
    if(diag2 === 3 || diag2 === -3){
        BOXES[2].style.backgroundColor = "lightgreen";
        BOXES[4].style.backgroundColor = "lightgreen";
        BOXES[6].style.backgroundColor = "lightgreen";
        if(diag2 === 3) {player1++};
        if(diag2 === -3) {player2++};
        gameInPlay = false;
    }
    let score = [player1, player2];
    console.log(`player scores are: ${score}`);
    return score;
}

// EVENT LISTENERS
let BOXES = document.getElementsByClassName("box");
let PLAYER = document.getElementsByClassName("players");
for(let i = 0; i < BOXES.length; i++){
    BOXES[i].addEventListener("click", async() => {
        if(TURN === false && gameInPlay === true){
            // while loop prevents double clicking boxes
            while(SCORE_BOARD[i] === 0){
                BOXES[i].innerHTML = "X";
                BOXES[i].style.color = "blue";

                SCORE_BOARD[i] = 1;
                TURN = true;
                let score = calculateScore(SCORE_BOARD)[0];
                PLAYER[0].innerHTML = `Player 1: ${score}`;
                return SCORE_BOARD;
            }

        }
        if(TURN === true && gameInPlay === true){
            // while loop prevents double clicking boxes
            while(SCORE_BOARD[i] === 0){
            BOXES[i].innerHTML = "O";
            BOXES[i].style.color = "red";
            SCORE_BOARD[i] = -1;
            TURN = false;
            let score = calculateScore(SCORE_BOARD)[1];
            PLAYER[1].innerHTML = `Player 2: ${score}`;
            return SCORE_BOARD;
            }
        }
    })
}

// Clear board
let CLEAR = document.getElementsByClassName("clear");

const clearBoard = (SCORE_BOARD) => {
    TURN = false;
    for(let i = 0; i < SCORE_BOARD.length; i++){
        SCORE_BOARD[i] = 0;
    }
    for(let i = 0; i < BOXES.length; i++){
        BOXES[i].style.backgroundColor = "white";
        BOXES[i].innerHTML = "";
        gameInPlay = true;
    };
    console.log(`AFTER CLEAR, SCOREBOARD IS: ${SCORE_BOARD}`);
    return SCORE_BOARD;
}

CLEAR[0].addEventListener("click", () => {
    clearBoard(SCORE_BOARD);
});