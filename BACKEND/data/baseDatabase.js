const knex = require('knex');
const config = require('../knexfile');

class BaseDatabase {
  constructor(entity) {
    this.entity = entity;
    this.db = knex(config.development);
  }

  find() {
    return this.db(this.entity);
  }

  findById(id) {
    return this.db(this.entity).where({ id });
  }

  insert(item) {
    return this.db(this.entity)
      .insert(item)
      .then((ids) => ({ id: ids[0] }));
  }

  update(id, item) {
    return this.db(this.entity)
      .where('id', id)
      .update(item);
  }

  remove(id) {
    return this.db(this.entity)
      .where('id', id)
      .del();
  }
}

module.exports = { BaseDatabase };
