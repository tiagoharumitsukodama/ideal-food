class UserUseCase {
  constructor(repository) {
    this.repository = repository;
  }

  async getUser(id) {
    return this.repository.findById(id);
  }
}

module.exports = { UserUseCase };
