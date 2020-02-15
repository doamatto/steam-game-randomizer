# CLI Usage for Random Steam Game Picker

There's three commands that you can use for this tool in the CLI; four to five if you count how to turn on the web server.

- `npm run-auto`

> This command checks the Steam profile for a game and then automatically opens it (if you have Steam installed). Otherwise, it may make a popup prompting how you'd like to open a file (a common thing Windows does when it's confused). 

- `npm run`

> This command checks the Steam profile for a game and shows you the name of it, as well as the Steam game's ID. It also provides a link you can use the open the game, if you need it.

- `npm test`

> This command makes a test fetch to Steam's API servers to see if everything is ay-okay. This isn't run during the normal configurations, but still handles the issue in the same way (resulting in a halt of the entire tool).