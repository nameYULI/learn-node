/*
 * @Description:使用node读取操作系统的一些信息
 * @Author: yuli
 * @Date: 2021-01-21 19:31:54
 * @LastEditors: yuli
 * @LastEditTime: 2021-01-21 19:44:30
 */

//读取系统cpu的信息
const os = require('os')
const cpus = os.cpus()//获取当前系统的cpu的数量
console.log(cpus.length)

//获取内存的信息
const total = os.totalmem()//bytes
console.log(total / 1024 / 1024 / 1024)//GB

//获取电脑剩余内存
const free = os.freemem()
console.log(free / 1024 / 1024 / 1024)//GB

//实现Web服务ajax-->api-->web server(node.js)
const http = require('http')
const server = http.createServer((req, res) => {

    res.end('hello')//请求结束发送字符串到页面
})

server.listen(3000, '127.0.0.1', () => {
    console.log("服务启动成功")
})