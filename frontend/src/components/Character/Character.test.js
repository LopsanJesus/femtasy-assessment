import React from "react";
import Character from "./Character";
import { MockedProvider } from "@apollo/client/testing";
import { GET_CHARACTER } from "../../queries/characters";
import TestRenderer from "react-test-renderer";
import Picture from "../Picture/Picture";
const { act } = TestRenderer;

jest.mock("../BackButton/BackButton", () => () => {
    const BackButton = "default-awesome-component-mock";
    return <BackButton />;
});

const mockCharacter = {
    character: {
        id: 1,
        name: "Luke Skywalker",
        gender: "male",
        homeworld: "Tatooine",
        picture: "https://starwars-visualguide.com/assets/img/characters/1.jpg",
        description: {
            birthYear: "19BBY",
            height: "172",
            mass: "77",
            skinColor: "fair",
            hairColor: "blond",
            eyeColor: "blue",
        },
    },
};

const errorMocks = [
    {
        request: {
            query: GET_CHARACTER,
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
            query: GET_CHARACTER,
            variables: {
                id: 1,
            },
        },
        result: {
            data: mockCharacter,
        },
    },
];

describe("Character", () => {
    it("shows error message", async () => {
        const component = TestRenderer.create(
            <MockedProvider mocks={errorMocks} addTypename={false}>
                <Character />
            </MockedProvider>
        );

        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 3000));
        });

        const tree = component.toJSON();
        expect(tree.children.includes("Server error")).toBe(true);
    });

    it("renders one character", async () => {
        const component = TestRenderer.create(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Character />
            </MockedProvider>
        );

        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 3000));
        });

        const h3 = component.root.findByType("h3");
        expect(h3.children.join("")).toContain("Luke Skywalker");
    });

    it("renders the film picture", async () => {
        const component = TestRenderer.create(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Character />
            </MockedProvider>
        );

        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 3000));
        });

        const img = component.root.findByType(Picture).findByType("img");
        expect(img.props.className.includes("Picture-img")).toBe(true);
    });
});
