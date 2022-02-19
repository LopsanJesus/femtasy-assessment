import React from "react";
import "./FilmListItem.scss";

const FilmListItem = ({ film }) => {
    const handleOpenFilm = () => {};

    return (
        <li className="FilmListItem" onClick={handleOpenFilm}>
            <h3>{film.title}</h3>
            <p>Director: {film.director}</p>
            <img src={film.cover} />
        </li>
    );
};

export default FilmListItem;
