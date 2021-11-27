let quizBank = [
  {
    question: 'Which built-in method returns the string representation of the number\'s value?',
    options: [
      { text: 'toValue()', correct: false },
      { text: 'toNumber()', correct: false },
      { text: 'toString()', correct: true },
      { text: 'None of the above.', correct: false }
    ]
  },
  {
    question: 'The "function" and " var" are known as:',
    options: [
      { text: 'Keywords', correct: false },
      { text: 'Data types', correct: false },
      { text: 'Declaration statements', correct: true },
      { text: 'Prototypes', correct: false}
    ]
  },
  {
    question: 'Which of the following variables takes precedence over the others if the names are the same?',
    options:{
      a: 'Global variable',
      b: 'The local element',
      c: 'The two of the above',
      d: 'None of the above'
    },
    answer: 'b',
    explanation: 'In JavaScript, the local variable takes precedence over the global variable if the name of both local and global variables is the same.'
  },
  {
    question: 'Which of the following function of Array object removes the last element from an array and returns that element?',
    options:{
      a: 'pop()',
      b: 'push()',
      c: 'join()',
      d: 'map()'
    },
    answer: 'a',
    explanation: 'pop() − Removes the last element from an array and returns that element.'
  },
  {
    question: 'Which of the following function of Array object removes the first element from an array and returns that element?',
    options:{
      a: 'reverse()',
      b: 'shift()',
      c: 'slice()',
      d: 'some()'
    },
    answer: 'a',
    explanation: 'pop() − Removes the last element from an array and returns that element.'
  },

];

let homePage = document.getElementById('home');
let quizGame = document.getElementById('quiz');
let feedbackWrapper = document.getElementById('feedback-wrapper');
let endScreen = document.getElementById('end-screen');
let startQuiz = document.getElementById('start');
let questionEl = document.getElementById('question');
let answerBtnEl = document.getElementById('btn-options');
let countdownTimer = document.getElementById('countdown-timer');
let totalScore = document.getElementById('score');
let feedbackEl = document.getElementById('feedback');
let questionIndex = 0;
let count = 100;

// Hides quiz and end screen on page load
quizGame.style.display = 'none';
endScreen.style.display = 'none';
feedbackWrapper.style.display = 'none';

// Start game on click
startQuiz.addEventListener('click', function() {
  quizGame.style.display = 'block';
  homePage.style.display = 'none';
  buildQuiz();
  countdown();
});

function buildQuiz() {
  showQuestion();  

  console.log("built")
};

function showQuestion() {
  questionEl.innerText = quizBank[questionIndex].question;

  quizBank[questionIndex].options.forEach(option => {
    const answerBtn = document.createElement('button');
    answerBtn.innerText = option.text;
    answerBtn.classList.add('btn');
    if (option.correct) {
      answerBtn.dataset.correct = option.correct;
    };
    answerBtn.addEventListener('click', selectAnswer);
    answerBtnEl.appendChild(answerBtn);
  })
};

function selectAnswer(event) {
  let selectedBtn = event.target;
  let correct = selectedBtn.dataset.correct;
  feedbackWrapper.style.display = 'block';

  if (correct) {
    feedbackEl.innerText = 'Correct!';
  } else {
    feedbackEl.innerText = 'Wrong!';
    count = count - 5;
  };
};

// Countdown timer
function countdown() {
  timer = setInterval(function() {
    countdownTimer.textContent = count--;
    if(count == 0) {
      clearInterval(timer);
      quizGame.style.display = 'none';
      endScreen.style.display = 'block';
      totalScore.textContent = count;
      countdownTimer.textContent = count--;
    } 
}, 1000);
};

console.log(quizBank[questionIndex].options)