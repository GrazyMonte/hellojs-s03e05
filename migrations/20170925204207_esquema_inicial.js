exports.up = knex => knex.schema.createTable("contato", tb => {
    tb.increments("idcontato")
    tb.string("nomecontato")
    tb.string("enderecocontato")
    tb.string("telefonecontato")
  })
  
  exports.down = knex => knex.schema.dropTable("contato")