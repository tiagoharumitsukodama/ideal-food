const { BaseDatabase } = require('../data/baseDatabase');

class IngredientRepository extends BaseDatabase {
  constructor() {
    super('IngredientRepository');
  }
}

module.exports = { IngredientRepository };
