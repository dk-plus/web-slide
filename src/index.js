const Play = require('./controller/play');
const Render = require('./module/render');

require('./reset.less');
require('./index.less');

const init = (function(){
    console.log('hello web-slide');
    Play.init();
    Render.init();
})();

init;