'use strict';

function generateProgressBar() {
    const doneBlock = '█'
    const emptyBlock = '░'
    const percent=25
    return `${doneBlock.repeat(percent)}${emptyBlock.repeat(percent)}`
}

module.exports = function progressBarPlugin(md, pluginOptions) {
    function progressBar(state){
        const tokens = state.tokens;
        for (var i = 0; i < tokens.length; ++i) {
          let token = tokens[i];
          if (token.block && token.type === 'fence' && token.info.match(/^progressbar/)) {
            token.content = generateProgressBar();
          }
        }
      }
      md.core.ruler.before('linkify', 'progress_bar', progressBar);
}