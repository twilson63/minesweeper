var test = require('tape');

test('Index should return <h1>Hello Jack Russell Software</h1>', function(t) {
  t.equals(index(), '<h1>Hello Jack Russell Software</h1>');
  t.end();
});

test('Index should NOT return <h1>Hello World</h1>', function(t) {
  t.notEquals(index(), '<h1>Hello World</h1>');
  t.end();
});
