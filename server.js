const http = require('http')
const fs = require('fs')


const server = http.createServer((req, res) => {
    let filePath
    let contentType

    if (req.url === '/') {
        filePath = './public/index.html'
        contentType= 'text/html'
    }
    else if (req.url === '/index.css') {
        filePath = './public/index.css';
        contentType= 'text/css'
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('file not found')
        return
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": 'text/plain' })
            res.end(' reading failed')
            return
        }
        res.writeHead(200, { "Content-Type": contentType })
        res.end(data)

    })
})
server.listen(3000, () => console.log('server running...'))