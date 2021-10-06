const quizForm = document.querySelector(".quiz-form");
const submitQuizBtn = document.querySelector("#submit-quiz-btn") ;
const outputBox = document.querySelector("#output-box");

const correctAnswers = ["90°", "right-angled"];

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()) {
        if(value === correctAnswers[index]) {
            score += 1;
        }
        index += 1;
    }
    console.log(score);
    outputBox.innerText = "Your score: " + score;
}

submitQuizBtn.addEventListener("click", calculateScore);
