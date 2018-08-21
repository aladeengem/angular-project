var register = require('../models/register.model');

const register_controller = (req, res)=> {
    let users = req.users;
    register.push(users);
    res.json(res => {
        console.log(res);
    })
}

module.exports = register_controller;