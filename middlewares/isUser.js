const JWT = require('jsonwebtoken')

const isUser = (req, res, next) => {
  const token = req.get('Authorization')
  JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
    if (err || !decode.role === 'user') {
      res.status(403).send('Unauthorized')
    } else {
      next()
    }
  })
}
module.exports = isUser;