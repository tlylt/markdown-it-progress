'use strict';

function generateProgressBar(arr) {
  const doneBlock = '\u2588' //'█'
  const emptyBlock = '\u2591'//'░'
  const reducer = (prev, curr) => prev + '\n' + `${curr[0]} ${doneBlock.repeat(curr[1])}${emptyBlock.repeat(100 - curr[1])} ${curr[1]}%\n`
  return arr.reduce(reducer, "")
}
const pOpen = {
  "type": "paragraph_open",
  "tag": "p",
  "attrs": null,
  "map": [
    1,
    2
  ],
  "nesting": 1,
  "level": 0,
  "children": null,
  "content": "",
  "markup": "",
  "info": "",
  "meta": null,
  "block": true,
  "hidden": false
}

const paraClose = {
  "type": "paragraph_close",
  "tag": "p",
  "attrs": null,
  "map": null,
  "nesting": -1,
  "level": 0,
  "children": null,
  "content": "",
  "markup": "",
  "info": "",
  "meta": null,
  "block": true,
  "hidden": false
}

const paraInline = {
  "type": "inline",
  "tag": "",
  "attrs": null,
  "map": [
    1,
    2
  ],
  "nesting": 0,
  "level": 1,
  "children": [
    {
      "type": "text",
      "tag": "",
      "attrs": null,
      "map": null,
      "nesting": 0,
      "level": 0,
      "children": null,
      "content": "",
      "markup": "",
      "info": "",
      "meta": null,
      "block": false,
      "hidden": false
    }
  ],
  "content": "",
  "markup": "",
  "info": "",
  "meta": null,
  "block": true,
  "hidden": false
}

module.exports = function progressBarPlugin(md, pluginOptions) {
  function progressBar(state) {
    const tokens = state.tokens;
    for (var i = 0; i < tokens.length; ++i) {
      let token = tokens[i];
      if (token.block && token.type === 'fence' && token.info.match(/^progressbar/)) {
        token.content = generateProgressBar(JSON.parse(token.content));
        paraInline.content = token.content;
        paraInline.children[0].content = token.content;
        token = paraInline
        // insert paraOpen and paraClose tokens
        tokens.splice(i, 1, pOpen, token, paraClose);
      }
    }
  }
  md.core.ruler.before('linkify', 'progress_bar', progressBar);
}