var pageData = {}

/*
for (var i = 1; i < 5; ++i) {
  ( // 匿名函数
    function (index) {
      pageData['slider' + index + 'change'] = function (event) {
        console.log('slider' + 'index' + '发生 change 事件，携带值为', event.detail.value)
      }
    } 
  )(i);  // 匿名函数调用
}
*/
var index = 0;
for (let index = 1; index < 5; ++index) {
  var strFundName = 'slider' + index + 'change';
  pageData[strFundName] = function (event) {
    console.log(event)
    console.log('slider' + 'index' + '发生 change 事件，携带值为', event.detail.value)
  }
}

pageData['data'] = {value: 0};
pageData['bindAddStep'] = function (e) {
  console.log(e)
  var pages = getCurrentPages();
  var currpage = pages[pages.length - 1];
  currpage.setData({
    value: event.detail.value
  })
}

Page(pageData) // 注册Page