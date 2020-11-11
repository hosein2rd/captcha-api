'use strict'

const { test } = use('Test/Suite')('Register User')

trait('Test/ApiClient')

test('create user', async ({ assert, client }) => {
  const response = await client.post('api/users/register').send({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  }).end()

  response.assertStatus(200)
  response.assertJSONSubset({
    success: true,
    token
  })
})
