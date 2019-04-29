"use strict";
import { TELEGRAM_BOT_TOKEN } from "../config/secrets";
import { getSteamPresence } from "./steam/steam";

const TeleBot = require("telebot");
const bot = new TeleBot(TELEGRAM_BOT_TOKEN);

bot.on("/start", msg => {
  msg.reply.text("I am officially on!");
});

bot.on("/whomst", async msg => {
  const presence = await getSteamPresence();
  let response = "";
  presence.forEach(player => {
    if (player.status) {
      response += "✅ ";
    } else {
      response += "🔴 ";
    }
    response += player.id + "\n"
  });
  msg.reply.text(response);
});

bot.on("photo", msg => {
  msg.reply.text("That was a photo.");
  msg.reply.photo(msg.photo[0].file_id);
});

bot.start();
