/**
 * name: render
 * description: ppt数据渲染逻辑
 * date: 2018-02-12
 * author: dkplus <dkplus.js@gmail.com>
 */
const $ = require('jquery');
const artT = require('art-template/dist/template.js');

var data = require('./data.json');

function renderHtml() {
    const tpl = require('../view/view.tpl')();
    const renderer = artT.compile(tpl);

    const obj = {
        data: data
    }

    var html = renderer(obj);
    $('.container').html(html);
}
const render = {
    init: () => {
        renderHtml();
        console.log('render');
    }
}
module.exports = render;