const $ = require('jquery');
const artT = require('art-template');

const Page = require('../../lib/page.js');
const Config = require('../../lib/config.js');

require('./play_button.less');

const PlayButton = (() => {
  const _e = {
    wrapper: '.play-btns',
    prev: '.play-btns .prev',
    next: '.play-btns .next',
  };

  let data = {};

  _e.init = () => {
    initConfig();
    render();
    $(_e.prev).on('click', () => {
      Page.prev();
    });
    $(_e.next).on('click', () => {
      Page.next();
    });
  }

  function initConfig() {
    $.extend(data, Config);
  }

  function render() {
    const tpl = require('./play_button.tpl')();
    const tplRender = artT.compile(tpl);
    $(_e.wrapper).html(tplRender(data));
  }

  return _e;
})();

module.exports = PlayButton;