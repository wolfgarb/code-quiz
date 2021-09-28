var questions = [
    {question: "What is the proper command for creating a new file using the CLI?",
    answers:["git branch ___", "touch ___", "mkdir ___", "please ___"],
    correct: "touch ___"
    },
    {question: "What is wireframing?",
    answers: ["A cheap way to build a house", "Writing the html files first", "The practice of sketching an outline of a page's layout", "The practice of laying out the CSS page"],
    correct: "The practice of sketching an outline of a page's layout"
    },
    {question: "Why is camelcasing used in JS?",
    answers: ["JS is outdated", "JS cannot interpret hypens", "JS has a smoking problem", "It improves legibility"],
    correct: "JS cannot interpret hypens"
    },
    {question: "Which method saves data to localStorage?",
    answers: ["localStorage.setItem()", "method-man()", "localStorage.getItem()", "$('localStorage')"],
    correct: "localStorage.setItem()"
    },
    {question: "What is the benefit of using console.log()?",
    answers: ["So the computer can write in it's diary like in Star Trek", "To save data to local storage", "To save your progress with Git", "To ensure your code is coming along"],
    correct: "To ensure your code is coming along"
    },
    {question: "What is 2 + 2?",
    answers: ["$", "5", "4", "0"],
    correct: "4"
    }
]

var questionLog = 0;
var playerScore = 0;
var timer, counter = 60;
var player = {};


function showQuestion() {
    $("#question").text(questions[questionLog].question)
    $("#answer-1").text(questions[questionLog].answers[0])
    $("#answer-2").text(questions[questionLog].answers[1])
    $("#answer-3").text(questions[questionLog].answers[2])
    $("#answer-4").text(questions[questionLog].answers[3])
}

// function will end quiz and allow user to enter high score
function endGame() {
    clearInterval(timer)
    $("#quiz-content").addClass("invisible");
    if (playerScore < 0) {
        playerScore = 0;
        $("#result").text("You scored " + playerScore + " out of 30. Study more and try again!")
    } else {
    $("#result").text("Let's see how you did! Your score was " + playerScore + " out of 30.")
    $("#player-input").removeClass("invisible");
}
}

// targeting the submit click to save player name/initials to local storage
    $("#submit").on("click", function() {
        var playerName = $("#player-name").val();
        localStorage.setItem(playerName, playerScore);
        loadScores();
    });



$("#delete").on("click", function() {
    localStorage.clear();
})

// countdown function
function countdown() {
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
    $("#quiz-content").removeClass("invisible")
    showQuestion();
}

// anytime an answer is clicked, it will check if right/wrong while also showing the next question
$("#answers").on("click", ".answer", function() {
    if ($(this).text() === questions[questionLog].correct) {
    $("#result").text("correct!");
    playerScore = (playerScore + 5);
    } else {
        $("#result").text("incorrect!");
        counter = (counter - 10);
        playerScore = (playerScore - 5);
    }
    questionLog++;
    if (questionLog === questions.length) {
        endGame();
    } else {
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


// get data from local storage and upload to high-scores.html



