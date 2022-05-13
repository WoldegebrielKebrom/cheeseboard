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
    })

    



})