const { BaseDatabase } = require('../data/baseDatabase');

class UserRepository extends BaseDatabase {
  constructor() {
    super('User');
  }
}

module.exports = { UserRepository };
