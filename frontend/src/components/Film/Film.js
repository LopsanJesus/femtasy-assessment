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
import StorageHelper from "../../helpers/storage";

const Film = () => {
    let params = useParams();

    const { loading, error, data } = useQuery(GET_FILM, {
        variables: { id: parseInt(params.filmId) },
    });

    const storeName = "films";

    const onFavClick = (isFavorite) => {
        isFavorite
            ? StorageHelper.addElement(params.filmId, storeName)
            : StorageHelper.deleteElement(params.filmId, storeName);
    };

    return loading ? (
        <Spinner />
    ) : error ? (
        <ErrorMessage>Server error</ErrorMessage>
    ) : (
        <div className="Film">
            <div className="relative z-10 float-right mr-4 md:mr-10">
                <FavoriteStar
                    initialValue={StorageHelper.isFavorited(
                        params.filmId,
                        storeName
                    )}
                    onFavClick={onFavClick}
                />
            </div>
            <h3 className="m-4 text-3xl font-bold drop-shadow-md">
                {data.film.title}
            </h3>
            <div className="md:grid md:grid-cols-2">
                <div className="my-6 lg:px-14">
                    <Picture src={data.film.cover} size="big" />
                </div>
                <div>
                    <div className="m-4">Directed by: {data.film.director}</div>
                    <p className="film-description">{data.film.description}</p>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-1 mt-4 md:grid-cols-6">
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
