"use strict";
exports.__esModule = true;
var secrets_1 = require("../config/secrets");
var steam_1 = require("./steam/steam");
var TeleBot = require("telebot");
var bot = new TeleBot(secrets_1.TELEGRAM_BOT_TOKEN);
bot.on("/start", function (msg) {
    msg.reply.text("I am officially on!");
});
bot.on("/whomst", function (msg) {
    steam_1.getSteamPresence();
});
bot.on("photo", function (msg) {
    msg.reply.text("That was a photo.");
    msg.reply.photo(msg.photo[0].file_id);
});
bot.start();
