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
