const { Recipe } = require('./recipe');

const recipes = [
  {
    name: 'Beef Tacos',
    description: 'Tacos made with beed',
    ingredients: [
      {
        name: { name: 'beef mince' },
        amount: 500,
        measurement: 'grams',
      }, {
        name: { name: 'taco seasoning' },
        amount: 1,
        measurement: 'packet',
      }, {
        name: { name: 'onion' },
        amount: 1,
        measurement: 'whole',
      },
      {
        name: { name: 'capsicum' },
        amount: 1,
        measurement: 'whole',
      },
    ],
    prep_time: '15 minutes',
    cook_time: '15 minutes',
    total_time: '30 minutes',
    method: 'Cook the beef in spices, cook onion and garlic, put that and salad inside tortilla and eat',
    notes: 'This is tasty',
    serves: 3,
    tags: ['mexican', 'mince'],
  },
  {
    name: 'Pesto Chicken Pasta',
    description: 'Pasta made with chicken and pesto',
    ingredients: [
      {
        name: { name: 'chicken thigh' },
        amount: 500,
        measurement: 'grams',
      },
      {
        name: { name: 'pasta' },
        amount: 4,
        measurement: 'cups',
      },
      {
        name: { name: 'pesto sauce' },
        amount: 200,
        measurement: 'grams',
      },
    ],
    prep_time: '15 minutes',
    cook_time: '30 minutes',
    total_time: '45 minutes',
    method: 'Chop the chicken and mushrooms, cook together, cook pasta, mix everything with sauce',
    notes: 'This is tasty',
    serves: 4,
    tags: ['chicken', 'pasta', 'pesto', 'mushroom'],
  },
];

Recipe.create(recipes)
  .then(() => {
    console.log('seeded recipes');
  });
