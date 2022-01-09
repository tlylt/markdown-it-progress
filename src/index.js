'use strict';

const { renderToSvg } = require("./render");

module.exports = function progressBarPlugin(md, _pluginOptions) {
  const defaultOptions = {
    render: 'svg'
  };
  const renderMap = {
    'svg': renderToSvg
  }
  let pluginOptions = Object.assign({}, defaultOptions);
  pluginOptions = Object.assign(pluginOptions, _pluginOptions);
  const defaultFenceRenderer = md.renderer.rules.fence;
  md.renderer.rules.fence = function (tokens, idx, options, env, slf) {
    const token = tokens[idx];
    if (token.info.match(/^progressBar/)) {
      const data = JSON.parse(token.content);
      return data.map(([key, percentage]) => {
        return renderMap[pluginOptions.render](key, percentage);
      }).join('')
    }
    return defaultFenceRenderer(tokens, idx, options, env, slf);
  }
}