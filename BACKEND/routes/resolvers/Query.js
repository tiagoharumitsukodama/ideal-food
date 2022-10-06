const { UserRepository } = require('../../repository/UserRepository');
const { UserUseCase } = require('../../useCase/UserUseCase');

async function user(_, { id }) {
  const userUseCase = new UserUseCase(new UserRepository());
  const [userFromDb] = await userUseCase.getUser(id);
  const ingredients = await userUseCase.getIngredientsByUser(id);
  return {
    ...userFromDb,
    fridge: ingredients.map((i) => ({
      description: i.ingredientDesc,
      quantity: i.quantity,
      unit: i.unitDesc,
    })),
  };
}

module.exports = {
  user,
};
