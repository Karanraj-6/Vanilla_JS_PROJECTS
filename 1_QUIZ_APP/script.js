const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    question: "Which of these is NOT a programming language?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "Banana", correct: true },
      { text: "JavaScript", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Go", correct: false },
      { text: "Gd", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
    ],
  },
];

// Selecting elements from the DOM
const startButton = document.getElementById("startButton");
const restartButton = document.getElementById("restart-quiz");
const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");
const questionHeading = document.querySelector(".question-heading");
const questionInfo = document.querySelector(".question-info p span");

const optionContainer = document.querySelector(".options-container")
const questionNumber = document.getElementById("currentQuestion");
const progressBar = document.getElementById("progress");
const answerButtons = document.querySelectorAll(".answer-button");
const correctAnswersSpan = document.getElementById("correct-answers");
const resultMessage = document.getElementById("result-message");
const totalQuestionsSpan = document.getElementById("totalQuestions");
const scoreSpan = document.getElementById("score");
const totalQuestionsResult = document.getElementById("totalQuestionsResult");


let currentQuestionIndex = 0;
let score = 0;

scoreSpan.textContent = score;
totalQuestions.textContent = quizQuestions.length;



// startButton
startButton.addEventListener("click", ()=>{
    currentQuestionIndex = 0
    score = 0 
    showScreen(quizScreen);
    loadQuestions(currentQuestionIndex);
});


function showScreen(screen){
    document.querySelectorAll(".screen").forEach(page =>{page.classList.remove("active")});
    screen.classList.add("active");
}


function loadQuestions(currentQuestionIndex){
    if (currentQuestionIndex < quizQuestions.length){
        let questionNum = currentQuestionIndex + 1;
        questionNumber.textContent = questionNum;

        let CurrentQuestionInfo = quizQuestions[currentQuestionIndex];
        questionHeading.textContent = CurrentQuestionInfo.question;
        
        optionContainer.innerHTML = "";

        CurrentQuestionInfo.answers.forEach(answer => {
            const btn = document.createElement("button");
            btn.textContent = answer.text;
            btn.classList.add("option-btn-style");
            btn.addEventListener("click", () =>(checkAnswer(answer.correct)));
            optionContainer.appendChild(btn);
        });
    }
    else{
        correctAnswersSpan.textContent = score;
        showResults(score)
    }
}

function showResults(score){
    if (score === 5){
        resultMessage.textContent = "Amazing Dude..!"
    }
    else if (score >= 3){
        resultMessage.textContent = "Not bad, keep Grinding..!"
    }
    else if (score >= 1){
        resultMessage.textContent = "Your gonna cook man.!"
    }
    else{
        resultMessage.textContent = "0 fr, You need DIDDY's Classes"
    }
    setTimeout(() => {
    showScreen(resultScreen);
    },300)
}

function checkAnswer(isCorrect){
    if (isCorrect){
        score++;
    }

    scoreSpan.textContent = score;
    currentQuestionIndex++;

    
    percent = (currentQuestionIndex/ quizQuestions.length)* 100
    progressBar.style.width = percent+"%";

    loadQuestions(currentQuestionIndex);
}

totalQuestionsResult.textContent = quizQuestions.length;

restartButton.addEventListener("click",()=>{
    // reset values
    currentQuestionIndex = 0;
    score = 0;

    scoreSpan.textContent = score;
    progressBar.style.width = "0%";
    showScreen(startScreen)});