const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => {
res.send('Meu primeiro segundo deploy com Heroku')
})

app.listen(PORT, () => { console.log(`Ouvindo na minha porta ${PORT} e na porta que o Heroku quiser.`)})
