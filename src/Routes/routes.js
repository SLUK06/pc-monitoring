const express = require('express');
const router = express.Router();
const Controllers = require('../Controllers/Controller');

//rotas
router.post('/insertData', function(req, res){
    Controllers.adicionarDados
});

router.get('/fetchData', function(req, res){
    Controllers.buscarDados
});

router.get('/hello', function(req, res){
    const hello = [
        {"id" : 1, "hello" : "Hello World!"}
    ]
    res.json(users);
});



module.exports = router;