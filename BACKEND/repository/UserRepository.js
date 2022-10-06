const { BaseDatabase } = require('../data/baseDatabase');

class UserRepository extends BaseDatabase {
  constructor() {
    super('User');
  }

  findIngredientsByUser(id) {
    return this.db.raw(`
        SELECT quantity, ingredientDesc, ingredientId, description as unitDesc, userId
        FROM (
        SELECT quantity, description as ingredientDesc, unitId, Ingredient.id as ingredientId, userId
            FROM IngredientUser
            LEFT JOIN Ingredient
            ON IngredientUser.ingredientId = Ingredient.id
        )
        LEFT JOIN Unit
        ON unitId = Unit.id
        WHERE userId = '${id}'
    `);
  }
}

module.exports = { UserRepository };
