// * Não é suposto usar qualquer módulo de acesso ao ElasticSearch.
//** Devem usar a função fetch para fazer pedidos HTTP diretamente à sua Web API no projeto

const { Client } = require('@elastic/elasticsearch');

const elasticClient = new Client({ node: 'http://localhost:9200' });

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

async function addBook(book) {
    const { body } = await elasticClient.index({
        index: 'books',
        body: book
    });
    console.log(`Livro adicionado: ${JSON.stringify(body)}`);
}

async function getAllBooks() {
    const { body } = await elasticClient.search({
        index: 'books',
        body: { query: { match_all: {} } }
    });
    console.log('Livros:', body.hits.hits.map(hit => hit._source));
}

async function updateBook(bookId, updatedBook) {
    const { body } = await elasticClient.update({
        index: 'books',
        id: bookId,
        body: { doc: updatedBook }
    });
    console.log(`Livro atualizado: ${JSON.stringify(body)}`);
}

async function deleteBook(bookId) {
    const { body } = await elasticClient.delete({
        index: 'books',
        id: bookId
    });
    console.log(`Livro excluído: ${JSON.stringify(body)}`);
}

async function main() {
    await createIndex();

    const book1 = { title: 'Book 1', author: 'Author 1', publicationYear: 2020 };
    const book2 = { title: 'Book 2', author: 'Author 2', publicationYear: 2021 };

    await addBook(book1);
    await addBook(book2);

    await getAllBooks();

    const updatedBook2 = { title: 'Updated Book 2', author: 'Updated Author 2', publicationYear: 2022 };
    await updateBook(2, updatedBook2);

    await getAllBooks();

    await deleteBook(1);

    await getAllBooks();
}

main().catch(error => console.error('Erro:', error));
