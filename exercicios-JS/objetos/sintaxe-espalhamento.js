const pessoas = [
    {
        nome: "Diego",
        idade: 26,
        nacionalidade: "Brasileiro",
        contato: ["5511984464225", "5511984465229"],
        amigos: [
                    {
                        nome: "Pedro",
                        idade: 23,
                        nacionalidade: "Brasileiro"
                    }
                ,
                    {
                        nome: "Ana",
                        idade: 27,
                        nacionalidade: "Portuguesa"
                    }
                ]
    }
,
    {
        nome: "Matheus",
        idade: 18,
        nacionalidade: "Brasileiro",
        contato: ["5511984464225", "5511984465229"],
        amigos: [
        {
            nome: "John",
            idade: 23,
            nacionalidade: "Americano"
        }
    ,
        {
            nome: "Julia",
            idade: 27,
            nacionalidade: "Italiana"
        }
                ]
    }    
]



const listaDeAmigos = [...pessoas[0].amigos,...pessoas[1].amigos];
console.table(listaDeAmigos);