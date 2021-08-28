const User = require("../models/User");

module.exports = {
  async register(req, res) {
    const { nome, cpf, email, cargo, dataNascimento, estadoCivil, sexo, telefone1, telefone2, cep, logradouro, numero, bairro, cidade, estado } = req.body;

    const newUser = new User();

    newUser.nome = nome;
    newUser.cpf = cpf;
    newUser.email = email;
    newUser.cargo = cargo;
    newUser.dataNascimento = dataNascimento;
    newUser.estadoCivil = estadoCivil;
    newUser.sexo = sexo;
    newUser.telefone1 = telefone1;
    newUser.telefone2 = telefone2;
    newUser.cep = cep;
    newUser.logradouro = logradouro;
    newUser.numero = numero;
    newUser.bairro = bairro;
    newUser.cidade = cidade;
    newUser.estado = estado;

    newUser.save((err, savedUser) => {
      if (err) {
        console.log(err);
        return res.status(500).send();
      }
      return res.status(200).send(savedUser);
    });
  },
};
