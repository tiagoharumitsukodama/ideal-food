const { BaseDatabase } = require('./baseDatabase');

class IngredientDatabase extends BaseDatabase {
  constructor() {
    super('Ingredient');
  }
}

module.exports = { IngredientDatabase };
