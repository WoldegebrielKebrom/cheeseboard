const path = require('path');
const {Sequelize,Model } = require('sequelize');

// TODO - create the new sequelize connection
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db.sqlite'
    // or storage: './db.sqlite'
  });

  try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

module.exports = {
    sequelize,
    Sequelize
};