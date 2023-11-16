const elasticsearch = require('elasticsearch');

// Configuração do cliente Elasticsearch
const client = new elasticsearch.Client({
  hosts: ['http://localhost:9200'] // Alterar para o endereço do seu servidor Elasticsearch
});

// Índice e tipo do Elasticsearch
const indexName = 'meuindice';
const typeName = 'meutipo';

// Documento para ser indexado
const document = {
  nome: 'Joao da silva',
  idade: 20,
  cidade: 'Lisbon'
};

// Função para indexar o doc no Elasticsearch
function indexarDocumento() {
  client.index({
    index: indexName,
    type: typeName,
    body: document
  }, (err, response) => {
    if (err) {
      console.error('Erro ao indexar o documento:', err);
    } else {
      console.log('Documento index com sucesso:', response);
    }
  });
}

// Chama função de indexar o documento
indexarDocumento();
