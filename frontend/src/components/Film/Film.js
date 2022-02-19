import React from "react";
import "./Film.scss";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_FILM } from "../../queries/films";

const Film = () => {
    let params = useParams();

    const { loading, error, data } = useQuery(GET_FILM, {
        variables: { id: parseInt(params.filmId) },
    });

    return loading ? (
        <div>"Loading"</div>
    ) : error ? (
        <div>Error</div>
    ) : (
        <div className="Film">{data.film.title}</div>
    );
};

export default Film;
