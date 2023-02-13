var gameArray = [];
var userArray = [];
var colorArray = ["green", "red", "yellow", "blue"];
var moveCounter = 0;
var gameStarted = false;
var lost = false;
$(function () {
    console.log("Here1!");
    $(document).keydown(function () {
        console.log("Here2!");
        if (!gameStarted)
            startGame();
    })
})

function startGame() {
    gameStarted = true;
    gameArray = [];
    userArray = [];
    moveCounter = 0;
    lost = false;

    console.log("Game Started");
    
    $("#level-title").text("Level 1");
    setTimeout(() => {
        createNewLevel();
        
    }, 300);    
    
    $("div.btn").click(function () {
        console.log(this.id);
        animateSquare(this.id);
        validMove(this.id);
    })

}

function validMove(square) {
    var color = colorArray[gameArray[moveCounter]];
    console.log(square, moveCounter, gameArray, color, gameArray[moveCounter]);
    if (square === color) {
        if (moveCounter === (gameArray.length - 1)) {
            createNewLevel();
        }
        else
            moveCounter++;
    }
    else
        lost = true;


    if (!lost) {

    }
    else if (lost) {
        $("#level-title").text("You Lose! Press Any Key to try Again.");
        gameStarted = false;
    }
}

function createNewLevel() {
    console.log("Creating New Level");
    var nextSquare = Math.floor(Math.random() * 4);
    gameArray.push(nextSquare);
    animateSquare(colorArray[nextSquare]);
    moveCounter = 0;
}

function animateSquare(square) {
    $("#" + square).addClass("pressed");
    setInterval(() => {
        $("#" + square).removeClass("pressed");
    }, 300);

}