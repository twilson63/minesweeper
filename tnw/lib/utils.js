// minesweeper utils
//
// These are simple utility functions that are all pure
//
const daggy = require('daggy')

var Cell = daggy.tagged('x', 'y', 'state', 'isMine')
var { times, compose, add, lensProp, curry,
  set, dec, reduce, equals } = require('ramda')

var random = (start, end) => Math.floor((Math.random() * end) + start)

const createCell = curry((row, col) => Cell(col, row, 0, false))
const createRow = curry((cols, row) => times(createCell(row), cols))
const pickCell = curry((rows, cols, mine) => {
  var y = random(1, rows)
  var x = random(1, cols)
  return {x, y}
})
const getCell = (board, x, y) => {
  if (x >= 0 && y >= 0 && y < board.length && x < board[0].length) {
    return board[y][x]
  } else {
    return null
  }
}
const getNeighbors = cell => [
  { y: cell.y - 1, x: cell.x - 1 },
  { y: cell.y - 1, x: cell.x },
  { y: cell.y - 1, x: cell.x + 1 },
  { y: cell.y, x: cell.x - 1 },
  { y: cell.y, x: cell.x + 1 },
  { y: cell.y + 1, x: cell.x - 1 },
  { y: cell.y + 1, x: cell.x },
  { y: cell.y + 1, x: cell.x + 1 }
]

const open = curry((board, cell) => {
  if (cell && equals(cell.state, 0) && !cell.isMine) {
    cell.state = 1
    if (cell.neighbors === 0) {
      getNeighbors(cell)
        .map(loc => getCell(board, loc.x, loc.y))
        .map(open(board))
    }
  }
})



module.exports = {
  createCell,
  createRow,
  pickCell,
  getCell,
  getNeighbors,
  open
}
