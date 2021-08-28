const express = require("express");
const UserController = require("./controllers/UserController");
const routes = new express.Router();

routes.post("/register", UserController.register);

module.exports = routes;
