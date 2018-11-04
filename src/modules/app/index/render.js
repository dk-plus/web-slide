/**
 * 总渲染模块
 */
const $ = require('jquery');
const artT = require('art-template');
const Slider = require('../../components/slider/slider.js');

require('./index.less');

const Render = (() => {
  const _e = {};

  let data = {
    title: 'web-slide'
  };

  _e.init = () => {
    console.log('render init...');
    render();
    Slider.init();
  }

  function render() {
    const tpl = require('./index.tpl')();
    const tplRender = artT.compile(tpl);
    $('#root').html(tplRender(data));
  }

  return _e;
})();

module.exports = Render;