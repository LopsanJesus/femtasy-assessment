import React from "react";
import "./Picture.scss";

const Picture = ({ src, size }) => {
    return (
        <div>
            <img
                src={src}
                className={`Picture m-auto h-auto ${
                    size == "big" ? "w-4/5" : "w-3/5"
                } rounded-full`}
            />
        </div>
    );
};

export default Picture;
