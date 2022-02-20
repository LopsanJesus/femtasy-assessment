import React from "react";
import "./ErrorMessage.scss";

const ErrorMessage = ({ children }) => {
    return <div className="text-red-500">{children}</div>;
};

export default ErrorMessage;
