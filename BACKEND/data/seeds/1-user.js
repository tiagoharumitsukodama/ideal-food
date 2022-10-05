/* eslint-disable func-names */
const units = require('../ETL/dataSources/users.json').Items;
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('User').del();

  const userWithId = units.map((e, i) => ({ id: i, ...e }));

  await knex('User').insert(userWithId);
};
