
//var ByteOrder = true; // 小端
var ByteOrder = false; // 大端
var SrcId = 0x9999;
var HEAD_SIZE = 28;
var Seq = 1;
var getSeq = function () {
  return Seq + 2;
}

// ArrayBuffer转为字符串，参数为ArrayBuffer对象
function ab2str(buf) {
  return String.fromCharCode.apply(null, new Uint16Array(buf));
}

var GetMsg = function () {
  console.log('GetMsg begin:')
  var pos = 0;
  var Buffer = new ArrayBuffer(512);
  var dv = new DataView(Buffer);

  dv.setUint16(pos, 5, ByteOrder); // version = 5
  pos += 2;

  dv.setUint16(pos, 1351, ByteOrder); // MsgId 0x0547=1351
  pos += 2;

  dv.setUint32(pos, 90, ByteOrder); // DsgId 0x0050=80
  pos += 4;

  dv.setUint32(pos, 144, ByteOrder); // SrcId 0x0090=144
  pos += 4;

  dv.setUint32(pos, 1, ByteOrder); // seq=1
  pos += 4;

  dv.setUint32(pos, 0, ByteOrder); // status
  pos += 4;

  dv.setUint16(pos, 1, ByteOrder); // type
  pos += 2;

  dv.setUint16(pos, 0, ByteOrder); // char_code
  pos += 2;

  dv.setUint32(pos, 0, ByteOrder); // json size
  pos += 4;

  // dv.setString(pos, data, ByteOrder); // json data

  console.log('GetMsg', Buffer.byteLength)
  return Buffer;
}

var GetByteArray = function () {
  var ByteArray = new Uint8Array(28);
  var index = 0;

   // version
  ByteArray[index++] = 5;
  ByteArray[index++] = 0;

 // MsgId
  ByteArray[index++] = 71;
  ByteArray[index++] = 5;
  
   // DsgId
  ByteArray[index++] = 80;
  ByteArray[index++] = 0;
  ByteArray[index++] = 0;
  ByteArray[index++] = 0;

 // SrcId
  ByteArray[index++] = 90;
  ByteArray[index++] = 0;
  ByteArray[index++] = 0;
  ByteArray[index++] = 0;

// seq
  ByteArray[index++] = 1;
  ByteArray[index++] = 0; 
  ByteArray[index++] = 0;
  ByteArray[index++] = 0;
  
  ByteArray[index++] = 0; // status
  ByteArray[index++] = 0;
  ByteArray[index++] = 0;
  ByteArray[index++] = 0;

// type
  ByteArray[index++] = 1;
  ByteArray[index++] = 0; 
  
  ByteArray[index++] = 0; // char_code
  ByteArray[index++] = 0;

  ByteArray[index++] = 0; // json size
  ByteArray[index++] = 0;
  ByteArray[index++] = 0;
  ByteArray[index++] = 0;

  return ByteArray;
}

module.exports.GetMsg = GetMsg;
module.exports.GetByteArray = GetByteArray;