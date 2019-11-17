const mongoose = require('../db/connectdb');

const { Schema } = mongoose;

const ingredientSchema = new Schema({
  name: String,
});

const recipeSchema = new Schema({
  name: String,
  description: String,
  ingredients: [
    {
      name: ingredientSchema,
      amount: Number,
      measurement: String,
    },
  ],
  prep_time: String,
  cook_time: String,
  total_time: String,
  method: String,
  notes: String,
  serves: Number,
  tags: [String],
});

const Recipe = mongoose.model('recipe', recipeSchema);
const Ingredient = mongoose.model('ingredient', ingredientSchema);

module.exports = { Recipe, Ingredient };
