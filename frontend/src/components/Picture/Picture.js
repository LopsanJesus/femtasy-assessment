import React from "react";
import "./Picture.scss";

const Picture = ({ src, size }) => {
    return (
        <div className="Picture">
            <img
                src={src}
                alt="Star wars"
                className={`Picture-img m-auto h-auto w-3/5 ${
                    size === "big" ? "md:w-3/5" : ""
                } rounded-full`}
            />
        </div>
    );
};

export default Picture;
