"use strict";
exports.__esModule = true;
var https = require("https");
var baseUrl = "https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/";
function getSteamPresence() {
    console.log("get presence");
    var res = getPlayerSummary();
    // console.log(res)
    // return res;
}
exports.getSteamPresence = getSteamPresence;
;
// https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=541F483EFF82A81E75E817C103F51852&format=json&steamids=76561197960287930
function getPlayerSummary() {
    // STEAM_IDS.forEach(entry => {
    https.get("https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=541F483EFF82A81E75E817C103F51852&format=json&steamids=76561197960287930", function (resp) {
        var data = "";
        resp.on("data", function (chunk) {
            data += chunk;
        });
        resp.on("end", function () {
            console.log(JSON.parse(data).players);
        });
    }).on("error", function (err) {
        console.log("Error: " + err.message);
    });
    // });
}
