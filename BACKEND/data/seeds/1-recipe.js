/* eslint-disable func-names */
const items = require('../ETL/dataSources/recipe-ingredient.json').Items;
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('Recipe').del();
  await knex('IngredientRecipe').del();

  const recipe = [];
  const ingredient = [];
  const ingredientRecipe = [];

  items.forEach((e) => {
    recipe.push({
      id: e.id,
      description: e.description,
      status: e.status,
      price: e.price,
      difficult: e.difficult,
    });

    e.ingredients.forEach((i) => {
      ingredient.push(i);
    });

    e.ingredientRecipe.forEach((i) => {
      ingredientRecipe.push(i);
    });
  });

  await knex('Recipe').insert(recipe);
  await knex('Ingredient').insert(ingredient);
  await knex('IngredientRecipe').insert(ingredientRecipe);
};
