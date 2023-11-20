// Exemplo simples que define a classe Book para representar um livro
class Book {
    constructor(title, author, publicationYear) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
    }

    // Método para exibir informações sobre o livro
    displayInfo() {
        console.log(`${this.title} by ${this.author}, published in ${this.publicationYear}`);
    }
}

// Define a classe Library para representar uma biblioteca
class Library {
    constructor() {
        // Inicializa a propriedade books como um array vazio para armazenar os livros
        this.books = [];
    }

    // Método para adicionar um livro à biblioteca
    addBook(book) {
        try {
            // Verifica se o objeto passado é uma instância da classe Book
            if (!(book instanceof Book)) {
                // Lançando um erro se o objeto não for do tipo Book
                throw new Error("Apenas objetos do tipo Book podem ser adicionados à biblioteca.");
            }

            // Adiciona o livro ao array de livros na biblioteca
            this.books.push(book);
            console.log(`${book.title} adicionado à biblioteca.`);
        } catch (error) {
            // Captura e trata erro, exibe uma mensagem no console
            console.error("Erro ao adicionar livro:", error.message);
        }
    }

    // Método para exibir os livros na biblioteca
    displayBooks() {
        // Verifica se a biblioteca está vazia
        if (this.books.length === 0) {
            console.log("A biblioteca está vazia.");
        } else {
            console.log("Livros na biblioteca:");
            // Verifica cada livro e chama o método displayInfo
            this.books.forEach(book => book.displayInfo());
        }
    }
}

// Exemplo de uso
const library = new Library();

// Cria instâncias da classe Book
const book1 = new Book("Introducao a Progamacao Web", "ACDC", 2023);
const book2 = new Book("JavaScript", "U2", 2022);

// Adiciona os livros à biblioteca
library.addBook(book1);
library.addBook(book2);

// Exibe os livros na biblioteca
library.displayBooks();
