let numeroSecreto = parseInt(Math.random()*10);
let texto = document.getElementById('texto');

function verificarChute(){
    let chute = document.querySelector('input').value;
    while (true) {
   
        if (numeroSecreto < chute){
            texto.innerText = 'O número secreto é menor!'
            return
        }
        if (numeroSecreto > chute){
            texto.innerText = 'O número secreto é maior!'
            return
        }
        if (numeroSecreto == chute){
            texto.innerText = 'Você acertou!'
            break
        }
    }

}

