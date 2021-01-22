/*
 * @Description:释放error事件，需要注意的是如果错误被try...catch捕获，就不会触发error事件，这时，必须调用ctx.app.emit()，
                手动释放error事件，才能监听函数生效
 * @Author: yuli
 * @Date: 2021-01-22 13:52:35
 * @LastEditors: yuli
 * @LastEditTime: 2021-01-22 14:31:01
 */
const Koa = require('koa')
const app = new Koa()

const handler = async (ctx, next) => {
    try {
        await next()
    } catch (err) {
        ctx.response.status = err.statusCode || err.status || 500
        ctx.response.type = 'html'
        ctx.response.body = '<p>Something wrong, please contact administrator.</p>'
        ctx.app.emit('error', err, ctx)
    }
}

const main = ctx => {
    ctx.throw(500)
}

app.on('error', function (err) {
    console.log('logging error', err.message)
    console.log(err)
})

app.use(handler)
app.use(main)
app.listen(3000)