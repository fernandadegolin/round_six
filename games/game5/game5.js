const questions = [
  {
    question: "Qual é a função do comando rand na programação?",
    answers: [
      {
        option: "Imprimir mensagens na tela",
        correct: false,
      },
      {
        option: "Declarar variáveis",
        correct: false,
      },
      {
        option: "Gerar números aleatórios",
        correct: true,
      },
      {
        option: "Criar loops",
        correct: false,
      },
    ],
  },
  {
    question: "O que o loop while faz em um jogo?",
    answers: [
      {
        option: "Executa uma ação apenas uma vez",
        correct: false,
      },
      {
        option: "Repete uma ação enquanto uma condição for verdadeira",
        correct: true,
      },
      {
        option: "Compara valores e retorna o maior",
        correct: false,
      },
      {
        option: "Gera números aleatórios",
        correct: false,
      },
    ],
  },
  {
    question: "Como é feita a seleção de um time no jogo de Cabo de Guerra?",
    answers: [
      {
        option: "Somando os pontos de cada jogador",
        correct: false,
      },
      {
        option: "Utilizando uma função rand",
        correct: false,
      },
      {
        option: "Comparando a idade dos jogadores",
        correct: false,
      },
      {
        option: "Usando um array para armazenar os membros escolhidos",
        correct: true,
      },
    ],
  },
  {
    question:
      "O que acontece se o participante tiver menos de 18 anos no jogo Pedra, Papel e Tesoura?",
    answers: [
      {
        option: "O participante escolhe duas opções",
        correct: false,
      },
      {
        option: "O participante ganha automaticamente",
        correct: false,
      },
      {
        option: "O jogo não permite a participação",
        correct: true,
      },
      {
        option: "O jogo permite a participação com pontos extras",
        correct: false,
      },
    ],
  },
  {
    question: "Como o vidro que quebra é escolhido no jogo de Salto no Vidro?",
    answers: [
      {
        option: "Pela quantidade de tentativas",
        correct: false,
      },
      {
        option: "Pela posição escolhida pelo jogador",
        correct: false,
      },
      {
        option: "Através de um número aleatório gerado pela função rand",
        correct: true,
      },
      {
        option: "Pela força do salto",
        correct: false,
      },
    ],
  },
];

const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const questionProgress = document.querySelector(".questionProgress");
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
  questionProgress.innerHTML = `${currentIndex + 1}/${questions.length}`;
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
