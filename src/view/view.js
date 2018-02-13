var data = require('../module/data');
var tpl = `
<h1 data-value=${data.title}>${data.title}</h1>
<div data-value=${data.content}>
  <p data-value=${data.content.msg}>${data.content.msg}<p>
</div>
`

module.exports = tpl;