// Created some sample questions to test
const questions = [
    {
        question: 'What does API stand for in coding?',
        answers: {
            A: 'Aplication Programming Interfaces',
            B: 'American Petroleum Institute',
            C: 'Active Pharmaceutical Ingredient',
            D: "Academic Performance Index"
        },
        correct: 'A'
    },
    {
        question: 'What Does DOM mean?',
        answers: {
            A: 'Domination',
            B: 'Dominate',
            C: 'Document Object Model',
            D: 'Dignity Office Manifest'
        },
        correct: 'C'
    }
];

const questionContainer = document.getElementById('question-container');
const timerEl = document.getElementById('timer');
const startBtn = document.getElementById('start-btn');
const highScoreList = document.getElementById('high-score-list');

// The clock
let timeRemaining = 30;

// Used to get the current question from the questions array
let currentQuestionIndex = 0;

// Stores all the current and stored high scores
let highScores = [];

// Required to clear the interval so it doesn't continually run
let timerInterval = null;

// Add the click handler event to the start button
startBtn.addEventListener('click', startQuiz);

// Show the high scores initially
displayHighScores();