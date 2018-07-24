var initData = 'this is first line\nthis is second line'
var extraLine = [];
Page({
  data: {
    text: initData,
    spaceText: "sapce text"
  },
  add: function (e) {
    extraLine.push('other line')
    this.setData({
      text: initData + '\n' + extraLine.join('_\n')
    })
  },
  remove: function (e) {
    if (extraLine.length > 0) {
      extraLine.pop()
      this.setData({
        text: initData + '\n' + extraLine.join('\n')
      })
    }
  }
})