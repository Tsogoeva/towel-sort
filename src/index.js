
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  const result = matrix.reduce((a, item, i) => {
  if (i % 2 === 0) {
  return [...a, ...item]
  } else {
  const itemRev = item.reverse();
  return [...a, ...itemRev]
  }
}, []);
  return result;
}
