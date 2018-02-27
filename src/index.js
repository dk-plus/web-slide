/**
 * name: index
 * description: 基于前端技术的网页ppt
 * date: 2018-02-12
 * author: dkplus <dkplus.js@gmail.com>
 */
const $ = require('jquery');
const Play = require('./controller/play');
const Render = require('./module/render');

require('./reset.less');
require('./index.less');

const init = (function(){
    console.time('初始化耗时：');
    console.log('hello web-slide');
    console.log($);
    Play.init();
    Render.init();
    console.timeEnd('初始化耗时：');
})();