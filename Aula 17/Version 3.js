//## Version 3 - HTML + CSS interface with no logon. All data insertion is through web forms (visible or hidden)

const express = require('express');
const { Client } = require('@elastic/elasticsearch');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

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
    return body.hits.hits.map(hit => hit._source);
}

async function updateBook(book) {
    const { body } = await elasticClient.update({
        index: 'books',
        id: book.id,
        body: { doc: book }
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

app.post('/add-book', async (req, res) => {
    const book = req.body;

    try {
        await addBook(book);
        res.status(200).send('Livro adicionado com sucesso!');
    } catch (error) {
        console.error('Erro ao adicionar livro:', error);
        res.status(500).send('Erro ao adicionar livro.');
    }
});

app.post('/update-book', async (req, res) => {
    const book = req.body;

    try {
        await updateBook(book);
        res.status(200).send('Livro atualizado com sucesso!');
    } catch (error) {
        console.error('Erro ao atualizar livro:', error);
        res.status(500).send('Erro ao atualizar livro.');
    }
});

app.post('/delete-book', async (req, res) => {
    const bookId = req.body.id;

    try {
        await deleteBook(bookId);
        res.status(200).send('Livro excluído com sucesso!');
    } catch (error) {
        console.error('Erro ao excluir livro:', error);
        res.status(500).send('Erro ao excluir livro.');
    }
});

app.get('/get-books', async (req, res) => {
    try {
        const books = await getAllBooks();
        res.status(200).json(books);
    } catch (error) {
        console.error('Erro ao obter livros:', error);
        res.status(500).send('Erro ao obter livros.');
    }
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
    createIndex(); // Cria o índice quando o servidor é iniciado
});
