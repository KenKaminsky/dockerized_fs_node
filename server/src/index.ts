import express, { response } from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('yo!');
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${[PORT]}`);
});
