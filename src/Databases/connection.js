require('dotenv').config();

var knex = require('knex')({
    client: 'mysql2',
    connection: {
        host : process.env.MYSQLHOST,
        port : process.env.MYSQLPORT,
        user : process.env.MYSQLUSER,
        password : process.env.MYSQLPASSWORD,
        database : process.env.MYSQLDATABASE
    }
});

knex.raw('SELECT 1+1 as result')
    .then(() => {
        console.log('Conexão bem-sucedida com o banco de dados MySQL');
    })
    .catch((error) => {
        console.error('Erro na conexão com o banco de dados MySQL:', error);
    });

module.exports = knex;