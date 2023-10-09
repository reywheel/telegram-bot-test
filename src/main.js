import { Telegraf } from 'telegraf';
import 'dotenv/config';

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

bot.start((ctx) => ctx.reply('Welcome'));

bot.hears('hello', async (ctx) => {
  console.log(ctx.chat);
  await ctx.reply('Hello, world from v0.3.0!');
});

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
