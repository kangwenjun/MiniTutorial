
Page({
  switch1Checked: function (e) {
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
  },
  switch2Changed: function (e) {
    console.log('switch2 发生 change 事件，携带值为', e.detail.value)
  }
})