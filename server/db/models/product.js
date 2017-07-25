let Sequelize = require('sequelize')
import db from '../index'

module.exports = db.define('product', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})