# IMPORTANT! READ ME!
Hello there. If you encountered errors when you watched my [Episode 1 - Basics Video](https://www.youtube.com/watch?v=8pbcFKzDgKY&t=676s), **then please _carefully_ read the following information below.**

<ins> **Some Common Errors:** </ins>
- `throw new TypeError ('CLIENT_MISSING_INTENTS');`
- `SyntaxError: Unexpected token '??='`
- Any other node module error(s).

## </ins> **Solution:** </ins>
- So the problem is that Discord.js was recently upgraded to v13 and the original video (and code) were made to work using Discord.js v12, so what you want to do is _**downgrade your Discord.js to v12.**_
  - To do so, simply type: `npm i discord.js@12.5.3` in the command prompt and then run your bot again by either typing `node .` or `node index.js` (or whatever you named your file). Hope this helps! 🙂

#### Got Questions?
Feel free to leave a comment on my YouTube video about your question/concern!


