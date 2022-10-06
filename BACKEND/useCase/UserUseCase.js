class UserUseCase {
  constructor(repository) {
    this.repository = repository;
  }

  async getUser(id) {
    return this.repository.findById(id);
  }

  async getIngredientsByUser(id) {
    return this.repository.findIngredientsByUser(id);
  }
}

module.exports = { UserUseCase };
