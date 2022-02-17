import React from "react";
import "./Test.scss";
import { useQuery } from "@apollo/client";

import { GET_ALL_FILMS } from "../../queries/films";

import Button from "react-bootstrap/Button";

const Test = ({}) => {
    const { loading, error, data } = useQuery(GET_ALL_FILMS);

    if (error) {
        console.log(error);
    } else if (data) {
        console.log(data);
    }

    return (
        <div className="Test">
            {loading ? (
                <p>Cargando</p>
            ) : (
                <div>
                    <Button variant="info">Boton</Button>
                    <ol>
                        {data.films.map((film) => {
                            return <li>{film.title}</li>;
                        })}
                    </ol>
                </div>
            )}
        </div>
    );
};

export default Test;
