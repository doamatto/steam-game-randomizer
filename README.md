# Random Steam Game Picker

This is a simple tool that can look in your profile's game inventory (granted you have a public profile and game activity) and randomly give you a game to play. This is nice for people who don't know what to play or have wa y too many games.

**Q:** Is this both CLI and web?

**A:** Yes, it is built to be able to work as a web server if you optionally install Express and use the views. However, it also works fine without it.

**Q:** Why is JSLint a dev dependency?

**A:** JSLint is used to.. well.. lint JavaScript. It not only helps me find obvious issues and also minimize code, but it can also allow the end-user some assistance troubleshooting if making a fork or trying to add a new feature.

**Q:** Why GPL-3.0?

**A:** It has always been my main license of choice, next to MIT, purely because I see it to be a fair, open-source license. 

**Q:** How do I install/build?

**A:** Start by running `npm i`. While that installs dependencies, open the `.env.example` file, rename it to `.env` and configure the file to your liking. Afterwards, you can run `node cli.js` with any of the flags mentioned in `USAGE.md`. If you want to use the web version, do `npm i express`, which will install Express. Once that finishes, simply run `npm init-web` and go to the link that it gives you. It should be `localhost:#####`, with the numbers replaced with a port that is auto generated and/or decided via the `.env` file.