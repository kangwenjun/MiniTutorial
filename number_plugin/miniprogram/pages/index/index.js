var plugin = requirePlugin("numberPlugin") // 在json中配置为numberPlugin
Page({
  onLoad: function() {
  //  plugin.getData()

  // 第三方插件的函数调用
  console.log('ret:', plugin.min('aaa', 'baa')) // 第三方插件中的函数，可以在js中使用
  }
})