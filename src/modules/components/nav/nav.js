const $ = require('jquery');
const artT = require('art-template');

const Config = require('../../lib/config.js');

require('./nav.less');

const Nav = (() => {
  const _e = {
    wrapper: '.nav',
    navIndex: '.nav-index',
    item: {
      ele: '.nav-item'
    },
    arrow: {
      prev: '.prev',
      next: '.next'
    }
  };

  let data = {
    nav: []
  };

  _e.init = () => {
    initConfig();
    initNav(data.slides.length);
    render();

    $(_e.item.ele).on('click', () => {
      refreshNav();
    });

    $(_e.arrow.prev).on('click', () => {
      prev();
    });

    $(_e.arrow.next).on('click', () => {
      next();
    });
  }

  function initConfig() {
    $.extend(data, Config);
  }

  function initNav(length) {
    for (let i = 0; i<length; i++) {
      data.nav.push(1);
    }
    refreshNav();
  }

  /**
   * 导航页翻页
   */
  function prev() {
    let width = $(_e.navIndex).width();
    let offset = $(_e.navIndex).scrollLeft() - width / 2;
    $(_e.navIndex).scrollLeft(offset);
  }

  function next() {
    let width = $(_e.navIndex).width();
    let offset = $(_e.navIndex).scrollLeft() + width / 2;
    $(_e.navIndex).scrollLeft(offset);
  }

  /**
   * 按钮根据hash刷新激活状态
   */
  function refreshNav() {
    setTimeout(() => {
      let ele = location.hash.split('#')[1] || 'page-1';
      let dataEle = `[data-page=${ele}]`;
      refresh(dataEle);
    }, 0);
  }

  function refresh(ele) {
    process();
    activate(ele);
  }

  function process() {
    $(_e.item.ele).each((index, item) => {
      $(item).removeClass('active');
    });
  }

  function activate(ele) {
    $(ele).addClass('active');
  }

  function render() {
    const tpl = require('./nav.tpl')();
    const tplRender = artT.compile(tpl);
    $(_e.wrapper).html(tplRender(data));
  }

  return _e;
})();

module.exports = Nav;