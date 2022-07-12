const objPessoa = {
    nome: "Diego",
    idade: 26,
    nacionalidade: "Brasileiro"
}

// Adicionando uma nova chave

objPessoa.email = "ogoesdiego@gmail"

console.log(objPessoa.email);

// Alterando dado da nova chave

objPessoa.email = "ogoesdiego@gmail.com"

console.log(objPessoa.email);

// Deletando uma chave

delete objPessoa.nome;
console.log(objPessoa.nome);