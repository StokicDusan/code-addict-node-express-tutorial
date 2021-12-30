// some core feature in node in action!

const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('this is a description')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>we can't seem to find this page </p>
    <a href="/">back home</a>
    `)
})

server.listen(5000)