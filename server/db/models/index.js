let Sequelize = require('sequelize')
const Users = require('./user')
const Products = require('./product')

Products.hasMany(Users, {as: 'buyers'})
Users.hasMany(Products)

module.exports = {Users, Products}

