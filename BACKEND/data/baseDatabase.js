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

  insert(post) {
    return db(this.entity)
      .insert(post)
      .then((ids) => ({ id: ids[0] }));
  }

  update(id, post) {
    return db(this.entity)
      .where('id', id)
      .update(post);
  }

  remove(id) {
    return db(this.entity)
      .where('id', id)
      .del();
  }
}

module.exports = { BaseDatabase };
