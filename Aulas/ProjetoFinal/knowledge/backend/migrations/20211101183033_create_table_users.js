// Up é utilizado sempre para criar o fluxo novo do Migrate
exports.up = function(knex, Promise) {
    // Retornando o Schema na nova tabela
    return knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('email').notNull().unique()
        table.string('password').notNull()
    })
};


// Down é utilizado para fazer o processo inverso do up, rollback,
//  mantendo assim um comportamento sólido entre as Migrations
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
};
