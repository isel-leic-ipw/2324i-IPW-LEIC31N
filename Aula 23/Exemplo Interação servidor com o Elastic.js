// Exemplo Interação servidor com o Elasticsearch

// Install dependencias

npm init -y
npm install express @elastic/elasticsearch

// Apos implementado código
  Rodar o servidor: node server.js


const express = require('express');
const { Client } = require('@elastic/elasticsearch');

const app = express();
const port = 3000;

const elasticClient = new Client({ node: 'http://localhost:9200' });
const indexName = 'seu_indice';

app.use(express.json());

app.post('/doc', async (req, res) => {
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

app.put('/documento/:id', async (req, res) => {
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
    res.status(500).json({ error: 'Erro ao atualizar doc' });
  }
});

app.delete('/documento/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await elasticClient.delete({
      index: indexName,
      id: id,
    });

    res.json({ message: 'Doc excluído', id: response.body._id });
  } catch (error) {
    console.error('Erro ao excluir doc:', error);
    res.status(500).json({ error: 'Erro ao excluir doc' });
  }
});

app.listen(port, () => {
  console.log(`Server executa em http://localhost:${port}`);
});




