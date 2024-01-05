const questionElement = document.getElementById('question')
const choicesElement = document.getElementById('choices')
const nextButton = document.getElementById('next-btn')

const questions = [
        {
    
        question: "What does HTML stand for?",
        correctAnwser: "Hyper Text Markup Language",
        choices:   [
          "Hyper Text Preprocessor",
          "Hyper Text Markup Language",
          "Hyper Text Multiple Language",
          "Hyper Tool Multi Language"
        ]
        
      },
        {
       
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheet",
        choices:   [
          "Common Style Sheet",
          "Colorful Style Sheet",
          "Computer Style Sheet",
          "Cascading Style Sheet"
        ] 
        },
        {
        
        question: "What is the purpose of the `let` keyword in JavaScript?",
        answer: "To declare a block-scoped variable.",
        choices:   [
          "To declare a constant variable.",
          "To declare a block-scoped variable.",
          "To declare a global variable.",
          "To declare a variable with a specific data type."
        ] //Answer: B. To declare a block-scoped variable.//
    },
      {
        
        question: "How can you comment a single line of code in JavaScript?",
        answer: "// This is a comment",
        choices:   [
          "/* This is a comment */",
          "' This is a comment '",
          "// This is a comment",
          "<!-- This is a comment -->"
        ] //Answer: C. // This is a comment//
      },
      {
        
        question: "What is the purpose of the `addEventListener` method in JavaScript?",
        answer: "To execute a function when a specified event occurs.",
        choices:   [
          "To create a new event.",
          "To remove an event listener.",
          "To execute a function when a specified event occurs.",
          "To modify the style of an HTML element."
        ] //Answer: C. To execute a function when a specified event occurs.//
      }
    ]

    let currentQuestion = 0

    function showQuestion(){
        const question = questions[currentQuestion]
        questionElement.textContent = question.question
        choicesElement.innerHTML = '';
        question.choices.forEach((choice, index) => {
            const choiceButton = document.createElement('button');
            choiceButton.classList.add('btn');
            choiceButton.textContent = choice;
            choiceButton.addEventListener('click', () => checkAnwser(index));
            choicesElement.appendChild(choiceButton);
    })
    }

    function checkAnwser(choiceIndex){
        const isCorrect = choiceIndex === questions[correctQuestion].correctAnwser

        if(isCorrect){
            choicesElement.innerHTML = '<p>Correct!</p>'
        } 
        else{
            choicesElement.innerHTML = '<p>Wrong. Try again!</p>'
        }
    }

    // currentQuestion++;
    // if(currentQuestion < questions.length){
    //     nextButton.style.display = 'block'
    // }
    // else{
    //     nextButton.style.display = 'none'
    //     choicesElement.innerHTML = '<p>Quiz done! Thanks for playing.'
    // }
