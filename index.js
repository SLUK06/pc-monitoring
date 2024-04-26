const si = require('systeminformation');
const mysql = require('mysql');
require('dotenv').config();

// Configuração do banco de dados
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Conectar ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL.');
});

// Função para obter informações do sistema e inserir no banco de dados
async function collectAndInsertData() {
  try {
    const data = await si.getAllData();
    const { main, cpu, graphics } = data;
    
    // Aqui você pode adaptar para coletar apenas as informações que deseja enviar para o banco de dados
    
    // Exemplo de inserção no banco de dados
    const query = `INSERT INTO system_data (cpu_temperature, gpu_temperature, cpu_clock, memory_clock) VALUES (?, ?, ?, ?)`;
    connection.query(query, [cpu.temperature, graphics.temperatureGpu, cpu.speed, main.memClock], (err, results) => {
      if (err) {
        console.error('Erro ao inserir dados no banco de dados:', err);
        return;
      }
      console.log('Dados inseridos com sucesso no banco de dados.');
    });
  } catch (error) {
    console.error('Erro ao obter informações do sistema:', error);
  }
}

// Executar a função a cada intervalo de tempo desejado
const interval = setInterval(collectAndInsertData, 60000); // A cada 60 segundos (60.000 milissegundos)

// Lidar com a finalização do programa
process.on('SIGINT', () => {
  clearInterval(interval); // Parar a execução do intervalo
  connection.end(); // Fechar a conexão com o banco de dados
  console.log('Programa encerrado com sucesso.');
  process.exit();
});