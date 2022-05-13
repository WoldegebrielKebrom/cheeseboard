const {sequelize} = require('./db');
const {User, Board, Cheese} = require('./index')

describe('Board,Cheese, and User Model', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    });


    test('can create a User', async () => {
        // TODO - test creating a band
        const newUser = await User.create({
                name  : 'user1',
                email :  'user1@gmail.com'

        })

        expect(newUser.name).toBe('user1');
    });

    

    test('can create a Board', async () => {
        // TODO - test creating a band
        const newBoard = await Board.create({
                type  : 'board1 type',
                description :  'board1 type description',
                rating : 1

        })

        expect(newBoard.type).toBe('board1 type');
    });

    test('can create a Cheese', async () => {
        // TODO - test creating a band
        const newCheese = await Cheese.create({
                title  : 'American',
                description :  'american description'
             

        })

        expect(newCheese.title).toBe('American');
    });


    test('test one-to-many association', async () => {
     
        const user = await User.findByPk(1);
        await user.addBoard(1);
        const  board = await Board.findAll();
         expect(board[0].dataValues.userId).toBe(1);
           
    });


    test('test many-to-many association', async () => {
        // TODO - test creating a song
        
        

        const board = await Board.findByPk(1);
        await board.addCheese(1);

        const cheese = await Cheese.findByPk(1);
        await cheese.addBoard(1);

        
        const boards = await Board.findAll({
            include : [Cheese]
        })

         //console.log('something',boards[0].dataValues.cheeses[0].dataValues.title);

        expect(boards[0].dataValues.cheeses[0].dataValues.title).toBe('American');
    });

    test('test eager load', async () => {
        // TODO - test creating a musician
        const cheese = await Cheese.findAll({
            include : [{
                model:Board, as: 'boards'
            }]
        });

       
        //console.log("edger loading", cheese[0].dataValues.boards[0].dataValues.type);
        


        
        expect(cheese[0].dataValues.boards[0].dataValues.type).toBe('board1 type');
       

    })


    



})