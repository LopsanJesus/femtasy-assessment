const axios = require("axios");

const resolvers = {
    Query: {
        films: async () => {
            let films = await axios.get("https://swapi.dev/api/films");

            return (filmsTitles = films.data.results.map((film) => {
                return { title: film.title };
            }));
        },
    },
};

module.exports = resolvers;
