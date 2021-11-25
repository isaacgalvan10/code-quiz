let quizBank = [
  {
    question: 'Which built-in method returns the string representation of the number\'s value?',
    options: {
      a: 'toValue()',
      b: 'toNumber()',
      c: 'toString()',
      d: 'None of the above.'
    },
    answer: 'c',
    explanation: 'toString() method returns the string representation of the number\'s value.'
  },
  {
    question: 'The "function" and " var" are known as:',
    options: {
      a: 'Keywords',
      b: 'Data types',
      c: 'Declaration statements',
      d: 'Prototypes'
    },
    answer: 'c',
    explanation: 'The "function" and "var" both are the Declaration statements. These both are used for defining, and declaring variable, function in anywhere in the program.'
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
let startQuiz = document.getElementById('start');
let quizQuestion = document.getElementById('question');
let optionA = document.getElementById('option-a');
let optionB = document.getElementById('option-b');
let optionC = document.getElementById('option-c');
let optionD = document.getElementById('option-d');

// Hides quiz on page load
quizGame.style.display = 'none';

startQuiz.addEventListener('click', function() {
  quizGame.style.display = 'block';
  homePage.style.display = 'none';
});

function buildQuiz() {

};

// console.log(quizBank)