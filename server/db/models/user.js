let Sequelize = require('sequelize')
import db from '../index'

module.exports = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

