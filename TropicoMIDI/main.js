function toca(idSom) {
    document.querySelector(idSom).play();
}

// Salvar lista de teclas em uma constante
const listaTeclas = document.querySelectorAll('.tecla');

// Acessar elemento e atribuir função 'tocar som' no evento 'click'

for (let contador = 0; contador < listaTeclas.length; contador++) {

    const tecla = listaTeclas[contador];
    const instrumento = tecla.classList[1]

    // Criando IDs dinamicamente com template strings
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        toca(idAudio);
    }

    // Ajustando o estilo do botão ao ser clicado via teclado
    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        } 
    }
    tecla.onkeyup = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.remove('ativa');
        } 
    }

}
