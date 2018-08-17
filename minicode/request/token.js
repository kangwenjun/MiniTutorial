
var g_LastTokenTime = 0;
var g_TokenInterTime = 0;
var g_Token = '';

var CurTime = function() {
  return Math.floor(Date.now() / 1000);
}

var GetToken = function() {
  if (g_LastTokenTime < 1
    || (g_LastTokenTime + g_TokenInterTime * 0.95) < CurTime()){
      wx.request({
        url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxfdacddb4b6024708&secret=5007aeb5c958387f45a59fbd86b4dbd6',
        method: 'POST',
        success: function (res) {
          console.log(res)
          g_Token = res.data.access_token;
          g_TokenInterTime = res.data.expires_in;
          g_LastTokenTime = CurTime();
        }
      })
    }
  
  return g_Token;
}

module.exports.GetToken = GetToken;