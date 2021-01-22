/*
 * @Description:表单
 * @Author: yuli
 * @Date: 2021-01-22 15:36:36
 * @LastEditors: yuli
 * @LastEditTime: 2021-01-22 16:04:23
 */
/**
 * koa-body模块可以用来从POST请求的数据体里面提取键值对
 */

const Koa = require('koa')
const app = new Koa()
const koaBody = require('koa-body')

const main = async function (ctx) {
    ctx.request.body = {
        name: "yuli"
    }
    const body = ctx.request.body
    if (!body.name) {
        ctx.throw(400, '.name required')
    }
    ctx.body = {
        name: body.name
    }
}

app.use(koaBody())
app.use(main)
app.listen(3000)