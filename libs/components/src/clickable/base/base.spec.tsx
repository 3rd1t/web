import React from "react";
import { render } from "@testing-library/react";

import Base from "./base";

describe("Base", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Base />);
    expect(baseElement).toBeTruthy();
  });
});
