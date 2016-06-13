// minesweeper service
//
// this minesweeper service contains the public API to the minesweeper engine
//
var { createRow, createCell, pickCell, getCell,
  getNeighbors, open } = require('../lib/utils')
var { times, reduce, clone, equals, add, dec } = require('ramda')

module.exports = function () {

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
      listeners[0](clone(board))
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
