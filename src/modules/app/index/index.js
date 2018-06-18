const $ = require('jquery');
const artT = require('art-template');

const Slide = require('../../components/slide/slide.js');
const Nav = require('../../components/nav/nav.js');

require('./index.less');

!(() => {
  console.log(`%cweb ↓`,`
    background: rgb(23, 104, 211);
    color: #fff;
    padding: 0 5px;
    font-size: 18px;
  `);
  console.log(`%csl↑de`, `
    background: rgb(23, 104, 211);
    color: #fff;
    padding: 0 5px;
    font-size: 18px;
  `);

  let data = {
    title: 'web-slide'
  }

  function render() {
    const tpl = require('./index.tpl')();
    const tplRender = artT.compile(tpl);
    $('#root').html(tplRender(data));
  }
  function init() {
    render();
    Slide.init();
    Nav.init();
  }
  init();
})();