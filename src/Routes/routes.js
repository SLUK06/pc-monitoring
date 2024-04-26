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



module.exports = router;