import React from "react";
import "./Film.scss";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_FILM } from "../../queries/films";
import BackButton from "../BackButton/BackButton";
import CharacterListItem from "../CharacterListItem/CharacterListItem";
import Picture from "../Picture/Picture";
import Spinner from "../Spinner/Spinner";
import FavoriteStar from "../FavoriteStar/FavoriteStar";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Film = () => {
    let params = useParams();

    const { loading, error, data } = useQuery(GET_FILM, {
        variables: { id: parseInt(params.filmId) },
    });

    const markAsFavorite = () => {
        //TODO
        localStorage.setItem("favoritedFilms", params.filmId + "|");
    };

    return loading ? (
        <Spinner />
    ) : error ? (
        <ErrorMessage>Server error</ErrorMessage>
    ) : (
        <div className="Film">
            <FavoriteStar onFavClick={markAsFavorite} />
            <h3 className="m-4 font-bold drop-shadow-md">{data.film.title}</h3>
            <div className="m-4">{data.film.director}</div>
            <p>{data.film.description}</p>

            <Picture src={data.film.cover} size="big" />
            <div className="grid grid-cols-3">
                {data.film.characters.map((character) => {
                    return (
                        <CharacterListItem
                            key={character.id}
                            character={character}
                        ></CharacterListItem>
                    );
                })}
            </div>
            <BackButton />
        </div>
    );
};

export default Film;
