var jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = {
  login: (req, res, next) => {
    jwt.verify(req.headers.token, process.env.DB_PASS, (err, decoded) => {
      console.log('ini adalah decoded ---->', decoded)
      if (err) {
        // console.log('anda harus login terlebih dahulu')
        res.send('anda harus login terlebih dahulu')
      } else {
        req.role = decoded.role
        next()
      }
    })
  },
  logUser: (req, res, next) => {
    if (req.role === 'admin') {
      next()
    } else if (req.role === 'author') {
      next()
    } else {
      // console.log('anda bukan admin atau author')
      res.send('anda bukan admin atau author')
    }
  }
}
