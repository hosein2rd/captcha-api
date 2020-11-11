'use strict'

const Application = use('App/Models/Application')

class ApplicationController {
  async create({ request, auth }) {
    const user = await auth.getUser()

    const { appName } = request.all()

    const application = new Application()

    application.name = appName
    application.user_id = user.id

    await application.save()

    const { token } = await auth.authenticator('app_jwt').generate(application)

    return {
      success: true,
      token
    }
  }
}

module.exports = ApplicationController
