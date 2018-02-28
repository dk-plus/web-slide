{{each data as item index}}
<div class="page" data-page={{index}}>
  {{if item.title}}
    <h2 class="title">{{item.title}}</h2>
  {{/if}}

  {{if item.sub_title}}
    <h3 class="sub-title">{{item.sub_title}}</h3>
  {{/if}}

  {{if item.detail}}
    {{each item.detail as detail}}
      <p class="detail">{{detail}}</p>
    {{/each}}
  {{/if}}

  {{if item.ol}}
    <ol class="ol">
      {{each item.ol as ol}}
        <li>{{ol}}</li>
      {{/each}}
    </ol>
  {{/if}}

  {{if item.ul}}
    <ul class="ul">
      {{each item.ul as ul}}
        <li>{{ul}}</li>
      {{/each}}
    </ul>
  {{/if}}

  {{if item.gallery}}
    <div class="gallery">
    {{each item.gallery as gallery}}
      <img src="{{gallery.img_url}}" alt="{{gallery.data_img}}">
    {{/each}}
    </div>
  {{/if}}

</div>
{{/each}}