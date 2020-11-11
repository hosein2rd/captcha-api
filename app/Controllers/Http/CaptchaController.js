'use strict'

const svgCaptcha = require('svg-captcha')
const Captcha = use('App/Models/Captcha')

class CaptchaController {
  async create({ auth }) {
    const application = await auth.authenticator('app_jwt').getUser()
    const captcha = svgCaptcha.create()

    const captchaModel = new Captcha()
    captchaModel.text = captcha.text
    captchaModel.app_id = application.id

    await captchaModel.save()

    const { token } = await auth.authenticator('captha_jwt').generate(captchaModel)
    
    return {
      success: true,
      token,
      captcha_img: captcha.data
    }
  }

  async validate({ auth, request }) {
    const captcha = await auth.authenticator('captha_jwt').getUser()

    if (captcha.is_checked) {
      const error = new Error()
      error.message = 'Captcha is expired'
      error.name = 'CaptchaExpiration'
      error.status = 403

      throw error
    }
    
    const text = request.input('text')

    captcha.is_checked = true
    await captcha.save()

    if (captcha.text !== text) {
      const error = new Error()
      error.message = 'Text is not matched',
      error.name = 'InvalidCaptchaText',
      error.status = 400

      throw error
    }

    return {
      success: true
    }
  }
}

module.exports = CaptchaController
