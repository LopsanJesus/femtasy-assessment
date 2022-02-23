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
import Picture from "../Picture/Picture";

const Character = () => {
    let params = useParams();
    let characterId = !isNaN(parseInt(params.characterId))
        ? parseInt(params.characterId)
        : 1;

    const { loading, error, data } = useQuery(GET_CHARACTER, {
        variables: { id: characterId },
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
        <div className="Character">
            <div className="relative z-10 float-right mr-4 md:mr-10">
                <FavoriteStar
                    initialValue={StorageHelper.isFavorited(
                        params.characterId,
                        storeName
                    )}
                    onFavClick={onFavClick}
                />
            </div>
            <h3 className="m-4 text-3xl font-bold film-title drop-shadow-md">
                {data.character.name}
            </h3>
            <div className="md:grid md:grid-cols-2">
                <div className="my-6 lg:px-14">
                    <Picture src={data.character.picture} size="big" />
                </div>
                <div className="leading-10 md:mt-10 md:text-3xl">
                    <p>
                        <span className="font-bold">Gender: </span>
                        {data.character.gender}
                    </p>
                    <p>
                        <span className="font-bold">Homeworld: </span>
                        {data.character.homeworld}
                    </p>
                    <div className="mt-4">
                        <p className="font-bold">Description:</p>
                        <p>
                            Birth year: {data.character.description.birthYear}
                        </p>
                        <p>Height: {data.character.description.height}cm</p>
                        <p>Weight: {data.character.description.mass}kg</p>
                        <p>
                            Skin color: {data.character.description.skinColor}
                        </p>
                        <p>
                            Hair color: {data.character.description.hairColor}
                        </p>
                        <p>Eye color: {data.character.description.eyeColor}</p>
                    </div>
                </div>
            </div>

            <BackButton />
        </div>
    );
};

export default Character;
