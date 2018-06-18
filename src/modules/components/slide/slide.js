const $ = require('jquery');
const artT = require('art-template');

const Config = require('../../lib/config.js');

require('./slide.less');

const Slide = (() => {
  const _e = {
    wrapper: '.slides'
  };

  let data = {};

  _e.init = () => {
    initConfig();
    render();
  }

  function initConfig() {
    $.extend(data, Config);
  }

  function render() {
    const tpl = require('./slide.tpl')();
    const tplRender = artT.compile(tpl);
    $(_e.wrapper).html(tplRender(data));
  }

  return _e;
})();

module.exports = Slide;