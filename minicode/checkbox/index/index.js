const app = getApp()

Page({
  data: {
    country_items: [
      { name: 'USA', value: '美国', color: 'green'},
      { name: 'CHN', value: '中国', checked: 'true', color: 'red' },
      { name: 'BRA', value: '巴西', color: 'yellow' },
      { name: 'JPN', value: '日本', color: 'black', disabled: 'true' },
      { name: 'ENG', value: '英国', color: 'blue' },
      { name: 'TUR', value: '法国', color: 'orange' },
    ]
  },
  onLoad: function () {
    console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
    console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
})
