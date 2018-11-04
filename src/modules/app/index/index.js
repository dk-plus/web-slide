const Render = require('./render.js');
const Utils = require('../../lib/utils.js');

!(() => {
  console.log(`%cweb-slide %c v3.0.0 %c just code it!`, `
        color: #fff;
        background: #314659;
        border-radius: 20px 0 0 20px;
        padding: 5px 0px 5px 10px;
      `, `
        color: #fff;
        background: #108ee9;
        border-radius: 0 20px 20px 0;
        padding: 5px 5px 5px 0px;
      `,``);

  Render.init();

})();