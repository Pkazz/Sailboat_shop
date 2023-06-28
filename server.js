const http = require('http');
const port = process.env.PORT || 8080;


const requestListener = function (req, res) {
  res.writeHead(200);
  res.end(`<html><body><h1>This is SailboutShop</h1></body></html>`);
<h1 style="color:blue;">This is a Blue Heading</h1>
}

const server = http.createServer(requestListener);
server.listen(port);