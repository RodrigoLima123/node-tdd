const routes = require('express').Router();
const { User } = require('./app/models');


User.create({ 
    name: 'Rodrigo', 
    email: 'rodrigolima1991@gmail.com', 
    password_hash: '1231312313'
});

// Definição rotas 

module.exports = routes;