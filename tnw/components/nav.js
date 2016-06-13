const h = require('hyperscript')
const { header, div, a, i } = require('hyperscript-helpers')(h)
// app component
module.exports = {
  bindings: {
    title: '<'
  },
  template: template().outerHTML ,
  controller: controller
}

function template () {
  return header('.navbar.navbar-default', [
    div('.container', [
      a('.brand', { href: "#"}, [
        i('.fa.fa-bomb'),
        '{{$ctrl.title}}'
      ])
    ])
  ])
}

function controller() {
  // do nothing
  var $ctrl = this
}
