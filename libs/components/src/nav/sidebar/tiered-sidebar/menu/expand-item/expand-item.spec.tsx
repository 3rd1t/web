import React from "react";
import { render } from "@testing-library/react";

import ExpandIcon from "./expand-item";

describe("ExpandIcon", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ExpandIcon />);
    expect(baseElement).toMatchSnapshot();
  });
});
