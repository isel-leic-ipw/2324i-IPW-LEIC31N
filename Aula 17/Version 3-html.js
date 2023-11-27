<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gerenciamento de Biblioteca</title>
    <style>
        /* Estilos CSS permanecem os mesmos */
    </style>
</head>
<body>
    <h1>Gerenciamento de Biblioteca</h1>

    <form id="addBookForm">
        <label for="title">Título:</label>
        <input type="text" id="title" required>
        <br>
        <label for="author">Autor:</label>
        <input type="text" id="author" required>
        <br>
        <label for="publicationYear">Ano de Publicação:</label>
        <input type="number" id="publicationYear" required>
        <br>
        <button type="button" onclick="addBook()">Adicionar Livro</button>
    </form>

    <div id="booksContainer"></div>

    <form id="updateBookForm" style="display: none;">
        <input type="hidden" id="updateBookId">
        <label for="updateTitle">Título:</label>
        <input type="text" id="updateTitle" required>
        <br>
        <label for="updateAuthor">Autor:</label>
        <input type="text" id="updateAuthor" required>
        <br>
        <label for="updatePublicationYear">Ano de Publicação:</label>
        <input type="number" id="updatePublicationYear" required>
        <br>
        <button type="button" onclick="updateBook()">Atualizar Livro</button>
        <button type="button" onclick="cancelUpdate()">Cancelar</button>
    </form>

    <script>
        async function addBook() {
            // Implementação permanece a mesma
 
