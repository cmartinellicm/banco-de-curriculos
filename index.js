// Inclusao dos pacotes
const express = require("express");
const mongoose = require("mongoose");
const swaggerUI = require("swagger-ui-express");
const swaggerDocs = require("./swagger.json");
const routes = require("./routes");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);

// Definicao de porta
const PORT = process.env.PORT || 5000;

// Conexão com banco de dados
mongoose.connect("mongodb+srv://admin-cassia:gamadb@cluster0.uysjc.mongodb.net/test", { useNewUrlParser: true });

// Subindo servidor Node
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
