const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const http = require("http");
const port = 3001;

const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

async function startApolloServer(typeDefs, resolvers) {
    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    await server.start();
    server.applyMiddleware({ app });
    await new Promise((resolve) => httpServer.listen({ port: port }, resolve));
    console.log(
        `🚀 Server ready at http://localhost:${port + server.graphqlPath}`
    );
}

startApolloServer(typeDefs, resolvers);
