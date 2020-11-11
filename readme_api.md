# Captcha API

By this api you can get captcha and validate it.

## HOW TO USE

1. Register and get token
2. Submit your application name and get token for your applicatoin
3. generate captcha and get captcha token
4. validate captcha

## APIs

### register

#### url
  
- https://localhost:3333/api/users/register
- method: POST

#### request body:
- firstname: string
- lastname: string
- email: string
- password: string

#### response body

```
{
    success: true,
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU4MjkyNTg3NX0.WtlkyhxccSrOHapVBXfg5RHWR-M6U16o9nQrB8fFfhs'
}
```

### login

#### url

- https://localhost:3333/api/users/login
- method: POST

#### request body

- email: string
- password: string

#### response body

```
{
    success: true,
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU4MjkyNTg3NX0.WtlkyhxccSrOHapVBXfg5RHWR-M6U16o9nQrB8fFfhs'
}
```

### create application

#### url 

- http://localhost:3333/api/application/create
- method: POST

#### request header
send token of user that you have got in register or login

- token: 'your_user_token'

#### request body

- appName: string

#### response body

```
{
    success: true,
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU4MjkyNTg3NX0.WtlkyhxccSrOHapVBXfg5RHWR-M6U16o9nQrB8fFfhs'
}
```

### generate captcha

When captcha is created you can validate it in 10 minute, after 10 minute captcha has expired.

#### url

- http://localhost:3333/api/captcha/create
- method: GET

#### request header

send token of app that you have created

- token: 'your_app_token'

#### response body

```
{
    success: true,
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU4MjkyNTg3NX0.WtlkyhxccSrOHapVBXfg5RHWR-M6U16o9nQrB8fFfhs',
    captcha_img: '<svg><svg>' //html tag
}
```

### validate captcha

You can validate captcha one time. if captcha is invalid create another one.

#### url

- http://localhost:3333/api/captcha/validate
- method: POST

#### request header

send token of captha that captcha is generated

- token: 'captcha_token'

#### request body

- text: string  //captcha text

#### response body
if text is matched to captcha

```
{
    success: true
}
```