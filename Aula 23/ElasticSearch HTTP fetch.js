//Exemplos simples de interação do ElasticSearch com API HTTP diretamente com a função fetch
//ajustar elasticsearchUrl e indexName de acordo com a definição do ElasticSearch. *utilizado rota padrão para indexação (/_doc). 

const elasticsearchUrl = 'http://localhost:9200';
const indexName = 'seu_indice';

async function storeData(document) {
  try {
    const response = await fetch(`${elasticsearchUrl}/${indexName}/_doc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(document),
    });

    const responseBody = await response.json();
    console.log(`Documento armazenado. ID: ${responseBody._id}`);
  } catch (error) {
    console.error('Erro ao armazenar doc no ElasticSearch:', error);
  }
}

// Exemplo simples para armazenar dados
const dataToStore = { /* Coloque dados */ };

storeData(dataToStore);
