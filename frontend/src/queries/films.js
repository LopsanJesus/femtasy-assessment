import { gql } from "@apollo/client";

export const GET_ALL_FILMS = gql`
    query getFilms {
        films {
            id
            title
            cover
        }
    }
`;

export const GET_FILM = gql`
    query getFilm($id: Int!) {
        film(id: $id) {
            id
            title
            director
            description
            cover
            characters {
                id
                name
                picture
            }
        }
    }
`;
