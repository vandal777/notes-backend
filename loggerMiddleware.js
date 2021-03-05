const logger = (req, res, next) => {
  console.log('hola middleware')
  next()
}

module.exports = logger
