let playerTeam = [];
let computerTeam = [];
let playerStrength = 0;
let computerStrength = 0;

let allPlayers = [
  "Seong Gi-hun",
  "Cho Sang-woo",
  "Kang Sae-byeok",
  "Oh Il-nam",
  "Jang Deok-su",
  "Han Mi-nyeo",
  "Ali Abdul",
];

function showPlayerTeam() {
  let inputs = document.querySelectorAll("input");
  let empty = false;

  // Esse trecho de código está percorrendo todos os inputs para verificar se algum deles está vazio. Vamos entender passo a passo:

  //   Explicação:
  // inputs.forEach(): O método .forEach() percorre cada elemento do array inputs (que contém todos os campos de input).

  // input.value: Pega o valor digitado no campo.

  // .trim(): Remove os espaços em branco no começo e no final do texto. Por exemplo:

  // " João ".trim() vira "João".
  // !input.value.trim(): O operador ! (negação) verifica se o valor está vazio.

  // Se o valor for vazio (ou seja, ""), a condição retorna true.
  // Se o valor tiver texto, a condição retorna false.
  // empty = true;: Se algum campo estiver vazio, a variável empty será marcada como true.

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      empty = true;
    }
  });

  if (empty) {
    alert("Preencha todos os campos antes de continuar!");
    return;
  }

  playerTeam = [...inputs].map((input) => input.value.trim());
  playerStrength = calculateStrength(playerTeam);

  document.getElementById(
    "playerResult"
  ).innerHTML = `<b>Seu time: </b>${playerTeam.join(
    ", "
  )} (Força: ${playerStrength})`;

  document.getElementById("btnOpponent").style.display = "inline-block";
}

function showComputerTeam() {
  computerTeam = [];
  let availablePlayers = [...allPlayers];

  //O código sorteia 3 jogadores aleatórios, adiciona no time do computador e garante que nenhum jogador se repita.

  //   Explicação:
  // for (let i = 0; i < 3; i++):

  // Esse loop for vai rodar 3 vezes para selecionar exatamente 3 jogadores.
  // Math.random():

  // Gera um número aleatório entre 0 e 1.
  // Math.random() * availablePlayers.length:

  // Multiplica o número aleatório pelo tamanho do array availablePlayers, para garantir que o índice esteja dentro dos limites do array.
  // Math.floor():

  // Arredonda o número para baixo, transformando em um número inteiro (índice válido).
  // availablePlayers[randomIndex]:

  // Seleciona o jogador aleatório com o índice sorteado.
  // computerTeam.push():

  // Adiciona o jogador sorteado no array computerTeam.
  // availablePlayers.splice(randomIndex, 1):

  // Remove o jogador sorteado da lista availablePlayers, para evitar que o mesmo jogador seja escolhido novamente.

  for (let i = 0; i < 3; i++) {
    let randomIndex = Math.floor(Math.random() * availablePlayers.length);
    computerTeam.push(availablePlayers[randomIndex]);
    availablePlayers.splice(randomIndex, 1);
  }

  document.getElementById(
    "computerResult"
  ).innerHTML = `<b>Time oponente: </b>${computerTeam.join(", ")} (Força: ???)`;

  document.getElementById("btnPlay").style.display = "inline-block";
}

function startGame() {
  computerStrength = calculateStrength(computerTeam);

  document.getElementById(
    "computerResult"
  ).innerHTML = `<b>Time oponente: </b>${computerTeam.join(
    ", "
  )}(Força: ${computerStrength})`;

  let resultText = "";

  if (playerStrength > computerStrength) {
    resultText = "<b style='color:green;'>🏆 Você ganhou!</b>";
  } else if (playerStrength < computerStrength) {
    resultText = "<b style='color:red;'>🤖 O computador venceu!</b>";
  } else {
    resultText = "<b style='color:blue;'>🔄 Empate!</b>";
  }

  document.getElementById("result").innerHTML = resultText;
  document.getElementById("btnReset").style.display = "inline-block";
}

function calculateStrength(team) {
  let totalStrength = 0;
  for (let i = 0; i < team.length; i++) {
    let strength = Math.floor(Math.random() * 10) + 1;
    totalStrength += strength;
  }
  return totalStrength;
}

function resetGame() {
  document.querySelectorAll("input").forEach((input) => (input.value = ""));
  document.getElementById("playerResult").innerHTML = "";
  document.getElementById("computerResult").innerHTML = "";
  document.getElementById("result").innerHTML = "";

  ["btnOpponent", "btnPlay", "btnReset"].forEach(
    (id) => (document.getElementById(id).style.display = "none")
  );
}

// ----------------------------------------------------------------------------------------------------------------------------
// Código limpo

// ---------------------------------------------------------------------------------------------------------------------------

// let playerTeam = [];
// let computerTeam = [];
// let playerStrength = 0;
// let computerStrength = 0;

// const allPlayers = [
//   "Seong Gi-hun",
//   "Cho Sang-woo",
//   "Kang Sae-byeok",
//   "Oh Il-nam",
//   "Jang Deok-su",
//   "Han Mi-nyeo",
//   "Ali Abdul",
// ];

// const getElement = (id) => document.getElementById(id);
// const showElement = (id) => (getElement(id).style.display = "inline-block");
// const hideElements = (ids) =>
//   ids.forEach((id) => (getElement(id).style.display = "none"));

// function getInputValues() {
//   return [...document.querySelectorAll("input")].map((input) =>
//     input.value.trim()
//   );
// }

// function validateInputs(inputs) {
//   if (inputs.some((value) => value === "")) {
//     alert("Preencha todos os campos antes de continuar!");
//     return false;
//   }
//   return true;
// }

// function showPlayerTeam() {
//   const inputs = getInputValues();
//   if (!validateInputs(inputs)) return;

//   playerTeam = inputs;
//   playerStrength = calculateStrength(playerTeam);

//   getElement("playerResult").innerHTML = `<b>Seu time: </b>${playerTeam.join(
//     ", "
//   )} (Força: ${playerStrength})`;

//   showElement("btnOpponent");
// }

// function showComputerTeam() {
//   computerTeam = [];
//   let availablePlayers = [...allPlayers];

//   for (let i = 0; i < 3; i++) {
//     const randomIndex = Math.floor(Math.random() * availablePlayers.length);
//     computerTeam.push(...availablePlayers.splice(randomIndex, 1));
//   }

//   getElement(
//     "computerResult"
//   ).innerHTML = `<b>Time oponente: </b>${computerTeam.join(", ")} (Força: ???)`;

//   showElement("btnPlay");
// }

// function startGame() {
//   computerStrength = calculateStrength(computerTeam);

//   getElement(
//     "computerResult"
//   ).innerHTML = `<b>Time oponente: </b>${computerTeam.join(
//     ", "
//   )} (Força: ${computerStrength})`;

//   const result =
//     playerStrength > computerStrength
//       ? "<b style='color:green;'>🏆 Você ganhou!</b>"
//       : playerStrength < computerStrength
//       ? "<b style='color:red;'>🤖 O computador venceu!</b>"
//       : "<b style='color:blue;'>🔄 Empate!</b>";

//   getElement("result").innerHTML = result;
//   showElement("btnReset");
// }

// function calculateStrength(team) {
//   return team.reduce((total) => total + Math.floor(Math.random() * 10 + 1), 0);
// }

// function resetGame() {
//   document.querySelectorAll("input").forEach((input) => (input.value = ""));
//   ["playerResult", "computerResult", "result"].forEach(
//     (id) => (getElement(id).innerHTML = "")
//   );
//   hideElements(["btnOpponent", "btnPlay", "btnReset"]);
// }
