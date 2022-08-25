const { Models, Datatype, DataTypes } = require('sequelize');
const sequelize = require('./../config/connection');



class User extends Models { }

User.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                len: [6],
            },
        },

    },

    {
        sequelize,
        modelName: 'users',

    }
);

module.exports = User;