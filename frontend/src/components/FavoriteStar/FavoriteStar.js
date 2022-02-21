import React, { useState } from "react";
import "./FavoriteStar.scss";

const FavoriteStar = ({ initialValue, onFavClick }) => {
    const [isFavorite, setIsFavorite] = useState(initialValue);

    const markAsFavorite = () => {
        setIsFavorite(!isFavorite);
        onFavClick(!isFavorite);
    };
    return (
        <div
            className="text-3xl cursor-pointer md:text-6xl"
            onClick={markAsFavorite}
        >
            {isFavorite ? (
                <span className="text-star drop-shadow-md">&#9733;</span>
            ) : (
                <span>&#9734;</span>
            )}
        </div>
    );
};

export default FavoriteStar;
