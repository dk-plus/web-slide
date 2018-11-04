const List = require('./list/list.js');
const Fragment = require('./fragment/fragment.js');
const Paragraph = require('./paragraph/paragraph.js');
const KeyValueMap = require('./key_value_map/key_value_map.js');
const MixTitle = require('./title/title.js');
const Avater = require('./avater/avater.js');

module.exports = [
  {
    content: '<h1 style="text-align:center;font-size:30px">web-slide</h1>',
    fx: 'slideInLeft',
    // sec: '1s',
  },
  {
    content: Fragment.render({
      data: [List.render({
        type: 'tag',
        data: [
          'FE',
          'dkplus',
          'Man United',
          'Javascript',
        ]
      }), List.render({
        type: 'ol',
        data: [
          'web-slide',
          'lazy-slide',
          'slider',
        ]
      })]
    }),
    fx: 'slideInLeft',
    // sec: '1s',
  },
  {
    content: List.render({
      type: 'tag',
      data: [
        'tag1',
        'tag2',
        'tag3',
        'tag4',
      ]
    }),
    fx: 'slideInRight',
    // sec: '2s',
  },
  {
    content: Paragraph.render({
      // type: 'quote',
      data: [
        'this paragragh 1, this paragragh 1, this paragragh 1, this paragragh 1, this paragragh 1, this paragragh 1, so long paragragh',
        'this paragragh 2',
        'this paragragh 3',
        'this paragragh 4',
      ]
    }),
    fx: 'bounceInUp',
  },
  {
    content: Paragraph.render({
      type: 'quote',
      data: [
        'this quote 1, this quote 1, this quote 1, this quote 1, this quote 1, this quote 1, this quote 1, this quote 1, the long quote too',
        'this quote 2',
        'this quote 3',
        'this quote 4',
      ]
    }),
  },
  {
    content: KeyValueMap.render({
      type: 'text',
      data: [{
        key: 'Project',
        value: 'web-slide'
      }, {
        key: 'Author',
        value: 'dkplus',
      }, {
        key: 'Github',
        value: 'https://github.com/dk-plus/web-slide',
        type: 'link',
      }]
    }),
  },
  {
    content: KeyValueMap.render({
      type: 'progress',
      data: [{
        key: 'HTML',
        value: 50
      }, {
        key: 'JS',
        value: 70,
      }, {
        key: 'CSS',
        value: 20
      }]
    }),
  },
  {
    content: Fragment.render({
      data: [MixTitle.render({
        type: 'default',
        size: 'normal',
        data: {
          type: 'default',
          title: '阿里巴巴',
          extra: '2018-01 - 至今',
        }
      }), MixTitle.render({
        type: 'display-y',
        size: 'normal',
        data: {
          type: 'default',
          title: 'dkplus',
          extra: 'Front-End Engineer',
        }
      }),]
    }),
  },
  {
    content: Fragment.render({
      data: [Avater.render({
        type: 'default',
        imgStyle: 'default',
        width: 300,
        height: 200,
        src: './images/test1.jpg',
        desc: 'default,default,300,200',
      }), Avater.render({
        type: 'circle-border',
        imgStyle: 'height-first',
        width: 100,
        height: 100,
        src: './images/avater.jpg',
        desc: 'circle-border,height-first,100,100',
      }), Avater.render({
        type: 'circle-border',
        imgStyle: 'width-first',
        src: './images/test1.jpg',
        offsetX: 0,
        offsetY: 10,
        desc: 'circle-border,width-first,offsetX0,offsetY10',
      })]
    }),
  },
  {
    content: '<h1 style="text-align:center;font-size:30px">Goodbye</h1>',
  },
];