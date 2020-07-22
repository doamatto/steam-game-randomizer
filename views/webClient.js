function pre () {
  var c = document.getElementById('steamID').value
  var d = document.getElementById('steamKEY').value
  if (!c) { return console.error('No SteamID provided.') }
  if (!d) { return console.error('No Steam API key provided.') }
  if (isNaN(c)) { return console.error('SteamID contains letters, symbols, or is prevented from being an integer') }
  fetch(c, d)
}

function fetch (steamID, steamKEY) {
  var xmlhttp = new XMLHttpRequest()
  xmlhttp.open('GET', '/r', true)
  xmlhttp.setRequestHeader('Content-Type', 'application/json')
  xmlhttp.onload = (res) => {
    return postScript(res)
  }
  xmlhttp.send()
}

function postScript (data) {
  var data1 = JSON.parse(data)
  var d = document.getElementById('gameData')
  d.innerHTML = `Here's a random game: ${data1.appName} (${data1.appID}). You can open it via Steam or by going to "steam://run/${data1.appID}"`
}
