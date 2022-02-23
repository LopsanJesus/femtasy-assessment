import React from "react";
import { shallow } from "enzyme";
import Picture from "./Picture";

const mockSrc = "https://starwars-visualguide.com/assets/img/films/1.jpg";
const mockSize = "big";

describe("Picture", () => {
    test("Picture div exists", () => {
        const wrapper = shallow(<Picture src={mockSrc} size={mockSize} />);
        expect(wrapper.prop("className")).toContain("Picture");
    });

    test("renders svg", () => {
        const wrapper = shallow(<Picture src={mockSrc} size={mockSize} />);
        expect(wrapper.find("img").exists()).toBeTruthy();
    });
});
