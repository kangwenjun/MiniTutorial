//index.js
//获取应用实例
const app = getApp()
var Height = 0
var Width = 0

Page({
  data: {
    screenHeight: 0,
    screenWidth: 0
  },
onLoad: function () {
  wx.getSystemInfo({
    success: function (res) {
      Height = res.screenHeight
      Width = res.screenWidth
      console.log('onLoad', Height, Height)
    },
  })

 
},
  onReady: function() {
    this.setData({
      screenHeight: Height,
      screenWidth: Width
    })

    console.log('onReady', this.data.screenHeight, this.data.screenWidth)
  }
  
})
