const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Bora selar esse conhecimento!")
})

app.listen(3000, () => {
    console.log("App rodando na porta 3000");
})