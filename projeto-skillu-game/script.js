const skillu = document.querySelector('.skillu');
const fundo = document.querySelector('.fundo')
let estaPulando = false;
let posicao = 0;

function telaPressionada() {
    if (event.keyCode === 32) {
        if (!estaPulando) {
            pular();
        }
    }
}

function pular() {
    estaPulando = true;

    let intervaloCima = setInterval(() => {

        if (posicao >150) {
            clearInterval(intervaloCima); 
    //descer
            intervaloBaixo = setInterval(() => {
                if (posicao <= 0) {
                    clearInterval(intervaloBaixo);
                    estaPulando = false;
                } else {
                posicao -= 20;
                skillu.style.bottom = posicao + 'px';
                }
            }, 20)
        } else {
    //subir
        posicao += 20;
        skillu.style.bottom = posicao + 'px';
        }
    }, 20);
}

function criarObstaculo() {
    const obstaculo = document.createElement('div');
    let posicaoObstaculo = 1300;
    let aleatorio = Math.random() * 4000;

    obstaculo.classList.add("obstaculo");
    obstaculo.style.left = 1300 + 'px';
    fundo.appendChild(obstaculo);

    let intervaloEsquerda = setInterval(() => {

        if (posicaoObstaculo <= 0) {
            clearInterval(intervaloEsquerda);
            fundo.removeChild(obstaculo);
        } else if (posicaoObstaculo > 0 && posicaoObstaculo < 60 && posicao < 60) {
            clearInterval(intervaloEsquerda);
            document.body.innerHTML = '<h1 class="game-over"> Fim do jogo, skillu!</h1>';
        } else {
            posicaoObstaculo -= 20;
            obstaculo.style.left = posicaoObstaculo + 'px';
        }
    }, 20);

    setTimeout(criarObstaculo, aleatorio);
}

criarObstaculo();

document.addEventListener ('keyup', telaPressionada)