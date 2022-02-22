const { swapi } = require("../apiLinks");
const { getFilms, getFilm, getCharacter } = require("./helpers");

const resolvers = {
    Query: {
        films: async () => {
            return getFilms(swapi.films);
        },
        film: async (_, { id }) => {
            return getFilm(swapi.films + id);
        },
        character: async (_, { id }) => {
            return getCharacter(swapi.characters + id);
        },
    },
};

module.exports = resolvers;
