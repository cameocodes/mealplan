const express = require('express');

const app = express();
const port = 9000;
const recipeRouter = require('./recipes/recipeRouter');
const searchRouter = require('./recipes/searchRouter');
const mealPlanRouter = require('./mealPlans/mealPlanRouter');

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json('hello');
});
app.use('/recipes', recipeRouter);
app.use('/search', searchRouter);
app.use('/mealplan', mealPlanRouter);

app.listen(port);

console.log(`[app] : http://localhost:${port}`);
