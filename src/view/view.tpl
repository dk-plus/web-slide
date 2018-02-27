<h1 data-value={{data.title}}>{{data.title}}</h1>
<div data-value={{data.content}}>
  {{each data.content.msg as item i}}
  <p data-value={{item}}>{{item}}</p>
  {{/each}}
</div>