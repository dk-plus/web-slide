# web-slide

> this is a slider running on the browser.

# Install
1. npm install
2. npm run start && npm run dev

# Usage

## Base Usage

Edit the file: `cd ./src/modules/components/slider/pageForm.js` for the most simple usage:

```javascript
module.exports = [
  {
    content: '<h1 style="text-align:center;font-size:30px">web-slide</h1>',
  },
];
```

`content` can be `<string>` or `<htmlString>`.


## Multiple Usage

The whole usage is just like this sample:

```javascript
module.exports = [
  {
    content: '<div>hello</div>',
    fx: 'slideInRight',
    sec: '1s',
  },
];
```

- content: `<string>` || `<htmlString>` The content of web-slide.
- fx: `<string>` The animation name in [animate.css](https://daneden.github.io/animate.css/).
- sec: `<string>` The animation duration.

## Extended Components

I made some components just like `Fragment`, `List`, `Avater` and so on. you can find them in `./src/modules/components/slider`.

```javascript
module.exports = [
  {
    content: Fragment.render({
      data: [List.render({
        type: 'tag',
        data: [
          'tag1',
          'tag2--1',
          'tag333333',
          'tag4',
        ]
      }), List.render({
        type: 'ol',
        data: [
          'this is first',
          'this is sec',
          'this is third',
        ]
      })]
    }),
    fx: 'slideInRight',
    sec: '1s',
  },
];
```

## What's more?

You can try to edit `./sec/modules/app/index/render.js`

```
const Slider = require('../../components/slider/slider.js');

// Slider.init(); // base init

Slider.init({
  callback: () => {
    // you can do anything after rendering...
  }
}); // callback init
```