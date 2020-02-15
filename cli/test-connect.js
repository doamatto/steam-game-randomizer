//   
//   * This file is a part of random-steam-game-picker
//   * test-connect.js created by doamatto on 02/15/2020
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
    require.resolve("https");
} catch(e) {
    console.error("The module \"https\" isn't installed. You can manually install by running \"npm i https\"");
    process.exit(e.code);
}

const https = require("https");

try {
    https.get(`https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${steamKEY}&steamid=${steamID}&include_appinfo=1`, function(res) {
            res.on("error", function(e) { console.error("Seems something is broken. Make sure your token is valid, your profile is public, and that Steam's servers aren't down. If that's all a-okay, put an issue at https://github.com/doamatto/random-steam-game-picker/issues/new detailing any errors to follow. Error report: " + e)});
    });
} catch (e) {
    console.error(`Here's a slightly more verbose log for what happened: ${e}`);
}
