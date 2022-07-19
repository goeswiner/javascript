// Importando o módulo sequelize
const Sequelize = require('sequelize');

// Conectando com banco de dados MySQL
const sequelize = new Sequelize('postApp', 'root', 'Tropico*19', {
    host: "localhost",
    dialect: 'mysql',
    query:{raw:true}
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}