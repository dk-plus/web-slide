const animate = require('./animate.js');
const slide = require('./slide.js');

require('./less');

(function() {
    animate.initAnimate();
    slide.init();
})()