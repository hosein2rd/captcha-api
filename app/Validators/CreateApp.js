'use strict'

class CreateApp {
  get rules () {
    return {
      appName: 'required'
    }
  }
}

module.exports = CreateApp
