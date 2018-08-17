
//var ByteOrder = true; // 小端
var ByteOrder = false; // 大端
var SrcId = 0x9999;
var HEAD_SIZE = 28;

var CusBase64 = require('base64.js');

var GetUnbindMsg = function (strVehicleSn) {
 // var Bytes = new Uint8Array(strVehicleSn.length)
//  return String.fromCharCode.apply(null, new Uint16Array(buf))

  var jsStr = '';
  jsStr += '{';
  jsStr += '"st":7,"pft":5,"manuser_id":1,"vehicle_sn":"';
  jsStr += CusBase64.native2ascii(strVehicleSn);
 // jsStr += decodeURIComponent(escape(strVehicleSn)); // 仅英文
  jsStr += '"}';

  return jsStr;
}


// ArrayBuffer转为字符串，参数为ArrayBuffer对象
function ab2str(buf) {
 // return String.fromCharCode.apply(null, new Uint16Array(buf)); // 不含中文 ok
  return String.fromCharCode.apply(null, buf); // 不含中文 ok
}

// 字符串转为ArrayBuffer对象，参数为字符串
function str2ab(str) {
  var buf = new ArrayBuffer(str.length * 2); // 每个字符占用2个字节
  var bufView = new Uint16Array(buf);
  for (var i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}

function str2Uint16(pos, binData) {
  var num = 0;
  num |= binData.charCodeAt(pos) << 8;
  num |= binData.charCodeAt(pos + 1);
  return num;
}

function str2Uint32(pos, binData) {
  var num = 0;
  num |= binData.charCodeAt(pos) << 24;
  num |= binData.charCodeAt(pos + 1) << 16;
  num |= binData.charCodeAt(pos + 2) << 8;
  num |= binData.charCodeAt(pos + 3);
  return num;
}

function ShowBytes(str) {
  for (var i = 0; i < str.length; ++i) {
    console.info(str.charCodeAt(i));
  }
}

var UnPack = function(data) {
 // ShowBytes(data);
  var pos = 0;
  var Version = str2Uint16(pos, data); // version = 5
  pos += 2;

  var MsgId = str2Uint16(pos, data); // MsgId
  pos += 2;

  var DsgId = str2Uint32(pos, data);
  pos += 4;
  var SrcId = str2Uint32(pos, data);
  pos += 4;

  var Seq = str2Uint32(pos, data);
  pos += 4;
  var Status = str2Uint32(pos, data);
  pos += 4;

  var Type = str2Uint16(pos, data);
  pos += 2;
  var CharCode = str2Uint16(pos, data);
  pos += 2;

  var JsonSize = str2Uint32(pos, data);
  pos += 4;

  console.log('ver:', Version.toString(16)
    , 'MsgId:', MsgId.toString(16)
    , 'DstId:', DsgId.toString(16)
    , 'SrcId:', SrcId.toString(16)
    , 'Seq:', Seq.toString(16)
    , 'Status:', Status.toString(16)
    , 'Type:', Type.toString(16)
    , 'CharCode:', CharCode.toString(16)
    , 'JsonSize:', JsonSize.toString(16));

  if (JsonSize < 1)
    return;

  var jsonStr = data.slice(28);
 // console.log('json size:', jsonStr.length, 'json string:', jsonStr);
  jsonStr = jsonStr.replace(" ", "");
  jsonStr = jsonStr.replace("/\ufeff/g", "");

 // jsonStr = CusBase64.ascii2native(jsonStr);
  var jsObj = JSON.parse(jsonStr);
 // console.log('json to string:', JSON.stringify(jsObj))

  console.log('jsObj:', jsObj)
  console.log(CusBase64.CusBASE64.encoder(jsObj.cards[0].pct_name))
  console.info(CusBase64.ascii2native(jsObj.cards[0].pct_name))
  console.log(CusBase64.CusBASE64.encoder(jsObj.cards[0].pct_name))
 // console.log(jsObj.notify_state, jsObj.pay_id, jsObj.pay_source)
}

var GetByteArray = function (MsgId, jsonStr) {
  var JsonLength = jsonStr.length;
  var ByteArray = new Uint8Array(28 + JsonLength);
  var index = 0;

   // version
  ByteArray[index++] = 0;
  ByteArray[index++] = 5;

 // MsgId
  ByteArray[index++] = MsgId >>> 8;
  ByteArray[index++] = MsgId & 0x00FF;
  
   // DsgId
  ByteArray[index++] = 0;
  ByteArray[index++] = 0;
  ByteArray[index++] = 0;
  ByteArray[index++] = 80;

 // SrcId
  ByteArray[index++] = 0;
  ByteArray[index++] = 0;
  ByteArray[index++] = 0;
  ByteArray[index++] = 90;

// seq
  ByteArray[index++] = 0;
  ByteArray[index++] = 0; 
  ByteArray[index++] = 0;
  ByteArray[index++] = 0;
  
  ByteArray[index++] = 0; // status
  ByteArray[index++] = 0;
  ByteArray[index++] = 0;
  ByteArray[index++] = 0;

// type
  ByteArray[index++] = 0;
  ByteArray[index++] = 1; // 1:req 2:rsp
  
  ByteArray[index++] = 0; // char_code
  ByteArray[index++] = 0;

  // json size
  
  ByteArray[index++] = JsonLength >>> 24;
  ByteArray[index++] = JsonLength >>> 16;
  ByteArray[index++] = JsonLength >>> 8;
  ByteArray[index++] = JsonLength & 0x000000FF;

  var EndPos = 28 + JsonLength;
  var i = 0;
  for (; index < EndPos; ++index)
    ByteArray[index] = jsonStr.charCodeAt(i++);

  return ab2str(ByteArray); // ok
}

module.exports.UnPack = UnPack;
module.exports.GetByteArray = GetByteArray;
module.exports.GetUnbindMsg = GetUnbindMsg;