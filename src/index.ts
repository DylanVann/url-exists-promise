const nodeHttp = require('http')
const nodeUrl = require('url')

export const urlExists = (url: string) =>
    new Promise(resolve => {
        const options = {
            method: 'HEAD',
            host: nodeUrl.parse(url).host,
            port: 80,
            path: nodeUrl.parse(url).pathname,
        }
        const req = nodeHttp.request(options, (r: { statusCode: number }) => {
            resolve(r.statusCode === 200)
        })
        req.end()
    })
