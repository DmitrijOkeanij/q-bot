require('dotenv').config()

const {
  API_URL,
  WEBHOOK_ENDPOINT
} = require('./config.json')

const WEBHOOK_URL = `${API_URL}/${WEBHOOK_ENDPOINT}`

const qbot = require('./src/libs/qbot')

qbot.telegram.setWebhook(`${WEBHOOK_URL}`)

// Webhook settings https://telegraf.js.org/#/?id=webhooks
