const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql');
const connection = mysql.createConnection(config);

const sql = `INSERT INTO people(name) values ('Celso Pires')`
connection.query(sql)
connection.end

app.get('/', (req, res) => {
    connection.query(`SELECT * FROM people`, [true], (error, results, fields) => {
        if (error) {
            console.error(error.message);
        }
        var myMSG = "<h1>Full Cycle</h1>"
        for(var i in results) {
            myMSG = myMSG +"<p>" + "ID: " + results[i].id + " Nome: " + results[i].name + "</p>"
        }
        myMSG = myMSG + "<h3>Fim dos Registros no Banco de Dados</h3>"
        res.send(myMSG);
        connection.end
    })
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})