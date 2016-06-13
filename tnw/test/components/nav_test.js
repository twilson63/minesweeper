var test = require('tape')

var { template } = require('../../components/nav')

var output = '<header class="navbar navbar-default"><div class="container"><a href="#" class="brand"><i class="fa fa-bomb"></i>{{$ctrl.title}}</a></div></header>'

test('nav template', t => {
  t.equals(output, template,
    'should be successful'
  )
  t.end()
})
