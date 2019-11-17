const express = require('express');
const { Recipe } = require('./recipe');

const router = express.Router();

// SEARCH TAGS
// GET /tags/beef
router.get('/tags/:tag', (req, res) => {
  Recipe.find({ tags: req.params.tag })
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// GET /search?ingredient=beef
router.get('/', (req, res) => {
  const { ingredient } = req.query;
  console.log(ingredient);
  const matchingRecipes = [];

  Recipe.find()
    .then((recipes) => {
      recipes.map((recipe) => {
        if (recipe.tags.includes(ingredient)) {
          matchingRecipes.push(recipe);
        } else {
          for (let i = 0; i < recipe.ingredients.length; i++) {
            if (recipe.ingredients[i].name.name.includes(ingredient) || recipe.tags.includes(ingredient)) {
              matchingRecipes.push(recipe);
            }
          }
        }
      });
    })
    .then(() => {
      res.status(200).json(matchingRecipes);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });

//   Recipe.find({ 'ingredients.name.name': ingredient });
});

module.exports = router;
