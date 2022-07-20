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
    res.render('admin/categories');
})

router.get('/categories/add', (req, res) => {
    res.render('admin/addcategories');
})
router.post('/categories/new', (req,res) => {
    const newCategory = {
        name: req.body.name,
        slug: req.body.slug
    }

    new Category(newCategory).save().then(() => {
        console.log('New category created!')
    }).catch((err) => {
        console.log(`Error: ${err}`);
    })
})
// -------------- Exportando a rota --------------

module.exports = router;