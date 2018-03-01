/**
 * rem字体大小适配
 */
const $ = require('jquery');

var _e = {};

var PSD_WIDTH = 720;
var FONT_SIZE = 50;
var TIMES = 2;
var clientWidth = document.documentElement.clientWidth;

function init(psdWidth, fontSize, times){
    if (psdWidth) {
        PSD_WIDTH = psdWidth;
    }
    if (fontSize) {
        FONT_SIZE = fontSize;
    }
    if (times) {
        TIMES = times;
    }

    setFontSize();

    window.onresize = function() {
        setFontSize();
    }
}
function setFontSize(){
    clientWidth = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = (clientWidth/(PSD_WIDTH/TIMES))*FONT_SIZE + 'px';
}

module.exports = {
    init
}