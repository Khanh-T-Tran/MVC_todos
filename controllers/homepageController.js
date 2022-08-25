const router = require('express').Router();

const todoList = [
    'run a 5k',
    'do the laundry',
    'playgame',
] 




router.get('/', (req, res) => {
    res.render('todos', {
        todoList,
        coolGuys: 'Khanh',
        favoriteFood: 'Hawaii tacos at Tacomania'

    })
})


module.exports = router;