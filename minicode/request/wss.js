
var Open = function (url, OpenedHandler, ClosedHandler, ErrorHandler, MsgHandler) {
  wx.onSocketOpen(OpenedHandler);
  wx.onSocketClose(ClosedHandler);
  wx.onSocketError(ErrorHandler);
  wx.onSocketMessage(MsgHandler);

  wx.connectSocket({
    url: url
  });

}; // function Open

var Close = function() {
  wx.closeSocket();
};

var Send = function(msg) {
  wx.sendSocketMessage({
    data: msg
  });
};

module.exports.Open = Open;
module.exports.Close = Close;
module.exports.Send = Send;