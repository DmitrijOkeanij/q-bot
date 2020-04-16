const Telegraf = require('telegraf')

const qbot = new Telegraf(process.env.BOT_ACCESS_TOKEN)

qbot.use(
  require('./src/libs/qbot/handlers/middlewares'),
  require('./src/libs/qbot/handlers/messages')
)

module.exports = qbot
