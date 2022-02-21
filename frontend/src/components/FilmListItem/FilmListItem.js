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
        <div className="m-2 mb-4 cursor-pointer" onClick={handleOpenFilm}>
            <h3 className="p-4 text-xl font-bold">{film.title}</h3>
            <Picture src={film.cover} size="big" />
        </div>
    );
};

export default FilmListItem;
