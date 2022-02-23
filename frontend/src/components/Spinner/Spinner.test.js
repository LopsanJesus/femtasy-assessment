import React from "react";
import { shallow } from "enzyme";
import Spinner from "./Spinner";

describe("Spinner", () => {
    test("Spinner div exists", () => {
        const wrapper = shallow(<Spinner />);
        expect(wrapper.prop("className")).toContain("Spinner");
    });

    test("renders svg", () => {
        const wrapper = shallow(<Spinner />);
        expect(wrapper.find("svg").exists()).toBeTruthy();
    });
});
