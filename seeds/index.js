const users = require('./users');
const { User } = require('./../models');

// create seeder function
const seeder = async () => {
    // this will wipe out the user table
    await User.destroy({ where: { }});
    // this will insert all users at one
    await User.bulkCreate(users);
    process.exit(0);
};

(async () => {
    await seeder ();
})();