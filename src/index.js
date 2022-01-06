'use strict';

const { renderToSvg } = require("./render");

const defaultOptions = {
  render: 'svg'
};

const renderMap = {
  'svg': renderToSvg
}

module.exports = function progressBarPlugin(md, _pluginOptions) {
  let pluginOptions = Object.assign({}, defaultOptions);
  pluginOptions = Object.assign(pluginOptions, _pluginOptions);
  const proxy = (tokens, idx, options, env, self) => self.renderToken(tokens, idx, options);
  const defaultFenceRenderer = md.renderer.rules.fence || proxy;
  md.renderer.rules.fence = function (tokens, idx, options, env, slf) {
    const token = tokens[idx];
    if (token.info.match(/^progressBar/)) {
      const data = JSON.parse(token.content);
      return data.map(([key, percentage]) => {
        return renderMap[pluginOptions.render](key, percentage);
      }).join('<br>')
    }
    return defaultFenceRenderer(tokens, idx, options, env, slf);
  }
}