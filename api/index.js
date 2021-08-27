// Inclusao dos pacotes
const express = require("express");
const mysql = require("mysql2");

// Instancia o express
const app = express();

// Definicao de porta
const port = 3000;

// Conexão com base de dados MySQL
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "!CmcmDB90143613",
  database: "users_db",
});

connection.connect();

// Servico de busca de usuarios cadastrados
app.get("/users", (req, res) => {
  // Busca usuários
  connection.query("SELECT * FROM users_db.user", function (err, rows, fields) {
    if (err) throw err;

    res.send(rows);
  });
});

// Servico de busca de usuarios por CPF
app.get("/users/:cpf", (req, res) => {
  connection.query("SELECT nome FROM users_db.user WHERE cpf = " + req.params.cpf, function (err, rows, fields) {
    if (err) throw err;

    res.send(rows);
  });
});

// Subindo servidor Node
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
