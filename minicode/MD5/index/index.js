const app = getApp()

var MD5 = require('../MD5.js')
Page({
  data: {
    inputStr: ''
  },
  bindInput: function(res) {
    this.setData({
      inputStr: res.detail.value
    })
  },
  bindOk: function() {
    var str = this.data.inputStr;
    console.log(str);
    var result = MD5.hexMD5(this.data.inputStr);
    console.log(result.toUpperCase());
  }
})
