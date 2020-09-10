require('dotenv/config')
const sinon = require('sinon')
const t = require('tap')

const main = require('../lib/main')

t.test('main', async t => {
  await t.test(`logs 'Hello, $NAME!'`, async () => {
    const message = `Hello, ${process.env.NAME || 'user'}!`

    const mock = sinon.mock(console)
    mock.expects('log').once().withExactArgs(message)

    await main()

    mock.verify()
    mock.restore()
  })
})
