function pre() {
    var c = document.getElementById("steamID").value;
    if(!c) { return console.error("No SteamID provided.")};
    if(c != 17) { return console.error("Not the right lenghth for a SteamID.")};
    if(isNaN(c)) { return console.error("SteamID contains letters, symbols, or is prevented from being an integer")};
    fetch(c);
}

function fetch(steamID) {
    var xmlhttp = newHTTPRequest()
    xmlhttp.open("GET", "/r", true);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.onload = (res) => {
        return postScript(res); 
    }
    xmlhttp.send();
}

function postScript(data) {
    var data_parsed = JSON.parse(data);
    var d = document.getElementById("gameData");
    d.innerHTML = `Here's a random game: ${data.appName} (${data.appID}). You can open it via Steam or by going to "steam://run/${data.appID}"`
}