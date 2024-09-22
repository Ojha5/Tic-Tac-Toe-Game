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
    let winCases = [
        [0 , 1 , 2],
        [3 , 4 , 5],
        [6 , 7 , 8],
        [0 , 3 , 6],
        [1 , 4 , 7],
        [2 , 5 , 8],
        [0 , 4 , 8],
        [2 , 4 , 6]
    ]

    winCases.forEach((e) => {
        if((boxTexts[e[0]].innerText == boxTexts[e[1]].innerText) && (boxTexts[e[1]].innerText == boxTexts[e[2]].innerText) && (boxTexts[e[0]].innerText != "")) {
            isGameOver = true;
            document.querySelector(".info").innerText = turn + " Won the Game";
            document.querySelector(".imgBox").firstElementChild.style.width = "200px";
        }
    })
}

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((box) => {
    let boxText = box.firstElementChild;
    
    box.addEventListener("click" , (e) => {
        if(boxText.innerText == ""){
            boxText.innerText = turn;
            ting.play();
            checkWin();
            changeTurn();
    
            if(!isGameOver) document.querySelector(".info").innerText = `Turn for ${turn}`
        }
    })
})

let reset = document.getElementById("reset");
reset.addEventListener("click" , (element) => {
    let boxTexts = document.getElementsByClassName("boxText");

    Array.from(boxTexts).forEach((e) => {
        e.innerText = "";
    })

    document.querySelector(".imgBox").firstElementChild.style.width = "0px";
    document.querySelector(".info").innerText = `Turn for X`
    isGameOver = false;
    turn = "X"
})

