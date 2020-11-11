'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ApplicationSchema extends Schema {
  up () {
    this.create('applications', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.integer('user_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('applications')
  }
}

module.exports = ApplicationSchema
