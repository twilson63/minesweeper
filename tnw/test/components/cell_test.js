var test = require('tape')
var { last } = require('ramda')

var { template, controller } = require('../../components/cell')

var output = '<div class="col-xs-1" data-ng-click="$ctrl.openCell()">{{$ctrl.cell | cellstate }}</div>'

test('cell template', t => {
  t.equals(output, template,
    'should be successful'
  )
  t.end()
})

var msSvcMock = {
  openCell: _ => true
}


test('cell controller', t => {
  var c = last(controller)
  var ctrl = { title: 'Foo'}

  c.apply(ctrl, [msSvcMock])
  t.ok(ctrl.openCell, 'should set openCell')
  t.end()
})
