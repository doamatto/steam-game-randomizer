const conf = require("./config.json");

try {
  require.resolve("https");
} catch(e) {
  console.error("\"https\" isn't installed. You can install it with \"npm i https\"");
  process.exit(e.code);
}

const https = require("https");

try {
  https.get(`https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${conf.steamKEY}&steamid=76561198185019113&include_appinfo=1`, function(res) {
    res.on("error", (e) => {
      console.error(
        `Ensure your Steam key is valid, your profile is public, and that Steam's servers aren't down. Error report: ${e}`
      );
    });
  });
} catch (e) {
  console.error(`Here's a slightly more verbose log for what happened: ${e}`);
}