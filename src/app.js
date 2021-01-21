/*
 * @Description:
 * @Author: yuli
 * @Date: 2021-01-21 20:02:53
 * @LastEditors: yuli
 * @LastEditTime: 2021-01-21 20:20:26
 */
const http = require('http')
const server = http.createServer((req, res) => {
    res.end('hello world')
})
server.listen(3000, '127.0.0.1', () => {
    console.log('server 启动成功')
})