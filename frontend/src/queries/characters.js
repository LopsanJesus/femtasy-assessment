import { gql } from "@apollo/client";

export const GET_CHARACTER = gql`
    query Character($id: Int!) {
        character(id: $id) {
            id
            name
            gender
            homeworld
            picture
            description {
                birthYear
                height
                mass
                skinColor
                hairColor
                eyeColor
            }
        }
    }
`;
