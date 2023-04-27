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
