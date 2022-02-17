import { gql } from "@apollo/client";

export const GET_ALL_FILMS = gql`
    query Films {
        films {
            title
        }
    }
`;
