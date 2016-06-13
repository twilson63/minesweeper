/*
  application filters

  cellstate: is a filter that takes a cell and returns the presentation state
  of that cell 
*/
module.exports = {
  cellstate: function () {
    return function (input) {
      if (input.isMine && input.state === 1) {
        return '*'
      } else if (input.state === 1 && input.neighbors === 0) {
        return ' '
      } else if (input.state === 1) {
        return input.neighbors.toString()
      } else {
        return 'X'
      }
    }
  }
}
