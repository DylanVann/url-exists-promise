const http = require('http')
const nodeUrl = require('url')

export const urlExists = (url: string): Promise<boolean> =>
    new Promise((resolve, reject) => {
        const options = {
            method: 'HEAD',
            host: nodeUrl.parse(url).host,
            port: 80,
            path: nodeUrl.parse(url).pathname,
        }
        const req = http.request(options, (r: { statusCode: number }) => {
            resolve(r.statusCode === 200)
        })
        req.on('error', (e: Error) => {
            reject(e)
        });
        req.end()
    })
