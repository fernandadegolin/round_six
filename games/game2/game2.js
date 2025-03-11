

//VERIFICAÇÃO DA IDADE, PODEMOS COMEÇAR POR AQUI
var age = prompt("Informe sua idade:");
if (age === null || parseInt(age, 10) < 18) {
alert("Menores de idade não podem se arriscar no Round6! Mas se você gosta de jogos, vou te levar até a página da Alura!");
window.location.href = "https://www.alura.com.br/cursos-online-programacao/jogos";

}

// RECUPERANDO DADOS DOS CAMPOS
var playerChoiceSelect = document.getElementById('playerChoice');
var playerImage = document.getElementById('playerImage');
var computerImage = document.getElementById('computerImage');
var btnPlay = document.getElementById('btnPlay');
var resultMessage = document.getElementById('resultMessage');

// POSSÍVEIS JOGADAS MAPEADAS COM AS IMAGENS
var moveImages = {
    'Pedra': '../../src/assets/img/g2_pedra.png',
    'Papel': '../../src/assets/img/g2_papel.png',
    'Tesoura': '../../src/assets/img/g2_tesoura.png'
};

// ARRAY COM JOGADAS POSSÍVEIS
var moves = ['Pedra', 'Papel', 'Tesoura'];

// GERAR JOGADA DO COMPUTADOR
function getRandomMove() {
    var randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
}

//ATUALIZAR A IMAGEM DA JOGADA DO JOGADOR COM BASE NA ESCOLHA
function updatePlayerImage() {
    var playerChoiceSelect = document.getElementById('playerChoice');
    var playerImage = document.getElementById('playerImage');
    var computerImage = document.getElementById('computerImage');
    var resultMessage = document.getElementById('resultMessage');
        
    var selectedMove = playerChoiceSelect.value;
    if (selectedMove && moveImages[selectedMove]) {
        playerImage.src = moveImages[selectedMove];
        playerImage.style.display = 'block';
    } else {
        playerImage.style.display = 'none';
    }

    resultMessage.textContent = '';
    computerImage.src = '../../src/assets/img/g2_sorteio.png';
    }

// INÍCIO DO JOGO
function playGame() {
    var playerChoiceSelect = document.getElementById('playerChoice');
    var playerImage = document.getElementById('playerImage');
    var computerImage = document.getElementById('computerImage');
    var resultMessage = document.getElementById('resultMessage');
    
    
    var playerMove = playerChoiceSelect.value;
    if (!playerMove) {
        alert('Por favor, selecione sua jogada.');
        return;
    }
    

    var randomIndex = Math.floor(Math.random() * moves.length);
    var computerMove = moves[randomIndex];
    computerImage.src = moveImages[computerMove];
    
    var winner;
    if (playerMove === computerMove) {
        winner = 'Empate';
    } else if (
        (playerMove === 'Pedra' && computerMove === 'Tesoura') ||
        (playerMove === 'Tesoura' && computerMove === 'Papel') ||
        (playerMove === 'Papel' && computerMove === 'Pedra')
    ) {
        winner = 'Jogador';
    } else {
        winner = 'Computador';
    }
    
    if (winner === 'Empate') {
        resultMessage.textContent = 'Empate!';
    } else {
        resultMessage.textContent = winner + ' venceu!';
    }
}

  