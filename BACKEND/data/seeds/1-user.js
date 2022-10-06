/* eslint-disable func-names */
const items = require('../ETL/dataSources/users-ingredient.json').Items;
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('IngredientUser').del();
  await knex('User').del();

  const users = [];
  const ingredientUsers = [];

  items.forEach((e) => {
    users.push({
      name: e.name,
      id: e.id,
    });

    e.ingredientUser.forEach((i) => {
      ingredientUsers.push(i);
    });
  });

  await knex('User').insert(users);
  await knex('IngredientUser').insert(ingredientUsers);
};
