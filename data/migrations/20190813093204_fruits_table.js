//up are changes to make to the schema
exports.up = function(knex) {
    return knex.schema.createTable('fruits', tbl => {
        //primary key called id, integer, autoincrements
        tbl.increments();

        tbl
            .string('name', 128)
            .unique()
            .notNullable();
        tbl.decimal('avg-weight-oz');
    });
};


//how we undo the changes made in the up function
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('fruits');
};
