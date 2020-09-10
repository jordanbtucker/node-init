const {name} = require('./config')

async function main() {
  const message = `Hello, ${name}!`
  console.log(message)
}

module.exports = main
