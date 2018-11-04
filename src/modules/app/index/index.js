const Render = require('./render.js');
const Utils = require('../../lib/utils.js');

require('ultra-console');

!(() => {
  console.styleText({
    text: 'slider',
    style: `
        color: #fff;
        background: #108ee9;
        border-radius: 20px;
        padding: 5px;
      `
  });

  Render.init();

})();