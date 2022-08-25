# MVC_todos
### Practice to understand MVC architecture
# Steps
#### Generate pakages.json without having it ask any questions
    npm init -y  
#### Install all the packages as need
    npm i express express-handlebars express-session sequelize mysql2 dotenv connect-session-sequelize
#### Create .gitignore to prevent pushing node_module and .env on to github
paste this
"    node_modules
    .env "
inside gitignore file   

#### Create  config controllers models and views folder
    mkdir config controlers models views (has to cd into root folder which is MVC_TODOS folder before running this command)
    also inside views, mkdir layouts (create layouts folder inside views folder)
#### Create connection.js inside config, homepageController.js inside controllers, server.js and .env inside MVC_TODOS
#### Setup connection.js and .env file content
make sure the name and password are matched with eachother
#### Setup server.js
#### Create and setup homepageController.js inside controllers folder
#### Setup a simmple page on main.handlebars inside layouts folder to test the routes
#### Create a todos.handlebars inside views folder
#### Setup a get request inside homepageController to show todos.handlebars and main.handlebars on browser through localport
#### Create a todos list and test on browser


