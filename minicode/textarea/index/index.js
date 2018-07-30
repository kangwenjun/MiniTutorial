
Page({
  data: {
    height: 20,
    focus: false,
    value: '不建议在多行文本上对用户的输入进行修改'
  },
  bindButtonTap: function () {
    this.setData({
      focus: true
    })
  },
  bindTextAreaBlur: function (e) {
    console.log(e.detail.value)
  },
  bindFormSubmit: function (e) {
    console.log(e.detail.value.textarea)
  },
  bindlinechange: function (e) {
    console.log('bindlinechange', e.detail)
  }
})