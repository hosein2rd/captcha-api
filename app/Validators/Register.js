'use strict'

class Register {
  get rules () {
    return {
      firstname: 'required',
      lastname: 'required',
      email: 'required|email',
      password: 'required'
    }
  }
}

module.exports = Register
