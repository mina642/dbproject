const express = require('express');
const { Client } = require('pg');

const app = express();
const PORT = 3000;

// PostgreSQL connection config
const dbClient = new Client({
  user: 'postgres', // change if your username is different
  host: 'localhost',
  database: 'Database_Mina', // change to your database name if needed
  password: 'postgres', // change to your password
  port: 5432,
});

dbClient.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('PostgreSQL connection error:', err));

app.get('/', (req, res) => {
  res.send('hello word from Mina and Nawaraj');
});

app.get('/stock-items', async (req, res) => {
  try {
    const result = await dbClient.query('SELECT * FROM "Delight".stock_item');
    res.json(result.rows);
  } catch (err) {
    console.error('Error executing query:', err);
    res.status(500).json({ error: 'Database query failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});