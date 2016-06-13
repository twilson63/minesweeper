var test = require('tape')

var { cellstate } = require('../filters')

test('cellstate closed', t => {
  t.equals('X', cellstate()({state: 0}), 'should return X')
  t.end()
})

test('cellstate open and isMine', t => {
  t.equals('*', cellstate()({state: 1, isMine: true }), 'should return *')
  t.end()
})

test('cellstate open no mine', t => {
  t.equals(' ', cellstate()({
    state: 1, isMine: false, neighbors: 0
  }), 'should return space')
  t.end()
})

test('cellstate open 2 neighbors', t => {
  t.equals('2', cellstate()({
    state: 1, isMine: false, neighbors: 2
  }), 'should return 2')
  t.end()
})
