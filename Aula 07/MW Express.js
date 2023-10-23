const express = require('express');

const app = express();

// Middleware #1
app.get('/', (req, res, next) => {
  res.locals.hello = 'Hello IPW';
  next();
}); 

// Middleware #2
app.get('/', (req, res) => {
  return res.send(res.locals.hello);
});

// Middleware #3
app.get('/', (req, res) => {
  res.send('Não será chamado');
});

app.listen(3000);

/*Execute o código com nodejs index.js e acesse htpp://localhost:3000 */




