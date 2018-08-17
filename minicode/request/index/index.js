const app = getApp()
var wss = require('../wss.js')
var pack = require('../MsgPacker.js')
var token = require('../token.js')
var g_Scene;

Page({
  data: {
    url: 'wss://192.168.1.101:8080',
    ImageData:'',
    vehicleSn: ''
  },

  onSocketOpen: function (res) {
    console.log('onSocketOpen', res)
  },
  onSocketClose: function (res) {
    console.log('onSocketClose', res)
  },
  onSocketError: function (res) {
    console.log('onSocketError', res)
  },
  onSocketMsg: function (res) {
    console.log('onSocketMsg', res)
  },

  onLoad: function (options) {
    // options 中的 scene 需要使用 decodeURIComponent 才能获取到生成二维码时传入的 scene
    g_Scene = decodeURIComponent(options.scene)
  },
  onReady: function () {
  },
  bindOpenSocket: function () {
    wss.Open(this.data.url, this.onSocketOpen, this.onSocketClose, this.onSocketError, this.onSocketMsg)
  },
  bindCloseSocket: function (res) {
    wss.Close()
  },
  bindSendSocketMessage: function () {
    wss.Send("ping")
  },
  bindSendMsgData: function(res) {
    var jsStr = pack.GetUnbindMsg(this.data.vehicleSn)
    console.log('json string:', jsStr);
    wx.request({
 //     url: 'https://192.168.1.45',
      url: 'https://serv_https_agent.yimiparking.com/',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        console.log('发送成功:', res)
        pack.UnPack(res.data)
      },
      fail: function(res) {
        console.log('发送失败:', res)
      },
      method: 'POST',
      // data: 'ABCDEFGHIJKLMNABCDEFGHIJKLMNABCDEFGHIJKLMN'

      // 0x0547 {'st':7,'pft':5,'manuser_id':1,'vehicle_sn':'微信小程序测试车牌'}
      // data: pack.GetByteArray(0x0547, "{'st':7,'pft':5,'manuser_id':1,'vehicle_sn':'test123456789'}") // ok
     // data: pack.GetByteArray(0x0547, jsStr)

      // 0x013F {'st':7,'pft':5,'pay_id':1}
     // data: pack.GetByteArray(0x013F, "{'st':7,'pft':5,'pay_id':1}")

      // 0x014B {'st':3,'pft':5,'manuser_id':10000132,'park_id':2086,'state':2,'keyword':'E','row_begin':0,'row_count':1}
      data: pack.GetByteArray(0x014B, "{'st':3,'pft':5,'manuser_id':10000132,'park_id':2086,'state':2,'keyword':'E','row_begin':0,'row_count':1}")
    })
  },
  bindQRCode: function (options) {
    var tmpToken = token.GetToken();
    var tmpUrl = 'https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token='
    tmpUrl += tmpToken
    console.log(tmpUrl)

    wx.request({
      url: tmpUrl,
      method: 'POST',
      data: { scene: strVehicleSn},
      success: function(res) {
        wx.setStorage({
          key: strVehicleSn,
      //    data: res.data
    //      data: 'ABCDEFGHIJK'
        })
      }
    })

  },
  bindTest: function() {
    var strVehicleSn = this.data.vehicleSn;
    console.log(strVehicleSn.length, strVehicleSn);
  },
  bindShowImage: function() {  
    var data = wx.getStorageSync(strVehicleSn)

    var base64 = wx.arrayBufferToBase64(data)
    var ImageData = 'data:image/jpeg;base64,' + base64
    wx.getImageInfo({
      src: data,
      success: function(res) {
        console.log(res.path, res.width, res.height)
      },
      complete: function(res) {
        console.log(res)
      }
    })

    this.setData({
      ImageData: 'data:;base64,' + base64
    })
  },
  bindInpubVehicleSn: function(res) {
    this.setData({
      vehicleSn: res.detail.value 
    })
  }
})
