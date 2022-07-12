const objPessoa = {
    nome: "Diego",
    idade: 26,
    nacionalidade: "Brasileiro"
}

// Acessando via notação de ponto
console.log(objPessoa.nacionalidade);


// Acessando via notação de chaves
const chaves = ["nome", "idade", "nacionalidade"]

chaves.forEach(info => console.log(info, objPessoa[info]));