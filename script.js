const questions = [
    "今日の体調は？",
    "今日の痛みはどれくらい？",
    "どんな痛み？"
];
let index = 0;
const questionContainer = document.getElementById("question-container");
const nextButton = document.getElementById("next-btn");

function showQuestion() {
    questionContainer.style.transform = "translateX(100%)";
    setTimeout(() => {
        questionContainer.textContent = questions[index];
        questionContainer.style.transform = "translateX(0)";
    }, 300);
}

nextButton.addEventListener("click", () => {
    if (index < questions.length - 1) {
        index++;
        showQuestion();
    }
});

showQuestion();
