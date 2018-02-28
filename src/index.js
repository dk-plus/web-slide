/**
 * name: index
 * description: 基于前端技术的网页ppt
 * date: 2018-02-12
 * author: dkplus <dkplus.js@gmail.com>
 */
const $ = require('jquery');
const Play = require('./controller/play');
const Render = require('./module/render');
const Rem = require('./view/rem');

require('./view/reset.less');
require('./view/index.less');

const init = (function(){
    console.time('初始化耗时：');
    console.log('%cweb-slide 1.0.0',"background:#4dc71f;height:2rem;line-height:2rem;font-size:1rem;font-weight:bold;color:#fff;border:2px solid #b7f79f;border-radius:30px;padding:0 10px;text-shadow:0 0 5px #000");
    // console.log($);
    Render.init();
    Rem.init();
    // Play.init();
    console.timeEnd('初始化耗时：');
})();