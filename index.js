// Inclusao dos pacotes
const express = require("express");
const mongoose = require("mongoose");
const swaggerUI = require("swagger-ui-express");
const swaggerDocs = require("./swagger.json");
const routes = require("./routes");
const axios = require("axios");
const app = express();

app.use(express.json());
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);

// Definicao de porta
const port = 3000;

// Conexão com banco de dados
mongoose.connect("mongodb+srv://admin-cassia:gamadb@cluster0.uysjc.mongodb.net/test", { useNewUrlParser: true });

// Buscar CEP via API externa - ViaCEP
let cep = "51030340";
axios
  .get("https://viacep.com.br/ws/" + cep + "/json/")
  .then(function (res) {
    // console.log(res.data);
  })
  .catch(function (error) {
    console.log(error);
  });

// Servico de busca de usuarios cadastrados
// app.get("/users", (req, res) => {
//   connection.query("SELECT * FROM users_db.user", function (err, rows, fields) {
//     if (err) throw err;

//     res.send(rows);
//   });
// });

// Servico de busca de usuarios por CPF
// app.get("/users/:cpf", (req, res) => {
//   connection.query("SELECT nome FROM users_db.user WHERE cpf = " + req.params.cpf, function (err, rows, fields) {
//     if (err) throw err;

//     res.send(rows);
//   });
// });

// Subindo servidor Node
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
