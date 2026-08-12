const express = require('express');
const router = express.Router();
// Route pour obtenir tous les produits (GET /products)
router.get('/', (req, res) => {
    res.json([
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Mouse', price: 29 }
    ]);
});
// Route pour obtenir un produit par son ID (GET /products/:id)
router.get('/:id', (req, res) => {
    const productId = Number(req.params.id);
    res.json({ id: productId, name: 'Sample Product' });
});
// Route pour ajouter un nouveau produit (POST /products)
router.post('/', (req, res) => {
    const { name, price } = req.body;
    res.json({ message: 'Product created', product: { name, price } });
});
module.exports = router;