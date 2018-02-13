/**
 * name: render
 * description: ppt数据渲染逻辑
 * date: 2018-02-12
 * author: dkplus <dkplus.js@gmail.com>
 */
const $ = require('jquery');
const tpl = require('../view/view');
const render = {
    init: () => {
        console.log('render');
        $('.container').html(tpl);
    }
}
module.exports = render;