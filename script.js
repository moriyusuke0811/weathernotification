const questions = [
    { text: "あなたの体調チェック！"}
    { text: "今日の体調は？", options: ["元気！", "だるい", "頭痛がする", "悪い", "その他"] },
    { text: "今日の痛みはどれくらい？", options: ["1", "2", "3", "4", "5"] },
    { text: "どんな痛み？", options: ["ズキズキ", "ガンガン", "ギュー", "〇〇", "△△"] },
    { text: "終了です！良い一日を！"}
];

let index = 0;
const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-btn");

function showQuestion() {
    questionContainer.style.transform = "translateX(100%)";
    optionsContainer.style.opacity = "0";
    setTimeout(() => {
        questionContainer.textContent = questions[index].text;
        optionsContainer.innerHTML = "";
        questions[index].options.forEach(option => {
            const btn = document.createElement("button");
            btn.textContent = option;
            btn.classList.add("option");
            btn.onclick = () => handleOptionClick(option);
            optionsContainer.appendChild(btn);
        });
        questionContainer.style.transform = "translateX(0)";
        optionsContainer.style.opacity = "1";
    }, 300);
}

function handleOptionClick(option) {
    console.log(`選択肢: ${option}`);
}

nextButton.addEventListener("click", () => {
    if (index < questions.length - 1) {
        index++;
        showQuestion();
    }
});

showQuestion();