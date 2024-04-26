const express = require('express');
const router = express.Router();
const Controllers = require('../Controllers/Controller.js');

//rotas
router.post('/inserirDados', Controllers.adicionarDados);

router.get('/buscarDados', Controllers.buscarDados);

router.get('/hello', function(req, res){
    const hello = [
        {"id" : 1, "hello" : "Hello World!"}
    ]
    res.json(hello);
});



module.exports = router;