const $ = require('jquery');

const Config = require('./config.js');

const Page = (() => {
  const _e = {};

  let data = {};

  _e.init = () => {
    initConfig();
    $(window).on('keydown', (e) => {
      switch (e.keyCode) {
        case 32:
        case 39:
        case 40:
          _e.next();
          break;
        case 8:
        case 37:
        case 38:
          _e.prev();
          break;
      }
    });
  }

  _e.prev = () => {
    changePage(-1);
  }

  _e.next = () => {
    changePage(1);
  }

  function changePage(mode) {
    let curIdx = Number(location.hash.split('-')[1]);
    let length = data.slides.length;
    let nextIdx = curIdx < length 
                  ? curIdx+1
                  : curIdx;
    let prevIdx = curIdx > 1 
                  ? curIdx-1 
                  : curIdx;
    if (mode === -1) {
      location.hash = `#page-${prevIdx}`;
    }
    if (mode === 1) {
      location.hash = `#page-${nextIdx}`;
    }
  }

  function initConfig() {
    $.extend(data, Config);
  }

  return _e;
})();

module.exports = Page;