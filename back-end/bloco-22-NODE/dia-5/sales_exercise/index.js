const express = require('express');
const bodyParser = require('body-parser');

const validateProductName = require('./middlewares/validateProductName');
const validateInfo = require('./middlewares/validateInfo');
const validateSaleDate = require('./middlewares/validateSaleDate');
const validateWarranty = require('./middlewares/validateWarranty');

const app = express();

app.use(bodyParser.json());

app.post('/sales', validateProductName, validateInfo, validateSaleDate, validateWarranty, (req, res) => {
    res.status(201).json({ message: 'Sales created successfully' })
})

app.listen(3001, () => {
    console.log('App escutando a porta 3001!')
})