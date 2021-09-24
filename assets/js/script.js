// const questions = [
//     {
//     question:"what is 2 + 2",
//     answers:["4", "5", "12", "0"],
//     }
// ]

const questions = [
    {
    question:"what is 2 + 2",
    answers:["4", "5", "12", "0"],
    }
]


// function will end quiz and allow user to enter high score
function endGame() {
    console.log("Game Over");
}

function countdown() {
    var timer, counter = 60;
    $("#counter").text(counter);
    timer = setInterval(function() {
        counter--;
        $("#counter").text(counter);
        if (counter === 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}





// when the quiz begins, the countdown will begin.
function startQuiz() {
    console.log("let the countdown begin");
    $("#quiz-content").removeClass("invisible")
}

// get start button by id. when its clicked, it will be hidden, along with the quiz description. then the quiz will start.
$("#start-btn").on("click", function() {
    $(this).hide("slide");
    $("#quiz-description").hide("slide");

    startQuiz();
    countdown();
});



