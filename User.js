const {Sequelize, sequelize} = require('./db');

// TODO - define the Musician model
let User = sequelize.define('user',{
    name : Sequelize.STRING,
    email : Sequelize.STRING
});

module.exports = {
    User
};