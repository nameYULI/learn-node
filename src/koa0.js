/*
 * @Description:
 * @Author: yuli
 * @Date: 2021-01-22 10:57:12
 * @LastEditors: yuli
 * @LastEditTime: 2021-01-22 11:10:19
 */
const Koa = require('koa')
const app = new Koa()
const main = ctx => {
    //抛出错误
    ctx.response.status = 404
    ctx.response.body = 'Page Not Found'

    //与上面两行代码意思一样
    // ctx.throw(404)
}
app.use(main);
app.listen(3000);