'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.
const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/enrichment')

const User = require('./user')
const Mood = require('./mood')



Mood.belongsTo(User);
//Users.hasMany(Mood);

module.exports = {User, Mood, db}
