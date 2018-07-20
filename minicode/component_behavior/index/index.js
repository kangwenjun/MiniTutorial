const app = getApp()

Page({
  formSubmit: function(e) {
    console.info('表单提交携带数据', e.detail.value)
    wx.request({
        url: 'http://localhost/test.php?q=1',
        success: function (res) {
            console.log(res.data)
        }
    })
  },
    voteChange: function(e) {
        var tmpUrl = 'http://localhost/test.php?q=0';
        if (true == e.detail.value)
            tmpUrl = 'http://localhost/test.php?q=1';

        wx.request({
            url: tmpUrl,
            success: function (res) {
                console.log(res.data)
            }
        })
    }
})
