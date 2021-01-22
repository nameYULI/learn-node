/*
 * @Description:处理错误的中间件
 * @Author: yuli
 * @Date: 2021-01-22 11:38:51
 * @LastEditors: yuli
 * @LastEditTime: 2021-01-22 11:59:08
 */
const Koa = require('koa')
const app = new Koa()
const handler = async (ctx, next) => {
    try {
        await next()
    } catch (err) {
        ctx.response.status = err.statusCode || err.status || 500
        ctx.response.body = {
            message: err.message
        }
    }
}

const main0 = (ctx, next) => {
    ctx.response.body = 'Hello World'
    next()
}

const main1 = ctx => {
    ctx.throw(500)
}

app.use(handler)
// app.use(main0)
app.use(main1)
app.listen(3000)