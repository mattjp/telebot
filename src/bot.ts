"use strict";
import { TELEGRAM_BOT_TOKEN } from "../config/secrets";

const TeleBot = require("telebot");
const bot = new TeleBot(TELEGRAM_BOT_TOKEN);

bot.on("/start", msg => {
  msg.reply.text("I am officially on!");
});

bot.on("photo", msg => {
  msg.reply.text("That was a photo.");
  msg.reply.photo(msg.photo[0].file_id);
});

bot.start();
