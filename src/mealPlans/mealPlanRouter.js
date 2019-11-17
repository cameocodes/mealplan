/* eslint-disable no-plusplus */
/* eslint-disable no-loop-func */
const express = require('express');
const { Recipe } = require('../recipes/recipe');

const router = express.Router();

// GET 7 DAY MEAL PLAN
// /mealplan/random OR /mealplan/random?days=5
router.get('/random', (req, res) => {
  Recipe.find()
    .then((recipes) => {
      const days = req.query.days || 7;
      const meals = [];

      while (meals.length < days) {
        const index = Math.floor(Math.random() * (recipes.length));
        meals.push(recipes[index]);
      }
      res.status(200).json(meals);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// GET GENERATED MEAL PLAN
// /mealplan/generate?chicken=3&beef=2&vege=1&lowCarb=2
router.get('/generate', (req, res) => {
  Recipe.find()
    .then((recipes) => {
      const convertToNum = (str) => (str ? Number(str) : 0);
      const allRecipes = recipes;
      const meals = [];

      const chicken = convertToNum(req.query.chicken);
      const beef = convertToNum(req.query.beef);
      const vege = convertToNum(req.query.vege);
      const lowCarb = convertToNum(req.query.lowCarb);

      const days = chicken + beef + vege + lowCarb;

      while (meals.length < days) {
        const beefRecipes = [];
        const chickenRecipes = [];
        const vegeRecipes = [];
        const lowCarbRecipes = [];

        allRecipes.map((recipe) => {
          if (recipe.tags.includes('beef')) {
            beefRecipes.push(recipe);
          } else if (recipe.tags.includes('chicken')) {
            chickenRecipes.push(recipe);
          } else if (recipe.tags.includes('vege')) {
            vegeRecipes.push(recipe);
          } else if (recipe.tags.includes('low carb')) {
            lowCarbRecipes.push(recipe);
          }
        });

        for (let i = 0; i < chicken; i++) {
          const index = Math.floor(Math.random() * (chickenRecipes.length));
          meals.push(chickenRecipes[index]);
          chickenRecipes.splice(i - 1, 1);
        }

        for (let i = 0; i < beef; i++) {
          console.log(`beef recipes: ${beefRecipes}`);
          const index = Math.floor(Math.random() * (beefRecipes.length));
          meals.push(beefRecipes[index]);
          beefRecipes.splice(i - 1, 1);
          console.log(`beef recipes altered: ${beefRecipes}`);
        }

        for (let i = 0; i < vege; i++) {
          const index = Math.floor(Math.random() * (vegeRecipes.length));
          meals.push(vegeRecipes[index]);
          vegeRecipes.splice(i - 1, 1);
        }

        for (let i = 0; i < lowCarb; i++) {
          const index = Math.floor(Math.random() * (lowCarbRecipes.length));
          meals.push(lowCarbRecipes[index]);
          lowCarbRecipes.splice(i - 1, 1);
        }
      }

      res.status(200).json(meals);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});


module.exports = router;
