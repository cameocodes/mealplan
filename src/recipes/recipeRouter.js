const express = require('express');
const { Recipe } = require('./recipe');

const router = express.Router();

router.get('/', (req, res) => {
  Recipe.find()
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;

  Recipe.findByIdAndUpdate({ _id: id }, req.body, { new: true }, (err, recipe) => {
    if (err) return res.status(500).send(err);
    return res.json(recipe);
  });
});

router.post('/new', (req, res) => {
  const recipe = new Recipe(req.body);
  recipe.save()
    .then(() => {
      res.status(201).json(recipe);
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Recipe.findByIdAndRemove(id, (err) => {
    if (err) {
      throw err;
    } else {
      res.status(204).json({ deleted: true });
    }
  });
});

module.exports = router;
