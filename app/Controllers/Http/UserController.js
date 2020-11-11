'use strict'

const User = use('App/Models/User')

class UserController {
  async create({ request, auth }) {
    const { firstname, lastname, email, password } = request.all()

    const user = new User()

    user.firstname = firstname
    user.lastname = lastname
    user.email = email
    user.password = password

    await user.save()

    const { token } = await auth.attempt(email, password)

    return {
      success: true
      // token
    }
  }

  async login({ request, auth }) {
    const { email, password } = request.all()

    const { token } = await auth.attempt(email, password)

    return {
      success: true,
      token
    }
  }
}

module.exports = UserController
