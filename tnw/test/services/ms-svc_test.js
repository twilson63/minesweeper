var test = require('tape')

var msSvc = require('../../services/ms-svc')
var underscore = require('underscore')
var ramda = require('ramda')

var svc = msSvc(ramda, underscore)

test('minesweeper service', t => {
  t.ok(svc.createBoard, 'should have createBoard')
  t.ok(svc.openCell, 'should have openCell')
  t.ok(svc.update, 'should have update')

  var board = svc.createBoard(10, 10, 15)

  t.equals(board.length, 10, 'should have 10 rows')
  t.equals(board[0].length, 10, 'should have 10 cols')
  svc.update(function (board) {
    t.ok(true, 'update should be called')
  })

  t.equals(board[5][5].state, 0, 'should be closed')
  svc.openCell(board[5][5])
  t.equals(board[5][5].state, 1, 'should be open')
  t.end()
})
