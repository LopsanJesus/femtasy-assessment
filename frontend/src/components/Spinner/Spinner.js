import React from "react";
import "./Spinner.scss";

const Spinner = () => {
    return (
        <div className="flex justify-center Spinner">
            <div className="w-16 h-16 mt-20">
                <span class="loader"></span>
            </div>
        </div>
    );
};

export default Spinner;
