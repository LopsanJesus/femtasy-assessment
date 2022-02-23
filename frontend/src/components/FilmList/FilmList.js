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
        <div className="FilmList">
            {loading ? (
                <Spinner />
            ) : error ? (
                <ErrorMessage>Server error</ErrorMessage>
            ) : (
                <>
                    <div className="mt-4 text-2xl md:text-3xl FilmListHeader">
                        Episodes
                    </div>
                    <div className="FilmListContent md:grid md:grid-cols-3">
                        {data.films.map((film) => {
                            return <FilmListItem key={film.id} film={film} />;
                        })}
                    </div>
                </>
            )}
        </div>
    );
};

export default FilmList;
