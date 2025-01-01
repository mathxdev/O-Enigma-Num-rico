let numeroSecreto = parseInt(Math.random()*10);
let texto = document.getElementById('texto');

function exibirmansagem(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    while (true) {
   
        if (numeroSecreto < chute){
            texto.innerText = 'O número secreto é menor!'
            limparEntrada()
            return
        }
        if (numeroSecreto > chute){
            texto.innerText = 'O número secreto é maior!'
            limparEntrada()
            return
        }
        if (numeroSecreto == chute){
            texto.innerText = 'Você acertou!'
            document.getElementById('reiniciar').removeAttribute('disabled');
            break
        }
    }

}
function limparEntrada(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciar(){
    limparEntrada()
    exibirmansagem()
    document.getElementById('reiniciar').setAttribute('disabled', true)
    
}
