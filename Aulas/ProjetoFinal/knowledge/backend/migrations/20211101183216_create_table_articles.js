
exports.up = function(knex, Promise) {
    return knex.schema.createTable('articles', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        // 1000 define o tamanho da String. Existe um valor padrão
        table.string('description', 1000).notNull()
        table.string('imageUrl', 1000)
        // Será utilizado como blob - Binary Large Object
        table.binary('content').notNull()
        table.integer('userId').references('id')
            .inTable('users').notNull()
        table.integer('categoriesId').references('id')
            .inTable('categories').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('articles')
};
