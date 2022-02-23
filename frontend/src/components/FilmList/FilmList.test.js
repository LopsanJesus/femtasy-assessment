import React from "react";
import FilmList from "./FilmList";
import { MockedProvider } from "@apollo/client/testing";
import TestRenderer from "react-test-renderer";
import { GET_ALL_FILMS } from "../../queries/films";
const { act } = TestRenderer;

jest.mock("../BackButton/BackButton", () => () => {
    const BackButton = "default-awesome-component-mock";
    return <BackButton />;
});

jest.mock("../FilmListItem/FilmListItem", () => () => {
    const FilmListItem = "default-awesome-component-mock";
    return <FilmListItem />;
});

const mockFilmList = {
    films: [
        {
            id: 1,
            title: "A New Hope",
            cover: "https://starwars-visualguide.com/assets/img/films/1.jpg",
        },
        {
            id: 2,
            title: "The Empire Strikes Back",
            cover: "https://starwars-visualguide.com/assets/img/films/2.jpg",
        },
        {
            id: 3,
            title: "Return of the Jedi",
            cover: "https://starwars-visualguide.com/assets/img/films/3.jpg",
        },
        {
            id: 4,
            title: "The Phantom Menace",
            cover: "https://starwars-visualguide.com/assets/img/films/4.jpg",
        },
        {
            id: 5,
            title: "Attack of the Clones",
            cover: "https://starwars-visualguide.com/assets/img/films/5.jpg",
        },
        {
            id: 6,
            title: "Revenge of the Sith",
            cover: "https://starwars-visualguide.com/assets/img/films/6.jpg",
        },
    ],
};

const mocks = [
    {
        request: {
            query: GET_ALL_FILMS,
        },
        result: {
            data: mockFilmList,
        },
    },
];

describe("FilmList", () => {
    it("renders film list", async () => {
        const component = TestRenderer.create(
            <MockedProvider mocks={mocks} addTypename={false}>
                <FilmList />
            </MockedProvider>
        );

        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 3000));
        });

        expect(
            component.root.findAllByType("div")[2].props.className
        ).toContain("FilmListContent");
    });

    it("renders six films", async () => {
        const component = TestRenderer.create(
            <MockedProvider mocks={mocks} addTypename={false}>
                <FilmList />
            </MockedProvider>
        );

        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 3000));
        });

        expect(component.root.findAllByType("div")[2].children.length).toBe(6);
    });
});
