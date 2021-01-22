/*
 * @Description:cookies
 * @Author: yuli
 * @Date: 2021-01-22 15:09:01
 * @LastEditors: yuli
 * @LastEditTime: 2021-01-22 15:32:20
 */
const Koa = require('koa')
const app = new Koa()

const main = function (ctx) {
    const n = Number(ctx.cookies.get('view') || 0) + 1
    ctx.cookies.set('view', n)//读写cookies
    ctx.response.body = n + 'views'
}

app.use(main)
app.listen(3000)