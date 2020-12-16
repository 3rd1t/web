import React from "react";
import { render } from "@testing-library/react";

import TieredSidebar from "./tiered-sidebar";

describe("TieredSidebar", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<TieredSidebar />);
    expect(baseElement).toBeTruthy();
  });
});
