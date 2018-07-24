const app = getApp()

Page({
  data: {
    checkboxItems: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本', checked: 'true' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ],
    radioItems: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ],
    hidden: false
  },
  checkboxChange: function (e) {
    var checked = e.detail.value
    console.log(e)
    var dstData = {} // 自定义map数据
    for (var i = 0; i < this.data.checkboxItems.length; i++) {
      if (checked.indexOf(this.data.checkboxItems[i].name) !== -1) {
        dstData['checkboxItems[' + i + '].checked'] = true // 相关数据
      } else {
        dstData['checkboxItems[' + i + '].checked'] = false
      }
    }
    this.setData(dstData) // 接受带相关键值对的map数据
  },
  radioChange: function (e) { // radio只传一个值
    var checked = e.detail.value
    console.log(e)
    var changed = {}
    for (var i = 0; i < this.data.radioItems.length; i++) {
      if (checked.indexOf(this.data.radioItems[i].name) !== -1) {
        changed['radioItems[' + i + '].checked'] = true
      } else {
        changed['radioItems[' + i + '].checked'] = false
      }
    }
    this.setData(changed)
  }
})