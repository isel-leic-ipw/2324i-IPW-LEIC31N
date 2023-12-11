
//npm install elasticsearch

// * sugestão nome seca-elastic-mem.js. exemplo  módulo responsável por interagir com o ElasticSearch.


const { Client } = require('@elastic/elasticsearch');

const elasticClient = new Client({ node: 'http://localhost:9200' });

async function storeData(index, document) {
  try {
    const response = await elasticClient.index({
      index: index,
      body: document,
    });

    console.log(`Doc armazenado com sucesso. ID: ${response.body._id}`);
  } catch (error) {
    console.error('Erro ao armazenar o doc no ElasticSearch:', error);
  }
}

module.exports = {
  storeData,
};




//////////////////////////////
// altere a importação do módulo seca-data-mem.js pelo novo módulo seca-elastic-mem.js onde for necessário.

// const dataMem = require('./data-mem.js');
// Novo módulo:
const elasticMem = require('./elastic-mem.js');

// Exemplo simples para armazenar dados
const indexName = 'nome_do_indice';
const dataToStore = { /* dados aqui */ };

elasticMem.storeData(indexName, dataToStore);