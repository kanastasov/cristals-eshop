import React from "react";
import { Radio } from "antd";

import { mountWithStore } from "../../../../utils/test/testHelper";
import MenuRadioSection from "../MenuMineralsRadioSection";
import { price } from "../../MenuMineralsData";

describe("MenuRadioSection", () => {
    it("should render correctly", () => {
        const wrapper = mountWithStore(<MenuRadioSection title={"Price"} onChange={jest.fn()} data={price} />);
        expect(wrapper.text().includes("Price")).toBe(true);
        expect(wrapper.find(Radio).length).toEqual(5);
    });
});
