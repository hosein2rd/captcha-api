'use strict'

class ValidateCaptcha {
  get rules () {
    return {
      text: 'required'
    }
  }
}

module.exports = ValidateCaptcha
