// -------------- Importando módulos --------------
const express = require("express");
const mongoose = require("mongoose");
require("../models/Category");
const Category = mongoose.model("categories");

// ---------------- Criando a rota ----------------
const router = express.Router();


router.get('/', (req,res) => {
    res.render('admin/index');
})

router.get('/posts', (req,res) => {
    res.send('ADMIN Posts page');
})

router.get('/categories', (req, res) => {
    //      listar         reordar lista
    Category.find().lean().sort({date:'desc'}).then((categories) => {
        res.render("admin/categories", {categories: categories});
    }).catch((err) => {
        req.flash("error_msg", "Could'nt list categories")
        res.redirect("/admin")
    })
})

router.get('/categories/add', (req, res) => {
    res.render('admin/addcategories');
})
router.post('/categories/new', (req,res) => {

    // Validações do formulário

    var erros = [];

    if(!req.body.name || typeof req.body.name == undefined || req.body.name == null) {
        erros.push({texto: "Invalid name!"})
    }
    
    if(!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null) {
        erros.push({texto: "Invalid slug!"})
    }

    if(erros.length > 0){
        res.render("admin/addcategories", {erros: erros});
    } else {

        // Criando a categoria
        const newCategory = {
            name: req.body.name,
            slug: req.body.slug
        }
    
        new Category(newCategory).save().then(() => {
            // Se tudo ok, salvamos msg de sucesso na variavel global + Msg de sucesso em sessão (some ao recarregar)
            req.flash("success_msg", "Your new category was created!");
            res.redirect("/admin/categories"); // redirecionando
        }).catch((err) => {
            // Se erro, salvamos msg de erro na variavel global + Msg de sucesso em sessão (some ao recarregar)
            req.flash("error_msg", "There was an error while saving your category! Try again!");
            res.redirect("admin"); // redirecionando
        });
    } 
})

router.get("/categories/edit/:id", (req,res) => {
    Category.findOne({_id:req.params.id}).lean().then((category) => {
        res.render("admin/editcategories", {category: category});
    }).catch((err) => {
        req.flash("error_msg", "This category does not exit!")
        res.redirect("/admin/categories")
    })
})

router.post("/categories/edit", (req,res) => {
    // Buscando categoria
    Category.findOne({_id:req.params.id}).lean().then((category) => {

        // Reatribuindo valores
        category.name = req.body.name
        category.slug = req.body.slug

        // Salvando edições
        category.save().then(() => {
            req.flash("success_msg", "Category edited!")
            res.redirect("/admin/categories")
        }).catch((err) => {
            req.flash("error_msg", "There was an error while saving category. Try again!")
            res.redirect("/admin/categories")
        })
    }).catch((err) => {
        req.flash("error_msg", "There was an error while editing category. Try again!")
        res.redirect("/admin/categories")
    })
})
// -------------- Exportando a rota --------------

module.exports = router;