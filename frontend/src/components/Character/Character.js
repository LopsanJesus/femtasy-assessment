import React from "react";
import "./Character.scss";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_CHARACTER } from "../../queries/characters";
import BackButton from "../BackButton/BackButton";
import Spinner from "../Spinner/Spinner";
import FavoriteStar from "../FavoriteStar/FavoriteStar";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import StorageHelper from "../../helpers/storage";

const Character = () => {
    let params = useParams();

    const { loading, error, data } = useQuery(GET_CHARACTER, {
        variables: { id: parseInt(params.characterId) },
    });

    const storeName = "characters";

    const onFavClick = (isFavorite) => {
        isFavorite
            ? StorageHelper.addElement(params.characterId, storeName)
            : StorageHelper.deleteElement(params.characterId, storeName);
    };

    return loading ? (
        <Spinner />
    ) : error ? (
        <ErrorMessage>Server error</ErrorMessage>
    ) : (
        <div>
            <FavoriteStar
                initialValue={StorageHelper.isFavorited(
                    params.characterId,
                    storeName
                )}
                onFavClick={onFavClick}
            />
            <h3>{data.character.name}</h3>
            <p>{data.character.gender}</p>
            <BackButton />
        </div>
    );
};

export default Character;
