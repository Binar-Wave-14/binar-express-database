const sequelize = require('./sequelize')
const { Model, DataTypes } = require('sequelize')

class User extends Model{}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fullname: {
            type: DataTypes.STRING
        },
        full_address: {
            type: DataTypes.STRING
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: new Date() 
        }
    },
    {
        sequelize,
        tableName: 'users',
        timestamps: false
    }
)

module.exports = User