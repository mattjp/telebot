"use strict";
exports.__esModule = true;
var secrets_1 = require("../../config/secrets");
// const https = require("https");
var request = require("request");
var baseUrl = "https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/";
// const queryUrl =
// "?key=541F483EFF82A81E75E817C103F51852&format=json&steamids=76561197960287930";
function getSteamPresence() {
    var summaries = getPlayerSummaries();
    console.log("======");
    console.log(summaries);
    // summaries.forEach(summary => {
    //   console.log("^^^^^^^^");
    //   console.log(summary);
    // });
}
exports.getSteamPresence = getSteamPresence;
function getSteamIds() {
    var ids = "";
    secrets_1.STEAM_IDS.forEach(function (entry) {
        ids += entry[1] + ",";
    });
    // console.log(ids);
    return ids;
}
function getPlayerSummaries() {
    var queryUrl = "?key=" + secrets_1.STEAM_API_KEY + "&steamids=" + getSteamIds() + "&format=json";
    // const summaries = request(baseUrl + queryUrl);
    // console.log("&&&&&&");
    // console.log(summaries.response);
    var summaries;
    request(baseUrl + queryUrl, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // console.log("*****");
            // console.log(body);
            var jsonBody = JSON.parse(body);
            // console.log(jsonBody);
            summaries = jsonBody.response.players;
            // let y = x.response;
            // console.log(playerSummaries);
            // return playerSummaries;
        }
    });
    // console.log("*********");
    // console.log(summaries);
    return summaries;
}
