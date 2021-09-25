var questions = [
    {question: "What is 2 + 2?",
    answers: ["$", "5", "4", "0"],
    correct: "4"
    },
    {question: "What is the proper command for creating a new file using the CLI?",
    answers:["", "touch ___", "mkdir ___", "please ___"]
    },
    {question: "What is wireframing?",
    answers: ["A cheap way to build a house", "x", "The practice of sketching an outline of a page's layout", "x"]
    },
    {question: "Why is camelcasing used in JS?",
    answers: ["x", "JS cannot interpret hypens", "JS has a smoking problem", "x"]
    },
    {question: "Which method saves data to localStorage?",
    answers: ["localStorage.setItem()", "method man", "x", "x"],
    },
    {question: "What is the benefit of using console.log()?",
    answers: ["So the computer can write in it's diary like in Star Trek", "x", "x", "To ensure your code is coming along"],
    correct: "To ensure your code is coming along"
    }
]

var questionLog = 0

function showQuestion() {
    $("#question").text(questions[questionLog].question)
    $("#answer-1").text(questions[questionLog].answers[0])
    $("#answer-2").text(questions[questionLog].answers[1])
    $("#answer-3").text(questions[questionLog].answers[2])
    $("#answer-4").text(questions[questionLog].answers[3])
}

// function will end quiz and allow user to enter high score
function endGame() {
    console.log("Game Over");
    $("#quiz-content").addClass("invisible");
}

function countdown() {
    var timer, counter = 100;
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

// function showQuestion() {
//     $("#question").text(questions[questionLog].question)
//     $("#answer-1").text(questions[questionLog].answers[0])
//     $("#answer-2").text(questions[questionLog].answers[1])
//     $("#answer-3").text(questions[questionLog].answers[2])
//     $("#answer-4").text(questions[questionLog].answers[3])
// }

// when the quiz begins, the countdown will begin.
function startQuiz() {
    console.log("let the countdown begin");
    $("#quiz-content").removeClass("invisible")
    showQuestion();
}

$("#answers").on("click", ".answer", function() {
    console.log(questionLog);
    if ($(this).text() === questions[questionLog].correct) {
    console.log("correct");
    } else {
        console.log("incorrect");
    }
    questionLog++;
    if (questionLog === questions.length) {
        endGame();
    } else {
    console.log(questionLog);
    showQuestion(); 
}
});

// get start button by id. when its clicked, it will be hidden, along with the quiz description. then the quiz will start.
$("#start-btn").on("click", function() {
    $(this).hide("slide");
    $("#quiz-description").hide("slide");

    startQuiz();
    countdown();
});

