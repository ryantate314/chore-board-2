const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/tasks', (req, res) => {
  const tasks = [
    { id: "1", name: 'Product A', lastCompletedDate: '2025-02-20T12:34:00.000'},
    { id: "2", name: 'Product B' }
  ];
  res.json(tasks);
});

app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = { id: productId, name: `Product ${productId}`, price: productId * 10 };
    res.json(product);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});