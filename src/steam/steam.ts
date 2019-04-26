"use strict"
import { STEAM_API_KEY, STEAM_IDS } from "../../config/secrets";
const https = require("https");

const baseUrl =
  "https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/";



export function getSteamPresence() {
  console.log("get presence");
  const res = getPlayerSummary();
  // console.log(res)
  // return res;
};



function getPlayerSummary(): any {
  // STEAM_IDS.forEach(entry => {
  https.get(

    (resp) => {
      let data = "";
      resp.on("data", (chunk) => {
        data += chunk;
      });
      resp.on("end", () => {
        console.log(JSON.parse(data));
      });
    }).on("error", (err) => {
      console.log("Error: " + err.message);
    });



  // });
}

