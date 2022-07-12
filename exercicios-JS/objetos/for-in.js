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


let relatorio = "";

for (let dado in objPessoa) {
    if (typeof objPessoa[dado] === "object" || typeof objPessoa[dado] === "function" ) {
        continue
    } else {
        relatorio += `${dado}, ${objPessoa[dado]} \n`
    }
}

console.log(relatorio);