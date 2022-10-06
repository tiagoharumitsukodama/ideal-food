/* eslint-disable func-names */
const units = require('../ETL/dataSources/units.json').Items;
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('Unit').del();

  const unitWithId = units.map((e, i) => ({ id: i, ...e }));

  await knex('Unit').insert(unitWithId);
};
