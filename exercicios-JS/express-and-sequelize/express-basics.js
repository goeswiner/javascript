// Importando o express
const express = require("express");

// Copiando uma instância do framework para o sistema
const app = express();


// Criando rota principal ("http://localhost:1919/")
app.get("/", function(req,res){
    res.send("Welcome to the jungle!")
})

// Criando rota 'about' com arquivo HTML ("http://localhost:1919/about")
app.get("/about", function(req,res){
    res.sendFile(__dirname + "/html/index.html")
            // caminho raiz do app + caminho do arquivo
})

// ---------------------------- PARAMETERS ------------------------------//
// Criando rota 'Hello' ("http://localhost:1919/hello")
app.get("/hello/:position/:name", function(req,res){
    res.send("<h1>Welcome, " + req.params.name + "!</h1><h2>Your position is: " + req.params.position);
})

// Abrindo server na porta 1919 e criando uma callback para notificar a abertura ~ precisa ser última parte do código
app.listen(1919, function(){
    console.log('Server is on. (http://localhost:1919)');
})