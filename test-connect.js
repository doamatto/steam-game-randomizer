//   
//   * This file is a part of random-steam-game-picker
//   * test-connect.js created by doamatto on 02/15/2020
//   * © 2020 doamatto. All rights reserved.
//   

const config = require("./config.json");

try {
    require.resolve("https");
} catch(e) {
    console.error("The module \"https\" isn't installed. You can manually install by running \"npm i https\"");
    process.exit(e.code);
}

const https = require("https");

try {
    https.get(`https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${config.steamKEY}&steamid=76561198185019113&include_appinfo=1`, function(res) {
            res.on("error", function(e) { console.error("Seems something is broken. Make sure your token is valid, your profile is public, and that Steam's servers aren't down. If that's all a-okay, put an issue at https://github.com/doamatto/random-steam-game-picker/issues/new detailing any errors to follow. Error report: " + e);});
    });
} catch (e) {
    console.error(`Here's a slightly more verbose log for what happened: ${e}`);
}
