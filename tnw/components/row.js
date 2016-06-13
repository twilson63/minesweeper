// Row Component
const h = require('hyperscript')
const { div } = require('hyperscript-helpers')(h)
// app component
module.exports = {
  bindings: {
    row: '<'
  },
  template: template().outerHTML
}

function template () {
  return div('.row', [ Cell() ])
}

function Cell () {
  return h('cell', {
    'data-ng-repeat': 'cell in $ctrl.row',
    'data-cell': 'cell'
  })
}
