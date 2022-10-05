const knex = require('knex');
const config = require('../knexfile');

const db = knex(config.development);

class BaseDatabase {
  constructor(entity) {
    this.entity = entity;
  }

  find() {
    return db(this.entity);
  }

  findById(id) {
    return db(this.entity).where({ id });
  }

  insert(item) {
    return db(this.entity)
      .insert(item)
      .then((ids) => ({ id: ids[0] }));
  }

  update(id, item) {
    return db(this.entity)
      .where('id', id)
      .update(item);
  }

  remove(id) {
    return db(this.entity)
      .where('id', id)
      .del();
  }
}

module.exports = { BaseDatabase };
