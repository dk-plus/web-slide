const $ = require('jquery');
const artT = require('art-template');

require('./page.less');

// 常量
const NAME = 'Page';
const VERSION = '0.1.0';
const ClassName = {};
const Selector = {};
const ENUM = {};

class Page {
  // 构造函数
  constructor(option) {
    this.option = option;
  }

  static render(option) {
    const { key, content, fx, sec } = option;

    const tpl = require('./page.tpl')();
    const tplRender = artT.compile(tpl);

    return tplRender({ key, content, fx, sec });
  }

}

module.exports = Page;