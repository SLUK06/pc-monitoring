const express = require('express');
const router = express.Router();
const Controllers = require('../Controllers/Controller.js');

//rotas
router.post('/inserirDados', Controllers.adicionarDados);

router.get('/buscarDados', Controllers.buscarDados);

router.delete('/deletarDados', Controllers.deletarDados);

router.get('/hello', function(req, res){
    res.send("Hello World!!");
});



module.exports = router;