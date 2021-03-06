try {
  require.resolve('express')
} catch (e) {
  console.error("\"express\" isn't installed. You can install it with \"npm i express\"")
  process.exit(e.code)
} // Ensure Express is installed

try {
  require.resolve('https')
} catch (e) {
  console.error("\"https\" isn't installed. You can install it with \"npm i https\"")
  process.exit(e.code)
} // Ensure HTTPS is installed

const express = require('express')
const https = require('https')
const app = express()
const config = require('./config.json')

app.use(express.static('views'))

app.get('/r', (req, res) => {
  var steamID = req.query.steamID // Fetch steam ID from request
  var appID, appName
  https.get(`https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${config.steamKEY}&steamid=${steamID}&include_appinfo=1`, function (res) {
    var body
    res.on('data', (chunk) => { body += chunk })
    res.on('end', () => {
      body = JSON.parse(body)
      var randomNo = Math.floor((Math.random() * body.response.game_count)) // Randomly grabs one of the games it finds in the JSON data
      appID = body.response.games[randomNo].appid
      appName = body.response.games[randomNo].name
    })
    res.on('error', (e) => {
      console.error("Seems something is broken. Make sure your token is valid, your profile is public, and that Steam's servers aren't down. If that's all a-okay, put an issue at https://github.com/doamatto/random-steam-game-picker/issues/new detailing any errors to follow. Error report: " + e)
    })
  })
  res.sendStatus(200, `{appid: ${appID}, appName: ${appName}}`) // Send data back to call
})

const listener = app.listen(config.web_port, () => {
  console.log(`The server is now running on port ${listener.address().port}`)
})
