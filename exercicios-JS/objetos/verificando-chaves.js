const objPessoa = {
    nome: "Diego",
    idade: 26,
    nacionalidade: "Brasileiro",
    contato: ["5511984464225", "5511984465229"],
    conta: 123,
    saldo: 0,
    depositar: function(valor)
    {
        this.saldo += valor
        console.log(`Foi realizado um depósito de ${valor} na conta de ${this.nome}`)
    }

}

const objPessoa2 = {
    nome: "Maria",
    idade: 26,
    nacionalidade: "Brasileiro",
    contato: ["5511984464225", "5511984465229"],
}


function temConta(obj) {
    const chavesDoObjeto = Object.keys(obj);

    if (chavesDoObjeto.includes('conta')) {
        console.log(`${obj.nome}, você possui a conta n° ${obj.conta} com a gente. Obrigado!`)
    } else {
        console.log(`${obj.nome}, você ainda não possui com a gente. Gostaria de criar uma?`)
    }
}


// Verificando a existência de conta nos objetos

console.log(temConta(objPessoa));
console.log(temConta(objPessoa2));