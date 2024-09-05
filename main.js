import { Telegraf, Markup } from 'telegraf'
import { message } from 'telegraf/filters'

const token = '7523335171:AAEipntgg1vKXLOjM0Uz4N8d0NgzNHTj2BM'
const webAppUrl = 'https://vk.com/'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
  ctx.reply(
      'Добро пожаловать! Нажмите на кнопку ниже, чтобы запустить приложение',
      Markup.keyboard([
        Markup.button.webApp('Отправить сообщение', `${webAppUrl}/feedback`),
      ])
  )
})

bot.launch()