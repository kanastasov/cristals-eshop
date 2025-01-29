import React from "react";
import { Checkbox } from "antd";

import { mountWithStore } from "../../../../utils/test/testHelper";
import MenuCheckboxSection from "../MenuWitchcraftCheckboxSection";
import { CheckboxCategoryFilter } from "../../MenuWitchcraft";
import { perfumer } from "../../MenuWitchcraftData";

describe("MenuCheckboxSection", () => {
    it("should render correctly", () => {
        const wrapper = mountWithStore(
            <MenuCheckboxSection
                title={"Brand"}
                onChange={jest.fn()}
                category={CheckboxCategoryFilter.PERFUMERS}
                data={perfumer}
                selectedValues={[]}
            />
        );
        expect(wrapper.text().includes("Brand")).toBe(true);
        expect(wrapper.find(Checkbox).length).toEqual(18);
    });
});
