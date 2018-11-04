const $ = require('jquery');
const artT = require('art-template');

require('./toast.less');

const Toast = (() => {

  // 该模块
  const _e = {};

  // 操作dom
  const ele = {
    ROOT: '#root',
    TOAST: '#toast',
    FADE_IN: 'fadeIn',
    FADE_OUT: 'fadeOut',
  };

  // 全局操作数据
  const _g = {
    // 渲染数据
    data: {},
  };

  // 枚举
  const ENUM = {};

  // 开发配置
  const config = {
    mockMode: true,
  }

  // 初始化
  _e.init = () => {
    render();
  }

  _e.show = (text) => { 
    fadeIn();
    $(ele.TOAST).html(text);
    $(ele.TOAST).show();
    setTimeout(() => {
      _e.hide();
    }, 1000);
  }

  _e.hide = (text) => {
    fadeOut();
    setTimeout(() => {
      $(ele.TOAST).hide();
    }, 1000);
  }

  function fadeIn() {
    $(ele.TOAST).addClass(ele.FADE_IN);
    $(ele.TOAST).removeClass(ele.FADE_OUT);
  }

  function fadeOut() {
    $(ele.TOAST).addClass(ele.FADE_OUT);
    $(ele.TOAST).removeClass(ele.FADE_IN);
  }

  // 渲染函数
  function render(text) {
    const tpl = require('./toast.tpl')();
    const tplRender = artT.compile(tpl);

    $(ele.ROOT).append(tplRender());
  }

  // 初始化事件
  function initEvent() { }

  return _e;

})();

module.exports = Toast;
