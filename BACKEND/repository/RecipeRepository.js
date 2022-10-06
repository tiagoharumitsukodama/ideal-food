const { BaseDatabase } = require('../data/baseDatabase');

class RecipeRepository extends BaseDatabase {
  constructor() {
    super('RecipeRepository');
  }
}

module.exports = { RecipeRepository };
