var { createRow, createCell, pickCell, getCell,
  getNeighbors, open } = require('../lib/utils')

module.exports = function (ramda, underscore) {
  var { times, compose, add, lensProp, curry,
    set, dec, reduce, equals } = ramda
  var _ = underscore

  var board = []
  var listeners = []

  // impure
  const createBoard =  (cols, rows, mines) => {
    // build board
    board = times(createRow(cols), rows)
    // add mines
    times(pickCell(rows, cols), mines)
      .map( loc => ({ x: loc.x - 1, y: loc.y - 1}))
      .forEach( mine => {
        var cell = board[mine.y][mine.x]
        cell.isMine = true
      })
    // calc neighbors
    board.map(row => row.map(cell => {
      var n = getNeighbors(cell)
      .map(loc => getCell(board, loc.x, loc.y))
      .map(cell => cell ? add(1,dec(cell.isMine)) : 0)
      cell.neighbors = reduce(add, 0, n)
    }))

    return board
  }

  const openCell = cell => {
    const CLOSED = 0
    console.log(cell)
    if (equals(cell.state, CLOSED)) {
      cell.state = 1
      // open all neighbors
      if (!cell.isMine) {
        getNeighbors(cell)
          .map(loc => getCell(board, loc.x, loc.y))
          .map(open(board))
      }

      // clone to trigger digest
      listeners[0](_.clone(board))
    }
  }

  return {
    createBoard,
    openCell,
    update: function (fn) {
      listeners.push(fn)
    }
  }

}
