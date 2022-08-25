const router = require('express').Router();
const { User } = require('./../models');
const todoList = [
    'run a 5k',
    'do the laundry',
    'playgame',
];

router.get('/', (req, res) => {
    res.render('todos', {
        todoList,
        coolGuys: 'Khanh',
        favoriteFood: 'Hawaii tacos at Tacomania'

    })
})

// HTML ROUTES + API POST DELETE, PUT/PATCH routes
router.get('/users', async (req, res) => {
    try{
        const dbUsersData = await User.findAll();
        // mapping through dbUserData, and for each dbUser we are going to return dbUser and get the data in plain json
        const users = dbUsersData.map(dbUser => dbUser.get({ plain : true})); 
        console.log(users);
        res.render('users', { users }) // the first users is the name of template file
    } catch (error) {
        console.log('Error of line 25 homepageController', error);
        res.status(500).json(error);

    }
})

module.exports = router;