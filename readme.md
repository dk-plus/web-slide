# web-slide
> 这是一个用前端技术实现的网页ppt。
预览效果：[web-slide](https://dk-plus.github.io/web-slide/dist/)

## 简介
> 该ppt可以适配桌面与移动端屏幕，可以进行简单的ppt上下页切换。

## 安装
1. 把整个项目`git clone`下来
2. 命令行运行`npm install`
3. 命令行运行`npm run dev`

## 使用
修改`src/module/data.json`,如下所示：
* title: 每页ppt的标题
* sub_title: 每页ppt的副标题
* detail: 段落
* ol: 有序列表
* ul: 无序列表
* gallery: 图片
添加多页ppt即添加多个对象`{}`。
```json
//一页ppt示例
{
  "title": "dkplus",
  "sub_title": "123",
  "detail": [
    "para1",
    "para2",
    "para3",
    "para4"
  ],
  "ol": [
    "first",
    "second",
    "third",
    "forth"
  ],
  "ul": [
    "first",
    "second",
    "third",
    "forth"
  ],
  "gallery": [
    {
      "img_url": "122",
      "data_img": "11"
    },
    {
      "img_url": "122",
      "data_img": "11"
    },
    {
      "img_url": "122",
      "data_img": "11"
    }
  ]
}
```