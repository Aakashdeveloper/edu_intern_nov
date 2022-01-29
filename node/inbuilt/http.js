let http = require('http')

// req > what we send to server
// res > what server respond us back

var server = http.createServer((req,res) => {
    res.write(`<h1>First From NodeJs App Code</h1>`)
    res.end()
})

server.listen(9820)