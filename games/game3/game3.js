

function startGame() {

    for (var round = 1; round <= 4; round++) {
      var playerInput = prompt("Nível " + round + ": Escolha um vidro (1, 2 ou 3)");
      var playerChoice = parseInt(playerInput);
  
      if (isNaN(playerChoice) || playerChoice < 1 || playerChoice > 3) {
        alert("Entrada inválida! Por favor, escolha 1, 2 ou 3.");
        round--; 
        continue;
      }
      
      var randomChoice = Math.floor(Math.random() * 3) + 1;
      
      if (playerChoice === randomChoice) {
        document.getElementById("glass" + playerChoice).src = "../../src/assets/img/g3_quebrado.png";
        alert("Que pena! O vidro " + playerChoice + " quebrou. Você perdeu!");
        return; 
      } else {
        
        alert("Bom salto! Você passou para o próximo nível.");
      }
    }
    
    alert("Parabéns! Você completou o desafio!");
  }
  