const { swapi } = require("../apiLinks");
const { getFilms, getFilm, getCharacter } = require("./helpers");
const { mockedFilms, mockedCharacters } = require("./../swapiMocker");

// Mock resolvers
const resolvers = {
    Query: {
        films: () => {
            return mockedFilms.map((film) => {
                return {
                    ...film,
                    director: null,
                    description: null,
                    characters: null,
                };
            });
        },
        film: async (_, { id }) => {
            return mockedFilms.find((film) => {
                return film.id == id;
            });
        },
        character: async (_, { id }) => {
            return mockedCharacters.find((character) => {
                return character.id == id;
            });
        },
    },
};

// const resolvers = {
//     Query: {
//         films: async () => {
//             return getFilms(swapi.films);
//         },
//         film: async (_, { id }) => {
//             return getFilm(swapi.films + id);
//         },
//         character: async (_, { id }) => {
//             return getCharacter(swapi.characters + id);
//         },
//     },
// };

module.exports = resolvers;
