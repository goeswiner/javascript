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

// Consulta de saldo
console.log(`O saldo de ${objPessoa.nome} é ${objPessoa.saldo}`);

// Realizando depósito de 50
objPessoa.depositar(50);

// Consulta de saldo
console.log(`O saldo de ${objPessoa.nome} é ${objPessoa.saldo}`);