const objPessoa = {
    nome: "Diego",
    idade: 26,
    nacionalidade: "Brasileiro",
    contato: ["5511984464225", "5511984465229"]
}

// Acessar todos os telefones cadastrados

objPessoa.contato.forEach(telefone => console.log(telefone));