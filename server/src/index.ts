import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('yo!');
});

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, () => {
  console.log(`[server]: Server is running at https://${HOST}:${PORT}`);
});
