const Sequelize = require('sequelize');
let db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/boilermaker')
module.exports = db