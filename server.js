const http = require('http')
const fs = require('fs')
const port = 9837 // Put 4-digit port here

const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('page.html', function(error, data) {
        if (error) {
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else {
            res.write(data)
        }
      res.end()
    })
})

server.listen(port, function(error) {
    if (error) {
        console.log('Something went wrong', error) //If logged, check if the port is in code.
    } else {
        console.log('Server is listening on port ' + port)
    }
})
