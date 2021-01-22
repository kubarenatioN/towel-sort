
// You should implement your task here.

module.exports = towelSort

function towelSort(matrix) {
  if(matrix == undefined || matrix.length == 0){
    return []
  }
  let resultingArr = []
  matrix.forEach((row, index) => {
    if (index % 2 == 1){
      let reversedRow = row.reverse()
      reversedRow.forEach(number => {
        resultingArr.push(number)
      })
    }
    else{
      row.forEach(number => {
        resultingArr.push(number)
      })
    }
  })
  return resultingArr
}