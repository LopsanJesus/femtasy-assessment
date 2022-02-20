import React from "react";
import "./FilmList.scss";
import { useQuery } from "@apollo/client";
import { GET_ALL_FILMS } from "../../queries/films";
import FilmListItem from "../FilmListItem/FilmListItem";
import Spinner from "../Spinner/Spinner";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const FilmList = () => {
    const { loading, error, data } = useQuery(GET_ALL_FILMS);

    return (
        <div>
            {loading ? (
                <Spinner />
            ) : error ? (
                <ErrorMessage>Server error</ErrorMessage>
            ) : (
                <div>
                    <ul>
                        {data.films.map((film) => {
                            return <FilmListItem key={film.id} film={film} />;
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default FilmList;
