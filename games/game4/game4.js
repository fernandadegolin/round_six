let playerTeam = [];
let computerTeam = [];
let playerStrength = 0;
let computerStrength = 0;

let allPlayers = [
  "João",
  "Maria",
  "Carlos",
  "Ana",
  "Paulo",
  "Fernanda",
  "Ricardo",
  "Laura",
];

function showPlayerTeam() {
  let inputs = document.querySelectorAll("input");
  let empty = false;

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

  for (let i = 0; i < 3; i++) {
    let randomIndex = Math.floor(Math.random() * availablePlayers.length);
    computerTeam.push(availablePlayers[randomIndex]);
    availablePlayers.splice(randomIndex, 1);
  }

  document.getElementById(
    "computerResult"
  ).innerHTML = `<b>Time oponente: </b>${computerTeam.join(
    ", "
  )} (Força: ???)`;

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
