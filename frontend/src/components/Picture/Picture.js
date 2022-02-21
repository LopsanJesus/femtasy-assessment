import React from "react";
import "./Picture.scss";

const Picture = ({ src, size }) => {
    return (
        <div>
            <img
                src={src}
                alt="Star wars"
                className={`Picture m-auto h-auto ${
                    size === "big" ? "w-3/5 md:w-3/5" : "w-3/5"
                } rounded-full`}
            />
        </div>
    );
};

export default Picture;
