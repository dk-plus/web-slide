
<div class="prev nav-arrow">◀</div>
<div class="nav-index">
  <div class="nav-items">
    {{each nav as item index}}
      <a href="#page-{{index+1}}" class="nav-item" data-page="page-{{index+1}}">
        {{index+1}}
      </a>
    {{/each}}
  </div>
</div>
<div class="next nav-arrow">▶</div>