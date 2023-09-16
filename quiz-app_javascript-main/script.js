const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

[
  {
    question: "Ouça o áudio e responda: Qual é o som?",
    audioSrc: "audio/audio1.mpeg",
    answers: [
      { option: "Rap", correct: false },
      { option: "Rock", correct: false },
      { option: "Samba", correct: true },
      { option: "Funk", correct: false },
      { option: "MPB", correct: false },
      { option: "Sertanejo", correct: false },
    ],
  },{
    question: "Ouça o áudio e responda: Qual é o som?",
    audioSrc: "audio/audio2.mpeg",
    answers: [
      { option: "Rap", correct: false },
      { option: "Rock", correct: false },
      { option: "Samba", correct: false },
      { option: "Funk", correct: false },
      { option: "MPB", correct: true },
      { option: "Sertanejo", correct: false },
    ],
  },{
    question: "Ouça o áudio e responda: Qual é o som?",
    audioSrc: "audio/audio3.mpeg",
    answers: [
      { option: "Rap", correct: false },
      { option: "Rock", correct: true },
      { option: "Samba", correct: false },
      { option: "Funk", correct: false },
      { option: "MPB", correct: false },
      { option: "Sertanejo", correct: false },
    ],
  },{
    question: "Ouça o áudio e responda: Qual é o som?",
    audioSrc: "audio/audio4.mpeg",
    answers: [
      { option: "Rap", correct: false },
      { option: "Rock", correct: false },
      { option: "Samba", correct: false },
      { option: "Funk", correct: false },
      { option: "MPB", correct: false },
      { option: "Sertanejo", correct: true },
    ],
  },{
    question: "Ouça o áudio e responda: Qual é o som?",
    audioSrc: "audio/audio5.mpeg",
    answers: [
      { option: "Rap", correct: false },
      { option: "Rock", correct: false },
      { option: "Samba", correct: false },
      { option: "Funk", correct: true },
      { option: "MPB", correct: false },
      { option: "Sertanejo", correct: false },
    ],
  },{
    question: "Ouça o áudio e responda: Qual é o som?",
    audioSrc: "audio/audio6.mpeg",
    answers: [
      { option: "Rap", correct: true },
      { option: "Rock", correct: false },
      { option: "Samba", correct: false },
      { option: "Funk", correct: false },
      { option: "MPB", correct: false },
      { option: "Sertanejo", correct: false },
    ],
  },{
    question: "Ouça o áudio e responda: Qual é o som?",
    audioSrc: "audio/audio7.mpeg",
    answers: [
      { option: "Rap", correct: false },
      { option: "Rock", correct: true },
      { option: "Samba", correct: false },
      { option: "Funk", correct: false },
      { option: "MPB", correct: false },
      { option: "Sertanejo", correct: false },
    ],
  },{
    question: "Ouça o áudio e responda: Qual é o som?",
    audioSrc: "audio/audio8.mpeg",
    answers: [
      { option: "Rap", correct: false },
      { option: "Rock", correct: false },
      { option: "Samba", correct: false },
      { option: "Funk", correct: false },
      { option: "MPB", correct: true },
      { option: "Sertanejo", correct: false },
    ],
  },
];


let currentIndex = 0;
let questionsCorrect = 0;

btnRestart.onclick = () => {
  location.reload()
};

function nextQuestion(e) {
  if (e.target.getAttribute("data-correct") === "true") {
    questionsCorrect++;
  }

  if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion();
  } else {
    finish();
  }
}

function finish() {
  textFinish.innerHTML = `você acertou ${questionsCorrect} de ${questions.length}`;
  content.style.display = "none";
  contentFinish.style.display = "flex";
}
function loadQuestion() {
  spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
  const item = questions[currentIndex];
  answers.innerHTML = "";

  // Remove o elemento de áudio anterior, se existir
  const previousAudio = content.querySelector("audio");
  if (previousAudio) {
    previousAudio.remove();
  }

  // Adicione o elemento de áudio à interface
  const audioElement = document.createElement("audio");
  audioElement.controls = true;
  audioElement.src = item.audioSrc; // Define a fonte do áudio

  const questionContainer = document.createElement("div");
  questionContainer.appendChild(audioElement);
  questionContainer.appendChild(question);
  content.appendChild(questionContainer);

  item.answers.forEach((answer) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <button class="answer" data-correct="${answer.correct}">
      ${answer.option}
    </button>
    `;

    answers.appendChild(div);
  });

  document.querySelectorAll(".answer").forEach((item) => {
    item.addEventListener("click", nextQuestion);
  });
}

loadQuestion();
