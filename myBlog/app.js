// -------------- Importando módulos --------------

const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path")

const app = express();

// -------------- Importando rotas --------------
const admin = require('./routes/admin');

// ---------------- Configurações -----------------

// // Body Parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// // Body Parser
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// app.use(express.urlencoded({extended: true});
// app.use(express.json());

// // Mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/myBlog').then(() => {
    console.log('MongoDB is on!');
}).catch((err) => {
    console.log(`Erro: ${err}`);
});

// // Public
app.use(express.static(path.join(__dirname,"public")));

// ----------- Usando grupo de rotas ---------------
        //prefixo do grupo
app.use('/admin', admin);



// ------------------- Outros ---------------------

const PORT = 1919;
app.listen(PORT, () => {
    console.log('Server is on!');
})