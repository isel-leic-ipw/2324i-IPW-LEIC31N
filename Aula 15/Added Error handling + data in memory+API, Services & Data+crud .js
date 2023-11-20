// exemplo simples de autenticacao --> token
class AuthService {
    static authenticate(token) {
        // Simulação: Verificar se o token é válido (Procure bibliotecas com autenticação seguras)
        return token === "secreto";
    }
}

// Define a classe Book para representar um livro
class Book {
    constructor(id, title, author, publicationYear) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
    }

    // Método para exibir informações sobre livro
    displayInfo() {
        console.log(`${this.id}: ${this.title} by ${this.author}, published in ${this.publicationYear}`);
    }
}

// Define a classe BookService para simular uma API de livros
class BookService {
    static booksInApi = [
        new Book(1, "Introdução Programação Web", "ACDC", 2023),
        new Book(2, "JavaScript", "U2", 2022),
        new Book(3, "Frameworks", "METALICA", 2021)
    ];

    // Método para obter todos os livros da API
    static getAllBooks() {
        return this.booksInApi;
    }

    // Método para obter um livro por ID
    static getBookById(id) {
        return this.booksInApi.find(book => book.id === id);
    }

    // Método para adicionar um livro à API
    static addBookToApi(book) {
        this.booksInApi.push(book);
    }

    // Método para atualizar um livro na API
    static updateBookInApi(updatedBook) {
        const index = this.booksInApi.findIndex(book => book.id === updatedBook.id);
        if (index !== -1) {
            this.booksInApi[index] = updatedBook;
        }
    }

    // Método para excluir um livro da API
    static deleteBookFromApi(id) {
        this.booksInApi = this.booksInApi.filter(book => book.id !== id);
    }
}

// Define a classe Library para representar uma biblioteca
class Library {
    constructor() {
        this.books = [];
    }

    // Método para obter todos os livros da API e adicionar à biblioteca
    syncWithApi() {
        this.books = BookService.getAllBooks();
    }

    // Método para autenticar o token antes de realizar operações CRUD
    authenticateToken(token) {
        if (!AuthService.authenticate(token)) {
            throw new Error("Autenticação falhou. Token inválido.");
        }
    }

    // Método para adicionar um livro à API a biblioteca
    addBook(token, book) {
        try {
            this.authenticateToken(token);

            // Adiciona o livro a API
            BookService.addBookToApi(book);

            // Sincroniza biblioteca com API para obter os livros atualizados
            this.syncWithApi();

            console.log(`${book.title} adicionado à biblioteca.`);
        } catch (error) {
            console.error("Erro ao adicionar livro:", error.message);
        }
    }

    // Método para atualizar um livro na API e biblioteca
    updateBook(token, updatedBook) {
        try {
            this.authenticateToken(token);

            // Atualiza o livro na API
            BookService.updateBookInApi(updatedBook);

            // Sincroniza biblioteca com API para obter os livros atualizados
            this.syncWithApi();

            console.log(`${updatedBook.title} atualizado na biblioteca.`);
        } catch (error) {
            console.error("Erro ao atualizar livro:", error.message);
        }
    }

    // Método para excluir um livro da API e biblioteca
    deleteBook(token, bookId) {
        try {
            this.authenticateToken(token);

            // Exclui o livro da API
            BookService.deleteBookFromApi(bookId);

            // Sincroniza a biblioteca com a API para obter os livros atualizados
            this.syncWithApi();

            console.log(`Livro com ID ${bookId} removido da biblioteca.`);
        } catch (error) {
            console.error("Erro ao excluir livro:", error.message);
        }
    }

    // Método para exibir os livros na biblioteca
    displayBooks() {
        if (this.books.length === 0) {
            console.log("A biblioteca está vazia.");
        } else {
            console.log("Livros na biblioteca:");
            this.books.forEach(book => book.displayInfo());
        }
    }
}

// Exemplo de uso
const library = new Library();

// Obter livros da API e sincroniza com a biblioteca
library.syncWithApi();

// Exibe os livros na biblioteca
library.displayBooks();

// Adiciona um novo livro à biblioteca e à API
const token = "secreto";
const newBook = new Book(4, "Nova metodologia em Ensinar IPW", "Author: The Doors", 2024);
library.addBook(token, newBook);

// Exibe os livros atualizados na biblioteca
library.displayBooks();

// Atualiza um livro na biblioteca e na API
const updatedBook = new Book(2, "New Title", "New Author", 2022);
library.updateBook(token, updatedBook);

// Exibe os livros atualizados na biblioteca
library.displayBooks();

// Exclui um livro da biblioteca e da API
const bookIdToDelete = 1;
library.deleteBook(token, bookIdToDelete);

// Exibe os livros atualizados na biblioteca
library.displayBooks();
