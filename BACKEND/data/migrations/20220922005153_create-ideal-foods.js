/* eslint-disable func-names */
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable('Ingredient', (t) => {
      t.text('id')
        .unique()
        .notNullable();

      t.text('description');
    })
    .createTable('Unit', (t) => {
      t.text('id')
        .unique()
        .notNullable();

      t.text('description');
    })
    .createTable('User', (t) => {
      t.text('id')
        .unique()
        .notNullable();

      t.text('name');
    })
    .createTable('Recipe', (t) => {
      t.text('id')
        .unique()
        .notNullable();

      t.text('description');

      t.text('status');

      t.float('price');

      t.text('difficult');
    })
    .createTable('IngredientUser', (t) => {
      t.text('id')
        .unique()
        .notNullable();

      t.float('quantity');

      t.text('userId')
        .references('User.id')
        .onDelete('CASCADE');

      t.text('unitId')
        .references('Unit.id')
        .onDelete('CASCADE');
    })
    .createTable('IngredientRecipe', (t) => {
      t.text('id')
        .unique()
        .notNullable();

      t.text('recipeId')
        .references('Recipe.id')
        .onDelete('CASCADE');

      t.text('ingredientId')
        .references('Ingredient.id')
        .onDelete('CASCADE');

      t.float('quantity');

      t.text('unitId')
        .references('Unit.id')
        .onDelete('CASCADE');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('IngredientRecipe')
    .dropTableIfExists('IngredientUser')
    .dropTableIfExists('Recipe')
    .dropTableIfExists('User')
    .dropTableIfExists('Unit')
    .dropTableIfExists('Ingredient');
};
