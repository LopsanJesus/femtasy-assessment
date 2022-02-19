import React from "react";
import { shallow, mount, render } from "enzyme";
import Film from "./Film";

const mockFilm = {
    title: "Avatar",
    director: "James Cameron",
    cover: "image.jpg",
};

describe("Film", () => {
    test("Film div exists", () => {
        const wrapper = shallow(<Film film={mockFilm} />);
        expect(wrapper.find("h3").text()).toBe(mockFilm.title);
        expect(wrapper.find("img").prop("src")).toBe(mockFilm.cover);
    });

    test("", () => {
        const wrapper = shallow(<Film film={mockFilm} />);
        expect(wrapper.find("h3").text()).toBe(mockFilm.title);
        expect(wrapper.find("img").prop("src")).toBe(mockFilm.cover);
    });
});
