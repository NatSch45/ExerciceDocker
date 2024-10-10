const express = require('express');
const morgan = require('morgan');
const client = require('prom-client');

const app = express();
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

app.use(morgan('dev'));

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

const server = app.listen(3000, () => {
  console.log('API running on port 3000');
});

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Arrêt gracieux du serveur');
    process.exit(0);
  });
});