import React from "react";
import { shallow } from "enzyme";
import FavoriteStar from "./FavoriteStar";

describe("FavoriteStar", () => {
    test("can click on favoriteStar", () => {
        const wrapper = shallow(
            <FavoriteStar initialValue={false} onFavClick={() => {}} />
        );

        wrapper.simulate("click");

        expect(wrapper.find("span").prop("className")).toContain("text-star");
    });

    test("can unclick on favoriteStar", () => {
        const wrapper = shallow(
            <FavoriteStar initialValue={true} onFavClick={() => {}} />
        );

        wrapper.simulate("click");

        expect(wrapper.find("span").prop("className")).toBeUndefined();
    });
});
