/**
 * name: render
 * description: ppt数据渲染逻辑
 * date: 2018-02-12
 * author: dkplus <dkplus.js@gmail.com>
 */
const $ = require('jquery');
const artT = require('art-template/dist/template.js');
const Play = require('../controller/play');

//引入ppt内容
var data = require('./data.json');

function renderHtml() {
    const tpl = require('../view/view.tpl')();
    const renderer = artT.compile(tpl);

    const obj = {
        data: data
    }

    var html = renderer(obj);
    $('.pages').html(html);
}
const render = {
    init: () => {
        renderHtml();
        // console.log('render');
        Play.init();
    }
}
module.exports = render;