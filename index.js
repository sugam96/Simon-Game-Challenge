var gameArray = [];
var userArray = [];
var colorArray = ["green", "red", "yellow", "blue"];
var moveCounter = 0;
var gameStarted = false;
var lost = false;
$(function () {
    //console.log("Here1!");
    $(document).keydown(function () {
        //console.log("Here2!");
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

    //console.log("Game Started");
    $("#level-title").text("Level 1");
    setTimeout(() => {
        createNewLevel();
    }, 300);
    $("div.btn").click(function () {
        //console.log(this.id);
        makeSound(this.id);
        animateSquare(this.id);
        validMove(this.id);
    })
}

function validMove(clickedSquare) {
    var requiredColor = colorArray[gameArray[moveCounter]];
    //console.log(clickedSquare, moveCounter, gameArray, requiredColor, gameArray[moveCounter]);
    if (clickedSquare === requiredColor) {
        if (moveCounter === (gameArray.length - 1)) {
            setTimeout(() => {
                createNewLevel();
            }, 400);
        }
        else
            moveCounter++;
    }
    else
        lost = true;
    if (lost) {
        $("#level-title").text("You Lose! Press Any Key to try Again.");
        gameStarted = false;
        makeSound("wrong");
        $("div.btn").unbind();
    }
}

function createNewLevel() {
    //console.log("Creating New Level");
    var nextSquare = Math.floor(Math.random() * 4);
    gameArray.push(nextSquare);
    makeSound(colorArray[nextSquare]);
    animateSquare(colorArray[nextSquare]);
    moveCounter = 0;
    $("#level-title").text("Level " + gameArray.length);
}

function animateSquare(clickedSquare) {
    $("#" + clickedSquare).addClass("pressed");
    setTimeout(() => {
        $("#" + clickedSquare).removeClass("pressed");
    }, 200);

}

function makeSound(sound) {
    soundURL = "sounds/" + sound + ".mp3"
    var sound = new Audio(soundURL);
    sound.play();
}