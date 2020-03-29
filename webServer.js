//   
//   * This file is a part of random-steam-game-picker
//   * webServer.js created by doamatto on 02/16/2020
//   * © 2020 doamatto. All rights reserved.
//   
//   random-steam-game-picker is free software: you can redistribute it and/or modify
//   it under the terms of the GNU General Public License as published by
//   the Free Software Foundation, either version 3 of the License, or
//   (at your option) any later version.
//   
//   random-steam-game-picker is distributed in the hope that it will be useful,
//   but WITHOUT ANY WARRANTY; without even the implied warranty of
//   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//   GNU General Public License for more details.
//   
//   You should have received a copy of the GNU General Public License
//   along with random-steam-game-picker.  If not, see <https://www.gnu.org/licenses/>.
//   

try {
    require.resolve("express");
} catch(e) {
    console.error("The module \"express\" isn't installed. You can manually install by running \"npm i https\"");
    process.exit(e.code);
}

try {
    require.resolve("https");
} catch(e) {
    console.error("The module \"https\" isn't installed. You can manually install by running \"npm i https\"");
    process.exit(e.code);
}

const express = require("express");
const https = require("https");
const app = express();
const config = require("./config.json");

app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/r", function(req,res) {
    var steamID = req.query.steamID;
    https.get(`https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${config.steamKEY}&steamid=${config.steamID}&include_appinfo=1`, function(res) {
        var body = "";
        res.on("data", function(chunk) { body += chunk;});
        res.on("end", function() {
            var data_parsed = JSON.parse(body);
            var random_game_no = Math.floor((Math.random() * data_parsed.response.game_count)); // Randomly grabs one of the games it finds in the JSON data
            var appID = data_parsed.response.games[random_game_no].appid;
            var appName = data_parsed.response.games[random_game_no].name;
            console.log(`Here's a random game: ${appName} (${appID}). You can open it via Steam or by going to "steam://run/${appID}"`);
        });
        res.on("error", function(e) {
            console.error("Seems something is broken. Make sure your token is valid, your profile is public, and that Steam's servers aren't down. If that's all a-okay, put an issue at https://github.com/doamatto/random-steam-game-picker/issues/new detailing any errors to follow. Error report: " + e);
        });
    });
});

const listener = app.listen(config.web_port, function() {
    console.log(`The server is now running on port ${listener.address().port}`);
});