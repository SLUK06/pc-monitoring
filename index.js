const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();


const router = require('./src/Routes/routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(router);
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('API Smart Maintenance');
});

const port = process.env.PORT || 3000;
const address = process.env.ADDRESS || '0.0.0.0';

app.listen(port, address, (error) => {
    if (error) {
        console.error('Erro ao iniciar o servidor:', error);
    } else {
        let data = new Date();
        console.log('Servidor node iniciado na porta ' + port + ' em: ' + data);
    }
});