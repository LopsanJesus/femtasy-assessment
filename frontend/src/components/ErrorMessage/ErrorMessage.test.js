import React from "react";
import { shallow } from "enzyme";
import ErrorMessage from "./ErrorMessage";

describe("ErrorMessage", () => {
    const errorMessage = "Error message";

    test("display error message", () => {
        const wrapper = shallow(<ErrorMessage>{errorMessage}</ErrorMessage>);
        expect(wrapper.text()).toBe(errorMessage);
    });
});
