import React, { useState } from "react";
import "./FavoriteStar.scss";

const FavoriteStar = ({ onFavClick }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const markAsFavorite = () => {
        if (!isFavorite) {
            setIsFavorite(true);
            onFavClick();
        }
    };
    return (
        <div
            className="absolute z-10 text-3xl right-8"
            onClick={markAsFavorite}
        >
            {isFavorite ? (
                <span className="text-yellow-500 drop-shadow-md">&#9733;</span>
            ) : (
                <span>&#9734;</span>
            )}
        </div>
    );
};

export default FavoriteStar;
