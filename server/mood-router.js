const router = require('express').Router()
const Mood = require('../db/models/mood')
const User = require('../db/models/user')

router.get('/:userName/:moodName', (req, res, next) => {
  User.findOne({where: {name: req.params.name}}, {include: [Mood]})
  .then((user) => console.log(user))
})


router.post('/:userName/:moodName', (req, res, next) => {
  const userProm = User.create({where: {name: req.params.userName}})
  const moodProm = Mood.create({where: {name: req.params.moodName}})
  Promise.all([userProm, moodProm])
    .spread((newUser, newMood) => newMood.setUser(newUser))
    .catch(err => console.error(err.stack))
})

router.put('/:userName/:moodName', (req, res, next) => {
  User.findOne({where: {name: req.params.name}}, {include: [Mood]})
  .then((user) => console.log(user))
})

router.delete('/:userName/:moodName', (req, res, next) => {
  User.findOne({where: {name: req.params.name}}, {include: [Mood]})
  .then((user) => console.log(user))
})

module.exports = router
