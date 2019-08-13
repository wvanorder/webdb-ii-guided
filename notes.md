


knex

- knex init
- add 'useNullAsDefault: true' to development in knexfile.js
- add 'migrations: { directory: './data/migrations' }' to knexfile.js
- knex migrate:make name
- knex migrate:rollback removes last migration

- knex seed:make
knex seed:run


//EVERY SCHEMA CHANGE NEEDS A NEW MIGRATION