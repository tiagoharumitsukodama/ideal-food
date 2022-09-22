# How to create database structure

## Create tables

### Create migration
- Run the command to create file
```
npx knex migrate:make create-<database name>
```
- Implement up and down function

Example:
```
exports.up = function (knex) {
  return knex.schema.createTable('Ingredient', (tbl) => {
    tbl.text('id', 128)
      .unique()
      .notNullable();

    tbl.text('description', 128)
      .unique()
      .notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('Ingredient');
};
```

### Run migration
```
npx knex migrate:latest
```
To rollback
```
npx knex migrate:rollback
```

## Seed tables

### Create seed file
run
```
npx seed:make <number>-<table>
```

### Implement function
Example:
```
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('Ingredient').del();
  await knex('Ingredient').insert([
    {
      id: '001',
      description: 'potato',
    },
    {
      id: '002',
      description: 'tomato',
    },
  ]);
};
```