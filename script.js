// console.log("Welcome to Tic Tac Toe Game")
let music = new Audio("music/music.mp3")
let ting = new Audio("music/ting.mp3")
let gameOver = new Audio("music/gameover.mp3")
let turn = "X";
let isGameOver = false;
let filledCellCount = 0; // It is denoting ki kitte cells use ho chuke hai so that we can make a logic ki agar 9 cells use ho chuke hai that indicates a draw.

// Function to change the turn 
let changeTurn = () => {
    turn =  (turn == "X") ? "0" : "X";
}

// Function to check ki kon jeeta hai and uske basis pe bakki winning ke kaam karo 
const checkWin = () => {
    let boxTexts = document.getElementsByClassName("boxText");
    let winCases = [
        [0 , 1 , 2 , 5 , 5 , 0 , 8 , 8 , 0],
        [3 , 4 , 5 , 5 , 15 , 0 , 8 , 24 , 0],
        [6 , 7 , 8 , 5 , 25 , 0 , 8 , 40 , 0],
        [0 , 3 , 6 , -5 , 15 , 90 , -8 , 24 , 90],
        [1 , 4 , 7 , 5 , 15 , 90 , 8 , 24 , 90],
        [2 , 5 , 8 , 15 , 15 , 90 , 24 , 24 , 90],
        [0 , 4 , 8 , 5 , 15 , 45 , 7 , 22 , 45],
        [2 , 4 , 6 , 5 , 15 , -45 , 7 , 22 , -45]
    ]

    winCases.forEach((e) => {
        if((boxTexts[e[0]].innerText == boxTexts[e[1]].innerText) && (boxTexts[e[1]].innerText == boxTexts[e[2]].innerText) && (boxTexts[e[0]].innerText != "")) {
            isGameOver = true;
            document.querySelector(".info").innerText = turn + " Won the Game";
            let currWidth = window.innerWidth;

            if(currWidth > 950){
                document.querySelector(".line").style.width = "20vw"
                document.querySelector(".line").style.transform =  `translate(${e[3]}vw , ${e[4]}vw) rotate(${e[5]}deg)`
                document.querySelector(".imgBox").firstElementChild.style.width = "200px";
            }
            else{
                document.querySelector(".line").style.width = "32vw"
                document.querySelector(".line").style.transform =  `translate(${e[6]}vw , ${e[7]}vw) rotate(${e[8]}deg)`
                document.querySelector(".imgBox").firstElementChild.style.width = "150px";
            }

            gameWinPageFlash();
        }
    })
}

function gameWinPageFlash(){
    document.querySelector("body").style.backgroundColor = "#d4edda";
    setTimeout(() => {
        document.querySelector("body").style.backgroundColor = "white";
    } , 250)
}

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((box) => {
    let boxText = box.firstElementChild;
    
    box.addEventListener("click" , (e) => {
        if(boxText.innerText == "" && !isGameOver){
            filledCellCount++;
            boxText.innerText = turn;
            ting.play();
            checkWin();
            changeTurn();
    
            if(!isGameOver) document.querySelector(".info").innerText = `Turn for ${turn}`
            
            if(filledCellCount == 9 && !isGameOver){
                // That means game is Draw.
                document.querySelector(".info").innerHTML = `Game is Draw! <br> Click Reset to Try Again.`
                gameDrawPageFlash();
            }
        }
    })
})

function gameDrawPageFlash(){
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(() => {
        document.querySelector("body").style.backgroundColor = "white";
    } , 150)
}

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
    document.querySelector(".line").style.width = "0vw";
    document.querySelector(".line").style.transform = "translate(0vw , 0vw) rotate(0deg)"
    filledCellCount = 0;
})

