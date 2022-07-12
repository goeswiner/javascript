function Cliente(nome, cpf, email, saldo)
{
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor) {
        this.saldo =+ valor
    };
}

function ClientePoup(nome, cpf, email, saldo, saldoPoup)
{
    // importando propriedades de Cliente
    Cliente.call(this,nome,cpf,email,saldo)

    // adicionando propriedade especifica para poupança
    this.saldoPoup = saldoPoup
}

const diego = new ClientePoup("Diego", "123", "ogoesdiego@gmail.com", 100, 200);

// Criando método para depósito na conta poupança

ClientePoup.prototype.depositarPoup = function (valor) {
    this.saldoPoup += valor
}

console.log(diego);

diego.depositarPoup(99999);

console.log(diego);