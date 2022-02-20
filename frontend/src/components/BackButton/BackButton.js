import React from "react";
import "./BackButton.scss";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
    let navigate = useNavigate();

    return (
        <button
            className="sticky bottom-0 w-4/5 py-1 mt-10 font-bold bg-gray-200 rounded-md md:w-1/2"
            onClick={() => navigate(-1)}
        >
            Back
        </button>
    );
};

export default BackButton;
