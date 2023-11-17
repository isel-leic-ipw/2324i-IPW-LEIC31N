const express = require('express');
const app = express();
const porta = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Olá, Turma IPW 2023!');
});

app.listen(porta, () => {
  console.log(`Server Gate ${porta}`);
});



/*npm init -y
npm install express*/

/*node index.js*/