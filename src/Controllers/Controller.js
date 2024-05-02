const database = require('../Databases/connection');

class Controller {

    adicionarDados(req, res) {

        const { cpuTemp, gpuTemp, cpuClock, memoryClock } = req.body;

        console.log( cpuTemp, gpuTemp, cpuClock, memoryClock);

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

        database.select("*").table("info").orderBy("id", "desc").limit(1).then(data => {
            console.log(data);
            res.json(data);

        }).catch(error => {
            console.log(error);
        })
    }

    deletarDados(req, res){
        database.table("info").delete("*").then(res => {
            res.json("Dados deletados com Sucesso!!");

        }).catch(error => {
            res.status(500).json(error = { error: "Erro ao deletar dados" });
        });;
        
    }
}
module.exports = new Controller();