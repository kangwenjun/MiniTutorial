const app = getApp()
function StringBuffer() {
  this._strings_ = new Array();

  if (typeof StringBuffer._initialized_ == 'undefined') {
    StringBuffer.prototype.append = function (str) {
      this._strings_.push(str);
    }

    StringBuffer.prototype.toString = function () {
      return this._strings_.join("");
    }
  }
}

Page({
  data: {
    tips: ""
  },
  onLoad: function () {
    var sb = new StringBuffer();
    sb.append("Hellow ");
    sb.append("world!");
    this.setData({
      tips: sb.toString()
    })
  },
})
