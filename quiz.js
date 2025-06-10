// Define a function named checkAnswer.
// This function will be called when the user submits their answer.
function checkAnswer() {

    const correctAnswer = "4";

    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    let userAnswer = null;

    if (selectedOption) {
        userAnswer = selectedOption.value;
    }

    const feedbackElement = document.getElementById('feedback');

    if (userAnswer === correctAnswer) {
        
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = "green"; // Optional: make correct feedback green
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = "red"; // Optional: make incorrect feedback red
    }
}

const submitButton = document.getElementById('submit-answer');

submitButton.addEventListener('click', checkAnswer);