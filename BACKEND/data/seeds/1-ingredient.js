/* eslint-disable func-names */
const path = require('path');
const ingredients = require('../ETL/dataSources/vegetables.json').Items;
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('Ingredient').del();
  const filename = path.basename(__filename);
  const fileNumber = filename.split('-')[0] - 1;

  const page = ingredients.splice(fileNumber * 100, 100);

  await knex('Ingredient').insert(page);
};
