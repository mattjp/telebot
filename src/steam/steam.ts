"use strict";
import { STEAM_API_KEY, STEAM_IDS } from "../../config/secrets";

const superagent = require("superagent");

const baseUrl =
  "https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/";

// Retrieve presence for all Steam users 
export async function getSteamPresence() {
  let summaries = await getPlayerSummaries();
  let presence = [];
  summaries.response.players.forEach(player => {
    const { steamid, personastate } = player;
    presence.push({
      id: STEAM_IDS[steamid],
      status: personastate, 
    });
  });
  return presence;
}

// Iterate through Object of Steam IDs
function getSteamIds(): String {
  let ids = "";
  Object.keys(STEAM_IDS).forEach(key => {
    ids += key + ",";
  });
  return ids;
}

// Send GET request to Steam API
async function getPlayerSummaries() {
  const queryUrl =
    "?key=" + STEAM_API_KEY + "&steamids=" + getSteamIds() + "&format=json";
  const response = await superagent.get(baseUrl+queryUrl);
  return JSON.parse(response.text);
}
