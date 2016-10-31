'use strict';
const Sequelize = require('sequelize')
const db = require('APP/db')
const Mood = db.define('mood', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  picUrl: {
    type: Sequelize.STRING
  }
})

module.exports = Mood;
