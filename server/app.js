const express = require("express");
const http = require("http");
const port = 3001;
const server = require("./server");

async function startServer(server) {
    const app = express();
    const httpServer = http.createServer(app);

    await server.start();
    server.applyMiddleware({ app });
    await new Promise((resolve) =>
        httpServer.listen({ port: process.env.PORT || port }, resolve)
    );
    console.log(`Serving at port ${port}...`);
}

startServer(server);
