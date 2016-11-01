'use strict'
const api = require('express').Router()
const db = require('APP/db')
const userRouter = require('./user-router')
const moodRouter = require('./mood-router')
api.use('/users', userRouter)
api.use('/moods', moodRouter)
api.get('/hello', (req, res) => res.send({hello: 'world'}))

module.exports = api
