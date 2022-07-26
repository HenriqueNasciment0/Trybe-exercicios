const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', async (req, res) => {
  const products = await ProductModel.getAll();

  res.status(200).json(products);
});

router.get('/:id', async (req, res) => {
  const product = await ProductModel.getById(req.params.id);

  if (!product) {
    return res.status(404).json({ message: "Produto não encontrado."})
  }

  return res.status(200).json(product);
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;

  if (!name || !brand) {
    return res.status(404).json({ message: "Informações inválidas."})
  }

  const newProduct = await ProductModel.add(name, brand);

  return res.status(200).json(newProduct);
});

router.delete('/:id', async (req, res) => {

  const products = await ProductModel.exclude(req.params.id);

  if (!products) {
    return res.status(200).json({ message: "Produto não encontrado."})
  }

  await ProductModel.exclude(req.params.id);

  return res.status(204).json();
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;

  if (!name || !brand) {
    return res.status(400).json({ message: "Informações Inválidas."})
  }

  const products = await ProductModel.getById(req.params.id);

  if (!products) {
    return res.status(404).json({ message: "Produto não encontrado."})
  }

  await ProductModel.update(req.params.id, name, brand);

  return res.status(200).json({ name, brand });
});

module.exports = router;
