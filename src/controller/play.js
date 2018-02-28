/**
 * name: play
 * description: ppt播放逻辑
 * date: 2018-02-12
 * author: dkplus <dkplus.js@gmail.com>
 */
const $ = require('jquery');

var _opt = {
    prev: '.prev',
    next: '.next',
    page: '.page',
    pages: '.pages'
}

var curIdx = 0;
var prevIdx = curIdx - 1;
var nextIdx = curIdx + 1;
var pageLen;
var docHeight = getDocHeight();

function getDocHeight() {
    var docHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
    return docHeight;
}

function changePage() {
    prevIdx = curIdx - 1;
    nextIdx = curIdx + 1;
    $(_opt.pages).css({
        transform: 'translateY('+curIdx*-docHeight+'px)'
    })
}

function prev() {
    if(prevIdx < 0) {
        console.log(curIdx,'已经是第一页了');
        return;
    }
    // console.log(curIdx,curIdx-1);
    curIdx--;
    changePage();
}

function next() {
    if(nextIdx >= pageLen) {
        console.log(curIdx,'已经是最后一页了');
        return;
    }
    // console.log(curIdx,curIdx+1);
    curIdx++;
    changePage();
}

const play = {
    init: () => {
        // console.log('play');
        pageLen = $(_opt.page).length;
        // console.log(pageLen);

        $(_opt.prev).on('click', () => {
            prev();
        });
        $(_opt.next).on('click', () => {
            next();
        });
        $(window).on('resize', () => {
            docHeight = getDocHeight();
        })
    }
}
module.exports = play;