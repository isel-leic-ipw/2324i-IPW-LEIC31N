// Exemplo simples Formulário

const express = require('express');
const { Client } = require('@elastic/elasticsearch');

const app = express();
const port = 3000;

const elasticClient = new Client({ node: 'http://localhost:9200' });
const indexName = 'seu_indice';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/form.html');
});

app.post('/criar-documento', async (req, res) => {
  try {
    const { body } = req;
    const response = await elasticClient.index({
      index: indexName,
      body: body,
    });

    res.json({ message: 'Doc criado', id: response.body._id });
  } catch (error) {
    console.error('Erro ao criar doc:', error);
    res.status(500).json({ error: 'Erro ao criar doc' });
  }
});

app.get('/doc/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await elasticClient.get({
      index: indexName,
      id: id,
    });

    res.json(response.body);
  } catch (error) {
    console.error('Erro ao obter doc:', error);
    res.status(500).json({ error: 'Erro ao obter doc' });
  }
});

app.put('/doc/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const response = await elasticClient.update({
      index: indexName,
      id: id,
      body: {
        doc: body,
      },
    });

    res.json({ message: 'Doc atualizado', version: response.body._version });
  } catch (error) {
    console.error('Erro ao atualizar doc:', error);
    res.status(500).json({ error: 'Erro ao atualizar o doc' });
  }
});

app.delete('/doc/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await elasticClient.delete({
      index: indexName,
      id: id,
    });

    res.json({ message: 'Doc excluído', id: response.body._id });
  } catch (error) {
    console.error('Erro ao excluir o doc:', error);
    res.status(500).json({ error: 'Erro ao excluir doc' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});


//criar ou utilizar ficheiro form.html no mesmo diretório do server.js exemplo simples:

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Formulário Elasticsearch</title>
</head>
<body>
  <h1>Formulário Elasticsearch</h1>
  <form action="/criar-doc" method="post">
    <label for="campo1">Campo 1:</label>
    <input type="text" id="campo1" name="campo1" required>
    <br>
    <label for="campo2">Campo 2:</label>
    <input type="text" id="campo2" name="campo2" required>
    <br>
    <button type="submit">Enviar</button>
  </form>
</body>
</html>

