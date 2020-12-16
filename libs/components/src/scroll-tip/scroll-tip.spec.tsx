import React from "react";
import { render } from "@testing-library/react";

import ScrollTip from "./scroll-tip";

describe(" ScrollTip", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <ScrollTip className="bg-gray-900" href="#" />
    );
    expect(baseElement).toBeTruthy();
  });
});
