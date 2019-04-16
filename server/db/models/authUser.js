const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const AuthUser = db.define('AuthUser', {
  lastname: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      isAlpha: true
    }
  },
  firstname: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isAlpha: true
    }
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING,
    // Making `.password` act like a func hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get() {
      return () => this.getDataValue('password')
    }
  },
  imageurl: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    }
  },
  address: {
    type: Sequelize.STRING
  },
  salt: {
    type: Sequelize.STRING,
    // Making `.salt` act like a function hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get() {
      return () => this.getDataValue('salt')
    }
  },
  googleId: {
    type: Sequelize.STRING
  }
})

module.exports = AuthUser

/**
 * instanceMethods
 */
AuthUser.prototype.correctPassword = function(candidatePwd) {
  return User.encryptPassword(candidatePwd, this.salt()) === this.password()
}

/**
 * classMethods
 */
AuthUser.generateSalt = function() {
  return crypto.randomBytes(16).toString('base64')
}

AuthUser.encryptPassword = function(plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex')
}

/**
 * hooks
 */
const setSaltAndPassword = user => {
  if (user.changed('password')) {
    user.salt = AuthUser.generateSalt()
    user.password = AuthUser.encryptPassword(user.password(), user.salt())
  }
}

AuthUser.beforeCreate(setSaltAndPassword)
AuthUser.beforeUpdate(setSaltAndPassword)
AuthUser.beforeBulkCreate(users => {
  users.forEach(setSaltAndPassword)
})
