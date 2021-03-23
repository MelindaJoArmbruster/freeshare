/* eslint-disable no-warning-comments */
const router = require('express').Router()
const {User} = require('../db/models')
const {ensureAdmin, ensureLogin} = require('./middleware')

module.exports = router

// all routes here are mounted on /api/users

// GET all users
// mounted on /api/users
// TODO: limit access to admins only
router.get(
  '/',

  // leaving ensureAdmin commented for ease of development and testing -- JC

  // ensureAdmin,

  async (req, res, next) => {
    try {
      const users = await User.findAll({
        // explicitly select only the id and email fields - even though
        // users' passwords are encrypted, it won't help if we just
        // send everything to anyone who asks!
        attributes: [
          'id',
          'email',
          'firstName',
          'middleName',
          'lastName',
          'street1',
          'street2',
          'city',
          'state',
          'zip',
        ],
      })
      res.json(users)
    } catch (err) {
      next(err)
    }
  }
)

// GET single user
// mounted on /api/users/:userId
// TODO: limit access to this route to admins only
router.get('/:userId', async (req, res, next) => {
  try {
    const {userId} = req.params
    console.log('hello', 'typeof userId', typeof userId)
    const user = await User.findByPk(userId)
    res.json(user)
  } catch (err) {
    next(err)
  }
})

// PUT single user
// mounted on /api/users/:userId
// TODO: limit access to admins only
router.put('/:userId', async (req, res, next) => {
  try {
    const {userId} = req.params
    const {
      firstName,
      middleName,
      lastName,
      street1,
      street2,
      city,
      state,
      zip,
      email,
    } = req.body
    const user = await User.findByPk(userId)

    await user.update({
      firstName,
      middleName,
      lastName,
      street1,
      street2,
      city,
      state,
      zip,
      email,
    })

    res.json(user)
  } catch (err) {
    next(err)
  }
})

// DELETE a single user
// mounted on /api/users/:userId
// TODO: limit access to admins only

router.delete('/:userId', async (req, res, next) => {
  try {
    const {userId} = req.params
    const deletedUser = await User.findByPk(userId)
    await deletedUser.destroy()
    res.json(deletedUser)
  } catch (err) {
    next(err)
  }
})
