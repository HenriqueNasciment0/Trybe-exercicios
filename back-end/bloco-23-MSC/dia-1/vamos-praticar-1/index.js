const express = require('express');

const Authors = require('./models/Authors');
const Books = require('./models/Books');

const app = express();

app.get('/authors', async (_req, res) => {
	const authors = await Authors.getAll();

	res.status(200).json(authors);
});

app.get('/books', async (req, res) => {
	const books = await Books.getAll();
	
	res.status(200).json(books);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});
