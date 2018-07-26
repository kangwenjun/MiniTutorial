const app = getApp()
var wss = require('../wss.js')

Page({
  data: {
    url: 'wss://192.168.1.101:8080',
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

  onLoad: function () {

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
  }

})
