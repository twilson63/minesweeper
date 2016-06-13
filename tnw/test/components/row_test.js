var test = require('tape')

var { template } = require('../../components/row')

var output = '<div class="row"><cell data-ng-repeat="cell in $ctrl.row" data-cell="cell"></cell></div>'

test('row template', t => {
  t.equals(output, template,
    'should be successful'
  )
  t.end()
})
