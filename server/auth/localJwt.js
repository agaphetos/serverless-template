const jwt = require('jsonwebtoken');

const token = jwt.sign({ foo: 'bar' }, 'shhhhh');

jwt.verify(token, 'arf', (err, lol) => {
  if (err) return console.log(err);
  console.log('Wrong secret');
  console.log(lol);
});

jwt.verify(token, 'shhhhh', (err, lol) => {
  if (err) return console.log(err);
  console.log('Correct secret');
  console.log(lol);
});