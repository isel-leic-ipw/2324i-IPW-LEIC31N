 // Utilizar o cliente oficial chamado @elastic/elasticsearch. 
// Exemplo básico de operações CRUD (Create, Read, Update, Delete) com o Elasticsearch - cliente:

// bash   npm install @elastic/elasticsearch

//Exemplo Interação cliente com o Elasticsearch

const { Client } = require('@elastic/elasticsearch');

const elasticClient = new Client({ node: 'http://localhost:9200' });

async function createDocument(index, document) {
  try {
    const response = await elasticClient.index({
      index: index,
      body: document,
    });

    console.log(`Doc criado com sucesso. ID: ${response.body._id}`);
  } catch (error) {
    console.error('Erro ao criar o doc:', error);
  }
}

async function getDocumentById(index, id) {
  try {
    const response = await elasticClient.get({
      index: index,
      id: id,
    });

    console.log('Doc obtido:', response.body);
  } catch (error) {
    console.error('Erro ao obter o doc:', error);
  }
}

async function updateDocument(index, id, updatedDocument) {
  try {
    const response = await elasticClient.update({
      index: index,
      id: id,
      body: {
        doc: updatedDocument,
      },
    });

    console.log(`Doc atualizado com sucesso. Nova versão: ${response.body._version}`);
  } catch (error) {
    console.error('Erro ao atualizar o doc:', error);
  }
}

async function deleteDocument(index, id) {
  try {
    const response = await elasticClient.delete({
      index: index,
      id: id,
    });

    console.log(`Doc excluído com sucesso. ID: ${response.body._id}`);
  } catch (error) {
    console.error('Erro ao excluir o doc:', error);
  }
}

const indexName = 'seu_indice';
const documentId = '1';

const documentToCreate = { /* Coloque os dados  */ };
const updatedDocument = { /*  Dados atualizados */ };

createDocument(indexName, documentToCreate);
getDocumentById(indexName, documentId);
updateDocument(indexName, documentId, updatedDocument);
deleteDocument(indexName, documentId);
