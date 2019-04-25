"use strict";
exports.__esModule = true;
var constants_1 = require("../config/constants");
var TeleBot = require("telebot");
var bot = new TeleBot(constants_1.TELEGRAM_BOT_TOKEN);
bot.on("/start", function (msg) {
    msg.reply.text("I am officially on!");
});
bot.on("photo", function (msg) {
    msg.reply.text("That was a photo.");
    msg.reply.photo(msg.photo[0].file_id);
});
bot.start();
