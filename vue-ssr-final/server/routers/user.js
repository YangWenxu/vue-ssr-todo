const Router = require('koa-router')

const userRouter = new Router({ prefix: '/user' })

userRouter.post('/login', async ctx => {
  const user = ctx.request.body
  if (user.username === 'young' && user.password === '12345') {
    ctx.session.user = {
      username: 'young'
    }
    ctx.body = {
      success: true,
      data: {
        username: 'young'
      }
    }
  } else {
    ctx.status = 400
    ctx.body = {
      success: false,
      message: 'username or password error'
    }
  }
})

module.exports = userRouter
