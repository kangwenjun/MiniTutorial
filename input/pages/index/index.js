const app = getApp()
const g_strRegExp = /11/g // 匹配模式 可以用变量存储

Page({
  data: {
    focus: false,
    inputValue: "",
    confirmValue: ''
  },
  bindButtonTap: function () {
    this.setData({
      focus: true
    })
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  bindReplaceInput: function (e) {
    console.log(g_strRegExp)
    var value = e.detail.value; // 输入框的字符串
    var pos = e.detail.cursor;
    console.log(pos) // 字符串的下标
    if (pos != -1) {
      //光标在中间
      var left = e.detail.value.slice(0, pos); // 起始位置到光标的字符转储到新的slice
      //计算光标的位置
      pos = left.replace(g_strRegExp, '2').length;
    }

    //直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    return {
      value: value.replace(g_strRegExp, '2'), // 返回给输入框的字符串
      // value: "kang",
      // cursor: 0,
      cursor: pos // 返回给输入框的光标位置
    }

    //或者直接返回字符串,光标在最后边
    //return value.replace(/11/g,'2'),
  },
  bindConfirm: function (e) {
    // console.log(e.detail);
    this.setData({
      confirmValue: e.detail.value
    })
  }
})
