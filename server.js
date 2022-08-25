// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require ('./controllers/homepageController');
// const path = require('path');
const sequelize = require('./config/connection');

// Setting extra configuration that we might want to add for handlebars
const hbs = exphbs.create({});

// Set up Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Setting up a basic express handlebars app by using the configuration when we declared "const hbs = exphbs.create({});"
app.engine('handlebars', hbs.engine);
// Express when we call res.render, we mean to use a handlebars template
app.set('view engine', 'handlebars');

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// app.use(express.static(path.join(__dirname,'public')));
// app.use(require('.controllers/'))

// Start the server to begin listening 

sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, () => {
        console.log('Server listening on : http://localhost:' + PORT);
    });
});