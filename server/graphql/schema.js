const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Film {
        id: Int!
        title: String!
        director: String
        description: String
        cover: String!
        characters: [Character!]
    }

    type Character {
        id: Int!
        name: String!
        gender: String
        homeworld: String
        picture: String
        description: CharacterDescription
    }

    type CharacterDescription {
        birthYear: String!
        height: String!
        mass: String!
        skinColor: String!
        hairColor: String!
        eyeColor: String!
    }

    type Query {
        films: [Film!]!
        film(id: Int!): Film!
        character(id: Int!): Character!
    }
`;

module.exports = typeDefs;
