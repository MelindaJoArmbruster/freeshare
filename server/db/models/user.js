const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  middleName: {
    type: Sequelize.STRING,
  },

  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },

  admin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },

  password: {
    type: Sequelize.STRING,
    // Making `.password` act like a func hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get() {
      return () => this.getDataValue('password')
    },
  },

  salt: {
    type: Sequelize.STRING,
    // Making `.salt` act like a function hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get() {
      return () => this.getDataValue('salt')
    },
  },
  googleId: {
    type: Sequelize.STRING,
  },

  street1: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  street2: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  city: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  state: {
    type: Sequelize.ENUM,
    values: ['NY', 'IL'],
    allowNull: true,
  },

  zip: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  latitude: {
    type: Sequelize.DECIMAL(8, 6),
    defaultValue: 40.73061,
  },

  longitude: {
    type: Sequelize.DECIMAL(9, 6),
    defaultValue: -73.935242,
  },
  userIdTEMP: {
    type: Sequelize.INTEGER,
  },
})

module.exports = User

/**
 * instanceMethods
 */
User.prototype.correctPassword = function (candidatePwd) {
  return User.encryptPassword(candidatePwd, this.salt()) === this.password()
}

/**
 * classMethods
 */
User.generateSalt = function () {
  return crypto.randomBytes(16).toString('base64')
}

User.encryptPassword = function (plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex')
}

/**
 * hooks
 */
const setSaltAndPassword = (user) => {
  if (user.changed('password')) {
    user.salt = User.generateSalt()
    user.password = User.encryptPassword(user.password(), user.salt())
  }
}

User.beforeCreate(setSaltAndPassword)
User.beforeUpdate(setSaltAndPassword)
User.beforeBulkCreate((users) => {
  users.forEach(setSaltAndPassword)
})
