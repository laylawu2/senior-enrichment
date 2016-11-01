const router = require('express').Router()
const User = require('../db/models/user')
const Mood = require('../db/models/mood')

router.get('/', (req, res, next) => {
  User.findAll()
    .then(users => res.send(users))
    .catch(err => console.error(err.stack))
})

router.post('/', (req, res, next) => {
  User.create({ name: req.body.userName })
    .then((user) => res.send(user))
})

router.put('/', (req, res, next) => {
  User.update({
    name: req.body.userName}, { where: { id: req.body.id }})
    .then(user => res.send(user))
})

router.delete('/userId', (req, res, next) => {
  User.find({ where: { id: req.body.id }})
    .then(user => {
      return user.destory()
    })
    .then(() => res.send())
})

router.get('/:userName', (req, res, next) => {
  console.log('req.params', req.params)
  User.findOne({ where: { name: req.params.userName }})
    .then(user => {
      Mood.findAll({ where: {
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
    .then((values) => {
      const user = values[0];
      const mood = values[1];
      return mood.setUser(user)
    })
    .then(() => {res.send('message from post request')})
    .catch(err => console.error(err.stack))
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
