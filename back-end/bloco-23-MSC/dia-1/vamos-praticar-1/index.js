const express = require('express');

const Authors = require('./models/Authors');
const Books = require('./models/Books');

const app = express();

app.get('/authors', async (_req, res) => {
	const authors = await Authors.getAll();

	res.status(200).json(authors);
});

app.get('/books', async (req, res) => {
	const { author_id } = req.query;

	const books = author_id ? await Books.getByAuthorId(author_id) : await Books.getAll(); // se o id for pesquisado,
	// retornar o autor que tem o id buscado no postman, se não, entrega todos os livros.
	res.status(200).json(books);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});
