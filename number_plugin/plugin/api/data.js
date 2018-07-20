var data = ''

function getData() {
  console.log(data)
  return data
}

function setData(value) {
  console.log(value)
  data = value
}

module.exports = {
  getData: getData,
  setData: setData
}