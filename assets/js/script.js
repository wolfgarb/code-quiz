function countdown() {
    var counter = 60;
    $("#countdown").show(counter)
}


// const questions = [{
//     question:"",
//     answers:[""],
// }]


function startQuiz() {
    countdown();
}

$("#start-btn").on("click", function() {
    $(this).hide("slide");
    $("#quiz-description").hide("slide");
    startQuiz();
});

function endGame() {
    console.log("Game Over");
}


