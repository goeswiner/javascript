// -------------- Importando módulos --------------

const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path")
const session = require("express-session");
const flash = require("connect-flash");

const app = express();

// -------------- Importando rotas --------------
const admin = require('./routes/admin');

// ---------------- Configurações -----------------

// // Session
app.use(session({
    secret: "anysafetext",
    resave: true,
    saveUninitialized: true
}));

// // Flash
app.use(flash());

// // Middleware - variaveis globais
app.use((req,res,next) => {
    res.locals.success_msg = req.flash("success_msg")
    res.locals.error_msg = req.flash("error_msg")
    next();
})

// // Body Parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// // Handlebars
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