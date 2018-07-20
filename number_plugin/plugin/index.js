var data = require('./api/data.js')
var algorithm = require('./api/algorithm.js')

module.exports = {
  getData: data.getData,
  setData: data.setData,
  min: algorithm.min,
  max: algorithm.max
}