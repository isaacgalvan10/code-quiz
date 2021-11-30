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
    options: [
      { text: 'Global variable', correct: false },
      { text: 'The local element', correct: true },
      { text: 'The two of the above', correct: false },
      { text: 'None of the above', correct: false}
    ]
  },
  {
    question: 'Which of the following function of Array object removes the last element from an array and returns that element?',
    options: [
      { text: 'pop()', correct: true },
      { text: 'push()', correct: false },
      { text: 'join()', correct: false },
      { text: 'map()', correct: false }
    ]
  },
  {
    question: 'Which of the following function of Array object removes the first element from an array and returns that element?',
    options: [
      { text: 'reverse()', correct: true },
      { text: 'shift()', correct: false },
      { text: 'slice()', correct: false },
      { text: 'some()', correct: false }
    ]
  },

];

let homePage = document.getElementById('home');
let quizGame = document.getElementById('quiz');
let feedbackWrapper = document.getElementById('feedback-wrapper');
let endScreen = document.getElementById('end-screen');
let startQuiz = document.getElementById('start');
let questionEl = document.getElementById('question');
let btnOptionsEl = document.getElementById('btn-options');
let countdownTimer = document.getElementById('countdown-timer');
let totalScore = document.getElementById('score');
let feedbackEl = document.getElementById('feedback');
let questionIndex = 0;
let count = 50;


// Hides quiz and end screen on page load
quizGame.style.display = 'none';
endScreen.style.display = 'none';
feedbackWrapper.style.display = 'none';

// Start game on click
startQuiz.addEventListener('click', function() {
  quizGame.style.display = 'block';
  homePage.style.display = 'none';
  showQuestion();
  countdown();
});

// Shows and loops through questions and options
function showQuestion() {
  console.log(questionIndex);
  questionEl.innerText = quizBank[questionIndex].question;

  quizBank[questionIndex].options.forEach(option => {
    const btnOption = document.createElement('button');
    btnOption.innerText = option.text;
    btnOption.classList.add('btn', 'btn-options');
    if (option.correct) {
      btnOption.dataset.correct = option.correct;
    };
    btnOption.addEventListener('click', selectAnswer);
    btnOptionsEl.appendChild(btnOption);
  });
};

// Button options click fucntion and calls nextQuestion function after 1 second
btnOptionsEl.addEventListener('click', function(event) {
  if (event.target.className.includes('btn-options')) {
    questionIndex++;
    setTimeout(nextQuestion, 1000);
  }
});

// Checks users answer and correct answer, and checks if there are no more questions or if timer is 0 to end game
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

  if ((quizBank.length <= questionIndex + 1) || count <= 0){
    totalScore.innerText = count;
    quizGame.style.display = 'none';
    endScreen.style.display = 'block';
  }
};

// it hides the feedbackWrapper called clearState() and showQuestion()
function nextQuestion() {
  feedbackWrapper.style.display = 'none';
  clearState();
  showQuestion();
}

// Clears previous button options
function clearState() {
  while (btnOptionsEl.firstChild) {
    btnOptionsEl.removeChild(btnOptionsEl.firstChild);
  }
}

// Countdown timer
function countdown() {
  let timer = setInterval(function() {
    countdownTimer.textContent = count--;
    if((count == 0) || (quizBank.length < questionIndex + 1)) {
      clearInterval(timer);
      quizGame.style.display = 'none';
      endScreen.style.display = 'block';
      totalScore.textContent = count;
      countdownTimer.textContent = count--;
    } 
  }, 1000);
};




let formHandler = document.getElementById('player-form');

let playerNameInput = document.getElementById('name');

let playerNames = [];

formHandler.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log(playerNameInput.value);
  addPlayer(playerNameInput.value);
});

function addPlayer(name) {
  if (name !== '') {
    playerNames.push(name);
    addToLocalStorage(playerNames);
  };
  playerNameInput.value = '';
  console.log(playerNames);
};

function addToLocalStorage(names) {
  localStorage.setItem('names', JSON.stringify(names));
};






