var test = require('tape')

var { createRow, createCell, pickCell, getCell,
  getNeighbors, open } = require('../../lib/utils')

test('createCell', t => {
  var cell = createCell(1,2)
  t.deepEquals(cell, { x: 2, y: 1, isMine: false, state: 0}, 'should be successful')

  t.end()
})

test('createRow', t => {
  var row = createRow(10, 1)
  t.equals(row.length, 10, 'should be equal to 10')
  t.end()
})

test('createRow', t => {
  var row = createRow(10, 1)
  t.equals(row.length, 10, 'should be equal to 10')
  t.end()
})

test('pickCell', t => {
  var mine = pickCell(10, 10, 1)
  t.ok(mine.x)
  t.ok(mine.y)
  t.end()
})

// create tests for
test('getCell', t => {
  t.ok(false, 'TODO: Create Happy Test')
  t.end()
})

test('getNeighbors', t => {
  t.ok(false, 'TODO: Create Happy Test')
  t.end()
})

test('open', t => {
  t.ok(false, 'TODO: Create Happy Test')
  t.end()
})
