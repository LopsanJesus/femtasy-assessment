import React from "react";
import Film from "./Film";
import { MockedProvider } from "@apollo/client/testing";
import TestRenderer from "react-test-renderer";
import { GET_FILM } from "../../queries/films";
import Picture from "../Picture/Picture";
const { act } = TestRenderer;

jest.mock("../BackButton/BackButton", () => () => {
    const BackButton = "default-awesome-component-mock";
    return <BackButton />;
});

jest.mock("../CharacterListItem/CharacterListItem", () => () => {
    const CharacterListItem = "default-awesome-component-mock";
    return <CharacterListItem />;
});

const mockFilm = {
    film: {
        id: 4,
        title: "Empires strikes back",
        director: "George Lucas",
        description:
            "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
        cover: "https://starwars-visualguide.com/assets/img/films/1.jpg",
        characters: [
            {
                id: 1,
                name: "Luke Skywalker",
                picture: "Picture-link-placeholder",
            },
            {
                id: 2,
                name: "Anakin Skywalker",
                picture: "Picture-link-placeholder",
            },
        ],
    },
};

const errorMocks = [
    {
        request: {
            query: GET_FILM,
            variables: {
                id: "abc",
            },
        },
        error: new Error("An error occurred"),
    },
];

const mocks = [
    {
        request: {
            query: GET_FILM,
            variables: {
                id: 1,
            },
        },
        result: {
            data: mockFilm,
        },
    },
];

describe("Film", () => {
    it("shows error message", async () => {
        const component = TestRenderer.create(
            <MockedProvider mocks={errorMocks} addTypename={false}>
                <Film />
            </MockedProvider>
        );

        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 3000));
        });

        const film = component.toJSON();
        expect(film.children.includes("Server error")).toBe(true);
    });

    it("renders one film", async () => {
        const component = TestRenderer.create(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Film />
            </MockedProvider>
        );

        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 3000));
        });

        const h3 = component.root.findByType("h3");
        expect(h3.children.join("")).toContain("Empires strikes back");
    });

    it("renders the film cover", async () => {
        const component = TestRenderer.create(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Film />
            </MockedProvider>
        );

        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 3000));
        });

        const img = component.root.findByType(Picture).findByType("img");
        expect(img.props.className.includes("Picture-img")).toBe(true);
    });
});
