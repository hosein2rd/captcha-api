'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CaptchaSchema extends Schema {
  up () {
    this.create('captchas', (table) => {
      table.increments()
      table.string('text').notNullable()
      table.boolean('is_checked').defaultTo(false)
      table.integer('app_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('applications')
      table.timestamps()
    })
  }

  down () {
    this.drop('captchas')
  }
}

module.exports = CaptchaSchema
