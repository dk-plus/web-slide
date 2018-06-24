{{each slides as item index}}
<div class="slide" id="page-{{index+1}}">
  <h1>{{item.totalTitle}}</h1>
  <h2>{{item.title}}</h2>
  <h3>{{item.subTitle}}</h3>
  {{each item.content as content}}
  <p>{{content}}</p>
  {{/each}}
  <ul>
    {{each item.ul as ulItem}}
    <li>{{ulItem}}</li>
    {{/each}}
  </ul>
  <ol>
    {{each item.ol as olItem}}
    <li>{{olItem}}</li>
    {{/each}}
  </ol>
  <div class="imgs">
    {{each item.imgs as img}}
    <img src={{img}}>
    {{/each}}
  </div>
</div>
{{/each}}