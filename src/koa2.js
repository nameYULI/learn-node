/*
 * @Description:
 * @Author: yuli
 * @Date: 2021-01-22 11:59:17
 * @LastEditors: yuli
 * @LastEditTime: 2021-01-22 13:44:51
 */
const Koa = require('koa')
const app = new Koa()

const main = ctx => {
    ctx.throw(500)
}

//error事件的监听
app.on('error', (err, ctx) => {
    console.log('server error', err)
})

app.use(main)
app.listen(3000)