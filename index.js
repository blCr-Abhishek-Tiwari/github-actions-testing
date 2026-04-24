const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Sample API routes

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Express App!');
});

// Example API route
app.get('/api/example', (req, res) => {
  res.json({ message: 'This is an example API response.' });
});

// Additional API routes

// User route
app.get('/api/users', (req, res) => {
  res.json({ users: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }] });
});

// Product route
app.get('/api/products', (req, res) => {
  res.json({ products: [{ id: 101, name: 'Laptop' }, { id: 102, name: 'Smartphone' }] });
});

// Order route
app.get('/api/orders', (req, res) => {
  res.json({ orders: [{ id: 201, user: 'John Doe', product: 'Laptop' }] });
});

// Status route
app.get('/api/status', (req, res) => {
  res.json({ status: 'Server is running smoothly!' });
});

// Analytics route
app.get('/api/analytics', (req, res) => {
  res.json({ visitors: 1234, sales: 567 });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});