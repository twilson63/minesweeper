var test = require('tape')

var { template, controller } = require('../../components/app')
var { last } = require('ramda')

var output = '<div><nav data-title="$ctrl.title"></nav><board data-grid="$ctrl.grid"></board></div>'

test('app template', t => {
  t.equals(output, template,
    'should be successful'
  )
  t.end()
})

var msSvcMock = {
  createBoard: _ => [[1,2,4]],
  update: _ => true
}

test('app controller', t => {
  var c = last(controller)
  var ctrl = { title: 'Foo'}

  c.apply(ctrl, [msSvcMock])
  t.ok(ctrl.grid, 'should set grid')
  t.deepEquals(ctrl.grid, [[1,2,4]], 'should call createBoard')
  t.end()
})
