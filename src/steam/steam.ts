"use strict";
import { STEAM_API_KEY, STEAM_IDS } from "../../config/secrets";
// const https = require("https");
const request = require("request");

const baseUrl =
  "https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/";

// const queryUrl =
// "?key=541F483EFF82A81E75E817C103F51852&format=json&steamids=76561197960287930";

export function getSteamPresence() {
  let summaries = getPlayerSummaries();
  console.log("======");
  console.log(summaries);
  // summaries.forEach(summary => {
  //   console.log("^^^^^^^^");
  //   console.log(summary);
  // });
}

function getSteamIds(): String {
  let ids = "";
  STEAM_IDS.forEach(entry => {
    ids += entry[1] + ",";
  });
  // console.log(ids);
  return ids;
}

function getPlayerSummaries(): any {
  const queryUrl =
    "?key=" + STEAM_API_KEY + "&steamids=" + getSteamIds() + "&format=json";

  // const summaries = request(baseUrl + queryUrl);
  // console.log("&&&&&&");
  // console.log(summaries.response);
  var summaries;
  request(baseUrl + queryUrl, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      // console.log("*****");
      // console.log(body);
      let jsonBody = JSON.parse(body);
      // console.log(jsonBody);
      summaries = jsonBody.response.players;
      // let y = x.response;
      // console.log(playerSummaries);
      // return playerSummaries;
    }
  });
  
  // // console.log("*********");
  // // console.log(summaries);
  return summaries;
}
