const router = require('express').Router();

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

module.exports = router;