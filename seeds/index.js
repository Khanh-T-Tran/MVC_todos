const { User } = require('./../models');
const users = require('./users');
const sequelize = require('./../config/connection');

// create seeder function
const seeder = async () => {
    await sequelize.sync({ force: true});
    // this will wipe out the user table
    // await User.destroy({ where: {}});
    // this will insert all users at one
    await User.bulkCreate(users);
    process.exit(0); // stop the current node process that is running and exit, 0 mean no error happened, 1 mean an error happened
};

(async () => {
    await seeder ();
})();