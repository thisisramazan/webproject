const express = require('express');
const app = express();
const port = 8000;
app.get('/products', (req, res) => {
  res.send('List of products will be here');
});
app.get('/products/:id', (req, res) => {
  res.send('A single product by id will be here');
});
app.post('/products', (req, res) => {
  res.send('Will create new product here');
});
app.listen(port, () => {
  console.log(`Server started on ${port} port!`);
});
