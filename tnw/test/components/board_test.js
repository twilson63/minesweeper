var test = require('tape')

var { template } = require('../../components/board')

var output = '<div class="container"><row data-ng-repeat="row in $ctrl.grid" data-row="row"></row></div>'

test('board template', t => {
  t.equals(output, template,
    'should be successful'
  )
  t.end()
})
