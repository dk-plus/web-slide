{{each slides as item index}}
<div class="slide" id="page-{{index+1}}">
  <h1>{{item.title}}</h1>
  <p>{{item.content}}</p>
</div>
{{/each}}