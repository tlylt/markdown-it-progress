'use strict';

const renderToPara = require("./render");

function generateProgressBar(arr) {
  const doneBlock = '\u2588' //'█'
  const emptyBlock = '\u2591'//'░'
  const reducer = (prev, curr) => prev + '\n' + `${curr[0]} ${doneBlock.repeat(curr[1])}${emptyBlock.repeat(100 - curr[1])} ${curr[1]}%\n`
  return arr.reduce(reducer, "")
}

module.exports = function progressBarPlugin(md, pluginOptions) {
  function progressBar(state) {
    const tokens = state.tokens;
    for (var i = 0; i < tokens.length; ++i) {
      let token = tokens[i];
      if (token.block && token.type === 'fence' && token.info.match(/^progressbar/)) {
        token.content = generateProgressBar(JSON.parse(token.content));
        renderToPara(tokens, token, i)
      }
    }
  }
  md.core.ruler.before('linkify', 'progress_bar', progressBar);
}