const objPessoa = {
    nome: "Diego",
    idade: 26,
    nacionalidade: "Brasileiro",
    contato: ["5511984464225", "5511984465229"]
}

objPessoa.amigo = {
    nome: "Pedro",
    idade: 23,
    nacionalidade: "Brasileiro"
}


// Buscando info do objeto
console.log(objPessoa.amigo.idade);


// Alterando info do objeto
objPessoa.amigo.idade = 25;
console.log(objPessoa.amigo.idade);