async function main() {
  const message = await Promise.resolve(`Hello, ${process.env.NAME || 'user'}!`)
  console.log(message)
}

module.exports = main
