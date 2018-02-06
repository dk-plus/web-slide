/**
 * 简易网页幻灯片
 * version $1.0$
 * author: dkplus.js@gmail.com
 */
const $ = require('jQuery');

const slide = (function(){
    /**
     * 可视区域
     * 幻灯片
     * 幻灯片容器
     * 上一页
     * 下一页
     */
    var _opt = {
        container: '#container',
        slide: '.slide',
        page: '#page',
        prev: '#prev',
        next: '#next'
    }
    const $container = $(_opt.container);
    const $slides = $(_opt.slide);
    const $page = $(_opt.page);
    const $prev = $(_opt.prev);
    const $next = $(_opt.next);

    var height = document.body.clientHeight || document.documentElement.clientHeight || 0;
    var width = document.body.clientWidth || document.documentElement.clientWidth || 0;

    // 点击按钮切换幻灯片
    $prev.on(function() {
        prev();
    });
    $next.on(function() {
        next();
    });

    // 窗口改变大小时全屏展示
    $(window).on('resize', function(){
        fullPage();
    });

    function fullPage() {
        $container.css({
            width: width,
            height: height,
            overflow: hidden
        });
        $slide.each(function(index,item) {
            $(item).css({
                width: width,
                height: height
            })
        });
    }
    function prev() {
        $page.css({
            transform: 'translateY('+height+')',
        })
    }
    function next() {
        $page.css({
            transform: 'translateY(' + -1*height + ')',
        })
    }

    // 自定义配置
    function setConfig(opt) {
        _opt = opt;
    }
    // 初始化方法
    function init() {
        console.log('slide initializing');
        fullPage();
    }
    return {
        init,
        setConfig
    }
})();

module.exports = slide;