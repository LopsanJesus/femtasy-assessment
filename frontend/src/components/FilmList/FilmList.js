import React from "react";
import "./FilmList.scss";
import { useQuery } from "@apollo/client";

import { GET_ALL_FILMS } from "../../queries/films";
import FilmListItem from "../FilmListItem/FilmListItem";

const FilmList = ({}) => {
    const { loading, error, data } = useQuery(GET_ALL_FILMS);

    return (
        <div>
            {loading ? (
                <span className="loader"></span>
            ) : error ? (
                <p>Error!</p>
            ) : (
                <div>
                    <ul>
                        {data.films.map((film, index) => {
                            return <FilmListItem key={index} film={film} />;
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default FilmList;
