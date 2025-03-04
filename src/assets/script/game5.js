const questions = [
  {
    question:
      "Qual é a operação necessária para converter Won para Real, sabendo que 1 Won equivale a 0,004 Real?",
    answers: [
      {
        option: "Multiplicar o valor em Won por 0,004",
        correct: true,
      },
      {
        option: "Dividir o valor em Won por 0,004",
        correct: false,
      },
      {
        option: "Somar o valor em Won com 0,004",
        correct: false,
      },
    ],
  },
  {
    question:
      "O que o código Math.random() faz em um jogo de Pedra, Papel e Tesoura?",
    answers: [
      {
        option: "Retorna um valor aleatório entre 0 e 10",
        correct: false,
      },
      {
        option: "Retorna um valor aleatório entre 0 e 1",
        correct: true,
      },
      {
        option: "Sempre retorna 0",
        correct: false,
      },
    ],
  },
  {
    question:
      "Qual estrutura de repetição é ideal para continuar pedindo a escolha do jogador enquanto o jogo não termina?",
    answers: [
      {
        option: "For",
        correct: false,
      },
      {
        option: "If",
        correct: false,
      },
      {
        option: "While",
        correct: true,
      },
    ],
  },
  {
    question:
      "Qual estrutura é usada para percorrer os jogadores do time armazenados em um array?",
    answers: [
      {
        option: "If",
        correct: false,
      },
      {
        option: "For",
        correct: true,
      },
      {
        option: "Switch",
        correct: false,
      },
    ],
  },
  {
    question:
      "Antes de começar o jogo de Pedra, Papel e Tesoura, o que deve ser verificado?",
    answers: [
      {
        option: "Se o jogador sabe jogar",
        correct: false,
      },
      {
        option: "Se o jogador é maior ou igual a 18 anos",
        correct: true,
      },
      {
        option: "Se o jogador quer jogar de novo",
        correct: false,
      },
    ],
  },
];

const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

let currentIndex = 0;
let questionsCorrect = 0;

btnRestart.onclick = () => {
  content.style.display = "flex";
  contentFinish.style.display = "none";

  currentIndex = 0;
  questionsCorrect = 0;
  loadQuestion();
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
  textFinish.innerHTML = `Você acertou ${questionsCorrect} de ${questions.length}`;
  content.style.display = "none";
  contentFinish.style.display = "flex";
}

function loadQuestion() {
  spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
  const item = questions[currentIndex];
  answers.innerHTML = "";
  question.innerHTML = item.question;

  item.answers.forEach((answer) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <button class="answer_button finish_button-fer" data-correct="${answer.correct}">
      ${answer.option}
    </button>
    `;

    answers.appendChild(div);
  });

  document.querySelectorAll(".answer_button").forEach((item) => {
    item.addEventListener("click", nextQuestion);
  });
}

loadQuestion();
