//# Tasks Application
//## Version 1
//- All CRUD operations with Token authentication, with all the layers (API, Services & Data) and all data in memory
//## Version 2
//- Added Error handling. Data in Database (ElasticSearch)


const { Client } = require('@elastic/elasticsearch');

// Configurando o cliente Elasticsearch
const elasticClient = new Client({ node: 'http://localhost:9200' }); // Atualize com a URL do seu servidor Elasticsearch

// Criando um índice chamado 'books' no Elasticsearch
async function createIndex() {
    await elasticClient.indices.create({
        index: 'books',
        body: {
            mappings: {
                properties: {
                    title: { type: 'text' },
                    author: { type: 'text' },
                    publicationYear: { type: 'integer' }
                }
            }
        }
    });

    console.log('Índice "books" criado com sucesso.');
}

// Adicionando um novo livro ao Elasticsearch
async function addBook(book) {
    const { body } = await elasticClient.index({
        index: 'books',
        body: book
    });

    console.log(`Livro adicionado: ${JSON.stringify(body)}`);
}

// Obtendo todos os livros do Elasticsearch
async function getAllBooks() {
    const { body } = await elasticClient.search({
        index: 'books',
        body: { query: { match_all: {} } }
    });

    console.log('Livros:', body.hits.hits.map(hit => hit._source));
}

// Atualizando um livro no Elasticsearch
async function updateBook(bookId, updatedBook) {
    const { body } = await elasticClient.update({
        index: 'books',
        id: bookId,
        body: { doc: updatedBook }
    });

    console.log(`Livro atualizado: ${JSON.stringify(body)}`);
}

// Excluindo um livro do Elasticsearch
async function deleteBook(bookId) {
    const { body } = await elasticClient.delete({
        index: 'books',
        id: bookId
    });

    console.log(`Livro excluído: ${JSON.stringify(body)}`);
}

// Função principal
async function main() {
    // Criar índice
    await createIndex();

    // Adicionar alguns livros
    const book1 = { title: 'Book 1', author: 'Author 1', publicationYear: 2020 };
    const book2 = { title: 'Book 2', author: 'Author 2', publicationYear: 2021 };

    await addBook(book1);
    await addBook(book2);

    // Obter e exibir todos os livros
    await getAllBooks();

    // Atualizar o segundo livro
    const updatedBook2 = { title: 'Updated Book 2', author: 'Updated Author 2', publicationYear: 2022 };
    await updateBook(2, updatedBook2);

    // Obter e exibir todos os livros após a atualização
    await getAllBooks();

    // Excluir o primeiro livro
    await deleteBook(1);

    // Obter e exibir todos os livros após a exclusão
    await getAllBooks();
}

// Executar a função principal
main().catch(error => console.error('Erro:', error));
