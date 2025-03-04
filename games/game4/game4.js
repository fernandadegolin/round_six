function startGame() {
  console.log("Iniciando o jogo...");

  let computerTeam = [];

  let playerTeam = [
    document.getElementById("player1").value,
    document.getElementById("player2").value,
    document.getElementById("player3").value,
  ];

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

  // Computador escolhe 3 jogadores aleatórios
  for (let i = 0; i < 3; i++) {
    let randomIndex = Math.floor(Math.random() * allPlayers.length);
    computerTeam.push(allPlayers[randomIndex]);
    allPlayers.splice(randomIndex, 1); // Remove para evitar repetição
  }

  // Função para calcular força do time
  function calculateStrength(team) {
    let totalStrength = 0;
    for (let i = 0; i < team.length; i++) {
      let strength = Math.floor(Math.random() * 10) + 1;
      totalStrength += strength;
    }
    return totalStrength;
  }

  let playerStrength = calculateStrength(playerTeam);
  let computerStrength = calculateStrength(computerTeam);

  // Definir o vencedor
  let resultText = `Seu time: <b>${playerTeam.join(
    ", "
  )}</b> (Força: ${playerStrength})<br>
                      Time do Computador: <b>${computerTeam.join(
                        ", "
                      )}</b> (Força: ${computerStrength})<br>`;

  if (playerStrength > computerStrength) {
    resultText += "<b style='color:green;'>🏆 Você ganhou!</b>";
  } else if (playerStrength < computerStrength) {
    resultText += "<b style='color:red;'>🤖 O computador venceu!</b>";
  } else {
    resultText += "<b style='color:blue;'>🔄 Empate!</b>";
  }

  document.getElementById("result").innerHTML = resultText;
}
