const $ = require('jquery');
const artT = require('art-template');

const Page = require('./page/page.js');
const Toast = require('./toast/toast.js');

require('./slider.less');

const Slider = (() => {

  // 该模块
  const _e = {};

  // 操作dom
  const ele = {
    ROOT: '#test',
    PAGE_KEY: 'page',
    PAGE_CLASS: '.page',
  };

  // 全局操作数据
  const _g = {
    cur: location.hash.match(/\d+/) && Number(location.hash.match(/\d+/)[0]) || 1,
  };

  // 枚举
  const ENUM = {};

  // 开发配置
  const config = {
    mockMode: true,
  }

  // 前一页
  _e.prev = () => { 
    if (_g.cur - 1 <= 0) {
      Toast.show('已经是第一页了');
      return;
    }
    _g.cur -= 1;
    _e.jumpTo(_g.cur);
  }

  // 后一页
  _e.next = () => {
    const length = $(ele.PAGE_CLASS).length;
    if (_g.cur >= length) {
      Toast.show('已经是最后一页了');
      return;
    }
    _g.cur += 1;
    _e.jumpTo(_g.cur);
  }

  // 跳转某页
  _e.jumpTo = (pageNum) => {
    $(ele.PAGE_CLASS).hide();
    const curKey = `#${ele.PAGE_KEY}${pageNum}`;

    location.hash = curKey;
    $(curKey).show();
  }

  // 初始化
  _e.init = (option) => {
    option = option || {};
    const { callback=function() {} } = option;
    render();
    require('./pageForm.js').forEach((item, index) => {
      $('.slider').append(Page.render({
        key: item.key || `page${index+1}`,
        content: item.content || '',
        fx: item.fx || 'slideInRight',
        sec: item.sec,
      }));
    });
    _e.jumpTo(_g.cur);
    Toast.init();
    initEvent();
    callback && typeof callback === 'function' && callback();
  }

  // 渲染函数
  function render() {
    const tpl = require('./slider.tpl')();
    const tplRender = artT.compile(tpl);

    $(ele.ROOT).html(tplRender(_g.data));
  }

  // 初始化事件
  function initEvent() {
    $(window).on('keydown', (e) => {
      switch (e.keyCode) {
        case 37:
        case 38:
        case 8:
          _e.prev();
          break;
        case 39:
        case 40:
        case 32:
          _e.next();
          break;
        default:
          break;
      }
    });
  }

  return _e;

})();

module.exports = Slider;
