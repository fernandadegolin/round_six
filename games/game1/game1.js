
// Obtém referências para os elementos da interface
const inputWon = document.getElementById('wonValue');
const inputRateReal = document.getElementById('conversionRateReal');
const inputRateDolar = document.getElementById('conversionRateDolar');

const inputResultReal = document.getElementById('resultValueReal');
const inputResultDolar = document.getElementById('resultValueDolar');

const btnConvertReal = document.getElementById('btnConvertReal');
const btnConvertDolar = document.getElementById('btnConvertDolar');
const btnClear = document.getElementById('btnClear');

/**
 * Converte o valor em Won utilizando a taxa de conversão informada
 * e exibe o resultado na caixa de resultado.
 */
function convertToReal() {
    const valorWon = parseFloat(inputWon.value);
    const rateReal = parseFloat(inputRateReal.value);


    const resultado = valorWon * rateReal;
    inputResultReal.value = resultado.toFixed(2);
}

function convertToDolar() {
    const valorWon = parseFloat(inputWon.value);
    const rateDolar = parseFloat(inputRateDolar.value);


    const resultado = valorWon * rateDolar;
    inputResultDolar.value = resultado.toFixed(2);
}

/**
 * Limpa o conteúdo de todas as caixas de entrada.
 */
function clearFields() {
    inputWon.value = '';
    inputRateReal.value = '';
    inputResultReal.value = '';
    inputRateDolar.value = '';
    inputResultDolar.value = '';
}


