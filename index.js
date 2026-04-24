const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

const bcrypt = require('bcrypt');
const moment = require('moment');

// Example usage of bcrypt
(async () => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash('examplePassword', salt);
  console.log('Hashed password:', hash);
})();

// Example usage of moment
const now = moment();
console.log('Current date and time:', now.format());

// Additional usage of moment modules
console.log('Start of the day:', now.startOf('day').format());
console.log('End of the day:', now.endOf('day').format());
console.log('Add 7 days:', now.add(7, 'days').format());
console.log('Subtract 1 month:', now.subtract(1, 'month').format());

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

app.get('/api/info', (req, res) => {
  res.json({ info: 'This is some additional information.' });
});

app.get('/api/data', (req, res) => {
  res.json({ data: [1, 2, 3, 4, 5] });
});

app.get('/api/time', (req, res) => {
  res.json({ time: new Date().toISOString() });
});

app.get('/api/random', (req, res) => {
  res.json({ random: Math.random() });
});

// User route
app.get('/api/users', (req, res) => {
  res.json({ users: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }] });
});

app.get('/api/users/:id', (req, res) => {   
    const { id } = req.params;
    res.json({ user: { id, name: `User ${id}` } });
});

app.get('/api/users', (req, res) => { 
    res.json({ users: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }] });
});


app.post('/api/users', (req, res) => {
    const { name } = req.body;
    res.json({ message: `User '${name}' created successfully!` });
});



// Product route
app.get('/api/products', (req, res) => {
  res.json({ products: [{ id: 101, name: 'Laptop' }, { id: 102, name: 'Smartphone' }] });
});

app.post('/api/users', (req, res) => {
    const { name } = req.body;
    res.json({ message: `User '${name}' created successfully!` });
});

app.get('/api/users/:id', (req, res) => {
    const { id } = req.params;
    res.json({ user: { id, name: `User ${id}` } });
});


app.post('/api/products', (req, res) => {
  const { name } = req.body;
  res.json({ message: `Product '${name}' created successfully!` });
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
  res.json({ visitors: 1234, sales:453453});
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});