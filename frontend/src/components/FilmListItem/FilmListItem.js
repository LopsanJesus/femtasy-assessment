import React from "react";
import { useNavigate } from "react-router-dom";
import Picture from "../Picture/Picture";
import "./FilmListItem.scss";

const FilmListItem = ({ film }) => {
    let navigate = useNavigate();

    const handleOpenFilm = () => {
        navigate("/film/" + film.id);
    };

    return (
        <li className="FilmListItem" onClick={handleOpenFilm}>
            <h3>{film.title}</h3>
            <Picture src={film.cover} size="big" />
        </li>
    );
};

export default FilmListItem;
