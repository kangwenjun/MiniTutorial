const app = getApp()

Page({
  data: {
    key:'',
    value:''
  },
  bindKeyUpdate: function(res) {
    this.setData({
      key: res.detail.value
    })
  },
  bindValueUpdate: function(res) {
    this.setData({
      value: res.detail.value
    })
  },
  bindSetStorage: function(){
    var tmpKey = this.data.key
    var tmpValue = this.data.value
    wx.setStorage({
      key: tmpKey,
      data: tmpValue,
      success: function(res) {
        console.log('异步写缓存成功.key:', tmpKey, 'value:', tmpValue)
      }
    })
  },
  bindSetStorageSync: function() {
    var tmpKey = this.data.key
    var tmpValue = this.data.value
    try {
      wx.setStorageSync(tmpKey, tmpValue)
    } catch(e) {
      console.log(e)
    }
  },
  bindGetStorage: function() {
    var tmpKey = this.data.key
    wx.getStorage({
      key: tmpKey,
      success: function(res) {
        console.log('异步读缓存成功.key:', tmpKey, 'value:', res.data)
      }
    })
  },
  bindGetStorageSync: function() {
    var tmpKey = this.data.key
    try {
      var value = wx.getStorageSync(tmpKey)
      console.log('同步读缓存的结果.key:', tmpKey, 'value:', value)
    } catch(e) {
      console.log(e)
    }
  },
  bindGetStorageInfo: function() {
    wx.getStorageInfo({
      success: function(res) {
        console.log('当前storage中所有的key:', res.keys)
        console.log('当前占用的空间大小, 单位kb:', res.currentSize)
        console.log('限制的空间大小，单位kb:', res.limitSize)
      },
    })
  },
  bindGetStorageInfoSync: function() {
    try {
      var res = wx.getStorageInfoSync()
      console.log('当前storage中所有的key:', res.keys)
      console.log('当前占用的空间大小, 单位kb:', res.currentSize)
      console.log('限制的空间大小，单位kb:', res.limitSize)
    } catch(e) {
      console.log(e)
    }
  },
  bindRemoveStorage: function() {
    var tmpKey = this.data.key
    wx.removeStorage({
      key: tmpKey,
      success: function(res) {
        console.log('异步移除成功.key:', tmpKey)
      },
    })
  },
  bindRemoveStorageSync: function() {
    var tmpKey = this.data.key
    try {
      wx.removeStorageSync(tmpKey)
    } catch(e) {
      console.log(e)
    }
  },
  bindClearStorage: function() {
    wx.clearStorage();
  },
  bindClearStorageSync: function() {
    try {
      wx.clearStorageSync()
    } catch(e) {
      console.log(e)
    }
  }
})
