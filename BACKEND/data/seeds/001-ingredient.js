/* eslint-disable func-names */
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('Ingredient').del();
  await knex('Ingredient').insert([
    {
      id: '001',
      description: 'potato',
    },
    {
      id: '002',
      description: 'tomato',
    },
  ]);
};
