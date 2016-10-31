const router = require('express').Router()
const User = require('../db/models/user')
const Mood = require('../db/models/mood')

router.get('/', (req, res, next) => {
  User.findAll()
    .then(users => res.send(users))
    .catch(err => console.error(err.stack))
})

router.get('/:userName/:moodName', (req, res, next) => {
  console.log('req.params', req.params)
  User.findOrCreate({ where: { name: req.params.userName }})
    .spread((user, created) => {
      Mood.findOne({ where: {
        userId: user.id,
        name: req.params.mood
      }})
    })
    .then(mood => res.send(mood))
})


router.post('/:userName/:moodName', (req, res, next) => {
  const userProm = User.create({name: req.body.userName})
  const moodProm = Mood.create({
    name: req.body.moodName,
    picUrl: req.body.picUrl
  })
  Promise.all([userProm, moodProm])
    .then((values) => console.log(values))
    .catch(err => console.error(err.stack))
})

router.get('/:userName/add', (req, res, next) => {
  User.findOrCreate({ where: { name: req.params.name }})
    .spread((user, created) => {
      Mood.findOne({ where: {
        userId: user.id,
        name: req.params.mood
      }})
    })
    .then(mood => res.send(mood))
})

router.get('/:userName/edit', (req, res, next) => {
  User.findOrCreate({ where: { name: req.params.name }})
    .spread((user, created) => {
      Mood.findOne({ where: {
        userId: user.id,
        name: req.params.mood
      }})
    })
    .then(mood => res.send(mood))
})

router.get('/:userName/delete', (req, res, next) => {
  User.findOrCreate({ where: { name: req.params.name }})
    .spread((user, created) => {
      Mood.findOne({ where: {
        userId: user.id,
        name: req.params.mood
      }})
    })
    .then(mood => res.send(mood))
})

router.post('/', (req, res, next) => {
  User.findOrCreate({ where: { name: req.body.name }})
    .spread((user, created) => {
      Mood.findOne({ where: {
        userId: user.id,
        name: req.body.mood
      }})
    })
    .then(mood => res.send(mood))
})
module.exports = router
