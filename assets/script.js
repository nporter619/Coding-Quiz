// Created some sample questions to test
const questions = [
    {
        question: 'What does API stand for in coding?',
        answers: {
            A: 'Aplication Programming Interfaces',
            B: 'American Petroleum Institute',
            C: 'Active Pharmaceutical Ingredient',
            D: 'Academic Performance Index'
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
    },
    {
        question: 'What is the tool used to inspect a live web browser',
        answers: {
            A: 'Google Slides',
            B: 'Bootstrap',
            C: 'Shift+4',
            D: 'Dev Tools'
        },
        correct: 'D'
    },
    {
        question: 'What does the function clearInterval do?',
        answers: {
            A: 'Sets a delay for functions being used again and again',
            B: 'Stop the event of the recurring calling of a function',
            C: 'Stops all functions in JS',
            D: 'Deletes your past function'
        },
        correct: 'B'
    },
    {
        question: 'What does keyup mean?',
        answers: {
            A: 'Scrolls to function above you',
            B: 'Automatically goes to the top of the page',
            C: 'An event when a key is released',
            D: 'An event when a key is pressed down'
        },
        correct: 'C'
    },
    
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

function startQuiz() {
    // Reset 
    timeRemaining = 30;
    currentQuestionIndex = 0;

    startBtn.classList.add('hide');
    timerEl.textContent = timeRemaining;
    displayQuestion();

    // This will call the countDown function every 1000 milliseconds (every 1 second)
    timerInterval = setInterval(countDown, 1000);
}

function countDown() {
    // If the timeRemaining is 0, stop the quiz!
    if (timeRemaining <= 0) {
        endQuiz();
        return;
    }

    // Decrement the timeRemaining;
    timeRemaining--;

    // Update the element to show the updated timeRemaining
    timerEl.textContent = timeRemaining;
}

function displayQuestion() {
    // Gets the question from the currentQuestionIndex
    const question = questions[currentQuestionIndex];
   
    questionContainer.innerHTML = '<h2>' + question.question + '</h2>';
    // This will iterate of all the keys in the answers
    // to display each button
    for (let key in question.answers) {
        questionContainer.innerHTML += '<button onclick="answerQuestion(\'' + key + '\')">' + key + ': ' + question.answers[key] + '</button>';
    }
}


function answerQuestion(answer) {
    // If answered incorrectly...
    if (answer !== questions[currentQuestionIndex].correct) {
        timeRemaining -= 5;
        timerEl.textContent = timeRemaining;
    }

    // Increment the index to grab the next question
    currentQuestionIndex++;

    // If there are no more questions to show...
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionContainer.innerHTML = '<h2>Quiz Over!</h2>';

    // Clear the timer variable
    clearInterval(timerInterval);

    // Save the new score and display all the high scores
    const userInitials = prompt("Enter your initials:");
    saveHighScore(timeRemaining, userInitials);

    // Show the high scores
    displayHighScores();

    // Show the Start Quiz button
    startBtn.classList.remove('hide');
}

function saveHighScore(score, initials) {
    // Add the score to the array of scores (push adds a new score to the end of the array)
    highScores.push({ score, initials });
    highScores.sort((a, b) => b.score - a.score);
    // Save the highScores in localStorage so we can access it later
    localStorage.setItem('highScores', JSON.stringify(highScores));
}

function displayHighScores() {
    
    highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    highScoreList.innerHTML = highScores.map((entry, index) => `<li class="${index === 0 ? 'high-score' : ''}">${entry.initials}: ${entry.score}</li>`).join('');
}