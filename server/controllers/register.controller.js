var register = require('../models/register.model');

const register_controller = users => {
    register.push(users);
}

module.exports = register_controller;