class Cliente{
    // Definindo os atributos
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
    // Definindo os comportamentos
    depositar(valor){
        this.saldo += valor;
        console.log(`Depósito de ${valor} na conta corrente`);
    }

    exibeSaldo(){
        console.log(`${this.nome}, seu saldo CC é: ${this.saldo}`);
    }
}

const diego = new Cliente("Diego", "diego@email.com", "123", 100)

diego.exibeSaldo();

diego.depositar(500);

diego.exibeSaldo();

class ClientePoupanca extends Cliente{
    // Todos os atributos
    constructor(nome, email, cpf, saldo, saldoPoupanca){
        // Importando atributos de Cliente
        super(nome, email, cpf, saldo);
        // Adicionando atributo especifico de Cliente Poup
        this.saldoPoupanca = saldoPoupanca;
    }

    // Adicionando métodos especificos de Poup

    depositaPoupanca(valor){
        this.saldoPoupanca += valor;
        console.log(`Depósito de ${valor} na conta poupança`);
    }

    exibeSaldoPoupanca(){
        console.log(`${this.nome}, seu saldo CP é: ${this.saldoPoupanca}`);
    }
}

const pedro = new ClientePoupanca("Pedro", "pedro@email.com", "123", 100, 200);

pedro.exibeSaldoPoupanca();
pedro.depositaPoupanca(99);
pedro.exibeSaldoPoupanca();