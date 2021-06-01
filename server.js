const fs = require('fs')
const port = #### //Put 4-digit port number here
      
const server = http.createServer(fuction(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  fs.readFile('index.html', function(error, data) {
    if (error) {
      res.writeHead(404)
      res.write('Error: File Not Found')
    } else {
      res.write(data)
    }
    res.end()
  })
})
