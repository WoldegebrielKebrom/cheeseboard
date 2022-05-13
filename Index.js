const {User} = require('./User');
 const {Board} = require('./Board');
 const {Cheese} =  require('./Cheese');

Board.belongsTo(User);
User.hasMany(Board);


Board.belongsToMany(Cheese, {through: "board_cheese"});
Cheese.belongsToMany(Board, {through: "board_cheese"});


module.exports = {
     User,
     Board,
     Cheese
};