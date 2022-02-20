import React from "react";
import { useNavigate } from "react-router-dom";
import Picture from "../Picture/Picture";
import "./CharacterListItem.scss";

const CharacterListItem = ({ character }) => {
    let navigate = useNavigate();

    const handleOpenCharacter = () => {
        navigate("/character/" + character.id);
    };

    return (
        <div onClick={handleOpenCharacter}>
            <span>{character.name}</span>
            <Picture src={character.picture} size="small" />
        </div>
    );
};

export default CharacterListItem;
