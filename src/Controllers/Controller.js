const database = require('../Databases/connection');
var bodyParser = require('body-parser');

class Controllers {

    adicionarDados(req, res) {

        const { cpuTemp, gpuTemp, cpuClock, memoryClock } = req.body;

        console.log(cpuTemp, gpuTemp, cpuClock, memoryClock);

        database.insert({ cpuTemp, gpuTemp, cpuClock, memoryClock }).table("info").then(data => {
            console.log(data);
            res.json({ mensagem: "Dados inseridos com sucesso!" });

        })
            .catch(error => {
                console.log(error);
                res.status(500).json({ mensagem: "Erro ao inserir dados no banco!", erro: error });

            });
    }

    buscarDados(req, res) {

        database.select("*").table("info").orderBy("timestamp", "desc").limit(1).then(data => {
            console.log(data);
            res.json(data);

        }).catch(error => {
            console.log(error);
        })
    }
}