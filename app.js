const http = require('http');

// List of backend servers to balance load across
const backendServers = [
  { host: 'server1.example.com', port: 3000 },
  { host: 'server2.example.com', port: 3000 },
  { host: 'server3.example.com', port: 3000 }
];

// Create an HTTP server to listen for incoming requests
const server = http.createServer((req, res) => {
  // Choose a backend server to forward the request to
  const backend = backendServers[Math.floor(Math.random() * backendServers.length)];

  // Forward the request to the chosen backend server
  const proxyReq = http.request({
    host: backend.host,
    port: backend.port,
    path: req.url,
    method: req.method,
    headers: req.headers
  }, (proxyRes) => {
    // Forward the response from the backend server to the client
    res.writeHead(proxyRes.statusCode, proxyRes.headers);
    proxyRes.pipe(res);
  });

  // Forward the request body from the client to the backend server
  req.pipe(proxyReq);
});

// Start listening for incoming requests on port 8080
server.listen(8080, () => {
  console.log('Load balancer listening on port 8080');
});
