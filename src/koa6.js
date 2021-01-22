/*
 * @Description:文件上传
 * @Author: yuli
 * @Date: 2021-01-22 16:09:06
 * @LastEditors: yuli
 * @LastEditTime: 2021-01-22 16:20:09
 */
/**
 * koa-body模块还可以用来处理文件上传
 */
const os = require('os')
const path = require('path')
const Koa = require('koa')
const fs = require('fs')
const koaBody = require('koa-body')

const app = new Koa()

const main = async function (ctx) {
    const tmpdir = os.tmpdir()
    const filePaths = []
    const files = ctx.request.body.files || {}
    for (let key in files) {
        const file = files[key]
        const filePath = path.join(tmpdir, file.name)
        const reader = fs.createReadStream(file.path)
        const writer = fs.createWriteStream(filePath)
        reader.pipe(writer)
        filePaths.push(filePath)
    }
    ctx.body = filePaths
}
app.use(koaBody({ multipart: true }))
app.use(main)
app.listen(3000)