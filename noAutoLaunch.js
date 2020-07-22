const conf = require('./config.json')

try {
  require.resolve('https')
} catch (e) {
  console.error('The module "https" isn\'t installed. You can manually install by running "npm i https"')
  process.exit(e.code)
}

const https = require('https')

process.argv.slice(2).forEach((steamID) => {
  https.get(`https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${conf.steamKEY}&steamid=${steamID}}&include_appinfo=1&include_played_free_games=1`, (res) => {
    var body
    res.on('data', (chunk) => { body += chunk })
    res.on('end', () => {
      body = JSON.parse(body)
      var gameNo = Math.floor((Math.random() * body.response.game_count)) // Randomly grabs one of the games it finds in the JSON data
      var appID = body.response.games[gameNo].appid
      var appName = body.response.games[gameNo].name
      console.log(`Here's a random game: ${appName} (${appID}). You can open it via Steam or by going to "steam://run/${appID}"`);
    });
    res.on('error', (e) => {
      console.error(`Seems something is broken. Make sure your token is valid, your profile is public, and that Steam's servers aren't down. If that's all a-okay, put an issue at https://github.com/doamatto/random-steam-game-picker/issues/new detailing any errors to follow. Error report: ${e}`
    });
    })
  })
