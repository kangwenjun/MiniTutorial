const app = getApp()

Page({
  data: {
    nodes: [{
      name: 'div', // name 元素节点必填
      type: 'node', // 元素节点默认，不需要显式填写
      attrs: { // attrs 元素节点选填  全局支持class和style属性，不支持id属性
        class: 'div_class',
        style: 'line-height: 60px; color: red;text-align:center;'
      },
      children: [{ // 子节点列表 选填
        type: 'text', // 表示文本节点，必填
        text: 'Hello&nbsp;World!' // 文本内容，必填
      }]
    }]
  },
  onLoad: function () {
    console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
    console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')
  },
})
