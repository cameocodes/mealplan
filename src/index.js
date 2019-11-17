const express = require('express');

const app = express();
const port = 9000;
const recipeRouter = require('./recipes/recipeRouter');

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json('hello');
});
app.use('/recipes', recipeRouter);

app.listen(port);

console.log(`[app] : http://localhost:${port}`);
