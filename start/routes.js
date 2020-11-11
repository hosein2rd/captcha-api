'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.post('register', 'UserController.create').validator('Register')
  Route.post('login', 'UserController.login').validator('Login')
}).prefix('api/users')

Route.group(() => {
  Route.post('create', 'ApplicationController.create').validator('CreateApp')
}).prefix('api/application')

Route.group(() => {
  Route.get('create', 'CaptchaController.create')
  Route.post('validate', 'CaptchaController.validate').validator('ValidateCaptcha')
}).prefix('api/captcha')
