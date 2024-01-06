
const questions = [
        {
        question: "What does HTML stand for?",
        options:   [
          "Hyper Text Preprocessor",
          "Hyper Text Markup Language",
          "Hyper Text Multiple Language",
          "Hyper Tool Multi Language"
        ],
        answer: "Hyper Text Markup Language"
        
      },
        {
        question: "What does CSS stand for?",
        options:   [
          "Common Style Sheet",
          "Colorful Style Sheet",
          "Computer Style Sheet",
          "Cascading Style Sheet"
        ],
        answer: "Cascading Style Sheet",

        },
        {

        question: "What is the purpose of the `let` keyword in JavaScript?",
        
        options:   [
          "To declare a constant variable.",
          "To declare a block-scoped variable.",
          "To declare a global variable.",
          "To declare a variable with a specific data type."
        ],
        answer: "To declare a block-scoped variable.", 
    },
      {
        
        question: "How can you comment a single line of code in JavaScript?",
       
        options:   [
          "/* This is a comment */",
          "' This is a comment '",
          "// This is a comment",
          "<!-- This is a comment -->"
        ],
        answer: "// This is a comment", 
      },
      {
        
        question: "What is the purpose of the `addEventListener` method in JavaScript?",
       
        options:   [
          "To create a new event.",
          "To remove an event listener.",
          "To execute a function when a specified event occurs.",
          "To modify the style of an HTML element."
        ],
        answer: "To execute a function when a specified event occurs.",
      }
]
//DOM //
const timerElement = document.querySelector('#timer');
const landingpageElement = document.querySelector("#quiz-start");
const questionElement = document.querySelector("#questions"); // corrected ID
const choicesElement = document.querySelector("#options");
const startBtn = document.querySelector('#start');
const submitBtn = document.querySelector("#submit-score"); 
const initialsEl = document.querySelector("#initials"); 
const reStartBtn = document.querySelector("#restart");
const feedbackEl = document.querySelector("#feedback");

// initial state of quiz //
let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerid;

// start quiz and hide front page//
function quizstart() {
  timerid = setInterval(clockTick, 1000);
  timerElement.textContent = time;
  landingpageElement.classList.add("hide");
  questionElement.classList.remove("hide");
  getQuestion();
}

// Loop through array of questions and create a list with buttons 
function getQuestion() { 
  const currentQuestion = questions[currentQuestionIndex]; 
  const promptEl = document.getElementById("questionWords"); 

  promptEl.textContent = currentQuestion.question; 
  choicesElement.innerHTML = ""; 

  currentQuestion.options.forEach(function (choice, i) { 
    const choiceBtn = document.createElement("button"); 

    choiceBtn.setAttribute("value", choice); 
    choiceBtn.textContent = i + 1 + ". " + choice; 
    choiceBtn.onclick = questionClick; 
    choicesElement.appendChild(choiceBtn); 
  }); 
} 

// Check for right answers and deduct time for wrong 
function questionClick() {
  if (this.value !== questions[currentQuestionIndex].answer) {
    time -= 5; 
    if (time < 0) { 
      time = 0; 
    }

    timerElement.textContent = time;
    feedbackEl.textContent = 'Incorrect, Try again!'
    feedbackEl.style.color = "red";
  } else {
    feedbackEl.textContent = "Correct!";
    feedbackEl.style.color = "green";
  }

  feedbackEl.classList.remove("hide"); 
  setTimeout(function () { 
    feedbackEl.classList.add("hide"); 
  }, 2000);

  currentQuestionIndex++; 
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else { 
    getQuestion(); 
  } 
} 

// End quiz by hiding questions//Stop timer, and show final score//
function quizEnd() { 
  clearInterval(timerid); 
  const endScreenEl = document.getElementById("quiz-end"); 
  endScreenEl.classList.remove("hide"); 

  let finalScoreEl = document.getElementById("score-final"); 
  finalScoreEl.textContent = time; 
  questionElement.classList.add("hide"); 
} 

// Make sure clockTick is defined 
function clockTick() { 
  if (time > 0) { 
    time--; 
    timerElement.textContent = time; 
  } else { 
    quizEnd(); 
  } 
}

// Attach the quizstart function to the start button
startBtn.addEventListener("click", quizstart);

// Save score in local storage & initials
  
function saveHighscore() { 
  const name = nameEl.value.trim(); 
  if (name !== "") 
  { const highscores = JSON.parse(window.localStorage.getItem("highscores") ) || []; 
    const newScore = {score: time, name: name, }; 
    highscores.push(newScore); 
    window.localStorage.setItem("highscores", JSON.stringify(highscores)); 
    alert("Your Score has been Submitted"); 
  } 
} 

// Save users' score after pressing enter 
  
function checkForEnter(event) { 
  if (event.key === "Enter") {saveHighscore(); 
      alert("Your Score has been Submitted"); 
  } 
} 
nameEl.onkeyup = checkForEnter; 

// Save users' score after clicking submit 

submitBtn.onclick = saveHighscore; 

// Start quiz after clicking start quiz 

startBtn.onclick = quiz-start;
