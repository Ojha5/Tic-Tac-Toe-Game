console.log("Welcome to Tic Tac Toe Game")
let music = new Audio("music/music.mp3")
let ting = new Audio("music/ting.mp3")
let gameOver = new Audio("music/gameover.mp3")
let turn = "X";
let isGameOver = false;

// Function to change the turn 
let changeTurn = () => {
    turn =  (turn == "X") ? "0" : "X";
}

// Function to check ki kon jeeta hai and uske basis pe bakki winning ke kaam karo 
const checkWin = () => {
    let boxTexts = document.getElementsByClassName("boxText");
}

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((box) => {
    let boxText = box.firstElementChild;
    
    box.addEventListener("click" , (e) => {
        if(boxText.innerText == ""){
            boxText.innerText = turn;
            changeTurn();
            ting.play();
            checkWin();
    
            if(!isGameOver) document.querySelector(".info").innerText = `Turn for ${turn}`
        }
    })
})