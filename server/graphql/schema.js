const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Film {
        title: String
    }

    type Query {
        films: [Film]
    }
`;

module.exports = typeDefs;
