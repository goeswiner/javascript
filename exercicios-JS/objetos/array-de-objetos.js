const objPessoa = {
    nome: "Diego",
    idade: 26,
    nacionalidade: "Brasileiro",
    contato: ["5511984464225", "5511984465229"]
}

objPessoa.amigos = [
    {
    nome: "Pedro",
    idade: 23,
    nacionalidade: "Brasileiro"
    }
,
    {
    nome: "Liz",
    idade: 26,
    nacionalidade: "Neerlandesa"    
    }
]

console.log(objPessoa.amigos);

// Adicionando amigo no array

objPessoa.amigos.push(
    {
    nome: "Josh",
    idade: 31,
    nacionalidade: "Canadense"      
    }
)

console.log(objPessoa.amigos);

// Removendo amigo do array

objPessoa.amigos.pop();

console.log(objPessoa.amigos);

// Buscando dados especificos de amigos (menores de 25 anos)

const amigoMaisNovo = objPessoa.amigos.filter(amigo => amigo.idade < 25);

console.log(`Nome dos amigos menores de 25: ${amigoMaisNovo[0].nome}`);