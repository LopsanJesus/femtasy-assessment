const axios = require("axios");
const { auxApi } = require("../apiLinks");

const getFilms = async (link) => {
    let films = await axios.get(link);

    return (filmsTitles = films.data.results.map((film) => {
        let id = getIdFromUrl(film.url);

        return {
            id: id,
            title: film.title,
            cover: auxApi.films + id + ".jpg",
        };
    }));
};

const getFilm = async (link) => {
    let film = await axios.get(link);
    let id = getIdFromUrl(film.data.url);

    return {
        id: id,
        title: film.data.title,
        director: film.data.director,
        description: film.data.opening_crawl,
        cover: auxApi.films + id + ".jpg",
        characters: getCharacters(film.data.characters),
    };
};

const getCharacter = async (link) => {
    let character = await axios.get(link);
    let id = getIdFromUrl(character.data.url);

    return {
        id: id,
        name: character.data.name,
        gender: character.data.gender,
        homeworld: getHomeworld(character.data.homeworld),
        description: {
            birthYear: character.data.birth_year,
            height: character.data.height,
            mass: character.data.mass,
            skinColor: character.data.skin_color,
            hairColor: character.data.hair_color,
            eyeColor: character.data.eye_color,
        },
        picture: auxApi.characters + id + ".jpg",
    };
};

const getCharacters = async (links) => {
    return await links.map(async (link) => {
        let character = await axios.get(link);
        let id = getIdFromUrl(character.data.url);

        return {
            id: id,
            name: character.data.name,
            picture: auxApi.characters + id + ".jpg",
        };
    });
};

const getIdFromUrl = (url) => {
    return url.split("/")[url.split("/").length - 2];
};

const getHomeworld = async (link) => {
    let homeworld = await axios.get(link);
    return homeworld.data.name;
};

module.exports = { getFilms, getFilm, getCharacter };
