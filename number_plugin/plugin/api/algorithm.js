
function min(a, b) {
  console.log(a, b)
  if (a < b)
    return a;

  return b;
}

function max(a, b) {
  if (a > b) 
    return a;

  return b;
}

module.exports = {
  min: min,
  max: max
}