// Importar o sequelize
const Sequelize = require('sequelize');

// Conectando com banco de dados teste, com usuário root e senha + host e tipo de database
const sequelize = new Sequelize('meuApp', 'root', 'PASSWORD', {
    host: "localhost",
    dialect: 'mysql'
})

// Testando a a conexão com o banco de datos e printando o status
sequelize.authenticate().then(function(){
    console.log("Connected!")
}).catch(function(e){
    console.log("Error!" + e)
})

// -------------------------------- CRIANDO MODELS --------------------------------

// Criando no mysql uma tabela 'posts' com campo de título e conteúdo
const Posts = sequelize.define('posts', {
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.TEXT
    }
})
// Sincronizando para criar a tabela (comentar para não criar novamente)
// Posts.sync({force: true});


// Criando no mysql uma tabela 'users'
const Users = sequelize.define('users', {
    name: {
        type: Sequelize.STRING
    },
    lastname: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }

})
// Sincronizando para criar a tabela (comentar para não criar novamente)
// Users.sync({force: true});


// -------------------------------- ADICIONANDO DADOS --------------------------------

// // // Criando um post
// Posts.create({
//     title: "My first post",
//     content: "This is my very first post!"
// });

// // // Criando um usuário
// Users.create({
//     name: "Diego",
//     lastname: "Goes",
//     age: 26,
//     email: "ogoesdiego@gmail.com"
// });
