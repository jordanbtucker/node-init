const {name} = require('./config')

async function main() {
  const message = await Promise.resolve(`Hello, ${name}!`)
  console.log(message)
}

module.exports = main
