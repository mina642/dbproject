const express = require('express');
const { Client } = require('pg');

const app = express();
const PORT = 3000;

// PostgreSQL connection config
const dbClient = new Client({
  user: 'postgres', // change if your username is different
  host: 'localhost',
  database: 'postgres', // change to your database name if needed
  password: 'postgres', // change to your password
  port: 5432,
});

dbClient.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('PostgreSQL connection error:', err));

app.get('/', (req, res) => {
  res.send('hello word from Mina');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});