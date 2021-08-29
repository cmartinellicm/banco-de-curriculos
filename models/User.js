const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    cpf: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },

    cargo: { type: String, required: true },

    dataNascimento: { type: String, required: true },
    estadoCivil: { type: String, required: true },
    sexo: { type: String, required: true },

    telefone1: { type: String, required: true },
    telefone2: { type: String, required: false },

    cep: { type: String, required: true },
    logradouro: { type: String, required: true },
    numero: { type: Number, required: true },
    bairro: { type: String, required: true },
    cidade: { type: String, required: true },
    estado: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
