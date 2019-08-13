
exports.up = function(knex) {
  return knex.schema.table('fruits', tbl => {
      tbl.string('color', 24);
  })
};

exports.down = function(knex) {
    return knex.schema.table('fruits', tbl => {
        tbl.dropColumn('color');
    })
};
