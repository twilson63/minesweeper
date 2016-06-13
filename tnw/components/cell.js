// cell component
const h = require('hyperscript')
const { div } = require('hyperscript-helpers')(h)
// app component
module.exports = {
  bindings: {
    cell: '<'
  },
  template: template().outerHTML ,
  controller: ['msSvc', controller]
}

function controller(msSvc) {
  // do nothing
  var $ctrl = this
  $ctrl.openCell = _ => msSvc.openCell($ctrl.cell)

}

function template () {
  return div('.col-xs-1', {
    'data-ng-click': '$ctrl.openCell()'
  }, [
    CellState()
  ])
}

function CellState () {
  return '{{$ctrl.cell | cellstate }}'
}
