const http = require('http');

// List of available servers
const servers = [
  { url: 'http://localhost:3000', currentReqCount: 0 },
  { url: 'http://localhost:3001', currentReqCount: 0 },
  { url: 'http://localhost:3002', currentReqCount: 0 }
];

// Index of the next server to use for incoming requests
let nextServerIndex = 0;

// Create HTTP server to handle incoming requests
const server = http.createServer((req, res) => {
  // Get the next server to use
  const server = servers[nextServerIndex];

  // Increment the current request count for the selected server
  server.currentReqCount++;
console.log("server",server.url,server.currentReqCount)
  // Send the request to the selected server
  http.get(server.url, response => {
    // Forward the response from the server to the original client
    response.pipe(res);

    // Update the current server index for the next request
    nextServerIndex = (nextServerIndex + 1) % servers.length;
  });
});

// Start the HTTP server
server.listen(8080, () => {
  console.log('Load balancer listening on port 8080');
});
