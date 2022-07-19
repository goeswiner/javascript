// Importando o express
const express = require("express");

// Copiando uma instância do framework para o sistema
const app = express();

// Importando os módulos handlebars, body parser
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

// Importando models
const Post = require('./models/Post');


// ---------- Configurações ----------

// Usando handlebards como template engine
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Usando body-parser para receber dados de formulários
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// ---------- Rotas ----------
// // Rotas do tipo 'GET' podem ser acessadas pela URL
// // // Listando todos os posts do banco de dados
app.get('/', function(req,res){
    Post.findAll({order: [['id', 'DESC']]}).then(function(allposts){
        res.render('home', {allposts: allposts})
    })
})

app.get('/newpost', function(req,res){
    res.render('form'); // renderizando o form HTML de views nessa rota
})

// // Rotas do tipo 'POST' enviam parametros de forma anonima e não podem ser acessadas por URL
app.post('/add', function(req,res){
    Post.create({
        title: req.body.title,
        content: req.body.content
    }).then(function(){
        res.redirect('/');
    }).catch(function(e){
        res.send(`Error: ${e}`);
    })
})

// Rota para deletar posts
app.get('/delete/:id', function(req,res){
    Post.destroy({where:{'id': req.params.id}})
    .then(function(){
        res.send('Your post was deleted!')
    })
    .catch(function(e){
        res.send(`Erro: ${e}`)
    })
})


// -----------------------------------------------------------------------------------------------------------------------------------------------------

// Abrindo server na porta 1919 e criando uma callback para notificar a abertura ~ precisa ser última parte do código
app.listen(1919, function(){
    console.log('Server is on. (http://localhost:1919)');
})