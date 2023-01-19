// Let's start with importing `NlpManager` from `node-nlp`. This will be responsible for training, saving, loading and processing.
const { Telegraf } = require('telegraf')
const { NlpManager } = require("node-nlp");
console.log("Starting Chatbot ...");

const bot = new Telegraf("5749854286:AAHuF6DgCdKQklvNw24i2YYjtPScMC621lM");
// Creating new Instance of NlpManager class.
const manager = new NlpManager({ languages: ["en"] });
// Loading our saved model
manager.load();
// Loading a module readline, this will be able to take input from the terminal.
bot.on('message', async (ctx) => {

    const response = await manager.process("en", ctx.message.text);

    ctx.reply(response.answer).catch(err => bot.telegram.sendMessage(746524823, "Sorry cant answer that rightnow what about an atourney", { parse_mode: 'MarkdownV2' }));




});

bot.launch();