const { UserRepository } = require('../../repository/UserRepository');
const { UserUseCase } = require('../../useCase/UserUseCase');

async function user(_, { id }) {
  const userUseCase = new UserUseCase(new UserRepository());

  const [userFromDb] = await userUseCase.getUser(id);

  console.log(userFromDb);

  return {
    ...userFromDb,
    fridge: [],
  };
}

module.exports = {
  user,
};
