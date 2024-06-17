// Create web server
// Create http server
// Listen on port 3000
// Create a route for comments
// Inside the route function, send a response with the text "This is the comments page"
// Start the server

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/comments') {
    res.end('This is the comments page');
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});