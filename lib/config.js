require('dotenv/config')

const DEFAULT_NAME = 'user'

const name = process.env.NAME || DEFAULT_NAME

module.exports = {
  name,
}
